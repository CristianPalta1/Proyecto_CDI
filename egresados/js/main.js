var $ = jQuery;

$(document).ready(function () {
  let div_images = '<div class="images__bg" ></div>';
  let discount_crazy = "[about^='/nuestros-servicios/descuentos-locura']";
  let employability = "[about^='/nuestros-servicios/empleabilidad']";
  let entrepreneurship = "[about^='/nuestros-servicios/emprendimiento']";
  let exclusiveTraining = "[about^='/nuestros-servicios/formacion-exclusiva']";
  let icon_hamburger = '<i class="fa fa-bars" aria-hidden="true"></i>';
  let headerH = $("header").innerHeight();

  $("body").css("padding-top", headerH + "px");

  // Add icon for menu mobile
  let nav_toogler = $(
    "header .navbar.navbar-expand-lg .col-3.col-md-auto.p-0.text-right"
  );
  nav_toogler.find(".navbar-toggler .navbar-toggler-icon").remove();
  nav_toogler.find(".navbar-toggler").append(icon_hamburger);

  //animation menúMobile
  $("button.navbar-toggler").click(function () {
    $("html, body").toggleClass("menu-mobile");
    let icon = $(this).find(".fa");

    if (icon.hasClass("fa-bars")) {
      $(icon).removeClass("fa-bars");
      $(icon).addClass("fa-times");
    } else {
      $(icon).addClass("fa-bars");
      $(icon).removeClass("fa-times");
    }
  });

  // Show first name of user login
  if($('#block-userprofile').length) {
    let nameUserArray = $('#block-userprofile .name-user-profile').text().split(' ')
    $('#block-userprofile .name-user-profile').text(nameUserArray[0])
    $('#block-topmenu .name-user-profile').text(nameUserArray[0])
  }

  // Add class container for breadcrums
  if ($(".region-breadcrumb").length) {
    $(".region-breadcrumb .block-system-breadcrumb-block").addClass(
      "container"
    );
  }

  // Play video of experiencs
  $(".show-video .show-video--header .icon-play").on("click", function () {
    let show_header = $(this).closest(".show-video--header");
    let url_video = show_header.find(".url-video").text();

    let element_video =
      '<div class="container_video">' +
      '<iframe width="560" height="315" src="' +
      url_video +
      '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
      "</div>";

    show_header.find(".icon-play").before(element_video);

    setTimeout(() => {
      show_header.addClass("play-video");
      show_header.find(".container_video").css("display", "block");
    }, 1000);
  });

  // Play video list of experiencs
  $(".list-videos .list-videos__item .list-videos__item--image .icon-play").on(
    "click",
    function () {
      let video_select = $(this).closest(".list-videos__item--image");
      let div_video_select = $(this).closest(".list-videos__item");
      let url_video_select = video_select.find(".url-video").text();
      let show_video = $(".show-video .show-video--header");
      let show_video_info = $(".show-video .show-video--card");
      let src_images_video = video_select.find(".thumbnail").attr("src");
      show_video.find(".thumbnail").attr("src", src_images_video);
      show_video.removeClass("play-video");
      show_video.find(".container_video").remove();

      let title = div_video_select
        .find(".list-videos__item--info .title")
        .text();
      let cargo = div_video_select
        .find(".list-videos__item--info .cargo")
        .text();
      let description = div_video_select
        .find(".list-videos__item--info .description")
        .text();

      // let url_videovideo_select
      //   .find("p iframe")
      //   .clone()
      //   .appendTo(".show-video .show-video--header p");
      let element_video =
        '<div class="container_video">' +
        '<iframe width="560" height="315" src="' +
        url_video_select +
        '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
        "</div>";

      show_video.find(".icon-play").before(element_video);

      show_video_info.find(".title").text(title);
      show_video_info.find(".cargo").text(cargo);
      show_video_info.find(".description").text(description);

      setTimeout(() => {
        show_video.addClass("play-video");
        show_video.find(".container_video").css("display", "block");
      }, 1000);
    }
  );

  // Añadir íconos de acordión en el footer en mobile
  if ($(window).width() < 769) {
    let iconArrow = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';
    let footerAcordion = $("footer .region-footer__content .navigation");

    footerAcordion.find("ul").each(function () {
      $(this).before(iconArrow);
    });

    let firstElement = $(
      "footer .region-footer .region-footer__content div"
    ).first();
    firstElement.find("h5").addClass("title-active");
    firstElement.find(".fa").removeClass("fa-chevron-down");
    firstElement.find(".fa").addClass("fa-chevron-up");
    firstElement.find(".navbar-nav").addClass("fade-in");
  }

  // Evento click del acordión en el footer
  $("body").on(
    "click",
    "footer .block-menu.navigation h5, footer .block-menu.navigation .fa",
    function () {
      let footerContainer = $(this).closest(".block-menu.navigation");
      let icon = footerContainer.find(".fa");
      let title = footerContainer.find("h5");

      if (icon.hasClass("fa-chevron-down")) {
        icon.removeClass("fa-chevron-down");
        icon.addClass("fa-chevron-up");
        title.addClass("title-active");
      } else {
        icon.removeClass("fa-chevron-up");
        title.removeClass("title-active");
        icon.addClass("fa-chevron-down");
      }

      let footerResponse = footerContainer.find(".navbar-nav");

      if (footerResponse.hasClass("fade-in")) {
        footerResponse.removeClass("fade-in");
        title.removeClass("title-active");
      } else {
        $(".navbar-nav").each(function () {
          $(this).removeClass("fade-in");
        });

        $(".block-menu.navigation h5").each(function () {
          $(this).removeClass("title-active");
        });

        $(".block-menu.navigation .fa").each(function () {
          $(this).removeClass("fa-chevron-up");
          $(this).addClass("fa-chevron-down");
        });

        footerResponse.addClass("fade-in");

        footerContainer
          .find(".fa")
          .removeClass("fa-chevron-down")
          .addClass("fa-chevron-up");

        title.addClass("title-active");
      }
    }
  );

  // Agregar div a los menus de descuentos de locura para la imagen de fondo
  if (
    $(discount_crazy).length ||
    $(employability).length ||
    $(entrepreneurship).length ||
    $(exclusiveTraining).length
  ) {
    $(".block__general__service__nav .menu-item .menu_link_content").each(
      function () {
        $(this).append(div_images);
      }
    );

    $(".block__general__emp__nav .menu-item .menu_link_content").each(
      function () {
        $(this).append(div_images);
      }
    );
    $(".content__formacion__nav .menu-item .menu_link_content").each(
      function () {
        $(this).append(div_images);
      }
    );
    $(".content__descuentos__nav .menu-item .menu_link_content").each(
      function () {
        $(this).append(div_images);
      }
    );
  }

  // Add imb background for details news
  if ($("body.page-node-type-news").length) {
    $(
      "body.page-node-type-news .content__detail__news--body .news__author__social .field--name-mini-image"
    ).append(div_images);
  }

  // Agregar div a los paginador para la imagen de fondo
  if ($(".pager").length) {
    $(".pager .pagination .page-item").each(function () {
      $(this).append(div_images);
    });
  }

  $(document).ajaxComplete(function (event, xhr, settings) {
    // Agregar div a los paginador para la imagen de fondo
    if ($(".pager").length) {
      $(".pager .pagination .page-item").each(function () {
        $(this).append(div_images);
      });
    }

    // Crear informacion en el modal de cultura
    if ($(".ui-dialog article.node--type-discounts").length) {
      let tite_discount = '<div class="field--name-title"><h2></h2></div>';
      let validate_discount = '<div class="field--name-validate-cupon"></div>';
      let modal_content = $("article.node--type-discounts");
      let text_title = $(
        ".ui-dialog .ui-dialog-titlebar .ui-dialog-title"
      ).text();

      modal_content.find(".field--name-coupon-entity").after(tite_discount);

      modal_content.find(".field--name-title h2").text(text_title);

      if (
        $(".field--name-coupon-from").length ||
        $(".field--name-coupon-until").length
      ) {
        modal_content
          .find(".field--name-short-description")
          .after(validate_discount);

        if ($(".field--name-coupon-from").length) {
          let dateFrom = $(
            ".field--name-coupon-from .field__item .datetime"
          ).text();
          $(".field--name-validate-cupon").append(
            "<p>Válido desde " + dateFrom + "&nbsp</p>"
          );
        }
        if ($(".field--name-coupon-until").length) {
          let dateFrom = $(
            ".field--name-coupon-until .field__item .datetime"
          ).text();
          if ($(".field--name-coupon-from").length) {
            $(".field--name-validate-cupon").append(
              "<p>al " + dateFrom + "</p>"
            );
          } else {
            $(".field--name-validate-cupon").append(
              "<p>Válido hasta " + dateFrom + "</p>"
            );
          }
        }
      }
    }

    // Agregar clases al modal de formación exclusiva: tecMD
    if ($("[about^='/nuestros-servicios/formacion-exclusiva/tecmd']").length) {
      if ($("#drupal-modal").length) {
        let modal = $("#drupal-modal");

        modal.addClass("modal-formacion-exclusiva-tecmd");
      }
    }
  });

  // Agregar el div de fondo al nav  de cultura y entretenimiento
  if ($("[about^='/nuestros-servicios/cultura-entretenimiento']").length) {
    $(".block__general__service__nav .menu-item .menu_link_content ").each(
      function () {
        let div_images = '<div class="images__bg" ></div>';
        $(this).append(div_images);
      }
    );
  }

  // Agregar descripción del nav de formación exclusiva en el body
  if ($("[about^='/nuestros-servicios/formacion-exclusiva']").length) {
    let description_menu_text = $(
      ".block__general__service__nav .menu-item.menu-item--active-trail .menu_link_content .field--name-menu-body p"
    ).text();
    let description_menu_div =
      '<div class="description_menu"><p class="description_menu--info"></p></div>';

    $(".block__general__service__cards .container").prepend(
      description_menu_div
    );
    $(
      ".block__general__service__cards .container .description_menu--info"
    ).text(description_menu_text);
  }

  //Chatbot
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


  // Agregar el div de fondo al nav  de detalle evento
  if ($(".page-node-type-event").length) {
    $(".block__general__event__icon").each(function () {
      let div_images = '<div class="images__bg" ></div>';
      $(this).append(div_images);
    });
  }

  // Add gallery thumbs-slider
  if ($(".page-node-type-news .content__detail__news__gallery").length) {
    let content_gallery = $(
      ".content__detail__news__gallery .media--type-gallery"
    );
    let content_thumbs = '<div class="thumbs-slider"></div>';

    content_gallery.append(content_thumbs);
    content_gallery
      .find(".field__items")
      .clone()
      .appendTo(
        ".content__detail__news__gallery .media--type-gallery .thumbs-slider"
      );

    content_gallery
      .find(".field--type-image .field__items")
      .addClass("owl-carousel");
    content_gallery.find(".field--type-image .field__items").attr("id", "big");
    content_gallery
      .find(".thumbs-slider .field__items")
      .addClass("owl-carousel");
    content_gallery.find(".thumbs-slider .field__items").attr("id", "thumbs");
  }

  // Add footer event_home
  if ($(".home__block__events__news").length) {
    $(
      ".home__block__events__news .home__block__events .view-events-home .view-footer"
    )
      .clone()
      .appendTo(".home__block__events");
  }

  // Remove and Add container for events_home, news_home
  if ($(window).width() < 768) {
    if ($(".home__block__events__news").length) {
      let blockEventsNews = $(".home__block__events__news");
      blockEventsNews.find(".container").removeClass("container");
      blockEventsNews.find(".home__block__news").addClass("container");
      blockEventsNews
        .find(".home__block__events .views-element-container > div")
        .addClass("container");
      blockEventsNews
        .find(".home__block__events .view-footer")
        .addClass("container");
    }
  }

  // Evento que detecta si cambia la url direccionandolo una ancla dentro de la misma página.
  window.addEventListener("hashchange", function () {
    console.log("location changed!");
    let scrollTop = $(window).scrollTop();
    let headerH = $("header").innerHeight();
    headerH += 50;
    window.scrollTo(0, scrollTop - headerH);
  });
});


$(window).on("load", function (e) {
  // Add menu-top to menuMobile
  if ($(window).width() <= 890) {
    $("body header #block-topmenu")
      .clone()
      .appendTo("header #navbarSupportedContent");
  }

})