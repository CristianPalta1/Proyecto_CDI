import Link from 'next/link';
import { useState, useEffect } from 'react';
import ResidenceCard from '../Cards/ResidenceCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  residencesResponsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';

const ResidencesOn = ({ residences, residencesBlockInfo, withHeight, isHome = false }) => {

  
  const [, setMount] = useState(false);

  const residencesItem = residencesBlockInfo?.higlights?.filter(
    (el) => el.short_description === 'Residences' || el.short_description === "Residencias"
  );

  const pools = residencesBlockInfo?.higlights?.filter(
    (el) => el.short_description === 'Pools' || el.short_description === "Piscinas"
  );

  const restaurants = residencesBlockInfo?.higlights?.filter(
    (el) => el.short_description === 'Restaurants' || el.short_description === "Restaurantes"
  );

  const bars = residencesBlockInfo?.higlights?.filter(
    (el) => el.short_description === 'Bars' || el.short_description === "Bares"
  );


  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    <section className="residences-on">
      <div className="container">
        <div className="row">
          <div className="residences-info col-md-3">
            <div className="title__residences" dangerouslySetInnerHTML={{
              __html: residencesBlockInfo?.listed_title
            }} />

            <div
              className="content-description"
              dangerouslySetInnerHTML={{
                __html: residencesBlockInfo?.description,
              }}
            />

            <div className={`${isHome ? "hide_highlights-block": ""} highlights-block`}>
              <h5 className="highlights-title">{residencesBlockInfo?.title_higlights}</h5>
              <div className="residences">

                {
                  residencesBlockInfo?.higlights?.map((highlightsItem, id) => (
                    <p key = {`Item-${id}`}>
                    {highlightsItem ? highlightsItem.title : ''}{' '}
                    <span>{highlightsItem ? highlightsItem.short_description : ''}</span>
                  </p>
                  ))
                }
              </div>
            
            </div>

            <div className="user-actions">
              <Link href={residencesBlockInfo?.links ? residencesBlockInfo?.links[0]?.url : '#'}>
                <a className="btn btn-see-more"> {residencesBlockInfo?.links ? residencesBlockInfo?.links[0]?.text : ''}</a>
              </Link>
            </div>
          </div>
          <div className="residences-options col-md-9">
            <div className="tabs-content">
              <Carousel
                containerClass="rooms-carousel"
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
                customRightArrow={<ArrowRigth />}
                customLeftArrow={<ArrowLeft />}
              >
                {residences?.map((residence, id) => (

                  <ResidenceCard
                    key={`card-item ${id}`}
                    residence={residence}
                    withHeight = {withHeight}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
};

export default ResidencesOn;
