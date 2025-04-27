'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('configApp', [
    'ngRoute',
    'ngScrollbars',
    'angularUtils.directives.dirPagination',
    'ngSanitize',
    'ui.select',
    'ui.bootstrap',
    'configApp.branches',
    'configApp.homePage',
    'configApp.employee',
    'configApp.userMgmt',
    'pascalprecht.translate',
    'configApp.redeemSetup',
    'configApp.policySetup',
    'configApp.launchSetup'
])

    .config(['$locationProvider', '$routeProvider', '$translateProvider', function ($locationProvider, $routeProvider, $translateProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo: '/home-page'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: 'translations/suggestion-mr',
            suffix: '.json'
        })
    }]);

app.factory('Auth', function ($rootScope) {

    var token;

    return {
        getToken: function () {
            return token;
        },
        setToken: function (data) {
            token = data;
        },
        getSideMenuData: function () {
            var data = [{
                "level": 0,
                "linkName": "Setup Info",
                "link": "/home-page",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 1,
                "linkName": "Branch",
                "link": "/branches",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 2,
                "linkName": "Department",
                "link": "/departments",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 3,
                "linkName": "Employee",
                "link": "/employee",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 4,
                "linkName": "Controller",
                "link": "/controller",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 5,
                "linkName": "Evaluator",
                "link": "/evaluator",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 6,
                "linkName": "Implementer",
                "link": "/implementor",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 7,
                "linkName": "Finance Controller",
                "link": "/finance",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 8,
                "linkName": "Executive",
                "link": "/executive",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 9,
                "linkName": "Benefit and Category",
                "link": "/benefits",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 10,
                "linkName": "Configure",
                "link": "/configure",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 11,
                "linkName": "Pending Tasks Escalation",
                "link": "/escalationMailConfig",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 12,
                "linkName": "Evaluation Metrics Points Setup",
                "link": "/custEvalPointsSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 13,
                "linkName": "Change Document",
                "link": "/docMaster",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 14,
                "linkName": "Access Management",
                "link": "/userMgmt",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 15,
                "linkName": "Mandatory & Target Setup",
                "link": "/mandatory",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 16,
                "linkName": "Gifts & Rewards",
                "link": "/redeemSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 17,
                "linkName": "Social Media & TOD",
                "link": "/socialMedia",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 18,
                "linkName": "Notice Board",
                "link": "/noticeboard",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 19,
                "linkName": "Incident Management",
                "link": "/incident",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 20,
                "linkName": "DWM Setup",
                "link": "/DWM",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 21,
                "linkName": "TPM Setup",
                "link": "/TPM_Setup",
                "isEnable": true,
                "isSetUpCompleted": true,
                "isActive": "Y"
            },
            {
                "level": 22,
                "linkName": "Auditor",
                "link": "/Auditor",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 23,
                "linkName": "Kuber Setup",
                "link": "/kuberSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 24,
                "linkName": "Onhold Decision authority",
                "link": "/onholdSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 25,
                "linkName": "Password Policy",
                "link": "/policySetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 26,
                "linkName": "Suggestion Template Setup",
                "link": "/suggTemplateSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 27,
                "linkName": "Suggestion Jury Setup",
                "link": "/jurySetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 28,
                "linkName": "Suggestion Assessment Setup",
                "link": "/suggestionSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 29,
                "linkName": "Social Club",
                "link": "/socialClub",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 30,
                "linkName": "Screen Customization",
                "link": "/suggInput",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 31,
                "linkName": "Suggestion Workflow",
                "link": "/suggworkflow",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 32,
                "linkName": "Sustenance Audit",
                "link": "/sustenanceAudit",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 33,
                "linkName": "PMS",
                "link": "/PMS",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 34,
                "linkName": "PMS-User Setup",
                "link": "/skillBook-userSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 35,
                "linkName": "PMS-Configuration",
                "link": "/skillBook-Configuration",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 36,
                "linkName": "PMS-Authority Setup",
                "link": "/skillBook-escalationSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 37,
                "linkName": "PMS-Upload Reference Document",
                "link": "/skillBookSetupHelp",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            },
            {
                "level": 38,
                "linkName": "PMS-Initiate Performance Sheet/Appraisal",
                "link": "/skillBookSetupPerformaceSheet",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 39,
                "linkName": "Agency List",
                "link": "/cwAgencyList",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }
            ];
            return data;
        }
    }
});

