import React,{useState, useEffect} from 'react';
import SpecialOffersCards from 'components/Cards/SpecialOffersCards';
import { useWindowDimensions } from 'hooks/useWindowDimension';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { ArrowLeft, } from '../../../';
import { ArrowLeft, ArrowRigth, responsiveSpecialOffers } from '../OurHotelsCarousel/OurHotelsCarouselFeatures';

const RelatedSpecialOffersCarousel = ({relatedOffers}) => {

  const [isMounted,setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
      setIsMounted(true);
  },[]);

  const hookHeight = useWindowDimensions();

  return (
    <section className=' section_related--offers'>
    <div className='container'>
      <Carousel
        containerClass="specialOffers_related_carousel"
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsiveSpecialOffers}
        ssr // means to render carousel on server-side.
        deviceType={['desktop']}
        infinite={true}
        autoPlay={false}
        pauseOnHover={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        transitionDuration={2500}
        customRightArrow={<ArrowRigth />}
        customLeftArrow={<ArrowLeft />}
        partialVisible={true}
      >
        {
          isMounted && relatedOffers.map((item) => (
            <SpecialOffersCards key={item.title} hookHeight={hookHeight} listSpecialOffers={item} isSpecialOfferRelated={true} />
          ))
        }
      </Carousel>
    </div>
  </section>
  )
}

export default RelatedSpecialOffersCarousel