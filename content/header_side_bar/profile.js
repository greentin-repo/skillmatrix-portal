'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('mainApp.profile', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/profile', {
            templateUrl: 'content/header_side_bar/profile.html?ver=' + appVersion,
            controller: 'profileCtrl'
        }).when('/changepassword', {
            templateUrl: 'content/header_side_bar/changepassword.html?ver=' + appVersion,
            controller: 'profileCtrl'
        });
    }]);

app.directive("compareTo", function () {
    return {
        require: "ngModel",
        scope: {
            repeatPassword: "=compareTo"
        },
        link: function (scope, element, attributes, paramval) {
            paramval.$validators.compareTo = function (val) {
                return val == scope.repeatPassword;
            };
            scope.$watch("repeatPassword", function () {
                paramval.$validate();
            });
        }
    };
});

var headerCtrl = app.controller("profileCtrl", ['$scope', 'appService', 'sharedService', 'snackbar', 'CONST_RESOURCES', '$rootScope', '$filter', function ($scope, appService, sharedService, snackbar, CONST_RESOURCES, $rootScope, $filter) {

    $scope.empDetails = JSON.parse(localStorage.getItem('userDet'));
    $scope.flagProfilePicUploadSpinner = false;

    //console.log($scope.empDetails.empId);

    $(function () {
        var today = new Date() + 1;
        //Date picker
        $('.datepicker_doa,.datepicker_dob')
            .datepicker({
                format: "yyyy-mm-dd",
                endDate: "today",
                autoclose: true
            })
    });

    $scope.getEmployeeList = function () {
        appService.httpGet("getEmployeeByEmpId/" + $scope.empDetails.empId)
            .then(function (response) {
                //console.log("------------Login User Emp List--------------");
                if (response.result) {
                    $scope.EmployeeList = response.empDetails;
                } else {
                    var empDetails = JSON.parse(localStorage.getItem('userDet'));
                    $scope.EmployeeList = empDetails;
                }
                //console.log($scope.EmployeeList); 
                if ($scope.EmployeeList.langName != undefined && $scope.EmployeeList.langName != null) {
                    $scope.selectedLanguage = $scope.EmployeeList.langName;
                } else { 
                    $scope.selectedLanguage = $scope.langList[0];
                }
                if (!angular.isUndefined($scope.EmployeeList.dob) && $scope.EmployeeList.dob != null) {
                    $('.datepicker_dob')
                        .datepicker('setDate', $scope.EmployeeList.dob);
                    $('.datepicker_dob')
                        .datepicker('update');
                }
                if (!angular.isUndefined($scope.EmployeeList.doa) && $scope.EmployeeList.doa != null) {
                    $('.datepicker_doa')
                        .datepicker('setDate', $scope.EmployeeList.doa);
                    $('.datepicker_doa')
                        .datepicker('update');
                }
                // if(response.status = "success"){
                //     snackbar.create(response.reason, 3000, "success");
                // } else {
                //     snackbar.create("Error occurred. Please try again.", 3000, "error");
                // }
            });
    }

    $scope.getEmployeeList();
    $scope.setDate = function (type) {
        if (type == 'dob') {
            if ($scope.EmployeeList.dob != null && !angular.isUndefined($scope.EmployeeList.dob)) {
                $('.datepicker_dob')
                    .datepicker('setDate', $scope.EmployeeList.dob);
                $('.datepicker_dob')
                    .datepicker('update');
            }
            //console.log('Enter DOB')
        } else {
            if ($scope.EmployeeList.doa != null && !angular.isUndefined($scope.EmployeeList.doa)) {
                $('.datepicker_doa')
                    .datepicker('setDate', $scope.EmployeeList.doa);
                $('.datepicker_doa')
                    .datepicker('update');
            }
            //console.log('Enter DOB')
        }
    }
    $scope.updateProfileDetail = function () {
        $scope.data = {
            empId: $scope.empDetails.empId,
            langId: $scope.selectedLanguage.langId,
            contactNo: $scope.EmployeeList.contactNo,
            emailId: $scope.EmployeeList.emailId,
            /*       firstName: $scope.empDetails.firstName,
                  lastName: $scope.empDetails.lastName,
                  contactNo: $scope.empDetails.contactNo */
        };
        if ($scope.EmployeeList.doa == null || $scope.EmployeeList.doa == 'null' || $scope.EmployeeList.doa == '' || angular.isUndefined($scope.EmployeeList.doa)) {
            //delete $scope.data.doa;
        } else {
            $scope.data.doa = $scope.EmployeeList.doa;
        }
        if ($scope.EmployeeList.dob == null || $scope.EmployeeList.dob == 'null' || $scope.EmployeeList.dob == '' || angular.isUndefined($scope.EmployeeList.dob)) {
            //delete $scope.data.dob;
        } else {
            $scope.data.dob = $scope.EmployeeList.dob;
        }
        //console.log($scope.data);
        appService.httpPost($scope.data, "updateProfileDetails")
            .then(function (response) {
                //console.log("-----------------update Profile details--------------");
                //console.log(response);
                if (response.result) {
                    snackbar.create("Profile information updated successfully.", 3000, "success");
                    $rootScope.empDetails.langName = $scope.selectedLanguage;
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                    $rootScope.changeLanguage($scope.selectedLanguage.langId);
                } else {
                    $rootScope.empDetails.langName = {
                        "langId": 1,
                        "langName": "English"
                    };
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                    $rootScope.changeLanguage($scope.selectedLanguage.langId);
                    snackbar.create("Error occurred. Please try again.", 3000, "error");
                }
            });
    }

    //$scope.updateProfileDetail();

    $scope.backButton = function () {
        window.history.back();
    }
    // if ($scope.EmployeeList.profilePic != null) {
    //     $scope.flagShowRemovePicBtn = false;
    //     return;
    // }

    $scope.profilePicFiles = [];
    $scope.uploadBtn = function (e) {
        $scope.flagHideUploadBtn = true;
        $scope.$apply(function () {
            for (var i = 0; i < e.files.length; i++) {

                $scope.profilePicFiles.push(e.files[i]);
            }
        });
    }

    $scope.updateprofilepic = function () {
        $scope.flagProfilePicUploadSpinner = true;
        var formData = new FormData();
        formData.append("empId", $scope.empDetails.empId);
        formData.append("langId", $scope.selectedLanguage.langId);
        if ($scope.profilePicFiles != null && $scope.profilePicFiles.length > 0) {
            for (var i in $scope.profilePicFiles) {
                formData.append("profilePic", $scope.profilePicFiles[i]);
            }
        } else {
            return;
        }

        appService.uploadFileToUrl(formData, "updateProfilePic")
            .then(function (response) {
                //console.log("------------------Profile Upload-------------------")
                //console.log(response);
                $scope.flagProfilePicUploadSpinner = false;
                if (response.data.result) {
                    $scope.profilePicFiles = [];
                    $rootScope.empDetails.profilePic = response.data.empProfilePic;
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                    snackbar.create("Profile information updated successfully.", 3000, "success");
                    $scope.flagShowRemovePicBtn = true;
                    $scope.flagHideUploadBtn = false;
                } else {
                    snackbar.create("Error occurred. Please try again.", 3000, "error");
                }

            });
    }

    // Reset password
    $scope.resetPassPopUp = function () {
        $("#resetPassModal")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
    }

    $scope.resetPassword = function (isValid) {
        if (isValid) {
            $scope.data = {
                empId: $scope.empDetails.empId,
                password: $scope.password,
                newPassword: $scope.newPassword
            }
            if ($scope.isEnable == 'Y' && $scope.policyObj.lowerCaseValid == true && $scope.policyObj.lengthValid == true && $scope.policyObj.specialValid == true && $scope.policyObj.numberValid == true) {
                appService.httpPost($scope.data, "resetpassword")
                    .then(function (response) {
                        //console.log("--------------------Password Reset Response------------------");
                        //console.log(response);
                        if (response.result) {
                            $scope.cleardata();
                            window.location.href = 'login.html';
                            snackbar.create("Password reset successfully.", 3000, "success");
                            $("#resetPassModal")
                                .modal('hide');
                        } else {
                            if (response.statusCode == 100) {
                                snackbar.create(response.reason, 3000, "error");
                            } else {
                                snackbar.create("Error Occurred. Please try again.", 3000, "error");
                            }
                        }
                    });
            } else if ($scope.isEnable == 'N') {
                appService.httpPost($scope.data, "resetpassword")
                    .then(function (response) {
                        //console.log("--------------------Password Reset Response------------------");
                        //console.log(response);
                        if (response.result) {
                            $scope.cleardata();
                            window.location.href = 'login.html';
                            snackbar.create("Password reset successfully.", 3000, "success");
                            $("#resetPassModal")
                                .modal('hide');
                        } else {
                            if (response.statusCode == 100) {
                                snackbar.create(response.reason, 3000, "error");
                            } else {
                                snackbar.create("Error Occurred. Please try again.", 3000, "error");
                            }
                        }
                    });
            } else {
                snackbar.create("Error occurred. Please try again.", 3000, "error");
                return;
            }
        }
    }

    $scope.cleardata = function () {
        $scope.password = '';
        $scope.newPassword = '';
    }

    $scope.removeProfilePic = function () {
        $scope.flagProfilePicRemove = true;
        appService.httpGet("removeprofilepic/" + $scope.empDetails.empId)
            .then(function (response) {
                //console.log("--------------------Remove Profile Pic Response------------------");
                //console.log(response);
                $scope.flagProfilePicRemove = false;
                if (response.status == "success") {
                    snackbar.create("Profile picture removed successfully.", 3000, "success");
                    $rootScope.empDetails.profilePic = '';
                    $scope.EmployeeList.profilePic = '';
                    $("#profilePicId")
                        .val('');
                    $scope.getEmployeeList();
                    $scope.flagShowRemovePicBtn = false;
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                } else {
                    snackbar.create("Error Occurred. Please try again.", 3000, "error");
                }
            });
    }

    $scope.getLangList = function () {
        appService.httpGet('getlanguagelist')
            .then(function (response) {
                //console.log("--------------------Remove Profile Pic Response------------------");
                //console.log(response);
                if (response.result) {
                    $scope.langList = response.langList;
                } else {
                    $scope.langList = [];
                }
            })
    }
    $scope.setLanguage = function (id) {
        if (id) {
            var objt = {

            }
            appService.httpPost()
        }
    }
    $scope.getLangList();
    $scope.changeLanguage = function (x) {
        //console.log("value of x" + x)
        if (x == 'mr') {


            appService.httpGetLocal("translations/suggestion-mr.json")
                .then(function (response) {
                    //console.log("----------language Response--------------");
                    //console.log(response);
                    $scope.langTranslate = response;
                    //console.log($scope.langTranslate.SuggId);

                });
        } else if (x == 'en') {
            appService.httpGetLocal("translations/suggestion-en.json")
                .then(function (response) {
                    //console.log("----------language Response--------------");
                    //console.log(response);
                    $scope.langTranslate = response;
                    //console.log($scope.langTranslate.SuggId);

                });
        }
    }

    //$scope.changeLanguage('en');

    /*-----------------------------------password policy List------------------------------------------------------change by sunanda */

    $scope.getpolicy = function () {
        appService.httpGet("getPasswordPolicy/" + $rootScope.empDetails.organization.orgId).then(function (response) {
            //console.log("--------------------Get password policy-------------------");
            //console.log(response);
            if (response.result == true) {
                $scope.passwordPolicy = response.passwordPolicy;
                $scope.maxLifeTimeInDays = $scope.passwordPolicy.maxLifeTimeInDays;
                $scope.minAlphabetic = $scope.passwordPolicy.minAlphabetic;
                $scope.minNumeric = $scope.passwordPolicy.minNumeric;
                $scope.minPasswdLength = $scope.passwordPolicy.minPasswdLength;
                $scope.minSpecialChar = $scope.passwordPolicy.minSpecialChar;
                $scope.isEnable = response.passwordPolicy.isEnable;
            } else {
                $scope.isEnable = "N"
            }

        });
    }
    $scope.getpolicy();


    $scope.emp = {};
    $scope.checkPassPolicy = function () {
        if ($scope.isEnable == 'Y') {
            $scope.flagPass = true;
        }
        //console.log($scope.flagPass);
        //console.log($scope.newPassword);
        $scope.policyObj = {
            small: [],
            capital: [],
            num: [],
            special: [],

        }

        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if ($scope.newPassword.length <= 16) {
            for (var i = 0; i < $scope.newPassword.length; i++) {
                if ($scope.newPassword[i] >= 0 && $scope.newPassword[i] <= 9) {
                    //console.log("number match="+$scope.newPassword[i]);
                    $scope.policyObj.num.push($scope.newPassword[i]);

                } else if ($scope.newPassword[i] >= 'a' && $scope.newPassword[i] <= 'z') {
                    //console.log("lowerCaseLetters match="+$scope.newPassword[i]);
                    $scope.policyObj.small.push($scope.newPassword[i])

                } else if ($scope.newPassword[i] >= 'A' && $scope.newPassword[i] <= 'Z') {
                    //console.log("upperCaseLetters match="+$scope.newPassword[i]);
                    $scope.policyObj.capital.push($scope.newPassword[i]);

                } else {
                    //console.log("specialCaseLetters match="+$scope.newPassword[i]);
                    $scope.policyObj.special.push($scope.newPassword[i])
                }
            }
        }
        //console.log( "policyObj");
        //console.log( $scope.policyObj);

        // Validate lowercase letters
        if (($scope.policyObj.small.length + $scope.policyObj.capital.length) >= $scope.minAlphabetic) {
            //console.log("inlowercase");

            $scope.policyObj.lowerCaseValid = true;
        } else {
            $scope.policyObj.lowerCaseValid = false;
        }

        // Validate numbers
        if ($scope.policyObj.num.length >= $scope.minNumeric) {
            $scope.policyObj.numberValid = true;
        } else {
            $scope.policyObj.numberValid = false;
        }
        // Validate spesial
        if ($scope.policyObj.special.length >= $scope.minSpecialChar) {
            $scope.policyObj.specialValid = true;
        } else {
            $scope.policyObj.specialValid = false;
        }
        // Validate length
        if ($scope.newPassword.length >= $scope.minPasswdLength) {
            $scope.policyObj.lengthValid = true;
        } else {
            $scope.policyObj.lengthValid = false;
        }
    }
    // //console.log( $scope.minAlphabetic);
    // //console.log( $scope.minNumeric);
    // //console.log( $scope.minSpecialChar);
    // //console.log( $scope.minPasswdLength);
    // //console.log( $scope.policyObj.lengthValid);
    // //console.log( $scope.policyObj.numberValid);
    // //console.log( $scope.policyObj.lowerCaseValid);
    // //console.log( $scope.policyObj.specialValid);
}]);

headerCtrl.$inject = ['$scope', 'sharedService'];