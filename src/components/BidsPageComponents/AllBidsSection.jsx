import React from "react";
import BidCard from "../BidsComponents/BidCard";
import BirdCard from "./BirdCard";
import BidNewCard from "./BidNewCard";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import usePalette from "../../ThemeProvider";
import { bidsCategory, bidsLevel } from "./BidData";
import { Slide } from "react-awesome-reveal";

const AllBidsSection = () => {
  const palette = usePalette();
  return (
    <div>
      <div className="flex flex-row justify-between items-start w-full p-20 section">
        <div className="flex gap-10 flex-col">
        <Slide>
          <div className="filter-box">
            <span className="title-text text-4xl">Filter Matches</span>
            <div className="flex flex-col gap-5 pt-5 set-text">
              <TextField
                variant="outlined"
                color="warning"
                fullWidth
                style={{
                  border: "1.5px solid #e65100",
                  borderRadius: "5px",
                  color: "white !important",
                }}
                value="20/10/2023"
              />
              <TextField
                variant="outlined"
                color="warning"
                fullWidth
                style={{
                  border: "1.5px solid #e65100",
                  borderRadius: "5px",
                  color: "white !important",
                }}
                value="24/01/2024"
              />
              <button
                className="main-btn"
                style={{
                  background: `linear-gradient(to right, ${palette.grad}, ${palette.gradmain})`,
                  color: "#dfe8e5",
                  marginBottom: "20px",
                  borderRadius: "5px",
                }}
              >
                Submit
              </button>
            </div>
          </div>
          </Slide>
          <Slide>
          <div className="filter-box">
            <span className="title-text text-4xl">Bids Level</span>
            <div className="set-text mb-5 pt-5">
              {bidsLevel.map((data) => {
                return (
                    <div className="flex justify-between">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="warning" />}
                      label={data.name}
                    />
                  </FormGroup>
                  <span className="text-orange-200 text-lg">{data.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          </Slide>
          <Slide>
          <div className="filter-box">
            <span className="title-text text-4xl">Bids Category</span>
            <div className="set-text mb-5 pt-5">
              {bidsCategory.map((data) => {
                return (
                    <div className="flex justify-between">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="warning" />}
                      label={data.name}
                    />
                  </FormGroup>
                  <span className="text-orange-200 text-lg">{data.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          </Slide>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-14">
            <BidNewCard />
            <BidNewCard />
          </div>
          <div className="flex gap-14">
            <BidNewCard />
            <BidNewCard />
          </div>
          <div className="flex gap-14">
            <BidNewCard />
            <BidNewCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBidsSection;
