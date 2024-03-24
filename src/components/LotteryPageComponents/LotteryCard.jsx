import React from 'react';
import './LotteryCard.css'
import { Button } from '@mui/material';

const LotteryCard = () => {
  return (
    <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        Make your <span>choice</span> right now!
      </h3>
      <p className="card-hover__text pb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" className="card-hover__link">
        <Button variant='contained' color='secondary'>Play Now</Button>       
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  );
}

export default LotteryCard;
