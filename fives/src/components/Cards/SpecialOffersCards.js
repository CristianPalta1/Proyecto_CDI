import React from 'react';
import Link from 'next/link';
import { useToggle } from 'hooks/useToggle';

import SpecialOffersModal from 'components/Modals/SpecialOffersModal';
import { ConsoleView } from 'react-device-detect';

const SpecialOffersCards = ({ isMainView = false, hookHeight, listSpecialOffers, onClose, isSpecialOfferRelated = false }) => {


  const [visible, setVisible] = useToggle();
  const handleOnClose = () => {

    setVisible();
  };

  const { image_mobile, image_desktop } = listSpecialOffers;

  return (
    <>
      <div className="large-card col-md-12">
        <div className="container">
          <div className="row">
            <div className="content-info col-md-4">
              {/* <h2 className="content-title">{listSpecialOffers?.title ? listSpecialOffers.title.replace(/&amp;/g, "&") : ''}</h2> */}
              <div className="content-title special_offers">
                <h2>{listSpecialOffers?.title}</h2>
              </div>
              <div className="content-description" dangerouslySetInnerHTML={{
                __html: listSpecialOffers?.offer_description
              }} ></div>
              {
                isSpecialOfferRelated ? (<></>) : (<><p className="content-description book_now" >Book with confidence:</p>
                  <p className="content-description modal__click" onClick={() => { handleOnClose() }} >{listSpecialOffers?.title_contact}</p></>)
              }
              <div className="container__btn">
                <div className="content-actions" >
                  <Link href={listSpecialOffers ? listSpecialOffers.book_now.url : '/'}>
                    <a>{listSpecialOffers ? listSpecialOffers.book_now.text : ''}</a>
                  </Link>
                </div>
                {
                
                isMainView ? (<></>) : (<div className="content-actions" dangerouslySetInnerHTML={{ __html: listSpecialOffers?.view_more }} />)
                }
              </div>


            </div>

            <div className="content-image col-md-8">
              <picture>
                <source
                  media="(max-width: 968px)"
                  srcSet={image_mobile ? image_mobile.url : "/"}
                />
                <img
                  loading="lazy"
                  className="card-image"
                  title={image_desktop ? image_desktop.alt : "imagen_not_found"}
                  alt={image_desktop ? image_desktop.alt : "imagen_not_found"}
                  src={image_desktop ? image_desktop.url : "/"}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <SpecialOffersModal hookHeight={hookHeight} isOpen={visible} onClose={() => { handleOnClose() }} title={listSpecialOffers?.title_contact} desc={listSpecialOffers?.blog_content} />
    </>
  );
};

export default SpecialOffersCards;
