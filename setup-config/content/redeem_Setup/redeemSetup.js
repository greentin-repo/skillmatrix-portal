'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('configApp.redeemSetup', ['ngRoute', 'ngScrollbars', 'angular.snackbar'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/redeemSetup', {
        templateUrl: 'content/redeem_Setup/redeemSetup.html',
        controller: 'redeemSetupCtrl'
    });
}]);


var ctrl = app.controller("redeemSetupCtrl", ['$scope', 'appService', '$timeout', '$location', 'snackbar', '$filter', '$rootScope', 'CONST_RESOURCES', '$translate', function($scope, appService, $timeout, $location, snackbar, $filter, $rootScope, CONST_RESOURCES, $translate) {

    if (!$rootScope.checkSubMenuAccess($rootScope.menuName, $rootScope.sideMenuData[16].linkName)) {
        $location.path($rootScope.sideMenuData[0].link);
    }

    $scope.errSelectMember = false;
    $scope.flagEmpDetLoading = false;

    $scope.mainTab = 1;

    $scope.setMainTab = function(tabId) {
        $scope.mainTab = tabId;
        if ($scope.mainTab == 1) {
            $scope.getcategoryList();
        } else if ($scope.mainTab == 2) {
            $scope.name = "";
            $scope.emailId = "";
            $scope.contactNo = "";
            $scope.getVendorList();
        } else if ($scope.mainTab == 3) {
            // $scope.adminName = "";
            // $scope.adminEmailId = "";
            // $scope.adminContactNo = "";
            $scope.getAdminList();
        } else if ($scope.mainTab == 4) {
            $scope.redeem.description = "";
            $scope.redeem.points = "";
            $scope.getRewardList();
            // $scope.getRewardCategoryList();
        } else {
            $scope.getRewardResponsibleDataList();
            $scope.getRewardList();
            $scope.giftCode = "";
            $scope.selectedVendor = "";
            $scope.selectedPerson = "";
            $scope.selectedVendor = null;
            $scope.selectedPerson = null;
        }
    };

    $scope.isSetMainTab = function(tabId) {
        return $scope.mainTab === tabId;
    };

    $scope.loggedInUserBranchId = $rootScope.empDetails.branch.branchId;
    $scope.loggedInUserOrgId = $rootScope.empDetails.organization.orgId;

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
                    $scope.selectBranchId = $scope.branchAccessList[0].branchId.toString();
                }
                $scope.getVendorList();
                $scope.getAdminList();
                $scope.getRewardList();
                $scope.getRewardResponsibleDataList();
            });
    }
    $scope.getBranchAccessSetupList();

    $scope.getRewardList = function() {
        // appService.httpGet("getRewardsList/" + $scope.loggedInUserBranchId)
        //     .then(function(response) {
        appService.httpGet("getRewardsList/" + $scope.selectBranchId)
            .then(function(response) {
                //console.log("------------Reward List--------------");
                //console.log(response);
                if (response.result) {
                    $scope.rewardsList = response.rewardsList;
                    $scope.giftCode = ""; //$scope.rewardsList[0].id.toString();
                    $scope.editRewardsDiv = false;
                } else {
                    $scope.rewardsList = []
                }
            });
    }

    // $scope.getRewardCategoryList = function () {
    //   appService.httpGet("getRewardCategoryList/" + $scope.loggedInUserBranchId)
    //     .then(function (response) {
    //       //console.log("------------categoryList List--------------");
    //       //console.log(response);
    //       if (response.result) {
    //         $scope.categoryList = response.rewardCategoryList;
    //         //console.log($scope.categoryList);
    //         $scope.redeem.categoryId = ""; //$scope.categoryList[0].id.toString();
    //         //console.log($scope.selectedId);

    //       }
    //     });
    // }

    $scope.redeem = {
        id: 0
    };

    $scope.addReward = function(redeem) {
        //console.log(redeem);
        var formData = new FormData();
        formData.append('org.orgId', $scope.loggedInUserOrgId);
        formData.append('branch.branchId', parseInt($scope.selectBranchId));
        // formData.append('branch.branchId', $scope.loggedInUserBranchId);
        formData.append('description', redeem.description);
        if (redeem.points > 0) {
            formData.append('points', redeem.points);
        }
        if (redeem.amount > 0) {
            formData.append('amount', redeem.amount);
        }

        if (redeem.id != 0) {
            if ($scope.addImages) {
                for (var i in $scope.files1) {
                    formData.append("rewardImage", $scope.files1[i]);
                }
            }
            formData.append('id', redeem.id);
            formData.append('category.id', parseInt(redeem.categoryId));
            // formData.append('rCatId', redeem.categoryId);
            appService.uploadFileToUrl(formData, "updateRewards")
                .then(function(response) {
                    //console.log("-------------------update Reward List-------------------");
                    //console.log(response);
                    if (response.data.result) {
                        snackbar.create("Reward updated succesfully", 5000, "success");
                        $scope.getRewardList();
                    }
                    // $scope.redeem.giftCode = '';
                    // $scope.redeem.description = '';
                    $scope.redeem = { id: 0 };
                    $scope.files1 = [];
                });
        } else {
            formData.append('category.id', parseInt(redeem.categoryId));
            for (var i in $scope.files) {
                formData.append("rewardImage", $scope.files[i]);
            }
            //formData.append('rCatId', $scope.selectedId);
            appService.uploadFileToUrl(formData, "saveRewards")
                .then(function(response) {
                    //console.log("-------------------add Reward List-------------------");
                    //console.log(response);
                    if (response.data.result) {
                        $scope.getRewardList();
                        snackbar.create("Reward added succesfully", 5000, "success");
                    }
                    // $scope.redeem.giftCode = '';
                    $scope.redeem.description = '';
                    $scope.redeem.points = '';
                    $scope.redeem.amount = '';
                    $scope.files = [];
                    $scope.redeem.categoryId = "";
                });

        }
    }

    $scope.deleteReward = function(x) {
        //console.log("inside in deleteReward");
        $scope.data = {
            id: x.id,
            isEnable: 0
        };
        appService.httpPost($scope.data, "deleteRewards")
            .then(function(response) {
                //console.log("-----------------Delete rewards ----------------------------");
                //console.log(response);
                if (response.result) {
                    snackbar.create("Rewards Deleted successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }
    $scope.editRewardsDiv = false;

    $scope.editRewards = function(x) {
        for (var i = 0; i < $scope.rewardsList.length; i++) {
            $scope.rewardsList[i].isupdate = false;
        }
        $scope.editRewardsDiv = true;
        x.categoryId = x.category.id.toString();
        x.isupdate = true;
        $scope.redeem.id = x.id;
        //console.log("------------Edit Rewards-----------")
        if (x.url != null) {
            $scope.files1 = [{
                imgsrc: x.url
            }]
        }
        //console.log($scope.files1)
    }

    $scope.deleteReward = function() {
        //console.log("inside in deleteReward");
        $scope.data = {
            id: $scope.selectedRemove.id
        };
        appService.httpPost($scope.data, "deleteRewards")
            .then(function(response) {
                //console.log("-----------------Delete rewards ----------------------------");
                //console.log(response);
                $("#deleteRewards")
                    .modal('hide');
                if (response.result) {
                    $scope.getRewardList();
                    snackbar.create("Rewards deleted successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }
    $scope.deletePopup = function(x, type) {
        if (type == 'reward') {
            $scope.selectedRemove = x;
            $("#deleteRewards .msg")
                .text("that you want to remove this reward from list?");
            $("#deleteRewards")
                .modal('show');
            //console.log('Delete Reward')
        } else if (type == 'vendor') {
            $scope.selectRemoveVendor = x;
            $("#deleteVender .msg")
                .text("that you want to remove this vendor from list?");
            $("#deleteVender")
                .modal('show');
            //console.log('Delete Vendor')
        } else if (type == 'person') {
            $scope.selectRemovePerson = x;
            $("#deletePerson .msg")
                .text("that you want to remove this person from list?");
            $("#deletePerson")
                .modal('show');
            //console.log('Delete Admin Person');
        } else {
            $scope.selectRemoveResponsible = x;
            $("#deleteResPerson .msg")
                .text("that you want to remove this person from list?");
            $("#deleteResPerson")
                .modal('show');
            //console.log('Delete responsible')
        }
    }

    $scope.files = [];
    $scope.getFileDetails = function(e) {
        $scope.$apply(function() {

            if ($scope.files.length > 0) {
                snackbar.create("Only one image to be allowed to upload.", 3000, "error");
                return;
            }
            for (var i = 0; i < e.files.length; i++) {
                var ext = e.files[i].name.match(/\.(.+)$/)[1];
                //console.log(ext);
                if (angular.lowercase(ext) != 'jpg' && angular.lowercase(ext) != 'jpeg' && angular.lowercase(ext) != 'png') {
                    snackbar.create("Invalid file.Please select image file.", 3000, "error");
                    return;
                }
                $scope.files.push(e.files[i])
            }
            //console.log($scope.files);

        });
    };
    $scope.files1 = [];
    $scope.addImages = false;
    $scope.getFileDetails1 = function(e) {
        $scope.$apply(function() {
            if ($scope.files1.length > 0) {
                snackbar.create("Only one image to be allowed to upload.", 3000, "error");
                return;
            }
            for (var i = 0; i < e.files.length; i++) {
                var ext = e.files[i].name.match(/\.(.+)$/)[1];
                //console.log(ext);
                if (angular.lowercase(ext) != 'jpg' && angular.lowercase(ext) != 'jpeg' && angular.lowercase(ext) != 'png') {
                    snackbar.create("Invalid file.Please select image file.", 3000, "error");
                    return;
                }
                $scope.files1.push(e.files[i]);
                $scope.addImages = true;
            }
            //console.log($scope.files1);

        });
    };

    $scope.fileReader = function(data) {
        //console.log(data);
        var reader = new FileReader();
        reader.onload = function(loadEvent) {
            //console.log(loadEvent);
            $scope.$apply(function() {
                data.imgsrc = loadEvent.target.result;
            });
        }
        reader.readAsDataURL(data);
    }

    $scope.clearImage = function(index, img, type) {
        if (type == 'new') {
            $scope.files.splice(index, 1);
        } else {
            $scope.files1.splice(index, 1);
        }
    };
    $scope.previewImageForCreateSugg = function(img) {
        $scope.preiwImg = img;
    }
    $scope.cancelUpdate = function(type) {
            if (type == 'reward') {
                $scope.editRewardsDiv = false;
            } else if (type == 'vendor') {
                $scope.editVenderDiv = false;
            } else if (type == 'person') {
                $scope.editPersonDiv = false;
            } else {
                $scope.editCommunicationDiv = false;
            }
        }
        // Preview Image
        /*---------------------------Image Viewer---------------------------*/
    $scope.showPreviewImg = function(selectedImgIndex, docDet) {
        //console.log("---------------Doc List---------------");
        //console.log(docDet);
        $scope.selectedDocIndex = selectedImgIndex;
        $scope.viewerImages = docDet;
        $("#previewImg")
            .modal('show');
        for (var i = 0; i < $scope.viewerImages.length; i++) {

            if (i == selectedImgIndex) {
                $scope.viewerImages[i].selected = true;
                $("#previewImg .img-holder")
                    .attr("src", $scope.viewerImages[i].src);
            } else
                $scope.viewerImages[i].selected = false;
        }

        $scope.previewImageForCreateSugg(docDet[selectedImgIndex].src);
    }


    //Communicatation

    $scope.getRewardResponsibleDataList = function() {
        //-----------Change--------------
        // appService.httpGet("getRewardResponsibleList/" + $scope.loggedInUserBranchId)
        //     .then(function(response) {
        appService.httpGet("getRewardResponsibleList/" + $scope.selectBranchId)
            .then(function(response) {
                //console.log("------------RewardResponsibleList List--------------");
                //console.log(response);
                if (response.result == true) {
                    $scope.rewardResponsibleList = response.list;
                    //console.log($scope.rewardResponsibleList);
                    $scope.editCommunicationDiv = false;
                } else {
                    $scope.rewardResponsibleList = []
                }
            });
    }

    $scope.addRewardResponsibleData = function() {
        if ($scope.rewardResponsibleList != null && $scope.rewardResponsibleList.length > 0) {
            for (var i = 0; i < $scope.rewardResponsibleList.length; i++) {
                if ($scope.rewardResponsibleList[i].rewardId == $scope.giftCode && $scope.rewardResponsibleList[i].vendorId == $scope.selectedVendor.id && $scope.rewardResponsibleList[i].adminId == $scope.selectedPerson.id) {
                    snackbar.create("Record already exists.", 5000, "error");
                    return;
                }
            }
        }
        if ($scope.giftCode == '' || $scope.giftCode == null || angular.isUndefined($scope.giftCode)) {
            snackbar.create("Please select gift code", 5000, "error");
            return;
        }
        if ($scope.selectedVendor == '' || $scope.selectedVendor == null || angular.isUndefined($scope.selectedVendor)) {
            snackbar.create("Please select vendor", 5000, "error");
            return;
        }
        if ($scope.selectedPerson == '' || $scope.selectedPerson == null || angular.isUndefined($scope.selectedPerson)) {
            snackbar.create("Please select responsible person", 5000, "error");
            return;
        }
        $scope.data = {
                "rewardAdmin": {
                    "id": $scope.selectedPerson.id
                },
                "rewards": {
                    "id": parseInt($scope.giftCode)
                },
                "vendor": {
                    "id": $scope.selectedVendor.id
                },
                "branch": {
                    "branchId": parseInt($scope.selectBranchId)
                        // "branchId": $rootScope.empDetails.branch.branchId
                },
                "org": {
                    "orgId": $rootScope.empDetails.organization.orgId
                }
            }
            //console.log($scope.data);
        appService.httpPost($scope.data, "addRewardResponsibleData")
            .then(function(response) {
                //console.log("----------------RewardResponsibleData  succesfully----------------------------");
                //console.log(response);
                if (response.result) {
                    $scope.getRewardResponsibleDataList();
                    $scope.clearform();
                    snackbar.create("Responsible Person added successfully.", 4000, "success");
                    $scope.giftCode = "";
                    $scope.selectedVendor = null;
                    $scope.selectedPerson = null;
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }

    $scope.clearform = function() {
        $scope.rewardRespDetails = '',
            $scope.vendor = '',
            $scope.rewardAdmin = '',
            $scope.rewards = ''
    }

    $scope.editCommunicationDiv = false;
    //console.log($scope.selectedPerson)
    $scope.updateData = function(x) {
        for (var i = 0; i < $scope.rewardResponsibleList.length; i++) {
            $scope.rewardResponsibleList[i].isupdate = false;
        }
        //console.log(x);
        x.isupdate = true;
        $scope.newVendorSelected = {
            name: x.name,
            id: x.vendorId
        };
        $scope.newPersonSelected = {
            name: x.adminName,
            id: x.adminId
        };
        $scope.editCommunicationDiv = true;
    }


    $scope.updateRewardResponsibleData = function(x) {
        $scope.data = {
            "id": x.id,
            "rewardAdmin": {
                "id": $scope.newPersonSelected.id
            },
            "vendor": {
                "id": $scope.newVendorSelected.id
            }
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "updateRewardResponsibleData")
            .then(function(response) {
                //console.log("-----------------update RewardResponsibleData ----------------------------");
                //console.log(response);
                if (response.result) {
                    $scope.getRewardResponsibleDataList();
                    snackbar.create("Responsible Person Updated successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }


    // $scope.addRewardResponsibleData = function () {
    //   if ($scope.rewardResponsibleList != null && $scope.rewardResponsibleList.length > 0) {
    //     for (var i = 0; i < $scope.rewardResponsibleList.length; i++) {
    //       var rec = $scope.rewardResponsibleList[i];
    //       if (rec.rewards.id == $scope.giftCode && rec.vendor.id == $scope.selectedVendor.id && rec.rewardRespDetails.id == $scope.selectedPerson.id) {
    //         snackbar.create("Record already exists.", 5000, "error");
    //         return;
    //       }
    //     }
    //   }

    //   if ($scope.giftCode == '' || $scope.giftCode == null || angular.isUndefined($scope.giftCode)) {
    //     snackbar.create("Please select gift code", 5000, "error");
    //     return;
    //   }
    //   if ($scope.selectedVendor == '' || $scope.selectedVendor == null || angular.isUndefined($scope.selectedVendor)) {
    //     snackbar.create("Please select vendor", 5000, "error");
    //     return;
    //   }
    //   if ($scope.selectedPerson == '' || $scope.selectedPerson == null || angular.isUndefined($scope.selectedPerson)) {
    //     snackbar.create("Please select responsible person", 5000, "error");
    //     return;
    //   }
    //   $scope.data = {
    //     rewardRespDetails: {
    //       id: $scope.selectedPerson.id
    //     },
    //     vendor: {
    //       id: $scope.selectedVendor.id
    //     },
    //     rewards: {
    //       id: parseInt($scope.giftCode)
    //     },
    //     branch: {
    //       branchId: $rootScope.empDetails.branch.branchId
    //     },
    //     org: {
    //       orgId: $rootScope.empDetails.organization.orgId
    //     }
    //   };
    //   //console.log($scope.data);
    //   appService.httpPost($scope.data, "addRewardResponsibleData")
    //     .then(function (response) {
    //       //console.log("----------------RewardResponsibleData  succesfully----------------------------");
    //       //console.log(response);
    //       if (response.result) {
    //         $scope.getRewardResponsibleDataList();
    //         snackbar.create("Responsible Person added successfully.", 4000, "success");
    //         $scope.giftCode = "";
    //         $scope.selectedVendor = null;
    //         $scope.selectedPerson = null;
    //       } else {
    //         snackbar.create("Error Occurred. Please try again.", 5000, "error");
    //       }
    //     });
    // };

    // $scope.clearform = function () {
    //   $scope.rewardRespDetails = '',
    //     $scope.vendor = '',
    //     $scope.rewards = '',
    //     $scope.rewardRespDetails = ''

    // }

    // $scope.getRewardResponsibleDataList = function () {
    //   appService.httpGet("getRewardResponsibleList/" + $scope.loggedInUserBranchId)
    //     .then(function (response) {
    //       //console.log("------------RewardResponsibleList List--------------");
    //       //console.log(response);
    //       if (response.result == true) {
    //         // $scope.rewardResponsibleList = response.rewardResponsibleList;
    //         $scope.rewardResponsibleList = response.list;
    //         //console.log($scope.rewardResponsibleList);
    //         $scope.editCommunicationDiv = false;
    //       }
    //       else {
    //         $scope.rewardResponsibleList = []
    //       }
    //     });
    // }
    // // $scope.selectedVendor = {};
    // // $scope.selectedPerson = {};

    // $scope.editCommunicationDiv = false;
    // //console.log($scope.selectedPerson)
    // $scope.updateData = function (x) {
    //   for (var i = 0; i < $scope.rewardResponsibleList.length; i++) {
    //     $scope.rewardResponsibleList[i].isupdate = false;
    //   }
    //   //console.log(x);
    //   x.isupdate = true;
    //   $scope.newVendorSelected = {
    //     name: x.vendor.name,
    //     id: x.vendor.id
    //   };
    //   $scope.newPersonSelected = {
    //     name: x.rewardRespDetails.name,
    //     id: x.rewardRespDetails.id
    //   };
    //   $scope.editCommunicationDiv = true;
    // }
    // $scope.updateRewardResponsibleData = function (x) {
    //   $scope.data = {
    //     id: x.id,
    //     giftCode: x.rewards.id,
    //     vendor: {
    //       id: $scope.newVendorSelected.id
    //     },
    //     rewardRespDetails: {
    //       id: $scope.newPersonSelected.id
    //     },
    //   };
    //   //console.log($scope.data);
    //   appService.httpPost($scope.data, "updateRewardResponsibleData")
    //     .then(function (response) {
    //       //console.log("-----------------update RewardResponsibleData ----------------------------");
    //       //console.log(response);
    //       if (response.result) {
    //         $scope.getRewardResponsibleDataList();
    //         snackbar.create("Responsible Person Updated successfully.", 4000, "success");
    //       } else {
    //         snackbar.create("Error Occurred. Please try again.", 5000, "error");
    //       }
    //     });
    // }

    $scope.deleteRewardResponsibleData = function(x) {
        //console.log("inside in deleteRewarResponsible Data");
        $scope.data = {
            id: $scope.selectRemoveResponsible.id,
            isEnable: 0
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "deleteRewardResponsibleData")
            .then(function(response) {
                //console.log("-----------------Delete RewardResponsibleData ----------------------------");
                //console.log(response);
                $("#deleteResPerson")
                    .modal('hide');
                if (response.result) {
                    $scope.getRewardResponsibleDataList();
                    snackbar.create("Responsible Person deleted successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }

    //vendor

    $scope.submitVendor = function(isValid) {
        if ($scope.vendorList != null && $scope.vendorList.length > 0) {
            for (var i = 0; i < $scope.vendorList.length; i++) {
                if ($scope.vendorList[i].name.toLowerCase() == $scope.name.toLowerCase()) {
                    snackbar.create("Vendor already exits", 4000, "error")
                    return;
                }
                if ($scope.vendorList[i].emailId == $scope.emailId) {
                    snackbar.create("Vendor email id already exits", 4000, "error")
                    return;
                }
                if ($scope.vendorList[i].contactNo == $scope.contactNo) {
                    snackbar.create("Vendor mobile number already exits", 4000, "error")
                    return;
                }
            }
        }
        if ($scope.name == null || angular.isUndefined($scope.name) || $scope.name == "") {
            snackbar.create("Please Enter name", 5000, "error");
            return;
        }
        if ($scope.emailId == null || angular.isUndefined($scope.emailId) || $scope.emailId == "") {
            snackbar.create("Please Enter  Email", 5000, "error");
            return;
        }
        if ($scope.contactNo == null || angular.isUndefined($scope.contactNo) || $scope.contactNo == "") {
            snackbar.create("Please Enter Contact Number", 5000, "error");
            return;
        }
        //console.log(isValid);
        if (isValid) {
            $scope.flagAddvendor = true;
            $scope.data = {
                name: $scope.name,
                emailId: $scope.emailId,
                contactNo: $scope.contactNo,
                branch: {
                    // branchId: $rootScope.empDetails.branch.branchId
                    branchId: parseInt($scope.selectBranchId)
                },
                org: {
                    orgId: $rootScope.empDetails.organization.orgId
                }
            };
            //console.log($scope.data);
            appService.httpPost($scope.data, "saveVendorDetails")
                .then(function(response) {
                    //console.log("----------------Vendor  added  succesfully----------------------------");
                    //console.log(response);
                    $scope.flagAddvendor = false;
                    if (response.result) {
                        $scope.clearvenderform();
                        $scope.getVendorList();
                        snackbar.create("Vendor added successfully.", 4000, "success");
                    } else {
                        snackbar.create("Error Occurred. Please try again.", 5000, "error");
                    }

                });
        } else {
            angular.forEach($scope.addVendorForm.$error.required, function(field) {
                field.$setDirty();
            });
        }
    };

    $scope.clearvenderform = function() {
        $scope.name = '';
        $scope.emailId = '';
        $scope.contactNo = '';
        // $scope.addVendorForm.$setPristine();
        // $scope.addVendorForm.$setValidity();
    }

    $scope.deleteVendor = function(x) {
        //console.log("inside in deleteVendor");
        $scope.data = {
            id: $scope.selectRemoveVendor.id,
            isEnable: 0
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "deleteVendorDetails")
            .then(function(response) {
                //console.log("-----------------Delete Vendor ----------------------------");
                //console.log(response);
                $("#deleteVender")
                    .modal('hide');
                if (response.result) {
                    $scope.getVendorList();
                    snackbar.create("Vendor  deleted successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }
    $scope.editVenderDiv = false;
    $scope.updateVendorR = function(x) {
        for (var i = 0; i < $scope.vendorList.length; i++) {
            $scope.vendorList[i].isupdate = false;
        }
        $scope.editVenderDiv = true;
        x.isupdate = true;
    }

    $scope.updateVendor = function(x) {

        $scope.data = {
            id: x.id,
            name: x.name,
            emailId: x.emailId,
            contactNo: x.contactNo,
        };
        //console.log($scope.data);

        appService.httpPost($scope.data, "updateVendorDetails")
            .then(function(response) {
                //console.log("-----------------update Vendor ----------------------------");
                //console.log(response);

                if (response.result) {
                    $scope.clearform();
                    $scope.getVendorList();

                    snackbar.create("Vendor  updated successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }

    $scope.getVendorList = function() {
            $scope.flagEmpDetLoading = true;
            $scope.flagEmpDetNotAvail = false;
            // appService.httpGet("getVendorDetails/" + $scope.loggedInUserBranchId)
            //     .then(function(response) {
            appService.httpGet("getVendorDetails/" + $scope.selectBranchId)
                .then(function(response) {
                    $scope.flagEmpDetLoading = false;
                    //console.log("------------Vendor List--------------");
                    //console.log(response);
                    if (response.result) {
                        if (response.vendorDetails != null && response.vendorDetails.length > 0) {
                            $scope.flagEmpDetNotAvail = false;
                            $scope.vendorList = response.vendorDetails;
                            $scope.editVenderDiv = false;
                            //console.log($scope.vendorList);
                        } else {
                            $scope.vendorList = [];
                            $scope.flagEmpDetNotAvail = true;
                            //console.log($scope.vendorList);

                        }
                    } else {
                        $scope.vendorList = [];
                        $scope.flagEmpDetNotAvail = true;
                        //console.log($scope.vendorList);
                    }
                });
        }
        //Responsible Person

    // $scope.submitPerson = function (isValid) {
    //   if ($scope.personList != null && $scope.personList.length > 0) {
    //     for (var i = 0; i < $scope.personList.length; i++) {
    //       if ($scope.personList[i].name.toLowerCase() == $scope.adminName.toLowerCase()) {
    //         snackbar.create("Admin already exits", 4000, "error")
    //         return;
    //       }
    //       if ($scope.personList[i].emailId == $scope.adminEmailId) {
    //         snackbar.create("Admin email id already exits", 4000, "error")
    //         return;
    //       }
    //       if ($scope.personList[i].contactNo == $scope.adminContactNo) {
    //         snackbar.create("Admin mobile number already exits", 4000, "error")
    //         return;
    //       }
    //     }
    //   }
    //   if ($scope.adminName == null || angular.isUndefined($scope.adminName) || $scope.adminName == "") {
    //     snackbar.create("Please Enter name", 5000, "error");
    //     return;
    //   }
    //   if ($scope.adminEmailId == null || angular.isUndefined($scope.adminEmailId) || $scope.adminEmailId == "") {
    //     snackbar.create("Please Enter  Email", 5000, "error");
    //     return;
    //   }
    //   if ($scope.adminContactNo == null || angular.isUndefined($scope.adminContactNo) || $scope.adminContactNo == "") {
    //     snackbar.create("Please Enter Contact Number", 5000, "error");
    //     return;
    //   }

    //   if (isValid) {
    //     $scope.data = {
    //       name: $scope.adminName,
    //       emailId: $scope.adminEmailId,
    //       contactNo: $scope.adminContactNo,
    //       branch: {
    //         branchId: $rootScope.empDetails.branch.branchId
    //       },
    //       org: {
    //         orgId: $rootScope.empDetails.organization.orgId
    //       },
    //     };
    //     //console.log($scope.data);

    //     appService.httpPost($scope.data, "saveRewardResponsibleSetup")
    //       .then(function (response) {
    //         //console.log("----------------Responsible Person added  succesfully----------------------------");
    //         //console.log(response);


    //         if (response.result) {
    //           $scope.clearform();
    //           $scope.getPersonList();
    //           snackbar.create("Person  added successfully.", 4000, "success");
    //         } else {
    //           snackbar.create("Error Occurred. Please try again.", 5000, "error");
    //         }
    //       });
    //   } else {
    //     angular.forEach($scope.addPersonForm.$error.required, function (field) {
    //       field.$setDirty();
    //     });
    //   }
    // };

    // $scope.clearform = function () {
    //   $scope.adminName = '',
    //     $scope.adminEmailId = '',
    //     $scope.adminContactNo = ''

    // }
    // $scope.deletePerson = function () {
    //   //console.log("inside in deletePerson");
    //   $scope.data = {
    //     id: $scope.selectRemovePerson.id,
    //     isEnable: 0

    //   };
    //   //console.log($scope.data);
    //   appService.httpPost($scope.data, "deleteRewardResponsibleSetup")
    //     .then(function (response) {
    //       //console.log("-----------------Delete Person ----------------------------");
    //       //console.log(response);
    //       $scope.getPersonList();

    //       if (response.result) {
    //         $scope.clearform();
    //         snackbar.create("Vendor  deleted successfully.", 4000, "success");
    //       } else {
    //         snackbar.create("Error Occurred. Please try again.", 5000, "error");
    //       }
    //     });
    // }
    // $scope.editPersonDiv = false;
    // $scope.updatePersonR = function (x) {
    //   for (var i = 0; i < $scope.personList.length; i++) {
    //     $scope.personList[i].isupdate = false;
    //   }
    //   x.isupdate = true;
    //   $scope.editPersonDiv = true;
    // }
    // $scope.updatePerson = function (x) {
    //   $scope.data = {
    //     id: x.id,
    //     name: x.name,
    //     emailId: x.emailId,
    //     contactNo: x.contactNo,

    //   };
    //   //console.log($scope.data);
    //   appService.httpPost($scope.data, "updateRewardResponsibleSetup")
    //     .then(function (response) {
    //       //console.log("-----------------update updateRewardResponsibleSetup----------------------------");
    //       //console.log(response);

    //       if (response.result) {
    //         $scope.clearform();
    //         $scope.getPersonList();
    //         snackbar.create("Responsible person  updated successfully.", 4000, "success");
    //       } else {
    //         snackbar.create("Error Occurred. Please try again.", 5000, "error");
    //       }
    //     });
    // }

    // $scope.getPersonList = function () {
    //   $scope.flagEmpDetLoading = true;
    //   $scope.flagEmpDetNotAvail = false;
    //   appService.httpGet("getRewardResponsibleSetupList/" + $scope.loggedInUserBranchId)
    //     .then(function (response) {
    //       //console.log("------------person List--------------");
    //       //console.log(response);
    //       if (response.result) {
    //         $scope.flagEmpDetLoading = false;
    //         $scope.editPersonDiv = false;
    //         if (response.rewardResponsibleSetupList != null && response.rewardResponsibleSetupList.length > 0) {
    //           $scope.personList = response.rewardResponsibleSetupList;
    //           $scope.flagEmpDetNotAvail = false;
    //         } else {
    //           $scope.personList = [];
    //           $scope.flagEmpDetNotAvail = true;
    //         }
    //       } else {
    //         $scope.personList = [];
    //         $scope.flagEmpDetNotAvail = true;
    //       }
    //     });
    // }

    $scope.showVendorList = function() {
        $scope.getVendorList();
        $("#addVendor")
            .modal("show");
    }
    $scope.setSelectedVendor = function(data) {
            $("#addVendor")
                .modal("hide");
            if ($scope.editCommunicationDiv) {
                $scope.newVendorSelected = data;
                //console.log(data);
            } else {
                $scope.selectedVendor = data;
            }
        }
        //addPerson
    $scope.showPersonList = function() {
        $scope.getAdminList();
        // $scope.getPersonList();
        $("#addPerson")
            .modal("show");
    }
    $scope.setSelectedPerson = function(data) {
        $("#addPerson")
            .modal("hide");
        //console.log($scope.newPersonSelected);
        if ($scope.editCommunicationDiv) {
            $scope.newPersonSelected = data;
        } else {
            $scope.selectedPerson = data;
        }
        //$scope.selectedPerson = data;
    }


    /*------------------------------Category --------------------------*/


    $scope.getcategoryList = function() {
        appService.httpGet("getRewardCategoryList/" + $scope.loggedInUserOrgId)
            .then(function(response) {
                //console.log("------------Category  List--------------");
                //console.log(response);
                if (response.result) {
                    $scope.rewardscatList = response.rewardCategoryList;
                    //console.log($scope.rewardscatList);
                    // $scope.editRewardsDiv = false;
                } else {
                    $scope.rewardscatList = []
                }
            });
    }
    $scope.getcategoryList();


    $scope.saveCategory = function() {
        if ($scope.rewardscatList != null && $scope.rewardscatList.length > 0) {
            for (var i = 0; i < $scope.rewardscatList.length; i++) {
                if ($scope.rewardscatList[i].categoryName == $scope.categoryName) {
                    snackbar.create("Category already exists", 4000, "error")
                    return;
                }
            }
        }
        if ($scope.categoryName == null || angular.isUndefined($scope.categoryName) || $scope.categoryName == "") {
            snackbar.create("Please enter category name", 5000, "error");
            return;
        }
        if ($scope.description == null || angular.isUndefined($scope.description) || $scope.description == "") {
            snackbar.create("Please enter description", 5000, "error");
            return;
        }
        $scope.data = {
            "categoryName": $scope.categoryName,
            "description": $scope.description,
            "org": {
                "orgId": $scope.loggedInUserOrgId
            },
            "branch": {
                "branchId": $scope.loggedInUserBranchId
            },
        };
        //console.log($scope.data);
        $scope.flagAddcategory = true;
        appService.httpPost($scope.data, "addRewardCategory").then(function(response) {
            //console.log(response);
            $scope.flagAddcategory = false;
            if (response.result) {
                $scope.getcategoryList();
                $scope.clearcategory();
                snackbar.create("Category added successfully.", 4000, "success");
            } else {
                snackbar.create("Error Occurred. Please try again.", 5000, "error");
            }
        });
    }

    $scope.clearcategory = function() {
        $scope.categoryName = '';
        $scope.description = '';
    }

    $scope.updateCategorydata = function(x) {
        //console.log(x);
        for (var i = 0; i < $scope.rewardscatList.length; i++) {
            $scope.rewardscatList[i].isupdate = false;
        }
        $scope.editCategoryDiv = true;
        x.isupdate = true;
    }

    $scope.updateCategory = function(x) {
        $scope.data = {
            "id": x.id,
            "categoryName": x.categoryName,
            "description": x.description
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "updateRewardCategory").then(function(response) {
            //console.log(response);
            if (response.result) {
                $scope.getcategoryList();
                snackbar.create("Category updated successfully.", 4000, "success");
            } else {
                snackbar.create("Error Occurred. Please try again.", 5000, "error");
            }
        });
    }

    $scope.deleteCategorypopup = function(x) {
        $scope.selectcategory = x;
        //console.log($scope.selectcategory);
        $("#deletecategory .msg")
            .text("that you want to remove this category from list?");
        $("#deletecategory").modal('show');
    }

    $scope.deleteCategory = function() {
        $scope.flagdeletecategorySpinner = true;
        appService.httpGet("deleteRewardCategory/" + $scope.selectcategory.id).then(function(response) {
            //console.log(response);
            if (response.result) {
                $scope.flagdeletecategorySpinner = false;
                $scope.getcategoryList();
                snackbar.create("Category deleted successfully.", 4000, "success");
            } else {
                snackbar.create("Error Occurred. Please try again.", 5000, "error");
            }
        });
    }

    //$scope.getRewardCategoryList();
    //$scope.getRewardList();
    //$scope.getRewardResponsibleDataList();
    $scope.getVendorList();
    //$scope.getPersonList();


    /*-------Change Admin--------*/

    $scope.showAddEmployeePopup = function() {
        $("#addEmployeeModal")
            .modal({
                backdrop: 'static',
                keyboard: false
            });
        $scope.flagEmpDetLoading = true;
        $scope.flagEmpDetNotAvail = false;
        $scope.errSelectMemberMsg = '';

        // appService.httpGet("getAllEmpList/0/" + $rootScope.empDetails.branch.branchId + "/0")
        //     .then(function(response) {
        appService.httpGet("getAllEmpList/0/" + $scope.selectBranchId + "/0")
            .then(function(response) {
                //console.log("------------EmployeeList--------------");
                //console.log(response);
                $scope.flagEmpDetLoading = false;

                if (response.result) {
                    $scope.employeeList = response.allEmpDetails;
                    for (var i = 0; i < $scope.employeeList.length; i++) {
                        $scope.employeeList[i].fullName = $scope.employeeList[i].firstName + ' ' + $scope.employeeList[i].lastName;
                        //console.log($scope.employeeList[i].isDeactive)
                        if ($scope.employeeList[i].isDeactive == 1) {
                            $scope.employeeList.splice(i, 1);
                        }
                    }
                    //console.log($scope.employeeList);
                    $scope.employeeList = [];
                    for (var i = 0; i < response.allEmpDetails.length; i++) {
                        if ($scope.isMemberExist(response.allEmpDetails[i].empId)) {
                            $scope.employeeList.push(response.allEmpDetails[i]);
                        }
                    }
                } else {
                    $scope.flagEmpDetNotAvail = true;
                }
            });
    }

    $scope.isMemberExist = function(empId) {
        if ($scope.personList.length == 0)
            return true;

        var flag = true;
        for (var i = 0; i < $scope.personList.length; i++) {
            if ($scope.personList[i].empId == empId) {
                flag = false;
            }
        }
        return flag;
    }


    $scope.selectEmployee = function(empChkId) {
        if (angular.element(empChkId)
            .prop('checked') == true)
            angular.element(empChkId)
            .prop("checked", false);
        else
            angular.element(empChkId)
            .prop("checked", true);
    }
    $scope.selectedEmpdata = '';
    $scope.checkTeamEmp = function(x) {
        $scope.selectedEmpdata = x;
        //console.log($scope.selectedEmpdata);
    }

    $scope.getAdminList = function() {
        $scope.flagEmpDetLoading = true;
        $scope.flagEmpDetNotAvail = false;
        //----------Change------------------
        // appService.httpGet("getRewardAdminSetupList/" + $scope.loggedInUserBranchId)
        //     .then(function(response) {
        appService.httpGet("getRewardAdminSetupList/" + $scope.selectBranchId)
            .then(function(response) {
                //console.log("------------person List--------------");
                //console.log(response);
                if (response.result) {
                    $scope.flagEmpDetLoading = false;
                    $scope.editPersonDiv = false;
                    if (response.rewardAdminList != null && response.rewardAdminList.length > 0) {
                        $scope.personList = response.rewardAdminList;
                        $scope.flagEmpDetNotAvail = false;
                    } else {
                        $scope.personList = [];
                        $scope.flagEmpDetNotAvail = true;
                    }
                } else {
                    $scope.personList = [];
                    $scope.flagEmpDetNotAvail = true;
                }
            });
    }

    $scope.addAdminPerson = function() {
        if ($scope.personList != null && $scope.personList.length > 0) {
            for (var i = 0; i < $scope.personList.length; i++) {
                if ($scope.personList[i].empId == $scope.selectedEmpdata.empId) {
                    snackbar.create("Record already exists.", 5000, "error");
                    return;
                }
            }
        }
        $scope.data = {
            "empId": $scope.selectedEmpdata.empId,
            "branchId": parseInt($scope.selectBranchId),
            // "branchId": $rootScope.empDetails.branch.branchId,
            "orgId": $rootScope.empDetails.organization.orgId
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "saveRewardAdminSetup").then(function(response) {
            if (response.result) {
                $("#addEmployeeModal").modal('hide');
                $scope.getAdminList();
                snackbar.create("Admin person added successfully.", 3000, "success");
            } else {
                snackbar.create("Something went wrong. Please try again", 5000, "error");
            }
        });
    }

    /*-----Delete Admin Person-----*/
    $scope.deletePerson = function() {
        //console.log("inside in deletePerson");
        $scope.data = {
            id: $scope.selectRemovePerson.id
        };
        //console.log($scope.data);
        appService.httpPost($scope.data, "deleteRewardAdminSetup")
            .then(function(response) {
                //console.log("-----------------Delete Admin Person ----------------------------");
                //console.log(response);
                if (response.result) {
                    $scope.getAdminList();
                    $("#deletePerson").modal('hide');
                    snackbar.create("Admin person deleted successfully.", 4000, "success");
                } else {
                    snackbar.create("Error Occurred. Please try again.", 5000, "error");
                }
            });
    }


    $scope.showHelpPopup = function() {

        $scope.HELP_DATA = CONST_RESOURCES.HELP_TEXT.REDEEM_SETUP;
        $("#helpModal")
            .modal('show');
    }


}]);