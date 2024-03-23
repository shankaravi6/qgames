import React from "react";

import BirdCard from "../BidsComponents/BirdCard";
import { Slide, Zoom } from "react-awesome-reveal";

const TrendBids = () => {
  return (
    <div
      className="pt-16 pb-44"
      style={{ backgroundColor: "#211801", opacity: "0.85" }}
    >
      <div className="section flex items-center justify-center flex-col gap-2">
        <Slide>
          <h1 className="title-text">Trending Bids</h1>
          <span className="sub-text text-xl">
            The Place where World's best tipsters carefully research coming
            matches are most confident in.
          </span>
        </Slide>
      </div>
      <Zoom>
      <div className="flex flex-row pl-16 pr-16 gap-20">
        <BirdCard />
        <BirdCard />
      </div>
      </Zoom>
    </div>
  );
};

export default TrendBids;
