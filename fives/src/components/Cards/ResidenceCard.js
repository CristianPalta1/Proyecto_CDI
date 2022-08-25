import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ResidenceCard = ({ residence, withHeight }) => {
 
  const { description, media_image_1, image_mobile, button, title } = residence.informative_block;
  const target = title?.toLowerCase().split(' ').join('-');

  return (
    <div className="card residence-card">
      <div className="card-header">
        <picture>
          <source media="(max-width: 968px)" srcSet={image_mobile?.url} />
          <img
            loading='lazy'
            className="card-image"
            title="bedroom-resort"
            alt={media_image_1?.alt}
            src={media_image_1?.url}
            width={media_image_1?.dimensions?.width}
            height={media_image_1?.dimensions.height}
          />
        </picture>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title ? title : ''}</h3>
        <p className={`card-description ${withHeight ? "card__home": ""}`}>{description}</p>
      </div>
      <div className="card-footer">
        <ul className="card-options">
          {button?.map((link, id) => {
            return (
              <div
                className="card-option-item"
                key={`card-option-item ${link}`}
                dangerouslySetInnerHTML={{
                  __html: link,
                }}
                target = {`${id === 0 ? "_blank": ""}`}
              />
            );
          })}
        </ul>
      </div>
    </div>

  );
};

export default ResidenceCard;
