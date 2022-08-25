import React, { useEffect } from 'react';
import Head from 'next/head';
import AcordeonList from 'components/AcordeonList/AcordeonList';
import { isMobile } from 'react-device-detect';

const SiteMap = () => {
  useEffect(() => {
    document.querySelector("#__next main").classList.add('main-home');
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('main .booking-form');
    header?.classList.add('scroll');
    booking?.classList.add('scroll')

    if(isMobile) return booking?.classList.remove('scroll');

    return () => {
      header?.classList.remove('scroll');
      booking?.classList.remove('scroll')
      document.querySelector("#__next main").classList.remove('property-home');
    }
  }, []);

  

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="Index" />
        <meta name="Content-Type" content="text/html;charset=utf-8" />
        <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        <title>site-map</title>
      </Head>

      <div className='site-map__container' style = {{ marginTop: "160px", textAlign: "center", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <h1>Página En construcción</h1>
          <span><i style = {{fontSize: "60px"}}className="fa fa-cogs" aria-hidden="true"></i> </span>
      </div>
    </>
  );
};

export default SiteMap;
