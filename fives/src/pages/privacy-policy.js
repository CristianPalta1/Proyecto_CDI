import React, { useEffect } from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import AcordeonList from 'components/AcordeonList/AcordeonList';
import { isMobile } from 'react-device-detect';
import { getBasicPages } from 'services/basicPages';

//Serivces


const PrivacyPolicy = ({blockData}) => {
  useEffect(() => {
    document.querySelector("#__next main").classList.add('main-home');
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('.main-home .booking-form');
    header?.classList.add('scroll');
    booking?.classList.add('scroll')

    if(isMobile) return booking?.classList.remove('scroll');

    return () => {
      header?.classList.remove('scroll');
      booking?.classList.remove('scroll')
      document.querySelector("#__next main").classList.remove('property-home');
    }
  }, []);

  const infoBanner = {
    title: "",
    description: "",
  };
  var meta = {title: "", description: ""}
  const {
    
    internal_content_export: { media_image_2, image_mobile, title },
    title_see_all,
    short_description_experiences,
    title_experiences,
    login_link
  } = blockData;

  
  if(!blockData) return (<p>Loading ...</p>)
  blockData?.field_meta_tags ?  meta = JSON.parse(blockData?.field_meta_tags) : meta


 
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="Index" />
        <meta name="Content-Type" content="text/html;charset=utf-8" />
        <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Banner
          info = {infoBanner}
          background={media_image_2}
          mobileBackground={image_mobile}
        />
    
      <AcordeonList data={blockData}/>
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const blockData = await getBasicPages(
    locale,
    'privacy_policy'
  );



  return {
    props: {
      blockData: blockData || [],

    },
  };
};

export default PrivacyPolicy;
