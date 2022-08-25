var $ = jQuery;

$(document).ready(function () {
  // SliderHome
  $(".s-sliderHome").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    margin: 15,
    padding: 0,
    responsive: {
      0: {
        dots: true,
        stagePadding: 0,
      },
      576: {
        nav: false,
        // stagePadding: 100
      },
      769: {
        nav: false,
      },
      992: {},
      1200: {
        nav: true,
      },
    },
  });

  // SliderServices
  $(".s-sliderServices").owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    margin: 50,
    padding: 0,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 2,
      },
      769: {
        items: 2,
      },
      1025: {
        nav: true,
      },
      1400: {
        items: 4,
        nav: true,
      },
    },
  });

  // SliderFormalities
  $(".s-sliderFormalities").owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    margin: 8,
    padding: 0,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 2,
        // stagePadding: 100
      },
      769: {
        items: 2,
      },
      1025: {
        nav: true,
      },
    },
  });

  // SliderNews
  $(".s-sliderNews").owlCarousel({
    items: 2,
    dots: true,
    padding: 0,
    responsive: {
      0: {
        items: 1,
        dots: true,
        stagePadding: 0,
      },
      576: {
        items: 1,
        // stagePadding: 100
      },
      769: {
        items: 2,
      },
      1025: {
        nav: true,
      },
    },
  });

  // SliderNewsRelation
  $(".s-sliderNewsRelation").owlCarousel({
    items: 3,
    loop: true,
    dots: true,
    nav: false,
    margin: 15,
    stagePadding: 10,
    responsive: {
      0: {
        items: 1,
        dots: true,
        center: true,
      },
      576: {
        items: 2,
      },
      769: {
        stagePadding: 10,
        items: 2,
      },
      1200: {
        stagePadding: 10,
        items: 3,
        nav: true,
      },
    },
  });

  // SliderNewsHome
  $(".s-sliderNewsHome").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: false,
    margin: 15,
    stagePadding: 5,
    responsive: {
      0: {
        items: 1,
        dots: true,
        center: true,
      },
      576: {
        items: 1,
      },
      769: {
        items: 2,
      },
      1200: {
        items: 2,
        nav: true,
      },
    },
  });

  // SliderNewsGallery
  if ($(".page-node-type-news .content__detail__news__gallery").length) {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    var syncedSecondary = true;

    bigimage
      .owlCarousel({
        items: 1,
        slideSpeed: 4000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
      })
      .on("changed.owl.carousel", syncPosition);

    thumbs
      .on("initialized.owl.carousel", function () {
        thumbs.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: 6,
        dots: true,
        nav: false,
        margin: 15,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsive: {
          0: {
            items: 2,
          },
          375: {
            items: 3,
          },
          576: {
            items: 4,
          },
          769: {
            items: 4,
          },
          1200: {
            items: 5,
            nav: true,
            dots: false,
          },
        },
      })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if loop is set to false, then you have to uncomment the next line
      //var current = el.item.index;

      //to disable loop, comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs.find(".owl-item.active").first().index();
      var end = thumbs.find(".owl-item.active").last().index();

      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }

    thumbs.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  }
});
