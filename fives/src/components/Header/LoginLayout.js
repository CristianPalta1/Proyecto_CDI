import React, {useState, useEffect} from 'react';
import Script from 'next/script';

const LoginLayout = ({ locale }) => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false)
    }
  }, [mounted])

  

  const renderLogin = () => {
    if (locale === 'en') {
      return (
        <div id="roi-loyalty-icon"
          data-projectcode="corporativa"
          data-rendericon="true"
          data-isdesktop="true"
          data-domain="https://booking.thefiveshotels.com"
          data-lang="en">
        </div>
      );
    } else {
      return (
        <div id="roi-loyalty-icon"
          data-projectcode="corporativa"
          data-rendericon="true"
          data-isdesktop="true"
          data-domain="https://booking.thefiveshotels.com"
          data-lang="es">
        </div>
      );
    }
  };

  return (
    mounted && <> 
                <div id="roi-loyalty-icon"
                  data-projectcode="corporativa"
                  data-rendericon="true"
                  data-isdesktop="true"
                  data-domain="https://booking.thefiveshotels.com"
                  data-lang={`${locale}`}>
                </div>
                <Script rel="preconnect" async src="https://booking.thefiveshotels.com/bookcore/static/loyalty/builds/loyalty.min.js" />
              </>
  );
};

export default LoginLayout;
