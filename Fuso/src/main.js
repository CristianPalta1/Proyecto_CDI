import "./scss/styles.scss";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

function mainCarousel() {
    jQuery('.card-container-carousel').owlCarousel({
        loop: false,
        items: 3,
        responsiveClass: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
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


$(document).ready(function () {
    console.log("Ready")
    mainCarousel();

    $('.faq h3').click(function () {
        var current = $(this).parent();
        console.log(current)
        var isActive = current.hasClass('active');
        $('.faq .answer').slideUp();
        $('.faq').removeClass('active');

        if (!isActive) {
            current.addClass('active');
            current.find('.answer').slideDown();
        }
    });

    $('nav a').click(function () {
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });


    hbspt.forms.create({
        region: "na1",
        portalId: "3942150",
        formId: "19407fdc-ad43-4164-aa88-9593e053b731",
        target: "#hubspot-form"
    });



    $('.navbar-burger').click(function () {
        console.log("click")
        $(this).toggleClass('active');
        $('.navbar-menu').toggleClass('active');
    });

    $("#openModal").on("click", function () {
        $(".modal").fadeIn();
    });

    // Cerrar modal al hacer clic en la "X" de cierre
    $(".close").on("click", function () {
        $(".modal").fadeOut();
    });

    var $navbarLinks = $("nav ul li a");

    // Manejador de eventos para hacer clic en los enlaces del navbar
    $navbarLinks.on("click", function (event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();

        // Obtiene el ID del elemento asociado al enlace
        var target = $(this).attr("href");

        // Realiza la animación de desplazamiento suave hacia el elemento objetivo
        $("html, body").animate({
            scrollTop: $(target).offset().top - 100
        }, 1000);
    });
})
