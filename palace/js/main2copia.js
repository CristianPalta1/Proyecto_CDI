var screen_alto = jQuery(window).height();
var tmp_tmp = '';
//var fecha_fin2x1 = '2021-06-15';
var screen_width = jQuery(window).width();
var owl_multiple = jQuery('.owl-carousel.main_content');
//var time_conteo = ("2019/03/20 00:00:01")
//jQuery("section.main_content_banner .content .main_content_clock .box_clock div#clock").attr('data-time');
var height_menu_mobile = screen_alto - jQuery("button#btn-book-now-mobile").outerHeight()
var alturabooking = 0
var resort_open_content = 0
var remain_resort_credit = 0
var datalimit = 0
var valorsumatoria = 0
var dato_src_pdf = ""
var activado = false;
var dato_src_email = ""
var resort_brand_selected = 0
var resort_disable_params = false
var resort_flight_brand_selected = 0
var bookMexIsTheGrand = 0
var maxPerson = 6;
var acomulado_categoria = new Array();
var sumaT = 0;
var id_cat;
var owlCarouselBanner;
var retorsSelectedGlobal;


/*Language*/
var language_site = drupalSettings.booking.language;
var language_adults = 'Adults';
var language_adult = 'Adult';
var language_children = 'Children';
var language_child = 'Child';
var language_rooms = 'Rooms';
var language_room = 'Room';
var language_agechild = 'Age of Child';
var alertMaxPeople = 'More people require an additional room';
var alertAge = 'Age 0-17';

if (language_site == 'pt') {
  language_adults = 'Adultos';
  language_adult = 'Adulta';
  language_children = 'Crianças';
  language_child = 'Criança';
  language_rooms = 'Quartos';
  language_room = 'Quarto';
  language_agechild = 'Idade da criança';
  language_underyear = 'Menos de 1 ano';
  alertMaxPeople = 'Mais pessoas precisam de um quarto adicional';
  alertAge = 'Idade 0-17'
} else if (language_site == 'es') {
  language_adults = 'Adultos';
  language_adult = 'Adulto';
  language_children = 'Niños';
  language_child = 'Niño';
  language_rooms = 'Habitaciones';
  language_room = 'Habitación';
  language_agechild = 'Edad del niño';
  language_underyear = 'Menos de 1 año';
  alertMaxPeople = 'Más personas requiere una habitación adicional';
  alertAge = 'Edad 0-17';
} else if (language_site == 'en') {
  language_underyear = 'Under 1 year'
} else if (language_site == 'ko') {
  language_adults = 'Adults';
  language_adult = 'Adult';
  language_children = 'Children';
  language_child = 'Child';
  language_rooms = 'Rooms';
  language_room = 'Room';
  language_agechild = 'Age of Child';
  language_underyear = 'Under 1 year';
  alertMaxPeople = 'More people require an additional room';
  alertAge = 'Age 0-17';
} else if (language_site == 'ja') {
  language_adults = 'Adults';
  language_adult = 'Adult';
  language_children = 'Children';
  language_child = 'Child';
  language_rooms = 'Rooms';
  language_room = 'Room';
  language_agechild = 'Age of Child';
  language_underyear = 'Under 1 year';
  alertMaxPeople = 'More people require an additional room';
  alertAge = 'Age 0-17';
} else if (language_site == 'fr') {
  language_adults = 'Adultes';
  language_adult = 'Adulte';
  language_children = 'Les enfants';
  language_child = 'Enfant';
  language_rooms = 'Pièces';
  language_room = 'Pièce';
  language_agechild = "Age de l'enfant";
  language_underyear = "Moins d'un an";
  alertMaxPeople = 'More people require an additional room';
  alertAge = 'Age 0-17';
}


/*Variables booking contenido*/
var contenedor_room = '<div class="main_room_guests" id="room{{numberroom}}"><div class="rooms_bottom_guests"><p class="number_room"><span class="alert">' + alertMaxPeople + '</span> ' + language_room + ' #{{numberroom}}</p><div class="adult" id="i_adults_r"><p class="type">' + language_adult + '</p><div class="rooms_bottom"><span data-button="reduce" onclick="booking_adult_r_only({{numberroom}},\'reduce\')">-</span><p>2</p><span data-button="add" onclick="booking_adult_r_only({{numberroom}},\'add\')">+</span></div></div><div class="children" id="i_children_r"><p class="type">' + language_children + '</p><div class="rooms_bottom"><span data-button="reduce" onclick="booking_children_r_only({{numberroom}},\'reduce\')">-</span><p>0</p><span data-button="add" onclick="booking_children_r_only({{numberroom}},\'add\')">+</span></div></div><div class="box_age_children"></div></div></div></div>'

var contenedor_room_mex = '<div class="main_room_guests" id="room{{numberroom}}_mex_b"><div class="rooms_bottom_guests"><p class="number_room"><span class="alert">' + alertMaxPeople + '</span> ' + language_room + ' #{{numberroom}}</p><div class="adult" id="i_adults_r_mex_b"><p class="type">' + language_adult + '</p><div class="rooms_bottom"><span data-button="reduce" onclick="booking_adult_r_mex_b({{numberroom}},\'reduce\')">-</span><p>2</p><span data-button="add" onclick="booking_adult_r_mex_b({{numberroom}},\'add\')">+</span></div></div><div class="children" id="i_children_r_mex_b"><p class="type">' + language_children + '</p><div class="rooms_bottom"><span data-button="reduce" onclick="booking_children_r_mex_b({{numberroom}},\'reduce\')">-</span><p>0</p><span data-button="add" onclick="booking_children_r_mex_b({{numberroom}},\'add\')">+</span></div></div><div class="box_age_children"></div></div></div></div>'

var contenedor_age_child = '<div class="age_children" id="room{{numberroom}}_children_age_r_{{agechild}}"><p class="age_children_text">' + language_agechild + ' <span>{{agechild}}</span></p><div class="rooms_bottom"><span class="alert">' + alertAge + '</span><span data-button="reduce" onclick="booking_age_child_r_only({{numberroom}},{{agechild}},\'reduce\')">-</span><p class="under">' + language_underyear + '</p><span data-button="add" onclick="booking_age_child_r_only({{numberroom}},{{agechild}},\'add\')">+</span></div></div>'

var contenedor_age_child_mex = '<div class="age_children" id="room{{numberroom}}_children_age_r_mex_{{agechild}}"><p class="age_children_text">' + language_agechild + ' <span>{{agechild}}</span></p><div class="rooms_bottom"><span class="alert">' + language_underyear + '</span><span data-button="reduce" onclick="booking_age_child_r_mex({{numberroom}},{{agechild}},\'reduce\')">-</span><p class="under">' + language_underyear + '</p><span data-button="add" onclick="booking_age_child_r_mex({{numberroom}},{{agechild}},\'add\')">+</span></div></div>'
/*Variables booking*/
//console.log("entro");

var roomsr = 1
var roomsr_mex = 1
var adultsr = 2
var adultsr_mex = 2
var total_book_rf = 2
var adult_book_rf = 0
var child_book_rf = 0
var childrenr = 0
var childrenr_mex = 0
var childeage = 0
var childeage_mex = 0
var autoc_selecionado = 1

/*Autocomplete*/
var optionsautocomplete = {
  url: "/themes/custom/mooncancun/assets/js/json_airports.json",
  getValue: "value",
  list: {
    maxNumberOfElements: 50,
    match: {
      enabled: true
    },
    onClickEvent: function () {
      autoc_selecionado = 0
    }
  },
};
jQuery(".activar-form").click(function () {
  jQuery('.registration-form').removeClass("none-form")
});

jQuery(".close-form-discoveries").click(function () {
  jQuery('.registration-form').addClass("none-form")
});
if (jQuery('section.discoveries_list .content .owl-carousel').length > 0) {
  jQuery(document).ajaxComplete(function (event, xhr, settings) {
    jQuery('section.discoveries_list .content .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      autoHeight: false,
      dots: true,
      responsiveClass: true,
      responsive: {
        992: {
          nav: true,
          dots: true,
          mouseDrag: false
        }
      }
    });
  });
}

function addIdIframe(event) {
  var iframeBanner = document.querySelectorAll('section.main_content_banner .video iframe');
  for (var i = 0; i < iframeBanner.length; i++) {
    iframeBanner[i].id = "iframe" + i;
  }
}

/*
* funtion change slider PlayStop
* @param {evento cambio} event
*/
function stopPlayVideoBanner(event) {
  if (jQuery(window).width() > 540) {
    if (jQuery('section.main_content_banner .video iframe').length != 0) {
      var iframeBanner = document.querySelectorAll('section.main_content_banner .video iframe');
      for (var i = 0; i < iframeBanner.length; i++) {
        if (jQuery(iframeBanner[i]).parent().attr('data-platform') == 'vimeo') {
          player = new Vimeo.Player(iframeBanner[i]);
          player.pause();

          jQuery(iframeBanner[i]).parent().find('.volumeVideo').removeClass('activado');
          jQuery(iframeBanner[i]).parent().removeClass('on');
          player.setVolume(0);
        } else {
          var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          postMessage(jQuery(iframeBanner[i]).attr('id'), 'pauseVideo');

          jQuery(iframeBanner[i]).parent().find('.volumeVideo').removeClass('activado');
          jQuery(iframeBanner[i]).parent().removeClass('on');
          postMessage(jQuery(iframeBanner[i]).attr('id'), 'mute');
        }

      }

      if (jQuery(".main_content_banner .owl-item").eq(event.item.index).find('.video').attr('data-platform') == 'vimeo') {

        if (jQuery(".main_content_banner .owl-item").eq(event.item.index).find('.video').length != 0) {
          var iframepadre = document.querySelectorAll("section.main_content_banner .owl-item")[event.item.index];
          iframe = iframepadre.querySelector("iframe");
          player = new Vimeo.Player(iframe);
          setTimeout(function () {
            player.play();

            jQuery(iframeBanner[i]).parent().find('.volumeVideo').removeClass('activado');
            jQuery(iframeBanner[i]).parent().removeClass('on');
            player.setVolume(0);
          }, 150);
        }
      } else {

        if (jQuery(".main_content_banner .owl-item").eq(event.item.index).find('.video').length != 0) {
          var iframepadre = document.querySelectorAll("section.main_content_banner .owl-item")[event.item.index];
          iframeyou = jQuery(iframepadre).find('iframe').attr('id');

          postMessage(iframeyou, 'playVideo');
          postMessage(iframeyou, 'mute');
        }

      }
    }
  }
}

function postMessage(frame_id, func, args) {

  if (window.jQuery && frame_id instanceof jQuery) {
    frame_id = frame_id.get(0).id;
  }

  var iframe = document.getElementById(frame_id);

  if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
    iframe = iframe.getElementsByTagName('iframe')[0];
  }

  if (iframe) {
    if (typeof (iframe.contentWindow.postMessage) == "function") {

      // Frame exists,
      iframe.contentWindow.postMessage(JSON.stringify({
        "event": "command",
        "func": func,
        "args": args || [],
        "id": frame_id
      }), "*");
    }
  }
}

/*Function add class si es the grand en mex*/
function detectDisableMex_MPDG_active() {
  jQuery(".resort_fly .mex_brand .main_room_guests").each(function () {
    var room = jQuery(this).attr("id").replace('room', '')
    jQuery(this).find(".age_children").each(function () {
      var numero_edad = jQuery(this).find(".rooms_bottom p").text()
      if (numero_edad == 1 || numero_edad == language_underyear) {
        jQuery(this).find(".rooms_bottom p").addClass("item_disable");
        //console.log("es 11")
      } else {
        jQuery(this).find(".rooms_bottom p").removeClass("item_disable");
        //console.log("no es 11")
      }
    })
  })
}

/*function scrollDown arrow*/
function scroll_arrow_pagedescription() {
  var height_content = jQuery("section.page_description .content").outerHeight()
  var scroll = jQuery("section.page_description .content").offset().top - jQuery("header nav.navbar-fixed-top").outerHeight()
  jQuery("html, body").animate({scrollTop: scroll}, "slow");
}

jQuery("section.page_description .content span.arrow-down").click(function () {
  scroll_arrow_pagedescription()
})
jQuery(function () {
  jQuery('.posicion-ancla').click();
});
/*function tabs*/
var cuantos_page_tabs = jQuery('section.page_tabs .content .content_tabs .galery_description .content_galery article').length
if (cuantos_page_tabs > 5) {
  jQuery('section.page_tabs').addClass("nodots")
}
jQuery("section.page_tabs .content nav.nav_tabs ul li").click(function () {
  var cual = jQuery(this).attr('id');
  jQuery("section.page_tabs .content nav.nav_tabs ul li").removeClass("active");
  jQuery(this).addClass("active");
  jQuery("section.page_tabs .content .content_tabs .box_tab").removeClass("active");
  jQuery('section.page_tabs .content .content_tabs ').find('#' + cual + '').addClass("active");
  jQuery(".galery_description .content_galery.owl-carousel").owlCarousel('destroy');

  // jQuery('.galery_description .content_galery.owl-carousel').owlCarousel({
  //       center: false,
  //       items:1,
  //       loop:true,
  //       autoWidth:false,
  //       margin:0,
  //       autoHeight:true,
  //       nav:false,
  //       dots:true,
  //       responsiveClass:true,
  //       responsive:{
  //           992:{
  //               items:3,
  //               center: true,
  //               autoplay: true,
  //               autoWidth:true,
  //               nav:true
  //           }
  //       }
  //     })

  jQuery('.galery_description .content_galery.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      992: {
        items: 2,
        center: true,
        nav: true
      }
    }
  })

})

/*function slider accomodations*/
function slider_accommodations() {
  jQuery("section.accommodations_galery .content").addClass("owl-carousel");
  jQuery('section.accommodations_galery .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true
  })
}

function slider_galery_three_images() {
  jQuery("section.galery_three_images .galery").addClass("owl-carousel");
  jQuery('section.galery_three_images .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    video: true,
    nav: false,
    autoHeight: true,
    dots: true
  })
}

function slider_destination_list() {
  jQuery("section.destination_list .content").addClass("owl-carousel");
  jQuery('section.destination_list .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    video: true,
    nav: false,
    autoHeight: true,
    dots: true
  })
}

function galery_six_images() {
  jQuery("section.galery_six_images .galery").addClass("owl-carousel");
  jQuery('section.galery_six_images .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    video: true,
    nav: false,
    autoHeight: true,
    dots: true
  })
}


/*function slider dining details*/
function slider_dining_details() {
  jQuery("section.dining_details .content .details_reservations ul").addClass("owl-carousel");
  jQuery('section.dining_details .content .details_reservations .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: false
  })
}


/*Centrar video*/
function centravideo() {
  var height_pictures = jQuery("section.main_content_banner .content article.picture img").outerHeight();
  if (height_pictures == undefined) {
    var widthWindow = jQuery(window).width();
    height_pictures = 38.02 * widthWindow / 100;
  }

  jQuery("section.main_content_banner .content").css("height", height_pictures);

  var height_video = jQuery("section.main_content_banner article.video iframe").outerHeight();
  var pos_video = (height_video - height_pictures) / 2;
  jQuery("section.main_content_banner .content article.video").css("margin-top", "-" + pos_video + "px");
}


/*Slider menu tabs multiple*/
function menu_tabs_multiple() {
  jQuery("section.module_multiple .content .owl-dots#carousel-custom-dots").addClass("owl-carousel");
  jQuery('section.module_multiple .content .owl-dots#carousel-custom-dots.owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: false,
  })
}


/*Tabs T&C offers*/
function open_tabtyc() {
  jQuery(".tab_tyc .title").attr("onclick", "close_tabtyc()")
  jQuery(".tab_tyc .title").addClass("activo")
  jQuery("section.landings_tyc .title").attr("onclick", "close_tabtyc()")
  jQuery("section.landings_tyc .title").addClass("activo")
  jQuery(".box_terms").slideDown(500)
}

function close_tabtyc() {
  jQuery(".tab_tyc .title").attr("onclick", "open_tabtyc()")
  jQuery(".tab_tyc .title").removeClass("activo")
  jQuery("section.landings_tyc .title").attr("onclick", "open_tabtyc()")
  jQuery("section.landings_tyc .title").removeClass("activo")
  jQuery(".box_terms").slideUp(500)
}


/*-----------------lBox functions nuevas--------------------*/

function closelbox() {
  jQuery("section.main_lbox .lbox .close").click(function () {
    jQuery("section.main_lbox").fadeOut(500, function () {
      jQuery("section.main_lbox .lbox .item").html('');
    });
  })
}

function accommodations_virtual_tour_home() {
  closelbox()
  jQuery("section.accommodations_galery .content article.virtual_tour").click(function () {
    //console.log("entroo")
    var tourid = jQuery(this).attr("data-ref")
    if (tourid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + tourid + '"></iframe>');
      });
    }
  })
}

/*Video galery 6 imagenes con video lbox*/
function lbox_video_siximages() {
  closelbox()
  jQuery("section.galery_six_images_video .content div.galery article").click(function () {
    var videoid = jQuery(this).attr("data-ref")
    if (videoid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="https://player.vimeo.com/video/' + videoid + '?autoplay=0&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>');
      });
    }
  })

  if (screen_width <= 992) {
    jQuery("section.galery_six_images_video .content div.galery").addClass("owl-carousel");
    jQuery('section.galery_six_images_video .content .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      autoHeight: true,
      dots: true
    })
  }
}

function lbox_accommodations_virtual_tour() {
  closelbox()
  jQuery("section.accommodations_virtual_tour .content .main_content").click(function () {
    var tourid = jQuery(this).find(".info").attr("data-ref")
    if (tourid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + tourid + '"></iframe>');
      });
    }
  })
}

/*function showtour*/
function lbox_tour_accommodations_list() {
  closelbox()
  jQuery("section.accommodations_list .content article .copy .box_price .box_btns .btn.vt").click(function () {
    var tourid = jQuery(this).attr("data-ref")
    if (tourid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + tourid + '"></iframe>');
      });
    }
  })
}

function lbox_virtual_tours_dining_two() {
  closelbox()
  jQuery("section.dining_galery_two_vr .content .owl-item article.virtual_tour").click(function () {
    var tourid = jQuery(this).find(".info").attr("data-ref")
    if (tourid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + tourid + '"></iframe>');
      });
    }
  })

}

/*Over btns menu header languages*/
function btns_languages_menu() {

  if (screen_width > 1200) {
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").mouseenter(function () {
      jQuery(this).addClass("activo")
      jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang ul").slideDown(300)
    });

    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang").mouseleave(function () {
      jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").removeClass("activo")
      jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang ul").slideUp(300)
    });
  } else {
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").attr("onclick", "openmenulangm()")
  }

}

function openmenulangm() {
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").addClass("activo")
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang ul").slideDown(300)
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").attr("onclick", "closemenulangm()")
}

function closemenulangm() {
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").removeClass("activo")
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang ul").slideUp(300)
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top .navbar-top-lang p").attr("onclick", "openmenulangm()")
}

function menu_phone_header() {
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-phone").click(function () {
    jQuery(this).addClass("active")
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-news").removeClass("active")
    jQuery("header .nav-phone-expanded").slideDown(500)
    jQuery("header .nav-news-expanded").slideUp(500)
  })

  jQuery(".nav-phone-expanded .content-phones .close").click(function () {
    jQuery("header .nav-phone-expanded").slideUp(500)
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-phone").removeClass("active")
  })
}

function menu_news_header() {
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-news").click(function () {
    jQuery(this).addClass("active")
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-phone").removeClass("active")
    jQuery("header .nav-news-expanded").slideDown(500)
    jQuery("header .nav-phone-expanded").slideUp(500)
  })

  jQuery(".nav-news-expanded .content-news .block-text .close").click(function () {
    jQuery("header .nav-news-expanded").slideUp(500)
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-news").removeClass("active")
  })

  jQuery(".big-deals-join-us .btn-box .btn").click(function () {
    jQuery(this).addClass("active")
    jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-contact li.nav-phone").removeClass("active")
    jQuery("header .nav-news-expanded").slideDown(500)
    jQuery("header .nav-phone-expanded").slideUp(500)
  })

}

/*Menu mobile*/
function open_menu_mobile() {
  jQuery("#chatbotmobile").css("display", "none");
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed").slideDown(500)
  jQuery("header nav.navbar-fixed-top .container .navbar_menu_mobile_btn").attr("onclick", "close_menu_mobile()")
  jQuery("header nav.navbar-fixed-top .container .navbar_menu_mobile_btn").addClass("activo");
  jQuery(".tagove-livechat-widget.mobile-frame").fadeOut(300);
}

function close_menu_mobile() {
  jQuery("#chatbotmobile").css("display", "block");
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed").fadeOut(500)
  jQuery("header nav.navbar-fixed-top .container .navbar_menu_mobile_btn").attr("onclick", "open_menu_mobile()")
  jQuery("header nav.navbar-fixed-top .container .navbar_menu_mobile_btn").removeClass("activo");
  jQuery(".tagove-livechat-widget.mobile-frame").fadeIn(300);
}

function top_menu_hover() {
  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-nav li.dropdown").mouseenter(function () {
    jQuery(this).find("ul.dropdown-menu").slideDown(300);
  });

  jQuery("header nav.navbar-fixed-top .container .navbar-collapsed section.nav.navbar-top ul.navbar-top-nav li.dropdown").mouseleave(function () {
    jQuery(this).find("ul.dropdown-menu").slideUp(300);
  });
}


/*Galery*/

function galery_tabs() {

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_photos .photo").mouseenter(function () {
    jQuery(this).find("img").css("transform", "scale(1.2)")
  });

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_photos .photo").mouseleave(function () {
    jQuery(this).find("img").css("transform", "scale(1)")
  });

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_videos .video").mouseenter(function () {
    jQuery(this).find("img").css("transform", "scale(1.2)")
  });

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_videos .video").mouseleave(function () {
    jQuery(this).find("img").css("transform", "scale(1)")
  });

  jQuery("section.galery_tabs .content nav.nav_tabs ul li").click(function () {
    var cual = jQuery(this).attr('id');
    jQuery("section.galery_tabs .content nav.nav_tabs ul li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery("section.galery_tabs .content .content_tabs .box_tab").hide()
    jQuery('section.galery_tabs .content .content_tabs').find('#' + cual + '').fadeIn(500)
  })

  closelbox()

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_photos .photo").click(function () {
    var imgid = jQuery(this).find("img").attr("src")
    if (imgid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<picture><img src="' + imgid + '"></picture>');
      });
    }
  })


  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_vrtours .vrtours").click(function () {
    var tourid = jQuery(this).attr("data-ref")
    if (tourid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + tourid + '"></iframe>');
      });
    }
  })

  jQuery("section.galery_tabs .content .content_tabs .box_tab.galery_videos .video").click(function () {
    var videoid = jQuery(this).attr("data-ref")
    if (videoid != undefined) {
      jQuery("section.main_lbox").fadeIn(500, function () {
        jQuery("section.main_lbox .lbox .item").html('<iframe title="video" src="' + videoid + '" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>');
      });
    }
  })


}


