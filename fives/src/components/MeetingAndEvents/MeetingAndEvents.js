import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  EventsResponsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
import { isMobile, isTablet } from 'react-device-detect';
import EventsCards from '../Cards/EventsCards';

const MeetingAndEvents = ({ hookHeight, eventsInfo, info, events }) => {


  let { title, format_description } = info;
  if (eventsInfo) {
    return (
      <section className="meetings-and-events">
        <div className="container-fluid">
          <div className="row meetings">
            <div className="col-md-6 events-info">
              <h2 className="content-title"
                  dangerouslySetInnerHTML={{
                    __html:title
                  }}
                >
                
              </h2>
              <div className="content-description"
                dangerouslySetInnerHTML={{
                  __html:format_description
                }}>
              </div>
            </div>
            <div className={`col-md-6 events ${hookHeight <= 590 ? "small-screen" : ""}`}>
              <Carousel
                containerClass="events-carousel"
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={EventsResponsive}
                ssr// means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                pauseOnHover={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                transitionDuration={300}
                centerMode={false}
                deviceType={'desktop'}
                removeArrowOnDeviceType={['tablet', 'mobile']}
                partialVisible={true}
                customRightArrow={<ArrowRigth />}
                customLeftArrow={<ArrowLeft />}
              >
                {events?.map((evt, id) => (
                  <EventsCards  event={evt} key={`event${evt.id}`} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default MeetingAndEvents;
