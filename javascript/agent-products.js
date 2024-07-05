/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/agent-products.js":
/*!******************************************!*\
  !*** ./src/javascript/agent-products.js ***!
  \******************************************/
/***/ (() => {

eval("const agentPproductsNav = document.querySelector('#agent-products-nav');\r\nconst topOfnav = agentPproductsNav.offsetTop;\r\nlet sm = window.matchMedia(\"(max-width: 768px)\");\r\nconst selectBtn = document.querySelector('.select-btn');\r\nfunction scrollFunction() {\r\n    if (window.scrollY >= topOfnav) {\r\n        agentPproductsNav.classList.add(\"sticky\");\r\n    } else {\r\n        agentPproductsNav.classList.remove(\"sticky\");\r\n    }\r\n}\r\nif(sm.matches) {\r\n    window.addEventListener('scroll', scrollFunction);\r\n};\r\nselectBtn.addEventListener('click', (e) => {\r\n    selectBtn.classList.toggle('rotate');\r\n    selectBtn.nextElementSibling.classList.toggle('active');    \r\n});\r\n// \r\nconst filterBtn = document.querySelectorAll('.filter-btm button');\r\nconst filterableCards = document.querySelectorAll('#filterable-cards .filter-card');\r\n\r\nconst filterCards = (e) => {\r\n    document.querySelector(\".filter-btm .active\").classList.remove(\"active\");\r\n    e.target.classList.add(\"active\");\r\n    selectBtn.querySelector('span').textContent = e.target.textContent;\r\n    document.querySelector(\".filter-btm\").classList.remove(\"active\");\r\n    filterableCards.forEach(card => {\r\n        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === \"all\") {\r\n            return card.classList.replace(\"hide\", \"show\");\r\n        }\r\n        card.classList.add(\"hide\");\r\n    });\r\n}\r\nfilterBtn.forEach(button => button.addEventListener(\"click\", filterCards));\r\n\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/agent-products.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/agent-products.js"]();
/******/ 	
/******/ })()
;