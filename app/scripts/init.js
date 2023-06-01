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
        /* navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        }, */
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        /* breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: 4,
            },
        }, */
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