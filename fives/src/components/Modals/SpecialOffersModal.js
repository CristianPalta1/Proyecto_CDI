import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Script from 'next/script';
import { useRouter } from 'next/router';

const SpecialOffersModal = ({ isOfferDetail, hookHeight, isOpen, onClose, title, desc }) => {

  const iconInformation = "/resourses/assets/icon_information_special_offers.svg"

  const { locale } = useRouter();


  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted])

  if (!isOpen) return <></>;

  if (mounted && isOpen) return ReactDOM.createPortal(
    <div className={`modal ${isOfferDetail ? "modal-detail-offers" : ""} modal__specialOffers ${isOpen && "showModal"}`} tabIndex="-1">
      <div className="modal-dialog modal-md modal-dialog-centered">
        <div className="modal-content ">
          <button
            type="button"
            className="btn btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          ></button>
          <div className="modal-body">
            <div className="icon__information">
              <img src={iconInformation} alt="icon_information" title="icon_information" />
            </div>
            {
              isOfferDetail ? (<div className="form__title--modal__html" dangerouslySetInnerHTML={{ __html: title }} />) : (<h2 className="form__title--modal">{title}</h2>)
            }

            <div className={`form__subtitle--modal ${hookHeight <= 570 ? "small-screen" : ""}`} dangerouslySetInnerHTML={{ __html: desc }} />


          </div>
        </div>
      </div>
    </div>,

    document.getElementById('portal')
  );
};

export default SpecialOffersModal;
