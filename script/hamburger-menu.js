
const hamburger = document.querySelector('.hamburger-menu img');
const navListHamburger = document.querySelector('.nav-list-hamburger');
const currentDate = document.querySelectorAll('#date');

hamburger.addEventListener('click', () => {
    navListHamburger.classList.toggle('nav-list-hamburger--hide');
});

for (let i = 0; i < currentDate.length; i++) {
    currentDate[i].textContent = new Date().getFullYear();
}