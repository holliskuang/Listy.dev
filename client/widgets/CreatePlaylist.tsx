import FlexBetween from "./FlexBetween";
import FormDialog from "./FormDialog";
import { useState } from "react";

export default function CreatePlaylist(props: {
  type: string;
  data: string | unknown[];
  sx?: any;
}) {
  const [playlistTitle, setPlaylistTitle] = useState(null);

  const createAndAddTracks = async () => {
    await fetch(`https://api.spotify.com/v1/users/1211305298/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        name: `${playlistTitle}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

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
      ></FormDialog>
    </FlexBetween>
  );
}
