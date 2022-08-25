import Head from 'next/head'
import React, { useEffect } from 'react'
import { getApiInstagram } from 'services/instagramApi';
import { isMobile } from 'react-device-detect';
import { getBlogPress, getSpecificBlogPressData } from 'services/blog';
import InfoDetailBlog from 'components/Detail/InfoDetailBlog';
import RelatedCarousel from 'components/Carousels/RelatedItemsCarousel/RelatedCarousel';
import RelatedBlogCarousel from 'components/Carousels/RelatedBlogCarousel/RelatedBlogCarousel';
import Share from 'components/Blog/Share';



const Blog = ({ blogData  }) => {




  useEffect(() => {
    document.querySelector("#__next main").classList.remove('property-home');

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


  if (blogData) {

    return (
      <>
        <Head>
          <title dangerouslySetInnerHTML={{ __html: blogData?.title_blog }}></title>
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
          <InfoDetailBlog data={blogData} />
          {blogData?.gallery_images_export?.length > 0 && <RelatedBlogCarousel elemts={blogData?.gallery_images_export} />}
          {blogData?.share_on?.icon_and_description?.length > 0 && <Share media={blogData?.share_on}
            tags={blogData?.subcategory_blog}
            category={blogData?.category_press_room}
            title={blogData?.title_blog} />}
        </article>
      </>
    )
  } else {
    return <> <h1 className='text-center'>Loading...</h1></>;
  }

}

export const getStaticPaths = async ({ locales }) => {
  const blogs = await getBlogPress();

  const paths = [];
  blogs?.forEach((blog) => {

    for (const locale of locales) {
      if (locale !== 'default') {
        paths.push({
          params: {
            blog: blog?.title?.toLowerCase().replace(/<[^>]*>/g, ' ').replace(/&amp;/g, "and").replace(/\s+/g, ' ').trim().split(' ').join('-'),
            id: blog?.id ? parseInt(blog?.id) : 0,
          },
          locale,
        });
      }
    }
  });

  return {
    paths,
    fallback: true,
  };
};

// const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1).replaceAll('-',' ');
// }

export const getStaticProps = async ({ locale, params }) => {
  const { blog } = params;

  // const acurrBlogTitle = capitalizeFirstLetter(blog);
  const blogs = await getBlogPress(locale);

  const thisBlog = blogs?.find((b) => b?.title?.toLowerCase().replace(/<[^>]*>/g, ' ').replace(/&amp;/g, "and").replace(/\s+/g, ' ').trim().split(' ').join('-') === blog);

  const blogData = await getSpecificBlogPressData(locale, thisBlog?.nid);

  const instagramApi = await getApiInstagram(locale);

  return {
    props: {
      blogData: blogData || [],
      instagramApi: instagramApi || '',
    },
  };
};

export default Blog;