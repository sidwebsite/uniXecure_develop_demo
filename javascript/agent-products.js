/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const agentPproductsNav = document.querySelector('#agent-products-nav');
const topOfnav = agentPproductsNav.offsetTop;
let sm = window.matchMedia("(max-width: 768px)");
const selectBtn = document.querySelector('.select-btn');
function scrollFunction() {
    if (window.scrollY >= topOfnav) {
        agentPproductsNav.classList.add("sticky");
    } else {
        agentPproductsNav.classList.remove("sticky");
    }
}
if(sm.matches) {
    window.addEventListener('scroll', scrollFunction);
};
selectBtn.addEventListener('click', (e) => {
    selectBtn.classList.toggle('rotate');
    selectBtn.nextElementSibling.classList.toggle('active');    
});
// 
const filterBtn = document.querySelectorAll('.filter-btm button');
const filterableCards = document.querySelectorAll('#filterable-cards .filter-card');

const filterCards = (e) => {
    document.querySelector(".filter-btm .active").classList.remove("active");
    e.target.classList.add("active");
    selectBtn.querySelector('span').textContent = e.target.textContent;
    document.querySelector(".filter-btm").classList.remove("active");
    filterableCards.forEach(card => {
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterBtn.forEach(button => button.addEventListener("click", filterCards));

/******/ })()
;