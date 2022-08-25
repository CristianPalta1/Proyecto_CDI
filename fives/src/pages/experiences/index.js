import React, { useEffect } from 'react';
import Head from 'next/head';
import { getFirstBlockListingPages } from '../../services/listings';
import Banner from '../../components/Banner';
import BannerCard from 'components/Cards/BannerCard';
import { isMobile } from 'react-device-detect';
import { getAllTypeOfExperiences, getExperiences, getTypeOfExperiences } from 'services/experiences';
import ListExperience from 'components/Lists/ListExperience';
import Experiences from 'components/Experiences/Experiences';

const Experience = ({ blockData, experiences, types}) => {


 
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

  var meta = { title: "", description: "" }


 
  if (blockData && experiences) {
    const {
      name_block,
      banner: { media_image, image_mobile },
    } = blockData;

    blockData.metatags ? meta = JSON.parse(blockData.metatags) : meta
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
          {/* <Experiences 
            blockData={blockData}
            experiences={experiences}
            tabs={types}
          /> */}
          <ListExperience 
            isExperience = {true}
            blockData={blockData}
            objList={experiences}
          />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const experiences = await getAllTypeOfExperiences(locale);
  const types = await await getTypeOfExperiences(locale);
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_experiences'
  );

  const externalExperiences = experiences.filter((exp) => exp.type_experience?.includes('External'));

  

  return {
    props: {
      blockData: blockData[0] || [],
      experiences: externalExperiences || [],
      types: types || []
    },
  };
};

export default Experience;
