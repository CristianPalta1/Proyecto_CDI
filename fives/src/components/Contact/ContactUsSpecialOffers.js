import Image from 'next/image';
import React from 'react'


const ContactUsSpecialOffers = ({iconsContact}) => {
    const phoneInfoList = [


    ]
    const locationIcon = '/resourses/assets/location_contact.svg';
    const phoneIcon = '/resourses/assets/phone_contact.svg';
    const emailIcon = '/resourses/assets/email_contact.svg';
    return (
        <section className='contact-us-special-offers'>
            <div className='container space_offers'>
                <div className='contact-info '>
                    <h1 className='content-title'>Contact<span className='content-title-comp'>Us</span></h1>
                </div>
            </div>
            <div className='contact-us-info'>
                <div className='container'>
                {
            iconsContact.map((iconInfo) => (
              <div key = {iconInfo.title_contact}className="contact-block contact-address">
                <div className="contact-icon">
                  <Image
                    src={iconInfo.icon_contact_export.url}
                    width={iconInfo.icon_contact_export?.dimensions?.width}
                    height={iconInfo.icon_contact_export.dimensions?.height}
                    className="highlight-icon"
                    title="location_icon"
                    alt="location_icon"
                    loading="lazy"
                  />
                </div>
                <h4 className="content-title">{iconInfo.title_contact}</h4>
                <div className="content-description" dangerouslySetInnerHTML={{ __html: iconInfo.body }} />
                 

               
              </div>
            ))
          }   
                  
                   
                </div>
            </div>
        </section>
    )
}

export default ContactUsSpecialOffers;