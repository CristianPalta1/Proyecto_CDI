import React from 'react';
import Image from 'next/image';

const DetailBlock = ({ item }) => {
  const { title, format_description, icon } = item;

  return (
    <div className="col-md-4 special-offers">
      <div className="contact-icon special-offers_icon">
        <Image
          src={icon?.url}
          width={icon?.dimensions?.width}
          height={icon?.dimensions?.height}
          className="highlight-icon"
          title="location_icon"
          alt="location_icon"
          loading="lazy"
        />
      </div>
      <div className={`detail-block detail-block_restaurant`}>
        <div className={`detail-block-title title_restaurant`}
          dangerouslySetInnerHTML={{
            __html: format_description
          }}>
        </div>

        {/* <div className={`detail-block-subitle`}
          dangerouslySetInnerHTML={{
            __html:format_description
          }}>
        </div> */}

        <p className={`detail-block-type`}>{title}</p>
      </div>
    </div>
  );
};



const InfoDetailSpecialOffer = ({ data, title }) => {
  //   const splittedTitle = title.split(' ');

  return (
    <section className="complementary-information-section special--offers">
      <div className="container">
        <div className="main__title" dangerouslySetInnerHTML={{
          __html: title
        }}>

        </div>
        <div className="row details-content">
          {data.length > 0 && data.map((obj, id) => (
            <DetailBlock item={obj} key={`detail-block ${id}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoDetailSpecialOffer;
