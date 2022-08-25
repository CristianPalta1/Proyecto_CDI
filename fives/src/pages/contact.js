import React, { useEffect } from 'react';
import Head from 'next/head';
// import Banner from 'components/Banner';
// import ContactUsInfo from 'components/Contact/ContactUsInfo';
// import Map from 'components/Contact/Map';
import { getContactUs, getMapHotels, getMapPlaces, getContactUsIcons } from 'services/contactUs';
import Script from 'next/script';
import { isMobile } from 'react-device-detect';
import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('components/Banner'), {
  ssr: true,
});
const ContactUsInfo = dynamic(() => import('components/Contact/ContactUsInfo'), {
  ssr: true,
});
const Map = dynamic(() => import('components/Contact/Map'), {
  ssr: true,
});

const Contact = ({ blockData, mapPlaces, mapHotels, hubSpotForm, iconsContact }) => {
  useEffect(() => {
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('main .booking-form');

 
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
    title: ``,
    description: ``,
  };

  if (blockData && mapPlaces && mapHotels, iconsContact) {
    const mapBlockInfo = {
      title: blockData.title_map,
      description: blockData.description_map,
    };
    return (
      <>
        <Head>
          <title>Contact Page</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <Script
          rel="preconnect"
          src="https://js.hsforms.net/forms/v2.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          rel="preconnect"
          id="contact"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         hbspt.forms.create({
          region: "na1",
          portalId: "5943261",
          formId: "${hubSpotForm}",
          target: '#contact-form-container'
         });
        `,
          }}
        />
        <Banner
          info={infoBanner}
          background={{ url: '/resourses/assets/banner-sense.png' }}
          mobileBackground={{ url: '/resourses/assets/tfh-banner-mob.png' }}
          isContact = {true}
        />
        <ContactUsInfo blockData={blockData} iconsContact= {iconsContact} />
        <Map
          mapBlockInfo={mapBlockInfo}
          mapPlaces={mapPlaces}
          mapHotels={mapHotels}
        />
      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const blockData = await getContactUs(locale);
  const iconsContact = await getContactUsIcons(locale);
  const mapPlaces = await getMapPlaces(locale);
  const mapHotels = await getMapHotels(locale);
  const hubSpotForm =
    locale === 'es'
      ? 'e427549d-2298-42ca-ab8f-29b0115ac087'
      : '5caec29c-d2ac-479a-a4fc-64a638046df2';

  return {
    props: {
      blockData: blockData || [],
      mapPlaces: mapPlaces || [],
      mapHotels: mapHotels || [],
      iconsContact: iconsContact || [],
      hubSpotForm,
    },
  };
};

export default Contact;
