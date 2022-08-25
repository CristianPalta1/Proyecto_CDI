import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PageNotFound from '../components/404';
import { isMobile } from 'react-device-detect';

const NotFoundPage = () => {

 

  const  handleLoad = () => {
    let footerIcons = document.querySelector('footer #related-companies-footer'); //  $ is available here
  
    footerIcons?.classList.add('footer_404');
   }

  useEffect(() => {
    document.querySelector("#__next main").classList.add('main-home');
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('main .booking-form');
    let footerIcons = document.querySelector('footer #related-companies-footer');

    header?.classList.add('scroll');
    booking?.classList.add('scroll');
    window.addEventListener('load', handleLoad())
    footerIcons?.classList.add('footer_404');

  
 
    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header?.classList.remove('scroll');
      booking?.classList.remove('scroll');
      footerIcons?.classList.remove('footer_404');
      document.querySelector("#__next main").classList.remove('property-home');
    };
  });

 

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="Index" />
        <meta name="Content-Type" content="text/html;charset=utf-8" />
        <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        <title>not-found</title>
      </Head>

      <PageNotFound />
    </>
  );
};

export default NotFoundPage;
