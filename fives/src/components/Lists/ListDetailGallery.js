import GalleryTabs from 'components/Tabs/GalleryTabs'
import React from 'react'

const ListDetailGallery = ({title, description, data}) => {

    
    const options = data?.map((el, id) => ({
        value: el.id ? el.id : id,
        label: el.title,
    }));

  return (
    <section className="gallery-types">
        <div className="container">
            <div className="gallery-info-content">
                    <div className="gallery-title"
                        dangerouslySetInnerHTML={{
                            __html:title
                        }}>
                        
                    </div>
                    <div
                    className="gallery-description"
                    dangerouslySetInnerHTML={{ __html: description ? description : '' }}
                    ></div>
            </div>
            <div className='gallery-content row'>
                <GalleryTabs galleries={data} options={options}/>
            </div>
        </div>
        
    </section>  
  )
}

export default ListDetailGallery