import React from 'react'

const InfoDetailBlog = ({data}) => {
    const {
        category_press_room, 
        title_blog,blog_creation_date, 
        gallery_images_export, 
        author_image_blog,author_text,
        main_description_blog,
        blog_content,
        image_press_room } = data;
        
    const newDate = new Date(blog_creation_date);

    const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    }

    // let currDate = newDate.toLocaleDateString('es-ES', options)
    // let formattedDate = currDate.replaceAll(' ','/')
    let formattedDate = ''
  return (
    <section className='main-blog-info'>
        <div className='container'>
            <div className='main-content-info'>
                <div className='main-blog-category'>
                    <span className='category'>{category_press_room}</span>
                </div>
                <h1 className='content-title'
                    dangerouslySetInnerHTML={{
                        __html:title_blog
                    }}></h1>
                <span className='creation-date'>{formattedDate}</span>
                <div className='banner-blog'>
                    <picture>
                        <source media="(max-width: 798px)" srcSet={image_press_room?.url} />
                        <img
                            className="banner"
                            src={image_press_room?.url}
                            alt={image_press_room?.alt}
                            title={image_press_room?.title}
                        />
                    </picture>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='author-info'>
                        <div className='author-icon-field'>
                            <img 
                                src={author_image_blog?.url}
                                alt={author_image_blog?.alt}
                                title={author_image_blog?.alt}
                                className='author-icon'
                            />
                        </div>
                        <span className='posted-by'>Posted By</span>
                        <span className='author-name'>{author_text}</span>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='content-subtitle'
                        dangerouslySetInnerHTML={{
                            __html:main_description_blog
                        }}>

                    </div>
                    <div className='content-description'
                        dangerouslySetInnerHTML={{
                            __html:blog_content
                        }}>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoDetailBlog;