import SnackBar from "../widgets/SnackBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TopTracks from "./top-tracks";
export default function CallBack() {
  const router = useRouter();
  useEffect(getCode, []);
  // get accessCode from url, store to localStorage, call function once with useEffect
  function getCode() {
    let access_token: any = null;
    let refresh_token: any = null;
    let id: any = null;

    const queryString = window.location.search;
    console.log(queryString);
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      access_token = urlParams.get("access_token");
      refresh_token = urlParams.get("refresh_token");
      id = urlParams.get("id");
    }
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("id", id);
    router.push("/top-tracks");
  }

  return (
    <div className="callback">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
}
