import Image from 'next/image';
import React from 'react';

const Feed = ({ feed, link }) => {
  const { id, caption, media_type, media_url } = feed;
  let post;

  const instagramIcon = '/resourses/assets/instagram_icon_feed.svg';

  switch (media_type) {
    case 'VIDEO':
      post = (
        <a className='col instagram_col_feed' target = "_blank"  rel="noreferrer" href = {link ? link.url : ""}>
          <video
            width="100%"
            height="auto"
            src={media_url}
            type="video/mp4"
            controls
            playsInline
            className="image_feed"
          ></video>
          <div className="icon__instagram_feed">
            <Image 
                className="image_feed_icon" 
                src={instagramIcon} 
                width="17.689" 
                height="16.884" 
                alt="instagram_icon" />
          </div>
        </a>
      );
      break;
    case 'CAROUSEL_ALBUM':
      post = (
        <a className='col instagram_col_feed' target = "_blank"  rel="noreferrer" href = {link ? link.url : ""}>
          <Image 
            className="image_feed" 
            width="344" 
            height="380" 
            id={id} 
            src={media_url} 
            alt={caption} 
            layout="responsive"
            />
          <div className="icon__instagram_feed">
              <Image 
                className="image_feed_icon" 
                src={instagramIcon} 
                width="17.689" 
                height="16.884" 
                alt="instagram_icon" />
          </div>
        </a>
      );
      break;
    default:
      post = (
        <a className='col instagram_col_feed' target = "_blank"  rel="noreferrer" href = {link ? link.url : ""}>
          <Image 
            className="image_feed" 
            width="344" 
            height="380" 
            id={id} 
            src={media_url} 
            alt={caption} 
            layout="responsive"
            />
          <div className="icon__instagram_feed">
             <Image 
                className="image_feed_icon" 
                src={instagramIcon} 
                width="17.689" 
                height="16.884" 
                alt="instagram_icon" />
          </div>
        </a>
      );
  }

  return <>{post}</>;
};

export default Feed;
