'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginRegSetupApp.login',[]);

app.controller("loginSetupCtrl", ['$scope','loginRegappService','$timeout',function($scope, loginRegappService,$timeout) {


    $scope.registerData = function(isvalid) {

        if(isvalid){
            $scope.flagAddSpinner = true;
            $scope.data = {
                "name" : $scope.name,
                "username" : "abc",
                "email" : $scope.email,
                "productId" : 1,
                "contactNumber" :$scope.contactNo,
                "designation" : $scope.designation,
                "location" : $scope.location,
                "orgName" : $scope.orgName,
                "subscripId" : 1,
                "roleName" : "SUPERADMIN",
                "country" : $scope.country,
                "state" : $scope.state
            };
            loginRegappService.httpPost($scope.data, "register").then(function (response) {
                console.log("-----------------Register Employee--------------");
                $scope.response = response;
                console.log(response);
                $scope.flagAddSpinner = false;
                if(response.result){
                   // snackbar.create("Registration successfully.", 3000, "success"); 
                    $timeout(function(){
                        window.location.href = 'index.html';
                    },100); 
                }
            });
        }else {
            angular.forEach($scope.RegistrationForm.$error.required, function(field) {
                field.$setDirty();
            });
        }

    }
}]);