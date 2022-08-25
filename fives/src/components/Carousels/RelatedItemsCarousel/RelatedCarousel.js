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
import RestaurantCard from '../../Cards/RestaurantCard';

const RelatedCarousel = ({ elements, from, title, isRestaurant = false }) => {
  
  const elementosFiltrados = elements.slice(0,9)
  const renderActivityCards = () => {
    return elementosFiltrados.map((act, id) => (
      <ActivitiesCard actv={act} key={`activitie ${id}`} />
    ));
  };
  const renderRestaurantCards = (isRestaurant) => {
    return elementosFiltrados.map((res, id) => (
      <RestaurantCard isRestaurant = {isRestaurant} rest={res} key={`activitie ${id}`} />
    ));
  };
  return (
    <section className="multiple-carousel-section related-rooms">
      <div className="container">
        <h2 className="multiple-carousel-title content-title"
            dangerouslySetInnerHTML={{
              __html:title
            }}>
        </h2>

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
          // removeArrowOnDeviceType={['tablet', 'mobile']}
          customRightArrow={<ArrowRigth />}
          customLeftArrow={<ArrowLeft />}
          partialVisbile={false}
          
        >
          {from === 'activities' && renderActivityCards()}
          {from === 'restaurants' && renderRestaurantCards(isRestaurant)}
        </Carousel>
      </div>
    </section>
  );
};

export default RelatedCarousel;
