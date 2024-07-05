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

/***/ "./src/javascript/newsList.js":
/*!************************************!*\
  !*** ./src/javascript/newsList.js ***!
  \************************************/
/***/ (() => {

eval("\r\n\r\nlet app = angular.module('myApp', ['ngSanitize']);\r\napp.controller('getAppController', ['$scope', '$http', function($scope, $http) {\r\n    $scope.browserTimeZone = new Date().toString().match(/([-\\+][0-9]+)\\s/)[1];\r\n    $scope.reverse = true;\r\n    const request = {};\r\n    $http.get('../json/news/newsList.json', request).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.allitem = response.data.datatable;\r\n            console.log($scope.allitem);\r\n            // 新聞中心排序\r\n            $scope.allitem.sort((t1, t2) => (t1.DataTimeEpochTime < t2.DataTimeEpochTime) ? 1 : (t1.DataTimeEpochTime > t2.DataTimeEpochTime) ? -1 : 0);\r\n            // 新聞中心 pagination\r\n            $scope.curPage = 1;         // 當前頁碼\r\n            $scope.newsPageSize = 5;        // 顯示筆數\r\n            $scope.newsArr = [];            // 單頁資料存放\r\n            $scope.newsPages = [];          // 分頁頁碼模組\r\n            // 總頁數\r\n            $scope.newsTotalaPage = Math.ceil($scope.allitem.length / $scope.newsPageSize);\r\n            // 顯示資料\r\n            $scope.newsDisplayList = function(page) {\r\n                page--;\r\n                let start = $scope.newsPageSize * page;\r\n                let end = start +  $scope.newsPageSize;\r\n                let paginatedItems = $scope.allitem.slice(start, end);\r\n                $scope.newsArr = paginatedItems;\r\n            }\r\n            // 分頁模組\r\n            for (let i = 0; i < $scope.newsTotalaPage; i++) {\r\n                $scope.newsPages.push(i + 1);\r\n            };\r\n            // 當前頁碼\r\n            $scope.newsJump = function(indexPage) {\r\n                $scope.curPage = indexPage;\r\n                $scope.newsDisplayList(indexPage);\r\n                return $scope.curPage;\r\n            }\r\n            // 第一頁\r\n            $scope.newsFirst = function() {\r\n                $scope.curPage = 1;\r\n                $scope.newsDisplayList($scope.curPage);\r\n            }\r\n            // 上一頁\r\n            $scope.newsPrev = function(page) {\r\n                $scope.curPage = page - 1;\r\n                $scope.newsDisplayList($scope.curPage);\r\n            }\r\n            // 下一頁\r\n            $scope.newsNext = function(page) {\r\n                $scope.curPage = page + 1;\r\n                $scope.newsDisplayList($scope.curPage);\r\n            }\r\n            // 最後一頁\r\n            $scope.newsLast = function() {\r\n                $scope.curPage = $scope.newsTotalaPage;\r\n                $scope.newsDisplayList($scope.curPage);\r\n            }                \r\n            // 執行初始資料\r\n            $scope.newsDisplayList($scope.curPage);\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n}]);\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/newsList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/newsList.js"]();
/******/ 	
/******/ })()
;