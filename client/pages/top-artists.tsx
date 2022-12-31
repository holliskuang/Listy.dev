import SideBar from "../components/SideBar";
import TopBlock from "../components/TopBlock";
import FlexBetween from "../widgets/FlexBetween";
import React, { useState } from 'react';

export default function topArtists() {

  return (
    <FlexBetween
      sx={{ flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}
    >
      <SideBar></SideBar>
      <TopBlock type="artists"></TopBlock>
    </FlexBetween>
  );
}
