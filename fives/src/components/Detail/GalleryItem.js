import React from 'react';

const GalleryItem = ({ item, onShowModal }) => {
  //@TODO: Crear Modal con la galería de las imagenes del restaurante. Comentarle a Yara sobre si es un slider o unica imagen. 
  return (
    <div className="masonry-item"
        onClick={onShowModal}>
      <img
        src={item?.media_image?.url}
        alt={item?.media_image?.alt}
        title={item?.media_image?.title}
        loading="lazy"
        className="masonry-image"
      />
      <div className="masonry-content-info">
        <div className="masonry-icon-content">
          <span className="masonry-icon"></span>
        </div>
        <h3 className="masonry-content-title">{item?.title}</h3>
        <p className="masonry-content-description">{item?.description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
