import React from "react";
import market from "../../config/market";
import HomePageDefaul from "./home-one";

export default function HomePage() {
  switch (market.config.home) {
    case 1:
      return <HomePageDefaul key="1" />;
    default:
      return <HomePageDefaul key="1" />;
  }
}
