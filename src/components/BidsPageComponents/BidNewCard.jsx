import React from 'react';
import './BidNewCard.css'
import { Button } from '@mui/material';

const BidNewCard = () => {
  return (
    <div>
      <div className='bid-box'>
        <div className='bid-img'>
        <img src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' width='100%' style={{borderRadius:"10px"}} />
        <div className='bid-user'>
            <img src='https://randomuser.me/api/portraits/men/32.jpg' width='100%' style={{borderRadius:"50%"}}/>
        </div>
        </div>
        <div className='pt-5'>
            <h1 className='text-2xl text-amber-900'>Light Wave</h1>
        </div>
        <div className='flex flex-col gap-2 pt-5'>
            <div className='flex gap-5 justify-between'>
                <span className=''>Auction Time</span>
                <span className='text-blue-700'>3h 1m 50s</span>
            </div>
            <div className='flex gap-5 justify-between'>
                <span className=''>Current Bid</span>
                <span className='text-green-700'>0.15 ETH</span>
            </div>
        </div>
        <div className='flex justify-between pt-5 gap-5'>
            <Button variant='contained' color='warning' fullWidth>Place Bid</Button>
            <Button variant='outlined' color='warning' style={{border:"2px solid #e65100",color:"#e65100"}} fullWidth>Details</Button>

        </div>
      </div>
    </div>
  );
}

export default BidNewCard;