app.factory('getSideMenuStatus', function ($rootScope, $http) {
    var sideMenuStatus;
    return {
        getSideMenuStatus: function () {
            if (sessionStorage.getItem("sideMenuStatus") == null) {
                $http({
                    method: 'GET',
                    url: appDomain + "getconfig/" + $rootScope.empDetails.branch.branchId,
                    headers: {
                        'Authorization': $rootScope.empDetails.authToken
                    },
                    timeout: 60000 // request timeout is set to 60 seconds
                })
                    .then(function (response) {
                        var sideMenuStatusList = response.data.data;
                        //console.log("on getSideMenuStatus");
                        var lastNotCompletedIndex = -1;
                        for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
                            var name = $rootScope.sideMenuData[i].linkName;
                            for (var j = 0; j < sideMenuStatusList.length; j++) {
                                if (sideMenuStatusList[j].sideMenuName == name && sideMenuStatusList[j].isSetupCompleted == 1) {
                                    $rootScope.sideMenuData[i].isSetUpCompleted = true;
                                    $rootScope.sideMenuData[i].isEnable = true;
                                    break;
                                }
                            }
                        }
                        for (var k = 0; k < $rootScope.sideMenuData.length; k++) {
                            if ($rootScope.sideMenuData[k].isActive == 'Y' && $rootScope.sideMenuData[k].isSetUpCompleted == 0) {
                                lastNotCompletedIndex = k;
                                break;
                            }
                        }

                        if (lastNotCompletedIndex != -1) {
                            $rootScope.setSelectedMenu($rootScope.sideMenuData[lastNotCompletedIndex]);
                            $rootScope.sideMenuData[lastNotCompletedIndex].isEnable = true;
                        }

                        sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
                        sessionStorage.setItem("sideMenuStatus", JSON.stringify(response.data.data));
                        this.calculatePercentage();
                    })
                    .catch(function (error) {
                        error.data;
                    });
            } else {
                var sideMenuStatusList = JSON.parse(sessionStorage.getItem("sideMenuStatus"));
                for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
                    var name = $rootScope.sideMenuData[i].linkName;
                    for (var j = 0; j < sideMenuStatusList.length; j++) {
                        if (sideMenuStatusList[j].sideMenuName == name && sideMenuStatusList[j].isSetupCompleted == 1) {
                            $rootScope.sideMenuData[i].isSetUpCompleted = true;
                            $rootScope.sideMenuData[i].isEnable = true;
                            break;
                        }
                    }
                }
                sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
                this.calculatePercentage();
            }
        },
        setSideMenuStatus: function (data) {
            var setupId = -1;
            var index = -1;
            var sideMenuStatusList = JSON.parse(sessionStorage.getItem("sideMenuStatus"));
            //console.log("---------update status------------ for " + data.name);
            //console.log(sideMenuStatusList);
            if (sideMenuStatusList == null) {
                return;
            }
            for (var j = 0; j < sideMenuStatusList.length; j++) {
                if (sideMenuStatusList[j].sideMenuName == data.name) {
                    setupId = sideMenuStatusList[j].branch_setupId;
                    index = j;
                    break;
                }
            }
            //console.log("id=" + setupId);
            if (setupId == -1) {
                return;
            }
            data.id = setupId;
            $http({
                method: 'POST',
                url: appDomain + 'updatebranchSetupConfig',
                data: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': $rootScope.empDetails.authToken
                },
                timeout: 60000 // request timeout is set to 60 seconds
            })
                .then(function (response) {
                    //console.log("---------update status response------------");
                    //console.log(response);
                    if (response.data.result && index != -1) {
                        sideMenuStatusList[index].isSetupCompleted = data.isSetupCompleted;
                        JSON.parse(sessionStorage.setItem("sideMenuStatus".JSON.stringify(sideMenuStatusList)));
                        this.calculatePercentage();
                    }
                })
                .catch(function (error) {
                    //console.log(error.data);
                });

        },
        calculatePercentage: function () {
            //calculate percentage
            var totalSetup = 0;
            for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
                var tmpSideMenuData = $rootScope.sideMenuData[i];
                if (tmpSideMenuData.isActive == 'Y' && tmpSideMenuData.isSetUpCompleted) {
                    totalSetup++;
                }
            }
            $rootScope.setupPercentComplete = Math.round((totalSetup * 100) / ($rootScope.sideMenuData.length));
        },
        isSideMenuCompleted: function (menuName) {
            var flag = false;
            var sideMenuStatusList = JSON.parse(sessionStorage.getItem("sideMenuStatus"));
            //console.log("---------isSideMenuCompleted status------------ for " + menuName);
            //console.log(sideMenuStatusList);
            if (sideMenuStatusList == null) {
                return flag;
            }
            for (var j = 0; j < sideMenuStatusList.length; j++) {
                if (sideMenuStatusList[j].sideMenuName == menuName && sideMenuStatusList[j].isSetupCompleted == 1) {
                    flag = true;
                    break;
                }
            }
            return flag;
        }
    }
});

