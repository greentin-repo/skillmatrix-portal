'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.employee', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/employee', {
            templateUrl: 'content/employee/employee.html?ver=' + appVersion,
            controller: 'employeeCtrl'
        });
    }]);


app.filter('shortName', function () {
    return function (x) {
        var shortName = "",
            nameTokens = [];
        x = x.trim();
        nameTokens = x.split(" ");
        nameTokens.forEach(function (token) {
            shortName += (token[0]) ? token[0] : ''
        });
        return shortName;
    };
});

app.filter('replaceVal', function () {
    return function (input) {
        if (input == null || input == "") {
            input = input.replace('null', '');
        }
        return input;
    }
});

app.filter('filterUnderEval', function () {
    return function (items, statusIds) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (statusIds.includes(item.status_master.statusId)) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
app.directive('showtab',
    function () {
        return {
            link: function (scope, element, attrs) {
                element.click(function (e) {
                    e.preventDefault();
                    $(element)
                        .tab('show');
                });
            }
        };
    });
app.filter('ifEmpty', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input === null || input === '' || input === "null") {
            return defaultValue;
        }
        return input;
    }
});
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

app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start;
            return input.slice(start);
        }
        return [];
    };
});
var ctrl = app.controller("employeeCtrl", ['$scope', '$filter', 'appService', '$location', 'snackbar', '$route', '$rootScope', 'CONST_RESOURCES', '$translate', function ($scope, $filter, appService, $location, snackbar, $route, $rootScope, CONST_RESOURCES, $translate) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[3].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }
    console.log("---------------------------Employee Controller--------------------------")
    $scope.flagTeamDetNotAvailMsg = false;
    $rootScope.setPercentComplete(3);
    $scope.branchAccessList = [];
    $scope.filterDet = {
        status: 'All'
    };
    $scope.branch = $rootScope.empDetails.branch.branchId;
    $scope.selectbranch = $rootScope.empDetails.branch.name;
    $scope.pendingActionDet = {};
    $scope.paginateConfig = {
        itemsPerPage: 10,
        current: 1
    }

    $scope.onPageChanged = function (newPageNumber) {
        $scope.paginateConfig.current = newPageNumber;
        //console.log("---------------On Page Change--------------");
        // var pageCount = Math.ceil($scope.employeeList.length / $scope.paginateConfig.itemsPerPage);
        // if (pageCount != newPageNumber) {
        //     $scope.tableEntries = "Showing " + (($scope.paginateConfig.itemsPerPage * newPageNumber) - $scope.paginateConfig.itemsPerPage + 1) + " to " + ($scope.paginateConfig.itemsPerPage * newPageNumber) + " out of " + ($scope.employeeList.length);
        // } else {
        //     $scope.tableEntries = "Showing " + (($scope.paginateConfig.itemsPerPage * newPageNumber) - $scope.paginateConfig.itemsPerPage + 1) + " to " + ($scope.employeeList.length) + " out of " + ($scope.employeeList.length);
        // }
    }

    $scope.getDepartmentListForRegUser = function (branchId) {
        $scope.flagErrAddbranch = false;
        //console.log(branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + branchId)
            .then(function (response) {
                //console.log("----------Department List For Reg User--------------");
                //console.log(response);
                $scope.departmentListForRegUser = response.deptList;
                //console.log($scope.departmentList);
            });
    }
    /*------------------------------------------Start for Access Branch List------------------------------8/5/19------------------chnage by sunanda-------------- */
    $scope.getBranchAccessSetup = function () {
        appService.httpGet("getBranchAccessSetupByEmpId/" + $rootScope.empDetails.organization.orgId + "/" + $rootScope.empDetails.empId)
            .then(function (response) {
                //console.log("----------------Branch List API Response----------------");
                //console.log(response);
                $scope.branchAccessList = response.branchAccessList;
                // if ($scope.branchAccessList != null) {
                //   var isBranchDetailsDuplicate =true;
                //   $scope.branchAccessList = [];
                //   for (var i = 0; i < response.branchAccessList.length; i++) {
                //   if (response.branchAccessList[i].branchId == $rootScope.empDetails.branch.branchId && response.branchAccessList[i].branchName == $rootScope.empDetails.branch.name) {
                //       //console.log("INSIDE IN ");
                //       isBranchDetailsDuplicate = false;
                //     }
                //     //console.log(isBranchDetailsDuplicate);
                //     if(isBranchDetailsDuplicate)$scope.branchAccessList.push({
                //       branchName: $rootScope.empDetails.branch.name,
                //       branchId: $rootScope.empDetails.branch.branchId
                //     });
                //     $scope.branchAccessList.push(response.branchAccessList[i]);
                //   }
                //   //console.log($scope.branchAccessList);
                //   $scope.selectBranchId = $scope.branchAccessList[0].branchId.toString();

                // }
                if (!response.result) {
                    $scope.branchAccessList = [];
                }

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
                    $scope.selectBranchId = $scope.branchAccessList[0].branchId.toString();
                }
                $scope.getEmployeeList();
            });
    }
    $scope.getBranchAccessSetup();
    /*------------------------------------------End Of  Access Branch List------------------------------8/5/19------------------chnage by sunanda-------------- */
    $scope.getLineNameList = function (dept) {
        appService.httpGet("getLineNameList/" + dept.deptId)
            .then(function (response) {
                //console.log("----------get Line Name Response--------------");
                //console.log(response);
                if (response.result) {
                    if (response.lineList != null && response.lineList.length > 0) {
                        $scope.lineNameList = response.lineList;
                        for (var index = 0; index < $scope.lineNameList.length; index++) {
                            if ($scope.line != null && $scope.lineNameList[index].id == $scope.line.id) {
                                $scope.line = $scope.lineNameList[index];
                            } else {
                                $scope.line = {};
                            }
                        }
                    } else {
                        $scope.lineNameList = [];
                    }
                } else {
                    $scope.lineNameList = [];
                }
            });
    }

    /*------------------------------------------End Of  Access Branch List------------------------------*/
    $scope.getLineNameListForUpdate = function (dept) {
        appService.httpGet("getLineNameList/" + dept)
            .then(function (response) {
                //console.log("----------get Line Name Response--------------");
                //console.log(response);
                if (response.result) {
                    $scope.lineNameList = response.lineList;
                    // for (var index = 0; index < $scope.lineNameList.length; index++) {
                    //     if ($scope.line != null && $scope.lineNameList[index].id == $scope.line.id) {
                    //         $scope.line = $scope.lineNameList[index];
                    //     }
                    // }
                } else {
                    $scope.lineNameList = [];
                }
            });
    }

    $scope.flagEmployeeListSpinner = false;
    $scope.flagTblemployee = false;
    $scope.flagexcelimport = true;
    $scope.flaguploaded = false;


    if ($rootScope.empDetails.dept == null) {
        $scope.isDeptAdded = false;
        $scope.getDepartmentListForRegUser($rootScope.empDetails.branch.branchId);
    } else {
        $scope.isDeptAdded = true;
    }

    if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
        $scope.loggedInEmpId = $rootScope.empDetails.empId;
        $scope.loggedInorganization = $rootScope.empDetails.organization;
        $scope.loggedInorganizationName = $rootScope.empDetails.organization.name;
        $scope.loggedInBranchName = $rootScope.empDetails.branch.name;
    }

    $scope.setcontentData = function () {
        var contentData = JSON.parse(localStorage.getItem("contentData"));
        //console.log(contentData);
        $scope.browsedImage = contentData.image;
    }

    $scope.empDet = {};
    $scope.empExcelDetailsData = {}
    $scope.addSetupDetails = function (bulkEmployeeType) {
        // if (bulkEmployeeType != "CREATE" && bulkEmployeeType != "UPDATE") {
        //     snackbar.create("Please select you want to create or modify employee", "3000", "error")
        //     return;
        // }
        // $scope.getBulkLevelType = bulkEmployeeType;
        // console.log($scope.getBulkLevelType)

        var flagSelectFile = angular.element("#upload-file-input")
            .val();
        // $scope.filepath = flagSelectFile;
        // //console.log($scope.filepath);

        var ext = flagSelectFile.slice((flagSelectFile.lastIndexOf(".") - 1 >>> 0) + 2);
        //console.log(ext);
        if (angular.lowercase(ext) != 'xls' && angular.lowercase(ext) != 'xlsx' && angular.lowercase(ext) != '') {
            snackbar.create("Incorrect file. Please use correct sample xls file.", 3000, "error");
            return;
        }
        else if (angular.lowercase(ext) == '') {
            snackbar.create("Please upload file", 3000, "error");
            return;
        }
        if ($scope.uploadSelectBranchId == null || $scope.uploadSelectBranchId == undefined || $scope.empDet.uploadSelectBranchId == '') {
            snackbar.create("Please select branch.", 3000, "error");
            return;
        }

        // if ($scope.empDet.uploadSelectBranchId == null || $scope.empDet.uploadSelectBranchId == undefined || $scope.empDet.uploadSelectBranchId == '') {
        //     snackbar.create("Please select branch.", 3000, "error");
        //     return;
        // }

        $scope.flagexcelimport = true;
        var formData = new FormData($("#upload-events-form")[0]);
        formData.append("empId", $rootScope.empDetails.empId);
        formData.append("createdByName", ($rootScope.empDetails.firstName + '' + $rootScope.empDetails.lastName));
        formData.append("portalLink", $rootScope.empDetails.organization.portalLink);
        formData.append("orgName", $rootScope.empDetails.organization.name);
        formData.append("orgId", $rootScope.empDetails.organization.orgId);
        formData.append("orgAlies", $rootScope.empDetails.organization.alies);
        formData.append("isSetupCompleted", $rootScope.empDetails.productOrgConfigDet.isSetupCompleted);
        formData.append("branchId", $scope.uploadSelectBranchId);
        formData.append("createdBy", $rootScope.empDetails.empId);
        formData.append("registrationByPass", $rootScope.empDetails.productOrgConfigDet.registrationByPass);
        formData.append("type", $scope.getBulkLevelType);
        // if ($scope.getBulkLevelType == 'CREATE') {
        //     $scope.msg = "Employee added successfully"
        // }
        // else if ($scope.getBulkLevelType == 'UPDATE') {
        //     $scope.msg = "Employee updated successfully"
        // }
        $("#upload-file-message")
            .text('');
        $scope.flaguploadExcel = true;
        $scope.flaguploaded = true;
        appService.uploadFileToUrl(formData, "bulkEmployeeUpload")
            .then(function (response) {
                //console.log("--------------------Upload Setup Response------------------");
                //console.log(response);
                $scope.flaguploadExcel = true;
                $scope.flaguploaded = false;
                $scope.flagexcelimport = true;
                if (response.data.result) {
                    // snackbar.create("Employee added successfully.", 3000, "success");
                    snackbar.create($scope.langTranslate.Employee_added_successfully, 3000, "success");
                    $scope.getEmployeeList($scope.selectBranchId);
                    $("#upload-file-input")
                        .val('');
                    $scope.empExcel = '';
                    // $scope.empExcelDetailsData.empExcel = '';
                } else {
                    if (response.data.statusCode == 100) {
                        $scope.empExcel = '';
                        // $scope.empExcelDetailsData.empExcel = '';
                        $("#upload-file-input")
                            .val('');
                        if (response.data.empErrorList != null && response.data.empErrorList.length > 0) {
                            $scope.erroEmployeeList = response.data.empErrorList;
                            $('#employee_errorlist')
                                .modal('show');
                        } else {
                            snackbar.create(response.data.reason, 3000, "error");
                        }
                    } else {
                        snackbar.create($scope.langTranslate.Oops_Please_try_again, 300, "error");
                    }

                }
            });
    }

    // $scope.addSetupDetails = function() {
    //     $scope.flagexcelimport = false;
    //     var flagSelectFile = angular.element("#upload-file-input").val();
    //     var flagVal = 1;

    //     if (flagVal == 1) {
    //         var formData = new FormData($("#upload-events-form")[0]);
    //         formData.append("empId", $rootScope.empDetails.empId);
    //         formData.append("createdByName", $rootScope.empDetails.empName);
    //         formData.append("portalLink", empDetails.organization.portallink);
    //         formData.append("orgName", $rootScope.empDetails.organization.name);
    //         formData.append("orgId", $rootScope.empDetails.organization.orgId);
    //         $("#upload-file-message").text('');
    //         $scope.flaguploadExcel = true;
    //         appService.uploadFileToUrl(formData, "bulkEmployeeUpload").then(function(response) {
    //             //console.log("--------------------Upload Setup Response------------------");
    //             //console.log(response);
    //             $scope.flaguploadExcel = false;
    //             $scope.flaguploaded = true;
    //             if (response.status == "success") {
    //                 snackbar.create("Added setup successfully.", 3000, "success");
    //             } else if (response.status == "fail") {
    //                 snackbar.create("Error Occurred. Please try again.", 3000, "error");
    //             }
    //         });
    //     }
    // }


    /*--------------------------------------Employee Start--------------------------------------------*/
    // $scope.getEmployeeList = function() {
    //   $scope.flagEmployeeListSpinner = true;
    //   appService.httpGet("getAllEmpList/0/" + $rootScope.empDetails.branch.branchId + "/0")
    //     .then(function(response) {
    //       //console.log("------------EmployeeList--------------");
    //       //console.log(response);
    //       $scope.flagTblemployee = true;

    //       $scope.flagEmployeeListSpinner = false;

    //       if (response.result) {
    //         //console.log("successfully get");
    //         $scope.employeeList = response.allEmpDetails;
    //         for (var i = 0; i < $scope.employeeList.length; i++) {
    //           $scope.employeeList[i].fullName = $scope.employeeList[i].firstName + ' ' + $scope.employeeList[i].lastName;
    //           if ($scope.employeeList[i].isDeactive == 0) {
    //             $scope.employeeList[i].empcheck = true;
    //           } else {
    //             $scope.employeeList[i].empcheck = false;
    //           }
    //         }

    //         $scope.onPageChanged(1);
    //         $scope.makeMenuEnable();
    //       } else if (response.status == "fail") {
    //         snackbar.create("error occur", 300, "error");
    //       }
    //     });
    // }


    /*---------------------------New Employee List ----------------------------8-5-19------------------------------------change by sunanda----------------- */
    var statusFilterData = {
        "status": "All",
        "isDeactive": 0
    }
    $scope.getEmployeeList = function (statusFilterData) {
        console.log(statusFilterData)
        $scope.flagEmployeeListSpinner = true;
        var data = {
            branchIds: [],
            status: "ALL"
        }
        //console.log($scope.branchAccessList);
        for (var index = 0; index < $scope.branchAccessList.length; index++) {
            if ($scope.branchAccessList[index].isSelected) {
                data.branchIds.push($scope.branchAccessList[index].branchId);
            }
        }
        if (data.branchIds.length == 0) {
            //console.log("----------------------------inside employee-------------");
            $scope.flagEmployeeListSpinner = false;
            $scope.flagEmployee = false;
            $scope.employeeList = [];
            $scope.tableEntries = '';
            return;

        }
        appService.httpPost(data, "getAllEmpListByBrannchIds").then(function (response) {
            //console.log("------------EmployeeList--------------");
            console.log(response);
            $scope.flagTblemployee = true;
            $scope.flagEmployeeListSpinner = false;
            console.log(statusFilterData)

            if (response.result) {
                //console.log("successfully get");
                if (response.allEmpDetails != null && response.allEmpDetails.length > 0) {
                    $scope.employeeList = [];
                    $scope.flagTeamDetNotAvailMsg = true;
                    // for (var i = 0; i < response.allEmpDetails.length; i++) {
                    //     var name = '';
                    //     if (response.allEmpDetails[i].firstName) {
                    //         name += response.allEmpDetails[i].firstName;
                    //     }
                    //     if (response.allEmpDetails[i].lastName) {
                    //         if (response.allEmpDetails[i].firstName) {
                    //             name += ' ';
                    //         }
                    //         name += response.allEmpDetails[i].lastName;
                    //     }
                    //     response.allEmpDetails[i].fullName = name;
                    // }
                    for (var i = 0; i < response.allEmpDetails.length; i++) {
                        var name = '';
                    
                        if (response.allEmpDetails[i].firstName) {
                            name += response.allEmpDetails[i].firstName;
                        }
                    
                        if (response.allEmpDetails[i].middleName) {
                            if (response.allEmpDetails[i].firstName || response.allEmpDetails[i].lastName) {
                                name += ' ';
                            }
                            name += response.allEmpDetails[i].middleName;
                        }
                    
                        if (response.allEmpDetails[i].lastName) {
                            if (response.allEmpDetails[i].firstName || response.allEmpDetails[i].middleName) {
                                name += ' ';
                            }
                            name += response.allEmpDetails[i].lastName;
                        }
                    
                        response.allEmpDetails[i].fullName = name;
                    }
                    
                    $scope.employeeList = response.allEmpDetails;
                    // $scope.onPageChanged(1);
                    $scope.makeMenuEnable();
                } else {
                    $scope.employeeList = [];
                    $scope.flagTeamDetNotAvailMsg = false;
                }
            } else if (response.status == "fail") {
                // snackbar.create("error occur", 300, "error");
                snackbar.create($scope.langTranslate.Oops_Please_try_again, 5000, "error");
            }

        });
    }
    // $scope.getEmployeeList();

    // Start to make next menu enable
    $scope.nextIndexMenu = $rootScope.currentIndex + 1;
    $scope.makeMenuEnable = function () {
        if ($scope.employeeList.length > 0) {
            $rootScope.makeIndexDataAvailable($rootScope.currentIndex);
            $rootScope.makeIndexEnable($scope.nextIndexMenu);
        } else {
            $rootScope.makeIndexDataNotAvailable($rootScope.currentIndex);
            $rootScope.makeIndexDisable($scope.nextIndexMenu);
        }
    }

    $scope.nextMenu = function () {
        //console.log("in next menu");
        $rootScope.setSelectedMenu($rootScope.sideMenuData[$scope.nextIndexMenu]);
        $location.path($rootScope.sideMenuData[$scope.nextIndexMenu].link);
    }
    // End to make next menu enable

    /*---------create Employee-------*/
    /* $scope.createEmployee = function() {
         // $("#employeeModal").modal('show');
         $("#employeeModal").modal({ backdrop: 'static', keyboard: false });
    } */

    $scope.departArray = [];
    $scope.getDepartmentList = function (branchId) {
        $scope.flagErrAddbranch = false;
        //console.log(branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + branchId)
            .then(function (response) {
                //console.log("----------Department List--------------");
                //console.log(response);
                if (response.result) {
                    if (response.deptList != null && response.deptList.length > 0) {
                        $scope.departmentList = response.deptList;
                    } else {
                        $scope.departmentList = [];
                    }
                } else {
                    $scope.departmentList = [];
                }
                //console.log($scope.departmentList);
                //$scope.getDesignationList(branchId);
            });
    }

    //$scope.getDepartmentList($scope.branch);

    // $scope.getDesignationList = function(branchId) {
    //     $scope.flagErrAddEmployeeDept = false
    //     //console.log($scope.dept);
    //     appService.httpGet("getdesignationlistbybranch/" + branchId).then(function(response) {
    //         //console.log("------------designation List--------------");
    //         $scope.DesignationList = response.designation;
    //         //console.log($scope.DesignationList);
    //     });
    // }

    $scope.getBranchList = function () {
        appService.httpGet("getbranchlistbyorgid/" + $rootScope.empDetails.organization.orgId)
            .then(function (response) {
                //console.log("------------Branch List--------------");
                if (response.result) {
                    if (response.branchList != null && response.branchList.length > 0) {
                        $scope.branchList = response.branchList;
                    } else {
                        $scope.branchList = [];
                    }
                } else {
                    $scope.branchList = [];
                }
                //console.log($scope.branchList);
            });
    }

    // $scope.getDesignationListForRegUser = function(branchId) {
    //     $scope.flagErrAddEmployeeDept = false
    //     //console.log($scope.dept);
    //     appService.httpGet("getdesignationlistbybranch/" + branchId).then(function(response) {
    //         //console.log("------------Designation List For Reg User--------------");
    //         $scope.designationListForRegUser = response.designation;
    //         //console.log($scope.designationListForRegUser);
    //     });
    // }

    //$scope.getDepartmentListForRegUser($rootScope.empDetails.branch.branchId);


    //$scope.getDesignationListForRegUser($rootScope.empDetails.branch.branchId);

    $scope.createEmployee = function () {
        $scope.addemployeeForm.$setPristine();
        $scope.addemployeeForm.$setUntouched();

        $scope.step = 1;
        $scope.fname = '';
        $scope.lname = '';
        $scope.Mname = '';
        $scope.contactno = '';
        $scope.empAddr ='';
        $scope.empid = ''
        $scope.emailId = '';
        $scope.designation = '';
        $scope.cmpyEmpId = '';
        // $scope.add = '';
        // $("#employeeModal1").modal("show");
        $scope.getBranchList();
        $scope.getDepartmentList($scope.branch);
        $("#employeeModal1")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
    }

    $scope.setDate = function (type) {
        if (type == 'dob') {
            if ($scope.dob != null && !angular.isUndefined($scope.dob)) {
                $('.datepicker_dob')
                    .datepicker('setDate', $scope.dob);
                $('.datepicker_dob')
                    .datepicker('update');
            }
            //console.log('Enter DOB')
        } else if (type == 'doj') {
            if ($scope.doj != null && !angular.isUndefined($scope.doj)) {
                $('.datepicker_doj')
                    .datepicker('setDate', $scope.doj);
                $('.datepicker_doj')
                    .datepicker('update');
            }
            console.log('Enter DOJ')
        } else if (type == 'doa') {
            if ($scope.doa != null && !angular.isUndefined($scope.doa)) {
                $('.datepicker_doa')
                    .datepicker('setDate', $scope.doa);
                $('.datepicker_doa')
                    .datepicker('update');
            }
            //console.log('Enter DOB')
        }
    }

    $scope.submitEmployee = function (isValid) {
        console.log(isValid);
        // if (form.$invalid) {
            
        //     angular.forEach(form.$$controls, function (field) {
        //         if (field.$invalid) {
        //             field.$setDirty();
        //         }
        //     });
        //     angular.element('input.ng-invalid').first().focus();
        //     return;
        // }
        if ($scope.emailId == '' && $scope.contactno == '' && $scope.cmpyEmpId == '') {
            snackbar.create($scope.langTranslate.Pleaseemployee_ID, 3000, "error");
            return;
        }
        if ($scope.lineNameList != null && $filter('filter')($scope.lineNameList, { isActive: 'Y' }, true).length > 0) {
            if ($scope.EmpData.line == undefined || $scope.EmpData.line == null || $scope.EmpData.line == '') {
                snackbar.create('Please select line', 3000, "error");
                return;
            }
        }
        if ($scope.doj == undefined || $scope.doj == null || $scope.doj == '') {
            snackbar.create('Please select date of joining', 3000, "error");
            return;
        }
        if ($scope.emplevelList != null && $scope.emplevelList.length > 0) {
            if ($scope.emplvlId == undefined || $scope.emplvlId == null || $scope.emplvlId == '') {
                snackbar.create('Please select employee level', 3000, "error");
                return;
            }
        }

        var validDropdown = $scope.validate('employee');
        if (isValid && validDropdown) {
            $scope.flagAddSpinner = true;
            $scope.data = {
                cmpyEmpId: $scope.cmpyEmpId,
                firstName: $scope.fname,
                lastName: $scope.lname,
                middleName: $scope.Mname,
                contactNo: $scope.contactno,
                address:$scope.empAddr,
                createdBy: $rootScope.empDetails.empId,
                dept: {
                    deptId: $scope.dept.deptId
                },
                organization: {
                    orgId: $rootScope.empDetails.organization.orgId,
                    portalLink: $rootScope.empDetails.organization.portalLink
                },
                branch: {
                    branchId: $scope.createSelectBranchId
                },
                emailId: $scope.emailId,
                designation: $scope.designation,
                isSetupCompleted: $rootScope.empDetails.productOrgConfigDet.isSetupCompleted,
                registrationByPass: $rootScope.empDetails.productOrgConfigDet.registrationByPass,
                empLevelDetails: {
                    empLvlId: parseInt($scope.emplvlId)
                }
            };

            // if ($scope.line != null) {
            //     $scope.data.line = $scope.line;
            // }

            if ($scope.EmpData.line) {
                $scope.data.line = $scope.EmpData.line;
            }
            if ($scope.doa == null || $scope.doa == 'null' || $scope.doa == '' || angular.isUndefined($scope.doa)) {
                //delete $scope.data.doa;
            } else {
                $scope.data.doa = $scope.doa;
            }
            if ($scope.dob == null || $scope.dob == 'null' || $scope.dob == '' || angular.isUndefined($scope.dob)) {
                //delete $scope.data.dob;
            } else {
                $scope.data.dob = $scope.dob;
            }
            if ($scope.doj == null || $scope.doj == 'null' || $scope.doj == '' || angular.isUndefined($scope.doj)) {
                //delete $scope.data.dob;
            } else {
                $scope.data.doj = $scope.doj;
            }

            if ($scope.emplvlId == 0 || $scope.emplvlId == undefined) {
                delete $scope.data.empLevelDetails;
            }
            console.log($scope.data);
            // return;
            appService.httpPost($scope.data, "createemployee")
                .then(function (response) {
                    //console.log("-----------------Create Employee--------------");
                    //console.log(response);
                    $scope.flagAddSpinner = false;
                    if (response.result) {
                        $scope.line = null;
                        $scope.createSelectBranchId = '';
                        $scope.clearForm("employee");
                        $("#employeeModal1")
                            .modal("hide");
                        // snackbar.create("Employee added successfully.", 3000, "success");
                        snackbar.create($scope.langTranslate.Employee_added_successfully, 3000, "success");
                        $scope.getEmployeeList($scope.selectBranchId);
                    } else {
                        snackbar.create(response.reason, 3000, "error");
                    }
                });
        } else {
            angular.forEach($scope.addemployeeForm.$error.required, function (field) {
                field.$setDirty();
            });
        }
    };

    $scope.validate = function (token) {
        if (token == 'employee') {
            var flagVal = 1;
            if (!$scope.dept) {
                $scope.flagErrAddEmployeeDept = true;
                flagVal = 0;
            }

            if (flagVal == 0)
                return false;
            else
                return true;
        }
    }

    $scope.clearForm = function (formName) {
        if (formName == "employee") {
            $scope.fname = '';
            $scope.lname = '';
            $scope.emailId = '';
            $scope.contactno = '';
            $scope.empid = '';
            $scope.designation = '';
            $scope.cmpyEmpId = '';
            $scope.dept = '';
        }
    }

    /*-----Update Employee----*/
    $scope.EmpData = {};
    $scope.editEmployee = function (x) {
        console.log(x);
        $scope.EmpData = {};
        $scope.EmpData = x;
        console.log(  $scope.EmpData )
        //console.log("------------Edit Employee-----------");
        //console.log(x);
        $scope.empId = x.empId;
        $scope.firstName = x.firstName;
        $scope.lastName = x.lastName;
        $scope.middleName = x.middleName;
        $scope.address = x.address;


        if (x.cmpyEmpId == undefined || x.cmpyEmpId == null || x.cmpyEmpId == 'null') {
            $scope.cmpyEmpId = "";
        } else {
            $scope.cmpyEmpId = x.cmpyEmpId;
        }
        if (x.contactNo == undefined || x.contactNo == null || x.contactNo == 'null') {
            $scope.contactNo = "";
        } else {
            $scope.contactNo = x.contactNo;
        }
        if (x.designation == undefined || x.designation == null || x.designation == 'null') {
            $scope.designation = "";
        } else {
            $scope.designation = x.designation;
        }
        if (x.emailId == undefined || x.emailId == null || x.emailId == 'null') {
            $scope.emailId = "";
        } else {
            $scope.emailId = x.emailId;
        }
        // $scope.address = x.address;
        $scope.updatedept = {}
        if (x.dept != null) {
            $scope.updatedept.deptId = x.dept.deptId.toString();
            // $scope.EmpData.dept.deptId = x.dept.deptId.toString();
            $scope.deptName = x.dept.deptName;
            $scope.getLineNameListForUpdate(x.dept.deptId);
        }


        // if (x.line != null) {
        //     $scope.EmpData.line = x.line;
        //     $scope.updatedept.line = x.line;
        // }

         if (x.line != null) {
            // $scope.EmpData.line = x.line;
            // $scope.updatedept.line = x.line;
             $scope.EmpData.line = x.line;
        }
        
        if (x.branch.branchId != null) {
            $scope.branchId = x.branch.branchId.toString();
            $scope.brachName = x.branch.name;
        }

        if (x.empLevelDetails != null) {
            $scope.empLvlDet = x.empLevelDetails.empLvlId.toString();
        } else {
            $scope.empLvlDet = '';
        }
        //console.log($scope.empLvlDet);
        $scope.orgId = $rootScope.empDetails.organization.orgId; //x.organization.orgId;
        if (x.dob != null && !angular.isUndefined(x.dob)) {
            $('.datepicker_dob')
                .datepicker('setDate', x.dob);
            $('.datepicker_dob')
                .datepicker('update');
        }
        if (x.doj != null && !angular.isUndefined(x.doj)) {
            $('.datepicker_doj')
                .datepicker('setDate', x.doj);
            $('.datepicker_doj')
                .datepicker('update');
            // $scope.EmpData.doj = x.doj;
        }
        if (x.doa != null && !angular.isUndefined(x.doa)) {
            $('.datepicker_doa')
                .datepicker('setDate', x.doa);
            $('.datepicker_doa')
                .datepicker('update');
        }
        // $("#employee_editModal").modal('show');
        $scope.getDepartmentList($scope.branchId);
        $scope.getemployeeLevelDetails($scope.branchId);
        //$scope.getBranchList();
        $("#employee_editModal1")
            .modal({
                backdrop: 'static',
                keyboard: false
            });

    }

    $scope.editEmpDet = function (form, isValid) {
        console.log(form);

        // if (form.$invalid) {
        //     angular.forEach(form.$$controls, function (field) {
        //         if (field.$invalid) {
        //             field.$setDirty();
        //         }
        //     });
        //     angular.element('input.ng-invalid').first().focus();
        //     return;
        // }

        // if ($scope.EmpData.doj == undefined || $scope.EmpData.doj == null || $scope.EmpData.doj == '') {
        //     $scope.doj = form.doj.$modelValue;
        // }
        $scope.doa = form.doa.$modelValue;
        $scope.dob = form.dob.$modelValue;
        $scope.doj = form.doj.$modelValue;
        // console.log($scope.empLvlDet);
        if ($scope.branchId == null || $scope.branchId == '' || angular.isUndefined($scope.branchId)) {
            snackbar.create("Please Select Branch", 3000, "error");
            return
        }
        if ($scope.emailId == '' && $scope.contactNo == '' && $scope.cmpyEmpId == '') {
            // snackbar.create("Please enter email or mobile number or employee ID", 3000, "error");
            snackbar.create($scope.langTranslate.Pleaseemployee_ID, 3000, "error");
            return;
        }
        if ($scope.updatedept.deptId == null || $scope.updatedept.deptId == '' || angular.isUndefined($scope.updatedept.deptId)) {
            snackbar.create("Please Select Department", 3000, "error");
            return
        }
        if ($scope.lineNameList != null && $filter('filter')($scope.lineNameList, { isActive: 'Y' }, true).length > 0) {
            if ($scope.EmpData.line == undefined || $scope.EmpData.line == null || $scope.EmpData.line == '') {
                snackbar.create('Please select line', 3000, "error");
                return;
            }
        }

        // if ($scope.EmpData.doj == undefined || $scope.EmpData.doj == null || $scope.EmpData.doj == '') {
        //     if ($scope.doj == undefined || $scope.doj == null || $scope.doj == '') {
        //         snackbar.create('Please select date of joining', 3000, "error");
        //         return;
        //     }
        // }
        if ($scope.emplevelList != null && $scope.emplevelList.length > 0) {
            if ($scope.empLvlDet == undefined || $scope.empLvlDet == null || $scope.empLvlDet == '') {
                snackbar.create('Please select employee level', 3000, "error");
                return;
            }
        }

        if (isValid) {
            $scope.flagupdateSpinner = true;
            $scope.data = {
                "empId": parseInt($scope.empId),
                "firstName": $scope.firstName,
                "middleName": $scope.middleName,
                "address": $scope.empAddr,
                "lastName": $scope.lastName,
                "contactNo": $scope.contactNo,
                "deptId": $scope.updatedept.deptId,
                "branchId": $scope.branchId,
                "desigId": $scope.desigId,
                "cmpyEmpId": $scope.cmpyEmpId,
                "emailId": $scope.emailId,
                "designation": $scope.designation,
                "isSetupCompleted": $rootScope.empDetails.productOrgConfigDet.isSetupCompleted,
                "registrationByPass": $rootScope.empDetails.productOrgConfigDet.registrationByPass,
                // "line": $scope.EmpData.line,
                "empLevelDetails": {
                    "empLvlId": parseInt($scope.empLvlDet)
                }
            };


            if ($scope.doa == null || $scope.doa == 'null' || $scope.doa == '' || angular.isUndefined($scope.doa)) {
                //delete $scope.data.doa;
            } else {
                $scope.data.doa = $scope.doa;
            }
            if ($scope.dob == null || $scope.dob == 'null' || $scope.dob == '' || angular.isUndefined($scope.dob)) {
                //delete $scope.data.dob;
            } else {
                $scope.data.dob = $scope.dob;
            }

            // if ($scope.EmpData.doj == undefined || $scope.EmpData.doj == null || $scope.EmpData.doj == '') {
            if ($scope.doj == null || $scope.doj == 'null' || $scope.doj == '' || angular.isUndefined($scope.doj)) {
                //delete $scope.data.dob;
            } else {
                $scope.data.doj = $scope.doj;
            }
            // }

            if ($scope.EmpData.line) {
                $scope.data.line = $scope.EmpData.line;
            }

            console.log($scope.data);
            // return;
            appService.httpPost($scope.data, "updateemployeedetails")
                .then(function (response) {
                    //console.log("------------Updated Team List--------------");
                    //console.log(response);
                    if (response.status == "success") {
                        $scope.line = null;
                        $scope.flagupdateSpinner = false;
                        // snackbar.create("Employee updated successfully.", 3000, "success");
                        snackbar.create($scope.langTranslate.Employee_updated_successfully, 3000, "success");
                        $("#employee_editModal1")
                            .modal('hide');
                        $scope.getEmployeeList($scope.selectBranchId);
                    } else {
                        snackbar.create("error occur", 300, "error");
                        $scope.flagupdateSpinner = false;
                        $("#employee_editModal1")
                            .modal('hide');
                    }
                });
        } else {
            angular.forEach($scope.updateemployeeForm.$error.required, function (field) {
                field.$setDirty();
            });
        }
    }

    $scope.showEmpDeleteModel = function (x) {
        $scope.selectEmpForDel = x;
        $('#confirmDeleteModal')
            .modal('show');
    }

    $scope.employeeStatusold = function (data) {
        var res = {
            "empId": data.empId,
            "isDeactive": 1
        };
        //console.log(res);
        $scope.flagdeleteSpinner = true;
        appService.httpPost(res, "deactiveEmployee")
            .then(function (response) {
                //console.log("-----------------Employee status--------------");
                $scope.flagdeleteSpinner = false;
                if (response.result) {
                    $('#confirmDeleteModal')
                        .modal('hide');
                    snackbar.create("Employee removed successfully", 3000, "success");
                    $scope.getEmployeeList();
                } else if (response.statusCode == 100) {
                    $('#confirmDeleteModal')
                        .modal('hide');
                    $scope.statusMessage = response.reason;
                    $("#statusMessageModal")
                        .modal('show');
                } else {

                    $("#statusMessageModal")
                        .modal('show');
                    // snackbar.create("Error occurred. Please try again.", 3000, "error");
                    snackbar.create($scope.langTranslate.Oops_Please_try_again, 3000, "error");
                }
            });
    }
    $scope.employeeStatus = function (data) {
        $scope.flagdeleteSpinner = true;
        // deactivateEmployeeRecord
        appService.httpGet('deactivateEmployeeRecord/' + data.empId).then(function (response) {
            $scope.flagdeleteSpinner = false;
            if (response.result) {
                $('#confirmDeleteModal')
                    .modal('hide');
                snackbar.create("Employee removed successfully", 3000, "success");
                $scope.getEmployeeList();
            } else {
                if (response.statusCode == 100) {
                    snackbar.create(response.reason, 3000, "error");
                } else {
                    snackbar.create("Error occurred while removing employee. Please try again.", 3000, "error");
                }
            }
        })
    }
    // $scope.employeeStatus = function(data) {
    //     var res = {
    //         "empId": data.empId,
    //         "orgId": $scope.loggedInorganization.orgId
    //     };
    //     $scope.flagdeleteSpinner = true;
    //     appService.httpPost(res, "deleteEmployee")
    //         .then(function(response) {
    //             //console.log("-----------------Employee status--------------");
    //             $scope.flagdeleteSpinner = false;
    //             if (response.result) {
    //                 $('#confirmDeleteModal')
    //                     .modal('hide');
    //                 snackbar.create("Employee removed successfully", 3000, "success");
    //                 $scope.getEmployeeList();
    //             } else if (response.statusCode == 100) {
    //                 $('#confirmDeleteModal')
    //                     .modal('hide');
    //                 $scope.statusMessage = response.reason;
    //                 $("#statusMessageModal")
    //                     .modal('show');
    //             } else {
    //                 if (response.pendingList != null) {
    //                     $scope.statusMessage = {};
    //                     $scope.statusMessage.kuber = response.pendingList.kuberPending;
    //                     $scope.statusMessage.audit = response.pendingList.auditPending;
    //                     $scope.statusMessage.concern = response.pendingList.concernPending;
    //                     $scope.statusMessage.dwn = response.pendingList.dwmPending;
    //                     $scope.statusMessage.incident = response.pendingList.incidentPending;
    //                     $scope.statusMessage.suggestion = response.pendingList.suggestionPending;
    //                     $scope.statusMessage.tpm = response.pendingList.tpmPending;


    //                     if ($scope.statusMessage.kuber.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.kuber.length; j++) {
    //                             $scope.statusMessage.kuber[j].assignedToDate = $filter('date')(new Date($scope.statusMessage.kuber[j].assignedToDate), 'yyyy-MM-dd');
    //                         }
    //                     }
    //                     if ($scope.statusMessage.suggestion.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.suggestion.length; j++) {
    //                             $scope.statusMessage.suggestion[j].assignedDate = $filter('date')(new Date($scope.statusMessage.suggestion[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }

    //                     if ($scope.statusMessage.audit.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.audit.length; j++) {
    //                             $scope.statusMessage.audit[j].assignedDate = $filter('date')(new Date($scope.statusMessage.audit[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }

    //                     if ($scope.statusMessage.concern.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.concern.length; j++) {
    //                             $scope.statusMessage.concern[j].assignedDate = $filter('date')(new Date($scope.statusMessage.concern[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }

    //                     if ($scope.statusMessage.dwn.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.dwn.length; j++) {
    //                             $scope.statusMessage.dwn[j].assignedDate = $filter('date')(new Date($scope.statusMessage.dwn[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }

    //                     if ($scope.statusMessage.tpm.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.tpm.length; j++) {
    //                             $scope.statusMessage.tpm[j].assignedDate = $filter('date')(new Date($scope.statusMessage.tpm[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }
    //                     if ($scope.statusMessage.audit.length > 0) {
    //                         for (var j = 0; j < $scope.statusMessage.audit.length; j++) {
    //                             $scope.statusMessage.audit[j].assignedDate = $filter('date')(new Date($scope.statusMessage.audit[j].assignedDate), 'yyyy-MM-dd');
    //                         }
    //                     }
    //                     console.log($scope.statusMessage);
    //                     $('#confirmDeleteModal')
    //                         .modal('hide');
    //                     $("#statusMessageModal")
    //                         .modal('show');
    //                 } else {
    //                     snackbar.create($scope.langTranslate.Oops_Please_try_again, 3000, "error");

    //                 }

    //                 // snackbar.create("Error occurred. Please try again.", 3000, "error");
    //             }
    //         });
    // }
    $scope.getDeptName = function (deptId) {
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

    $scope.setDeptDesigOfRegUser = function () {
        //console.log($scope.selectedDeptId)
        if (angular.isUndefined($scope.selectedDeptId)) {
            // snackbar.create("Please select department.", 3000, "error");
            snackbar.create($scope.langTranslate.Please_select_department, 3000, "error");
            return;
        }
        $scope.data = {
            "empId": parseInt($rootScope.empDetails.empId),
            "firstName": $rootScope.empDetails.firstName,
            "lastName": $rootScope.empDetails.lastName,
            "contactNo": $rootScope.empDetails.contactNo,
            "deptId": parseInt($scope.selectedDeptId),
            "branchId": $rootScope.empDetails.branch.branchId,
            "desigId": $scope.selectedDesigId,
            "cmpyEmpId": $rootScope.empDetails.cmpyEmpId,
            "emailId": $rootScope.empDetails.emailId
        };

        //console.log("---------------Registered User Data Request---------------");
        //console.log($scope.data);
        appService.httpPost($scope.data, "updateemployeedetails")
            .then(function (response) {
                //console.log("------------Updated Team List--------------");
                //console.log(response);
                if (response.result) {
                    var dept = $scope.getDeptName($scope.selectedDeptId);
                    $rootScope.empDetails.dept = dept;
                    //var designation= $scope.getDesignationName($scope.selectedDesigId);
                    //$rootScope.empDetails.designation = designation;
                    localStorage.setItem("userDet", JSON.stringify($rootScope.empDetails));
                    $scope.isDeptAdded = true;
                    // snackbar.create("Updated employee details successfully.", 3000, "success");
                    snackbar.create($scope.langTranslate.Updated_employee_details_successfully, 3000, "success");
                    //console.log($rootScope.empDetails);
                    $scope.getEmployeeList();
                } else {
                    // snackbar.create("Error occured", 300, "error");
                    snackbar.create($scope.langTranslate.Oops_Please_try_again, 300, "error");
                }
            });
    }

    $scope.showHelpPopup = function (section) {
        if (section == "employee")
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.EMPLOYEE;
        else if (section == "emp_status")
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.EMPLOYEE_STATUS;
        $("#helpModal")
            .modal('show');
    }

    //Reset Password
    $scope.resetPwdEmployee = function (x) {
        $scope.selectResetPwdEmp = x;
        $scope.newPassword = '';
        $scope.passwordMatch = '';
        $("#employee_resetPwd")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
    }
    $scope.resetPassword = function (isValid) {
        if (isValid) {
            $scope.data = {
                empId: $scope.selectResetPwdEmp.empId,
                password: $scope.newPassword,
                createdByEmpId: $scope.loggedInEmpId
            }
            //console.log($scope.data);
            appService.httpPost($scope.data, "resetpasswordbysuperadmin")
                .then(function (response) {
                    //console.log("--------------------Password Reset Response------------------");
                    //console.log(response);
                    if (response.result) {
                        // snackbar.create("Password reset successfully.", 3000, "success");
                        snackbar.create($scope.langTranslate.Password_reset_successfully, 3000, "success");
                        $("#employee_resetPwd")
                            .modal('hide');
                    } else {
                        if (response.statusCode == 100) {
                            snackbar.create(response.reason, 3000, "error");
                        } else {
                            // snackbar.create("Error Occurred. Please try again.", 3000, "error");
                            snackbar.create($scope.langTranslate.Oops_Please_try_again, 3000, "error");
                        }
                    }
                });
        }
    }

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
    $scope.setDatePicker = function () {
        $('.datepicker_doj')
            .datepicker({
                format: "yyyy-mm-dd",
                endDate: "today",
                autoclose: true
            })
    }
    /*-------------------------------select branch----------------6-8-19--------------------chnage by sunanda ----- */
    $scope.deptToggle = function () {
        $('.deptwrapper .list')
            .slideToggle('fast');
    }

    $scope.toggleDeptDiv = function (event) {
        var $trigger = $(".deptwrapper");
        if ($trigger !== event.target && !$trigger.has(event.target)
            .length) {
            $(".list")
                .slideUp("fast");
        }
    }
    $scope.setDeptSelected = function (branch) {
        branch.isSelected = (branch.isSelected) ? false : true;
        for (var i = 0; i < $scope.branchAccessList.length; i++) {
            if (!$scope.branchAccessList[i].isSelected) {
                $scope.selectAllBranch = false;
            }
        }
        //console.log(branch);
        $scope.deptToggle();
        $scope.getEmployeeList();
    }
    $scope.selectAllDepartment = function () {
        var flag = ($scope.selectAllBranch) ? false : true;
        $scope.selectAllBranch = flag;
        for (var i = 0; i < $scope.branchAccessList.length; i++) {
            $scope.branchAccessList[i].isSelected = $scope.selectAllBranch;
        }
        $scope.deptToggle();
        $scope.getEmployeeList();

    }


    $scope.getemployeeLevelDetails = function (branchId) {
        $scope.employeeListLoading = true;
        appService.httpGet("getEmployeeLevelDetails/" + branchId)
            .then(function (response) {
                console.log("-------------Employee Type List---------------");
                console.log(response);
                $scope.employeeListLoading = false;
                $scope.newContollerProcess = false;
                if (response.result) {
                    if (response.empLevelDetails != null && response.empLevelDetails.length > 0) {
                        $scope.emplevelList = [];
                        for (let index = 0; index < response.empLevelDetails.length; index++) {
                            if (response.empLevelDetails[index].isActive != 'N') {
                                $scope.emplevelList.push(response.empLevelDetails[index]);
                            }
                        }
                    } else {
                        $scope.emplevelList = [];
                    }
                } else {
                    $scope.emplevelList = [];
                }
            });
    }
    //$scope.getemployeeLevelDetails();


    $scope.exportData = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var exportDataTmp = [];
        var opts = {
            headers: true,
            column: {
                style: {
                    Font: {
                        Bold: "1",
                        Color: "#000000",

                    },
                }
            }
        }

        if ($scope.employeeList != null && $scope.employeeList.length > 0) {
            for (var i = 0; i < $scope.employeeList.length; i++) {
                if ($scope.filterByStatus($scope.employeeList[i])) {
                    var status = ''
                    if ($scope.employeeList[i].isEmailVerified != null && $scope.employeeList[i].isEmailVerified != undefined) {
                        if ($scope.employeeList[i].isEmailVerified == 1 && $scope.employeeList[i].loggedIn == 1 && $scope.employeeList[i].isDeactive == 0) {
                            status = "Active";
                        } else if ($scope.employeeList[i].isEmailVerified == 0 && $scope.employeeList[i].loggedIn == 0 && $scope.employeeList[i].isDeactive == 0) {
                            status = "Inactive";
                        } else if ($scope.employeeList[i].isEmailVerified == 1 && $scope.employeeList[i].loggedIn == 0 && $scope.employeeList[i].isDeactive == 0) {
                            status = "Verified";
                        } else if ($scope.employeeList[i].isDeactive == 1) {
                            status = "Deleted";
                        }
                    }
                    var levelName = '';
                    if ($scope.employeeList[i].empLevelDetails != null && $scope.employeeList[i].empLevelDetails != undefined) {
                        levelName = $scope.employeeList[i].empLevelDetails.levelName;
                    } else {
                        levelName = '';
                    }
                    var deptName = '';
                    if ($scope.employeeList[i].dept != null && $scope.employeeList[i].dept != undefined) {
                        deptName = $scope.employeeList[i].dept.deptName;
                    } else {
                        deptName = '';
                    }
                    exportDataTmp.push({
                        "Branch": $scope.employeeList[i].branch.name,
                        "Level Name": levelName,
                        "ID": ($scope.employeeList[i].cmpyEmpId != null) ? $scope.employeeList[i].cmpyEmpId : '-',
                        "Employee Name": $scope.employeeList[i].firstName + ' ' + $scope.employeeList[i].lastName,
                        "Email Id": ($scope.employeeList[i].emailId != null) ? $scope.employeeList[i].emailId : '-',
                        "MobileNo": ($scope.employeeList[i].contactNo != null) ? $scope.employeeList[i].contactNo : '-',
                        "Department": deptName,
                        "Line": ($scope.employeeList[i].line != null) ? $scope.employeeList[i].line.name : '-',
                        "Designation": ($scope.employeeList[i].designation != null) ? $scope.employeeList[i].designation : '-',
                        "DOJ": ($scope.employeeList[i].doj != null) ? $scope.employeeList[i].doj : 'N/A',
                        "Status": status
                    });
                }
            }
        }
        alasql('SELECT * INTO XLSXML("EmployeeList' + '_' + dateTime + '.xls",?) FROM ?', [opts, exportDataTmp]);
    }
    /***************************** Transfer Functionality ************************************/
    $scope.listAPILoading = false;
    $scope.empList = [];
    $scope.getEmpList = function () {
        if ($scope.empList != null && $scope.empList.length > 0) {
            // $scope.getControllerList();
        } else {
            appService.httpGet("getAllEmpList/" + $rootScope.empDetails.organization.orgId + "/0/0")
                .then(function (response) {
                    if (response.result) {
                        if (response.allEmpDetails != null && response.allEmpDetails.length > 0) {
                            for (var i = 0; i < response.allEmpDetails.length; i++) {
                                var name = '';
                                if (response.allEmpDetails[i].firstName) {
                                    name += response.allEmpDetails[i].firstName;
                                }
                                if (response.allEmpDetails[i].lastName) {
                                    if (response.allEmpDetails[i].firstName) {
                                        name += ' ';
                                    }
                                    name += response.allEmpDetails[i].lastName;
                                }
                                response.allEmpDetails[i].branchName = (!$scope.isEmpty(response.allEmpDetails[i].branch) && response.allEmpDetails[i].branch.name) ? response.allEmpDetails[i].branch.name : 'Other';
                                response.allEmpDetails[i].empName = name;
                                response.allEmpDetails[i].branchName = (!$scope.isEmpty(response.allEmpDetails[i].branch) && response.allEmpDetails[i].branch.name) ? response.allEmpDetails[i].branch.name : 'Other';
                                if (response.allEmpDetails[i].isDeactive == 0) {
                                    if (response.allEmpDetails[i].empId != $scope.transferFunDet.empData.empId) {
                                        $scope.empList.push(response.allEmpDetails[i]);
                                    }
                                }
                            }
                        } else {
                            $scope.empList = [];
                        }
                    } else {
                        $scope.empList = [];
                    }
                });
        }
    }
    $scope.transferFunDet = {};
    $scope.transferListPagination = {
        current: 1,
        total: 0,
        perPage: 10,
        maxsize: 5,
        totalPages: 0
    }
    $scope.isEmpty = function (obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    }
    $scope.onPageChange = function (number) {
        $scope.transferListPagination.current = number;
    }
    $scope.transferFuncationalityMenu = [
        { id: 1, menuName: 'Suggestions', class: '', isActive: true, count: 0, list: [], pendingSuggList: [] },
        { id: 2, menuName: 'Audit', class: '', isActive: true, count: 0, list: [], auditPendingList: [] },
        { id: 3, menuName: 'Kuber', class: '', isActive: true, count: 0, list: [], kuberPendingList: [] },
        { id: 4, menuName: 'Nearmiss', class: '', isActive: true, count: 0, list: [], pendingNearmissList: [] },
        { id: 5, menuName: 'DWM', class: '', isActive: true, count: 0, list: [], dwmPendingList: [] },
        { id: 6, menuName: 'TPM', class: '', isActive: true, count: 0, list: [], tpmPendingList: [] },
        { id: 7, menuName: 'Skill Book', class: '', isActive: true, count: 0, list: [], skillBookPendingList: [] },
        { id: 8, menuName: 'PMS', class: '', isActive: true, count: 0, list: [], pmsPendingList: [] },
        { id: 9, menuName: 'Concern', class: '', isActive: true, count: 0, list: [], concernPendingList: [] },
        { id: 10, menuName: 'Survey', class: '', isActive: true, count: 0, list: [], surveyPendingList: [] }
    ];
    $scope.transferFunDet.selectedMenu = $scope.transferFuncationalityMenu[0];
    $scope.closeModal = function (modal) {
        $(modal).modal("hide");
    }
    $scope.nextPreviousAction = function (type, menu) {
        let rec = $filter('filter')($scope.transferFuncationalityMenu, { isActive: true }, true);
        let currentIndex = $scope.transferFunDet.selectedMenu.id;
        let nextIndex = (currentIndex + 1);
        let prevIndex = (currentIndex - 1);
        // let currentIndex = rec.indexOf($scope.transferFunDet.selectedMenu);
        // let nextIndex = (currentIndex + 1) % rec.length;
        // let prevIndex = (currentIndex - 1) % rec.length;
        if (type == 'next') {
            $scope.setMenuSelected(nextIndex);
        } else {
            $scope.setMenuSelected(prevIndex);
        }
    }
    $scope.setMenuSelected = function (id) {
        $scope.listAPILoading = true;
        $scope.transferListPagination = {
            current: 1,
            total: 0,
            perPage: 10,
            maxsize: 5,
            totalPages: 0
        }
        let arr = $filter('filter')($scope.transferFuncationalityMenu, { isActive: true }, true);
        if (arr != null && arr.length > 0) {
            $scope.transferFunDet.selectedMenu = {};
            for (let index = 0; index < arr.length; index++) {
                if (arr[index].id == id) {
                    $scope.transferFunDet.selectedMenu = arr[index];
                    arr[index].class = 'active';
                    $scope.listAPILoading = false;
                } else {
                    arr[index].class = '';
                    $scope.listAPILoading = false;
                }
            }
        }
        console.log($scope.transferFunDet.selectedMenu);
    }
    $scope.checkUncheckAll = function () {
        if ($scope.transferFunDet.selectedMenu.list != null && $scope.transferFunDet.selectedMenu.list.length > 0) {
            for (let index = 0; index < $scope.transferFunDet.selectedMenu.list.length; index++) {
                $scope.transferFunDet.selectedMenu.list[index].isChecked = $scope.transferFunDet.selectedMenu.checkAllData;
                $scope.transferFunDet.selectedMenu.list[index].empData = ($scope.transferFunDet.selectedMenu.checkAllData && $scope.transferFunDet.selectedMenu.allDataEmp != undefined) ? $scope.transferFunDet.selectedMenu.allDataEmp : undefined;
            }
        }
    }
    $scope.checkUncheck = function () {
        var listLength = 0;
        var checkedLength = 0;
        if ($scope.transferFunDet.selectedMenu.list != null && $scope.transferFunDet.selectedMenu.list.length > 0) {
            listLength = $scope.transferFunDet.selectedMenu.list.length;
            checkedLength = $filter('filter')($scope.transferFunDet.selectedMenu.list, { isChecked: true }, true).length;
        }
        $scope.transferFunDet.selectedMenu.checkAllData = (checkedLength == listLength) ? true : false;
    }
    $scope.onAllEmpSelected = function (selectedItem) {
        if ($scope.transferFunDet.selectedMenu.list != null && $scope.transferFunDet.selectedMenu.list.length > 0) {
            for (let index = 0; index < $scope.transferFunDet.selectedMenu.list.length; index++) {

                $scope.transferFunDet.selectedMenu.list[index].empData = (selectedItem) ? selectedItem : undefined;
                $scope.transferFunDet.selectedMenu.list[index].isChecked = (selectedItem) ? true : false;
            }
        }
        if (!selectedItem) {
            $scope.transferFunDet.selectedMenu.allDataEmp = undefined;
        }
        $scope.checkUncheck();
    }
    $scope.onSingleEmpSelected = function (selectedItem) {
        if (selectedItem) {
            $scope.transferFunDet.selectedMenu.allDataEmp = undefined;
        }
    }
    $scope.getCountNArray = function (type, key) {
        var rec;
        if ($scope.transferFunDet.response.hasOwnProperty(key)) {
            if (type == 'count') {
                rec = ($scope.transferFunDet.response[key]) ? $scope.transferFunDet.response[key] : 0;
            } else {
                rec = ($scope.transferFunDet.response[key]) ? $scope.transferFunDet.response[key] : [];
            }
        } else {
            if (type == 'count') {
                rec = 0;
            } else {
                rec = [];
            }
        }
        return rec;
    }
    $scope.setListNCount = function () {
        if ($scope.transferFunDet.hasOwnProperty('response') && !$scope.isEmpty($scope.transferFunDet.response)) {
            for (let index = 0; index < $scope.transferFuncationalityMenu.length; index++) {
                if ($scope.transferFuncationalityMenu[index].menuName == 'Suggestions') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'pendingSuggCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'pendingSuggList');
                    $scope.transferFuncationalityMenu[index].pendingSuggList = $scope.getCountNArray('list', 'pendingSuggList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Audit') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'auditPendingCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'auditPendingList');
                    $scope.transferFuncationalityMenu[index].auditPendingList = $scope.getCountNArray('list', 'auditPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Kuber') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'kuberPendingCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'kuberPendingList');
                    $scope.transferFuncationalityMenu[index].kuberPendingList = $scope.getCountNArray('list', 'kuberPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Nearmiss') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'nearmissCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'pendingNearmissList');
                    $scope.transferFuncationalityMenu[index].pendingNearmissList = $scope.getCountNArray('list', 'pendingNearmissList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'DWM') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'dwmPendingCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'dwmPendingList');
                    $scope.transferFuncationalityMenu[index].dwmPendingList = $scope.getCountNArray('list', 'dwmPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'TPM') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'tpmPendingCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'tpmPendingList');
                    $scope.transferFuncationalityMenu[index].tpmPendingList = $scope.getCountNArray('list', 'tpmPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Skill Book') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'skillBookCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'skillBookPendingList');
                    $scope.transferFuncationalityMenu[index].skillBookPendingList = $scope.getCountNArray('list', 'skillBookPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'PMS') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'pmsCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'pmsPendingList');
                    $scope.transferFuncationalityMenu[index].pmsPendingList = $scope.getCountNArray('list', 'pmsPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Concern') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'concernCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'concernPendingList');
                    $scope.transferFuncationalityMenu[index].concernPendingList = $scope.getCountNArray('list', 'concernPendingList');
                } else if ($scope.transferFuncationalityMenu[index].menuName == 'Survey') {
                    $scope.transferFuncationalityMenu[index].count = $scope.getCountNArray('count', 'surveyCount');
                    $scope.transferFuncationalityMenu[index].list = $scope.getCountNArray('list', 'surveyPendingList');
                    $scope.transferFuncationalityMenu[index].surveyPendingList = $scope.getCountNArray('list', 'surveyPendingList');
                }
                $scope.transferFuncationalityMenu[index].isActive = ($scope.transferFuncationalityMenu[index].count > 0);
            }
        }
        if ($filter('filter')($scope.transferFuncationalityMenu, { isActive: true }, true).length > 0) {
            var data = $filter('filter')($scope.transferFuncationalityMenu, { isActive: true }, true)[0];
            $scope.setMenuSelected(data.id);
            $('#transferPopup').modal({
                backdrop: 'static',
                keyboard: false
            });
        } else {
            $("#transferPopup")
                .modal("hide");
        }
    }
    $scope.getTransferPendingActions = function () {
        appService.httpGet('getModuleWisePendingActions/' + $scope.transferFunDet.empData.empId).then(function (response) {
            if (response.result) {
                if (response.empDto.actionPendingWithEmp) {
                    $scope.transferFunDet.response = response.empDto;
                    $scope.setListNCount();
                } else {
                    $("#transferPopup")
                        .modal("hide");
                    //Delete popup
                    snackbar.create('No pending actions remaining', 3000, 'success');
                    // $scope.showEmpDeleteModel($scope.transferFunDet.empData);
                }
            } else {
                $scope.transferFunDet.response = {};
                $("#transferPopup")
                    .modal("hide");
                if (response.statusCode == 100) {
                    snackbar.create(response.reason, 3000, 'error');
                } else {
                    snackbar.create('An error occurred while retrieving data. Please try again', 3000, 'error')
                }
                //Delete popup
                // snackbar.create('No pending actions remaining', 3000, 'success');
                // $scope.showEmpDeleteModel($scope.transferFunDet.empData);
            }
        })
    }
    $scope.openTransferPopup = function (x) {
        $scope.transferFunDet.empData = x;
        $scope.getEmpList();
        $scope.getTransferPendingActions();
    }
    $scope.isEmptyArray = function (array) {
        return (array == null || array.length == 0);
    }
    $scope.pendingActionLoader = false;
    $scope.submitPendingActions = function (data) {
        $scope.pendingActionLoader = true;
        console.log(data);
        var req = {
            data: [{
                SUGGESTION: [],
                AUDIT: [],
                KUBER: [],
                NEARMISS: [],
                DWM: [],
                TPM: [],
                SKILLBOOK: [],
                PMS: [],
                CONCERN: [],
                SURVEY: []
            }]
        };
        for (let index = 0; index < $scope.transferFuncationalityMenu.length; index++) {
            if ($scope.transferFuncationalityMenu[index].pendingSuggList != null && $filter('filter')($scope.transferFuncationalityMenu[index].pendingSuggList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].pendingSuggList.length; i++) {
                    var sugData = $scope.transferFuncationalityMenu[index].pendingSuggList[i];
                    if ($scope.transferFuncationalityMenu[index].pendingSuggList[i].isChecked && $scope.transferFuncationalityMenu[index].pendingSuggList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].pendingSuggList[i].empData)) {
                        req.data[0].SUGGESTION.push({
                            "id": sugData.sugId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": sugData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].auditPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].auditPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].auditPendingList.length; i++) {
                    var auditData = $scope.transferFuncationalityMenu[index].auditPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].auditPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].auditPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].auditPendingList[i].empData)) {
                        req.data[0].AUDIT.push({
                            "id": auditData.auditId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": auditData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].kuberPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].kuberPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].kuberPendingList.length; i++) {
                    var kuberData = $scope.transferFuncationalityMenu[index].kuberPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].kuberPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].kuberPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].kuberPendingList[i].empData)) {
                        req.data[0].KUBER.push({
                            "id": kuberData.projId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": kuberData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].pendingNearmissList != null && $filter('filter')($scope.transferFuncationalityMenu[index].pendingNearmissList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].pendingNearmissList.length; i++) {
                    var nearmissData = $scope.transferFuncationalityMenu[index].pendingNearmissList[i];
                    if ($scope.transferFuncationalityMenu[index].pendingNearmissList[i].isChecked && $scope.transferFuncationalityMenu[index].pendingNearmissList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].pendingNearmissList[i].empData)) {
                        req.data[0].NEARMISS.push({
                            "id": nearmissData.inceId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": nearmissData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].dwmPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].dwmPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].dwmPendingList.length; i++) {
                    var dwmData = $scope.transferFuncationalityMenu[index].dwmPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].dwmPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].dwmPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].dwmPendingList[i].empData)) {
                        req.data[0].DWM.push({
                            "id": dwmData.dwmId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": dwmData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].tpmPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].tpmPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].tpmPendingList.length; i++) {
                    var tpmData = $scope.transferFuncationalityMenu[index].tpmPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].tpmPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].tpmPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].tpmPendingList[i].empData)) {
                        req.data[0].TPM.push({
                            "id": tpmData.tagId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": tpmData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].skillBookPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].skillBookPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].skillBookPendingList.length; i++) {
                    var skillBookData = $scope.transferFuncationalityMenu[index].skillBookPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].skillBookPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].skillBookPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].skillBookPendingList[i].empData)) {
                        req.data[0].SKILLBOOK.push({
                            "id": skillBookData.skillBookId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": skillBookData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].pmsPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].pmsPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].pmsPendingList.length; i++) {
                    var pmsData = $scope.transferFuncationalityMenu[index].pmsPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].pmsPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].pmsPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].pmsPendingList[i].empData)) {
                        req.data[0].PMS.push({
                            "id": pmsData.appraisalId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": pmsData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].concernPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].concernPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].concernPendingList.length; i++) {
                    var concernData = $scope.transferFuncationalityMenu[index].concernPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].concernPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].concernPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].concernPendingList[i].empData)) {
                        req.data[0].CONCERN.push({
                            "id": concernData.concernId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": concernData.empData.empId
                        })
                    }
                }
            } else if ($scope.transferFuncationalityMenu[index].surveyPendingList != null && $filter('filter')($scope.transferFuncationalityMenu[index].surveyPendingList, { isChecked: true, empData: '!undefined' }).length > 0) {
                for (let i = 0; i < $scope.transferFuncationalityMenu[index].surveyPendingList.length; i++) {
                    var surveyData = $scope.transferFuncationalityMenu[index].surveyPendingList[i];
                    if ($scope.transferFuncationalityMenu[index].surveyPendingList[i].isChecked && $scope.transferFuncationalityMenu[index].surveyPendingList[i].empData != undefined && !$scope.isEmpty($scope.transferFuncationalityMenu[index].surveyPendingList[i].empData)) {
                        req.data[0].SURVEY.push({
                            "id": surveyData.surveyId,
                            "empId": $scope.transferFunDet.empData.empId,
                            "transferTo": surveyData.empData.empId
                        })
                    }
                }
            }
        }
        console.log(req);
        if ($scope.isEmptyArray(req.data[0].SUGGESTION) && $scope.isEmptyArray(req.data[0].AUDIT) && $scope.isEmptyArray(req.data[0].KUBER) && $scope.isEmptyArray(req.data[0].NEARMISS) && $scope.isEmptyArray(req.data[0].DWM) && $scope.isEmptyArray(req.data[0].TPM) && $scope.isEmptyArray(req.data[0].SKILLBOOK) && $scope.isEmptyArray(req.data[0].PMS) && $scope.isEmptyArray(req.data[0].CONCERN) && $scope.isEmptyArray(req.data[0].SURVEY)) {
            snackbar.create('Please select pending action', 3000, 'error')
            $scope.pendingActionLoader = false;
            return;
        }
        console.log(req);
        appService.httpPost(req, 'transferModuleWisePendingActions').then(function (response) {
            $scope.pendingActionLoader = false;
            if (response.result) {
                $scope.getTransferPendingActions();
                snackbar.create('Pending actions transfer successfully', 3000, 'success');
            } else {
                if (response.statusCode == 100) {
                    snackbar.create(response.reason, 3000, 'error');
                } else {
                    snackbar.create('Error occurred while submitting data.Please try again', 3000, 'error')
                }
            }
        })
    }
    // Transfer Employee branch 
    $scope.transferForm = {};
    $scope.transferEmpDet = {};
    $scope.transferEmpData = {};
    $scope.openTransferBranchPopup = function (x) {
        $scope.transferEmpDet = x;
        $scope.transferEmpData = {};
        $scope.transferForm.form.$setPristine();
        $scope.transferForm.form.$setUntouched();
        $('#transferEmpBranchPopup').modal({
            backdrop: 'static',
            keyboard: false
        });
    }

    $scope.setTransferOnDate = function () {
        $('.datepicker_dot')
            .datepicker({
                format: "yyyy-mm-dd",
                // endDate: "today",
                todayHighlight: true,
                autoclose: true
            })
    }
    $scope.onTransferEmpSelected = function (data, type) {
        if (type == 'branch') {
            if (data) {
                $scope.departmentList = [];
                $scope.lineNameList = [];
                $scope.emplevelList = [];
                $scope.getDepartmentList(data.branchId);
                $scope.getemployeeLevelDetails(data.branchId);
            } else {

            }
        } else if (type == 'dept') {
            if (data) {
                $scope.lineNameList = [];
                $scope.getLineNameList(data);
            } else {

            }
        }
    }
    $scope.flagTransferSpinner = false;
    $scope.submitTransferEmp = function (form) {
        $scope.flagTransferSpinner = true;
        console.log(form);
        if (form.$invalid) {
            angular.forEach(form.$error.required, function (field) {
                field.$setDirty();
            });
            $scope.flagTransferSpinner = false;
            return;
        }
        var req = {
            "empId": $scope.transferEmpDet.empId,
            "transferredBy": $rootScope.empDetails.empId,
            "transferredOn": $scope.transferEmpData.transferredOn,
            "transferReason": $scope.transferEmpData.transferReason,
            "toBranch": $scope.transferEmpData.branch.branchId,
            "toDept": $scope.transferEmpData.department.deptId,
            "toLine": $scope.transferEmpData.line.id,
            "toEmpLevel": $scope.transferEmpData.level.empLvlId,
        }
        console.log(req);
        appService.httpPost(req, 'employeeTransfer').then(function (response) {
            $scope.flagTransferSpinner = false;
            if (response.result) {
                $("#transferEmpBranchPopup")
                    .modal("hide");
                snackbar.create('Employee transferred successfully', 3000, 'success');
                $scope.getEmployeeList();
            } else {
                if (response.statusCode == 100) {
                    snackbar.create(response.reason, 3000, 'error');
                } else {
                    snackbar.create('Error occurred while transfer employee.Please try again', 3000, 'error');
                }
            }
        })
    }
    $scope.setSelectedSatus = function (status) {
        $scope.paginateConfig = {
            itemsPerPage: 10,
            current: 1
        }
        $scope.filterDet.status = status;
    }
    $scope.filterByStatus = function (item) {
        if ($scope.filterDet.status == 'Active') {
            return (item.isEmailVerified == 1 && item.loggedIn == 1 && item.isDeactive == 0);
        } else if ($scope.filterDet.status == 'Inactive') {
            return (item.isEmailVerified == 0 && item.loggedIn == 0 && item.isDeactive == 0);
        } else if ($scope.filterDet.status == 'Verified') {
            return (item.isEmailVerified == 1 && item.loggedIn == 0 && item.isDeactive == 0);
        } else if ($scope.filterDet.status == 'Deleted') {
            return (item.isDeactive == 1);
        } else if ($scope.filterDet.status == 'All') {
            return item;
        }
    }

    // Reactivate employee by Sanket
    $scope.confirmReactivateEmployee = function (data) {
        $scope.reactiveEmpId = data.empId;
        console.log($scope.reactiveEmpId)
        $('#confirmReactivateEmp').modal('show');
    }
    $scope.reactiveEmployee = function () {
        var req = {
            empId: $scope.reactiveEmpId
        }
        appService.httpPost(req, 'reActivationEmployee').then(function (response) {
            console.log(response);
            if (response.result) {
                $('#confirmReactivateEmp').modal('hide');
                snackbar.create('Employee reactivated successfully', 3000, 'success');
                $scope.getEmployeeList();
            }
            else {
                snackbar.create(response.reason, 3000, 'error');
            }
        })
    }

    $scope.isBulkSelected = false;
    $scope.bulkModalPopUp = function () {
        // $("#bulkUploadModal")
        //     .modal({
        //         backdrop: 'static',
        //         keyboard: false
        //     });
        $scope.isBulkSelected = !$scope.isBulkSelected;
    }
    $scope.closeBulkUi = function () {
        $scope.isBulkSelected = false;
    }
    $(function () {
        $('#single').tooltip({
            placement: "bottom",
            title: "Single Addition"
        });
        $("#bulk").tooltip({
            placement: "bottom",
            title: "Bulk Addition"
        });
        $("#sample").tooltip({
            placement: "bottom",
            title: "Sample File"
        });
    });

}]);

ctrl.$inject = ['$scope', 'sharedService'];