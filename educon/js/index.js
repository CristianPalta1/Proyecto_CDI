import "../scss/main.scss"

import { arrowOurProgramas, arrowBigDetailPrograms } from "./arrowsSvg"




function sliderDetailsNews() {

  jQuery("#block-views-block-news-carousel .view-display-id-carousel > .view-content").each(function (i, value) {
    jQuery(this).addClass("carouselDetailsNews")
  })
  jQuery("#block-views-block-news-carousel .view-display-id-carousel > .carouselDetailsNews").addClass("owl-carousel")
  jQuery('.carouselDetailsNews').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,

      },
      1400: {
        items: 4,
        nav: true
      }
    }
  })
}
function sliderDetailsPrograms() {
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .block-views-blocktype-non-formal-programs-programa .view-type-non-formal-programs #views-bootstrap-tab-views-bootstrap-type-non-formal-programs-programa .tab-content #tab-views-bootstrap-type-non-formal-programs-programa-0 .field-content .container__our-programs").each(function (i, value) {
    jQuery(this).addClass("carouselDetailsPrograms")
  })
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .block-views-blocktype-non-formal-programs-programa .view-type-non-formal-programs #views-bootstrap-tab-views-bootstrap-type-non-formal-programs-programa .tab-content #tab-views-bootstrap-type-non-formal-programs-programa-0 .field-content .carouselDetailsPrograms").addClass("owl-carousel")

  jQuery('.carouselDetailsPrograms').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,

      },
      1400: {
        items: 4,
        nav: true
      }
    }
  })
}
function sliderOurPrograms() {
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos section.container__our-programs").addClass("owl-carousel")
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados section.container__our-programs").addClass("owl-carousel")
  jQuery('.container__our-programs').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      480: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,

      },
      1400: {
        items: 4,
        nav: true
      }
    }
  })

  //Funcion para poner las flechas svg adentro de las cards del slider
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)
}
function sliderUnipackDetailOurPrograms() {
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockunipacks-list-unipacks .view-id-unipacks .view-content").addClass("unipackDetailCarousel")
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockunipacks-list-unipacks .view-id-unipacks .view-content").css("display", "block")
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockunipacks-list-unipacks .view-id-unipacks .view-content.unipackDetailCarousel").addClass("owl-carousel")
  jQuery('.unipackDetailCarousel').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      540: {
        items: 1,
        nav: true,
      },
      769: {
        items: 3,
        nav: true,
      },
      1400: {
        items: 4,
        nav: true,
      },
    }
  })
}
function sliderUnipackOurPrograms() {
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .block-views-blockunipacks-list-unipacks .view-id-unipacks .view-content").each(function (i, value) {
    jQuery(this).addClass("sliderUnipacksCards")
  })
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .block-views-blockunipacks-list-unipacks .view-id-unipacks .view-content.sliderUnipacksCards").addClass("owl-carousel")
  jQuery('.sliderUnipacksCards').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 2,
        nav: true
      },
      1000: {
        items: 4,
        nav: true,

      },
      1400: {
        items: 4,
        nav: true
      }
    }
  })
}
function sliderFormacionEmpresarial() {
  jQuery('.s-sliderBussines').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 1,
        nav: false,
        // stagePadding: 100
      },
      769: {
        items: 1,
        nav: false,
      },
      992: {
        items: 1,
        nav: true
      },
      1200: {
        items: 1,
        nav: true,
      },
    },
  })
}
function sliderMainHome() {
  jQuery('.main-banner').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 1,
        nav: false,
        // stagePadding: 100
      },
      769: {
        items: 1,
        nav: false,
      },
      992: {
        items: 1,
        nav: true
      },
      1200: {
        items: 1,
        nav: true,
      },
    },
  })
}
function sliderFooterHome() {
  //Funcion para añadir la clase del carousel del footer
  jQuery("footer .educon-container-footer .region-footer #block-footerfouricons .region-footer-four--icons .menu--footer-four > .menu-level-0").each(function () {
    jQuery(this).addClass("footerCarousel")
  });
  jQuery("footer .educon-container-footer .region-footer #block-footerfouricons .region-footer-four--icons .menu--footer-four > .menu-level-0.footerCarousel").addClass("owl-carousel")
  jQuery('.footerCarousel').owlCarousel({
    items: 10,
    loop: true,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 3,
        nav: false,
        // stagePadding: 100
      },
      769: {
        items: 4,
        nav: false,
      },
      992: {
        items: 4,
        nav: true
      },
      1200: {
        items: 10,
        nav: true,
      },
    },
  })
}
function sliderUnipackHome() {
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .unipack__slider>.field--name-slider").addClass("owl-carousel")
  jQuery('.field--name-slider').owlCarousel({
    items: 1,
    loop: false,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 1,
        nav: false,
        // stagePadding: 100
      },
      769: {
        items: 1,
        nav: false,
      },
      992: {
        items: 1,
        nav: true
      },
      1200: {
        items: 1,
        nav: true,
      },
    },
  })
}

