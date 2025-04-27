'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginRegApp.login', ['angular.snackbar']);


app.controller("loginCtrl", ['$scope', 'loginRegService', '$timeout', function ($scope, loginRegService, $timeout) {
    $scope.data = null;
    $scope.username = null;
    $scope.pass = null;
    $scope.flagSpinner = false;
    $scope.flagErrorMsg = false;
    $scope.error = {
        errMgs: ''
    };
    $scope.isEmailVerified = false;

    $scope.loginDet = {
        username: '',
        pass: ''
    }

    $scope.ROLE_TYPE = {
        HR: "HR",
        EVALUATION: 1,
        IMPLEMENTATION: 2,
        ANALYSIS: 3
    };

    $scope.LANG_CONST = {
        EMAIL_ID: 'Email ID/ Mobile Number/ Employee ID',
        PASS: 'Password',
        FORGOT_PASS: 'Forgot Password',
        USERNAME: 'Username',
        ENTR_EML_ID: 'Enter Email ID/ Mobile Number/ Employee ID',
        VERIFY: 'VERIFY',
        LOGIN: 'LOGIN',
        VAL_ENTR_EML_ID: 'Please enter email id/ mobile number',
        VAL_ENTR_VLD_EML_ID: 'Please enter valid email id/ mobile number/ employee id',
        VAL_PLS_ENTR_PASS: 'Please enter password',
        ENTR_PASS: 'Enter Password',
        CHANGE_EML: 'Change Email ID/ Mobile Number/ Employee ID'
    };

    $scope.orgLogoPath = "dist/icons/my_enovation_white@2x_pencil.png";

    $scope.isUrlValid = function (testLink) {
        if (testLink != undefined && testLink != null) {
            var url = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
            var Link = testLink;
            if (Link != "" && Link != undefined && url.test(Link)) {
                if (Link.indexOf("http") != 0) {
                    Link = "http://" + Link;
                }
                return true;
            } else
                return false;
        } else {
            return false;
        }
    };

    //Getting the logo path of the organization by checking the alias name from the url
    $scope.checkOrgLogo = function () {
        var url = window.location.href;
        //below match function provides alias in first index of urlAlias variable
        // var urlAlias = url.match(new RegExp("://" + "(.*)" + '-demo.myenovation'));//for uat
        var urlAlias = url.match(new RegExp("://" + "(.*)" + '.myenovation')); //for Prod
        if (urlAlias != null) {
            loginRegService.httpGet('getorglogo/' + urlAlias[1])
                .then(function (response) {
                    //console.log("-------------Check Org Logo Response-----------");
                    if (response.result) {
                        $scope.orgLogoPath = response.logoPath;
                    } else {
                        $scope.orgLogoPath = '';
                    }
                    //console.log(response);
                });
        }
    }

    $scope.checkOrgLogo();
    $scope.error = {};
    $scope.subscriptionPopDet = {};
    $scope.submitLogin = function () {

        $scope.flagErrorMsg = false;
        $scope.errMgs = '';

        if ($scope.loginDet.pass != '') {
            $scope.data = {
                emailId: $scope.loginDet.username,
                password: $scope.loginDet.pass
            };

            $scope.flagSpinner = true;
            //console.log("Logging");
            //console.log($scope.data);

            loginRegService.httpPost($scope.data, "login")
                .then(function (response) {
                    //console.log("-------------Login Response------------");
                    //console.log(response);
                    $scope.response = response;
                    $scope.flagSpinner = false;
                    if (response.result) {
                        //console.log("Successfull Login");
                        //console.log(response);

                        //Checking that user's organization have completed the setup or not to
                        //strat the work on suggestion
                        if (response.data) {
                            // $scope.subscriptionPopDet = response.data;
                            localStorage.setItem("subscriptionPopDet", JSON.stringify(response.data));
                        }
                        var flagValid = false;
                        if (response.employeeDetails.productOrgConfigDet.isSetupCompleted == 0) {
                            for (var i = 0; i < response.employeeDetails.roles.length; i++) {
                                if (response.employeeDetails.roles[i].name == 'SUPERADMIN') {
                                    flagValid = true;
                                    break;
                                }
                            }
                        } else {
                            flagValid = true;
                        }

                        if (flagValid) {
                            localStorage.setItem("menuData", window.btoa(JSON.stringify(response.menuDataList)));
                            response.employeeDetails.authToken = response.authToken;
                            if (response.employeeDetails.lastName == null)
                                response.employeeDetails.lastName = "";
                            //response.employeeDetails.organization.productOrgConfigList.push({"isSetupCompleted":0});

                            localStorage.setItem("userDet", JSON.stringify(response.employeeDetails));
                            localStorage.setItem("suggStatus", response.masterStatus);
                            sessionStorage.removeItem("selectedSideMenu");
                            sessionStorage.removeItem('sideMenuData');
                            //&& response.employeeDetails.passwordPolicyDetails.isEnable == "Y"
                            if (response.employeeDetails.isPasswordExpired == 1) {
                                //console.log(response.employeeDetails.isPasswordExpired);
                                window.location.href = 'template.html#!/changepassword';

                            } else {

                                if (response.employeeDetails.productOrgConfigDet.isSetupCompleted == 0) {
                                    if ($scope.isUrlValid(response.employeeDetails.organization.portalLink) == true)
                                        window.location.href = response.employeeDetails.organization.portalLink + 'setup-config/index.html';
                                    else
                                        window.location.href = 'setup-config/index.html';
                                } else if (response.employeeDetails.productOrgConfigDet.isSetupCompleted == 1 && response.employeeDetails.dept == null) {
                                    if ($scope.isUrlValid(response.employeeDetails.organization.portalLink) == true)
                                        window.location.href = response.employeeDetails.organization.portalLink + 'template.html#!/updateprofile';
                                    else
                                        window.location.href = 'template.html#!/updateprofile';
                                } else {
                                    if ($scope.isUrlValid(response.employeeDetails.organization.portalLink) == true)
                                        window.location.href = response.employeeDetails.organization.portalLink + 'template.html';
                                    else
                                        window.location.href = 'template.html';
                                }
                            }
                        } else {
                            $scope.flagErrorMsg = true;
                            $scope.error.errMgs = "You are not authorised.";
                        }
                    } else {
                        //console.log("Failed Login");
                        if (response.statusCode == 100) {
                            $scope.flagErrorMsg = true;
                            $scope.error.errMgs = response.reason;
                        } else {
                            $scope.flagErrorMsg = true;
                            $scope.error.errMgs = "Invalid Email ID or Password";
                        }
                    }
                });
        } else {
            $scope.flagErrorMsg = true;
            $scope.error.errMgs = LANG_CONST.VAL_ENTR_VLD_EML_ID;
        }
    };

    $scope.login = function () {
        if ($scope.isEmailVerified) {
            $scope.submitLogin();
        } else {
            $scope.verifyEmail();
        }
    }

    var portalurl = window.location.hostname;
    //console.log(portalurl);
    $scope.verifyEmail = function () {
        //console.log($scope.loginDet.username);
        if ($scope.loginDet.username != '') {
            $scope.flagSpinner = true;
            loginRegService.httpGet('checkloginemail/' + $scope.loginDet.username)
                .then(function (response) {
                    //console.log("--------------Check Login Response----------------");
                    //console.log(response);
                    $scope.flagSpinner = false;
                    if (response.result) {
                        var orgurl = new URL(response.portalLink);
                        var orghost = ((orgurl != null && orgurl != '') ? orgurl.host : "");
                        //console.log("org url=" + orghost);
                        if (checkDomain && portalurl != orghost) {
                            $scope.flagErrorMsg = true;
                            $scope.error.errMgs = $scope.LANG_CONST.VAL_ENTR_VLD_EML_ID;
                            $scope.isEmailVerified = false;
                        } else {
                            $scope.isEmailVerified = true;
                        }

                    } else {
                        $scope.flagErrorMsg = true;
                        if (response.statusCode == 100) {
                            $scope.error.errMgs = response.reason;
                        } else {
                            $scope.error.errMgs = $scope.LANG_CONST.VAL_ENTR_VLD_EML_ID;
                        }

                        $scope.isEmailVerified = false;
                    }
                });
        } else {
            $scope.flagErrorMsg = true;
            $scope.error.errMgs = $scope.LANG_CONST.VAL_ENTR_EML_ID;
        }
    }

    $scope.changeEmail = function () {
        $scope.flagErrorMsg = true;
        $scope.error.errMgs = '';
        $scope.isEmailVerified = false;
    }
    $scope.logout = function () {
        localStorage.removeItem("menuData");
        localStorage.removeItem("userDet");
        localStorage.removeItem("suggStatus");
        localStorage.removeItem("subscriptionPopDet");
        sessionStorage.removeItem('sideMenuData');
        sessionStorage.removeItem('sideMenuStatus');
        sessionStorage.removeItem('selectedSideMenu');
        sessionStorage.removeItem('selectedSideMenu1');
        sessionStorage.removeItem('subscriptionPopShown');
    }
    $scope.logout();
}]);

