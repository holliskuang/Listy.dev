const functions = require("firebase-functions");
const express = require("express"); // Express web server framework
const cors = require("cors"); // CORS support
const request = require("request");
const querystring = require("querystring");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const fetch = require("node-fetch");

/* secret variables */
dotenv.config();
var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var redirect_uri = process.env.REDIRECT_URI; // Your redirect uri

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";

var app = express();

app
  .use(express.static(__dirname + "/public"))
  .use(cors())
  .use(cookieParser())
  .use(express.json())
  .use(helmet())
  .use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
  .use(morgan("common"))
  .use(bodyParser.json({ limit: "30mb", extended: true }))
  .use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/login", function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope =
    "user-read-private user-read-email user-top-read playlist-modify-public user-read-recently-played user-read-currently-playing";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

app.get("/callback*", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "https://listy.dev/callback?" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };

    request.post(authOptions, async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true,
        };

        // use the access token to access the Spotify Web API
        const aPromise = new Promise(function (resolve, reject) {
          request.get(options, function (error, response, body) {
            if (error) reject(error);
            else {
              resolve(body.id);
            }
          });
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect(
          "https://listy.dev/callback?" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
              id: await aPromise,
            })
        );
      } else {
        res.redirect(
          "https://listy.dev/callback?" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token*", function (req, res) {
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token,
      });
    }
  });
});

app.get("/recently_played*", function (req, res) {
  const access_token = req.query.access_token;

  const date = new Date();
  const time = date.getTime();
  const urlHelper = `https://api.spotify.com/v1/me/player/recently-played/?limit=50`;
  const authOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
    json: true,
  };
  async function callAPIfromBackEnd() {
    const waiting = await fetch(urlHelper, authOptions).then((res) =>
      res.json()
    );
    return waiting;
  }
  callAPIfromBackEnd().then((data) => {
    res.send(data);
  });
});

exports.app = functions.https.onRequest(app);
