import Link from 'next/link';
import React, {useS} from 'react';
import SponsorsFooter from './SponsorsFooter';
import NewsLetterModal from 'components/Modals/NewsLetterModal';
import { useToggle } from 'hooks/useToggle';
import Script from 'next/script';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'utils';
import Image from 'next/image';

const Footer = () => {


  var fbIcon = '/resourses/assets/fb_icon.svg'
  var instaIcon = '/resourses/assets/insta_icon.svg'
  var ytIcon = '/resourses/assets/yt_icon.svg'
  var twtIcon = '/resourses/assets/twt_icon.svg'
  var inIcon = '/resourses/assets/in_icon.svg'


  const router = useRouter();
  const sponsorsURL = `/api/footer?locale=${router.locale}`;
  const { data: footerData } = useSWR(sponsorsURL, fetcher);

  const [visible, setVisible] = useToggle();

  const handleOnClose = () => {
  
    setVisible();
  };


  

  if (footerData) {
    return (
      <footer className="footer">
        <Script
          rel="preconnect"
          src="//js.hsforms.net/forms/v2.js"
          strategy="beforeInteractive"
        ></Script>
        <SponsorsFooter />
        <div className="footer-main-info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 footer-info">
                <div className="info-list-field">
                  <ul className="info-list">
                    {footerData.footer.map((item, idx) => {
                      var finalText = item?.country_abbreviation_export?.replace(/&amp;/g, "&")
                      return(
                      <li className="info-item" key={idx}>
                        <div className="info-text" dangerouslySetInnerHTML={{
                      __html: finalText
                    }}>
                         
                        </div>
                        <div className="info-text" dangerouslySetInnerHTML={{
                      __html: item?.number_export
                    }}></div>
                      </li>
                    )})}
                  </ul>
                </div>
                <div className="related-pages-field">
                  <ul className="related-pages-list">
                    {footerData.footerCenter.map((el, idx) => (
                      <li className="info-item" key={idx}>
                        <Link href={el.relative}>
                          <a className="info-link">{el.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-7 form-connected-with-tfh">
                <h3 className="form-title">
                  {footerData.newsLetter.title}
                </h3>
                <div className="form_subtitle_btn">
                  <h3 className="form-subtitle">
                  {footerData.newsLetter.description}
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      handleOnClose()
                    }}
                    className="btn_form"
                  >
                     {footerData?.newsLetter?.title_button}
                  </button>
                </div>
                <div className='container__social--icons'>
                  <p className="title__follow">{footerData?.footerFollowText.title_button}</p>
                  <div className='social__icon'>
                  {
                    footerData.followUs.map((socialIcon)=>(
                      <Link key = {`$link-${socialIcon.title}`} href={socialIcon.link_social.url}>
                        <a key = {socialIcon.title} className="icon__container" target="_blank">
                          <Image 
                            src={socialIcon.icon_social.url} 
                            alt={socialIcon.icon_social.alt} 
                            title={socialIcon.icon_social.alt} 
                            width={socialIcon.icon_social?.dimensions.width}
                            height={socialIcon.icon_social?.dimensions.height}
                          />
                        </a>
                    </Link>
                    ))
                  } 
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-rights">
          <span className="rights-reserved-text">
          {footerData?.footerFollowText.title_contact}
          </span>
        </div>
        <NewsLetterModal
          isOpen={visible}
          onClose={() => {
            handleOnClose();
          }}
          title =  {footerData.newsLetter.title}
          desc = {footerData.newsLetter.description}
        />
      </footer>
    );
  } else {
    return <></>;
  }
};

export default Footer;
