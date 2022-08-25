import React, { useEffect } from 'react';
import Head from 'next/head';
import MainBlockDetail from '../../components/Detail/MainBlockDetail';
import InfoDetail from '../../components/Detail/InfoDetail';
import FeaturesBlockDetail from '../../components/Detail/FeaturesBlockDetail';
import GalleryDetail from '../../components/Detail/GalleryDetail';
import { getRoomById, getRooms } from '../../services/rooms';
import { isMobile } from 'react-device-detect';
import { getGalleryRooms, getInternalGalleries, getInternalGalleryById } from 'services/galleries';
import Banner from 'components/Banner';
import ListDetailGallery from 'components/Lists/ListDetailGallery';
import { getApiInstagram } from 'services/instagramApi';
import InstagramTimeline from 'components/InfoComponents/InstagramTimeline';

const GalleryIndex = ({ galleryDetailData, instagramApi }) => {

  
  
  useEffect(() => {
    document.querySelector("#__next main").classList.add('property-home');

    let header = document.querySelector('.header');
    let booking = document.querySelector('.booking-form');
    header.classList.add('scroll');
    booking?.classList.add('scroll');

    if (isMobile) return booking?.classList.remove('scroll');

    return () => {
      header.classList.remove('scroll');
      booking?.classList.remove('scroll');
    };
  }, []);

  if (galleryDetailData) {
    const {body_export, title, gallery_banner_export, gallery_image_export} = galleryDetailData;
     
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="Index" />
          <meta name="Content-Type" content="text/html;charset=utf-8" />
          <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
        </Head>
        <article>
            <Banner
                    info={{}}
                    background={gallery_banner_export?.media_image_3}
                    mobileBackground={gallery_banner_export?.image_mobile}
                />
            <ListDetailGallery title={title}
                                description={body_export}
                                data={gallery_image_export}/>

            <InstagramTimeline token={instagramApi?.script_head}
                    limit={instagramApi?.limit} />                    

        </article>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export const getServerSideProps = async ({ locale, params }) => {
    const { gallery } = params;
    const galleries = await getInternalGalleries(locale);
    const thisGallery = galleries?.find((g) => g.title?.includes(gallery.toUpperCase()));
    const currGalleryData = await  getInternalGalleryById(locale, thisGallery?.nid);
    const instagramApi = await getApiInstagram(locale);


    return {
        props: {
            galleryDetailData: currGalleryData || [],
            instagramApi: instagramApi || '',
        },
    };
};



export default GalleryIndex;
