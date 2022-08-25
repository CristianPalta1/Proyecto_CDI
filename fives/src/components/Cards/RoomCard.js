import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../utils';

const RoomCard = ({ room, isResidence = false }) => {
  const [mount, setMount] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const specificRoomURL = `/api/specific-room?locale=${locale}&id=${room.id}`;
  const { data: specificRoomInfo } = useSWR(specificRoomURL, fetcher);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, []);


  if (specificRoomInfo) {
    const { url_alias } = specificRoomInfo;
    const splittedUrlAlias = url_alias.split('/');
    return (
      mount && (
        <div className="card room-card">
          <div className="card-header">
            <picture>
              <source
                media="(max-width: 968px)"
                srcSet={room.image_mobile?.url || room.informative_block?.image_mobile?.url}
              />
              <img
                loading="lazy"
                className="card-image"
                title={room?.field_media_image_1?.alt || room.informative_block?.media_image_1?.title}
                alt={room?.field_media_image_1?.alt || room.informative_block?.media_image_1?.alt}
                src={room?.field_media_image_1?.url || room.informative_block?.media_image_1?.url}
              />
            </picture>
          </div>
          <div className={`card-body ${isResidence ? "residence__body" : ""}`}>
            <h3 className="card-title">{room?.title}</h3>
            {
              isResidence ? (  <p className="card-description">{specificRoomInfo?.informative_block.description}</p>) : (  <p className="card-description">{room?.description}</p>)
            }
          
          </div>
          <div className="card-footer">
            <ul className={`card-options ${isResidence ? "residence__align" : ""}`}>
              {
                specificRoomInfo?.informative_block?.button?.map((item) => (
                  <div key = {item} className="card-option-item " dangerouslySetInnerHTML={{
                    __html: item
                  }} />




                ))
              }

            </ul>
          </div>
        </div>
      )
    );
  } else {
    return <></>;
  }
};

export default RoomCard;
