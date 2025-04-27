'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('mainApp', [
    'ui.bootstrap.tooltip',
    'ngRoute',
    'rzModule',
    'ngScrollbars',
    'ngMessages',
    'daterangepicker',
    'ui.select',
    'angularUtils.directives.dirPagination',
    'chart.js',
    'mainApp.header',
    'mainApp.profile',
    'mainApp.updateprofile',
    'mainApp.homepage',
    'pascalprecht.translate',
    'signature',
    'ngSanitize',
    'ui.bootstrap',
])

    .config(['$locationProvider', '$routeProvider', '$translateProvider', '$translatePartialLoaderProvider', function ($locationProvider, $routeProvider, $translateProvider, $translatePartialLoaderProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({
            redirectTo: '/homepage'
        });
        // $translateProvider
        //     .useStaticFilesLoader({
        //         prefix: 'translations/suggestion-mr',
        //         suffix: '.json'
        //     })
        //     // $translateProvider
        //     //   .useStaticFilesLoader({
        //     //     prefix: 'translations/concernsma',
        //     //     suffix: '.json'
        //     //   })
        //     .preferredLanguage('mr')
        // $translatePartialLoaderProvider.addPart('home');
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: './i18n/{part}/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
    }])
    .filter('utcToLocal', Filter);

