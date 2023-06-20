export default function modalLightbox() {
    $(".gallery-light-box .galery-list .gallery-item a").click(function (e) {
        console.log("Estoy dando vida")
        let img = e.target.src;
        e.preventDefault();
        $("body main #modalLightBox").append('<div class="light-box-container"><img src="' + img + '" class="modal-img"><div id="lightBoxCloseButton" class="modal-light-box-button">X</div></div>');
        $("#modalLightBox").addClass("modal-light-box");

        $("#modalLightBox #lightBoxCloseButton").click(function () {
            $("#modalLightBox").remove();
        })
    })
}

