'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('mainApp.homepage', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/homepage', {
            templateUrl: 'content/homepage/homepage.html',
            controller: 'homepageCtrl'
        })
    }]);

var headerCtrl = app.controller("homepageCtrl", ['$scope', 'appService', 'sharedService', 'snackbar', 'CONST_RESOURCES', '$rootScope', '$filter', function ($scope, appService, sharedService, snackbar, CONST_RESOURCES, $rootScope, $filter) {

    $scope.appVersion = appVersion;
    // $scope.open = false;
    $scope.open = false;

    $scope.menus = [
        {
            id: 1,
            menuName: 'Settings',
            linkName: 'Settings',
            tooltip: 'Settings',
            link: '/home-page',
            //imgUrl: 'dist/icons/sidebar/setting.png',
            imgUrl: 'dist/icons/setting-white.png',
            access: true,
            isShown: true
        }, {
            id: 2,
            menuName: 'Skill Matrix',
            linkName: 'skill-matrix',
            tooltip: 'Skill Matrix',
            link: 'skill-matrix',
            //imgUrl: 'dist/icons/sidebar/setting.png',
            imgUrl: 'dist/icons/skillMatrix-white.png',
            access: true,
            isShown: true
        },
    ]
    $rootScope.subscriptionPopDet = {};
    $rootScope.subscriptionPopDet = JSON.parse(localStorage.getItem('subscriptionPopDet'));

    if ($rootScope.subscriptionPopDet && $rootScope.subscriptionPopDet.isShowPopup === "Y") {
        // Check if the modal has already been shown in this session
        if (!sessionStorage.getItem('subscriptionPopShown')) {
            // Show the modal
            $("#subscriptionPopDetails").modal({
                backdrop: 'static',
                keyboard: false,
            });

            // Mark as shown for this session
            sessionStorage.setItem('subscriptionPopShown', 'true');
        }
    }

    $scope.logout = function () {
        localStorage.removeItem("menuData");
        localStorage.removeItem("userDet");
        localStorage.removeItem("suggStatus");
        localStorage.removeItem("subscriptionPopDet");
        sessionStorage.removeItem('sideMenuData');
        sessionStorage.removeItem('sideMenuStatus');
        sessionStorage.removeItem('selectedSideMenu');
        sessionStorage.removeItem('selectedSideMenu1');
        sessionStorage.removeItem('subscriptionPopShown');
        window.location.href = 'login.html';
    }

    $scope.featureDesc = function (data, param) {
        // localStorage.setItem("selectedSideMenu1", JSON.stringify(data));

        $scope.menunm = data.menuName;
        $scope.param = param;

    }



    $scope.goToPage = function (data) {
        localStorage.setItem("selectedSideMenu1", JSON.stringify(data));
        if (data.menuName == 'Settings') {
            window.location.href = "setup-config/#!" + data.link;
        } else {
            window.location.href = "#!" + data.link;
        }
    }
    $scope.goSkillMatrixPage = function () {
        window.location.href = 'skill-matrix';
    }
}]);

headerCtrl.$inject = ['$scope', 'sharedService'];