/*slider menu tabs galery*/
function slider_tabs_galery() {

  jQuery("section.galery_tabs .content nav.nav_tabs ul").addClass("owl-carousel");
  jQuery('section.galery_tabs .content nav.nav_tabs .owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: false
  })

  var owlpagetabs = jQuery('section.galery_tabs .content nav.nav_tabs .owl-carousel');
  owlpagetabs.on('changed.owl.carousel', function (event) {

    setTimeout(function () {
      jQuery("section.galery_tabs .content nav.nav_tabs .owl-carousel .owl-item.active li").trigger("click");
    }, 100);

  })

}

/*Slider menu tabs only brand*/
function slider_tabs_menu_brad() {
  jQuery("section.tabs_moon_brand_mixto .content nav.nav_tabs ul").addClass("owl-carousel");
  jQuery('section.tabs_moon_brand_mixto .content nav.nav_tabs .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: false
  })
}


function close_booking() {
  jQuery("section.booking.min .close_h").click(function () {
    jQuery("section.booking.min").animate({
      right: '-300px'
    }, 500);
    jQuery("button#btn-book-now-mobile.min").css("top", 80);
  })
}

function top_booking() {
  alturabooking = parseInt(jQuery("section.main_content_banner").outerHeight() - 80)
  jQuery("section.booking").css("top", alturabooking)
  jQuery("section.booking").fadeIn(600);

  jQuery("button#btn-book-now-mobile").click(function () {
    jQuery("section.booking.min").animate({
      right: '0'
    }, 500);

    jQuery("section.booking").css("top", 80);
    jQuery(this).css("top", 0);

    close_booking();

  })

}

function booking_adult_r_only(roomid, actiontype) {
  var adultsrint = parseInt(jQuery(".only_resort #room" + roomid).find("div#i_adults_r .rooms_bottom p").html())
  var childrenrint = parseInt(jQuery(".only_resort #room" + roomid).find("div#i_children_r .rooms_bottom p").html())
  adultsr = parseInt(jQuery(".only_resort div#p_adults_r p.number").html())
  var adultsrint_cout = adultsrint + 1;
  var total_guest = adultsrint_cout + childrenrint;


  if (actiontype == "add") {

    //console.log("add only adult")

    if (adultsrint < maxPerson && total_guest <= maxPerson) {
      adultsr = adultsr + 1

      //console.log("SumaT: "+roomid + total_guest)

      jQuery(".only_resort #room" + roomid).find("div#i_adults_r .rooms_bottom p").html(adultsrint + 1);
      jQuery(".only_resort div#p_adults_r").find("p.number").html(adultsr);
    } else {
      jQuery(".only_resort #room" + roomid).find("p.number_room span.alert").fadeIn(300);
      setTimeout(function () {
        jQuery(".only_resort #room" + roomid + " p.number_room span.alert").fadeOut(300)
      }, 3000);
    }

  } else if (actiontype == "reduce") {

    //console.log("reduce only adult")

    if (adultsrint > 1) {
      adultsr = adultsr - 1
      jQuery(".only_resort #room" + roomid).find("div#i_adults_r .rooms_bottom p").html(adultsrint - 1);

      if (adultsrint == 1) {
        jQuery(".only_resort div#i_adults_r .p.type").html(language_adult)
      }
      jQuery(".only_resort div#p_adults_r").find("p.number").html(adultsr);

    }

  }
}

