import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    responsiveHome
} from '../OurHotelsCarousel/OurHotelsCarouselFeatures';
  import {
    ArrowLeft,
    ArrowRigth,
    residencesAtResponsive,
  } from '../OurHotelsCarousel/OurHotelsCarouselFeatures';
import BlogDetailCard from 'components/Cards/BlogDetailCard';
const RelatedBlogCarousel = ({elemts}) => {
  return (
    <section className="multiple-carousel-section related-section-blog">
      <div className="container">
      <Carousel
          containerClass="multiple-carousel blog-carousel"
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsiveHome}
          ssr// means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          pauseOnHover={true}
          autoPlaySpeed={6000}
          keyBoardControl={true}
          transitionDuration={500}
          centerMode={false}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          partialVisbile={false}
          customRightArrow={<ArrowRigth />}
          customLeftArrow={<ArrowLeft />}
        >
            {
                elemts.map((elem,id)=><BlogDetailCard blogCard={elem} key={`blog-element ${id}`}/>)
            }
        </Carousel>
      </div>
    </section>
  )
}

export default RelatedBlogCarousel