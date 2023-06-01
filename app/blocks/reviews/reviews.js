app.reviewsSlider = {
    name: 'reviewsSlider',
    description: 'your script description',
    init() {
        new Swiper('.reviews-slider', {
            loop: true,
            slidesPerView: 2,
            centerSlides: true,
            spaceBetween: 30,
            speed: 1000,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                },
                1025: {
                    slidesPerView: 4,
                },
            },
        });
    },
};
