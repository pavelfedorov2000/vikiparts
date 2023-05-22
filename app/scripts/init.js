window.addEventListener("DOMContentLoaded", () => {
    app.burger.init();
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

    /* const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('.search-form__input');
    const searchBtn = document.querySelector('.header__search-btn');
    searchBtn.addEventListener('click', function () {
        searchForm.classList.add('active');
    });
    
    document.addEventListener('mouseup', (e) => {
        if (searchForm != e.target && searchInput != e.target) {
            searchForm.classList.remove('active');
        }
    }); */
});