app.run(['$rootScope', '$location', 'Auth', 'getSideMenuStatus', 'appService', '$translate', '$window', function ($rootScope, $location, Auth, getSideMenuStatus, appService, $translate, $window) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        ////console.log($location.path());

        $rootScope.windowHeight = $(window)
            .innerHeight();
        var w = angular.element($window);
        $rootScope.getWindowDimensions = function () {
            return {
                'h': w.height(),
                'w': w.width()
            };
        };
        $rootScope.$watch($rootScope.getWindowDimensions, function (newValue, oldValue) {
            $rootScope.windowHeight = newValue.h;
            $rootScope.setSidebarStyle = function (type) {
                if (type == 'completed') {
                    return {
                        'height': (newValue.h - 165) + 'px',
                    };
                } else if (type == 'pending1') {
                    return {
                        'height': (newValue.h - 230) + 'px',
                    };
                } else if (type == 'pending2') {
                    return {
                        'height': (newValue.h - 192) + 'px',
                    };
                }
            }
            $rootScope.setEmpPageStyle = function () {
                return {
                    'height': (newValue.h - 165) + 'px',
                };
            }

            $rootScope.setSetCompletedHeight = function () {
                return {
                    'height': (newValue.h - 130) + 'px'
                };
            }
            //console.log("on resize on window=" + $rootScope.windowHeight);
        }, true);
        $rootScope.ROLES = {
            GREENTIN_SUPERADMIN: {
                id: 1,
                name: "GREENTIN_SUPERADMIN"
            },
            SUPERADMIN: {
                id: 2,
                name: "SUPERADMIN"
            },
            EMPLOYEE: {
                id: 3,
                name: "EMPLOYEE"
            },
            EXECUTIVE: {
                id: 3,
                name: "EXECUTIVE"
            },
            CONTROLLER: {
                id: 6,
                name: "CONTROLLER"
            },
            CONTROLLERLEVELUP: {
                id: 7,
                name: "CONTROLLERLEVELUP"
            },
            EVALUATOR: {
                id: 8,
                name: "EVALUATOR"
            },
            IMPLEMENTER: {
                id: 9,
                name: "IMPLEMENTER"
            },
            FINANCE_CONTROLLER: {
                id: 10,
                name: "FINANCE_CONTROLLER"
            },
            ORG_EXECUTIVE: {
                id: 11,
                name: "ORG_EXECUTIVE"
            },
            CELL_LEADER: {
                id: 12,
                name: "CELL_LEADER"
            },
            STAFF_PERSON: {
                id: 13,
                name: "STAFF_PERSON"
            },
            PLANT_PERSON: {
                id: 14,
                name: "PLANT_PERSON"
            },
            AUDITOR: {
                id: 15,
                name: "AUDITOR"
            }
        }

        $rootScope.finishSetup = function () {
            var data = {
                "id": $rootScope.empDetails.productOrgConfigDet.id,
                "isSetupCompleted": 1,
                "registrationByPass": $rootScope.empDetails.productOrgConfigDet.registrationByPass
            };

            appService.httpPost(data, "updatesetupcomleted")
                .then(function (response) {
                    //console.log("---------update status response------------");
                    //console.log(response);
                    $rootScope.empDetails.productOrgConfigDet.isSetupCompleted = 1;
                    localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
                    $('#setupCompleted').modal('show');
                });
        }
        $rootScope.currentIndex = 0;
        $rootScope.setupPercentComplete = 0;
        if (localStorage.getItem('userDet') == null && localStorage.getItem('userDet') == undefined) {
            window.location.href = '../index.html';
        }
        $rootScope.empDetails = JSON.parse(localStorage.getItem('userDet'));
        $rootScope.suggStatus = JSON.parse(localStorage.getItem('suggStatus'));
        //console.log("-----------logged in user details------------");
        //console.log($rootScope.empDetails);
        $rootScope.empDetails.productId = 2;
        Auth.setToken($rootScope.empDetails.authToken);
        $rootScope.menuName = 'Settings';

        try {
            $rootScope.menuData = JSON.parse(window.atob(localStorage.getItem('menuData')));
        } catch (err) {
            $rootScope.logOut();
        }

        ////console.log($rootScope.menuData);
        //if (sessionStorage.getItem('sideMenuData') != null) {
        //  $rootScope.sideMenuData = JSON.parse(sessionStorage.getItem('sideMenuData'));
        //} else {
        $rootScope.sideMenuData = Auth.getSideMenuData();
        //}

        /*if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 1) {
          for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
            $rootScope.sideMenuData[i].isEnable = true;
            $rootScope.sideMenuData[i].isSetUpCompleted = true;
          }
        }*/
        for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
            $rootScope.sideMenuData[i].isEnable = true;
            $rootScope.sideMenuData[i].isSetUpCompleted = true;
        }

        $rootScope.makeIndexEnable = function (index) {
            $rootScope.sideMenuData[index].isEnable = true;
            sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
        }

        $rootScope.makeIndexDataAvailable = function (index) {
            if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 0) {
                var data = {
                    name: $rootScope.sideMenuData[index].linkName,
                    isSetupCompleted: 1
                };
                getSideMenuStatus.setSideMenuStatus(data);
            }
            $rootScope.sideMenuData[index].isSetUpCompleted = true;
            sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
            getSideMenuStatus.calculatePercentage();
        }

        $rootScope.setPercentComplete = function (index) {
            var percent = 0;
            for (var i = 0; i < $rootScope.sideMenuData.length; i++) {
                if ($rootScope.sideMenuData[i].isSetUpCompleted == true) {
                    percent = $rootScope.sideMenuData[i].percent;
                }
            }
        }

        $rootScope.makeIndexDisable = function (index) {
            if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 0) {
                if (getSideMenuStatus.isSideMenuCompleted($rootScope.sideMenuData[index].linkName)) {
                    $rootScope.sideMenuData[index].isEnable = true;
                } else {
                    $rootScope.sideMenuData[index].isEnable = false;
                }
                sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
            }

        }

        $rootScope.makeIndexDataNotAvailable = function (index) {

            if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 0) {
                $rootScope.sideMenuData[index].isSetUpCompleted = false;
                sessionStorage.setItem("sideMenuData", JSON.stringify($rootScope.sideMenuData));
                var data = {
                    name: $rootScope.sideMenuData[index].linkName,
                    isSetupCompleted: 0
                };
                getSideMenuStatus.setSideMenuStatus(data);
                getSideMenuStatus.calculatePercentage();
            }
        }

        $rootScope.checkIndexEnable = function (index) {
            if (index != undefined && $rootScope.sideMenuData[index] != undefined && $rootScope.sideMenuData[index].isEnable != null) {
                return $rootScope.sideMenuData[index].isEnable;
            } else {
                return false;
            }

        }

        $rootScope.checkMenuAccess = function (menuName) {
            var flag = false;
            if ($rootScope.menuData == null || $rootScope.menuData == undefined) {
                return true;
            }
            for (var i = 0; i < $rootScope.menuData.length; i++) {
                if ($rootScope.menuData[i].menuName == menuName) {
                    var subMenuList = $rootScope.menuData[i].subMenuList;
                    for (var j = 0; j < subMenuList.length; j++) {
                        if (subMenuList[j].statusId == 1) {
                            flag = true;
                        }
                    }
                }
            }
            return flag;
        }

        $rootScope.checkSubMenuAccess = function (menuName, subMenuName) {
            var flag = false;
            /*if ($rootScope.menuData == null || $rootScope.menuData == undefined) {
                return true;
            }*/
            for (var i = 0; i < $rootScope.menuData.length; i++) {
                if ($rootScope.menuData[i].menuName == menuName) {
                    var subMenuList = $rootScope.menuData[i].subMenuList;
                    for (var j = 0; j < subMenuList.length; j++) {
                        if (subMenuList[j].subMenuName == subMenuName && subMenuList[j].statusId == 1) {
                            flag = true;
                        }
                    }
                }
            }
            return flag;
        }

        $rootScope.isRoleExistOfRegisteredUser = function (roleName) {
            for (var i = 0; i < $rootScope.empDetails.roles.length; i++) {
                if ($rootScope.empDetails.roles[i].name == roleName) {
                    return true;
                }
            }

            return false;
        }



        /*if (sessionStorage.getItem("selectedSideMenu") != null) {
            $rootScope.selectedMenu = JSON.parse(sessionStorage.getItem("selectedSideMenu"));
            $rootScope.currentIndex = $rootScope.selectedMenu.level;
            $location.path($rootScope.selectedMenu.link);
            //console.log("in if condition");
        } else {
            //console.log("in else condition");
            $rootScope.selectedMenu = $rootScope.sideMenuData[0];
            $rootScope.currentIndex = $rootScope.selectedMenu.level;
            $location.path($rootScope.selectedMenu.link);
        }*/

        if ($rootScope.empDetails.productOrgConfigDet.isSetupCompleted == 0) {
            getSideMenuStatus.getSideMenuStatus();
        } else {
            getSideMenuStatus.calculatePercentage();
        }

        if (sessionStorage.getItem("selectedMainMenu") != null) {
            $rootScope.selectedMainMenu = sessionStorage.getItem("selectedMainMenu");
        }
        $rootScope.setMainMenu = function (menuName) {
            //console.log("Set Main Menu");
            $rootScope.selectedMainMenu = menuName;
            sessionStorage.setItem("selectedMainMenu", $rootScope.selectedMainMenu);
            //console.log($rootScope.selectedMainMenu);
        }

        $rootScope.setSelectedMenu = function (data) {
            //if ($rootScope.checkSubMenuAccess($rootScope.menuName, data.linkName)) {
            $rootScope.selectedMenu = data
            sessionStorage.setItem("selectedSideMenu", JSON.stringify(data));
            window.location.href = "#!" + data.link;
            // } else {
            //   window.location.href = "#!/forbidden-access";
            //}
        }

        $rootScope.isSuperAdmin = function () {
            var flag = false;
            var empRole = $rootScope.empDetails.roles;
            for (var i = 0; i < empRole.length; i++) {
                var role = empRole[i].name.toLowerCase();
                if (role == 'orgadmin') {
                    flag = true;
                }
            }
            return flag;
        }
        $rootScope.isSuperAdmin1 = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.roles != null && $rootScope.empDetails.roles.length > 0) {
                    var empRole = $rootScope.empDetails.roles;
                    for (var i = 0; i < empRole.length; i++) {
                        var role = empRole[i].name.toLowerCase();
                        if (role == 'superadmin') {
                            flag = true;
                        }
                    }
                }
            }
            return flag;
        }
        $rootScope.isReferanceDataUpload = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.pmsUserRoles != null && $rootScope.empDetails.pmsUserRoles.length > 0) {
                    for (let index = 0; index < $rootScope.empDetails.pmsUserRoles.length; index++) {
                        if ($rootScope.empDetails.pmsUserRoles[index].userType.caption == 'PTT' || $rootScope.empDetails.pmsUserRoles[index].userType.caption == 'OE_LEAD' || $rootScope.empDetails.pmsUserRoles[index].userType.caption == 'SUPERVISOR') {
                            flag = true;
                        }
                    }
                }
            }
            if (!flag) {
                flag = $rootScope.isSuperAdmin1();
            }
            return flag;
        }
        $rootScope.isPMSAccess = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.pmsUserRoles != null && $rootScope.empDetails.pmsUserRoles.length > 0) {
                    for (let index = 0; index < $rootScope.empDetails.pmsUserRoles.length; index++) {
                        if ($rootScope.empDetails.pmsUserRoles[index].userType.caption == 'OE_LEAD' || $rootScope.empDetails.pmsUserRoles[index].userType.caption == 'SUPERVISOR') {
                            flag = true;
                        }
                    }
                }
            }
            if (!flag) {
                flag = $rootScope.isSuperAdmin1();
            }
            return flag;
        }
        $rootScope.logOut = function () {
            localStorage.removeItem("menuData");
            localStorage.removeItem("userDet");
            localStorage.removeItem("suggStatus");
            localStorage.removeItem("subscriptionPopDet");
            sessionStorage.removeItem('sideMenuData');
            sessionStorage.removeItem('sideMenuStatus');
            sessionStorage.removeItem('selectedSideMenu');
            sessionStorage.removeItem('selectedSideMenu1');
            sessionStorage.removeItem('subscriptionPopShown');
            window.location.href = '../login.html';
        }

        $rootScope.changeLanguage = function (x) {
            //console.log("value of x" + x)
            if (x == 3) {
                appService.httpGetLocal("../translations/suggestion-hin.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate.SuggId);

                    });
            } else if (x == 2) {
                appService.httpGetLocal("../translations/suggestion-mr.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate.SuggId);

                    });
            } else if (x == 1) {
                appService.httpGetLocal("../translations/suggestion-en.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate.SuggId);

                    });
            }
        }

        var lang = $rootScope.empDetails.langName;
        if (!angular.isUndefined(lang) && lang != null) {
            $rootScope.changeLanguage(lang.langId);
        } else {
            $rootScope.changeLanguage(1);
            $rootScope.empDetails.langName = {
                "langId": 1,
                "langName": "English"
            };
            localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
        }




        // var lang = $rootScope.empDetails.langName;
        // $rootScope.changeLanguage(1);
    });
}]);

