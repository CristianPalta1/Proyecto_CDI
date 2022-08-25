import React, { useState, useCallback, useEffect, useRef } from 'react';
import axios from 'axios';

import { isMobile } from 'react-device-detect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  ArrowLeft,
  ArrowRigth,
  responsive,
} from '../Carousels/OurHotelsCarousel/OurHotelsCarouselFeatures';

import Feed from './Feed';

const InstaFeeds = ({ token, limit, link }) => {

 
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);

  const [feeds, setFeedsData] = useState([]);
  const [hasError, setHasError] = useState(true);

  const tokenProp = useRef(token);
  tokenProp.current = token;

  const fetchInstagramPost = useCallback(async () => {
    try {
      await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${limit}&access_token=${token}`
        ).then((resp) => {
           setFeedsData(resp.data.data);
           setHasError(false);
          });
    } catch (err) {
      setHasError(true);
      console.error('Error in fetchInstagramPost', err);
    }
  }, [limit, token]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchInstagramPost();
    return () => {
      abortController.abort();
    };
  }, [fetchInstagramPost, limit, token ]);

  if(!hasError){
    return (
      <>
        {isMobile && mount ? (
          <div className = "container">
            <div className = "row">
            <div className='col-md-12 carousel__movil'>
              <Carousel
                containerClass="instagram_carousel"
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr// means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                pauseOnHover={true}
                autoPlaySpeed={6000}
                keyBoardControl={true}
                transitionDuration={500}
                centerMode={false}
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                customRightArrow={<ArrowRigth />}
                customLeftArrow={<ArrowLeft />}
              >
                {feeds.map((feed) => (
                  <Feed key={feed.id} feed={feed} link= {link} />
                ))}
              </Carousel>
            </div>
            </div>
        </div>
        ) : (
          <div className="container-fluid">
            <div className="row">
              {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} link = {link}/>
              ))}
            </div>
          </div>
        )}
      </>
    );     
  }else{
    return(
      <></>
    );
  }
  
};

export default InstaFeeds;
