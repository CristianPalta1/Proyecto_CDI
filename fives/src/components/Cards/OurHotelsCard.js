import Image from 'next/image';
import Link from 'next/link';

const OurHotelsItem = ({ hotel }) => {
  const { name, description, image, image_mobile, links } = hotel;

  return (
    <div className="our-hotel-item">
      <div className="our-hotel-body">
        <picture>
          <source media="(max-width: 968px)" srcSet={image_mobile?.url} 
                  height={image_mobile?.dimensions?.height}
                  width={image_mobile?.dimensions?.width} />
          <Image
            loading="lazy"
            className="hotel-image"
            title="hotel-pool"
            alt={image?.alt}
            src={image?.url}
            height={image?.dimensions?.height}
            width={image?.dimensions?.width}
          />
        </picture>
      </div>
      <div className="our-hotel-footer">
        <div className="our-hotel-description">
          <h4 className="our-hotel-title">{name}</h4>
          <div
            className="our-hotel-paragraph"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="our-hotel-actions">
          {links.map((link, id) => {
            let { url, text } = link;
            let classLink = text.replace(/ /g, '-').toLowerCase();
            return (
              <Link href={`${url}`} key={`btn ${text}`}>
                <a target={`${id === 1 ? "_blank" : "_self"}`} className={`btn btn-${classLink}`}>{text}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurHotelsItem;
