import React from "react";
import './BidCard.css'
import { Button } from "@mui/material";

const BidCard = () => {
  return (
    <div id="container">
      <div class="product-details flex flex-col">
        <h1>Brighten IQ</h1>
        <h2 className="text-pink-900">Ultra Power Core</h2>
        <div className="flex gap-5 items-center pt-6">
          <div style={{ width: "50px", height: "50px" }}>
            <img
              src="https://randomuser.me/api/portraits/men/47.jpg"
              width="100%"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-purple-900 text-xl">John Wick</span>
            <span className="text-gray-700 text-xs">United States</span>
          </div>
        </div>
        <div className="flex gap-2 flex-col pt-8">
          <div className="flex justify-between w-full">
            <span className="text-sky-950">Auction Time</span>
            <span className="text-sky-950">3h 1m 50s</span>
          </div>
          <div className="flex justify-between w-full">
            <span className="text-sky-950">Current Bid</span>
            <span className="text-sky-950">0.05 ETH</span>
          </div>
        </div>
        <div className="pt-5">
          <Button variant="contained" color="secondary" fullWidth>
            Place a bid
          </Button>
        </div>
      </div>

      <div class="product-image">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div class="info p-5">
          <h2 className="title-text text-2xl">Description</h2>
          <ul className="text-base space-y-2 pt-5">
            <li>
              <strong>Height : </strong>5 Ft{" "}
            </li>
            <li>
              <strong>Shade : </strong>Olive green
            </li>
            <li>
              <strong>Decoration: </strong>balls and bells
            </li>
            <li>
              <strong>Material: </strong>Eco-Friendly
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BidCard;
