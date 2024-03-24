import React from 'react';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PolicyIcon from '@mui/icons-material/Policy';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import usePalette from '../../ThemeProvider';
import { Flip, JackInTheBox, Roll, Rotate } from 'react-awesome-reveal';
const FindSection = () => {
  const palette = usePalette();

  return (
    <>
    <div className="flex flex-col justify-center items-center w-full pt-2">
      <h1 className="title-text">
        Discover, Collect, Sell and Create your Own Bid
      </h1>
      <span className="caption-text">3 steps to go to place to bids</span>
    </div>
    <div className="flex gap-20 justify-center items-center pt-14">
    <Roll>
      <div className="bids-box flex justify-center items-center">
        <div className="bids-top">
          <span className="text-3xl">01</span>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 p-5">
          <AccountBalanceWalletIcon
            style={{ fontSize: "75px", color: `${palette.grad}` }}
          />
          <div className="text-orange-200 text-3xl text-center ">
            Connet Wallet
          </div>
        </div>
      </div>
      </Roll>
      <Roll>
      <div className="bids-box flex justify-center items-center">
        <div className="bids-top">
          <span className="text-3xl">02</span>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 p-5">
          <PolicyIcon
            style={{ fontSize: "75px", color: `${palette.grad}` }}
          />
          <div className="text-orange-200 text-3xl text-center ">
            Find Your Bids
          </div>
        </div>
      </div>
      </Roll>
      <Roll>
      <div className="bids-box flex justify-center items-center">
        <div className="bids-top">
          <span className="text-3xl">03</span>
        </div>
        <div className="flex justify-center items-center flex-col gap-5 p-5">
          <AddShoppingCartIcon
            style={{ fontSize: "75px", color: `${palette.grad}` }}
          />
          <div className="text-orange-200 text-3xl text-center ">
            Place To Order
          </div>
        </div>
      </div>
      </Roll>
    </div>
    <div className="flex justify-center items-center pt-6">
      <button
        className="main-btn"
        style={{
          background: `linear-gradient(to right, ${palette.grad}, ${palette.gradmain})`,
          color: "#dfe8e5",
          marginTop: "20px",
        }}
      >
        Explore Bids
      </button>
    </div>
  </>
  );
}

export default FindSection;
