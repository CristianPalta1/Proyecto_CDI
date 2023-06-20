import '../scss/index.scss';
import $ from 'jquery';
const owlCarousel = required('owl.caroulsel');
// import { modalLightBox } from '../_patterns/02-molecules/media/image-gallery/image-gallery';

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
}


function modalMessageSuccess() {
    console.log("estoy dando vida")
    // Get the modal
    let modal = jQuery(".modal-messaging")
    // Get the button that opens the modal

    let btnModalSuccess = jQuery("#modalSucess")
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 


    jQuery(btnModalSuccess).on('click', function () {

        jQuery(modal).css("display", "block")
    })


    // When the user clicks on <span> (x), close the modal


    jQuery(span).on('click', function () {

        jQuery(modal).css("display", "none")
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



jQuery(document).ready(function () {

    console.log("Estoy entrando al ready")
    modalMessageSuccess();
    // modalLightBox();

})