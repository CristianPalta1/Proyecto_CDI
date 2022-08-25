import React from 'react';
import Script from 'next/script'
import Booking from './Booking';
import BookingButtonMobile from './BookingButtonMobile';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'
/**
 * Componente funcional encargado de utilizar componentes transversales en todas las páginas
 */

const Header = dynamic(() => import('./Header/Header'), {
  ssr: true,
});

const Footer  = dynamic(() => import('./Footer/Footer'), {
  ssr: true,
});

const Breadcrumbs  = dynamic(() => import('./Breadcrumb'), {
  ssr: true,
});

const LoginLayout  = dynamic(() => import('./Header/LoginLayout'), {
  ssr: true,
});

const CovidMeasures  = dynamic(() => import('./CovidMeasures'), {
  ssr: true,
});
const FloatButtonChat  = dynamic(() => import('./FloatButton'), {
  ssr: true,
});


const Layout = ({ children }) => {

  const router = useRouter();

  const {locale} = router;

  return (
    <>
      <main>
        <Script rel="preconnect" src="https://js.hsforms.net/forms/v2-legacy.js" strategy='beforeInteractive' />
        <Script rel="preconnect" src="https://js.hsforms.net/forms/v2.js" strategy='beforeInteractive' />
        
        <Header />
        
        <LoginLayout locale={locale}/>

        <div className="booking-form">
          <Booking/>
        </div>
        <Breadcrumbs />
        {children}

        {/* <Booking/> */}
        <Footer />
        <FloatButtonChat />
        {/* <CovidMeasures /> */}
        
        <BookingButtonMobile/>
      </main>
    </>
  );
};

export default Layout;