function booking_adult_r_mex_b(roomid, actiontype) {
  //console.log("entro2")
  var adultsrint = parseInt(jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_adults_r_mex_b .rooms_bottom p").html())
  var childrenrint = parseInt(jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_children_r_mex_b .rooms_bottom p").html())
  adultsr_mex = parseInt(jQuery(".resort_fly .mex_brand div#p_adults_r_mex_b p.number").html())
  var adultsrint_cout = adultsrint + 1
  var total_guest = adultsrint_cout + childrenrint

  if (actiontype == "add") {

    //console.log("add mex adult")

    if (adultsrint < maxPerson && total_guest <= maxPerson) {
      adultsr_mex = adultsr_mex + 1

      //console.log("SumaT: "+roomid + total_guest)

      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_adults_r_mex_b .rooms_bottom p").html(adultsrint + 1);
      jQuery(".resort_fly .mex_brand div#p_adults_r_mex_b").find("p.number").html(adultsr_mex);
    } else {
      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("p.number_room span.alert").fadeIn(300);
      setTimeout(function () {
        jQuery("#room" + roomid + "_mex_b p.number_room span.alert").fadeOut(300)
      }, 3000);
    }

  } else if (actiontype == "reduce") {

    //console.log("red mex adult")

    if (adultsrint > 1) {
      adultsr_mex = adultsr_mex - 1
      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_adults_r_mex_b .rooms_bottom p").html(adultsrint - 1);

      if (adultsrint == 1) {
        jQuery(".resort_fly .mex_brand div#i_adults_r_mex_b .p.type").html(language_adult)
      }
      jQuery(".resort_fly .mex_brand div#p_adults_r_mex_b").find("p.number").html(adultsr_mex);

    }

  }
}

function booking_age_child_r_only(roomid, childid, actiontype) {

  var childrenr_int_age = jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').html();

  if (actiontype == "add") {

    //console.log("add age child only")

    if (childrenr_int_age < 17 || childrenr_int_age == language_underyear) {
      //childeage = childeage+1
      jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').removeClass("under")

      if (childrenr_int_age == language_underyear) {
        jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').html(1);
      } else if (childrenr_int_age >= 1) {
        childrenr_int_age = parseInt(childrenr_int_age)
        jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').html(childrenr_int_age + 1);
      }

    } else {
      jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom span.alert').fadeIn(300);
      setTimeout(function () {
        jQuery('.box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom span.alert').fadeOut(300)
      }, 2000);
    }

  } else if (actiontype == "reduce") {

    //console.log("reduce age child only")

    if (childrenr_int_age > 0) {
      //childrenrintage_cout = childrenrintage_cout-1

      jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').html(childrenr_int_age - 1);

      if (childrenr_int_age == 1) {
        jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').addClass("under")
        jQuery('.only_resort .box_age_children #room' + roomid + '_children_age_r_' + childid + ' .rooms_bottom p').html(language_underyear);
      }

    }

  }
}


function booking_age_child_r_mex(roomid, childid, actiontype) {

  var childrenr_int_age = jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').html();
  //console.log(childrenr_int_age)
  if (actiontype == "add") {

    //console.log("add age child mex")

    if (childrenr_int_age < 17 || childrenr_int_age == language_underyear) {
      //childeage = childeage+1
      jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').removeClass("under")

      if (childrenr_int_age == language_underyear) {
        jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').html(1);

      } else if (childrenr_int_age >= 1) {
        childrenr_int_age = parseInt(childrenr_int_age)
        jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').html(childrenr_int_age + 1);
      }

    } else {
      jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom span.alert').fadeIn(300);
      setTimeout(function () {
        jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom span.alert').fadeOut(300)
      }, 2000);
    }

  } else if (actiontype == "reduce") {

    //console.log("reduce age child mex")

    if (childrenr_int_age > 0) {
      //childrenrintage_cout = childrenrintage_cout-1

      jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').html(childrenr_int_age - 1);

      if (childrenr_int_age == 1) {
        jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').addClass("under")
        jQuery('.resort_fly .mex_brand .box_age_children #room' + roomid + '_children_age_r_mex_' + childid + ' .rooms_bottom p').html(language_underyear);
      }

    }

  }

  if (bookMexIsTheGrand == 1) {
    detectDisableMex_MPDG_active();
  }

}


function booking_children_r_only(roomid, actiontype) {

  var childrenrint = parseInt(jQuery(".only_resort #room" + roomid).find("div#i_children_r .rooms_bottom p").html())
  var adultsrint = parseInt(jQuery(".only_resort #room" + roomid).find("div#i_adults_r .rooms_bottom p").html())
  childrenr = parseInt(jQuery(".only_resort div#p_children_r p.number").html())
  var childrenrint_cout = childrenrint + 1
  var total_guest = adultsrint + childrenrint_cout

  if (actiontype == "add") {

    //console.log("add child only")

    if (childrenrint < maxPerson && total_guest <= maxPerson) {
      childrenr = childrenr + 1

      //console.log("SumaT: "+roomid + total_guest)

      jQuery(".only_resort #room" + roomid).find("div#i_children_r .rooms_bottom p").html(childrenrint + 1);
      jQuery(".only_resort div#p_children_r").find("p.number").html(childrenr);

      jQuery(".only_resort #room" + roomid).find(".rooms_bottom_guests .box_age_children").append(contenedor_age_child.replace(/{{agechild}}/g, childrenrint_cout).replace(/{{numberroom}}/g, roomid));

    } else {
      jQuery(".only_resort #room" + roomid).find("p.number_room span.alert").fadeIn(300);
      setTimeout(function () {
        jQuery(".only_resort #room" + roomid + " p.number_room span.alert").fadeOut(300)
      }, 3000);
    }

  } else if (actiontype == "reduce") {

    //console.log("reduce child only")

    if (childrenrint > 0) {
      childrenr = childrenr - 1
      jQuery(".only_resort #room" + roomid).find("div#i_children_r .rooms_bottom p").html(childrenrint - 1);

      jQuery('.only_resort .rooms_bottom_guests .box_age_children #room' + roomid + '_children_age_r_' + childrenrint + '').remove()

      if (childrenrint == 1) {
        jQuery(".only_resort div#i_children_r .p.type").html(language_adult)
      }
      jQuery(".only_resort div#p_children_r").find("p.number").html(childrenr);

    }

  }
}


function booking_children_r_mex_b(roomid, actiontype) {

  var childrenrint = parseInt(jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_children_r_mex_b .rooms_bottom p").html())
  var adultsrint = parseInt(jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_adults_r_mex_b .rooms_bottom p").html())
  childrenr_mex = parseInt(jQuery(".resort_fly .mex_brand div#p_children_r_mex_b p.number").html())
  var childrenrint_cout = childrenrint + 1
  var total_guest = adultsrint + childrenrint_cout

  if (actiontype == "add") {

    //console.log("add child mex")

    if (childrenrint < 6 && total_guest <= 6) {
      childrenr_mex = childrenr_mex + 1

      //console.log("SumaT: "+roomid + total_guest)

      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_children_r_mex_b .rooms_bottom p").html(childrenrint + 1);
      jQuery(".resort_fly .mex_brand div#p_children_r_mex_b").find("p.number").html(childrenr_mex);

      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find(".rooms_bottom_guests .box_age_children").append(contenedor_age_child_mex.replace(/{{agechild}}/g, childrenrint_cout).replace(/{{numberroom}}/g, roomid));

      if (bookMexIsTheGrand == 1) {
        detectDisableMex_MPDG_active();
      }

    } else {
      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("p.number_room span.alert").fadeIn(300);
      setTimeout(function () {
        jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b p.number_room span.alert").fadeOut(300)
      }, 3000);
    }

  } else if (actiontype == "reduce") {

    //console.log("reduce child mex")

    if (childrenrint > 0) {
      //console.log("entro mayor a 0 new")
      childrenr_mex = childrenr_mex - 1
      jQuery(".resort_fly .mex_brand #room" + roomid + "_mex_b").find("div#i_children_r_mex_b .rooms_bottom p").html(childrenrint - 1);

      jQuery('.resort_fly .mex_brand .rooms_bottom_guests .box_age_children #room' + roomid + '_children_age_r_mex_' + childrenrint + '').remove()

      if (childrenrint == 1) {
        jQuery(".resort_fly .mex_brand div#i_children_r_mex_b .p.type").html(language_adult)
      }
      jQuery(".resort_fly .mex_brand div#p_children_r_mex_b").find("p.number").html(childrenr_mex);

    }

  }
}


function booking() {

  /*DatePiker*/
  if (screen_width > 1200) {

    //////////////////////////////

    if (language_site == 'es') {
      jQuery.fn.datepicker.dates['es'] = {
        days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        today: "Hoy",
        clear: "Cerrar",
      };
      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'es',
        datesDisabled: [drupalSettings.booking.fechas],
      });

    } else if (language_site == 'en') {

      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'en',
        datesDisabled: [drupalSettings.booking.fechas],
      });

    } else if (language_site == 'pt') {

      jQuery.fn.datepicker.dates['pt'] = {
        days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Sx', 'Sa'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: "Hoje",
        clear: "Perto",
      };


      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'pt',
        datesDisabled: [drupalSettings.booking.fechas],
      });
    }

    ////////////////////////////////

  } else {

    //////////////////////////////

    if (language_site == 'es') {
      jQuery.fn.datepicker.dates['es'] = {
        days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        today: "Hoy",
        clear: "Cerrar",
      };
      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'es',
        container: '#cont_box_movile_date',
        datesDisabled: [drupalSettings.booking.fechas],
      });

    } else if (language_site == 'en') {

      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'en',
        container: '#cont_box_movile_date',
        datesDisabled: [drupalSettings.booking.fechas],
      });


    } else if (language_site == 'pt') {

      jQuery.fn.datepicker.dates['pt'] = {
        days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
        daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Sx', 'Sa'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        today: "Hoje",
        clear: "Perto",
      };

      jQuery('input.form-control.date').datepicker({
        autoclose: true,
        startDate: 'today',
        disableTouchKeyboard: true,
        language: 'pt',
        container: '#cont_box_movile_date',
        datesDisabled: [drupalSettings.booking.fechas],
      });

    }

    ////////////////////////////////

  }

  var date_check_in = new Date();
  var date_check_out = new Date();
  var date_check_in_rf = new Date();
  var date_check_out_rf = new Date();
  var checkin_date_r_mex_b = new Date();
  var checkout_date_r_mex_b = new Date();
  date_check_in.setDate(date_check_in.getDate() + 15);
  date_check_out.setDate(date_check_out.getDate() + 20);
  date_check_in_rf.setDate(date_check_in_rf.getDate() + 15);
  date_check_out_rf.setDate(date_check_out_rf.getDate() + 22);
  checkin_date_r_mex_b.setDate(checkin_date_r_mex_b.getDate() + 15);
  checkout_date_r_mex_b.setDate(checkout_date_r_mex_b.getDate() + 20);

  jQuery("#checkin_date_r").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in);
  jQuery("#checkout_date_r").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_out);
  jQuery("#checkin_date_rf").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in_rf);
  jQuery("#checkout_date_rf").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_out_rf);
  jQuery("#checkin_date_r_mex_b").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in);
  jQuery("#checkout_date_r_mex_b").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_out_rf).datepicker("setStartDate", date_check_out_rf);

  /*Change*/
  jQuery('input.form-control.date').change(function (ev) {
    var cual = ev.currentTarget.id;
    var new_options = {
      autoclose: true,
      disableTouchKeyboard: true,
      language: language_site,
      container: '#cont_box_movile_date',
      datesDisabled: [drupalSettings.booking.fechas],
    }

    var new_options_major = {
      autoclose: true,
      language: language_site,
      datesDisabled: [drupalSettings.booking.fechas],
    }

    if (cual == 'checkin_date_r') {
      //console.log("checkin resort")
      var dater = ev.currentTarget.value;
      var date_check_out = new Date(dater);
      if (screen_width < 1200) {
        jQuery('#checkout_date_r').datepicker(new_options);
      } else {
        jQuery('#checkout_date_r').datepicker(new_options_major);
      }

      date_check_out.setDate(date_check_out.getDate() + 5);
      if (retorsSelectedGlobal == "moonpalace cancún - nizuc" && date_check_out >= new Date('2020-11-01T00:00:00-05:00') && date_check_out <= new Date('2021-03-26T00:00:00-05:00')) {
        date_check_out = new Date('2020-10-31T00:00:00-05:00');
      }
      /* jQuery('#checkout_date_r').datepicker('setEndDate', false); */
      jQuery('#checkout_date_r').datepicker('setStartDate', dater);
      jQuery("#checkout_date_r").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_out);

    } else if (cual == 'checkin_date_rf') {
      //console.log("checkin resort + fly")
      var daterf = ev.currentTarget.value;
      var date_check_out = new Date(daterf);
      date_check_out.setDate(date_check_out.getDate() + 7);
      jQuery('#checkout_date_rf').datepicker("destroy");
      if (screen_width < 1200) {
        jQuery('#checkout_date_rf').datepicker(new_options);
      } else {
        jQuery('#checkout_date_rf').datepicker(new_options_major);
      }
      jQuery("#checkout_date_rf").datepicker("setDate", date_check_out);
      jQuery('#checkout_date_rf').datepicker('setStartDate', daterf);


    } else if (cual == 'checkin_date_r_mex_b') {
      //console.log("checkin resort MEX")
      var daterf_mex = ev.currentTarget.value;
      var date_check_out_mex = new Date(daterf_mex);
      date_check_out_mex.setDate(date_check_out_mex.getDate() + 7);
      jQuery('#checkout_date_r_mex_b').datepicker("destroy");
      if (screen_width < 1200) {
        jQuery('#checkout_date_r_mex_b').datepicker(new_options);
      } else {
        jQuery('#checkout_date_r_mex_b').datepicker(new_options_major);
      }

      jQuery("#checkout_date_r_mex_b").datepicker("setDate", date_check_out_mex);
      jQuery('#checkout_date_r_mex_b').datepicker('setStartDate', daterf_mex);

      /* if (retorsSelectedGlobal == "moonpalace cancún - nizuc") {
        jQuery('#checkout_date_r_mex_b').datepicker("destroy");
        var new_options = {
          autoclose: true,
          language: language_site,
          format: 'mm/dd/yyyy',
          datesDisabled: ['11/01/2020', '11/02/2020', '11/03/2020', '11/04/2020', '11/05/2020', '11/06/2020', '11/07/2020', '11/08/2020', '11/09/2020', '11/10/2020', '11/11/2020', '11/12/2020', '11/13/2020', '11/14/2020', '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020', '11/22/2020', '11/23/2020', '11/24/2020', '11/25/2020', '11/26/2020', '11/27/2020', '11/28/2020', '11/29/2020', '11/30/2020', '12/01/2020', '12/02/2020', '12/03/2020', '12/04/2020', '12/05/2020', '12/06/2020', '12/07/2020', '12/08/2020', '12/09/2020', '12/10/2020', '12/11/2020', '12/12/2020', '12/13/2020', '12/14/2020', '12/15/2020', '12/16/2020', '12/17/2020', '12/18/2020', '12/19/2020', '12/20/2020', '12/21/2020', '12/22/2020', '12/23/2020', '12/24/2020', '12/25/2020', '12/26/2020', '12/27/2020', '12/28/2020', '12/29/2020', '12/30/2020', '12/31/2020', '01/01/2021', '01/02/2021', '01/03/2021', '01/04/2021', '01/05/2021', '01/06/2021', '01/07/2021', '01/08/2021', '01/09/2021', '01/10/2021', '01/11/2021', '01/12/2021', '01/13/2021', '01/14/2021', '01/15/2021', '01/16/2021', '01/17/2021', '01/18/2021', '01/19/2021', '01/20/2021', '01/21/2021', '01/22/2021', '01/23/2021', '01/24/2021', '01/25/2021', '01/26/2021', '01/27/2021', '01/28/2021', '01/29/2021', '01/30/2021', '01/31/2021', '02/01/2021', '02/02/2021', '02/03/2021', '02/04/2021', '02/05/2021', '02/06/2021', '02/07/2021', '02/08/2021', '02/09/2021', '02/10/2021', '02/11/2021', '02/12/2021', '02/13/2021', '02/14/2021', '02/15/2021', '02/16/2021', '02/17/2021', '02/18/2021', '02/19/2021', '02/20/2021', '02/21/2021', '02/22/2021', '02/23/2021', '02/24/2021', '02/25/2021', '02/26/2021', '02/27/2021', '02/28/2021', '03/01/2021', '03/02/2021', '03/03/2021', '03/04/2021', '03/05/2021', '03/06/2021', '03/07/2021', '03/08/2021', '03/09/2021', '03/10/2021', '03/11/2021', '03/12/2021', '03/13/2021', '03/14/2021', '03/15/2021', '03/16/2021', '03/17/2021', '03/18/2021', '03/19/2021', '03/20/2021', '03/21/2021', '03/22/2021', '03/23/2021', '03/24/2021', '03/25/2021'],
        };
        jQuery('#checkout_date_r_mex_b').datepicker(new_options).datepicker("setDate", date_check_out_mex).datepicker('setStartDate', daterf_mex);

      } */

    }

  });
  /*Change*/

  /*Show type*/
  jQuery("section.booking form.form_book_now .icons_booking .ico_resort").click(function () {
    var cual = jQuery(this).attr("data-ref")
    jQuery("section.booking form.form_book_now .icons_booking .ico_resort").removeClass("active")
    if (cual == "resortfly") {
      jQuery(this).addClass("active");
      jQuery("section.booking .resort_fly").css("display", "inline-block");
      jQuery("section.booking .only_resort").hide();
    } else if (cual == "onlyresort") {
      jQuery(this).addClass("active");
      jQuery("section.booking .only_resort").css("display", "inline-block");
      jQuery("section.booking .resort_fly").hide();
    }
  })

  /*Show rooms*/
  jQuery("section.booking form.form_book_now .only_resort .rooms").click(function (e) {
    var target = jQuery(e.target);
    if (jQuery('section.booking form.form_book_now .only_resort .rooms .main_box_rooms').is(':visible')) {
      if (!target.parents(".main_box_rooms").length) {
        jQuery("section.booking form.form_book_now .only_resort .rooms .main_box_rooms").slideUp(300);
      }
    } else {
      jQuery("section.booking form.form_book_now .only_resort .rooms .main_box_rooms").slideDown(300);
    }
  })

  jQuery('section.booking form.form_book_now .only_resort .rooms').click(function (e) {
    e.stopPropagation();
  });

  jQuery('html').click(function (e) {
    jQuery("section.booking form.form_book_now .only_resort .rooms .main_box_rooms").slideUp(300);
  });


  /*Show rooms mex*/
  jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms").click(function () {
    if (jQuery('body').hasClass('diferent-main') == false) {
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .main_box_rooms").slideDown(300);
    }
  })

  jQuery('section.booking form.form_book_now .resort_fly .mex_brand .rooms').click(function (e) {
    e.stopPropagation();
  });

  jQuery('html').click(function (e) {
    if (jQuery('body').hasClass('diferent-main') == false) {
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .main_box_rooms").slideUp(300);
    }
  });


  /*Show Child age*/
  jQuery('section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf').click(function (e) {
    e.stopPropagation();
  });

  jQuery('html').click(function (e) {
    jQuery("section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf .main_box_age_kids").slideUp(300);
  });

  /*Touch*/
  jQuery('html').on('touchstart', function (e) {
    jQuery("section.booking form.form_book_now .only_resort .rooms .main_box_rooms").slideUp(300);
    jQuery("section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf .main_box_age_kids").slideUp(300);
  });

  jQuery('section.booking form.form_book_now .only_resort .rooms').on('touchstart', function (e) {
    e.stopPropagation();
  });

  jQuery('section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf').on('touchstart', function (e) {
    e.stopPropagation();
  });


  /*Select resort + fly*/
  jQuery("section.booking form.form_book_now .resort_fly button#btn_book_now_resort_fly").click(function (e) {
    e.preventDefault();

    var fullurl = '';
    var codhotel = drupalSettings.booking.codigo_propiedad;
    var currency = jQuery('.booking').attr('data-m') == 'MX' ? 'MXN' : 'USD';
    var lang = drupalSettings.booking.langcode;
    var urldefault = resort_flight_brand_selected;
    //console.log("urldefault " + urldefault);
    var error = 1;
    var origen = jQuery("input#origin").val().substr(0, 3);
    var checkin_date_rf = jQuery("input#checkin_date_rf").val().split('/').join('-');
    var checkout_date_rf = jQuery("input#checkout_date_rf").val().split('/').join('-');
    var adult = jQuery("div#adult_rf .number_adults_rf p.copy_rooms_rf").text().substr(0, 2).replace(" ", "");
    var rooms = jQuery("div#rooms_rf .box_number_romms_rf p.copy_room_rf").text().substr(0, 2).replace(" ", "");
    var cual_resort = jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f .box_select_resort_f p").attr("data-url")
    var child = 0
    var totalagerf = [];

    if (origen != "" && autoc_selecionado == 0) {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .box_inputs .easy-autocomplete").css("border-color", "#4296c3");
    } else {
      error = 1
      if (jQuery('.booking').hasClass('min') == true || jQuery(window).width() < 1200) {
        jQuery("section.booking form.form_book_now .resort_fly .box_inputs .easy-autocomplete input").css("border-color", "#902729");
      } else {
        jQuery("section.booking form.form_book_now .resort_fly .box_inputs .easy-autocomplete").css("border-color", "#902729");
      }

      return false;
    }


    if (checkin_date_rf == "") {
      error = 1
      jQuery("input#checkin_date_rf").css("border-color", "#902729");
      return false;
    } else {
      error = 0
      jQuery("input#checkin_date_rf").css("border-color", "#4296c3");
    }

    if (checkout_date_rf == "") {
      error = 1
      jQuery("input#checkout_date_rf").css("border-color", "#902729");
      return false;
    } else {
      error = 0
      jQuery("input#checkout_date_rf").css("border-color", "#4296c3");
    }

    if (cual_resort == undefined) {
      jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f").css("border-color", "#902729");
      error = 1
      return false;
    } else {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f").css("border-color", "#4296c3");
    }


    if (jQuery("div#children_rf p.copy_rooms_rf").text().indexOf(0) != 0) {

      jQuery("section.booking .resort_fly div#age_kids_rf .kids_select_age_rf").each(function (index) {
        child = index + 1

        var edad = jQuery(this).find("p.copy_kids_rf").text();
        if (edad.indexOf("<") != -1) {
          edad = 0;
        } else {
          edad = edad.substr(0, 2).replace(" ", "");
        }
        totalagerf.push('childages=' + edad + '&');
      })


    } else {
      totalagerf.push('childages=&');
    }

    var variablesedad = '';

    jQuery.each(totalagerf, function (iEdades, valEdades) {
      variablesedad += valEdades;
    })

    fullurl = urldefault + '&airport=' + origen + '&adults=' + adult + '&child=' + child + '&aDate=' + checkin_date_rf + '&dDate=' + checkout_date_rf + '&' + variablesedad + 'rooms=' + rooms + '&date_format=MM-DD-YYYY&currency=' + currency + '&lang=' + lang

    if (error == 0 && autoc_selecionado == 0) {
      window.open(fullurl, "_blank");
      //console.log("error " + error);
    }


  })


  /*Select resort + fly Mexico*/
  jQuery("section.booking form.form_book_now .resort_fly .mex_brand button#btn_book_now_resort_mex_b").click(function (e) {
    e.preventDefault();

    var typebooking = jQuery(this).parents(".mex_brand").find(".select_resort .box_select_resort p").attr("data-id");
    var typebookingurlmex = jQuery(this).parents(".mex_brand").find(".select_resort .box_select_resort p").attr("data-url-mex");

    var af = 'PALACE'
    var ln = 'esp'
    var cu = 'pe'
    var hpa = 1 //Pendiente este parametro
    var hnp = '' //Pendiente este parametro
    var gdl = 'GDL' //Pendiente este parametro
    var ds = /*2*/ jQuery(this).parents(".mex_brand").find(".select_resort .box_select_resort p").attr("data-arrived-cod");
    var ib = /*'CUN'*/ jQuery(this).parents(".mex_brand").find(".select_resort .box_select_resort p").attr("data-arrived");
    var hn = '' //Pendiente este parametro
    var ht = 327 //Se agrega pero no esta en la documentacion
    var EtHt = 327 //Pendiente este parametro
    var dn = jQuery(this).parents(".mex_brand").find(".select_resort .box_select_resort p").attr("data-iata");
    var origen = jQuery("input#origin_r_mex_b").val().substr(0, 3);
    var origen_name = jQuery("input#origin_r_mex_b").val().replace("/", " ")
    var checkin_mex = jQuery("input#checkin_date_r_mex_b").val();
    var checkout_mex = jQuery("input#checkout_date_r_mex_b").val();
    var rooms = parseInt(jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .rooms_text_select .box_p p.number_rooms").text());
    var totaladults = []
    var variablesadult = ''

    var fullurl = '';
    var urldefault = resort_flight_brand_selected // 'https://bookingsmxmpc.moonpalace.com/Paquetes/lista?';
    var res = resort_flight_brand_selected.split("af=");
    var codePropierty = res[1];
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      urldefault = res[0] + 'af=m' + codePropierty;
    } else {
      urldefault = resort_flight_brand_selected;
    }

    var error = 1;
    var child = 0
    var totalagerf = [];
    var variablesagechild = ''
    var totalagechildren = []
    var cantidadchildfinal = ''
    var totalagechildren_dg = []
    var totalnumchildren_dg = []
    var totalnumAdultos_dg = []
    var totalnumchildren_room_dgs = []

    //Checkin MEX
    var mcheckin_mex = parseInt(checkin_mex.substr(0, 2));
    var dcheckin_mex = parseInt(checkin_mex.substr(3, 2));
    var acheckin_mex = parseInt(checkin_mex.substr(8, 2));
    var checkin_mex_final = (dcheckin_mex + '/' + mcheckin_mex + '/' + acheckin_mex)

    //Checkout MEX
    var mcheckout_mex = parseInt(checkout_mex.substr(0, 2));
    var dcheckout_mex = parseInt(checkout_mex.substr(3, 2));
    var acheckout_mex = parseInt(checkout_mex.substr(8, 2));
    var checkout_mex_final = (dcheckout_mex + '/' + mcheckout_mex + '/' + acheckout_mex)

    //Checkin MEX TheGrand
    var mcheckin_mex_dg = checkin_mex.substr(0, 2);
    var dcheckin_mex_dg = checkin_mex.substr(3, 2);
    var acheckin_mex_dg = checkin_mex.substr(6, 4);
    var checkin_mex_final_dg = (acheckin_mex_dg + '/' + mcheckin_mex_dg + '/' + dcheckin_mex_dg)


    //Checkin MEX TheGrand
    var mcheckout_mex_dg = checkout_mex.substr(0, 2);
    var dcheckout_mex_dg = checkout_mex.substr(3, 2);
    var acheckout_mex_dg = checkout_mex.substr(6, 4);
    var checkout_mex_final_dg = (acheckout_mex_dg + '/' + mcheckout_mex_dg + '/' + dcheckout_mex_dg)

    if (origen != "" && autoc_selecionado == 0) {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .easy-autocomplete").css("border-color", "#4296c3");
    } else {
      error = 1
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .easy-autocomplete").css("border-color", "#902729");
      return false;
    }

    if (checkin_mex == "") {
      error = 1
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .checkin").css("border-color", "#902729");
      return false;
    } else {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .checkin").css("border-color", "#4296c3");
    }

    if (checkout_mex == "") {
      error = 1
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .checkout").css("border-color", "#902729");
      return false;
    } else {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .checkout").css("border-color", "#4296c3");
    }

    jQuery('section.booking form.form_book_now .resort_fly .mex_brand button#btn_book_now_resort_mex_b').parents(".resort_fly").find(".main_room_guests").each(function (index) {
      var room = jQuery(this).attr("id").replace('room', '')
      var numadult = jQuery(this).find("#i_adults_r_mex_b .rooms_bottom p").text()

      room = room.replace('_mex_b', '')
      totaladults.push('&ad' + room + '=' + numadult + '');
    })

    jQuery.each(totaladults, function (iAdultos, valAdultos) {
      variablesadult += valAdultos;
    })


    jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .main_box_rooms .quantity_rooms .main_room_guests .box_age_children .age_children").each(function (index) {
      var room = jQuery(this).parents(".main_room_guests").attr("id").replace('room', '')
      var numchild = jQuery(this).attr("id").replace('' + room + '_children_age_r_mex_', '')
      var edadchild = jQuery(this).find(".rooms_bottom p").text()

      if (edadchild == language_underyear) {
        edadchild = 0
      }

      if (numchild != 0) {
        room = room.replace('_mex_b', '')
        totalagechildren.push('&ac' + room + '=' + edadchild + '')
      }
    });

    jQuery.each(totalagechildren, function (iChild, valChild) {
      variablesagechild += valChild;
    })

    jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .main_box_rooms .quantity_rooms .main_room_guests").each(function (i) {
      var ninos = jQuery(this).find(".age_children").length;
      var i = i + 1

      cantidadchildfinal += '&ch' + i + '=' + ninos;
    })


    if (typebookingurlmex == "" || typebookingurlmex == undefined) {
      error = 1
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .select_resort").css("border-color", "#902729");
    } else {
      error = 0
      jQuery("section.booking form.form_book_now .resort_fly .mex_brand .select_resort").css("border-color", "#4296c3");
    }


    if (typebooking == 1 || typebooking == 3) {
      //console.log("entra cancun o otro");
      //console.log("typebooking " + typebooking);
      //console.log("autoc_selecionado " + autoc_selecionado);
      //console.log("error " + error);


      fullurl = urldefault + '&ln=' + ln + '&cu=' + cu + '&ob=' + origen + '&ds=' + ds + '&ib=' + ib + '&ht=' + ht + '&EtHt=' + EtHt + '&dn=' + dn + variablesagechild + '&hnp=' + hnp + '&no=' + gdl + '&sd=' + checkin_mex_final + '&ed=' + checkout_mex_final + '&rm=' + rooms + variablesadult
        + cantidadchildfinal

      if (error == 0 && autoc_selecionado == 0) {

        var adult = parseInt(jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .type_guests_text_adult p.number").text());
        var child = parseInt(jQuery("section.booking form.form_book_now .resort_fly .mex_brand .rooms .type_guests_text_children p.number").text());
        var totalpeople = adult + child


        window.open(fullurl, "_blank");


      }

    }
  })


  /*Booking only resort*/
  jQuery("section.booking form.form_book_now .only_resort button#btn_book_now_resort").click(function (e) {
    e.preventDefault();

    var fullurl = '';
    var lang = drupalSettings.booking.language;
    var urldefault = resort_brand_selected;
    var totalrooms = parseInt(jQuery(".only_resort div#p_rooms_r p.number_rooms").text());
    var error = 1;
    var totaladults = []
    var totalchildren = []
    var URLactual = window.location.origin;
    var cual_resort = jQuery("section.booking form.form_book_now .only_resort .select_resort .box_select_resort p").attr("data-url")

    jQuery(this).parents(".only_resort").find(".main_room_guests").each(function (index) {
      var room = jQuery(this).attr("id")
      var numadult = jQuery(this).find("#i_adults_r .rooms_bottom p").text()
      totaladults.push('adult_' + room + '=' + numadult + '&');
    })

    jQuery("section.booking form.form_book_now .only_resort .rooms .main_box_rooms .quantity_rooms .main_room_guests .box_age_children .age_children").each(function (index) {
      var room = jQuery(this).parents(".main_room_guests").attr("id")
      var numchild = jQuery(this).attr("id").replace('' + room + '_children_age_r_', '')
      var edadchild = jQuery(this).find(".rooms_bottom p").text()

      if (edadchild == language_underyear) {
        edadchild = 0
      }

      if (numchild != 0) {
        totalchildren.push('child_' + room + '_age' + edadchild + '=')
      }
    });

    if (jQuery("section.booking").hasClass('mex') == true) {
      var checkin_date_r = changeFormat(jQuery("input#checkin_date_r").val());
      var checkout_date_r = changeFormat(jQuery("input#checkout_date_r").val());
    } else {
      //var checkin_date_r = jQuery("input#checkin_date_r").val().split('/').join('-');
      //var checkout_date_r = jQuery("input#checkout_date_r").val().split('/').join('-');
      var dcheckIn = jQuery("input#checkin_date_r").val().split('/');
      var checkin_date_r = [dcheckIn[2], dcheckIn[0], dcheckIn[1]].join('-');

      var dcheckOut = jQuery("input#checkout_date_r").val().split('/');
      //console.log(dcheckOut);
      var checkout_date_r = [dcheckOut[2], dcheckOut[0], dcheckOut[1]].join('-');
    }

    //console.log("checkin_date_r: "+checkin_date_r)
    //console.log("checkout_date_r: "+checkout_date_r)

    if (checkin_date_r == "") {
      console.log("Estoy activando checkin")
      error = 1
      jQuery("input#checkin_date_r").css("border-color", "#902729");
    } else {
      error = 0
      jQuery("input#checkin_date_r").css("border-color", "#4296c3");
    }

    if (checkout_date_r == "") {
      error = 1
      jQuery("input#checkout_date_r").css("border-color", "#902729");
    } else {
      error = 0
      jQuery("input#checkout_date_r").css("border-color", "#4296c3");
    }

    if (cual_resort == undefined) {
      jQuery(".box_select_resort").css("border-color", "#902729");
      error = 1
    } else {
      jQuery(".box_select_resort").css("border-color", "#4296c3");
      error = 0
    }

    var variables = '&skd-total-rooms=';
    variables += totalrooms + '&';

    jQuery.each(totaladults, function (iAdultos, valAdultos) {
      variables += valAdultos;
    })

    totalchildren = countnclean(totalchildren)

    jQuery.each(totalchildren, function (iChild, valChild) {
      variables += valChild + '&';
    })

    var datecheckinout = 'skd-checkin=' + checkin_date_r + '&skd-checkout=' + checkout_date_r + '&'
    var languageurl = 'skd-language-code=' + lang + '&'
    var urline = 'skd-referer=' + URLactual + ''

    fullurl = urldefault + variables + datecheckinout + languageurl
    if (resort_disable_params) {
      fullurl = urldefault;
    }
    if (error == 0) {
      window.open(fullurl, "_blank");
    }

  })

  function changeFormat(inputFormat) {
    var d = inputFormat.split('/');
    return [d[2], d[0], d[1]].join('-');
  }

  function dateSunpalace(retorsSelected, moreDays, idPlan) {
    /* if (retorsSelected != "moonpalace jamaica" && retorsSelected != "leblanc spa resort los cabos" && retorsSelected != "cozumelpalace"  ) {

            var dateSunpalace = new Date('06/08/2020');

            jQuery('#checkin_date_r').datepicker("destroy");
            jQuery('#checkin_date_rf').datepicker("destroy");
            jQuery('#checkin_date_r_mex_b').datepicker("destroy");

            jQuery("#checkin_date_r").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);
            jQuery("#checkin_date_rf").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);
            jQuery("#checkin_date_r_mex_b").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);

            jQuery('#checkin_date_r').datepicker('setStartDate', dateSunpalace);
            jQuery('#checkin_date_rf').datepicker('setStartDate', dateSunpalace);
            jQuery('#checkin_date_r_mex_b').datepicker('setStartDate', dateSunpalace);

            jQuery("#checkin_date_r").change();
            jQuery("#checkin_date_rf").change();
            jQuery("#checkin_date_r_mex_b").change();

        }else  if(retorsSelected == "moonpalace jamaica"){

            var dateSunpalace = new Date('06/16/2020');

            jQuery('#checkin_date_r').datepicker("destroy");
            jQuery('#checkin_date_rf').datepicker("destroy");
            jQuery('#checkin_date_r_mex_b').datepicker("destroy");

            jQuery("#checkin_date_r").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);
            jQuery("#checkin_date_rf").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);
            jQuery("#checkin_date_r_mex_b").datepicker({
                dateFormat: "mm/dd/yy",
                autoclose: true,
                language: language_site
            }).datepicker("setDate", dateSunpalace);

            jQuery('#checkin_date_r').datepicker('setStartDate', dateSunpalace);
            jQuery('#checkin_date_rf').datepicker('setStartDate', dateSunpalace);
            jQuery('#checkin_date_r_mex_b').datepicker('setStartDate', dateSunpalace);

            jQuery("#checkin_date_r").change();
            jQuery("#checkin_date_rf").change();
            jQuery("#checkin_date_r_mex_b").change();

        }else */
    /*     if (retorsSelected == "moonpalace cancún - nizuc") {
     */      /* jQuery('#checkin_date_r').datepicker("destroy");
            jQuery('#checkin_date_rf').datepicker("destroy");
            jQuery('#checkin_date_r_mex_b').datepicker("destroy"); */

    /* var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fecha_actual = (mes < 10 ? '0' : '') + mes + '/' + (dia < 10 ? '0' : '') + dia + '/' + fecha.getFullYear();

    var date_check_in = new Date();
    var date_check_out = new Date();
    var checkout_date_r_mex_b = new Date();

    date_check_in.setDate(date_check_in.getDate() + 1);
    date_check_out.setDate(date_check_out.getDate() + 2);
    checkout_date_r_mex_b.setDate(checkout_date_r_mex_b.getDate() + 2);

    var new_options = {
      autoclose: true,
      language: language_site,
      format: 'mm/dd/yyyy',
      datesDisabled: ['11/01/2020', '11/02/2020', '11/03/2020', '11/04/2020', '11/05/2020', '11/06/2020', '11/07/2020', '11/08/2020', '11/09/2020', '11/10/2020', '11/11/2020', '11/12/2020', '11/13/2020', '11/14/2020', '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020', '11/22/2020', '11/23/2020', '11/24/2020', '11/25/2020', '11/26/2020', '11/27/2020', '11/28/2020', '11/29/2020', '11/30/2020', '12/01/2020', '12/02/2020', '12/03/2020', '12/04/2020', '12/05/2020', '12/06/2020', '12/07/2020', '12/08/2020', '12/09/2020', '12/10/2020', '12/11/2020', '12/12/2020', '12/13/2020', '12/14/2020', '12/15/2020', '12/16/2020', '12/17/2020', '12/18/2020', '12/19/2020', '12/20/2020', '12/21/2020', '12/22/2020', '12/23/2020', '12/24/2020', '12/25/2020', '12/26/2020', '12/27/2020', '12/28/2020', '12/29/2020', '12/30/2020', '12/31/2020', '01/01/2021', '01/02/2021', '01/03/2021', '01/04/2021', '01/05/2021', '01/06/2021', '01/07/2021', '01/08/2021', '01/09/2021', '01/10/2021', '01/11/2021', '01/12/2021', '01/13/2021', '01/14/2021', '01/15/2021', '01/16/2021', '01/17/2021', '01/18/2021', '01/19/2021', '01/20/2021', '01/21/2021', '01/22/2021', '01/23/2021', '01/24/2021', '01/25/2021', '01/26/2021', '01/27/2021', '01/28/2021', '01/29/2021', '01/30/2021', '01/31/2021', '02/01/2021', '02/02/2021', '02/03/2021', '02/04/2021', '02/05/2021', '02/06/2021', '02/07/2021', '02/08/2021', '02/09/2021', '02/10/2021', '02/11/2021', '02/12/2021', '02/13/2021', '02/14/2021', '02/15/2021', '02/16/2021', '02/17/2021', '02/18/2021', '02/19/2021', '02/20/2021', '02/21/2021', '02/22/2021', '02/23/2021', '02/24/2021', '02/25/2021', '02/26/2021', '02/27/2021', '02/28/2021', '03/01/2021', '03/02/2021', '03/03/2021', '03/04/2021', '03/05/2021', '03/06/2021', '03/07/2021', '03/08/2021', '03/09/2021', '03/10/2021', '03/11/2021', '03/12/2021', '03/13/2021', '03/14/2021', '03/15/2021', '03/16/2021', '03/17/2021', '03/18/2021', '03/19/2021', '03/20/2021', '03/21/2021', '03/22/2021', '03/23/2021', '03/24/2021', '03/25/2021'],
      startDate: fecha_actual
    };
    jQuery('#checkin_date_r').datepicker(new_options).datepicker("setDate", date_check_in);
    jQuery('#checkin_date_rf').datepicker(new_options).datepicker("setDate", date_check_in);
    jQuery('#checkin_date_r_mex_b').datepicker(new_options).datepicker("setDate", date_check_in);
*/
    /*  jQuery('#checkout_date_r').datepicker("destroy");
          jQuery('#checkout_date_rf').datepicker("destroy");
          jQuery('#checkout_date_r_mex_b').datepicker("destroy"); */
    /*
          jQuery('#checkout_date_r').datepicker(new_options).datepicker("setDate", date_check_out);
          jQuery('#checkout_date_rf').datepicker(new_options).datepicker("setDate", date_check_out);
          jQuery('#checkout_date_r_mex_b').datepicker(new_options).datepicker("setDate", checkout_date_r_mex_b);

        } else { */
    // fechas originales de booking
    if (idPlan == 1) {
      var date_check_in = new Date();
      /*  var date_check_in_rf = new Date(); */


      /*  jQuery('#checkin_date_r').datepicker("destroy");
            jQuery('#checkin_date_rf').datepicker("destroy");
            jQuery('#checkin_date_r_mex_b').datepicker("destroy"); */

      date_check_in.setDate(date_check_in.getDate() + 15);
      /* date_check_in_rf.setDate(date_check_in_rf.getDate() + 15); */


      jQuery('#checkin_date_r').datepicker('setStartDate', new Date());
      /* jQuery('#checkin_date_rf').datepicker('setStartDate', new Date()); */


      if (retorsSelected == "moonpalace cancún - nizuc") {
        date_check_in = new Date('2021-03-27T00:00:00-05:00');
        /* date_check_in_rf = new Date('2021-03-27T00:00:00-05:00') */
        /*  checkin_date_r_mex_b = new Date('2021-03-27T00:00:00-05:00'); */
        var disabledDates = ['11/01/2020', '11/02/2020', '11/03/2020', '11/04/2020', '11/05/2020', '11/06/2020', '11/07/2020', '11/08/2020', '11/09/2020', '11/10/2020', '11/11/2020', '11/12/2020', '11/13/2020', '11/14/2020', '11/15/2020', '11/16/2020', '11/17/2020', '11/18/2020', '11/19/2020', '11/20/2020', '11/21/2020', '11/22/2020', '11/23/2020', '11/24/2020', '11/25/2020', '11/26/2020', '11/27/2020', '11/28/2020', '11/29/2020', '11/30/2020'
          , '12/01/2020', '12/02/2020', '12/03/2020', '12/04/2020', '12/05/2020', '12/06/2020', '12/07/2020', '12/08/2020', '12/09/2020', '12/10/2020', '12/11/2020', '12/12/2020', '12/13/2020', '12/14/2020', '12/15/2020', '12/16/2020', '12/17/2020', '12/18/2020', '12/19/2020', '12/20/2020', '12/21/2020', '12/22/2020', '12/23/2020', '12/24/2020', '12/25/2020', '12/26/2020', '12/27/2020', '12/28/2020', '12/29/2020', '12/30/2020', '12/31/2020'
          , '01/01/2021', '01/02/2021', '01/03/2021', '01/04/2021', '01/05/2021', '01/06/2021', '01/07/2021', '01/08/2021', '01/09/2021', '01/10/2021', '01/11/2021', '01/12/2021', '01/13/2021', '01/14/2021', '01/15/2021', '01/16/2021', '01/17/2021', '01/18/2021', '01/19/2021', '01/20/2021', '01/21/2021', '01/22/2021', '01/23/2021', '01/24/2021', '01/25/2021', '01/26/2021', '01/27/2021', '01/28/2021', '01/29/2021', '01/30/2021', '01/31/2021'
          , '02/01/2021', '02/02/2021', '02/03/2021', '02/04/2021', '02/05/2021', '02/06/2021', '02/07/2021', '02/08/2021', '02/09/2021', '02/10/2021', '02/11/2021', '02/12/2021', '02/13/2021', '02/14/2021', '02/15/2021', '02/16/2021', '02/17/2021', '02/18/2021', '02/19/2021', '02/20/2021', '02/21/2021', '02/22/2021', '02/23/2021', '02/24/2021', '02/25/2021', '02/26/2021', '02/27/2021', '02/28/2021'
          , '03/01/2021', '03/02/2021', '03/03/2021', '03/04/2021', '03/05/2021', '03/06/2021', '03/07/2021', '03/08/2021', '03/09/2021', '03/10/2021', '03/11/2021', '03/12/2021', '03/13/2021', '03/14/2021', '03/15/2021', '03/16/2021', '03/17/2021', '03/18/2021', '03/19/2021', '03/20/2021', '03/21/2021', '03/22/2021', '03/23/2021', '03/24/2021', '03/25/2021', '03/26/2021'];
        jQuery('#checkin_date_r').datepicker('setDatesDisabled', disabledDates);
        /* jQuery('#checkin_date_rf').datepicker('setDatesDisabled', disabledDates); */
        /* jQuery('#checkin_date_r_mex_b').datepicker('setDatesDisabled', disabledDates); */

        jQuery('#checkout_date_r').datepicker('setDatesDisabled', disabledDates);
        /* var newValue =jQuery('#checkin_date_r').datepicker('getFormattedDate')
        console.log(newValue);
        localStorage.setItem('checkin_date_r', newValue); */
      } else {
        jQuery('#checkin_date_r').datepicker('setDatesDisabled', false);
        /* jQuery('#checkin_date_rf').datepicker('setDatesDisabled', false); */
        /* jQuery('#checkin_date_r_mex_b').datepicker('setDatesDisabled', false); */

        jQuery('#checkout_date_r').datepicker('setDatesDisabled', false);

      }

      jQuery("#checkin_date_r").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in);
      /* jQuery("#checkin_date_rf").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in_rf); */


      jQuery("#checkin_date_r").change();
      /* jQuery("#checkin_date_rf").change(); */
    } else if (idPlan == 2) {
    } else if (idPlan == 3) {
      var checkin_date_r_mex_b = new Date();
      checkin_date_r_mex_b.setDate(checkin_date_r_mex_b.getDate() + 15);
      jQuery('#checkin_date_r_mex_b').datepicker('setStartDate', new Date());
      jQuery("#checkin_date_r_mex_b").datepicker({dateFormat: "mm/dd/yy"}).datepicker("setDate", date_check_in);
      jQuery("#checkin_date_r_mex_b").change();
    }

  }

  /*Brand resort*/
  jQuery("section.booking form.form_book_now .only_resort .select_resort .box_select_resort").click(function () {
    jQuery(this).parent().find("ul").slideDown(300);
  })

  jQuery("section.booking form.form_book_now .only_resort .select_resort ul li").click(function () {
    resort_brand_selected = jQuery(this).attr("data-url");
    resort_disable_params = jQuery(this).attr("data-disableparams");
    var aceptChildren = jQuery(this).attr("data-children");
    var cual_resort = jQuery(this).text();
    maxPerson = jQuery(this).attr("data-max-people");
    jQuery("section.booking form.form_book_now .only_resort .select_resort ul li").removeClass("active")
    jQuery(this).addClass("active");
    jQuery(this).parent().slideUp(300)
    jQuery(this).parents("#select_resort_brand").find(".copy_select_resort").text(cual_resort)
    jQuery(this).parents("#select_resort_brand").find(".copy_select_resort").attr("data-url", resort_brand_selected);
    jQuery(this).parents("#select_resort_brand").find(".copy_select_resort").attr("data-children", aceptChildren);

    //Limpiar campos
    jQuery('#p_adults_r .number').text('2');
    jQuery('.rooms_text_select .number_rooms').text('1');
    jQuery('#p_adults_r_mex_b .number').text('2');
    jQuery('#p_children_r .number').text('0');
    jQuery('#p_children_r_mex_b .number').text('0');
    jQuery('.box_title .rooms_bottom p').text('1');
    jQuery('.adult .rooms_bottom p').text('2');
    jQuery('.children .rooms_bottom p').text('0');
    jQuery('.quantity_rooms #room2').remove();
    jQuery('.quantity_rooms #room3').remove();
    jQuery('.box_age_children .age_children').remove();

    adultsr = 2
    adultsr_mex = 2

    if (aceptChildren == 'false') {
      jQuery('.booking .children').hide();
      //jQuery('.booking .children_select_rf').hide();
      jQuery('.booking .only_resort .type_guests_text_children').hide();
      jQuery(".only_resort .main_box_rooms .main_room_guests .box_age_children").hide();
    } else {
      jQuery('.booking .children').show();
      //jQuery('.booking .children_select_rf').show();
      jQuery('.booking .only_resort .type_guests_text_children').show();
      jQuery(".only_resort .main_box_rooms .main_room_guests .box_age_children").show();
    }


    var retorsSelected = jQuery(this).text().toLowerCase().replace(" ", "");
    retorsSelectedGlobal = retorsSelected;
    dateSunpalace(retorsSelected, 15, 1);

  })
  /*Brand resort + fly*/
  jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f .box_select_resort_f").click(function () {
    jQuery(this).parent().find("ul").slideDown(300);
  })

  jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f ul li").click(function () {
    resort_flight_brand_selected = jQuery(this).attr("data-url");
    var aceptChildren = jQuery(this).attr("data-children");
    var cual_resort = jQuery(this).text();
    maxPerson = jQuery(this).attr("data-max-people");
    jQuery("section.booking form.form_book_now .resort_fly .box_inputs .select_resort_f ul li").removeClass("active")
    jQuery(this).addClass("active");
    jQuery(this).parent().slideUp(300)
    jQuery(this).parents("#select_resort_f_brand").find(".copy_select_resort_f").text(cual_resort)
    jQuery(this).parents("#select_resort_f_brand").find(".copy_select_resort_f").attr("data-url", resort_flight_brand_selected);


    //Limpiar campos

    jQuery('.adults_select_rf .copy_rooms_rf').text(jQuery('.adults_select_rf ul li[data-adult="2"]').text());
    jQuery('.children_select_rf .copy_rooms_rf').text(jQuery('.children_select_rf ul li[data-child="0"]').text());
    jQuery('.rooms_select_rf .copy_room_rf').text(jQuery('.rooms_select_rf ul li[data-room="1"]').text());
    child_book_rf = 0;
    adult_book_rf = 2;

    if (parseInt(maxPerson) > 6) {
      if (jQuery(".adults_select_rf ul li[data-adult=" + maxPerson + "]").length == 0) {
        for (var i = 7; i < parseInt(maxPerson) + 1; i++) {
          jQuery(".adults_select_rf ul").append("<li data-adult=" + i + ">" + i + " " + language_adults + "</li>");
        }
      }
    } else {
      jQuery(".adults_select_rf ul li").hide();
      for (var e = 1; e <= maxPerson; e++) {
        jQuery(".adults_select_rf ul li[data-adult=" + e + "]").show();
      }
    }

    //Limpiar campos
    jQuery('#p_adults_r .number').text('2');
    jQuery('.rooms_text_select .number_rooms').text('1');
    jQuery('#p_adults_r_mex_b .number').text('2');
    jQuery('#p_children_r .number').text('0');
    jQuery('#p_children_r_mex_b .number').text('0');
    jQuery('.box_title .rooms_bottom p').text('1');
    jQuery('.adult .rooms_bottom p').text('2');
    jQuery('.children .rooms_bottom p').text('0');
    jQuery('.quantity_rooms #room2').remove();
    jQuery('.quantity_rooms #room3').remove();
    jQuery('.box_age_children .age_children').remove();


    if (aceptChildren == 'false') {
      jQuery('.booking .children').hide();
      jQuery('.booking .resort_fly .children_select_rf').hide();
      jQuery('.booking .resort_fly .type_guests_text_children').hide();
      jQuery('.booking .resort_fly .type_guests_text_children').hide();
      jQuery(".resort_fly .main_box_rooms .main_room_guests .box_age_children").hide();

    } else {
      jQuery('.booking .children').show();
      jQuery('.booking .resort_fly .children_select_rf').show();
      jQuery('.booking .resort_fly .type_guests_text_children').show();
      jQuery('.booking .resort_fly .type_guests_text_children').show();
      jQuery(".resort_fly .main_box_rooms .main_room_guests .box_age_children").show();
    }

    var retorsSelected = jQuery(this).text().toLowerCase().replace(" ", "");
    retorsSelectedGlobal = retorsSelected;
    dateSunpalace(retorsSelected, 17, 2);


  })
