import React, { useState } from 'react';
import Link from 'next/link';

const TypesOfRooms = ({ roomsAndTypesInfo = [], sectionTitle }) => {
  const [tabActive, setTabActive] = useState(0);
  const initialTitle = roomsAndTypesInfo[tabActive].title_button;
  const [ newtitle, setNewTitle ] = useState(initialTitle);


  const handleClick = (id, title) => {
    setTabActive(id);
    setNewTitle(title);
  
  }

 

  if (roomsAndTypesInfo.length) {
    return (
      <section className="typeof-rooms">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={
              roomsAndTypesInfo[tabActive] &&
              roomsAndTypesInfo[tabActive]?.background_image_mobile.url
            }
          />
          <img
            loading="lazy"
            className="banner-type-room"
            title={
              roomsAndTypesInfo[tabActive] &&
              roomsAndTypesInfo[tabActive].background_image.title
            }
            alt={
              roomsAndTypesInfo[tabActive] &&
              roomsAndTypesInfo[tabActive].background_image.alt
            }
            src={
              roomsAndTypesInfo[tabActive] &&
              roomsAndTypesInfo[tabActive].background_image.url
            }
          />
        </picture>
        <div className="container">
          <div className="content-info">
            <h2 translate='no' className="content-title"
                dangerouslySetInnerHTML={{
                  __html:sectionTitle
                }}>
            </h2>
            <div className="content-actions">
              <Link href={`${roomsAndTypesInfo[tabActive].button.url}`}>
                <a translate='no' className="btn btn-see-all">{`${roomsAndTypesInfo[tabActive].button.text}`}</a>
              </Link>
            </div>
          </div>
          <div className="content-types-type">
            {roomsAndTypesInfo?.map((type, id) => {
              let{ title_button, title } = type;
              return (
                <button
                  translate='no'
                  key={`type-item-content ${id}`}
                  onClick={() => handleClick(id, title_button) }
                  className={`type-item-content ${
                    tabActive === id ? 'active' : ''
                  }  ${title}`}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default TypesOfRooms;
