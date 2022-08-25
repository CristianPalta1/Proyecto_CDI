import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAppContext } from '../../store/App';
import { useRouter } from 'next/router';
import { fetcher } from '../../utils';
import AccountUsers from './AccountUsers';
import { useToggle } from 'hooks/useToggle';
import useSWR from 'swr';

export const BrandingRegion = ({adjustWidth}) => {
  var  currentScrollY = 0
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  const { currentLanguage, setCurrentLanguage } = useAppContext();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const contactURL = `/api/contact-info-header?locale=${locale}`;
  const { data: contactInfo } = useSWR(contactURL, fetcher);

  const [visible, setVisible] = useToggle()


  const handlerImgToSvg = (domElem) => {
    document.querySelectorAll(domElem).forEach((el) => {
      const imgID = el.getAttribute('id');
      const imgClass = el.getAttribute('class');
      const imgURL = el.getAttribute('src');

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, 'text/html');
          let svg = xmlDoc.querySelector('svg');

          if (typeof imgID !== 'undefined') {
            svg.setAttribute('id', imgID);
          }

          if (typeof imgClass !== 'undefined') {
            svg.setAttribute('class', imgClass + ' replaced-svg');
          }

          svg.removeAttribute('xmlns:a');

          el.parentNode.replaceChild(svg, el);
        }).catch((err)=>{
          console.error(`Error in HandlerImgToSvg On Branding Region ${err}`);
        });
    });
  };

  useEffect(() => {
    handlerImgToSvg('img.navbar-brand-logo');
  }, [contactInfo]);

  const handleTooltip = () => {
    document.querySelector('.info-country').classList.toggle('showTooltip');
  };

  const handleChangeLocale = (locale) => {
    router.push({ pathname, query }, asPath, { locale });
    setCurrentLanguage(locale);
  };

  
  const handleBrand = (locale) => {
    router.reload({ locale });
  }

  const handleClick = () => {
    setVisible()
  }
 

  
  useEffect(() => {
    const handleScroll = () => {
      let currentScrollY = window.scrollY;
      if (prevScrollY.current !== currentScrollY && visible) {
        setVisible()
      }
      prevScrollY.current = currentScrollY;  
    };   

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, setVisible]);

  if (contactInfo) {
    return (
      <div className={`branding-region ${!adjustWidth ? '' : 'adjust-width'}`}>
        
          <a  className="navbar-brand" 
              href={`/${locale}`}
              onClick={()=>handleBrand(locale)}
            >
            <img
              loading="lazy"
              src="/resourses/assets/logo.svg"
              className="navbar-brand-logo"
              title="logo"
              alt="logo"
            />
          </a>
        <div className="navbar-info">
          <div className="info-country">
            {contactInfo.map(
              ({ country_abbreviation_export, number_export }, idx) => (
                <div className="country" key={`contact-info-header-${idx}`}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: country_abbreviation_export,
                    }}
                  />
                  <div className="phone"  dangerouslySetInnerHTML={{
                      __html: number_export
                    }} /> 
                </div>
              )
            )}
          </div>
          <ul className="language-options">
            <li
             
                className={`language-item ${currentLanguage === 'es' && 'active'
                }`}
            >
            <span
                className="language-link"
                onClick={() => handleChangeLocale('es')}
              >
                ES
              </span>
            </li>
            <li
              className={`language-item ${currentLanguage === 'en' && 'active'
            }`}
            >
              <span
                className="language-link"
                onClick={() => handleChangeLocale('en')}
              >
                EN
              </span>
              
            </li>
          </ul>
          <div className="phone-field">
            <button
              className="phone-info"
              type="button"
              onClick={() => handleTooltip()}
            ></button>
          </div>
          <div className={`user-actions ${visible ? "active" : ""}`}>
            <button name='button' className="btn-login" type="button" onClick={() => { handleClick() }}></button>
            <AccountUsers visible={visible} />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
