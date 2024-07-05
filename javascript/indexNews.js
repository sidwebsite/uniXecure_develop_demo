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

/***/ "./src/javascript/indexNews.js":
/*!*************************************!*\
  !*** ./src/javascript/indexNews.js ***!
  \*************************************/
/***/ (() => {

eval("\r\n\r\nlet app = angular.module('myApp', ['ngSanitize']);\r\napp.controller('getAppController', ['$scope', '$http', function($scope, $http) {\r\n    $scope.empty = function(val) {\r\n        let booleanVal = true;\r\n        if(val === '' || val === null) {\r\n            booleanVal = true;\r\n        } else {\r\n            booleanVal = false;\r\n        }\r\n        return booleanVal;\r\n    }\r\n    $scope.browserTimeZone = new Date().toString().match(/([-\\+][0-9]+)\\s/)[1];\r\n    $scope.reverse = true;\r\n    const request = {\r\n        count : 3\r\n    };\r\n    $http.get('../json/news/indexNews.json', request).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.allitem = response.data.datatable;\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n    // 行銷活動\r\n    const eventRequest = {\r\n        count : 4\r\n    };\r\n    $scope.todayDate = Date.now();\r\n    console.log($scope.todayDate);\r\n    $http.get('../json/news/indexEvents.json', eventRequest).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.eventsItem = response.data.datatable;\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n    // \r\n    const casesRequest = {\r\n        count : 5\r\n    };\r\n    $http.get('../json/news/indexCases.json', casesRequest).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.casesItem = response.data.datatable;\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n}]);\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/indexNews.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/indexNews.js"]();
/******/ 	
/******/ })()
;