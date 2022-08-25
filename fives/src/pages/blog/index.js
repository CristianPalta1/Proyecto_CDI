import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AcordeonList from 'components/AcordeonList/AcordeonList';
import { isMobile } from 'react-device-detect';

//Services
import { getFirstBlockListingPages } from '../../services/listings';
import { getBlogPress } from "../../services/blog"

//Components
import Banner from '../../components/Banner';
import BannerCard from 'components/Cards/BannerCard';
import OutStandingCards from 'components/Cards/OutStandingCard';
import BlogCard from "components/Cards/BlogCard"
import BlogFilter from "components/Blog/BlogFilter"
import Twitter from 'components/InfoComponents/Twitter';


const BlogPressRoom = ({ blockData, blogData }) => {

  const prueba1 = "/resourses/assets/experience-gastronomia.png"
  const lupeSearch = "/resourses/assets/search_blog.svg"
  const [dataBlog, setDataBlog] = useState([])
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

  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setDataBlog(blogData)
  }, [blogData])

  var meta = { title: "", description: "" }



  if (blockData && blogData) {

    const blogHighligth = dataBlog.filter((blog) => {
      return blog.outstanding === "On"
    })


    const renderBlog = dataBlog.filter((blog) => {
      return blog.outstanding !== "On"
    })
   
    
    
    let searchedBlog = [];
    const onSearchValue = (event) => {     
      setSearchValue(event.target.value);
    }

    if (!searchValue.length >= 1) {   
      searchedBlog = renderBlog
    } else {     
      searchedBlog = renderBlog.filter(blog => {
        //TODO: se convierte en minuscula tanto el input como lo que este escrito en la data
        const blogText = blog.title.toLowerCase()        
        const searchText = searchValue.toLowerCase()

        //TODO: Se retorna el todo que se encuentre
        return blogText.includes(searchText)
      })

    }


    const filterBlogHighlight = blogHighligth.splice(0, 1)



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
        <section className="container blog__press">
          <OutStandingCards filterBlogHighlight={filterBlogHighlight} />

          <div className="blog__container-view">
            <div className="filter__blog_content">
              <BlogCard renderBlog={searchedBlog} isMobile={isMobile} blogData={blogData} setDataBlog={setDataBlog} />

            </div>
            <div className="filter__options">
              <div className="search__content">
                <input className="search__input" type="text" id="search" placeholder="Search" value={searchValue} onChange={onSearchValue} />
                <div className="search__container">
                  <img src={lupeSearch} alt="search" title="search" />
                </div>
              </div>
              <div className="view__blog_content">
                <h3 className="filter_title">
                  Categories
                </h3>
                <BlogFilter blogData={blogData} setDataBlog={setDataBlog} />
              </div>
              <div className="view__blog_twitter">
                <Twitter title={blockData?.title_contact} />
              </div>
            </div>
          </div>
        </section>


      </>
    );
  } else {
    return <p>Loading.....</p>;
  }
};

export const getStaticProps = async ({ locale }) => {
  const blockData = await getFirstBlockListingPages(
    locale,
    'the_fives_blog_press_room'
  );
  const blogData = await getBlogPress(locale);



  return {
    props: {
      blockData: blockData[0] || [],
      blogData: blogData || []

    },
  };
};

export default BlogPressRoom;
