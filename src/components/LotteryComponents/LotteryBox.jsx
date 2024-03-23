import React from 'react'

const LotteryBox = ({img}) => {
  return (
    <div>
      <div className='lot-ball'>
        <img src={img} style={{borderRadius:"50%"}} width="100%"/>
      </div>
    </div>
  )
}

export default LotteryBox
