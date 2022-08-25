import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import ExperienceItem from './ExperienceItem';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  responsive,
} from '../../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';

const ExperiencesAndServices = ({
  buttonText,
  shortDescription,
  title,
  experiences = [],
}) => {
 
  const [mount, setMount] = useState(false);
  experiences.length = 6;
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <section className="masonry-section experiences-and-services">
      <h2
        className="content-title exp-services-title exp-services-comp"
        dangerouslySetInnerHTML={{
          __html: title,
        }}
      ></h2>
      <p className="content-description exp-services-description">
        {shortDescription}
      </p>
      <div className="container">
        {isMobile && mount ? (
          <div className="row">
            <div className="col-md-12 my-5">
              <Carousel
                containerClass="masonry-carousel experiences-carousel"
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                // ssr// means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                pauseOnHover={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                transitionDuration={500}
                centerMode={false}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                customRightArrow={<ArrowRigth />}
                customLeftArrow={<ArrowLeft />}
              >
                {experiences.map((exp, id) => (
                  <ExperienceItem item={exp} key={`experience-item ${id}`} />
                ))}
              </Carousel>
            </div>
          </div>
        ) : (
          <div className="masonry main-masonry">
            {experiences.map((exp, id) => (
              <ExperienceItem item={exp} key={`experience-item ${id}`} />
            ))}
          </div>
        )}
      </div>
      <div className="masonry-link-field">
        <Link href="/experiences">
          <a className="btn btn-see-all">{buttonText}</a>
        </Link>
      </div>
    </section>
  );
};

export default ExperiencesAndServices;