function sliderDeatilsProgram() {
  // console.log("Quibo")
  jQuery(".page-node-type-non-formal-programs .node__content .non-programs-why-study .non-programs-why-study--cards-why-study .field--name-cards-why-study").addClass("owl-carousel")
  jQuery('.field--name-cards-why-study').owlCarousel({

    margin: 10,
    items: 3,
    responsiveClass: true,
    responsive: {
      0: {
        loop: false,
        items: 1,
        // stagePadding: 80,
        dots: true
      },
      600: {
        loop: false,
        items: 1,
        // stagePadding: 80,
        dots: true
      },
      800: {
        loop: false,
        items: 1,
        // stagePadding: 80,
        nav: true
      },

      1000: {
        items: 3,
        nav: true,

      },
      1400: {
        items: 3,
        nav: true
      }
    }
  })
}
function sliderBussinesPartner() {
  jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .business__partners>.field--name-media-cards").addClass("partnersSlider")
  jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .business__partners>.field--name-media-cards").addClass("owl-carousel")
  jQuery('.partnersSlider').owlCarousel({
    loop: true,
    margin: 10,
    items: 6,
    responsiveClass: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        stagePadding: 60,
        items: 1,
        nav: false
      },
      480: {
        stagePadding: 60,
        items: 1,
        nav: false
      },
      600: {
        stagePadding: 60,
        items: 2,
        nav: false
      },
      1000: {
        stagePadding: 100,
        items: 6,
        nav: false,

      },
      1400: {
        stagePadding: 100,
        items: 6,
        nav: false
      }
    }
  })
}



function identifyNodes() {
  //Funcion para identificar los Tabs de colores que estan debajo del banner en el home 
  jQuery("main .educon-container #block-educon-content .node__content .complete-banner-home .complete-banner-home--info-blocks .field--name-media-cards .field__item > .blocks-info-banner").each(function (index, value) {
    jQuery(this).addClass("itemCard-" + index);
  });


  //Funcion identificar la seccion de colores. Para posteriormente agregarle la clase carousel en vista movil
  jQuery("main .educon-container #block-educon-content .node__content .complete-banner-home .complete-banner-home--info-blocks .field--name-media-cards").each(function (i, value) { jQuery(this).addClass("cards" + i + "") })


  //Funcion para diferenciar los difentes tipos de titulos del sitio en general
  jQuery("main .educon-container #block-educon-content .node__content .field--name-title").each(function (index, value) {
    jQuery(this).addClass("itemTitle-" + index);
  });

  //Funcion para diferenciar los difentes tipos de parrafos del sitio en general
  jQuery("main .educon-container #block-educon-content .node__content .field--name-body").each(function (index, value) {
    jQuery(this).addClass("itemBody-" + index);
  });

  //Funcion para identificar los botones tipo a del sitiio en general
  jQuery("main .educon-container #block-educon-content .node__content .field--name-link").each(function (i, value) {
    jQuery(this).addClass("link" + i + "")
  })

  //funcion para identificar los diferentes tipos de boostrap tabs del home. Para la seccion cursos y diplomados
  jQuery("main .educon-container #block-educon-content .node__content .view-type-non-formal-programs #views-bootstrap-tab-views-bootstrap-type-non-formal-programs-block-1 .tab-content > .tab-pane").each(function (index, value) {
    jQuery(this).addClass("itemTabsContents-" + index);
  });

  //Poner fondo en seccion cifras del home
  var bgCifrasSection = jQuery(".complete-cifras-home .complete-cifras-home--img .field--name-background picture img").attr("src")
  jQuery(".complete-cifras-home").css("background-image", "url(" + bgCifrasSection + ")")

  //funcion para identificar las card en vista movil y poder agregar clase del carousel
  jQuery("main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .view-content").each(function (i, value) {
    jQuery(this).addClass("cardsStudy" + i + "")
  })


  //identificar las cifras que se muestras en la seccion del home
  jQuery("main .educon-container #block-educon-content .node__content .complete-cifras-home .complete-cifras-home--cards .field--name-media-cards .field__item .cifras-home .cifras-home--number>.field").each(function (i, value) {
    jQuery(this).addClass("cifra" + i + "")
  })

  var cifra0 = jQuery("main .educon-container #block-educon-content .node__content .complete-cifras-home .complete-cifras-home--cards .field--name-media-cards .field__item .cifras-home .cifras-home--number .cifra2").text()
  var cifra1 = jQuery("main .educon-container #block-educon-content .node__content .complete-cifras-home .complete-cifras-home--cards .field--name-media-cards .field__item .cifras-home .cifras-home--number .cifra2").text()
  var cifra2 = jQuery("main .educon-container #block-educon-content .node__content .complete-cifras-home .complete-cifras-home--cards .field--name-media-cards .field__item .cifras-home .cifras-home--number .cifra2").text()
  var cifra3 = jQuery("main .educon-container #block-educon-content .node__content .complete-cifras-home .complete-cifras-home--cards .field--name-media-cards .field__item .cifras-home .cifras-home--number .cifra2").text()


  //Identificar bloque imagen seccion transforma del home
  jQuery(".complete-transforma .complete-transforma--cards > .field--name-media-cards").each(function (i, value) {
    jQuery(this).addClass("container__transforma-card-" + i)
  })
}

