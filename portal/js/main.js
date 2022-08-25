//const { mapSources } = require("gulp-sourcemaps");



/** INICIO FUNCIÓN CONVERTIR HEXADEXIMAL EN RGB LANDING PAGE**/
function hexToRgbAA(color_1, opacity_color_1) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_1)) {
		c = color_1.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_1 + ')';
	}
	throw new Error('Bad Hex');
}

function hexToRgbAB(color_2, opacity_color_2) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_2)) {
		c = color_2.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_2 + ')';
	}
	throw new Error('Bad Hex');
}

function hexToRgbPersonalSocialStudents1(color_pf1, opacity_color_pf1) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_pf1)) {
		c = color_pf1.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_pf1 + ')';
	}
	throw new Error('Bad Hex');
}


function hexToRgbPersonalSocialStudents2(color_pf2, opacity_color_pf2) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_pf2)) {
		c = color_pf2.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_pf2 + ')';
	}
	throw new Error('Bad Hex');
}

/** FIN FUNCIÓN CONVERTIR HEXADEXIMAL EN RGB LANDING PAGE**/


/** INICIO FUNCIÓN CONVERTIR HEXADEXIMAL EN RGB GENERICA BLOQUE 31**/

function hexToRgbAABloque31Generica(color_1, opacity_color_1) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_1)) {
		c = color_1.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_1 + ')';
	}
	throw new Error('Bad Hex');
}

function hexToRgbABBloque31Generica(color_2, opacity_color_2) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_2)) {
		c = color_2.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_2 + ')';
	}
	throw new Error('Bad Hex');
}
function hexToRgbPersonalSocialStudents1Generica(color_pf1, opacity_color_pf1) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_pf1)) {
		c = color_pf1.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_pf1 + ')';
	}
	throw new Error('Bad Hex');
}


function hexToRgbPersonalSocialStudents2Generica(color_pf2, opacity_color_pf2) {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color_pf2)) {
		c = color_pf2.substring(1).split('');
		if (c.length == 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + opacity_color_pf2 + ')';
	}
	throw new Error('Bad Hex');
}

/** FIN FUNCIÓN CONVERTIR HEXADEXIMAL EN RGB GENERICA BLOQUE 31 **/


