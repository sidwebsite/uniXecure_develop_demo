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

/***/ "./src/javascript/eventsList.js":
/*!**************************************!*\
  !*** ./src/javascript/eventsList.js ***!
  \**************************************/
/***/ (() => {

eval("\r\n\r\nlet app = angular.module('myApp', ['ngSanitize']);\r\napp.controller('getAppController', ['$scope', '$http', function($scope, $http) {\r\n    $scope.todayDate = Date.now();\r\n    $scope.browserTimeZone = new Date().toString().match(/([-\\+][0-9]+)\\s/)[1];\r\n    $scope.reverse = true;\r\n    const request = {};\r\n    $http.get('../json/news/eventsList.json', request).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.allitem = response.data.datatable;\r\n            // \r\n            $scope.disEvents = $scope.allitem.slice(1, $scope.allitem.length);\r\n            $scope.curPage = 1;\r\n            $scope.eventsPageSize = 6;        // 顯示筆數\r\n            $scope.eventsArr = [];            // 單頁資料存放\r\n            $scope.eventsPages = [];          // 分頁頁碼模組\r\n\r\n            // 總頁數\r\n            $scope.eventsTotalaPage = Math.ceil($scope.disEvents.length / $scope.eventsPageSize);\r\n            // 顯示資料\r\n            $scope.eventsDisplayList = function(page) {\r\n                page--;\r\n                let start = $scope.eventsPageSize * page;\r\n                let end = start + $scope.eventsPageSize;\r\n                let paginatedItems = $scope.disEvents.slice(start, end);\r\n                $scope.eventsArr = paginatedItems;\r\n            }\r\n            // 分頁模組\r\n            for (let i = 0; i < $scope.eventsTotalaPage; i++) {\r\n                $scope.eventsPages.push(i + 1);\r\n            };\r\n            // 當前頁碼\r\n            $scope.eventsJump = function(indexPage) {\r\n                $scope.curPage = indexPage;\r\n                $scope.eventsDisplayList(indexPage);\r\n                return $scope.curPage;\r\n            }\r\n            // 第一頁\r\n            $scope.eventsFirst = function() {\r\n                $scope.curPage = 1;\r\n                $scope.eventsDisplayList($scope.curPage);\r\n            }\r\n            // 上一頁\r\n            $scope.eventsPrev = function(page) {\r\n                $scope.curPage = page - 1;\r\n                $scope.eventsDisplayList($scope.curPage);\r\n            }\r\n            // 下一頁\r\n            $scope.eventsNext = function(page) {\r\n                $scope.curPage = page + 1;\r\n                $scope.eventsDisplayList($scope.curPage);\r\n            }\r\n            // 最後一頁\r\n            $scope.eventsLast = function() {\r\n                $scope.curPage = $scope.eventsTotalaPage;\r\n                $scope.eventsDisplayList($scope.curPage);\r\n            }                \r\n            // 執行初始資料\r\n            $scope.eventsDisplayList($scope.curPage);\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n}]);\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/eventsList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/eventsList.js"]();
/******/ 	
/******/ })()
;