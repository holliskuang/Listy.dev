import FlexBetween from "../widgets/FlexBetween";
import { useRouter } from "next/router"

export default function SideBar() {
  const router = useRouter();
  return (
    <FlexBetween sx={{ width: "8vw", flexDirection: "row", flexWrap: "wrap" }}>
      <button onClick={() => router.push("/top-tracks")}> Top Tracks</button>
      <button onClick={() => router.push("/top-artists")}> Top Artists</button>
      <button onClick={() => router.push("/recently_played")}> Recently Played</button>
    </FlexBetween>
  );
}
