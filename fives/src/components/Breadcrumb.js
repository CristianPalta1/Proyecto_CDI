import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * Componente funcional encargado de renderizar las migas de pan en la navegación
 */

const convertBreadcrumb = (string) => {
  return string.replace(/-/g, ' ');
};

export const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: `${path}`,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);

      
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <div
      aria-label="breadcrumbs"
      className="col-lg-12 col-12 mx-lg-auto mx-0 breadcrumbs container"
    >
      <ul className="breadcrumb">
        <li className="breadcrumb-detail">
          <Link href="/">
            <a className="breadcrumb-link">Home</a>
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li key={breadcrumb.href} className="breadcrumb-detail">
              {breadcrumb.breadcrumb.indexOf('beach') == 0 ?
                  <Link href={breadcrumb.href}>
                      <a>The Fives beach</a>
                  </Link> :
                breadcrumb.breadcrumb.indexOf('downtown') == 0 ?
                    <Link href={breadcrumb.href}>
                        <a>The Fives downtown</a>
                    </Link> :  
                breadcrumb.breadcrumb.indexOf('oceanfront') == 0 ? 
                    <Link href={breadcrumb.href}>
                        <a>The Fives oceanfront</a>
                    </Link> :
                breadcrumb.breadcrumb.includes('?') ? 
                    <Link href={breadcrumb.href}>
                      <a>{convertBreadcrumb(breadcrumb.breadcrumb.substr(0, breadcrumb.breadcrumb.indexOf('?')))}</a>
                    </Link> : 
                breadcrumb.breadcrumb.indexOf('special-offers') === 0 ? 
                    <Link href={'/special-offers'}>
                      <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                    </Link> : 
                    <Link href={breadcrumb.href}>
                      <a>{convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                    </Link> 
              }
            
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