app.controller("registerCtrl", ['$scope', 'loginRegService', '$window', 'snackbar', '$location', function ($scope, loginRegService, $window, snackbar, $location) {
    //console.log('Enter Registration page');

    $scope.loading = false;
    $scope.mobileRegex = "/^[0-9]{10,10}$/;"
    $scope.reg = {
        name: '',
        email: '',
        productId: 2,
        contactNumber: '',
        designation: '',
        location: '',
        orgName: '',
        subscripId: 1,
        country: '',
        registrationSource: ''
    }
    $scope.getCountry = function () {
        loginRegService.httpGet('getcounterylist')
            .then(function (response) {
                //console.log(response);
                $scope.countries = response.counteryList;
            });
    }
    $scope.getCountry();
    $scope.addCountry = function () {
        $scope.setCountry = true;
    }
    $scope.setCountryName = function (country) {
        $scope.setCountry = false;
        $scope.reg.country = country.countryName;
    }
    $scope.goRegister = function () {
        $window.location.href = "Registration.html";
    }
    $scope.emailVerify = true;
    $scope.submitRegisterForm = function (isValid, res) {
        if (isValid) {
            var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
            if (reg.test(res.email)) {
                $scope.emailVerify = true;
            } else {
                $scope.emailVerify = false;
                return false;
            }
            var data = angular.copy(res);
            if (data.password == data.confPassword) {
                delete data.confPassword;
            } else {
                return false;
            }
            //console.log(data);
            // $scope.registerSpinner = true;
            $scope.submitFormData = data;

            $("#confirmRegModal")
                .modal('show');
        } else {
            snackbar.create("Please fill mandatory fields", 5000, "error");
        }
    }

    $scope.submitRegDet = function () {
        $scope.registerSpinner = true;
        $scope.submitFormData.password = "abc";
        loginRegService.httpPost($scope.submitFormData, 'registration')
            .then(function (response) {
                //console.log(response);
                $scope.registerSpinner = false;
                $("#confirmRegModal")
                    .modal('hide');
                if (response.result) {
                    $('#myModal')
                        .modal('show');
                } else {
                    if (response.resendEmail) {
                        if (response.resendEmail) {
                            $('#reasonMsg')
                                .text(response.reason);
                            $('#reasonModal')
                                .modal('show');
                        } else {
                            $('#reasonMsg')
                                .text(response.reason);
                            $('#reasonModal')
                                .modal('show');
                        }
                    } else {
                        snackbar.create(response.reason, 5000, "error");
                    }
                }
            });
    }

    $scope.resendEmailVerify = true;
    $scope.resend = function (email) {
        //console.log(email)
        var reg = /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!abc.com)(?!xyz.com)(?!pqr.com)(?!rediffmail.com)(?!live.com)(?!outlook.com)(?!me.com)(?!msn.com)(?!ymail.com)([\w-]+\.)+[\w-]{2,4})?$/;
        if (reg.test(email)) {
            $scope.resendEmailVerify = true;
        } else {
            $scope.resendEmailVerify = false;
            return false;
        }
        var data = {
            email: email
        }
        loginRegService.httpPost(data, 'resendemail')
            .then(function (response) {
                //console.log(response);
                $scope.loading = false;
                if (response.result) {
                    $('#resendModal')
                        .modal('hide');
                    $('#resendModal1')
                        .modal('show');
                    snackbar.create(response.reason, 5000, "success");
                    $scope.goHome();
                } else {
                    snackbar.create(response.reason, 5000, "error");
                }
            });

    }

    $scope.getRegistrationSourceList = function () {
        loginRegService.httpGet("test/getRegistrationSourceList")
            .then(function (response) {
                //console.log("----------registrationSourceList List--------------");
                //console.log(response);
                if (response.result)
                    $scope.registrationSourceList = response.regSource;
            });
    }

    $scope.goHome = function () {
        $window.location.href = "login.html";
    }
    $scope.getRegistrationSourceList();
}]);
app.controller("emailVerifyCtrl", ['$scope', 'loginRegService', '$window', 'snackbar', '$location', function ($scope, loginRegService, $window, snackbar, $location) {
    //console.log('Email Verify page');
    $scope.notverify = false;
    $scope.token = getUrlParameterByName("token", window.location.href);
    //console.log($scope.token);
    $scope.verifyEmail = function () {
        var data = {
            token: $scope.token //s.token
        }
        $scope.loading = true;
        loginRegService.httpPost(data, 'verifyemail')
            .then(function (response) {
                //console.log(response);
                $scope.loading = false;
                if (response.result) {
                    $scope.notverify = false;
                    $('#myModal')
                        .modal('show');
                } else {
                    $scope.notverify = true;
                    snackbar.create(response.reason, 5000, "error");
                }
            });
    }

    $scope.verifyEmail();

    $scope.goLogin = function () {
        $window.location.href = "login.html";
    }
}]);

