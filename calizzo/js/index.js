import "../scss/main.scss"


function sliderMainHome() {
  //Banner del home
  jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockbanner-home .views-element-container .banner_home").addClass("owl-carousel")
  jQuery('.banner_home').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
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

function scrollHeader() {
  //Funcionalidad poara modificar el header a fixed
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 0) {
      jQuery("body").addClass("scroll");
    } else {
      jQuery("body").removeClass("scroll");
    }
  })
}
function galleryCarousel() {
  //Carousel en galeria de productos
  jQuery('.carousel__gallery').owlCarousel({
    loop: false,
    margin: 10,
    items: 4,
    responsiveClass: true,

    responsive: {
      0: {
        items: 3,
        nav: true
      },
      600: {
        items: 3,
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

function slidersMovil() {
  if (jQuery(window).width() <= 768) {
    ///Carousel Productos destacados en el home
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockproducts-home .views-element-container .products_featured .products_featured__rows").addClass("owl-carousel")
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockproducts-home .views-element-container .products_featured .products_featured__rows").css("display", "block")
    jQuery('.products_featured__rows').owlCarousel({
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

    ///Funcionalidad imagen de fondo seccion cotiza en linea movil
    var bgQuotes = jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-content .views-row .categories_quotes__background picture source").attr("srcset")
    if (bgQuotes) {
      let newBgQuotes = bgQuotes.split("?")
      // console.log("bgQuotesM", newBgQuotes[0])
      jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container").css("background-image", "url(" + newBgQuotes[0] + ")")
    }


    //Carousel seccion proyectos home
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockprojects-home .views-element-container .projects_featured .projects_featured__rows").css("display", "block")
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockprojects-home .views-element-container .projects_featured .projects_featured__rows").addClass("owl-carousel")
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockprojects-home .views-element-container .projects_featured .projects_featured__rows").addClass("proyect__carousel")
    jQuery('.proyect__carousel').owlCarousel({
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
    sliderAlly();

  } else {
    //Funcionalidad imagen de fondo seccion cotiza en lina desktop
    var bgQuotes = jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-content .views-row .categories_quotes__background picture img").attr("src")
    jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container").css("background-image", "url(" + bgQuotes + ")")
    //Funcionalidad imagen de fondo seccion simulador en vista detall de producto
    var bgQuotes = jQuery("main .calizo-container__body #block-calizo-content .product_simulator .categories_quotes__background picture img").attr("src")
    jQuery(".calizo-container__body #block-calizo-content .product_simulator").css("background-image", "url(" + bgQuotes + ")")
    // console.log("bgQuotesD", bgQuotes)
  }


}

function sliderDetailProduct() {
  if (jQuery(window).width() <= 890) {
    var swiper = new Swiper(".product_left__gallery", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  } else {
    var swiper = new Swiper(".product_left__gallery", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // jQuery("main .calizo-container__body #block-calizo-content .product__info .product__left .product_left__gallery").addClass("owl-carousel")
  // jQuery('.product_left__gallery').owlCarousel({
  //   items: 1,
  //   dots: true,
  //   nav: true,
  //   margin: 10,
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       dots: true,
  //       stagePadding: 0,
  //     },
  //     576: {
  //       items: 1,
  //       nav: false,
  //     },
  //     769: {
  //       items: 1,
  //       nav: false,
  //     },
  //     992: {
  //       items: 1,
  //       nav: true
  //     },
  //     1200: {
  //       items: 1,
  //       nav: true,
  //     },
  //   },
  // })
}

function handlerCountsInputQuoter() {
  let templateBtns = `
  <div class="quantity-button count-up"></div>
  <div class="quantity-button count-down"></div>
  `;
  //Trae la clase del input que vamos a estilar para insertar los custom btns
  jQuery(templateBtns).insertAfter('#block-calizo-content .node__content .block-calizo-quoter-block .calizo_quoter__quoter .calizo_quoter__quoter__form #calizo-quoter-quoter #step2-wrapper #quantity-field-wrapper #edit-quantity');



  //Funcion para recorrer el div padre donde esta el input que se va acustomizar
  jQuery('#quantity-field-wrapper .form-item-quantity').each(function () {

    let spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.count-up'),
      btnDown = spinner.find('.count-down')



    btnUp.click(function () {
      let max = input.attr('max');
      let oldValue = input.val() === "" ? 0 : parseInt(input.val()),
        newVal;
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      input.val(newVal);
      input.trigger("change");
    });



    btnDown.click(function () {
      let min = input.attr('min');
      let oldValue = input.val() === "" ? 0 : parseInt(input.val()),
        newVal;
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      input.val(newVal);
      input.trigger("change");
    });



  });
}

jQuery(document).ready(function () {

  handlerCountsInputQuoter()
  //Funcionalidad Burger Menu
  let activeBurger = false
  jQuery("body header .calizo-container__header .calizo-container__header_menu .calizo_burger__menu button").click(function (e) {
    if (activeBurger) {
      activeBurger = false
      jQuery(this).removeClass("active")
      jQuery("body header .calizo-container__header .calizo-container__header_menu nav#block-calizo-main-menu").removeClass("active")
    } else {
      activeBurger = true
      jQuery(this).addClass("active")
      jQuery("body header .calizo-container__header .calizo-container__header_menu nav#block-calizo-main-menu").addClass("active")
    }
  })


  //Funcionalidad de agregar el formulario dentro del bloque de cotiza en linea
  jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-content .views-row .categories_quotes__info .categories_quotes__col1 .categories_quotes__menu").append(jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-filters"))
  jQuery("body .calizo-container__header .calizo-container__header_menu #block-searchform form .form-actions input#edit-submit").attr("value", "")
  slidersMovil()
  sliderMainHome()
  scrollHeader()
  sliderDetailProduct()
  galleryCarousel()
  sliderProductColors();
  sliderProductTexture();

  if (sessionStorage.getItem('calizo_quoter_1') == undefined) {
    console.log("No data")
    jQuery("#block-calizo-content .node__content .block-calizo-quoter-block .calizo_quoter__quoter .calizo_quoter__action_footer #calizo-quoter-send-mail .container__btn_actions .form-actions .quoter_mail input").addClass("send-mail-no-active")
    jQuery("#calizo-quoter-send-mail").submit(function (e) {
      e.preventDefault();
    });
  } else {
    console.log("Si data")
    jQuery("#block-calizo-content .node__content .block-calizo-quoter-block .calizo_quoter__quoter .calizo_quoter__action_footer #calizo-quoter-send-mail .container__btn_actions .form-actions .quoter_mail input").addClass("send-mail-active")

  }


  ///Funcion abrir  modal en detalle producto
  jQuery("main .calizo-container__body #block-calizo-content .product_simulator .categories_quotes__info .categories_quotes__col1 .categories_quotes__link.product_simulator__link").click(function (e) {
    e.preventDefault();
    jQuery("main .calizo-container__body #block-calizo-content .product_simulator__gallery").css("display", "block")
  })

  jQuery("main .calizo-container__body #block-calizo-content .product_simulator__gallery .container__gallery .modal-body .close_modal").click(function (e) {

    jQuery("main .calizo-container__body #block-calizo-content .product_simulator__gallery").css("display", "none")
  })

  //Funcionalidad para identificar los elementos del navbar
  jQuery("body header .calizo-container__header .calizo-container__header_menu nav#block-calizo-main-menu .navbar-nav > li.nav-item").each(function (i, value) {
    jQuery(this).addClass("navLink-" + i + "")
  })

  ///Funcionalidad de active para los elementos del navbar
  jQuery("body header .calizo-container__header .calizo-container__header_menu nav#block-calizo-main-menu .navbar-nav > li.nav-item").click(function (e) {
    jQuery("body header .calizo-container__header .calizo-container__header_menu nav#block-calizo-main-menu .navbar-nav > li.nav-item.active").removeClass("active")
    jQuery(this).addClass("active")
  })

  //Funcionalidad ocultar value del a e detalle de producto para poner el corazon
  var textWishList = jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__header .product_right_header_right a").text()
  if (textWishList !== "Read Later") {
    jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__header .product_right_header_right a").addClass("wishList")
  }

  let click = false;
  //Funcionalidad acordeon
  jQuery(".accordion_item__title").click(function (e) {
    let acordionItemClick = jQuery(this).attr("id")
    if (click) {
      click = false
      jQuery(".accordion_item__title.active").removeClass("active")
      jQuery(".accordion_item__body.active").removeClass("active")


    } else {
      click = true
      jQuery(".accordion_item__title.active").removeClass("active")
      jQuery("#" + acordionItemClick + "").addClass("active")
      jQuery(".accordion_item__body.active").removeClass("active")
      jQuery(".accordion_item__body." + acordionItemClick + "").addClass("active")
    }

    // console.log("acordionItemClick", acordionItemClick)
  })


  jQuery(".product__links_quoting .btn_product_link").click(function (event) {
    event.preventDefault();
    var urlSimulator = jQuery(".product__links_quoting .btn_product_link").attr("href");
    var urlParameter = "";
    if (jQuery("input:radio[name=texture]:checked").val() != undefined) {
      urlParameter = "&texture=" + jQuery("input:radio[name=texture]:checked").val();
    }
    if (jQuery("input:radio[name=color]:checked").val() != undefined) {
      urlParameter += "&color=" + jQuery("input:radio[name=color]:checked").val();
    }
    urlSimulator += urlParameter;
    window.location.href = urlSimulator;
  });




  ///Funcionalidad para la vista por ajax
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {

      //Funcionalidad para la vista por ajax en simulador
      jQuery("#block-calizo-content .node__content .block-calizo-quoter-block .calizo_quoter__quoter .calizo_quoter__quoter__form #calizo-quoter-quoter #step1-wrapper #step1-wrapper-features #texture-field-wrapper select option").each(function (i, value) {
        jQuery(this).attr("id", `text-item${i}`)
      })
      // jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-content .views-row .categories_quotes__info .categories_quotes__col1 .categories_quotes__menu .block-field-blockblock-contentcalizo-distributor-leadsimage-desktop").append(jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .block-views-blockcategories-quotes-home .views-element-container .view-id-categories_quotes .view-filters .block-field-blockblock-contentcalizo-distributor-leadsbody"))
      var textWishList = jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__header .product_right_header_right a").text()
      if (textWishList !== "Read Later") {
        jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__header .product_right_header_right a").addClass("wishList")
      }
      slidersMovil()
      sliderDetailProduct()
      handlerCountsInputQuoter()
    }
  }

})

jQuery(window).on("load", function (e) {

  //Funcionalidad para la vista por ajax en simulador
  jQuery("#block-calizo-content .node__content .block-calizo-quoter-block .calizo_quoter__quoter .calizo_quoter__quoter__form #calizo-quoter-quoter #step1-wrapper #step1-wrapper-features #texture-field-wrapper select option").each(function (i, value) {
    jQuery(this).attr("id", `text-item${i}`)
  })


  //Funcion para pasar form de buscar arriba en modal
  jQuery("#block-calizo-content article .node__content .layout--onecol .layout__region--content .block-block-content41475fee-5931-499e-b92c-d31bcf75da1d .calizo_search_products .container__calizo_search_products .container__card_info").append(jQuery("#block-calizo-content article .node__content .layout--onecol .layout__region--content .block-views-blockproducts-search .views-element-container .products_featured form"))

  //Funcion para ir al Login si se cierra el popUp
  jQuery(".popup .container-popup .modal-content .modal-body .close-modal").click(function (e) {
    jQuery(location).attr('href', location.origin);
  })
  ///Funcion para clonar el mensaje de success en el PopUp
  if (jQuery(".user-form-page .user-form-page__user-form .layout-container .region-content .alert-status").length) {

    jQuery(".popup").css("display", "block")
    jQuery(".user-form-page .user-form-page__user-form .layout-container .region-content .alert-status").clone().appendTo(".popup .container-popup .modal-content .modal-body");
  }

  ///Funcion para poner el olvidaste tu contraseña a nivel del form y poder usar un grid
  jQuery(".user-form-page .user-form-page__user-form .layout-container .region-content #block-calizo-content form.user-login-form").append(jQuery(".user-form-page .user-form-page__user-form .layout-container .region-content #block-calizo-content form.user-login-form .more-links .forgot_password_link"))

  //Funcion para ocultar el text en el paginador
  jQuery("nav.pager ul.js-pager__items li.page-item a[rel=next] span").text("")
  jQuery("nav.pager ul.js-pager__items li.page-item a[rel=prev] span").text("")

  //Funcion para extraer link y ponerselo al boton de paga aqui
  let linkPayment = jQuery(".calizzo-floating .region-floating .calizo-sidebar-payment .calizo-sidebar-payment__url .field--name-link").text()
  jQuery(".calizzo-floating .region-floating .calizo-sidebar-payment .calizo-sidebar-payment__link").attr("href", `${linkPayment}`)

  ///Funciones para la imagen destacada en el carousel de galeria
  var imageURL = jQuery('main .calizo-container__body #block-calizo-content .product_simulator__gallery .container__gallery .modal-body .carousel__gallery .owl-stage-outer .product_gallery__item img').map(function () {
    return jQuery(this).attr("src");
  }).get();

  jQuery("main .calizo-container__body #block-calizo-content .product_simulator__gallery .container__gallery .modal-body .highlights__image img").attr("src", "" + imageURL[0] + "")

  jQuery('.carousel__gallery.owl-carousel').on('click', '.owl-item .product_gallery__item .product_gallery__item_image', function (e) {
    var targetImage = jQuery(this).attr("src");
    // console.log(targetImage)
    jQuery("main .calizo-container__body #block-calizo-content .product_simulator__gallery .container__gallery .modal-body .highlights__image img").attr("src", `${targetImage}`)
  })

  ///Funcion para identificar los carouseles en el detalle de producto
  jQuery(".accordion_item__title").each(function (i, value) {
    jQuery(this).attr("id", "acordeon-" + i + "")
  })
  jQuery(".accordion_item__body").each(function (i, value) {
    jQuery(this).addClass("acordeon-" + i + "")
  })

  ///Funcion para solo mostrar 2 productos destacados en el detalle de producto

  jQuery("body.path-node main .calizo-container__body #block-calizo-content .views-element-container .products_featured .card__container__product .views-row").each(function (i, value) {
    if (i <= 1) {
      jQuery(this).addClass("higlights__quoter_product")
    } else {
      jQuery(this).addClass("hide__higlights__quoter_product")
    }
  })
})


//Slider colors
function sliderProductColors() {
  let itemSlideColors = jQuery(".product-element__colors.product__element  > div").length
  if (itemSlideColors >= 4) {
    showSlider();
  } else {
    destroySlider();
  }

  function destroySlider() {
    jQuery("product-element__colors.product__element ").owlCarousel('destroy')
    jQuery(".product-element__colors").removeClass("owl-carousel")
    jQuery(".product-element__colors").css("display", "flex")

  }
  function showSlider() {
    jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__container .product_right__atributes .product-element__colors ").addClass("owl-carousel")
    jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__container .product_right__atributes .product-element__colors ").css("display", "block")
    jQuery('.product-element__colors').owlCarousel({
      items: 3,
      // loop: true,
      dots: false,
      nav: false,
      margin: 1,
      responsiveClass: true,
      // autoplay: true,
      // autoplayTimeout: 4000,
      // autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
          dots: false,
          stagePadding: 0,
        },
        576: {
          items: 3,
          nav: false,
        },
        769: {
          items: 3,
          nav: false,
        },
        992: {
          items: 3,
          nav: false
        },
        1200: {
          items: 3,
          nav: false,
        },
      },
    })
  }
}


//slider texture pru¿oduct
function sliderProductTexture() {
  let itemsSlideTexture = jQuery(".product-element__texture.product__element > div").length
  if (itemsSlideTexture >= 4) {
    showSlider2();
  } else {
    destroySlider2();
  }

  function destroySlider2() {
    jQuery(".product-element__texture.product__element").owlCarousel('destroy')
    jQuery(".product-element__texture").removeClass("owl-carousel")
    jQuery(".product-element__texture").css("display", "flex")
  }

  function showSlider2() {
    jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__container .product_right__atributes .product-element__texture").addClass("owl-carousel")
    jQuery("main .calizo-container__body #block-calizo-content .product__info .product_right .product_right__container .product_right__atributes .product-element__texture").css("display", "block")
    jQuery('.product-element__texture').owlCarousel({
      items: 3,
      // loop: true,
      dots: false,
      nav: false,
      margin: 1,
      // responsiveClass: true,
      // autoplay: true,
      // autoplayTimeout: 4000,
      // autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
          dots: false,
          stagePadding: 0,
        },
        576: {
          items: 3,
          nav: false,
        },
        769: {
          items: 3,
          nav: false,
        },
        992: {
          items: 3,
          nav: false
        },
        1200: {
          items: 3,
          nav: false,
        },
      },
    })
  }
}

///Comentario slider
function sliderAlly() {
  //Banner del home
  jQuery("main .calizo-container__body #block-calizo-content .node__content .layout--onecol .layout__region--content .ally__builder .field--name-ally-builder").addClass("owl-carousel")
  jQuery('.field--name-ally-builder').owlCarousel({
    items: 1,
    // loop: true,
    dots: true,
    nav: true,
    margin: 10,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      600: {
        items: 1,
        nav: true,
      }
    },
  })
}


