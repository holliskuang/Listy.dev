import React, { useState, useEffect } from "react";
import AllBlocks from "../widgets/AllBlocks";
import Header from "../components/MainHeader";
import { Button } from "@mui/material";

export default function TopBlock(AppProps: { type: any }) {
  const [time, setTime] = useState("long_term");
  const [blocks, setBlocks] = useState({});
  useEffect(() => {
    getTop();
  }, [time]);

  async function getTop() {
    if (AppProps.type != "recentlyPlayed") {
      const response = await fetch(
        `https://api.spotify.com/v1/me/top/${AppProps.type}?limit=50&time_range=${time}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setBlocks(data.items));
    } else if (AppProps.type === "recentlyPlayed") {
      await fetch(
        `http://localhost:8888/recently_played/?access_token=${localStorage.getItem(
          "access_token"
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setBlocks(data.items));
    }

    //artist - image , Name,Link , Genres ,
    // Song - image, Name, Link , Artist
    //Recently Played - image, Name, Link, Artist, Time
  }
  return (
    <div className="topBlocks">
      <Header></Header>
      <div className="songListAndButtons">
        {AppProps.type != "recentlyPlayed" && (
          <div className="timeButtons">
            <Button variant="text" onClick={() => setTime("long_term")} sx={{
              color:"#aba5c3",
              fontFamily: "Rubik, sans-serif",
              fontSize: "20px",
              fontWeight: "400",
              background: "transparent",
              fontSmooth: "antialiased",
            }}>
              All time
            </Button>
            <Button variant="text" onClick={() => setTime("medium_term")}>
              Last 6 months
            </Button>
            <Button variant="text" onClick={() => setTime("short_term")}>
              Last month
            </Button>
          </div>
        )}
        <AllBlocks data={blocks} type={AppProps.type} />
      </div>
    </div>
  );
}
