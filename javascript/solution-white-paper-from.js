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

/***/ "./src/javascript/module/validation.js":
/*!*********************************************!*\
  !*** ./src/javascript/module/validation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emailvalidation: () => (/* binding */ emailvalidation),\n/* harmony export */   multipleCheckbox: () => (/* binding */ multipleCheckbox),\n/* harmony export */   otherCheckbox: () => (/* binding */ otherCheckbox),\n/* harmony export */   otherTextarea1Fun: () => (/* binding */ otherTextarea1Fun),\n/* harmony export */   phonevalidation: () => (/* binding */ phonevalidation),\n/* harmony export */   requiredField: () => (/* binding */ requiredField)\n/* harmony export */ });\nconst validation = {\r\n    mail: /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/,\r\n    phoneon: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-#\\s\\./0-9]*$/g,\r\n};\r\nlet {mail, phoneon} = validation;\r\nconst invalidFeedback = (el) => {\r\n    el.classList.add('requiredField-invalid');\r\n    el.nextElementSibling.classList.remove('d-none');\r\n    el.placeholder = '';\r\n}\r\nconst validFeedback = (el) => {\r\n    el.classList.remove('requiredField-invalid');\r\n    el.nextElementSibling.classList.add('d-none');\r\n}\r\nfunction requiredField() {\r\n    const requiredField =document.querySelectorAll('.requiredField')\r\n    // function\r\n    requiredField.forEach((input) => {\r\n        if(input.value === \"\" || input.value === null) {\r\n            invalidFeedback(input);\r\n        } else {\r\n            validFeedback(input);\r\n        }\r\n    });\r\n}\r\n// \r\nfunction emailvalidation() {\r\n    const invalidEmail = document.querySelector('.invalid-email');\r\n    if(!email.value.match(mail)) {\r\n        email.classList.add('requiredField-invalid');\r\n        invalidEmail.classList.remove('d-none');\r\n        email.placeholder = '';\r\n    } else {\r\n        email.classList.remove('requiredField-invalid');\r\n        invalidEmail.classList.add('d-none');\r\n    }\r\n}\r\n// \r\nfunction phonevalidation() {\r\n    const invalidPhone = document.querySelector('.invalid-phone');\r\n    if(!phone.value.match(phoneon)) {\r\n        phone.classList.add('requiredField-invalid');\r\n        invalidPhone.classList.remove('d-none');\r\n        phone.placeholder = '';\r\n    } else {\r\n        phone.classList.remove('requiredField-invalid');\r\n        invalidPhone.classList.add('d-none');\r\n    }\r\n}\r\n// other textarea1\r\nfunction otherTextarea1Fun() {\r\n    const otherTextarea1 = document.querySelector('#other-textarea1');\r\n    if(otherTextarea1.disabled === false) {\r\n        if(otherTextarea1.value === \"\" || otherTextarea1.value === null) {\r\n            invalidFeedback(otherTextarea1);\r\n        } else {\r\n            validFeedback(otherTextarea1);\r\n        }\r\n    }\r\n}\r\n// \r\nfunction otherCheckbox() {\r\n    const otherOption = document.querySelector('#other-option');\r\n    const otherTextarea1 = document.querySelector('#other-textarea1');\r\n    otherOption.checked = false\r\n    otherOption.addEventListener('change', () => {\r\n        if(otherOption.checked) {\r\n            otherTextarea1.disabled = false;\r\n        } else {\r\n            otherTextarea1.disabled = true;\r\n            if(otherTextarea1.disabled === false) {\r\n                if(otherTextarea1.value === \"\" || otherTextarea1.value === null) {\r\n                    invalidFeedback(otherTextarea1);\r\n                } else {\r\n                    validFeedback(otherTextarea1);\r\n                }\r\n            }    \r\n        }\r\n        if(otherOption.checked === false) {\r\n            validFeedback(otherTextarea1);\r\n        }\r\n    });\r\n    otherTextarea1.addEventListener('change', () => {\r\n        if(otherTextarea1.value === \"\" || otherTextarea1.value === null) {\r\n            invalidFeedback(otherTextarea1);\r\n        } else {\r\n            validFeedback(otherTextarea1);\r\n        }\r\n    });\r\n}\r\nfunction multipleCheckbox(checkName, requiredFieldClass) {\r\n    const checkBoxes = document.querySelectorAll(checkName);\r\n    const invalCheckbox = document.querySelector(requiredFieldClass);\r\n    let error = true;\r\n    checkBoxes.forEach(item => {\r\n        if (item.checked) { \r\n            error = false;\r\n        }\r\n    });\r\n    if (error) {\r\n        invalCheckbox.classList.remove('d-none');\r\n    } else {\r\n        invalCheckbox.classList.add('d-none');\r\n    }\r\n}\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/module/validation.js?");

/***/ }),

