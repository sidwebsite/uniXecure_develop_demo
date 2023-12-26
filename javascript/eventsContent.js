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

/***/ "./src/javascript/eventsContent.js":
/*!*****************************************!*\
  !*** ./src/javascript/eventsContent.js ***!
  \*****************************************/
/***/ (() => {

eval("\r\n\r\nlet app = angular.module('myApp', ['ngSanitize']);\r\napp.controller('getAppController', ['$scope', '$http', function($scope, $http) {\r\n    $scope.todayDate = Date.now();\r\n    $scope.empty = function(val) {\r\n        let booleanVal = true;\r\n        if(val === '' || val === null) {\r\n            booleanVal = true;\r\n        } else {\r\n            booleanVal = false;\r\n        }\r\n        return booleanVal;\r\n    }\r\n    const request = {\r\n        UUID: 'f21057f85b35759a2a1672ce1ca12ea4',\r\n    };\r\n    $scope.browserTimeZone = new Date().toString().match(/([-\\+][0-9]+)\\s/)[1];\r\n    $scope.reverse = true;\r\n    // url\r\n    $scope.pageTitle = window.document.title;\r\n    $scope.pageUrl = new URL(window.location);\r\n    $scope.urlIndex = $scope.pageUrl.search.toString().split(\"?urlQuery=\").pop();\r\n    // content\r\n    $http.get('../json/news/eventsUUid.json', request).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.allitem = response.data.datatable;\r\n        }\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n    const recommendRequest = {\r\n        UUID: 'f21057f85b35759a2a1672ce1ca12ea4',\r\n        count : 3,\r\n    };\r\n    $http.get('../json/news/eventsGetRelateList.json', recommendRequest).then(function(response) {\r\n        if(!jQuery.isEmptyObject(response.data)) {\r\n            $scope.recommend = response.data.datatable;\r\n        }\r\n\r\n    }).catch(function() {\r\n        bootbox.alert({\r\n            message : globalReadDataFail,\r\n            buttons : {\r\n                ok : {\r\n                    label : '<i class=\"fas fa-fw fa-times\"></i>' + btnClose,\r\n                    className : 'btn-danger',\r\n                }\r\n            },\r\n            callback: function() { }\r\n        });\r\n    }).finally(function() {});\r\n    // share \r\n    $scope.popWidth = 600,\r\n    $scope.popHeight = 480,\r\n    $scope.left = window.innerWidth / 2 - $scope.popWidth / 2 + window.screenX,\r\n    $scope.top = window.innerHeight / 2 - $scope.popHeight / 2 + window.screenY,\r\n    $scope.popParams = 'scrollbars=no, width=' + $scope.popWidth + ', height=' + $scope.popHeight + ', top=' + $scope.top + ', left=' + $scope.left,\r\n    \r\n    $scope.facebook = function() {\r\n        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($scope.pageUrl.href), 'facebook-share-dialog', $scope.popParams);\r\n        return false;\r\n    };\r\n    $scope.line = function() {\r\n        window.open('http://line.me/R/msg/text/?' + encodeURIComponent($scope.pageTitle + ' ' + $scope.pageUrl.href), 'targetWindow', $scope.popParams)\r\n    }\r\n}]);\n\n//# sourceURL=webpack://unixecure_portal/./src/javascript/eventsContent.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/javascript/eventsContent.js"]();
/******/ 	
/******/ })()
;