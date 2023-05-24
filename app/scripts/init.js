window.addEventListener("DOMContentLoaded", () => {
    app.burger.init();
    app.search.init();
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
});