/*
//validación formulario 2x1
  jQuery(".landing-2-1 select.booking-hotel").change(function () {
    var retorsSelected2x1 = jQuery( ".booking-hotel option:selected" ).text().toLowerCase();
    if(retorsSelected2x1 == "le blanc spa resort cancun" || retorsSelected2x1 == "le blanc spa resort los cabos" || retorsSelected2x1 == "the grand at moon palace cancun" || retorsSelected2x1 == "sun palace"){
      if (language_site == 'en') {
        jQuery('.date-check .checkin').datepicker("destroy");
        jQuery('.date-check .checkin').datepicker({
          autoclose: true,
          format: 'yyyy-mm-dd',
          startDate: '2020-12-22',
          endDate: '2021-01-03',
          disableTouchKeyboard: true,
          language: 'en',
          datesDisabled: [drupalSettings.booking.fechas],
        });
        jQuery('.date-check .checkin').datepicker('setDate', '2020-12-22');

        jQuery('.date-check .checkout').datepicker("destroy");
        jQuery('.date-check .checkout').datepicker({
          autoclose: true,
          format: 'yyyy-mm-dd',
          startDate: '2020-12-26',
          endDate: '2021-01-03',
          disableTouchKeyboard: true,
          language: 'en',
          datesDisabled: [drupalSettings.booking.fechas],
        });
        jQuery('.date-check .checkout').datepicker('setDate', '2020-12-26');
        fecha_fin2x1 = '2021-01-03';
      }
    }else{
      if (language_site == 'en') {
        jQuery('.date-check .checkin').datepicker("destroy");
        jQuery('.date-check .checkin').datepicker({
          autoclose: true,
          format: 'yyyy-mm-dd',
          startDate: '2020-12-22',
          endDate: '2021-06-11',
          disableTouchKeyboard: true,
          language: 'en',
          datesDisabled: [drupalSettings.booking.fechas],
        });
        jQuery('.date-check .checkin').datepicker('setDate', '2020-12-22');

        jQuery('.date-check .checkout').datepicker("destroy");
        jQuery('.date-check .checkout').datepicker({
          autoclose: true,
          format: 'yyyy-mm-dd',
          startDate: '2020-12-26',
          endDate: '2021-06-15',
          disableTouchKeyboard: true,
          language: 'en',
          datesDisabled: [drupalSettings.booking.fechas],
        });
        jQuery('.date-check .checkout').datepicker('setDate', '2020-12-26');
        fecha_fin2x1 = '2021-06-15';
      }
    }
  })

 // Validación de dependencia campos formulaio 2x1
  jQuery('.landing-2-1 form .checkin').datepicker().on('changeDate', function (ev) {
   /!* var startDate = ev.currentTarget.value;
    var setDate = new Date(startDate);
    setDate.setDate(setDate.getDate() + 5);
    jQuery('.date-check .checkout').datepicker("destroy");
    jQuery('.date-check .checkout').datepicker({
      autoclose: true,
      format: 'yyyy-mm-dd',
      startDate: startDate,
      endDate: fecha_fin2x1,
      disableTouchKeyboard: true,
      language: 'en',
      datesDisabled: [drupalSettings.booking.fechas],
    });
    jQuery('.date-check .checkout').datepicker('setDate', setDate);*!/

  })
*/



  // Filtro aeropuertos Jamaica
  jQuery("section.booking #select_resort_f_brand ul li").click(function () {
    jQuery("#origin").val("");
    jQuery("#origin_mex").val("");
    jQuery("#origin_r_mex_b").val("");
    var optionsautocomplete = '';
    if (retorsSelectedGlobal == "moonpalace jamaica") {
      /*Autocomplete*/
      optionsautocomplete = {
        url: "/themes/custom/mooncancun/assets/js/json_airports_jamaica.json",
        getValue: "value",
        list: {
          maxNumberOfElements: 50,
          match: {
            enabled: true
          },
          onClickEvent: function () {
            autoc_selecionado = 0
          }
        },
      };
    } else {
      /*Autocomplete*/
      optionsautocomplete = {
        url: "/themes/custom/mooncancun/assets/js/json_airports.json",
        getValue: "value",
        list: {
          maxNumberOfElements: 50,
          match: {
            enabled: true
          },
          onClickEvent: function () {
            autoc_selecionado = 0
          }
        },
      };
    }
    jQuery("#origin").easyAutocomplete(optionsautocomplete);
    jQuery("#origin_mex").easyAutocomplete(optionsautocomplete);
    jQuery("#origin_r_mex_b").easyAutocomplete(optionsautocomplete);
  })


  /*Brand resort + fly mex*/
  jQuery("section.booking form.form_book_now .resort_fly .mex_brand .sr_mex .box_select_resort").click(function () {
    jQuery(this).parent().find("ul").slideDown(300);
  })

  jQuery("section.booking.mex form.form_book_now .resort_fly .sr_mex ul li").click(function () {
    var resort_brand_selected_type = jQuery(this).attr("data-id");
    resort_brand_selected = jQuery(this).attr("data-url-mex");
    var arrived = jQuery(this).attr("data-arrive-air-inici");
    var arrivedcod = jQuery(this).attr("data-arrive-air-cod");
    var arrivedcodiata = jQuery(this).attr("data-iata");
    var cual_resort = jQuery(this).text();

    maxPerson = jQuery(this).attr("data-max-people");
    var aceptChildren = jQuery(this).attr("data-children");
    //console.log("entro 1 estees " + resort_flight_brand_selected);
    resort_flight_brand_selected = resort_brand_selected

    //console.log("cual_resort " + cual_resort)
    //console.log("resort_brand_selected " + resort_brand_selected)
    //console.log("DATA ID " + resort_brand_selected_type)

    jQuery("section.booking form.form_book_now .resort_fly .mex_brand .sr_mex ul li").removeClass("active");
    jQuery("section.booking form.form_book_now .resort_fly .no_mex .sr_mex ul li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery(this).parent().slideUp(300)
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").text(cual_resort)
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-url-mex", resort_brand_selected);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-id", resort_brand_selected_type);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").text(cual_resort)
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-url", resort_brand_selected);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-id", resort_brand_selected_type);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-children", aceptChildren);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-arrived", arrived);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-arrived-cod", arrivedcod);
    jQuery(".resort_fly").find(".sr_mex .copy_select_resort").attr("data-iata", arrivedcodiata);


    jQuery('.adults_select_rf .copy_rooms_rf').text(jQuery('.adults_select_rf ul li[data-adult="2"]').text());
    jQuery('.children_select_rf .copy_rooms_rf').text(jQuery('.children_select_rf ul li[data-child="0"]').text());
    jQuery('.rooms_select_rf .copy_room_rf').text(jQuery('.rooms_select_rf ul li[data-room="1"]').text());
    child_book_rf = 0;
    adult_book_rf = 2;

    if (parseInt(maxPerson) > 6) {
      if (jQuery(".adults_select_rf ul li[data-adult=" + maxPerson + "]").length == 0) {
        for (var i = 7; i < parseInt(maxPerson) + 1; i++) {
          jQuery(".adults_select_rf ul").append("<li data-adult=" + i + ">" + i + " " + language_adults + "</li>");
        }
      }
    } else {
      jQuery(".adults_select_rf ul li").hide();
      for (var e = 1; e <= maxPerson; e++) {
        jQuery(".adults_select_rf ul li[data-adult=" + e + "]").show();
      }
    }

    //Limpiar campos
    jQuery('#p_adults_r .number').text('2');
    jQuery('.rooms_text_select .number_rooms').text('1');
    jQuery('#p_adults_r_mex_b .number').text('2');
    jQuery('#p_children_r .number').text('0');
    jQuery('#p_children_r_mex_b .number').text('0');
    jQuery('.box_title .rooms_bottom p').text('1');
    jQuery('.adult .rooms_bottom p').text('2');
    jQuery('.children .rooms_bottom p').text('0');
    jQuery('.quantity_rooms #room2_mex_b').remove();
    jQuery('.quantity_rooms #room3_mex_b').remove();
    jQuery('.box_age_children .age_children').remove();


    if (aceptChildren == 'false') {
      jQuery('.booking .children').hide();
      jQuery('.booking .resort_fly .children_select_rf').hide();
      jQuery('.booking .resort_fly .type_guests_text_children').hide();
      jQuery('.booking .resort_fly .type_guests_text_children').hide();
      jQuery(".resort_fly .main_box_rooms .main_room_guests .box_age_children").hide();

    } else {
      jQuery('.booking .children').show();
      jQuery('.booking .resort_fly .children_select_rf').show();
      jQuery('.booking .resort_fly .type_guests_text_children').show();
      jQuery('.booking .resort_fly .type_guests_text_children').show();
      jQuery(".resort_fly .main_box_rooms .main_room_guests .box_age_children").show();
    }

    var retorsSelected = jQuery(this).text().toLowerCase().replace(" ", "");
    retorsSelectedGlobal = retorsSelected;
    dateSunpalace(retorsSelected, 17, 3);

    if (resort_brand_selected_type == 1) {
      jQuery("section.booking.mex form.form_book_now .resort_fly .mex_brand").show();
      jQuery("section.booking.mex form.form_book_now .resort_fly .no_mex").hide();
      bookMexIsTheGrand = 0
      jQuery(".resort_fly .mex_brand .main_room_guests").each(function () {
        var room = jQuery(this).attr("id").replace('room', '')
        jQuery(this).find(".age_children").each(function () {
          jQuery(this).find(".rooms_bottom p").removeClass("item_disable");
        })
      })
    } else if (resort_brand_selected_type == 2 || resort_brand_selected_type == "") {
      //console.log("resort_flight_brand_selected " + resort_flight_brand_selected)
      jQuery("section.booking.mex form.form_book_now .resort_fly .mex_brand").hide();
      jQuery("section.booking.mex form.form_book_now .resort_fly .no_mex").show();
      bookMexIsTheGrand = 0
      jQuery(".resort_fly .mex_brand .main_room_guests").each(function () {
        var room = jQuery(this).attr("id").replace('room', '')
        jQuery(this).find(".age_children").each(function () {
          jQuery(this).find(".rooms_bottom p").removeClass("item_disable");
        })
      })
    } else if (resort_brand_selected_type == 3) {
      jQuery("section.booking.mex form.form_book_now .resort_fly .mex_brand").show();
      jQuery("section.booking.mex form.form_book_now .resort_fly .no_mex").hide();
      bookMexIsTheGrand = 1
      jQuery(".resort_fly .mex_brand .main_room_guests").each(function () {
        var room = jQuery(this).attr("id").replace('room', '')
        jQuery(this).find(".age_children").each(function () {
          var numero_edad = jQuery(this).find(".rooms_bottom p").text()
          if (numero_edad == 1 || numero_edad == language_underyear) {
            jQuery(this).find(".rooms_bottom p").addClass("item_disable");
          }
        })
      })

    }

  })

  /*Adult val*/
  jQuery(document).on('click', 'section.booking .resort_fly div#adult_rf .number_adults_rf', function (event) {
    adult_book_rf = 2
    jQuery(this).parent().find("ul").slideDown(300);
    jQuery("ul.ul_children_select_rf").slideUp(300);
    jQuery("div#rooms_rf ul").slideUp(300);
    jQuery("div#age_kids_rf").slideUp(300);
  })

  jQuery(document).on('click', 'section.booking .resort_fly div#adult_rf ul li', function (event) {
    adult_book_rf = parseInt(jQuery(this).attr("data-adult"))
    total_book_rf = child_book_rf + adult_book_rf

    if (total_book_rf <= maxPerson) {
      jQuery("section.booking .resort_fly div#adult_rf ul li").removeClass("active");
      jQuery(this).addClass("active");
      var cual = jQuery(this).text();
      jQuery(this).parents("div#adult_rf").find("p.copy_rooms_rf").html(cual);
      jQuery(this).parent().slideUp(300);
    } else {
      jQuery("section.booking .resort_fly div#adult_rf span.alert").fadeIn(300)
      setTimeout(function () {
        jQuery("section.booking .resort_fly div#adult_rf span.alert").fadeOut(300)
      }, 2000);
    }

  })


  /*Kids*/
  jQuery("section.booking .resort_fly div#children_rf").click(function () {
    child_book_rf = 0
    jQuery(this).parent().find(".ul_children_select_rf").slideDown(300)
    jQuery("div#adult_rf ul").slideUp(300);
    jQuery("div#rooms_rf ul").slideUp(300);
  })

  jQuery("section.booking .resort_fly .ul_children_select_rf li").click(function () {
    console.log(adult_book_rf)
    child_book_rf = parseInt(jQuery(this).attr("data-child"))
    total_book_rf = child_book_rf + adult_book_rf
    //console.log("total_book_rf: "+total_book_rf)

    if (total_book_rf <= maxPerson) {
      jQuery("section.booking .resort_fly .ul_children_select_rf li").removeClass("active");
      jQuery(this).addClass("active");
      var cual = jQuery(this).text();
      jQuery(this).parents(".children_select_rf").find("#children_rf p.copy_rooms_rf").html(cual);
      jQuery(this).parent().slideUp(300);

      /*-------*/
      jQuery("div#age_kids_rf .kids_select_age_rf").remove();
      for (var i = 0; i < child_book_rf; i++) {
        var data_kid_age_rf = i + 1
        if (language_site == 'es') {
          jQuery("div#age_kids_rf").append('<div class="kids_select_age_rf" data_kid_age_rf=' + data_kid_age_rf + '><p class="copy_kids_rf">Edad <span class="age_child_number"> < 1 </span></p><ul class="ul_kids_select_rf"><li class="active">< 1 año</li><li>1 año</li><li>2 años</li><li>3 años</li><li>4 años</li><li>5 años</li><li>6 años</li><li>7 años</li><li>8 años</li><li>9 años</li><li>10 años</li><li>11 años</li><li>12 años</li><li>13 años</li><li>14 años</li><li>15 años</li><li>16 años</li><li>17 años</li></ul></div>');

        } else if (language_site == 'en') {
          jQuery("div#age_kids_rf").append('<div class="kids_select_age_rf" data_kid_age_rf=' + data_kid_age_rf + '><p class="copy_kids_rf">Age <span class="age_child_number"> < 1 </span></p><ul class="ul_kids_select_rf"><li class="active">< 1 year</li><li>1 year</li><li>2 years</li><li>3 years</li><li>4 years</li><li>5 years</li><li>6 years</li><li>7 years</li><li>8 years</li><li>9 years</li><li>10 years</li><li>11 years</li><li>12 years</li><li>13 years</li><li>14 years</li><li>15 years</li><li>16 years</li><li>17 years</li></ul></div>');

        } else if (language_site == 'pt') {
          jQuery("div#age_kids_rf").append('<div class="kids_select_age_rf" data_kid_age_rf=' + data_kid_age_rf + '><p class="copy_kids_rf">Idade <span class="age_child_number"> < 1 </span></p><ul class="ul_kids_select_rf"><li class="active">< 1 ano</li><li>1 ano</li><li>2 anos</li><li>3 anos</li><li>4 anos</li><li>5 anos</li><li>6 anos</li><li>7 anos</li><li>8 anos</li><li>9 anos</li><li>10 anos</li><li>11 anos</li><li>12 anos</li><li>13 anos</li><li>14 anos</li><li>15 anos</li><li>16 anos</li><li>17 anos</li></ul></div>');

        }

      }
      /*-------*/

      /*age*/
      jQuery("section.booking .resort_fly div#age_kids_rf .kids_select_age_rf p.copy_kids_rf").click(function () {
        jQuery(this).parent().find(".ul_kids_select_rf").slideDown(300);
      })

      jQuery("section.booking .resort_fly div#age_kids_rf .kids_select_age_rf .ul_kids_select_rf li").click(function () {
        jQuery("section.booking .resort_fly div#age_kids_rf .kids_select_age_rf .ul_kids_select_rf li").removeClass("active");
        jQuery(this).addClass("active");
        var cual = jQuery(this).text()
        jQuery(this).parents(".kids_select_age_rf").find("p.copy_kids_rf").html(cual)
        jQuery(this).parent().slideUp(300);
      })
      /*age*/

      if (cual != "0 Kids") {
        jQuery("section.booking .resort_fly #age_kids_rf").show();
      }

      if (screen_width > 1200) {
        constructornicescrollbook2();
      }

    } else {
      jQuery("section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf span.alert").fadeIn(300)
      setTimeout(function () {
        jQuery("section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf span.alert").fadeOut(300)
      }, 2000);
    }

  })


  /*Rooms*/
  jQuery("section.booking .resort_fly div#rooms_rf .box_number_romms_rf").click(function () {
    jQuery(this).parent().find("ul").slideDown(300);
    jQuery("ul.ul_children_select_rf").slideUp(300);
    jQuery("div#adult_rf ul").slideUp(300);
    jQuery("div#age_kids_rf").slideUp(300);
  })

  jQuery("section.booking .resort_fly div#rooms_rf ul li").click(function () {
    jQuery("section.booking .resort_fly div#rooms_rf ul li").removeClass("active");
    jQuery(this).addClass("active");
    var cual = jQuery(this).text();
    jQuery(this).parents("#rooms_rf").find("p.copy_rooms_rf").html(cual);
    jQuery(this).parent().slideUp(300);
  })


  /*Select rooms kids Resort Fly*/
  jQuery("section.booking form.form_book_now .resort_fly .box_inputs .rooms_select_rf .box_number_romms_rf").click(function () {
    jQuery(this).parent().find("ul").slideDown(300)
  })

  jQuery("section.booking form.form_book_now .resort_fly .box_inputs .rooms_select_rf ul li").click(function () {
    var cual = jQuery(this).text()
    jQuery(this).parents(".rooms_select_rf").find("p.copy_room_rf").html(cual);
    jQuery(this).parent("ul").slideUp(300)
  })


  /*Rooms general only resort*/
  jQuery("section.booking .only_resort div#i_rooms_r .rooms_bottom span").click(function () {

    //console.log("rooms only resort 222")
    var type = jQuery(this).attr("data-button");
    var children = jQuery(this).parents(".booking").find(".copy_select_resort").attr('data-children');
    roomsr = jQuery("section.booking .only_resort .main_room_guests").length

    if (type == "add") {

      if (roomsr < drupalSettings.booking.habitaciones) {
        roomsr = roomsr + 1
        adultsr = adultsr + 2
        jQuery(this).parent().find("p").html(roomsr);
        jQuery(".only_resort div#p_rooms_r").find("p.number_rooms").html(roomsr);
        jQuery(".only_resort div#p_rooms_r").find("p.copy_rooms").html(language_rooms);
        jQuery(".only_resort div#p_adults_r").find("p.number").html(adultsr);
        jQuery(this).parents(".quantity_rooms").append(contenedor_room.replace(/{{numberroom}}/g, roomsr));
        if (children == "false") {
          jQuery(".only_resort .main_box_rooms .main_room_guests .children").hide();
          jQuery(".only_resort .main_box_rooms .main_room_guests .box_age_children").hide();
        } else {
          jQuery(".only_resort .main_box_rooms .main_room_guests .children").show();
          jQuery(".only_resort .main_box_rooms .main_room_guests .box_age_children").show();
        }
      } else {
        jQuery(this).parents(".rooms").find(".rooms_text_select span.alert").fadeIn(300);
        setTimeout(function () {
          jQuery("section.booking form.form_book_now .only_resort div#p_rooms_r span.alert").fadeOut(300)
        }, 3000);
      }


    } else if (type == "reduce") {

      if (roomsr > 1) {
        var adultsintreduce = parseInt(jQuery(".only_resort #room" + roomsr).find("div#i_adults_r .rooms_bottom p").html())
        var childrenintreduce = parseInt(jQuery(".only_resort #room" + roomsr).find("div#i_children_r .rooms_bottom p").html())
        adultsr = adultsr - adultsintreduce
        childrenr = childrenr - childrenintreduce

        jQuery(".only_resort #room" + roomsr).remove()
        roomsr = roomsr - 1

        jQuery(this).parent().find("p").html(roomsr);
        jQuery(".only_resort div#p_rooms_r").find("p.number_rooms").html(roomsr);
        if (roomsr == 1) {
          jQuery(".only_resort div#p_rooms_r").find("p.copy_rooms").html(language_room);
        }
        jQuery(".only_resort div#p_adults_r").find("p.number").html(adultsr);
        jQuery(".only_resort div#p_children_r").find("p.number").html(childrenr);

      }

    }

  })


  /*Rooms general only resort*/

  /*Rooms general MEX*/
  jQuery("section.booking .resort_fly div#i_rooms_r_mex_b .rooms_bottom span").click(function () {

    //console.log("Add Rooms")
    var type = jQuery(this).attr("data-button");
    var children = jQuery(this).parents(".booking").find(".mex_brand .copy_select_resort").attr('data-children');
    roomsr_mex = jQuery("section.booking .resort_fly .mex_brand .main_room_guests").length

    if (type == "add") {

      //console.log('add rooms mex')

      if (roomsr_mex < drupalSettings.booking.habitaciones) {
        roomsr_mex = roomsr_mex + 1
        adultsr_mex = adultsr_mex + 2
        jQuery(this).parent().find("p").html(roomsr_mex);
        jQuery(".resort_fly .mex_brand div#p_rooms_r_mex_b").find("p.number_rooms").html(roomsr_mex);
        jQuery(".resort_fly .mex_brand div#p_rooms_r_mex_b").find("p.copy_rooms").html(language_rooms);
        jQuery(".resort_fly .mex_brand div#p_adults_r_mex_b").find("p.number").html(adultsr_mex);

        //console.log(contenedor_room_mex)

        jQuery(this).parents(".quantity_rooms").append(contenedor_room_mex.replace(/{{numberroom}}/g, roomsr_mex));
        console.log(children);
        if (children == "false") {
          jQuery(".resort_fly .mex_brand .main_box_rooms .main_room_guests .children").hide();
          jQuery(".resort_fly .mex_brand .main_box_rooms .main_room_guests .box_age_children").hide();
        } else {
          jQuery(".resort_fly .mex_brand .main_box_rooms .main_room_guests .children").show();
          jQuery(".resort_fly .mex_brand .main_box_rooms .main_room_guests .box_age_children").show();
        }

      } else {
        jQuery(this).parents(".rooms").find(".rooms_text_select span.alert").fadeIn(300);
        setTimeout(function () {
          jQuery("section.booking form.form_book_now .resort_fly .mex_brand div#p_rooms_r span.alert").fadeOut(300)
        }, 3000);
      }


    } else if (type == "reduce") {

      if (roomsr_mex > 1) {
        var adultsintreduce = parseInt(jQuery(".resort_fly .mex_brand #room" + roomsr_mex + "_mex_b").find("div#i_adults_r_mex_b .rooms_bottom p").html())
        var childrenintreduce = parseInt(jQuery(".resort_fly .mex_brand #room" + roomsr_mex + "_mex_b").find("div#i_children_r_mex_b .rooms_bottom p").html())
        adultsr_mex = adultsr_mex - adultsintreduce
        childrenr_mex = childrenr_mex - childrenintreduce

        jQuery(".resort_fly .mex_brand #room" + roomsr_mex + "_mex_b").remove()
        roomsr_mex = roomsr_mex - 1

        jQuery(this).parent().find("p").html(roomsr_mex);
        jQuery(".resort_fly .mex_brand div#p_rooms_r_mex_b").find("p.number_rooms").html(roomsr_mex);
        if (roomsr_mex == 1) {
          jQuery(".resort_fly .mex_brand div#p_rooms_r_mex_b").find("p.copy_rooms").html(language_room);
        }
        jQuery(".resort_fly .mex_brand div#p_adults_r_mex_b").find("p.number").html(adultsr_mex);
        jQuery(".resort_fly .mex_brand div#p_children_r_mex_b").find("p.number").html(childrenr_mex);

      }

    }

  })


  /*Rooms general MEX*/


}

