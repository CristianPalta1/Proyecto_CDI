import React, { useState } from 'react';
import DetailModal from '../Modals/DetailModal';

const ButtonField = ({ item, onClick, image}) => {
  const { thumbnail, video, video_type } = item;
  return (
    <div className={`banner-action ${video_type}`} onClick={onClick}>
      <img
        src={image.url}
        alt={image.alt}
        title={image.title}
        loading="lazy"
      />
      <div className='icon'>
        <img 
          src={thumbnail?.url}
          alt={thumbnail?.alt}
          title={thumbnail?.title}
          loading="lazy"
          />
      </div>
    </div>
  );
};
//@TODO: Agregar ICONO de Restaurante. 
const MainBlockDetail = ({ title, infoData, color, isDetailRestaurant = false, epic = false, isDetailExperience }) => {


  const epic_black = "/resourses/assets/epic_black.png"

  const [openModal, setOpenModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState();

  const handleShowModal = (video) => {
    setOpenModal(true);
    setCurrentVideo(video);
  };


  return (
    <>
      <section className="main-detail-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4 main-info">
              {
                isDetailRestaurant ? (  <div className = "main__icon">
                <img className = "icon__restaurant" src = {infoData?.logo.url} alt = {infoData?.logo.alt} title = {infoData?.logo.title} />
              </div>) : (<></>)
              }
          
              <h1 className="content-title" 
                  style={{ color: `${color}` }}
                  dangerouslySetInnerHTML={{
                    __html:infoData?.title?.replace(/&amp;/g, "&")
                  }}>
                
              </h1>
              <p className="content-description">{infoData?.description?.replace(/&amp;/g, "&")}</p>
              <div
                className="user-actions"
              
              >
                  {
                    (isDetailRestaurant || isDetailExperience) && infoData?.button.map((btn, i)=>( 
                      <div key={`btn-${i}`} 
                        className={`btn-${i}`}
                        dangerouslySetInnerHTML={{
                        __html:btn
                        }}
                    ></div>
                  ))
                } 
              </div>
            </div>
            <div className="col-md-8 main-picture">
              <picture>
                <source media="(max-width: 968px)" srcSet={infoData?.image_mobile?.url} />
                <img
                  loading="lazy"
                  className="main-detail-image"
                  title={infoData?.media_image_1?.title}
                  alt={infoData?.media_image_1?.alt}
                  src={infoData?.media_image_1?.url}
                />
              </picture>
              {
                epic ? (<div className = "epic__badge">
                <img src = {epic_black} alt = "epic_badge" title = "epic_badge" />
              </div>)
              : (<></>)
              }
              
              {
                infoData?.video.lenght > 0 ? (
                <div className="banner-actions">
                  {infoData?.video.map((video, i) => (
                    <ButtonField
                    item={video}
                    image={infoData?.media_image_1}
                    key={`button-field ${i}`}
                    onClick={() => handleShowModal(video.video)}
                    />
                  ))}
                </div>
                ):(
                <>
                </>
                )
              }
            </div>
          </div>
        </div>
      </section>
      <DetailModal
        media={currentVideo}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default MainBlockDetail;
