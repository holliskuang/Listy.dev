import FlexStart from "./FlexStart";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";

export default function IndividualBlock(AppProps: {
  number?: any;
  image: any;
  genres?: any;
  link: any;
  name: any;
  type: any;
  artists: any;
  timeStamp?: any;
}) {
  const { number, image, genres, link, name, type, artists } = AppProps;
  const router = useRouter();

  function adjustToLocalTime(): string {
    var localDate = new Date(AppProps.timeStamp);
    var HourMinute = localDate.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (HourMinute[0] === "0") {
      HourMinute = HourMinute.slice(1);
    }
    //if date is not today, show day of week
    if (localDate.toDateString() !== new Date().toDateString()) {
      var DayOfWeek = localDate.toLocaleString([], { weekday: "short" });
      HourMinute = DayOfWeek + " " + HourMinute;
    }
    return HourMinute;
  }
  var time: string = adjustToLocalTime();

  function getTitleCase(str: string) {
    const titleCase = str
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return titleCase;
  }

  function applyTitleCase(arr: any) {
    let emptyArr: any = [];
    arr.map((item: any) => {
      item.map((x: any) => {
        emptyArr.push(getTitleCase(x));
      });
    });

    return emptyArr.join(" , ");
  }

  return (
    <FlexStart
      onClick={() => {
        router.push(link);
      }}
      sx={{
        padding: "10px 20px",
        borderRadius: "1%",
        mb: "10px",
        "&:hover": { cursor: "pointer", filter: "brightness(110%)" },
      }}
      className={`individualBlock${AppProps.type}`}
    >
      <FlexStart sx={{ ml: "30px" }}>
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            mr: "10px",
            color: "#50496d",
          }}
        >
          {number}
        </Box>
        <div className="crop">
          <img className="listImage" src={image} />
        </div>
      </FlexStart>

      {type === "artists" && (
        <FlexStart className="tracksBlock">
          <Box className="tracksNameArtists" sx={{ ml: "15px" }}>
            <Box sx={{ width: "100%", fontSize: "18px" }}>{name}</Box>
            <Box>{applyTitleCase([genres.slice(0, 3)])}</Box>
          </Box>
        </FlexStart>
      )}

      {type === "tracks" && (
        <FlexStart className="tracksBlock">
          <Box className="tracksNameArtists" sx={{ ml: "15px" }}>
            <Box sx={{ width: "100%", fontSize: "18px" }}>{name}</Box>
            <Box>{artists}</Box>
          </Box>
        </FlexStart>
      )}

      {type === "recentlyPlayed" && (
        <FlexStart className="recentlyPlayedBlock">
          <Box className="RPNameArtists" sx={{ ml: "20px" }}>
            <Box sx={{ width: "100%", fontSize: "18px" }}>{name}</Box>
            <Box sx={{ fontWeight: "0" }}>{artists}</Box>
          </Box>
          <Box className="RPTime">{time}</Box>
        </FlexStart>
      )}
    </FlexStart>
  );
}