app.controller("employeeVerifyCtrl", ['$scope', 'loginRegService', '$window', 'snackbar', '$location', function ($scope, loginRegService, $window, snackbar, $location) {
    //console.log('Email Verify page');
    $scope.notverify = false;
    $scope.flagInvalid = false;
    $scope.token = getUrlParameterByName("token", window.location.href);
    $scope.setPassword = false;
    //console.log($scope.token);
    $scope.verifyEmail = function () {
        var data = {
            token: $scope.token //s.token
        }
        $scope.loading = true;
        $scope.flagInvalid = false;
        loginRegService.httpPost(data, 'employeeverifyforforgotpassword')
            .then(function (response) {
                //console.log(response);
                $scope.loading = false;
                if (response.result) {
                    $scope.notverify = true;
                    $('#myModal').modal('show');
                    $scope.currentEmail = response.email;
                    $scope.token = response.token;
                    $scope.setPassword = true;
                    $scope.passwordPolicy = response.passwordPolicy;
                    $scope.maxLifeTimeInDays = $scope.passwordPolicy.maxLifeTimeInDays;
                    $scope.minAlphabetic = $scope.passwordPolicy.minAlphabetic;
                    $scope.minNumeric = $scope.passwordPolicy.minNumeric;
                    $scope.minPasswdLength = $scope.passwordPolicy.minPasswdLength;
                    $scope.minSpecialChar = $scope.passwordPolicy.minSpecialChar;
                    $scope.isEnable = response.passwordPolicy.isEnable;

                } else {
                    // $scope.isEnable="N"
                    $scope.flagInvalid = true;
                    if (response.statusCode == 100) {
                        $scope.invalidMsg = response.reason;
                    } else {
                        $scope.invalidMsg = "Invalid Token. Please resend the verification link.";
                    }
                    $scope.notverify = false;
                    //snackbar.create(response.reason, 5000, "error");
                }
            });
    }

    $scope.user = {};
    $scope.submitPassword = function () {
        if ($scope.user.password != $scope.user.confirmPassword) {
            snackbar.create("Password and confirm password not matching.", 5000, "error");
            //console.log("in if submit pass");
            return;
        }

        $scope.flagSubmitPassIndicator = true;
        var data = {
            "emailId": $scope.currentEmail,
            "token": $scope.token,
            "password": $scope.user.password
        };

        //console.log(data);

        if ($scope.isEnable == 'Y' && $scope.policyObj.lowerCaseValid == true && $scope.policyObj.lengthValid == true && $scope.policyObj.specialValid == true && $scope.policyObj.numberValid == true) {
            loginRegService.httpPost(data, 'forgotpassword')
                .then(function (response) {
                    //console.log(response);
                    $scope.flagSubmitPassIndicator = false;
                    if (response.result) {
                        $scope.notverify = true;
                        snackbar.create(response.reason, 5000, "success");
                        if (response.portalLink != null)
                            window.location.href = response.portalLink + 'login.html';
                        else
                            window.location.href = 'login.html';
                    } else {
                        $scope.notverify = false;
                        snackbar.create(response.reason, 5000, "error");
                    }
                });
        } else if ($scope.isEnable == undefined || $scope.isEnable == null || $scope.isEnable == 'N') {
            loginRegService.httpPost(data, 'forgotpassword')
                .then(function (response) {
                    //console.log(response);
                    $scope.flagSubmitPassIndicator = false;
                    if (response.result) {
                        $scope.notverify = true;
                        snackbar.create(response.reason, 5000, "success");
                        if (response.portalLink != null)
                            window.location.href = response.portalLink + 'login.html';
                        else
                            window.location.href = 'login.html';
                    } else {
                        $scope.notverify = false;
                        snackbar.create(response.reason, 5000, "error");
                    }
                });
        } else {
            $scope.flagSubmitPassIndicator = false;
            snackbar.create("Error occurred. Please try again.", 3000, "error");
            return;
        }

    }

    $scope.verifyEmail();
    $scope.setPass = function () {
        $('#myModal')
            .modal('hide');
    }

    $scope.emp = {};
    $scope.checkPassPolicy = function () {
        if ($scope.isEnable == 'Y') {
            $scope.flagPass = true;
        }
        //console.log($scope.flagPass);
        //console.log($scope.user.password);
        $scope.policyObj = {
            small: [],
            capital: [],
            num: [],
            special: [],

        }

        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        if ($scope.user.password.length <= 16) {
            for (var i = 0; i < $scope.user.password.length; i++) {
                if ($scope.user.password[i] >= 0 && $scope.user.password[i] <= 9) {
                    //console.log("number match=" + $scope.user.password[i]);
                    $scope.policyObj.num.push($scope.user.password[i]);

                } else if ($scope.user.password[i] >= 'a' && $scope.user.password[i] <= 'z') {
                    //console.log("lowerCaseLetters match=" + $scope.user.password[i]);
                    $scope.policyObj.small.push($scope.user.password[i])

                } else if ($scope.user.password[i] >= 'A' && $scope.user.password[i] <= 'Z') {
                    //console.log("upperCaseLetters match=" + $scope.user.password[i]);
                    $scope.policyObj.capital.push($scope.user.password[i]);

                } else {
                    //console.log("specialCaseLetters match=" + $scope.user.password[i]);
                    $scope.policyObj.special.push($scope.user.password[i])
                }
            }
        }
        //console.log("policyObj");
        //console.log($scope.policyObj);

        // Validate lowercase letters
        if (($scope.policyObj.small.length + $scope.policyObj.capital.length) >= $scope.minAlphabetic) {
            //console.log("inlowercase");

            $scope.policyObj.lowerCaseValid = true;
        } else {
            $scope.policyObj.lowerCaseValid = false;
        }

        // Validate numbers
        if ($scope.policyObj.num.length >= $scope.minNumeric) {
            $scope.policyObj.numberValid = true;
        } else {
            $scope.policyObj.numberValid = false;
        }
        // Validate spesial
        if ($scope.policyObj.special.length >= $scope.minSpecialChar) {
            $scope.policyObj.specialValid = true;
        } else {
            $scope.policyObj.specialValid = false;
        }
        // Validate length
        if ($scope.user.password.length >= $scope.minPasswdLength) {
            $scope.policyObj.lengthValid = true;
        } else {
            $scope.policyObj.lengthValid = false;
        }
    }

}]);