app.directive('checkDocImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', 'dist/icons/ic_doc_image_placeholder.png'); // set default image
            });
        }
    }
});
app.directive('scrollBottom', function () {
    return {
        scope: {
            scrollBottom: "="
        },
        link: function (scope, element) {
            scope.$watchCollection('scrollBottom', function (newValue) {
                if (newValue) {
                    $(element)
                        .scrollTop($(element)[0].scrollHeight);
                }
            });
        }
    }
})
//Removes default link to anchor tag
app.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                elem.on('click', function (e) {
                    e.preventDefault();
                });
            }
        }
    };
});


app.directive('checkDocImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', 'dist/icons/ic_doc_image_placeholder.png'); // set default image
            });
        }
    }
});

app.directive("fileread", [function () {
    return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
}]);

app.directive('fileUpload', function () {
    return {
        scope: true, //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var files = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0; i < files.length; i++) {
                    //emit event upward
                    scope.$emit("fileSelected", {
                        file: files[i]
                    });
                }
            });
        }
    };
});

app.directive('checkSuggDetUsrImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', '../dist/icons/ic_profile_placeholder.png'); // set default image
            });
        }
    }
});

// Custom Malihu scroll bar
app.config(function (ScrollBarsProvider) {
    ScrollBarsProvider.defaults = {
        scrollButtons: {
            scrollAmount: 'auto', // scroll amount when button pressed
            enable: true // enable scrolling buttons by default
        },
        axis: 'y', // enable 2 axis scrollbars by default
        theme: 'blue',
        advanced: {
            updateOnContentResize: true
        }
    };
});

