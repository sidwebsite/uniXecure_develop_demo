/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/javascript/module/truncation.js
function truncation(el, len) {
    const ellipsis = document.querySelectorAll(el);
    ellipsis.forEach(item => {
        if(item.textContent.length > len) {
            const textLen = item.textContent.substring(0,len) + '...'
            item.textContent = textLen
        };
    });
}
;// CONCATENATED MODULE: ./src/javascript/solution-white-paper.js
// truncation

truncation('.card-body h5', 30);
truncation('.card-body p', 55);
// Pagination
const list = document.querySelector('#list');
const listItems = list.querySelectorAll('.item');
const firstButton = document.querySelector('#first-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const lastButton = document.querySelector('#last-button');
const numbers = document.querySelector('#pagination > ul');
const paginationLimit = 9; // 顯示筆數
const pageInit = 1;
const pageCount = Math.ceil(listItems.length / paginationLimit); // 計算頁數
let currentPage = 1; // 當前頁面
// 新增頁碼
const appendPageNunber = (index) => {
    const pageNumber = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'number';
    a.setAttribute('href', '#');
    a.setAttribute('page-index', index);
    a.setAttribute('aria-label', 'Page ${index}');
    a.textContent = index;
    pageNumber.append(a);
    numbers.append(pageNumber);
}
// 取得頁碼
const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNunber(i);
    }
}; 
// 當前頁碼新增active function
const handleActivePageNumber = () => {
    const number = document.querySelectorAll('.number');
    number.forEach((li) => {
        li.classList.remove('active');
        const pageIndex = Number(li.getAttribute('page-index'));
        if(pageIndex == currentPage) li.classList.add('active');
    })
}
// 禁用頁面導航按鈕 function
const disableButton = (button) => {
    button.classList.add('d-none');
    button.setAttribute('disabled', true);
}
const enableButton = (button) => {
    button.classList.remove('d-none');
    button.removeAttribute("disabled");
}
const handlePageButtonsStatus = () => {
    if(currentPage === 1) {
        disableButton(prevButton);
        disableButton(firstButton);
    }else {
        enableButton(prevButton);
        enableButton(firstButton);
    }
    if(pageCount === currentPage ) {
        disableButton(nextButton);
        disableButton(lastButton);
    } else {
        enableButton(nextButton);
        enableButton(lastButton);
    }
}
// 顯示頁面
const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    // 當前頁碼新增active
    handleActivePageNumber();
    // 禁用頁面導航按鈕
    handlePageButtonsStatus();
    // 獲取要顯示的項目的範圍
    const prevRange = (pageNum - 1) * paginationLimit; // start
    const currRange = pageNum * paginationLimit; // end
    // 顯示和隱藏div
    listItems.forEach((item, index) => {
        item.classList.add('d-none');
        if(index >= prevRange && index < currRange) {
            item.classList.remove('d-none');
        }
    })
}
window.addEventListener('load', () => {
    getPaginationNumbers();
    setCurrentPage(1);
    // 上一頁和下一頁
    prevButton.addEventListener('click', () => {
        setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener('click', () => {
        setCurrentPage(currentPage + 1);
    });
    // 
    firstButton.addEventListener('click', () => {
        setCurrentPage(pageInit);
    });
    lastButton.addEventListener('click', () => {
        setCurrentPage(pageCount);
    })
    // 點擊頁碼切換div內容
    const number = document.querySelectorAll('.number');
    number.forEach((li) => {
        const pageIndex = Number(li.getAttribute('page-index'));
        if(pageIndex) {
            li.addEventListener('click', (e) => {
                e.preventDefault();
                setCurrentPage(pageIndex);
            })
        }
    })
});
/******/ })()
;