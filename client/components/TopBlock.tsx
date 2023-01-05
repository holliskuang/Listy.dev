import React, { useState, useEffect } from "react";
import AllBlocks from "../widgets/AllBlocks";

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
    <div>
      <button onClick={() => setTime("long_term")}>All time</button>
      <button onClick={() => setTime("medium_term")}>Last 6 months</button>
      <button onClick={() => setTime("short_term")}>Last month</button>
      <AllBlocks data={blocks} type={AppProps.type} />
    </div>
  );
}
