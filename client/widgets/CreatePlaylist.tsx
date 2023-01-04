import FlexBetween from "./FlexBetween";
import FormDialog from "./FormDialog";
import { useState, useEffect } from "react";
import { json } from "body-parser";
import AlertDialog from "./AlertDialog";

export default function CreatePlaylist(props: {
  type: string;
  data: string[] | unknown[];
  sx?: any;
}) {
  const [playlistTitle, setPlaylistTitle] = useState(null);
  const [popup, setPopup] = useState(false);
  var img: string = "";
  var url: string = "";
  // Isolate Track URIs for Top Tracks
  const trackURI = props.data.map((block: any) => block[1].uri);
  console.log(trackURI);
  // create playlist when form gets submitted
  useEffect(() => {
    if (playlistTitle != null) {
      createAndAddTracks();
      setPlaylistTitle(null);
    }
  }, [playlistTitle]);

  // get Every Single Artist URI
  function getURI() {
    const uri = props.data.map((artist: any) => artist[1].uri);
    return uri;
  }

  // get a track from each artist uri
  async function getTrackForEachArtist() {
    const artistURIs = getURI();
    const tracks = await Promise.all(
      artistURIs.map((artistURI: string) => {
        fetch(
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
    console.log(tracks);
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
        description: `Your top ${props.type} on Spotify!`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // if we are creating a playlist from top tracks
        if (props.type === "tracks") {
          addToPlaylist(data.id);
          // next steps: create popup that says "playlist created" and redirects to playlist
        } else if (props.type === "artists") {
          console.log("hi");
        }
      });

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
          img = data.images[1].url;
          url = data.external_urls.spotify;
          setPopup(true);
        });
    }

    // add tracks to playlist
    async function addToPlaylist(id: string) {
      await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({ uris: trackURI }),
      });
      console.log("done");
      createPopup(id);
    }
  }

  return (
    <FlexBetween
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <FlexBetween width="100%" sx={{ justifyContent: "center" }}>
        Create Your Top {props.type} Playlist
      </FlexBetween>
      <FlexBetween>
        This creates a playlist from your All time Top-50 artists with a track
        from each artist.
      </FlexBetween>
      <FormDialog
        type={props.type}
        data={props.data}
        setPlaylistTitle={setPlaylistTitle}
      ></FormDialog>
    </FlexBetween>
  );
}
