import React from "react";
import FindSection from "../components/BidsPageComponents/FindSection";
import AllBidsSection from "../components/BidsPageComponents/AllBidsSection";
import TrendBids from "../components/BidsPageComponents/TrendBids";
import CreatorsSection from "../components/BidsPageComponents/CreatorsSection";


const BidsPage = () => {
  return (
    <>
        <FindSection/>
        <TrendBids/>
        <AllBidsSection/>
        <CreatorsSection/>
    </>
  );
};

export default BidsPage;
