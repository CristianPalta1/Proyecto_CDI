import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  residencesResponsive,
  responsive,
} from '../OurHotelsCarousel/OurHotelsCarouselFeatures';
import {
  ArrowLeft,
  ArrowRigth,
  residencesAtResponsive,
} from '../OurHotelsCarousel/OurHotelsCarouselFeatures';
import ActivitiesCard from '../../Cards/ActivitiesCard';

const EnjoyActivities = ({ activities = [], activitiesInfo }) => {
  
  return (
    <section className="multiple-carousel-section enjoy-activities">
      <div className="container">
        <div className="content-title enjoy-title" dangerouslySetInnerHTML={{__html: activitiesInfo?.title }}>
         
        </div>
        <div className="content-description enjoy-description" dangerouslySetInnerHTML={{__html: activitiesInfo?.format_description }}/> 

     
        <Carousel
          containerClass="multiple-carousel activities-carousel"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={residencesResponsive}
          ssr// means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          pauseOnHover={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          transitionDuration={500}
          centerMode={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          partialVisbile={false}
          customRightArrow={<ArrowRigth />}
          customLeftArrow={<ArrowLeft />}
        >
          {activities.map((act, id) => (
            <ActivitiesCard
              actv={act}
              key={`activitie ${id}`}
              from="activities"
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default EnjoyActivities;