var compareTo = function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.compareTo = function (modelValue) {
                if ((typeof modelValue !== 'undefined') && modelValue !== '') {
                    return modelValue == scope.otherModelValue;
                }

            };
            scope.$watch("otherModelValue", function (modelValue) {
                if ((typeof modelValue !== 'undefined') && modelValue !== '') {
                    ngModel.$validate();
                }
            });
        }
    };
};

app.directive("compareTo", compareTo);

app.controller("forgotPassCtrl", ['$scope', 'loginRegService', function ($scope, loginRegService) {

    $scope.flagLinkSentSection = false;

    $scope.clearErr = function () {
        $scope.errMsg = "";
    }

    $scope.sendLink = function () {
        if ($scope.emailId != null) {
            $scope.flagSendLinkIndicator = true;
            $scope.clearErr();

            loginRegService.httpGet('isemailverify/' + $scope.emailId)
                .then(function (response) {
                    //console.log("--------------------Send Link Response---------------");
                    //console.log(response);
                    $scope.flagSendLinkIndicator = false;

                    if (response.result) {
                        $scope.flagLinkSentSection = true;
                    } else {
                        $scope.errMsg = "You haven't verified your email Id.Please verify it first.";
                    }
                });
        } else {
            $scope.errMsg = "Please Enter Email ID";
        }
    }
}]);

