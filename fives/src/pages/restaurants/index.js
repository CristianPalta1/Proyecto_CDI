import React, { useEffect } from 'react';
import Head from 'next/head';
import { getHotels } from '../../services/hotels';
import { getRestaurants, getTypeofRestaurants } from '../../services/restaurants';
import { getFirstBlockListingPages } from '../../services/listings';
import Restaurants from '../../components/Restaurants/Restaurants';
import Banner from '../../components/Banner';
import { isMobile } from 'react-device-detect';
import { getTypesOfRestaurantsAction } from 'actions/Restaurants/typerestaurant.actions';

const GeneralRestaurants = ({ types ,hotels, restaurants, blockData }) => {
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

  
  if (hotels && restaurants && blockData) {
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
        <Restaurants
          blockData={blockData}
          restaurants={restaurants}
          tabs={types?.typesData}
          from="restaurants"
          withOutHeight = {true}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const hotels = await getHotels(locale);
  
  const types = await getTypesOfRestaurantsAction(locale);

  const restaurants = await getRestaurants(locale);
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_restaurants'
  );

  return {
    props: {
      types: types || [],
      hotels: hotels || [],
      restaurants: restaurants || [],
      blockData: blockData[0] || [],
    },
  };
};

export default GeneralRestaurants;
