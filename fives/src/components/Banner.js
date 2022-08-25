import Image from "next/image";
import Booking from "./Booking";

const Banner = ({ titleBanner, info, background, mobileBackground, isContact = false }) => {

  const { title, description } = info;

  return (
    <section className={`main-banner-content ${isContact ? "marginBanner" : ""}`}>
      <picture>
        <source media="(max-width: 798px)" srcSet={mobileBackground?.url} height={mobileBackground?.dimensions?.height}
                width={mobileBackground?.dimensions?.width}/>
        <img
          className="banner"
          src={background?.url}
          alt={background?.alt}
          title={background?.title}
          height={background?.dimensions?.height}
          width={background?.dimensions?.width}
          loading="eager"
        />
      </picture>
      <div className="content-info">
          <div className="wrapper">
            {
              titleBanner ? (<div className="title" dangerouslySetInnerHTML={{
                __html: titleBanner.title
              }} />) : info.title != '' ? ((<h1 className="title">{title}</h1>)) : <></>
            }
            {
              titleBanner ? (<></>) : info.description != '' ? ((<p className="description">{description}</p>)) : <></>
            }
          </div>
      </div>
    </section>
  );
};

export default Banner;
