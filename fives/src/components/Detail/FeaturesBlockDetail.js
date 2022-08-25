import React from 'react';

const Feature = ({ item, itemsCenter }) => {
  
  const { icon, name } = item;

  return (
    <div className="feature-item">
      <div className="feature-icon">
        <img alt={icon.alt} title={icon.title} loading="lazy" src={icon.url} />
      </div>
      <span className="feature-name">{name}</span>
    </div>
  );
};

const FeaturesBlockDetail = ({ data, color }) => {
  const { background_image, background_image_mobile, features, title } = data ? data : {features : []};

  const itemsCenter = features.length
  const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: `${color}`,
    zIndex: '2',
    opacity: '0.9',
    top: '0',
  };

  return (
    <section className={`features-block-section ${features.length > 8 && 'adjust-height' }`}>
      <picture>
        <source
          media="(max-width: 998px)"
          srcSet={background_image_mobile?.url}
        />
        <img
          loading="lazy"
          className="feature-banner"
          title={background_image?.alt}
          alt={background_image?.title}
          src={background_image?.url}
        />
      </picture>
      <div className="container">
        <div className="content-title" dangerouslySetInnerHTML={{__html:title}}></div>
        <div className={`features-content ${itemsCenter <= 4 ? "center__items" : ""}`}>
        
          {features.length &&
            features.map((obj, id) => (
              <Feature item={obj} itemsCenter = {itemsCenter} key={`feature ${id}`} />
            ))}
        </div>
      </div>
      <div style={style} />
    </section>
  );
};

export default FeaturesBlockDetail;
