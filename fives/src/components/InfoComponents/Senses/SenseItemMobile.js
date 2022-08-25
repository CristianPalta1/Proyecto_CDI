import Image from 'next/image';
import React from 'react';

export const SenseItemMobile = ({
  tab,
  backgroundMobile,
  background,
  description,
  title,
  titleSense,
}) => {
  return (
    <>
      <picture>
        <Image
          priority={false}
          className="banner-sense"
          title={backgroundMobile.title}
          alt={backgroundMobile.alt}
          src={backgroundMobile.url}
          width={backgroundMobile?.dimensions?.width}
          height={backgroundMobile?.dimensions?.height}
          layout="fill"
        />
      </picture>

      <div className="tabs-container container">
      <h2 className="sense-section-title">
              {titleSense[0]}
              <span className="sense-section-title-comp">
                {`${titleSense[1]} ${titleSense[2]}`}
              </span>
            </h2>
        <div className="tabs-sense-list">
          <button
            key={`tab-item-content`}
            className={`tab-item-content ${title}`}
          >
            <span
              className="tab-item"
              style={{
                backgroundImage: `url(${tab.icon.url})`,
                width: '75px',
                height: '75px',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center center',
                margin: '0 auto',
              }}
            ></span>
            <span className="tab-item-title">{tab.title}</span>
          </button>
        </div>
        <div className="tabs-sense-content">{description}</div>
      </div>
    </>
  );
};
