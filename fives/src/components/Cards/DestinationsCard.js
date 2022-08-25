import React from 'react';
import Link from 'next/link';

const DestinationCard = ({ dest }) => {

  const {title, image_mobile, desktop_image, description, title_button_see_more, body } = dest;

  const linkedTo = title?.toLowerCase().replace(/<[^>]+>/g, '').split(' ').join('-');

 

  return (
    <div className="large-card col-md-12">
      <div className="container">
        <div className="row">
          <div className="content-info col-md-4">
            {/* <h2 className="content-title">{title}</h2> */}
            <div className="content-title destination__Card" 
                dangerouslySetInnerHTML={{
                    __html:title
                }}></div>
            <div className="content-description" 
                dangerouslySetInnerHTML={{
                    __html:body
                }}></div>
            <div className="content-actions">
              <Link href={`/destinations/${linkedTo}`}>
                <a className="btn btn-view-more">{title_button_see_more}</a>
              </Link>
            </div>
          </div>
          <div className="content-image col-md-8">
            <picture>
              <source
                media="(max-width: 968px)"
                srcSet={image_mobile?.url}
                width={image_mobile?.dimensions?.width}
                height={image_mobile?.dimensions?.height}
              />
              <img
                loading="lazy"
                className="card-image"
                title={desktop_image?.alt}
                alt={desktop_image?.alt}
                src={desktop_image?.url}
                width={desktop_image?.dimensions?.width}
                height={desktop_image?.dimensions?.height}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
