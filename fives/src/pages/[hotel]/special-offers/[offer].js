import React, { useEffect } from 'react'
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { getHotels } from 'services/hotels';
import { getPreHome } from 'services/preHome';
import { getRelatedSpecialOffers, getSpecialOffers } from 'services/specialOffers';
import { useWindowDimensions } from '../../../hooks';

//Custom Hooks
import { useToggle } from 'hooks/useToggle';

//Components
import MainSpecialOfferCard from './../../../components/Cards/MainSpecialOfferCard';
import InfoDetailSpecialOffers from "./../../../components/Detail/InfoDetailSpecialOffers";
import OurSpreads from './../../../components/InfoComponents/OurSpreads';
import Rewards from './../../../components/InfoComponents/Rewards';
import SpecialOffersCards from 'components/Cards/SpecialOffersCards';
import RelatedSpecialOffersCarousel from 'components/Carousels/RelatedSpecialOffers/RelatedSpecialOffersCarousel';
import SpecialOffersModal from 'components/Modals/SpecialOffersModal';

const Offer = ({ offer, mainColor, rewards, spreads, relatedOffers, infoContact, titleContact }) => {

  const hookHeight = useWindowDimensions();
  const [visible, setVisible] = useToggle();
  const handleOnClose = () => {
    setVisible();
  };


  let maxScreen = 1024;
  var meta = { title: "", description: "" }
  useEffect(() => {
    document.querySelector("#__next main").classList.remove('property-home');
    document.querySelector("#__next main").classList.remove('main-home');
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

 
  if (offer && infoContact && spreads && rewards && mainColor && relatedOffers && titleContact) {
    offer?.field_meta_tags ? meta = JSON.parse(offer.field_meta_tags) : meta
  
    let color = 'rgb(0, 0, 0)';
    
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

          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <section className='landing__special--offers'>

          <MainSpecialOfferCard data={offer} onClick={handleOnClose} />
          {
            infoContact.length > 0 ? <InfoDetailSpecialOffers data={infoContact} title={titleContact} /> : <></>
          }

          <OurSpreads color={mainColor} spreadsInfo={spreads} />
          <Rewards rewardsData={rewards} />
          <RelatedSpecialOffersCarousel relatedOffers={relatedOffers} />

        </section>
        <SpecialOffersModal isOfferDetail={true} hookHeight={hookHeight} isOpen={visible} onClose={() => { handleOnClose() }} title={titleContact} desc={offer?.blog_content} />
      </>
    )
  } else {
    return <> <h1 className='text-center'>Loading...</h1></>;
  }
}



export const getStaticPaths = async ({ locales }) => {
  const hotels = await getHotels();
  const specialOffers = await getSpecialOffers();
  const paths = [];
  hotels?.forEach((hotel) => {
    specialOffers?.forEach((offer) => {
      for (const locale of locales) {
        if (locale !== 'default') {
          paths.push({
            params: {
              hotel: hotel?.name?.replace('THE FIVES ', '').toLowerCase(),
              offer: offer?.title?.toLowerCase()
                .replace(/<[^>]*>/g, ' ')
                .replace('&', 'and')
                .replace(/\s+/g, ' ').trim()
                .split(' ')
                .join('-'),
              id: offer?.nid ? parseInt(offer?.nid) : 0,
            },
            locale,
          });

        }
      }
    });
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ locale, params }) => {
  
  const { offer, hotel } = params;
  const hotels = await getHotels(locale, 'Propiedades');
  const specialOffers = await getSpecialOffers(locale);
 
  const thisHotel = hotels?.find(
    (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
  );

  let preHomeData = { content_block: [] }
  preHomeData = await getPreHome(locale, 'Propiedades', thisHotel.id);

  let mainColor = thisHotel?.font_color;
  const thisOffer = specialOffers?.find((offr) => offr?.title?.toLowerCase()
    .replace(/<[^>]*>/g, ' ')
    .replace('&', 'and')
    .replace(/\s+/g, ' ').trim()
    .split(' ')
    .join('-') === offer?.toLowerCase());

  const { content_block } = preHomeData;
  


  const rewardsInfo = content_block?.filter((el) => el?.bundle === 'the_fives_rewards')[0];
  const spreadsInfo = content_block?.filter((el) => el?.bundle === 'the_fives_products')[0];
  const relatedSpecialOffers = await getRelatedSpecialOffers(locale, thisOffer?.nid)
  const {
    special_offers_export: contactInfo,
    title_special_offers_export: titleContactInfo
  } = thisHotel;
 
   
  return {
    props: {
      offer: thisOffer || [],
      mainColor: mainColor || [],
      rewards: rewardsInfo || [],
      spreads: spreadsInfo || [],
      relatedOffers: relatedSpecialOffers || [],
      infoContact: contactInfo || [],
      titleContact: titleContactInfo || [],
    }
  }
}

export default Offer