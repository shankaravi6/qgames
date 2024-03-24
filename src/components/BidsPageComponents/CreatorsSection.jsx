import React from "react";
import { Slide } from "react-awesome-reveal";
import CreatorCard from "./CreatorCard";

const CreatorsSection = () => {
  return (
    <div className="pt-36 pb-14 relative">
      <div
        className="pointer"
        style={{ top: "50px", left: "-15%", zIndex: "2000" }}
      ></div>
      <div className="section flex items-center justify-center flex-col gap-2">
        <Slide>
          <span className="caption-text">
            Professional Predictions,Clear Profits,ContJackInTheBoxed
            Investments.
          </span>
          <h1 className="title-text">Top Creators</h1>
        </Slide>
      </div>
      <div className="flex flex-col gap-14 pt-14">
        <div className="section flex gap-20 justify-between items-center">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
        <div className="section flex gap-20 justify-between items-center">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
        <div className="section flex gap-20 justify-between items-center">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
      </div>
    </div>
  );
};

export default CreatorsSection;
