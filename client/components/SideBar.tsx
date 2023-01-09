import FlexBetween from "../widgets/FlexBetween";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="ui-layout-container-sidebar">
      <div className="ui-section-header__layout ui-layout-flex">
        {/*<-- LOGO -->*/}

        <a href="#" role="link" aria-label="#">
          <img
            src="https://res.cloudinary.com/dd97ovnmi/image/upload/v1673004204/letter-l_pcq0m6.png"
            height="80px"
            width="80px"
            loading="lazy"
          />
        </a>
        {/*<!-- MENU --> */}
      </div>

      <FlexBetween
        sx={{
          mt: 10,
          height: "30vh",
          flexDirection: "column",
          justifyContent: "space-Between",
        }}
      >
        {/*https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/microphone_kobhxr.png
        https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/clock_dlnmhg.png
      https://res.cloudinary.com/dd97ovnmi/image/upload/v1673254845/music_bgxg2f.png*/}
        <button onClick={() => router.push("/top-tracks")}> Top Tracks</button>
        <button onClick={() => router.push("/top-artists")}>
          {" "}
          Top Artists
        </button>
        <button onClick={() => router.push("/recently_played")}>
          {" "}
          Recently Played
        </button>
      </FlexBetween>
    </div>
  );
}
