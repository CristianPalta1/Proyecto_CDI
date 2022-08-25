import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic'

// import Banner from '../../../components/Banner';
// import Rooms from '../../../components/Rooms/Rooms';

import { getRooms, getRoomsByHotelId, getTypesRooms, getTypesRoomsByHotel } from '../../../services/rooms';
import { getFirstBlockListingPages } from '../../../services/listings';
import { isMobile } from 'react-device-detect';
import { getHotels } from 'services/hotels';
import { getTypesOfAction } from 'actions/Rooms/typeof.actions';

const Banner = dynamic(() => import('../../../components/Banner'), {
  ssr: true,
});

const Rooms = dynamic(() => import('../../../components/Rooms/Rooms'), {
  ssr: true,
});

const AllRooms = ({ types, rooms, roomsBlockData }) => {

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
    };
  }, []);

  const infoBanner = {
    title: '',
    description: '',
  };


  if (rooms && roomsBlockData) {
    roomsBlockData.metatags ? meta = JSON.parse(roomsBlockData.metatags) : meta
    const {
      banner: { media_image, image_mobile },
      name_block,
    } = roomsBlockData;

    

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
        <Rooms options={types?.typesData}
          rooms={rooms}
          blockData={roomsBlockData} isRoom={true} />
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
  const { hotel } = params;

  const hotels = await getHotels(locale, 'Propiedades');

  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );

  const roomsByHotel = await getRoomsByHotelId(locale, thisHotel?.id);
  const types = await getTypesOfAction(locale, thisHotel?.id);
  const roomsBlockData = await getFirstBlockListingPages(
    locale,
    'the_fives_rooms'
  );

  const hotelExportInfoBanner = roomsBlockData?.map(data => data?.hotel_export)
  let i = 0;
  let indiceBannerHotel = 0;
  for (i = 0; i < hotelExportInfoBanner?.length; i++) {

    let dataIndividual = [];
    let o = 0;
    dataIndividual = hotelExportInfoBanner[i];
    for (o = 0; o < dataIndividual?.length; o++) {
      if (dataIndividual[o]?.toString() === thisHotel?.id) {
        indiceBannerHotel = i;
      }
    }
  }
  const roomBlockDataFinal = roomsBlockData[indiceBannerHotel];
  
  return {
    props: {
      types: types || [],
      rooms: roomsByHotel || [],
      roomsBlockData: roomBlockDataFinal || [],
    },
  };
};

export default AllRooms;
