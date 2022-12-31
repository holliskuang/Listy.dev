import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function CallBack() {
  const router = useRouter();
  useEffect(getCode, []);
  // get accessCode from url, store to localStorage, call function once with useEffect
  function getCode() {
    let access_token: any = null;
    let refresh_token: any = null;

    const queryString = window.location.search;
    console.log(queryString);
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      access_token = urlParams.get("access_token");
      refresh_token = urlParams.get("refresh_token");
    }
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }

  const limit: number = 20;
  const timeRange: string = "medium_term";
  async function getTracks() {
    const response = await fetch(
      `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=${timeRange}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    const responseData = response.json();
    console.log(responseData);
  }

  return (
    <div>
      <button onClick={() => router.push("/top-tracks")}> Top Tracks</button>
      <button onClick={() => router.push("/top-artists")}> Top Artists</button>
      <button onClick={() => router.push("/recently-played")}> Recently Played</button>
    </div>
  );
}
