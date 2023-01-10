import FlexBetween from "./FlexBetween";
import FormDialog from "./FormDialog";
import { useState, useEffect } from "react";
import AlertDialog from "./AlertDialog";
import classNames from "classnames";

export default function CreatePlaylist(props: {
  type: string;
  data: string[] | unknown[];
  sx?: any;
}) {
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [popup, setPopup] = useState(false);
  const [playlistURL, setPlaylistURL] = useState("");
  const [playlistImage, setPlaylistImage] = useState("");
  const [scrollTop, setScrollTop] = useState(true);
  // Isolate Track URIs for Top Tracks
  const trackURI = props.data.map((block: any) => block[1].uri);
  console.log(trackURI);
  // create playlist when form gets submitted
  useEffect(() => {
    if (playlistTitle != null) {
      createAndAddTracks();
      setPlaylistTitle(null);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", scrollWatcher);
    return () => {
      window.removeEventListener("scroll", scrollWatcher);
    };
  }, []);

  // create popup when url and image state is updated
  useEffect(() => {
    if (playlistURL != "" && playlistImage != "") {
      setPopup(true);
      console.log("popup is true, playlistURL != ''");
    }
  }, [playlistURL]);

  // get Top 20 Artist URI
  function getURI() {
    const uri = props.data.map((artist: any) => artist[1].uri);
    const uriSlice = uri.slice(0, 20);
    const uriId = uriSlice.map((uri: string) => uri.slice(15));
    return uriId;
  }

  // get 5 tracks from each artist uri
  async function getTrackForEachArtist() {
    const artistURIs = getURI();
    const tracks = await Promise.all(
      artistURIs.map((artistURI: string) => {
        return fetch(
          `https://api.spotify.com/v1/artists/${artistURI}/top-tracks?market=US`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
      })
    );

    const jsonTrack = await Promise.all(
      tracks.map((track: any) => track.json())
    );
    const tracksURI = jsonTrack.map((track: any) => track.tracks);
    const topTracks = tracksURI.map((track: any) => track.slice(0, 5));
    const collectionOfURIs = topTracks.map((track: any) =>
      track.map((track: any) => track.uri)
    );
    const finalURIs = collectionOfURIs.flat();
    return finalURIs;
  }

  async function createAndAddTracks() {
    // create Playlist
    const id = localStorage.getItem("id");
    await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify({
        name: `${playlistTitle}`,
        description: `Your top ${
          props.type !== `recentlyPlayed` ? props.type : "recent plays"
        } on Spotify!`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if we are creating a playlist from top tracks
        if (props.type === "tracks") {
          addToPlaylist(data.id);
          // playlist from top artists
        } else if (props.type === "artists") {
          addToPlaylist(data.id);
        } else if (props.type === "recentlyPlayed") {
          addToPlaylist(data.id);
        }
      });

    // add tracks to playlist
    async function addToPlaylist(id: string) {
      // for top tracks
      if (props.type === "tracks") {
        await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ uris: trackURI }),
        });
      }

      // for top artists
      else if (props.type === "artists") {
        await getTrackForEachArtist().then((tracks) => {
          fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify({ uris: tracks }),
          });
        });
      } else if (props.type === "recentlyPlayed") {
        const recentPlayedURI = props.data.map(
          (block: any) => block[1].track.uri
        );
        await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
          body: JSON.stringify({ uris: recentPlayedURI }),
        });
      }

      console.log("done");

      setTimeout(() => {
        createPopup(id);
      }, 1000);
    }
  }

  async function createPopup(playlistId: string) {
    await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPlaylistImage(data.images[1].url);
        setPlaylistURL(data.external_urls.spotify);
      });
  }

  function scrollWatcher() {
    if (window.pageYOffset > 0) {
      setScrollTop(false);
    } else if (window.pageYOffset === 0) {
      setScrollTop(true);
    }
  }

  return (
    <FlexBetween
      className={classNames("action-buttons", {
        "action-buttons--scrolled": !scrollTop,
      })}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <FlexBetween
        width="100%"
        sx={{ justifyContent: "center" }}
        className="action-buttons__info"
      >
        Create Your Top {props.type==="tracks" && ("Tracks") || props.type==="artists" && ("Artists") || props.type==="recentlyPlayed" && ("Recent Hits")} Playlist!
        {props.type !== "recentlyPlayed" ? (
          <FlexBetween>
            This creates a playlist from your Top-50 {props.type}{" "}
            {props.type == "artists" &&
              `with a
          track from each artist.`}
          </FlexBetween>
        ) : (
          <FlexBetween>
            This creates a playlist from your 50 most recently played tracks!
          </FlexBetween>
        )}
      </FlexBetween>
      <FormDialog
        type={props.type}
        data={props.data}
        setPlaylistTitle={setPlaylistTitle}
      ></FormDialog>
      {popup && (
        <AlertDialog url={playlistURL} img={playlistImage}></AlertDialog>
      )}
    </FlexBetween>
  );
}
