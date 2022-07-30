
const hamburger = document.querySelector('.hamburger-menu img');
const navListHamburger = document.querySelector('.nav-list-hamburger');

hamburger.addEventListener('click', () => {
    navListHamburger.classList.toggle('nav-list-hamburger--hide');
});