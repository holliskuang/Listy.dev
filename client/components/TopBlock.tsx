import React, { useState, useEffect } from "react";
import AllBlocks from "../widgets/AllBlocks";

export default function TopBlock(AppProps: { type: any }) {
  const [time, setTime] = useState("long_term");
  const [typeOf, setTypeOf]= useState(AppProps.type);
  const [blocks, setBlocks] = useState({});
  useEffect(() => {
    getTop();
  }, [time,typeOf]);

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
      .then((data) => setBlocks(data.items));
  }
  //artist - image , Name,Link , Genres ,
  // Song - image, Name, Link , Artist

  return (
    <div>
      <button onClick={() => setTime("long_term")}>All time</button>
      <button onClick={() => setTime("medium_term")}>Last 6 months</button>
      <button onClick={() => setTime("short_term")}>Last month</button>
      <AllBlocks data={blocks} type={AppProps.type} />
    </div>
  );
}