jQuery(document).ready(function (e) {

	/** INICIO FUNCIÓN MENÚ MOBILE LANDING PAGE**/

	jQuery("body").on("click", ".second-header .content-menu .icon-mobile .icon-burger", function () {

		jQuery(".second-header .content-menu .main-menu").addClass('show-mobile-menu')
		jQuery('.second-header .content-menu .main-menu').hasClass('show-mobile-menu') && jQuery('.second-header .main-header').css("display", "none")
		jQuery('.second-header .content-menu .main-menu').hasClass('show-mobile-menu') && jQuery('.second-header .content-menu .icon-mobile .icon-burger').css("display", "none")
	});


	jQuery("body").on("click", ".second-header .content-menu .close-menu-mobile span", function () {

		jQuery(".second-header .content-menu .main-menu").removeClass('show-mobile-menu');
		jQuery('.second-header .content-menu .main-menu').hasClass('main-menu') && jQuery('.second-header .main-header').css("display", "block")
		jQuery('.second-header .content-menu .main-menu').hasClass('main-menu') && jQuery('.second-header .content-menu .icon-mobile .icon-burger').css("display", "block")
	});

	jQuery('body').hasClass('page-node-type-generic-page-landing') && jQuery('header .header').css("display", "none")
	jQuery('body').hasClass('page-node-type-generic-page-landing') && jQuery('.region.region-breadcrumb').css("display", "none")
	jQuery('body').hasClass('page-node-type-generic-page-landing') && jQuery('footer .region-footer').css("display", "none")

	/** FIN FUNCIÓN MENÚ MOBILE LANDING PAGE**/

	/** INICIO COLORES ADMINISTRABLES SECCIÓN MAPA **/

	/** INICIO COLORES TITLULOS ADMINISTRABLES SECCIÓN MAPA LANDING PAGE**/
	let colorTextCounterMap = jQuery(".page-node-type-generic-page-landing  .generic_svg_interactive .title_description .counter").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .counter").css("color", colorTextCounterMap)

	let colorTextTitleMap = jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .title-map").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .title-map").css("color", colorTextTitleMap)

	let colorTextsubTitleMap = jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .subtitle-map").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .subtitle-map").css("color", colorTextsubTitleMap)

	/** INICIO COLORES TITLULOS ADMINISTRABLES SECCIÓN MAPA LANDING PAGE**/

	/** INICIO COLORES TITLULOS ADMINISTRABLES SECCIÓN MAPA GENERICA**/
	let colorTextCounterMapGenericPage = jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .counter").attr("data_color")
	jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .counter").css("color", colorTextCounterMapGenericPage)

	let colorTextTitleMapGenericPage = jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .title-map").attr("data_color")
	jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .title-map").css("color", colorTextTitleMapGenericPage)

	let colorTextsubTitleMapGenericPage = jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .subtitle-map").attr("data_color")
	jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .subtitle-map").css("color", colorTextsubTitleMapGenericPage)
	/** FIN COLORES TITLULOS ADMINISTRABLES SECCIÓN MAPA GENERICA**/

	/** FIN COLORES TITLULOS ADMINISTRABLES SECCIÓN MAPA **/


	/** INICIO ANIMACIÓN CONTADOR MAPA**/

	/** INICIO ANIMACIÓN CONTADOR MAPA LANDING PAGE**/
	var bandera = false;
	let numberString = jQuery('.page-node-type-generic-page-landing .generic_svg_interactive .title_description .counter').text();
	let numberCovertedStringToNumber = Number(numberString)
	const objDom = jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .counter");

	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	}




	jQuery('.page-node-type-generic-page-landing .generic_svg_interactive').mouseover(function () {
		bandera = true
		if (bandera = true) {
			const objDom = document.querySelector(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .counter");
			animateValue(objDom, 0, numberCovertedStringToNumber, 5000);
		}
	})

	jQuery('.page-node-type-generic-page-landing .generic_svg_interactive').mouseout(function () {
		bandera = false
		if (bandera = false) {
			const objDom = document.querySelector(".page-node-type-generic-page-landing .generic_svg_interactive .title_description .counter");
			animateValue(objDom, 0, 0, 5000);
		}
	});


	/** FIN ANIMACIÓN CONTADOR MAPA LANDING PAGE**/


	/** INICIO ANIMACIÓN CONTADOR MAPA GENERICA**/

	let numberStringGenericPage = jQuery('.page-node-type-generic-page .generic_svg_interactive .title_description .counter').text();
	let numberCovertedStringToNumberGenericPage = Number(numberStringGenericPage)
	const objDomGenericPage = jQuery(".page-node-type-generic-page .generic_svg_interactive .title_description .counter");

	function animateValue(obj, start, end, duration) {
		let startTimestamp = null;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			obj.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};

		window.requestAnimationFrame(step);
	}


	jQuery('.page-node-type-generic-page .generic_svg_interactive').mouseover(function () {
		const objDomGenericPage = document.querySelector(".page-node-type-generic-page .generic_svg_interactive .title_description .counter");
		animateValue(objDomGenericPage, 0, numberCovertedStringToNumberGenericPage, 5000);

	})

	jQuery('.page-node-type-generic-page .generic_svg_interactive').mouseout(function () {
		const objDomGenericPage = document.querySelector(".page-node-type-generic-page .generic_svg_interactive .title_description .counter");
		animateValue(objDomGenericPage, 0, 0, 5000);
	});

	/** FIN ANIMACIÓN CONTADOR MAPA GENERICA**/

	/** FIN ANIMACIÓN CONTADOR MAPA**/

	/*******INICIO ANIMACIÓN BARRAS MAPA ******/

	/*******INICIO ANIMACIÓN BARRAS MAPA LANDING PAGE******/
	let mapOptions = jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .item--dept ul li");

	mapOptions.each(function (i, value) {
		jQuery(this).css('background', '#E2E2E2');
	});

	jQuery('.page-node-type-generic-page-landing .generic_svg_interactive').mouseover(function () {
		mapOptions.each(function (i, value) {
			let color = jQuery(this).attr('color');
			let textBarColor = jQuery(this).attr('text_color');
			jQuery(this).css('background', `${color}`);
			jQuery(this).css('color', `${textBarColor}`);
		})
		jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .items.item--dept ul li").addClass('animation-show')// TOGGLE MOSTRAR Y OCULTAR BOTONES DE WHATSAPP Y CHAT 
	}).mouseout(function () {
		mapOptions.each(function (i, value) {
			jQuery(this).css('background', '#E2E2E2');
			jQuery(this).css('color', '#E2E2E2');
		})

		jQuery(".page-node-type-generic-page-landing .generic_svg_interactive .items.item--dept ul li").removeClass('animation-show')// TOGGLE MOSTRAR Y OCULTAR BOTONES DE WHATSAPP Y CHAT 
	});
	/*******FIN ANIMACIÓN BARRAS MAPA LNDING PAGE******/


	/*******INICIO ANIMACIÓN BARRAS MAPA GENERICA******/
	let mapOptionsGenericPage = jQuery(".page-node-type-generic-page .generic_svg_interactive .item--dept ul li");

	mapOptionsGenericPage.each(function (i, value) {
		jQuery(this).css('background', '#E2E2E2');
	});

	jQuery('.page-node-type-generic-page .generic_svg_interactive').mouseover(function () {
		mapOptionsGenericPage.each(function (i, value) {
			let colorGenericPage = jQuery(this).attr('color');
			let textBarColorGenericPage = jQuery(this).attr('text_color');
			jQuery(this).css('background', `${colorGenericPage}`);
			jQuery(this).css('color', `${textBarColorGenericPage}`);
		})
		jQuery(".page-node-type-generic-page .generic_svg_interactive .items.item--dept ul li").addClass('animation-show')// TOGGLE MOSTRAR Y OCULTAR BOTONES DE WHATSAPP Y CHAT 
	}).mouseout(function () {
		mapOptionsGenericPage.each(function (i, value) {
			jQuery(this).css('background', '#E2E2E2');
			jQuery(this).css('color', '#E2E2E2');
		})

		jQuery(".page-node-type-generic-page .generic_svg_interactive .items.item--dept ul li").removeClass('animation-show')// TOGGLE MOSTRAR Y OCULTAR BOTONES DE WHATSAPP Y CHAT 
	});
	/*******FIN ANIMACIÓN BARRAS MAPA GENERICA******/

	/*******FIN ANIMACIÓN BARRAS MAPA******/


	//FUnciones para validar boton de ir a home
	if (jQuery('#block-menusederectoria').length) {
		let url = window.location.href;
		sessionStorage.setItem('rectoria', url);
	}


	if (jQuery('.path-frontpage').length) {
		let url = window.location.href;
		sessionStorage.setItem('rectoria', url);
	}

	let url = sessionStorage.getItem('rectoria');
	jQuery('#irinicio a').attr('href', url)


	// INICIO FUNCIÓN COLOR MAPA
	jQuery(".item--dept li").each(function () {

		let color = jQuery(this).attr('color');

		let dept = jQuery(this).attr('class');

		jQuery(".svg_interactive ." + dept).css("fill", color);

	});
	// FIN FUNCIÓN COLOR MAPA

	/******* INICIO BLOQUE JS CHATBOT******* */

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

	/******* FIN BLOQUE JS CHATBOT******* */


	//ajaxComplete
	jQuery(document).ajaxComplete(function (e) {
		jQuery("select").niceSelect();
		//jQuery("[data-toggle='tooltip']").tooltip();

		setTimeout(function (e) {
			autoHeight();
			selectHeight();
		}, 100);
	});

	//add Active
	jQuery(".item-active a").click(function (e) {
		jQuery(".item-active a").removeClass("active");
		jQuery(this).addClass("active");
	});
	//anchors
	jQuery(".btn-anchor").click(function (e) {
		e.preventDefault();
		var strAncla = jQuery(this).attr("href");
		jQuery("body, html").stop().animate({
			scrollTop: jQuery(strAncla).offset().top - 120
		}, 1000);
	});
	//accordion Arrow
	jQuery("a.icon-icon-arrow").click(function (e) {
		if (jQuery(this).hasClass("rotate-180")) {
			jQuery(this).removeClass("rotate-180");
		}
		else {
			jQuery("a.icon-icon-arrow").removeClass("rotate-180");
			jQuery(this).addClass("rotate-180");
		}
	});
	//accordion searchMobile
	function accordionSearchMobile() {
		jQuery(".region-nav-search-menu nav h5").click(function (e) {
			jQuery(".region-nav-search-menu nav h5").removeClass("open");
			jQuery(".region-nav-search-menu nav .navbar-nav").hide();

			jQuery(this).addClass("open");
			jQuery(this).parent().find(".navbar-nav").slideToggle();
		});
	}
	//accordion footerDesktop
	function accordionFooter_Desktop() {
		jQuery(".footer__main a.icon-icon-arrow").removeAttr("data-toggle");
		jQuery(".footer__main .accordion").removeClass("panel-collapse collapse");
	}
	//accordion footerMobile
	function accordionFooter_Mobile() {
		jQuery(".footer__main a.icon-icon-arrow").attr("data-toggle", "collapse");
		jQuery(".footer__main .accordion").addClass("panel-collapse collapse");
	}

	//animation menúMobile
	jQuery("button.navbar-toggler").click(function (e) {
		jQuery(".searchCollapse__collapse").collapse("hide");
		jQuery("html, body").removeClass("search-mobile");
		jQuery("html, body").toggleClass("menu-mobile");
	});
	//animation searchMobile
	jQuery(".searchCollapse__item-a").click(function (e) {
		jQuery("html, body").removeClass("menu-mobile");
		jQuery("html, body").toggleClass("search-mobile");
	});

	// //add url in tag a - Vista Biblioteca
	jQuery(".button-search a").attr("href", "https://uniminuto.summon.serialssolutions.com/#!/search?ho=t&l=es-ES&q=")
	jQuery(".button-search a").attr("target", "_blank");
	jQuery(".page-node-type-pagina-generica-biblioteca .search-library .container-search-list ul li a").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
	});

	jQuery(".tab-content > .tab-pane").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
	});

	jQuery(".tab-content > .tab-pane form .input-button .button-search button a").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
	});

	jQuery(".tab-content > .tab-pane form .input-button .input-search").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
	});

	jQuery(".page-node-type-pagina-generica-biblioteca .search-library .container-search-list ul li a").click(function () {
		var cualClick = jQuery(this).attr("class");
		var urlSearch = jQuery('.tab-content > .' + cualClick + '').find("label#key-fields").attr("for");
		jQuery(".button-search a").attr("href", urlSearch);
	});

	jQuery(".page-node-type-pagina-generica-biblioteca .search-library form .input-button .button-search button a").click(function (e) {
		var urlSearch = ''
		var urlLibrary = ''
		var valInput = ''
		e.preventDefault();
		var cualClick = jQuery(this).attr("class");
		valInput = jQuery('.tab-content > .tab-pane form .input-button .' + cualClick + '').find("input#search-info").val();
		urlSearch = jQuery('.tab-content > .' + cualClick + '').find("label#key-fields").attr("for");

		urlLibrary = urlSearch + valInput.replace(" ", '%20');
		jQuery(".button-search a").attr("href", urlLibrary)
		window.open(urlLibrary);
	});

	addEventListener('keypress', function (e) {
		var urlLibrary = ''
		var urlSearch = ''
		var valInput = ''
		if (e.key === 'Enter') {

			urlSearch = jQuery(".page-node-type-pagina-generica-biblioteca .search-library .tab-content .tab-pane.active form label").attr('for');
			//console.log("item select", urlSearch)
			valInput = jQuery('.tab-content > .tab-pane.active form .input-button .input-search').find("input#search-info").val();
			//console.log("input valie", valInput)
			urlLibrary = urlSearch + valInput.replace(" ", '%20');
			window.open(urlLibrary);
		}
	})

	//Add background colo en elementos tabs vista servicios biblioteca
	var contentBg = jQuery('.page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .tab-content .views-field-field-background-color').map(function () {
		return jQuery(this).text();
	}).get();

	jQuery(".page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .nav-tabs li a").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
		jQuery(this).css("background-color", contentBg[index]);
	});

	//Add bg image en los tabs vista servicios biblioteca
	var urlBgImage = jQuery(' .page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .tab-content .views-field-field-icono .field-content img').map(function () {
		return jQuery(this).attr("src");;
	}).get()


	if (jQuery(".page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .nav-tabs").length) {
		jQuery(".page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .nav-tabs li a").each(function () {
			let div_images = '<div class="images__bg" ></div>';
			jQuery(this).append(div_images);
		});
		jQuery(".page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .nav-tabs li .images__bg").each(function (index, value) {
			jQuery(this).addClass("item-" + index);
			jQuery(this).css("background-image", "url(" + urlBgImage[index] + ")");
		});
	}

	// jQuery(".pager ul.pagination > li.page-item").each(function (index, value) {
	// 	jQuery(this).addClass("btn btn-light");
	// });
	// console.log("Holis")


	//Diferenciar items para el responsive
	jQuery(".page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .nav-tabs li").each(function (index, value) {
		jQuery(this).addClass("item-" + index);
	});

	//Agregar icons en menu acordeon vista servicios biblioteca
	jQuery('<div class="images__icons" ></div>').insertBefore(".accordionGeneric .container .content .c-content div .card .card-header h5 .btn-link.collapsed");
	var srcIcon = jQuery('.page-node-type-pagina-generica-biblioteca .library-services #views-bootstrap-tab-views-bootstrap-biblioteca-servicios-tab-servicios .tab-content .views-field-field-imagen .field-content img').attr("src");
	jQuery(".accordionGeneric .container .content .c-content div .card .card-header h5 .images__icons").css("background-image", "url(" + srcIcon + ")");
	// INICIO OLAS LANDING PAGE
	jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1 svg").attr("preserveAspectRatio", "none")
	jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2 svg").attr("preserveAspectRatio", "none")

	var colorW1 = jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1").attr("data_color");
	var colorW2 = jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2").attr("data_color");

	jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1 svg path").css("fill", colorW1);
	jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2 svg path").css("fill", colorW2);
	// let waver_images_1 = '<div class="waves__bg__1" > </div>';
	// let waver_images_2 = '<div class="waves__bg__2" > </div>';
	// jQuery(".view-id-generica_modulo_27 .banner .img-bg").append(waver_images_1, waver_images_2);

	// FIN OLAS LANDING PAGE




	// INICIO OLAS PÁGINA GENÉRICA
	jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1 svg").attr("preserveAspectRatio", "none")
	jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2 svg").attr("preserveAspectRatio", "none")

	var colorW1Generica = jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1").attr("data_color");
	var colorW2Generica = jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2").attr("data_color");

	jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__1 svg path").css("fill", colorW1Generica);
	jQuery(".page-node-type-generic-page .view-id-generica_modulo_27 .banner .img-bg #images-svg .waves__bg__2 svg path").css("fill", colorW2Generica);

	// let waver_images_1 = '<div class="waves__bg__1" > </div>';
	// let waver_images_2 = '<div class="waves__bg__2" > </div>';
	// jQuery(".view-id-generica_modulo_27 .banner .img-bg").append(waver_images_1, waver_images_2);

	// FIN OLAS PÁGINA GENÉRICA

	// let urlWave1 = jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner #images-svg #svg-right").attr("src")
	// let urlWave2 = jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner #images-svg #svg-left").attr("src")
	// //console.log(urlWave1)
	// jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg .waves__bg__1").css("background-image", "url(" + urlWave1 + ")")
	// jQuery(".page-node-type-generic-page-landing .view-id-generica_modulo_27 .banner .img-bg .waves__bg__2").css("background-image", "url(" + urlWave2 + ")")

	/******** INICIO SECCIÓN GENERAL VIDEO **********/
	/******** INICIO SECCIÓN GENERAL VIDEO LANDING PAGE **********/
	var titleVideoSection = jQuery(".page-node-type-generic-page-landing .container__general--video .views-row #video__landigs__general .info__section-video h2").attr("data_color")
	var descVideoSection = jQuery(".page-node-type-generic-page-landing .container__general--video .views-row #video__landigs__general .info__section-video .description_video").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .container__general--video .views-row #video__landigs__general .info__section-video h2").css("color", titleVideoSection)
	jQuery(".page-node-type-generic-page-landing .container__general--video .views-row #video__landigs__general .info__section-video .description_video p").css("color", descVideoSection)
	/******** FIN SECCIÓN GENERAL VIDEO LANDING PAGE **********/


	/******** INICIO SECCIÓN GENERAL VIDEO GENERICA**********/
	var titleVideoSectionGenerica = jQuery(".page-node-type-generic-page .container__general--video .views-row #video__landigs__general .info__section-video h2").attr("data_color")
	var descVideoSectionGenerica = jQuery(".page-node-type-generic-page .container__general--video .views-row #video__landigs__general .info__section-video .description_video").attr("data_color")
	jQuery(".page-node-type-generic-page .container__general--video .views-row #video__landigs__general .info__section-video h2").css("color", titleVideoSectionGenerica)
	jQuery(".page-node-type-generic-page .container__general--video .views-row #video__landigs__general .info__section-video .description_video p").css("color", descVideoSectionGenerica)
	/******** FIN SECCIÓN GENERAL VIDEO GENERICA **********/

	/******** FIN SECCIÓN GENERAL VIDEO **********/

	/******** INICIO SECCIÓN GENERAL FORMULARIO **********/

	/******** INICIO SECCIÓN GENERAL FORMULARIO LANDING PAGE**********/
	//Seccion colores para formulario
	var titleFormSection = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .container__text h2").attr("data_color")
	var descFormSection = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .container__text .description_webform").attr("data_color")
	var formSectionBg = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").attr("color_background")
	var formSectionTitle = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").attr("color_title")
	var formSectionDesc = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").attr("color_description")
	var formSectionBtn = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").attr("color_button_general")
	var formSectionBtnHv = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").attr("color_button_hv")

	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .container__text h2").css("color", titleFormSection)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .container__text .description_webform p").css("color", descFormSection)


	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .webform-section h3").css("color", formSectionTitle)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-descripcion p").css("color", formSectionDesc)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-nombres-y-apellidos label").css("color", formSectionDesc)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-correo-electronico label").css("color", formSectionDesc)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-telefono-de-contacto label").css("color", formSectionDesc)
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general").append("<style>.page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general::before{background-color:" + formSectionBg + "!important;}</style>");

	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-actions input").css("background-color", formSectionBtn)
	//hover btn formulario
	jQuery(".page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-actions input").hover(function () {
		jQuery(this).css("background-color", formSectionBtnHv)
	}, function () {
		jQuery(this).css("background-color", formSectionBtn)
	});

	//Prueba imagen landings
	///Seccion video en landings
	var bg_landings_video = jQuery(".container__general--video .background_video_landing picture img").attr("src")
	jQuery(".container__general--video").css("background-image", "url(" + bg_landings_video + ")");
	///Seccion formuñarop en landings
	var bg_landings_forms = jQuery(".container__general-form .background_video_landing picture img").attr("src")
	jQuery(".container__general-form").css("background-image", "url(" + bg_landings_forms + ")");
	//btns_agreement
	function btns_agreement() {
		//btn-closeC
		jQuery(".view-id-convenios_corporativos form.views-exposed-form").append(
			"<div class='btn-closeC'><i class='demo-icon icon-icon-close'>&#xe811;</i></div>"
		);
		//btn-filterC - Open
		jQuery(".view-id-convenios_corporativos .btn-filterC").click(function () {
			jQuery(".view-id-convenios_corporativos form.views-exposed-form").css("right", "0");
		});
		//btn-closeC - Close
		jQuery(".view-id-convenios_corporativos .btn-closeC").click(function () {
			jQuery(".view-id-convenios_corporativos form.views-exposed-form").css("right", "-1500px");
		});
	}

	var bgColorAfterVideo = jQuery(".page-node-type-generic-page-landing .container__general--video .views-row .background_video_landing").attr("data_color_bg")
	jQuery('.page-node-type-generic-page-landing .container__general--video .views-row #video__landigs__general').append("<style>#video__landigs__general::before{background-color:" + bgColorAfterVideo + "!important;}</style>");
	var bgColorAfterForm = jQuery(".page-node-type-generic-page-landing .container__general-form .views-row .background_video_landing").attr("data_color_bg")
	jQuery('.page-node-type-generic-page-landing .container__general-form .views-row #webform__landigs__general').append("<style>#webform__landigs__general::before{background-color:" + bgColorAfterForm + "!important;}</style>");
	/******** FIN SECCIÓN GENERAL FORMULARIO LANDING PAGE**********/

	/******** INICIO SECCIÓN GENERAL FORMULARIO GENERICA**********/

	//Seccion colores para formulario
	var titleFormSectionGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .container__text h2").attr("data_color")
	var descFormSectionGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .container__text .description_webform").attr("data_color")
	var formSectionBgGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").attr("color_background")
	var formSectionTitleGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").attr("color_title")
	var formSectionDescGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").attr("color_description")
	var formSectionBtnGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").attr("color_button_general")
	var formSectionBtnHvGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").attr("color_button_hv")

	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .container__text h2").css("color", titleFormSectionGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .container__text .description_webform p").css("color", descFormSectionGenerica)


	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .webform-section h3").css("color", formSectionTitleGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-descripcion p").css("color", formSectionDescGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-nombres-y-apellidos label").css("color", formSectionDescGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-correo-electronico label").css("color", formSectionDescGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form .form-item-telefono-de-contacto label").css("color", formSectionDescGenerica)
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general").append("<style>.page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general::before{background-color:" + formSectionBgGenerica + "!important;}</style>");

	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-actions input").css("background-color", formSectionBtnGenerica)
	//hover btn formulario
	jQuery(".page-node-type-generic-page .container__general-form .views-row #webform__landigs__general .form__general .webform-ajax-form-wrapper form #edit-actions input").hover(function () {
		jQuery(this).css("background-color", formSectionBtnHvGenerica)
	}, function () {
		jQuery(this).css("background-color", formSectionBtnGenerica)
	});

	//Prueba imagen landings
	///Seccion video en landings
	var bg_landings_videoGenerica = jQuery(".container__general--video .background_video_landing picture img").attr("src")
	jQuery(".container__general--video").css("background-image", "url(" + bg_landings_videoGenerica + ")");
	///Seccion formuñarop en landings
	var bg_landings_formsGenerica = jQuery(".container__general-form .background_video_landing picture img").attr("src")
	jQuery(".container__general-form").css("background-image", "url(" + bg_landings_formsGenerica + ")");
	//btns_agreement
	function btns_agreement() {
		//btn-closeC
		jQuery(".view-id-convenios_corporativos form.views-exposed-form").append(
			"<div class='btn-closeC'><i class='demo-icon icon-icon-close'>&#xe811;</i></div>"
		);
		//btn-filterC - Open
		jQuery(".view-id-convenios_corporativos .btn-filterC").click(function () {
			jQuery(".view-id-convenios_corporativos form.views-exposed-form").css("right", "0");
		});
		//btn-closeC - Close
		jQuery(".view-id-convenios_corporativos .btn-closeC").click(function () {
			jQuery(".view-id-convenios_corporativos form.views-exposed-form").css("right", "-1500px");
		});
	}

	var bgColorAfterVideoGenerica = jQuery(".page-node-type-generic-page .container__general--video .views-row .background_video_landing").attr("data_color_bg")
	jQuery('.page-node-type-generic-page .container__general--video .views-row #video__landigs__general').append("<style>#video__landigs__general::before{background-color:" + bgColorAfterVideoGenerica + "!important;}</style>");
	var bgColorAfterFormGenerica = jQuery(".page-node-type-generic-page .container__general-form .views-row .background_video_landing").attr("data_color_bg")
	jQuery('.page-node-type-generic-page .container__general-form .views-row #webform__landigs__general').append("<style>#webform__landigs__general::before{background-color:" + bgColorAfterFormGenerica + "!important;}</style>");
	/******** FIN SECCIÓN GENERAL FORMULARIO GENERICA **********/


	/******** FIN SECCIÓN GENERAL FORMULARIO **********/

	// COLORES SECCION PASOS

	var pasosTitleColor = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 h2").attr("color")
	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 h2").css("color", pasosTitleColor)

	var pasosDescriptionColor = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 p").attr("color")
	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 p").css("color", pasosDescriptionColor)

	var stepsfillNumberColorhv = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-number-card").attr("color_data")
	var stepsTitleColor = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").attr("color_data")
	var stepsTitleColorhv = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").attr("color_data")
	var buttonStepsWithoutHover = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn ").attr("color_data")
	var buttonStepsWithHover = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn ").attr("color_data_hover")

	// INICIALIZACIÓN DE ESTILOS PASOS

	jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-number-card p').css("-webkit-text-stroke", `1px ${stepsfillNumberColorhv}`)
	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row").append("<style>.views-row::after{background-color:" + stepsfillNumberColorhv + "!important;}</style>");
	jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3').css("color", `${stepsTitleColorhv}`)
	jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("color", `${buttonStepsWithoutHover}`)
	jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("border-color", `${buttonStepsWithoutHover}`)

	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row").each(function (i, value) {
		jQuery(this).attr("id", "card" + i + "")

	})

	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row").hover(function () {

		// CON HOVER
		jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter #' + jQuery(this).attr("id") + ' .container-number-card > p').css("color", stepsfillNumberColorhv)
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row").append("<style>.views-row::after{background-color:" + stepsfillNumberColorhv + "!important;}</style>");
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").css("color", stepsTitleColorhv)
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("background-color", `${buttonStepsWithHover}`)
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("color", buttonStepsWithoutHover)
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("border-color", buttonStepsWithHover)
	}, function () {

		// SIN HOVER
		jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter #' + jQuery(this).attr("id") + ' .container-number-card > p').css("color", "transparent")
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row ").css("background-color", "transparent")
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").css("color", stepsTitleColor)
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn  a").css("background-color", "transparent")
		jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a").css("color", buttonStepsWithoutHover)
		jQuery('.page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("border-color", `${buttonStepsWithoutHover}`)
	});

	var stepsTextdescription = jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description p").attr("color_data")
	jQuery(".page-node-type-generic-page-landing .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description p").css("color", stepsTextdescription)

	/************** COLORES SECCION PASOS GENERICA ******************** */
	// COLORES SECCION PASOS GENERICA
	var pasosTitleColorGenericPage = jQuery(".page-node-type-generic-page .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 h2").attr("color")
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 h2").css("color", pasosTitleColorGenericPage)
	var pasosDescriptionColorGenericPage = jQuery(".page-node-type-generic-page .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 p").attr("color")
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .container-title header .row .col-sm-12 p").css("color", pasosDescriptionColorGenericPage)
	var stepsfillNumberColorhvGenericPage = jQuery(".page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-number-card").attr("color_data")
	var stepsTitleColorGenericPage = jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").attr("color_data")
	var stepsTitleColorhvGenericPage = jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").attr("color_data")
	var buttonStepsWithoutHoverGenericPage = jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn ").attr("color_data")
	var buttonStepsWithHoverGenericPage = jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn ").attr("color_data_hover")
	jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-number-card p').css("-webkit-text-stroke", `1px ${stepsfillNumberColorhvGenericPage}`)
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row").append("<style>.views-row::after{background-color:" + stepsfillNumberColorhvGenericPage + "!important;}</style>");
	jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3').css("color", `${stepsTitleColorhvGenericPage}`)
	jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("color", `${buttonStepsWithoutHoverGenericPage}`)
	jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("border-color", `${buttonStepsWithoutHoverGenericPage}`)
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row").each(function (i, value) {
		jQuery(this).attr("id", "card" + i + "")
	})
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row").hover(function () {
		jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter #' + jQuery(this).attr("id") + ' .container-number-card > p').css("color", stepsfillNumberColorhvGenericPage)
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row").append("<style>.views-row::after{background-color:" + stepsfillNumberColorhvGenericPage + "!important;}</style>");
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").css("color", stepsTitleColorhvGenericPage)
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("background-color", `${buttonStepsWithHoverGenericPage}`)
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("color", buttonStepsWithoutHoverGenericPage)
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row:hover .container-btn a").css("border-color", buttonStepsWithHoverGenericPage)
	}, function () {
		jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter #' + jQuery(this).attr("id") + ' .container-number-card > p').css("color", "transparent")
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row ").css("background-color", "transparent")
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description h3").css("color", stepsTitleColorGenericPage)
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn  a").css("background-color", "transparent")
		jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a").css("color", buttonStepsWithoutHoverGenericPage)
		jQuery(' .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-btn a').css("border-color", `${buttonStepsWithoutHoverGenericPage}`)
	});
	var stepsTextdescriptionGenericPage = jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description p").attr("color_data")
	jQuery(" .page-node-type-generic-page .section-card-information .container-content-title-cards .grid-cards-containter .views-row .container-title-description p").css("color", stepsTextdescriptionGenericPage)

	/*************COLORES SECCION PASOS GENERICA**************** */

	// FIN COLORES SECCION PASOS 


	// INICIO BLOQUE 31 EQUIPO DE TRABAJO 

	/************* INICIO COLORES BLOQUE 31 EQUIPO DE TRABAJO LANDING PAGE**************** */

	// inicio título y subtitulo sección equipo de trabajo

	var teamWorkSectionTitle = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings header .title").attr("color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings header .title").css("color", teamWorkSectionTitle)

	var teamWorkSectionSubTitle = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings header .description__general").attr("color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings header .description__general").css("color", teamWorkSectionSubTitle)

	// fin título y subtitulo sección equipo de trabajo

	// inicio colores datos sección equipo de trabajo

	var teamWorkDataPersonColorTextName = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .name").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .name").css("color", teamWorkDataPersonColorTextName)

	var teamWorkDataPersonColorTextProfession = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .profession").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .profession").css("color", teamWorkDataPersonColorTextProfession)

	var teamWorkDataPersonColorTextDescription = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").css("color", teamWorkDataPersonColorTextDescription)


	var teamWorkDataPersonColorTextDescriptionParagraft = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description p").css("color", teamWorkDataPersonColorTextDescriptionParagraft)

	var teamWorkDataPersonColorTextLink = jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").attr("data_color")
	jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").hover(function () {
		// CON HOVER
		jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").css("color", "#004a93")
	}, function () {
		// SIN HOVER
		jQuery(".page-node-type-generic-page-landing .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").css("color", teamWorkDataPersonColorTextLink)
	});
	// fin colores datos sección equipo de trabajo

	/************* FIN COLORES SECCION PASOS LANDING PAGE**************** */


	/************* INICIO COLORES SECCION EQUIPO DE TRABAJO **************** */

	var degradedirection = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("direction")

	var degradeColor_1 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("color_1")

	var degradeColor_2 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("color_2")

	var dregradeOpacity_1 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("opacity_color_1")

	var dregradeOpacity_2 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("opacity_color_2")

	var degradePercent_1 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("percent_color_1")

	var degradePercent_2 = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("percent_color_2")


	if (jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").length) {
		var colorFinal1 = hexToRgbAA(degradeColor_1, dregradeOpacity_1)
		var colorFinal2 = hexToRgbAB(degradeColor_2, dregradeOpacity_2)
	}
	jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").css("background-image", `linear-gradient(${degradedirection}, ${colorFinal1} ${degradePercent_1} , ${colorFinal2} ${degradePercent_2} )`)

	/************* FIN COLORES BLOQUE 31 EQUIPO DE TRABAJO LANDING PAGE **************** */

	/************* INICIO COLORES BLOQUE 31 EQUIPO DE TRABAJO GENERICA **************** */

	var teamWorkSectionTitleGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings header .title").attr("color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings header .title").css("color", teamWorkSectionTitleGenerica)

	var teamWorkSectionSubTitleGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings header .description__general").attr("color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings header .description__general").css("color", teamWorkSectionSubTitleGenerica)

	var teamWorkDataPersonColorTextNameGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .name").attr("data_color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .name").css("color", teamWorkDataPersonColorTextNameGenerica)

	var teamWorkDataPersonColorTextProfessionGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .profession").attr("data_color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .profession").css("color", teamWorkDataPersonColorTextProfessionGenerica)

	var teamWorkDataPersonColorTextDescriptionGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").attr("data_color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").css("color", teamWorkDataPersonColorTextDescriptionGenerica)


	var teamWorkDataPersonColorTextDescriptionParagraftGenerica = jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description").attr("data_color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description .description p").css("color", teamWorkDataPersonColorTextDescriptionParagraftGenerica)

	var teamWorkDataPersonColorTextLinkGenerica = jQuery(".page-node-type-generic-page .slider .container__landings .s-sliderCards-team-work .views-row .student-description a").attr("data_color")
	jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").hover(function () {
		// CON HOVER
		jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").css("color", "#004a93")
	}, function () {
		// SIN HOVER
		jQuery(".page-node-type-generic-page .slider-ladings .container__landings .s-sliderCards-team-work .views-row .student-description a").css("color", teamWorkDataPersonColorTextLinkGenerica)
	});
	/************* FIN COLORES SECCION EQUIPO DE TRABAJO LANDING PAGE **************** */

	/************* INICIO COLOR DE FONDO SECCION EQUIPO DE TRABAJO GENERICA **************** */

	var degradedirectionGenerica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("direction")

	var degradeColor_1Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("color_1")

	var degradeColor_2Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("color_2")

	var dregradeOpacity_1Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("opacity_color_1")

	var dregradeOpacity_2Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("opacity_color_2")

	var degradePercent_1Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("percent_color_1")

	var degradePercent_2Generica = jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").attr("percent_color_2")


	if (jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").length) {
		var colorFinal1Generica = hexToRgbAABloque31Generica(degradeColor_1Generica, dregradeOpacity_1Generica)
		var colorFinal2Generica = hexToRgbABBloque31Generica(degradeColor_2Generica, dregradeOpacity_2Generica)
	}
	jQuery("section.sliderCards.slider-ladings.bg-image .bg-color").css("background-image", `linear-gradient(${degradedirectionGenerica}, ${colorFinal1Generica} ${degradePercent_1Generica} , ${colorFinal2Generica} ${degradePercent_2Generica} )`)

	/************* FIN COLOR DE FONDO SECCION EQUIPO DE TRABAJO GENERICA BLOQUE 31 **************** */

	/************* FIN COLOR DE FONDO SECCION EQUIPO DE TRABAJO BLOQUE 31 **************** */


	/************* INICIO COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 **************** */

	/************* INICIO COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 LANDING PAGE**************** */

	var titleSocialstudent = jQuery(".page-node-type-generic-page-landing .slider-social-students .container__social .title-description-information .title").attr("color")
	jQuery(".page-node-type-generic-page-landing .slider-social-students .container__social .title-description-information .title").css("color", titleSocialstudent)

	var descriptionGeneralSocialstudent = jQuery(".page-node-type-generic-page-landing .slider-social-students .container__social .title-description-information .description__general").attr("color")
	jQuery(".page-node-type-generic-page-landing .slider-social-students .container__social .title-description-information .description__general").css("color", descriptionGeneralSocialstudent)


	var degradeDirectionSocialStudents = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("direction")

	var degradeSocialStudentsColor_1 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("color_1")

	var degradeSocialStudentsColor_2 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("color_2")

	var dregradeSocialStudentsOpacity_1 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("opacity_color_1")

	var dregradeSocialStudentsOpacity_2 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("opacity_color_2")

	var degradeSocialStudentsPercent_1 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("percent_color_1")

	var degradeSocialStudentsPercent_2 = jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").attr("percent_color_2")


	if (jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").length) {
		var colordegradeSocialStudents1 = hexToRgbPersonalSocialStudents1(degradeSocialStudentsColor_1, dregradeSocialStudentsOpacity_1)
		var colordegradeSocialStudents2 = hexToRgbPersonalSocialStudents2(degradeSocialStudentsColor_2, dregradeSocialStudentsOpacity_2)
		jQuery(".page-node-type-generic-page-landing .slider-social-students .bg-color").css("background-image", `linear-gradient(${degradeDirectionSocialStudents}, ${colordegradeSocialStudents1} ${degradeSocialStudentsPercent_1} , ${colordegradeSocialStudents2} ${degradeSocialStudentsPercent_2} )`)

	}
	/************* FIN COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 LANDING PAGE**************** */


	/************* INICIO COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 GENERICA **************** */

	var titleSocialstudentGenerica = jQuery(".page-node-type-generic-page .slider-social-students .container__social .title-description-information .title").attr("color")
	jQuery(".page-node-type-generic-page .slider-social-students .container__social .title-description-information .title").css("color", titleSocialstudentGenerica)

	var descriptionGeneralSocialstudentGenerica = jQuery(".page-node-type-generic-page .slider-social-students .container__social .title-description-information .description__general").attr("color")
	jQuery(".page-node-type-generic-page .slider-social-students .container__social .title-description-information .description__general").css("color", descriptionGeneralSocialstudentGenerica)


	var degradeDirectionSocialStudentsGenerica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("direction")

	var degradeSocialStudentsColor_1Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("color_1")

	var degradeSocialStudentsColor_2Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("color_2")

	var dregradeSocialStudentsOpacity_1Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("opacity_color_1")

	var dregradeSocialStudentsOpacity_2Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("opacity_color_2")

	var degradeSocialStudentsPercent_1Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("percent_color_1")

	var degradeSocialStudentsPercent_2Generica = jQuery(".page-node-type-generic-page .slider-social-students .bg-color").attr("percent_color_2")


	if (jQuery(".page-node-type-generic-page .slider-social-students .bg-color").length) {
		var colordegradeSocialStudents1Generica = hexToRgbPersonalSocialStudents1Generica(degradeSocialStudentsColor_1Generica, dregradeSocialStudentsOpacity_1Generica)
		var colordegradeSocialStudents2Generica = hexToRgbPersonalSocialStudents2Generica(degradeSocialStudentsColor_2Generica, dregradeSocialStudentsOpacity_2Generica)
		jQuery(".page-node-type-generic-page .slider-social-students .bg-color").css("background-image", `linear-gradient(${degradeDirectionSocialStudentsGenerica}, ${colordegradeSocialStudents1Generica} ${degradeSocialStudentsPercent_1Generica} , ${colordegradeSocialStudents2Generica} ${degradeSocialStudentsPercent_2Generica} )`)

	}

	/************* FIN COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 GENERICA **************** */

	/************* FIN COLOR DE FONDO SECCION PERFIL BLOQUE SOCIAL ESTUDIANTES 32 **************** */


	var title = jQuery(".gridNews .content .c-content .gridNews__content .gridNews__featured article .gridNews__text h3 > a").text()
	var i = title.replace("&quot;", '"')
	var ult = i.replace("&quot;", '"')
	jQuery(".gridNews .content .c-content .gridNews__content .gridNews__featured article .gridNews__text h3 > a").text(ult)

	//header animation
	if (jQuery("body").hasClass("transparent")) {
		jQuery(window).on("scroll", function (e) {
			if (jQuery(window).scrollTop() > 0) {
				jQuery(".header").addClass("header-fixed");
			}
			else {
				jQuery(".header").removeClass("header-fixed");
			}
		});
	}
	else {
		jQuery(window).on("scroll", function (e) {
			if (jQuery(window).scrollTop() > 0) {
				jQuery(".header").addClass("header-fixed");
			}
			else {
				jQuery(".header").removeClass("header-fixed");
			}
		});
	}
	//megamenu dropdown
	jQuery("nav.menu-principal ul li a.dropdown-toggle").click(function (e) {
		e.preventDefault();
		jQuery("nav.menu-principal ul li a.dropdown-toggle").next("ul").slideUp();

		if (jQuery(this).next("ul").css("display") == "none") {
			jQuery(this).next("ul").slideDown();
		}
		else {
			jQuery(this).next("ul").slideUp();
		}
	});
	if (jQuery(window).width() > 768) {
		jQuery("nav.menu-principal ul li.dropdown-menu a, nav.sedes ul li.dropdown-menu a, .block-micrositios-sedes ul li.nav-item a").hover(function (e) {
			jQuery(this).addClass("rotate-180");
		}, function (e) {
			jQuery(this).removeClass("rotate-180");
		});
	}
	else {
		//nav.menu-principal
		jQuery("nav.menu-principal .dropdown-menu a.we-megamenu-nolink").click(function (e) {
			e.preventDefault();
			jQuery("nav.menu-principal .dropdown-menu a.we-megamenu-nolink").removeClass("rotate-180");

			if (jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu-inner").css("display") == "none") {
				jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu-inner").slideDown();
				jQuery(this).addClass("rotate-180");
			}
			else {
				jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu-inner").slideUp();
				jQuery(this).removeClass("rotate-180");
			}
		});

		//nav.sedes
		jQuery("nav.sedes .dropdown-menu a.we-megamenu-nolink").click(function (e) {
			e.preventDefault();
			jQuery("nav.sedes .dropdown-menu a.we-megamenu-nolink").removeClass("rotate-180");

			if (jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu").css("display") == "none") {
				jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu").slideDown();
				jQuery(this).addClass("rotate-180");
			}
			else {
				jQuery(this).closest(".dropdown-menu").find(".we-mega-menu-submenu").slideUp();
				jQuery(this).removeClass("rotate-180");
			}
		});
	}
	//megamenu mobile position menu1 and menu2
	function reverse_menu() {
		jQuery(".header .navbar-collapse .menu-1").insertAfter(".header .navbar-collapse .menu-2");
	}
	function default_menu() {
		jQuery(".header .navbar-collapse .menu-2").insertAfter(".header .navbar-collapse .menu-1");
	}
	if (jQuery('.menuSedeRectoria').length) {
		if (jQuery(window).width() <= 540) {
			jQuery('.menuSedeRectoria a.nav-link.dropdown-toggle').on("click", function (e) {
				e.preventDefault();
				if (jQuery(this).hasClass('rotate-180')) {
					jQuery(this).removeClass('rotate-180');
					jQuery(this).next("ul").slideUp();
				} else {
					jQuery('.menuSedeRectoria a.nav-link.dropdown-toggle.rotate-180').each(function () {
						jQuery(this).removeClass('rotate-180');
						jQuery(this).next("ul").slideUp();
					})
					jQuery(this).addClass('rotate-180');
					jQuery(this).next("ul").slideDown();
				}
			});

		}
	}

	// Validar si hay video para darle un top automático.
	if (jQuery('.block-uniminuto-en-vivo').length) {
		let headerH = jQuery('header .header').innerHeight();
		jQuery('body').css('padding-top', headerH + 'px');

		jQuery('header .header').css('background-color', '#162644');
		jQuery('.block-uniminuto-en-vivo .container_video iframe').addClass('embed-responsive-item');

	}


	//scroll en redes sociales de programas
	function positionSocial_Fixed() {
		if (jQuery("body").hasClass("page-node-type-programas")) {
			//var header
			var heightHeader = jQuery("header .header").outerHeight();
			//var contentAnchors
			if (jQuery(".contentAnchors").length == 1) {
				var topContentAnchors = jQuery(".contentAnchors").offset().top;
				var heightContentAnchors = jQuery(".contentAnchors").outerHeight();
			}
			//var socialNetworks__content
			if (jQuery(".socialNetworks.fixed").length == 1) {
				// jQuery(".socialNetworks").css("display", "flex");
				var topSocial = jQuery(".socialNetworks.fixed").offset().top;
				var leftSocial = jQuery(".socialNetworks.fixed").offset().left;
				var heightSocial = jQuery(".socialNetworks.fixed").outerHeight();
			}

			jQuery(window).on("scroll", function (e) {
				if (jQuery(window).scrollTop() + heightHeader + heightSocial >= topContentAnchors + heightContentAnchors - 80) {
					jQuery(".socialNetworks").css("display", "flex");
					jQuery(".socialNetworks.fixed").css({
						"top": topContentAnchors + heightContentAnchors - 220,
						"bottom": 0,
						"left": leftSocial,
						"position": "absolute"
					});
				}
				else {
					if (jQuery(window).scrollTop() + heightHeader + 15 >= topSocial) {
						jQuery(".socialNetworks").css("display", "flex");
						jQuery(".socialNetworks.fixed").css({
							"top": heightHeader + 15,
							"left": leftSocial,
							"position": "fixed"
						});
					}
					else {
						jQuery(".socialNetworks").css("display", "flex");
						jQuery(".socialNetworks.fixed").css({
							"top": topSocial,
							"left": leftSocial,
							"position": "absolute"
						});
					}
				}
			});
		}
	}

	//scroll en redes sociales de  articulos
	function positionProfile_Fixed() {
		if (jQuery("body").hasClass("page-node-type-interna-articulos")) {
			//var header
			var heightHeader = jQuery("header .header").outerHeight();
			//var contentAnchors
			if (jQuery(".contentArticle").length == 1) {
				var topContentArticle = jQuery(".contentArticle").offset().top;
				var heightContentArticle = jQuery(".contentArticle").outerHeight();
			}
			//var socialNetworks__content
			if (jQuery(".profile.fixed").length == 1) {
				var topProfile = jQuery(".profile.fixed").offset().top;
				var leftProfile = jQuery(".profile.fixed").offset().left;
				var heightProfile = jQuery(".profile.fixed").outerHeight();
			}

			jQuery(window).on("scroll", function (e) {
				if (jQuery(window).scrollTop() + heightHeader + heightProfile >= topContentArticle + heightContentArticle - 120) {
					jQuery(".profile.fixed").css({
						"top": "inherit",
						"bottom": 0,
						"left": 0,
						"position": "absolute"
					});
				}
				else {
					if (jQuery(window).scrollTop() + heightHeader + 15 >= topProfile) {
						jQuery(".profile.fixed").css({
							"top": heightHeader + 15,
							"left": leftProfile,
							"position": "fixed"
						});
					}
					else {
						jQuery(".profile.fixed").css({
							"top": 0,
							"left": 0,
							"position": "absolute"
						});
					}
				}
			});
		}
	}

	//scroll en redes sociales de noticias
	function positionProfile_FixedNews() {
		if (jQuery("body").hasClass("page-node-type-noticias")) {
			//var header
			var heightHeaderNews = jQuery("header .header").outerHeight();
			//var contentAnchors
			if (jQuery(".contentArticle").length == 1) {
				var topContentArticleNews = jQuery(".contentArticle").offset().top;
				var heightContentArticleNews = jQuery(".contentArticle").outerHeight();
			}
			//var socialNetworks__content
			if (jQuery(".profile.fixed").length == 1) {
				var topProfileNews = jQuery(".profile.fixed").offset().top;
				var leftProfileNews = jQuery(".profile.fixed").offset().left;
				var heightProfileNews = jQuery(".profile.fixed").outerHeight();
			}
			//var socialNetworks__content
			if (jQuery(".socialNetworks.fixed").length == 1) {
				var topSocialNews = topProfileNews + heightProfileNews - 140;
				var leftSocialNews = jQuery(".socialNetworks.fixed").offset().left;
				var heightSocialNews = jQuery(".socialNetworks.fixed").outerHeight();
			}
			jQuery(window).on("scroll", function (e) {
				if (jQuery(window).scrollTop() + heightHeaderNews + heightProfileNews + heightSocialNews >= topContentArticleNews + heightContentArticleNews - 120) {
					jQuery(".profile.fixed").css({
						"top": "inherit",
						"margin-bottom": 160,
						"bottom": 0,
						"left": 0,
						"position": "absolute"
					});
					jQuery(".socialNetworks").css("display", "flex");
					jQuery(".socialNetworks.fixed").css({
						"top": topContentArticleNews + heightContentArticleNews - 350,
						"bottom": 0,
						"left": leftProfileNews,
						"position": "absolute"
					});
				}
				else {
					if (jQuery(window).scrollTop() + heightHeaderNews + 15 >= topProfileNews && jQuery(window).scrollTop() + heightHeaderNews + 15 >= topSocialNews) {
						jQuery(".profile.fixed").css({
							"top": heightHeaderNews + 15,
							"left": leftProfileNews,
							"position": "fixed"
						});
						jQuery(".socialNetworks").css("display", "flex");
						jQuery(".socialNetworks.fixed").css({
							"top": heightHeaderNews + heightProfileNews + 15,
							"left": leftProfileNews,
							"position": "fixed"
						});
					}
					else {
						jQuery(".profile.fixed").css({
							"top": 0,
							"left": 0,
							"position": "absolute"
						});
						jQuery(".socialNetworks").css("display", "flex");
						jQuery(".socialNetworks.fixed").css({
							"top": topSocialNews,
							"left": leftProfileNews,
							"position": "absolute"
						});
					}
				}
			});
		}
	}
	//autoHeight
	function autoHeight() {
		//cardHeight
		var cardHeight = jQuery("section");
		jQuery.each(cardHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".cardHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
		//titleHeight
		var titleHeight = jQuery("section");
		jQuery.each(titleHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".titleHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
		//textHeight
		var textHeight = jQuery("section");
		jQuery.each(textHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".textHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
	}
	//height niceSelect
	function selectHeight() {
		jQuery("select").each(function (i, item) {
			var heigh = jQuery(item).parent().find(".nice-select .list").height();
			if (heigh < 250) {
				jQuery(item).parent().find(".nice-select .list").css("height", "auto");
				jQuery(item).parent().find(".nice-select .list").css("overflow-y", "hidden");
			}
			else {
				jQuery(item).parent().find(".nice-select .list").css("height", 250);
				jQuery(item).parent().find(".nice-select .list").css("overflow-y", "scroll");
			}
		});
	}

	//modal-video
	jQuery(".openmodal").click(function () {
		let id = jQuery(this).attr("data-id");
		jQuery("#ModalVideo .modal-body").html("");

		var url = "/rest/testimonios/videos/" + id;
		$.get(url, function (data) {
			let iframe = data[0].field_iframe_video;
			jQuery("#ModalVideo .modal-body").html(iframe);
		});
		jQuery("#ModalVideo").modal("show");
	});
	jQuery("#ModalVideo").on("hidden.bs.modal", function () {
		jQuery("#ModalVideo .modal-body").empty();
	});

	//Call Functions
	//bannerVideo();
	//imgVideos();

	//540 "Si es mayor"
	if (jQuery(window).width() > 540) {
		positionProfile_Fixed();
		positionProfile_FixedNews();
	}
	else {
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() > 540) {
		}
		else {
		}
	});

	//768 "Si es mayor"
	if (jQuery(window).width() > 768) {
		accordionFooter_Desktop();
	}
	else {
		accordionFooter_Mobile();
		/*jQuery("nav.sedes .dropdown-menu a.we-megamenu-nolink").click(function(e){
			e.preventDefault();				  
			let contenido=jQuery(this).next("nav.sedes .we-mega-menu-submenu");
			let contenido2=jQuery(this).next("nav.sedes .we-mega-menu-submenu-inner");
			if(contenido.css("display")=="block" && contenido2.css("display")=="block"){	
				contenido.slideUp(250);
				jQuery(this).removeClass("rotate-180");						
			}
			else{ 	
				contenido.slideUp(250);
				jQuery(this).addClass("rotate-180");						
			}			  
		});*/
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() > 768) {
			accordionFooter_Desktop();
		}
		else {
			accordionFooter_Mobile();
		}
	});

	//768 "Si es menor o igual"
	if (jQuery(window).width() <= 768) {
		accordionSearchMobile();
		btns_agreement();
		reverse_menu();
	}
	else {
		default_menu();
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() <= 768) {
			accordionSearchMobile();
			btns_agreement();
			reverse_menu();
		}
		else {
			default_menu();
		}
	});

	//1024 "Si es mayor"
	if (jQuery(window).width() > 1024) {
		positionSocial_Fixed();
	}
	else {
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() > 1024) {
		}
		else {
		}
	});

	// slider de logos
	function sliderLogos() {
		jQuery('.slider-logos .owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		})
	}


	if (jQuery('.slider-logos').length) {
		sliderLogos()
	}
	//Cambio
	// Detecta cuantas columnas hay en la genérica 18 y le asigna un ancho con flex.
	if (jQuery(window).width() >= 576) {
		if (jQuery('.view-generica-modulo-18.view-display-id-2col').length) {
			jQuery('.view-generica-modulo-18.view-display-id-2col .list_servicesScienceTech .views-row').each(function () {
				jQuery(this).css('max-width', '50%');
			})
		}
		if (jQuery('.view-generica-modulo-18.view-display-id-3col').length) {
			jQuery('.view-generica-modulo-18.view-display-id-3col .list_servicesScienceTech .views-row').each(function () {
				jQuery(this).css('max-width', '33%');
			})
		}
		if (jQuery('.view-generica-modulo-18.view-display-id-4col').length) {
			jQuery('.view-generica-modulo-18.view-display-id-4col .list_servicesScienceTech .views-row').each(function () {
				jQuery(this).css('max-width', '25%');
			})
		}
	}

	// valida si hay tablas para crear un div y luego poner la tabla dentro de este div.
	if (jQuery('body table').length) {
		const divResponsive = '<div class="table-responsive"></div>';

		jQuery('table').each(function () {
			jQuery(divResponsive).insertBefore(jQuery(this));

			jQuery(this).appendTo(jQuery(this).prev());

			jQuery(this).addClass('table table-bordered');

		});

	}
	// if (jQuery(".text-center-educon")) {
	// 	var scroll = jQuery(".gridOffers .content .c-content .gridOffers__content .row #educon").offset().top - 120
	// 	jQuery("html, body").animate({ scrollTop: scroll }, "slow");
	// }
	


	// Drupal.behaviors.myBehavior = {
	// 	attach: function (context, settings) {
		
	// 	}
	// };


});