function constructornicescrollbook1() {
  jQuery('section.booking form.form_book_now .only_resort .rooms .main_box_rooms .quantity_rooms').niceScroll({
    background: "transparent",
    cursorborder: "0",
    cursorcolor: "#003447",
    cursorborderradius: "0",
    scrollspeed: 20,
    cursorminheight: 20,
    hidecursordelay: 400,
    railpadding: {
      top: 0,
      right: 2,
      left: 0,
      bottom: 0,
    }
  });
}

function constructornicescrollbook2() {
  jQuery('section.booking form.form_book_now .resort_fly .box_inputs .children_select_rf .main_box_age_kids ul').niceScroll({
    background: "transparent",
    cursorborder: "0",
    cursorcolor: "#003447",
    cursorborderradius: "0",
    scrollspeed: 20,
    cursorminheight: 20,
    hidecursordelay: 0,
    railpadding: {
      top: 0,
      right: 2,
      left: 0,
      bottom: 0,
    }
  });
}

function constructornicescrollbook_mex() {
  jQuery('section.booking form.form_book_now .resort_fly.mex .rooms .main_box_rooms .quantity_rooms').niceScroll({
    background: "transparent",
    cursorborder: "0",
    cursorcolor: "#003447",
    cursorborderradius: "0",
    scrollspeed: 20,
    cursorminheight: 20,
    hidecursordelay: 400,
    railpadding: {
      top: 0,
      right: 2,
      left: 0,
      bottom: 0,
    }
  });
}


var pasos = 0

function booking_scroll() {
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > alturabooking) {
      jQuery("button#btn-book-now-mobile").addClass("min");
      jQuery("section.booking").addClass("min");
      jQuery("section.booking").css("top", 80);
      jQuery("button#btn-book-now-mobile").css("top", 80);

      pasos = pasos + 1

      if (pasos == 1) {
        jQuery("section.booking.min form.form_book_now .only_resort .rooms .main_box_rooms").hide()
      }


      jQuery('section.booking form.form_book_now .only_resort .rooms .main_box_rooms .quantity_rooms').getNiceScroll().remove();
      jQuery('section.booking form.form_book_now .resort_fly.mex .rooms .main_box_rooms .quantity_rooms').getNiceScroll().remove();
      if (screen_width > 1200) {
        constructornicescrollbook1();
        constructornicescrollbook_mex();
      }

    } else {

      pasos = 0

      jQuery("button#btn-book-now-mobile").removeClass("min");
      jQuery("button#btn-book-now-mobile").css("top", -50);
      jQuery("section.booking").removeClass("min");
      jQuery("section.booking").css("top", alturabooking);
      jQuery("section.booking.min form.form_book_now .only_resort .rooms .main_box_rooms").hide()

      jQuery('section.booking form.form_book_now .only_resort .rooms .main_box_rooms .quantity_rooms').getNiceScroll().remove();
      jQuery('section.booking form.form_book_now .resort_fly.mex .rooms .main_box_rooms .quantity_rooms').getNiceScroll().remove();
      if (screen_width > 1200) {
        constructornicescrollbook1();
        constructornicescrollbook_mex();
      }
    }

    if (jQuery(this).scrollTop() > 80) {
      jQuery("header nav.navbar-fixed-top").addClass("scroll");
    } else {
      jQuery("header nav.navbar-fixed-top").removeClass("scroll");
    }

  });
}

function booking_posicion_initial() {
  if (jQuery(window).scrollTop() > alturabooking) {
    jQuery("button#btn-book-now-mobile").addClass("min");
    jQuery("button#btn-book-now-mobile").css("top", 80);
    jQuery("section.booking").addClass("min");
    jQuery("section.booking").css("top", 80);
    jQuery("header nav.navbar-fixed-top").addClass("scroll");
  }
}


function countnclean(array_elements) {
  array_elements.sort();
  var newarray = [];
  var current = null;
  var cnt = 0;
  for (var i = 0; i < array_elements.length; i++) {
    if (array_elements[i] != current) {
      if (cnt > 0) {
        newarray.push(current + cnt);
        //console.log(current + ' comes --> ' + cnt + ' times<br>');
      }
      current = array_elements[i];
      cnt = 1;
    } else {
      cnt++;
    }
  }
  if (cnt > 0) {
    newarray.push(current + cnt);
    //console.log(current + ' comes --> ' + cnt + ' times');
  }
  //console.log(newarray);
  return newarray;

}

/*Checkbox*/
function function_checkbox() {
  jQuery('.nav-news-expanded input[type="checkbox"]').change(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass("checked");
    } else {
      jQuery(this).parent().removeClass("checked")
    }
  });

  jQuery('.nav-news-expanded input[type="checkbox"]').each(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass('checked');
    }
  });

  jQuery('.form-internal input[type="checkbox"]').change(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass("checked");
    } else {
      jQuery(this).parent().removeClass("checked")
    }
  });
  jQuery('.form input[type="checkbox"]').change(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass("checked");
    } else {
      jQuery(this).parent().removeClass("checked")
    }
  });
}

function scroll_resort_credit() {
  jQuery('section.resort_credit_calculator .content_calculator .right .category_list .item_category .box_resume').niceScroll({
    background: "transparent",
    cursorborder: "0",
    cursorcolor: "#003447",
    cursorborderradius: "0",
    scrollspeed: 20,
    cursorminheight: 20,
    hidecursordelay: 400,
    railpadding: {
      top: 0,
      right: 2,
      left: 0,
      bottom: 0,
    }
  });

  jQuery('section.resort_credit_calculator .content_calculator .left').niceScroll({
    background: "transparent",
    cursorborder: "0",
    cursorcolor: "#003447",
    cursorborderradius: "0",
    scrollspeed: 20,
    cursorminheight: 20,
    hidecursordelay: 400,
    railpadding: {
      top: 0,
      right: 2,
      left: 0,
      bottom: 0,
    }
  });

}

function menu_slider_category_resort_credit() {
  jQuery("section.resort_credit_calculator .content_calculator .category ul").addClass("owl-carousel")

  jQuery('section.resort_credit_calculator .content_calculator .category .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      480: {
        items: 2
      }
    }
  })

  var owlpagetabs = jQuery('section.resort_credit_calculator .content_calculator .category .owl-carousel');
  owlpagetabs.on('changed.owl.carousel', function (event) {

    setTimeout(function () {
      jQuery("section.resort_credit_calculator .content_calculator .category .owl-carousel .owl-item.active li").trigger("click");
    }, 100);

  })

}

function slider_gallery_moon_brand_three_images_copy() {
  jQuery("section.gallery_moon_brand_three_images_copy .content .content_img").addClass("owl-carousel")

  jQuery('section.gallery_moon_brand_three_images_copy .content .content_img.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
  })
}

function slider_gallery_moon_brand_slider_copy() {
  jQuery('section.gallery_moon_brand_three_images_copy .content .content_img.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
  })
}

function slider_gallery_moon_brand_big_deals() {
  jQuery('section.big_deals_principal .content article .content_img.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      480: {
        nav: true,
        dots: false
      }
    }
  })
}

function show_main_resumen_resort_credit() {
  jQuery(window).scroll(function () {
    var show_box_resume = jQuery("section.resort_credit_calculator .content_calculator .left .main_banner .box_int").offset().top - 60
    var hide_box_resume = jQuery("section.resort_credit_calculator .content_calculator .right .btns_box").offset().top - 60

    if (jQuery(window).scrollTop() > show_box_resume && jQuery(window).scrollTop() < hide_box_resume) {
      jQuery("section.resort_credit_calculator .content_calculator .right .main_resume").addClass("active");
      jQuery(".tagove-livechat-widget.mobile-frame").fadeOut(300);
    } else {
      jQuery("section.resort_credit_calculator .content_calculator .right .main_resume").removeClass("active");
      jQuery(".tagove-livechat-widget.mobile-frame").fadeIn(300);
    }
  })
}


