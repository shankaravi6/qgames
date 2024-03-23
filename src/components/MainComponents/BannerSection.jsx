import React from "react";
import bannerImg from "../../assets/images/banimg.jpg";
import "../../App.css";
import { Fade, Slide } from "react-awesome-reveal";
import usePalette from "../../ThemeProvider";
import Cards from "../BannerComponents/Cards";

const BannerSection = () => {
  const palette = usePalette();

  return (
    <>
    <div className="relative">
      <div className="w-full">
        <img className="ban-img" src={bannerImg} width="100%" height="100%" />
      </div>
      <div className="center-text">
        <Slide direction="down">
          <h1 className="title-text">We Process, You Win</h1>
          <p className="sub-text">
            Top Soccer Tipsters Share Their Very Best Betting Tips With You!
          </p>
        </Slide>
        <button
          className="main-btn"
          style={{
            background: `linear-gradient(to right, ${palette.grad}, ${palette.gradmain})`,
            color: "#dfe8e5",
            marginTop: "20px",
          }}
        >
          Find Tipsters
        </button>
      </div>
      <div className="bottom-cards">
        <Cards/>
      </div>
      
    </div>
  
    </>
  );
};

export default BannerSection;