//Window onLoad
jQuery(window).on("load", function (e) {
	jQuery("select").niceSelect();
	//jQuery("[data-toggle='tooltip']").tooltip();

	//autoHeight
	function autoHeight() {
		//cardHeight
		var cardHeight = jQuery("section");
		jQuery.each(cardHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".cardHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
		//titleHeight
		var titleHeight = jQuery("section");
		jQuery.each(titleHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".titleHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
		//textHeight
		var textHeight = jQuery("section");
		jQuery.each(textHeight, function (i, item) {
			var arreglo = [];
			var items = jQuery(item).find(".textHeight");
			jQuery(items).each(function (i, item) {
				arreglo.push(jQuery(item).innerHeight());
			});
			Math.max.apply(Math, arreglo);
			jQuery(items).css("height", Math.max.apply(Math, arreglo) + "px");
		});
	}
	//height niceSelect
	function selectHeight() {
		jQuery("select").each(function (i, item) {
			var heigh = jQuery(item).parent().find(".nice-select .list").height();
			if (heigh < 250) {
				jQuery(item).parent().find(".nice-select .list").css("height", "auto");
				jQuery(item).parent().find(".nice-select .list").css("overflow-y", "hidden");
			}
			else {
				jQuery(item).parent().find(".nice-select .list").css("height", 250);
				jQuery(item).parent().find(".nice-select .list").css("overflow-y", "scroll");
			}
		});
	}

	//block gridVideos
	var featureVideo;
	var newFeatureVideo;
	function getFeatureVideosModule() {
		featureVideo = jQuery(".gridVideos__notfeatured article").first().html()
		jQuery(".gridVideos__notfeatured article").first().remove();
		newFeatureVideo = "<div class='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 gridVideos__featured'><article>" + featureVideo + "</article></div>";
		jQuery(newFeatureVideo).insertBefore(".gridVideos__notfeatured");
	}

	//block gridNews
	var gridNews__featured;
	var newGridNews__featured;
	function getFeatureNewsModule() {
		gridNews__featured = jQuery(".path-frontpage .gridNews__notfeatured article").first().html()
		jQuery(".path-frontpage .gridNews__notfeatured .col-12").first().remove();
		newGridNews__featured = "<div class='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 gridNews__featured'><article>" + gridNews__featured + "</article></div>";
		jQuery(newGridNews__featured).insertBefore(".path-frontpage .gridNews__notfeatured");
		jQuery(".path-frontpage .gridNews__featured article h3").removeClass("titleHeight");

		//position .category
		jQuery(".gridNews__notfeatured article .category").each(function (i, item) {
			jQuery(item).css("top", -jQuery(this).outerHeight());
		});
	}


	var gridNews__featured2;
	var newGridNews__featured2;
	function getFeatureNewsModule2() {
		gridNews__featured2 = jQuery(".gridNews.generica-17 .gridNews__notfeatured article").first().html()
		jQuery(".gridNews.generica-17 .gridNews__notfeatured .col-12").first().remove();
		newGridNews__featured2 = "<div class='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 gridNews__featured'><article>" + gridNews__featured2 + "</article></div>";
		jQuery(newGridNews__featured2).insertBefore(".gridNews.generica-17 .gridNews__notfeatured");
		jQuery(".gridNews.generica-17 .gridNews__featured article h3").removeClass("titleHeight");

		//position .category
		jQuery(".gridNews__notfeatured article .category").each(function (i, item) {
			jQuery(item).css("top", -jQuery(this).outerHeight());
		});
	}


	function socialMediaContactanos() {
		if (jQuery("body").hasClass("page-node-type-contactanos")) {
			var topRedesSocialesSpan = jQuery(".redesSociales.header").offset().top;
			var leftRedesSocialesSpan = jQuery(".redesSociales.header").offset().left;
			var heightRedesSocialesSpan = jQuery(".redesSociales.header").outerHeight();
			jQuery("#block-socialcontactanos ").css({
				"top": topRedesSocialesSpan + heightRedesSocialesSpan - 40,
				"left": leftRedesSocialesSpan - 10,
			});
		}
	}

	//bannerVideo
	function bannerVideo() {
		jQuery("body").on("click", ".if-video .layerVideo", function () {
			jQuery(".if-video").addClass("play");
		});
	}
	//gridVideos
	function imgVideos() {
		jQuery("body").on("click", ".gridVideosImg__content", function () {
			jQuery(this).addClass("play");
		});
	}

	//Redes sociales en Mobile
	//Programas
	function socialMediaProgramas() {
		if (jQuery("body").hasClass("page-node-type-programas")) {

			var topRedesSociales = jQuery(".page-node-type-programas .contentAnchors").offset().top;
			var heightRedesSociales = jQuery(".page-node-type-programas .contentAnchors").outerHeight();
			jQuery(".page-node-type-programas .socialNetworks").css({
				"top": topRedesSociales + heightRedesSociales - 66,
			});
		}
	}
	function socialMediaNoticiasMobile() {
		if (jQuery("body").hasClass("page-node-type-noticias")) {

			var topProfile = jQuery(".page-node-type-noticias .profile").offset().top;
			var heightProfile = jQuery(".page-node-type-noticias .profile").outerHeight();
			jQuery(".page-node-type-noticias .socialNetworks").css({
				"top": topProfile + heightProfile - 80,
			});
		}
	}
	//Redes sociales en Desktop
	//Noticias
	function socialMediaNoticias() {
		if (jQuery("body").hasClass("page-node-type-noticias")) {
			var topProfile = jQuery(".page-node-type-noticias .profile").offset().top;
			var leftProfile = jQuery(".page-node-type-noticias .profile").offset().left;
			var heightProfile = jQuery(".page-node-type-noticias .profile").outerHeight();

			jQuery(".page-node-type-noticias .socialNetworks").css({
				"top": topProfile + heightProfile - 120,
				"left": leftProfile,
			});
		}
	}
	//Agregar anterior y siguiente en el paginador
	jQuery('.pager__item--previous a span:last').text('Anterior');
	jQuery('.pager__item--next a span:last').text('Siguiente');



	//Call Functions
	autoHeight();
	bannerVideo();
	imgVideos();
	getFeatureVideosModule();
	getFeatureNewsModule();
	selectHeight();
	socialMediaContactanos();

	if (jQuery('.gridNews.generica-17').length) {
		getFeatureNewsModule2();
	}

	//768 "Si es mayor o igual"
	if (jQuery(window).width() >= 768) {
		socialMediaNoticias();
	}
	else {
		socialMediaNoticiasMobile();
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() >= 768) {
			socialMediaNoticias();
		}
		else {
			socialMediaNoticiasMobile();
		}
	});

	//1024 "Si es menor o igual"
	if (jQuery(window).width() <= 1024) {
		socialMediaProgramas();
	}
	else {
	}
	jQuery(window).resize(function (e) {
		if (jQuery(window).width() <= 1024) {
			socialMediaProgramas();
		}
		else {
		}
	});

	if (jQuery('.paragraph--type--todos-los-programas .listPrograms__filters').length) {
		jQuery('body .form-item-nivel-formacion .form-select .list li').each(function () {
			if (jQuery(this).text().charAt(0) !== '-') {
				jQuery(this).addClass('bold');
			}
		})
	}

	// Validar si redirecciona a una url con ancla
	if (window.location.hash) {
		let nameId = window.location.hash.substr(1);
		if (jQuery('#' + nameId).length) {
			let scrollTop = jQuery(window).scrollTop();
			let headerH = jQuery('header .header').innerHeight();
			headerH += 10;
			window.scrollTo(0, scrollTop - headerH);
		}
	}

	// Evento que detecta si cambia la url direccionandolo una ancla dentro de la misma página.
	window.addEventListener('hashchange', function () {
		console.log('location changed!');
		let scrollTop = jQuery(window).scrollTop();
		let headerH = jQuery('header .header').innerHeight();
		headerH += 50;
		window.scrollTo(0, scrollTop - headerH);
	})

});