function sumatoria_credit() {

  var valorGeneralInicial = parseInt(jQuery('.main_resume').attr('data-general'));

  jQuery('.left span[data-button="add"]').click(function () {
    var valorGeneral = parseInt(jQuery('.main_resume').attr('data-general'));
    //console.log('valorGeneral= '+valorGeneral);
    var dataActual = parseInt(jQuery(this).parents('.priceCheck').attr('data-actual'));
    //console.log('dataActual= '+dataActual);
    var limite = parseInt(jQuery(this).parents('.priceCheck').attr('data-limit'));
    //console.log('limite= '+limite);
    var precio = parseInt(jQuery(this).attr('data-price'));
    //console.log('precio= '+precio);
    var quantity = parseInt(jQuery(this).parent().find('p').text());
    //console.log('quantity = '+quantity);
    var cual_plan = jQuery(this).parents('.left .item').attr('data-plan');
    //console.log('cual_plan = '+cual_plan);
    var cual_categoria = jQuery(this).parents('.left').attr('data-cat');
    //console.log('cual_categoria = '+cual_categoria);
    var sumaTotal = dataActual + precio;
    //console.log('sumaTotal= '+sumaTotal);
    var restaTotal = valorGeneral - precio;
    //console.log('restaTotal= '+restaTotal);

    if ((sumaT + precio) > (valorGeneral + sumaT)) {
      jQuery(".alert_cal.insufficients").fadeIn(500);
    } else {


      if (jQuery("section.resort_credit_calculator .content_calculator .right .item_category.active").attr("data-cat") === undefined) {
        id_cat = jQuery("section.resort_credit_calculator .content_calculator .right .item_category:first").attr("data-cat");
      } else {
        id_cat = jQuery("section.resort_credit_calculator .content_calculator .right .item_category.active").attr("data-cat");
      }

      if (acomulado_categoria[id_cat] === undefined) {
        //console.log('variable acomulado_categoria[id_cat] indefinida');
        acomulado_categoria[id_cat] = 0;
        //console.log('acomulado_categoria[id_cat] = ' + acomulado_categoria[id_cat]);
      }
      if (acomulado_categoria[id_cat] <= 0) {
        acomulado_categoria[id_cat] = 0;
      }


      if (acomulado_categoria[id_cat] + precio <= datalimit) {
        acomulado_categoria[id_cat] += precio;
        sumaT += precio;
        jQuery('.priceCheck[data-cat=' + cual_categoria + ']').data('actual', parseInt(sumaTotal));
        jQuery('.main_resume').attr('data-general', restaTotal);
        jQuery('.main_resume h3').html('<span>$</span>' + restaTotal + '<span>USD</span>');
        quantity = quantity + 1
        jQuery(this).parent().find('p').text(quantity);
        jQuery('.right .resume_item[data-plan=' + cual_plan + '] .bottom p').text(quantity)
        jQuery('.right .category_list .item_category[data-cat=' + cual_categoria + ']').addClass('active');
        jQuery('.right .resume_item[data-plan=' + cual_plan + ']').show();


      } else {
        jQuery(".alert_cal.limitcategory").fadeIn(500);
      }

    }
  });

  function validarCredito(descuento) {
    if (jQuery('.main_resume').attr('data-general') - descuento < 0) {
      return 0;
    } else {
      return 1;
    }
  }

  jQuery('.left span[data-button="reduce"]').click(function () {
    var valorGeneral = parseInt(jQuery('.main_resume').attr('data-general'));
    var dataActual = parseInt(jQuery(this).parents('.priceCheck').attr('data-actual'));
    var precio = parseInt(jQuery(this).attr('data-price'));
    var cual_plan = jQuery(this).parents('.left .item').attr('data-plan');
    var cual_categoria = jQuery(this).parents('.left').attr('data-cat');
    var sumaTotal = valorGeneral + precio;
    var restaTotal = dataActual - precio;
    var quantity = parseInt(jQuery(this).parent().find('p').text());

    if (sumaTotal <= valorGeneralInicial) {
      if (quantity > 0) {
        acomulado_categoria[id_cat] -= precio;
        sumaT -= precio;
        if (acomulado_categoria[id_cat] <= 0) {
          acomulado_categoria[id_cat] = 0;
        }
        jQuery('.priceCheck[data-cat=' + cual_categoria + ']').data('actual', parseInt(restaTotal));
        jQuery('.main_resume').attr('data-general', sumaTotal);
        jQuery('.main_resume h3').html('<span>$</span>' + sumaTotal + '<span>USD</span>')
        quantity = quantity - 1
        jQuery(this).parent().find('p').text(quantity);
        jQuery('.right .box_resume .resume_item[data-plan=' + cual_plan + '] .bottom p').text(quantity)
      }
      if (quantity == 0) {
        jQuery('.right .resume_item[data-plan=' + cual_plan + ']').hide();
      }

    }
  });

  jQuery(".alert_cal .close_cal").click(function () {
    jQuery(".alert_cal").fadeOut(500)
  })

}

function sumatoria_credit_right() {
  var valorGeneralInicial = parseInt(jQuery('.main_resume').attr('data-general'));

  jQuery('.right span[data-button="add"]').click(function () {
    var valorGeneral = parseInt(jQuery('.main_resume').attr('data-general'));
    var dataActual = parseInt(jQuery(this).parents('.priceCheck').attr('data-actual'));
    var limite = parseInt(jQuery(this).parents('.priceCheck').attr('data-limit'));
    var precio = parseInt(jQuery(this).attr('data-price'));
    var quantity = parseInt(jQuery(this).parent().find('p').text());
    var cual_plan = jQuery(this).parents('.right .resume_item').attr('data-plan');
    var cual_categoria = jQuery(this).parents('.priceCheck ').attr('data-cat');
    var sumaTotal = dataActual + precio;
    var restaTotal = valorGeneral - precio;

    if ((sumaT + precio) > (valorGeneral + sumaT)) {
      jQuery(".alert_cal.insufficients").fadeIn(500);
    } else {


      if (jQuery("section.resort_credit_calculator .content_calculator .right .item_category.active").attr("data-cat") === undefined) {
        id_cat = jQuery("section.resort_credit_calculator .content_calculator .right .item_category:first").attr("data-cat");
      } else {
        id_cat = jQuery("section.resort_credit_calculator .content_calculator .right .item_category.active").attr("data-cat");
      }

      if (acomulado_categoria[id_cat] === undefined) {
        acomulado_categoria[id_cat] = 0;
      }
      if (acomulado_categoria[id_cat] <= 0) {
        acomulado_categoria[id_cat] = 0;
      }


      if (acomulado_categoria[id_cat] + precio <= datalimit) {
        acomulado_categoria[id_cat] += precio;
        sumaT += precio;
        jQuery('.priceCheck[data-cat=' + cual_categoria + ']').data('actual', parseInt(sumaTotal));
        jQuery('.main_resume').attr('data-general', restaTotal);
        jQuery('.main_resume h3').html('<span>$</span>' + restaTotal + '<span>USD</span>');
        quantity = quantity + 1
        jQuery(this).parent().find('p').text(quantity);
        jQuery('.left .item[data-plan=' + cual_plan + '] .bottom p').text(quantity)

      } else {
        jQuery(".alert_cal.limitcategory").fadeIn(500);
      }

    }
  });

  function validarCredito(descuento) {
    if (jQuery('.main_resume').attr('data-general') - descuento < 0) {
      return 0;
    } else {
      return 1;
    }

  }


  jQuery('.right span[data-button="reduce"]').click(function () {
    var valorGeneral = parseInt(jQuery('.main_resume').attr('data-general'));
    var dataActual = parseInt(jQuery(this).parents('.priceCheck').attr('data-actual'));
    var precio = parseInt(jQuery(this).attr('data-price'));
    var cual_plan = jQuery(this).parents('.right .resume_item').attr('data-plan');
    var cual_categoria = jQuery(this).parents('.priceCheck ').attr('data-cat');
    var sumaTotal = valorGeneral + precio;
    var restaTotal = dataActual - precio;
    var quantity = parseInt(jQuery(this).parent().find('p').text());

    //console.log('sumaTotal ' + sumaTotal)
    //console.log('valorGeneralInicial ' + valorGeneralInicial)

    if (sumaTotal <= valorGeneralInicial) {
      if (quantity > 0) {
        acomulado_categoria[id_cat] -= precio;
        sumaT -= precio;
        if (acomulado_categoria[id_cat] <= 0) {
          acomulado_categoria[id_cat] = 0;
        }
        jQuery('.priceCheck[data-cat=' + cual_categoria + ']').data('actual', parseInt(restaTotal));
        jQuery('.main_resume').attr('data-general', sumaTotal);
        jQuery('.main_resume h3').html('<span>$</span>' + sumaTotal + '<span>USD</span>')
        quantity = quantity - 1
        jQuery(this).parent().find('p').text(quantity);
        jQuery('.left .item[data-plan=' + cual_plan + '] .bottom p').text(quantity)
      }
      if (quantity == 0) {
        jQuery('.right .resume_item[data-plan=' + cual_plan + ']').hide();
      }

    }
  });

  jQuery(".alert_cal .close_cal").click(function () {
    jQuery(".alert_cal").fadeOut(500)
  })

}


function download_pdf() {
  jQuery("div#download_activitie").click(function () {
    jQuery("section.resort_credit_calculator .content_calculator .right .category_list .item_category .box_resume .resume_item").each(function (index, val) {

      var dataid = jQuery(this).attr('data-plan');
      var datavalor = jQuery(this).find(".bottom p").text();

      if (datavalor != 0) {
        dato_src_pdf += ',' + dataid + '-' + datavalor;
      }

    })

    dato_src_pdf = dato_src_pdf.replace(',', '');

    if (dato_src_pdf != "") {
      window.open('/' + drupalSettings.booking.language + '/generar/pdf/actividades?p=' + dato_src_pdf, '_blank');
    } else {
      jQuery(".alert_cal.noselectionactivity").fadeIn(500);
    }

    dato_src_pdf = "";
  })
}

function send_email_rc() {
  jQuery(".alert_cal.email form.send_email_rc").submit(function (e) {
    e.preventDefault();
    jQuery(".alert_cal.email form.send_email_rc .btn").click();
  });
  jQuery(".alert_cal.email form.send_email_rc .btn").click(function () {

    var valoresmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var email = jQuery(".alert_cal.email form.send_email_rc input").val();

    if (email == "") {
      jQuery(".alert_cal.email form.send_email_rc input").css('border-color', '#ff4b6a');
      //console.log("vacio")
    } else if (!valoresmail.test(email)) {
      jQuery(".alert_cal.email form.send_email_rc input").css('border-color', '#ff4b6a');
      //console.log("email no correcto")
    } else {
      jQuery(".alert_cal.email form.send_email_rc input").css('border-color', '#4296c3');
      //console.log("paso")

      ////////////
      jQuery("section.resort_credit_calculator .content_calculator .right .category_list .item_category .box_resume .resume_item").each(function (index, val) {
        var dataid = jQuery(this).attr('data-plan');
        var datavalor = jQuery(this).find(".bottom p").text();
        if (datavalor != 0) {
          dato_src_email += ',' + dataid + '-' + datavalor;
        }
      })

      dato_src_email = dato_src_email.replace(',', '');

      if (dato_src_email != "") {

        jQuery.ajax({
          type: 'POST',
          url: '/' + language_site + '/generar/pdf/actividades?p=' + dato_src_email,
          dataType: 'json',
          data: {'m': email}
        }).done(function (data) {
          jQuery(".alert_cal.emailsuccess").fadeIn(500);
        });

      } else {

        jQuery(".alert_cal.email").fadeOut(300);
        jQuery(".alert_cal.noselectionactivity").fadeIn(500);

      }
      //////////


    }

  })
}


function funtions_resort_credit() {

  jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort span").click(function () {
    jQuery(this).parent().find("ul").slideDown(300)
  })

  jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort ul li").click(function () {
    var cual = jQuery(this).text();
    var id = jQuery(this).attr("data-resort");
    jQuery(this).parents(".resort").find("span").html(cual);
    jQuery(this).parents(".resort").find("span").attr("data-resort", id);
    jQuery(this).parent().slideUp(300);
  })

  jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights span").click(function () {
    jQuery(this).parent().find("ul").slideDown(300)
  })

  jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights ul li").click(function () {
    var cual = jQuery(this).text();
    var id = jQuery(this).attr("data-night");
    jQuery(this).parents(".number_nights").find("span").html(cual);
    jQuery(this).parents(".number_nights").find("span").attr("data-night", id);
    jQuery(this).parent().slideUp(300);
  })

  /*open resort*/
  jQuery("div#calculate_resort_credict").click(function () {
    acomulado_categoria = [];
    sumaT = 0;
    var resort = jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort span").attr("data-resort");
    var nights = jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights span").attr("data-night");
    var error_r = 1
    var error_n = 1

    if (resort != 0) {
      jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort").css("border-color", "#01b0ef")
      error_r = 0
    } else {
      jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort").css("border-color", "#902729")
      error_r = 1
    }

    if (nights != 0) {
      jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights").css("border-color", "#01b0ef")
      error_n = 0
    } else {
      jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights").css("border-color", "#902729")
      error_n = 1
    }

    if (error_r == 0 && error_n == 0) {
      /*ResortCredict*/
      jQuery.ajax({
        type: 'POST',
        url: '/' + language_site + '/traer/calculadora',
        dataType: 'json',
        data: {'noches': nights, 'resort': resort}
      }).done(function (data) {
        jQuery('.content_calculator').html("")
        jQuery('.content_calculator').append(data);

        jQuery("section.resort_credit_calculator .content_calculator .category ul li").each(function (index, val) {
          if (jQuery(val).hasClass('active')) {
            var cual_datacat = jQuery(this).attr("data-cat");
            jQuery('.left[data-cat=' + cual_datacat + ']').css("display", "inline-block");
            datalimit = jQuery('.left[data-cat=' + cual_datacat + ']').attr("data-limit")
          }
        })

        //funtions_resort_credit();

        jQuery("section.resort_credit_calculator .content_calculator").slideDown(600)
        if (screen_width > 992) {
          scroll_resort_credit();
        }
        if (screen_width <= 768) {
          menu_slider_category_resort_credit();
        }
        if (screen_width <= 540) {
          show_main_resumen_resort_credit();
        }
        resort_open_content = 1


        jQuery("section.resort_credit_calculator .content_calculator .category .close_cal").click(function () {
          jQuery("section.resort_credit_calculator .content_calculator").slideUp(600);
          resort_open_content = 0
        })

        jQuery("section.resort_credit_calculator .alert_cal.emailsuccess .close_cal_success").click(function () {
          //location.reload();
          jQuery(".alert_cal.email form.send_email_rc input").val('');
          jQuery(".alert_cal .close_cal").click();
        })

        jQuery("section.resort_credit_calculator .content_calculator .right .category_list .item_category").click(function () {
          jQuery("section.resort_credit_calculator .content_calculator .right .category_list .item_category .box_resume").css("height", 0)
          jQuery(".right .item_category").removeClass("active");
          jQuery(this).addClass("active");
          jQuery(this).find(".box_resume").css("height", "137px")
          scroll_resort_credit()
        })

        jQuery("section.resort_credit_calculator .content_calculator .category ul li").click(function () {
          var cual_datacat = jQuery(this).attr("data-cat");
          jQuery("section.resort_credit_calculator .content_calculator .category ul li").removeClass("active");
          jQuery(this).addClass("active");

          jQuery('.left').hide();
          jQuery('.left[data-cat=' + cual_datacat + ']').css("display", "inline-block");
          datalimit = jQuery('.left[data-cat=' + cual_datacat + ']').attr("data-limit")
          if (datalimit == 0) {
            valorsumatoria = 0;
          }
          ;
          jQuery('.right .item_category[data-cat=' + cual_datacat + ']').trigger("click");
        })

        jQuery("section.resort_credit_calculator .content_calculator .right .item_category").click(function () {
          var cual_datacat = jQuery(this).attr("data-cat");
          jQuery("section.resort_credit_calculator .content_calculator .right .item_category").removeClass("active");
          jQuery(this).addClass("active");
          id_cat = jQuery("section.resort_credit_calculator .content_calculator .right .item_category.active").attr("data-cat");
          //console.log('categoría desde el botón '+id_cat);
          jQuery('.left').hide();
          jQuery('.left[data-cat=' + cual_datacat + ']').css("display", "inline-block");
          datalimit = jQuery('.left[data-cat=' + cual_datacat + ']').attr("data-limit");
          if (datalimit == 0) {
            valorsumatoria = 0;
            acomulado_categoria = [];
            sumaT = 0;
          }
          jQuery('section.resort_credit_calculator .content_calculator .category ul li').removeClass("active");
          jQuery('section.resort_credit_calculator .content_calculator .category ul li[data-cat=' + cual_datacat + ']').addClass("active");
        })


        remain_resort_credit = parseInt(jQuery("section.resort_credit_calculator .content_calculator .right .main_resume h3").text().replace("$", "").replace("USD", ""))
        sumatoria_credit();
        sumatoria_credit_right();
        download_pdf();
        send_email_rc();

        jQuery("div#send_email_activitie").click(function () {
          jQuery(".alert_cal.email").fadeIn(500)
        })

        if (screen_width > 1200) {
          var scroll = jQuery("section.resort_credit_calculator .content_calculator").offset().top - 80
          jQuery("html, body").animate({scrollTop: scroll}, "slow");
        } else {
          var scroll = jQuery("section.resort_credit_calculator .content_calculator").offset().top - 60
          jQuery("html, body").animate({scrollTop: scroll}, "slow");
        }


      });
      /*ResortCredict*/

    }

  })

}

// function funtions_resort_credit_ajax(){
//   jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .number_nights ul li").click(function(){
//   	var resortsel = jQuery("section.resort_credit_calculator .box_initial_calculator .calculator .resort span").attr("data-resort")
//     var nochesel = jQuery(this).text().substr(0,2).replace(" ","");
//
//   	if (resort_open_content == 1){
//
//   		  console.log("entroo")
//
//               jQuery.ajax({
//                 type: "POST",
//                 url: "/traer/calculadora/",
//                 data: {noches:nochesel},
//                  }).done(function( data ) {
//                   console.log("respondio")
//                   //jQuery('.box_initial_calculator').after(data);
//                   //console.log(data)
//                 });
//
//   	}
//
//   })
// }

/*Tabs OnlyBrand*/
function tabs_only_brand() {
  jQuery("section.tabs_moon_brand_mixto .content nav.nav_tabs ul li").click(function () {
    var cual = jQuery(this).attr('id');
    jQuery("section.tabs_moon_brand_mixto .content .content_tabs .box_tab .video").html('');
    jQuery("section.tabs_moon_brand_mixto .content nav.nav_tabs ul li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery("section.tabs_moon_brand_mixto .content .content_tabs .box_tab").hide()
    jQuery('section.tabs_moon_brand_mixto .content .content_tabs').find('#' + cual + '').fadeIn(500)

    if (screen_width > 992) {
      if (jQuery(this).hasClass('video')) {
        var cualvid = jQuery(this).attr('data_vid');
        jQuery('section.tabs_moon_brand_mixto .content .content_tabs').find('#' + cual + ' .video').html('<iframe title="video" src="https://player.vimeo.com/video/' + cualvid + '?autoplay=1&title=0&byline=0&portrait=0&muted=1&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
      }
    }
  })

  if (screen_width <= 992) {
    jQuery("section.tabs_moon_brand_mixto .content .content_tabs .box_tab .video").html('');
  }

}

/*Tabs only brand gallery*/
function tabs_only_brand_gallery() {
  jQuery("section.galery_tabs .content .main_tabs ul li").click(function () {
    var cual = jQuery(this).attr("data_rel");
    jQuery("section.galery_tabs .content .main_tabs ul li").removeClass("active");
    jQuery(this).addClass("active");
    jQuery('section.galery_tabs .content .content_tab_resort').hide();
    jQuery('section.galery_tabs .content .content_tab_resort[data_rel=' + cual + ']').fadeIn(600);

    if (screen_width <= 767) {
      var carousel = jQuery("section.galery_tabs .content nav.nav_tabs ul.owl-carousel");
      carousel.trigger('to.owl.carousel', 0);
      jQuery('section.galery_tabs .content .content_tab_resort[data_rel=' + cual + ']').find('nav.nav_tabs ul .owl-item:nth-child(1) li').trigger("click");
    } else {
      jQuery('section.galery_tabs .content .content_tab_resort[data_rel=' + cual + ']').find('nav.nav_tabs ul li:nth-child(1)').trigger("click");
    }
  })
}

/*slider our_resort*/
function slider_our_resort() {
  jQuery("section.our_resort .content .body_or").addClass("owl-carousel")
  jQuery('section.our_resort .content .body_or.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    video: true,
    nav: false,
    autoHeight: true,
    dots: true,
  })

  var owl = jQuery('section.our_resort .content .body_or.owl-carousel');
  var owl2 = jQuery('section.our_resort .content .header_or ul.owl-carousel');
  jQuery("section.our_resort .content .header_or ul li").click(function () {
    console.log("enuhgtdlsad")
    if (screen_width > 1200) {
      owl.trigger('to.owl.carousel', [jQuery(this).index(), 300]);
    } else {
      var cualclick = jQuery(this).attr("id-content");
      console.log("entroo click-2")
      cualclick = cualclick - 1
      jQuery('section.our_resort .content .body_or.owl-carousel').trigger('to.owl.carousel', cualclick);
    }
  })

  owl.on('changed.owl.carousel', function (event) {
    setTimeout(function () {
      var cual = jQuery("section.our_resort .content .body_or .owl-item.active").find("article").attr("id-content-box")
      console.log("cambio-new5: " + cual)
      jQuery("section.our_resort .content .header_or ul li").removeClass("active");
      jQuery('section.our_resort .content .header_or ul li[id-content=' + cual + ']').addClass("active");

      if (screen_width <= 1200) {
        cual = cual - 1
        console.log("cual.." + cual)
        jQuery('section.our_resort .content .header_or ul.owl-carousel').trigger('to.owl.carousel', cual);
      }
    }, 100);

  })
}

/*slider menu our_resort*/
function menu_slider_our_resort() {

  if (screen_width <= 1200) {
    jQuery("section.our_resort .content .header_or ul").addClass("owl-carousel");
    jQuery('section.our_resort .content .header_or ul.owl-carousel').owlCarousel({
      items: 1,
      margin: 0,
      nav: false,
      autoHeight: true,
      dots: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        }
      }
    })

    var owlpagetabs = jQuery('section.our_resort .content .header_or ul.owl-carousel');
    owlpagetabs.on('changed.owl.carousel', function (event) {

      setTimeout(function () {
        jQuery("section.our_resort .content .header_or ul.owl-carousel .owl-item.active li").trigger("click");
      }, 100);

    })

  }

}

function acordeon_intervaled_module() {
  jQuery("section.palace-resort-interleaved-module.type-actividad .content article .copy .box_copys .redmore").click(function () {
    var dataref = jQuery(this).attr("data-ref");
    if (dataref == 1) {
      var alto = jQuery(this).parent().find(".box-detalle").height() + 15;
      jQuery(this).parent().find(".detalle").css("height", alto);
      if (language_site == "es") {
        jQuery(this).html("Leer menos");
      } else if (language_site == 'en') {
        jQuery(this).html("Read less");
      } else if (language_site == 'pt') {
        jQuery(this).html("Ler menos");
      }
      jQuery(this).attr("data-ref", "2");
      jQuery(this).parent().find('.detalle').addClass('active');
    } else if (dataref == 2) {
      if (screen_width >= 1500) {
        jQuery(this).parent().find(".detalle").css("height", "160");
      } else if (screen_width < 1500) {
        jQuery(this).parent().find(".detalle").css("height", "105");
      }
      if (language_site == "es") {
        jQuery(this).html("Leer más");
      } else if (language_site == 'en') {
        jQuery(this).html("Read more");
      } else if (language_site == 'pt') {
        jQuery(this).html("Leia mais");
      }
      jQuery(this).attr("data-ref", "1")
      jQuery(this).parent().find('.detalle').removeClass('active');
    }
  });
}

function slider_palace_resort_gallery_dinning() {
  jQuery("section.palace-resort-gallery-dinning .content").addClass("owl-carousel");
  jQuery("section.palace-resort-gallery-dinning .content.owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true
  })
}

/*Palace resort destinations brand*/
jQuery("section.palace-resort-destinations-brand .content nav ul li").click(function () {
  jQuery("section.palace-resort-destinations-brand .content nav ul li").removeClass("active");
  jQuery(this).addClass("active");
  jQuery(this).parents(".palace-resort-destinations-brand").find(".content_box").removeClass("active");
  var cual = jQuery(this).attr("data-id")
  jQuery(this).parents(".palace-resort-destinations-brand").find(".content_box[data-id='" + cual + "']").addClass("active");
  if (screen_width > 540) {
    var scroll = jQuery("section.palace-resort-destinations-brand").offset().top - 60
  } else {
    var scroll = jQuery("section.palace-resort-destinations-brand").offset().top - 40
  }
  jQuery("html, body").animate({scrollTop: scroll}, "slow");
})

