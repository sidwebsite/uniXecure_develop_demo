/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


let app = angular.module('myApp', ['ngSanitize']);
app.controller('getAppController', ['$scope', '$http', function($scope, $http) {
    $scope.empty = function(val) {
        let booleanVal = true;
        if(val === '' || val === null) {
            booleanVal = true;
        } else {
            booleanVal = false;
        }
        return booleanVal;
    }
    const request = {};
    $http.get('../json/news/casesList.json', request).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.allitem = response.data.datatable;
            // 新聞中心 pagination
            $scope.curPage = 1;         // 當前頁碼
            $scope.casesPageSize = 5;        // 顯示筆數
            $scope.casesArr = [];            // 單頁資料存放
            $scope.casesPages = [];          // 分頁頁碼模組
            // 總頁數
            $scope.casesTotalaPage = Math.ceil($scope.allitem.length / $scope.casesPageSize);
            // 顯示資料
            $scope.casesDisplayList = function(page) {
                page--;
                let start = $scope.casesPageSize * page;
                let end = start + $scope.casesPageSize;
                let paginatedItems = $scope.allitem.slice(start, end);
                $scope.casesArr = paginatedItems;
            }
            // 分頁模組
            for (let i = 0; i < $scope.casesTotalaPage; i++) {
                $scope.casesPages.push(i + 1);
            };
            // 當前頁碼
            $scope.casesJump = function(indexPage) {
                $scope.curPage = indexPage;
                $scope.casesDisplayList(indexPage);
                return $scope.curPage;
            }
            // 第一頁
            $scope.casesFirst = function() {
                $scope.curPage = 1;
                $scope.casesDisplayList($scope.curPage);
            }
            // 上一頁
            $scope.casesPrev = function(page) {
                $scope.curPage = page - 1;
                $scope.casesDisplayList($scope.curPage);
            }
            // 下一頁
            $scope.casesNext = function(page) {
                $scope.curPage = page + 1;
                $scope.casesDisplayList($scope.curPage);
            }
            // 最後一頁
            $scope.casesLast = function() {
                $scope.curPage = $scope.casesTotalaPage;
                $scope.casesDisplayList($scope.curPage);
            }                
            // 執行初始資料
            $scope.casesDisplayList($scope.curPage);
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