app.factory('sharedService', function ($rootScope) {
    var sharedService = {};
    sharedService.message = '';

    sharedService.prepForBroadcast = function (msg) {
        this.message = msg;
        this.broadcastItem();
    };

    sharedService.broadcastItem = function () {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharedService;
});

app.constant('FILTER_RESOURCES', (function () {
    return {
        PENDING: 1,
        UNDER_EVAL: 2,
        FINAL: 4
    };
})());

app.constant('CONST_RESOURCES', (function () {
    // Use the variable in your constants

    var today = new Date();
    var dd = '';
    if (today.getDay() != 0) {
        //console.log("if condition " + today.getDate());
        dd = today.getDate();
    } else {
        //console.log("else condition " + today.getDate());
        dd = today.getDate();
    }
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    var toDate = yyyy + '-' + mm + '-' + dd;

    var today = new Date();
    var dd = '';
    if (today.getDay() != 0) {
        dd = today.getDate();
    } else {
        dd = today.getDate();
    }
    var mm = today.getMonth(); //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var fromDate = yyyy + '-' + mm + '-' + dd;

    return {
        HELP_TEXT: {
            BRANCH: {
                TITLE: "Branch",
                IS_SINGLE_TEXT: true,
                TEXT: "The branch for which myeNovation suggestion platform is being rolled out."
            },
            DEPARTMENT: {
                TITLE: "Department",
                IS_SINGLE_TEXT: true,
                TEXT: "Suggestions can be raised for department only if it is added here."
            },
            EMPLOYEE: {
                TITLE: "Employee",
                IS_SINGLE_TEXT: true,
                TEXT: "Only those employees who are added here get access to myeNovation mobile app and portal."
            },
            EMPLOYEE_STATUS: {
                TITLE: "Employee",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Active",
                    text: "User who has verified and succefully logged in at least once"
                }, {
                    label: "Inactive",
                    text: "User who has completed verification process but not logged in even once"
                }, {
                    label: "Verified",
                    text: "User who has not completed verification and login process"
                }]
            },
            CONTROLLER: {
                TITLE: "Controller",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "",
                    text: "All suggestions raised for particular department gets assigned to the controller set for that department. No suggestions can be raised for department if controller is not set."
                }, {
                    label: "",
                    text: "So, it's mandatory to set controllers for all those departments for which suggestions are expected."
                }]
            },
            EVALUATOR: {
                TITLE: "Evaluator",
                IS_SINGLE_TEXT: true,
                TEXT: "Controller can assign suggestions for evaluation to members added in this list. At least one member should be added in list to complete the evaluation process."
            },
            IMPLEMENTER: {
                TITLE: "Implementer",
                IS_SINGLE_TEXT: true,
                TEXT: "Person added in this list can be selected by Evaluator for suggestion implementation. At least one member should be added in list to complete the implementation."
            },
            FC: {
                TITLE: "FC",
                IS_SINGLE_TEXT: true,
                TEXT: "Finance Controller is responsible for approving 'Budgetary Cost'  and verifying 'Actual Implementation Cost', 'Actual Savings'."
            },
            MS: {
                TITLE: "Mandatory Setup",
                IS_SINGLE_TEXT: false,
                // TEXT: "Mandatory setup helps to make user inputs mandatory or optional as per organisation need."
                TEXT: [{
                    label: "Mandatory Setup",
                    text: "Mandatory setup helps to make user inputs mandatory or optional as per organisation need."
                },
                {
                    label: "i.Activity -",
                    text: "Activity mandatory means it's mandate for evaluator to capture activity details during evaluation process."
                }, {
                    label: " ii. Change Document - ",
                    text: "Document Change mandatory means it's mandate for evaluator to capture document changes during evaluation process."
                }, {
                    label: "iii.Before & After Image - ",
                    text: "Before & After images mandatory means it's mandate for intiator to capture images while creating suggestion."
                }, {
                    label: "iv.Happiness Index - ",
                    text: "Happiness Index mandatory means user can't close happiness index screen without capturing input."
                }, {
                    label: "iv.Finance Verification Mandatory -",
                    text: "Mandating suggestion categories will make finance verfication process compulsary for selected categories only during implementation."
                }
                ]
            },
            EXECUTIVE: {
                TITLE: "Executive",
                IS_SINGLE_TEXT: true,
                TEXT: "Concerns could be very sensitive matters which employees want to raise with senior executives. Employees may address concerns to members added in this list."
            },
            BENEFIT: {
                TITLE: "Manage Benefit",
                IS_SINGLE_TEXT: true,
                TEXT: "The benefit which organization get out of implementing suggestion. You may add to or remove from default benefit list. Implementer selects benefit out of this list to showcase benefits in Kaizen form."
            },
            CATEGORY: {
                TITLE: "Manage Category",
                IS_SINGLE_TEXT: true,
                TEXT: "Employees will be able to post suggestions only for those categories which are added here. You may add to or remove from default category list."
            },
            ESCALATION: {
                TITLE: "Escalation",
                IS_SINGLE_TEXT: true,
                TEXT: "Suggestion rejected by controller gets escalated to Level First and gets propagated to next levels as per rejection. The purpose of escalation is to bring more transparency in the process but one can decide to switch off the escalations."
            },
            BROWNIE_POINTS: {
                TITLE: "Escalation",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Reimbursement Cycle",
                    text: "Employee level brownie point data gets extracted and shared through email on set frequency cycle."
                }, {
                    label: "Stage",
                    text: "The status or logical stage at which employee gets rewarded with brownie points."
                }, {
                    label: "Brownie Points",
                    text: "These many virtual points get credited to employee account"
                }]
            },
            ESCL_MAIL_CONFIG: {
                TITLE: "Pending Tasks Escalation",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Maximum Escalation Period(Days)",
                    text: "This is the maximum period(in days) in which each individual has to complete the pending actions for suggestions. Failing to do so, it gets escalated to next level."
                }, {
                    label: "Escalation Person",
                    text: "Escalation gets raised to person whose email configured here."
                }]
            },
            Cust_Eval_Point: {
                TITLE: "Evaluation Metrics Points Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Evaluation metrics is for setting up reference/benchmark data for evaluating best kaizen/suggestion."
                }, {
                    label: "Savings:",
                    text: "Set reference data to evaluate best suggestion based on savings."
                }, {
                    label: "Cost:",
                    text: "Reference/Benchmark data for cost saving suggestions."
                }, {
                    label: "Saving Cycle Option(s):",
                    text: "Cost saving cycles like Monthly, Annually, Once Off."
                }, {
                    label: "Amount:",
                    text: "Saving amount"
                }, {
                    label: "Points:",
                    text: "Number of points for above set combination/criteria."
                }, {
                    label: "Time:",
                    text: "Reference/Benchmark data for effort/time saving suggestions."
                }, {
                    label: "Effort Saving Unit(s): ",
                    text: " Effort saving in term of Man Hours or Number Of Persons."
                }, {
                    label: "Minutes:",
                    text: "Number of minutes saved per day."
                }, {
                    label: "Points:",
                    text: " Number of points for above set combination/criteria"
                }]
            },
            Doc_Change: {
                TITLE: "Change Document",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Document Name:",
                    text: "Document which needs to be updated as a part of suggestion implementation."
                }, {
                    label: "Document Owner:",
                    text: "Person responsible for change."
                }]
            },
            ESCL_SUGG_MAIL_CONFIG: {
                TITLE: "Minimum Suggestions Per Month",
                IS_SINGLE_TEXT: true,
                TEXT: "Each employee must submit minimum number of suggestions configured"
            },
            MODULE_MGMT: {
                TITLE: "Module Management",
                IS_SINGLE_TEXT: true,
                TEXT: "Grants module/menu access to each role. Default access is set to run the suggestion process but one may add or remove access as per requirement."
            },
            USER_ACC_MGMT: {
                TITLE: "User Access Management",
                IS_SINGLE_TEXT: true,
                TEXT: "Roles can be set/removed for each individual user."
            },
            SOCIALMedia: {
                TITLE: "Social Media",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to integrate all your corporate social media accounts so same can be accessed through myeNovation platform."
            },
            THOUGHT: {
                TITLE: "Thought Of The Day",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision for publish thought of the day for users."
            },
            NOTICEBOARD: {
                TITLE: "Notice",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to publish notice for employees."
            },
            TARGET: {
                TITLE: "Target Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Target values set for branch and department level gets displayed on respective graphs."
            },
            REDEEM_SETUP: {
                TITLE: "Gift & Rewards",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Vendor",
                    text: " Gifts supplier details"
                }, {
                    label: "Admin",
                    text: "Internal person responsible for Gift & Reward process"
                }, {
                    label: "Rewards",
                    text: "Capture gifts which can be redeemed against brownie points"
                }, {
                    label: "Communication",
                    text: "Map gift redemption communication with vendor and admin person. Communication will be sent to concern person once gift redeemed by user"
                }]
            },
            DWM_SETUP: {
                TITLE: "DWM Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Cell Leader",
                    text: " Cell Leader is responsible for OE level work management"
                }, {
                    label: "Staff Person",
                    text: "Staff Person is responsible for closure of abnormalities assigned to staff"
                }, {
                    label: "Plant Person",
                    text: "Plant Person is responsible for closure of abnormalities assigned to plant"
                }]
            },
            AUDITOR: {
                TITLE: "Auditor SetUp",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to Add/Modify/Remove auditor information."
            },
            TPM_SETUP: {
                TITLE: "TPM Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "OE is responsible for create new tag."
            },
            LINE_SETUP: {
                TITLE: "Line Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Line  for which audit to be conducted."
            },
            ZONE: {
                TITLE: "Zone Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Zone Number",
                    text: "Zone number for which audit to be conducted."
                }, {
                    label: "Zone Name",
                    text: "Zone name for which audit to be conducted."
                }, {
                    label: "Work Unit Name",
                    text: "Work unit name for which audit to be conducted."
                }]
            },
            ZONENUMBER: {
                TITLE: "Zone Number",
                IS_SINGLE_TEXT: true,
                TEXT: "Zone number for which audit to be conducted."
            },
            ZONENAME: {
                TITLE: "Zone Name",
                IS_SINGLE_TEXT: true,
                TEXT: "Zone name for which audit to be conducted."
            },
            WORKUNIT: {
                TITLE: "Work Unit Name",
                IS_SINGLE_TEXT: true,
                TEXT: "Work unit name for which audit to be conducted."
            },
            AUDITEESETUP: {
                TITLE: "Auditee Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to Add/Modify/Remove auditee information."
            },
            INCIDENTSETUP: {
                TITLE: "Incident Management Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "Machine",
                    text: "Machine details."
                }, {
                    label: "Machine",
                    text: "Machine parts details."
                }, {
                    label: "Incident Officer/Mananger",
                    text: "Incident manager and officers responsible for incident operations."
                }]
            },
            KUBERSETUP: {
                TITLE: "Kuber Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "i. CFT Team",
                    text: "Add or Remove CFT Team member details."
                }, {
                    label: "ii. TPM Team",
                    text: "Add or Remove TPM Team member details."
                }, {
                    label: "iii. Finance Head",
                    text: "Provision to add or remove Finance Head details."
                }, {
                    label: "iv. COO Setup",
                    text: "Provision to add or remove COO details."
                }, {
                    label: "v. Configuration",
                    text: "Provision to configure various parameters as per organisational need e.g. Employee benefit(%)"
                }, {
                    label: "vi. Vendor",
                    text: "Add or Remove Third Party Vendor details."
                }]
            },
            ONHOLDAUTHORITY: {
                TITLE: "On-hold Decision Authority",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to add/update On-hold authority person."
            },
            PASSWORDPOLICY: {
                TITLE: "Password Policy Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Password policy setup helps to customize passwords and the lifetime of the passwords."
            },
            SUGGTEMPSETUP: {
                TITLE: "Suggestion Template Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to set up kaizen template type 'Standard' or '4 Block Summary'."
            },
            SUGGJURYSETUP: {
                TITLE: "Suggestion Jury Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to add/update Jury members for the suggestion assessment process."
            },
            ASSESSMENTSETUP: {
                TITLE: "Suggestion Assessment Setup",
                IS_SINGLE_TEXT: false,
                TEXT: [{
                    label: "i. Nomination Date",
                    text: "Idea Owner self nominates his/her kaizen for Top 3 Kaizen - After the implementation of Kaizen."
                }, {
                    label: "ii. Jury Selection",
                    text: "Idea Owner self nominates his/her kaizen for Top 3 Kaizen - After the implementation of Kaizen"
                }, {
                    label: "iii. Jury Assessment",
                    text: "The jury marks each kaizen based on established criteria (Marking Sheet)"
                }, {
                    label: "iv. Production Head Review",
                    text: "Final Review with Production Head."
                }, {
                    label: "v. Top 3 Kaizen Selection",
                    text: "Top 3 Kaizens are selected and communicated to HR"
                }]
            },
            CONTRACTAULAGENCY: {
                TITLE: "Contractual Worker Agency Setup",
                IS_SINGLE_TEXT: true,
                TEXT: "Provision to Add/Remove contractual worker agency name."
            },
        }
    }
})());

