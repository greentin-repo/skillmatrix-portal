'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginRegSetupApp', [
    'loginRegSetupApp.login'
])

app.service('loginRegappService', function ($http, $q, $timeout) {
    var response = {};
    //Develop
    var domain = "http://93.188.165.109:8080/enovation-api/";
    /*var domain = "http://97.74.234.178:8182/enovation/";*/

    this.httpPost = function (data, url) {
            var d = $q.defer();
            $http({
                method: 'POST',
                url: domain + url,
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
            url: domain + url,
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