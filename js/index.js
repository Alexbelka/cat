
(function Check() {
    $('.page-menu__close').on('click', function () {
        $('.page-navigation').removeClass('page-navigation--opened');
        $('.page-navigation').addClass('page-navigation--closed');
        $('.page-menu__open').removeClass('visually-hidden');
    });

    $('.page-menu__open').on('click', function () {
        $('.page-navigation').removeClass('page-navigation--closed');
        $('.page-navigation').addClass('page-navigation--opened');
    });
}());