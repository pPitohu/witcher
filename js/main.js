const slider = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

const menuButton = document.querySelector('.menu-button'),
    menu = document.querySelector('.header');

menuButton.onclick = () => {
    menu.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
};

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.animated').forEach((e) => {
            e.classList.remove('animated');
        });
    }, 1500);
});
