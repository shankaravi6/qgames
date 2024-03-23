import React from 'react'
import BannerSection from '../components/MainComponents/BannerSection'
import InfoSection from '../components/MainComponents/InfoSection'
import WinnersSecion from '../components/MainComponents/WinnersSecion'
import TrendBids from '../components/MainComponents/TrendBids'
import LotterySection from '../components/MainComponents/LotterySection'

const HomePage = () => {
  return (
    <div>
      <BannerSection/>
      <InfoSection/>
      <WinnersSecion/>
      <TrendBids/>
      <LotterySection/>
    </div>
  )
}

export default HomePage
