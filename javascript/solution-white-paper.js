/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/module/truncation.js":
/*!*********************************************!*\
  !*** ./src/javascript/module/truncation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   truncation: () => (/* binding */ truncation)\n/* harmony export */ });\nfunction truncation(el, len) {\r\n    const ellipsis = document.querySelectorAll(el);\r\n    ellipsis.forEach(item => {\r\n        if(item.textContent.length > len) {\r\n            const textLen = item.textContent.substring(0,len) + '...'\r\n            item.textContent = textLen\r\n        };\r\n    });\r\n}\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/module/truncation.js?");

/***/ }),

/***/ "./src/javascript/solution-white-paper.js":
/*!************************************************!*\
  !*** ./src/javascript/solution-white-paper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_truncation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/truncation */ \"./src/javascript/module/truncation.js\");\n// truncation\r\n\r\n(0,_module_truncation__WEBPACK_IMPORTED_MODULE_0__.truncation)('.card-body h5', 30);\r\n(0,_module_truncation__WEBPACK_IMPORTED_MODULE_0__.truncation)('.card-body p', 55);\r\n// Pagination\r\nconst list = document.querySelector('#list');\r\nconst listItems = list.querySelectorAll('.item');\r\nconst firstButton = document.querySelector('#first-button');\r\nconst prevButton = document.querySelector('#prev-button');\r\nconst nextButton = document.querySelector('#next-button');\r\nconst lastButton = document.querySelector('#last-button');\r\nconst numbers = document.querySelector('#pagination > ul');\r\nconst paginationLimit = 9; // 顯示筆數\r\nconst pageInit = 1;\r\nconst pageCount = Math.ceil(listItems.length / paginationLimit); // 計算頁數\r\nlet currentPage = 1; // 當前頁面\r\n// 新增頁碼\r\nconst appendPageNunber = (index) => {\r\n    const pageNumber = document.createElement('li');\r\n    const a = document.createElement('a');\r\n    a.className = 'number';\r\n    a.setAttribute('href', '#');\r\n    a.setAttribute('page-index', index);\r\n    a.setAttribute('aria-label', 'Page ${index}');\r\n    a.textContent = index;\r\n    pageNumber.append(a);\r\n    numbers.append(pageNumber);\r\n}\r\n// 取得頁碼\r\nconst getPaginationNumbers = () => {\r\n    for (let i = 1; i <= pageCount; i++) {\r\n        appendPageNunber(i);\r\n    }\r\n}; \r\n// 當前頁碼新增active function\r\nconst handleActivePageNumber = () => {\r\n    const number = document.querySelectorAll('.number');\r\n    number.forEach((li) => {\r\n        li.classList.remove('active');\r\n        const pageIndex = Number(li.getAttribute('page-index'));\r\n        if(pageIndex == currentPage) li.classList.add('active');\r\n    })\r\n}\r\n// 禁用頁面導航按鈕 function\r\nconst disableButton = (button) => {\r\n    button.classList.add('d-none');\r\n    button.setAttribute('disabled', true);\r\n}\r\nconst enableButton = (button) => {\r\n    button.classList.remove('d-none');\r\n    button.removeAttribute(\"disabled\");\r\n}\r\nconst handlePageButtonsStatus = () => {\r\n    if(currentPage === 1) {\r\n        disableButton(prevButton);\r\n        disableButton(firstButton);\r\n    }else {\r\n        enableButton(prevButton);\r\n        enableButton(firstButton);\r\n    }\r\n    if(pageCount === currentPage ) {\r\n        disableButton(nextButton);\r\n        disableButton(lastButton);\r\n    } else {\r\n        enableButton(nextButton);\r\n        enableButton(lastButton);\r\n    }\r\n}\r\n// 顯示頁面\r\nconst setCurrentPage = (pageNum) => {\r\n    currentPage = pageNum;\r\n    // 當前頁碼新增active\r\n    handleActivePageNumber();\r\n    // 禁用頁面導航按鈕\r\n    handlePageButtonsStatus();\r\n    // 獲取要顯示的項目的範圍\r\n    const prevRange = (pageNum - 1) * paginationLimit; // start\r\n    const currRange = pageNum * paginationLimit; // end\r\n    // 顯示和隱藏div\r\n    listItems.forEach((item, index) => {\r\n        item.classList.add('d-none');\r\n        if(index >= prevRange && index < currRange) {\r\n            item.classList.remove('d-none');\r\n        }\r\n    })\r\n}\r\nwindow.addEventListener('load', () => {\r\n    getPaginationNumbers();\r\n    setCurrentPage(1);\r\n    // 上一頁和下一頁\r\n    prevButton.addEventListener('click', () => {\r\n        setCurrentPage(currentPage - 1);\r\n    });\r\n    nextButton.addEventListener('click', () => {\r\n        setCurrentPage(currentPage + 1);\r\n    });\r\n    // \r\n    firstButton.addEventListener('click', () => {\r\n        setCurrentPage(pageInit);\r\n    });\r\n    lastButton.addEventListener('click', () => {\r\n        setCurrentPage(pageCount);\r\n    })\r\n    // 點擊頁碼切換div內容\r\n    const number = document.querySelectorAll('.number');\r\n    number.forEach((li) => {\r\n        const pageIndex = Number(li.getAttribute('page-index'));\r\n        if(pageIndex) {\r\n            li.addEventListener('click', (e) => {\r\n                e.preventDefault();\r\n                setCurrentPage(pageIndex);\r\n            })\r\n        }\r\n    })\r\n});\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/solution-white-paper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/solution-white-paper.js");
/******/ 	
/******/ })()
;