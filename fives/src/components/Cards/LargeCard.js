import React from 'react';
import Link from 'next/link';

const LargeCard = ({ exp, isExperience }) => {

  

  const { informative_block, view_experience } = exp;

  const { image_mobile, media_image_1, description, title } = informative_block;

 
  return (
    <div className="large-card col-md-12">
      <div className="container">
        <div className="row">
          <div className="content-info col-md-4">
            <h2 className="content-title">{title}</h2>
            <div className="content-description"
              dangerouslySetInnerHTML={{
                __html: description
              }}></div>
            {
              isExperience ? (<div className={`${isExperience ? "card-experience" : ""} content-actions`}>
                {
                  informative_block.button.map((btn, i) => (
                    <a key = {i}  className="masonry-link experience-link" rel="noreferrer" href = {`${btn ? btn?.url : "/"}`}>{`${btn ? btn?.text : 'View More'}`}</a>
                  ))
                }
              </div>) :
                (<div className="content-actions" dangerouslySetInnerHTML={{ __html: view_experience }}>

                </div>)
            }

          </div>
          <div className="content-image col-md-8">
            <picture>
              <source
                media="(max-width: 968px)"
                srcSet={image_mobile.url}
                width={image_mobile?.dimensions.width}
                height={image_mobile?.dimensions.height}
              />
              <img
                loading="lazy"
                className="card-image"
                title={media_image_1?.alt}
                alt={media_image_1?.alt}
                src={media_image_1?.url}
                width={media_image_1?.dimensions.width}
                height={media_image_1?.dimensions.height}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeCard;
