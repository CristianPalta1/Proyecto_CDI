import React from 'react';
import Link from 'next/link';
import { useToggle } from 'hooks/useToggle';

import BlogFilter from "../Blog/BlogFilter"


const BlogCards = ({ renderBlog, isMobile, blogData , setDataBlog}) => {
  const lupeSearch = "/resourses/assets/search_blog.svg"

  const [visible, setVisible] = useToggle();
  const handleOnClose = () => {

    setVisible();
  };



  return (
    <>
      {
        isMobile ?
          (<div className="filter__options">
            <div className="search__content">
              <input className="search__input" type="text" id="search" placeholder="Search" />
              <div className="search__container">
                <img src={lupeSearch} alt="search" title="search" />
              </div>
            </div>
            <div className="view__blog_content">
              <h3 className="filter_title">
                Categories
              </h3>
              {/* <BlogFilter blogData={blogData} setDataBlog={setDataBlog} /> */}
            </div>
          
          </div>) : (<></>)
      }

      {
        renderBlog.map((item, i) => (
          <div key={i} className="card__blog">
            <picture className="image__blog_destacada">
              <source media="(max-width: 798px)" srcSet={item?.image_mobile_press_room_export?.url} />
              <img src={item?.image_press_room_export?.url}
                title={item?.image_press_room_export?.alt}
                alt={item?.image_press_room_export?.alt}
                width={item?.image_press_room_export?.dimensions.width}
                height={item?.image_press_room_export?.dimensions.height}

              />
            </picture>
            <div className="desc__blog_destacado" >
              <div className="category__name">
                <p className="category">{item?.category_name}</p>
              </div>
              <div className="container__information">
                <span className="date__posted">
                  {item?.blog_creation_date}
                </span>
                <div className="title__information" dangerouslySetInnerHTML={{ __html: item?.title_blog_export?.replace(/&amp;/g, "&") }}>
                  {/* {item?.title_blog_export} */}
                </div>

                <p className="description__information">
                  {item?.main_description_blog}
                </p>

              </div>
              <div className="link__container">
                <a target="_self" rel="noreferrer" href={item?.view_more_export?.url?.replace(/&amp;/g, "and").replace(/%26/g, "and")} className="linkItems">{item?.view_more_export?.text}</a>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default BlogCards;
