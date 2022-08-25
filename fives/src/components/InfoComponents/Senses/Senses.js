//import { container } from 'aws-amplify';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHomeContext } from '../../../store/Home';
import {
  ArrowLeft,
  ArrowRigth,
  responsive,
} from '../../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
import { SenseItemMobile } from './SenseItemMobile';

const Senses = () => {
  const [tabActive, setTabActive] = useState(2);
  const [mount, setMount] = useState(false);
  const { senses_title, senses } = useHomeContext();
  const splittedTitle = senses_title ? senses_title.split(' ') : ' ';

 
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

 


  return (
    <section id="sense-of-joy" className="sense-section">
      {isMobile && mount ? (
        <div className="container-fluid">
          <Carousel
            containerClass="senses-carousel"
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr// means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            pauseOnHover={true}
            autoPlaySpeed={6000}
            keyBoardControl={true}
            transitionDuration={500}
            centerMode={false}
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            customRightArrow={<ArrowRigth />}
            customLeftArrow={<ArrowLeft />}
          >
            {senses.map((tab, idx) => (
              <SenseItemMobile
                tab={tab}
                key={`tab ${idx}`}
                background={tab.background_sense}
                backgroundMobile={tab.background_sense_mobile}
                description={tab.description}
                title={tab.title}
                titleSense={splittedTitle}
              />
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="container-fluid">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={senses[tabActive].background_sense_mobile.url}
            />
            <Image
              priority={false}
              className="banner-sense" 
              title={senses[tabActive].background_sense.title}
              alt={senses[tabActive].background_sense.alt}
              src={senses[tabActive].background_sense.url}
              width={senses[tabActive].background_sense.dimensions?.width}
              height={senses[tabActive].background_sense.dimensions?.height}
            />
          </picture>

          <div className="tabs-container container">
            <h2 className="sense-section-title">
              {splittedTitle[0]}
              <span className="sense-section-title-comp">
                {`${splittedTitle[1]} ${splittedTitle[2]}`}
              </span>
            </h2>
            <div className="tabs-sense-list">
              {senses.map((tab, id) => {
                return (
                  <button
                    key={`tab-item-content ${id}`}
                    onClick={() => {
                      setTabActive(id);
                    }}
                    className={`tab-item-content ${
                      tabActive === id ? 'active' : '' 
                    } ${tab.title}`}
                  >
                    <span
                      className="tab-item"
                      style={{
                        backgroundImage: `url(${tab.icon.url})`,
                        width: '75px',
                        height: '75px',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        display: 'block',
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        margin: '0 auto',
                      }}
                    ></span>
                    <span className="tab-item-title">{tab.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="tabs-sense-content">
              {senses[tabActive].description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Senses;
