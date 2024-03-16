function slider() {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3.6,
        breakpoints: {
            1120: {
                perView: 3.3
            },
            1088: {
                perView: 3
            },
            932: {
                perView: 2.6
            },
            809: {
                perView: 2.3
            },
            768: {
                perView: 2
            },
            484: {
                perView: 1.6
            },
            404: {
                perView: 1
            }
        }
    });
    glide.mount();

    const scrollLeftButton = document.querySelector('.js-scrollLeft');
    const scrollRightButton = document.querySelector('.js-scrollRight');

    scrollLeftButton.addEventListener('click', () => {
        glide.go('<');
    });
};

function scrollUp() {
    window.scrollTo({
        behavior: 'smooth',
        top: 0
    });
};

function addButtonUpListener() {
    const btn = document.querySelector('.js-scrollUp');

    btn.addEventListener('click', scrollUp);
};

function handleMenu() {
    const openMenuBtn = document.querySelector('.js--open-menu');
    const closeMenuBtn = document.querySelector('.js--close-menu');
    const menu = document.querySelector('.js--menu');

    openMenuBtn.addEventListener('click', () => {
        menu.classList.add('is--active');
    });

    closeMenuBtn.addEventListener('click', () => {
        menu.classList.remove('is--active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    slider();
    addButtonUpListener();
    handleMenu();
});