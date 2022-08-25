import { useToggle } from 'hooks/useToggle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppContext } from '../../store/App';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../utils';
import { BrandingRegion } from './BrandingRegion';
import { ContactUs } from './ContactUs';

export const BurguerMenu = ({ isOpen, onClose }) => {
  const { currentLanguage, setCurrentLanguage } = useAppContext();


  const [tabActive, setTabActive] = useState(0);
  const [viewSubItem, setViewSubItem] = useState(false);
  const [tabActiveRestaurant, setTabActiveRestaurant] = useState("THE FIVES OCEANFRONT");
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const contactURL = `/api/menu?locale=${locale}`;
  const { data } = useSWR(contactURL, fetcher);

  const handleChangeLocale = (locale) => {
    router.push({ pathname, query }, asPath, { locale });
    setCurrentLanguage(locale);
  };

  const [visible, setVisible] = useToggle();

  const handleClickListItemsRestaurant = (title) => {


    setViewSubItem(false);
    setTabActiveRestaurant(title);
    if (tabActiveRestaurant === title) {
      setViewSubItem(true);
      if (viewSubItem) {
        setViewSubItem(false);
      } else {
        setViewSubItem(true);
      }
    } else {
      if (viewSubItem) {
        setViewSubItem(false);
      } else {
        setViewSubItem(false);
      }
    }
  }
  const handleClickListItems = (id) => {
    setViewSubItem(false)
    setTabActive(id);
    if (tabActive === id) {
      setVisible(true);
    } else {
      if (visible) {
        setVisible(false);
      }
    }
  }

  if (!isOpen) {
    return null
  } else {
    document.querySelector('body').style.overflow = 'hidden';
  };

  


  const handleClose = () => {
    document.querySelector('body').style.overflow = 'scroll';
    onClose();
  }
  const handleCloseItem = (path) => {

    let mainURL = window.location.origin;
    let locale = router.locale;
    let URL = locale === 'es' ? `${mainURL}${path}` : `${mainURL}/${locale}${path}`
    window.open(URL, "_self");
    document.querySelector('body').style.overflow = 'scroll';
    onClose();
  }

  if (data) {
    const { mainMenu, lateralMenu, infoContact } = data;
    return (
      <section className="burguer-navigation slide-in">
        <div className="container-fluid">
          <div className="row">
            <div className="menu-navigation col-md-4">
              <div className="menu-actions">
                <button
                  className="close-burguer-menu"
                  type="button"
                  onClick={() => { handleClose() }}
                >
                  Close
                </button>
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
              </div>
              <div className="menu-navigation-main">
                <ul className="menu-list">
                  {mainMenu.map((item, id) => {

                    const { title, relative, below: links } = item;
                    return (
                      <div
                        className="menu-content-item"
                        key={`menu-content-item ${id}`}
                      >
                        <li
                          className={`menu-item ${tabActive === id && !visible ? 'active' : ''
                            } ${item.below ? "dropdown" : "only__external--link"} ${title.toLowerCase() === "special offers" || title.toLowerCase() === "ofertas especiales" ? "special-offers-li" : ""}`}
                        >
                          {
                            item.below ? (
                              <p
                                className="menu-link "
                                onClick={() => handleClickListItems(id)}
                              >
                                {title}
                              </p>
                            ) : (<Link href={`${relative}`}>
                              <a
                                className={`menu-link ${title.toLowerCase() === "special offers" || title.toLowerCase() === "ofertas especiales" ? "special-offers" : ""}`}
                                target={`${item.external ? "_blank" : "_self"}`}
                                onClick={() => { handleClose() }}
                              >
                                {title}
                              </a>
                            </Link>)
                          }


                        </li>
                        <div
                          className={`secondary-menu`}
                          hidden={tabActive !== id}
                        >
                          <ul className="menu-list-secondary">
                            {links?.map(({ title, relative, below, external }) => {

                              return (
                                <div className="submenu__below" key={title}>
                                  {
                                    below ? (
                                      <ul key={`menu-items${title}`} className="menu-list-secondarys">
                                        <li
                                          className={`menu-item  ${tabActiveRestaurant === title && !viewSubItem ? 'active' : ''
                                            }`}
                                          key={`menu-item ${title}`}
                                          onClick={() => { handleClickListItemsRestaurant(title) }}
                                        >
                                          {title}
                                        </li>
                                        {
                                          below?.map((item) => {
                                            const translationFix = item?.relative?.replace(
                                              'restaurantes',
                                              'restaurants'
                                            );

                                            const to = translationFix?.replace('base:', '/');
                                            return (

                                              <div
                                                key={`${item.title}`}
                                                className={`secondary-menu-restaurant`}
                                                hidden={tabActiveRestaurant !== title}
                                              >
                                                {
                                                  item.external ? (
                                                    <Link href={translationFix ? translationFix : "#"} >
                                                      <a className="menu-link" target="_blank" onClick={() => { handleClose() }}>{item.title}</a>
                                                    </Link>
                                                  ) : (
                                                    <Link href={translationFix ? translationFix : "#"} >
                                                      <a className="menu-link" target="_self" onClick={() => { handleCloseItem(translationFix) }}>{item.title}</a>
                                                    </Link>)
                                                }

                                              </div>
                                            )
                                          }
                                          )
                                        }

                                      </ul>) : (
                                      <li
                                        className="menu-item"
                                        key={`menu-item ${title}`}
                                        onClick={onClose}
                                      >
                                        <Link href={relative} >
                                          <a className="menu-link" target={`${external ? "_blank" : "_self"}`} onClick={() => { external ? handleClose() : handleCloseItem(relative) }}>{title}</a>
                                        </Link>
                                      </li>
                                    )
                                  }

                                </div>
                              );
                            })}

                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="menu-navigation-info col-md-8">
              <BrandingRegion adjustWidth={false} />
              <div className="info-navigation">
                <div className="main-info">
                  <ul className="main-info-list">
                    {lateralMenu.map((item, idx) => (
                      <li className="info-item" key={`lateralMenu-item-${idx}`}>
                        <Link href={item.relative}>
                          <a className="info-link" onClick={() => { handleCloseItem(item.relative) }}>{item.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <ContactUs infoContact={infoContact} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};
