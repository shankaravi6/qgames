import React from "react";
import "./CreatorCard.css";
import { Button } from "@mui/material";

const CreatorCard = () => {
  return (
    <div className="cr-card flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <div className="cr-img">
          <img
            src="https://randomuser.me/api/portraits/men/29.jpg"
            style={{ borderRadius: "50%" }}
            width="100%"
          />
          
        </div>
        <div className="flex flex-col">
        <span className="text-pink-950 ">John Wick</span>
        <span className="text-cyan-950 text-sm">60 Items</span>
</div>
      </div>
      <div>
        <Button variant="contained" color="secondary">
          Follow
        </Button>
      </div>
    </div>
  );
};

export default CreatorCard;
