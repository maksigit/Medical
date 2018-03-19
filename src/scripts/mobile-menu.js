/////////////// MOBILE MENU ////////////////

$('.js-menu-icon').on('click', function () {
    $('.menu-header, .js-menu-header-close').show();
    $('.js-menu-icon').hide();
});

$('.js-menu-header-close').on('click', function () {
    $('.menu-header, .js-menu-header-close').hide();
    $('.js-menu-icon').show();
});

var $matched = $('.catalog__list__wrap');
$matched.find("ul")
    .addClass("catalog__list");

var $listAdd = $(".catalog__list");
$listAdd.find("li")
    .addClass("js-catalog__item");
$listAdd.find("li:nth-child(6)")
    .addClass("js-hide-catalog");
$listAdd.find(".js-hide-catalog > a")
    .removeAttr("href");

$listAdd.find("li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4), li:nth-child(5), li:nth-child(6)").removeClass("js-catalog__item");


$(".js-hide-catalog").on('click', function () {
    $(this).siblings(".js-catalog__item").slideToggle();
});

/////////////// END MOBILE MENU ////////////////

/////////////// IMG to enlarge ////////////////

$('.js-thumbnails-img').on('click', function (e) {
    console.log('ggg');
    e.preventDefault();
    var imgThumb = $(this).attr('src');
    console.log(imgThumb);
    $('.card__img').find('.card__img-top > img').attr('src', imgThumb);
});


/////////////// IMG to enlarge ////////////////

