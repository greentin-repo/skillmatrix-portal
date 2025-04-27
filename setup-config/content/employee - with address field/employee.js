'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.employee', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/employee', {
        templateUrl: 'content/employee/employee.html',
        controller: 'employeeCtrl'
    });
}]);

app.filter('shortName', function() {
    return function(x) {
        var shortName = "",
            nameTokens = [];
        nameTokens = x.split(" ");
        nameTokens.forEach(function(token) {
            shortName += token[0]
        });
        return shortName;
    };
});

app.filter('replaceVal', function() {
    return function(input) {
        if (input == null || input == "") {
            input = input.replace('null', '');
        }
        return input;
    }
});

app.filter('filterUnderEval', function() {
    return function(items, statusIds) {
        var filtered = [];
        angular.forEach(items, function(item) {
            if (statusIds.includes(item.status_master.statusId)) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});
app.directive('showtab',
    function() {
        return {
            link: function(scope, element, attrs) {
                element.click(function(e) {
                    e.preventDefault();
                    $(element).tab('show');
                });
            }
        };
    });
var ctrl = app.controller("employeeCtrl", ['$scope', 'appService', '$location', 'snackbar', '$route', '$rootScope', function($scope, appService, $location, snackbar, $route, $rootScope) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[4].linkName)) {
        window.location.href = '../template.html';
    }

    $scope.branch = $rootScope.empDetails.branch.branchId;
    $scope.selectbranch = $rootScope.empDetails.branch.name;


    $scope.flagEmployeeListSpinner = false;
    $scope.flagTblemployee = false;
    $scope.flagexcelimport = true;
    $scope.flaguploaded = false;

    if ($rootScope.empDetails.dept == null) {
        $scope.isDeptAdded = false;
    } else {
        $scope.isDeptAdded = true;
    }

    if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
        $scope.loggedInEmpId = $rootScope.empDetails.empId;
        $scope.loggedInorganization = $rootScope.empDetails.organization;
        $scope.loggedInorganizationName = $rootScope.empDetails.organization.name;
    }

    $scope.setcontentData = function() {
        var contentData = JSON.parse(localStorage.getItem("contentData"));
        //console.log(contentData);
        $scope.browsedImage = contentData.image;
    }

    $scope.addSetupDetails = function() {
        $scope.flagexcelimport = false;
        var flagSelectFile = angular.element("#upload-file-input").val();
        var flagVal = 1;

        if (flagVal == 1) {
            var formData = new FormData($("#upload-events-form")[0]);
            formData.append("empId", $rootScope.empDetails.empId);
            formData.append("orgName", $rootScope.empDetails.organization.name);
            formData.append("orgId", $rootScope.empDetails.organization.orgId);
            $("#upload-file-message").text('');
            $scope.flaguploadExcel = true;
            appService.uploadFileToUrl(formData, "importEmplyee").then(function(response) {
                //console.log("--------------------Upload Setup Response------------------");
                //console.log(response);
                $scope.flaguploadExcel = false;
                $scope.flaguploaded = true;
                if (response.status == "success") {
                    snackbar.create("Added setup successfully.", 3000, "success");
                } else if (response.status == "fail") {
                    snackbar.create("Error Occurred. Please try again.", 3000, "error");
                }
            });
        }
    }

    /*--------------------------------------Employee Start--------------------------------------------*/
    $scope.getEmployeeList = function() {
        $scope.flagEmployeeListSpinner = true;
        appService.httpGet("getAllEmpList/0/" + $rootScope.empDetails.branch.branchId + "/0").then(function(response) {
            //console.log("------------EmployeeList--------------");
            $scope.flagTblemployee = true;
            $scope.employeeList = response.allEmpDetails;
            //console.log($scope.employeeList);
            $scope.makeMenuEnable();
            $scope.flagEmployeeListSpinner = false;
            for (var i = 0; i < $scope.employeeList.length; i++) {
                if ($scope.employeeList[i].isDeactive == 0) {
                    $scope.employeeList[i].empcheck = true;
                } else {
                    $scope.employeeList[i].empcheck = false;
                }
            }

            if (response.status == "success") {
                //console.log("successfully get");
            } else if (response.status == "fail") {
                snackbar.create("error occur", 300, "error");
            }
        });
    }
    $scope.getEmployeeList();

    // Start to make next menu enable
    $scope.nextIndexMenu = 5;
    $scope.makeMenuEnable = function() {
        if ($scope.employeeList.length > 0) {
            $rootScope.makeIndexDataAvailable(4);
            $rootScope.makeIndexEnable($scope.nextIndexMenu);
        }

    }

    $scope.nextMenu = function() {
            //console.log("in next menu");
            $rootScope.setSelectedMenu($rootScope.sideMenuData[$scope.nextIndexMenu]);
            $location.path($rootScope.sideMenuData[$scope.nextIndexMenu].link);
        }
        // End to make next menu enable

    /*---------create Employee-------*/
    /*  $scope.createEmployee = function() {
         // $("#employeeModal").modal('show');
         $("#employeeModal").modal({ backdrop: 'static', keyboard: false });
     } */

    $scope.departArray = [];
    $scope.getDepartmentList = function(branchId) {
        $scope.flagErrAddbranch = false;
        //console.log(branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + branchId).then(function(response) {
            //console.log("----------Department List--------------");
            //console.log(response);
            $scope.departmentList = response.deptList;
            //console.log($scope.departmentList);
            $scope.getDesignationList(branchId);
        });
    }
    $scope.getDepartmentList($scope.branch);

    $scope.getDesignationList = function(branchId) {
        $scope.flagErrAddEmployeeDept = false
            //console.log($scope.dept);
        appService.httpGet("getdesignationlistbybranch/" + branchId).then(function(response) {
            //console.log("------------designation List--------------");
            $scope.DesignationList = response.designation;
            //console.log($scope.DesignationList);
        });
    }

    $scope.getBranchList = function() {
        appService.httpGet("getbranchlistbyorgid/" + $rootScope.empDetails.organization.orgId).then(function(response) {
            //console.log("------------Branch List--------------");
            $scope.branchList = response.branchList;
            //console.log($scope.branchList);
        });
    }

    $scope.getBranchList();

    $scope.getDepartmentListForRegUser = function(branchId) {
        $scope.flagErrAddbranch = false;
        //console.log(branchId);
        appService.httpGet("getdepartmentlistbybranchid/" + branchId).then(function(response) {
            //console.log("----------Department List For Reg User--------------");
            //console.log(response);
            $scope.departmentListForRegUser = response.deptList;
            //console.log($scope.departmentList);
        });
    }

    $scope.getDesignationListForRegUser = function(branchId) {
        $scope.flagErrAddEmployeeDept = false
            //console.log($scope.dept);
        appService.httpGet("getdesignationlistbybranch/" + branchId).then(function(response) {
            //console.log("------------Designation List For Reg User--------------");
            $scope.designationListForRegUser = response.designation;
            //console.log($scope.designationListForRegUser);
        });
    }

    $scope.getDepartmentListForRegUser($rootScope.empDetails.branch.branchId);
    $scope.getDesignationListForRegUser($rootScope.empDetails.branch.branchId);

    $scope.createEmployee = function() {
        $scope.addemployeeForm.$setPristine();
        $scope.addemployeeForm.$setUntouched();

        $scope.step = 1;
        $scope.fname = '';
        $scope.lname = '';
        $scope.contactno = '';
        $scope.empid = ''
        $scope.emailId = '';
        $scope.add = '';

        $("#employeeModal1").modal("show");
    }

    $scope.submitEmployee = function(isValid) {

        var validDropdown = $scope.validate('employee');
        if (isValid) {
            $scope.flagAddSpinner = true;
            $scope.data = {
                cmpyEmpId: $scope.cmpyEmpId,
                firstName: $scope.fname,
                lastName: $scope.lname,
                contactNo: $scope.contactno,
                address: $scope.add,
                createdBy: $rootScope.empDetails.id,
                dept: {
                    deptId: $scope.dept.deptId
                },
                organization: {
                    orgId: $rootScope.empDetails.organization.orgId
                },
                branch: {
                    branchId: $scope.branch
                },
                emailId: $scope.emailId,
                designation: {
                    desigId: $scope.desgination.desigId
                }

            };
            //console.log($scope.data);

            appService.httpPost($scope.data, "createemployee").then(function(response) {
                //console.log("-----------------Create Employee--------------");
                //console.log(response);
                $scope.flagAddSpinner = false;
                if (response.result) {
                    $scope.getEmployeeList();
                    $scope.clearForm("employee");
                    $("#employeeModal1").modal("hide");
                    snackbar.create("Employee added successfully.", 3000, "success");
                } else {
                    snackbar.create(response.reason, 3000, "error");
                }
            });
        } else {
            angular.forEach($scope.addemployeeForm.$error.required, function(field) {
                field.$setDirty();
            });
        }
    };

    $scope.validate = function(token) {
        if (token == 'employee') {
            var flagVal = 1;
            if (!$scope.dept) {
                $scope.flagErrAddEmployeeDept = true;
                flagVal = 0;
            }
            if (!$scope.desgination) {
                $scope.flagErrAdddesignation = true;
                flagVal = 0;
            }
            if (flagVal == 0)
                return false;
            else
                return true;
        }
    }

    $scope.clearForm = function(formName) {
        if (formName == "employee") {
            $scope.fname = '';
            $scope.lname = '';
            $scope.emailId = '';
            $scope.contactno = '';
            $scope.empid = '';
            $scope.add = '';
        }
    }

    /*-----Update Employee----*/
    $scope.editEmployee = function(x) {
        $scope.EmpData = x;
        //console.log(x);
        $scope.empId = x.empId;
        $scope.cmpyEmpId = x.cmpyEmpId;
        $scope.firstName = x.firstName;
        $scope.lastName = x.lastName;
        $scope.contactNo = x.contactNo;
        $scope.address = x.address;
        if (x.dept != null) {
            $scope.deptId = x.dept.deptId.toString();
            $scope.deptName = x.dept.deptName;
        }

        $scope.branchId = x.branch.branchId;
        $scope.brachName = x.branch.name;
        $scope.orgId = x.organization.orgId;
        if (x.designation != null)
            $scope.desigId = x.designation.desigId.toString();
        $scope.emailId = x.emailId;
        // $("#employee_editModal").modal('show');
        $scope.getDepartmentList($scope.branchId);
        $("#employee_editModal1").modal({ backdrop: 'static', keyboard: false });

    }


    $scope.editEmpDet = function(isValid) {

        if (isValid) {
            $scope.flagupdateSpinner = true;
            $scope.data = {
                "empId": parseInt($scope.empId),
                "firstName": $scope.firstName,
                "lastName": $scope.lastName,
                "contactNo": $scope.contactNo,
                "address": $scope.address,
                "deptId": $scope.deptId,
                "branchId": $scope.branchId,
                "desigId": $scope.desigId,
                "cmpyEmpId": $scope.cmpyEmpId,
                "emailId": $scope.emailId
            };

            appService.httpPost($scope.data, "updateemployeedetails").then(function(response) {
                //console.log("------------Updated Team List--------------");
                //console.log(response);
                if (response.status == "success") {
                    $scope.flagupdateSpinner = false;
                    $scope.getEmployeeList();
                    snackbar.create("update Employee successfully.", 3000, "success");
                    $("#employee_editModal1").modal('hide');

                } else {
                    snackbar.create("error occur", 300, "error");
                }
            });
        } else {
            angular.forEach($scope.updateemployeeForm.$error.required, function(field) {
                field.$setDirty();
            });
        }
    }

    $scope.employeeStatus = function(data) {
        if (data.empcheck) {
            $scope.active = 1;
        } else {
            $scope.active = 0;
        }
        var res = {
            "empId": data.empId,
            "isDeactive": $scope.active
        };
        //console.log(res);
        appService.httpPost(res, "deactiveEmployee").then(function(response) {
            //console.log("-----------------Employee status--------------");
            if (response.status == "success") {
                snackbar.create(response.reason, 3000, "success");
            } else if (response.status == "fail") {
                snackbar.create("Error occurred. Please try again.", 3000, "error");
            }
        });

    }

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
        $scope.data = {
            "empId": parseInt($rootScope.empDetails.empId),
            "firstName": $rootScope.empDetails.firstName,
            "lastName": $rootScope.empDetails.lastName,
            "contactNo": $rootScope.empDetails.contactNo,
            "address": $rootScope.empDetails.address,
            "deptId": $scope.selectedDeptId,
            "branchId": $rootScope.empDetails.branch.branchId,
            "desigId": $scope.selectedDesigId,
            "cmpyEmpId": $rootScope.empDetails.cmpyEmpId,
            "emailId": $rootScope.empDetails.emailId
        };

        //console.log("---------------Registered User Data Request---------------");
        //console.log($scope.data);

        appService.httpPost($scope.data, "updateemployeedetails").then(function(response) {
            //console.log("------------Updated Team List--------------");
            //console.log(response);
            if (response.result) {
                var dept = $scope.getDeptName($scope.selectedDeptId);
                $rootScope.empDetails.dept = dept;
                var designation = $scope.getDesignationName($scope.selectedDesigId);
                $rootScope.empDetails.designation = designation;
                localStorage.setItem("userDet", JSON.stringify($rootScope.empDetails));
                $scope.isDeptAdded = true;
                snackbar.create("Updated employee details successfully.", 3000, "success");
                //console.log($rootScope.empDetails);
                $scope.getEmployeeList();
            } else {
                snackbar.create("error occured", 300, "error");
            }
        });
    }

}]);

ctrl.$inject = ['$scope', 'sharedService'];