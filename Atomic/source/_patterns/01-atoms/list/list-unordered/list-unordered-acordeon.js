jQuery(".accordeon li").click(function () {
    jQuery(this).siblings().removeClass("active");
    jQuery(this).toggleClass("active");
    if (jQuery(this).hasClass("active")) {
        jQuery(this).siblings().find('.accordeon-body').slideUp(300);
        jQuery(this).find('.accordeon-body').slideDown(300);
    } else {
        jQuery(this).find('.accordeon-body').slideUp(300);
    }
});