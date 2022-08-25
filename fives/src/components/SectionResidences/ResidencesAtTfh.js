import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  residencesAtResponsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
import { isMobile, isTablet } from 'react-device-detect';
import { loadingBarFill } from 'aws-amplify';

const ResidencesAtTfh = ({ data }) => {
  const { description, font_color, name, images } = data;
  const [mount, setMount] = useState(false);
  
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <section className="residencesAt">
      <div className="container">
        <div className="row">
          <div className="content-images col-md-6">
            <Carousel
              containerClass="residences-carousel"
              swipeable={true}
              draggable={false}
              showDots={true}
              responsive={residencesAtResponsive}
              ssr// means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              pauseOnHover={true}
              autoPlaySpeed={6000}
              keyBoardControl={true}
              transitionDuration={300}
              centerMode={isMobile ? true : false}
              removeArrowOnDeviceType={['tablet', 'mobile']}
              customRightArrow={<ArrowRigth />}
              customLeftArrow={<ArrowLeft />}
            >
              {images.map((item, id) => {
                return (
                  <div className="residences-content" key={`item ${id}`}>
                    <div className="residence-field">
                      <picture>
                        <source
                          media="(max-width: 768px)"
                          srcSet={item.image_mobile.url}
                          heigth={item.image_mobile?.dimensions?.heigth}
                          width={item.image_mobile?.dimensions?.width}
                        />
                        <img
                          loading="lazy"
                          className="image-residence"
                          title={item.media_image.title}
                          alt={item.media_image.alt}
                          src={item.media_image.url}
                          width={item.media_image?.dimensions?.width}
                          heigth={item.media_image?.dimensions?.heigth}
                        />
                      </picture>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="residences-info col-md-6 ">
            <div className="content-title"
            style={{ color: font_color }}
            dangerouslySetInnerHTML={{
              __html: name
            }}
            />        
         
       
          
            <div
              className="content-description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidencesAtTfh;
