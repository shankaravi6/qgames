import React from "react";
import "../../App.css";
import { Fade } from "react-awesome-reveal";


const Cards = () => {
  return (
    <Fade direction="up">
    <div className="flex justify-center items-center gap-20">
      <div className="card-box flex justify-center items-center flex-col gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/abwrkdvl.json"
          trigger="loop"
          delay="1000"
          colors="primary:#f2f2f2,secondary:#34c8a0"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        <h1 className="title-text text-5xl">17,900</h1>
        <span className="sub-text text-xl text-green-100">Total Profit</span>
      </div>
      <div className="card-box flex justify-center items-center flex-col gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/ofwxettw.json"
          trigger="loop"
          delay="1000"
          colors="primary:#34c8a0,secondary:#f2f2f2"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        <h1 className="title-text text-5xl">17,900</h1>
        <span className="sub-text text-xl text-green-100">Total Profit</span>
      </div>
      <div className="card-box flex justify-center items-center flex-col gap-3">
        <lord-icon
          src="https://cdn.lordicon.com/zlbisnuz.json"
          trigger="loop"
          delay="1000"
          colors="primary:#34c8a0,secondary:#f2f2f2"
          style={{ width: "150px", height: "150px" }}
        ></lord-icon>
        <h1 className="title-text text-5xl">17,900</h1>
        <span className="sub-text text-xl text-green-100">Total Profit</span>
      </div>
    </div>
    </Fade>
  );
};

export default Cards;