app.service('appService', function ($http, $q, $timeout, Auth, $rootScope) {
    var response = {};
    $rootScope.empDetails = JSON.parse(localStorage.getItem('userDet'));
    $rootScope.flagpageloadindicator = false;
    this.httpPost = function (data, url) {
        $rootScope.flagpageloadindicator = true;
        if (data.updatedBy == undefined || data.updatedBy == null || data.updatedBy == 0) {
            data.updatedBy = $rootScope.empDetails.empId;
        }
        if (data.createdBy == undefined || data.createdBy == null || data.createdBy == 0) {
            data.createdBy = $rootScope.empDetails.empId;
        }
        var d = $q.defer();
        $http({
            method: 'POST',
            url: appDomain + url,
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Auth.getToken()
            },
            timeout: 60000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                //console.log("---------Main App HTTP Response------------");
                //console.log(response);
                $rootScope.flagpageloadindicator = false;
                d.resolve(response.data);
            })
            .catch(function (error) {
                //d.reject(error);
                $rootScope.flagpageloadindicator = false;
                d.resolve(error.data);
            });
        return d.promise;
    }

    this.httpGetLocal = function (url) {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: url, //http://localhost/enovation-portal/
            timeout: 60000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                ////console.log('data ===> ', data)
                d.resolve(response.data);
            })
            .catch(function (error) {
                //d.reject(error);
                d.resolve(error.data);
            });
        return d.promise;
    }

    this.httpGet = function (url) {
        var d = $q.defer();
        $rootScope.flagpageloadindicator = true;
        $http({
            method: 'GET',
            url: appDomain + url,
            headers: {
                'Authorization': Auth.getToken()
            },
            timeout: 60000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                ////console.log('data ===> ', data)
                $rootScope.flagpageloadindicator = false;
                d.resolve(response.data);
            })
            .catch(function (error) {
                //d.reject(error);
                $rootScope.flagpageloadindicator = false;
                d.resolve(error.data);
            });

        return d.promise;
    }

    this.uploadFileToUrl = function (formData, uploadUrl) {
        var d = $q.defer();
        $rootScope.flagpageloadindicator = true;
        $http.post(appDomain + uploadUrl, formData, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined,
                'Authorization': Auth.getToken()
            }
        })
            .then(function (response) {
                //console.log(response);
                $rootScope.flagpageloadindicator = false;
                d.resolve(response);
            })
            .catch(function (error) {
                $rootScope.flagpageloadindicator = false;
                d.resolve(error.data);
            });

        return d.promise;
    }
});


