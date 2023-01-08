import FlexBetween from "../widgets/FlexBetween";
import SideBar from "../components/SideBar";
import TopBlock from "../components/TopBlock";
export default function topTracks() {
  return (
    <FlexBetween
      sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}
      className="topTracks"
    >
      <SideBar></SideBar>
      <TopBlock type="tracks" ></TopBlock>
    </FlexBetween>
  );
}
