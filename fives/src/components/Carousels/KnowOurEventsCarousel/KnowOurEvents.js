import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  responsive, ArrowLeft,
  ArrowRigth,
} from '../OurHotelsCarousel/OurHotelsCarouselFeatures';

import KnowOurEventsItem from './KnowOurEventsItem';

const KnowOurEvents = ({ events = [], title }) => {
  return (
    <section className="know-our-events">
      <h2 className="content-title"
        dangerouslySetInnerHTML={{
          __html: title
        }}>
      </h2>
      <Carousel
        containerClass="events-carousel"
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
        removeArrowOnDeviceType={['tablet', 'mobile']}
        customRightArrow={<ArrowRigth />}
        customLeftArrow={<ArrowLeft />}
      >
        {events?.map((e, id) => {
          return <KnowOurEventsItem key={id} event={e} />;
        })}
      </Carousel>
    </section>
  );
};

export default KnowOurEvents;
