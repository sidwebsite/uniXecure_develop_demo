/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/javascript/module/gotop.js
function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;
    
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    };
};

function easeInOutCubic(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t + 2) + b;
};
;// CONCATENATED MODULE: ./src/javascript/theme.js
// import '../javascript/fb083deec1';
// navbar media function
const toggleNavbar = document.querySelector('.toggle-navbar');
const navBar = document.querySelector('.navbar');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const menuBack = document.querySelectorAll('.menu-back');

toggleNavbar.addEventListener('click', (e) => {
    e.preventDefault();
    navBar.classList.toggle('show');

    if(navBar.classList.contains('show')) {
        toggleNavbar.classList.replace('fa-bars', 'fa-xmark');
    } else {
        toggleNavbar.classList.replace('fa-xmark', 'fa-bars');
    }
});

dropdownMenu.forEach((item) => {
    item.previousElementSibling.addEventListener('click', () => {
        item.classList.add('menu-show');
    })
});

menuBack.forEach((back) => {
    back.addEventListener('click', () => {
        back.closest('.dropdown-menu').classList.remove('menu-show');
    })
});

// language function
const languageBtn = document.querySelector('.language-btn');
const language = document.querySelector('.language');
languageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    language.classList.toggle('show');
});
document.body.addEventListener('click', (e) => {
    if(e.target.matches('.language-btn') === false) {
        language.classList.remove('show');
    }
});
// 版權所有年份
const year = document.querySelector('.year');
const dateYear = new Date().getFullYear();
year.textContent = dateYear;

// go top javascript 

const backToTopButton = document.querySelector('.gotop');
function scrollFunction(){
    if(window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    };
};
window.addEventListener('scroll', scrollFunction);
backToTopButton.addEventListener('click', smoothScrollBackToTop);
;// CONCATENATED MODULE: ./src/main.js
// scss

// javascript


/******/ })()
;