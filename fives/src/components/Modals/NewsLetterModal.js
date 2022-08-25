import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import Script from 'next/script';
import { useRouter } from 'next/router';

const NewsLetterModal = ({ isOpen, onClose, title, desc }) => {
  const { locale } = useRouter();
  const hubSpotForm =
    locale === 'es'
      ? 'c597953b-5b8a-4dbe-901b-cfe719d07433'
      : '6606aee2-36de-4288-91dd-939c6b57e611';

      const [mounted, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
      }, [mounted])      

  if (!isOpen) return <></> ;

  if( mounted && isOpen ) return ReactDOM.createPortal(
    <div className={`modal modal__newsletter ${isOpen && "showModal"}`} tabIndex="-1">
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
            <h2 className = "form__title--modal">{title}</h2>
            <p className = "form__subtitle--modal">{desc}</p>
            <div
              id="newsletter-form-container"
              className="form-connected-with"
            />
            <Script
              id="hbspt"
              dangerouslySetInnerHTML={{
                __html: `
                    hbspt.forms.create({
                      region: "na1",
                      portalId: "5943261",
                      formId: "${hubSpotForm}",
                      target: '#newsletter-form-container'
                    });
                    `,
                }}
            />
          </div>
        </div>
      </div>
    </div>,
 
    document.getElementById('portal')
  );
};

export default NewsLetterModal;
