import React, { useState, useEffect, useCallback } from 'react';
import RoomCard from '../Cards/RoomCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { isMobile } from 'react-device-detect';
import {
  ourHighlightsResponsive,
  residencesAtResponsiveResidences,ArrowLeft,
  ArrowRigth
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';


const OurResidences = ({ highlights, residences, residenceInfo }) => {
  const [dataFilter, setDataFilter] = useState([]);
  const [tabActive, setTabActive] = useState('Residencias');


  const handleFilter = useCallback(
    (tab) => {
      setTabActive(tab);
      let arrFiltered = [];
      for (const item of residences) {
        item.type_room === tab && arrFiltered.push(item);
      }
      setDataFilter(arrFiltered);
    },
    [residences]
  );


  useEffect(() => {
    handleFilter(tabActive);
    return () => null;
  }, [handleFilter, tabActive]);

  const mockedIcon = '/resourses/assets/smell-icon-white.svg';

  const getDimensions = useWindowDimensions();
  return (
    <section className="our-residences multiple-carousel-section">
      <div className="our-residences-title" dangerouslySetInnerHTML={{
                    __html: residenceInfo?.long_title_formatter
                  }}/>

    
   
      <div className="our-highlights-content container">
        <h4 className="our-highlight-title">{residenceInfo?.title_our_residences}</h4>
        <div className="our-highlights">
          {getDimensions <= 1024 || isMobile ? (
            <Carousel
              containerClass="our-highlights-carousel"
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={ourHighlightsResponsive}
              ssr // means to render carousel on server-side.
              deviceType={['desktop']}
              infinite={true}
              autoPlay={false}
              pauseOnHover={true}
              autoPlaySpeed={6000}
              keyBoardControl={true}
              transitionDuration={500}
              centerMode={false}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            >
              {highlights?.map((item, id) => {
                return (
                  <div className="highlight-item" key={`highlight-item ${id}`}>
                    <img
                      src={item.icon?.url}
                      className="highlight-icon"
                      title={item.icon?.title}
                      alt={item.icon?.alt}
                      loading="lazy"
                    />
                    <h5 className="highlight-title">
                      <span className="quantity-highlight">{item.title} </span>
                      {item.short_description}
                    </h5>
                    <p className="highlight-description">
                      {item.short_description}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          ) : (
            highlights?.map((item, id) => {
              return (
                <div className="highlight-item" key={`highlight-item ${id}`}>
                  <img
                    src={item.icon?.url}
                    className="highlight-icon"
                    title={item.icon?.title}
                    alt={item.icon?.alt}
                    loading="lazy"
                  />
                  <h5 className="highlight-title">
                    <span className="quantity-highlight">{item.title} </span>
                    {item.short_description}
                  </h5>
                  <p className="highlight-description">
                    {item.short_description}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* <div className="residences-types-content row">
         
            <Carousel
              containerClass="multiple-carousel residences-carousel"
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={residencesAtResponsiveResidences}
              ssr // means to render carousel on server-side.
              deviceType={['desktop']}
              infinite={true}
              autoPlay={false}
              pauseOnHover={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              transitionDuration={500}
              centerMode={false}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              partialVisbile={false}
              customRightArrow={<ArrowRigth />}
              customLeftArrow={<ArrowLeft />}
            >
              {residences.map((item, id) => {

                return (
                  <div className="room-type" key={`room ${id}`}>
                    <RoomCard room={item} isResidence = {true}/>
                  </div>
                );
              })}
            </Carousel>
          
        </div> */}
      </div>
    </section>
  );
};

export default OurResidences;
