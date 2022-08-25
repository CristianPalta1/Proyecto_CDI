import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// import MainBlockDetail from '../../../components/Detail/MainBlockDetail';
// import InfoDetail from '../../../components/Detail/InfoDetail';
// import FeaturesBlockDetail from '../../../components/Detail/FeaturesBlockDetail';
// import GalleryDetail from '../../../components/Detail/GalleryDetail';
// import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';

import { getHotelRoomById, getRoomById, getRooms } from '../../../services/rooms';
import { isMobile } from 'react-device-detect';
import { getGalleryRooms } from 'services/galleries';
import { getHotels } from 'services/hotels';

const MainBlockDetail  = dynamic(() => import('components/Detail/MainBlockDetail'), {
  ssr: true,
});
const InfoDetail  = dynamic(() => import('components/Detail/InfoDetail'), {
  ssr: true,
});
const FeaturesBlockDetail  = dynamic(() => import('components/Detail/FeaturesBlockDetail'), {
  ssr: true,
});

const RelatedCarousel  = dynamic(() => import('components/Carousels/RelatedItemsCarousel/RelatedCarousel'), {
  ssr: true,
});

const GalleryDetail = dynamic(() => import('components/Detail/GalleryDetail'), {
  ssr: true,
});

const Room = ({ detailData, galleryRooms, relatedRooms, mainColor }) => {

 
  var meta = { title: "", description: "" }
  useEffect(() => {
    document.querySelector("#__next main").classList.remove('property-home');
    document.querySelector("#__next main").classList.remove('main-home');    
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

 
  

  if (detailData && galleryRooms && relatedRooms && mainColor) {
    detailData.field_meta_tags_export ? meta = JSON.parse(detailData.field_meta_tags_export) : meta
    const { epic, title, informative_block, data, features_block, block_color } =
      detailData;     

      const colorFinal = epic === '1' ? 'rgba(0,0,0,0.8)' : mainColor[0]
    
      
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
        <article>
          <MainBlockDetail
            title={title}
            infoData={informative_block}
            color={mainColor}
            epic = {epic}
          />
          <InfoDetail info={data} isRooms = {true}/>
          <FeaturesBlockDetail data={features_block} color={colorFinal || 'black'} />
          {galleryRooms.length > 0 && <GalleryDetail elements={galleryRooms?.gallery_export} />}
          {relatedRooms.length > 0 && <RelatedCarousel elements={relatedRooms} from={'activities'}/> }
        </article>
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticPaths = async ({ locales }) => {
  const hotels = await getHotels();
  const rooms = await getRooms();
  const paths = [];
  hotels?.forEach((hotel) => {
    rooms?.forEach((room) => {
      
      for (const locale of locales) {
        if (locale !== 'default') {
          paths.push({
            params: {
              hotel: hotel?.name.replace('THE FIVES ', '').toLowerCase(), 
              room: room?.title?.toLowerCase().replace(/[^a-zA-Z ]/g, '').trim().replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-'),
              id: room?.id ? parseInt(room?.id) : 0,
            },
            locale,
          });
          
        }
      }
    });
  });
  
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const { room, hotel } = params;
  
  const hotels = await getHotels(locale, 'Propiedades');

  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );  

  let mainColor = thisHotel?.font_color;

  const rooms = await getRooms(locale);
  
  const thisRoom = rooms?.find((r) => r?.title?.toLowerCase().replace(/[^a-zA-Z ]/g, '').trim().replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-') === room);
   
  const roomData = await getRoomById(locale, thisRoom?.id);

  const galleryRooms = await getGalleryRooms(
    locale,
    'restaurants',
    thisRoom?.id
  );

  const relatedRooms = await getHotelRoomById(locale, thisRoom?.id, thisHotel?.id, )
  
  
  return {
    props: {
      detailData: roomData || [],
      galleryRooms: galleryRooms || [],
      relatedRooms: relatedRooms || [],
      mainColor: mainColor || [],
    },
  };
};

export default Room;
