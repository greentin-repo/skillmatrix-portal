var app = angular.module('mainApp.updateprofile', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/updateprofile', {
        templateUrl: 'content/updateprofile/updateprofile.html',
        controller: 'updateprofileCtrl'
    });
}]);
var ctrl = app.controller("updateprofileCtrl", ['$scope', 'appService', '$location', 'snackbar', '$route', '$rootScope', function($scope, appService, $location, snackbar, $route, $rootScope) {



    if ($rootScope.empDetails.dept != null) {
        $scope.selectedDepartment = $rootScope.empDetails.dept.deptId;
    } else {
        $scope.selectedDepartment = "";
    }

    if ($rootScope.empDetails.designation != null) {
        $scope.selectedDesignation = $rootScope.empDetails.designation.desigId;
    } else {
        $scope.selectedDesignation = "";
    }


    $scope.selectedDepartment = $scope.selectedDepartment.toString();
    $scope.selectedDesignation = $scope.selectedDesignation.toString();



    $scope.getDepartmentListForRegUser = function(branchId) {
        $scope.flagErrAddbranch = false;
        //console.log(branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + branchId).then(function(response) {
            //console.log("----------Department List For Reg User--------------");
            //console.log(response);
            $scope.departmentListForRegUser = response.deptList;
            //console.log($scope.departmentListForRegUser);
        });
    }

    $scope.getDesignationListForRegUser = function(branchId) {
        $scope.flagErrAddEmployeeDept = false
        appService.httpGet("getdesignationlistbybranch/" + branchId).then(function(response) {
            //console.log("------------Designation List For Reg User--------------");
            $scope.designationListForRegUser = response.designation;
            //console.log($scope.designationListForRegUser);
        });
    }

    $scope.getDepartmentListForRegUser($rootScope.empDetails.branch.branchId);
    $scope.getDesignationListForRegUser($rootScope.empDetails.branch.branchId);


    $scope.getDeptName = function(deptId) {
        var dept = null;
        for (var i = 0; i < $scope.departmentListForRegUser.length; i++) {
            var tmpdept = $scope.departmentListForRegUser[i];
            if (tmpdept.deptId == deptId) {
                dept = tmpdept;
                break;
            }
        }
        return dept;
    }

    $scope.getDesignationName = function(desigId) {
        var designation = null;
        for (var i = 0; i < $scope.designationListForRegUser.length; i++) {
            var tmpdesignation = $scope.designationListForRegUser[i];
            if (tmpdesignation.desigId == desigId) {
                designation = tmpdesignation;
                break;
            }
        }
        return designation;
    }


    $scope.setDeptDesigOfRegUser = function() {
        $scope.flagupdateprofileSpinner = true;
        $scope.data = {
            "empId": parseInt($rootScope.empDetails.empId),
            "firstName": $rootScope.empDetails.firstName,
            "lastName": $rootScope.empDetails.lastName,
            "contactNo": $rootScope.empDetails.contactNo,
            "address": $rootScope.empDetails.address,
            "deptId": $scope.selectedDepartment.toString(),
            "branchId": $rootScope.empDetails.branch.branchId,
            "desigId": $scope.selectedDesignation.toString(),
            "cmpyEmpId": $rootScope.empDetails.cmpyEmpId,
            "emailId": $rootScope.empDetails.emailId
        };

        //console.log("---------------Registered User Data Request---------------");
        //console.log($scope.data);
        appService.httpPost($scope.data, "updateemployeedetails").then(function(response) {
            //console.log("------------Updated Team List--------------");
            //console.log(response);
            if (response.result) {
                var dept = $scope.getDeptName($scope.selectedDepartment);
                $rootScope.empDetails.dept = dept;

                var designation = $scope.getDesignationName($scope.selectedDesignation);
                $rootScope.empDetails.designation = designation;

                localStorage.setItem("userDet", JSON.stringify($rootScope.empDetails));
                $scope.flagupdateprofileSpinner = false;
                snackbar.create("Updated employee details successfully.", 3000, "success");
                if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 1) {
                    window.location.href = 'template.html';
                } else {
                    window.location.href = 'setup-config/index.html';
                }
            } else {
                snackbar.create("error occured", 300, "error");
            }
        });
    }
    $scope.changeLanguage = function(x) {
        //console.log("value of x" +x)
        if (x == 'mr') {


            appService.httpGetLocal("../translations/suggestion-mr.json").then(function(response) {
                //console.log("----------language Response--------------");
                //console.log(response);
                $scope.langTranslate = response;
                //console.log( $scope.langTranslate.SuggId);

            });
        } else if (x == 'en') {
            appService.httpGetLocal("../translations/suggestion-en.json").then(function(response) {
                //console.log("----------language Response--------------");
                //console.log(response);
                $scope.langTranslate = response;
                //console.log( $scope.langTranslate.SuggId);

            });
        }
    }

    $scope.changeLanguage('en');


}]);
ctrl.$inject = ['$scope', 'sharedService'];