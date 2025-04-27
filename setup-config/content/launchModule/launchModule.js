'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.launchSetup', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lauchPage/:menuName?', {
            templateUrl: 'content/launchModule/launchModule.html',
            controller: 'launchModuleCtrl'
        });
    }]);


var ctrl = app.controller("launchModuleCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$filter', '$rootScope', 'CONST_RESOURCES', '$translate', '$routeParams', '$interval', function ($scope, appService, $timeout, $location, snackbar, $filter, $rootScope, CONST_RESOURCES, $translate, $routeParams, $interval) {
    // if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[23].linkName)) {
    //     $location.path($rootScope.sideMenuData[0].link);
    // }

    /* 
        1. menuName: 'Suggestions',link: '/suggestions'
        2. menuName: 'Skill Book',link: '/skillBook-dashboard'
        3. menuName: 'PMS',link: '/appraisal'
    */
    if (!localStorage.getItem('userDet')) {
        $location.path($rootScope.sideMenuData[0].link);
    } else {
        var empRole = $rootScope.empDetails.roles;
        if ($filter('filter')(empRole, { id: 2 }, true).length == 0) {
            $location.path($rootScope.sideMenuData[0].link);
        }
    }
    $scope.isPMSNewUser = true;
    $scope.urlMenu = $routeParams.menuName;
    console.log($scope.urlMenu);

    var promise;
    $scope.goLive = function () {
        $scope.isLoading = true;
        promise = $interval(function () {
            $scope.isLoading = false;
            $scope.isPMSNewUser = false;
        }, 1500);
    }
    $scope.stopInterval = function () {
        $interval.cancel(promise);
    };
    $scope.menuNLink = [
        {
            menuName: 'Suggestions',
            link: '/suggestions',
        },
        {
            menuName: 'Health Screening',
            link: '/healthScreening',
        },
        {
            menuName: 'Online Learning',
            link: '/suggestions',
        },
        {
            menuName: 'Skill Book',
            link: '/skillBook-dashboard',
        },
        {
            menuName: 'PMS',
            link: '/appraisal',
        },
        {
            menuName: 'Concerns',
            link: '/concerns'
        },
        {
            menuName: 'Nearmiss',
            link: '/near_miss',
        },
        {
            menuName: 'Survey',
            link: '/internalSurvey',
        },
        {
            menuName: 'Auditor',
            link: '/auditor'
        },
        {
            menuName: 'DWM',
            link: '/dwm',
        },
        {
            menuName: 'TPM',
            link: '/TPM',
        },
        {
            menuName: 'Kuber',
            link: '/kuber',
        },
        {
            menuName: 'Help',
            link: '/help',
        },
        {
            menuName: 'Settings',
            link: '/home-page',
        },
    ];

    $scope.setSelectedMenu = function () {
        if ($filter('filter')($scope.menuNLink, { menuName: $scope.urlMenu }, true).length > 0) {
            var data = $filter('filter')($scope.menuNLink, { menuName: $scope.urlMenu }, true);
            window.location.href = "../template.html#!" + data[0].link;
        } else {
            window.location.href = "../template.html";
        }
    }
}]);
