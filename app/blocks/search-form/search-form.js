app.search = {
    name: 'search',
    description: 'your script description',
    init() {
        const searchButton = document.querySelector('.jsSearchBtn');
        const searchForm = document.querySelector('.search-form');
        const searchFormInput = searchForm.querySelector('.search-form__input');

        if (!searchButton || !searchForm) return;

        searchButton.addEventListener('click', () => {
            if (searchButton.getAttribute('aria-expanded') === 'false') {
                searchButton.setAttribute('aria-expanded', true);
                searchForm.classList.add('active');
            } else {
                searchButton.setAttribute('aria-expanded', false);
                searchForm.classList.remove('active');
            }
        });

        document.addEventListener('mouseup', (e) => {
            if (searchForm != e.target && searchFormInput != e.target) {
                searchForm.classList.remove('active');
            }
        });
    },
};
