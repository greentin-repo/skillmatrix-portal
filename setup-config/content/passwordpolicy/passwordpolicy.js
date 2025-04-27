'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.policySetup', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/policySetup', {
        templateUrl: 'content/passwordpolicy/passwordpolicy.html',
        controller: 'policySetupCtrl'
    });
}]);

app.controller("policySetupCtrl", ['$scope', '$rootScope', 'appService', 'snackbar', 'CONST_RESOURCES', '$translate', function($scope, $rootScope, appService, snackbar, CONST_RESOURCES, $translate) {
    $scope.loggedInUserOrgId = $rootScope.empDetails.organization.orgId;

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[25].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }

    $scope.passwordPolicy = {};
    $scope.getpolicy = function() {
        appService.httpGet("getPasswordPolicy/" + $rootScope.empDetails.organization.orgId).then(function(response) {
            //console.log("--------------------Get password policy-------------------");
            //console.log(response);
            if (response.result) {
                $scope.passwordPolicy = response.passwordPolicy;
                //console.log($scope.passwordPolicy);
                if ($scope.passwordPolicy.isEnable == "Y") {
                    $scope.passwordPolicy.isEnable = true;
                } else {
                    $scope.passwordPolicy.isEnable = false;
                }
            } else {
                $scope.passwordPolicy = {};
            }
        });
    }
    $scope.getpolicy();



    $scope.savepolicy = function() {
        //console.log($scope.passwordPolicy.id == 0);
        if ($scope.passwordPolicy.id == null) {
            $scope.passwordPolicy.orgId = $rootScope.empDetails.organization.orgId;
            if ($scope.passwordPolicy.maxLifeTimeInDays <= 0) {
                snackbar.create("Set minimum lifetime days 1", 3000, "error");
                return;
            }
            appService.httpPost($scope.passwordPolicy, "savePasswordPolicy").then(function(response) {
                //console.log(response);
                if (response.result) {
                    $scope.getpolicy();
                    snackbar.create("Policy added successfully.", 3000, "success");
                } else {
                    snackbar.create("Error occured.", 3000, "error");
                }
            });
        } else {
            if ($scope.passwordPolicy.maxLifeTimeInDays <= 0) {
                snackbar.create("Set minimum lifetime days 1", 3000, "error");
                return;
            }
            appService.httpPost($scope.passwordPolicy, "updatePasswordPolicy").then(function(response) {
                //console.log(response);
                if (response.result) {
                    $scope.passwordPolicy = {};
                    $scope.getpolicy();
                    snackbar.create("Policy updated successfully.", 3000, "success");
                } else {
                    snackbar.create("Error occured.", 3000, "error");
                }
            });
        }

    }


    $scope.setPolicy = function() {
        //console.log("------change policy------");
        var tmppolicy = $scope.passwordPolicy.isEnable ? "Y" : "N";
        var data = {
                "orgId": $rootScope.empDetails.organization.orgId,
                "isEnable": tmppolicy
            }
            //console.log(data);
        appService.httpPost(data, "enableDisablePasswordPolicy").then(function(response) {
            //console.log(response);
            if (response.result) {
                var msg = tmppolicy == "Y" ? "Policy activated" : "Policy deactivated";
                $scope.passwordPolicy.isEnable = tmppolicy;
                $scope.getpolicy();
                snackbar.create("Update successfully.", 5000, "success");
            } else {
                snackbar.create("Something went wrong. Please try again", 5000, "error");
            }
        });
    }




    // $scope.savepolicy = function (form) {
    //     //console.log($scope.passwordPolicy.id == 0);
    //     //console.log(form)
    //     if (form.$invalid) {
    //         angular.forEach(form.$error.required, function (field) {
    //             field.$setDirty();
    //         });
    //         return;
    //     }
    //     if ($scope.passwordPolicy.orgId == $rootScope.empDetails.organization.orgId) {
    //         snackbar.create("Already Exists.", 3000, "error");
    //         return;
    //     }

    //     if ($scope.passwordPolicy.id == null) {
    //         $scope.passwordPolicy.orgId = $rootScope.empDetails.organization.orgId;
    //         //console.log($scope.passwordPolicy);
    //         appService.httpPost($scope.passwordPolicy, "savePasswordPolicy").then(function (response) {
    //             //console.log(response);
    //             if (response.result) {
    //                 $scope.savepolicyForm.$setPristine();
    //                 $scope.getpolicy();
    //                 snackbar.create("Policy added successfully.", 3000, "success");
    //             } else {
    //                 snackbar.create("Error occured.", 3000, "error");
    //             }
    //         });
    //     } else {
    //         appService.httpPost($scope.passwordPolicy, "updatePasswordPolicy").then(function (response) {
    //             //console.log(response);
    //             if (response.result) {
    //                 $scope.savepolicyForm.$setPristine();
    //                 $scope.getpolicy();
    //                 snackbar.create("Policy updated successfully.", 3000, "success");
    //             } else {
    //                 snackbar.create("Error occured.", 3000, "error");
    //             }
    //         });
    //     }

    // }

    $scope.showHelpPopup = function() {
        $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.PASSWORDPOLICY;
        $("#helpModal").modal('show');
    }


}]);