/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


let app = angular.module('myApp', ['ngSanitize']);
app.controller('getAppController', ['$scope', '$http', function($scope, $http) {
    $scope.todayDate = Date.now();
    $scope.browserTimeZone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
    $scope.reverse = true;
    const request = {};
    $http.get('../json/news/eventsList.json', request).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.allitem = response.data.datatable;
            // 
            $scope.disEvents = $scope.allitem.slice(1, $scope.allitem.length);
            $scope.curPage = 1;
            $scope.eventsPageSize = 6;        // 顯示筆數
            $scope.eventsArr = [];            // 單頁資料存放
            $scope.eventsPages = [];          // 分頁頁碼模組

            // 總頁數
            $scope.eventsTotalaPage = Math.ceil($scope.disEvents.length / $scope.eventsPageSize);
            // 顯示資料
            $scope.eventsDisplayList = function(page) {
                page--;
                let start = $scope.eventsPageSize * page;
                let end = start + $scope.eventsPageSize;
                let paginatedItems = $scope.disEvents.slice(start, end);
                $scope.eventsArr = paginatedItems;
            }
            // 分頁模組
            for (let i = 0; i < $scope.eventsTotalaPage; i++) {
                $scope.eventsPages.push(i + 1);
            };
            // 當前頁碼
            $scope.eventsJump = function(indexPage) {
                $scope.curPage = indexPage;
                $scope.eventsDisplayList(indexPage);
                return $scope.curPage;
            }
            // 第一頁
            $scope.eventsFirst = function() {
                $scope.curPage = 1;
                $scope.eventsDisplayList($scope.curPage);
            }
            // 上一頁
            $scope.eventsPrev = function(page) {
                $scope.curPage = page - 1;
                $scope.eventsDisplayList($scope.curPage);
            }
            // 下一頁
            $scope.eventsNext = function(page) {
                $scope.curPage = page + 1;
                $scope.eventsDisplayList($scope.curPage);
            }
            // 最後一頁
            $scope.eventsLast = function() {
                $scope.curPage = $scope.eventsTotalaPage;
                $scope.eventsDisplayList($scope.curPage);
            }                
            // 執行初始資料
            $scope.eventsDisplayList($scope.curPage);
        }
    }).catch(function() {
        bootbox.alert({
            message : globalReadDataFail,
            buttons : {
                ok : {
                    label : '<i class="fas fa-fw fa-times"></i>' + btnClose,
                    className : 'btn-danger',
                }
            },
            callback: function() { }
        });
    }).finally(function() {});
}]);
/******/ })()
;