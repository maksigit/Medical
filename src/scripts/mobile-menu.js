/////////////// MOBILE MENU ////////////////

$('.js-menu-icon').on('click', function () {
    $('.menu-header, .js-menu-header-close').show();
    $('.js-menu-icon').hide();
});

$('.js-menu-header-close').on('click', function () {
    $('.menu-header, .js-menu-header-close').hide();
    $('.js-menu-icon').show();
});

/////////////// END MOBILE MENU ////////////////

/////////////// LIST HIDE ////////////////

var $matched = $('.js-list-wrap');
$matched.find("ul")
    .addClass("js-catalog__list");

var $listAdd = $(".js-catalog__list");
$listAdd.find("li")
    .addClass("js-catalog__item");
$listAdd.find("li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4), li:nth-child(5), li:nth-child(6)").removeClass("js-catalog__item");
// $(".js-catalog__list").each(function(index, value ) {
//     var childrens = $(value).children('li')
//     if (childrens.length > 6) {
//         childrens.splice(0,6);
//         childrens.each(function (item, value) {
//             $(value).addClass('is-hidden');
//         });
//     }
// });

$(".js-more").on('click', function () {
    var thisCat = $(this).siblings(".js-catalog__list");
    thisCat.find("li").slideToggle("js-catalog__item");
});

/////////////// END LIST HIDE ////////////////

/////////////// IMG to enlarge ////////////////

$('.js-thumbnails-img').on('click', function (e) {
    e.preventDefault();
    var imgThumb = $(this).attr('src');
    $('.card__img').find('.card__img-top > img').attr('src', imgThumb);
});

/////////////// IMG to enlarge ////////////////

