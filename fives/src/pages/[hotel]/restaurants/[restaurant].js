import React, { useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// import MainBlockDetail from 'components/Detail/MainBlockDetail';
// import InfoDetail from 'components/Detail/InfoDetail';
// import FeaturesBlockDetail from 'components/Detail/FeaturesBlockDetail';
// import KnowOurEvents from 'components/Carousels/KnowOurEventsCarousel/KnowOurEvents';
// import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';
// import GalleryDetail from 'components/Detail/GalleryDetail';

import {
  getRelatedRestaurantsByHotel,
  getRestaurantById,
  getRestaurants,
} from 'services/restaurants';
import { isMobile } from 'react-device-detect';
import { getGalleryRooms } from 'services/galleries';
import { getHotels } from 'services/hotels';



const MainBlockDetail = dynamic(() => import('components/Detail/MainBlockDetail'), {
  ssr: true,
});
const InfoDetail = dynamic(() => import('components/Detail/InfoDetail'), {
  ssr: true,
});
const FeaturesBlockDetail = dynamic(() => import('components/Detail/FeaturesBlockDetail'), {
  ssr: true,
});

const RelatedCarousel = dynamic(() => import('components/Carousels/RelatedItemsCarousel/RelatedCarousel'), {
  ssr: true,
});

const GalleryDetail = dynamic(() => import('components/Detail/GalleryDetail'), {
  ssr: true,
});

const KnowOurEvents = dynamic(() => import('components/Carousels/KnowOurEventsCarousel/KnowOurEvents'), {
  ssr: true,
});

const Restaurant = ({ detailData, relatedRestos, galleryRooms, mainColor }) => {

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

  var meta = { title: "", description: "" }


  if (detailData) {
    const {
      title,
      informative_block_export,
      data,
      features_block,
      title_about_restaurant,
      about_restaurant,
      events,
      serves_cuisine,
      phone,
      price_range,
      email,
      address,
      url_alias,
      hotel,
      link_map,
    } = detailData;

    detailData.field_meta_tags ? meta = JSON.parse(detailData.field_meta_tags) : meta
   
    let renderData = [];
    renderData = data?.filter(obj => !Array.isArray(obj))
    var servers = [""]
    serves_cuisine ? servers = serves_cuisine[0] : servers
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
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
          <script
            type="application/ld+json"
            id="seo-script"
            dangerouslySetInnerHTML={{
              __html: `{"@context": "http://schema.org", "@type": "Restaurant","servesCuisine":"${servers}","logo": "${informative_block_export?.logo}","image": "${features_block?.background_image?.url}","priceRange" : "${price_range}","address": {"@type": "PostalAddress","streetAddress": "${address?.street}","addressLocality": "${address?.locality}","postalCode": "${address?.postal_code}","addressCountry": "${address?.country}"},  "name": "${title}","telephone": "${phone}","email": "${email}","url": "${url_alias}","hasMenu": "${url_alias}/menu","containedInPlace":{"@type":"Place","name": "${hotel}","url": "https://www.thefiveshotels.com/${hotel}","hasMap":"${link_map?.url}"}}`,
            }}
          ></script>
        </Head>
        <article>
          <MainBlockDetail
            title={title}
            infoData={informative_block_export}
            color={mainColor[0] || 'black'}
            isDetailRestaurant={true}
          />
          <InfoDetail
            info={renderData}
            title={title_about_restaurant}
            description={about_restaurant}
          />
          <FeaturesBlockDetail
            data={features_block}
            color={mainColor[0] || 'black'}
          />
          {detailData?.events?.length > 0 && <KnowOurEvents events={events} />}
          {galleryRooms?.length > 0 && <GalleryDetail elements={galleryRooms?.gallery_export} />}
          <RelatedCarousel elements={relatedRestos} from="restaurants" isRestaurant={true} />
        </article>
      </>
    );
  } else {
    return <> <h1 className='text-center'>Loading...</h1></>;
  }
};

export const getStaticPaths = async ({ locales }) => {
  const hotels = await getHotels();
  const restaurants = await getRestaurants();
  const paths = [];
  hotels?.forEach((hotel) => {
    restaurants?.forEach((rest) => {
      const prueba1 = rest.title.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-')
      const thisRestofinal = prueba1.replace("cantina-", "cantina-1910").replace("-1910el", "-el")
     
      for (const locale of locales) {
        if (locale !== 'default') {
          paths.push({
            params: {
              hotel: hotel.name.replace('THE FIVES ', '').toLowerCase(),
              restaurant: thisRestofinal,
              id: rest?.id ? parseInt(rest?.id) : 0,
            },
            locale,
          });
        }
      }
    });
  });
  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  const { restaurant, hotel } = params;

 
  const hotels = await getHotels(locale, 'Propiedades');
  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );
  let mainColor = thisHotel?.font_color;

  const restaurants = await getRestaurants(locale);

  // const thisResto = await restaurants?.find((resto) =>
  //   resto.title.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-') === restaurant);
  const thisResto = await restaurants?.find((resto) => {
    const pruebaRes = resto?.title?.toLowerCase().replace(/[^a-zA-Z ]/g, '').replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-')
    const resFinal = pruebaRes?.replace("cantina-", "cantina-1910").replace("-1910el", "-el");
    return resFinal === restaurant
  });



  const detailData = await getRestaurantById(locale, thisResto?.id);
  const relatedRestos = await getRelatedRestaurantsByHotel(
    locale,
    thisResto?.id,
    thisResto?.hotel
  );
  const galleryRooms = await getGalleryRooms(
    locale,
    'restaurants',
    thisResto?.id
  );

  return {
    props: {
      detailData: detailData || [],
      relatedRestos: relatedRestos || [],
      galleryRooms: galleryRooms || [],
      mainColor: mainColor || [],
    },
  };
};

export default Restaurant;
