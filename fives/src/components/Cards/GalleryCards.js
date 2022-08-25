import React from 'react';
import Link from 'next/link';

const GalleryCards = ({ listGallery }) => {
  
  


  return (
    <div className="gallery__container">
      {
        listGallery.map((listGallery, i) => {
          let newTitle = listGallery?.title_intro_export.replace('THE FIVES ', '').toLowerCase()
          return (

          <div key={i} className="large-card col-md-12">
            <div className="container">
              <div className="row">
                <div className="content-info col-md-4">
                  {/* <h2 className="content-title">{listGallery?.title ? listGallery.title.replace(/&amp;/g, "&") : ''}</h2> */}
                  <div className="content-title" dangerouslySetInnerHTML={{
                    __html: listGallery?.title_intro_export
                  }} />
                  <div className="content-description" dangerouslySetInnerHTML={{
                    __html: listGallery?.title_intro_export
                  }} />

                  <div className="content-actions" >
                    <Link href={`/gallery/${newTitle.replace(" ", "-")}`}>
                      {
                        listGallery.text_button ? (<a>{listGallery.text_button}</a>) : (<></>)
                      }
                      
                    </Link>
                  </div>
                </div>

                <div className="content-image col-md-8">
                  <picture>
                    <source
                      media="(max-width: 968px)"
                      srcSet={listGallery.gallery_banner_export.image_mobile ? listGallery.gallery_banner_export.image_mobile.url : "/"}
                    />
                    <img
                      loading="lazy"
                      className="card-image"
                      title={listGallery.gallery_banner_export.media_image_3 ? listGallery.gallery_banner_export.media_image_3.alt : "imagen_not_found"}
                      alt={listGallery.gallery_banner_export.media_image_3 ? listGallery.gallery_banner_export.media_image_3.alt : "imagen_not_found"}
                      src={listGallery.gallery_banner_export.media_image_3 ? listGallery.gallery_banner_export.media_image_3.url : "/"}
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        )})
      }
    </div>
  );
};

export default GalleryCards;
