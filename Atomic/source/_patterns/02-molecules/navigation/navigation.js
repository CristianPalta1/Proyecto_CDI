function handleOnScroll() {
	window.onscroll = function () {
		let header = window.scrollY;
		header != 0
			? document.querySelector("header").classList.add('fix')
			: document.querySelector("header").classList.remove('fix');
	};
}

function hideMenuClic() {
	if (jQuery(window).width() <= 768) {
		jQuery('body').on('click', '.dialog-off-canvas-main-canvas .fix .wrap .header-mobile #block-cdi-subtheme-main-menu ul li a', function () {
			jQuery(".dialog-off-canvas-main-canvas .fix .wrap .header-mobile #block-cdi-subtheme-main-menu").addClass("nav-visible")
			jQuery(".header-mobile #block-cdi-subtheme-main-menu").removeClass("nav-visible")
			jQuery("header .wrap .header-mobile .hamburger").removeClass("open")
		})
	}
}

function toggleBurger() {
	let headerCDI = jQuery("header .wrap .header-mobile")
	headerCDI.append("<div id='burger' class='hamburger'  aria-hidden='true'> <div class='menu-btn__burger' aria-hidden='true'></div></div>");
	const menuBtn = jQuery("#burger")
	let menuOpen = false;

	//animation menúMobile
	document.querySelector('#burger').onclick = function () {
		if (!menuOpen) {
			menuBtn.addClass('open');
			menuOpen = true;
			jQuery("header .wrap nav").addClass("nav-visible");
			jQuery("header .wrap ul.links").addClass("nav-visible")
			jQuery("main").addClass("contrast")
		} else {
			menuBtn.removeClass('open');
			menuOpen = false;
			jQuery("header .wrap nav").removeClass("nav-visible");
			jQuery("header .wrap ul.links").removeClass("nav-visible")
			jQuery("main").removeClass("contrast")
		}
		if (jQuery(window).width() < 1200) {
			jQuery("header .wrap .header-mobile nav").append(jQuery("ul.links"))
		}
	}

}

function activeClass() {
	jQuery("header .wrap .header-mobile nav ul li a").on('click', function (event) {
		event.preventDefault();
		jQuery("header .wrap .header-mobile nav ul li").removeClass("active");
		jQuery("header .wrap .header-mobile nav ul li").addClass("active")
	})
}

function scrollOverSections() {
	jQuery("header .wrap .header-mobile nav ul li").each(function () {
		jQuery(this).addClass("scroll");
	});
	jQuery(".our-services-home").attr("nuestros-servicios")
	$(".scroll").click(function (event) {
		event.preventDefault();
		$("html,body").animate({ scrollTop: $(this.hash).offset().top }, 500);
		$('.scroll li a').removeClass('selected');
		$(this).addClass('selected');
	});
}
