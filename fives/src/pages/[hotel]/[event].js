import React,{useEffect} from 'react'
import { getAllEvents, getRelatedEvents, getSpecificEvent } from 'services/experiences';
import { isMobile } from 'react-device-detect'
import { getHotels } from 'services/hotels';
import Head from 'next/head';
// import MainBlockDetail from 'components/Detail/MainBlockDetail';
// import InfoDetail from 'components/Detail/InfoDetail';
// import FeaturesBlockDetail from 'components/Detail/FeaturesBlockDetail';
// import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';
import dynamic from 'next/dynamic'

const MainBlockDetail  = dynamic(() => import('components/Detail/MainBlockDetail'), {
  ssr: true,
});
const InfoDetail  = dynamic(() => import('components/Detail/InfoDetail'), {
  ssr: true,
});
const FeaturesBlockDetail  = dynamic(() => import('components/Detail/FeaturesBlockDetail'), {
  ssr: true,
});

const RelatedCarousel  = dynamic(() => import('components/Carousels/RelatedItemsCarousel/RelatedCarousel'), {
  ssr: true,
});


const Event = ({eventDetail, relatedEvents}) => {


    useEffect(() => {
      document.querySelector("#__next main").classList.remove('property-home');
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

      if(eventDetail){
        const {
            title,
            informative_block,
            data,
            features_block,
            title_about_experiences,
            about_experiencies,
            title_related_rooms,
            events,
            serves_cuisine,
            phone,
            price_range,
            email,
            address,
            url_alias,
            hotel,
            link_map,
          } = eventDetail;  
        return(
            <>
                <Head>
                     <title>{title}</title>
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
                <MainBlockDetail
                    title={title}
                    infoData={informative_block}
                    color={eventDetail?.block_color || 'black'}
                />
                <InfoDetail
                    info={[]}
                    title={title_about_experiences}
                    description={about_experiencies}
                />
                 <FeaturesBlockDetail
                    data={features_block}
                    color={eventDetail?.block_color || 'black'}
                />
                {relatedEvents && <RelatedCarousel elements={relatedEvents} 
                                                    from={'activities'} 
                                                    title={title_related_rooms}/>}
                </article>
            </>
        )
      }else{
          return(
              <div>Loading...</div>
          )
      }
}


export const getServerSideProps = async ({ locale, params }) => {
    const { event, hotel } = params;
  
    const hotels = await getHotels(locale, 'Propiedades');

    const thisHotel = hotels?.find(
        (el) => el?.name?.replace('THE FIVES ', '').toLowerCase() === hotel
    );

    const events = await getAllEvents(locale);
    
    let mutatedTitle = event.replace('-',' ').toUpperCase()
  
    const thisEvent = events?.find((evt) =>
      evt.title?.includes(mutatedTitle)
    );
  
    const eventDetail = await getSpecificEvent(locale, thisEvent?.id)

    const relatedEvents = await getRelatedEvents(locale, thisHotel?.id, thisEvent?.id);
    
  

    return {
      props: {
        eventDetail:eventDetail || [],
        relatedEvents: relatedEvents || [],
      },
    };
};

export default Event;