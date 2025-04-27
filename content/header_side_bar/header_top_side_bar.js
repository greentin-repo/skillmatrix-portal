'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('mainApp.header', ['ngRoute'])

var headerCtrl = app.controller("headerCtrl", ['$scope', '$rootScope', 'appService', 'sharedService', 'snackbar', 'CONST_RESOURCES', '$filter', '$translate', function($scope, $rootScope, appService, sharedService, snackbar, CONST_RESOURCES, $filter, $translate) {
    //$scope.loggedInRole = localStorage.getItem("loginRole");

    $scope.userRoles = $rootScope.empDetails.roles;
    $scope.isSetupCompleted = $rootScope.empDetails.productOrgConfigDet.isSetupCompleted;
    //$scope.isSuggestionAccess = $rootScope.checkSubMenuAccess('Suggestions', 'Suggestions');


    if ($rootScope.empDetails != null) {
        $scope.loggedInEmpId = $rootScope.empDetails.empId;
    }
    //Feedback And Rating
    $scope.getFeedBackList = function() {
        appService.httpGet('getFeedbackList')
            .then(function(response) {
                $scope.feedbackTypeList = response.feedBackTypeList;
                $scope.feedback = {
                    feedbackTypeId: $scope.feedbackTypeList[0].feedbackTypeId.toString()
                }
            })
    }
    $scope.feedbackModel = function() {
        $scope.getFeedBackList();
        $("#FeedbackModal")
            .modal('show');
    }

    $scope.clearform = function() {
        // $scope.feedback.feedbackTypeId='',
        $scope.feedback.feedbackTypeId = '1';
        $scope.ratings = '';
        $scope.feedback.ratings = '';
        $scope.feedback.feedback = '';
    }
    $scope.changeFeedback = function(id) {
        $scope.ratings = '';
        $scope.feedback.ratings = '';
        $scope.feedback.feedback = '';
    }
    $scope.sendData = function() {
        //console.log($scope.feedback.feedbackTypeId);
        var feedbackType;
        if ($scope.feedback.feedbackTypeId == 1) {
            feedbackType = $scope.feedbackTypeList[0];
        } else {
            feedbackType = $scope.feedbackTypeList[1];
        }
        if ($scope.feedback.feedback == '' || angular.isUndefined($scope.feedback.feedback) || $scope.feedback.feedback == null) {
            if ($scope.feedback.feedbackTypeId == 1) {
                snackbar.create("Please enter query.", 5000, "error");
            } else {
                snackbar.create("Please enter feedback.", 5000, "error");
            }
            return;
        }
        if ($scope.feedback.feedbackTypeId == 2) {
            if (angular.isUndefined($scope.feedback.ratings) || $scope.feedback.feedback == '' || $scope.feedback.feedback == null) {
                snackbar.create("Please select ratings.", 5000, "error");
                return;
            }
        }

        var data = {
                "feedbackType": feedbackType,
                "feedback": $scope.feedback.feedback,
                "ratings": $scope.feedback.ratings,
                "branchId": $rootScope.empDetails.branch.branchId,
                "orgId": $rootScope.empDetails.organization.orgId,
                "feedbackById": $rootScope.empDetails.empId
            }
            //console.log(data);
        appService.httpPost(data, "saveFeedback")
            .then(function(response) {
                //console.log("-----------------submit form----------------------------");
                //console.log(response);
                //autoclose: true;
                $("#FeedbackModal")
                    .modal('hide');
                if ($scope.feedback.feedbackTypeId == 1)
                    snackbar.create("Your query has been sent successfully.", 5000, "success");
                else
                    snackbar.create("Your feedback has been sent successfully.", 5000, "success");
                $scope.clearform();
            });
    }

    $scope.moodIndicatorsList = [{
            name: 'Very Unhappy', //'Discouraged',
            rating: 1,
            img: 'dist/icons/emoji/disappointed.png'
        },
        {
            name: 'Fairly Unhappy', //'Unsatisfied',
            rating: 2,
            img: 'dist/icons/emoji/sad.png'
        },
        {
            name: 'Neither Happy Nor Unhappy', //'Acceptable',
            rating: 3,
            img: 'dist/icons/emoji/confused.png'
        },
        {
            name: 'Fairly Happy', //'Motivated',
            rating: 4,
            img: 'dist/icons/emoji/happy.png'
        },
        {
            name: 'Very Happy', //'Enthusiastic',
            rating: 5,
            img: 'dist/icons/emoji/in-Love.png'
        },
    ];
    $scope.happinessIndexReports = [{
            "reportName": "Please Select Report Type",
            "caption": "",
            "index": 0,
            "dataFound": false
        },
        {
            "reportName": "Employee Wise Happiness Index",
            "caption": "",
            "index": 1,
            "dataFound": false
        }
    ];
    $scope.moodIndicators = 0;
    $scope.showAnalytics = 1;
    $scope.showAnalyticsDiv = function(id) {
        $scope.showAnalytics = id;
        if (id == 1) {

        } else if (id == 2) {
            $scope.setMoodIndClick('branch');
        } else if (id == 3) {
            $scope.moodInd.selectedReport = $scope.happinessIndexReports[0];
            $scope.moodInd.fromReportDate = (moment().subtract(1, 'months').format('YYYY-MM-DD'));
            $scope.moodInd.toReportDate = moment().format('YYYY-MM-DD');
        }
    }
    $scope.isMood = function(number) {
        return $scope.moodIndicators === number;
    }
    $scope.getEmpDetails = function() {
        appService.httpGet('getEmployeeByEmpId/' + $rootScope.empDetails.empId)
            .then(function(res) {
                if (res.result) {
                    var profile = JSON.parse(localStorage.getItem('userDet'));
                    profile.moodIndicator = res.empDetails.moodIndicator;
                    $rootScope.empDetails = profile;
                    localStorage.setItem('userDet', JSON.stringify(profile));
                } else {

                }
            })
    }

    $scope.addMoodIndicators = function() {
        var data = {
                empDetails: {
                    empId: $rootScope.empDetails.empId
                },
                branch: {
                    branchId: $rootScope.empDetails.branch.branchId
                },
                rating: $scope.moodIndicators
            }
            //console.log(data);
        if ($scope.moodIndicators != 0) {
            appService.httpPost(data, "addMoodIndicator")
                .then(function(res) {
                    $("#emoji")
                        .modal('hide');
                    if (res.statusCode == 200) {
                        snackbar.create("Your mood indicators has been submitted successfully.", 5000, "success");
                        $scope.getEmpDetails();
                    } else if (res.statusCode == 100) {
                        snackbar.create(res.reason, 5000, "error");
                    } else {
                        snackbar.create('Error occurred while mood indicator submitting. Please try again', 5000, "error");
                    }
                })
        }
    }
    $scope.addMoodIndicators1 = function() {
        var data;
        var url;
        var flag;
        if ($rootScope.checkSubMenuAccess('Suggestions', 'Happiness Index')) {
            flag = true;
        } else {
            flag = false;
        }
        if ($rootScope.empDetails.moodIndicator != null && $rootScope.empDetails.moodIndicator.length > 0) {
            var rec = $rootScope.empDetails.moodIndicator[0];
            //console.log()
            if (rec.rating == $scope.moodIndicators) {
                if (!flag) {
                    $("#emojiReport")
                        .modal('hide');
                }
                return;
            }
            url = 'updateMoodIndicator'
            data = {
                id: rec.id,
                rating: $scope.moodIndicators
            }
        } else {
            url = 'addMoodIndicator';
            data = {
                empDetails: {
                    empId: $rootScope.empDetails.empId
                },
                branch: {
                    branchId: $rootScope.empDetails.branch.branchId
                },
                rating: $scope.moodIndicators
            }
        }
        //console.log(data);
        if ($scope.moodIndicators != 0) {
            appService.httpPost(data, url)
                .then(function(res) {
                    if (!flag) {
                        $("#emojiReport")
                            .modal('hide');
                    }
                    if (res.statusCode == 200) {
                        snackbar.create("Your mood indicators has been submitted successfully.", 5000, "success");
                        $scope.getEmpDetails();
                    } else if (res.statusCode == 100) {
                        snackbar.create(res.reason, 5000, "error");
                    } else {
                        snackbar.create('Error occurred while mood indicator submitting. Please try again', 5000, "error");
                    }
                })
        }
    }
    $scope.clickMoodIndicator = function(number) {
        $scope.moodIndicators = number;
        $scope.addMoodIndicators();
    }
    $scope.clickMoodIndicator1 = function(number) {
        $scope.moodIndicators = number;
        $scope.addMoodIndicators1();
    }
    $scope.getDepartmentList = function() {
        appService.httpGet("getdepartmentlistbybranchid/" + $rootScope.empDetails.branch.branchId)
            .then(function(response) {
                //console.log("----------Department List--------------");
                //console.log(response);
                if (response.result) {
                    $scope.deptbranchwise = response.deptList;
                } else {
                    $scope.deptbranchwise = [];
                }
            })
    }

    $scope.moodInd = {};
    $scope.selectedMood;
    $scope.openEmojiReport = function() {
        if ($rootScope.empDetails.moodIndicator != null && $rootScope.empDetails.moodIndicator.length > 0) {
            $scope.moodIndicators = $rootScope.empDetails.moodIndicator[0].rating;
        }
        $scope.moodInd = {
            fromDate: (moment()
                .subtract(1, 'months')
                .format('YYYY-MM-DD')),
            toDate: $filter('date')(new Date(), "yyyy-MM-dd")
        };
        $('#emojiReport')
            .modal({
                backdrop: 'static',
                keyboard: false
            })

        $scope.setMoodIndTab = 'branch';
        $scope.setMoodIndClick('branch');
    }
    $scope.setMoodIndClick = function(tab) {
        $scope.setMoodIndTab = tab;
        if (tab == 'branch') {
            $scope.getMoodReport();
        } else {
            $scope.getMoodReport();
        }
    }
    $scope.initReportDate = function(type) {
        if (type == 'to') {
            //Date picker
            $('#happinessReportToDate')
                .datepicker({
                    format: "yyyy-mm-dd",
                    endDate: "today",
                    autoclose: true,
                    todayHighlight: true
                }).on('changeDate', function(selected) {

                })
        } else {
            //Date picker
            $('#happinessReportFromDate')
                .datepicker({
                    format: "yyyy-mm-dd",
                    startDate: (moment()
                        .subtract(1, 'months')
                        .format('YYYY-MM-DD')),
                    autoclose: true,
                    todayHighlight: true
                })
        }
    }
    $(function() {
        var today = new Date() + 1;
        //Date picker
        $('#toMood_datepicker')
            .datepicker({
                format: "yyyy-mm-dd",
                endDate: "today",
                autoclose: true
            })
    });
    $(function() {
        var today = new Date() + 1;
        //Date picker
        $('#frmMood_datepicker')
            .datepicker({
                format: "yyyy-mm-dd",
                startDate: $scope.moodInd.fromDate,
                autoclose: true
            })
    });
    $scope.dateFromSelected = function() {
        $scope.selectedMoodFrDate = $('#frmMood_datepicker')
            .datepicker('getFormattedDate');
        $(function() {
            var today = new Date() + 1;
            angular.element('#toMood_datepicker')
                .datepicker({
                    format: "yyyy-mm-dd",
                    endDate: "today",
                    autoclose: true
                })
            angular.element('#toMood_datepicker')
                .datepicker('setStartDate', $scope.selectedMoodFrDate);
        });
        $('#frmMood_datepicker')
            .datepicker('hide');
        $scope.moodInd.fromDate = $scope.selectedMoodFrDate;
        $scope.getMoodReport();
    }

    $scope.dateToSelected = function() {
        $scope.selectedMoodToDate = $('#toMood_datepicker')
            .datepicker('getFormattedDate');

        $(function() {
            //Date picker
            angular.element('#frmMood_datepicker')
                .datepicker({
                    format: "yyyy-mm-dd",
                    startDate: $scope.moodInd.fromDate,
                    endDate: "today",
                    autoclose: true
                })
            angular.element('#frmMood_datepicker')
                .datepicker('setEndDate', $scope.selectedMoodToDate);
            $('#toMood_datepicker')
                .datepicker('hide');
            $scope.moodInd.toDate = $scope.selectedMoodToDate;
            $scope.getMoodReport();
        });
    }
    $scope.clickToDate = function() {
        var today = new Date() + 1;
        $('#toMood_datepicker')
            .datepicker('setStartDate', $scope.moodInd.fromDate);
        $('#toMood_datepicker')
            .datepicker('setEndDate', today);
    }

    $scope.clickReportToDate = function() {
        var today = new Date() + 1;
        $('#happinessReportToDate')
            .datepicker('setStartDate', $scope.moodInd.fromReportDate);
        $('#happinessReportToDate')
            .datepicker('setEndDate', today);
    }
    $scope.clickReportFromDate = function() {
        $('#happinessReportFromDate')
            .datepicker('setEndDate', $scope.moodInd.toReportDate);
    }

    // $scope.setGraphHeight = function () { 
    //   var deptLength = 0;
    //   if ($scope.deptbranchwise != null && $scope.deptbranchwise.length > 0) {
    //     deptLength = $scope.deptbranchwise.length;
    //   } else { 
    //     $scope.getDepartmentList();
    //     deptLength = $scope.deptbranchwise.length;
    //   }
    //   if (deptLength > 0) { 
    //     calSingalHeight = 50 * deptLength;
    //   }
    //   return calSingalHeight;
    // }
    $scope.clickFromDate = function() {
            $('#frmMood_datepicker')
                .datepicker('setEndDate', $scope.moodInd.toDate);
        }
        //$scope.txtColorPallet = ['txt-green', 'txt-orange', 'txt-blue', 'txt-yellow', 'txt-darkgray', 'txt-pink', 'txt-blue1', 'txt-red', 'txt-darkgray-1', 'txt-purpul'];
    $scope.moodGraphColors = ['#33C771', '#f68421', '#8776F8', '#E5C212', '#EE428C', '#505050', '#288AEC'];
    $scope.flagMoodGraphBoxIndicator = false;
    $scope.flagMoodGraphDataNotAvail = false;
    $scope.moodGraphOpt = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    // maxBarThickness: 5,
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        stepSize: 10,
                        beginAtZero: true, // minimum value will be 0.
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '(In Percentage)'
                    }
                }]
            },
            // "animation": {
            //   "duration": 1,
            //   "onComplete": function () {
            //     var chartInstance = this.chart,
            //       ctx = chartInstance.ctx;

            //     ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            //     ctx.textAlign = 'center';
            //     ctx.textBaseline = 'bottom';

            //     this.data.datasets.forEach(function (dataset, i) {
            //       var meta = chartInstance.controller.getDatasetMeta(i);
            //       if (meta.hidden == null) {
            //         meta.data.forEach(function (bar, index) {
            //           if (dataset.data[index] != 0) {
            //             var data = dataset.data[index] + '%';
            //             ctx.fillText(data, bar._model.x + 30, bar._model.y - -5);
            //           }
            //         });
            //       }
            //     });
            //   }
            // },
            tooltips: {
                //"enabled": true
                callbacks: {
                    label: function(tooltipItem, data) {
                        var label = data.datasets[tooltipItem.datasetIndex].label || '';

                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.yLabel + '%';
                        return label;
                    }
                }
            },
            hover: {
                "animationDuration": 0
            },
            legend: {
                display: true,
                position: 'bottom'
            },
            // layout: {
            //   padding: {
            //     top: 50
            //   }
            // }
        }
        //$scope.moodIndicatorsList1 = [];
    $scope.getMoodReport = function() {
        $scope.flagMoodGraphBoxIndicator = true;
        $scope.flagMoodGraphDataNotAvail = false;
        // $scope.moodIndicatorsList = [];
        // $scope.emojiBarReport = [];

        $scope.emojiBarReport = {};
        var data = {
                "branchId": $rootScope.empDetails.branch.branchId,
                "type": $scope.setMoodIndTab == 'branch' ? 'BRANCH_LEVEL' : 'DEPT_LEVEL',
                "fromDt": $scope.moodInd.fromDate + " 00:00:00",
                "toDt": $scope.moodInd.toDate + " 23:59:59"
            }
            //console.log(data);
        appService.httpPost(data, 'getMoodIndicatorforBranch')
            .then(function(response) {
                $scope.flagMoodGraphBoxIndicator = false;
                //console.log(response);
                if (response.result) {
                    if (response.moodEmojiList != null && response.moodEmojiList.length > 0) {
                        $scope.flagMoodGraphDataNotAvail = false;
                        if ($scope.setMoodIndTab == 'dept') {
                            //  $scope.emojiReport = [];
                            // response.moodEmojiList = [
                            //   {
                            //     "deptId": 7,
                            //     "deptName": "Cell 2",
                            //     "rating": 1,
                            //     "empCount": "1",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "10.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 7,
                            //     "deptName": "Cell 2",
                            //     "rating": 5,
                            //     "empCount": "4",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "40.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 47,
                            //     "deptName": "Cell 4",
                            //     "rating": 5,
                            //     "empCount": "1",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 7,
                            //     "deptName": "Cell 2",
                            //     "rating": 3,
                            //     "empCount": "1",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "10.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 1,
                            //     "deptName": "Cell 1",
                            //     "rating": 1,
                            //     "empCount": "1",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "6.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 1,
                            //     "deptName": "Cell 1",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 47,
                            //     "deptName": "Cell 4",
                            //     "rating": 1,
                            //     "empCount": "1",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 43,
                            //     "deptName": "Cell 4",
                            //     "rating": 5,
                            //     "empCount": "2",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 1,
                            //     "deptName": "Cell 1",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 47,
                            //     "deptName": "Cell 4",
                            //     "rating": 3,
                            //     "empCount": "1",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 47,
                            //     "deptName": "Cell 4",
                            //     "rating": 5,
                            //     "empCount": "1",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 7,
                            //     "deptName": "Cell 2",
                            //     "rating": 2,
                            //     "empCount": "1",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "10.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 7,
                            //     "deptName": "Cell 2",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "50.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 47,
                            //     "deptName": "Cell 4",
                            //     "rating": 2,
                            //     "empCount": "1",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 99,
                            //     "deptName": "Cell 5",
                            //     "rating": 5,
                            //     "empCount": "2",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 99,
                            //     "deptName": "Cell 5",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 98,
                            //     "deptName": "Cell 6",
                            //     "rating": 5,
                            //     "empCount": "2",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 98,
                            //     "deptName": "Cell 6",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 97,
                            //     "deptName": "Cell 7",
                            //     "rating": 5,
                            //     "empCount": "2",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 97,
                            //     "deptName": "Cell 7",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 96,
                            //     "deptName": "Cell 8",
                            //     "rating": 5,
                            //     "empCount": "2",
                            //     "month": "Aug",
                            //     "year": "19",
                            //     "emojiPercentage": "100.00",
                            //     "totalEmpCount": null
                            //   },
                            //   {
                            //     "deptId": 96,
                            //     "deptName": "Cell 8",
                            //     "rating": 5,
                            //     "empCount": "5",
                            //     "month": "Sep",
                            //     "year": "19",
                            //     "emojiPercentage": "31.25",
                            //     "totalEmpCount": null
                            //   }
                            // ];
                            $scope.EmpCount = 0;
                            for (var i = 0; i < response.moodEmojiList.length; i++) {
                                $scope.EmpCount += parseInt(response.moodEmojiList[i].empCount);
                                response.moodEmojiList[i].noOfSugesstion = response.moodEmojiList[i].emojiPercentage;
                                response.moodEmojiList[i].label = $scope.moodIndicatorsList[response.moodEmojiList[i].rating - 1].name;
                            }
                            //$scope.emojiBarReport = $scope.getGraphreport(response.moodEmojiList);

                            var resWiseCount = response.moodEmojiList;
                            var data = {
                                Series: [],
                                Dataset: [],
                                Label: []
                            }
                            var resGroups = resWiseCount.reduce(function(obj, item) {
                                var date = item.deptName; //item.month + " " + item.year;
                                obj[date] = obj[date] || [];
                                obj[date].push(item);
                                return obj;
                            }, {});
                            var tmpLabel = Object.keys(resGroups)
                                .map(function(key) {
                                    return {
                                        date: key,
                                        data: resGroups[key]
                                    };
                                });
                            for (var i = 0; i < resWiseCount.length; i++) {
                                var date = resWiseCount[i].deptName; //resWiseCount[i].month + " " + resWiseCount[i].year;
                                if (data.Label.indexOf(date) == -1)
                                    data.Label.push(date);
                            }
                            for (var i = 0; i < resWiseCount.length; i++) {
                                var label = resWiseCount[i].label;
                                if (data.Series.indexOf(label) == -1)
                                    data.Series.push(label);
                            }
                            var tmpData = [];
                            for (var i = 0; i < data.Series.length; i++) {
                                var tmp = new Array(data.Label.length)
                                    .fill(0);
                                tmpData.push(tmp);
                            }
                            data.Dataset = angular.copy(tmpData);
                            for (var i = 0; i < tmpLabel.length; i++) {
                                var index = data.Label.indexOf(tmpLabel[i].date);
                                for (var j = 0; j < tmpLabel[i].data.length; j++) {
                                    var tmpindex = data.Series.indexOf(tmpLabel[i].data[j].label);
                                    data.Dataset[tmpindex][index] = tmpLabel[i].data[j].noOfSugesstion;
                                }
                            }
                            for (var i = 0; i < data.Series.length; i++) {
                                var totalCount = 0;
                                for (var k = 0; k < data.Dataset[i].length; k++) {
                                    ////console.log(data.Series[i] + " " + data.Dataset[i][k]);
                                    totalCount += data.Dataset[i][k];
                                }
                                data.Series[i] = data.Series[i]; //+ ":" + totalCount
                            }
                            // for (let index = 0; index < data.Dataset.length; index++) {
                            //   if (data.Dataset[index] == 0) { 
                            //     data.Dataset.splice(index, 1);
                            //   }
                            // }
                            $scope.emojiBarReport = data;
                            //console.log($scope.emojiBarReport);
                        } else {
                            //$scope.moodIndicatorsList = [];
                            var count = 0;
                            for (var j = 0; j < $scope.moodIndicatorsList.length; j++) {
                                $scope.moodIndicatorsList[j].percentage = 0;
                                $scope.moodIndicatorsList[j].count = 0;
                                $scope.moodIndicatorsList[j].totalEmpCount = 0;
                                for (var i = 0; i < response.moodEmojiList.length; i++) {
                                    $scope.moodIndicatorsList[j].totalEmpCount = response.moodEmojiList[i].totalEmpCount;
                                    $scope.moodIndicatorsList[j].count += parseInt(response.moodEmojiList[i].empCount);
                                    if (response.moodEmojiList[i].rating == $scope.moodIndicatorsList[j].rating) {
                                        $scope.moodIndicatorsList[j].percentage = response.moodEmojiList[i].emojiPercentage;
                                    }
                                }
                            }
                            $scope.moodIndicatorsList1 = $scope.moodIndicatorsList;
                            //console.log($scope.moodIndicatorsList);
                        }
                    } else {
                        $scope.moodIndicatorsList1 = [];
                        $scope.emojiReport = [];
                        $scope.flagMoodGraphDataNotAvail = true;
                    }
                } else {
                    $scope.moodIndicatorsList1 = [];
                    $scope.emojiReport = [];
                    $scope.flagMoodGraphDataNotAvail = true;
                }
            });
    }
    $scope.flagNoticesThoughtDataNotAvail = false;
    $scope.openNoticeThought = function(type) {
        $scope.flagNoticesThoughtLoading = true;
        $scope.flagNoticesThoughtDataNotAvail = false;
        $scope
        $scope.NoticesThoughtsType = type;
        $scope.noticesList = [];
        var textArray = [
            'sticky0',
            'sticky1',
            'sticky2',
            'sticky3',
            'sticky4',
            'sticky5',
        ];
        $scope.NewsThoughtsTitle = 'Notice Board';
        appService.httpGet("getNoticeDetails/" + $rootScope.empDetails.branch.branchId + '/' + $rootScope.empDetails.dept.deptId)
            .then(function(response) {
                //console.log("--------------------Notice List---------------------");
                //console.log(response);
                $scope.flagNoticesThoughtLoading = false;
                if (response.result) {
                    $scope.flagNoticesThoughtDataNotAvail = false;
                    for (var i = 0; i < response.noticeList.length; i++) {
                        response.noticeList[i].class = textArray[Math.floor(Math.random() * textArray.length) + 1];
                    }
                    $scope.noticesList = response.noticeList;
                    //console.log($scope.noticesList);
                } else {
                    $scope.flagNoticesThoughtDataNotAvail = true;
                    $scope.noticesList = [];
                }
            });
        $('#NoticesThoughtsModal')
            .modal({
                backdrop: 'static',
                keyboard: false
            })
    }

    $scope.showThought = function() {
        appService.httpGet("getThought/" + $rootScope.empDetails.branch.branchId)
            .then(function(response) {
                $scope.flagNoticesThoughtLoading = false;
                //console.log("--------------------Thought List---------------------");
                //console.log(response);
                if (response.result) {
                    $rootScope.thoughtList = response.thoughtList[0].thought;
                    //console.log($rootScope.thoughtList);
                    $('#thought')
                        .attr('data-content', $rootScope.thoughtList);
                    $('#thought')
                        .popover('show');
                    $scope.flagNoticesThoughtDataNotAvail = false;
                } else {
                    $rootScope.thoughtList = '';
                    $scope.flagNoticesThoughtDataNotAvail = true;
                }
            });
        //console.log($rootScope.thoughtList);

    }
    $('body')
        .on('click', function(e) {
            $('[data-toggle=popover]')
                .each(function() {
                    // hide any open popovers when the anywhere else in the body is clicked
                    if (!$(this)
                        .is(e.target) && $(this)
                        .has(e.target)
                        .length === 0 && $('.popover')
                        .has(e.target)
                        .length === 0) {
                        $(this)
                            .popover('hide');
                    }
                });
        });
    $rootScope.showExtra = true;
    $scope.showExtraFeatureDiv = function() {
        $rootScope.showExtra = !$rootScope.showExtra;
    }
    $scope.fromDate = CONST_RESOURCES.DEFAULT_DATE.from;
    $scope.toDate = CONST_RESOURCES.DEFAULT_DATE.to;
    $scope.isExpand = false;
    $('body')
        .bind('expanded.pushMenu', function() {
            //console.log("sidebar expanded");
        });
    $('body')
        .bind('collapsed.pushMenu', function() {
            //console.log("sidebar collapsed");
        });

    $scope.onExpandCollapse = function() {
        $rootScope.$emit("onExpandCollapseSidebar", {});
    }

    $scope.showModule = function(module) {
        $scope.selectedMod = module;
        if (module == "suggestion") {
            window.location.href = "template.html#!/suggestions";
        } else if (module == "survey") {
            window.location.href = "template.html#!/survey";
        } else if (module == "team_mgmt") {
            window.location.href = "template.html#!/teamManagement";
        } else if (module == "userMgmt") {
            window.location.href = "template.html#!/userMgmt";
        } else if (module == "setup") {
            window.location.href = "template.html#!/setup";
        } else if (module == "profile") {
            window.location.href = "template.html#!/profile";
        } else if (module == "concerns") {
            window.location.href = "template.html#!/concerns";
        } else if (module == 'whistle_policy') {
            window.location.href = "template.html#!/whistle_policy";
        } else if (module == 'near_miss') {
            window.location.href = "template.html#!/near_miss";
        } else if (module == "auditor") {
            window.location.href = "template.html#!/auditor";
        }
    }


    if (localStorage.getItem("portalFormDt") == '' && localStorage.getItem("portalToDt") == '') {
        $scope.portalFromDt = localStorage.getItem("portalFormDt");
        $scope.portalToDt = localStorage.getItem("portalToDt");
    } else {
        $scope.portalFromDt = (moment()
            .subtract(1, 'months')
            .format('YYYY-MM-DD'));

        $scope.portalToDt = $filter('date')(new Date(), "yyyy-MM-dd");
    }
    //console.log("------filter dates----");
    $scope.fromDate = $scope.portalFromDt;
    $scope.toDate = $scope.portalToDt;
    $scope.loggedInName = $scope.loggedInName + " " + localStorage.getItem("lastName");

    $scope.applyFilter = function(statusDet) {
        //console.log("--------------------Applying Filter-----------------------");
        //console.log(statusDet);

        $scope.suggestionDet = {};
        if (statusDet == 'all') {
            $scope.setActiveFilter('all');
            $scope.getsuggestionList('allSuggestion');
            $scope.statusCountFilter = 0;
        } else {
            $scope.setActiveFilter(statusDet);
            $scope.statusCountFilter = statusDet.filterId;
            $scope.getsuggestionList('onLoad');
        }
        $scope.flagSuggestionFilter = true;
    }

    $scope.getStatusWiseCount = function() {
            $scope.data = {
                assignedToId: $scope.loggedInEmpId,
                fromDt: $scope.portalFromDt + ' 00:00:00',
                toDt: $scope.portalToDt + $filter('date')(new Date(), " HH:mm:ss"),
                branchId: $rootScope.empDetails.branch.branchId,
                orgId: $rootScope.empDetails.organization.orgId
            };
            //console.log($scope.data);
            appService.httpPost($scope.data, "getsuggestioncountnew")
                .then(function(response) {
                    //console.log("----------Status Wise Count List--------------");
                    //console.log(response);
                    $scope.statusWiseCountList = response.suggestionCountList;
                    $scope.totalSuggestionCount = response.totalSuggestionCount;
                    $scope.suggestionTotalCount = 0;
                    if ($scope.statusWiseCountList != null && $scope.statusWiseCountList.length > 0) {
                        for (var i = 0; i < $scope.statusWiseCountList.length; i++) {
                            $scope.suggestionTotalCount += $scope.statusWiseCountList[i].noOfSugesstion;
                            if ($scope.statusWiseCountList[i].filterId == $scope.statusCountFilter) {
                                $scope.suggestionPagination.totalSuggestion = $scope.statusWiseCountList[i].noOfSugesstion;
                            }
                        }
                    } else {

                    }
                    if ($scope.statusCountFilter == 0) {
                        $scope.suggestionPagination.totalSuggestion = $scope.totalSuggestionCount[0].noOfSugesstion;
                    }
                    //console.log("Total Suggestion Count : " + $scope.suggestionTotalCount);
                });
        }
        //$scope.getStatusWiseCount();


    $scope.showProfile = function() {
        $scope.selectedMod = "profile";
        window.location.href = "template.html#!/profile";
    }

    $scope.setHeight = function() {

        if ($scope.isExpand == false) {
            $scope.isExpand == true;
        } else {
            $scope.isExpand == false;
        }
    }

    if (window.location.href.indexOf("suggestions") >= 0) {
        $scope.selectedMod = "suggestion";
    }

    if (window.location.href.indexOf("concerns") >= 0) {
        $scope.selectedMod = "concerns";
    }
    if (window.location.href.indexOf("profile") >= 0) {
        $scope.selectedMod = "profile";
    }

    //$scope.selectedMod = "suggestion";

    $scope.isModActive = function(module) {
        return $scope.selectedMod === module;
    }

    $scope.logout = function() {
        localStorage.removeItem("menuData");
        localStorage.removeItem("userDet");
        localStorage.removeItem("suggStatus");
        localStorage.removeItem("subscriptionPopDet");
        sessionStorage.removeItem('sideMenuData');
        sessionStorage.removeItem('sideMenuStatus');
        sessionStorage.removeItem('selectedSideMenu');
        sessionStorage.removeItem('subscriptionPopShown');
        window.location.href = 'login.html';
    }

    if (localStorage.getItem("userDet") == null) {
        window.location.href = "index.html";
    }

    $scope.redirectToSetup = function(data) {
        sessionStorage.setItem("selectedSideMenu", JSON.stringify(data));
        window.location.href = "setup-config/#!" + data.link;
    }

    $scope.contactModel = function() {
        $scope.getallempList();
        $('#ConnecttopeerModal')
            .modal('show');
    }

    $scope.search = {};
    $scope.getallempList = function() {
        appService.httpGet("getAllEmpList/0/" + $rootScope.empDetails.branch.branchId + "/0")
            .then(function(response) {
                //console.log("-------------------Contact Employee list-------------");
                //console.log(response);
                if (response.result) {
                    $scope.emplist = response.allEmpDetails;
                    for (var i = 0; i < $scope.emplist.length; i++) {
                        $scope.emplist[i].fullName = $scope.emplist[i].firstName + ' ' + $scope.emplist[i].lastName;
                    }
                    //console.log($scope.emplist);
                }
            });
    }

    //$scope.getallempList();
    // $scope.getDeptList = function() {
    //   $scope.deptListLoading = true;
    //   appService.httpGet("getdepartmentlistbybranchid/" + $rootScope.empDetails.branch.branchId)
    //     .then(function(response) {
    //       $scope.deptListLoading = false;
    //       //console.log("----------------Departments List API Response----------------");
    //       //console.log(response);
    //       $scope.departmentList = response.deptList;
    //       if (response.result) {
    //         if ($scope.departmentList != null && $scope.departmentList.length > 0) {
    //           $scope.deptId = $scope.departmentList.deptId;
    //           $scope.getallempList($scope.deptId);
    //         }
    //       } else {
    //         $scope.deptList = [];
    //       }
    //     });
    // }
    // $scope.getDeptList();
    $scope.isEmpty = function(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    $scope.getHappinessIndexName = function(value) {
        var name = 'N/A';
        for (var j = 0; j < $scope.moodIndicatorsList.length; j++) {
            if ($scope.moodIndicatorsList[j].rating == value) {
                name = $scope.moodIndicatorsList[j].name;
            }
        }
        return name;
    }
    $scope.generateHappinessIndexReport = function() {
        console.log($scope.moodInd);
        var exportDataTmp = [];
        if (!$scope.isEmpty($scope.moodInd.selectedReport) && $scope.moodInd.selectedReport.index != 0) {
            var req = {
                branchId: $rootScope.empDetails.branch.branchId,
                fromDt: $scope.moodInd.fromReportDate + ' 00:00:00',
                toDt: $scope.moodInd.toReportDate + $filter('date')(new Date(), " HH:mm:ss"),
                // "deptId": 1,    // Optional
                // "limit": 10,    // Optional 
                // "offset": 0     // Optional
            }
            console.log(req);
            appService.httpPost(req, 'getemployeeWiseHappinessIndex').then(function(response) {
                if (response.result) {
                    if (response.happinessList != null && response.happinessList.length > 0) {
                        for (var i = 0; i < response.happinessList.length; i++) {
                            response.happinessList[i].moodIndicatorDate = (response.happinessList[i].moodIndicatorDate) ? moment(response.happinessList[i].moodIndicatorDate).format('YYYY-MM-DD') : 'N/A';
                            exportDataTmp.push({
                                ["Branch"]: response.happinessList[i].branchName,
                                ["Employee No"]: response.happinessList[i].cmpEmpId,
                                ["Employee Name"]: response.happinessList[i].empName,
                                ["Department"]: response.happinessList[i].deptName,
                                ["Happiness Index Date"]: response.happinessList[i].moodIndicatorDate,
                                ["Happiness Index"]: $scope.getHappinessIndexName(response.happinessList[i].rating)
                            });
                        }
                        alasql('SELECT * INTO XLSX("EmployeeWiseHappinessIndex_' + $scope.moodInd.fromReportDate + '_To_' + $scope.moodInd.toReportDate + '.xlsx",{headers:true}) FROM ?', [exportDataTmp]);
                    } else {
                        snackbar.create("Record Not Found.", 3000, "error");
                    }
                } else {
                    snackbar.create("Record Not Found.", 3000, "error");
                }
            })
        } else {
            snackbar.create("Please select report.", 3000, "error");
        }
    }
}]);

headerCtrl.$inject = ['$scope', 'sharedService'];