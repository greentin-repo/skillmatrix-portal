'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.userMgmt', ['ngRoute', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/userMgmt', {
        templateUrl: 'content/userMgmt/userMgmt.html',
        controller: 'userMgmtCtrl'
    })
}]);

app.controller("userMgmtCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$route', '$rootScope', 'CONST_RESOURCES', '$translate', function($scope, appService, $timeout, $location, snackbar, $route, $rootScope, CONST_RESOURCES, $translate) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[14].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }

    //$rootScope.makeIndexDataAvailable(11);
    $scope.user = {};
    if (!$rootScope.isRoleExistOfRegisteredUser($rootScope.ROLES.SUPERADMIN.name))
        $scope.mainTab = 1;
    else
        $scope.mainTab = 2;



    $scope.setMainTab = function(tabId) {
        $scope.mainTab = tabId;
        $scope.searchEmp = '';
        if ($scope.mainTab == 2) {
            $scope.getRoleList();
        } else if ($scope.mainTab == 3) {
            //$scope.getBranchAccessSetupList();
            $scope.getEmployeeList();
        } else if ($scope.mainTab == 4) {
            $scope.getOrgLevelEmployeeList();
        } else if ($scope.mainTab == 5) {
            $scope.getUserwiseMenuAccessList('');
            //$scope.getBranchAccessSetupList();
            // $scope.getModuleMenuList();
        }
    };

    $scope.isSetMainTab = function(tabId) {
        return $scope.mainTab === tabId;
    };

    //------- (Common Function Tab Wise Branch Change)-----//
    $scope.changeBranchData = function(data, tab) {
            console.log("BranchId", data);
            $scope.branchDet.selectBranchId = data;
            $scope.selectedTab = tab;
            if ($scope.selectedTab == 2) {
                $scope.getRoleAccessList();
            } else if ($scope.selectedTab == 3) {
                $scope.getEmployeeList();
            } else if ($scope.selectedTab == 5) {
                $scope.getUserwiseMenuAccessList('');
            }
        }
        //----------------------------------------------------//
    $scope.nextIndexMenu = $rootScope.currentIndex + 1;
    $scope.makeMenuEnable = function() {
        if ($scope.RoleList.length > 0) {
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

    $scope.getroleCards = function() {
        appService.httpGet("getlistofrole").then(function(response) {
            $scope.roleList = response.roleList;
        });
    }

    $scope.getroleCards();
    $scope.branchDet = {};
    //-----Change-----------------
    /*----------------------------new branch AccessList----------------------------- */
    $scope.getBranchAccessSetupList = function() {
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
                    $scope.branchDet.selectBranchId = $scope.branchAccessList[0].branchId.toString();
                }
                // $scope.getRoleAccessList();
                // $scope.getEmployeeList();
                $scope.getRoleList();
                if ($scope.mainTab == 5) {
                    $scope.getUserwiseMenuAccessList('');
                }
            });
    }
    $scope.getBranchAccessSetupList();
    // -----------------------------Access Control------------------------------
    $scope.getRoleList = function() {
        $scope.flagRoleDetLoading = true;
        appService.httpGet("getlistofrole").then(function(response) {
            //console.log("------------Role List--------------");
            //console.log($scope.RoleList);
            $scope.flagRoleDetLoading = false;
            if (response.reason) {
                //console.log("successfully get");
                $scope.RoleList = response.roleList;
                $scope.selectedRole = $scope.RoleList[1];
                $scope.getRoleAccessList();
                $scope.makeMenuEnable();
            } else {
                snackbar.create("error occur", 300, "error")
            }
        });
    }


    $scope.getRoleAccessList = function() {
        //getlistofroleaccessnew/{orgId}/{branchId}/{roleId}/{productID}
        $scope.roleLoading = true;
        // appService.httpGet("getlistofroleaccessnew/" + $rootScope.empDetails.organization.orgId + "/" + $rootScope.empDetails.branch.branchId + "/" + $scope.selectedRole.id + '/' + $rootScope.empDetails.productId).then(function (response) {
        appService.httpGet("getlistofroleaccessnew/" + $rootScope.empDetails.organization.orgId + "/" + $scope.branchDet.selectBranchId + "/" + $scope.selectedRole.id + '/' + $rootScope.empDetails.productId).then(function(response) {
            //console.log("------------Menu List--------------");
            $scope.roleLoading = false;
            $scope.menuList = response.menuDataList;
            $scope.selecteddata = $scope.menuList;
            for (var i = 0; i < $scope.menuList.length; i++) {
                for (var j = 0; j < $scope.menuList[i].subMenuList.length; j++) {
                    $scope.menuList[i].subMenuList[j].statusId = $scope.menuList[i].subMenuList[j].statusId == 1 ? true : false;
                    if ($scope.menuList[i].subMenuList[j].statusId) {
                        $scope.menuList[i].statusId = true;
                    }
                };
            };
            //console.log($scope.menuList);
        });
    }

    $scope.setSelectedRole = function(data) {
        $scope.selectedRole = data;
        $scope.menuList = [];
        $scope.getRoleAccessList();
    }
    $scope.isAllSelected = '';


    $scope.toggleAll = function(x, subMenuName) {
        //console.log(x);
        // x.subMenuList.forEach(itm => {
        //     if (itm.subMenuName === subMenuName) {
        //         itm.statusId = !itm.statusId;
        //         //console.log("here");
        //     }
        // });
        angular.forEach(x.subMenuList, function(itm, key) {
            if (itm.subMenuName === subMenuName) {
                itm.statusId = !itm.statusId;
                //         //console.log("here");
            }
        });

    }

    // $scope.toggleAll = function(x, val) {
    //     //console.log(val);
    //     var toggleStatus = val;
    //     angular.forEach(x.subMenuList, function(itm) { itm.statusId = toggleStatus; });
    // }

    // $scope.changeSubMenuAccess=function(menuData){
    //     for (var i = 0; i < menuData.subMenuList.length; i++) {
    //         if(menuData.subMenuList[i].statusId){
    //             menuData.statusId=true;
    //             break;
    //         }else{
    //             menuData.statusId=false;
    //         }
    //     }
    // }

    $scope.selectMenu = function(menu, id) {
        //console.log(id);
        //console.log(menu);
        if (id) {
            menu.statusId = 1
        } else {
            menu.statusId = 0;
        }
        angular.forEach(menu.subMenuList, function(v, k) {
                if (id) {
                    //console.log('Enter if');
                    v.statusId = 1;
                } else {
                    //console.log('Enter else');
                    v.statusId = 0;
                }
            })
            //console.log(menu)
    }
    $scope.datalist = [];
    $scope.setSelected = function(submenu) {
        //console.log(submenu)
        if (submenu.menuId == '') {
            return;
        }
        if (submenu.submenuId == '') {
            return;
        }
        var res = {
            "menuId": submenu.menuId,
            "submenuId": submenu.submenuId,
            "orgId": $rootScope.empDetails.organization.orgId,
            "isActive": 1,
            "branchId": 4,
            "roleId": $scope.roleId,
        }
        $scope.datalist.push(res);
        //console.log($scope.datalist);
    }

    $scope.saveMenu = function(data, roleId) {
        var newMenu = angular.copy(data);
        var rec = [];
        angular.forEach(newMenu, function(v, k) {
            for (var i = 0; i < v.subMenuList.length; i++) {
                v.subMenuList[i].isActive = v.subMenuList[i].statusId == true ? 1 : 0;
                v.subMenuList[i].roleId = roleId.id;
                v.subMenuList[i].orgId = parseInt($rootScope.empDetails.organization.orgId);
                // v.subMenuList[i].branchId = $rootScope.empDetails.branch.branchId;
                v.subMenuList[i].branchId = $scope.branchDet.selectBranchId;
                v.subMenuList[i].submenuId = v.subMenuList[i].subMenuId;
                v.subMenuList[i].id = v.subMenuList[i].roleAccessId;
                delete v.subMenuList[i].statusId;
                delete v.subMenuList[i].subMenuName;
                delete v.subMenuList[i].menuName;
                delete v.subMenuList[i].subMenuId;
                delete v.subMenuList[i].roleAccessId;
                rec.push(v.subMenuList[i]);
            };
        });

        //console.log(newMenu);

        appService.httpPost(rec, "saveroleaccess").then(function(response) {
            //console.log("------------Update Menu List--------------");
            //console.log(response);
            if (response.result) {
                snackbar.create('Role access updated successfully', 3000, "success");
                $scope.getRoleAccessList();
            } else {
                snackbar.create("Error occurred. Please try again.", 3000, "error");
            }
        });
    }

    // ----------------------------Module mgmt--------------------------

    $scope.selectedMenu = {};
    $scope.selectedSubMenu = {};
    $scope.getModuleList = function() {
        $scope.menuListLoading = true;
        appService.httpGet("getmenulistbyproductid/" + $rootScope.empDetails.productId).then(function(response) {
            //console.log("----------------Module  List API Response----------------");
            //console.log(response);
            $scope.menuListLoading = false;
            if (response.result) {
                $scope.menuList = response.menuList;
            } else {
                $scope.menuList = [];
            }
        });
    }

    $scope.showAddMenuModal = function() {
        $('#MenuModal').modal('show');
    }
    $scope.showUpdateMenuModal = function(data) {
        $scope.selectedMenu = angular.copy(data);
        $('#UpdateMenuModal').modal('show');
    }

    $scope.submitMenu = function() {
        //console.log($scope.selectedMenu.menuName);
        if ($scope.selectedMenu.menuName == '' || $scope.selectedMenu.menuName == undefined) {
            snackbar.create(" Please enter menu name.", 5000, "error");
            return;
        }
        $scope.globalLoadingIndicator = true;
        $('#MenuModal').modal('hide');
        var data = {
            "menuName": $scope.selectedMenu.menuName,
            "status": 1,
            "createdById": $rootScope.empDetails.empId,
            "productId": $rootScope.empDetails.productId,
            "orgId": $rootScope.empDetails.organization.orgId
        };

        appService.httpPost(data, "savemenu").then(function(response) {
            $scope.globalLoadingIndicator = false;
            //console.log("----------------Save Menu API Response----------------");
            //console.log(response);
            if (response.result) {
                $scope.selectedMenu = null;
                $scope.getModuleList();
            } else {
                snackbar.create(" Something went wrong, Please try again.", 5000, "error");
            }
        });
    }

    $scope.updateMenu = function() {

        //console.log($scope.selectedMenu.menuName);
        if ($scope.selectedMenu.menuName == '' || $scope.selectedMenu.menuName == undefined) {
            snackbar.create(" Please enter menu name.", 5000, "error");
            return;
        }
        $scope.globalLoadingIndicator = true;
        $('#UpdateMenuModal').modal('hide');
        var data = {
            "id": $scope.selectedMenu.id,
            "menuName": $scope.selectedMenu.menuName,
            "status": 1,
            "updatedById": $rootScope.empDetails.empId,
            "productId": $rootScope.empDetails.productId,
            "orgId": $rootScope.empDetails.organization.orgId
        };
        appService.httpPost(data, "updatemenu").then(function(response) {
            $scope.globalLoadingIndicator = false;
            //console.log("----------------Save Menu API Response----------------");
            //console.log(response);
            if (response.result) {
                $scope.selectedMenu = null;
                $scope.getModuleList();
            } else {
                snackbar.create(" Something went wrong, Please try again.", 5000, "error");
            }
        });
    }

    $scope.showAddSubMenuModal = function(data) {
        $scope.selectedMenu = angular.copy(data);
        $('#subMenuModal').modal('show');
    }

    $scope.showUpdateSubMenuModal = function(data) {
        $scope.selectedSubMenu = angular.copy(data);
        $('#updateSubMenuModal').modal('show');
    }

    $scope.submitSubMenu = function() {

        //console.log($scope.selectedSubMenu.subMenuName);
        //console.log($scope.selectedMenu);
        if ($scope.selectedSubMenu.subMenuName == '' || $scope.selectedSubMenu.subMenuName == undefined) {
            snackbar.create(" Please enter sub menu name.", 5000, "error");
            return;
        }
        $scope.globalLoadingIndicator = true;
        $('#subMenuModal').modal('hide');
        var data = {
            "subMenuName": $scope.selectedSubMenu.subMenuName,
            "createdById": $rootScope.empDetails.empId,
            "menuId": $scope.selectedMenu.id
        };
        appService.httpPost(data, "savesubmenu").then(function(response) {
            $scope.globalLoadingIndicator = false;
            //console.log("----------------Save Menu API Response----------------");
            //console.log(response);
            if (response.result) {
                $scope.selectedSubMenu = null;
                $scope.getModuleList();
            } else {
                snackbar.create(" Something went wrong, Please try again.", 5000, "error");
            }
        });
    }

    $scope.submitUpdateSubMenu = function() {

        //console.log($scope.selectedSubMenu.subMenuName);
        //console.log($scope.selectedMenu);
        if ($scope.selectedSubMenu.subMenuName == '' || $scope.selectedSubMenu.subMenuName == undefined) {
            snackbar.create(" Please enter sub menu name.", 5000, "error");
            return;
        }
        $scope.globalLoadingIndicator = true;
        $('#updateSubMenuModal').modal('hide');
        var data = {
            "id": $scope.selectedSubMenu.id,
            "subMenuName": $scope.selectedSubMenu.subMenuName,
            "updatedById": $rootScope.empDetails.empId,
            "menuId": $scope.selectedMenu.id
        };
        appService.httpPost(data, "updatesubmenu").then(function(response) {
            $scope.globalLoadingIndicator = false;
            //console.log("----------------Save Menu API Response----------------");
            //console.log(response);
            if (response.result) {
                $scope.selectedSubMenu = null;
                $scope.getModuleList();
            } else {
                snackbar.create(" Something went wrong, Please try again.", 5000, "error");
            }
        });
    }

    $scope.getModuleList();
    //-------------userAccessControl--------------------
    $scope.getEmployeeList = function(event) {
        if (event == 'onLoad')
            $scope.flagEmpDetLoading = true;
        else if (event == "onUpdate")
            $scope.flagEmpDetLineIndicator = true;

        // appService.httpGet("getAllEmpList/0/" + $rootScope.empDetails.branch.branchId + "/0").then(function(response) {
        appService.httpGet("getAllEmpList/0/" + $scope.branchDet.selectBranchId + "/0").then(function(response) {
            //console.log("-----------------------Employee List------------------------");
            //console.log(response);
            $scope.flagEmpDetLoading = false;
            $scope.flagEmpDetLineIndicator = false;
            if (response.result) {
                $scope.employeeList = response.allEmpDetails;

                for (var i = 0; i < $scope.employeeList.length; i++) {
                    if ($scope.employeeList[i].firstName != null) {
                        $scope.employeeList[i].concatedName = $scope.employeeList[i].firstName;
                    }

                    if ($scope.employeeList[i].lastName != null) {
                        $scope.employeeList[i].concatedName = $scope.employeeList[i].firstName + " " + $scope.employeeList[i].lastName;
                    }
                }
            } else {
                $scope.employeeList = [];
            }
        });
    }

    //-------------userAccessControl--------------------
    $scope.getOrgLevelEmployeeList = function() {
        appService.httpGet("getAllEmpList/" + $rootScope.empDetails.organization.orgId + "/0/0").then(function(response) {
            //console.log("-----------------------Employee List------------------------");
            //console.log(response);
            $scope.flagEmpDetLoading = false;
            $scope.flagEmpDetLineIndicator = false;
            $scope.orgEmployeeList = response.allEmpDetails;

            for (var i = 0; i < $scope.orgEmployeeList.length; i++) {
                if ($scope.orgEmployeeList[i].firstName != null) {
                    $scope.orgEmployeeList[i].concatedName = $scope.orgEmployeeList[i].firstName;
                }

                if ($scope.orgEmployeeList[i].lastName != null) {
                    $scope.orgEmployeeList[i].concatedName = $scope.orgEmployeeList[i].firstName + " " + $scope.orgEmployeeList[i].lastName;
                }
            }
        });
    }

    // $scope.getEmployeeList("onLoad");

    $scope.isRoleExist = function(roleId, roles) {
        for (var i = 0; i < roles.length; i++) {
            if (roleId == roles[i].id) {
                return true;
            }
        }
        return false;
    }
    $scope.isSuperAdmin = function(roleName, empDet) {
        var flag = 0;
        if (empDet.empId == $rootScope.empDetails.empId) {
            for (var i = 0; i < $rootScope.empDetails.roles.length; i++) {
                if (roleName == $rootScope.empDetails.roles[i].name) {
                    flag = 1;
                    break;
                }
            }
        }

        if (roleName == $rootScope.ROLES.SUPERADMIN.name && flag == 1) {
            return false;
        } else {
            return true;
        }
    }

    $scope.checkPendingActions = function(empDet, roleId, roleName, status) {

        if ($scope.isSuperAdmin(roleName, empDet)) {
            $("#indicator" + empDet.empId + "" + roleId).show();
            if (status == true) {
                //If you want to remove the role then set status as 1
                status = 1;
            } else {
                //If you want to add the role then set status as 0
                status = 0;
            }
            $scope.roleData = {
                roleId: roleId,
                empId: empDet.empId,
                orgId: $rootScope.empDetails.organization.orgId,
                isDeactive: status,
                emailId: empDet.emailId,
                firstName: empDet.firstName,
                lastName: empDet.lastName,
                roleName: roleName
            };

            appService.httpPost($scope.roleData, "checkpendingactionsinuseraccesscontrol").then(function(response) {
                //console.log("-------------Check Pending Action Response------------");
                //console.log(response);

                if (response.statusCode == 100) {
                    $("#indicator" + empDet.empId + "" + roleId).hide();
                    $scope.statusMessage = response.reason;
                    $("#statusMessageModal").modal('show');
                } else if (response.statusCode == 200) {
                    if (status == 1) {
                        $("#indicator" + empDet.empId + "" + roleId).hide();
                        $("#confirmRemModal").modal("show");
                        $scope.cnfRemPopupRoleTxt = roleName;
                        if ($rootScope.ROLES.SUPERADMIN == roleId)
                            $scope.removeRoleCnfMsg = '';
                        else if ($rootScope.ROLES.EMPLOYEE == roleId)
                            $scope.removeRoleCnfMsg = '';
                        else if ($rootScope.ROLES.EXECUTIVE == roleId)
                            $scope.removeRoleCnfMsg = 'If you remove EXECUTIVE role then this employee will not be seen on Executive list of mobile app and it will be removed from the list of executive tab.';
                        else if ($rootScope.ROLES.CONTROLLER == roleId)
                            $scope.removeRoleCnfMsg = '';
                        else if ($rootScope.ROLES.EVALUATOR == roleId)
                            $scope.removeRoleCnfMsg = 'If you remove EVALUATOR role then this employee will be removed from list of evaluaters in setup config and also you can not assign suggestion to this user for evaluation.';
                        else if ($rootScope.ROLES.IMPLEMENTER == roleId)
                            $scope.removeRoleCnfMsg = 'If you remove EVALUATOR role then this employee will be removed from list of implementors in setup config and also you can not assign suggestion to this user for implementation.';
                    } else {
                        appService.httpPost($scope.roleData, "useraccesscontrol").then(function(response) {
                            //console.log("---------------Set Role Response--------------");
                            //console.log(response);
                            $("#indicator" + empDet.empId + "" + roleId).hide();
                            if (response.result) {
                                // if(status == 0)
                                //     $("#role" + employeeId + "" + roleId).addClass('selectedRole');
                                // else
                                //     $("#role" + employeeId + "" + roleId).removeClass('selectedRole');
                                $scope.getEmployeeList("onUpdate");
                                snackbar.create("Role updated successfully.", 5000, "success");
                            } else {
                                if (response.statusCode == 100) {
                                    $scope.statusMessage = response.reason;
                                    $("#statusMessageModal").modal('show');
                                } else {
                                    snackbar.create("Error occurred. Please try again.", 5000, "error");
                                }
                            }
                        });
                    }
                } else {
                    snackbar.create("Error occurred. Please try again.", 5000, "error");
                }
            });
        } else {
            $scope.statusMessage = "You can't remove SUPERADMIN role.";
            $("#statusMessageModal").modal('show');
        }
    }

    $scope.selectRole = function() {
        $scope.flagdeleteSpinner = true;
        //console.log("---------------Set Role Request--------------");
        //console.log($scope.roleData);

        appService.httpPost($scope.roleData, "useraccesscontrol").then(function(response) {
            //console.log("---------------Set Role Response--------------");
            //console.log(response);
            $scope.flagdeleteSpinner = false;
            if (response.result) {
                $("#confirmRemModal").modal("hide");
                // if(status == 0)
                //     $("#role" + employeeId + "" + roleId).addClass('selectedRole');
                // else
                //     $("#role" + employeeId + "" + roleId).removeClass('selectedRole');
                $scope.getEmployeeList("onUpdate");
                snackbar.create("Role updated successfully.", 5000, "success");
            } else {
                if (response.statusCode == 100) {
                    $scope.statusMessage = response.reason;
                    $("#statusMessageModal").modal('show');
                } else {
                    snackbar.create("Error occurred. Please try again.", 5000, "error");
                }
            }
        });
    }


    //------------------end userAccessControl----------------------

    $scope.showHelpPopup = function(section) {
        if (section == 'module_mgmt') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.MODULE_MGMT;
        } else if (section == 'usr_acc_mgmt') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.USER_ACC_MGMT;
        } else if (section == 'usr_acc_control') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.USER_ACC_CONTROL;
        } else if (section == 'plant_acc_mgmt') {
            $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.PLANT_ACC_MGMT;
        }
        $("#helpModal").modal('show');
    }


    var tabsFn = (function() {

        function init() {
            setHeight();
        }

        function setHeight() {
            var $tabPane = $('.tab-pane'),
                tabsHeight = $('.nav-tabs').height();

            $tabPane.css({
                height: tabsHeight
            });
        }

        $(init);
    })();

    /*------------------------------------START Plant Accesss control------------------------------------*/

    $scope.getbranchList = function() {
        appService.httpGet("getBranchListNew/" + $rootScope.empDetails.organization.orgId).then(function(response) {
            //console.log("------------Get branch List-----------");
            //console.log(response);
            if (response.result) {
                $scope.branchList = response.branch;
                $scope.getplantaccessList();
                if ($scope.mainTab == 5) {
                    $scope.setSelectedBranch($scope.user.branchId);
                }
            }

        });
    }
    $scope.getbranchList();

    $scope.getplantaccessList = function() {
        appService.httpGet("getBranchAccessSetup/" + $rootScope.empDetails.organization.orgId).then(function(response) {
            //console.log("------------Get Plant List-----------");
            //console.log(response);
            if (response.result) {
                $scope.branchaccessList = response.branchAccessList;
                //console.log($scope.branchaccessList);
            } else {
                $scope.branchaccessList = [];
            }

        });
    }
    $scope.getplantaccessList();

    $scope.getPlantAccessId = function(branchId, empdet) {

        var accessId = 0;
        if ($scope.branchaccessList != null && $scope.branchaccessList.length > 0) {
            for (var i = 0; i < $scope.branchaccessList.length; i++) {
                if ($scope.branchaccessList[i].branchId == branchId && $scope.branchaccessList[i].empId == empdet) {
                    accessId = $scope.branchaccessList[i].id;
                    break;
                }
            }
        }
        return accessId;

    }

    $scope.isPlantExist = function(branchId, empdet) {
        if ($scope.branchaccessList != null && $scope.branchaccessList.length > 0) {
            for (var i = 0; i < $scope.branchaccessList.length; i++) {
                if ($scope.branchaccessList[i].branchId == branchId && $scope.branchaccessList[i].empId == empdet) {
                    return true;
                }
            }
            return false;
        }
    }


    $scope.saveplantaccess = function(empDet, branchId, statusplant, accessId) {

        if (empDet) {
            $("#plantindicator" + empDet.empId + "" + branchId).show();
            if (statusplant == true) {
                //If you want to remove the role then set status as 1
                status = "N";
            } else {
                //If you want to add the role then set status as 0
                status = "Y";
            }
            if (accessId == 0) {
                $scope.data = {
                    branchId: branchId,
                    empId: empDet.empId,
                    isAccess: status,
                    orgId: $rootScope.empDetails.organization.orgId
                };
                //console.log($scope.data);
                appService.httpPost($scope.data, "saveBranchAccessSetup").then(function(response) {
                    //console.log("------------Save Plant Access control-----------");
                    if (response.result) {
                        $("#plantindicator" + empDet.empId + "" + branchId).hide();
                        //console.log(response);
                        $scope.getplantaccessList();
                        snackbar.create("Plant added successfully.", 5000, "success");
                    } else {
                        snackbar.create("Error occurred. Please try again.", 5000, "error");
                    }
                });
            } else {
                $scope.selectedAccessId = accessId;
                //console.log($scope.selectedAccessId);
                $("#confirmPlantModal").modal("show");
                $("#plantindicator" + empDet.empId + "" + branchId).hide();
            }
        }
    }


    $scope.deleteplantaccess = function() {
            $scope.flagdeleteplantaccess = true;
            appService.httpGet("deleteBranchAccessSetup/" + $scope.selectedAccessId).then(function(response) {
                //console.log("------------Delete Plant Access control-----------");
                $scope.flagdeleteplantaccess = false;
                if (response.result) {
                    //console.log(response);
                    $("#confirmPlantModal").modal("hide");
                    $scope.getplantaccessList();
                    snackbar.create("Plant access deleted successfully.", 5000, "success");
                } else {
                    snackbar.create("Error occurred. Please try again.", 5000, "error");
                }
            });
        }
        /*--------------------------END PLANT ACCESS CONTROL----------------------------------------------*/

    /*-------------------------START USER ACCESS MANAGEMENT(12-06-2020)---------------------------*/
    //-------12-06-2020------//
    //--IF Change Branch
    // $scope.selectedBranchDet = function (data) {
    //     $scope.branchDet.selectBranchId = data;
    //     $scope.getUserwiseMenuAccessList('');
    // }
    $scope.defaultSubMenuID = [];

    $scope.getModuleMenuList = function() {
        $scope.menuListLoading = true;
        appService.httpGet("getmenulistbyproductid/" + $rootScope.empDetails.productId).then(function(response) {
            console.log("----------------Module  List API Response----------------");
            console.log(response);
            $scope.menuListLoading = false;
            if (response.result) {
                $scope.moduleList = response.menuList;
                console.log("Module List Response", $scope.moduleList);
            } else {
                $scope.menuList = [];
            }
        });
    }


    $scope.getUserwiseMenuAccessList = function(empId) {
        $scope.data = {
            "branchId": parseInt($scope.branchDet.selectBranchId),
            "orgId": $rootScope.empDetails.organization.orgId
        }
        if (empId != '') {
            $scope.data.empId = empId;
        }
        // return;
        $scope.userwiseListLoading = true;
        appService.httpPost($scope.data, "getUserAccessList").then(function(response) {
            console.log("----------------User Wise Access Menu List API Response----------------");
            console.log(response);
            $scope.userwiseListLoading = false;
            if (response.result) {
                if (response.empList != null && response.empList.length > 0) {
                    $scope.userList = response.empList;
                    if (empId != '') {
                        $scope.setAllMenuData();
                    }
                } else {
                    $scope.userList = [];
                }
            } else {
                $scope.userList = [];
            }
        });
    }

    //-------------userAccessControl--------------------
    //----Change Model Branch
    // $scope.setSelectedBranch = function (data) {
    //     console.log(data);
    //     $scope.selectedBranchId = data;
    //     $scope.user.selectEmpId = '';
    //     $scope.getUserEmployeeList();
    // }

    $scope.getUserEmployeeList = function(event) {
        if (event == 'onLoad')
            $scope.flagEmpDetLoading = true;
        else if (event == "onUpdate")
            $scope.flagEmpDetLineIndicator = true;
        appService.httpGet("getAllEmpList/0/" + $scope.selectedBranchId + "/0").then(function(response) {
            console.log("-----------------------User Employee List------------------------");
            console.log(response);
            $scope.flagEmpDetLoading = false;
            $scope.flagEmpDetLineIndicator = false;
            if (response.result) {
                $scope.employeeList = response.allEmpDetails;
                for (var i = 0; i < $scope.employeeList.length; i++) {
                    if ($scope.employeeList[i].firstName != null) {
                        $scope.employeeList[i].concatedName = $scope.employeeList[i].firstName;
                    }
                    if ($scope.employeeList[i].lastName != null) {
                        $scope.employeeList[i].concatedName = $scope.employeeList[i].firstName + " " + $scope.employeeList[i].lastName;
                    }
                }
            } else {
                $scope.employeeList = [];
            }
        });
    }

    $scope.userAccesspopup = function() {
        $scope.user.branchId = $scope.branchDet.selectBranchId.toString();
        $("#adduseraccessModal")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
        $scope.getbranchList();
        $scope.getModuleMenuList();
        $scope.getUserwiseMenuAccessList('');
        //$scope.employeeList = [];
    }

    $scope.accessuserDet = [];
    //-----------------Check All----------------------//
    $scope.setSelectedBranch = function(data) {
        console.log(data);
        $scope.selectedBranchId = data;
        $scope.branchDet.selectBranchId = $scope.selectedBranchId;
        $scope.user.selectEmpId = '';
        $scope.getModuleMenuList();
        $scope.getUserEmployeeList();
        $scope.getUserwiseMenuAccessList('');
    }

    // $scope.defaultSubMenuID = [];
    // -----change Menu -----//

    $scope.checkuserWiseMenu = function(data) {
        console.log(data);
        $scope.checkuser = $scope.userList.filter(obj => obj.empId == data);
        if ($scope.checkuser == null || $scope.checkuser.length == 0) {
            $scope.getUserwiseMenuAccessList(data);
        } else {
            $scope.checkuser = $scope.checkuser[0];
            $scope.setAllMenuData();
        }
    }

    $scope.setAllMenuData = function() {

        $scope.defaultSubMenuID = [];
        $scope.moduleList.forEach(obj => $scope.toggleAllChecks(obj, false));
        if (!$scope.checkuser || $scope.checkuser.length === 0) {
            console.log(",sjbfh");

            return;
        }
        console.log("module list", $scope.moduleList);
        console.log("check user", $scope.checkuser);
        $scope.checkuser.empAccess.forEach(obj => {
            const menuID = obj.menuId;
            const subMenuList = obj.subMenuList;
            const module = $scope.moduleList.filter(obj => obj.id == menuID)[0];

            subMenuList.forEach(obj => {
                $scope.settoggleAll(module, obj.subMenuName, obj.subMenuId, true);
                $scope.defaultSubMenuID.push(obj.subMenuId);
                module.checkmenuId = false;
            });
        });
    }

    // $scope.checkAll = true;
    $scope.checkAllMenu = function(data, isChecked) {
        $scope.checkmenuId = isChecked;
        $scope.toggleAllChecks(data, isChecked);
        // data.submenuList.forEach(obj => $scope.toggleAllChecks(data, isChecked));
    }

    $scope.getAccessType = function(empId, menuId, subMenuId) {
        var type = '';
        var checkuser = $scope.userList.filter(obj => obj.empId == empId);
        if (checkuser != null && checkuser.length > 0) {
            var menuList = checkuser[0].empAccess.filter(obj => obj.menuId == menuId);
            if (menuList != null && menuList.length > 0) {
                var subMenuList = menuList[0].subMenuList.filter(obj => obj.subMenuId == subMenuId);
                if (subMenuList != null && subMenuList.length > 0) {
                    type = subMenuList[0].accessType;
                }
            }
        }
        return type;
    }

    $scope.toggleAllChecks = function(x, isChecked) {
        x.submenuList.forEach(item => {
            //($scope.getAccessType($scope.user.selectEmpId.empId, x.id, item.id) == 'ROLE') ? true : 
            item.statusId = isChecked;
            item.accessType = $scope.getAccessType($scope.user.selectEmpId.empId, x.id, item.id);
            if (item.accessType != 'ROLE') {
                var res = {
                    "branchId": parseInt($scope.user.branchId),
                    "empId": parseInt($scope.user.selectEmpId.empId),
                    "orgId": $rootScope.empDetails.organization.orgId,
                    "menuId": x.id,
                    "subMenuId": item.id,
                    "createdBy": $rootScope.empDetails.empId,
                    "updatedBy": $rootScope.empDetails.empId,
                    "access": "Y",
                    "accessType": $scope.getAccessType($scope.user.selectEmpId.empId, x.id, item.id)
                };
            }
            $scope.array = (res && $scope.accessuserDet.filter(obj => obj.subMenuId == res.subMenuId)) || [];
            (isChecked && !$scope.defaultSubMenuID.includes(item.id) && res && !$scope.array.length) && $scope.accessuserDet.push(res);
            (!isChecked && res) && ($scope.accessuserDet = $scope.accessuserDet.filter(obj => obj.subMenuId != res.subMenuId));
        });
    }

    $scope.settoggleAll = function(x, subMenuName, submenuId, isDefault) {
        x.checkmenuId = false;
        // $scope.selectsubmenuId = submenuId;
        let isPush = true;
        x.submenuList.every((item, key) => {
            if (item.subMenuName == subMenuName) {
                item.statusId = !item.statusId;
                isPush = item.statusId;
                return false;
            }
            return true;
        });
        var accessType = $scope.getAccessType($scope.user.selectEmpId.empId, x.id, submenuId);
        if ($scope.getAccessType($scope.user.selectEmpId.empId, x.id, submenuId) != 'ROLE') {
            var res = {
                "branchId": parseInt($scope.user.branchId),
                "empId": parseInt($scope.user.selectEmpId.empId),
                "orgId": $rootScope.empDetails.organization.orgId,
                "menuId": x.id,
                "subMenuId": submenuId,
                "createdBy": $rootScope.empDetails.empId,
                "updatedBy": $rootScope.empDetails.empId,
                "access": "Y",
                "accessType": accessType
            }
        }
        console.log(isPush);
        // if (!isPush && $scope.defaultSubMenuID.includes(submenuId)) {
        //     //------ Delete Submenu--------------------//
        //     console.log("CALLING DELETE");
        //     let userAccessID;
        //     $scope.checkuser.empAccess.every(obj => {
        //         const accessObj = obj.subMenuList.filter(listObj => listObj.subMenuId == submenuId)[0];
        //         if (accessObj) {
        //             userAccessID = accessObj;
        //             return false;
        //         }
        //         return true;
        //     });
        //     console.log("userAccessID:", userAccessID);
        //     $scope.removePopup(userAccessID);
        // }
        $scope.array = (res && $scope.accessuserDet.filter(obj => obj.subMenuId == res.subMenuId)) || [];
        (isPush && !isDefault && !$scope.defaultSubMenuID.includes(submenuId) && res && !$scope.array.length) && $scope.accessuserDet.push(res);
        if (!isPush && res) {
            $scope.accessuserDet = $scope.accessuserDet.filter(obj => obj.subMenuId !== res.subMenuId);
        }
    }
    console.log("Array response", $scope.accessuserDet);



    $scope.addUserAccessData = function() {
        if ($scope.user.branchId == "" || $scope.user.branchId == null || $scope.user.branchId == undefined) {
            snackbar.create("Please select branch", 3000, "error");
            return;
        }
        if ($scope.user.selectEmpId == "" || $scope.user.selectEmpId == null || $scope.user.selectEmpId == undefined) {
            snackbar.create("Please select employee", 3000, "error");
            return;
        }
        if (!$scope.accessuserDet || $scope.accessuserDet.length <= 0) {
            snackbar.create("Please select atleast one submenu", 3000, "error");
            return;
        }

        $scope.data = {
            "userAccessList": $scope.accessuserDet
        }
        console.log("Add Request", $scope.data);
        // return;
        appService.httpPost($scope.data, "addOrUpdateUserAccess").then(function(response) {
            console.log("----------------Add Wise Access Menu List API Response----------------");
            console.log(response);
            if (response.result) {
                $("#adduseraccessModal").modal('hide');
                // $scope.user = {};
                $scope.user.selectEmpId = '';
                $scope.accessuserDet = [];
                snackbar.create('User access added successfully', 3000, "success");
                $scope.getUserwiseMenuAccessList('');
            } else {
                snackbar.create("Error occured.Please try again.", 5000, "error");
            }
        });
    }


    $scope.clearData = function() {
            // $scope.user = {};
            $scope.user.selectEmpId = ''
            $scope.menuId = '';
            $scope.selectsubmenuId = '';
            $scope.getUserwiseMenuAccessList('');
            // $scope.getbranchList();
        }
        /*---------------------DELETE USER ACCESS DATA-------------------------------------*/
    $scope.removePopup = function(data) {
        console.log(data);
        $scope.removeId = data.userAccessId;
        $scope.deleteSubMenuId = data.subMenuId;
        console.log(data.userAccessId);
        //$("#adduseraccessModal").modal('hide');
        $("#confirmdeleteModal")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
    }

    $scope.deleteUserAccessData = function() {
            $scope.data = {
                "userAccessList": [{
                    "id": $scope.removeId,
                    "access": "N"
                }]
            }
            console.log("Add Request", $scope.data);
            // return;
            appService.httpPost($scope.data, "addOrUpdateUserAccess").then(function(response) {
                console.log("----------------Add Wise Access Menu List API Response----------------");
                console.log(response);
                if (response.result) {
                    $scope.defaultSubMenuID = [];
                    $("#confirmdeleteModal").modal('hide');
                    $scope.getUserwiseMenuAccessList('');
                    snackbar.create('User access removed successfully', 3000, "success");
                } else {
                    snackbar.create("Error occured.Please try again.", 5000, "error");
                }
            });
        }
        /*--------------------------------------End Remove-----------------------------------*/

}]);