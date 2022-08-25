import React, { useEffect } from 'react';
import Head from 'next/head';
import Banner from '../../components/Banner';
import Rooms from '../../components/Rooms/Rooms';
import { getRooms, getTypesRooms } from '../../services/rooms';
import { getFirstBlockListingPages } from '../../services/listings';
import { isMobile } from 'react-device-detect';
import { getHotels } from 'services/hotels';

const AllRooms = ({types, rooms, roomsBlockData }) => {

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
        <Rooms options={types} 
              rooms={rooms} 
              blockData={roomsBlockData}  isRoom = {true}/>
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const rooms = await getRooms(locale);
  const types = await getHotels(locale);
  const roomsBlockData = await getFirstBlockListingPages(
    locale,
    'the_fives_rooms'
  );

  return {
    props: {
      types: types || [],
      rooms: rooms || [],
      roomsBlockData: roomsBlockData[0] || [],
    },
  };
};

export default AllRooms;