function Filter($filter) {
    return function (utcDateString, format) {
        if (!utcDateString) {
            return;
        }
        // append 'Z' to the date string to indicate UTC time if the timezone isn't already specified
        if (utcDateString.indexOf('Z') === -1 && utcDateString.indexOf('+') === -1) {
            utcDateString += 'Z';
        }
        return $filter('date')(utcDateString, format);
    };
}
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
                // "linkName": "Suggestion Approach",
                "linkName": "Home Setup",
                "link": "/suggestion-approach",
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
            }, {
                "level": 16,
                "linkName": "Gifts & Rewards",
                "link": "/redeemSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 17,
                "linkName": "Social Media & TOD",
                "link": "/socialMedia",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
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
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 22,
                "linkName": "Auditor",
                "link": "/Auditor",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 23,
                "linkName": "Kuber Setup",
                "link": "/kuberSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }, {
                "level": 24,
                "linkName": "Suggestion Onhold Setup",
                "link": "/onholdSetup",
                "isEnable": false,
                "isSetUpCompleted": false,
                "isActive": "Y"
            }

            ];
            return data;
        }
    }
});
app.factory('SetLastActiveDateFactory', function ($rootScope, $http) {
    return {
        lastActiveDate: function () {
            var data = {
                setActiveDate: 1,
                empId: $rootScope.empDetails.empId
            };
            $http({
                method: 'POST',
                data: data,
                url: appDomain + "updateProfileDetails",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': $rootScope.empDetails.authToken
                },
                timeout: 60000 // request timeout is set to 60 seconds
            })
                .then(function (response) {

                })
                .catch(function (error) {
                    error.data;
                });
        },
        getMandetoryField: function () {
            $http({
                method: 'GET',
                url: appDomain + 'getProductOrgConfigData/' + $rootScope.empDetails.branch.branchId,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': $rootScope.empDetails.authToken
                },
                timeout: 60000 // request timeout is set to 60 seconds
            })
                .then(function (response) {
                    //console.log(response);
                    var res = response.data;
                    if (res.result) {
                        var rec = res.productorglist[0];
                        var empDetails = JSON.parse(localStorage.getItem('userDet'));
                        empDetails.productOrgConfigDet = rec;
                        empDetails = JSON.stringify(empDetails);
                        localStorage.setItem('userDet', empDetails);
                        $rootScope.empDetails = JSON.parse(localStorage.getItem('userDet'));
                    } else {

                    }
                })
                .catch(function (error) {
                    error.data;
                });
        },
        getEmpDetails: function () {
            $http({
                method: 'GET',
                url: appDomain + 'getEmployeeByEmpId/' + $rootScope.empDetails.empId,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': $rootScope.empDetails.authToken
                },
                timeout: 60000 // request timeout is set to 60 seconds
            })
                .then(function (response) {
                    //console.log(response);
                    if (response.data.result) {
                        var res = response.data;
                        //console.log(res);
                        if (res.empDetails.pmsUserRoles != null && res.empDetails.pmsUserRoles.length > 0) {
                            var profile = JSON.parse(localStorage.getItem('userDet'));
                            profile.pmsUserRoles = res.empDetails.pmsUserRoles;
                            $rootScope.empDetails = profile;
                            localStorage.setItem('userDet', JSON.stringify(profile));
                        }
                        if (res.empDetails.moodIndicator != null && res.empDetails.moodIndicator.length > 0) {
                            var profile = JSON.parse(localStorage.getItem('userDet'));
                            profile.moodIndicator = res.empDetails.moodIndicator;
                            $rootScope.empDetails = profile;
                            localStorage.setItem('userDet', JSON.stringify(profile));
                        } else {
                            $('#emoji')
                                .modal({
                                    backdrop: 'static',
                                    keyboard: false
                                })
                        }
                        //localStorage.setItem("userDet", JSON.stringify(res.empDetails));
                    } else {

                    }
                })
                .catch(function (error) {
                    error.data;
                });
        }
    }
});
app.run(['$rootScope', '$location', 'Auth', 'appService', '$filter', '$window', 'SetLastActiveDateFactory', 'snackbar', '$sce', function ($rootScope, $location, Auth, appService, $filter, $window, SetLastActiveDateFactory, snackbar, $sce) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (localStorage.getItem('userDet') == null && localStorage.getItem('userDet') == undefined) {
            window.location.href = 'index.html';
        }
        //console.log($location.path());
        $rootScope.locationpath = $location.path();

        //console.log("on main app config");
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
            $rootScope.setListStyle = function (type) {
                // alert(type);
                if (type == 'more') {
                    return {
                        'height': (newValue.h - 252) + 'px',
                    };
                } else {
                    return {
                        'height': (newValue.h - 207) + 'px',
                    };
                }
            };
            $rootScope.setIncidentListStyle = function (type) {
                //alert(type);
                if (type == 'Pending') {
                    return {
                        'height': (newValue.h - 170) + 'px'
                    };
                } else {
                    return {
                        'height': (newValue.h - 170) + 'px'
                    };
                }
            };
            $rootScope.setDashboardStyle = function () {
                return {
                    'height': (newValue.h - 190) + 'px'
                };
            }
            $rootScope.setSettingHeight = function () {
                return {
                    'height': (newValue.h - 270) + 'px'
                };
            }
            $rootScope.setSuggDetailStyle = function () {
                return {
                    'height': (newValue.h - 127) + 'px'
                };
            };
            $rootScope.surveyListStyle = function (type) {
                if (type == 'internal') {
                    return {
                        'height': (newValue.h - 160) + 'px'
                    };
                } else {
                    return {
                        'height': (newValue.h - 280) + 'px'
                    };
                }
            };
            $rootScope.setDWMList = function () {
                return {
                    'height': (newValue.h - 200) + 'px'
                };
            };
            $rootScope.setDWMReport = function () {
                return {
                    'height': (newValue.h - 200) + 'px'
                };
            };
            $rootScope.setDWMDetailStyle = function () {
                return {
                    'height': (newValue.h - 135) + 'px'
                };
            };
            $rootScope.setAuditListHeight = function () {
                return {
                    'height': (newValue.h - 180) + 'px'
                };
            }
            $rootScope.setPendingAuditListHeight = function () {
                return {
                    'height': (newValue.h - 195) + 'px'
                };
            }
            $rootScope.setPlublishAuditListHeight = function () {
                return {
                    'height': (newValue.h - 147) + 'px'
                };
            }
            $rootScope.setSuperAdminDetHeight = function () {
                return {
                    'height': (newValue.h - 195) + 'px'
                };
            }
            $rootScope.auditorQuestionDetHeight = function () {
                return {
                    'height': (newValue.h - 275) + 'px',
                };
            }
            $rootScope.winnerListHeight = function () {
                return {
                    'height': (newValue.h - 270) + 'px',
                };
            }
            $rootScope.setAuditDetailsHeight = function () {
                return {
                    'height': (newValue.h - 125) + 'px',
                };
            }
            $rootScope.setKuberDetailStyle = function () {
                return {
                    'height': (newValue.h - 300) + 'px'
                };
            };
            $rootScope.setincidentDetailStyle = function () {
                return {
                    'height': (newValue.h - 130) + 'px'
                };
            };
            $rootScope.setJuryPageHeight = function () {
                return {
                    'height': (newValue.h - 134) + 'px'
                };
            }
            $rootScope.setJuryTableHeight = function () {
                return {
                    'height': (newValue.h - 282) + 'px'
                };
            }

            $rootScope.setSustainanceMonitorListHight = function () {
                return {
                    'height': (newValue.h - 342) + 'px',
                };
            }
            $rootScope.setLateralEntryList = function (flag) {
                if (flag) {
                    return {
                        'height': (newValue.h - 425) + 'px'
                    };
                } else {
                    return {
                        'height': (newValue.h - 280) + 'px'
                    };
                }
            }
            $rootScope.setLateralDetailHeight = function () {
                return {
                    'height': (newValue.h - 185) + 'px'
                };
            }
            //console.log("on resize on window=" + $rootScope.windowHeight);
        }, true);

        $rootScope.appDomain = appDomain;

        try {
            $rootScope.menuData = JSON.parse(window.atob(localStorage.getItem('menuData')));
            // console.log($rootScope.menuData);
        } catch (err) {
            localStorage.removeItem("menuData");
            localStorage.removeItem("userDet");
            localStorage.removeItem("suggStatus");
            localStorage.removeItem("subscriptionPopDet");
            sessionStorage.removeItem('sideMenuData');
            sessionStorage.removeItem('sideMenuStatus');
            sessionStorage.removeItem('selectedSideMenu');
            sessionStorage.removeItem('subscriptionPopShown');
            localStorage.removeItem('selectedSideMenu1');
            window.location.href = 'login.html';
        }
        $rootScope.empDetails = JSON.parse(localStorage.getItem('userDet'));
        $rootScope.suggStatus = JSON.parse(localStorage.getItem('suggStatus'));

        //console.log("-----------Master Status-----------");
        //console.log($rootScope.suggStatus);
        Auth.setToken($rootScope.empDetails.authToken);

        $rootScope.empDetails.productId = 2;
        //console.log($rootScope.empDetails);
        $rootScope.myPoints = $rootScope.empDetails.points;
        //Check Preffered Lang


        /*if (!angular.isUndefined(lang) && lang != null) {
          $rootScope.changeLanguage(lang);
        } else {
          $rootScope.changeLanguage(1);
          $rootScope.empDetails.langName = 1;
          localStorage.setItem('userDet', JSON.stringify($rootScope.empDetails));
        } */
        $rootScope.sideMenuData = Auth.getSideMenuData();
        SetLastActiveDateFactory.lastActiveDate();
        SetLastActiveDateFactory.getEmpDetails();
        SetLastActiveDateFactory.getMandetoryField();

        $rootScope.toggleDeptDiv = function (event) {
            var $trigger = $(".deptwrapper");
            if ($trigger !== event.target && !$trigger.has(event.target)
                .length) {
                $(".list")
                    .slideUp("fast");
            }
        }

        $rootScope.checkMenuAccess = function (menuName) {
            var flag = false;
            if ($rootScope.menuData == null || $rootScope.menuData == undefined) {
                return flag;
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
            if ($rootScope.menuData == null || $rootScope.menuData == undefined) {
                return flag;
            }
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
        $rootScope.setSelectedMenu = function (data) {
            if ($rootScope.checkMenuAccess(data.menuName)) {
                //console.log(data);
                localStorage.setItem("selectedSideMenu1", JSON.stringify(data));
                if (data.menuName == 'Settings') {
                    window.location.href = "setup-config/#!" + data.link;
                } else {
                    window.location.href = "#!" + data.link;
                }
            } else {
                window.location.href = "#!/homepage";
            }
        }

        /*if(localStorage.getItem("selectedSideMenu1") != null) {
          $rootScope.selectedMenu1 = JSON.parse(localStorage.getItem("selectedSideMenu1"));
          if($rootScope.selectedMenu1.link == $rootScope.locationpath){
            $rootScope.setSelectedMenu($rootScope.selectedMenu1);
          }else{
            window.location.href = "#!/homepage";
          }
        } else {
          window.location.href = "#!/homepage";
        }*/

        /*if(localStorage.getItem("selectedSideMenu1") != null && $rootScope.locationpath!='/homepage') {

          $rootScope.selectedMenu1 = JSON.parse(localStorage.getItem("selectedSideMenu1"));
          if($rootScope.checkMenuAccess($rootScope.selectedMenu1.menuName)) {
            window.location.href = "#!" + $rootScope.locationpath;
          }else{
            localStorage.removeItem('selectedSideMenu1');
            window.location.href = "login.html";
          }
        }*/

        //Thought of the Day
        $rootScope.showExtra = true;
        $rootScope.getThought = function () {
            if ($rootScope.thoughtList != '' && $rootScope.thoughtList != undefined) {
                //$rootScope.showExtra = false;
            } else {
                appService.httpGet("getThought/" + $rootScope.empDetails.branch.branchId)
                    .then(function (response) {
                        //$scope.flagNoticesThoughtLoading = false;
                        //console.log("--------------------Thought List---------------------");
                        //console.log(response);
                        if (response.result) {
                            //$rootScope.showExtra = false;
                            $rootScope.thoughtList = response.thoughtList[0].thought;
                            //console.log($rootScope.thoughtList);
                            //$scope.flagNoticesThoughtDataNotAvail = false;
                        } else {
                            $rootScope.thoughtList = '';
                            //$rootScope.showExtra = true;
                            //$scope.flagNoticesThoughtDataNotAvail = true;
                        }
                    });
            }
        }
        $rootScope.getThought();

        $rootScope.orderByCustom = function (friend) {
            //console.log(friend)
            return friend.dateTest.split('/')[2];
        };

        $rootScope.getStatusGraphreport = function (resWiseCount) {
            var data = {
                Series: [],
                Series1: [],
                Dataset: [],
                Label: []
            }
            //console.log(resWiseCount);

            var resGroups = resWiseCount.reduce(function (obj, item) {
                var date = item.month + " " + item.year;
                obj[date] = obj[date] || [];
                obj[date].push(item);
                return obj;
            }, {});

            var myArray = Object.keys(resGroups)
                .map(function (key) {
                    return {
                        month: resGroups[key]
                    };
                });
            //console.log(myArray);

            for (var i = 0; i < myArray.length; i++) {
                //console.log(myArray[i].month);
                //console.log("Month name ==> ", myArray[i].month[0].month);
                var sum = 0;
                for (var j = 0; j < myArray[i].month.length; j++) {
                    sum += myArray[i].month[j].noOfSugesstion;
                }
                //console.log("No of suggestion per month total ==> ", sum);

                resWiseCount.push({
                    noOfSugesstion: sum,
                    month: myArray[i].month[0].month,
                    year: myArray[i].month[0].year,
                    label: "Total Suggestion"
                });
            }
            //console.log(resWiseCount);
            //console.log(resGroups);

            var tmpLabel = Object.keys(resGroups)
                .map(function (key) {
                    return {
                        date: key,
                        data: resGroups[key]
                    };
                });
            //console.log(tmpLabel);

            for (var i = 0; i < resWiseCount.length; i++) {
                var date = resWiseCount[i].month + " " + resWiseCount[i].year;
                if (data.Label.indexOf(date) == -1)
                    data.Label.push(date);
            }
            //console.log(data.Label);


            for (var i = 0; i < resWiseCount.length; i++) {
                var label1;
                var roleId = resWiseCount[i].roleId;
                var status = resWiseCount[i].status;

                label1 = 'Total Suggestion';
                if (data.Series.indexOf(label1) == -1)
                    data.Series.push(label1);

                if (status == $rootScope.suggStatus.AssignedForEdit.status) {
                    label1 = 'Initiator Modification Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.SuggestionAssigned.status || status == $rootScope.suggStatus.EditedByCreator.status || status == $rootScope.suggStatus.RejectionEscalation.status || status == $rootScope.suggStatus.PassToPeerController.status) {
                    label1 = 'Scrutinization Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.EvaluationAssigned.status || status == $rootScope.suggStatus.EvaluationRequestAccepted.status || status == $rootScope.suggStatus.ApprovedByFC.status || status == $rootScope.suggStatus.DeclinedByFC.status || status == $rootScope.suggStatus.PassToPeerEvaluator.status) {
                    label1 = 'Evaluation Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.PendingDocumentUpdate.status) {
                    label1 = 'Document Change Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.AssignedForFCApproval.status || status == $rootScope.suggStatus.AssignedForFCVerification.status) {
                    label1 = 'Finance Approval Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.ImplementationAssigned.status || status == $rootScope.suggStatus.ImplementationRequestAccepted.status || status == $rootScope.suggStatus.PassToPeerImplementer.status ||
                    status == $rootScope.suggStatus.SuggestionResume.status) {
                    label1 = 'Implementation Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.Implemented.status || status == $rootScope.suggStatus.AssignedForSustainanceCheck.status || status == $rootScope.suggStatus.SustainanceVerificationInProgress.status || status == $rootScope.suggStatus.Sustained.status || status == $rootScope.suggStatus.SustainanceFailed.status) {
                    label1 = 'Implemented';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.SuggestionDeclinedByHead.status || status == $rootScope.suggStatus.ImplementationNotRecommended.status || status == $rootScope.suggStatus.EvaluationRequestRejected.status || status == $rootScope.suggStatus.ImplementationRequestRejected.status ||
                    status == $rootScope.suggStatus.RejectedByOnHoldPerson.status) {
                    label1 = 'Rejected';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.ImplementationOnHold.status) {
                    label1 = 'Implementation On Hold';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.Closed.status) {
                    label1 = 'Closed';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.AssignedToOnHoldPerson.status || status == $rootScope.suggStatus.ResumeByOnHoldPerson.status) {
                    label1 = 'Onhold Person Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                }
            }
            //console.log(data.Series);
            var tmpData = [];
            for (var i = 0; i < data.Series.length; i++) {
                var tmp = new Array(data.Label.length)
                    .fill(0);
                tmpData.push(tmp);
            }
            //console.log(tmpData);
            data.Dataset = angular.copy(tmpData);
            //console.log(data.Dataset);
            for (var i = 0; i < tmpLabel.length; i++) {
                var index = data.Label.indexOf(tmpLabel[i].date);
                for (var j = 0; j < tmpLabel[i].data.length; j++) {
                    var status = tmpLabel[i].data[j].status;
                    var tmpindex;

                    tmpindex = data.Series.indexOf('Total Suggestion');
                    data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;


                    if (status == $rootScope.suggStatus.SuggestionAssigned.status || status == $rootScope.suggStatus.EditedByCreator.status || status == $rootScope.suggStatus.RejectionEscalation.status || status == $rootScope.suggStatus.PassToPeerController.status) {
                        tmpindex = data.Series.indexOf('Scrutinization Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.EvaluationAssigned.status || status == $rootScope.suggStatus.EvaluationRequestAccepted.status || status == $rootScope.suggStatus.ApprovedByFC.status || status == $rootScope.suggStatus.DeclinedByFC.status || status == $rootScope.suggStatus.PassToPeerEvaluator.status) {
                        tmpindex = data.Series.indexOf('Evaluation Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.ImplementationAssigned.status || status == $rootScope.suggStatus.ImplementationRequestAccepted.status || status == $rootScope.suggStatus.PassToPeerImplementer.status ||
                        status == $rootScope.suggStatus.SuggestionResume.status) {
                        tmpindex = data.Series.indexOf('Implementation Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedForFCApproval.status || status == $rootScope.suggStatus.AssignedForFCVerification.status) {
                        tmpindex = data.Series.indexOf('Finance Approval Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.Implemented.status || status == $rootScope.suggStatus.AssignedForSustainanceCheck.status || status == $rootScope.suggStatus.SustainanceVerificationInProgress.status || status == $rootScope.suggStatus.Sustained.status || status == $rootScope.suggStatus.SustainanceFailed.status) {
                        tmpindex = data.Series.indexOf('Implemented');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.SuggestionDeclinedByHead.status || status == $rootScope.suggStatus.ImplementationNotRecommended.status || status == $rootScope.suggStatus.EvaluationRequestRejected.status || status == $rootScope.suggStatus.ImplementationRequestRejected.status ||
                        status == $rootScope.suggStatus.RejectedByOnHoldPerson.status) {
                        tmpindex = data.Series.indexOf('Rejected');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.ImplementationOnHold.status) {
                        tmpindex = data.Series.indexOf('Implementation On Hold');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.PendingDocumentUpdate.status) {
                        tmpindex = data.Series.indexOf('Document Change Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedForEdit.status) {
                        tmpindex = data.Series.indexOf('Initiator Modification Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.Closed.status) {
                        tmpindex = data.Series.indexOf('Closed');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedToOnHoldPerson.status || status == $rootScope.suggStatus.ResumeByOnHoldPerson.status) {
                        tmpindex = data.Series.indexOf('Onhold Person Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    }
                    // var tmpindex = data.Series.indexOf(tmpLabel[i].data[j].label);
                    // data.Dataset[tmpindex][index] = tmpLabel[i].data[j].noOfSugesstion;
                }
            }
            //console.log(data.Dataset);
            for (var i = 0; i < data.Series.length; i++) {
                var totalCount = 0;
                for (var k = 0; k < data.Dataset[i].length; k++) {
                    //console.log(data.Series[i] + " " + data.Dataset[i][k]);
                    totalCount += data.Dataset[i][k];
                }
                data.Series[i] = data.Series[i]; //+ ":" + totalCount
            }
            //console.log(data);
            return data;
        }
        $rootScope.getGraphreport = function (resWiseCount) {
            var data = {
                Series: [],
                Dataset: [],
                Label: []
            }
            var resGroups = resWiseCount.reduce(function (obj, item) {
                var date = item.month + " " + item.year;
                obj[date] = obj[date] || [];
                obj[date].push(item);
                return obj;
            }, {});
            //console.log(resGroups);
            var tmpLabel = Object.keys(resGroups)
                .map(function (key) {
                    return {
                        date: key,
                        data: resGroups[key]
                    };
                });
            //console.log(tmpLabel);
            for (var i = 0; i < resWiseCount.length; i++) {
                var date = resWiseCount[i].month + " " + resWiseCount[i].year;
                if (data.Label.indexOf(date) == -1)
                    data.Label.push(date);
            }
            //console.log(data.Label);
            for (var i = 0; i < resWiseCount.length; i++) {
                var label = resWiseCount[i].label;
                if (data.Series.indexOf(label) == -1)
                    data.Series.push(label);
            }
            //console.log(data.Series);
            var tmpData = [];
            for (var i = 0; i < data.Series.length; i++) {
                var tmp = new Array(data.Label.length)
                    .fill(0);
                tmpData.push(tmp);
            }
            //console.log(tmpData);
            data.Dataset = angular.copy(tmpData);
            //console.log(data.Dataset);
            for (var i = 0; i < tmpLabel.length; i++) {
                var index = data.Label.indexOf(tmpLabel[i].date);
                for (var j = 0; j < tmpLabel[i].data.length; j++) {
                    var tmpindex = data.Series.indexOf(tmpLabel[i].data[j].label);
                    data.Dataset[tmpindex][index] = tmpLabel[i].data[j].noOfSugesstion;
                }
            }
            //console.log(data.Dataset);
            for (var i = 0; i < data.Series.length; i++) {
                var totalCount = 0;
                for (var k = 0; k < data.Dataset[i].length; k++) {
                    //console.log(data.Series[i] + " " + data.Dataset[i][k]);
                    totalCount += data.Dataset[i][k];
                }
                data.Series[i] = data.Series[i]; //+ ":" + totalCount
            }
            //console.log(data);
            return data;
        }
        $rootScope.getGraphreport1 = function (resWiseCount) {
            var data = {
                Series: [],
                Dataset: [],
                Label: []
            }
            var resGroups = resWiseCount.reduce(function (obj, item) {
                var date = item.label;
                obj[date] = obj[date] || [];
                obj[date].push(item);
                return obj;
            }, {});
            //console.log(resGroups);
            var tmpLabel = Object.keys(resGroups)
                .map(function (key) {
                    return {
                        date: key,
                        data: resGroups[key]
                    };
                });
            //console.log(tmpLabel);
            for (var i = 0; i < resWiseCount.length; i++) {
                var date = resWiseCount[i].label;
                if (data.Label.indexOf(date) == -1)
                    data.Label.push(date);
            }
            //console.log(data.Label);
            for (var i = 0; i < resWiseCount.length; i++) {
                // var label = resWiseCount[i].statusLabel;
                // if (data.Series.indexOf(label) == -1)
                //   data.Series.push(label);
                var label1;
                var status = resWiseCount[i].statusLabel;

                if (status == $rootScope.suggStatus.AssignedForEdit.label) {
                    label1 = 'Initiator Modification Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.SuggestionAssigned.label || status == $rootScope.suggStatus.EditedByCreator.label || status == $rootScope.suggStatus.RejectionEscalation.label || status == $rootScope.suggStatus.PassToPeerController.label) {
                    label1 = 'Scrutinization Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.EvaluationAssigned.label || status == $rootScope.suggStatus.EvaluationRequestAccepted.label || status == $rootScope.suggStatus.ApprovedByFC.label || status == $rootScope.suggStatus.DeclinedByFC.label || status == $rootScope.suggStatus.PassToPeerEvaluator.label) {
                    label1 = 'Evaluation Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.PendingDocumentUpdate.label) {
                    label1 = 'Document Change Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.AssignedForFCApproval.label || status == $rootScope.suggStatus.AssignedForFCVerification.label) {
                    label1 = 'Finance Approval Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.ImplementationAssigned.label || status == $rootScope.suggStatus.ImplementationRequestAccepted.label || status == $rootScope.suggStatus.PassToPeerImplementer.label ||
                    status == $rootScope.suggStatus.SuggestionResume.label) {
                    label1 = 'Implementation Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.Implemented.label || status == $rootScope.suggStatus.AssignedForSustainanceCheck.label || status == $rootScope.suggStatus.SustainanceVerificationInProgress.label || status == $rootScope.suggStatus.Sustained.label || status == $rootScope.suggStatus.SustainanceFailed.label) {
                    label1 = 'Implemented';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.SuggestionDeclinedByHead.label || status == $rootScope.suggStatus.ImplementationNotRecommended.label || status == $rootScope.suggStatus.EvaluationRequestRejected.label || status == $rootScope.suggStatus.ImplementationRequestRejected.label ||
                    status == $rootScope.suggStatus.RejectedByOnHoldPerson.label) {
                    label1 = 'Rejected';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.ImplementationOnHold.label) {
                    label1 = 'Implementation On Hold';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.Closed.label) {
                    label1 = 'Closed';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                } else if (status == $rootScope.suggStatus.AssignedToOnHoldPerson.label || status == $rootScope.suggStatus.ResumeByOnHoldPerson.label) {
                    label1 = 'Onhold Person Pending';
                    if (data.Series.indexOf(label1) == -1)
                        data.Series.push(label1);
                }
            }
            //console.log(data.Series);
            var tmpData = [];
            for (var i = 0; i < data.Series.length; i++) {
                var tmp = new Array(data.Label.length)
                    .fill(0);
                tmpData.push(tmp);
            }
            //console.log(tmpData);
            data.Dataset = angular.copy(tmpData);
            //console.log(data.Dataset);
            for (var i = 0; i < tmpLabel.length; i++) {
                var index = data.Label.indexOf(tmpLabel[i].date);
                for (var j = 0; j < tmpLabel[i].data.length; j++) {
                    var status = tmpLabel[i].data[j].statusLabel;
                    var tmpindex;

                    if (status == $rootScope.suggStatus.SuggestionAssigned.label || status == $rootScope.suggStatus.EditedByCreator.label || status == $rootScope.suggStatus.RejectionEscalation.label || status == $rootScope.suggStatus.PassToPeerController.label) {
                        tmpindex = data.Series.indexOf('Scrutinization Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.EvaluationAssigned.label || status == $rootScope.suggStatus.EvaluationRequestAccepted.label || status == $rootScope.suggStatus.ApprovedByFC.label || status == $rootScope.suggStatus.DeclinedByFC.label || status == $rootScope.suggStatus.PassToPeerEvaluator.label) {
                        tmpindex = data.Series.indexOf('Evaluation Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.ImplementationAssigned.label || status == $rootScope.suggStatus.ImplementationRequestAccepted.label || status == $rootScope.suggStatus.PassToPeerImplementer.label ||
                        status == $rootScope.suggStatus.SuggestionResume.label) {
                        tmpindex = data.Series.indexOf('Implementation Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedForFCApproval.label || status == $rootScope.suggStatus.AssignedForFCVerification.label) {
                        tmpindex = data.Series.indexOf('Finance Approval Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.Implemented.label || status == $rootScope.suggStatus.AssignedForSustainanceCheck.label || status == $rootScope.suggStatus.SustainanceVerificationInProgress.label || status == $rootScope.suggStatus.Sustained.label || status == $rootScope.suggStatus.SustainanceFailed.label) {
                        tmpindex = data.Series.indexOf('Implemented');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.SuggestionDeclinedByHead.label || status == $rootScope.suggStatus.ImplementationNotRecommended.label || status == $rootScope.suggStatus.EvaluationRequestRejected.label || status == $rootScope.suggStatus.ImplementationRequestRejected.label ||
                        status == $rootScope.suggStatus.RejectedByOnHoldPerson.label) {
                        tmpindex = data.Series.indexOf('Rejected');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.ImplementationOnHold.label) {
                        tmpindex = data.Series.indexOf('Implementation On Hold');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.PendingDocumentUpdate.label) {
                        tmpindex = data.Series.indexOf('Document Change Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedForEdit.label) {
                        tmpindex = data.Series.indexOf('Initiator Modification Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.Closed.label) {
                        tmpindex = data.Series.indexOf('Closed');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    } else if (status == $rootScope.suggStatus.AssignedToOnHoldPerson.label || status == $rootScope.suggStatus.ResumeByOnHoldPerson.label) {
                        tmpindex = data.Series.indexOf('Onhold Person Pending');
                        data.Dataset[tmpindex][index] = data.Dataset[tmpindex][index] + tmpLabel[i].data[j].noOfSugesstion;
                    }
                    // var tmpindex = data.Series.indexOf(tmpLabel[i].data[j].label);
                    // data.Dataset[tmpindex][index] = tmpLabel[i].data[j].noOfSugesstion;
                }
            }
            // for (var i = 0; i < tmpLabel.length; i++) {
            //   var index = data.Label.indexOf(tmpLabel[i].date);
            //   for (var j = 0; j < tmpLabel[i].data.length; j++) {
            //     var tmpindex = data.Series.indexOf(tmpLabel[i].data[j].statusLabel);
            //     data.Dataset[tmpindex][index] = tmpLabel[i].data[j].noOfSugesstion;
            //   }
            // }
            //console.log(data.Dataset);
            for (var i = 0; i < data.Series.length; i++) {
                var totalCount = 0;
                for (var k = 0; k < data.Dataset[i].length; k++) {
                    //console.log(data.Series[i] + " " + data.Dataset[i][k]);
                    totalCount += data.Dataset[i][k];
                }
                data.Series[i] = data.Series[i]; //+ ":" + totalCount
            }
            //console.log(data);
            return data;
        }
        /*Created By AKSHAY
         *05-06-2019
         **/
        $rootScope.numDifferentiation = function (val) {
            if (val >= 10000000) val = (val / 10000000)
                .toFixed(2) + ' Cr';
            else if (val >= 100000) val = (val / 100000)
                .toFixed(2) + ' L';
            else if (val >= 1000) val = (val / 1000)
                .toFixed(2) + ' K';
            return val;
        }
        $rootScope.isStatusExists = function (array, stsId) {

            var found = array.find(function (element) {
                // //console.log(element + '==' + stsId);
                return element == stsId ? true : false;
            });
            return found;
        }

        /*-----------date---------------*/
        $rootScope.getNoOfDaysUsingDate = function (inputDate) {
            var date1 = new Date();
            var a = inputDate.split(" ");
            var d = a[0].split("-");
            var t = a[1].split(":");
            var date2 = new Date(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]);
            var diff = date1 - date2; //(new Date()) - (new Date($filter('date')((new Date(inputDate)).setDate((new Date(inputDate)).getDate()), "yyyy/MM/dd"))); // + parseInt(i * 15)
            var daysDiff = Math.floor(diff / (24 * 60 * 60 * 1000));
            return Math.abs(daysDiff);
        }

        $rootScope.isPTTRole = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.pmsUserRoles != null && $rootScope.empDetails.pmsUserRoles.length > 0) {
                    if ($filter('filter')($rootScope.empDetails.pmsUserRoles, {
                        userType: {
                            caption: 'PTT'
                        }
                    }, true).length > 0) {
                        flag = true;
                    }
                }
            }
            return flag;
        }
        $rootScope.isSuperVisorOROeLead = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.pmsUserRoles != null && $rootScope.empDetails.pmsUserRoles.length > 0) {
                    for (var i = 0; i < $rootScope.empDetails.pmsUserRoles.length; i++) {
                        if ($rootScope.empDetails.pmsUserRoles[i].userType.caption == 'SUPERVISOR' || $rootScope.empDetails.pmsUserRoles[i].userType.caption == 'OE_LEAD') {
                            flag = true;
                            break;
                        }
                    }
                }
            }
            return flag;
        }
        $rootScope.isOE = function () {
            var flag = true;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.pmsUserRoles == null || $rootScope.empDetails.pmsUserRoles.length == 0) {
                    flag = false;
                }
            }
            return flag;
        }
        $rootScope.isSuperAdmin = function () {
            var flag = false;
            if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
                if ($rootScope.empDetails.roles != null && $rootScope.empDetails.roles.length > 0) {
                    if ($filter('filter')($rootScope.empDetails.roles, { name: 'SUPERADMIN' }, true).length > 0) {
                        flag = true;
                    }
                }
            }
            return flag;
        }
        /**********************************/
        $rootScope.changeLanguage = function (x) {
            //console.log("value of x" + x)
            if (x == 3) {
                appService.httpGetLocal("translations/suggestion-hin.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate);

                    });
            } else if (x == 2) {
                appService.httpGetLocal("translations/suggestion-mr.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate);

                    });
            } else if (x == 1) {
                appService.httpGetLocal("translations/suggestion-en.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate.SuggId);

                    });
            } else if (x == 3) {
                appService.httpGetLocal("translations/suggestion-hin.json")
                    .then(function (response) {
                        //console.log("----------language Response--------------");
                        //console.log(response);
                        $rootScope.langTranslate = response;
                        //console.log($rootScope.langTranslate);

                    });
            }
        }
        //$rootScope.changeLanguage();
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

        //$rootScope.changeLanguage(lang.langId);
        $rootScope.socialMediaList = [];
        $rootScope.getSocialMedia = function () {
            appService.httpGet('getSocialMediaDetails/' + $rootScope.empDetails.branch.branchId)
                .then(function (res) {
                    //console.log(res);
                    if (res.result) {
                        var rec = [];
                        if (res.socialMedia != null && res.socialMedia.length > 0) {
                            for (var j = 0; j < res.socialMedia.length; j++) {
                                res.socialMedia[j].mediaUrl = res.socialMedia[j].mediaUrl.replace(/^https?:\/\//, '');
                                for (var i = 0; i < $rootScope.mediaList.length; i++) {
                                    if ($rootScope.mediaList[i].mediaName == res.socialMedia[j].mediaName) {
                                        $rootScope.mediaList[i].mediaUrl = res.socialMedia[j].mediaUrl;
                                    }
                                }
                            }
                            $rootScope.socialMediaList = res.socialMedia;
                            //console.log($rootScope.mediaList);
                        } else {
                            $rootScope.socialMediaList = $rootScope.mediaList;
                        }
                    } else {
                        $rootScope.socialMediaList = $rootScope.mediaList;
                    }
                })
        }
        $rootScope.mediaList = [];
        $rootScope.getMediaList = function () {
            appService.httpGet("getSocialMediaList")
                .then(function (response) {
                    //console.log("------------Get Media List-------------");
                    //console.log(response);
                    if (response.result) {
                        for (var i = 0; i < response.socialMediaList.length; i++) {
                            response.socialMediaList[i].mediaUrl = '';
                        }
                        $rootScope.mediaList = response.socialMediaList;
                        $rootScope.getSocialMedia();
                    } else {

                    }
                });
        }
        $rootScope.getMediaList();
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

app.directive('checkSuggDetUsrImageLoaded', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', 'dist/icons/ic_profile_placeholder.png'); // set default image
            });
        }
    }
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
        dd = today.getDate() + 1;
    } else {
        //console.log("else condition " + today.getDate());
        dd = today.getDate() + 1;
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
        DEFAULT_DATE: {
            from: fromDate,
            to: toDate
        },
        TEAM_TYPE: {
            HR: "HR",
            EVALUATION: 1,
            IMPLEMENTATION: 2,
            ANALYSIS: 3,
            EVALFC: 4, //while assign first time to fc
            IMPLFC: 5, // Not Using Any where
            APPROVEDBYFC: 6 //when approved by fc,
        },
        STATUS: {
            CREATED: {
                id: 1,
                status: "Created",
                label: "New"
            },
            HR_REJECTS: {
                id: 3,
                status: "HRRejects",
                label: "Suggestion Declined"
            },
            HR_ACCEPTS: {
                id: 4,
                status: "HRAccepts",
                label: "Suggestion Accepted",
                labels: ["Suggestion Accepted by Supervisor",
                    "Suggestion Accepted by Head of Department",
                    "Suggestion Accepted by Plant Head"
                ],
                labelSuppText: "Suggestion Accepted By"
            },
            EVALUATION_ASSIGNED: {
                id: 5,
                status: "EvaluationAssigned",
                label: "Suggestion Assigned For Evaluation"
            },
            EVALUATION_ACCEPTED: {
                id: 7,
                status: "EvaluationRequestAccepted",
                label: "Suggestion Accepted By Evaluation Team"
            },
            EVALUATION_REJECTED: {
                id: 8,
                status: "EvaluationRequestRejected",
                label: "Rejected by Evaluation Team"
            },
            EVALUATION_INPUT_SUBMITTED: {
                id: 9,
                status: "EvaluationInputSubmitted",
                label: "Inputs Submitted"
            },
            IMPLEMENTATION_RECOMMENDED: {
                id: 11,
                status: "ImplementationRecommended",
                label: "Recommended For Implementation"
            },
            IMPLEMENTATION_NOT_RECOMMENDED: {
                id: 12,
                status: "ImplementationNotRecommended",
                label: "Rejected By Evaluation Team"
            },
            IMPLEMENTATION_ASSIGNED: {
                id: 14,
                status: "ImplementationAssigned",
                label: "Assinged for Implementation"
            },
            IMPLEMENTATION_REQUEST_ACCEPTED: {
                id: 15,
                status: "ImplementationRequestAccepted",
                label: "Implementation Request Accepted"
            },
            IMPLEMENTATION_REQUEST_REJECTED: {
                id: 16,
                status: "ImplementationRequestRejected",
                label: "Implementation Request Rejected"
            },
            IMPLEMENTATION_INPUT_SUBMITTED: {
                id: 17,
                status: "ImplementationInputSubmitted",
                label: "Implementation Input Submitted"
            },
            IMPLEMENTED: {
                id: 19,
                status: "Implemented",
                label: "Suggestion Implemented"
            },
            CANCELLED: {
                id: 20,
                status: "Cancelled",
                label: "Cancelled"
            },
            IMPLEMENTATION_ON_HOLD: {
                id: 21,
                status: "ImplementationOnHold",
                label: "Implementation On Hold"
            },
            CLOSED: {
                id: 22,
                status: "closed",
                label: "Suggestion closed"
            },
            EVALUATION_RECOMMENDED: {
                id: 23,
                status: "EvaluationRecommended",
                label: "Implementation Recommended"
            },
            EVALUATION_NOT_RECOMMENDED: {
                id: 24,
                status: "EvaluationNotRecommended",
                label: "Rejected By Evaluation Team"
            },
            EVALUATION_REQUEST_DECLINED: {
                id: 25,
                status: "EvaluationRequestDecline",
                label: "Suggestion Declined By Evaluation Team"
            },
            IMPLEMENTATION_REQUEST_DECLINED: {
                id: 26,
                status: "ImplementationRequestDeclined",
                label: "Suggestion Declined by Implementation Team"
            },
            SUGGESTION_ASSIGNED: {
                id: 27,
                status: "SuggestionAssigned",
                labels: ["Suggestion Assinged For Scrutinization",
                    "Suggestion Assinged For Scrutinization",
                    "Suggestion Assinged For Scrutinization"
                ],
                labelSuppText: "Suggestion Assinged For",
                label: "Suggestion Assinged For Scrutinization"
            },
            SUGGESTION_DECLINED: {
                id: 28,
                status: "SuggestionDeclined",
                label: "Suggestion Rejected By Scrutinizer",
                labels: ["Suggestion Rejected by Supervisor",
                    "Suggestion Rejected by Head of Department",
                    "Suggestion Rejected by Plant Head"
                ],
                labelSuppText: "Suggestion Rejected By"
            },
            SUGGESTION_DECLINED_BY_HEAD: {
                id: 29,
                status: "SuggestionDeclinedByHead",
                label: "Suggestion is closed by top level management"
            },
            ASSIGNED_FOR_EDIT: {
                id: 30,
                status: "AssignedForEdit",
                label: "Suggestion is assigned to originator"
            },
            EDITED_BY_CREATOR: {
                id: 31,
                status: "EditedByCreator",
                label: "Edited By Creator"
            },
            ASSIGNED_TO_EXECUTIVE: {
                id: 32,
                status: "AssignedToExecutive",
                label: "Assigned To Executive"
            },
            ACCEPTED_BY_EXECUTIVE: {
                id: 33,
                status: "AcceptedByExecutive",
                label: "Accepted By Executive"
            },
            REJECTED_BY_EXECUTIVE: {
                id: 34,
                status: "RejectedByExecutive",
                label: "Rejected By Executive"
            },
            SUGGESTION_ASSIGNED_BY_EXECUTIVE: {
                id: 35,
                status: "SuggestionAssignedByExecutive",
                label: "Assigned By Executive"
            },
            ASSIGNED_CONCERN_TO_MGMT: {
                id: 36,
                status: "Assigned Concern",
                label: "Assigned Concern To Management"
            },
            ASSIGNED_CONCERN_TO_CONTROLLER: {
                id: 37,
                status: "AssignedConcernToController",
                label: "Assinged Suggestion/Concern For Further Action"
            },
            CLOSED_CONCERN: {
                id: 38,
                status: "ConcernClosed",
                label: "Concern Closed"
            }
        },
        ROLES: {
            GREENTIN_SUPERADMIN: 1,
            SUPERADMIN: 2,
            ROLE_ADMIN: 3,
            EMPLOYEE: 4,
            EXECUTIVE: 5,
            CONTROLLER: 6,
            CONTROLLERLEVELUP: 7,
            EVALUATOR: 8,
            IMPLEMENTER: 9,
            FINANCE_CONTROLLER: 10,
            ORG_EXECUTIVE: 11,
            CELL_LEADER: 12,
            STAFF_PERSON: 13,
            PLANT_PERSON: 14,
            AUDITOR: 15
        },
        COUNT_FILTERS: {
            PENDING: 1,
            MY_SUGG: 2,
            ALL_SUGG: 4
        },
        CONCERN_COUNT_FILTERS: {
            PENDING: 1,
            OPEN_CONCERN: 4,
            CLOSED_CONCERN: 5,
            MY_CONCERN: 3,
            ALL_CONCERN: 2
        },
        HELP_TEXT: {
            PENDING_ACTION: {
                TITLE: "My Pending Action",
                IS_SINGLE_TEXT: true,
                TEXT: "List of all suggestions which user needs to act upon."
            },
            MY_SUGGESTION: {
                TITLE: "My Suggestions",
                IS_SINGLE_TEXT: true,
                TEXT: "All suggestions which user have worked upon including his/her own posted suggestions."
            },
            ALL_SUGGESTION: {
                TITLE: "All Suggestions",
                IS_SINGLE_TEXT: true,
                TEXT: "List of all suggestions for all departments within branch."
            },
            DASHBOARD: {
                TOTAL_USERS: {
                    TITLE: "Total Users",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Number of employees/users added through myeNovation portal."
                },
                ACTIVE_USERS: {
                    TITLE: "Active Users",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Users who have verified account and logged in at least once."
                },
                PARTICIPATION_INDEX: {
                    TITLE: "Participation Index",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Number of unique users who have posted suggestions."
                },
                TOTAL_SUGG: {
                    TITLE: "Total Suggestions",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Total number of suggestions submitted within branch."
                },
                IMPLTED_SUGG: {
                    TITLE: "Implemented Suggestions",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Total number of suggestions implemented within branch."
                },
                REJECTED_SUGG: {
                    TITLE: "Rejected Suggestions",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Total number of suggestions rejected within branch."
                },
                TOTAL_CONCERNS: {
                    TITLE: "Total Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Total number of concerns within selected period."
                },
                CLOSED_CONCERNS: {
                    TITLE: "Closed Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "All closed concerns within selected period."
                },
                OPEN_CONCERNS: {
                    TITLE: "Closed Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "All open concerns within selected period."
                },
                COST_SAVING: {
                    TITLE: "Cost Saving",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Annual cost saving by implementing suggestions."
                },
                IMPL_COST: {
                    TITLE: "Implementation Cost",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Amount spent for implementing suggestions."
                }
            },
            CONCERN: {
                PENDING_ACTION: {
                    TITLE: "My Pending Actions",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Concern(s) which need to act upon"
                },
                OPEN_CONCERN: {
                    TITLE: "Open Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "All concerns which user has assigned for an action and are still open."
                },
                CLOSED_CONCERN: {
                    TITLE: "Closed Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "All concerns which user has assigned for an action and are closed."
                },
                MY_CONCERN: {
                    TITLE: "My Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Concern(s) raised by user."
                },
                ALL_CONCERN: {
                    TITLE: "All Concerns",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Total number of concerns raised so far."
                }
            },
            AUDITOR: {
                PENDING_ACTION: {
                    TITLE: "My Pending Actions",
                    IS_SINGLE_TEXT: true,
                    TEXT: "List of all template which user needs to act upon."
                },
                MY_AUDIT: {
                    TITLE: "My Audits",
                    IS_SINGLE_TEXT: true,
                    TEXT: "All in progress inspections/audits."
                },
                TEMPLATES: {
                    TITLE: "My Templates",
                    IS_SINGLE_TEXT: true,
                    TEXT: "Provision to create & publish templates."
                }
            }
        }
    }
})());

