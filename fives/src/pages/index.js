import React, { useEffect } from 'react';
import Head from 'next/head';
import { getHome } from '../services/home';
import { getHotels } from '../services/hotels';
import { getResidences, getResidencesTypeRoomsHome } from '../services/residences';
import { HomeContextProvider } from '../store/Home';
import { getAllTypeOfExperiences } from 'services/experiences';
import { isMobile } from 'react-device-detect';
import { getApiInstagram } from 'services/instagramApi';
import { getDataChatBot } from 'services/chatBot';
import LoginLayout from 'components/Header/LoginLayout';
import Script from 'next/script';
import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('../components/Banner'), {
  ssr: true,
});

const Welcome = dynamic(() => import('../components/InfoComponents/Welcome'), {
  ssr: true,
});

const OurHotelsCarousel = dynamic(() => import('../components/Carousels/OurHotelsCarousel/OurHotelsCarousel'), {
  ssr: true,
});

const ResidencesOn = dynamic(() => import('../components/SectionResidences/ResidencesOn'), {
  ssr: true,
});

const RewardsPerSuscription = dynamic(() => import('../components/InfoComponents/RewardsPerSuscription'), {
  ssr: true,
});

const Senses = dynamic(() => import('../components/InfoComponents/Senses/Senses'), {
  ssr: true,
});

const ExperiencesAndServices = dynamic(() => import('../components/InfoComponents/ExperiencesAndServices/ExperiencesAndServices'), {
  ssr: true,
});

const InstagramTimeline = dynamic(() => import('../components/InfoComponents/InstagramTimeline'), {
  ssr: true,
});

const Index = ({
  home,
  hotels,
  residences,
  experiences,
  residencesBlockInfo,
  instagramApi,
  prefixlocale,
}) => {
  const infoBanner = {
    title: `Welcome`,
    description: `To find your sensessss`,
  };
  var meta = { title: "", description: "" }

  useEffect(() => {

    document.querySelector("#__next main").classList.add('main-home');
    document.querySelector("#__next main").classList.remove('property-home');
    let header = document.querySelector('.header');
    let booking = document.querySelector('.booking-form');
    window.onscroll = (e) => {

      if (window.pageYOffset === 0) {
        header.classList.remove('scroll');
        booking?.classList.remove('scroll');
      } else {
        if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
          booking?.classList.add('scroll');
        }
        header.classList.add('scroll');

      }

      if (isMobile) return booking?.classList.remove('scroll');
    };

    return () => {
      window.onscroll = null;
      document.querySelector("#__next main").classList.remove('property-home');
      document.querySelector("#__next main").classList.remove('main-home');
    };
  }, []);



  if (home && hotels && residences && residencesBlockInfo && experiences) {
    const {

      banner: { media_image, image_mobile, title },
      title_see_all,
      short_description_experiences,
      title_experiences,
      login_link
    } = home;      
    

    home.field_meta_tags ? meta = JSON.parse(home.field_meta_tags) : meta

    const hubSpotForm =
      prefixlocale === 'es'
        ? 'c597953b-5b8a-4dbe-901b-cfe719d07433'
        : '6606aee2-36de-4288-91dd-939c6b57e611';

    return (
      <HomeContextProvider home={home}>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="google" content="notranslate" />
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
          titleBanner={home.banner}
          info={infoBanner}
          background={media_image}
          mobileBackground={image_mobile}
        />
        <Welcome />
        <OurHotelsCarousel hotels={hotels} />
        <ResidencesOn
          residences={residences}
          residencesBlockInfo={residencesBlockInfo}
          withHeight={true}
          isHome = {true}
        />
        <RewardsPerSuscription btn={login_link} />
        <Senses />
        <ExperiencesAndServices
          experiences={experiences}
          buttonText={title_see_all}
          shortDescription={short_description_experiences}
          title={title_experiences}
        />
        {instagramApi && (
          <InstagramTimeline
            token={instagramApi?.script_head}
            limit={instagramApi?.limit}
            title={instagramApi?.title_api}
            desc={instagramApi?.description_api}
            link = {instagramApi?.link_profile_export }
          />
        )}
        {/* <LoginLayout locale={prefixlocale}/> */}
      </HomeContextProvider>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const home = await getHome(locale);
  const hotels = await getHotels(locale);
  const residencesBlockInfo = await getResidences(locale);
  const residences = await getResidencesTypeRoomsHome(locale, 139);
  const experiences = await getAllTypeOfExperiences(locale);
  const instagramApi = await getApiInstagram(locale);
  const prefixlocale = locale;

  return {
    props: {
      home: home || [],
      hotels: hotels || [],
      residences: residences || [],
      experiences: experiences || [],
      residencesBlockInfo: residencesBlockInfo || [],
      instagramApi: instagramApi || [],
      prefixlocale: prefixlocale || locale,
    },
  };
};

export default Index;
