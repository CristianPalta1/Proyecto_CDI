import React, { useEffect } from 'react';
import Head from 'next/head';
import MainBlockDetail from '../../components/Detail/MainBlockDetail';
import InfoDetail from '../../components/Detail/InfoDetail';
import FeaturesBlockDetail from '../../components/Detail/FeaturesBlockDetail';
import KnowOurEvents from '../../components/Carousels/KnowOurEventsCarousel/KnowOurEvents';
import {
  getRelatedRestaurantsByHotel,
  getRestaurantById,
  getRestaurants,
} from '../../services/restaurants';
import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';
import GalleryDetail from 'components/Detail/GalleryDetail';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { getGalleryRooms } from 'services/galleries';

const Restaurant = ({ detailData, relatedRestos, galleryRooms }) => {
  const router = useRouter();

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

  var meta = { title: "", description: "" }
 

  if (detailData && relatedRestos && galleryRooms) {
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
      title_events,
      title_related_rooms,
      gallery_title
    } = detailData;

    detailData.field_meta_tags ? meta = JSON.parse(detailData.field_meta_tags) : meta

    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <script
            type="application/ld+json"
            id="seo-script"
            dangerouslySetInnerHTML={{
              __html: `{"@context": "http://schema.org", "@type": "Restaurant","servesCuisine":"${serves_cuisine[0]}","logo": "${informative_block_export.logo}","image": "${features_block.background_image.url}","priceRange" : "${price_range}","address": {"@type": "PostalAddress","streetAddress": "${address.street}","addressLocality": "${address.locality}","postalCode": "${address.postal_code}","addressCountry": "${address.country}"},  "name": "${title}","telephone": "${phone}","email": "${email}","url": "${url_alias}","hasMenu": "${url_alias}/menu","containedInPlace":{"@type":"Place","name": "${hotel}","url": "https://www.thefiveshotels.com/${hotel}","hasMap":"${link_map.url}"}}`,
            }}
          ></script>
        </Head>
        <article>
          <MainBlockDetail
            title={title}
            infoData={informative_block_export}
            color={detailData.block_color || 'black'}
          />
          <InfoDetail
            info={data}
            title={title_about_restaurant}
            description={about_restaurant}
          />
          <FeaturesBlockDetail
            data={features_block}
            color={detailData.block_color || 'black'}
          />
          <KnowOurEvents title={title_events} events={events} />
          <GalleryDetail title={gallery_title} elements={galleryRooms?.gallery_export} />
          <RelatedCarousel title={title_related_rooms} elements={relatedRestos} from="restaurants" />
        </article>
      </>
    );
  } else {
    return <></>;
  }
};

export const getServerSideProps = async ({ locale, params }) => {
  const { restaurant } = params;
  const restaurants = await getRestaurants(locale);
  const thisResto = restaurants?.find((resto) =>
    resto.url_alias?.includes(restaurant)
  );
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
    },
  };
};

export default Restaurant;
