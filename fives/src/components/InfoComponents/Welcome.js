/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useHomeContext } from '../../store/Home';

const SIZES = {
  MOBILE: {
    HEIGHT: 350,
    WIDTH: 170,
  },
  DESKTOP: {
    HEIGHT: 800,
    WIDTH: 400,
  },
};

const Welcome = () => {
  const {
    block_images: { title, body, subtitle, images },
    mobileView,
  } = useHomeContext();

  var subtitleRender = subtitle.replace(/&amp;/g, "&")
  const getImageData = (position) => {
    const key = mobileView ? 'image_mobile' : 'media_image';
    return {
      src: images[position][key].url,
      alt: images[position][key].alt,
      title: images[position][key].title,
      height: images[position][key].dimensions?.height,
      width: images[position][key].dimensions?.width,
      priority: true,
      placeholder:"blur",
      blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
    };
  };

  return (
    <section className="tfh-welcome-content">
      <div className="container">
        <div className="row">
          <div className="tfh-grid-images col-sm-7">
            <div className="tfh-images-content tfh-image-left">
              <Image {...getImageData(0)} />
            </div>
            <div className="tfh-images-content tfh-image-right">
              <Image {...getImageData(1)} />
            </div>
          </div>
          <div className="tfh-welcome-introduction col-sm-5">
            <div className="tfh-welcome-introduction-content">
              <h2 className="content-title">
                {title}
                <span className="content-title-comp">{subtitleRender}</span>
              </h2>
              <div
                className="content-description"
                dangerouslySetInnerHTML={{ __html: body }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
