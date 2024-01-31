/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const modalBtn = document.querySelectorAll('.modal-btn');
const openModal = (id) => {
    const modelId = document.querySelector(id);
    const modalCloseBtn = modelId.querySelector('.modal-close-btn');
    document.body.classList.add('modal-open');
    modelId.classList.add('show');
    modalCloseBtn.addEventListener('click', () => {
        document.body.classList.remove('modal-open');
        modelId.classList.remove('show');
    });
}

modalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const id = e.target.dataset.target;
        openModal(id);
    })
})


/******/ })()
;