//Datepicker
app.directive('customdatepicker', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            var today = new Date();
            $(el)
                .datepicker({
                    dateFormat: 'dd-MM-yyyy',
                    endDate: "today",
                    autoclose: true,
                    todayHighlight: true,
                    onSelect: function (dateText) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(el.datepicker("getDate"));
                        });
                    }
                });
        }
    };
});

//Datepicker
app.directive('targetdate', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            var today = new Date();
            $(el)
                .datepicker({
                    dateFormat: 'dd-MM-yyyy',
                    startDate: "today",
                    autoclose: true,
                    onSelect: function (dateText) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
        }
    };
});

app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function () {
                scope.$apply(function () {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.directive("fileinput", [function () {
    return {
        scope: {
            fileinput: "=",
            filepreview: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                scope.fileinput = changeEvent.target.files[0];
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.filepreview = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(scope.fileinput);
            });
        }
    }
}]);
app.filter('ifEmpty', function () {
    return function (input, defaultValue) {
        if (angular.isUndefined(input) || input === null || input === '' || input === "null") {
            return defaultValue;
        }
        return input;
    }
});

app.directive('checkGiftImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', '../dist/icons/gift.png'); // set default image
            });
        }
    }
});
app.directive('checkMachineImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', '../dist/icons/Group 300.png'); // set default image
            });
        }
    }
});