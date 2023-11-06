/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


let app = angular.module('myApp', ['ngSanitize']);
app.controller('getAppController', ['$scope', '$http', function($scope, $http) {
    $scope.todayDate = Date.now();
    $scope.empty = function(val) {
        let booleanVal = true;
        if(val === '' || val === null) {
            booleanVal = true;
        } else {
            booleanVal = false;
        }
        return booleanVal;
    }
    const request = {
        UUID: 'f21057f85b35759a2a1672ce1ca12ea4',
    };
    $scope.browserTimeZone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
    $scope.reverse = true;
    // url
    $scope.pageTitle = window.document.title;
    $scope.pageUrl = new URL(window.location);
    $scope.urlIndex = $scope.pageUrl.search.toString().split("?urlQuery=").pop();
    // content
    $http.get('../json/news/eventsUUid.json', request).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.allitem = response.data.datatable;
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
    const recommendRequest = {
        UUID: 'f21057f85b35759a2a1672ce1ca12ea4',
        count : 3,
    };
    $http.get('../json/news/eventsGetRelateList.json', recommendRequest).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.recommend = response.data.datatable;
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
/******/ })()
;