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

/***/ "./src/javascript/accordion.js":
/*!*************************************!*\
  !*** ./src/javascript/accordion.js ***!
  \*************************************/
/***/ (() => {

eval("const accordionButton = document.querySelectorAll('.accordion-button');\r\nconst accordionCollapse = document.querySelectorAll('.accordion-collapse');\r\nconst show = document.querySelector('.show');\r\nshow.style.height = show.scrollHeight + 'px';\r\nfor(let i = 0; i < accordionButton.length; i++){\r\n    accordionButton[i].addEventListener('click', ()=>{\r\n        if( parseInt(accordionCollapse[i].style.height) != accordionCollapse[i].scrollHeight){\r\n            accordionCollapse[i].style.height = accordionCollapse[i].scrollHeight + \"px\";\r\n            accordionButton[i].classList.add('toggle-active');\r\n        }\r\n        else{\r\n            accordionCollapse[i].style.height = \"0px\";\r\n            accordionButton[i].classList.remove('toggle-active');\r\n        }\r\n        for(let j = 0; j < accordionCollapse.length; j++){\r\n            if(j !== i){\r\n                accordionCollapse[j].style.height = \"0px\";\r\n                accordionButton[j].classList.remove('toggle-active');\r\n                accordionCollapse[j].classList.remove('show');\r\n            }\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/accordion.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/accordion.js"]();
/******/ 	
/******/ })()
;