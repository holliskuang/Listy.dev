import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";
export default function FunText() {
  return (
    <Box
      className="typingContainer"
      sx={{
        color: "black",
        fontSize: "2.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Circular Spotify Tx T Bold"

      }}
    >
      <Box className="sentence" sx={{ p:"12px"}}> Create Playlists from your</Box>
      <Typewriter
        options={{
          strings: ["...", " Top Artists!", " Top Tracks!", " Recent Hits!"],
          autoStart: true,
          loop: true,
        }}
      />
    </Box>
  );
}
