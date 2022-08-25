import Image from 'next/image';
import React from 'react';
import ContactForm from './ContactForm';

const ContactUsInfo = ({ blockData, iconsContact, isSpecialOffers = false }) => {

  const contactBlockInfo = {
    title: blockData.title_contact,
    subtitle: blockData.subtitle_contact,
    description: blockData.description_contact,
  };
  const formBlockData = {
    title: blockData.title_form,
    description: blockData.description_form,
  };

  const phoneInfoList = [

  ];
  const locationIcon = '/resourses/assets/location_contact.svg';
  const phoneIcon = '/resourses/assets/phone_contact.svg';
  const emailIcon = '/resourses/assets/email_contact.svg';
  return (
    <>
    {
       isSpecialOffers ? (<div className = "content-title contactSpecial" dangerouslySetInnerHTML={{ __html: blockData.title_contact }}/>)  : (<></>)
     }
    <section className="contact-us">
      {
        isSpecialOffers ? (<> </>) : (  <div className="container">
        <div className="row">
          <div className="contact-info col-md-6">
            <div className="content-title contactUs" dangerouslySetInnerHTML={{ __html: blockData.title_contact }}/>
            
           
            <span className="content-subtitle contactUs">
              {contactBlockInfo.subtitle}
            </span>
            <p className="content-description">
              {contactBlockInfo.description.replace(/&amp;/g, "&")}
            </p>
          </div>
          
          <div className="col-md-6 contact-form-block">
            <ContactForm formBlockData={formBlockData} />
          </div>
        </div>
      </div>)
      }
    
     
      <div className={`contact-us-info ${isSpecialOffers ? "specialOffers" : ""}`}>
        <div className="container">
          {
            iconsContact.map((iconInfo) => (
              <div key = {iconInfo.title_contact}className="contact-block contact-address">
                <div className="contact-icon">
                  <Image
                    src={iconInfo.icon_contact_export.url}
                    width={iconInfo.icon_contact_export?.dimensions?.width}
                    height={iconInfo.icon_contact_export?.dimensions?.height}
                    className="highlight-icon"
                    title="location_icon"
                    alt="location_icon"
                    loading="lazy"
                  />
                </div>
                <h4 className={`content-title ${isSpecialOffers ? "specialOffersTitle" : ""}`}>{iconInfo.title_contact}</h4>
                <div className={`content-description ${isSpecialOffers ? "specialOffersDesc" : ""}`} dangerouslySetInnerHTML={{ __html: iconInfo.body }} />
                 

               
              </div>
            ))
          }   
      
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUsInfo;
