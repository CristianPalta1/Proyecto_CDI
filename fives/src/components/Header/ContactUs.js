import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '../../utils';

export const ContactUs = ({infoContact}) => {
  const router = useRouter();
  const contactURL = `/api/contact-info-menu?locale=${router.locale}`;
  const { data: contactUs } = useSWR(contactURL, fetcher);
  if (infoContact) {
    const { title_contact, contact_info_export } = infoContact;
   
    return (
      <div className="contact-us-info">
        <h3 className="">{title_contact}</h3>
        <ul className="contact-list">
          {contact_info_export?.map(({ country_abbreviation, number }, idx) => (
            <li className="info-item" key={`contact-element-${idx}`}>
              <span>
                <b dangerouslySetInnerHTML={{ __html: country_abbreviation }} />{' '}
          
                <div className='number' dangerouslySetInnerHTML={{ __html: number }}>

                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  {
    return <></>;
  }
};
