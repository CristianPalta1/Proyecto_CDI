jQuery(document).ready(function (e) {
  //Sliders
  //sliderAdvertising
  function sliderAdvertising() {
    jQuery(".s-sliderAdvertising").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          nav: false,
          stagePadding: 0,
        },
        540: {
          nav: true,
          stagePadding: 100,
        },
        769: {
          nav: true,
          stagePadding: 100,
        },
        1025: {
          nav: true,
          stagePadding: 100,
        },
      },
    });
  }

  //sliderBienestar
  function sliderBienestar() {
    jQuery(".s-sliderBienestar").owlCarousel({
      loop: true,
      dots: true,
      margin: 5,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderBienestarCultura
  function sliderBienestarCultura() {
    jQuery(".s-sliderBienestarCultura").owlCarousel({
      loop: true,
      margin: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        540: {
          items: 2,
          dots: true,
          nav: true,
        },
        769: {
          items: 3,
          dots: true,
          nav: true,
        },
        1025: {
          items: 3,
          dots: true,
          nav: true,
        },
      },
    });
  }

  //sliderBienestarDeporte
  function sliderBienestarDeporte() {
    jQuery(".s-sliderBienestarDeporte").owlCarousel({
      loop: true,
      dots: true,
      margin: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderBienestarsalud
  function sliderBienestarsalud() {
    jQuery(".s-sliderBienestarSalud").owlCarousel({
      loop: true,
      dots: true,
      margin: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //slideCampaign
  function sliderCampaign() {
    jQuery(".s-sliderCampaign").owlCarousel({
      loop: true,
      margin: 2,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          stagePadding: 0,
        },
        540: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 0,
        },
        769: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 150,
        },
        1025: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 150,
        },
      },
    });
  }

  //sliderCards_agreements
  function sliderCards_agreements() {
    jQuery(".agreements .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_articles
  function sliderCards_articles() {
    jQuery(".articles .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_articlesInvestigation
  function sliderCards_articlesInvestigation() {
    jQuery(".articlesInvestigation .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }
  //sliderCards_sliderDataBases
  function sliderCards_sliderDataBases() {
    jQuery(".slider-data-bases .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      items: 4,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
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
      },
    });
  }
  //checked action Label en Listado de bases de datos
  function setActiveSearch() {
    jQuery(".page-node-type-pagina-generica-biblioteca .views-element-container .views-exposed-form .form--inline .fieldgroup .form-radios .form-item .form-radio[checked='checked']").parent().find("label").addClass("active");
    jQuery(".page-node-type-pagina-generica-biblioteca .views-element-container .views-exposed-form .form--inline .fieldgroup .form-radios .form-item").each(function (index, value) {
      jQuery(this).addClass("item-" + index);
    });
    jQuery(".page-node-type-pagina-generica-biblioteca .views-element-container .views-exposed-form .form--inline .fieldgroup .form-radios").append(jQuery(".item-0"));

  }
  //set image-background en Listado de bases de datos
  function setImageBgLDB() {
    var srcImageBg = jQuery(".page-node-type-base-datos-biblioteca .views-element-container .views--db--demostration .slider-data-bases .container .view-footer .clearfix p img, .page-node-type-libros-electronicos-biblioteca .views-element-container .views--db--demostration .slider-data-bases .container .view-footer .clearfix p img, .page-node-type-pagina-generica-biblioteca .views-element-container .views--db--demostration .slider-data-bases .container .view-footer .clearfix p img").attr("src");
    jQuery(".page-node-type-pagina-generica-biblioteca .views-element-container .views--db--demostration .slider-data-bases").css("background-image", "url(" + srcImageBg + ")");

  }


  //sliderCard socialTeams
  function sliderSocialTeamsLandings() {
    var items = jQuery(".s-sliderCards-team-work .views-row").length;
    //validacion de medidas responsive
    console.log("funcion slider")
    if (jQuery(window).width() > 768) {
      if (items >= 5) {
        jQuery('.slider-ladings .s-sliderCards-team-work').owlCarousel({
          loop: true,
          dots: true,
          margin: 20,
          autoplay: true,
          items: 4,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
            "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            540: {
              items: 2,
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
          },
        })
      } else {
        jQuery('.page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work').css("display", "grid")
      }


    }
    if (jQuery(window).width() < 768) {

      jQuery('.page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work').css("display", "block")

      jQuery('.slider-ladings .s-sliderCards-team-work').owlCarousel({
        loop: true,
        dots: true,
        margin: 20,
        autoplay: true,
        items: 4,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          540: {
            items: 2,
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
        },
      })
    }

  }
  //sliderCard socialTeams
  function sliderSocialEstudentsLandings() {
    // var ite = 0;
    var items = jQuery(".s-sliderCards-social-students .views-row").length;
    //validacion de medidas responsive
    if (jQuery(window).width() > 768) {
      if (items >= 5) {
        jQuery('.slider-social-students .s-sliderCards-social-students').owlCarousel({
          loop: true,
          dots: true,
          margin: 20,
          autoplay: true,
          items: 4,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
            "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            540: {
              items: 2,
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
          },
        })
      } else {
        jQuery('.page-node-type-generic-page-landing .slider-social-students .container__social .s-sliderCards-social-students').css("display", "grid")
      }


    }
    if (jQuery(window).width() < 768) {

      jQuery('.page-node-type-generic-page-landing .slider-social-students .container__social .s-sliderCards-social-students').css("display", "block")

      jQuery('.slider-social-students .s-sliderCards-social-students').owlCarousel({
        loop: true,
        dots: true,
        margin: 20,
        autoplay: true,
        items: 4,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          540: {
            items: 2,
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
        },
      })
    }

  }

  //sliderCards_findOut
  function sliderCards_findOut() {
    jQuery(".find-out .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_news
  function sliderCards_news() {
    jQuery(".news .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_newsInvestigation
  function sliderCards_newsInvestigation() {
    jQuery(".newsInvestigation .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_pastoralNews
  function sliderCards_pastoralNews() {
    jQuery(".pastoralNews .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_programs
  function sliderCards_programs() {
    jQuery(".programs .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 2,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
        1440: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderCards_publications
  function sliderCards_publications() {
    jQuery(".publications .s-sliderCards").owlCarousel({
      loop: true,
      dots: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.3,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 4,
          nav: true,
        },
      },
    });
  }

  //sliderContactUs
  function sliderContactUs() {
    jQuery(".s-sliderContactUs").owlCarousel({
      loop: true,
      dots: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderContent
  function sliderContent() {
    var sync1 = jQuery(".s-galleryContent");
    var sync2 = jQuery(".s-galleryContent__nav");
    var thumbnailItemClass = ".owl-item";

    var slides = sync1
      .owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
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
            items: 1,
            nav: true,
          },
          1025: {
            items: 1,
            nav: true,
          },
        },
      })
      .on("changed.owl.carousel", syncPosition);

    function syncPosition(elem) {
      $owl_slider = jQuery(this).data("owl.carousel");
      var loop = $owl_slider.options.loop;

      if (loop) {
        var count = elem.item.count - 1;
        var current = Math.round(elem.item.index - elem.item.count / 2 - 0.5);
        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
      } else {
        var current = elem.item.index;
      }

      var owl_thumbnail = sync2.data("owl.carousel");
      var itemClass = "." + owl_thumbnail.options.itemClass;
      var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);
      thumbnailCurrentItem.addClass("synced");

      if (!thumbnailCurrentItem.hasClass("active")) {
        var duration = 300;
        sync2.trigger("to.owl.carousel", [current, duration, true]);
      }
    }

    var thumbs = sync2
      .owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 3,
            nav: false,
          },
          540: {
            items: 4,
            nav: true,
          },
          769: {
            items: 4,
            nav: true,
          },
          1025: {
            items: 4,
            nav: true,
          },
        },
        onInitialized: function (e) {
          var thumbnailCurrentItem = jQuery(e.target)
            .find(thumbnailItemClass)
            .eq(this._current);
          thumbnailCurrentItem.addClass("synced");
        },
      })
      .on("click", thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = jQuery(e.target).parents(thumbnailItemClass).index();
        sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
      })
      .on("changed.owl.carousel", function (elem) {
        var number = elem.item.index;
        $owl_slider = sync1.data("owl.carousel");
        $owl_slider.to(number, 100, true);
      });
  }

  //sliderEvents
  function sliderEvents() {
    var items = jQuery(".sliderEvents .content .c-content .sliderEvents__content .sliderEvents__right .s-sliderEvents li").length;
    // if (items){}
    if (jQuery(window).width() > 768) {
      if (items >= 4) {
        jQuery(".s-sliderEvents").owlCarousel({
          loop: true,
          margin: 20,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
            "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
          ],
          responsive: {
            0: {
              items: 1.75,
              dots: true,
              nav: false,
            },
            540: {
              items: 1.75,
              dots: false,
              nav: true,
            },
            769: {
              items: 2.75,
              dots: false,
              nav: true,
            },
            1025: {
              items: 3.75,
              dots: false,
              nav: true,
            },
          },
        });
      }
      else {
        jQuery(".s-sliderEvents").owlCarousel({
          loop: false,
          margin: 20,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
            "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
          ],
          responsive: {
            0: {
              items: 1.75,
              dots: true,
              nav: false,
            },
            540: {
              items: 1.75,
              dots: false,
              nav: true,
            },
            769: {
              items: 2.75,
              dots: false,
              nav: true,
            },
            1025: {
              items: 3.75,
              dots: false,
              nav: true,
            },
          },
        });
      }

    }
    if (jQuery(window).width() < 768) {

      jQuery(".s-sliderEvents").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
        responsive: {
          0: {
            items: 1.75,
            dots: true,
            nav: false,
          },
          540: {
            items: 1.75,
            dots: false,
            nav: true,
          },
          769: {
            items: 2.75,
            dots: false,
            nav: true,
          },
          1025: {
            items: 3.75,
            dots: false,
            nav: true,
          },
        },
      });
    }


  }

  //sliderExternalCalls
  function sliderExternalCalls() {
    jQuery(".s-sliderExternalCalls").owlCarousel({
      loop: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderFeatured
  function sliderFeatured() {
    jQuery(".s-sliderFeatured").owlCarousel({
      loop: true,
      dots: true,
      margin: 2,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderFeaturedProjects
  function sliderFeaturedProjects() {
    jQuery(".s-sliderFeaturedProjects").owlCarousel({
      loop: true,
      dots: true,
      margin: 5,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderFigures
  function sliderFigures() {
    jQuery(".s-sliderStatisticsFigure").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        540: {
          items: 2,
          dots: true,
        },
        769: {
          items: 0,
          dots: false,
        },
        1025: {
          items: 0,
          dots: false,
        },
      },
    });
  }

  //sliderGraduados
  function sliderGraduados() {
    jQuery(".s-sliderGraduados").owlCarousel({
      // loop: true,
      dots: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderHome
  function sliderHome() {
    jQuery(".s-sliderHome").owlCarousel({
      loop: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 1,
          nav: false,
        },
        769: {
          items: 1,
          nav: false,
        },
        1025: {
          items: 1,
          nav: true,
        },
      },
    });
    if (jQuery(".sliderHome").hasClass("generica-20")) {
      jQuery(".sliderHome.generica-20 .s-sliderHome").owlCarousel("destroy");
    }
  }

  //sliderHome2
  function sliderHome2() {
    jQuery(".s-sliderHome2").owlCarousel({
      loop: true,
      dots: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 1,
          nav: false,
        },
        769: {
          items: 1,
          nav: false,
        },
        1025: {
          items: 1,
          nav: true,
        },
      },
    });
  }

  //sliderIamUniminuto
  function sliderIamUniminuto() {
    jQuery(".s-sliderIamUniminuto").owlCarousel({
      loop: true,
      dots: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }
  //sliderLogos_investigation
  function sliderLogos_investigation() {
    jQuery(".s-sliderLogos_investigation").owlCarousel({
      items: 2,
      loop: false,
      dots: false,
      nav: false,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
    });
  }

  //sliderMoment1
  function sliderMoment1() {
    jQuery(".s-sliderMoment1").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 1.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 3.75,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderMoment2
  function sliderMoment2() {
    jQuery(".s-sliderMoment2").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 1.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 3.75,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderNE
  function sliderNE() {
    jQuery(".s-sliderNE").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          nav: false,
          stagePadding: 0,
        },
        540: {
          nav: true,
          stagePadding: 100,
        },
        769: {
          nav: true,
          stagePadding: 100,
        },
        1025: {
          nav: true,
          stagePadding: 100,
        },
      },
    });
  }

  //sliderOpinion
  function sliderOpinion() {
    jQuery(".s-sliderOpinion").owlCarousel({
      loop: true,
      dots: true,
      nav: false,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.3,
        },
        540: {
          items: 2,
        },
        769: {
          items: 3,
        },
        1025: {
          items: 4,
        },
      },
    });
  }

  //sliderOrg
  function sliderOrg() {
    jQuery(".s-sliderOrg").owlCarousel({
      loop: true,
      dots: false,
      nav: false,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 3,
        },
        540: {
          items: 6,
        },
        769: {
          items: 10,
        },
        1025: {
          items: 10,
        },
      },
    });
  }

  //sliderOurTem
  function sliderOurTeam() {
    jQuery(".s-sliderOurTeam").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          stagePadding: 45,
        },
        540: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
        769: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
        1025: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
      },
    });
  }

  //sliderOurTem
  function sliderGridSteps() {
    jQuery(
      ".js-view-dom-id-5abbe1163accac75a3656087a226a0da3c2343db0013d54fdc339bd8fa3fd75a .s-gridSteps"
    ).owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          stagePadding: 45,
        },
        540: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
        769: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
        1025: {
          items: 0,
          dots: false,
          nav: false,
          stagePadding: 0,
        },
      },
    });
  }

  //sliderPerson
  function sliderPerson() {
    jQuery(".s-sliderPerson").owlCarousel({
      loop: true,
      dots: false,
      margin: 25,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 3,
          nav: false,
          stagePadding: 45,
        },
        540: {
          items: 5,
          nav: true,
        },
        769: {
          items: 5,
          nav: true,
          stagePadding: 0,
        },
        1025: {
          items: 5,
          nav: true,
          stagePadding: 0,
        },
      },
    });

    //reset contentPerson
    jQuery(".contentPerson .contentPerson__content .contentPerson__item").css(
      "display",
      "none"
    );
    jQuery(".contentPerson .contentPerson__content .contentPerson__item")
      .first()
      .css("display", "block");

    //add data-position
    jQuery(".s-sliderPerson")
      .find(".s-sliderPerson__item")
      .each(function (index) {
        jQuery(this).attr("data-position", index + 1);
      });
    jQuery(".s-sliderPerson .s-sliderPerson__item").click(function (e) {
      //move data-position
      var speed = 300;
      jQuery(".s-sliderPerson").trigger("to.owl.carousel", [
        jQuery(this).data("position"),
        speed,
      ]);

      //display block, none - Info
      jQuery(".contentPerson .contentPerson__content .contentPerson__item").css(
        "display",
        "none"
      );
      jQuery(
        ".contentPerson .contentPerson__content .contentPerson__item[data-id='" +
        jQuery(this).data("id") +
        "']"
      )
        .css("display", "block")
        .hide()
        .fadeIn();
    });
  }

  //sliderProjection
  function sliderProjection() {
    jQuery(".s-sliderProjection").owlCarousel({
      loop: true,
      margin: 1,
      center: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
          stagePadding: 0,
        },
        540: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 0,
        },
        769: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 150,
        },
        1025: {
          items: 3,
          dots: true,
          nav: true,
          stagePadding: 150,
        },
      },
    });
  }

  //sliderRec
  function sliderRec() {
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

  //sliderRequirementsParticipate
  function sliderRequirementsParticipate() {
    jQuery(".s-sliderRequirementsParticipate").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 1.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 4,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderSteps
  function sliderSteps() {
    jQuery(".s-sliderSteps").owlCarousel({
      loop: true,
      dots: true,
      margin: 70,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: false,
        },
        769: {
          items: 3,
          nav: false,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderSubjectsCancellation
  function sliderSubjectsCancellation() {
    jQuery(".s-sliderSubjectsCancellation").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 3.75,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderTeacher
  function sliderTeacher() {
    jQuery(".s-sliderTeacher").owlCarousel({
      loop: true,
      dots: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        540: {
          items: 2,
          nav: true,
        },
        769: {
          items: 3,
          nav: true,
        },
        1025: {
          items: 3,
          nav: true,
        },
      },
    });
  }

  //sliderTeacherEvaluation
  function sliderTeacherEvaluation() {
    jQuery(".s-sliderTeacherEvaluation").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 3.75,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderTestimonials
  function sliderTestimonials() {
    jQuery(".s-sliderTestimonials").owlCarousel({
      loop: true,
      dots: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left'>&#xe802;</i>",
        "<i class='demo-icon icon-icon-arrow-right'>&#xe804;</i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true,
        },
        540: {
          items: 1,
          nav: true,
          dots: true,
        },
        769: {
          items: 1,
          nav: true,
          dots: false,
        },
        1025: {
          items: 1,
          nav: true,
          dots: false,
        },
      },
    });
  }

  //sliderGalleryThumbnail
  function sliderGalleryThumbnail() {
    jQuery("#image-gallery").lightSlider({
      item: 1,
      loop: true,
      auto: true,
      speed: 500,
      thumbItem: 5,
      gallery: true,
      slideMargin: 15,
      pauseOnHover: true,
      prevHtml: "<i class='demo-icon icon-icon-arrow-left'>&#xe802;</i>",
      nextHtml: "<i class='demo-icon icon-icon-arrow-right'>&#xe804;</i>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            thumbItem: 4,
            controls: true,
          },
        },
        {
          breakpoint: 540,
          settings: {
            thumbItem: 3,
            controls: true,
          },
        },
      ],
      onSliderLoad: function () {
        jQuery("#image-gallery").removeClass("cS-hidden");
      },
    });
  }

  //sliderGenericGallery
  function sliderGenericGallery() {
    jQuery("#generic-gallery").lightSlider({
      item: 1,
      loop: true,
      auto: true,
      speed: 5000,
      thumbItem: 9,
      gallery: true,
      controls: true,
      slideMargin: 15,
      onSliderLoad: function () {
        jQuery("#generic-gallery").removeClass("cS-hidden");
      },
    });
  }

  //sliderThumbnail
  function sliderThumbnail() {
    var sync1 = jQuery(".s-galleryThumbnail");
    var sync2 = jQuery(".s-galleryThumbnail__nav");
    var thumbnailItemClass = ".owl-item";

    var slides = sync1
      .owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
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
            items: 1,
            nav: true,
          },
          1025: {
            items: 1,
            nav: true,
          },
        },
      })
      .on("changed.owl.carousel", syncPosition);

    function syncPosition(elem) {
      $owl_slider = jQuery(this).data("owl.carousel");
      var loop = $owl_slider.options.loop;

      if (loop) {
        var count = elem.item.count - 1;
        var current = Math.round(elem.item.index - elem.item.count / 2 - 0.5);
        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
      } else {
        var current = elem.item.index;
      }

      var owl_thumbnail = sync2.data("owl.carousel");
      var itemClass = "." + owl_thumbnail.options.itemClass;
      var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);
      thumbnailCurrentItem.addClass("synced");

      if (!thumbnailCurrentItem.hasClass("active")) {
        var duration = 300;
        sync2.trigger("to.owl.carousel", [current, duration, true]);
      }
    }

    var thumbs = sync2
      .owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 3,
            nav: false,
          },
          540: {
            items: 4,
            nav: true,
          },
          769: {
            items: 4,
            nav: true,
          },
          1025: {
            items: 5,
            nav: true,
          },
        },
        onInitialized: function (e) {
          var thumbnailCurrentItem = jQuery(e.target)
            .find(thumbnailItemClass)
            .eq(this._current);
          thumbnailCurrentItem.addClass("synced");
        },
      })
      .on("click", thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = jQuery(e.target).parents(thumbnailItemClass).index();
        sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
      })
      .on("changed.owl.carousel", function (elem) {
        var number = elem.item.index;
        $owl_slider = sync1.data("owl.carousel");
        $owl_slider.to(number, 100, true);
      });
  }

  //sliderWeeks
  function sliderWeeks() {
    jQuery(".s-sliderWeeks").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 1.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 3.75,
          dots: false,
          nav: true,
        },
      },
    });
  }
  //sliderWhyParticipate
  function sliderWhyParticipate() {
    jQuery(".s-sliderWhyParticipate").owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsiveClass: true,
      navText: [
        "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
        "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
      ],
      responsive: {
        0: {
          items: 1.75,
          dots: true,
          nav: false,
        },
        540: {
          items: 1.75,
          dots: false,
          nav: true,
        },
        769: {
          items: 2.75,
          dots: false,
          nav: true,
        },
        1025: {
          items: 4,
          dots: false,
          nav: true,
        },
      },
    });
  }

  //sliderWorkTeam
  function sliderWorkTeam() {

    var items = jQuery(".sliderWorkTeam .content .c-content .sliderWorkTeam__content .view-content-podcast .s-sliderWorkTeam li").length;

    if (jQuery(window).width() > 992) {
      if (items >= 3) {
        jQuery(".sliderWorkTeam .content .c-content .sliderWorkTeam__content .view-content-podcast .s-sliderWorkTeam").css("display", "block")
        jQuery(".s-sliderWorkTeam").owlCarousel({
          loop: false,
          dots: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsiveClass: true,
          navText: [
            "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
            "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
          ],
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            540: {
              items: 2,
              nav: true,
            },
            769: {
              items: 3,
              nav: true,
            },
            1025: {
              items: 3,
              nav: true,
            },
          },
        });
      }
    }
    if (jQuery(window).width() < 992) {
      jQuery(".sliderWorkTeam .content .c-content .sliderWorkTeam__content .view-content-podcast .s-sliderWorkTeam").css("display", "block")
      jQuery(".s-sliderWorkTeam").owlCarousel({
        loop: false,
        dots: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navText: [
          "<i class='demo-icon icon-icon-arrow-left-slider'>&#xe803;</i>",
          "<i class='demo-icon icon-icon-arrow-right-slider'>&#xe805;</i>",
        ],
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          540: {
            items: 2,
            nav: true,
          },
          769: {
            items: 3,
            nav: true,
          },
          1025: {
            items: 3,
            nav: true,
          },
        },
      });
    }

  }

  //Call Functions
  sliderAdvertising();
  sliderBienestar();
  sliderBienestarCultura();
  sliderBienestarDeporte();
  sliderBienestarsalud();
  sliderCampaign();
  sliderCards_agreements();
  sliderCards_articles();
  sliderCards_articlesInvestigation();
  sliderCards_sliderDataBases();
  sliderSocialTeamsLandings()
  sliderSocialEstudentsLandings()
  setActiveSearch();
  setImageBgLDB();
  sliderCards_findOut();
  sliderCards_news();
  sliderCards_newsInvestigation();
  sliderCards_pastoralNews();
  sliderCards_programs();
  sliderCards_publications();
  sliderContactUs();
  sliderContent();
  sliderEvents();
  sliderExternalCalls();
  sliderFeatured();
  sliderFeaturedProjects();
  sliderGalleryThumbnail();
  sliderGenericGallery();
  sliderGraduados();
  sliderHome();
  sliderHome2();
  sliderIamUniminuto();
  sliderLogos_investigation();
  sliderMoment1();
  sliderMoment2();
  sliderNE();
  sliderOpinion();
  sliderOrg();
  sliderPerson();
  sliderProjection();
  sliderRec();
  sliderRequirementsParticipate();
  sliderSteps();
  sliderSubjectsCancellation();
  sliderTeacher();
  sliderTeacherEvaluation();
  sliderTestimonials();
  sliderThumbnail();
  sliderWeeks();
  sliderWhyParticipate();
  sliderWorkTeam();

  //540 "Si es mayor"
  if (jQuery(window).width() > 540) {
    jQuery(".s-sliderOurTeam").owlCarousel("destroy");
    jQuery(
      ".js-view-dom-id-5abbe1163accac75a3656087a226a0da3c2343db0013d54fdc339bd8fa3fd75a .s-gridSteps"
    ).owlCarousel("destroy");
  } else {
    sliderOurTeam();
    sliderGridSteps();
  }
  jQuery(window).resize(function (e) {
    if (jQuery(window).width() > 540) {
      jQuery(".s-sliderOurTeam").owlCarousel("destroy");
      jQuery(
        ".js-view-dom-id-5abbe1163accac75a3656087a226a0da3c2343db0013d54fdc339bd8fa3fd75a .s-gridSteps"
      ).owlCarousel("destroy");
    } else {
      sliderOurTeam();
      sliderGridSteps();
    }
  });

  //768 "Si es mayor o igual"
  if (jQuery(window).width() >= 768) {
    jQuery(".s-sliderFigures").owlCarousel("destroy");
  } else {
    sliderFigures();
  }
  jQuery(window).resize(function (e) {
    if (jQuery(window).width() >= 768) {
      jQuery(".s-sliderFigures").owlCarousel("destroy");
    } else {
      sliderFigures();
    }
  });
  var selectEducon = ''
  jQuery("select[name='nivel_formacion']").change(function () {
    selectEducon = jQuery(this).val()

  })
  if (selectEducon == '358') {
    // console.log("Holi")
    var scroll = jQuery(".gridOffers .content .c-content .gridOffers__content .row #educon").offset().top - 120
    jQuery("html, body").animate({ scrollTop: scroll }, "slow");

  }
  // Loader drupal Listado Bases de Datos
  Drupal.behaviors.myBehavior = {
    attach: function (context, settings) {
      sliderCards_sliderDataBases();
      setActiveSearch();
      setImageBgLDB();
      jQuery("select[name='nivel_formacion']").change(function () {
        selectEducon = jQuery(this).val()

      })
      if (selectEducon == '358') {
        console.log("Click Educon")

        var scroll = jQuery(".gridOffers .content .c-content .gridOffers__content .row #educon").offset().top - 120
        jQuery("html, body").animate({ scrollTop: scroll }, "slow");

      }
    }
  };

});
