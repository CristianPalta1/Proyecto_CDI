import Head from 'next/head';
import { useEffect } from 'react';
import { useWindowDimensions } from './../../hooks/useWindowDimension';


import {
  getExperiencesByHotel,
  getExternalExperiences,
  getAllEvents,
  getEventsByHotelId,
  getExternalExperiencesByHotel
} from 'services/experiences';
import { getHome } from 'services/home';
import { getHotelById, getHotels, getScriptsByHotel } from 'services/hotels';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { getPreHome } from 'services/preHome';
import { getApiInstagramById } from 'services/instagramApi';
import { getResidences, getResidencesTypeRooms } from 'services/residences';
import { getRoomsByHotelId } from 'services/rooms';
import dynamic from 'next/dynamic'
import CheckinIframe from 'components/InfoComponents/CheckinIframe';


const Banner = dynamic(() => import('components/Banner'), {
  ssr: true,
});
const ExperiencesAndServices = dynamic(() => import('components/InfoComponents/ExperiencesAndServices/ExperiencesAndServices'), {
  ssr: true,
});
const InstagramTimeline = dynamic(() => import('components/InfoComponents/InstagramTimeline'), {
  ssr: true,
});
const OurSpreads = dynamic(() => import('components/InfoComponents/OurSpreads'), {
  ssr: true,
});
const MeetingAndEvents = dynamic(() => import('components/MeetingAndEvents/MeetingAndEvents'), {
  ssr: true,
});
const TypesOfRooms = dynamic(() => import('components/Rooms/TypesOfRooms'), {
  ssr: true,
});
const ResidencesAtTfh = dynamic(() => import('components/SectionResidences/ResidencesAtTfh'), {
  ssr: true,
});
const Rewards = dynamic(() => import('components/InfoComponents/Rewards'), {
  ssr: true,
});
const Dining = dynamic(() => import('components/InfoComponents/Dining'), {
  ssr: true,
});
const EnjoyActivities = dynamic(() => import('components/Carousels/ActivitiesCarousel/EnjoyActivities'), {
  ssr: true,
});
const OurResidences = dynamic(() => import('components/SectionResidences/OurResidences'), {
  ssr: true,
});
const FooterCardHotel = dynamic(() => import('components/Cards/FooterCardHotel'), {
  ssr: true,
});


