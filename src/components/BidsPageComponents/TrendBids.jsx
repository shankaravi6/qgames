import React from 'react'
import { Fade } from 'react-awesome-reveal'

const TrendBids = () => {
  return (
    <Fade direction='up'>
    <div className='flex justify-center items-center pt-14 pb-5 section'>
      <div className='trend-bids flex justify-between p-2 pr-20 pl-20'>
        <div className='flex items-center gap-10'>
            <div className='flex flex-col justify-center'>
                <span className='title-text text-3xl'>24K</span>
                <span className='caption-text text-xl'>Artworks</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-green-400'>+145.09 ETH</span>
                <span className='text-pink-500'>Last Week</span>
            </div>
        </div>

        <div className='flex items-center gap-10'>
            <div className='flex flex-col justify-center'>
                <span className='title-text text-3xl'>24K</span>
                <span className='caption-text text-xl'>Artworks</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-green-400'>+145.09 ETH</span>
                <span className='text-pink-500'>Last Week</span>
            </div>
        </div>

        <div className='flex items-center gap-10'>
            <div className='flex flex-col justify-center'>
                <span className='title-text text-3xl'>24K</span>
                <span className='caption-text text-xl'>Artworks</span>
            </div>
            <div className='flex flex-col'>
                <span className='text-green-400'>+145.09 ETH</span>
                <span className='text-pink-500'>Last Week</span>
            </div>
        </div>


      </div>
    </div>
    </Fade>
  )
}

export default TrendBids
