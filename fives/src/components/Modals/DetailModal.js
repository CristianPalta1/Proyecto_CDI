import React from 'react';
import ReactDOM from 'react-dom';

const DetailModal = ({ media, isOpen, onClose }) => {
  /**Sí isOpen es falso no muestra nada */
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal detail-modal" tabIndex="-1">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content ">
          <button
            type="button"
            className="btn btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          ></button>
          <div className="modal-body">
            {/* <img 
                            src={url}
                            title={title}
                            alt={alt}
                            loading="lazy"
                            className='modal-image'
                        /> */}
            <iframe
              id="modal-video"
              src={`https://www.youtube.com/embed/${media}`}
              type="text/html"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#portal')
  );
};

export default DetailModal;
