import React, { useEffect } from 'react';
import Head from 'next/head';
import { getFirstBlockListingPages } from '../../services/listings';
import Banner from '../../components/Banner';
import BannerCard from "../../components/Cards/BannerCard"
import { isMobile } from 'react-device-detect';
import { getDestinations } from 'services/destinations'
import ListDestinations from 'components/Lists/ListDestinations';

const Index = ({ blockData, destinations }) => {
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

        <BannerCard data={blockData} isDestinations = {true}/>
      
        <ListDestinations
          blockData={blockData}
          objList={destinations}
          isDestinations = {true}
          />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const destinations = await getDestinations(locale);
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_destinations'
  );

  return {
    props: {
      blockData: blockData[0] || [],
      destinations: destinations || [],
    },
  };
};

export default Index;