app.controller("extSurveyCtrl", ['$scope', 'loginRegService', '$window', function ($scope, loginRegService, $window) {
    $scope.windowHeight = $(window)
        .innerHeight();
    var w = angular.element($window);
    $scope.getWindowDimensions = function () {
        return {
            'h': w.height(),
            'w': w.width()
        };
    };
    $scope.$watch($scope.getWindowDimensions, function (newValue, oldValue) {
        $scope.windowHeight = newValue.h;
        $scope.setExtQuesHeightStyle = function () {
            return {
                'height': (newValue.h - 285) + 'px',
            };
        };
    });
    $scope.token = getUrlParameterByName("token", window.location.href);
    $scope.setPassword = false;
    //console.log($scope.token);
    $scope.getExtSurveyDetailsNew = function () {
        var data = {
            token: $scope.token //s.token
        }
        $scope.loading = true;
        $scope.flagInvalid = false;

        loginRegService.httpGet("externalsurvey/test/getTokenVerify/" + $scope.token)
            .then(function (response) {
                //console.log(response);
                $scope.loading = false;
                if (response.result == true) {
                    $scope.userSrvId = response.userSrvId;
                    $scope.userSurveyDetails($scope.token);
                } else {
                    $scope.flagInvalid = true;
                    $scope.invalidMsg = "Invalid Token. Please resend the verification link.";

                }
            });


    }

    //console.log("Survey Controller Loaded....")
    $scope.question = {};
    $scope.extSurveyDetails = {};
    $scope.userSurveyDetails = function (data) {
        loginRegService.httpGet("externalsurvey/test/getExternalSurveyDetails/" + $scope.token)
            .then(function (response) {
                //console.log(response);
                $scope.loading = false;
                if (response.result) {
                    $scope.extSurveyDetails.id = response.extSurveyDetails.id;
                    $scope.extSurveyDet = response.extSurveyDetails;
                    $scope.question = response.extSurveyDetails.surveyQuestions;
                    $scope.question.answeredCount = 0;
                    //console.log($scope.extSurveyDet);
                    // $scope.surveyDetails.surveyOptions=response.extSurveyDetails.surveyOptions
                    ////console.log(question);
                } else {
                    $scope.flagInvalid = true;
                    if (response.statusCode == 100) {
                        $scope.invalidMsg = response.reason;
                    } else {
                        $scope.invalidMsg = "Invalid Token. Please resend the verification link.";
                    }
                    $scope.notverify = false;
                    //snackbar.create(response.reason, 5000, "error");
                }
            });
    }

    $scope.setAnswer = function () {
        var answeredCount = 0;
        for (var i = 0; i < $scope.question.length; i++) {
            for (var j = 0; j < $scope.question[i].surveyOptions.length; j++) {
                if ($scope.question[i].surveyOptions[j].userCheck == 1 || $scope.question[i].surveyOptions[j].userCheck == true) {
                    answeredCount++;
                    break;
                }
            }
        }
        $scope.question.answeredCount = answeredCount;
    }



    $scope.userAnswerSave = function () {
        // $("#myModal").modal('show');
        //console.log("-----------Submit Answer------------");
        //console.log($scope.question);
        $scope.data = [];
        for (var i = 0; i < $scope.question.length; i++) {
            for (var j = 0; j < $scope.question[i].surveyOptions.length; j++) {
                if ($scope.question[i].surveyOptions[j].userCheck == 1 || $scope.question[i].surveyOptions[j].userCheck == true) {
                    $scope.data.push({
                        "extSurveyId": $scope.extSurveyDetails.id,
                        "userSurveyAnswer": {
                            "id": parseInt($scope.userSrvId)
                        },
                        "surveyQuestion": {
                            "id": $scope.question[i].id
                        },
                        "surveyQueOpt": {
                            "id": $scope.question[i].surveyOptions[j].id
                        },
                        "statusId": 4,
                        "isAnswerd": 1,
                        "ratings": $scope.question[i].surveyOptions[j].ratings
                    });
                }
            }


        }
        // //console.log($scope.data);
        loginRegService.httpPost($scope.data, "externalsurvey/test/createExtSurveyAnswers")
            .then(function (response) {
                //console.log(response);
                if (response.result == true) {
                    // snackbar.create("Answer saved successfully.", 4000, "success");
                    $scope.flagSubmit = true;
                    $scope.flagInvalid = true;

                } else {

                }
            });
    }
    $scope.getExtSurveyDetailsNew();
}]);

