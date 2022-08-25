import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    responsive
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';
  import {
    ArrowLeft,
    ArrowRigth,
    residencesAtResponsive,
  } from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';

const GalleryModal = ({ media, isOpen, onClose }) => {
  /**Sí isOpen es falso no muestra nada */
  const [mounted, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
      }, [mounted])  

  if (!isOpen) return null;

  if( mounted && isOpen  ) return ReactDOM.createPortal(
    <div className={`modal modal-gallery ${isOpen && "showModal"}`} tabIndex="-1">
    <div className="modal-dialog modal-md modal-dialog-centered">
      <div className="modal-content ">
        <button
          type="button"
          className="btn btn-close-modal"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={onClose}
        ></button>
        <div className="modal-body">
        <Carousel
            containerClass="multiple-carousel blog-carousel"
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
            removeArrowOnDeviceType={['tablet', 'mobile']}
            partialVisbile={false}
            customRightArrow={<ArrowRigth />}
            customLeftArrow={<ArrowLeft />}
            >
                {
                    media.map((gal, id)=>( 
                        <div className='content-image' key={`modal-image ${id}`}>
                            <picture>
                                <source media="(max-width: 968px)" srcSet={gal?.image_mobile?.url}
                                width={gal?.image_mobile?.dimensions?.width}
                                height={gal?.image_mobile?.dimensions?.height} />
                                <img
                                    loading="lazy"
                                    className="card-image"
                                    title={gal?.media_image?.title}
                                    alt={gal?.media_image?.alt}
                                    src={gal?.media_image?.url}
                                    width={gal?.media_image?.dimensions?.width}
                                    height={gal?.media_image?.dimensions?.height}
                                />
                            </picture>
                        </div>
                    ))
                }
        </Carousel>
        
        </div>
      </div>
    </div>
  </div>,
    document.getElementById('portal')
  );
};

export default GalleryModal;
