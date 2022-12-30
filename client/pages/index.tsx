import Head from "next/head";
import Image from "next/image";
import { JsonObjectExpression } from "typescript";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  function spotifyLogIn() {
    router.push(`http://localhost:8888/login`);
  }

  /*const getAccessToken = () => {
    let url: string = router.asPath;
    let search = new URL(url).searchParams;
    let access_token: any = search.get("access_token");
    let refresh_token: any = search.get("refresh_token");

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  };

  getAccessToken(); */
  return (
    <div>
      <button onClick={spotifyLogIn}>Hello</button>
    </div>
  );
}
