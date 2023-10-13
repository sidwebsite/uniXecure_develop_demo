/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
;(function(angular) {
    'use strict';
    let app = angular.module('myApp', ['ngSanitize']);
    app.controller('getAppController', ['$scope', '$http', function($scope, $http) {
        // news
        $http.get("../json/news.json").then(function(response) {
            $scope.news = response.data;
            // 新聞中心排序
            $scope.reverse = true;
            
            // 新聞中心 pagination
            $scope.curPage = 1;         // 當前頁碼
            $scope.newsPageSize = 5;        // 顯示筆數
            $scope.newsArr = [];            // 單頁資料存放
            $scope.newsPages = [];          // 分頁頁碼模組
            // 總頁數
            $scope.newsTotalaPage = Math.ceil($scope.news.length / $scope.newsPageSize);
            // 顯示資料
            $scope.newsDisplayList = function(page) {
                page--;
                let start = $scope.newsPageSize * page;
                let end = start +  $scope.newsPageSize;
                let paginatedItems = $scope.news.slice(start, end);
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
            // news recommend
            $scope.newsRecommend = [];
            for (let i = 0; i < 4; i++) {
                const item = $scope.news[i];
                if(item.Id !== $scope.urlIndex) $scope.newsRecommend.push(item);
            }
        });
        // events
        $http.get("../json/events.json").then(function(response) {
            $scope.events = response.data;
            // 行銷活動 pagination
            $scope.disEvents = $scope.events.slice(1, $scope.events.length);
            $scope.eventsPageSize = 6;        // 顯示筆數
            $scope.eventsArr = [];            // 單頁資料存放
            $scope.eventsPages = [];          // 分頁頁碼模組

            // 總頁數
            $scope.eventsTotalaPage = Math.ceil($scope.disEvents.length/ $scope.eventsPageSize);
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
            // events recommend
            $scope.eventsRecommend = [];
            for (let i = 0; i < $scope.events.length; i++) {
                const item = $scope.events[i];
                if(item.id !== $scope.urlIndex) $scope.eventsRecommend.push(item);
            }
        });
        // cases
        $http.get("../json/cases.json").then(function(response) {
            $scope.cases = response.data;
            // 成功案例 pagination
            $scope.casesPageSize = 5;        // 顯示筆數
            $scope.casesArr = [];            // 單頁資料存放
            $scope.casesPages = [];          // 分頁頁碼模組
            // 總頁數
            $scope.casesTotalaPage = Math.ceil($scope.cases.length / $scope.casesPageSize);
            // 顯示資料
            $scope.casesDisplayList = function(page) {
                page--;
                let start = $scope.casesPageSize * page;
                let end = start + $scope.casesPageSize;
                let paginatedItems = $scope.cases.slice(start, end);
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
            // cases recommend
            $scope.casesRecommend = [];
            for (let i = 0; i < $scope.cases.length; i++) {
                const item = $scope.cases[i];
                if(item.id !== $scope.urlIndex) $scope.casesRecommend.push(item);
            }
        });
        // lang
        $scope.lang = document.documentElement.lang;
        // url
        $scope.pageTitle = window.document.title;
        $scope.pageUrl = new URL(window.location);
        $scope.urlIndex = $scope.pageUrl.search.toString().slice(10);
        // share 
        $scope.popWidth = 600,
        $scope.popHeight = 480,
        $scope.left = window.innerWidth / 2 - $scope.popWidth / 2 + window.screenX,
        $scope.top = window.innerHeight / 2 - $scope.popHeight / 2 + window.screenY,
        $scope.popParams = 'scrollbars=no, width=' + $scope.popWidth + ', height=' + $scope.popHeight + ', top=' + $scope.top + ', left=' + $scope.left,
        
        $scope.facebook = function() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent($scope.pageUrl.href), 'facebook-share-dialog', $scope.popParams);
            return false;
        };
        $scope.line = function() {
            window.open('http://line.me/R/msg/text/?' + encodeURIComponent($scope.pageTitle + ' ' + $scope.pageUrl.href), 'targetWindow', $scope.popParams)
        }
    }]);
})(window.angular);
/******/ })()
;