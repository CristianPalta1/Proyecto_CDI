import React from 'react';
import Link from 'next/link'
const EventsCards = ({ event }) => {
  const {
    helpful_links_export,
    informative_block: { button, media_image_1, image_mobile, title, description },
  } = event;

  return (
    <div className="card event-card">
      <div className="card-header">
        <picture>
          <source media="(max-width: 968px)" srcSet={image_mobile?.url} 
          width={image_mobile?.dimensions.width}
          height={image_mobile?.dimensions.height}/>
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
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p
          className="card-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="card-footer">
        {
          button?.map((infoBtn) => {
               let {text, url} = infoBtn
              return(
                <div className="card-option-item"  key={`card-option-item-${text}`}>
                    <Link href={`${url}`}><a className='card-options'
                            >{text}</a></Link>
                </div>
              )
            } 
          )
        }
      </div>
    </div>
  );
};

export default EventsCards;
