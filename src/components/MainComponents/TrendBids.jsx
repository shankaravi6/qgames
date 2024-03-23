import React from "react";

import BirdCard from "../BidsComponents/BirdCard";
import { Slide } from "react-awesome-reveal";

const TrendBids = () => {
  return (
    <div
      className="pt-32 pb-6"
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
      <div className="flex flex-row pl-16 pr-16 gap-20">
        <BirdCard />
        <BirdCard />
      </div>
    </div>
  );
};

export default TrendBids;
