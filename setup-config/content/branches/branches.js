'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.branches', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/branches', {
        templateUrl: 'content/branches/branches.html',
        controller: 'branchesCtrl'
    });
}]);

var ctrl = app.controller("branchesCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$filter', '$rootScope', 'CONST_RESOURCES', '$translate', function($scope, appService, $timeout, $location, snackbar, $filter, $rootScope, CONST_RESOURCES, $translate) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[1].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }

    $rootScope.setPercentComplete(1);

    $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.BRANCH;
    $scope.branchList = [];
    $scope.getBranchList = function() {
        $scope.branchListLoading = true;
        if ($rootScope.isSuperAdmin()) {
            appService.httpGet("getbranchlistbyorgid/" + $rootScope.empDetails.organization.orgId)
                .then(function(response) {
                    //console.log("----------------Branch List API Response----------------");
                    //console.log(response);
                    $scope.branchListLoading = false;
                    if (response.result) {
                        $scope.branchList = response.branchList;
                        $scope.branchListCopy = angular.copy(response.branchList);
                        $scope.makeMenuEnable();
                    } else {
                        $scope.branchList = [];
                    }
                });
        } else {
            $scope.branchListLoading = false;
            var branch = $rootScope.empDetails.branch;
            $scope.branchList.push(branch);
            $scope.branchId = branch.branchId.toString();
            $scope.branchListCopy = angular.copy($scope.branchList);
            //$scope.getDeptByBranch($scope.branchId);
        }
    }

    // Start to make next menu enable
    $scope.nextIndexMenu = ($rootScope.currentIndex + 1);
    $scope.makeMenuEnable = function() {
        if ($scope.branchList.length > 0) {
            $rootScope.makeIndexDataAvailable($rootScope.currentIndex);
            $rootScope.makeIndexEnable($scope.nextIndexMenu);
        } else {
            $rootScope.makeIndexDataNotAvailable($rootScope.currentIndex);
            $rootScope.makeIndexDisable($scope.nextIndexMenu);
        }
    }

    $scope.nextMenu = function() {
            //console.log("in next menu");
            $rootScope.setSelectedMenu($rootScope.sideMenuData[$scope.nextIndexMenu]);
            $location.path($rootScope.sideMenuData[$scope.nextIndexMenu].link);
        }
        // End to make next menu enable

    $scope.setImage = function() {
        if ($rootScope.empDetails.organization.logo != null && $rootScope.empDetails.organization.logo != undefined) {
            $scope.filepreview = $rootScope.empDetails.organization.logo;
        }
    }

    $scope.resetUpdateBranch = function() {
        for (var i = 0; i < $scope.branchList.length; i++) {
            $scope.branchList[i].isUpdate = false;
        }
    }
    $scope.resetAddBranch = function() {
        $scope.newBranchProcess = false;
        for (var i = 0; i < $scope.branchList.length; i++) {
            if ($scope.branchList[i].branchId == 0) {
                $scope.branchList.splice(i, 1);
            }
        }
    }

    $scope.getBranchList();

    $scope.addBranch = function() {
        $scope.resetUpdateBranch();
        if ($scope.newBranchProcess) {
            snackbar.create("Please enter new department name.", 5000, "error");
            return;
        }
        var newBranch = {
            "branchId": 0,
            "name": "",
            "location": "",
            "isUpdate": false,
            "orgId": $rootScope.empDetails.org.orgId
        };

        $scope.branchList.push(newBranch);
        $scope.newBranchProcess = true;
    }

    $scope.setBranchUpdate = function(data) {
        $scope.resetAddBranch();
        $scope.resetUpdateBranch();
        data.isUpdate = true;
    }

    $scope.updateBranch = function(data) {

        //console.log(data);
        if (data.name == "" && data.location == "") {
            snackbar.create("Please enter location and branch name", 5000, "error");
            return;
        } else if (data.name == "") {
            snackbar.create("Please enter branch name", 5000, "error");
            return;
        } else if (data.location == "") {
            snackbar.create("Please enter location", 5000, "error");
            return;
        }

        for (var i = 0; i < $scope.branchListCopy.length; i++) {
            var branchName = $scope.branchListCopy[i].branchName == null ? " " : $scope.branchListCopy[i].branchName.toLowerCase();
            var newbranch = data.name.toLowerCase();
            if (data.branchId != $scope.branchListCopy[i].branchId) {
                if (branchName == newbranch) {
                    //console.log(deptName + '==' + newDept);
                    snackbar.create("Already exits branch name.", 5000, "error");
                    return;
                }
            }
        };
        $scope.globalLoadingIndicator = true;
        appService.httpPost(data, "updatebranch")
            .then(function(response) {
                $scope.globalLoadingIndicator = false
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                $scope.newBranchProcess = false;
                data.isUpdate = false;
                $scope.getBranchList();
            });
    }

    $scope.submitBranch = function(data) {
        //console.log(data);
        if (data.name == "") {
            snackbar.create("Please enter new branch.", 5000, "error");
            return;
        } else if (data.location == "") {
            snackbar.create("Please enter location.", 5000, "error");
            return;
        }
        for (var i = 0; i < $scope.branchListCopy.length; i++) {
            var branchName = $scope.branchListCopy[i].name == null ? " " : $scope.branchListCopy[i].name.toLowerCase();
            var newbranch = data.name.toLowerCase();
            if (branchName == newbranch) {
                //console.log(deptName + '==' + newDept);
                snackbar.create("Already exits branch name.", 5000, "error");
                return;
            }
        };
        $scope.globalLoadingIndicator = true;
        appService.httpPost(data, "addbranch")
            .then(function(response) {
                $scope.globalLoadingIndicator = false
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                $scope.newBranchProcess = false;
                $scope.getBranchList();
            });
    }

    $scope.$watch('selectedLogo', function(newfile, oldfile) {

        //console.log($scope.selectedLogo.name);
        var ext = $scope.selectedLogo.name.match(/\.(.+)$/)[1];
        //console.log(ext);
        if (angular.lowercase(ext) != 'jpg' && angular.lowercase(ext) != 'jpeg' && angular.lowercase(ext) != 'png') {
            snackbar.create("Invalid file.Please select image file.", 5000, "error");
            $scope.uploadAttachmentModalSpinner = false;
            $scope.setImage();
            return;
        }

    });
    $scope.uploadFile = function() {

        //console.log($scope.selectedLogo.name);
        var ext = $scope.selectedLogo.name.match(/\.(.+)$/)[1];
        //console.log(ext);
        if (angular.lowercase(ext) != 'jpg' && angular.lowercase(ext) != 'jpeg' && angular.lowercase(ext) != 'png') {
            snackbar.create("Invalid file.Please select image file.", 5000, "error");
            $scope.uploadAttachmentModalSpinner = false;
            return;
        }

        var formData = new FormData();
        formData.append("orgId", $rootScope.empDetails.organization.orgId);
        formData.append("orgLogo", $scope.selectedLogo);
        $scope.uploadAttachmentModalSpinner = true;
        appService.uploadFileToUrl(formData, "uploadoranizationlogo")
            .then(function(response) {
                $scope.uploadAttachmentModalSpinner = false;
                //console.log("----------------Logo  API Response----------------");
                //console.log(response);
                if (response.data.status == "success") {

                    $rootScope.empDetails.organization.logo = response.data.logoPath;
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                    snackbar.create("Logo uploaded successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");

                }
            });
    }

    $scope.setSelectedImage = function(event) {
        //console.log("set selected image");
        //console.log(event);
    }

    $scope.setImage();

    $scope.showHelpPopup = function() {
        $("#helpModal")
            .modal('show');
    }

    /*---------------------------------------------new branch access list------------------------------------------19-8-19---------------change by sunanda */


    $scope.getBranchAccessSetup = function() {
        appService.httpGet("getBranchAccessSetupByEmpId/" + $rootScope.empDetails.organization.orgId + "/" + $rootScope.empDetails.empId)
            .then(function(response) {
                //console.log("----------------Branch List API Response----------------");
                //console.log(response);
                $scope.branchAccessList = [];
                angular.forEach(response.branchAccessList, function(value, key) {

                    if (response.result && value.isAccess == 'Y') {
                        //console.log(key + ': ');
                        //console.log(value);
                        $scope.branchAccessList.push(value);
                    }
                });
                //console.log($scope.branchAccessList);

                if ($scope.branchAccessList != null && $scope.branchAccessList.length > 0) {
                    var found = false;
                    for (var index = 0; index < $scope.branchAccessList.length; index++) {
                        $scope.branchAccessList[index].isSelected = true;
                        if ($scope.branchAccessList[index].branchId == $rootScope.empDetails.branch.branchId) {
                            found = true;
                        }
                    }
                    if (!found) {
                        var tmpData = angular.copy($rootScope.empDetails.branch)
                        tmpData.isSelected = true;
                        tmpData.branchName = $rootScope.empDetails.branch.name;
                        $scope.branchAccessList.push(tmpData);
                        $scope.branchListCopy = angular.copy($scope.branchAccessList);
                    }
                    $scope.selectAllBranch = true;
                } else if ($rootScope.empDetails.branch != null) {
                    var tmpData = angular.copy($rootScope.empDetails.branch)
                    tmpData.isSelected = true;
                    tmpData.branchName = $rootScope.empDetails.branch.name;

                    $scope.branchAccessList.push(tmpData);
                    $scope.branchListCopy = angular.copy($scope.branchAccessList);
                    $scope.selectAllBranch = true;
                }
                if ($scope.branchAccessList.length > 0) {
                    $scope.selectBranchId = $scope.branchAccessList[0].branchId.toString();
                    $scope.getNewBranchList();
                }
            });
    }

    /*--------------------------------------------------new branch list---------------------20-8-19----------------------change by sunanda */


    $scope.getNewBranchList = function() {
        $scope.flagEmployeeListSpinner = true;
        var data = {
                branchIds: [],
            }
            //console.log($scope.branchAccessList);
        for (var index = 0; index < $scope.branchAccessList.length; index++) {
            if ($scope.branchAccessList[index].isSelected) {
                data.branchIds.push($scope.branchAccessList[index].branchId);
            }
        }
        appService.httpPost(data, "getBranchListByBranchIds")
            .then(function(response) {
                //console.log("------------BranchList--------------");
                //console.log(response);
                if (response.result) {
                    $scope.newBranchList = response.branchList;
                }
            });
    }
    $scope.getBranchAccessSetup();
}]);