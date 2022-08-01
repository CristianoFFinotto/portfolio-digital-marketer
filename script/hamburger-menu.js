
const hamburger = document.querySelector('.hamburger');
const navListHamburger = document.querySelector('.nav-list-hamburger');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navListHamburger.classList.toggle('nav-list-hamburger--hide');
});

