//////////////////// SWIPER ///////////////////
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.js-swiper-container-main', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

//////////////////// END SWIPER ///////////////////