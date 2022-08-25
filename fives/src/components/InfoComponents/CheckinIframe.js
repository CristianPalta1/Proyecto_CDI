import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useEffect} from 'react'
import { isMobile } from 'react-device-detect';

const CheckinIframe = ({url, text, color}) => {
  const router = useRouter();

  const {locale} = router;

  let concatUrl = `${url}${locale === 'es' ? '?lang=es' : '?lang=en'}`

  useEffect(() => {
    let header = document.querySelector('.header');
    let booking = document.querySelector('.booking-form');
    header.classList.add('checkin');
    booking?.classList.add('checkin');

    if (isMobile) return booking?.classList.remove('checkin');

    return () => {
      header.classList.remove('checkin');
      booking?.classList.remove('checkin');
    };
  }, []);

  return (
    <div className='checkIn-bar' style={{backgroundColor:color}}>
        <Link href={concatUrl} >
          <a className='checkin' target="__blank">
            <div className='container'>
                <div className='content-title'
                    dangerouslySetInnerHTML={{
                      __html:text
                    }}></div>
            </div>    
          </a>
        </Link>
    </div>
  )
}

export default CheckinIframe;