app.controller("homeCtrl", ['$scope', 'loginRegService', function ($scope, loginRegService) {

    var data = JSON.parse(localStorage.getItem("userDet"));
    if (data != null && data.productOrgConfigDet.isSetupCompleted == 0) {
        window.location.href = 'setup-config/index.html';
    } else if (data != null && data.productOrgConfigDet.isSetupCompleted == 1) {
        window.location.href = 'template.html';
    }

}]);
(function () {
    'use strict';

    angular
        .module('loginRegApp.login')
        .directive('ratingStars', ratingStars);

    /*
     * Directive
     */
    ratingStars.$inject = [];

    function ratingStars() {
        var directive = {
            require: '?ngModel',
            restrict: 'E',
            template: '' +
                '<div ng-class="{ hover: vm.mutable, mutable: vm.mutable }">' +
                '<span ng-if="vm.ratingsPosition === \'left\'" class="ratings-left">({{vm.ratings}})</span>' + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (num) {
                    return '<span class="singleStar"><i ng-mouseover="vm.mouseover(' + num + ')" ' +
                        'ng-mouseout="vm.mouseout()" ' +
                        'ng-click="vm.click()" ' +
                        'ng-class="vm.getClass(' + num + ')" ng-if="' + num + ' <= vm.ratings"' +
                        'class="star hover material-icons"></i><span class="count" ng-if="' + num + ' <= vm.ratings">' + num + ' </span></span>';
                })
                    .join('') +
                '<span ng-if="vm.ratingsPosition === \'right\'" class="ratings-right">({{vm.ratings}})</span>' +
                '</div>',

            scope: {
                ratings: '<',
                averageRating: '<',
                ratingsPosition: '@'
            },
            link: link,
            controller: angular.noop,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function link(scope, element, attrs, ngModel) {
            var vm = scope.vm;
            var myRating = null;
            // Bind data
            vm.mutable = false;

            // Bind functions
            vm.getClass = getClass;
            vm.mouseover = mouseover;
            vm.mouseout = mouseout;
            vm.click = click;

            // Initialise
            init();

            /*
             * Private functions
             */
            function init() {
                vm.mutable = !!ngModel;

                if (ngModel) {
                    ngModel.$render = function () {
                        myRating = ngModel.$viewValue;
                    };
                }
            }

            /*
             * Public functions
             */
            function getClass(num) {
                return {
                    on: vm.averageRating >= num || myRating >= num,
                    'on-half': vm.averageRating > myRating && vm.averageRating < num && vm.averageRating >= num - .75,
                    my: myRating >= num
                };
            }

            function mouseover(rating) {
                if (ngModel) {
                    myRating = rating;
                }
            }

            function mouseout() {
                if (ngModel) {
                    myRating = ngModel.$viewValue;
                }
            }

            function click() {
                if (ngModel) {
                    ngModel.$setViewValue(myRating);
                }
            }
        }
    }
})();