function slidersMovil() {
  if (jQuery(window).width() < 768) {


    jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu").append(jQuery("header #block-topmenu"))

    jQuery(".page-node-type-news .educon-container #block-educon-content .layout--twocol-section").append(jQuery("#block-cargarmasgaleriadenoticas"))
    jQuery(".page-node-type-news .educon-container #block-educon-content #block-socialsharingblock .social-media-sharing").append("<div class = 'text_share'><p>Compartir</p></div>")
    jQuery(".page-node-type-news .educon-container #block-educon-content").append(jQuery("#block-socialsharingblock"))

    //Slider seccion transforma en movil en home
    jQuery(".container__transforma-card-0").addClass("owl-carousel")
    jQuery("main .educon-container #block-educon-content .node__content .complete-transforma .complete-transforma--cards .container__transforma-card-0").css("display", "block")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .external-programs-detail .external-programs-detail--transform .complete-transforma .complete-transforma--cards .container__transforma-card-0").css("display", "block")
    jQuery('.container__transforma-card-0').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },

      }
    });


    //seccion como estudiar unipacks
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .cardsStudy0").addClass("owl-carousel")
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .cardsStudy0").css("display", "block")

    //Seccion como estudiar con nosotros del home
    jQuery("main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .cardsStudy0").addClass("owl-carousel")
    jQuery(" main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .cardsStudy0").css("display", "block")
    jQuery('.cardsStudy0').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },

      }
    });


    //Slider para cards del colores del banner en home
    jQuery("main .educon-container #block-educon-content .node__content .complete-banner-home .complete-banner-home--info-blocks .cards0").addClass("owl-carousel")
    jQuery("main .educon-container #block-educon-content .node__content .complete-banner-home .complete-banner-home--info-blocks .cards0").css("display", "block")
    jQuery('.cards0').owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      stagePadding: 50,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 1,
          nav: false
        },

      }
    })

    //Slider movil navs detall del unipack. 
    jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul").addClass("listCarouselMovil")
    jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul").css("display", "block")
    jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul.listCarouselMovil").addClass("owl-carousel")

    //Slider movil navs detall de la sede. 
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .layout--onecol nav ul").addClass("listCarouselMovil")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .layout--onecol nav ul").css("display", "block")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .layout--onecol nav ul.listCarouselMovil").addClass("owl-carousel")
    jQuery('.listCarouselMovil').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },

      }
    });

    jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .business__projects .view-id-projects .view-content").addClass("proyectSliderMovil")
    jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .business__projects .view-id-projects .view-content").css("display", "block")
    jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .business__projects .view-id-projects .view-content").addClass("owl-carousel")
    jQuery('.proyectSliderMovil').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },

      }
    });

  } else {

    jQuery(".page-node-type-news .educon-container #block-educon-content").append(jQuery("#block-cargarmasgaleriadenoticas"))
    jQuery(".page-node-type-news .educon-container #block-educon-content .layout--twocol-section .layout__region--first #block-socialsharingblock .social-media-sharing").append("<div class = 'text_share'><p>Compartir</p></div>")
    jQuery(".page-node-type-news .educon-container #block-educon-content .layout--twocol-section .layout__region--first").append(jQuery("#block-socialsharingblock"))
  }
}

function masonry() {

  jQuery("div.image__gallery").each(function (i, value) {
    jQuery(this).addClass("imgMe" + i + "")
  })

  jQuery("div.video__gallery").each(function (i, value) {
    // console.log(i)
    jQuery(this).addClass("Video" + i + "")
  })
}

function clickTabsListEvents() {

  //Funciones para ocultar y mostar el diferente contenido en la vista de lista de eventos y noticias

  ///Identifico la lista renderizada. Tambien aplica para el detalle del progra,a
  jQuery(".educon-container #block-educon-content .node__content .layout--onecol nav ul li").each(function (i, value) {
    jQuery(this).addClass("tabClick" + i + "")
  })

  //Oculto o Muestro el contenido asociado a cada bloque
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content nav.menu--menu-relacionados-cursos-y-diplo ul.navbar-nav li.tabClick0").addClass("active")
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content nav.menu--menu-relacionados-cursos-y-diplo ul.navbar-nav li.tabClick0").click(function (e) {
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos").css("display", "block")
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados").css("display", "none")
    jQuery(this).addClass("active")
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content nav.menu--menu-relacionados-cursos-y-diplo ul.navbar-nav li.tabClick1").removeClass("active")
  })
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content nav.menu--menu-relacionados-cursos-y-diplo ul.navbar-nav li.tabClick1").click(function (e) {
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos").css("display", "none")
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados").css("display", "block")
    jQuery(this).addClass("active")
    jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content nav.menu--menu-relacionados-cursos-y-diplo ul.navbar-nav li.tabClick0").removeClass("active")
  })


  //Oculto o Muestro el contenido asociado a cada bloque
  jQuery(".educon-container #block-educon-content .menu--news-events ul .tabClick0").click(function (e) {
    jQuery(".educon-container .block-views-blocknews-list-news").css("display", "block")
    jQuery(".educon-container  .block-views-blockevent-list-events").css("display", "none")
  })
  jQuery(".educon-container #block-educon-content .menu--news-events ul .tabClick1").click(function (e) {
    jQuery(".educon-container  .block-views-blocknews-list-news").css("display", "none")
    jQuery(".educon-container  .block-views-blockevent-list-events").css("display", "block")
  })

  //Agregar y quitar clase active de tabs en vista de listado de noticias y eventos
  jQuery(".educon-container #block-educon-content .menu--news-events ul li.tabClick0").addClass("active")
  jQuery(".educon-container #block-educon-content .menu--news-events ul li.tabClick0").click(function (e) {
    jQuery(this).addClass("active")
    jQuery(".educon-container #block-educon-content .menu--news-events ul li.tabClick1").removeClass("active")
  })
  jQuery(".educon-container #block-educon-content .menu--news-events ul li.tabClick1").click(function (e) {
    jQuery(this).addClass("active")
    jQuery(".educon-container #block-educon-content .menu--news-events ul li.tabClick0").removeClass("active")
  })

}

