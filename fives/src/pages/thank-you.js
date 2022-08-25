import React, { useEffect } from 'react';
import Head from 'next/head';
import ThankYou from './../components/ThankYou';
import { isMobile } from 'react-device-detect';

const ThankYouPage = () => {
  useEffect(() => {
    document.querySelector("#__next main").classList.add('main-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('main .booking-form');
    header?.classList.add('scroll');
    booking?.classList.add('scroll');

    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header?.classList.remove('scroll');
      booking?.classList.remove('scroll');
    };
  }, []);

  const data = [
    {
      title: 'Thank You !',
      subtitle: 'We just sent you a confirmation email. Check out your inbox.',
      background_image: {
        url: '/resourses/assets/thank_you.png',
        alt: 'thank_you',
        title: 'thank_you',
      },
      background_image_mobile: {
        url: '/resourses/assets/thank_you_mobile.png',
        alt: 'thank_you',
        title: 'thank_you',
      },
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="Index" />
        <meta name="Content-Type" content="text/html;charset=utf-8" />
        <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        <title>thank-you</title>
      </Head>

      <ThankYou data={data[0]} />
    </>
  );
};

export default ThankYouPage;
