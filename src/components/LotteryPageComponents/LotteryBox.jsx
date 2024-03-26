import React, { useEffect, useState } from 'react'
import './LotteryBox.css'
import { Bounce, Slide } from 'react-awesome-reveal'
import { lotData } from './LotteryData'

const LotteryBox = () => {

  const [lotBox, setLotBox] = useState([]);


  useEffect(() => {
    setLotBox([])
  },[lotBox])

  const checkLottery = (data) => {
       setLotBox(data);
  } 

  return (
    <div className="pt-28 pb-20 flex justify-center items-center flex-col gap-2">
        <Slide>
          <h1 className="title-text">Trending Bids</h1>
          <span className="sub-text text-xl">
            The Place where World's best tipsters carefully research coming
            matches are most confident in.
          </span>
        </Slide>

          <div className="lot-box mt-10">
          <div className='lot-grid'>
            {lotData.map((data) => {
              return <div className='flex justify-center items-center'><div className='round' onClick={() => checkLottery(data.value)}>{data.value}</div></div>
            })}
            </div>
          </div>
          
          <div className='pt-5'>
            {lotBox && lotBox.map((data) => {
              return <div><div className='round'>{data && data.name}</div></div>
            })}
          </div>
        </div>
  )
}

export default LotteryBox