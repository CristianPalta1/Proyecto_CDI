import React from 'react';
import Link from 'next/link';

const ExperienceCards = ({ experienceData }) => {

  
  const { image_mobile, media_image_1 } = experienceData.informative_block;


  return (
    <div className="large-card col-md-12">
      <div className="container">
        <div className="row">
          <div className={`content-info col-md-4 ${experienceData ? "experience__card" : ""}`}>
            <h2 className="content-title">{experienceData?.informative_block?.title ? experienceData?.informative_block?.title.replace(/&amp;/g, "&") : ''}</h2>
            <div className="content-description">
              <p>{experienceData?.informative_block?.description}</p>
            </div>

            <div className="content-actions" >
              <Link href={experienceData ? experienceData?.informative_block?.button[0]?.url : '/'}>
                <a>{experienceData ? experienceData?.informative_block?.button[0]?.text : ''}</a>
              </Link>
            </div>
          </div>

          <div className="content-image col-md-8">
            <picture>
              <source
                media="(max-width: 968px)"
                srcSet={image_mobile ? image_mobile.url : "/"}
              />
              <img
                loading="lazy"
                className="card-image"
                title={media_image_1 ? media_image_1.alt : "imagen_not_found"}
                alt={media_image_1 ? media_image_1.alt : "imagen_not_found"}
                src={media_image_1 ? media_image_1.url : "/"}
              />
            </picture>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceCards;
