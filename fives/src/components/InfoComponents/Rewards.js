import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  RewardsResponsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';

const Reward = ({ item }) => {
  const { description, media_image, title } = item;

  return (
    <div className="reward">
      <span
        className="spread-icon"
        style={{
         
          backgroundImage: `url(${media_image.url})`,
          width: '40px',
          height: '40px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          display: 'block',
          objectFit: 'contain',
          objectPosition: 'center center',
          margin: '0 auto',
        }}
      ></span>
      <h3 className="reward-title">{title}</h3>
      <div
        className="reward-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

const Rewards = ({ rewardsData }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

 
  if (rewardsData) {
    return (
      <section className="property-rewards-section">
        <div className="container">
          <div
            className="content-title"
            dangerouslySetInnerHTML={{ __html: rewardsData?.long_title }}
          ></div>
          <div className="content-rewards">
            {isMobile && mount ? (
              <>
                <Carousel
                  containerClass="rewards-carousel"
                  swipeable={true}
                  draggable={false}
                  showDots={true}
                  responsive={RewardsResponsive}
                  ssr// means to render carousel on server-side.
                  infinite={true}
                  autoPlay={false}
                  pauseOnHover={true}
                  autoPlaySpeed={6000}
                  keyBoardControl={true}
                  transitionDuration={500}
                  centerMode={true}
                  deviceType={"mobile"}
                  // removeArrowOnDeviceType={["tablet", "mobile"]}
                  customRightArrow={<ArrowRigth />}
                  customLeftArrow={<ArrowLeft />}
                >
                  {rewardsData.icon_and_description?.map((rew, i) => (
                    <Reward item = {rew} key = {`reward${i}`} />
                  ))
                  }
                </Carousel>
              </>
            ) : (
              rewardsData.icon_and_description?.map((rew, i) => (
                <Reward item={rew} key={`${i}`} />
              ))
            )}
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Rewards;