function pager() {
  //Paginador en noticias 
  if (jQuery("#block-views-block-news-list-news nav.pager ul.pagination li.page-item").length == 3) {
    jQuery("#block-views-block-news-list-news nav.pager").css("max-width", "140px")
    jQuery("#block-views-block-news-list-news nav.pager ul.pagination").css("grid-template-areas", "'prev one next'")
  }
  if (jQuery("#block-views-block-news-list-news nav.pager ul.pagination li.page-item").length == 4) {
    jQuery("#block-views-block-news-list-news nav.pager").css("max-width", "160px")
    jQuery("#block-views-block-news-list-news nav.pager ul.pagination").css("grid-template-areas", "'prev one two next'")
  }
  if (jQuery("#block-views-block-news-list-news nav.pager ul.pagination li.page-item").length == 5) {
    jQuery("#block-views-block-news-list-news nav.pager").css("max-width", "200px")
    jQuery("#block-views-block-news-list-news nav.pager ul.pagination").css("grid-template-areas", "'prev one two three next'")
  }
  if (jQuery("#block-views-block-news-list-news nav.pager ul.pagination li.page-item").length == 6) {
    jQuery("#block-views-block-news-list-news nav.pager").css("max-width", "240px")
    jQuery("#block-views-block-news-list-news nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four next'")
  }
  if (jQuery("#block-views-block-news-list-news nav.pager ul.pagination li.page-item").length == 7) {
    jQuery("#block-views-block-news-list-news nav.pager").css("max-width", "280px")
    jQuery("#block-views-block-news-list-news nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four five next'")
  }

  //Paginador eventos
  if (jQuery("#block-views-block-event-list-events nav.pager ul.pagination li.page-item").length == 3) {
    jQuery("#block-views-block-event-list-events nav.pager").css("max-width", "140px")
    jQuery("#block-views-block-event-list-events nav.pager ul.pagination").css("grid-template-areas", "'prev one next'")
  }
  if (jQuery("#block-views-block-event-list-events nav.pager ul.pagination li.page-item").length == 4) {
    jQuery("#block-views-block-event-list-events nav.pager").css("max-width", "160px")
    jQuery("#block-views-block-event-list-events nav.pager ul.pagination").css("grid-template-areas", "'prev one two next'")
  }
  if (jQuery("#block-views-block-event-list-events nav.pager ul.pagination li.page-item").length == 5) {
    jQuery("#block-views-block-event-list-events nav.pager").css("max-width", "200px")
    jQuery("#block-views-block-event-list-events nav.pager ul.pagination").css("grid-template-areas", "'prev one two three next'")
  }
  if (jQuery("#block-views-block-event-list-events nav.pager ul.pagination li.page-item").length == 6) {
    jQuery("#block-views-block-event-list-events nav.pager").css("max-width", "240px")
    jQuery("#block-views-block-event-list-events nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four next'")
  }
  if (jQuery("#block-views-block-event-list-events nav.pager ul.pagination li.page-item").length == 7) {
    jQuery("#block-views-block-event-list-events nav.pager").css("max-width", "280px")
    jQuery("#block-views-block-event-list-events nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four five next'")
  }


  //Paginador nuestros programas
  if (jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination li.page-item").length == 3) {
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager").css("max-width", "140px")
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination").css("grid-template-areas", "'prev one next'")
  }
  if (jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination li.page-item").length == 4) {
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager").css("max-width", "160px")
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination").css("grid-template-areas", "'prev one two next'")
  }
  if (jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination li.page-item").length == 5) {
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager").css("max-width", "200px")
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination").css("grid-template-areas", "'prev one two three next'")
  }
  if (jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination li.page-item").length == 6) {
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager").css("max-width", "240px")
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four next'")
  }
  if (jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination li.page-item").length == 7) {
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager").css("max-width", "280px")
    jQuery("#block-educon-content .node__content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms nav.pager ul.pagination").css("grid-template-areas", "'prev one two three four five next'")
  }
}

function sliderFooter() {

  jQuery("footer .educon-container-footer .region-footer #block-footerdosiconos .region-footer-two .region-footer-two--column-three .menu--footer-dos-reconocimientos .menu-level-0").addClass("s-sliderRec")
  jQuery("footer .educon-container-footer .region-footer #block-footerdosiconos .region-footer-two .region-footer-two--column-three .menu--footer-dos-reconocimientos .menu-level-0.s-sliderRec").addClass("owl-carousel")
  jQuery(".s-sliderRec").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
}



