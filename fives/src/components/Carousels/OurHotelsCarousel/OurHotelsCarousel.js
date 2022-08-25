import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeft, ArrowRigth, responsive } from './OurHotelsCarouselFeatures';
import OurHotelsItem from '../../Cards/OurHotelsCard';
import { useWindowDimensions } from '../../../hooks';
import { isMobile } from 'react-device-detect';
import { useHomeContext } from '../../../store/Home';

const OurHotelsCarousel = ({ hotels }) => {
  const { title_hotels } = useHomeContext();
  const splittedTitle = title_hotels.split(' ');

  const hookWidth = useWindowDimensions();

  let maxScreen = 1024;

  return (
    <section className="our-hotels-section">
      <h2 className="content-title">
        {splittedTitle[0]}
        <span className="content-title-comp">{splittedTitle[1]}</span>
      </h2>
      <div className="our-hotels-carousel-container ">
        <Carousel
          containerClass="our-hotels-carousel"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr // means to render carousel on server-side.
          deviceType={['desktop']}
          infinite={true}
          autoPlay={true}
          pauseOnHover={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          transitionDuration={500}
          centerMode={maxScreen >= hookWidth ? false : isMobile ? false : true}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          customRightArrow={<ArrowRigth />}
          customLeftArrow={<ArrowLeft />}
          // partialVisible={true}
        >
          {hotels.map((hotel, idx) => {
            return <OurHotelsItem id={idx} key={idx} hotel={hotel} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default OurHotelsCarousel;
