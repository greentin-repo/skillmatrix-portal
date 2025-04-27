'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.departments', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/departments', {
        templateUrl: 'content/departments/departments.html',
        controller: 'departmentsCtrl'
    });
}]);




var ctrl = app.controller("departmentsCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$filter', '$rootScope', 'CONST_RESOURCES', '$translate', function($scope, appService, $timeout, $location, snackbar, $filter, $rootScope, CONST_RESOURCES, $translate) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[2].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }

    $rootScope.setPercentComplete(2);
    $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.DEPARTMENT;
    $scope.dataDept = {};
    if ($rootScope.empDetails != null) {
        $scope.loggedInEmpId = $rootScope.empDetails.empId;
        $scope.loggedInName = $rootScope.empDetails.firstName + ' ' + $rootScope.empDetails.lastName;
        $scope.loggedInUserOrgId = $rootScope.empDetails.organization.orgId;
        $scope.loggedInUserBranchId = $rootScope.empDetails.branch.name;
        $scope.loggedInLocation = $rootScope.empDetails.branch.location;
    }
    $scope.mainTab = 1;
    $scope.setMainTab = function(tabId) {
        $scope.mainTab = tabId;
        // if($scope.mainTab == 1) {
        //   $scope.getZoneList();
        // }else
        if ($scope.mainTab == 1) {
            // $scope.getDeptList();
        } else if ($scope.mainTab == 2) {

        }
        //console.log($scope.mainTab);
    };

    $scope.isSetMainTab = function(tabId) {
        return $scope.mainTab === tabId;
    };

    //*----------------Start Code for Department-----------------------*//

    $scope.branchList = [];
    $scope.getBranchList = function() {
        $scope.branchListLoading = true;
        if ($rootScope.isSuperAdmin()) {
            appService.httpGet("getbranchlistbyorgid/" + $rootScope.empDetails.organization.orgId)
                .then(function(response) {
                    $scope.branchListLoading = false;
                    //console.log("----------------Branch List API Response----------------");
                    //console.log(response);
                    if (response.result) {
                        $scope.branchList = response.branchList;
                        $scope.setSelectedBranch($scope.branchList[0], 0);
                    } else {
                        $scope.branchList = [];
                    }
                });
        } else {
            $scope.branchListLoading = false;
            var branch = $rootScope.empDetails.branch;
            $scope.branchList.push(branch);
            $scope.branchId = branch.branchId.toString();
            //$scope.getDeptByBranch($scope.branchId);
            $scope.setSelectedBranch($scope.branchList[0], 0);
        }
    }

    $scope.setSelectedBranch = function(data, selectedIndex) {
        $scope.newDeptProcess = false;
        $scope.selectedBranch = data;
        $scope.selectedBranchIndex = selectedIndex + 1;
        // $scope.getDeptList();
    }

    $scope.getDeptList = function() {
        $scope.deptListLoading = true;
        //console.log($scope.dataDept.branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + $scope.dataDept.branchId)
            .then(function(response) {
                $scope.deptListLoading = false;
                //console.log("----------------Departments List API Response----------------");
                //console.log(response);
                $scope.newDeptProcess = false;
                if (response.result) {
                    $scope.deptList = response.deptList;
                    $scope.deptListCopy = angular.copy(response.deptList);
                    //console.log($scope.deptListCopy);
                    $scope.dwmSelectedDept = $scope.deptList[0];
                    $scope.getDeptLineList();
                    $scope.makeMenuEnable();
                    //$scope.resetDepartmentData();
                } else {
                    $scope.deptList = [];
                }
            });
    }

    // Start to make next menu enable
    $scope.nextIndexMenu = $rootScope.currentIndex + 1;
    $scope.makeMenuEnable = function() {
        if ($scope.deptList.length > 0) {
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

    $scope.resetUpdateDepartment = function() {
        for (var i = 0; i < $scope.deptList.length; i++) {
            $scope.deptList[i].isUpdate = false;
            if ($scope.deptList[i].deptId == 0) {
                $scope.deptList.splice(i, 1);
            }
        }
    }
    $scope.resetAddDepartment = function() {
        $scope.newDeptProcess = false;
        for (var i = 0; i < $scope.deptList.length; i++) {
            if ($scope.deptList[i].deptId == 0) {
                $scope.deptList.splice(i, 1);
            }
        }
    }
    $scope.addDepartment = function() {
        $scope.resetUpdateDepartment();
        if ($scope.newDeptProcess) {
            snackbar.create(" Please enter new department name.", 5000, "error");
            return;
        }

        var newDept = {
            "deptId": 0,
            "deptName": "",
            "isDeptForMaintenance": "",
            "orgId": $rootScope.empDetails.organization.orgId,
            "branchId": $scope.dataDept.branchId
        }
        $scope.deptList.push(newDept);
        $scope.newDeptProcess = true;
    }

    $scope.setUpdateDepartment = function(data) {

        $scope.resetUpdateDepartment();
        $scope.resetAddDepartment();
        data.isUpdate = true;
    }

    $scope.updateDepartment = function(data) {

        //console.log(data);
        if (data.deptName == "") {
            snackbar.create(" Please enter  department name.", 5000, "error");
            return;
        }

        for (var i = 0; i < $scope.deptListCopy.length; i++) {
            var deptName = $scope.deptListCopy[i].deptName.toLowerCase();
            var newDept = data.deptName.toLowerCase();
            if (data.deptId != $scope.deptListCopy[i].deptId) {
                if (deptName == newDept) {
                    snackbar.create("Already exits department name.", 5000, "error");
                    return;
                }
            }
        };
        $scope.globalLoadingIndicator = true;
        //console.log(data);
        appService.httpPost(data, "updatedepartment")
            .then(function(response) {
                $scope.globalLoadingIndicator = false
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                $scope.newDeptProcess = false;
                if (response.result) {
                    $scope.getDeptList();
                    snackbar.create("Department updated successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
    }

    $scope.deleteDepartment = function(dept) {
        $("#confirmRemModal")
            .modal('show');
        $("#confirmRemModal .msg")
            .text("that you want to remove this department from list?");
        $scope.selectedDept = dept;
    }

    $scope.removeDept = function(dept) {
        var removeDeptId = {
            deptId: dept.deptId
        };
        $scope.globalLoadingIndicator = true;
        $scope.flagdeleteSpinner = true;
        appService.httpPost(removeDeptId, "removedepartment")
            .then(function(response) {
                //console.log("-------------------Remove Department Response-------------------");
                //console.log(response);
                $scope.globalLoadingIndicator = false;
                $scope.flagdeleteSpinner = false;
                if (response.result) {
                    snackbar.create("Department removed successfully.", 5000, "success");
                    $scope.getDeptList();
                } else if (response.statusCode == 100) {
                    $scope.statusMessage = response.reason;
                    $("#statusMessageModal")
                        .modal('show');
                } else {
                    snackbar.create("Something went wrong. Please try again", 5000, "error");
                }
            });
    }

    $scope.submitDepartment = function(data) {
        //console.log(data);
        if (data.deptName == "") {
            snackbar.create(" Please enter new department name.", 5000, "error");
            return;
        }
        for (var i = 0; i < $scope.deptListCopy.length; i++) {
            var deptName = $scope.deptListCopy[i].deptName.toLowerCase();
            var newDept = data.deptName.toLowerCase();
            if (deptName == newDept) {
                snackbar.create("Already exits department name.", 5000, "error");
                return;
            }
        };
        $scope.globalLoadingIndicator = true;
        //console.log(data);
        appService.httpPost(data, "adddepartment")
            .then(function(response) {
                $scope.globalLoadingIndicator = false;
                //console.log("----------------Add Departments  API Response----------------");
                //console.log(response);
                $scope.newDeptProcess = false;
                if (response.result) {
                    $scope.getDeptList();
                    snackbar.create("Department added successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
    }

    $scope.getBranchList();


    //*-----------------End code Department-----------------------*//

    /**----------------------Code For Line Setup----------*/

    // $scope.getDeptList = function() {
    //   $scope.deptListLoading = true;
    //   appService.httpGet("getdepartmentlistbybranchid/" + $rootScope.empDetails.branch.branchId)
    //     .then(function(response) {
    //       $scope.deptListLoading = false;
    //       //console.log("----------------Departments List API Response----------------");
    //       //console.log(response);
    //       if (response.result) {
    //         $scope.deptList = response.deptList;
    //         $scope.dwmSelectedDept = $scope.deptList[0];
    //         $scope.getDeptLineList();
    //       } else {
    //         $scope.deptList = [];
    //       }
    //     });
    // }
    $scope.setdwmSelectedDept = function(data) {
        $scope.dwmSelectedDept = data;
        $scope.getDeptLineList();
    }
    $scope.getDeptLineList = function() {
        appService.httpGet("getLineNameList/" + $scope.dwmSelectedDept.deptId)
            .then(function(response) {
                //console.log("------------------Get Department Line Response-----------------");
                //console.log(response);
                if (response.result) {
                    var lineData = $filter('filter')(response.lineList, { isActive: '!N' }, true);
                    $scope.deptLineList = lineData;
                    $scope.deptLineListCopy = angular.copy(lineData);
                } else {
                    $scope.deptLineList = [];
                    $scope.deptLineListCopy = [];
                }
            });
    }

    $scope.resetUpdateLineName = function() {
        if ($scope.deptLineList == null || $scope.deptLineList.length == 0) {
            return;
        }
        for (var i = 0; i < $scope.deptLineList.length; i++) {
            $scope.deptLineList[i].isUpdate = false;
        }
    }
    $scope.resetAddLineName = function() {
        if ($scope.deptLineList == null || $scope.deptLineList.length == 0) {
            return;
        }
        $scope.newDeptProcess = false;
        for (var i = 0; i < $scope.deptLineList.length; i++) {
            if ($scope.deptLineList[i].deptId == 0) {
                $scope.deptLineList.splice(i, 1);
            }
        }
    }
    $scope.addLineName = function() {
        $scope.resetUpdateLineName();
        if ($scope.newDeptProcess) {
            snackbar.create(" Please enter new line name.", 5000, "error");
            return;
        }
        var newDept = {
            "id": 0,
            "name": "",
            "dept": $scope.dwmSelectedDept
        }
        $scope.deptLineList.push(newDept);
        $scope.newDeptProcess = true;
    }

    $scope.setUpdateLineName = function(data) {
        $scope.resetUpdateLineName();
        $scope.resetAddLineName();
        data.isUpdate = true;
    }

    $scope.updateLineName = function(data) {
        //console.log(data);
        if (data.name == "") {
            snackbar.create(" Please enter line name.", 5000, "error");
            return;
        }
        for (var i = 0; i < $scope.deptLineListCopy.length; i++) {
            var lineName = $scope.deptLineListCopy[i].name.toLowerCase();
            var newLineName = data.name.toLowerCase();
            if (data.deptId != $scope.deptLineListCopy[i].deptId) {
                if (lineName == newLineName) {
                    snackbar.create("Line Name already exits.", 5000, "error");
                    return;
                }
            }
        };
        appService.httpPost(data, "addLineName")
            .then(function(response) {
                $scope.globalLoadingIndicator = false
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                $scope.newDeptProcess = false;
                if (response.result) {
                    $scope.getDeptLineList();
                    snackbar.create("Line Name updated successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
    }

    /*-------------Remove Line-----------*/

    $scope.deleteLineName = function(data) {
        $scope.selectedLineDelete = data.id;
        console.log($scope.selectedLineDelete);
        $("#confirmRemLineModal")
            .modal('show');
        $("#confirmRemLineModal .msg")
            .text("that you want to remove this line name from list?");

    }

    $scope.removeline = function() {
        $scope.data = {
            id: $scope.selectedLineDelete
        };
        console.log($scope.data);
        $scope.globalLoadingIndicator = true;
        $scope.flagdeleteSpinner = true;
        appService.httpPost($scope.data, "removeLineDetails")
            .then(function(response) {
                //console.log("-------------------Remove Department Response-------------------");
                //console.log(response);
                $scope.globalLoadingIndicator = false;
                $scope.flagdeleteSpinner = false;
                if (response.result) {
                    snackbar.create("Line Name removed successfully.", 5000, "success");
                    $scope.getDeptLineList();
                } else if (response.statusCode == 100) {
                    $scope.statusMessage = response.reason;
                    $("#statusMessageModal")
                        .modal('show');
                } else {
                    snackbar.create("Something went wrong. Please try again", 5000, "error");
                }
            });
    }

    // $scope.removeDept = function(dept) {
    //   var removeDeptId = {
    //     deptId: dept.deptId
    //   };
    //   $scope.globalLoadingIndicator = true;
    //   $scope.flagdeleteSpinner = true;
    //   appService.httpPost(removeDeptId, "removedepartment")
    //     .then(function(response) {
    //       //console.log("-------------------Remove Department Response-------------------");
    //       //console.log(response);
    //       $scope.globalLoadingIndicator = false;
    //       $scope.flagdeleteSpinner = false;
    //       if (response.result) {
    //         snackbar.create("Line Name removed successfully.", 5000, "success");
    //         $scope.getDeptList();
    //       } else if (response.statusCode == 100) {
    //         $scope.statusMessage = response.reason;
    //         $("#statusMessageModal")
    //           .modal('show');
    //       } else {
    //         snackbar.create("Something went wrong. Please try again", 5000, "error");
    //       }
    //     });
    // }

    $scope.submitLineName = function(data) {
            if (data.name == "") {
                snackbar.create(" Please enter new line name.", 5000, "error");
                return;
            }
            for (var i = 0; i < $scope.deptLineListCopy.length; i++) {
                var name = $scope.deptLineListCopy[i].name.toLowerCase();
                var newName = data.name.toLowerCase();
                if (name == newName) {
                    snackbar.create("Already exits department name.", 5000, "error");
                    return;
                }
            };
            appService.httpPost(data, "addLineName")
                .then(function(response) {
                    $scope.globalLoadingIndicator = false;
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                    $scope.newDeptProcess = false;
                    if (response.result) {
                        $scope.getDeptLineList();
                        snackbar.create("Line Name added successfully.", 5000, "success");
                    } else {
                        snackbar.create("Error occured.Please try again.", 5000, "error");
                    }
                });
        }
        // $scope.getDeptList();

    // /**------------------End Code For Line Setup-----------*/
    /**----------------------Code For Zone Setup----------*/

    $scope.getZoneList = function() {
        $scope.zoneListLoading = true;
        appService.httpGet("getZoneList/" + $rootScope.empDetails.branch.branchId)
            .then(function(response) {
                $scope.zoneListLoading = false;
                //console.log("----------------Zone List API Response----------------");
                //console.log(response);
                if (response.result) {
                    $scope.zoneList = response.zoneList;
                    $scope.zoneListCopy = angular.copy(response.zoneList);
                    //console.log($scope.zoneListCopy);
                    // $scope.makeMenuEnable();
                } else {
                    $scope.zoneList = [];
                }
            });
    }
    $scope.getZoneList();


    $scope.resetUpdateZone = function() {
        for (var i = 0; i < $scope.zoneList.length; i++) {
            $scope.zoneList[i].isUpdate = false;
        }
    }

    $scope.resetAddZone = function() {
        // $scope.newZoneProcess = false;
        for (var i = 0; i < $scope.zoneList.length; i++) {
            if ($scope.zoneList[i].id == 0) {
                $scope.zoneList.splice(i, 1);
            }
        }
    }

    $scope.addZone = function() {
        $scope.resetUpdateZone();
        // if ($scope.newZoneProcess) {
        //   snackbar.create(" Please enter zone name.", 5000, "error");
        //   return;
        // }
        var newZone = {
            "id": 0,
            "zoneCode": "",
            "zoneName": "",
            "orgId": $rootScope.empDetails.organization.orgId,
            "branchId": $scope.selectedBranch.branchId
        }
        $scope.zoneList.push(newZone);
        // $scope.newZoneProcess = true;
    }

    $scope.setUpdateZone = function(data) {
        $scope.resetUpdateZone();
        $scope.resetAddZone();
        data.isUpdate = true;
    }

    $scope.submitZone = function(data) {
        // if (data.zoneName == "") {
        //   snackbar.create(" Please enter zone name.", 5000, "error");
        //   return;
        // }
        // for (var i = 0; i < $scope.zoneListCopy.length; i++) {
        //   var zoneName = $scope.zoneListCopy[i].zoneName.toLowerCase();
        //   var newZone = data.zoneName.toLowerCase();
        //   if (zoneName == newZone) {
        //     snackbar.create("Already exits Zone name.", 5000, "error");
        //     return;
        //   }
        // };
        //console.log(data);
        $scope.globalLoadingIndicator = true;
        appService.httpPost(data, "addOrUpdateZone")
            .then(function(response) {
                $scope.globalLoadingIndicator = false;
                //console.log("----------------Add Zone  API Response----------------");
                //console.log(response);
                // $scope.newZoneProcess = false;
                if (response.result) {
                    $scope.getZoneList();
                    snackbar.create("Zone added successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
    }


    $scope.updateZone = function(data) {
        //console.log(data);
        // if (data.zoneName == "") {
        //   snackbar.create(" Please enter  zone name.", 5000, "error");
        //   return;
        // }
        for (var i = 0; i < $scope.zoneListCopy.length; i++) {
            var zoneName = $scope.zoneListCopy[i].zoneName.toLowerCase();
            var newZone = data.zoneName.toLowerCase();
            if (data.id != $scope.zoneListCopy[i].id) {
                if (zoneName == newZone) {
                    snackbar.create("Already exits zone name.", 5000, "error");
                    return;
                }
            }
        };
        //console.log(data);
        $scope.globalLoadingIndicator = true;
        appService.httpPost(data, "addOrUpdateZone")
            .then(function(response) {
                $scope.globalLoadingIndicator = false
                    //console.log("----------------Add Departments  API Response----------------");
                    //console.log(response);
                    // $scope.newZoneProcess = false;
                if (response.result) {
                    $scope.getZoneList();
                    snackbar.create("Zone updated successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
    }

    /*-------------Help Statement-------------*/

    $scope.showHelpPopup = function(section) {
        //console.log(section);
        if (section == 'department') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.DEPARTMENT;
        } else if (section == 'lineSetup') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.LINE_SETUP;
        } else if (section == 'zone') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.ZONE;
        }
        $("#helpModal")
            .modal('show');
    }



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
                    }
                    $scope.selectAllBranch = true;
                } else if ($rootScope.empDetails.branch != null) {
                    var tmpData = angular.copy($rootScope.empDetails.branch)
                    tmpData.isSelected = true;
                    tmpData.branchName = $rootScope.empDetails.branch.name;

                    $scope.branchAccessList.push(tmpData);
                    $scope.selectAllBranch = true;
                }
                if ($scope.branchAccessList.length > 0) {
                    $scope.dataDept.branchId = $scope.branchAccessList[0].branchId.toString();
                    $scope.getDeptList();
                }
            });
    }
    $scope.getBranchAccessSetup();

    $scope.deptToggle = function() {
        $('.deptwrapper .list')
            .slideToggle('fast');
    }
    $scope.toggleDeptDiv = function(event) {
        var $trigger = $(".deptwrapper");
        if ($trigger !== event.target && !$trigger.has(event.target)
            .length) {
            $(".list")
                .slideUp("fast");
        }
    }

    $scope.setDeptSelected = function(branch) {
        branch.isSelected = (branch.isSelected) ? false : true;
        for (var i = 0; i < $scope.branchAccessList.length; i++) {
            if (!$scope.branchAccessList[i].isSelected) {
                $scope.selectAllBranch = false;
            }
        }
        $scope.getDeptList();
        //console.log(branch);
        $scope.deptToggle();
    }
    $scope.selectAllDepartment = function() {
        var flag = ($scope.selectAllBranch) ? false : true;
        $scope.selectAllBranch = flag;
        for (var i = 0; i < $scope.branchAccessList.length; i++) {
            $scope.branchAccessList[i].isSelected = $scope.selectAllBranch;
        }
        $scope.getDeptList();
        $scope.deptToggle();

    }

}]);


ctrl.$inject = ['$scope', 'sharedService'];