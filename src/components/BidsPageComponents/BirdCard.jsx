import React from 'react';
import './BirdCard.css'

const BirdCard = () => {
  return (
    <div class="card-hover">
    <div class="card-hover__content">
      <h3 class="card-hover__title">
        Make your <span>choice</span> right now!
      </h3>
      <p class="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" class="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div class="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  </div>
  );
}

export default BirdCard;