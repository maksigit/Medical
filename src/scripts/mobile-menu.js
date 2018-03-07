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
    .addClass("test-js");
$listAdd.find("li:nth-child(6)")
    .addClass("js-hide-catalog");
$listAdd.find(".js-hide-catalog > a")
    .removeAttr("href");

$listAdd.find("li:nth-child(1), li:nth-child(2), li:nth-child(3), li:nth-child(4), li:nth-child(5), li:nth-child(6)").removeClass("test-js");


$(".js-hide-catalog").on('click', function () {
    $(this).siblings(".test-js").slideToggle();
});