app.controller("launchCtrl", ['$scope', 'loginRegService', '$timeout', '$window', '$rootScope', '$interval', function ($scope, loginRegService, $timeout, $window, $rootScope, $interval) {
    $scope.orgDet = {
        logoPath: '',
        orgName: ''
    };
    // $scope.orgDet.orgName = "Daido Metal";
    //Getting the logo path of the organization by checking the alias name from the url
    $scope.checkOrgLogo = function () {
        var url = window.location.href;
        //below match function provides alias in first index of urlAlias variable
        //var urlAlias = url.match(new RegExp("://" + "(.*)" + '-demo.myenovation')); //for uat
        var urlAlias = url.match(new RegExp("://" + "(.*)" + '.myenovation')); //for Prod
        //var urlAlias = url.match(new RegExp("://aihub." + "(.*)" + '.com')); //for DEV

        console.log(urlAlias);
        if (urlAlias != null) {
            loginRegService.httpGet('getorglogo/' + urlAlias[1])
                .then(function (response) {
                    console.log("-------------Check Org Logo Response-----------");
                    console.log(response);
                    if (response.result) {
                        $scope.orgDet = response;
                    } else {
                        $scope.orgLogoPath = '';
                        $scope.orgDet = {};
                    }
                    //console.log(response);
                });
        }
        $("#LaunchPage1").modal('show');
        $scope.isNewUser = true;
        $scope.isNewUserLoading = false;
    }
    $scope.showLaunchPage = function () {
        $("#LaunchPage1").modal('show');
        $scope.isNewUser = true;
        $scope.isNewUserLoading = false;
    }
    $scope.showLaunchPage();
    /* Alies name wise */
    $scope.getOrgByAlies = function (alies) {
        var flag = false;
        if ($rootScope.empDetails != null && $rootScope.empDetails != undefined) {
            var tmpAlies = $rootScope.empDetails.organization.alies;
            if (tmpAlies != null && !angular.isUndefined(tmpAlies) && tmpAlies == alies) {
                flag = true;
            }
        }
        return flag;
    }
    $scope.isEmpty = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    $scope.windowHeight = $(window)
        .innerHeight();
    var promise;
    $scope.goLive = function () {
        $scope.isNewUserLoading = true;
        promise = $interval(function () {
            $scope.isNewUserLoading = false;
            $scope.isNewUser = false;
        }, 1500);
    }
    $scope.stopInterval = function () {
        // localStorage.setItem('launchPage', 1);
        $interval.cancel(promise);
    };
    $scope.goLoginPage = function () {
        window.location.href = 'skill-matrix';
    }
}]);