var data_sel_paso1 = "";
var data_sel_paso2 = [];
var data_sel_paso3 = [];
var data_sel_paso4 = [];

function profilerCheckSelected() {
  var selected = [];
  jQuery('.profiler-options .selected_item').each(function (i, e) {
    selected.push(jQuery(this).data('value'));
  });
  return selected;
}

function profilerSetSelected() {
  selected = profilerCheckSelected();
  selected = Array.isArray(selected) && selected.length ? selected : '';
  if (jQuery('.profiler-options-select').length > 0) {
    jQuery('.profiler-options-select').val(selected);
    if (jQuery('.profiler-options-select').val() == '') {
      jQuery('.webform-button--next').prop('disabled', true);
    } else {
      jQuery('.webform-button--next').prop('disabled', false);
      /*jQuery([document.documentElement, document.body]).animate({
                scrollTop: jQuery(".webform-button--next").offset().top - 240
            }, 300);*/
    }
  }
  if (jQuery('.formulario').length > 0) {
    jQuery('.webform-button--previous').remove();
  }
  if (jQuery('#orderResort0').length > 0 && jQuery('#selectedResort').length > 0) {
    jQuery('#selectedResort').val(jQuery('#orderResort0').text());
  }
}

function profilerEnableActions() {
  jQuery('.profiler-options li').click(function (e) {
    if (jQuery('.profiler-options').data('multiple')) {
      jQuery(this).toggleClass('selected_item');
    } else {
      jQuery('.profiler-options li').removeClass('selected_item');
      jQuery(this).addClass('selected_item');
    }
    profilerSetSelected();
    if (jQuery('.profiler-options-select').val() != '') {
      jQuery('.webform-button--next').trigger('click');
    }
  });
  if (jQuery('.form-internal input[type="checkbox"]').length > 0) {
    jQuery('.form-internal input[type="checkbox"]').change();
  }
}

function profilerAutocompleteCities() {
  if (jQuery('.profiler-city').length > 0 /*&& settings.url.includes('ajax_form=1')*/) {
    var options = {
      url: '/themes/custom/mooncancun/assets/vendor/geonames/cities.json',
      listLocation: 'cities',
      //getValue: 'name',
      list: {
        maxNumberOfElements: 5,
        onChooseEvent: function () {
          var selectedItem = jQuery('.profiler-city').getSelectedItemData();
          jQuery('.profiler-city').val(selectedItem.name);
        },
        match: {
          enabled: true,
          caseSensitive: true,
          method: function (element, phrase) {
            if (element.country_code == jQuery('.profiler-country').val()) {
              if (element.name.search(phrase) > -1) {
                return true;
              }
            }
            return false;
          }
        },
      },
      template: {
        type: "custom",
        method: function (value, item) {
          return item.name;
        }
      },
      minCharNumber: 3,
      requestDelay: 300
    };
    jQuery('.profiler-city').easyAutocomplete(options);
  }
}

function perfilador() {

  if (jQuery('.webform-submission-profiler-form').length > 0) {
    jQuery(document).ajaxComplete(function (event, xhr, settings) {
      profilerSetSelected();
      profilerEnableActions();
      profilerAutocompleteCities();
    });
    profilerAutocompleteCities();
    profilerSetSelected();
    profilerEnableActions();
  }
  //Paso1
  jQuery("section.perfilador .content .paso1 article .answers-steps ul li").click(function () {
    jQuery("section.perfilador .content .paso1 article .answers-steps ul li").removeClass("selected_item");
    jQuery(this).addClass("selected_item");
    data_sel_paso1 = jQuery(this).attr("data-type");

    if (jQuery("section.perfilador .content .paso1 article .answers-steps ul li.selected_item").length != 0) {
      jQuery(this).parents(".answers-steps").find(".box_btns .btn").addClass("active");
      jQuery("section.perfilador .content .paso1 article .answers-steps .box_btns .btn.active").click(function () {
        jQuery("section.perfilador .content .paso1").hide();
        jQuery("section.perfilador .content .paso2").fadeIn(600);
      });
    }

  });

  //Paso2
  jQuery("section.perfilador .content .paso2 article .answers-steps ul li").click(function () {

    jQuery(this).addClass("selected_item");
    data_sel_paso2.push(jQuery(this).attr("data-type"));
    var seleccionado = jQuery(this).find(".info p").text();
    jQuery("section.perfilador .content .paso2 .seleccionados ul").append("<li>" + seleccionado + "</li>");

    if (jQuery("section.perfilador .content .paso2 article .answers-steps ul li.selected_item").length != 0) {
      jQuery(this).parents(".answers-steps").find(".box_btns .btn").addClass("active");
      jQuery("section.perfilador .content .paso2 article .answers-steps .box_btns .btn.active").click(function () {
        jQuery("section.perfilador .content .paso2").hide();
        jQuery("section.perfilador .content .paso3").fadeIn(600);
      });
    }

  });

  //Paso3
  jQuery("section.perfilador .content .paso3 article .answers-steps ul li").click(function () {

    jQuery(this).addClass("selected_item");
    data_sel_paso3.push(jQuery(this).attr("data-type"));
    var seleccionado = jQuery(this).find(".info p").text();
    jQuery("section.perfilador .content .paso3 .seleccionados ul").append("<li>" + seleccionado + "</li>");

    if (jQuery("section.perfilador .content .paso3 article .answers-steps ul li.selected_item").length != 0) {
      jQuery(this).parents(".answers-steps").find(".box_btns .btn").addClass("active");
      jQuery("section.perfilador .content .paso3 article .answers-steps .box_btns .btn.active").click(function () {
        jQuery("section.perfilador .content .paso3").hide();
        jQuery("section.perfilador .content .paso4").fadeIn(600);
      });
    }

  });

  //Paso4
  jQuery("section.perfilador .content .paso4 article .answers-steps ul li").click(function () {

    jQuery(this).addClass("selected_item");
    data_sel_paso4.push(jQuery(this).attr("data-type"));
    var seleccionado = jQuery(this).find(".info p").text();
    jQuery("section.perfilador .content .paso4 .seleccionados ul").append("<li>" + seleccionado + "</li>");

    if (jQuery("section.perfilador .content .paso4 article .answers-steps ul li.selected_item").length != 0) {
      jQuery(this).parents(".answers-steps").find(".box_btns .btn").addClass("active");
      jQuery("section.perfilador .content .paso4 article .answers-steps .box_btns .btn.active").click(function () {
        jQuery("section.perfilador .content .paso4").hide();
        jQuery("section.perfilador .content .formulario").fadeIn(600);
      });
    }

  });

  //prev
  jQuery("section.perfilador .content .paso2 article .answers-steps .box_btns .btn.prev").click(function () {
    jQuery("section.perfilador .content .paso2").hide();
    jQuery("section.perfilador .content .paso1").fadeIn(600);
  });

  jQuery("section.perfilador .content .paso3 article .answers-steps .box_btns .btn.prev").click(function () {
    jQuery("section.perfilador .content .paso3").hide();
    jQuery("section.perfilador .content .paso2").fadeIn(600);
  });

}

var invalid_color_fvp = '#ff4b6a';
var ok_color_fvp = '#4296c3';

function form_val_perfilador() {
  var name = jQuery("input#name").val();
  var country = jQuery("input#country").val();
  var email = jQuery("input#email").val();

  errores = 0;

  if (name == "") {
    jQuery("input#name").css('border-color', invalid_color_fvp);
    errores = 1;
  } else {
    jQuery("input#name").css('border-color', ok_color_fvp);
    errores = 0;
  }

  if (country == "") {
    jQuery("input#country").css('border-color', invalid_color_fvp);
    errores = 1;
  } else {
    jQuery("input#country").css('border-color', ok_color_fvp);
    errores = 0;
  }

  valoresmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;


  if (email == "") {
    jQuery("input#email").css('border-color', invalid_color_fvp);
    errores = 1;
  } else if (!valoresmail.test(email)) {
    jQuery("input#email").css('border-color', invalid_color_fvp);
    errores = 1;
  } else {
    jQuery("input#email").css('border-color', ok_color_fvp);
    errores = 0;
  }


  if (errores == 0) {
    jQuery("section.perfilador .content article .description_box").prepend('<div class="loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
    setTimeout(function () {
      jQuery("section.perfilador .content .formulario").hide();
      jQuery("section.perfilador .content article .description_box .loader").fadeOut(300);
      jQuery("section.perfilador .content").addClass("pass");
      jQuery("section.perfilador .content .resultado").show();
    }, 3000);
  }

}

function pdfHeigth() {
  var anchor = 80 * jQuery(window).width() / 100;
  jQuery('#iframe-bro').height((anchor * 12.7 / 16) * 2);
}


function functionslp2x1() {
  /*functions lp 2x1*/

  if (jQuery('.alert-success').length != 0) {
    jQuery(".popupLp#popup-form-confrimation").fadeIn(500);
    jQuery(".landing-2-1 .alert-danger").hide();
  }

  jQuery(document).on("click", ".steps .copy-link", function (e) {
    var aux = document.createElement("input");
    aux.setAttribute("value", window.location.href);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  })


  jQuery(document).on("change", ".block-form select.booking-hotel", function (e) {
    var reseortSelected = jQuery(this).val();
    jQuery('.block-form  select.booking-hotel-referer option').show();
    jQuery('.block-form  select.booking-hotel-referer option').removeAttr('disabled');
    jQuery('.block-form  select.booking-hotel-referer').val('');
    if (reseortSelected == 'Moon Palace Cancun' || reseortSelected == 'Moon Palace Jamaica' || reseortSelected == 'Moon Palace Cancun - Nizuc') {
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Cancun"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Los Cabos"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="The Grand at Moon Palace Cancun"]').hide();

      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Cancun"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Los Cabos"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="The Grand at Moon Palace Cancun"]').attr('disabled', 'true');

    } else if (reseortSelected == 'Beach Palace' || reseortSelected == 'Cozumel Palace' || reseortSelected == 'Playacar Palace' || reseortSelected == 'Isla Mujeres Palace' || reseortSelected == 'Sun Palace') {
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Cancun"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Los Cabos"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="Moon Palace Jamaica"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="The Grand at Moon Palace Cancun"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="Moon Palace Cancun"]').hide();
      jQuery('.block-form  select.booking-hotel-referer option[value="Moon Palace Cancun - Nizuc"]').hide();

      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Cancun"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="Le Blanc Spa Resort Los Cabos"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="Moon Palace Jamaica"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="The Grand at Moon Palace Cancun"]').attr('disabled', 'true');
      jQuery('.block-form  select.booking-hotel-referer option[value="Moon Palace Cancun"]').attr('disabled', 'true');
    }


  })


  if (language_site == 'es') {
    jQuery.fn.datepicker.dates['es'] = {
      days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      daysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
      daysMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      today: "Hoy",
      clear: "Cerrar",
    };
    console.log("entre al activador");
    jQuery('.date-check .form-control').datepicker({
      autoclose: true,
      format: 'yyyy-mm-dd',
      startDate: '2020-12-22',
      endDate: '2021-01-04',
      disableTouchKeyboard: true,
      language: 'es',
    });
    jQuery('.date-check .form-control').datepicker('setDate', '2020-12-22');
  } else if (language_site == 'en') {

  /*  jQuery('.date-check .checkin').datepicker({
      autoclose: true,
      format: 'yyyy-mm-dd',
      startDate: '2020-12-22',
      endDate: '2021-06-11',
      disableTouchKeyboard: true,
      language: 'en',
      datesDisabled: [drupalSettings.booking.fechas],
    });
    jQuery('.date-check .checkin').datepicker('setDate', '2020-12-22');

    jQuery('.date-check .checkout').datepicker({
      autoclose: true,
      format: 'yyyy-mm-dd',
      startDate: '2020-12-26',
      endDate: '2021-06-15',
      disableTouchKeyboard: true,
      language: 'en',
      datesDisabled: [drupalSettings.booking.fechas],
    });
    jQuery('.date-check .checkout').datepicker('setDate', '2020-12-26');*/

  } else if (language_site == 'pt') {

    jQuery.fn.datepicker.dates['pt'] = {
      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      daysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      daysMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Sx', 'Sa'],
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      today: "Hoje",
      clear: "Perto",
    };


    jQuery('.date-check .form-control').datepicker({
      autoclose: true,
      format: 'yyyy-mm-dd',
      startDate: '2020-12-22',
      endDate: '2021-01-04',
      disableTouchKeyboard: true,
      language: 'pt',
    });
    jQuery('.date-check .form-control').datepicker('setDate', '2020-12-22');
  }

  /*Change*/
  jQuery('.date-check .form-control').datepicker().on('changeDate', function (ev) {
    var cual = jQuery(this).parent().hasClass('form-item-check-in');
    console.log("entre 1");
    var new_options_major = {
      autoclose: true,
      format: 'yyyy-mm-dd',
      language: language_site,
      datesDisabled: [drupalSettings.booking.fechas],
    }

    if (cual == true) {
      //console.log("checkin resort")
      var dater = ev.currentTarget.value;
      var date_check_out = new Date(dater);
      date_check_out.setDate(date_check_out.getDate() + 6);
      jQuery('.form-item-check-out .form-control').datepicker("destroy");
      console.log("entre 2");

      jQuery('.form-item-check-out .form-control').datepicker(new_options_major);
      jQuery(".form-item-check-out .form-control").datepicker("setDate", date_check_out);
      jQuery('.form-item-check-out .form-control').datepicker('setStartDate', dater);

      //return false;
    }

  });


  jQuery(document).on("click", ".date-check", function () {
    jQuery(this).find('.form-control').focus();
  })

  jQuery(document).on("click", "section.popupLp .close", function () {
    var idPopup = jQuery(this).parent().parent().attr('id');
    jQuery(".popupLp#" + idPopup).fadeOut(500);
  })

  jQuery(".popup-lp").click(function () {
    var idPopup = jQuery(this).attr('data-popup');
    jQuery(".popupLp#" + idPopup).fadeIn(500);
  })

  /*functions lp 2x1*/
}

function nextStep(nextStep, parenNumber) {
  var numerAllSteps = jQuery('.' + parenNumber).find('.step').length;
  numerAllSteps = numerAllSteps - 1;
  jQuery('.' + parenNumber).find('.step').removeClass('animatedsection');
  jQuery('.' + parenNumber).find('.init').removeClass('init');
  var nextStep = parseInt(nextStep);
  if (nextStep < numerAllSteps) {
    var nextStepFinal = nextStep + 1;
    jQuery('.' + parenNumber + ' .step[data-step=' + nextStepFinal + ']').addClass('animatedsection');
  } else if (nextStep == numerAllSteps) {
    var nextStepFinal = nextStep - numerAllSteps;
    jQuery('.' + parenNumber + ' .step[data-step=' + nextStepFinal + ']').addClass('animatedsection');
  }
}

function nextStepSlide(nextStep, parenNumber) {
  var numerAllSteps = jQuery('.' + parenNumber).find('.step').length;
  numerAllSteps = numerAllSteps - 1;
  ;
  jQuery('.' + parenNumber).find('.step').removeClass('animated');
  jQuery('.' + parenNumber).find('.init').removeClass('init');
  var nextStep = parseInt(nextStep);
  if (nextStep < numerAllSteps) {
    var nextStepFinal = nextStep + 1;
    jQuery('.' + parenNumber + ' .step[data-step=' + nextStep + ']').fadeOut(300);
    jQuery('.' + parenNumber + ' .step[data-step=' + nextStepFinal + ']').fadeIn(300);
  } else if (nextStep == numerAllSteps) {
    var nextStepFinal = nextStep - numerAllSteps;
    jQuery('.' + parenNumber + ' .step[data-step=' + 1 + ']').fadeOut(300);
    jQuery('.' + parenNumber + ' .step[data-step=' + nextStepFinal + ']').fadeIn(300);
  }
}

function NumberSlidte(step) {
  jQuery('.' + 'content-natural-protect' + ' .step[data-step=' + step + ']').removeClass('animated').fadeIn(300);
}