/***/ "./src/javascript/solution-white-paper-from.js":
/*!*****************************************************!*\
  !*** ./src/javascript/solution-white-paper-from.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/validation */ \"./src/javascript/module/validation.js\");\n\r\nconst downloadBtn = document.querySelector('#download-btn');\r\nconst email = document.querySelector('#email');\r\nconst phone = document.querySelector('#phone');\r\nconst assentOption = document.querySelector('#assent-option');\r\nassentOption.checked = null;\r\n// phone change\r\nphone.addEventListener('change', () => {\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.phonevalidation)();\r\n});\r\n// email change\r\nemail.addEventListener('change', () => {\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.emailvalidation)();\r\n});\r\n// \r\nfunction openModal() {\r\n    const modelId = document.querySelector('#modal-assent');\r\n    const modalCloseBtn = modelId.querySelector('.modal-close-btn');\r\n    document.body.classList.add('modal-open');\r\n    modelId.classList.add('show');\r\n    modalCloseBtn.addEventListener('click', () => {\r\n        document.body.classList.remove('modal-open');\r\n        modelId.classList.remove('show');\r\n    });\r\n}\r\nassentOption.addEventListener('change', () => {\r\n    if(assentOption.checked) {\r\n        assentOption.checked = true;\r\n    } else {\r\n        assentOption.checked = false;\r\n    }    \r\n    console.log(assentOption.checked)\r\n})\r\n// \r\ndownloadBtn.addEventListener('click', () => {    \r\n    ;(0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.requiredField)();\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.phonevalidation)();\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.emailvalidation)();\r\n    if(assentOption.checked === false) {\r\n        openModal();\r\n    }\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.multipleCheckbox)('[name=\"messageChannel\"]', '.messageChannelCheckbox');\r\n    (0,_module_validation__WEBPACK_IMPORTED_MODULE_0__.multipleCheckbox)('[name=\"options\"]', '.invalCheckbox');    \r\n})\r\n// other checkbox on and off function\r\n// otherCheckbox();\r\nfunction other(optionId, textInputId) {\r\n    const option = document.querySelector(optionId);\r\n    const textInput = document.querySelector(textInputId);\r\n    const input = textInput.querySelector('input') || textInput.querySelector('textarea');\r\n    const span = textInput.querySelector('span');\r\n    option.checked = false\r\n    input.addEventListener('blur', () => {\r\n        input.value !== '' ? option.checked = true : option.checked = false;        \r\n    })    \r\n    option.addEventListener('change', () => {\r\n        if(option.checked === true ) {\r\n            span.classList.remove('d-none');\r\n            input.classList.add('requiredField');\r\n        } else {\r\n            span.classList.add('d-none');\r\n            input.classList.remove('requiredField');\r\n        }\r\n    })\r\n}\r\n\r\nother('#business-recommendation', '#business-recommendation-input');\r\nother('#messageChannel-option', '#messageChannel-textarea1');\r\nother('#other-option', '#other-textarea1');\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/solution-white-paper-from.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/solution-white-paper-from.js");
/******/ 	
/******/ })()
;