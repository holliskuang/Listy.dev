import express from "express"; // Express web server framework
import request from "request"; // "Request" library
import cors from "cors";
import querystring from "querystring";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import fetch from "node-fetch";

/* secret variables */
dotenv.config();
var client_id = process.env.client_id; // Your client id
var client_secret = process.env.client_secret; // Your secret
var redirect_uri = process.env.redirect_uri; // Your redirect uri
import { fileURLToPath } from "url";

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
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
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

app.get("/callback", function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect(
      "http://localhost:3000/callback?" +
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
          "http://localhost:3000/callback?" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token,
              id: await aPromise,
            })
        );
      } else {
        res.redirect(
          "http://localhost:3000/callback?" +
            querystring.stringify({
              error: "invalid_token",
            })
        );
      }
    });
  }
});

app.get("/refresh_token", function (req, res) {
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

console.log("Listening on 8888");
app.listen(8888);
