import React from 'react';
import Link from 'next/link';

const KnowOurEventsItem = ({ event }) => {

  const date = new Date(event?.only_date);

  return (
    <div className="event">
      <div className="container">
        <div className="row">
          <div className="content-images col-md-8">
            <picture>
              <source srcSet={event?.mobile_image.url}
                      media="(max-width:798px)"/>
                      <img
                    className="event-image"
                    src={event?.desktop_image.url}
                    alt={event?.desktop_image.alt}
                    title={event?.desktop_image.title}
                    loading="lazy"
                  />
            </picture>
          </div>
          <div className="col-md-4">
            <div className="content-info">
              <div className="date-field">
                <p className="date">
                  {`${date?.getDate()} ${date?.toLocaleString('default', {
                    month: 'long',
                  })}`}
                  <span className="year">{date?.getFullYear()}</span>
                </p>
              </div>
              <h3 className="content-title">{event?.title}</h3>
              <p className="content-description">{event?.description}</p>
              <span className="content-schedule">{event?.date_range}</span>
              <div className="content-actions" dangerouslySetInnerHTML={{
                __html:event?.button
              }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowOurEventsItem;
