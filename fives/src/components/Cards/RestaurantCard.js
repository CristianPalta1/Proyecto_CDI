import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RestaurantCard = ({ rest, withOutHeight = false, isRooms = false, isRestaurant = false, epic = "0" }) => {
  const { image_mobile, media_image_1, description, logo, button, title } = rest.informative_block
  const {
    featured_hours,
    url_alias,  
    id,
    hotel,
    type
  } = rest;

  
  const epic_black = "/resourses/assets/epic_black.png"
  const [identify, setIdentify] = useState(!rest.type?.name ? rest.type : rest.type.name);

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  return (
    mount && (
      <div className="card restaurant-card">
        <div className="card-header">
          <picture>
            <source media="(max-width: 968px)" srcSet={image_mobile?.url}
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
          {
            epic === "1" ? (<div className="epic__badge">
              <img src={epic_black} alt="epic_badge" title="epic_badge" />
            </div>)
              : (<></>)
          }
        </div>
        <div className={`card-body ${identify} ${isRooms ? "withOutPadding" : ""} ${withOutHeight ? "bodyRes" : ""}`}>
          <div className="restaurant-icon">
            <Image
              src={logo ? logo?.url: ''}
              alt={logo?.alt}
              title={logo?.title}
              loading="lazy"
              width={logo?.dimensions?.width}
              height={logo?.dimensions?.height}
            />
          </div>
          <h3 className="card-title"
            dangerouslySetInnerHTML={{
              __html: title
            }}
          ></h3>
          <div className={`card-description ${withOutHeight ? "card__restaurant" : ""}`}
            dangerouslySetInnerHTML={{
              __html: description
            }}></div>
        </div>
        <div className={`card-footer ${withOutHeight ? "card__restaurant--footer" : ""} ${isRestaurant ? "sliderRealtedRestaurant" : ""}`}>
          <ul className={`card-options ${isRooms ? "links__rooms" : ""} ${withOutHeight ? "restaurant_btn" : ""}`}>


            {

              isRooms ? (
                button && button.map((btn, id) => {


                  let { text, url } = btn
                  let className = text?.trim().replace(' ', '-').toLowerCase()

                  return (
                    <div className="card-option-item" key={`card-option-item-${id}`} dangerouslySetInnerHTML={{
                      __html: btn
                    }} />


                  )
                })
              ) :
                (
                  button && button.map((btn, id) => {

                    let { text, url } = btn
                    let className = text?.trim().replace(' ', '-').toLowerCase()

                    return (
                      <li className="card-option-item" key={`card-option-item-${id}`}>

                        <div className='card-option-link' dangerouslySetInnerHTML={{ __html: btn }}>

                        </div>
                      </li>

                    )
                  })
                )
            }

          </ul>
          <div className={`card-footer-info  ${withOutHeight ? "card__restaurant--footer-info" : ""}`}>
            {featured_hours?.map((el, idx) => (
              <div className="restaurant-item-info" key={`hours-${idx}`}>
                <span>{el?.title}</span>
                <p>{el?.date_range}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default RestaurantCard;
