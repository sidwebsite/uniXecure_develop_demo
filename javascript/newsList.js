/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


let app = angular.module('myApp', ['ngSanitize']);
app.controller('getAppController', ['$scope', '$http', function($scope, $http) {
    $scope.browserTimeZone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
    $scope.reverse = true;
    const request = {};
    $http.get('../json/news/newsList.json', request).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.allitem = response.data.datatable;
            console.log($scope.allitem);
            // 新聞中心排序
            $scope.allitem.sort((t1, t2) => (t1.DataTimeEpochTime < t2.DataTimeEpochTime) ? 1 : (t1.DataTimeEpochTime > t2.DataTimeEpochTime) ? -1 : 0);
            // 新聞中心 pagination
            $scope.curPage = 1;         // 當前頁碼
            $scope.newsPageSize = 5;        // 顯示筆數
            $scope.newsArr = [];            // 單頁資料存放
            $scope.newsPages = [];          // 分頁頁碼模組
            // 總頁數
            $scope.newsTotalaPage = Math.ceil($scope.allitem.length / $scope.newsPageSize);
            // 顯示資料
            $scope.newsDisplayList = function(page) {
                page--;
                let start = $scope.newsPageSize * page;
                let end = start +  $scope.newsPageSize;
                let paginatedItems = $scope.allitem.slice(start, end);
                $scope.newsArr = paginatedItems;
            }
            // 分頁模組
            for (let i = 0; i < $scope.newsTotalaPage; i++) {
                $scope.newsPages.push(i + 1);
            };
            // 當前頁碼
            $scope.newsJump = function(indexPage) {
                $scope.curPage = indexPage;
                $scope.newsDisplayList(indexPage);
                return $scope.curPage;
            }
            // 第一頁
            $scope.newsFirst = function() {
                $scope.curPage = 1;
                $scope.newsDisplayList($scope.curPage);
            }
            // 上一頁
            $scope.newsPrev = function(page) {
                $scope.curPage = page - 1;
                $scope.newsDisplayList($scope.curPage);
            }
            // 下一頁
            $scope.newsNext = function(page) {
                $scope.curPage = page + 1;
                $scope.newsDisplayList($scope.curPage);
            }
            // 最後一頁
            $scope.newsLast = function() {
                $scope.curPage = $scope.newsTotalaPage;
                $scope.newsDisplayList($scope.curPage);
            }                
            // 執行初始資料
            $scope.newsDisplayList($scope.curPage);
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