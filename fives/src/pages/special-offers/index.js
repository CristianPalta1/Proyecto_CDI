import React, { useEffect } from 'react';
import Head from 'next/head';
import { getFirstBlockListingPages } from '../../services/listings';
import Banner from '../../components/Banner';
import BannerCard from 'components/Cards/BannerCard';
import SpecialOffersCards from 'components/Cards/SpecialOffersCards';
import ContactUsSpecialOffers from 'components/Contact/ContactUsSpecialOffers';
import ContactUsInfo from 'components/Contact/ContactUsInfo';
import { getSpecialOffers } from 'services/specialOffers';
import { getSpecialOffersIcons } from 'services/contactUs';
import { isMobile } from 'react-device-detect';
import SpecialOffersModal from 'components/Modals/SpecialOffersModal';
import { useWindowDimensions } from './../../hooks/useWindowDimension';



const SpecialOffers = ({ blockData, specialOffers, iconsContact }) => {
  var meta = { title: "", description: "" }

  const hookHeight = useWindowDimensions();


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
      document.querySelector("#__next main").classList.remove('property-home');
    };
  }, []);

  const infoBanner = {
    title: '',
    description: '',
  };


  if (blockData && specialOffers && iconsContact) {
    blockData.metatags ? meta = JSON.parse(blockData.metatags) : meta

    const {
      name_block,
      banner: { media_image, image_mobile },
    } = blockData;
    const dataBannerCard = [
      {
        desc: blockData.banner.description,
        title: blockData.banner.title,
      },
    ];
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
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <Banner
          info={infoBanner}
          background={media_image}
          mobileBackground={image_mobile}
        />
        <div className='card__specialOffers'>
          <BannerCard data={dataBannerCard} innerText={true} />
        </div>

        <div className="cards__specialOffers">

          {
            specialOffers.map((infoSpecialOffer) => (
              <SpecialOffersCards isMainView = {true} hookHeight={hookHeight} key={infoSpecialOffer.nid} listSpecialOffers={infoSpecialOffer} onClose={() => {
                handleOnClose();
              }} />
            ))
          }
        </div>
        <ContactUsInfo isSpecialOffers={true} blockData={blockData} iconsContact={iconsContact} />


      </>
    );
  } else {
    return <></>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_special_offers'
  );
  const specialOffers = await getSpecialOffers(locale);
  const iconsContact = await getSpecialOffersIcons(locale);

  return {
    props: {
      blockData: blockData[0] || [],
      specialOffers: specialOffers || [],
      iconsContact: iconsContact || []
    },
  };
};

export default SpecialOffers;
