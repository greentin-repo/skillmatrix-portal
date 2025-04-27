'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginRegApp', [
    'loginRegApp.login'
])

app.directive('checkOrgLogoLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.addClass('org-logo-not-avail');
                element.attr('src', 'dist/icons/my_enovation_white@2x_pencil.png'); // set default image
            });
        }
    }
});
app.run(['$rootScope', '$window', function ($rootScope, $window) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        $rootScope.windowHeight = $(window)
            .innerHeight();
        var w = angular.element($window);
        $rootScope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        $rootScope.$watch($rootScope.getWindowDimensions, function (newValue, oldValue) {
            $rootScope.windowHeight = newValue.h;
            $rootScope.setExtQuesHeightStyle = function () {
                return {
                    'height': (newValue.h - 285) + 'px',
                };
            };
        });
    })
}]);
app.constant('LANG_CONST', (function () {
    return {
        EMAIL_ID: 'EMAIL_ID',
        FRGT_PASS: 'FORGOT_PASS',
        USERNAME: 'USERNAME',
        ENTR_EML_ID: 'ENTR_EML_ID',
        VERIFY: 'VERIFY',
        LOGIN: 'LOGIN',
        VAL_ENTR_EML_ID: 'VAL_ENTR_EML_ID',
        VAL_ENTR_VLD_EML_ID: 'VAL_ENTR_VLD_EML_ID',
        VAL_PLS_ENTR_PASS: 'VAL_PLS_ENTR_PASS',
        PASS: 'PASS',
        ENTR_PASS: 'ENTR_PASS',
        CHANGE_EML: 'CHANGE_EML'
    };
})());

app.service('loginRegService', function ($http, $q, $timeout) {
    var response = {};

    this.httpPost = function (data, url) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: appDomain + url,
            data: data,
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 60000 // request timeout is set to 60 seconds
        }).then(function (response) {
            d.resolve(response.data);
        }).catch(function (error) {
            // d.reject(error);
            d.resolve(error.data);
        });
        return d.promise;
    }

    this.httpGet = function (url) {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: appDomain + url,
            timeout: 60000 // request timeout is set to 60 seconds
        }).then(function (response) {
            //console.log('data ===> ', data)
            d.resolve(response.data);
        }).catch(function (error) {
            //d.reject(error);
            d.resolve(error.data);
        });
        return d.promise;
    }
});

function getUrlParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}