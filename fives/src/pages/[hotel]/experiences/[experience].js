
import React, { useEffect } from 'react'
import { getAllTypeOfExperiences, getExperience, getExperiences, getRelatedExternalExperiences, getRelatedInteralExperiences, getSpecificExternalExperience } from 'services/experiences';
import { getHotels } from 'services/hotels';
import Head from 'next/head';
import { isMobile } from 'react-device-detect'
import { getGalleryRooms } from 'services/galleries';

// import MainBlockDetail from 'components/Detail/MainBlockDetail';
// import InfoDetail from 'components/Detail/InfoDetail';
// import FeaturesBlockDetail from 'components/Detail/FeaturesBlockDetail';
// import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';
// import GalleryDetail from 'components/Detail/GalleryDetail';
// import ExperienceTabsDetail from 'components/Detail/ExperienceTabsDetail';

import dynamic from 'next/dynamic'


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

const ExperienceTabsDetail = dynamic(() => import('components/Detail/ExperienceTabsDetail'), {
  ssr: true,
});


const Experience = ({ experienceDetail, color, experienceGallery, isExternal, experiencesRelated }) => {


  const detailData = experienceDetail[0]
 
  var meta = { title: "", description: "" }
  detailData?.field_meta_tags ? meta = JSON.parse(detailData?.field_meta_tags) : meta
  useEffect(() => {
    document.querySelector("#__next main").classList.remove('property-home');
    document.querySelector("#__next main").classList.remove('main-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('main .booking-form');
    header.classList.add('scroll');
    booking?.classList.add('scroll');

    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header.classList.remove('scroll');
      booking?.classList.remove('scroll');
      document.querySelector("#__next main").classList.remove('property-home');
      document.querySelector("#__next main").classList.remove('main-home');
    };
  }, []);

  return (

    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
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
        {
          isExternal ? (
            <>

              <MainBlockDetail
                title={detailData?.title}
                infoData={detailData?.informative_block}
                color={detailData?.block_color || color[0]}
                isDetailExperience={true}
              />

              <InfoDetail
                info={[]}
                title={detailData?.title_about}
                description={detailData?.body}
              />

              <FeaturesBlockDetail
                data={detailData?.features_block}
                color={color[0] || 'green'}
              />
              <ExperienceTabsDetail
                detailsTitle={detailData?.title_details}
                detailsDescription={detailData?.description_details}
                hoursList={detailData?.hours_export}
                helpfulLinks={detailData?.helpful_links_export}
                imageDetail={detailData?.image_detail_export}
                imageDetailMobile={detailData?.image_detail_mobile_export}
                prices={detailData?.price_export}
                titlePrices={detailData?.title_prices}
                titleHours={detailData?.title_hours}
                titleLinks={detailData?.title_helpful_links}
                faqs={detailData?.faqs_export}
              />
              {experiencesRelated.length > 0 && <RelatedCarousel elements={experiencesRelated} from={'activities'} />}
            </>
          ) : (
            <>
              <MainBlockDetail
                title={detailData?.title}
                infoData={detailData?.informative_block}
                color={color[0] || color[0]}
                isDetailExperience={true}
              />
              {experienceGallery.length > 0 && <GalleryDetail elements={experienceGallery?.gallery_export} />}
              {experiencesRelated.length > 0 && <RelatedCarousel elements={experiencesRelated} from={'activities'} />}
            </>
          )
        }

      </article>
    </>


  )
}

export const getStaticPaths = async ({ locales }) => {
  const hotels = await getHotels();
  const experiences = await getAllTypeOfExperiences();
  const paths = [];

  hotels?.forEach((hotel) => {
    experiences?.forEach((exp) => {
     
      for (const locale of locales) {
        if (locale !== 'default') {
          paths.push({
            params: {
              hotel: hotel?.name?.replace('THE FIVES ', '').toLowerCase(),
              experience: exp?.title?.toLowerCase().replace(/[^a-zA-Z ]/g, '').trim().replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-'),
              id: exp?.id ? parseInt(exp?.id) : 0,
            },
            locale,
          });
        }
      }
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params }) => {

  const { experience, hotel } = params;
 
  const hotels = await getHotels(locale, 'Propiedades');
  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );



  const experiences = await getAllTypeOfExperiences(locale, thisHotel?.id);

  
  const currentExperience = experiences?.find((expr) =>
    expr?.title?.toLowerCase().replace(/[^a-zA-Z ]/g, '').trim().replace(/<[^>]+>/g, '').replace(/ /g, " ").replace(/\s+/g, ' ').split(' ').join('-') === experience,
  );



  let mainColor = thisHotel?.font_color;
  let experienceDetail = [];
  let experiencesRelated = [];
  let isExternal = currentExperience?.type_experience?.includes('External') ? true : false;


  if (isExternal) {
    let detailExp = [];
    detailExp = await getSpecificExternalExperience(locale, currentExperience?.id)
    experienceDetail.push(...detailExp);

    let extRelatedExperiences = await getRelatedExternalExperiences(locale, currentExperience?.hotel, currentExperience?.id);

    experiencesRelated.push(...extRelatedExperiences);
  } else {
    let detailIntExp = await getExperience(locale, currentExperience?.id);
    experienceDetail.push(...detailIntExp);

    let intRelatedExperiences = await getRelatedInteralExperiences(locale, currentExperience?.hotel, currentExperience?.id);
    experiencesRelated.push(...intRelatedExperiences);
  }



  const experienceGallery = await getGalleryRooms(
    locale,
    'experiences',
    currentExperience?.id
  );




  return {
    props: {
      color: mainColor || '#000000',
      isExternal: isExternal,
      experienceDetail: experienceDetail || [],
      experienceGallery: experienceGallery || [],
      experiencesRelated: experiencesRelated || [],
    }
  }
}


export default Experience