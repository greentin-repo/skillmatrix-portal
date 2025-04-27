'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.homePage', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home-page', {
        templateUrl: 'content/homePage/homePage.html',
        controller: 'homePageCtrl'
    });
}]);


var ctrl = app.controller("homePageCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$filter', '$rootScope', '$window', '$translate', function($scope, appService, $timeout, $location, snackbar, $filter, $rootScope, $window, $translate) {
    $scope.iframeHeight = $window.innerHeight;
    $scope.username = $rootScope.empDetails.firstName + ' ' + $rootScope.empDetails.lastName;

    //console.log("Home Page Loaded");

    // Start to make next menu enable
    $scope.nextIndexMenu = $rootScope.currentIndex + 1;
    $scope.makeMenuEnable = function() {
        $rootScope.makeIndexDataAvailable(0);
        $rootScope.makeIndexEnable(0);
        $rootScope.makeIndexEnable($scope.nextIndexMenu);
        $rootScope.setSelectedMenu($rootScope.sideMenuData[0]);
    }

    $scope.nextMenu = function() {
        //console.log("in next menu");
        $rootScope.setSelectedMenu($rootScope.sideMenuData[$scope.nextIndexMenu]);
        $location.path($rootScope.sideMenuData[$scope.nextIndexMenu].link);
    }

    $scope.globalLoadingIndicator = true;
    // End to make next menu enable
}]);