app.service('appService', function ($http, $q, $timeout, Auth, $rootScope) {
    var response = {};
    $rootScope.empDetails = JSON.parse(localStorage.getItem('userDet'));
    this.httpPost = function (data, url) {
        //$.blockUI();
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
            timeout: 180000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                //console.log("---------Main App HTTP Response------------");
                //console.log(response);
                d.resolve(response.data);
            })
            .catch(function (error) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                //d.reject(error);
                d.resolve(error.data);
            });
        return d.promise;
    }

    this.httpPut = function (data, url) {
        //$.blockUI();
        $rootScope.flagpageloadindicator = true;
        if (data.updatedBy == undefined || data.updatedBy == null || data.updatedBy == 0) {
            data.updatedBy = $rootScope.empDetails.empId;
        }
        if (data.createdBy == undefined || data.createdBy == null || data.createdBy == 0) {
            data.createdBy = $rootScope.empDetails.empId;
        }
        var d = $q.defer();

        $http({
            method: 'PUT',
            url: appDomain + url,
            data: data,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Auth.getToken()
            },
            timeout: 180000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                //console.log("---------Main App HTTP Response------------");
                //console.log(response);
                d.resolve(response.data);
            })
            .catch(function (error) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                //d.reject(error);
                d.resolve(error.data);
            });
        return d.promise;
    }

    this.httpGetLocal = function (url) {
        var d = $q.defer();
        $http({
            method: 'GET',
            url: url, //webUrl "http://localhost/enovation-portal/"
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

    this.httpPostLocal = function (data, url) {
        var d = $q.defer();
        $http({
            method: 'POST',
            url: "http://localhost/enovation-portal/api/" + url,
            data: data,
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            timeout: 60000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                d.resolve(response.data);
            })
            .catch(function (error) {
                //d.reject(error);
                d.resolve(error.data);
            });
        return d.promise;
    }

    // this.httpGetLocal = function (url) {
    //     var d = $q.defer();
    //     $http({
    //         method: 'GET',
    //         url: "http://localhost/enovation-portal/api/" + url,
    //         timeout: 60000 // request timeout is set to 60 seconds
    //     }).then(function (response) {
    //            ////console.log('data ===> ', data)
    //         d.resolve(response.data);
    //     }).catch(function (error) {
    //         //d.reject(error);
    //         d.resolve(error.data);
    //     });
    //     return d.promise;
    // }

    $rootScope.flagpageloadindicator = false;
    this.httpGet = function (url) {
        //$.blockUI();
        $rootScope.flagpageloadindicator = true;
        var d = $q.defer();
        $http({
            method: 'GET',
            url: appDomain + url,
            headers: {
                'Authorization': Auth.getToken()
            },
            timeout: 60000 // request timeout is set to 60 seconds
        })
            .then(function (response) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                ////console.log('data ===> ', data)
                d.resolve(response.data);
            })
            .catch(function (error) {
                //$.unblockUI();
                $rootScope.flagpageloadindicator = false;
                //d.reject(error);
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

// app.directive('surveyDatepicker', function() {
//     return {
//       require: 'ngModel',
//       link: function(scope, el, attr, ngModel) {
//           var today = new Date();
//         $(el).datepicker({
//           dateFormat: 'dd-MM-yyyy',
//           startDate:"today",
//           autoclose: true,
//           todayHighlight: true,
//           onSelect: function(dateText) {
//             scope.$apply(function() {
//               ngModel.$setViewValue(el.datepicker("getDate"));
//             });
//           }
//         });
//       }
//     };
//   });

//Datepicker
app.directive('targetdate', function () {
    return {
        require: 'ngModel',
        link: function (scope, el, attr, ngModel) {
            var today = new Date();
            var tmptoday = new Date(today.getDate(), today.getMonth(), today.getFullYear());

            $(el)
                .datepicker({
                    dateFormat: 'dd-MM-yyyy',
                    setDate: new Date(),
                    startDate: "today",
                    autoclose: true,
                    todayHighlight: true,
                    onSelect: function (dateText) {
                        scope.$apply(function () {
                            ngModel.$setViewValue(dateText);
                        });
                    }
                });
        }
    };
});

app.directive('disableRightClick', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('contextmenu', function (e) {
                if (!appDebug)
                    e.preventDefault();
            })
        }
    }
})
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
                element.attr('src', 'dist/icons/gift.png'); // set default image
            });
        }
    }
});
app.directive('noDocFound', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', 'dist/icons/No-image-found.jpg'); // set default image
            });
        }
    }
});

app.directive('noDoc', function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('error', function () {
                element.attr('src', 'dist/icons/noImg.png'); // set default image
            });
        }
    }
});
app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown", function (event) {
            //console.log(event);
            var key = event.charCode || event.keyCode;
            var char = (event.metaKey ? '⌘-' : '') + String.fromCharCode(event.keyCode);
            //console.log('Down <kbd>' + char + '</kbd>');
            //char == '⌘-['
            if (event.which == 44 || char == ',' || char == '-') {
                $("body")
                    .css("display", "none");
                event.preventDefault();
            }
        });
        element.bind("keyup", function (event) {
            //console.log(event);
            var key = event.charCode || event.keyCode;
            var char = (event.metaKey ? '⌘-' : '') + String.fromCharCode(event.keyCode);
            //console.log('Up <kbd>' + char + '</kbd>');
            if (event.which == 44 || char == ',' || char == '-') {
                $("body")
                    .css("display", "block");
                event.preventDefault();
            }
        });
    };

});