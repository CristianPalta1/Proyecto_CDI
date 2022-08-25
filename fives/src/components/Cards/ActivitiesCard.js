import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ActivitiesCard = ({ actv }) => {
  if (actv) {
    const { informative_block, view_experience } = actv;
   
    return (
      <div className="card activities-card">
        <div className="card-header">
          <Image
            priority={false}
            className="card-image"
            title={informative_block.media_image_1.title}
            alt={informative_block.media_image_1.alt}
            src={informative_block.media_image_1.url}
            height={informative_block.media_image_1?.dimensions?.height}
            width={informative_block.media_image_1?.dimensions?.width}
          />
        </div>
        <div className="card-body">
          <h3 className="card-title">{informative_block.title}</h3>
          <p className="card-description">{informative_block.description}</p>
        </div>
        <div className="card-footer">
          <ul className="card-options">
            {
              actv.informative_block.button.map((btns)=>(

            <li key = {btns.text}className="card-option-item">
              <Link href={btns.url ? btns.url : ''}>
                <a className="card-link">{btns.text}</a>
              </Link>
            </li>
              ))
            }
           
          </ul>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ActivitiesCard;
