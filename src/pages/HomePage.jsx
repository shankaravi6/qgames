import React from 'react'
import BannerSection from '../components/MainComponents/BannerSection'
import InfoSection from '../components/MainComponents/InfoSection'
import WinnersSecion from '../components/MainComponents/WinnersSecion'
import LotterySection from '../components/MainComponents/LotterySection'
import TrendBidsSection from '../components/MainComponents/TrendBidsSection'
import FooterSection from '../components/MainComponents/FooterSection'

const HomePage = () => {
  return (
    <div>
      <BannerSection/>
      <InfoSection/>
      <WinnersSecion/>
      <TrendBidsSection/>
      <LotterySection/>
      <FooterSection/>
    </div>
  )
}

export default HomePage
