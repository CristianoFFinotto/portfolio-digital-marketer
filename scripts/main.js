const page = document.querySelector('body');
const headerTextColor = document.querySelectorAll('.header__item');
console.log(headerTextColor);

const changeColorText = () => {

    headerTextColor[0].style.color = 'red';
    headerTextColor[1].style.color = 'red';
}

window.onscroll = changeColorText();