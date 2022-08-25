import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';
import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  responsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
import GalleryModal from 'components/Modals/GalleryModal';

const GalleryDetail = ({ elements = [], title }) => {
  elements.length = 6;
  const [mount, setMount] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  
  const handlerShowModal = () => {
    setOpenModal(true);
  };

  
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);


  return (
    <>
      <section className="masonry-section gallery-detail">
        <h2 className="content-title gallery-detail-title"
            dangerouslySetInnerHTML={{
              __html:title
            }}>
        </h2>
        {
          mount ? (
            <div className="container">
              {isMobile ? (
                <div className="row">
                  <div className="col-md-12 my-5">
                    <Carousel
                      containerClass="masonry-carousel"
                      swipeable={true}
                      draggable={false}
                      showDots={true}
                      responsive={responsive}
                      ssr// means to render carousel on server-side.
                      infinite={true}
                      autoPlay={false}
                      pauseOnHover={true}
                      autoPlaySpeed={6000}
                      keyBoardControl={true}
                      transitionDuration={500}
                      centerMode={false}
                      // removeArrowOnDeviceType={["tablet", "mobile"]}
                      customRightArrow={<ArrowRigth />}
                      customLeftArrow={<ArrowLeft />}
                    >
                      {elements.map((exp, id) => (
                        <GalleryItem item={exp} key={`gallery-item ${id}`} onShowModal={ ()=> setOpenModal(true) }/>
                      ))}
                    </Carousel>
                  </div>
                </div>
              ) : (
                <div className="masonry detail-masonry">
                  {elements.map((exp, id) => (
                    <GalleryItem item={exp} key={`gallery-item ${id}`} onShowModal={ ()=> setOpenModal(true) }/>
                  ))}
                </div>
              )}
            </div>
          ):(<></>)
        }
      </section>
      <GalleryModal 
        isOpen={openModal}
        media={elements}
        onClose={()=>setOpenModal(false)}
      />
    </>
  );
};

export default GalleryDetail;
