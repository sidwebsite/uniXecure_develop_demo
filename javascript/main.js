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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://unixecure_portal/./src/scss/style.scss?");

/***/ }),

/***/ "./src/javascript/module/gotop.js":
/*!****************************************!*\
  !*** ./src/javascript/module/gotop.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScrollBackToTop: () => (/* binding */ smoothScrollBackToTop)\n/* harmony export */ });\nfunction smoothScrollBackToTop() {\r\n    const targetPosition = 0;\r\n    const startPosition = window.pageYOffset;\r\n    const distance = targetPosition - startPosition;\r\n    const duration = 750;\r\n    let start = null;\r\n    \r\n    window.requestAnimationFrame(step);\r\n\r\n    function step(timestamp) {\r\n        if (!start) start = timestamp;\r\n        const progress = timestamp - start;\r\n        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));\r\n        if (progress < duration) window.requestAnimationFrame(step);\r\n    };\r\n};\r\n\r\nfunction easeInOutCubic(t, b, c, d) {\r\n    t /= d/2;\r\n    if (t < 1) return c/2*t*t*t + b;\r\n    t -= 2;\r\n    return c/2*(t*t*t + 2) + b;\r\n};\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/module/gotop.js?");

/***/ }),

/***/ "./src/javascript/theme.js":
/*!*********************************!*\
  !*** ./src/javascript/theme.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_gotop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/gotop */ \"./src/javascript/module/gotop.js\");\n// import '../javascript/fb083deec1';\r\n// navbar media function\r\nconst toggleNavbar = document.querySelector('.toggle-navbar');\r\nconst navBar = document.querySelector('.navbar');\r\nconst dropdownMenu = document.querySelectorAll('.dropdown-menu');\r\nconst menuBack = document.querySelectorAll('.menu-back');\r\n\r\ntoggleNavbar.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    navBar.classList.toggle('show');\r\n\r\n    if(navBar.classList.contains('show')) {\r\n        toggleNavbar.classList.replace('fa-bars', 'fa-xmark');\r\n    } else {\r\n        toggleNavbar.classList.replace('fa-xmark', 'fa-bars');\r\n    }\r\n});\r\n\r\ndropdownMenu.forEach((item) => {\r\n    item.previousElementSibling.addEventListener('click', () => {\r\n        item.classList.add('menu-show');\r\n    })\r\n});\r\n\r\nmenuBack.forEach((back) => {\r\n    back.addEventListener('click', () => {\r\n        back.closest('.dropdown-menu').classList.remove('menu-show');\r\n    })\r\n});\r\n\r\n// language function\r\nconst languageBtn = document.querySelector('.language-btn');\r\nconst language = document.querySelector('.language');\r\nlanguageBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    language.classList.toggle('show');\r\n});\r\ndocument.body.addEventListener('click', (e) => {\r\n    if(e.target.matches('.language-btn') === false) {\r\n        language.classList.remove('show');\r\n    }\r\n});\r\n// 版權所有年份\r\nconst year = document.querySelector('.year');\r\nconst dateYear = new Date().getFullYear();\r\nyear.textContent = dateYear;\r\n\r\n// go top javascript \r\n\r\nconst backToTopButton = document.querySelector('.gotop');\r\nfunction scrollFunction(){\r\n    if(window.pageYOffset > 300) {\r\n        backToTopButton.classList.add('show');\r\n    } else {\r\n        backToTopButton.classList.remove('show');\r\n    };\r\n};\r\nwindow.addEventListener('scroll', scrollFunction);\r\nbackToTopButton.addEventListener('click', _module_gotop__WEBPACK_IMPORTED_MODULE_0__.smoothScrollBackToTop);\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/theme.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _javascript_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/theme */ \"./src/javascript/theme.js\");\n// scss\r\n\r\n// javascript\r\n\r\n\n\n//# sourceURL=webpack://unixecure_portal/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;