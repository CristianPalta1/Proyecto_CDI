import React, { Fragment, useState } from 'react';

export default function ListHotelPlaces({ data, setSelectedPlace }) {
  const [buttonActive, setButtonActive] = useState(data[0]);
  return (
    <Fragment>
      {data.map((item, index) => (
        <div
          key={index.toString()}
          className={`item_information ${
            buttonActive === item.id ? 'active' : ''
          }`}
          onClick={() => {
            setButtonActive(item.id);
            setSelectedPlace(item);
          }}
        >
          <div className="container__icon--texts">
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="title__place">{item.name}</div>
          </div>
          <div className="desc">
            <p
              className="addres__place"
              dangerouslySetInnerHTML={{ __html: item.description__value }}
            />
          </div>
        </div>
      ))}
    </Fragment>
  );
}
