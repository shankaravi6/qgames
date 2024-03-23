import React from "react";
import "../../App.css";
import CardComponent from "../WinnersComponents/CardComponent";
import { Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
const WinnersSecion = () => {
  return (
    <div className="pt-36 pb-14 relative">
    
    <div className='pointer' style={{top:"100px", left:"-15%", zIndex:'2000'}}></div>
      <div className="section flex items-center justify-center flex-col gap-2">
      <Slide>
        <span className="caption-text">
          Professional Predictions,Clear Profits,ContJackInTheBoxed Investments.
        </span>
        <span className="sub-text text-xl">
          The Place where World's best tipsters carefully research coming
          matches and email you the tips they are most confident in.
        </span>
        <h1 className="title-text">Top Tipsters This Week</h1>
</Slide>
        <div className="pt-10 flex gap-20">
        <JackInTheBox duration={1000}>
          <CardComponent/>
          </JackInTheBox>
          <JackInTheBox duration={2000}>
          <CardComponent/>
          </JackInTheBox>
          <JackInTheBox duration={2500}>
          <CardComponent/>
          </JackInTheBox>
        </div>
      </div>
    </div>
  );
};

export default WinnersSecion;
