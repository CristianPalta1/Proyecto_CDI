import React, { useEffect } from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';

//Services
import { getFirstBlockListingPages } from '../../services/listings';
import { getApiInstagram } from 'services/instagramApi';
import { getListOfGalleries } from 'services/galleries';

//Components
import Banner from '../../components/Banner';
import BannerCard from 'components/Cards/BannerCard';
import InstagramTimeline from 'components/InfoComponents/InstagramTimeline';
import GalleryCards from 'components/Cards/GalleryCards';

const Gallery = ({
    blockData,
    instagramApi,
    listGallery,
}) => {
    var meta = { title: "", description: "" }
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
            document.querySelector("#__next main").classList.remove('property-home');
        };
    }, []);

   

  
    
    if (blockData && instagramApi && listGallery) {
        blockData.metatags ? meta = JSON.parse(blockData.metatags) : meta

        const { image_mobile, media_image } = blockData.banner


        return (
            <>
                <Head>
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description} />
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="description" content={meta.description} />
                    <meta name="robots" content="Index" />
                    <meta name="Content-Type" content="text/html;charset=utf-8" />
                    <meta name="X-UA-Compatible" content="IE=edge, chrome=1" />
                </Head>
                <Banner
                    info={{}}
                    background={media_image}
                    mobileBackground={image_mobile}
                />
                <div className='galleryCardBaner'>
                    <BannerCard innerText={true} data={blockData.banner} />
                </div>
                <GalleryCards listGallery={listGallery} />
                <InstagramTimeline token={instagramApi?.script_head}
                    limit={instagramApi?.limit} />

            </>
        );
    } else {
        return <p>En construccion</p>;
    }
};

export const getStaticProps = async ({ locale }) => {
    const blockData = await getFirstBlockListingPages(
        locale,
        'the_fives_galery'
    );
    const instagramApi = await getApiInstagram(locale);
    const listGallery = await getListOfGalleries(locale);


    return {
        props: {
            blockData: blockData[0] || [],
            instagramApi: instagramApi || [],
            listGallery: listGallery || []
        },
    };
};

export default Gallery;
