import React, {useState, useEffect} from 'react'
import BlogHighlightsTags from './BlogHighlightsTags';
import mailToIcon from '../../../public/resourses/assets/mailto.svg'
import Image from 'next/image';

const Share = ({media, tags = [], category, title}) => {
    
    let arrUrl = {
        "Facebook": `https://www.facebook.com/sharer/sharer.php?u=`,
        "Twitter":`https://twitter.com/intent/tweet?url=`,
        "Linkedin": `https://www.linkedin.com/sharing/share-offsite/?url=`,
    }

    const [urlPage, setUrlPage] = useState();
    
    useEffect(() => {
      setUrlPage(window.location.href);
    }, [])
    
    const handlerShareInfo = (name) =>{

        const currURL = arrUrl[name];

        const height = 850;
        const width = 700;

        if (typeof window !== "undefined") {
            let y = window.outerHeight / 2 + window.screenY - height / 2;
            let x = window.outerWidth / 2 + window.screenX - width / 2;
            window.open(
                `${currURL}${encodeURIComponent(urlPage)}`,
                "window",
                `width=${width},height=${height},top=${y},left=${x}`
            );
        } 
    }

    const shareData = {
        title: `${category}`,
        text: `${title}`,
        url: `${urlPage}`,
    }


    const handleShareData = async () =>{
        try {
            await navigator.share(shareData);
        } catch(err) {
            console.error('Error in handleShareData', err);
          }
    }

    

  return (
    <section className='blog-share-on'>
        <div className='container'>
            <h2 className='content-title'
                dangerouslySetInnerHTML={{
                    __html:media?.title_share
                }}></h2>
            <div className='share-channels-content'>
                {
                    media?.icon_and_description.map((red, i) => (
                        <a className='share-channel' 
                            key={`social-media ${i}`}
                            onClick={()=>handlerShareInfo(red.name)}>
                            <Image className='channel'
                                src={red?.media_image?.url}
                                title={red?.media_image?.title}
                                alt={red?.media_image?.alt}
                                height={red?.media_image?.dimensions?.height}
                                width={red?.media_image?.dimensions?.width}
                            />
                        </a>
                    ))
                }
                    <a className='share-channel' 
                            key={`social-media`}
                            onClick={()=>handleShareData()}>
                            <Image className='channel'
                                src={mailToIcon?.src}
                                title={`mail-to`}
                                alt={`mail-to`}
                                width={mailToIcon?.width}
                                height={mailToIcon?.height}
                            />

                        </a>
            </div>  
            {tags.length > 0 && <BlogHighlightsTags tag={tags} />}
        </div>
    </section>
  )
}

export default Share;