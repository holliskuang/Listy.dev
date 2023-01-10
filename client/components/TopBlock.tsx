import React, { useState, useEffect } from "react";
import AllBlocks from "../widgets/AllBlocks";
import Header from "../components/MainHeader";
import TimeButtons from "../widgets/TimeButtons";

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
      <Header type={AppProps.type}></Header>
      <div className="songListAndButtons">
        {AppProps.type != "recentlyPlayed" && (
          <TimeButtons select={time} onSelect={setTime} />
        )}
        <AllBlocks data={blocks} type={AppProps.type} />
      </div>
    </div>
  );
}
