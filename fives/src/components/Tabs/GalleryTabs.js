import GalleryDetail from 'components/Detail/GalleryDetail';
import React, { useState } from 'react'

function GalleryTabs({options = [], galleries}) {
    
        const [initialTab, setInitialTab] = useState(0);
        const [tabActive, setTabActive] = useState(options[initialTab]?.value );
        const [galleryTitle, setGalleryTitle] = useState(options[initialTab]?.label);

        const handleFilter = ( val, label ) =>{ 
            setTabActive(val)
            setGalleryTitle(label)
        }
    
        return (
            <>
                <div className="rooms-types-tabs">
                    {options.map(({ value, label, id }, idx,) => {
                        
                    return (
                        <button
                        key={`tab-${idx}`}
                        type="button"
                        className={`tab-room ${tabActive === value && 'active'}`}
                        onClick={() => handleFilter(value, label)}
                        >
                        {label}
                        </button>
                    )

                        }
                    )}
                </div>
                <div className="rooms-types-content row">
                        {
                            options.length > 0 && galleries[tabActive].title === galleryTitle ? 
                                <GalleryDetail title={''}  elements={galleries[tabActive].gallery_images}/>
                            :
                            <></>
                        }
                </div>
            </>
        )
    
}

export default GalleryTabs;