jQuery(document).ready(function () {

  /*--------inicio funcionalidad discoveries------------*/
  var urlActual = window.location;
  console.log("mi url es"+urlActual);
  if (localStorage.getItem('urlActual') == undefined) {
    localStorage.setItem('urlActual', urlActual);
  } else {
    if (localStorage.getItem('urlAnterior') != undefined) {
      localStorage.removeItem('urlAnterior');
    }
    var temporal = localStorage.getItem("urlActual");
    localStorage.setItem('urlAnterior', temporal);
    var tmpAn = localStorage.getItem("urlAnterior");
    var tmpAc = ""+urlActual;
    if(tmpAn.indexOf("/discoveries/") != -1 && tmpAc.substr((tmpAc.length - 12),12)){
      //location.reload();
    }
    localStorage.removeItem('urlActual');
    localStorage.setItem('urlActual', urlActual);
  }
  /*--------fin funcionalidad discoveries------------*/
  jQuery('.step .button').click(function (e) {
    nextStep(jQuery(this).parents('.step').attr('data-step'), 'organic-vemicompost');
  });
  jQuery('.click-top-slider').click(function (e) {
    window.location.href = "#no-js-natural-protect-2"
    NumberSlidte(0);
  });
  jQuery('.click-top-slider2').click(function (e) {
    window.location.href = "#no-js-natural-protect-1"
    NumberSlidte(1);
  });
  jQuery('.step .btn-action').click(function (e) {
    console.log("Action entra" + jQuery(this).parents('.step').attr('data-step'));
    nextStepSlide(jQuery(this).parents('.step').attr('data-step'), 'content-natural-protect');
  });
  jQuery('.items li').click(function (e) {
    e.preventDefault();
    var itemMenu = jQuery(this).attr('data-menu');
    var scroll = jQuery('.' + itemMenu).offset().top;

    jQuery('body,html').animate({scrollTop: scroll}, '1200');
  });
  /* Landign ALL Maya animaciones con scroll */
  jQuery(window).scroll(function () {
    if (jQuery(window).width() > 768) {
      var windowHeight = jQuery(window).scrollTop() + 300;
      if (jQuery(".intro-text-5282").length > 0 ) {
        var contenido0New = jQuery(".intro-text-5282").offset();
        contenido0New = contenido0New.top;
        if(windowHeight >= contenido0New){
          jQuery(".intro-text-5282").addClass('animatedsectionLP');
        }
      }
      if(jQuery(".intro-text-5299").length > 0){
        var contenido0New2 = jQuery(".intro-text-5299").offset();
        contenido0New2 = contenido0New2.top;
        if(windowHeight >= contenido0New2){
          jQuery(".intro-text-5299").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".destination_list article:nth-child(1)").length > 0 ) {
        var contenido1New = jQuery(".destination_list article:nth-child(1)").offset();
        contenido1New = contenido1New.top;
        if(windowHeight >= contenido1New){
          jQuery(".destination_list article:nth-child(1)").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".destination_list article:nth-child(2)").length > 0 ) {
        var contenido2New = jQuery(".destination_list article:nth-child(2)").offset();
        contenido2New = contenido2New.top;
        if(windowHeight >= contenido2New){
          jQuery(".destination_list article:nth-child(2)").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".destination_list article:nth-child(3)").length > 0 ) {
        var contenido3New = jQuery(".destination_list article:nth-child(3)").offset();
        contenido3New = contenido3New.top;
        if(windowHeight >= contenido3New){
          jQuery(".destination_list article:nth-child(3)").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".destination_list article:nth-child(4)").length > 0 ) {
        var contenido4New = jQuery(".destination_list article:nth-child(4)").offset();
        contenido4New = contenido4New.top;
        if(windowHeight >= contenido4New){
          jQuery(".destination_list article:nth-child(4)").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".destination_list article:nth-child(5)").length > 0 ) {
        var contenido5New = jQuery(".destination_list article:nth-child(5)").offset();
        contenido5New = contenido5New.top;
        if(windowHeight >= contenido5New){
          jQuery(".destination_list article:nth-child(5)").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".intro-text-5285").length > 0) {
        var contenido6New = jQuery(".intro-text-5285").offset();
        contenido6New = contenido6New.top;
        if(windowHeight >= contenido6New){
          jQuery(".intro-text-5285").addClass('animatedsectionLP');
        }
      }
      if(jQuery(".intro-text-5301").length > 0){
        var contenido6New2 = jQuery(".intro-text-5301").offset();
        contenido6New2 = contenido6New2.top;
        if(windowHeight >= contenido6New2){
          jQuery(".intro-text-5301").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".page_tabs").length > 0 ) {
        var contenido7New = jQuery(".page_tabs").offset();
        contenido7New = contenido7New.top;
        if(windowHeight >= contenido7New){
          jQuery(".page_tabs").addClass('animatedsectionLP');
        }
      }
      if (jQuery(".bloque-purely").length > 0 ) {
        var contenido8New = jQuery(".bloque-purely").offset();
        contenido8New = contenido8New.top;
        if(windowHeight >= contenido8New){
          jQuery(".bloque-purely").addClass('animatedsectionLP');
        }
      }
    }
  });
  jQuery(window).scroll(function () {
    if (jQuery(window).width() > 768) {
      var windowHeight = jQuery(window).scrollTop() + 300;
      if (jQuery(".intro-text").length > 0) {
        var contenido1 = jQuery(".intro-text").offset();
        contenido1 = contenido1.top;
        if (windowHeight >= contenido1) {
          jQuery(".intro-text").addClass('animatedsection');
        }
      }
      if (jQuery(".organic-vemicompost").length > 0) {
        var contenido2 = jQuery(".organic-vemicompost").offset();
        contenido2 = contenido2.top;
        if (windowHeight >= contenido2) {
          jQuery(".organic-vemicompost .init").addClass('animatedsection');
        }
      }
      if (jQuery(".biodiesel").length > 0) {
        var contenido3 = jQuery(".biodiesel").offset();
        contenido3 = contenido3.top;
        if (windowHeight >= contenido3) {
          jQuery(".biodiesel").addClass('animatedsection');
        }
      }
      if (jQuery(".content-natural-protect").length > 0) {
        var contenido4 = jQuery(".content-natural-protect").offset();
        contenido4 = contenido4.top;
        if (windowHeight >= contenido4) {
          jQuery(".content-natural-protect .init").addClass('animated');
          jQuery(".js-scroll-to-id .init").fadeIn(1000);
        }
      }
      if (jQuery(".nursery").length > 0) {
        var contenido5 = jQuery(".nursery").offset();
        contenido5 = contenido5.top;
        if (windowHeight >= contenido5) {
          jQuery(".nursery").addClass('animatedsection');
        }
      }
      if (jQuery(".beach-recovery").length > 0) {
        var contenido6 = jQuery(".beach-recovery").offset();
        contenido6 = contenido6.top;
        if (windowHeight >= contenido6) {
          jQuery(".beach-recovery").addClass('animatedsection');
        }
      }
      if (jQuery(".recuperacion-de-playas").length > 0) {
        var contenido7 = jQuery(".recuperacion-de-playas").offset();
        contenido7 = contenido7.top;
        if (windowHeight >= contenido7) {
          jQuery(".recuperacion-de-playas").addClass('animatedsection');
        }
      }
      if (jQuery(".content-natural-protect").length > 0) {
        var contenido100 = jQuery(".content-natural-protect").offset();
        contenido100 = contenido100.top;
        if (windowHeight >= contenido100) {
          jQuery(".content-natural-protect").addClass('animatedsection');
        }
      }
    }
  });

  if (jQuery('.landing-2-1').length != 0) {
    functionslp2x1();
    jQuery('body').addClass('path-vista-promo-2x1');
  }

  /*funcion mueve migas de pan*/
  if (jQuery('.main_content_banner').length != 0) {
    jQuery(".main_content_banner").after(jQuery(".breadcrumb"));
  }

  jQuery(document).on("click", ".close-join", function () {
    jQuery('.big-deals-join-us').removeClass('bottom');
  })


  jQuery('.form-box input:checkbox').each(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass('checked');
    }
  });

  jQuery('.form .block-form input:checkbox').each(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass('checked');
    }
  });

  jQuery(document).on("click", ".volumeVideo", function () {
    iframe = document.querySelector("section.main_content_banner .video iframe[id='" + jQuery(this).parent().find('iframe').attr('id') + "']");

    if (activado == false) {
      jQuery(this).addClass('activado');
      jQuery(this).parent().addClass('on');
      if (jQuery(this).parent().attr('data-platform') == 'vimeo') {
        player = new Vimeo.Player(iframe);
        player.setVolume(1)
      } else {
        postMessage(jQuery(this).parent().find('iframe').attr('id'), 'unMute');
      }

      activado = true;
      return false;
    } else {
      jQuery(this).removeClass('activado');
      jQuery(this).parent().removeClass('on');
      if (jQuery(this).parent().attr('data-platform') == 'vimeo') {
        player = new Vimeo.Player(iframe);
        player.setVolume(0)
      } else {
        postMessage(jQuery(this).parent().find('iframe').attr('id'), 'mute');
      }

      activado = false;
      return false;
    }
  });


  /*Main Slider*/
  jQuery('section.main_content_banner .content').addClass('owl-carousel');
  owlCarouselBanner = jQuery('section.main_content_banner .owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    merge: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 15000,
    items: 1,
    responsiveClass: true,
    onChanged: stopPlayVideoBanner,
    responsive: {
      540: {
        dots: false,
        nav: true
      }
    }
  })

  if (jQuery("section.main_content_banner .owl-stage .owl-item").length > 5) {
    jQuery("section.main_content_banner .owl-dots").hide()
  }

  centravideo();
  slider_our_resort();
  menu_slider_our_resort();


  /*General galery*/
  jQuery('.general_galery .owl-carousel').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    autoWidth: false,
    margin: 0,
    nav: false,
    autoHeight: true,
    autoplay: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      992: {
        items: 3,
        center: true,
        autoWidth: true,
        nav: true
      }
    }
  })

  /*Slider only palace resort*/
  jQuery('section.slider_only_palace-resort .content.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    dots: true
  })

  jQuery("section.slider_only_palace-resort").each(function () {
    var cuantos = jQuery(this).find(".content .owl-dots .owl-dot").length
    if (cuantos > 5) {
      jQuery(this).find(".content .owl-dots").hide()
    }
  })

  jQuery('.galery_description .content_galery.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      992: {
        items: 2,
        center: true,
        nav: true
      }
    }
  })

  /*Menu tabs*/
  jQuery('section.page_tabs .content nav.nav_tabs ul.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    autoHeight: false,
    responsiveClass: true,
    responsive: {
      768: {
        items: 3,
        nav: false,
        dots: false,
        autoHeight: true,
        mouseDrag: false,
        touchDrag: false
      }
    }
  })

  var owlpagetabs = jQuery('section.page_tabs .content nav.nav_tabs .owl-carousel');
  owlpagetabs.on('changed.owl.carousel', function (event) {

    setTimeout(function () {
      jQuery("section.page_tabs .content nav.nav_tabs .owl-carousel .owl-item.active li").trigger("click");
    }, 100);

  })

  /*Moon family*/
  jQuery('section.family_moon_palace .owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      992: {
        items: 2,
        nav: false,
        dots: false,
        mouseDrag: false
      }
    }
  })

  /*info contact slider*/
  jQuery('section.palace-resort-info-contact .content .owl-carousel').owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      1200: {
        items: 5,
        nav: true
      },
      992: {
        items: 4,
        nav: true
      },
      767: {
        items: 2,
        nav: true
      }, 0: {
        items: 1,
        nav: true
      }
    }
  })

  /*triptico brand*/
  jQuery('section.triptico_moon_brand .owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      992: {
        items: 3,
        nav: false,
        margin: 5,
        dots: false,
        mouseDrag: false
      }
    }
  })

  /*triptico palace resort thinks ajustado*/
  jQuery('section.block-triptonico-things .content.owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 8000,
    navContainer: '.custom-nav',
    responsive: {
      1200: {
        items: 3,
        nav: true,
        margin: 0,
        dots: false,
        mouseDrag: false
      },
      992: {
        items: 2,
        nav: false,
        dots: true,
      }
    }
  })


  /*palace resort triptico slider*/
  jQuery('section.palace-resort-triptico-slider .content.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      992: {
        items: 3,
        nav: true,
        margin: 0,
        dots: false,
        mouseDrag: false
      },
      767: {
        items: 1,
        nav: false,
        dots: true,
      }
    }
  })


  /*Two images slider*/
  jQuery('section.block_two_images_slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      992: {
        items: 2,
        nav: true,
        dots: false,
        mouseDrag: false
      }
    }
  })

  /*dining_galery_two_vr*/
  jQuery('section.dining_galery_two_vr .owl-carousel').owlCarousel({
    items: 1,
    loop: false,
    margin: 0,
    nav: false,
    dots: true,
    responsiveClass: true,
    autoHeight: true,
    responsive: {
      992: {
        items: 2,
        nav: false,
        dots: false,
        mouseDrag: false
      }
    }
  })

  /*Modulo multiple*/
  if (screen_width > 992) {

    if (jQuery("section.module_multiple").find("#carousel-custom-dots").css("display") == "block") {

      jQuery('section.module_multiple .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoHeight: true,
        dotsContainer: '#carousel-custom-dots',
        responsiveClass: true,
        responsive: {
          992: {
            nav: true,
            mouseDrag: false
          }
        }
      })

      jQuery('section.module_multiple .owl-dot').click(function () {
        owl_multiple.trigger('to.owl.carousel', [jQuery(this).index(), 300]);
      });

    } else {
      //console.log("No hay dots personalizados")

      jQuery('section.module_multiple .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
          992: {
            nav: true,
            dots: false,
            mouseDrag: false
          }
        }
      })
    }

  } else {
    //console.log("version mobile")
    jQuery('section.module_multiple .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      autoHeight: true,
      responsiveClass: true,
      responsive: {
        992: {
          nav: true,
          dots: false,
          mouseDrag: false
        }
      }
    })

  }


  /*Tripadvisor*/
  jQuery("section.tripadvisor .content .comentary").addClass("owl-carousel");
  jQuery('section.tripadvisor .content .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false
  })

  /*Activities list*/
  jQuery('section.activities_list .content .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      992: {
        nav: true,
        dots: true,
        mouseDrag: false
      }
    }
  })

  /*alider accomodation rooms list*/
  jQuery('section.accommodations_list .content .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      992: {
        nav: true,
        dots: true,
        mouseDrag: false
      }
    }
  })

  /*offers list*/
  jQuery('.offers_details .content .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      992: {
        nav: true,
        dots: true,
        mouseDrag: false
      }
    }
  })


  /*Slider Accommodations*/
  if (screen_width <= 992) {
    slider_accommodations();
    //slider_destination_list();
    slider_dining_details();
    galery_six_images();
    slider_tabs_menu_brad();

    jQuery("section.palace-resort-sextuple .content").addClass("owl-carousel");
    jQuery('section.palace-resort-sextuple .content.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      responsiveClass: true,
      autoHeight: true,
      responsive: {
        992: {
          items: 3,
          nav: true,
          margin: 0,
          dots: false,
          mouseDrag: false
        },
        767: {
          items: 1,
          nav: false,
          dots: true,
        }
      }
    })

  }

  /*Slider galery three images*/
  if (screen_width <= 540) {
    slider_galery_three_images();
  }

  lbox_video_siximages()
  lbox_tour_accommodations_list()
  lbox_virtual_tours_dining_two()
  lbox_accommodations_virtual_tour()
  accommodations_virtual_tour_home()
  btns_languages_menu()
  top_menu_hover()
  menu_phone_header()
  menu_news_header()
  galery_tabs()
  booking()
  funtions_resort_credit()
  jQuery("#origin").easyAutocomplete(optionsautocomplete);
  jQuery("#origin_mex").easyAutocomplete(optionsautocomplete);
  jQuery("#origin_r_mex_b").easyAutocomplete(optionsautocomplete);
  tabs_only_brand();
  slider_gallery_moon_brand_slider_copy();
  slider_gallery_moon_brand_big_deals();
  tabs_only_brand_gallery();


  /*Contador*/
  // if(time_conteo != undefined){
  //   jQuery('section.main_content_banner #clock').countdown(time_conteo, function(event) {
  //     jQuery(this).html(event.strftime(''
  //       + '<p>%D <span>Days</span></p>'
  //       + '<p>%H: <span>Hr</span></p>'
  //       + '<p>%M: <span>Min</span></p>'
  //       + '<p>%S <span>Sec</span></p>'
  //   	));
  //   });
  //}


  /*Tabs Menu footer*/
  if (screen_width > 992) {
    jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer ul.header-tabs li").click(function () {
      jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer ul.header-tabs li").removeClass("active");
      jQuery(this).addClass("active");
      var cual = jQuery(this).attr("data-ref");
      jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs > div").removeClass("active")
      jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs").find("[data-ref='" + cual + "']").addClass("active");
    })
  } else {
    jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer ul.header-tabs li").click(function () {
      jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer ul.header-tabs li").removeClass("activo");
      jQuery(this).addClass("activo");
      var cual = jQuery(this).attr("data-ref");
      jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs > div").slideUp(300)
      if (jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs").find("[data-ref='" + cual + "']").css("display") == "block") {
        jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs").find("[data-ref='" + cual + "']").slideUp(300);
        jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer ul.header-tabs li").removeClass("activo");
      } else {
        jQuery("footer .content_footer .content_int_footer .col_footer1 .menu-footer .body-tabs").find("[data-ref='" + cual + "']").slideDown(300);
      }
    })
  }

  if (screen_width < 768) {
    slider_tabs_galery()
    slider_gallery_moon_brand_three_images_copy()
  }
  if (screen_width <= 1200) {
    //jQuery("header nav.navbar-fixed-top .container .navbar-collapsed").height(height_menu_mobile);
    //jQuery(".nav-phone-expanded").height(height_menu_mobile);
    //jQuery(".nav-news-expanded").height(height_menu_mobile);
    menu_slider_our_resort();

    jQuery("section.palace-resort-restaurant-new-module .content").addClass("owl-carousel");
    jQuery('section.palace-resort-restaurant-new-module .owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true
    })
  }

  /*identify ajax*/
  jQuery(document).ajaxSuccess(function (event, xhr, settings) {
    function_checkbox();

    if (jQuery('.landing-2-1').length != 0) {
      functionslp2x1();
    }

  });

  perfilador();

  jQuery("section.perfilador fieldset.perfilador #btn_form_perfilador").click(function () {
    return form_val_perfilador();
  });


  jQuery('section.destination_list.slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    navContainer: '.custom-nav',
    responsive: {
      992: {
        nav: true,
        dots: false,
      }
    }
  })
  jQuery('section.palace-resort-interleaved-module.slider .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoHeight: true,
    dots: true,
    responsive: {
      992: {
        nav: true,
        //dots:false,
      }
    }
  })
  jQuery('.grupo-campos-formulario').hide();
  jQuery(".boton-grupo-campos-formulario h3 strong").on("click", function () {
    jQuery('.grupo-campos-formulario').toggle();
  });
  /*Función para recargar el home de la sección discoveries*/

  /* if (jQuery('.sr-only.home-discoveries').length != 0) {

    if (localStorage.getItem('item') == undefined) {
      var item = 0;
      localStorage.setItem('item', item);
      location.reload();
    } else {
      localStorage.removeItem('item');
    }
  }*/

});
window.onload = function () {

  setTimeout(function () {
    jQuery('.main_content_banner .video').on('mouseleave', function (e) {

      if (jQuery(this).parent().hasClass('active') == true) {
        if (jQuery('volumeVideo:hover').length === 0 && jQuery('.main_content_banner .owl-prev:hover').length === 0 && jQuery('.main_content_banner .owl-next:hover').length === 0) {
          jQuery('section.main_content_banner .owl-carousel').trigger('next.owl.carousel');
          jQuery('section.main_content_banner .owl-carousel').trigger('play.owl.autoplay');

          if (jQuery(this).attr('data-platform') == 'vimeo') {
            player = new Vimeo.Player(jQuery(this).find('iframe'));
            jQuery(this).find('.volumeVideo').removeClass('activado');
            jQuery(this).removeClass('on');
            player.setVolume(0);
          } else {
            jQuery(this).find('.volumeVideo').removeClass('activado');
            jQuery(this).removeClass('on');
            postMessage(jQuery(this).find('iframe').attr('id'), 'mute');
          }


        }
      } else {
        jQuery('section.main_content_banner .owl-carousel').trigger('play.owl.autoplay');
      }

    })

    jQuery('.main_content_banner .video').on('mouseover', function (e) {
      jQuery('section.main_content_banner .owl-carousel').trigger('stop.owl.autoplay');
    })
  }, 500)
  /*Evento over stop slider*/


  jQuery('.form-box input:checkbox').each(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass('checked');
    }
  });


  jQuery('.form .block-form input:checkbox').each(function () {
    if (jQuery(this).prop('checked')) {
      jQuery(this).parent().addClass('checked');
    }
  });

  if (jQuery('.big-deals-join-us').length != 0) {
    jQuery(".footer_legal").addClass('legal-bottom');
    jQuery('.big-deals-join-us').addClass('bottom');
  }


  if (jQuery(window).width() > 540) {

    if (jQuery('.main_content_banner').length != 0) {
      var videos = jQuery('.main_content_banner .content').attr('data-video');

      if (videos != "" && videos != undefined) {
        videos = videos.split(",");

        var idxOwlemove = 0;
        jQuery('section.main_content_banner .owl-carousel .owl-item').each(function (indexItem, val) {
          if (jQuery(this).hasClass('cloned') != true) {
            if (jQuery(this).find('.picture').hasClass('videoposter') == true) {
              owlCarouselBanner.trigger('remove.owl.carousel', idxOwlemove);
            }
            idxOwlemove = idxOwlemove + 1;
          }
        });

        jQuery.each(videos, function (i, v) {
          var splitstring = v.split("-");
          if (v.indexOf('vimeo') > -1) {
            var platform = 'vimeo';
            var parameters = '?autoplay=1&controls=0&title=0&byline=0&portrait=0&muted=1&loop=1';
            var script = 'https://player.vimeo.com/api/player.js';
          } else {
            var platform = 'youtube';
            var onlyVideo = true;
            jQuery('section.main_content_banner .owl-carousel .owl-item').each(function () {
              if (jQuery(this).find('.picture').hasClass('videoposter') == false) {
                onlyVideo = false;
              }
            })

            if (onlyVideo == false) {
              var parameters = '?&autoplay=0&rel=0&loop=1&playlist=quHpgyBr4GE&showinfo=0&controls=1&enablejsapi=1';
            } else {
              var parameters = '?&autoplay=1&mute=1&rel=0&loop=1&playlist=quHpgyBr4GE&showinfo=0&controls=1&enablejsapi=1';
            }
            var script = 'https://www.youtube.com/iframe_api';
          }

          owlCarouselBanner.trigger('add.owl.carousel', ['<article class="video" data-platform="' + platform + '"><div class="volumeVideo"></div><iframe title="video" src="' + jQuery.trim(splitstring[0]) + parameters + '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <script src="' + script + '"></script></article>']);

        })

        owlCarouselBanner.trigger('refresh.owl.carousel');
        centravideo();
        addIdIframe();
      }
    }
  }
}

jQuery(window).bind("load", function () {


  if (jQuery('#iframe-bro').length != 0) {
    pdfHeigth();

    var urlpdf = jQuery('#iframe-bro').attr('data-iframe');

    var options = {
      pdfOpenParams: {page: '0', view: 'FitH', scrollbar: '0', nameddest: '1'}
    };

    PDFObject.embed(urlpdf, "#iframe-bro", options);
  }

  jQuery('.countdown-clock').each(function () {
    var $this = jQuery(this);
    var finalDate = jQuery(this).data('time');

    var cololp = ":";
    var colon = (jQuery(window).width() < 540) ? "" : ":";
    if ($this.parents().hasClass('landing-hot-deals')) {
      cololp = "";
      colon = "";
    }

    var days = 'Días';
    var hr = 'Hrs';
    var min = 'Mins';
    var seg = 'Seg';
    if (language_site == 'en') {
      days = 'Days';
      hr = 'Hrs';
      min = 'Mins';
      seg = 'Secs';
    } else if (language_site == 'pt') {
      days = 'Dias';
      hr = 'Hrs';
      min = 'Mins';
      seg = 'Seg';
    }

    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime(''
        + '<p><strong class="box">%D </strong> <span>' + days + '</span></p>'
        + '<p><strong class="box">%H' + cololp + '</strong><span>' + hr + '</span></p>'
        + '<p><strong class="box">%M' + colon + '</strong><span>' + min + '</span></p>'
        + '<p><strong class="box">%S </strong><span>' + seg + '</span></p>'
      ));
    });
  });

  jQuery(".galery_description .content_galery.owl-carousel").owlCarousel('destroy');
  jQuery('.galery_description .content_galery.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      992: {
        items: 2,
        center: true,
        nav: true
      }
    }
  })


  /*Main Slider*/
  //console.log("load") //SE COMENTA MIENTRAS
  /*jQuery('section.main_content_banner .owl-carousel').owlCarousel('destroy');
        jQuery('section.main_content_banner .owl-carousel').owlCarousel({
            loop:true,
            dots:true,
            nav:false,
            animateOut: 'fadeOut',
            autoHeight:true,
            autoplay:true,
            autoplayTimeout: 10000,
            items: 1,
            responsiveClass:true,
            responsive:{
                540:{
                    dots:false,
                    nav:true
                }
            }
        })

        if (jQuery("section.main_content_banner .owl-stage .owl-item").length > 5){
            jQuery("section.main_content_banner .owl-dots").hide()
        }*/

  //centravideo();

  if (screen_width > 992) {
    if (jQuery('.main_content_banner').length == 0 && jQuery('.banner').length == 0) {

      jQuery('nav.navbar-fixed-top').addClass('scroll');
      jQuery('html').addClass('none-main');
      jQuery("button#btn-book-now-mobile").addClass("min");
      jQuery("section.booking").addClass("min");
      jQuery("section.booking").css("top", 80);
      jQuery("button#btn-book-now-mobile").css("top", 80);

      jQuery("button#btn-book-now-mobile").click(function () {
        jQuery("section.booking.min").animate({
          right: '0',
        }, 500);

        jQuery("section.booking").css("top", 80);
        jQuery(this).css("top", 0);
        jQuery("section.booking").css("display", "block");

        close_booking();

      })

    } else {
      top_booking();
      booking_scroll();
      booking_posicion_initial();
    }
    constructornicescrollbook1();
    constructornicescrollbook_mex();
    top_menu_hover();
  }

  if (jQuery(window).width() <= 992) {

    jQuery("section.booking").addClass("mobile");

    jQuery("button#btn-book-now-mobile").click(function () {
      jQuery("section.booking.mobile").slideDown(300)
      jQuery(".tagove-livechat-widget.mobile-frame").fadeOut(300);
    })

    jQuery("section.booking.mobile .close_h").click(function () {
      jQuery("section.booking.mobile").slideUp(300)
      jQuery(".tagove-livechat-widget.mobile-frame").fadeIn(300);
    })

  }

  if (screen_width <= 992) {
    slider_palace_resort_gallery_dinning()
  }

  function_checkbox();
  menu_news_header()
  menu_phone_header()
  btns_languages_menu()
  acordeon_intervaled_module();

  jQuery("section.palace-resort-interleaved-module.type-actividad .content article").each(function (index) {
    var alt_boxcontent = jQuery(this).find(".copy .box_copys .detalle").height()
    var alt_content = jQuery(this).find(".copy .box_copys .detalle .box-detalle").height()
    if (alt_content <= alt_boxcontent) {
      jQuery(this).addClass("no_view_more")
    }
  });

  /*carrusel palace resort destinations*/
  jQuery('section.palace-resort-destinations-brand .content nav ul.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    dots: false,
    mouseDrag: false,
    autoWidth: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        autoWidth: false
      },
      768: {
        items: 2,
        nav: true,
        autoWidth: false
      },
      992: {
        items: 4,
        nav: true,
        autoWidth: false
      },
      1200: {
        items: 6,
        nav: true
      }
    }
  })

  var owlpalace_resort_destinations_brand = jQuery('section.palace-resort-destinations-brand .content nav ul.owl-carousel');
  owlpalace_resort_destinations_brand.on('changed.owl.carousel', function (event) {
    setTimeout(function () {
      jQuery("section.palace-resort-destinations-brand .content nav ul.owl-carousel .owl-item.active li").trigger("click");
    }, 100);

  })

  /*landing hotdeals*/
  jQuery('section.landings_hotdeal_slider .box_slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      992: {
        items: 2,
        nav: true
      }
    }
  });

});

window.onresize = function (event) {
  pdfHeigth();
  if (screen_width > 992) {
    top_booking();
    centravideo();
    menu_slider_our_resort();
  }

};
