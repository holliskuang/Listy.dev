import {  response } from "express";
import { crossOriginResourcePolicy } from "helmet";
import React, { useState } from "react";

export default function TopBlock(AppProps) {
  const [time, setTime] = useState("long_term");

  async function getTop() {
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
      .then((data)=> {console.log(data.items) ; return data.items});
  }

    getTop();
  function createIndividualBlocks(AppProps) {
    //artist - image , Name,Link , Genres ,
    // Song - image, Name, Link , Artist
  }

  return (
    <div>
      <button onClick={() => setTime("long_term")}>All time</button>
      <button onClick={() => setTime("medium_term")}>Last 6 months</button>
      <button onClick={() => setTime("short_term")}>Last month</button>
    </div>
  );
}