const SpecificHotel = ({
  hotelInfo,
  activities,
  events,
  eventsByHotelId,
  experiences,
  preHomeData,
  externalExperiences,
  instagramApi,
  gtmScript,
  residencesData,
  hotelParam,
  typeRoomResidenceData,
  externalActivities
}) => {


  const hookHeight = useWindowDimensions();

  const router = useRouter();
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

  var meta = { title: "", description: "" }

  if (
    hotelInfo &&
    activities &&
    events &&
    eventsByHotelId &&
    experiences &&
    preHomeData &&
    externalExperiences &&
    instagramApi
  ) {
    
    hotelInfo.field_meta_tags ? meta = JSON.parse(hotelInfo?.field_meta_tags) : meta



    const {
      banner: { media_image, image_mobile },
      title,
      name,
      block_images,
      content_block,
      addres,
      address_information = { description:'', title: '', media_image: { url: 'notURL', alt: '' }, logo: { url: 'notURL', alt: '' } }
    } = preHomeData;
    

    const {
      meta_description,
      meta_title,
      address,
      latitude,
      longitude,
      phone,
      price_range,
    } = hotelInfo;
    const { title_see_all, short_description_experiences, title_experiences } =
      experiences;
    const hotelData = {
      name: block_images.title,
      font_color: hotelInfo.font_color,
      description: block_images.body,
      images: block_images.images,
    };

    const { description, higlights, links, listed_title } = typeRoomResidenceData;

    

    const rewardsInfo = content_block.filter(
      (el) => el.bundle === 'the_fives_rewards'
    )[0];   
    const productsInfo = content_block.filter(
      (el) => el.bundle === 'the_fives_products'
    )[0];
    const roomsAndTypesInfo = content_block.filter(
      (el) => el.bundle === 'the_fives_rooms_and_types'
    )[0];
    const diningInfo = content_block.filter(
      (el) => el.bundle === 'the_fives_exquisite_dining'
    )[0];
    const eventsInfo = content_block.filter(
      (el) => el.bundle === 'the_fives_activities_or_events'
    )[0];
   
    const residenceInfo = content_block?.filter(
      (el) => el.bundle === 'the_fives_residences'
    )[0];
    const activitiesInfo = content_block?.filter(
      (el) => el.bundle === 'the_fives_activities_or_events'
    )[0];




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
          {gtmScript && (
            <script
              dangerouslySetInnerHTML={{ __html: gtmScript?.script_head }}
            />
          )}
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
          <script
            type="application/ld+json"
            id="seo-script"
            dangerouslySetInnerHTML={{
              __html: `{"@context": "https://schema.org", "@type": "Resort", "name": "${name}", "image": "${media_image.url}", "description": "${meta_description}", "url": "https://www.thefiveshotels.com/${router.locale}${router.asPath}", "telephone": "${phone}", "priceRange": "${price_range}", "address": { "@type": "PostalAddress", "streetAddress": "${address.street}", "addressLocality": "${address.locality}", "postalCode": "${address.postal_code}", "addressCountry": "${address.country}"}, "geo": { "@type": "GeoCoordinates", "latitude": ${latitude}, "longitude": ${longitude}}}`,
            }}
          ></script>
        </Head>
        <Banner
          info={infoBanner}
          background={media_image}
          mobileBackground={image_mobile}
        />
        {
          preHomeData?.url_iframe_export && <CheckinIframe url={preHomeData.url_iframe_export?.url}
            text={preHomeData.url_iframe_export?.text}
            color={hotelInfo.font_color} />
        }
        <ResidencesAtTfh data={hotelData} />
        <Rewards rewardsData={rewardsInfo} />
        <OurSpreads color={hotelInfo.font_color} spreadsInfo={productsInfo} />
        {residencesData.length > 0 && hotelParam === 'residences' && <OurResidences residenceInfo={residenceInfo} highlights={higlights} residences={residencesData.slice(0, 9)} />}
        {roomsAndTypesInfo && <TypesOfRooms roomsAndTypesInfo={roomsAndTypesInfo?.items} sectionTitle={roomsAndTypesInfo?.long_title} />}
        {residencesData.length > 0 && hotelParam === 'residences' && <EnjoyActivities activitiesInfo={activitiesInfo} activities={externalActivities} />}
        <Dining diningInfo={diningInfo} />
        <ExperiencesAndServices
          buttonText={title_see_all}
          shortDescription={short_description_experiences}
          title={title_experiences}
          experiences={activities}
        />
        {
          eventsByHotelId.length > 0 && hotelParam !== 'residences' ? (<MeetingAndEvents hookHeight={hookHeight} events={eventsByHotelId} eventsInfo={externalExperiences} info={eventsInfo} />) : (<></>)
        }
        {
          router.asPath === '/beach' ||router.asPath  === '/downtown' || router.asPath === '/oceanfront' ? (<FooterCardHotel dataFooter={address_information} hotelData = {hotelData} />) : (<></>)
        }
        
        {instagramApi && (
          <InstagramTimeline
            token={instagramApi?.script_head}
            limit={instagramApi?.limit}
            title={instagramApi?.title_api}
            desc={instagramApi?.description_api}
          />
        )}
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

  const preHomeData = await getPreHome(locale, 'Propiedades', thisHotel.id);
  const hotelInfo = await getHotelById(locale, thisHotel.id);
  const activities = await getExperiencesByHotel(locale, thisHotel.id);
  const experiences = await getHome(locale);
  const events = await getAllEvents(locale);
  const eventsByHotelId = await getEventsByHotelId(locale, thisHotel.id);
  const externalExperiences = await getExternalExperiences(locale);
  const instagramApi = await getApiInstagramById(locale, thisHotel.id);
  const gtmScript = await getScriptsByHotel(locale, thisHotel.id);

  const residences = await getRoomsByHotelId(locale, thisHotel?.id);
  const residenceTypeData = await getResidences(locale);

  const externalActivities = await getExternalExperiencesByHotel(locale, thisHotel?.id);



  return {
    props: {
      hotelInfo: hotelInfo || [],
      activities: activities || [],
      experiences: experiences || [],
      preHomeData: preHomeData || [],
      externalExperiences: externalExperiences || [],
      events: events || [],
      eventsByHotelId: eventsByHotelId || [],
      instagramApi: instagramApi || [],
      gtmScript: gtmScript || [],
      residencesData: residences || [],
      hotelParam: hotel || '',
      typeRoomResidenceData: residenceTypeData || [],
      externalActivities: externalActivities || []
    },
  };
};

export default SpecificHotel;
