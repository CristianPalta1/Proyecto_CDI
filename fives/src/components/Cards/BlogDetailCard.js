import React from 'react'

const BlogDetailCard = ({blogCard}) => {
    const  { gallery_image_mobile, gallery_image } = blogCard;
  return (
    <div className='card related-blog-card'>
        <div className='card-header'>
            <picture>
                <source media="(max-width: 968px)" srcSet={gallery_image_mobile?.url} 
                width={gallery_image_mobile?.dimensions.width}
                height={gallery_image_mobile?.dimensions.height}/>
                <img
                    loading="lazy"
                    className="card-image"
                    title={gallery_image?.title}
                    alt={gallery_image?.alt}
                    src={gallery_image?.url}
                    width={gallery_image?.dimensions.width}
                    height={gallery_image?.dimensions.height}
                />
            </picture>
        </div>
        <div className='card-body'>
            <span className='content-description'></span>
        </div>
    </div>
  )
}

export default BlogDetailCard