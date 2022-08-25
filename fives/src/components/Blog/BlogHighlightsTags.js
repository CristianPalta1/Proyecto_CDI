import React from 'react'

const BlogHighlightsTags = ({tag}) => {
    
  return (
    <div className='blog-tags-content'>
        {
            tag.map((el, i) => (
                <div className='blog-tag' key={`tag ${i}`}>
                    <span className='tag'>{el?.name}</span>
                </div>
            ))
        }
    </div>
  )
}

export default BlogHighlightsTags;