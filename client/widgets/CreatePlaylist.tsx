import FlexBetween from "./FlexBetween";
import FormDialog from "./FormDialog";
import { useState } from "react";

export default function CreatePlaylist(props: {
  type: string;
  data: string[] | unknown[];
  sx?: any;
}) {
  const [playlistTitle, setPlaylistTitle] = useState(null);


  // get Every Single Artist URI 
  function getURI() {
    const uri = props.data.map((track: any) => track[1].uri);
    return uri;
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
        name: playlistTitle,
        description: `Your top ${props.type} on Spotify!`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        /* addToPlaylist(data.id, props.data)*/
        console.log(data.id);
      });

    // add tracks to playlist
    async function addToPlaylist(id: string, uris: string[]) {
      await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify({
          uris: props.data,
        }),
      });
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
        from each artist in random order.
      </FlexBetween>
      <FormDialog
        type={props.type}
        data={props.data}
        setPlaylistTitle={setPlaylistTitle}
        createAndAddTracks={createAndAddTracks}
      ></FormDialog>
    </FlexBetween>
  );
}
