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

  function adjustToLocalTime() :string{
    var localDate= new Date(AppProps.timeStamp);
    var HourMinute= localDate.toLocaleString([],{hour: "2-digit", minute: "2-digit"});
    if (HourMinute[0] === "0") {
      HourMinute = HourMinute.slice(1);
    }
    //if date is not today, show day of week
    if (localDate.toDateString() !== new Date().toDateString()) {
      var DayOfWeek = localDate.toLocaleString([],{weekday: "short"});
      HourMinute = DayOfWeek + " " + HourMinute;
    }
    return HourMinute;
  }
  var time:string= adjustToLocalTime();

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
      sx={{ "&:hover": { cursor: "pointer" } }}
    >
      <FlexStart>
        {number}
        <Box
          component="img"
          sx={{
            height: 80,
            width: 80,
          }}
          src={image}
        />
      </FlexStart>

      {type === "artists" && (
        <FlexStart
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: "100%" }}>{name}</Box>
          <Box>{applyTitleCase([genres.slice(0, 3)])}</Box>
        </FlexStart>
      )}

      {type === "tracks" && (
        <FlexStart
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ width: "100%" }}>{name}</Box>
          <Box>{artists}</Box>
        </FlexStart>
      )}

      {type === "recentlyPlayed" && (
        <FlexStart     sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "100%" }}>{name}</Box>
        <Box>{artists}</Box>
        <Box>{time}</Box>
      </FlexStart>
      )}
    </FlexStart>
  );
}
