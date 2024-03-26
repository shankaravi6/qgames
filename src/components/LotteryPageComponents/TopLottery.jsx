import React from "react";
import { Slide } from "react-awesome-reveal";
import LotteryCard from "./LotteryCard";
import LotteryBox from "./LotteryBox";

const TopLottery = () => {
  return (
    <div className="pt-1 pb-14 relative">
      <div className="section flex items-center justify-center flex-col gap-2">
        <Slide>
          <h1 className="title-text">Top Lotteries This Week</h1>
        </Slide>
        <div className="flex justify-center items-center pt-5 gap-20">
        <LotteryCard />
        <LotteryCard />
        <LotteryCard />
        </div>

        <div>
        <LotteryBox/>
        </div>
      </div>
    </div>
  );
};

export default TopLottery;
