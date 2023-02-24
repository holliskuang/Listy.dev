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

  const renderBlocks = () => {
    if (AppProps.type === "recentlyPlayed") {
      return (
        <div className="topBlocksRecentlyPlayed">
          <Header type={AppProps.type}></Header>
          <div className="songListAndButtons">
            <AllBlocks data={blocks} type={AppProps.type} />
          </div>
        </div>
      );
    } else if (AppProps.type === "artists") {
      return (
        <div className="topBlocksArtists">
          <Header type={AppProps.type}></Header>
          <div className="songListAndButtons">
            <TimeButtons select={time} onSelect={setTime} />

            <AllBlocks data={blocks} type={AppProps.type} />
          </div>
        </div>
      );
    } else if (AppProps.type === "tracks") {
      return (
        <div className="topBlocksTracks">
          <Header type={AppProps.type}></Header>
          <div className="songListAndButtons">
            <TimeButtons select={time} onSelect={setTime} />

            <AllBlocks data={blocks} type={AppProps.type} />
          </div>
        </div>
      );
    }
  };
  async function getTop() {
    if (AppProps.type != "recentlyPlayed") {
      try {
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
      } catch (error) {
        console.log(error);
      }
    } else if (AppProps.type === "recentlyPlayed") {
      await fetch(
        `https://us-central1-listi-f7e6a.cloudfunctions.net/app/recently_played/?access_token=${localStorage.getItem(
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
  return <>{renderBlocks()}</>;
}
