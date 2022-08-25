import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DiningField = ({ el }) => {
  const { desktop_image } = el;
  return (
    <div className="dining-field">
      <Image
        src={desktop_image.url}
        alt={desktop_image.alt}
        title={desktop_image.title}
        priority={false}
        width={desktop_image?.dimensions?.width}
        height={desktop_image?.dimensions?.height}
      />
    </div>
  );
};

const Dining = ({ diningInfo }) => {
 
  if (diningInfo) {
    const { format_description, images, long_title, button } = diningInfo;
    return (
      <section className="dining-section">
        <div className="row">
          <div className="content-images col-8">
            <div className="dining-images-content">
              {images.map((el, idx) => (
                <DiningField key={idx} el={el} />
              ))}
            </div>
          </div>
          <div className="content-info col-4">
            <div className="content-title"   dangerouslySetInnerHTML={{ __html: long_title }} />
          
            {/* <p className="content-description">{long_title}</p> */}
            <div
              className="content-abstract"
              dangerouslySetInnerHTML={{ __html: format_description }}
            />
            <div className="content-actions">
              <Link href={button ? button.url : "/urlNotInService"}>
                <a className="btn btn-view-more">{button ? button?.text: "View More"}</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Dining;
