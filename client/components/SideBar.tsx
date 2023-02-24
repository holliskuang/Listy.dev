import FlexBetween from "../widgets/FlexBetween";
import { useRouter } from "next/router";
import Link from "next/link";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "ccss",
  prepend: true,
});

export default function SideBar() {
  const router = useRouter();
  return (
    <CacheProvider value={cache}>
      <div className="App-navigation">
        <div className="ui-section-header__layout ui-layout-flex">
          {/*<-- LOGO -->*/}

          <Link href="/">
            <img
              src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673004204/letter-l_pcq0m6.png"
              height="80px"
              width="80px"
              loading="lazy"
            />
          </Link>
          {/*<!-- MENU --> */}
        </div>

        <FlexBetween
          sx={{
            height: "30vh",
            flexDirection: "column",
            justifyContent: "space-Between",
          }}
        >
          {/*
        https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/clock_dlnmhg.png
      https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/music_bgxg2f.png*/}
          <ul>
            <li
              onClick={() => router.push("/top-tracks")}
              className={
                router.pathname == "/top-tracks"
                  ? "App-navigation__link active"
                  : "App-navigation__link"
              }
            >
              <img
                className="icon"
                src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/microphone_kobhxr.png"
              />
              <span className="sideText">Top Tracks</span>
            </li>
            <li
              onClick={() => router.push("/top-artists")}
              className={
                router.pathname == "/top-artists"
                  ? "App-navigation__link active"
                  : "App-navigation__link"
              }
            >
              <img
                className="icon"
                src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/clock_dlnmhg.png"
              />
              <span className="sideText">Top Artists</span>
            </li>
            <li
              onClick={() => router.push("/recently_played")}
              className={
                router.pathname == "/recently_played"
                  ? "App-navigation__link active"
                  : "App-navigation__link"
              }
            >
              <img
                className="icon"
                src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/music_bgxg2f.png"
              />
              <span className="sideText">Recent</span>
            </li>
          </ul>
        </FlexBetween>
      </div>
    </CacheProvider>
  );
}
