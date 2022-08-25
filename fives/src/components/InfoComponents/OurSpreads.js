import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { isMobile } from 'react-device-detect';
import {
  ArrowLeft,
  ArrowRigth,
  residencesAtResponsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
import Image from 'next/image';
const OurSpreads = ({ color, spreadsInfo }) => {
  const getDimensions = useWindowDimensions();
  const [initialColor, setInitialColor] = useState('');
  const [initialBackgroundColor, setInitialBackgroundColor] =
    useState('#ECE9E5');
  const [initialTitleColor, setInitialTitleColor] = useState('');
  const MouseOver = (event) => {
    event.target.style.background = color; //Reemplazar por la variable del JSON
    event.target.querySelector('h3.spread-title').style.color = '#ffffff'; //Reemplazar por la variable del JSON
    setInitialColor('#ffffff');

   
  };

  const MouseOut = (event) => {
    event.target.style.background = initialBackgroundColor; //Reemplazar por la variable del JSON
    event.target.querySelector('h3.spread-title').style.color = '#000000'; //Reemplazar por la variable del JSON
 
  };




  if (spreadsInfo) {
    const { icon_and_description, long_title } = spreadsInfo;
    return (
      <section className="our-spreads">
        <div className="container">
          <div className="content-title" 
          dangerouslySetInnerHTML={{
            __html:long_title
          }}>
            
          </div>
          <div className="our-spreads-content">
            {getDimensions <= 1024 || isMobile ? (
              <Carousel
                containerClass="our-spreads-carousel"
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={residencesAtResponsive}
                ssr // means to render carousel on server-side.
                deviceType={['desktop']}
                infinite={true}
                autoPlay={false}
                pauseOnHover={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                transitionDuration={500}
                centerMode={false}
                removeArrowOnDeviceType={['tablet', 'mobile']}
              >
                {icon_and_description.map((sprd, id) => {
                  return (
                    <div className="our-spread-item" key={`item${id}`} 
                    style={{
                      background: color,
                    }}>
                      <Image
                        className="spread-icon"
                        src={sprd.media_image?.url}
                        alt={sprd.media_image?.title}
                        title={sprd.media_image?.title}
                        width={30}
                        height={30}
                       
                      />
                      <h3 className="spread-title">{sprd.media_image.title}</h3>
                      <p
                        className="spread-description"
                      >
                        {sprd.description}
                      </p>
                    </div>
                  );
                })}
              </Carousel>
            ) : (
              icon_and_description.map((sprd, id) => {
                return (
                  <div
                    className="our-spread-item"
                    key={`item${id}`}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}
                    style={{
                      background: initialBackgroundColor,
                    }}
                  >
                    <Image
                        className="spread-icon"
                        src={sprd.media_image?.url}
                        alt={sprd.media_image?.title}
                        title={sprd.media_image?.title}
                        width={50}
                        height={50}
                        style={{
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          display: 'block',
                          objectFit: 'contain',
                          objectPosition: 'center center',
                          margin: '0 auto',
                        }}
                      />
                    <h3 className="spread-title">{sprd.media_image.title}</h3>
                    <p
                      className="spread-description"
                      style={{ color: initialColor }}
                    >
                      {sprd.description}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default OurSpreads;
