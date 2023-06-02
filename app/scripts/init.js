window.addEventListener("DOMContentLoaded", () => {
    app.burger.init();
    app.search.init();
    app.accordion.init();
    app.reviewsSlider.init();
    new Swiper('.promo-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });

    Fancybox.bind('[data-fancybox]', {
        autoFocus: false,
        dragToClose: false,
        closeButton: false,
        showClass: 'fancybox-fadeIn',
        Toolbar: {
            display: {
                left: [
                ],
                middle: [],
                right: [
                'iterateZoom',
                'close',
                ],
            },
        },
        Thumbs: {
            showOnStart: false,
        },
    });
});