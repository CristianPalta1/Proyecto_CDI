import Image from 'next/image';
import Link from 'next/link';
import React,{useState, useEffect} from 'react';

function createMarkupDescription(dataDesc) {
  return { __html: dataDesc };
}

const ExperienceItem = ({ item }) => {

  

  const target = item?.informative_block.title
    ?.toLowerCase()
    .split(' ')
    .join('-');

  const [mount, setMount] = useState(false);

    useEffect(() => {
      setMount(true);
      return () => setMount(false);
    }, []);

  return (
    mount && <div className="masonry-item">
                <Image
                  src={item?.informative_block.media_image_1?.url ? item?.informative_block.media_image_1?.url : 'https://dummyimage.com/280x420/fff/fff'}
                  alt={item?.informative_block.media_image_1?.alt}
                  title={item?.informative_block.media_image_1?.title}
                  className={`masonry-image ${item?.informative_block.media_image_1?.url ? "": "image_without_src"}`}
                  width={item?.informative_block.media_image_1?.dimensions?.width}
                  height={item?.informative_block.media_image_1?.dimensions?.height}
                  priority={false}
                  layout="fill"
                />
                <div className="masonry-content-info text-start">
                  <h3 className="masonry-content-title">
                    {item?.informative_block?.title}
                  </h3>
                  <p className="masonry-content-description" dangerouslySetInnerHTML={createMarkupDescription(item?.informative_block?.description)} />     
                  {
                    item?.informative_block?.button?.map((btn, i) => (
                  
                      <a key = {i}  className="masonry-link experience-link" rel="noreferrer" href = {`${btn ? btn?.url : "/"}`}>{`${btn ? btn?.text : 'View More'}`}</a>
                
                    ))
                  }
                  {/* <Link href={`${item?.informative_block.button ? item?.informative_block?.button[0].url: "/notUrlDataInService"}`}>
                    <a className="masonry-link experience-link">{`${item?.informative_block.button ? item?.informative_block.button[0].text : 'View More'}`}</a>
                  </Link> */}
                </div>
              </div>
  );
};

export default ExperienceItem;
