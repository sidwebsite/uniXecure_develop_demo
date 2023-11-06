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
    $scope.browserTimeZone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
    $scope.reverse = true;
    const request = {
        count : 3
    };
    $http.get('../json/news/indexNews.json', request).then(function(response) {
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
    // 行銷活動
    const eventRequest = {
        count : 4
    };
    $scope.todayDate = Date.now();
    console.log($scope.todayDate);
    $http.get('../json/news/indexEvents.json', eventRequest).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.eventsItem = response.data.datatable;
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
    // 
    const casesRequest = {
        count : 5
    };
    $http.get('../json/news/indexCases.json', casesRequest).then(function(response) {
        if(!jQuery.isEmptyObject(response.data)) {
            $scope.casesItem = response.data.datatable;
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