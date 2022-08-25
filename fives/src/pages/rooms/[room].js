import React, { useEffect } from 'react';
import Head from 'next/head';
import MainBlockDetail from '../../components/Detail/MainBlockDetail';
import InfoDetail from '../../components/Detail/InfoDetail';
import FeaturesBlockDetail from '../../components/Detail/FeaturesBlockDetail';
import GalleryDetail from '../../components/Detail/GalleryDetail';
import { getRoomById, getRooms } from '../../services/rooms';
import { isMobile } from 'react-device-detect';
import { getGalleryRooms } from 'services/galleries';

const Room = ({ detailData, galleryRooms }) => {

  
  
  useEffect(() => {
    document.querySelector("#__next main").classList.remove('property-home');
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


  if (detailData && galleryRooms) {
    const { title, informative_block, data, features_block, block_color } =
      detailData;
      
     
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <article>
         
          <MainBlockDetail
            title={title}
            infoData={informative_block}
            color={block_color}
          />
          <InfoDetail info={data} />
          <FeaturesBlockDetail data={features_block} color={block_color} />
          <GalleryDetail elements={galleryRooms?.gallery_export} />
        </article>
      </>
    );
  } else {
    return <></>;
  }
};



export const getServerSideProps = async ({ locale, params }) => {
  const { room } = params;
  const rooms = await getRooms(locale);
  const thisRoom = rooms?.find((r) => r.view_room?.includes(room));
  const roomData = await getRoomById(locale, thisRoom.id);
  const galleryRooms = await getGalleryRooms(
    locale,
    'restaurants',
    thisRoom?.id
  );
  return {
    props: {
      detailData: roomData || [],
      galleryRooms: galleryRooms || [],
    },
  };
};



export default Room;
