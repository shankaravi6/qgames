import React from 'react';
import manimg from '../../assets/images/man.jpeg'
import { Slide } from 'react-awesome-reveal';

const InfoSection = () => {
  return (
    <div className='pt-52 pb-10'>
      <div className='section flex gap-20 justify-center items-center w-full'>
      <Slide direction='left'>
        <div className=''>
            <img src={manimg} width='100%' height='100%'/>
        </div>
        </Slide>
        <div className='flex gap-2 justify-center items-start flex-col w-full'>
        <Slide direction='right'>

            <h6 className='caption-text'>Welcome to Q-Games</h6>
            <h1 className='title-text'>NFT Lottery Platform</h1>
            <span className='sub-text text-xl'>
            Crypto NFTlottery thinks we re taking a shot in the dark with NFTs and hope for the best. We found that the best approach to raise money is via a community raffle with a small number of participants to ensure everyone wins.We re starting with 1000NFTs and giving away 100.1 in 10 people will win 0.35ETH. First 3 will profit greatly. A profitable NFT flip.  Join us for a long, thrilling journey filled with remarkable gains. After the announcement, quickly mint NFTs.We wish you luck and hope you win 35ETH.
            </span>
            
        </Slide>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
