$('.menu-icon').on('click', function () {
    $('.menu-header, .menu-header__close').show();
    $('.menu-icon').hide();
});

$('.menu-header__close').on('click', function () {
    $('.menu-header, .menu-header__close').hide();
    $('.menu-icon').show();
});

$('.catalog__open__list').on('click', function () {
    $(this).siblings('.catalog__hide__list').slideToggle();
});

