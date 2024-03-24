import React from "react";
import LotteryBox from "../LotteryComponents/LotteryBox";
import { Bounce, Slide } from "react-awesome-reveal";
import '../../App.css'

const LotterySection = () => {


    const particlesOptions = {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          }
        }
      };
      
  return (
    <div className="pt-20 pb-16 relative gradient">
      <div className="flex justify-center items-center flex-col pb-20">
        <Slide>
          <h1 className="title-text">Top Lotteries This Week</h1>
          <span className="sub-text text-xl">
            The Place where World's best tipsters.
          </span>
        </Slide>
      </div>
      <div className="section flex items-center justify-center flex-row gap-20">
        <Bounce>
          <LotteryBox img="https://gibbonsgazette.org/wp-content/uploads/2022/04/43YAWLITTZJLZIQTCP2JSS4KSM.jpg" />
        </Bounce>
        <Bounce>
          <LotteryBox img="https://qph.cf2.quoracdn.net/main-qimg-e8e8acb2459c7cac5dd215fb69db1098-lq" />
        </Bounce>{" "}
        <Bounce>
          <LotteryBox img="https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w996_r0.9975262832405689_fpx44.98_fpy48.86.jpg" />
        </Bounce>{" "}
        <Bounce>
          <LotteryBox img="https://www.businesstoday.com.my/wp-content/uploads/2022/02/monkey-art-NFT.png" />
        </Bounce>
      </div>
      <div className="section flex items-center justify-center flex-row gap-20 pt-20">
        <Bounce>
          <LotteryBox img="https://mir-s3-cdn-cf.behance.net/project_modules/disp/ad55b5129002333.6161ca5983d3b.jpg" />
        </Bounce>{" "}
        <Bounce>
          <LotteryBox img="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0f16fb129002333.6161ca5981562.jpg" />
        </Bounce>{" "}
        <Bounce>
          <LotteryBox img="https://mir-s3-cdn-cf.behance.net/project_modules/disp/4af1a7129002333.6161ca5982ccf.jpg" />
        </Bounce>
      </div>
    </div>
  );
};

export default LotterySection;