jQuery(document).ready(function () {

  sliderFooter();
  identifyNodes();
  sliderOurPrograms();
  slidersMovil();
  sliderMainHome();
  sliderDetailsNews();
  sliderDetailsPrograms();

  sliderUnipackHome();
  sliderFooterHome();
  sliderUnipackOurPrograms();
  clickTabsListEvents();
  sliderBussinesPartner();
  sliderUnipackDetailOurPrograms();
  pager()
  masonry();
  slidersMovil();
  sliderFormacionEmpresarial()

  jQuery("body").on("click", "#chatbot .btn-mas", function () {

    jQuery('#chatbot .wsp').hasClass('show-wsp-up') && jQuery('#chatbot .wsp').removeClass('show-wsp-up')// VALIDACIÓN DE SUB MENÚ BOTÓN WHATSAPP CERRADO CUANDO EL BOTÓN DE CONTACTO ESTÁ EN ESTADO INICIAL
    jQuery('#chatbot .chat').hasClass('show-chat-up') && jQuery('#chatbot .chat').removeClass('show-chat-up')// VALIDACIÓN DE SUB MENÚ BOTÓN CHAT CERRADO CUANDO EL BOTÓN DE CONTACTO ESTÁ EN ESTADO INICIAL
    jQuery("#chatbot .btn-mas label").toggleClass('rotate-icon')// TOGGLE PARA ROTAR EL ICONO DE LOS AUDIFONOS 
    jQuery("#chatbot .redes").toggleClass('show-up')// TOGGLE MOSTRAR Y OCULTAR BOTONES DE WHATSAPP Y CHAT 

  });


  jQuery("body").on("click", "#chatbot .redes label:nth-child(1)", function () {
    jQuery('#chatbot .chat').hasClass('show-chat-up') && jQuery('#chatbot .chat').removeClass('show-chat-up')// VALIDACIÓN PARA OCULTAR EL SUBMENÚ DE CHAT SI EL SUBMENÚ DE WHATSAPP ESTÁ VISIBLE 
    jQuery("#chatbot .wsp").toggleClass('show-wsp-up') // TOGGLE MOSTRAR Y OCULTAR BOTONES SUBMENÚ DE WHATSAPP
  });


  jQuery("body").on("click", "#chatbot .redes label:nth-child(2)", function () {
    jQuery('#chatbot .wsp').hasClass('show-wsp-up') && jQuery('#chatbot .wsp').removeClass('show-wsp-up') // VALIDACIÓN PARA OCULTAR EL SUBMENÚ DE WHASAPP SI EL SUBMENÚ DE CHAT ESTÁ VISIBLE 
    jQuery("#chatbot .chat").toggleClass('show-chat-up') // TOGGLE MOSTRAR Y OCULTAR BOTONES SUBMENÚ DE CHAT
  });


  // INCRUSTAR EL HTML EN ETIQUETA ID CHATBOT
  jQuery("#chatbot").append("<div class='container'><input type='checkbox' id='btn-ppal'><input type='checkbox' id='btn-wsp'><input type='checkbox' id='btn-chat'><div class='wsp'><a class='fab fa-whatsapp' href='https://wa.me/573057341221'></a><div class='modalidad-pre'>    <h5>Presencial o distancia</h5></div><a class='fab fa-whatsapp' href='https://bit.ly/3i2Ys6l'></a><div class='modalidad-uvd'> <h5>Virtual</h5></div> </div>  <div class='chat'><a class='fas fa-comment-dots' href='https://webchat.uniminuto.edu'></a><div class='chat-modalidad-pre'> <h5>Presencial o distancia</h5></div><a class='fas fa-comment-dots' href='https://virtual.uniminuto.edu/'></a><div class='chat-modalidad-uvd'> <h5>Virtual</h5></div> </div>    <div class='redes'><label for='btn-wsp' class='fab fa-whatsapp'></label><label for='btn-chat' class='fas fa-comment-dots'></label> </div> <div class='btn-mas'><label for='btn-ppal' class='fas fa-headphones'></label><p>Contacto</p> </div> </div>")

  var chat = false
  jQuery("main .educon-container #block-chat #chatbot .btn-mas").click(function () {
    if(chat){
      chat = false
      jQuery("main .educon-container #block-volveraportal .btn__back_to_home").css("bottom", "162px")
    }else{
      chat = true
      jQuery("main .educon-container #block-volveraportal .btn__back_to_home").css("bottom", "319px")
    }
  })



  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .unipack__form>.field--name-webform form .js-form-item-study-uniminuto #edit-study-uniminuto>.form-item-study-uniminuto input[name='study_uniminuto']").attr("required", "required")

  jQuery("header .navbar .row").append("<div class = 'search'> </div>")

  jQuery(".educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .unipack__form>.field--name-webform form .js-form-item-terms-of-service label").click(function () {
    window.open('http://umd.uniminuto.edu/documents/10181/0/Resoluci%C3%B3n+No+1484+Pol%C3%ADtica+Tratamiento+de+Informaci%C3%B3n.pdf/3fc7028e-1530-4c0d-9391-d12c8faef17c', '_blank');
  })
  jQuery("main .educon-container .region-content #block-webform form .js-form-item-terms-of-service label.label--terms").click(function () {
    window.open('http://umd.uniminuto.edu/documents/10181/0/Resoluci%C3%B3n+No+1484+Pol%C3%ADtica+Tratamiento+de+Informaci%C3%B3n.pdf/3fc7028e-1530-4c0d-9391-d12c8faef17c', '_blank');
  })

  jQuery("main .educon-container .region-content #block-webform").append("<div class = 'close_form'> </div>")

  var ventana_alto = jQuery(window).height();
  if (ventana_alto <= 670) {
    // console.log("holis")
    jQuery(".page-node-type-page div[role=dialog]").css("top", "178px")
    jQuery("main .educon-container .region-content #block-webform .close_form").css("margin-top", "-354px")
    if (jQuery(window).width() < 768) {
      jQuery("main .educon-container .region-content #block-webform .close_form").css("margin-top", "-377px")
    }

  }
  if (ventana_alto >= 670 && ventana_alto <= 809) {
    console.log("holis")
    jQuery(".page-node-type-page div[role=dialog]").css("top", "178px")
    jQuery("main .educon-container .region-content #block-webform .close_form").css("margin-top", "-512px")

  }
  if (ventana_alto >= 1220) {
    // console.log("holis")

    jQuery("main .educon-container .region-content #block-webform .close_form").css("margin-top", "-782px")

  }


  var imgBgThanks = jQuery(".educon-container #block-educon-content .node__content .layout__region--content .thank__content .layout--twocol-section--50-50 .layout__region--second picture img").attr("src")
  jQuery(".educon-container #block-educon-content .node__content .layout__region--content .thank__content").css("background-image", "url(" + imgBgThanks + ")")


  //Chatbot
  jQuery("#menu-chatbot").click(function (e) {
    jQuery(".menu-content-chatbot").toggleClass("menu-active-chatbot");
  });

  //remover el atributo title del select en el nav
  jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto li span").removeAttr("title")

  //Funcionamiento header
  //Funcion para identificar los items del top menu
  jQuery("header #block-topmenu .menu--top-menu .nav.prueba-top > li.nav-item ").each(function (index, value) {
    jQuery(this).addClass("item-" + index);
  });

  //Funcion para diferenciar los items del menu principal
  jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto > li ").each(function (index, value) {
    jQuery(this).addClass("nav__item-menu" + index);
  });

  //Nav Como estudiar con nosotros
  jQuery("header #block-topmenu .menu--top-menu ul li.item-1").click(function (e) {
    jQuery("header #block-topmenu .menu--top-menu ul li.item-1>ul").toggle()
    jQuery("header #block-topmenu .menu--top-menu ul li.item-0>ul").css("display", "none")
    jQuery("header #block-topmenu .menu--top-menu ul li.item-3>ul").css("display", "none")
    jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto li.nav__item-menu0>ul.dropdown-menu.show").removeClass("show")

  })
  ///Nav programas por region
  jQuery("header #block-topmenu .menu--top-menu ul li.item-0").click(function (e) {
    jQuery("header #block-topmenu .menu--top-menu ul li.item-0>ul").toggle()
    jQuery("header #block-topmenu .menu--top-menu ul li.item-1>ul").css("display", "none")
    jQuery("header #block-topmenu .menu--top-menu ul li.item-3>ul").css("display", "none")
    jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto li.nav__item-menu0>ul.dropdown-menu.show").removeClass("show")
  })
  //Nav buscar por area
  jQuery("header #block-topmenu .menu--top-menu ul li.item-3").click(function (e) {
    jQuery("header #block-topmenu .menu--top-menu ul li.item-3>ul").toggle()
    jQuery("header #block-topmenu .menu--top-menu ul li.item-1>ul").css("display", "none")
    jQuery("header #block-topmenu .menu--top-menu ul li.item-0>ul").css("display", "none")
    jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto li.nav__item-menu0>ul.dropdown-menu.show").removeClass("show")
  })

  //Funcion para desplegar el pop up del boton dejanos tus datos en el navbar top
  jQuery("header #block-topmenu .menu--top-menu ul.prueba-top li.item-2").addClass("btn__pop-up--view")
  jQuery("header #block-topmenu .menu--top-menu ul.prueba-top li.btn__pop-up--view").click(function (e) {
    jQuery("main .educon-container .region-content #block-webform").css("display", "flex")
    jQuery("header .navbar .row #navbarSupportedContent").removeClass("show")
  })

  jQuery("main .educon-container #block-educon-content .node__content .layout__region--content .block-block-content .field--type-text-with-summary .field--name-link").click(function (e) {
    jQuery("main .educon-container .region-content #block-webform").css("display", "flex")
  })
  jQuery("main .educon-container .region-content #block-webform .close_form").click(function () {
    jQuery("main .educon-container .region-content #block-webform").css("display", "none")
  })

  //Nav nuestro porgramas
  jQuery("header .navbar .row #navbarSupportedContent #block-educon-main-menu .mr-auto li.nav__item-menu0").click(function (e) {

    // jQuery("header #block-topmenu .menu--top-menu ul li.item-4>ul").css("display", "none !important")
    // jQuery("header #block-topmenu .menu--top-menu ul li.item-1>ul").css("display", "none !important")
    // jQuery("header #block-topmenu .menu--top-menu ul li.item-0>ul").css("display", "none !important")    
  })

  if (jQuery(window).width() < 768) {

    jQuery("header .navbar .row .mobile-search").append(jQuery("header #block-topmenu .menu--top-menu ul.prueba-top li.item-3"))
  }
  var l = false
  jQuery("header .navbar .row .search").click(function (e) {
    if (l) {
      jQuery("header .navbar .row .mobile-search").css("display", "none")
      l = false
    } else {
      jQuery("header .navbar .row .mobile-search").css("display", "flex")
      l = true
    }
    jQuery("header .navbar .row #navbarSupportedContent").removeClass("show")
  })

  jQuery("header .navbar .row .text-right").click(function (e) {
    jQuery("header .navbar .row .mobile-search").css("display", "none")
  })


  //Funcion para ocultar la X en los popUp
  jQuery("main .educon-container #spb-block-webform-block .block-webform-block-modal .spb-popup-main-wrapper .spb-controls .block-webform-block-modal-close").text("")

  //Funcion para añadir clases diferentes a las 3 cards que se trasponen al banner y controlar los diferentes colores
  jQuery("main .educon-container #block-educon-content .node__content .complete-banner-home .complete-banner-home--info-blocks .cards0 > .field__item").each(function (i, value) {
    jQuery(this).addClass("bannerCard" + i + "")
  })

  //Controlar el active de los tabs de cursos y diplomados
  jQuery("main .educon-container #block-educon-content .node__content .view-type-non-formal-programs #views-bootstrap-tab-views-bootstrap-type-non-formal-programs-block-1 .nav-tabs li").click(function (e) {
    jQuery("main .educon-container #block-educon-content .node__content .view-type-non-formal-programs #views-bootstrap-tab-views-bootstrap-type-non-formal-programs-block-1 .nav-tabs li.active").removeClass("active");
    jQuery(this).addClass("active")
  })

  //Funcion para poner la imagen de fondo seccion como estudiar con nosotros
  var bgBlueCardsSeccion = jQuery("main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--img .field--type-image img").attr("src")
  jQuery("main .educon-container #block-educon-content .node__content .complete-block-how-study").css("background-image", "url(" + bgBlueCardsSeccion + ")")

  ///Funcion para los numeros de las tarejtas azules
  jQuery("main .educon-container #block-educon-content .node__content .complete-block-how-study .complete-block-how-study--cards .view-id-how_study_home .view-content .views-row .block-how-study").each(function (i, value) {
    var number = i + 1
    jQuery(this).append("<div id= 'cardsNumer'><span>" + number + "</span></div>")
  })


  //Carousel de nuestros programas
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs").addClass("owl-carousel")
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-unipacks-details-cursos section.container__our-programs").addClass("owl-carousel")


  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .banner-non-programs").append("<div class= 'arrow_small'> " + arrowOurProgramas + " </div> <div class= 'arrow_big'> " + arrowBigDetailPrograms + " </div>")
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)
  jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow").append(arrowOurProgramas)
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow").append(arrowOurProgramas)



  //////////////////
  //Colores para el home en cursos
  var colorTitlesCursos = jQuery('.page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  //Colores para la vista del detalle del programa en cursos
  var colorTitlesCursosDetailPrograms = jQuery('.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  //Colores para la vista de nuestros del programa en cursos
  var colorTitlesCursosOurPrograms = jQuery('.educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  //Colores para cursos en la vista de sedes
  var colorTitlesCursosSedes = jQuery('.educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  //Colores para diplomados en la vista de sedes
  var colorTitlesDiplomadosSedes = jQuery('.educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();
  //Colores para el home en Diplomados
  var colorTitlesDiplomados = jQuery('.page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  //Colores para la vista del detalle del programa en cursos
  var colorTitlesDiplomadosDetailPrograms = jQuery('.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  ///Aplico los colores a los items del titulo en cursos vista sedes
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesCursosSedes[index]);
  });
  ///Aplico los colores a los items del titulo en diplomados vista sedes
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesDiplomadosSedes[index]);
  });
  /////////////////////
  ///Aplico los colores a los items del titulo en cursos y diplmados vistas nuestros programas
  jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__info .info__title a").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesCursosOurPrograms[index]);
  });
  /////////

  ///Aplico los colores a los items del titulo en diplomados vista home
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title a").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesDiplomados[index]);
  });
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title a").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesCursos[index]);
  });

  /////////////////
  ///Aplico los colores a los items del titulo en cursos vista detalle programa
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesCursosDetailPrograms[index]);
  });
  ///Aplico los colores a los items del titulo en diplomados vista detalle programa
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__info .info__title").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("color", colorTitlesDiplomadosDetailPrograms[index]);
  });

  var colorArrowsOurProgramas = jQuery('.educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();
  jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsOurProgramas[index]);
  });
  jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsOurProgramas[index]);
  });

  //Funcion para las flechas en vista nuestros porgramas


  ///Funciones para los arrows en vista Home
  var colorArrowsDiplomados = jQuery('.page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();
  var colorArrowsCuros = jQuery('.page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCuros[index]);
  });
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-cursos .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCuros[index]);
  });
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomados[index]);
  });
  jQuery(".page-node-type-page main .educon-container #block-educon-content .node__content .block-views-blocknon-formal-programs-diplomados .container-sup__our-programs section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomados[index]);
  });
  ///////////////
  ///Funciones para los arrows en vista Deatlle del programa
  var colorArrowsDiplomadosDetailProgram = jQuery('.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();
  var colorArrowsCurosDetailProgram = jQuery('.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCurosDetailProgram[index]);
  });
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCurosDetailProgram[index]);
  });
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomadosDetailProgram[index]);
  });
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomadosDetailProgram[index]);
  });
  ///////////////
  ///////////////
  ///Funciones para los arrows en vista Sedes
  var colorArrowsDiplomadosSedes = jQuery('.educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();
  var colorArrowsCurosSedes = jQuery('.educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow').map(function () {
    return jQuery(this).attr("data-color");
  }).get();

  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCurosSedes[index]);
  });
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrectory-non-formal-programs-cursos section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsCurosSedes[index]);
  });
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomadosSedes[index]);
  });
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs .owl-stage-outer .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsDiplomadosSedes[index]);
  });
  ///////////////








  //Colores de las flechas en el banner del detalle del programa
  var colorArrowsBannerDetailPrograms = jQuery('.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .layout--onecol .layout__region--content .block-field-blocknodenon-formal-programstags-non-formal-programs .vocabulary-tags-non-formal-programs .content .field--name-color').map(function () {
    return jQuery(this).text();
  }).get();

  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .banner-non-programs .arrow_small svg g path#Trazado_119 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsBannerDetailPrograms[index]);
  });
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .banner-non-programs .arrow_small svg g path#Trazado_45834 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsBannerDetailPrograms[index]);
  });
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .banner-non-programs .arrow_big svg g path#Trazado_125 ").each(function (index, value) {
    //jQuery(this).addClass("item-" + index);
    jQuery(this).css("fill", colorArrowsBannerDetailPrograms[index]);
  });
  //Color del before de seccion porque estudiar con nosotros vista detalle del programa
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .non-programs-why-study").append("<style>.page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .non-programs-why-study::before{background-color: " + colorArrowsBannerDetailPrograms[0] + "!important;}</style>");


  //Identificar las columnas en la vista del detalle deprograma para posteriormente poder usar una grilla
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .two-columns-programs > div").each(function (i, value) {
    jQuery(this).addClass("item-" + i + "")
  })

  //Identidicar las columnas en la vista de detalle de unipack para posteriormente usar una grila
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .two-columns-unipacks > div").each(function (i, value) {
    jQuery(this).addClass("infoColumn" + i + "")
  })

  //Funcion para poner clase active o no en los tabs de la vits detalle del programa y detalle unipack
  jQuery(".page-node-type-non-formal-programs .node__content .layout--onecol nav ul li").each(function (i, value) {
    jQuery(this).attr("id", "navDetailPrograms" + i + "")
  })
  jQuery(".page-node-type-non-formal-programs .node__content .layout--onecol nav ul li.tabClick0").addClass("active")
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul li.tabClick0").addClass("active")
  jQuery(".page-node-type-non-formal-programs .node__content .layout--onecol nav ul li").click(function () {
    jQuery(".page-node-type-non-formal-programs .node__content .layout--onecol nav ul li.active").removeClass("active")
    jQuery(this).addClass("active")
    var itemNav = jQuery(this).attr("id")
    switch (itemNav) {
      case "navDetailPrograms1":
        var scroll = jQuery("#acerca-programa").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;
      case "navDetailPrograms2":
        var scroll = jQuery("#objetivos-programa").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;
      case "navDetailPrograms3":
        var scroll = jQuery("#contenido-programa").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;

      default:
        break;
    }
  })


  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul li").each(function (i, value) {
    jQuery(this).attr("id", "navUnipack" + i + "")
  })

  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul li").click(function () {
    jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .layout--onecol nav ul li.active").removeClass("active")
    jQuery(this).addClass("active")
    var itemNav = jQuery(this).attr("id")
    switch (itemNav) {
      case "navUnipack1":
        var scroll = jQuery("#acerca-unipacks").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;
      case "navUnipack2":
        var scroll = jQuery("#contentido-unipacks").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;
      case "navUnipack4":
        var scroll = jQuery("#beneficios-unipacks").offset().top - 130
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");
        break;

      default:
        break;
    }
  })

  //Caousel detalle unipack
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .non-programs-why-study .non-programs-why-study--cards-why-study .field--name-cards-why-study").addClass("owl-carousel")

  //Carousel detalle de nuestros programas
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos .block-views-blockrelated-programs-details-cursos section.container__our-programs").addClass("owl-carousel")
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrelated-programs-details-diplomados section.container__our-programs").addClass("owl-carousel")
  //Fondo detalle de nuestro programas
  var bgUnipackDetail = jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .non-programs-why-study .non-programs-why-study--img .block-field-blocknodenon-formal-programsimage-desktop img").attr("src")
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .non-programs-why-study").css("background-image", "url(" + bgUnipackDetail + ")")

  //Fondo detalle unipacks
  var bgUnipackDetail = jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .non-programs-why-study .non-programs-why-study--img .block-field-blocknodeunipacksimage-desktop img").attr("src")
  jQuery(".page-node-type-unipacks main .educon-container #block-educon-content .node__content .non-programs-why-study").css("background-image", "url(" + bgUnipackDetail + ")")


  //Agregar clase carousel en diplomados vista sedes
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado .block-views-blockrectory-non-formal-programs-diplomados section.container__our-programs").addClass("owl-carousel")

  //Identificar los tabs de cursos y diplomados en la vista de sedes
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li").each(function (i, value) {
    jQuery(this).addClass("itemClick" + i + "")
  })
  //Identificar los tabs de cursos y diplomados en la vista de nuestros programas
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li").each(function (i, value) {
    jQuery(this).addClass("itemClick" + i + "")
  })
  //Defino el primer item como activo
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").addClass("active")
  //Defino el primer item como activo vista nuestros porgramas
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").addClass("active")


  ///Agregar los span para los pop Up del home
  jQuery(".page-node-type-page .ui-widget-content #drupal-modal .block-how-study-pop-up .block-how-study-pop-up--info p").each(function (i, value) {
    let counter = i + 1
    jQuery(this).append("<span>" + counter + "</span>")
  })

  //Funciones para cambiar la clase active de los tabs. Vista sedes y para ocultar o mostrar el contenido de cursos o diplomados
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").click(function () {
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").removeClass("active")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").addClass("active")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado").css("display", "none")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos").css("display", "block")
  })
  jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").click(function () {
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").removeClass("active")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").addClass("active")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--diplomado").css("display", "block")
    jQuery(".educon-container #block-educon-content .vocabulary-rectory .content .block-related .blocks-cursos-diplomados .block-related--cursos").css("display", "none")
  })

  //Funciones para el nav en el detalle de nuestros porgramas
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").click(function () {
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").removeClass("active")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").addClass("active")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado").css("display", "none")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos").css("display", "block")
  })
  jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").click(function () {
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick0").removeClass("active")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .block-related--items .menu--menu-relacionados-cursos-y-diplo .nav li.itemClick1").addClass("active")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--diplomado").css("display", "block")
    jQuery(".page-node-type-non-formal-programs main .educon-container #block-educon-content .node__content .block-related .blocks-cursos-diplomados .block-related--cursos").css("display", "none")
  })


  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {

      var ventana_alto = jQuery(window).height();
      if (ventana_alto <= 670) {
        console.log("holis")
        jQuery(".page-node-type-page div[role=dialog]").css("top", "178px")
      }

      jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow").append(arrowOurProgramas)
      var colorTitlesCursosOurPrograms = jQuery('.educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__info .info__title').map(function () {
        return jQuery(this).attr("data-color");
      }).get();
      jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__info .info__title a").each(function (index, value) {
        //jQuery(this).addClass("item-" + index);
        jQuery(this).css("color", colorTitlesCursosOurPrograms[index]);
      });
      var colorArrowsOurProgramas = jQuery('.educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow').map(function () {
        return jQuery(this).attr("data-color");
      }).get();
      jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow svg g path#Trazado_119 ").each(function (index, value) {
        //jQuery(this).addClass("item-" + index);
        jQuery(this).css("fill", colorArrowsOurProgramas[index]);
      });
      jQuery(".educon-container #block-educon-content .programs-list .programs-list--cards-programs .block-views-blockprograms-list-listprograms .container__list-programs-detail .views-row .our-programs__image .arrow svg g path#Trazado_45834 ").each(function (index, value) {
        //jQuery(this).addClass("item-" + index);
        jQuery(this).css("fill", colorArrowsOurProgramas[index]);
      });
    }
  };

})

jQuery(window).on("load", function (e) {
  sliderDeatilsProgram();
})

