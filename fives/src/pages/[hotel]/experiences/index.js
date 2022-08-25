import React, { useEffect } from 'react';
import Head from 'next/head';
import { getFirstBlockListingPages } from 'services/listings';
import { isMobile } from 'react-device-detect';
import { getAllTypeOfExperiences, getAllTypeOfExperiencesByHotel, getExperiences, getTypeOfExperiences } from 'services/experiences';
import { getHotels } from 'services/hotels';
// import Experiences from 'components/Experiences/Experiences';
// import Banner from 'components/Banner';
import dynamic from 'next/dynamic'

const Banner  = dynamic(() => import('components/Banner'), {
  ssr: true,
});

const Experiences  = dynamic(() => import('components/Experiences/Experiences'), {
  ssr: true,
});


const ExperiencesIndex = ({ blockData, experiences, types}) => {


 
  var meta = { title: "", description: "" }
  useEffect(() => {
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('.booking-form');
    header.classList.add('scroll');
    booking?.classList.add('scroll');

    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header.classList.remove('scroll');
      booking?.classList.remove('scroll');
      document.querySelector("#__next main").classList.remove('property-home');
    };
  }, []);

  const infoBanner = {
    title: '',
    description: '',
  };



  if (blockData) {
    blockData.metatags ? meta = JSON.parse(blockData.metatags) : meta
    const {
      name_block,
      banner: { media_image, image_mobile },
    } = blockData;
    return (
      <>
        <Head>
        <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <Banner
          info={infoBanner}
          background={media_image}
          mobileBackground={image_mobile}          
        />
        {/* <ListExperience
          blockData={blockData}
          objList={experiences}
          innerText = {true}
          /> */}
          <Experiences 
            blockData={blockData}
            experiences={experiences}
            tabs={types}
          />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticPaths = async ({ locales }) => {
    const hotels = await getHotels();
    const paths = [];
    hotels?.forEach((hotel) => {
      for (const locale of locales) {
        paths.push({
          params: { hotel: hotel.name.replace('THE FIVES ', '').toLowerCase() },
          locale,
        });
      }
    });
    return {
      paths,
      fallback: false,
    };
};

export const getStaticProps = async ({ locale, params }) => {
  const {hotel } = params;

  const hotels = await getHotels(locale, 'Propiedades');

  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );

  const experiences = await getAllTypeOfExperiencesByHotel(locale, thisHotel?.id);
  const types = await await getTypeOfExperiences(locale);
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_experiences'
  );


  return {
    props: {
      blockData: blockData[0] || [],
      experiences: experiences || [],
      types: types || []
    },
  };
};

export default ExperiencesIndex;
