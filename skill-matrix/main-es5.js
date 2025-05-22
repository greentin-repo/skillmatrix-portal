(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+Ai/":
    /*!******************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
      \******************************************************************/

    /*! exports provided: AlertComponent */

    /***/
    function Ai(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./alert.component.html */
      "PQEG");
      /* harmony import */


      var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./alert.component.scss */
      "VT1F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert.service */
      "afnz");
      /* harmony import */


      var _alert_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./alert.model */
      "MuVI");

      var AlertComponent = /*#__PURE__*/function () {
        function AlertComponent(router, alertService) {
          _classCallCheck(this, AlertComponent);

          this.router = router;
          this.alertService = alertService;
          this.id = 'default-alert';
          this.fade = true;
          this.alerts = [];
        }

        _createClass(AlertComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // subscribe to new alert notifications
            this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
              _this.alerts = []; // clear alerts when an empty alert is received

              if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                _this.alerts = _this.alerts.filter(function (x) {
                  return x.keepAfterRouteChange;
                }); // remove 'keepAfterRouteChange' flag on the rest

                _this.alerts.forEach(function (x) {
                  return delete x.keepAfterRouteChange;
                });

                return;
              } // add alert to array


              _this.alerts.push(alert); // auto close alert if required


              if (alert.autoClose) {
                setTimeout(function () {
                  return _this.removeAlert(alert);
                }, 3000);
              }
            }); // clear alerts on location change

            this.routeSubscription = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
                _this.alertService.clear(_this.id);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe to avoid memory leaks
            this.alertSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
          }
        }, {
          key: "removeAlert",
          value: function removeAlert(alert) {
            var _this2 = this;

            // check if already removed to prevent error on auto close
            if (!this.alerts.includes(alert)) return;

            if (this.fade) {
              // fade out alert
              this.alerts.find(function (x) {
                return x === alert;
              }).fade = true; // remove alert after faded out

              setTimeout(function () {
                _this2.alerts = _this2.alerts.filter(function (x) {
                  return x !== alert;
                });
              }, 250);
            } else {
              // remove alert
              this.alerts = this.alerts.filter(function (x) {
                return x !== alert;
              });
            }
          }
        }, {
          key: "cssClass",
          value: function cssClass(alert) {
            var _alertTypeClass;

            if (!alert) return;
            var classes = ['alert', 'alert-dismissable'];
            var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _alert_model__WEBPACK_IMPORTED_MODULE_6__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
            classes.push(alertTypeClass[alert.type]);

            if (alert.fade) {
              classes.push('fade');
            }

            return classes.join(' ');
          }
        }]);

        return AlertComponent;
      }();

      AlertComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      };

      AlertComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        fade: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], AlertComponent);
      /***/
    },

    /***/
    "/UhJ":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/dateRangePicker/dateRangePicker.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UhJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <h2>Angular 11 Date Range Picker Demo</h2> -->\r\n\r\n<div class=\"dateRangePicker\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <ul>\r\n                <li class=\"dateBlock\" [ngClass]=\"(selectedDateType == '1M') ? 'dateBlockactive' : ''\">\r\n                    <div class=\"dateBlock-inner\" (click)=\"setDate('1M')\">1M</div>\r\n                </li>\r\n                <li class=\"dateBlock\" [ngClass]=\"(selectedDateType == '6M') ? 'dateBlockactive' : ''\">\r\n                    <div class=\"dateBlock-inner\" (click)=\"setDate('6M')\">6M</div>\r\n                </li>\r\n                <li class=\"dateBlock\" [ngClass]=\"(selectedDateType == '1Y') ? 'dateBlockactive' : ''\">\r\n                    <div class=\"dateBlock-inner\" (click)=\"setDate('1Y')\">1Y</div>\r\n                </li>\r\n                <li class=\"dateBlock\" [ngClass]=\"(selectedDateType == '2Y') ? 'dateBlockactive' : ''\">\r\n                    <div class=\"dateBlock-inner\" (click)=\"setDate('2Y')\">2Y</div>\r\n                </li>\r\n                <li class=\"dateBlock customDateBlock\" [ngClass]=\"(isSet) ? 'noBg' : ''\">\r\n                    <div class=\"dateBlock-inner\" (click)=\"setDate('')\" *ngIf=\"!isSet\">Custom</div>\r\n                    <div class=\"pr\" *ngIf=\"isSet\">\r\n                        <mat-form-field appearance=\"fill\" panelClass=\"select-picker\">\r\n                            <mat-label>Enter a date range</mat-label>\r\n                            <mat-date-range-input [rangePicker]=\"picker\" [max]=\"maxDate\">\r\n                                <input matStartDate placeholder=\"Start date\" (dateChange)=\"selectCustomDate($event, '')\" [value]=\"selectedDate.fromDate\" (keydown)=\"false\">\r\n                                <input matEndDate placeholder=\"End date\" (dateChange)=\"selectCustomDate('', $event)\" [value]=\"selectedDate.toDate\" (keydown)=\"false\">\r\n                            </mat-date-range-input>\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-date-range-picker #picker></mat-date-range-picker>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- <div class=\"col-4 m-auto  profileInfo\">\r\n            <div class=\"navbarContainer navbar-collapse\" id=\"navbarContent\">\r\n                <ul class=\"navbar-nav ml-auto\">\r\n                    <li class=\"nav-item header-notification\" ngbDropdown>\r\n                        <a class=\"nav-link\" tabindex=\"0\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\r\n                            <div class=\"userProfile\">\r\n                                <img src=\"assets/images/Profile.png\" class=\"img-radius\" />\r\n                                <span class=\"userName\">{{loggedInEmpDet.firstName || ''}} {{loggedInEmpDet.lastName }}</span>\r\n                            </div>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu show-notification profile-notification active1\">\r\n                            <a ngbDropdownItem href=\"javascript:;\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>\r\n\r\n<!-- <hr />\r\n<pre>From date model: {{ fromDate | json }}</pre>\r\n<pre>To date model: {{ toDate | json }}</pre> -->";
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Freelancing\Angular\skill_matrix_mi\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0iJm":
    /*!**************************************************************************!*\
      !*** ./src/app/theme/shared/components/loginInfo/loginInfo.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LoginInfoComponent */

    /***/
    function iJm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginInfoComponent", function () {
        return LoginInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loginInfo_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loginInfo.component.html */
      "FunQ");
      /* harmony import */


      var _loginInfo_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loginInfo.component.scss */
      "cvOk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/auth/http.service */
      "bnLG"); // import { ActivatedRoute } from '@angular/router';


      var LoginInfoComponent = /*#__PURE__*/function () {
        function LoginInfoComponent(config, titleService, router, httpService) {
          _classCallCheck(this, LoginInfoComponent);

          this.titleService = titleService;
          this.router = router;
          this.httpService = httpService;
          this.menuData = [];
        }

        _createClass(LoginInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));

            if (this.loggedInEmpDet && this.loggedInEmpDet.profilePic) {} else {
              this.loggedInEmpDet.profilePic = 'assets/images/Profile.png';
            }

            var name = '';
            name += this.loggedInEmpDet.firstName ? this.loggedInEmpDet.firstName : '';
            name += this.loggedInEmpDet.firstName && this.loggedInEmpDet.lastName ? ' ' : '';
            name += this.loggedInEmpDet.lastName ? this.loggedInEmpDet.lastName : '';
            this.loggedInEmpDet.fullName = name; // this.title = this.titleService.getTitle();;
            // this.title = document.title;

            console.log(this.loggedInEmpDet);
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigateByUrl('../login.html');
          }
        }, {
          key: "ViewProfile",
          value: function ViewProfile() {
            this.router.navigateByUrl('../template.html#!/');
          }
        }]);

        return LoginInfoComponent;
      }();

      LoginInfoComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }];
      };

      LoginInfoComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      LoginInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loginInfo',
        template: _raw_loader_loginInfo_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        styles: [_loginInfo_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]])], LoginInfoComponent);
      /***/
    },

    /***/
    "1zfU":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/topBar/topBar.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function zfU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".topBar {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n}\n.topBar .col-md-12 .title-color {\n  color: #7044cd;\n}\n.profileInfo {\n  text-align: right;\n}\n.profileInfo .userPic img {\n  max-width: 100%;\n  height: 30px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n.profileInfo .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n.profileInfo .logoutImg .feather {\n  padding: 5px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.navbarContainer .navbar-nav {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n}\n.navbarContainer .navbar-nav li > a {\n  font-size: 16px;\n  padding: 0 0.6rem;\n  color: #7044cd;\n}\n.navbarContainer .navbar-nav li .userProfile {\n  display: inline-block;\n}\n.navbarContainer .navbar-nav li .userProfile i {\n  font-size: 10px;\n  margin-left: 10px;\n}\n.navbarContainer .navbar-nav li .userProfile img {\n  max-width: 100%;\n  height: 40px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.navbarContainer .navbar-nav li .userProfile .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n.navbarContainer .navbar-nav li.header-notification {\n  perspective: 1000px;\n  z-index: 99;\n  position: relative;\n  cursor: pointer;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification {\n  background: #fff;\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  visibility: visible;\n  transform: translateY(20px);\n  padding: 0px;\n  z-index: 999;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification a {\n  border-radius: 5px;\n  padding: 0.7em 20px;\n  display: block;\n  text-decoration: none;\n  font-size: 15px;\n  padding-left: 0;\n  color: #222;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:hover {\n  background-color: #f6fcff;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification i {\n  font-size: 15px;\n  margin-left: 0;\n  margin-right: 5px;\n}\n.navbarContainer .navbar-nav li.header-notification .profile-notification.active1:before {\n  content: \"\";\n  border: 10px solid transparent;\n  border-left-color: #fff;\n  border-top-color: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: -9px;\n  right: 20px;\n  box-shadow: -30px -11px 35px 0 rgba(0, 0, 0, 0.25);\n  transform: rotate(45deg);\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRvcEJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNRO0VBQ0ksY0FBQTtBQUNaO0FBSUE7RUFDSSxpQkFBQTtBQURKO0FBR1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEWjtBQUlJO0VBQ0ksZ0RBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFGUjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBSFo7QUFTSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQU5SO0FBUVk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTmhCO0FBUVk7RUFDSSxxQkFBQTtBQU5oQjtBQU9nQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUxwQjtBQU9nQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUxwQjtBQU9nQjtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBTHBCO0FBUVk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFOaEI7QUFPZ0I7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTHBCO0FBTW9CO0VBSUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVB4QjtBQUZ3QjtFQUNJLHlCQUFBO0FBSTVCO0FBTTRCO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSmhDO0FBS2dDO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSHBDO0FBS2dDO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBSHBDO0FBUW9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU54QjtBQVN3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQVA1QiIsImZpbGUiOiJ0b3BCYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wQmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAuY29sLW1kLTEye1xyXG4gICAgICAgIC50aXRsZS1jb2xvcntcclxuICAgICAgICAgICAgY29sb3I6IzcwNDRjZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGVJbmZvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLnVzZXJQaWMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLmxvZ291dEltZyB7XHJcbiAgICAgICAgLmZlYXRoZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhckNvbnRhaW5lciB7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnVzZXJQcm9maWxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnVzZXJOYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmhlYWRlci1ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtbm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiKDAgMCAwIC8gMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmY2ZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW0gMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdChbaHJlZl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KFt0YWJpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zMHB4IC0xMXB4IDM1cHggMCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "2T53":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/image-cropper/component/image-cropper.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function T53(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n  position: relative;\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n  padding: 5px;\n  text-align: center;\n}\n:host > div {\n  width: 100%;\n  position: relative;\n}\n:host > div img.source-image {\n  max-width: 100%;\n  max-height: 100%;\n  transform-origin: center;\n}\n:host .overlay {\n  position: absolute;\n  pointer-events: none;\n  touch-action: none;\n  outline: white solid 100vw;\n  top: 0;\n  left: 0;\n}\n:host .cropper {\n  position: absolute;\n  display: flex;\n  color: #53535C;\n  background: transparent;\n  outline: rgba(255, 255, 255, 0.3) solid 100vw;\n  outline: var(--cropper-outline-color, rgba(255, 255, 255, 0.3)) solid 100vw;\n  touch-action: none;\n}\n@media (orientation: portrait) {\n  :host .cropper {\n    outline-width: 100vh;\n  }\n}\n:host .cropper:after {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  border: dashed 1px;\n  opacity: 0.75;\n  color: inherit;\n  z-index: 1;\n}\n:host .cropper .move {\n  width: 100%;\n  cursor: move;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n:host .cropper:focus .move {\n  border-color: dodgerblue;\n  border-width: 2px;\n}\n:host .cropper .resize {\n  position: absolute;\n  display: inline-block;\n  line-height: 6px;\n  padding: 8px;\n  opacity: 0.85;\n  z-index: 1;\n}\n:host .cropper .resize .square {\n  display: inline-block;\n  background: #53535C;\n  width: 6px;\n  height: 6px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: content-box;\n}\n:host .cropper .resize.topleft {\n  top: -12px;\n  left: -12px;\n  cursor: nwse-resize;\n}\n:host .cropper .resize.top {\n  top: -12px;\n  left: calc(50% - 12px);\n  cursor: ns-resize;\n}\n:host .cropper .resize.topright {\n  top: -12px;\n  right: -12px;\n  cursor: nesw-resize;\n}\n:host .cropper .resize.right {\n  top: calc(50% - 12px);\n  right: -12px;\n  cursor: ew-resize;\n}\n:host .cropper .resize.bottomright {\n  bottom: -12px;\n  right: -12px;\n  cursor: nwse-resize;\n}\n:host .cropper .resize.bottom {\n  bottom: -12px;\n  left: calc(50% - 12px);\n  cursor: ns-resize;\n}\n:host .cropper .resize.bottomleft {\n  bottom: -12px;\n  left: -12px;\n  cursor: nesw-resize;\n}\n:host .cropper .resize.left {\n  top: calc(50% - 12px);\n  left: -12px;\n  cursor: ew-resize;\n}\n:host .cropper .resize-bar {\n  position: absolute;\n  z-index: 1;\n}\n:host .cropper .resize-bar.top {\n  top: -11px;\n  left: 11px;\n  width: calc(100% - 22px);\n  height: 22px;\n  cursor: ns-resize;\n}\n:host .cropper .resize-bar.right {\n  top: 11px;\n  right: -11px;\n  height: calc(100% - 22px);\n  width: 22px;\n  cursor: ew-resize;\n}\n:host .cropper .resize-bar.bottom {\n  bottom: -11px;\n  left: 11px;\n  width: calc(100% - 22px);\n  height: 22px;\n  cursor: ns-resize;\n}\n:host .cropper .resize-bar.left {\n  top: 11px;\n  left: -11px;\n  height: calc(100% - 22px);\n  width: 22px;\n  cursor: ew-resize;\n}\n:host .cropper.rounded {\n  outline-color: transparent;\n}\n:host .cropper.rounded:after {\n  border-radius: 100%;\n  box-shadow: 0 0 0 100vw rgba(255, 255, 255, 0.3);\n  box-shadow: 0 0 0 100vw var(--cropper-outline-color, rgba(255, 255, 255, 0.3));\n}\n@media (orientation: portrait) {\n  :host .cropper.rounded:after {\n    box-shadow: 0 0 0 100vh rgba(255, 255, 255, 0.3);\n    box-shadow: 0 0 0 100vh var(--cropper-outline-color, rgba(255, 255, 255, 0.3));\n  }\n}\n:host .cropper.rounded .move {\n  border-radius: 100%;\n}\n:host.disabled .cropper .resize,\n:host.disabled .cropper .resize-bar,\n:host.disabled .cropper .move {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFHWjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUVSO0FBQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDJFQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBUko7SUFTUSxvQkFBQTtFQUlWO0FBQ0Y7QUFIUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBS1o7QUFIUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUFLWjtBQUZZO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQUloQjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBR1o7QUFGWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7QUFJaEI7QUFGWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFGWTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBSWhCO0FBRlk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSWhCO0FBRlk7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFGWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFJaEI7QUFGWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSWhCO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUZZO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUZZO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUloQjtBQURRO0VBQ0ksMEJBQUE7QUFHWjtBQUZZO0VBQ0ksbUJBQUE7RUFDQSxnREFBQTtFQUNBLDhFQUFBO0FBSWhCO0FBSGdCO0VBSko7SUFLUSxnREFBQTtJQUNBLDhFQUFBO0VBTWxCO0FBQ0Y7QUFKWTtFQUNJLG1CQUFBO0FBTWhCO0FBQVk7OztFQUdJLGFBQUE7QUFFaEIiLCJmaWxlIjoiaW1hZ2UtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgPmRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGltZy5zb3VyY2UtaW1hZ2Uge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiB3aGl0ZSBzb2xpZCAxMDB2dztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5jcm9wcGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogIzUzNTM1QztcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgc29saWQgMTAwdnc7XHJcbiAgICAgICAgb3V0bGluZTogdmFyKC0tY3JvcHBlci1vdXRsaW5lLWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykpIHNvbGlkIDEwMHZ3O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcclxuICAgICAgICBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgICBvdXRsaW5lLXdpZHRoOiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogZGFzaGVkIDFweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjc1O1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vdmUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAubW92ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVzaXplIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjg1O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAuc3F1YXJlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzUzNUM7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRvcGxlZnQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYudG9wcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbmVzdy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvdHRvbXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG53c2UtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuYm90dG9tIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ib3R0b21sZWZ0IHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbmVzdy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc2l6ZS1iYXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTExcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmJvdHRvbSB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0xMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTFweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbnMtcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGVmdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjJweCk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZXctcmVzaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYucm91bmRlZCB7XHJcbiAgICAgICAgICAgIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2dyByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMDB2dyAodmFyKC0tY3JvcHBlci1vdXRsaW5lLWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykpKTtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTAwdmggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwMHZoICh2YXIoLS1jcm9wcGVyLW91dGxpbmUtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tb3ZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAuY3JvcHBlciB7XHJcbiAgICAgICAgICAgIC5yZXNpemUsXHJcbiAgICAgICAgICAgIC5yZXNpemUtYmFyLFxyXG4gICAgICAgICAgICAubW92ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "2U/g":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\"\r\n    *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\r\n    <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\r\n</div>\r\n<ng-template #mainHeader>\r\n    <div class=\"m-header p-l-0\" [ngClass]=\"{'collapseSideBar':screenDet.hideLabel}\"\r\n        [ngStyle]=\"screenDet.hideLabel && {'width':'70px','padding':'0px'}\">\r\n        <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\r\n        <a href=\"javascript:\" (click)=\"navCollapse()\" class=\"b-brand\">\r\n            <img id=\"main-logo\" src=\"assets/images/login/Logo.png\" alt=\"\" class=\"orgLogo\" />\r\n            <img src=\"assets/images/login/my_enovation_white@2x_pencil.png\" alt=\"\" class=\"orgLogo mobileOrgLogo\" />\r\n            <!-- <img id=\"main-logo\" src=\"assets/images/login/Background.png\" alt=\"\" class=\"orgLogo\" />\r\n    <p class=\"productName\" *ngIf=\"!screenDet.hideLabel\">myeNovation</p> -->\r\n        </a>\r\n        <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i\r\n                class=\"feather icon-more-vertical\"></i></a>\r\n    </div>\r\n    <!-- <div class=\"collapse navbar-collapse topNavBar\" [style.display]=\"this.collapseStyle\">\r\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\r\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\r\n  </div> -->\r\n</ng-template>";
      /***/
    },

    /***/
    "2WdO":
    /*!*******************************************************************************************!*\
      !*** ./src/app/theme/shared/components/assessessment-detail-modal/assessment.constant.ts ***!
      \*******************************************************************************************/

    /*! exports provided: CONSTANT */

    /***/
    function WdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CONSTANT", function () {
        return CONSTANT;
      });

      var CONSTANT = {
        SELF_ASSESSMENT: 'SELF_ASSESSMENT',
        MCQ_ASSESSMENT: 'MCQ',
        TEXT: 'TEXT',
        RATING: 'RATING',
        RADIO: 'RADIO',
        CHECKBOX: 'CHECKBOX',
        TEXTAREA: 'TEXTAREA',
        AlphabetLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        TRAINING_FEEDBACK: 'TRAINING_FEEDBACK',
        CHARTER_TYPE: 'CHARTER_TYPE',
        OE: 'OE',
        APQP: 'APQP',
        ALDP: 'ALDP'
      };
      /***/
    },

    /***/
    "3owz":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/topBar/topBar.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function owz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"topBar row m-0\">\r\n    <div class=\"col-md-12 m-auto\">\r\n        <h2 class=\"m-auto title-color\"> {{title}}</h2>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"topBar row m-0\">\r\n    <div class=\"col-md-8 m-auto\">\r\n        <h2 class=\"m-auto\"> {{title}}</h2>\r\n    </div>\r\n    <div class=\"col-4 m-auto  profileInfo\">\r\n        <div class=\"navbarContainer navbar-collapse\" id=\"navbarContent\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item header-notification\" ngbDropdown>\r\n                    <a class=\"nav-link\" tabindex=\"0\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\r\n                        <div class=\"userProfile\">\r\n                            <img src=\"assets/images/Profile.png\" class=\"img-radius\" />\r\n                            <span class=\"userName\">{{loggedInEmpDet.firstName || ''}} {{loggedInEmpDet.lastName }}</span>\r\n                        </div>\r\n                    </a>\r\n                    <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\" class=\"dropdown-menu show-notification profile-notification active1\">\r\n                        <a ngbDropdownItem href=\"javascript:;\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div> -->";
      /***/
    },

    /***/
    "7J/v":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"navbar-wrapper\"\r\n    [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n    <div>\r\n        <app-loginInfo></app-loginInfo>\r\n    </div>\r\n    <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\r\n    <div class=\"version\"><span class=\"version-align\"> {{version}}</span></div>\r\n</div>";
      /***/
    },

    /***/
    "7jS0":
    /*!**************************************************!*\
      !*** ./src/app/theme/shared/components/index.ts ***!
      \**************************************************/

    /*! exports provided: AlertModule, BreadcrumbModule, MY_FORMATS, DateRangePickerModule, TopBarModule, AlertService, Alert, AlertType, PaginationModule, LoadingModule, GlobalLoaderModule, LoginInfoModule, AssessessmentDetailModalModule, CertificateModule */

    /***/
    function jS0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./alert/alert.module */
      "N4L5");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"];
      });
      /* harmony import */


      var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.module */
      "z0HF");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbModule"];
      });
      /* harmony import */


      var _dateRangePicker_dateRangePicker_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dateRangePicker/dateRangePicker.module */
      "9paE");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
        return _dateRangePicker_dateRangePicker_module__WEBPACK_IMPORTED_MODULE_2__["MY_FORMATS"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DateRangePickerModule", function () {
        return _dateRangePicker_dateRangePicker_module__WEBPACK_IMPORTED_MODULE_2__["DateRangePickerModule"];
      });
      /* harmony import */


      var _topBar_topBar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./topBar/topBar.module */
      "eB9G");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TopBarModule", function () {
        return _topBar_topBar_module__WEBPACK_IMPORTED_MODULE_3__["TopBarModule"];
      });
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./alert/alert.service */
      "afnz");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"];
      });
      /* harmony import */


      var _alert_alert_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert/alert.model */
      "MuVI");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return _alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return _alert_alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"];
      });
      /* harmony import */


      var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pagination/pagination.module */
      "PRC2");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
        return _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"];
      });
      /* harmony import */


      var _loading_loading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./loading/loading.module */
      "fsW/");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
        return _loading_loading_module__WEBPACK_IMPORTED_MODULE_7__["LoadingModule"];
      });
      /* harmony import */


      var _globalLoader_globalLoader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./globalLoader/globalLoader.module */
      "H3BY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "GlobalLoaderModule", function () {
        return _globalLoader_globalLoader_module__WEBPACK_IMPORTED_MODULE_8__["GlobalLoaderModule"];
      });
      /* harmony import */


      var _loginInfo_loginInfo_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./loginInfo/loginInfo.module */
      "f5zd");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginInfoModule", function () {
        return _loginInfo_loginInfo_module__WEBPACK_IMPORTED_MODULE_9__["LoginInfoModule"];
      });
      /* harmony import */


      var _assessessment_detail_modal_assessessment_detail_modal_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./assessessment-detail-modal/assessessment-detail-modal.module */
      "h3AA");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AssessessmentDetailModalModule", function () {
        return _assessessment_detail_modal_assessessment_detail_modal_module__WEBPACK_IMPORTED_MODULE_10__["AssessessmentDetailModalModule"];
      });
      /* harmony import */


      var _certificate_certificate_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./certificate/certificate.module */
      "MdYY");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CertificateModule", function () {
        return _certificate_certificate_module__WEBPACK_IMPORTED_MODULE_11__["CertificateModule"];
      });
      /***/

    },

    /***/
    "8cSO":
    /*!*************************************************************!*\
      !*** ./src/app/shared/directive/custom-directive.module.ts ***!
      \*************************************************************/

    /*! exports provided: CustomDirectiveModule */

    /***/
    function cSO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDirectiveModule", function () {
        return CustomDirectiveModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _custom_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./custom.directive */
      "pzKI");

      var CustomDirectiveModule = function CustomDirectiveModule() {
        _classCallCheck(this, CustomDirectiveModule);
      };

      CustomDirectiveModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_custom_directive__WEBPACK_IMPORTED_MODULE_3__["CustomDirective"]],
        exports: [_custom_directive__WEBPACK_IMPORTED_MODULE_3__["CustomDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], CustomDirectiveModule);
      /***/
    },

    /***/
    "8tiA":
    /*!***************************************************************************************************!*\
      !*** ./src/app/theme/shared/components/assessessment-detail-modal/employee-assessment.service.ts ***!
      \***************************************************************************************************/

    /*! exports provided: EmployeeAssessmentService */

    /***/
    function tiA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeAssessmentService", function () {
        return EmployeeAssessmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/auth/auth.service */
      "jGGy");
      /* harmony import */


      var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/auth/http.service */
      "bnLG");

      var EmployeeAssessmentService = /*#__PURE__*/function () {
        function EmployeeAssessmentService(httpService, authService) {
          _classCallCheck(this, EmployeeAssessmentService);

          this.httpService = httpService;
          this.authService = authService;
        }

        _createClass(EmployeeAssessmentService, [{
          key: "getSinglEmpAssessment",
          value: function getSinglEmpAssessment(url) {
            return this.httpService.getMethod(url);
          }
        }]);

        return EmployeeAssessmentService;
      }();

      EmployeeAssessmentService.ctorParameters = function () {
        return [{
          type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      EmployeeAssessmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], EmployeeAssessmentService);
      /***/
    },

    /***/
    "9O41":
    /*!********************************************************************!*\
      !*** ./src/app/theme/shared/components/topBar/topBar.component.ts ***!
      \********************************************************************/

    /*! exports provided: TopBarComponent */

    /***/
    function O41(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
        return TopBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_topBar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./topBar.component.html */
      "3owz");
      /* harmony import */


      var _topBar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./topBar.component.scss */
      "1zfU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // import { ActivatedRoute } from '@angular/router';


      var TopBarComponent = /*#__PURE__*/function () {
        function TopBarComponent(config, titleService, router) {
          _classCallCheck(this, TopBarComponent);

          this.titleService = titleService;
          this.router = router;
          this.loggedInEmpDet = {};
        }

        _createClass(TopBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet')); // this.title = this.titleService.getTitle();;
            // this.title = document.title;
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigateByUrl('../login.html');
          }
        }]);

        return TopBarComponent;
      }();

      TopBarComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      TopBarComponent.propDecorators = {
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-topBar',
        template: _raw_loader_topBar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        styles: [_topBar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], TopBarComponent);
      /***/
    },

    /***/
    "9paE":
    /*!***********************************************************************************!*\
      !*** ./src/app/theme/shared/components/dateRangePicker/dateRangePicker.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: MY_FORMATS, DateRangePickerModule */

    /***/
    function paE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
        return MY_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateRangePickerModule", function () {
        return DateRangePickerModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _dateRangePicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dateRangePicker.component */
      "m9KD");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");

      var MY_FORMATS = {
        parse: {
          dateInput: 'YYYY-MM-DD'
        },
        display: {
          dateInput: 'YYYY-MM-DD',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      };

      var DateRangePickerModule = function DateRangePickerModule() {
        _classCallCheck(this, DateRangePickerModule);
      };

      DateRangePickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateModule"]],
        declarations: [_dateRangePicker_component__WEBPACK_IMPORTED_MODULE_3__["DateRangePickerComponent"]],
        exports: [_dateRangePicker_component__WEBPACK_IMPORTED_MODULE_3__["DateRangePickerComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MomentDateModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]],
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_FORMATS"],
          useValue: MY_FORMATS
        }]
      })], DateRangePickerModule);
      /***/
    },

    /***/
    "9ukd":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/certificate/certificate.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ukd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-body p-0 text-center\">\r\n            <div class=\"certImgDiv\">\r\n                <span id=\"certModalBody\" style=\"display: inline-block;width: calc(100% - 50%);position: relative;\">\r\n                    <img src=\"assets\\images\\certificate\\Certificate.png\" alt=\"\" class=\"certImg\" />\r\n                    <p class=\"m-0 empName\">{{selectedDet.empName}}</p>\r\n                    <p class=\"m-0 levelName\">{{selectedDet.levelName}}</p>\r\n                    <p class=\"m-0 workStation\">{{selectedDet.workstationName}}</p>\r\n                    <p class=\"m-0 cellName\">{{selectedDet.lineName}}</p>\r\n                    <p class=\"m-0 plantName\">{{selectedDet.branchName}}</p>\r\n                    <p class=\"m-0 date\">{{selectedDet.updatedDate | date: 'dd-MM-yyyy'}}</p>\r\n                </span>\r\n            </div>\r\n            <div class=\"row text-center p-2\">\r\n                <div class=\"col\">\r\n                    <button class=\"btn Downloadbtn submitBtn\" type=\"button\" (click)=\"downloadCertificate()\"\r\n                        [disabled]=\"downloadLoader\">\r\n                        <span *ngIf=\"downloadLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"downloadLoader\" class=\"load-text\"> Loading...</span>\r\n                        <span *ngIf=\"!downloadLoader\" class=\"btn-text\">Download</span>\r\n                    </button> &nbsp;&nbsp;\r\n                    <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\" [disabled]=\"downloadLoader\">\r\n                        Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "A2he":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function A2he(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "Afc9":
    /*!******************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Afc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Ap1d":
    /*!**************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NavCollapseComponent */

    /***/
    function Ap1d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
        return NavCollapseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_collapse_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-collapse.component.html */
      "OE1v");
      /* harmony import */


      var _nav_collapse_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-collapse.component.scss */
      "EwA0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../navigation */
      "S8Sc");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");

      var NavCollapseComponent = /*#__PURE__*/function () {
        function NavCollapseComponent() {
          _classCallCheck(this, NavCollapseComponent);

          this.visible = false;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_6__["NextConfig"].config;
          this.themeLayout = this.nextConfig.layout;
        }

        _createClass(NavCollapseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navCollapse",
          value: function navCollapse(e) {
            e.preventDefault();
            this.visible = !this.visible;
            var parent = e.target;

            if (this.themeLayout === 'vertical') {
              parent = parent.parentElement;
            }

            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
              }
            }

            var firstParent = parent.parentElement;
            var preParent = parent.parentElement.parentElement;

            if (firstParent.classList.contains('pcoded-hasmenu')) {
              do {
                firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

                firstParent = firstParent.parentElement.parentElement.parentElement;
              } while (firstParent.classList.contains('pcoded-hasmenu'));
            } else if (preParent.classList.contains('pcoded-submenu')) {
              do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
              } while (preParent.classList.contains('pcoded-submenu'));
            }

            parent.classList.toggle('pcoded-trigger');
          }
        }]);

        return NavCollapseComponent;
      }();

      NavCollapseComponent.ctorParameters = function () {
        return [];
      };

      NavCollapseComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NavCollapseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-collapse',
        template: _raw_loader_nav_collapse_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(-100%)',
          display: 'block'
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(0%)'
        }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
          transform: 'translateY(-100%)'
        }))])])],
        styles: [_nav_collapse_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavCollapseComponent);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone-error */
      "+Vou");
      /* harmony import */


      var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiUrl: 'http://gtdev.greentinsolutions.com:8085/spicer/' //Dev
        // apiUrl: 'http://10.37.61.251:8080/enovation-prod/'   //Prod
        apiUrl: 'http://91.108.110.98:8080/spicer/'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // Included with Angular CLI.

      /***/
    },

    /***/
    "C/zn":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/shared/components/globalLoader/globalLoader.component.ts ***!
      \********************************************************************************/

    /*! exports provided: GlobalLoaderComponent */

    /***/
    function CZn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalLoaderComponent", function () {
        return GlobalLoaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_globalLoader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./globalLoader.component.html */
      "SllZ");
      /* harmony import */


      var _globalLoader_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./globalLoader.component.scss */
      "x+E6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GlobalLoaderComponent = /*#__PURE__*/function () {
        function GlobalLoaderComponent() {
          _classCallCheck(this, GlobalLoaderComponent);
        }

        _createClass(GlobalLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GlobalLoaderComponent;
      }();

      GlobalLoaderComponent.ctorParameters = function () {
        return [];
      };

      GlobalLoaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-global-loader',
        template: _raw_loader_globalLoader_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_globalLoader_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GlobalLoaderComponent);
      /***/
    },

    /***/
    "CKO6":
    /*!*************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
      \*************************************************************/

    /*! exports provided: Spinkit */

    /***/
    function CKO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
        return Spinkit;
      });

      var Spinkit = {
        skChasingDots: 'sk-chasing-dots',
        skCubeGrid: 'sk-cube-grid',
        skDoubleBounce: 'sk-double-bounce',
        skRotatingPlane: 'sk-rotationg-plane',
        skSpinnerPulse: 'sk-spinner-pulse',
        skThreeBounce: 'sk-three-bounce',
        skWanderingCubes: 'sk-wandering-cubes',
        skWave: 'sk-wave',
        skLine: 'sk-line-material'
      };
      /***/
    },

    /***/
    "CNih":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CNih(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ng-container *ngIf=\"this.navigationList\">\r\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\r\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\r\n      <div class=\"page-block\">\r\n        <div class=\"row align-items-center\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"page-header-title\">\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\r\n            </div>\r\n            <ul class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\">\r\n                <a [routerLink]=\"['/home']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\r\n                <a [routerLink]=\"['/home']\" *ngIf=\"type === 'theme1'\">Home</a>\r\n              </li>\r\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\r\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\r\n              </ng-container>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</ng-container>\r\n -->";
      /***/
    },

    /***/
    "DgD/":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DgD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\r\n    <li [ngClass]=\"item.classes\" [class.disabled]=\"!item.isAccess ? true : ''\" *ngIf=\"item.url && !item.external\"\r\n        [routerLinkActive]=\"!item.isAccess ? '' : 'active'\">\r\n        <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\"\r\n            [routerLink]=\"item.isAccess ? item.url : 'javascript:'\"\r\n            (click)=\"!item.isAccess ? '' : closeOtherMenu($event)\">\r\n            <!-- <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container> -->\r\n            <ng-container *ngTemplateOutlet=\"itemImg\"></ng-container>\r\n            <span class=\"pcoded-mtext\" *ngIf=\"item.img; else directTitle\">{{ item.title }}</span>\r\n            <ng-template #directTitle>\r\n                {{item.title}}\r\n            </ng-template>\r\n            <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n        </a>\r\n    </li>\r\n    <li [ngClass]=\"item.classes\" [class.disabled]=\"!item.isAccess ? true : ''\" *ngIf=\"item.url && item.external\">\r\n        <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.isAccess ? item.url : 'javascript:'\">\r\n            <!-- <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container> -->\r\n            <ng-container *ngTemplateOutlet=\"itemImg\"></ng-container>\r\n            <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\r\n            <ng-template #directTitle>\r\n                {{item.title}}\r\n            </ng-template>\r\n            <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\r\n        </a>\r\n    </li>\r\n    <!-- <ng-template #itemIcon>\r\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\r\n  </ng-template> -->\r\n    <ng-template #itemImg>\r\n        <span *ngIf=\"item.img\" class=\"pcoded-micon pcoded-sidebar-img\">\r\n            <img src=\"{{item.img}}\" alt=\"{{item.title}}\" />\r\n        </span>\r\n    </ng-template>\r\n    <ng-template #itemBadge>\r\n        <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n            {{item.badge.title}}\r\n        </span>\r\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n            {{item.badge.title}}\r\n        </span>\r\n    </ng-template>\r\n</ng-container>";
      /***/
    },

    /***/
    "Dp0H":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dp0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\r\n  <!-- <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li> -->\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n";
      /***/
    },

    /***/
    "E7Y8":
    /*!************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NavContentComponent */

    /***/
    function E7Y8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
        return NavContentComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-content.component.html */
      "wjSg");
      /* harmony import */


      var _nav_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-content.component.scss */
      "wSfS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../navigation */
      "S8Sc");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/auth/auth.service */
      "jGGy");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var NavContentComponent = /*#__PURE__*/function () {
        function NavContentComponent(nav, zone, location, authService) {
          _classCallCheck(this, NavContentComponent);

          this.nav = nav;
          this.zone = zone;
          this.location = location;
          this.authService = authService;
          this.version = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_8__["environment"].version;
          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_5__["NextConfig"].config;
          this.windowWidth = window.innerWidth; // this.navigation = this.nav.get();

          this.setAccessForMenu(); // this.resetAccess();

          this.prevDisabled = 'disabled';
          this.nextDisabled = '';
          this.scrollWidth = 0;
          this.contentWidth = 0;
        }

        _createClass(NavContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.nextConfig['layout'] = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
              }, 500);
            }

            this.setAccessForMenu();
          }
        }, {
          key: "setAccessForMenu",
          value: function setAccessForMenu() {
            var _this3 = this;

            var menuList = this.nav.get();
            console.log("menulist is", menuList);

            if (localStorage.getItem('userDet')) {
              if (menuList != null && menuList.length > 0) {
                if (menuList[0].children != null && menuList[0].children.length > 0) {
                  menuList[0].children.forEach(function (a) {
                    if (a.type === 'item') {
                      if ('menuName' in a && !a.hasOwnProperty('subMenuName') && 'isAccess' in a) {
                        if (a.menuName == 'Help') {
                          a.isAccess = true;
                        } else {
                          a.isAccess = _this3.authService.checkMenuAccess(a.menuName);
                        } // a.url = (this.authService.checkMenuAccess(a.menuName)) ? a.url : 'javascript:';

                      } else if ('menuName' in a && 'subMenuName' in a && 'isAccess' in a) {
                        a.isAccess = _this3.authService.checkSubMenuAccess(a.menuName, a.subMenuName); // a.url = (this.authService.checkSubMenuAccess(a.menuName, a.subMenuName)) ? a.url : 'javascript:';
                      }

                      if ('hidden' in a) {
                        a.hidden = !_this3.authService.checkMenuAccess(a.menuName);
                      }
                    } else if (a.type === 'collapse') {
                      if ('menuName' in a && !a.hasOwnProperty('subMenuName') && 'isAccess' in a) {
                        // a.url = (this.authService.checkMenuAccess(a.menuName)) ? a.url : 'javascript:';
                        if (a.menuName == 'Setting') {
                          var flag = false;

                          if (a.children != null && a.children.length > 0) {
                            for (var index = 0; index < a.children.length; index++) {
                              if (_this3.authService.checkMenuAccess(a.children[index].menuName)) {
                                flag = true;
                              }
                            }
                          }

                          a.isAccess = flag;
                        } else {
                          a.isAccess = _this3.authService.checkMenuAccess(a.menuName);
                        }

                        if ('hidden' in a) {
                          a.hidden = !_this3.authService.checkMenuAccess(a.menuName);
                        }
                      }

                      if (a.hasOwnProperty('children') && a.children != null && a.children.length > 0) {
                        a.children.forEach(function (b) {
                          if (b.type === 'item') {
                            if ('menuName' in b && !b.hasOwnProperty('subMenuName') && 'isAccess' in b) {
                              b.isAccess = _this3.authService.checkMenuAccess(b.menuName); //b.url = (this.authService.checkMenuAccess(b.menuName)) ? b.url : 'javascript:';
                            } else if ('menuName' in b && 'subMenuName' in b && 'isAccess' in b) {
                              b.isAccess = _this3.authService.checkSubMenuAccess(b.menuName, b.subMenuName); //b.url = (this.authService.checkSubMenuAccess(b.menuName, b.subMenuName)) ? b.url : 'javascript:';
                            }
                          } else if (b.type === 'collapse') {
                            if ('menuName' in b && !b.hasOwnProperty('subMenuName') && 'isAccess' in b) {
                              b.isAccess = _this3.authService.checkMenuAccess(b.menuName); //b.url = (this.authService.checkMenuAccess(b.menuName)) ? b.url : 'javascript:';
                            }

                            if (b.hasOwnProperty('children') && b.children != null && b.children.length > 0) {
                              b.children.forEach(function (c) {
                                if (c.type === 'item') {
                                  if ('menuName' in c && !c.hasOwnProperty('subMenuName') && 'isAccess' in c) {
                                    c.isAccess = _this3.authService.checkMenuAccess(c.menuName); //c.url = (this.authService.checkMenuAccess(c.menuName)) ? c.url : 'javascript:';
                                  } else if ('menuName' in c && 'subMenuName' in c && 'isAccess' in c) {
                                    c.isAccess = _this3.authService.checkSubMenuAccess(c.menuName, c.subMenuName); //c.url = (this.authService.checkSubMenuAccess(c.menuName, c.subMenuName)) ? c.url : 'javascript:';
                                  }
                                } else {
                                  if (c.type === 'collapse') {
                                    if ('menuName' in c && !b.hasOwnProperty('subMenuName') && 'isAccess' in c) {
                                      c.isAccess = _this3.authService.checkMenuAccess(c.menuName); //c.url = (this.authService.checkMenuAccess(c.menuName)) ? c.url : 'javascript:';
                                    }

                                    if (c.hasOwnProperty('children') && c.children != null && c.children.length > 0) {
                                      c.children.forEach(function (d) {
                                        if (d.type === 'item') {
                                          if ('menuName' in d && !d.hasOwnProperty('subMenuName') && 'isAccess' in d) {
                                            d.isAccess = _this3.authService.checkMenuAccess(d.menuName); //d.url = (this.authService.checkMenuAccess(d.menuName)) ? d.url : 'javascript:';
                                          } else if ('menuName' in d && 'subMenuName' in d && 'isAccess' in d) {
                                            d.isAccess = _this3.authService.checkSubMenuAccess(d.menuName, d.subMenuName); //d.url = (this.authService.checkSubMenuAccess(d.menuName, d.subMenuName)) ? d.url : 'javascript:';
                                          }
                                        }
                                      });
                                    }
                                  }
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }

              this.navigation = menuList;
            } else {
              this.navigation = menuList;
            }

            console.log(this.navigation);
          }
        }, {
          key: "resetAccess",
          value: function resetAccess() {
            var menuList = this.nav.get();

            if (menuList != null && menuList.length > 0) {
              if (menuList[0].children != null && menuList[0].children.length > 0) {
                menuList[0].children.forEach(function (a) {
                  if (a.type === 'item') {
                    a.isAccess = true;
                  } else if (a.type === 'collapse') {
                    a.isAccess = true;

                    if (a.hasOwnProperty('children') && a.children != null && a.children.length > 0) {
                      a.children.forEach(function (b) {
                        if (b.type === 'item') {
                          b.isAccess = true;
                        } else if (b.type === 'collapse') {
                          b.isAccess = true; // if (b.hasOwnProperty('children') && b.children != null && b.children.length > 0) {
                          //   b.children.forEach((c) => {
                          //     if (c.type === 'item') {
                          //       c.isAccess = true;
                          //     } else {
                          //       if (c.type === 'collapse') {
                          //         c.isAccess = true;
                          //         if (c.hasOwnProperty('children') && c.children != null && c.children.length > 0) {
                          //           c.children.forEach((d) => {
                          //             if (d.type === 'item') {
                          //               d.isAccess = true;
                          //             }
                          //           })
                          //         }
                          //       }
                          //     }
                          //   })
                          // }
                        }
                      });
                    }
                  }
                });
              }
            }

            this.navigation = menuList;
            console.log(this.navigation);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.nextConfig['layout'] === 'horizontal') {
              this.contentWidth = this.navbarContent.nativeElement.clientWidth;
              this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
            }
          }
        }, {
          key: "scrollPlus",
          value: function scrollPlus() {
            this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

            if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
              this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
              this.nextDisabled = 'disabled';
            }

            this.prevDisabled = '';

            if (this.nextConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
          }
        }, {
          key: "scrollMinus",
          value: function scrollMinus() {
            this.scrollWidth = this.scrollWidth - this.wrapperWidth;

            if (this.scrollWidth < 0) {
              this.scrollWidth = 0;
              this.prevDisabled = 'disabled';
            }

            this.nextDisabled = '';

            if (this.nextConfig.rtlLayout) {
              document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
            } else {
              document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
            }
          }
        }, {
          key: "fireLeave",
          value: function fireLeave() {
            var sections = document.querySelectorAll('.pcoded-hasmenu');

            for (var i = 0; i < sections.length; i++) {
              sections[i].classList.remove('active');
              sections[i].classList.remove('pcoded-trigger');
            }

            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
              }
            }
          }
        }, {
          key: "navMob",
          value: function navMob() {
            if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.onNavMobCollapse.emit();
            }
          }
        }, {
          key: "fireOutClick",
          value: function fireOutClick() {
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavContentComponent;
      }();

      NavContentComponent.ctorParameters = function () {
        return [{
          type: _navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
        }];
      };

      NavContentComponent.propDecorators = {
        onNavMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        navbarContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['navbarContent', {
            "static": false
          }]
        }],
        navbarWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['navbarWrapper', {
            "static": false
          }]
        }]
      };
      NavContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-content',
        template: _raw_loader_nav_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], NavContentComponent);
      /***/
    },

    /***/
    "EIj0":
    /*!************************************************************!*\
      !*** ./src/app/shared/image-cropper/utils/resize.utils.ts ***!
      \************************************************************/

    /*! exports provided: resizeCanvas */

    /***/
    function EIj0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resizeCanvas", function () {
        return resizeCanvas;
      });
      /*
       * Hermite resize - fast image resize/resample using Hermite filter.
       * https://github.com/viliusle/Hermite-resize
       */


      function resizeCanvas(canvas, width, height) {
        var width_source = canvas.width;
        var height_source = canvas.height;
        width = Math.round(width);
        height = Math.round(height);
        var ratio_w = width_source / width;
        var ratio_h = height_source / height;
        var ratio_w_half = Math.ceil(ratio_w / 2);
        var ratio_h_half = Math.ceil(ratio_h / 2);
        var ctx = canvas.getContext('2d');

        if (ctx) {
          var img = ctx.getImageData(0, 0, width_source, height_source);
          var img2 = ctx.createImageData(width, height);
          var data = img.data;
          var data2 = img2.data;

          for (var j = 0; j < height; j++) {
            for (var i = 0; i < width; i++) {
              var x2 = (i + j * width) * 4;
              var center_y = j * ratio_h;
              var weight = 0;
              var weights = 0;
              var weights_alpha = 0;
              var gx_r = 0;
              var gx_g = 0;
              var gx_b = 0;
              var gx_a = 0;
              var xx_start = Math.floor(i * ratio_w);
              var yy_start = Math.floor(j * ratio_h);
              var xx_stop = Math.ceil((i + 1) * ratio_w);
              var yy_stop = Math.ceil((j + 1) * ratio_h);
              xx_stop = Math.min(xx_stop, width_source);
              yy_stop = Math.min(yy_stop, height_source);

              for (var yy = yy_start; yy < yy_stop; yy++) {
                var dy = Math.abs(center_y - yy) / ratio_h_half;
                var center_x = i * ratio_w;
                var w0 = dy * dy; //pre-calc part of w

                for (var xx = xx_start; xx < xx_stop; xx++) {
                  var dx = Math.abs(center_x - xx) / ratio_w_half;
                  var w = Math.sqrt(w0 + dx * dx);

                  if (w >= 1) {
                    //pixel too far
                    continue;
                  } //hermite filter


                  weight = 2 * w * w * w - 3 * w * w + 1;
                  var pos_x = 4 * (xx + yy * width_source); //alpha

                  gx_a += weight * data[pos_x + 3];
                  weights_alpha += weight; //colors

                  if (data[pos_x + 3] < 255) weight = weight * data[pos_x + 3] / 250;
                  gx_r += weight * data[pos_x];
                  gx_g += weight * data[pos_x + 1];
                  gx_b += weight * data[pos_x + 2];
                  weights += weight;
                }
              }

              data2[x2] = gx_r / weights;
              data2[x2 + 1] = gx_g / weights;
              data2[x2 + 2] = gx_b / weights;
              data2[x2 + 3] = gx_a / weights_alpha;
            }
          }

          canvas.width = width;
          canvas.height = height; //draw

          ctx.putImageData(img2, 0, 0);
        }
      }
      /***/

    },

    /***/
    "ENTz":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function ENTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".version {\n  text-align: center;\n  font-size: 16px;\n  padding: 10px;\n  position: absolute;\n  bottom: 6em;\n  width: 100%;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnNpb24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "Empq":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Empq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-alert></app-alert>\r\n<router-outlet></router-outlet>\r\n ";
      /***/
    },

    /***/
    "EwA0":
    /*!****************************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EwA0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "FunQ":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/loginInfo/loginInfo.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FunQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"topBar row m-0\">\r\n    <div class=\"col-12 m-auto profileInfo p-0\">\r\n        <!-- <span class=\"userPic\">\r\n                 <img src=\"assets/images/Profile.png\" alt=\"userIcon\">\r\n            </span>\r\n        <span class=\"userName\">{{loggedInEmpDet.firstName || ''}} {{loggedInEmpDet.lastName }}</span>\r\n        <span class=\"logoutImg\">\r\n                <a routerLink=\"../login\" class=\"feather icon-log-out\"></a>\r\n            </span> -->\r\n        <div class=\"navbarContainer navbar-collapse\" id=\"navbarContent\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item header-notification\" ngbDropdown>\r\n                    <a class=\"nav-link\" tabindex=\"0\" ngbDropdownToggle id=\"navbarDropdown1\" role=\"button\">\r\n                        <div class=\"userProfile\">\r\n                            <img src=\"assets/images/Profile.png\"\r\n                                onerror=\"this.src = 'assets/images/ic_profile_placeholder.png'\" class=\"img-radius\" />\r\n                            <!-- <span class=\"userName\" title=\"{{loggedInEmpDet.fullName}}\"> {{loggedInEmpDet.fullName |\r\n                                slice:0:15 }}\r\n                                <ng-container\r\n                                    *ngIf=\"loggedInEmpDet.fullName && loggedInEmpDet.fullName.length > 15\">...</ng-container>\r\n                            </span> -->\r\n                        </div>\r\n                    </a>\r\n                    <div ngbDropdownMenu aria-labelledby=\"navbarDropdown1\"\r\n                        class=\"dropdown-menu show-notification profile-notification active1\">\r\n                        <a ngbDropdownItem href=\"javascript:;\" style=\"padding-left: 4px;\"\r\n                            href=\"../template.html#!/profile\" target=\"_self\">\r\n                            <i class=\"fa fa-sign-out\"></i>Profile\r\n                        </a>\r\n                        <!-- <a ngbDropdownItem href=\"#\" (click)=\"$event.preventDefault()\">Action</a> -->\r\n                        <a ngbDropdownItem href=\"../login.html\" target=\"_self\">\r\n                            <i class=\"fa fa-sign-out\"></i>Logout\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "H3BY":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/shared/components/globalLoader/globalLoader.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: GlobalLoaderModule */

    /***/
    function H3BY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GlobalLoaderModule", function () {
        return GlobalLoaderModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _globalLoader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./globalLoader.component */
      "C/zn");

      var GlobalLoaderModule = function GlobalLoaderModule() {
        _classCallCheck(this, GlobalLoaderModule);
      };

      GlobalLoaderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_globalLoader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalLoaderComponent"]],
        exports: [_globalLoader_component__WEBPACK_IMPORTED_MODULE_3__["GlobalLoaderComponent"]],
        providers: []
      })], GlobalLoaderModule);
      /***/
    },

    /***/
    "HRIB":
    /*!******************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: NavItemComponent */

    /***/
    function HRIB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
        return NavItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-item.component.html */
      "DgD/");
      /* harmony import */


      var _nav_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-item.component.scss */
      "LfhD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../navigation */
      "S8Sc");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/auth/http.service */
      "bnLG");

      var NavItemComponent = /*#__PURE__*/function () {
        function NavItemComponent(location, httpService) {
          _classCallCheck(this, NavItemComponent);

          this.location = location;
          this.httpService = httpService;
          this.userDet = {};
          this.userAccessList = [];
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_5__["NextConfig"].config;
          this.themeLayout = this.nextConfig['layout'];
        }

        _createClass(NavItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet')); // console.log(this.userDet)
          }
        }, {
          key: "closeOtherMenu",
          value: function closeOtherMenu(event) {
            var _this4 = this;

            localStorage.removeItem('selectedActionData');

            if (this.nextConfig['layout'] === 'vertical') {
              event.preventDefault();
              var ele = event.target;

              if (ele !== null && ele !== undefined) {
                var parent = ele.parentElement;
                var up_parent = parent.parentElement.parentElement;
                var last_parent = up_parent.parentElement;
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var i = 0; i < sections.length; i++) {
                  sections[i].classList.remove('active');
                  sections[i].classList.remove('pcoded-trigger');
                }

                if (parent.classList.contains('pcoded-hasmenu')) {
                  parent.classList.add('pcoded-trigger');
                  parent.classList.add('active');
                } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                  up_parent.classList.add('pcoded-trigger');
                  up_parent.classList.add('active');
                } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                  last_parent.classList.add('pcoded-trigger');
                  last_parent.classList.add('active');
                }
              }

              if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
              }
            } else {
              setTimeout(function () {
                var sections = document.querySelectorAll('.pcoded-hasmenu');

                for (var _i = 0; _i < sections.length; _i++) {
                  sections[_i].classList.remove('active');

                  sections[_i].classList.remove('pcoded-trigger');
                }

                var current_url = _this4.location.path();

                if (_this4.location['_baseHref']) {
                  current_url = _this4.location['_baseHref'] + _this4.location.path();
                }

                var link = "a.nav-link[ href='" + current_url + "' ]";
                var ele = document.querySelector(link);

                if (ele !== null && ele !== undefined) {
                  var _parent = ele.parentElement;
                  var _up_parent = _parent.parentElement.parentElement;
                  var _last_parent = _up_parent.parentElement;

                  if (_parent.classList.contains('pcoded-hasmenu')) {
                    _parent.classList.add('active');
                  } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                    _up_parent.classList.add('active');
                  } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                    _last_parent.classList.add('active');
                  }
                }
              }, 500);
            }
          }
        }]);

        return NavItemComponent;
      }();

      NavItemComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]
        }];
      };

      NavItemComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NavItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-item',
        template: _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"]])], NavItemComponent);
      /***/
    },

    /***/
    "JeUI":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/theme/shared/components/assessessment-detail-modal/assessessment-detail-modal.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JeUI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".Actulscre {\n  background: #8dd995 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  height: 2em;\n  text-align: center;\n  font: normal normal bold 16px/20px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n}\n\n.RedActulscre {\n  background: #ff0000 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  height: 2em;\n  text-align: center;\n  font: normal normal bold 16px/20px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #ffffff;\n  opacity: 1;\n}\n\n.ActlSc {\n  text-align: center;\n  padding: 5px;\n  font-size: 14px;\n}\n\n.Desired {\n  background: #f8f8f8 0% 0% no-repeat padding-box !important;\n  opacity: 1;\n}\n\n.count {\n  padding-left: 8px;\n}\n\n.statusDiv {\n  width: 16.7em;\n  left: 61.8em;\n  position: absolute;\n  top: -2rem;\n  background: #f8f8f8 0% 0% no-repeat padding-box;\n  border-radius: 15px 16px 0px 0px;\n  opacity: 1;\n}\n\n.statusbtn {\n  border: none;\n  outline: none;\n  background: #f8f8f8;\n  font: normal normal bold 12px/16px Helvetica Neue;\n  letter-spacing: 0px;\n  width: 10.3em;\n  color: #707070;\n  text-align: center;\n  text-transform: uppercase;\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 91px;\n}\n\n.statusbtn:hover,\n.statusbtn:focus {\n  outline: none;\n  border: none;\n}\n\n.txt-center {\n  text-align: center;\n}\n\n.alt-icon {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #1fa0e2;\n  float: right;\n  cursor: pointer;\n}\n\n.close-icon {\n  font-size: 40px;\n  color: #1f1f9e;\n}\n\n.orange {\n  color: #f8ba49;\n}\n\n.green {\n  color: #40b040;\n}\n\n.action-header {\n  background: #ddedf4 !important;\n  width: 10em;\n  border-top-right-radius: 50px !important;\n  border: 1px solid white;\n  border-top: 3px solid white;\n}\n\n.countColor {\n  font: normal normal bold 30px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #8dd995;\n  margin-bottom: 0px;\n  opacity: 1;\n}\n\n.atmacCount {\n  color: #80ac23;\n}\n\n.last-td {\n  background: #ddedf4;\n}\n\n.th-style {\n  background-color: #fff;\n}\n\n.knw-txt {\n  border: 1px solid #ffffff;\n  background: white;\n  border-radius: 3px;\n  padding: 3px;\n  color: #1fa0e2;\n  font: normal normal 500 10px/22px Helvetica Neue;\n  cursor: pointer;\n}\n\n.popup-header-txt {\n  width: 20em;\n  font: normal normal 500 20px/27px Helvetica Neue;\n  padding-top: 5px;\n  padding-left: 0%;\n  padding-right: 0%;\n}\n\n.closebtn1 {\n  padding-right: 38px;\n  padding-top: 22px;\n  font-weight: 400;\n}\n\n.closebtn {\n  font-weight: 400;\n}\n\n.planthead {\n  top: 0.7em;\n  color: #1fa0e2;\n  font: normal normal 500 20px/24px Helvetica Neue;\n}\n\n.name {\n  top: 0.7em;\n  font: normal normal 500 22px/27px Helvetica Neue;\n}\n\n.connect {\n  top: 1.5em;\n  font: normal normal 500 13px/10px Helvetica Neue;\n}\n\n.pending1 {\n  top: 2.5em;\n  font: normal normal 400 22px/28px Helvetica Neue;\n}\n\n.pdbtmstyl {\n  border-bottom: 3px solid #b5def7;\n  top: 0.5em;\n  right: 3em;\n}\n\n.compl {\n  top: 2.5em;\n  font: normal normal 400 20px/40px Helvetica Neue;\n}\n\n.close-icon1 {\n  font-size: 54px;\n  color: #161819;\n}\n\n.skill-table {\n  font-family: Helvetica Neue;\n  border: 2px solid #c8e4f5;\n  width: 90%;\n  left: 3em;\n}\n\n.question_ans_container {\n  border-bottom: 2px solid #01a0e2;\n  opacity: 1;\n  background-color: #ffff;\n  width: 100%;\n  padding-left: 32px;\n  padding-right: 28px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n\n.question_ans_slider {\n  width: 100%;\n  background: #f1f1f1 0% 0% no-repeat padding-box;\n  border-radius: 17px;\n  opacity: 1;\n  padding-bottom: 20px;\n}\n\n.question_number {\n  border: none;\n  outline: none;\n  outline-style: none;\n  width: 36px;\n  background: #01a0e2 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 10px 10px;\n  opacity: 1;\n  font-weight: bold;\n  color: #ffff;\n  height: 35px;\n}\n\n.AnsBlock {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 6px #00000029;\n  border-radius: 9px;\n  opacity: 1;\n}\n\n.Options {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  letter-spacing: 0px;\n  color: #01a0e2;\n  text-transform: capitalize;\n  line-height: 19px;\n}\n\n.questions {\n  line-height: 19px;\n  font-weight: 900;\n  letter-spacing: 0px;\n  color: #4c4c4c;\n  text-transform: capitalize;\n  opacity: 1;\n}\n\n.ans {\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0px;\n  color: #464646;\n  opacity: 1;\n}\n\n.question_container_cancel_btn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 5px solid #eeedf2;\n  border-radius: 2px;\n  width: 30%;\n  margin-left: 10%;\n  font-size: 15px;\n  line-height: 22px;\n  font-family: Helvetica Neue;\n  letter-spacing: 0px;\n  color: #373737;\n  opacity: 1;\n}\n\n.assessmen_det_header {\n  padding-bottom: 0px;\n  font-size: 20px;\n  font-family: Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  text-transform: uppercase;\n  margin-top: 16px;\n}\n\n.count1 {\n  font: normal normal normal 64px/84px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n}\n\n.Participants1 {\n  font: normal normal 500 16px/20px Helvetica Neue !important;\n  letter-spacing: 0px;\n  color: #474747;\n  opacity: 1;\n}\n\n/***********************/\n\n.count2 {\n  font: normal normal bold 44px/59px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #ffcc74;\n  opacity: 1;\n  margin-left: 1em;\n}\n\n.Participants2 {\n  font: normal normal normal 18px/30px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  opacity: 1;\n  padding: 4px 1em;\n}\n\n.applyfilterbtn {\n  background: #01a0e2 0% 0% no-repeat padding-box;\n  border-radius: 3px;\n  opacity: 1;\n  font: normal normal bold 18px/24px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #ffffff;\n  border: none;\n  width: 7em;\n  height: 2em;\n}\n\n.applyfilterbtn:hover,\n.applyfilterbtn:focus {\n  background: #01a0e2 0% 0% no-repeat padding-box;\n  border-radius: 3px;\n  opacity: 1;\n  border: none;\n  outline: none;\n}\n\n.myBtn {\n  width: 100%;\n  letter-spacing: 1px;\n  font-size: 15px;\n}\n\n.loader {\n  position: absolute;\n  z-index: 999;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.loader .text-primary {\n  color: #1fa0e2 !important;\n}\n\n.loader p {\n  font: normal normal normal 13px/1.5 Helvetica Neue;\n  color: #a5a5a5;\n}\n\n.filter-label {\n  font-size: 14px;\n  font-weight: 500;\n  font-family: Helvetica Neue;\n  color: #464646;\n}\n\n.filter-btn {\n  border: 2px solid #1fa0e2;\n  border-radius: 8px;\n}\n\n.filter-icon {\n  position: relative;\n  cursor: pointer;\n  color: #1fa0e2;\n  font-size: 27px;\n  line-height: 37px;\n  position: relative;\n  left: 24px;\n}\n\n.tableFixHead table tbody td .actionBtn,\n.tableFixHead table tbody td .actionBtn:hover,\n.tableFixHead table tbody td .actionBtn:focus {\n  background: #1fa0e2;\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 11px/15px Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  width: 80%;\n}\n\n.FontformoduleCount {\n  font: normal normal 500 15px/20px Helvetica Neue !important;\n}\n\n.tableFixHead table {\n  position: relative;\n}\n\n.tableFixHead table th.actionTh,\n.tableFixHead table td.actionTd {\n  width: 150px;\n  line-height: 2;\n  display: inline-block;\n  min-height: 36px;\n  padding: 8px 10px;\n}\n\n.tableFixHead table th.actionTh span,\n.tableFixHead table th.actionTh button,\n.tableFixHead table td.actionTd span,\n.tableFixHead table td.actionTd button {\n  white-space: normal;\n}\n\n.tableFixHead table td.fixedColumn {\n  z-index: 1;\n}\n\n.tableFixHead table th.fixedColumn:last-child,\n.tableFixHead table td.fixedColumn:last-child {\n  right: 0px;\n  box-shadow: none;\n}\n\n.tableFixHead table .fixedColumn:nth-last-child(2) {\n  right: 150px;\n  box-shadow: -5px 0 5px -5px #a0ced6;\n}\n\n.tableFixHead table tbody td {\n  vertical-align: middle;\n}\n\n.assessmentQueAns-block {\n  height: 100vh;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n}\n\n.assessmentQueAns-block .assessmentTitle {\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n  margin: 0px;\n  padding: 10px;\n  border-bottom: 1px solid #01a0e2;\n  color: #01a0e2;\n}\n\n.assessmentQueAns-block .qsBlock {\n  border-bottom: 1px solid #01a0e2;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block:first-child {\n  margin-top: 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .Category {\n  /* margin: 0px 0px 5px -1px; */\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .Category .catLbl {\n  color: white;\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv {\n  margin: 5px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .ques-blk {\n  margin: 5px 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat {\n  padding: 5px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk {\n  padding-bottom: 5px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk:last-child {\n  padding-bottom: 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory {\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .key,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .key {\n  font: normal normal 400 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .value,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .value {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block {\n  padding: 0px 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card {\n  background: #fff 0% 0% no-repeat padding-box;\n  position: relative;\n  padding: 0px 5px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  margin-bottom: 1rem;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card.otherQuesCard,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card.otherQuesCard {\n  background: #f1f1f1 0% 0% no-repeat padding-box;\n  padding: 0px 10px;\n  margin: 10px;\n  box-shadow: none;\n  border-radius: 10px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .question_number,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .question_number {\n  background: #7044cd 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 10px 10px;\n  color: #fff;\n  line-height: 30px;\n  font: normal normal 600 15px/30px Helvetica Neue;\n  width: 100%;\n  margin: 0px;\n  padding: 5px 0px 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .questions,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .questions {\n  font: normal normal 500 14px/1.4 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #4c4c4c;\n  margin: 0px;\n  padding: 5px 0px 0px;\n  white-space: pre-line;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block {\n  padding: 0.5rem;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li {\n  float: left;\n  width: 50%;\n  margin: 0.2rem 0px;\n  cursor: pointer;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex {\n  font: normal normal 600 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  text-transform: capitalize;\n  padding: 0.5rem 0px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div {\n  /* padding: 0.5rem; */\n  position: relative;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label {\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n  margin: 0px;\n  border-radius: 5px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 6px #00000029;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  margin: 0px;\n  padding-left: 30px;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  background-color: #7044cd;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after {\n  width: 20px;\n  height: 20px;\n  content: \"\";\n  border: 2px solid #d1d7dc;\n  background-color: #fff;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label {\n  color: #fff;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after {\n  background-color: #7044cd;\n  border-color: white;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input {\n  width: 20px;\n  height: 20px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star {\n  font-size: 2rem;\n  color: #ccc;\n  margin: 7px 2px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled {\n  color: #f7c001;\n}\n\n.excelbutton {\n  cursor: pointer;\n}\n\n.excelbutton .excelFont {\n  font: normal normal 500 11px/1.5 Helvetica Neue;\n}\n\n.totalParticipants {\n  max-width: 160px !important;\n  min-width: 160px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2Vzc2Vzc21lbnQtZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksMERBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7O0VBRUksYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnREFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGdEQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0RBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnREFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQXNFQTtFQUNJLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBbkVKOztBQXNFQTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FBbkVKOztBQXNFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbkVKOztBQXNFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQW5FSjs7QUFzRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQW5FSjs7QUFzRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FBbkVKOztBQXNFQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQW5FSjs7QUFzRUE7RUFDSSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFuRUo7O0FBc0VBO0VBQ0ksbUJBQUE7RUFHQSxlQUFBO0VBRUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBdEVKOztBQThHQTtFQUNJLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQTNHSjs7QUE4R0E7RUFDSSwyREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUEzR0o7O0FBOEdBLHdCQUFBOztBQUVBO0VBQ0ksaURBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUE1R0o7O0FBK0dBO0VBQ0ksbURBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUE1R0o7O0FBa0tBO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQS9KSjs7QUFrS0E7O0VBRUksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQS9KSjs7QUFrS0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBL0pKOztBQWtLQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUEvSko7O0FBZ0tJO0VBQ0kseUJBQUE7QUE5SlI7O0FBZ0tJO0VBQ0ksa0RBQUE7RUFDQSxjQUFBO0FBOUpSOztBQWtLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQS9KSjs7QUFrS0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBL0pKOztBQWtLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUEvSko7O0FBa0tBOzs7RUFHSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQS9KSjs7QUFrS0E7RUFDSSwyREFBQTtBQS9KSjs7QUFtS0k7RUFDSSxrQkFBQTtBQWhLUjs7QUFpS1E7O0VBRUksWUFBQTtFQUVBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFoS1o7O0FBaUtZOzs7O0VBRUksbUJBQUE7QUE3SmhCOztBQWdLUTtFQUNJLFVBQUE7QUE5Slo7O0FBZ0tROztFQUVJLFVBQUE7RUFDQSxnQkFBQTtBQTlKWjs7QUFnS1E7RUFDSSxZQUFBO0VBQ0EsbUNBQUE7QUE5Slo7O0FBaUtZO0VBQ0ksc0JBQUE7QUEvSmhCOztBQXFLQTtFQUNJLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFsS0o7O0FBbUtJO0VBQ0ksK0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtBQWpLUjs7QUFtS0k7RUFDSSxnQ0FBQTtBQWpLUjs7QUFtS1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFqS1o7O0FBa0tZO0VBQ0ksZUFBQTtBQWhLaEI7O0FBbUtnQjtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBaktwQjs7QUFrS29CO0VBQ0ksWUFBQTtFQUNBLCtDQUFBO0FBaEt4Qjs7QUFvS2dCO0VBQ0ksV0FBQTtBQWxLcEI7O0FBbUtvQjtFQUNJLGVBQUE7QUFqS3hCOztBQW9LZ0I7RUFDSSxZQUFBO0FBbEtwQjs7QUFtS29CO0VBQ0ksbUJBQUE7QUFqS3hCOztBQWtLd0I7RUFDSSxtQkFBQTtBQWhLNUI7O0FBc0tvQjs7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUFuS3hCOztBQW9Ld0I7O0VBQ0ksK0NBQUE7RUFDQSxXQUFBO0FBaks1Qjs7QUFtS3dCOztFQUNJLCtDQUFBO0VBQ0EsV0FBQTtBQWhLNUI7O0FBbUtvQjs7RUFDSSxnQkFBQTtBQWhLeEI7O0FBaUt3Qjs7RUFDSSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FBOUo1Qjs7QUErSjRCOztFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTVKaEM7O0FBOEo0Qjs7RUFDSSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBM0poQzs7QUE2SjRCOztFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUExSmhDOztBQTRKNEI7O0VBQ0ksZUFBQTtBQXpKaEM7O0FBMEpnQzs7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBdkpwQzs7QUF3Sm9DOztFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBckp4Qzs7QUFzSndDOztFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQW5KNUM7O0FBcUp3Qzs7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBbEo1Qzs7QUFtSjRDOztFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQWhKaEQ7O0FBaUpnRDs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQTlJcEQ7O0FBZ0pnRDs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscVpBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUE3SXBEOztBQWdKNEM7O0VBQ0ksV0FBQTtBQTdJaEQ7O0FBOElnRDs7RUFDSSxtREFBQTtFQUNBLFVBQUE7QUEzSXBEOztBQTZJZ0Q7O0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQTFJcEQ7O0FBNkk0Qzs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMUloRDs7QUFnSjRDOztFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUE3SWhEOztBQStJNEM7O0VBQ0ksY0FBQTtBQTVJaEQ7O0FBMEpBO0VBQ0ksZUFBQTtBQXZKSjs7QUEySkk7RUFDSSwrQ0FBQTtBQXpKUjs7QUE2SkE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0FBMUpKIiwiZmlsZSI6ImFzc2Vzc2Vzc21lbnQtZGV0YWlsLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFjdHVsc2NyZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGRkOTk1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE2cHgvMjBweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5SZWRBY3R1bHNjcmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDAwMCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNnB4LzIwcHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uQWN0bFNjIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLkRlc2lyZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmOCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3ggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb3VudCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLnN0YXR1c0RpdiB7XHJcbiAgICB3aWR0aDogMTYuN2VtO1xyXG4gICAgbGVmdDogNjEuOGVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMnJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4ZjggMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNnB4IDBweCAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc3RhdHVzYnRuIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMTZweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogMTAuM2VtO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTZweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogOTFweDtcclxufVxyXG5cclxuLnN0YXR1c2J0bjpob3ZlcixcclxuLnN0YXR1c2J0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4udHh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hbHQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMxZmEwZTI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGNvbG9yOiAjMWYxZjllO1xyXG59XHJcblxyXG4ub3JhbmdlIHtcclxuICAgIGNvbG9yOiAjZjhiYTQ5O1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgY29sb3I6ICM0MGIwNDA7XHJcbn1cclxuXHJcbi5hY3Rpb24taGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGVkZjQgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uY291bnRDb2xvciB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMzBweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM4ZGQ5OTU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYXRtYWNDb3VudCB7XHJcbiAgICBjb2xvcjogIzgwYWMyMztcclxufVxyXG5cclxuLmxhc3QtdGQge1xyXG4gICAgYmFja2dyb3VuZDogI2RkZWRmNDtcclxufVxyXG5cclxuLnRoLXN0eWxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5rbnctdHh0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGNvbG9yOiAjMWZhMGUyO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTBweC8yMnB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucG9wdXAtaGVhZGVyLXR4dCB7XHJcbiAgICB3aWR0aDogMjBlbTtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDIwcHgvMjdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbn1cclxuXHJcbi5jbG9zZWJ0bjEge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzhweDtcclxuICAgIHBhZGRpbmctdG9wOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNsb3NlYnRuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5wbGFudGhlYWQge1xyXG4gICAgdG9wOiAwLjdlbTtcclxuICAgIGNvbG9yOiAjMWZhMGUyO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMjBweC8yNHB4IEhlbHZldGljYSBOZXVlO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICB0b3A6IDAuN2VtO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMjJweC8yN3B4IEhlbHZldGljYSBOZXVlO1xyXG59XHJcblxyXG4uY29ubmVjdCB7XHJcbiAgICB0b3A6IDEuNWVtO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xMHB4IEhlbHZldGljYSBOZXVlO1xyXG59XHJcblxyXG4ucGVuZGluZzEge1xyXG4gICAgdG9wOiAyLjVlbTtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDIycHgvMjhweCBIZWx2ZXRpY2EgTmV1ZTtcclxufVxyXG5cclxuLnBkYnRtc3R5bCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2I1ZGVmNztcclxuICAgIHRvcDogMC41ZW07XHJcbiAgICByaWdodDogM2VtO1xyXG59XHJcblxyXG4uY29tcGwge1xyXG4gICAgdG9wOiAyLjVlbTtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDIwcHgvNDBweCBIZWx2ZXRpY2EgTmV1ZTtcclxufVxyXG5cclxuLmNsb3NlLWljb24xIHtcclxuICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICAgIGNvbG9yOiAjMTYxODE5O1xyXG59XHJcblxyXG4uc2tpbGwtdGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2M4ZTRmNTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBsZWZ0OiAzZW07XHJcbn1cclxuXHJcbi8vIC5maXhlZEhlYWQge1xyXG4vLyAgIG92ZXJmbG93LXk6IGF1dG87XHJcbi8vICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xyXG4vLyAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOGVkMmVkO1xyXG4vLyAgIC8qIHdpZHRoICovXHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4vLyAgICAgd2lkdGg6IDVweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcbi8vICAgLyogVHJhY2sgKi9cclxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbi8vICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4ICNiYmQ5ZTU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gICAvKiBIYW5kbGUgKi9cclxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjMWZhMGUyO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLnRhYmxlRml4SGVhZCB7XHJcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcclxuLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjBweCk7XHJcbi8vICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM4ZWQyZWQ7XHJcbi8vICAgLyogd2lkdGggKi9cclxuLy8gICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbi8vICAgICB3aWR0aDogNXB4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIH1cclxuLy8gICAvKiBUcmFjayAqL1xyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuLy8gICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2JiZDllNTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC8qIEhhbmRsZSAqL1xyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMxZmEwZTI7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAudGFibGVGaXhIZWFkMSB7XHJcbi8vICAgb3ZlcmZsb3cteTogYXV0bztcclxuLy8gICAvKiB3aWR0aCAqL1xyXG4vLyAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICAgIHdpZHRoOiA1cHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgfVxyXG4vLyAgIC8qIFRyYWNrICovXHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4vLyAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjYmJkOWU1O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICB9XHJcbi8vICAgLyogSGFuZGxlICovXHJcbi8vICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzFmYTBlMjtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIC50YWJsZUZpeEhlYWQgdGhlYWQgdGgge1xyXG4vLyAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuLy8gfVxyXG4vLyAudGFibGVGaXhIZWFkIHRib2R5IHRoIHtcclxuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vIH1cclxuLnF1ZXN0aW9uX2Fuc19jb250YWluZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMWEwZTI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucXVlc3Rpb25fYW5zX3NsaWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjEgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnF1ZXN0aW9uX251bWJlciB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAxYTBlMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLkFuc0Jsb2NrIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjMDAwMDAwMjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uT3B0aW9ucyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjMDFhMGUyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuLnF1ZXN0aW9ucyB7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hbnMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5xdWVzdGlvbl9jb250YWluZXJfY2FuY2VsX2J0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNlZWVkZjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjMzczNzM3O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmFzc2Vzc21lbl9kZXRfaGVhZGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLy8gLmJnV2FybmluZyB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZjYzc0IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbi8vICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZjtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IC0xZW07XHJcbi8vIH1cclxuLy8gLmJnU3VjY2VzcyB7XHJcbi8vICAgICB3aWR0aDogMTUlO1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzhkZDk5NSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbi8vICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuLy8gfVxyXG4vLyAuYmdpbmZvIHtcclxuLy8gICAvLyBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS11bm5hbWVkLWNvbG9yLWZmZmZmZik7XHJcbi8vICAgYmFja2dyb3VuZDogIzkyQjNEOSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbi8vICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbi8vICAgLy8gYm9yZGVyLXJhZGl1czogMTRweDtcclxuLy8gICAvLyBtYXJnaW4tbGVmdDogLTFlbTtcclxuLy8gfVxyXG4vLyAuaW5mbyB7XHJcbi8vICAgICBjb2xvcjogIzdjOGRkZTtcclxuLy8gfVxyXG4ucHJvZ3Jlc3NNYXJnaW4ge1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC0xZW07XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG59XHJcblxyXG4vLyAuYmdkYW5nZXIge1xyXG4vLyAgIGJhY2tncm91bmQ6ICNGRjc5NzkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbi8vICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmY7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gICBtYXJnaW4tbGVmdDogLTFlbTtcclxuLy8gfVxyXG4uY291bnQxIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDY0cHgvODRweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5QYXJ0aWNpcGFudHMxIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE2cHgvMjBweCBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmNvdW50MiB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgNDRweC81OXB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjZmZjYzc0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5QYXJ0aWNpcGFudHMyIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE4cHgvMzBweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwYWRkaW5nOiA0cHggMWVtO1xyXG59XHJcblxyXG4vLyAudGFibGVGaXhIZWFkIHtcclxuLy8gICB0YWJsZSB7XHJcbi8vICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4vLyAgICAgd2lkdGg6IDk5LjklO1xyXG4vLyAgICAgbWFyZ2luOiAwcHg7XHJcbi8vICAgfVxyXG4vLyAgIHRoLFxyXG4vLyAgIHRkIHtcclxuLy8gICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4vLyAgIH1cclxuLy8gICB0aCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4vLyAgICAgY29sb3I6ICM3MDcwNzA7XHJcbi8vICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuLy8gICAgICYuYWN0aW9uVGgge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4NiwgMjIzLCAyMzgsIDAuMjgpICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgIHdpZHRoOiAxMGVtO1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICB9XHJcbi8vICAgICAuc29ydEljb24ge1xyXG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICAgIHJpZ2h0OiAycHg7XHJcbi8vICAgICAgIHRvcDogMTBweDtcclxuLy8gICAgICAgY29sb3I6ICMxZmEwZTI7XHJcbi8vICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4vLyAgICAgICB6LWluZGV4OiA5OTk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIHRkIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbi8vICAgICBjb2xvcjogIzJhMmEyYTtcclxuLy8gICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDEzcHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjdmOTtcclxuLy8gICAgICYuY29tcGxldGVkIHtcclxuLy8gICAgICAgY29sb3I6ICNhOWUyYWY7XHJcbi8vICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICB9XHJcbi8vICAgICAmLnBlbmRpbmcge1xyXG4vLyAgICAgICBjb2xvcjogI2ZkZDI4NTtcclxuLy8gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIH1cclxuLy8gICAgICYuYWN0aW9uVGQge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTg3LCAyMTcsIDIyOSwgMC4yOCk7XHJcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgbWFyZ2luOiBhdXRvO1xyXG4vLyAgICAgICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xyXG4vLyAgICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICAgIHdpZHRoOiAxMGVtO1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG4uYXBwbHlmaWx0ZXJidG4ge1xyXG4gICAgYmFja2dyb3VuZDogIzAxYTBlMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE4cHgvMjRweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmFwcGx5ZmlsdGVyYnRuOmhvdmVyLFxyXG4uYXBwbHlmaWx0ZXJidG46Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogIzAxYTBlMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm15QnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLnRleHQtcHJpbWFyeSB7XHJcbiAgICAgICAgY29sb3I6ICMxZmEwZTIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEzcHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIGNvbG9yOiAjYTVhNWE1O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG5cclxuLmZpbHRlci1idG4ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzFmYTBlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmZpbHRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMWZhMGUyO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHRhYmxlIHRib2R5IHRkIC5hY3Rpb25CdG4sXHJcbi50YWJsZUZpeEhlYWQgdGFibGUgdGJvZHkgdGQgLmFjdGlvbkJ0bjpob3ZlcixcclxuLnRhYmxlRml4SGVhZCB0YWJsZSB0Ym9keSB0ZCAuYWN0aW9uQnRuOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZmEwZTI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTFweC8xNXB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uRm9udGZvcm1vZHVsZUNvdW50IHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE1cHgvMjBweCBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGguYWN0aW9uVGgsXHJcbiAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgICAgICAgICAgc3BhbixcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGQuZml4ZWRDb2x1bW4ge1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aC5maXhlZENvbHVtbjpsYXN0LWNoaWxkLFxyXG4gICAgICAgIHRkLmZpeGVkQ29sdW1uOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZml4ZWRDb2x1bW46bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgICAgICAgICByaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCA1cHggLTVweCByZ2IoMTYwLCAyMDYsIDIxNCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFzc2Vzc21lbnRRdWVBbnMtYmxvY2sge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgLmFzc2Vzc21lbnRUaXRsZSB7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTVweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAxYTBlMjtcclxuICAgICAgICBjb2xvcjogIzAxYTBlMjtcclxuICAgIH1cclxuICAgIC5xc0Jsb2NrIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAxYTBlMjtcclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLnF1ZXN0aW9ucy1ibG9jayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAuQ2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIG1hcmdpbjogMHB4IDBweCA1cHggLTFweDsgKi9cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdExibCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTVweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ncm91cFF1ZXN0aW9uRGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAucXVlcy1ibGsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5vU3ViQ2F0IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXMtYmxrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZ3JvdXBRdWVzdGlvbkRpdixcclxuICAgICAgICAgICAgICAgIC5ub1N1YkNhdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YkNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5rZXkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXNzZXNzbWVudFF1ZS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzLWNhcmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYub3RoZXJRdWVzQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzdGlvbl9udW1iZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNjAwIDE1cHgvMzBweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE0cHgvMS40IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbi1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRMaXN0LURpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtIDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRJbmRleCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA2MDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdFRleHQtZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBwYWRkaW5nOiAwLjVyZW07ICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QxZDdkYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXhOUzR6SURFekxqSWlQaUFnUEhCaGRHZ2dabWxzYkQwaUkyWm1aaUlnWkQwaVRURTBMamN1T0d3dExqUXRMalJoTVM0M0lERXVOeUF3SURBZ01DMHlMak11TVV3MUxqSWdPQzR5SURNZ05pNDBZVEV1TnlBeExqY2dNQ0F3SURBdE1pNHpMakZNTGpRZ04yRXhMamNnTVM0M0lEQWdNQ0F3SUM0eElESXVNMnd6TGpnZ015NDFZVEV1TnlBeExqY2dNQ0F3SURBZ01pNDBMUzR4VERFMUlETXVNV0V4TGpjZ01TNDNJREFnTUNBd0xTNHlMVEl1TTNvaUlHUmhkR0V0Ym1GdFpUMGlVR1poWkNBMElpOCtQQzl6ZG1jKyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhdGluZ1N0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3cHggMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFyRmlsbGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmN2MwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZXhjZWxidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvLyBwYWRkaW5nOiAycHg7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAuZXhjZWxGb250IHtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxMXB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLnRvdGFsUGFydGljaXBhbnRzIHtcclxuICAgIG1heC13aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "K7hc":
    /*!*******************************!*\
      !*** ./src/app/app-config.ts ***!
      \*******************************/

    /*! exports provided: NextConfig */

    /***/
    function K7hc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NextConfig", function () {
        return NextConfig;
      });

      var NextConfig = function NextConfig() {
        _classCallCheck(this, NextConfig);
      };

      NextConfig.config = {
        layout: 'vertical',
        subLayout: '',
        collapseMenu: false,
        layoutType: 'menu-dark',
        headerBackColor: 'header-default',
        navBrandColor: 'brand-default',
        rtlLayout: false,
        navFixedLayout: true,
        headerFixedLayout: true,
        boxLayout: false
      };
      /***/
    },

    /***/
    "L63d":
    /*!****************************************************************************************!*\
      !*** ./src/app/theme/shared/components/dateRangePicker/dateRangePicker.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function L63d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dateRangePicker {\n  width: 100%;\n  height: 60px;\n  background: #fff;\n}\n\nul {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n}\n\n.dateBlock.customDateBlock {\n  width: 80px;\n}\n\n.dateBlock {\n  float: left;\n  width: 50px;\n  height: 35px;\n  color: #c3c3c3;\n  margin: 3.6% 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.dateBlock .dateBlock-inner {\n  font: normal normal 400 13px/35px Helvetica Neue;\n  letter-spacing: 0px;\n  margin: auto;\n  text-align: center;\n}\n\n.dateBlock:hover,\n.dateBlockactive {\n  background: #6ac7ee;\n  color: #fff;\n}\n\n.dateBlock.noBg:hover,\n.dateBlockactive.noBg {\n  background: transparent;\n  color: #6ac7ee;\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.customDateBlock .fromToDatePicker {\n  display: inline-flex;\n  width: 210px;\n}\n\n.customDateBlock .fromToDatePicker .toString {\n  color: #7044cd;\n  line-height: 34px;\n  font-weight: bold;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n}\n\n.customDateBlock .fromToDatePicker input,\n.customDateBlock .fromToDatePicker input:focus,\n.customDateBlock .fromToDatePicker input:hover {\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n  border-radius: 0px;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n  padding: 0.375rem 0px;\n  text-align: center;\n}\n\n.customDateBlock .fromToDatePicker .btn,\n.customDateBlock .fromToDatePicker .btn:hover,\n.customDateBlock .fromToDatePicker .btn:focus {\n  box-shadow: none;\n  outline: none;\n  border: none;\n}\n\n.profileInfo {\n  text-align: right;\n}\n\n.profileInfo .userPic img {\n  max-width: 100%;\n  height: 30px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\n.profileInfo .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n\n.profileInfo .logoutImg .feather {\n  padding: 5px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav li > a {\n  font-size: 16px;\n  padding: 0 0.6rem;\n  color: #7044cd;\n}\n\n.navbarContainer .navbar-nav li .userProfile {\n  display: inline-block;\n}\n\n.navbarContainer .navbar-nav li .userProfile i {\n  font-size: 10px;\n  margin-left: 10px;\n}\n\n.navbarContainer .navbar-nav li .userProfile img {\n  max-width: 100%;\n  height: 40px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li .userProfile .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n\n.navbarContainer .navbar-nav li.header-notification {\n  perspective: 1000px;\n  z-index: 99;\n  position: relative;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification {\n  background: #fff;\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  visibility: visible;\n  transform: translateY(20px);\n  padding: 0px;\n  z-index: 999;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a {\n  border-radius: 5px;\n  padding: 0.7em 20px;\n  display: block;\n  text-decoration: none;\n  font-size: 15px;\n  padding-left: 0;\n  color: #222;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:hover {\n  background-color: #f6fcff;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification i {\n  font-size: 15px;\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification.active1:before {\n  content: \"\";\n  border: 10px solid transparent;\n  border-left-color: #fff;\n  border-top-color: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: -9px;\n  right: 20px;\n  box-shadow: -30px -11px 35px 0 rgba(0, 0, 0, 0.25);\n  transform: rotate(45deg);\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhdGVSYW5nZVBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQUk7RUFDSSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBRUE7O0VBRUksbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7O0VBRUksdUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTs7RUFFSSx5QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHdDQUFBO0FBQ0o7O0FBR0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFBUjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBQ1o7O0FBQ1E7OztFQUdJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ1o7O0FBQ1E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDWjs7QUFJQTtFQUNJLGlCQUFBO0FBREo7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEWjs7QUFJSTtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBRlI7O0FBS1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFIWjs7QUFXWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFSaEI7O0FBVVk7RUFDSSxxQkFBQTtBQVJoQjs7QUFTZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFQcEI7O0FBU2dCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBUHBCOztBQVNnQjtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUHBCOztBQVVZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUmhCOztBQVNnQjtFQUNJLGdCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFQcEI7O0FBUW9CO0VBSUksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVR4Qjs7QUFBd0I7RUFDSSx5QkFBQTtBQUU1Qjs7QUFRNEI7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFOaEM7O0FBT2dDO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBTHBDOztBQU9nQztFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQUxwQzs7QUFVb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBUnhCOztBQVd3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQVQ1QiIsImZpbGUiOiJkYXRlUmFuZ2VQaWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZVJhbmdlUGlja2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZGF0ZUJsb2NrLmN1c3RvbURhdGVCbG9jayB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmRhdGVCbG9jayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNjM2MzYzM7XHJcbiAgICBtYXJnaW46IDMuNiUgNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmRhdGVCbG9jay1pbm5lciB7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTNweC8zNXB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGVCbG9jazpob3ZlcixcclxuLmRhdGVCbG9ja2FjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNmFjN2VlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kYXRlQmxvY2subm9CZzpob3ZlcixcclxuLmRhdGVCbG9ja2FjdGl2ZS5ub0JnIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM2YWM3ZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLmhpZGRlbiB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMTg1cmVtIDAuMjVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkuZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4uY3VzdG9tLWRheS5yYW5nZSxcclxuLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIsIDExNywgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkuZmFkZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxufVxyXG5cclxuLmN1c3RvbURhdGVCbG9jayB7XHJcbiAgICAuZnJvbVRvRGF0ZVBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgIC50b1N0cmluZyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGlucHV0OmZvY3VzLFxyXG4gICAgICAgIGlucHV0OmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4sXHJcbiAgICAgICAgLmJ0bjpob3ZlcixcclxuICAgICAgICAuYnRuOmZvY3VzIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGVJbmZvIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLnVzZXJQaWMge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLmxvZ291dEltZyB7XHJcbiAgICAgICAgLmZlYXRoZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhckNvbnRhaW5lciB7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudXNlclByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlck5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaGVhZGVyLW5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmZjZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbSAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KFtocmVmXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoW3RhYmluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5hY3RpdmUxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTlweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTMwcHggLTExcHggMzVweCAwIHJnYigwIDAgMCAvIDI1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "LfhD":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function LfhD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Lwh+":
    /*!********************************************************************************!*\
      !*** ./src/app/theme/shared/components/certificate/certificate.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function Lwh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".m-0 {\n  margin: 0px;\n}\n\n.modal-content {\n  background-color: transparent;\n}\n\n.modal-content .Downloadbtn,\n.modal-content .Downloadbtn:hover,\n.modal-content .Downloadbtn:focus {\n  color: white;\n  background-color: #7044cd;\n  font: normal normal 400 12px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n}\n\n.modal-content .certImgDiv {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.modal-content .certImgDiv .certImg {\n  max-width: 100%;\n}\n\n.modal-content .certImgDiv .empName {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 63%);\n  top: calc(100% - 59.5%);\n  font: normal normal bold 15px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 83.5%);\n}\n\n.modal-content .certImgDiv .levelName {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 52%);\n  top: calc(100% - 51.5%);\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 69%);\n}\n\n.modal-content .certImgDiv .workStation {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 69.5%);\n  top: calc(100% - 45.3%);\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 84%);\n}\n\n.modal-content .certImgDiv .cellName {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 63.5%);\n  top: calc(100% - 39%);\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 84%);\n}\n\n.modal-content .certImgDiv .plantName {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 64.5%);\n  top: calc(100% - 32%);\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 58.5%);\n}\n\n.modal-content .certImgDiv .date {\n  position: absolute;\n  z-index: 999;\n  left: calc(100% - 50%);\n  top: calc(100% - 10%);\n  font: normal normal bold 13px/1.5 Helvetica Neue;\n  color: #000;\n  vertical-align: middle;\n  text-align: center;\n  right: calc(100% - 64.5%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUNBO0VBQ0ksNkJBQUE7QUFFSjs7QUFESTs7O0VBR0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQUdSOztBQURJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUdSOztBQUZRO0VBQ0ksZUFBQTtBQUlaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdaOztBQURRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBUUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUpaIiwiZmlsZSI6ImNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tMCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC5Eb3dubG9hZGJ0bixcclxuICAgIC5Eb3dubG9hZGJ0bjpob3ZlcixcclxuICAgIC5Eb3dubG9hZGJ0bjpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5jZXJ0SW1nRGl2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAuY2VydEltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjB2aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbXBOYW1lIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDYzJSk7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gNTkuNSUpO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTVweCAvIDEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoMTAwJSAtIDgzLjUlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldmVsTmFtZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA1MiUpO1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDUxLjUlKTtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHggLyAxLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSA2OSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAud29ya1N0YXRpb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNjkuNSUpO1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDQ1LjMlKTtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHggLyAxLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSA4NCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VsbE5hbWUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNjMuNSUpO1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoMTAwJSAtIDM5JSk7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4IC8gMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICByaWdodDogY2FsYygxMDAlIC0gODQlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYW50TmFtZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSA2NC41JSk7XHJcbiAgICAgICAgICAgIHRvcDogY2FsYygxMDAlIC0gMzIlKTtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHggLyAxLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgLSA1OC41JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIC8vIGxlZnQ6IGNhbGMoMTAwJSAtIDY3JSk7XHJcbiAgICAgICAgICAgIC8vIHRvcDogY2FsYygxMDAlIC0gOSUpO1xyXG4gICAgICAgICAgICAvLyBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTNweCAvIDEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgLy8gY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIC8vIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLy8gcmlnaHQ6IGNhbGMoMTAwJSAtIDQ3LjUlKTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNTAlKTtcclxuICAgICAgICAgICAgdG9wOiBjYWxjKDEwMCUgLSAxMCUpO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTNweCAvIDEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcmlnaHQ6IGNhbGMoMTAwJSAtIDY0LjUlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "ML1o":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/assessessment-detail-modal/assessessment-detail-modal.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ML1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header p-0\" style=\"border-bottom:2px solid #7044cd\">\r\n    <h2 class=\"assessmen_det_header\">Assessment</h2>\r\n    <button type=\"button\" class=\"close closebtn1\" aria-label=\"Close\" (click)=\"dismissModal()\">\r\n        <span aria-hidden=\"true\" class=\"close-icon\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\" style=\"background: #F1F1F1 0% 0% no-repeat padding-box;padding: 0; padding-top: 10px;\">\r\n    <div class=\"row m-0 assessment-block\">\r\n        <div class=\"col-4\">\r\n            <div class=\"assessmentDet-block\">\r\n                <perfect-scrollbar [style.max-height]=\"'calc(100vh - 135px)'\">\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Assessment ID</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.assessmentId\r\n                                }}</span>\r\n                            <!-- {{empAssessmentDet.assessmentId}} -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Assessment Type</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.assessmentType || 'N/A'\r\n                                }}</span>\r\n                            <!-- {{empAssessmentDet.assessmentId}} -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Plant</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.branchName\r\n                                }}</span>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Cell</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">\r\n                                {{assessmentDetailData.deptName}}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Level</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.levelName}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Actual Score</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.score}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-6 text-left p-r-0\">\r\n                            <span class=\"key\">Total Score</span>\r\n                        </div>\r\n                        <div class=\"col-6 text-right\">\r\n                            <span class=\"value\">{{assessmentDetailData.totalMarks\r\n                                }}</span>\r\n\r\n                        </div>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n            </div>\r\n        </div>\r\n        <div class=\"p-0 pr col-8\">\r\n            <div class=\"dataNotAvailable\"\r\n                *ngIf=\"!empAssessmentDet || !empAssessmentDet.quesList || empAssessmentDet.quesList.length === 0\">\r\n\r\n            </div>\r\n            <div class=\"assessmentQueAns-block\"\r\n                *ngIf=\"empAssessmentDet && empAssessmentDet.quesList != null && empAssessmentDet.quesList.length > 0\">\r\n                <perfect-scrollbar [style.height]=\"'calc(100vh - 62px)'\" #QuesPerfectScroll>\r\n                    <ng-container\r\n                        *ngIf=\"empAssessmentDet.quesListGroupBy != null && empAssessmentDet.quesListGroupBy.length > 0\">\r\n                        <div *ngFor=\"let quesGroup of empAssessmentDet.quesListGroupBy\">\r\n                            <div class=\"qsBlock\">\r\n                                <div class=\"questions-block\">\r\n                                    <div class=\"overlay\">\r\n                                        <div class=\"Category\" *ngIf=\"quesGroup.catId && quesGroup.catName\">\r\n                                            <label class=\"form-check-label catLbl\" for=\"isCatgeory\">{{quesGroup.catName\r\n                                                || 'N/A'}}</label>\r\n                                        </div>\r\n                                        <ng-container\r\n                                            *ngIf=\"quesGroup.quesList != null && quesGroup.quesList.length > 0\">\r\n                                            <div class=\"assessmentQue-block\">\r\n                                                <div class=\"ques-card otherQuesCard\"\r\n                                                    *ngFor=\"let ques of quesGroup.quesList; let quesIndex = index\">\r\n                                                    <div class=\"row m-0\">\r\n                                                        <div class=\"col-1 p-0\">\r\n                                                            <p class=\"question_number text-center\">{{quesIndex + 1}}</p>\r\n                                                        </div>\r\n                                                        <div class=\"col-11\">\r\n                                                            <p class=\"questions\">{{ques.question || 'N/A'}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"option-block\">\r\n                                                        <ul class=\"optList-Div\">\r\n                                                            <ng-container\r\n                                                                *ngIf=\"ques.optList != null && ques.optList.length > 0\">\r\n                                                                <li\r\n                                                                    *ngFor=\"let opt of ques.optList; let optIndex = index\">\r\n                                                                    <div class=\"row\">\r\n                                                                        <div class=\"col-2 p-0 text-center\"\r\n                                                                            style=\"margin: auto 0px;\">\r\n                                                                            <div class=\"optIndex\">\r\n                                                                                {{constant.AlphabetLetter[optIndex]}}\r\n                                                                            </div>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-8 p-0\">\r\n                                                                            <ng-container>\r\n                                                                                <div class=\"optText-div radiobtn\">\r\n                                                                                    <input type=\"radio\"\r\n                                                                                        id=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\"\r\n                                                                                        name=\"answer{{ques.quetionId}}\"\r\n                                                                                        value=\"{{opt.option}}\"\r\n                                                                                        [checked]=\"opt.selected\" disabled/>\r\n                                                                                    <!-- id=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\" -->\r\n                                                                                    <!-- name=\"answer{{ques.quetionId}}\" -->\r\n                                                                                    <label\r\n                                                                                        for=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\"\r\n                                                                                        class=\"optText\">\r\n                                                                                        <!-- for=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\" -->\r\n                                                                                        {{opt.option || 'N/A'}}\r\n                                                                                    </label>\r\n                                                                                </div>\r\n                                                                            </ng-container>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </li>\r\n                                                            </ng-container>\r\n                                                        </ul>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </perfect-scrollbar>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "MdYY":
    /*!***************************************************************************!*\
      !*** ./src/app/theme/shared/components/certificate/certificate.module.ts ***!
      \***************************************************************************/

    /*! exports provided: CertificateModule */

    /***/
    function MdYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificateModule", function () {
        return CertificateModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _certificate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./certificate.component */
      "fsj3");

      var CertificateModule = function CertificateModule() {
        _classCallCheck(this, CertificateModule);
      };

      CertificateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_certificate_component__WEBPACK_IMPORTED_MODULE_3__["CertificateComponent"]],
        exports: [_certificate_component__WEBPACK_IMPORTED_MODULE_3__["CertificateComponent"]]
      })], CertificateModule);
      /***/
    },

    /***/
    "MmxS":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/image-cropper/component/image-cropper.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ImageCropperComponent */

    /***/
    function MmxS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function () {
        return ImageCropperComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_image_cropper_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./image-cropper.component.html */
      "sHKn");
      /* harmony import */


      var _image_cropper_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./image-cropper.component.scss */
      "2T53");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _utils_exif_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../utils/exif.utils */
      "yxGX");
      /* harmony import */


      var _utils_resize_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../utils/resize.utils */
      "EIj0");
      /* harmony import */


      var _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../interfaces/move-start.interface */
      "ybcR");

      var ImageCropperComponent = /*#__PURE__*/function () {
        function ImageCropperComponent(sanitizer, cd) {
          _classCallCheck(this, ImageCropperComponent);

          this.sanitizer = sanitizer;
          this.cd = cd;
          this.Hammer = typeof window !== 'undefined' ? window.Hammer : null;
          this.setImageMaxSizeRetries = 0;
          this.cropperScaledMinWidth = 20;
          this.cropperScaledMinHeight = 20;
          this.exifTransform = {
            rotate: 0,
            flip: false
          };
          this.autoRotateSupported = Object(_utils_exif_utils__WEBPACK_IMPORTED_MODULE_5__["supportsAutomaticRotation"])();
          this.stepSize = 3;
          this.marginLeft = '0px';
          this.imageVisible = false;
          this.moveTypes = _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"];
          this.format = 'png';
          this.maintainAspectRatio = true;
          this.transform = {};
          this.aspectRatio = 1;
          this.resizeToWidth = 0;
          this.resizeToHeight = 0;
          this.cropperMinWidth = 0;
          this.cropperMinHeight = 0;
          this.cropperStaticWidth = 0;
          this.cropperStaticHeight = 0;
          this.canvasRotation = 0;
          this.initialStepSize = 3;
          this.roundCropper = false;
          this.onlyScaleDown = false;
          this.imageQuality = 92;
          this.autoCrop = true;
          this.containWithinAspectRatio = false;
          this.hideResizeSquares = false;
          this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
          };
          this.alignImage = 'center';
          this.disabled = false;
          this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.startCropImage = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.cropperReady = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.initCropper();
        }

        _createClass(ImageCropperComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.cropperStaticHeight && this.cropperStaticWidth) {
              this.hideResizeSquares = true;
              this.cropperMinWidth = this.cropperStaticWidth;
              this.cropperMinHeight = this.cropperStaticHeight;
              this.maintainAspectRatio = false;
            }

            this.onChangesInputImage(changes);

            if (this.originalImage && this.originalImage.complete && this.exifTransform && (changes.containWithinAspectRatio || changes.canvasRotation)) {
              this.transformOriginalImage();
            }

            if (changes.cropper) {
              this.setMaxSize();
              this.setCropperScaledMinSize();
              this.checkCropperPosition(false);
              this.doAutoCrop();
              this.cd.markForCheck();
            }

            if (changes.aspectRatio && this.imageVisible) {
              this.resetCropperPosition();
            }

            if (changes.transform) {
              this.transform = this.transform || {};
              this.setCssTransform();
              this.doAutoCrop();
            }
          }
        }, {
          key: "onChangesInputImage",
          value: function onChangesInputImage(changes) {
            if (changes.imageChangedEvent || changes.imageURL || changes.imageBase64 || changes.imageFile) {
              this.initCropper();
            }

            if (changes.imageChangedEvent && this.isValidImageChangedEvent()) {
              this.loadImageFile(this.imageChangedEvent.target.files[0]);
            }

            if (changes.imageURL && this.imageURL) {
              this.loadImageFromURL(this.imageURL);
            }

            if (changes.imageBase64 && this.imageBase64) {
              this.loadBase64Image(this.imageBase64);
            }

            if (changes.imageFile && this.imageFile) {
              this.loadImageFile(this.imageFile);
            }
          }
        }, {
          key: "isValidImageChangedEvent",
          value: function isValidImageChangedEvent() {
            return this.imageChangedEvent && this.imageChangedEvent.target && this.imageChangedEvent.target.files && this.imageChangedEvent.target.files.length > 0;
          }
        }, {
          key: "setCssTransform",
          value: function setCssTransform() {
            this.safeTransformStyle = this.sanitizer.bypassSecurityTrustStyle('scaleX(' + (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1) + ')' + 'scaleY(' + (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1) + ')' + 'rotate(' + (this.transform.rotate || 0) + 'deg)');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stepSize = this.initialStepSize;
            this.activatePinchGesture();
          }
        }, {
          key: "initCropper",
          value: function initCropper() {
            this.imageVisible = false;
            this.transformedImage = null;
            this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg' + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU' + 'AAarVyFEAAAAASUVORK5CYII=';
            this.moveStart = {
              active: false,
              type: null,
              position: null,
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 0,
              clientX: 0,
              clientY: 0
            };
            this.maxSize = {
              width: 0,
              height: 0
            };
            this.originalSize = {
              width: 0,
              height: 0
            };
            this.transformedSize = {
              width: 0,
              height: 0
            };
            this.cropper.x1 = -100;
            this.cropper.y1 = -100;
            this.cropper.x2 = 10000;
            this.cropper.y2 = 10000;
          }
        }, {
          key: "loadImage",
          value: function loadImage(imageBase64, imageType) {
            if (this.isValidImageType(imageType)) {
              this.loadBase64Image(imageBase64);
            } else {
              this.loadImageFailed.emit();
            }
          }
        }, {
          key: "loadImageFile",
          value: function loadImageFile(file) {
            var _this5 = this;

            var fileReader = new FileReader();

            fileReader.onload = function (event) {
              return _this5.loadImage(event.target.result, file.type);
            };

            fileReader.readAsDataURL(file);
          }
        }, {
          key: "isValidImageType",
          value: function isValidImageType(type) {
            return /image\/(png|jpg|jpeg|bmp|gif|tiff|webp)/.test(type);
          }
        }, {
          key: "loadBase64Image",
          value: function loadBase64Image(imageBase64) {
            var _this6 = this;

            this.autoRotateSupported.then(function (supported) {
              return _this6.checkExifAndLoadBase64Image(imageBase64, supported);
            }).then(function () {
              return _this6.transformOriginalImage();
            })["catch"](function (error) {
              _this6.loadImageFailed.emit();

              _this6.originalImage = null;
              _this6.originalBase64 = null;
              console.error(error);
            });
          }
        }, {
          key: "checkExifAndLoadBase64Image",
          value: function checkExifAndLoadBase64Image(imageBase64, autoRotateSupported) {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.originalImage = new Image();

              _this7.originalImage.onload = function () {
                _this7.originalBase64 = imageBase64;
                _this7.exifTransform = Object(_utils_exif_utils__WEBPACK_IMPORTED_MODULE_5__["getTransformationsFromExifData"])(autoRotateSupported ? -1 : imageBase64);
                _this7.originalSize.width = _this7.originalImage.naturalWidth;
                _this7.originalSize.height = _this7.originalImage.naturalHeight;
                resolve();
              };

              _this7.originalImage.onerror = reject;
              _this7.originalImage.src = imageBase64;
            });
          }
        }, {
          key: "loadImageFromURL",
          value: function loadImageFromURL(url) {
            var _this8 = this;

            var img = new Image();

            img.onerror = function () {
              return _this8.loadImageFailed.emit();
            };

            img.onload = function () {
              var canvas = document.createElement('canvas');
              var context = canvas.getContext('2d');
              canvas.width = img.width;
              canvas.height = img.height;
              context.drawImage(img, 0, 0);

              _this8.loadBase64Image(canvas.toDataURL());
            };

            img.crossOrigin = 'anonymous';
            img.src = url;
          }
        }, {
          key: "transformOriginalImage",
          value: function transformOriginalImage() {
            if (!this.originalImage || !this.originalImage.complete || !this.exifTransform) {
              return Promise.reject(new Error('No image loaded'));
            }

            var transformedBase64 = this.transformImageBase64();
            return this.setTransformedImage(transformedBase64);
          }
        }, {
          key: "transformImageBase64",
          value: function transformImageBase64() {
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

            if (canvasRotation === 0 && !this.exifTransform.flip && !this.containWithinAspectRatio) {
              return this.originalBase64;
            }

            var transformedSize = this.getTransformedSize();
            var canvas = document.createElement('canvas');
            canvas.width = transformedSize.width;
            canvas.height = transformedSize.height;
            var ctx = canvas.getContext('2d');
            ctx.setTransform(this.exifTransform.flip ? -1 : 1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
            ctx.rotate(Math.PI * (canvasRotation / 2));
            ctx.drawImage(this.originalImage, -this.originalSize.width / 2, -this.originalSize.height / 2);
            return canvas.toDataURL();
          }
        }, {
          key: "getTransformedSize",
          value: function getTransformedSize() {
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;

            if (this.containWithinAspectRatio) {
              if (canvasRotation % 2) {
                var minWidthToContain = this.originalSize.width * this.aspectRatio;
                var minHeightToContain = this.originalSize.height / this.aspectRatio;
                return {
                  width: Math.max(this.originalSize.height, minWidthToContain),
                  height: Math.max(this.originalSize.width, minHeightToContain)
                };
              } else {
                var _minWidthToContain = this.originalSize.height * this.aspectRatio;

                var _minHeightToContain = this.originalSize.width / this.aspectRatio;

                return {
                  width: Math.max(this.originalSize.width, _minWidthToContain),
                  height: Math.max(this.originalSize.height, _minHeightToContain)
                };
              }
            }

            if (canvasRotation % 2) {
              return {
                height: this.originalSize.width,
                width: this.originalSize.height
              };
            }

            return {
              width: this.originalSize.width,
              height: this.originalSize.height
            };
          }
        }, {
          key: "setTransformedImage",
          value: function setTransformedImage(transformedBase64) {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9.transformedBase64 = transformedBase64;
              _this9.safeImgDataUrl = _this9.sanitizer.bypassSecurityTrustResourceUrl(transformedBase64);
              _this9.transformedImage = new Image();

              _this9.transformedImage.onload = function () {
                _this9.transformedSize.width = _this9.transformedImage.naturalWidth;
                _this9.transformedSize.height = _this9.transformedImage.naturalHeight;

                _this9.cd.markForCheck();

                resolve();
              };

              _this9.transformedImage.src = _this9.transformedBase64;
            });
          }
        }, {
          key: "imageLoadedInView",
          value: function imageLoadedInView() {
            var _this10 = this;

            if (this.transformedImage != null) {
              this.imageLoaded.emit();
              this.setImageMaxSizeRetries = 0;
              setTimeout(function () {
                return _this10.checkImageMaxSizeRecursively();
              });
            }
          }
        }, {
          key: "checkImageMaxSizeRecursively",
          value: function checkImageMaxSizeRecursively() {
            var _this11 = this;

            if (this.setImageMaxSizeRetries > 40) {
              this.loadImageFailed.emit();
            } else if (this.sourceImageLoaded()) {
              this.setMaxSize();
              this.setCropperScaledMinSize();
              this.resetCropperPosition();
              this.cropperReady.emit(Object.assign({}, this.maxSize));
              this.cd.markForCheck();
            } else {
              this.setImageMaxSizeRetries++;
              setTimeout(function () {
                return _this11.checkImageMaxSizeRecursively();
              }, 50);
            }
          }
        }, {
          key: "sourceImageLoaded",
          value: function sourceImageLoaded() {
            return this.sourceImage && this.sourceImage.nativeElement && this.sourceImage.nativeElement.offsetWidth > 0;
          }
        }, {
          key: "onResize",
          value: function onResize() {
            this.resizeCropperPosition();
            this.setMaxSize();
            this.setCropperScaledMinSize();
          }
        }, {
          key: "activatePinchGesture",
          value: function activatePinchGesture() {
            if (this.Hammer) {
              var hammer = new this.Hammer(this.wrapper.nativeElement);
              hammer.get('pinch').set({
                enable: true
              });
              hammer.on('pinchmove', this.onPinch.bind(this));
              hammer.on('pinchend', this.pinchStop.bind(this));
              hammer.on('pinchstart', this.startPinch.bind(this));
            } else if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["isDevMode"])()) {
              console.warn('[NgxImageCropper] Could not find HammerJS - Pinch Gesture won\'t work');
            }
          }
        }, {
          key: "resizeCropperPosition",
          value: function resizeCropperPosition() {
            var sourceImageElement = this.sourceImage.nativeElement;

            if (this.maxSize.width !== sourceImageElement.offsetWidth || this.maxSize.height !== sourceImageElement.offsetHeight) {
              this.cropper.x1 = this.cropper.x1 * sourceImageElement.offsetWidth / this.maxSize.width;
              this.cropper.x2 = this.cropper.x2 * sourceImageElement.offsetWidth / this.maxSize.width;
              this.cropper.y1 = this.cropper.y1 * sourceImageElement.offsetHeight / this.maxSize.height;
              this.cropper.y2 = this.cropper.y2 * sourceImageElement.offsetHeight / this.maxSize.height;
            }
          }
        }, {
          key: "resetCropperPosition",
          value: function resetCropperPosition() {
            var sourceImageElement = this.sourceImage.nativeElement;

            if (this.cropperStaticHeight && this.cropperStaticWidth) {
              this.cropper.x1 = 0;
              this.cropper.x2 = sourceImageElement.offsetWidth > this.cropperStaticWidth ? this.cropperStaticWidth : sourceImageElement.offsetWidth;
              this.cropper.y1 = 0;
              this.cropper.y2 = sourceImageElement.offsetHeight > this.cropperStaticHeight ? this.cropperStaticHeight : sourceImageElement.offsetHeight;
            } else {
              if (!this.maintainAspectRatio) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
              } else if (sourceImageElement.offsetWidth / this.aspectRatio < sourceImageElement.offsetHeight) {
                this.cropper.x1 = 0;
                this.cropper.x2 = sourceImageElement.offsetWidth;
                var cropperHeight = sourceImageElement.offsetWidth / this.aspectRatio;
                this.cropper.y1 = (sourceImageElement.offsetHeight - cropperHeight) / 2;
                this.cropper.y2 = this.cropper.y1 + cropperHeight;
              } else {
                this.cropper.y1 = 0;
                this.cropper.y2 = sourceImageElement.offsetHeight;
                var cropperWidth = sourceImageElement.offsetHeight * this.aspectRatio;
                this.cropper.x1 = (sourceImageElement.offsetWidth - cropperWidth) / 2;
                this.cropper.x2 = this.cropper.x1 + cropperWidth;
              }
            }

            this.doAutoCrop();
            this.imageVisible = true;
          }
        }, {
          key: "keyboardAccess",
          value: function keyboardAccess(event) {
            this.changeKeyboardStepSize(event);
            this.keyboardMoveCropper(event);
          }
        }, {
          key: "changeKeyboardStepSize",
          value: function changeKeyboardStepSize(event) {
            if (event.key >= '1' && event.key <= '9') {
              this.stepSize = +event.key;
              return;
            }
          }
        }, {
          key: "keyboardMoveCropper",
          value: function keyboardMoveCropper(event) {
            var keyboardWhiteList = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];

            if (!keyboardWhiteList.includes(event.key)) {
              return;
            }

            var moveType = event.shiftKey ? _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Resize : _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Move;
            var position = event.altKey ? this.getInvertedPositionForKey(event.key) : this.getPositionForKey(event.key);
            var moveEvent = this.getEventForKey(event.key, this.stepSize);
            event.preventDefault();
            event.stopPropagation();
            this.startMove({
              clientX: 0,
              clientY: 0
            }, moveType, position);
            this.moveImg(moveEvent);
            this.moveStop();
          }
        }, {
          key: "getPositionForKey",
          value: function getPositionForKey(key) {
            switch (key) {
              case 'ArrowUp':
                return 'top';

              case 'ArrowRight':
                return 'right';

              case 'ArrowDown':
                return 'bottom';

              case 'ArrowLeft':
              default:
                return 'left';
            }
          }
        }, {
          key: "getInvertedPositionForKey",
          value: function getInvertedPositionForKey(key) {
            switch (key) {
              case 'ArrowUp':
                return 'bottom';

              case 'ArrowRight':
                return 'left';

              case 'ArrowDown':
                return 'top';

              case 'ArrowLeft':
              default:
                return 'right';
            }
          }
        }, {
          key: "getEventForKey",
          value: function getEventForKey(key, stepSize) {
            switch (key) {
              case 'ArrowUp':
                return {
                  clientX: 0,
                  clientY: stepSize * -1
                };

              case 'ArrowRight':
                return {
                  clientX: stepSize,
                  clientY: 0
                };

              case 'ArrowDown':
                return {
                  clientX: 0,
                  clientY: stepSize
                };

              case 'ArrowLeft':
              default:
                return {
                  clientX: stepSize * -1,
                  clientY: 0
                };
            }
          }
        }, {
          key: "startMove",
          value: function startMove(event, moveType) {
            var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (this.moveStart && this.moveStart.active && this.moveStart.type === _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Pinch) {
              return;
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            this.moveStart = Object.assign({
              active: true,
              type: moveType,
              position: position,
              clientX: this.getClientX(event),
              clientY: this.getClientY(event)
            }, this.cropper);
          }
        }, {
          key: "startPinch",
          value: function startPinch(event) {
            if (!this.safeImgDataUrl) {
              return;
            }

            if (event.preventDefault) {
              event.preventDefault();
            }

            this.moveStart = Object.assign({
              active: true,
              type: _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Pinch,
              position: 'center',
              clientX: this.cropper.x1 + (this.cropper.x2 - this.cropper.x1) / 2,
              clientY: this.cropper.y1 + (this.cropper.y2 - this.cropper.y1) / 2
            }, this.cropper);
          }
        }, {
          key: "moveImg",
          value: function moveImg(event) {
            if (this.moveStart.active) {
              if (event.stopPropagation) {
                event.stopPropagation();
              }

              if (event.preventDefault) {
                event.preventDefault();
              }

              if (this.moveStart.type === _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Move) {
                this.move(event);
                this.checkCropperPosition(true);
              } else if (this.moveStart.type === _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Resize) {
                if (!this.cropperStaticWidth && !this.cropperStaticHeight) {
                  this.resize(event);
                }

                this.checkCropperPosition(false);
              }

              this.cd.detectChanges();
            }
          }
        }, {
          key: "onPinch",
          value: function onPinch(event) {
            if (this.moveStart.active) {
              if (event.stopPropagation) {
                event.stopPropagation();
              }

              if (event.preventDefault) {
                event.preventDefault();
              }

              if (this.moveStart.type === _interfaces_move_start_interface__WEBPACK_IMPORTED_MODULE_7__["MoveTypes"].Pinch) {
                this.resize(event);
                this.checkCropperPosition(false);
              }

              this.cd.detectChanges();
            }
          }
        }, {
          key: "setMaxSize",
          value: function setMaxSize() {
            if (this.sourceImage) {
              var sourceImageElement = this.sourceImage.nativeElement;
              this.maxSize.width = sourceImageElement.offsetWidth;
              this.maxSize.height = sourceImageElement.offsetHeight;
              this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
            }
          }
        }, {
          key: "setCropperScaledMinSize",
          value: function setCropperScaledMinSize() {
            if (this.transformedImage) {
              this.setCropperScaledMinWidth();
              this.setCropperScaledMinHeight();
            } else {
              this.cropperScaledMinWidth = 20;
              this.cropperScaledMinHeight = 20;
            }
          }
        }, {
          key: "setCropperScaledMinWidth",
          value: function setCropperScaledMinWidth() {
            this.cropperScaledMinWidth = this.cropperMinWidth > 0 ? Math.max(20, this.cropperMinWidth / this.transformedImage.width * this.maxSize.width) : 20;
          }
        }, {
          key: "setCropperScaledMinHeight",
          value: function setCropperScaledMinHeight() {
            if (this.maintainAspectRatio) {
              this.cropperScaledMinHeight = Math.max(20, this.cropperScaledMinWidth / this.aspectRatio);
            } else if (this.cropperMinHeight > 0) {
              this.cropperScaledMinHeight = Math.max(20, this.cropperMinHeight / this.transformedImage.height * this.maxSize.height);
            } else {
              this.cropperScaledMinHeight = 20;
            }
          }
        }, {
          key: "checkCropperPosition",
          value: function checkCropperPosition() {
            var maintainSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (this.cropper.x1 < 0) {
              this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
              this.cropper.x1 = 0;
            }

            if (this.cropper.y1 < 0) {
              this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
              this.cropper.y1 = 0;
            }

            if (this.cropper.x2 > this.maxSize.width) {
              this.cropper.x1 -= maintainSize ? this.cropper.x2 - this.maxSize.width : 0;
              this.cropper.x2 = this.maxSize.width;
            }

            if (this.cropper.y2 > this.maxSize.height) {
              this.cropper.y1 -= maintainSize ? this.cropper.y2 - this.maxSize.height : 0;
              this.cropper.y2 = this.maxSize.height;
            }
          }
        }, {
          key: "moveStop",
          value: function moveStop() {
            if (this.moveStart.active) {
              this.moveStart.active = false;
              this.doAutoCrop();
            }
          }
        }, {
          key: "pinchStop",
          value: function pinchStop() {
            if (this.moveStart.active) {
              this.moveStart.active = false;
              this.doAutoCrop();
            }
          }
        }, {
          key: "move",
          value: function move(event) {
            var diffX = this.getClientX(event) - this.moveStart.clientX;
            var diffY = this.getClientY(event) - this.moveStart.clientY;
            this.cropper.x1 = this.moveStart.x1 + diffX;
            this.cropper.y1 = this.moveStart.y1 + diffY;
            this.cropper.x2 = this.moveStart.x2 + diffX;
            this.cropper.y2 = this.moveStart.y2 + diffY;
          }
        }, {
          key: "resize",
          value: function resize(event) {
            var diffX = this.getClientX(event) - this.moveStart.clientX;
            var diffY = this.getClientY(event) - this.moveStart.clientY;

            switch (this.moveStart.position) {
              case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                break;

              case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - this.cropperScaledMinHeight);
                break;

              case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                break;

              case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + this.cropperScaledMinHeight);
                break;

              case 'center':
                var scale = event.scale;
                var newWidth = Math.abs(this.moveStart.x2 - this.moveStart.x1) * scale;
                var newHeight = Math.abs(this.moveStart.y2 - this.moveStart.y1) * scale;
                var x1 = this.cropper.x1;
                var y1 = this.cropper.y1;
                this.cropper.x1 = Math.min(this.moveStart.clientX - newWidth / 2, this.cropper.x2 - this.cropperScaledMinWidth);
                this.cropper.y1 = Math.min(this.moveStart.clientY - newHeight / 2, this.cropper.y2 - this.cropperScaledMinHeight);
                this.cropper.x2 = Math.max(this.moveStart.clientX + newWidth / 2, x1 + this.cropperScaledMinWidth);
                this.cropper.y2 = Math.max(this.moveStart.clientY + newHeight / 2, y1 + this.cropperScaledMinHeight);
                break;
            }

            if (this.maintainAspectRatio) {
              this.checkAspectRatio();
            }
          }
        }, {
          key: "checkAspectRatio",
          value: function checkAspectRatio() {
            var overflowX = 0;
            var overflowY = 0;

            switch (this.moveStart.position) {
              case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y1 += overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'right':
              case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x2 -= overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'left':
              case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);

                if (overflowX > 0 || overflowY > 0) {
                  this.cropper.x1 += overflowY * this.aspectRatio > overflowX ? overflowY * this.aspectRatio : overflowX;
                  this.cropper.y2 -= overflowY * this.aspectRatio > overflowX ? overflowY : overflowX / this.aspectRatio;
                }

                break;

              case 'center':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                var overflowX1 = Math.max(0 - this.cropper.x1, 0);
                var overflowX2 = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                var overflowY1 = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                var overflowY2 = Math.max(0 - this.cropper.y1, 0);

                if (overflowX1 > 0 || overflowX2 > 0 || overflowY1 > 0 || overflowY2 > 0) {
                  this.cropper.x1 += overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 * this.aspectRatio : overflowX1;
                  this.cropper.x2 -= overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 * this.aspectRatio : overflowX2;
                  this.cropper.y1 += overflowY2 * this.aspectRatio > overflowX2 ? overflowY2 : overflowX2 / this.aspectRatio;
                  this.cropper.y2 -= overflowY1 * this.aspectRatio > overflowX1 ? overflowY1 : overflowX1 / this.aspectRatio;
                }

                break;
            }
          }
        }, {
          key: "doAutoCrop",
          value: function doAutoCrop() {
            if (this.autoCrop) {
              this.crop();
            }
          }
        }, {
          key: "crop",
          value: function crop() {
            if (this.sourceImage && this.sourceImage.nativeElement && this.transformedImage != null) {
              this.startCropImage.emit();
              var imagePosition = this.getImagePosition();
              var width = imagePosition.x2 - imagePosition.x1;
              var height = imagePosition.y2 - imagePosition.y1;
              var cropCanvas = document.createElement('canvas');
              cropCanvas.width = width;
              cropCanvas.height = height;
              var ctx = cropCanvas.getContext('2d');

              if (ctx) {
                if (this.backgroundColor != null) {
                  ctx.fillStyle = this.backgroundColor;
                  ctx.fillRect(0, 0, width, height);
                }

                var scaleX = (this.transform.scale || 1) * (this.transform.flipH ? -1 : 1);
                var scaleY = (this.transform.scale || 1) * (this.transform.flipV ? -1 : 1);
                ctx.setTransform(scaleX, 0, 0, scaleY, this.transformedSize.width / 2, this.transformedSize.height / 2);
                ctx.translate(-imagePosition.x1 / scaleX, -imagePosition.y1 / scaleY);
                ctx.rotate((this.transform.rotate || 0) * Math.PI / 180);
                ctx.drawImage(this.transformedImage, -this.transformedSize.width / 2, -this.transformedSize.height / 2);
                var output = {
                  width: width,
                  height: height,
                  imagePosition: imagePosition,
                  cropperPosition: Object.assign({}, this.cropper)
                };

                if (this.containWithinAspectRatio) {
                  output.offsetImagePosition = this.getOffsetImagePosition();
                }

                var resizeRatio = this.getResizeRatio(width, height);

                if (resizeRatio !== 1) {
                  output.width = Math.round(width * resizeRatio);
                  output.height = this.maintainAspectRatio ? Math.round(output.width / this.aspectRatio) : Math.round(height * resizeRatio);
                  Object(_utils_resize_utils__WEBPACK_IMPORTED_MODULE_6__["resizeCanvas"])(cropCanvas, output.width, output.height);
                }

                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                return output;
              }
            }

            return null;
          }
        }, {
          key: "getImagePosition",
          value: function getImagePosition() {
            var sourceImageElement = this.sourceImage.nativeElement;
            var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            var out = {
              x1: Math.round(this.cropper.x1 * ratio),
              y1: Math.round(this.cropper.y1 * ratio),
              x2: Math.round(this.cropper.x2 * ratio),
              y2: Math.round(this.cropper.y2 * ratio)
            };

            if (!this.containWithinAspectRatio) {
              out.x1 = Math.max(out.x1, 0);
              out.y1 = Math.max(out.y1, 0);
              out.x2 = Math.min(out.x2, this.transformedSize.width);
              out.y2 = Math.min(out.y2, this.transformedSize.height);
            }

            return out;
          }
        }, {
          key: "getOffsetImagePosition",
          value: function getOffsetImagePosition() {
            var canvasRotation = this.canvasRotation + this.exifTransform.rotate;
            var sourceImageElement = this.sourceImage.nativeElement;
            var ratio = this.transformedSize.width / sourceImageElement.offsetWidth;
            var offsetX;
            var offsetY;

            if (canvasRotation % 2) {
              offsetX = (this.transformedSize.width - this.originalSize.height) / 2;
              offsetY = (this.transformedSize.height - this.originalSize.width) / 2;
            } else {
              offsetX = (this.transformedSize.width - this.originalSize.width) / 2;
              offsetY = (this.transformedSize.height - this.originalSize.height) / 2;
            }

            var out = {
              x1: Math.round(this.cropper.x1 * ratio) - offsetX,
              y1: Math.round(this.cropper.y1 * ratio) - offsetY,
              x2: Math.round(this.cropper.x2 * ratio) - offsetX,
              y2: Math.round(this.cropper.y2 * ratio) - offsetY
            };

            if (!this.containWithinAspectRatio) {
              out.x1 = Math.max(out.x1, 0);
              out.y1 = Math.max(out.y1, 0);
              out.x2 = Math.min(out.x2, this.transformedSize.width);
              out.y2 = Math.min(out.y2, this.transformedSize.height);
            }

            return out;
          }
        }, {
          key: "cropToBase64",
          value: function cropToBase64(cropCanvas) {
            return cropCanvas.toDataURL('image/' + this.format, this.getQuality());
          }
        }, {
          key: "getQuality",
          value: function getQuality() {
            return Math.min(1, Math.max(0, this.imageQuality / 100));
          }
        }, {
          key: "getResizeRatio",
          value: function getResizeRatio(width, height) {
            var ratioWidth = this.resizeToWidth / width;
            var ratioHeight = this.resizeToHeight / height;
            var ratios = new Array();

            if (this.resizeToWidth > 0) {
              ratios.push(ratioWidth);
            }

            if (this.resizeToHeight > 0) {
              ratios.push(ratioHeight);
            }

            var result = ratios.length === 0 ? 1 : Math.min.apply(Math, ratios);

            if (result > 1 && !this.onlyScaleDown) {
              return result;
            }

            return Math.min(result, 1);
          }
        }, {
          key: "getClientX",
          value: function getClientX(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX) || 0;
          }
        }, {
          key: "getClientY",
          value: function getClientY(event) {
            return (event.touches && event.touches[0] ? event.touches[0].clientY : event.clientY) || 0;
          }
        }]);

        return ImageCropperComponent;
      }();

      ImageCropperComponent.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      ImageCropperComponent.propDecorators = {
        wrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['wrapper', {
            "static": true
          }]
        }],
        sourceImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sourceImage', {
            "static": false
          }]
        }],
        imageChangedEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageURL: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageBase64: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageFile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        maintainAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        aspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeToWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        resizeToHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cropperMinWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cropperMinHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cropperStaticWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cropperStaticHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        canvasRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        initialStepSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        roundCropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        onlyScaleDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageQuality: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoCrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        containWithinAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        hideResizeSquares: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        cropper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        alignImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['style.text-align']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.disabled']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        imageCropped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        startCropImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        imageLoaded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        cropperReady: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        loadImageFailed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['window:resize']
        }],
        moveImg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:mousemove', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:touchmove', ['$event']]
        }],
        moveStop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:mouseup']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
          args: ['document:touchend']
        }]
      };
      ImageCropperComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'image-cropper',
        template: _raw_loader_image_cropper_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_image_cropper_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], ImageCropperComponent);
      /***/
    },

    /***/
    "MuVI":
    /*!**************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.model.ts ***!
      \**************************************************************/

    /*! exports provided: Alert, AlertType */

    /***/
    function MuVI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Alert", function () {
        return Alert;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertType", function () {
        return AlertType;
      });

      var Alert = function Alert(init) {
        _classCallCheck(this, Alert);

        Object.assign(this, init);
      };

      var AlertType;

      (function (AlertType) {
        AlertType[AlertType["Success"] = 0] = "Success";
        AlertType[AlertType["Error"] = 1] = "Error";
        AlertType[AlertType["Info"] = 2] = "Info";
        AlertType[AlertType["Warning"] = 3] = "Warning";
      })(AlertType || (AlertType = {}));
      /***/

    },

    /***/
    "N4L5":
    /*!***************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
      \***************************************************************/

    /*! exports provided: AlertModule */

    /***/
    function N4L5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertModule", function () {
        return AlertModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./alert.component */
      "+Ai/");

      var AlertModule = function AlertModule() {
        _classCallCheck(this, AlertModule);
      };

      AlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
      })], AlertModule);
      /***/
    },

    /***/
    "Nq98":
    /*!*******************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function Nq98(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".orgLogo {\n  max-width: 100%;\n  height: 44px;\n  /* width: 70px; */\n}\n\n.m-header {\n  padding-left: 0px !important;\n}\n\n.m-header .mobileOrgLogo {\n  display: none;\n}\n\n.m-header:hover {\n  width: 250px !important;\n  transition: all 0.3s ease-in-out;\n}\n\n.m-header:hover #main-logo {\n  max-width: 100%;\n  height: auto !important;\n  width: auto !important;\n  display: block !important;\n  margin: auto;\n}\n\n.m-header:hover .mobileOrgLogo {\n  display: none !important;\n}\n\n.m-header.collapseSideBar:hover .b-brand {\n  width: 95%;\n}\n\n.m-header.collapseSideBar #main-logo {\n  display: none;\n}\n\n.m-header.collapseSideBar .mobile-menu {\n  width: 20px !important;\n  padding: 0px !important;\n}\n\n.m-header.collapseSideBar .b-brand {\n  width: 70%;\n}\n\n.m-header.collapseSideBar .mobileOrgLogo {\n  display: block;\n  margin: auto;\n}\n\n.productName {\n  font: normal normal normal 35px/60px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #ffffff;\n  margin: 0px 0px 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQVFJO0VBQ0ksYUFBQTtBQU5SOztBQVFJO0VBQ0ksdUJBQUE7RUFDQSxnQ0FBQTtBQU5SOztBQU9RO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFMWjs7QUFPUTtFQUNJLHdCQUFBO0FBTFo7O0FBVVk7RUFDSSxVQUFBO0FBUmhCOztBQVdRO0VBSUksYUFBQTtBQVpaOztBQWNRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQVpaOztBQWNRO0VBQ0ksVUFBQTtBQVpaOztBQWNRO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFaWjs7QUFpQkE7RUFDSSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBZEoiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmdMb2dvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIC8qIHdpZHRoOiA3MHB4OyAqL1xyXG59XHJcblxyXG4ubS1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC8vICY6aG92ZXIge1xyXG4gICAgLy8gICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gICAgICNtYWluLWxvZ28ge1xyXG4gICAgLy8gICAgICAgICB3aWR0aDogMjU1cHggIWltcG9ydGFudDtcclxuICAgIC8vICAgICAgICAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLm1vYmlsZU9yZ0xvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICAjbWFpbi1sb2dvIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9iaWxlT3JnTG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmNvbGxhcHNlU2lkZUJhciB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC5iLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI21haW4tbG9nbyB7XHJcbiAgICAgICAgICAgIC8vIG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiA2NnB4O1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2JpbGUtbWVudSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYi1icmFuZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2JpbGVPcmdMb2dvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0TmFtZSB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzNXB4LzYwcHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi8vIC50b3BOYXZCYXIge1xyXG4vLyAvKiAgICAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgKi9cclxuLy8gfVxyXG4iXX0= */";
      /***/
    },

    /***/
    "NvK5":
    /*!****************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: NavSearchComponent */

    /***/
    function NvK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
        return NavSearchComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-search.component.html */
      "WGuA");
      /* harmony import */


      var _nav_search_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-search.component.scss */
      "Afc9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavSearchComponent = /*#__PURE__*/function () {
        function NavSearchComponent() {
          _classCallCheck(this, NavSearchComponent);
        }

        _createClass(NavSearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavSearchComponent;
      }();

      NavSearchComponent.ctorParameters = function () {
        return [];
      };

      NavSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-search',
        template: _raw_loader_nav_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_search_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavSearchComponent);
      /***/
    },

    /***/
    "OE1v":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OE1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li [ngClass]=\"item.classes\" [class.disabled]=\"!item.isAccess ? true : ''\" *ngIf=\"themeLayout === 'horizontal'\"\r\n    (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\"\r\n    [routerLinkActive]=\"!item.isAccess ? '' : 'active'\">\r\n    <a [routerLinkActive]=\"!item.isAccess ? '' : 'active'\" href=\"javascript:\" class=\"nav-link\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <li [ngClass]=\"item.classes\" [class.disabled]=\"!item.isAccess ? true : ''\" *ngIf=\"themeLayout === 'vertical'\"\r\n    class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"!item.isAccess ? '' : 'active'\">\r\n    <a [routerLinkActive]=\"!item.isAccess ? '' : 'active'\" href=\"javascript:\" class=\"nav-link main-subMenu\"\r\n      (click)=\"navCollapse($event)\">\r\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\r\n    </a>\r\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\r\n  </li>\r\n  <ng-template #itemContent>\r\n    <!-- <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\r\n      <i class=\"{{item.icon}}\"></i>\r\n    </span> -->\r\n    <span class=\"pcoded-micon pcoded-sidebar-img\" *ngIf=\"item.img\">\r\n      <img src=\"{{item.img}}\" alt=\"{{item.title}}\" />\r\n    </span>\r\n    <span class=\"pcoded-mtext\">{{item.title}}\r\n      <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\r\n        {{item.badge.title}}\r\n      </span>\r\n    </span>\r\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\r\n      {{item.badge.title}}\r\n    </span>\r\n  </ng-template>\r\n  <ng-template #subMenuContent>\r\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"!item.isAccess ? '' : 'active'\">\r\n      <ng-container *ngFor=\"let item of item.children\">\r\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n      </ng-container>\r\n    </ul>\r\n  </ng-template>\r\n</ng-container>";
      /***/
    },

    /***/
    "Oq+w":
    /*!************************************************************************************************************!*\
      !*** ./src/app/theme/shared/components/assessessment-detail-modal/assessessment-detail-modal.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: AssessessmentDetailModalComponent */

    /***/
    function OqW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessessmentDetailModalComponent", function () {
        return AssessessmentDetailModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assessessment_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assessessment-detail-modal.component.html */
      "ML1o");
      /* harmony import */


      var _assessessment_detail_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessessment-detail-modal.component.scss */
      "JeUI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_modules_settings_skill_matrix_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/settings/skill-matrix/assessment/assessment.service */
      "p3TK");
      /* harmony import */


      var _alert_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../alert/alert.service */
      "afnz");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _employee_assessment_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./employee-assessment.service */
      "8tiA");

      var AssessessmentDetailModalComponent = /*#__PURE__*/function () {
        function AssessessmentDetailModalComponent(modalConfig, modalService, fb, assessmentService, assessmentServiceEmp, router, alertService, titleService, Constant) {
          _classCallCheck(this, AssessessmentDetailModalComponent);

          this.modalService = modalService;
          this.fb = fb;
          this.assessmentService = assessmentService;
          this.assessmentServiceEmp = assessmentServiceEmp;
          this.router = router;
          this.alertService = alertService;
          this.titleService = titleService; // @Input() masterActivity;

          this.assessmentDet = {
            tempQues: {
              categoryList: [],
              subCategoryList: []
            }
          };
          this.assessmentDetails = {
            moduleSkillList: [],
            interventionsList: [],
            categoryList: [],
            subCategoryList: []
          };
          this.selectedCategeory = [];
          this.selectedSubCategeory = [];
          this.addQuestion = false;
          this.editAssessment = false;
          this.readonly = false;
          this.selectedQuestionType = [];
          this.questionsList = [];
          this.mainQueList = [];
          this.catUpdateFlag = false;
          this.showQuestions = false;
          this.SingleDropdownSettings = {};
          this.SingleBranchDropdownSettings = {};
          this.selectedItem = [];
          this.categoryListIds = [];
          this.editQuestionPopup = false;
          this.submitLoader = false;
          this.subCatList = [];
          this.catAndSubCatList = [];
          this.subCatDataList = [];
          this.subCatSpinner = [];
          this.submitAssessment = false;
          this.categoryDisableEnabled = true;
          this.addQuestionDisabled = true;
          this.submitCatLoader = false;
          this.isFeedBackSelect = false; // assessmentFormData:any = { template: any[]; intervention: any[]; SkillandModule: any[]; assessmentTitle: string; time: number; marksApplicable: any[]; };

          this.dataSpinner = [];
          this.plantList = [];
          this.masterLevelList = [];
          this.empAssessmentDet = {};
          this.Constant = {}; // constant: any = {};

          this.assessmentDetailData = {};
          this.constant = {
            SELF_ASSESSMENT: 'SELF_ASSESSMENT',
            MCQ_ASSESSMENT: 'MCQ',
            TEXT: 'TEXT',
            RATING: 'RATING',
            RADIO: 'RADIO',
            CHECKBOX: 'CHECKBOX',
            TEXTAREA: 'TEXTAREA',
            AlphabetLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            TRAINING_FEEDBACK: 'TRAINING_FEEDBACK',
            CHARTER_TYPE: 'CHARTER_TYPE',
            OE: 'OE',
            APQP: 'APQP',
            ALDP: 'ALDP'
          };
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
          this.Constant = Constant; // this.constant = Constant;
        }

        _createClass(AssessessmentDetailModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.titleService.setTitle('Assessment Details');
            this.loggedInEmpDet = this.assessmentService.getLoggedInData();
            this.assessmentForm = this.fb.group({
              branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              passingMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            }); // this.formdata = this.fb.group({
            //   category: [this.selectedCategeory],
            //   subCategory: [this.selectedSubCategeory],
            //   questionTypeName: [this.selectedQuestionType],
            // });

            console.log(this.selectedDetail);
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            }; // this.assessmentDetailData = localStorage.setItem(this.selectedDetail)

            this.assessmentDetailData = this.selectedDetail;
            console.log(this.assessmentDetailData);

            if (this.assessmentDetailData.ojtAssessmentId != '' || this.assessmentDetailData.ojtAssessmentId != null) {
              this.getEmpAssessmentDetails(this.assessmentDetailData);
            }
          } // Assessment Detail
          // author simran
          // Desc You will get assessment detail here
          // created date 04/09/2023

        }, {
          key: "getEmpAssessmentDetails",
          value: function getEmpAssessmentDetails(content) {
            var _this12 = this;

            this.assessmentServiceEmp.getSinglEmpAssessment('apis/sm/getAssignedAssessmentDetails/' + this.assessmentDetailData.ojtAssessmentId).subscribe(function (data) {
              console.log(data);

              if (data.result) {
                _this12.getAssessmentDet(data, content);
              } else {
                if (data.statusCode == 100) {
                  _this12.alertService.error(data.reason);

                  _this12.empAssessmentDet = {};
                } else {
                  _this12.empAssessmentDet = {};

                  _this12.alertService.error("Error Occured Please Try again");
                }
              }
            });
          } // Assessment Detail
          // author simran
          // Desc for showing which ans is user selected
          // created date 04/09/2023

        }, {
          key: "getAssessmentDet",
          value: function getAssessmentDet(data, content) {
            // if (data.assessment != null) {
            if (data.assessment != null) {
              // data.assessment.quesList.forEach((ques: any) => {
              //   if (ques.optList) {
              //     console.log(ques.optList)
              //     // Find the option with rightAns set to true
              //     const correctOption = ques.optList.find((opt: any) => opt.rightAns === true);
              //     // If a correct option is found, set selectedOption to its value
              //     if (correctOption) {
              //       ques.selectedOption = correctOption.option;
              //     }
              //     else {
              //       // If no correct option is found, set selectedOption to null or a default value
              //       ques.selectedOption = null; // or any default value you prefer
              //     }
              //   }
              // });
              // if (data.assessment.quesList != null && data.assessment.quesList.length > 0) {
              // for (let index = 0; index < data.assessment.quesList.length; index++) {
              //   data.assessment.quesList[index].rightAns = '';
              //   if (data.assessment.quesList[index].optList != null && data.assessment.quesList[index].optList.length > 0) {
              //     for (let opt = 0; opt < data.assessment.quesList[index].optList.length; opt++) {
              //       if (data.assessment.quesList[index].optList[opt].rightAns) {
              //         data.assessment.quesList[index].rightAns = opt.toString();
              //         break;
              //       }
              //     }
              //   }
              // }
              // }
              this.empAssessmentDet = data.assessment;
              console.log(this.empAssessmentDet);
              this.setSubCategoryGroup(); // this.modalService.open(content, {
              //   windowClass: 'right'
              // });
            } else {
              this.empAssessmentDet = {};
            }
          }
        }, {
          key: "setSubCategoryGroup",
          value: function setSubCategoryGroup() {
            var tmpCatArray = [];
            var tmpCatIds = [];
            var quesArray = [];
            this.empAssessmentDet.quesList.forEach(function (data) {
              if (tmpCatIds.indexOf(data.categoryId) === -1) {
                tmpCatArray.push({
                  catId: data.categoryId,
                  catName: data.categoryName,
                  quesList: [data]
                });
                tmpCatIds.push(data.categoryId);
              } else {
                tmpCatArray.forEach(function (cat) {
                  if (cat.catId === data.categoryId) {
                    cat.quesList.push(data);
                  }
                });
              }
            });
            console.log(tmpCatArray);

            if (tmpCatArray != null && tmpCatArray.length > 0) {
              this.empAssessmentDet.quesListGroupBy = tmpCatArray;
            }

            console.log(this.empAssessmentDet.quesListGroupBy);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalService.dismissAll();
          }
        }, {
          key: "onOptionSelect",
          value: function onOptionSelect(questionIndex, optionIndex) {
            this.selectedOptions[questionIndex] = optionIndex;
            console.log(this.selectedOptions[questionIndex]);
          }
        }]);

        return AssessessmentDetailModalComponent;
      }();

      AssessessmentDetailModalComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_modules_settings_skill_matrix_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentService"]
        }, {
          type: _employee_assessment_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeAssessmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: ['Constant']
          }]
        }];
      };

      AssessessmentDetailModalComponent.propDecorators = {
        selectedDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AssessessmentDetailModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessessment-detail-modal',
        template: _raw_loader_assessessment_detail_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessessment_detail_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_modules_settings_skill_matrix_assessment_assessment_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentService"], _employee_assessment_service__WEBPACK_IMPORTED_MODULE_10__["EmployeeAssessmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _alert_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["Title"], Object])], AssessessmentDetailModalComponent);
      /***/
    },

    /***/
    "PQEG":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/alert/alert.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function PQEG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n</div>\r\n -->\r\n <div class=\"backPage\" *ngIf=\"alerts != null && alerts.length > 0\"></div>\r\n<div *ngFor=\"let alert of alerts\" class=\"{{cssClass(alert)}} custom-Alert\">\r\n  <button type=\"button\" class=\"close\" (click)=\"removeAlert(alert)\">&times;</button>\r\n  <span [innerHTML]=\"alert.message\"></span>\r\n</div>";
      /***/
    },

    /***/
    "PRC2":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/shared/components/pagination/pagination.module.ts ***!
      \*************************************************************************/

    /*! exports provided: PaginationModule */

    /***/
    function PRC2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
        return PaginationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pagination_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pagination.component */
      "h77R");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var PaginationModule = function PaginationModule() {
        _classCallCheck(this, PaginationModule);
      };

      PaginationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"]],
        declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_3__["PaginationComponent"]],
        providers: []
      })], PaginationModule);
      /***/
    },

    /***/
    "QX0O":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipe/filterBy.pipe.ts ***!
      \**********************************************/

    /*! exports provided: FilterByPipe */

    /***/
    function QX0O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterByPipe", function () {
        return FilterByPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FilterByPipe = /*#__PURE__*/function () {
        function FilterByPipe() {
          _classCallCheck(this, FilterByPipe);
        }

        _createClass(FilterByPipe, [{
          key: "transform",
          value: function transform(value, keys, term) {
            if (!term) return value;
            return (value || []).filter(function (item) {
              return keys.split(',').some(function (key) {
                return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]);
              });
            });
          }
        }]);

        return FilterByPipe;
      }();

      FilterByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterBy'
      })], FilterByPipe);
      /***/
    },

    /***/
    "Qn1u":
    /*!************************************************************************!*\
      !*** ./src/app/theme/shared/components/loading/loading.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Qn1u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sk-chase {\n  width: 40px;\n  height: 40px;\n  -webkit-animation: sk-chase 2.5s infinite linear both;\n          animation: sk-chase 2.5s infinite linear both;\n  margin: auto;\n  z-index: 9999;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.sk-chase-dot {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-animation: sk-chase-dot 2s infinite ease-in-out both;\n          animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #7044cd;\n  border-radius: 100%;\n  -webkit-animation: sk-chase-dot-before 2s infinite ease-in-out both;\n          animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:nth-child(1) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5) {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6) {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n.sk-chase-dot:nth-child(1):before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2):before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3):before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4):before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5):before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6):before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n@-webkit-keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n.backPage {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n/* .animationload {\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000;\n}\n.osahanloading {\n  animation: 1.5s linear 0s normal none infinite running osahanloading;\n  background: #bdebff none repeat scroll 0 0;\n  border-radius: 50px;\n  height: 50px;\n  left: 50%;\n  margin-left: -25px;\n  margin-top: -25px;\n  position: absolute;\n  top: 50%;\n  width: 50px;\n}\n.osahanloading::after {\n  animation: 1.5s linear 0s normal none infinite running osahanloading_after;\n  border-color: #7044CD transparent;\n  border-radius: 80px;\n  border-style: solid;\n  border-width: 10px;\n  content: \"\";\n  height: 80px;\n  left: -15px;\n  position: absolute;\n  top: -15px;\n  width: 80px;\n}\n@keyframes osahanloading {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    background: #85d6de none repeat scroll 0 0;\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFEQUFBO1VBQUEsNkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUVBQUE7VUFBQSwyREFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7VUFBQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7VUFBQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx5QkFBQTtFQUNOO0FBQ0Y7O0FBSkE7RUFDSTtJQUNJLHlCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBRUkseUJBQUE7RUFETjtBQUNGOztBQUhBO0VBQ0k7SUFFSSx5QkFBQTtFQUROO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLHFCQUFBO0VBRk47RUFJRTtJQUVJLG1CQUFBO0VBSE47QUFDRjs7QUFKQTtFQUNJO0lBQ0kscUJBQUE7RUFGTjtFQUlFO0lBRUksbUJBQUE7RUFITjtBQUNGOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFKSjs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUEiLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1jaGFzZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90LWJlZm9yZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY2hhc2Uge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gICAgfVxyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja1BhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLyogLmFuaW1hdGlvbmxvYWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcbi5vc2FoYW5sb2FkaW5nIHtcclxuICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgb3NhaGFubG9hZGluZztcclxuICBiYWNrZ3JvdW5kOiAjYmRlYmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLm9zYWhhbmxvYWRpbmc6OmFmdGVyIHtcclxuICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgb3NhaGFubG9hZGluZ19hZnRlcjtcclxuICBib3JkZXItY29sb3I6ICM3MDQ0Q0QgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogODBweDtcclxuICBsZWZ0OiAtMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5Aa2V5ZnJhbWVzIG9zYWhhbmxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1ZDZkZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufSAqL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "QrAV":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipe/custom-pipe.module.ts ***!
      \***************************************************/

    /*! exports provided: CustomPipeModule */

    /***/
    function QrAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomPipeModule", function () {
        return CustomPipeModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _filterBy_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./filterBy.pipe */
      "QX0O");
      /* harmony import */


      var _order_by_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./order-by.pipe */
      "TzDh");

      var CustomPipeModule = function CustomPipeModule() {
        _classCallCheck(this, CustomPipeModule);
      };

      CustomPipeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_filterBy_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByPipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderByPipe"]],
        exports: [_filterBy_pipe__WEBPACK_IMPORTED_MODULE_3__["FilterByPipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_4__["OrderByPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
      })], CustomPipeModule);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "S8Sc":
    /*!*************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
      \*************************************************************/

    /*! exports provided: NavigationItem */

    /***/
    function S8Sc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
        return NavigationItem;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavigationItems = [{
        id: 'eNovationMenu',
        title: 'eNovation Menu',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [{
          id: 'myeNovation-home',
          title: 'Home',
          type: 'item',
          url: '../template.html',
          icon: '',
          img: 'assets/images/sidebarIcon/Home/Home@2x.png',
          isAccess: true,
          external: true
        }, {
          id: 'mySkilling',
          title: 'My Skilling',
          type: 'collapse',
          icon: '',
          classes: 'masterMenu',
          img: 'assets/images/sidebarIcon/MySkillings/myskills@2x.png',
          menuName: 'My Skilling',
          isAccess: false,
          children: [{
            id: 'mySkilling-Actions',
            title: 'Actions',
            type: 'item',
            url: '/mySkilling/actions',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'My Skilling',
            subMenuName: "Actions",
            isAccess: false
          }, {
            id: 'mySkilling-Skill_Matrix',
            title: 'Skill Matrix',
            type: 'item',
            url: '/mySkilling/skillMatrix',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'My Skilling',
            subMenuName: "Skill Matrix",
            isAccess: false
          }, {
            id: 'mySkilling-Assessments',
            title: 'Assessments',
            type: 'item',
            url: '/mySkilling/assessments',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'My Skilling',
            subMenuName: "Assessments",
            isAccess: false
          }, {
            id: 'mySkilling-Certificates',
            title: 'Certificates',
            type: 'item',
            url: '/mySkilling/certificates',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'My Skilling',
            subMenuName: "Certificates",
            isAccess: false
          }]
        }, {
          id: 'skillMatrix',
          title: 'Skill Matrix',
          type: 'collapse',
          icon: '',
          classes: 'masterMenu',
          img: 'assets/images/sidebarIcon/MySkillings/myskills@2x.png',
          menuName: 'Skill Matrix',
          isAccess: false,
          children: [{
            id: 'skillMatrix-Home',
            title: 'Home',
            type: 'item',
            url: '/skillMatrix/home',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "Actions",
            isAccess: false
          }, {
            id: 'skillMatrix-Actions',
            title: 'Actions',
            type: 'item',
            url: '/skillMatrix/actions',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "Actions",
            isAccess: false
          }, {
            id: 'skillMatrix-OJT_Plan',
            title: 'OJT Plan',
            type: 'item',
            url: '/skillMatrix/ojt_plan',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "OJT Plan",
            isAccess: false
          }, {
            id: 'skillMatrix-OJT_Registration',
            title: 'OJT Tracking',
            type: 'item',
            url: '/skillMatrix/ojt_registration',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "OJT Tracking",
            isAccess: false
          }, {
            id: 'skillMatrix-Workforce_Deployment',
            title: 'Workforce Deployment',
            type: 'item',
            url: '/skillMatrix/workforce_Deployment',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "Workforce Deployment",
            isAccess: false
          }, {
            id: 'skillMatrix-Assessment',
            title: 'Assessment',
            type: 'item',
            url: '/skillMatrix/assessments',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "Assessment",
            isAccess: false
          }, {
            id: 'skillMatrix-Certificate',
            title: 'Certificate',
            type: 'item',
            url: '/skillMatrix/certificates',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Skill Matrix',
            subMenuName: "Certificate",
            isAccess: false
          }]
        }, {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard',
          icon: '',
          img: 'assets/images/sidebarIcon/Dashboard/dashboard@2x.png',
          isAccess: false,
          menuName: "Dashboard",
          subMenuName: "Dashboard"
        }, {
          id: 'report',
          title: 'Reports',
          type: 'item',
          url: '/report',
          icon: '',
          img: 'assets/images/sidebarIcon/Report/Report@2x.png',
          isAccess: false,
          menuName: "Reports",
          subMenuName: "Reports"
        }, {
          id: 'settings',
          title: 'Settings',
          type: 'collapse',
          icon: '',
          classes: 'masterMenu',
          img: 'assets/images/sidebarIcon/Setting/Setting@2x.png',
          menuName: 'Settings',
          isAccess: false,
          children: [{
            id: 'setting-configuration',
            title: 'Master Setup',
            type: 'item',
            url: '/settings/skillMatrix/configuration',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "Certificate",
            isAccess: false
          }, {
            id: 'setting-workflow',
            title: 'Workflow',
            type: 'item',
            url: '/settings/skillMatrix/workflow',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "Workflow",
            isAccess: false
          }, {
            id: 'setting-workStation',
            title: 'Workstation',
            type: 'item',
            url: '/settings/skillMatrix/workstation',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "Workstation",
            isAccess: false
          }, {
            id: 'setting-stakeholder',
            title: 'User Role',
            type: 'item',
            url: '/settings/skillMatrix/stakeholder',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "User Role",
            isAccess: false
          }, // {
          //   id: 'setting-referance',
          //   title: 'Reference',
          //   type: 'item',
          //   url: '/settings/skillMatrix/reference',
          //   classes: 'menuName',
          //   target: false,
          //   breadcrumbs: false,
          //   menuName: 'Settings',
          //   subMenuName: "Reference",
          //   isAccess: false
          // }, 
          {
            id: 'setting-assessment',
            title: 'Assessment',
            type: 'item',
            url: '/settings/skillMatrix/assessment',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "Assessment",
            isAccess: false
          }, {
            id: 'setting-ojtchecksheet',
            title: 'OJT Checksheet',
            type: 'item',
            url: '/settings/skillMatrix/ojtchecksheet',
            classes: 'menuName',
            target: false,
            breadcrumbs: false,
            menuName: 'Settings',
            subMenuName: "OJT Checksheet",
            isAccess: false
          }]
        }, // {
        //   id: 'uiKit',
        //   title: 'UI-Kit',
        //   type: 'item',
        //   url: '/uiKit',
        //   icon: '',
        //   img: 'assets/images/sidebarIcon/Report/Report@2x.png',
        //   isAccess: false,
        //   menuName: "UI-Kit",
        //   subMenuName: "Report"
        // },
        {
          id: 'logout',
          title: 'Logout',
          type: 'item',
          url: '../login.html',
          icon: '',
          img: 'assets/images/sidebarIcon/Logout/log-out@2x.png',
          isAccess: true,
          external: true
        }]
      }];

      var NavigationItem = /*#__PURE__*/function () {
        function NavigationItem() {
          _classCallCheck(this, NavigationItem);
        }

        _createClass(NavigationItem, [{
          key: "get",
          value: function get() {
            return NavigationItems;
          }
        }]);

        return NavigationItem;
      }();

      NavigationItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationItem);
      /***/
    },

    /***/
    "SllZ":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/globalLoader/globalLoader.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SllZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"backPage\"></div>\r\n<div class=\"loaderDiv\">\r\n    <div class=\"sk-chase\">\r\n        <div class=\"sk-chase-dot\"></div>\r\n        <div class=\"sk-chase-dot\"></div>\r\n        <div class=\"sk-chase-dot\"></div>\r\n        <div class=\"sk-chase-dot\"></div>\r\n        <div class=\"sk-chase-dot\"></div>\r\n        <div class=\"sk-chase-dot\"></div>\r\n    </div>\r\n</div>\r\n<!-- <div class=\"animationload\">\r\n    <div class=\"osahanloading\"></div>\r\n</div> -->";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/auth/auth.service */
      "jGGy");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(update, appRef, router, auth) {
          _classCallCheck(this, AppComponent);

          this.update = update;
          this.appRef = appRef;
          this.router = router;
          this.auth = auth; // this.setLocalStorageValue();

          this.updateClient();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
            this.checkUpdate();
          }
        }, {
          key: "updateClient",
          value: function updateClient() {
            var _this13 = this;

            console.log("in mainapp update client");

            if (!this.update.isEnabled) {
              console.log("update not enabled");
              return;
            } else {
              console.log("update  enabled");
            }

            this.update.available.subscribe(function (event) {
              console.log('current ', event.current);
              console.log('available ', event.available);

              _this13.update.activateUpdate().then(function () {
                return location.reload();
              });
            });
            this.update.activated.subscribe(function (event) {
              console.log('current version is', event.previous);
              console.log('available version is', event.current);
            });
          }
        }, {
          key: "checkUpdate",
          value: function checkUpdate() {
            var _this14 = this;

            this.appRef.isStable.subscribe(function (isStable) {
              if (isStable) {
                var timeInterval = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(6 * 60 * 60 * 1000);
                timeInterval.subscribe(function () {
                  _this14.update.checkForUpdate().then(function () {
                    return console.log("checked");
                  });

                  console.log("update checked");
                });
              }
            });
          }
        }, {
          key: "setLocalStorageValue",
          value: function setLocalStorageValue() {
            var obj = {
              "empId": 1,
              "cmpyEmpId": "GT03",
              "firstName": "Raj",
              "lastName": "Dubal",
              "contactNo": "7720035299",
              "address": null,
              "loggedIn": 1,
              "isEmailVerified": 1,
              "emailId": "raj.dubal@greentinsolutions.com",
              "createdBy": null,
              "points": 10290,
              "isDeactive": 0,
              "profilePic": "http://gtdev.greentinsolutions.com/spicerUploads/1/Chrysanthemum.jpg",
              "noOfDaysLeft": 0,
              "dept": {
                "deptId": 1,
                "deptName": "Sales and Marketing",
                "isDeptForMaintenance": 1,
                "isStaffPerson": 0,
                "createdDate": "2018-12-14T20:27:57.000+0000",
                "updatedDate": "2023-08-27T19:26:20.000+0000",
                "organisation": {
                  "orgId": 1,
                  "name": "Greentin Solutions Pvt Ltd",
                  "orgDomain": "greentinsolutions.com",
                  "alies": "greentinsolutions",
                  "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                  "shortPortalLink": null,
                  "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2024-06-11T06:30:42.000+0000",
                  "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                  "registeredAdd": null,
                  "orgLogo": null,
                  "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "deptCode": null,
                "orgId": 0,
                "branchId": 0,
                "createdBy": 0,
                "updatedBy": 0,
                "createdById": 0,
                "updatedById": 36
              },
              "organization": {
                "orgId": 1,
                "name": "Greentin Solutions Pvt Ltd",
                "orgDomain": "greentinsolutions.com",
                "alies": "greentinsolutions",
                "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                "shortPortalLink": null,
                "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                "createdDate": "2018-12-14T20:25:10.000+0000",
                "updatedDate": "2024-06-11T06:30:42.000+0000",
                "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                "registeredAdd": null,
                "orgLogo": null,
                "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
              },
              "branch": {
                "branchId": 1,
                "name": "Pune",
                "location": "Pune",
                "createdDate": "2018-12-14T20:25:10.000+0000",
                "updatedDate": "2019-10-16T17:34:21.000+0000",
                "orgId": 0,
                "subscripId": 0,
                "productId": 0,
                "org": {
                  "orgId": 1,
                  "name": "Greentin Solutions Pvt Ltd",
                  "orgDomain": "greentinsolutions.com",
                  "alies": "greentinsolutions",
                  "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                  "shortPortalLink": null,
                  "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2024-06-11T06:30:42.000+0000",
                  "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                  "registeredAdd": null,
                  "orgLogo": null,
                  "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                },
                "setupConfigList": [{
                  "id": 2,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 2,
                    "setupName": "Branch",
                    "status": 1
                  }
                }, {
                  "id": 6,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 6,
                    "setupName": "Controller",
                    "status": 1
                  }
                }, {
                  "id": 47,
                  "isSetupCompleted": 0,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 13,
                    "setupName": "Mandatory Setup",
                    "status": 1
                  }
                }, {
                  "id": 3,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 3,
                    "setupName": "Department",
                    "status": 1
                  }
                }, {
                  "id": 9,
                  "isSetupCompleted": 0,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 9,
                    "setupName": "Benefits and Category",
                    "status": 1
                  }
                }, {
                  "id": 11,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 11,
                    "setupName": "Access Management",
                    "status": 1
                  }
                }, {
                  "id": 8,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 8,
                    "setupName": "Implementer",
                    "status": 1
                  }
                }, {
                  "id": 12,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 12,
                    "setupName": "Escalation Email Configuration",
                    "status": 1
                  }
                }, {
                  "id": 10,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 10,
                    "setupName": "Configure",
                    "status": 1
                  }
                }, {
                  "id": 4,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 4,
                    "setupName": "Employee",
                    "status": 1
                  }
                }, {
                  "id": 49,
                  "isSetupCompleted": 0,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 14,
                    "setupName": "DWM Setup",
                    "status": 1
                  }
                }, {
                  "id": 1,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 1,
                    "setupName": "Suggestion Approach",
                    "status": 1
                  }
                }, {
                  "id": 5,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 5,
                    "setupName": "Executive",
                    "status": 1
                  }
                }, {
                  "id": 7,
                  "isSetupCompleted": 1,
                  "isMandatory": 0,
                  "setupMaster": {
                    "setupId": 7,
                    "setupName": "Evaluator",
                    "status": 1
                  }
                }],
                "locationCode": null,
                "createdBy": 0,
                "updatedBy": 0
              },
              "branchDetailsNew": null,
              "createdDate": "2018-12-14T20:25:10.000+0000",
              "updatedDate": "2025-02-24T07:12:09.000+0000",
              "line": {
                "id": 138,
                "name": "Packaging",
                "isActive": "Y",
                "dept": {
                  "deptId": 1,
                  "deptName": "Sales and Marketing",
                  "isDeptForMaintenance": 1,
                  "isStaffPerson": 0,
                  "createdDate": "2018-12-14T20:27:57.000+0000",
                  "updatedDate": "2023-08-27T19:26:20.000+0000",
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 0,
                  "updatedById": 36
                },
                "createdDate": "2023-10-09T09:35:59.000+0000",
                "updatedDate": "2023-10-09T09:35:59.000+0000",
                "deptId": 0
              },
              "role": null,
              "isPasswordExpired": 0,
              "departmentLevel": [{
                "id": 127,
                "dept": {
                  "deptId": 1,
                  "deptName": "Sales and Marketing",
                  "isDeptForMaintenance": 1,
                  "isStaffPerson": 0,
                  "createdDate": "2018-12-14T20:27:57.000+0000",
                  "updatedDate": "2023-08-27T19:26:20.000+0000",
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 0,
                  "updatedById": 36
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "isExecutive": 0,
                "level": 0,
                "levelName": "Employee",
                "createdDate": "2019-02-27T15:50:48.000+0000",
                "updatedDate": "2019-02-27T15:50:48.000+0000",
                "isEsclate": 0,
                "ftime": null,
                "ltime": null,
                "createdBy": 0,
                "updatedBy": 0,
                "line": null,
                "empId": 0,
                "execId": 0,
                "deptId": 0,
                "orgId": 0,
                "roleId": 0,
                "roleName": null,
                "branchId": 0,
                "emailId": null,
                "firstName": null,
                "lastName": null,
                "roles": null,
                "isActive": 0,
                "isSetupCompleted": 0
              }, {
                "id": 179,
                "dept": {
                  "deptId": 46,
                  "deptName": "Customer Support",
                  "isDeptForMaintenance": 1,
                  "isStaffPerson": 0,
                  "createdDate": "2019-02-19T14:59:27.000+0000",
                  "updatedDate": "2023-08-27T19:26:45.000+0000",
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 1,
                  "updatedById": 36
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "isExecutive": 0,
                "level": 0,
                "levelName": "Employee",
                "createdDate": "2019-10-17T19:02:32.000+0000",
                "updatedDate": "2019-10-17T19:02:32.000+0000",
                "isEsclate": 0,
                "ftime": null,
                "ltime": null,
                "createdBy": 0,
                "updatedBy": 0,
                "line": null,
                "empId": 0,
                "execId": 0,
                "deptId": 0,
                "orgId": 0,
                "roleId": 0,
                "roleName": null,
                "branchId": 0,
                "emailId": null,
                "firstName": null,
                "lastName": null,
                "roles": null,
                "isActive": 0,
                "isSetupCompleted": 0
              }, {
                "id": 304,
                "dept": {
                  "deptId": 7,
                  "deptName": "After-Sales Service",
                  "isDeptForMaintenance": 0,
                  "isStaffPerson": 0,
                  "createdDate": "2019-01-11T17:14:56.000+0000",
                  "updatedDate": "2023-08-27T19:26:35.000+0000",
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 0,
                  "updatedById": 36
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "isExecutive": 0,
                "level": 0,
                "levelName": "Employee",
                "createdDate": "2019-11-04T03:40:40.000+0000",
                "updatedDate": "2019-11-04T03:40:40.000+0000",
                "isEsclate": 0,
                "ftime": null,
                "ltime": null,
                "createdBy": 0,
                "updatedBy": 0,
                "line": null,
                "empId": 0,
                "execId": 0,
                "deptId": 0,
                "orgId": 0,
                "roleId": 0,
                "roleName": null,
                "branchId": 0,
                "emailId": null,
                "firstName": null,
                "lastName": null,
                "roles": null,
                "isActive": 0,
                "isSetupCompleted": 0
              }, {
                "id": 346,
                "dept": {
                  "deptId": 129,
                  "deptName": "Assembly",
                  "isDeptForMaintenance": 1,
                  "isStaffPerson": 0,
                  "createdDate": "2019-11-29T16:12:36.000+0000",
                  "updatedDate": null,
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 36,
                  "updatedById": 0
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "isExecutive": 0,
                "level": 1,
                "levelName": "Employee",
                "createdDate": "2019-11-29T16:20:59.000+0000",
                "updatedDate": "2019-11-29T16:20:59.000+0000",
                "isEsclate": 0,
                "ftime": null,
                "ltime": null,
                "createdBy": 0,
                "updatedBy": 0,
                "line": null,
                "empId": 0,
                "execId": 0,
                "deptId": 0,
                "orgId": 0,
                "roleId": 0,
                "roleName": null,
                "branchId": 0,
                "emailId": null,
                "firstName": null,
                "lastName": null,
                "roles": null,
                "isActive": 0,
                "isSetupCompleted": 0
              }, {
                "id": 353,
                "dept": {
                  "deptId": 116,
                  "deptName": "Production",
                  "isDeptForMaintenance": 0,
                  "isStaffPerson": 0,
                  "createdDate": "2019-11-07T16:47:33.000+0000",
                  "updatedDate": null,
                  "organisation": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "branch": {
                    "branchId": 1,
                    "name": "Pune",
                    "location": "Pune",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2019-10-16T17:34:21.000+0000",
                    "orgId": 0,
                    "subscripId": 0,
                    "productId": 0,
                    "org": {
                      "orgId": 1,
                      "name": "Greentin Solutions Pvt Ltd",
                      "orgDomain": "greentinsolutions.com",
                      "alies": "greentinsolutions",
                      "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                      "shortPortalLink": null,
                      "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                      "createdDate": "2018-12-14T20:25:10.000+0000",
                      "updatedDate": "2024-06-11T06:30:42.000+0000",
                      "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                      "registeredAdd": null,
                      "orgLogo": null,
                      "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                    },
                    "setupConfigList": [{
                      "id": 2,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 2,
                        "setupName": "Branch",
                        "status": 1
                      }
                    }, {
                      "id": 6,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 6,
                        "setupName": "Controller",
                        "status": 1
                      }
                    }, {
                      "id": 47,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 13,
                        "setupName": "Mandatory Setup",
                        "status": 1
                      }
                    }, {
                      "id": 3,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 3,
                        "setupName": "Department",
                        "status": 1
                      }
                    }, {
                      "id": 9,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 9,
                        "setupName": "Benefits and Category",
                        "status": 1
                      }
                    }, {
                      "id": 11,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 11,
                        "setupName": "Access Management",
                        "status": 1
                      }
                    }, {
                      "id": 8,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 8,
                        "setupName": "Implementer",
                        "status": 1
                      }
                    }, {
                      "id": 12,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 12,
                        "setupName": "Escalation Email Configuration",
                        "status": 1
                      }
                    }, {
                      "id": 10,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 10,
                        "setupName": "Configure",
                        "status": 1
                      }
                    }, {
                      "id": 4,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 4,
                        "setupName": "Employee",
                        "status": 1
                      }
                    }, {
                      "id": 49,
                      "isSetupCompleted": 0,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 14,
                        "setupName": "DWM Setup",
                        "status": 1
                      }
                    }, {
                      "id": 1,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 1,
                        "setupName": "Suggestion Approach",
                        "status": 1
                      }
                    }, {
                      "id": 5,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 5,
                        "setupName": "Executive",
                        "status": 1
                      }
                    }, {
                      "id": 7,
                      "isSetupCompleted": 1,
                      "isMandatory": 0,
                      "setupMaster": {
                        "setupId": 7,
                        "setupName": "Evaluator",
                        "status": 1
                      }
                    }],
                    "locationCode": null,
                    "createdBy": 0,
                    "updatedBy": 0
                  },
                  "deptCode": null,
                  "orgId": 0,
                  "branchId": 0,
                  "createdBy": 0,
                  "updatedBy": 0,
                  "createdById": 36,
                  "updatedById": 0
                },
                "branch": {
                  "branchId": 1,
                  "name": "Pune",
                  "location": "Pune",
                  "createdDate": "2018-12-14T20:25:10.000+0000",
                  "updatedDate": "2019-10-16T17:34:21.000+0000",
                  "orgId": 0,
                  "subscripId": 0,
                  "productId": 0,
                  "org": {
                    "orgId": 1,
                    "name": "Greentin Solutions Pvt Ltd",
                    "orgDomain": "greentinsolutions.com",
                    "alies": "greentinsolutions",
                    "portalLink": "http://gtdev.greentinsolutions.com/enovation-portal-spicer/",
                    "shortPortalLink": null,
                    "serverDomainName": "greentinsolutions.aihub.greentinsolutions.com",
                    "createdDate": "2018-12-14T20:25:10.000+0000",
                    "updatedDate": "2024-06-11T06:30:42.000+0000",
                    "logo": "http://gtdev.greentinsolutions.com/spicerUploads/greentinsolutions/DAN_A_cor(1).jpg",
                    "registeredAdd": null,
                    "orgLogo": null,
                    "logoPath": "greentinsolutions/DAN_A_cor(1).jpg"
                  },
                  "setupConfigList": [{
                    "id": 2,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 2,
                      "setupName": "Branch",
                      "status": 1
                    }
                  }, {
                    "id": 6,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 6,
                      "setupName": "Controller",
                      "status": 1
                    }
                  }, {
                    "id": 47,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 13,
                      "setupName": "Mandatory Setup",
                      "status": 1
                    }
                  }, {
                    "id": 3,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 3,
                      "setupName": "Department",
                      "status": 1
                    }
                  }, {
                    "id": 9,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 9,
                      "setupName": "Benefits and Category",
                      "status": 1
                    }
                  }, {
                    "id": 11,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 11,
                      "setupName": "Access Management",
                      "status": 1
                    }
                  }, {
                    "id": 8,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 8,
                      "setupName": "Implementer",
                      "status": 1
                    }
                  }, {
                    "id": 12,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 12,
                      "setupName": "Escalation Email Configuration",
                      "status": 1
                    }
                  }, {
                    "id": 10,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 10,
                      "setupName": "Configure",
                      "status": 1
                    }
                  }, {
                    "id": 4,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 4,
                      "setupName": "Employee",
                      "status": 1
                    }
                  }, {
                    "id": 49,
                    "isSetupCompleted": 0,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 14,
                      "setupName": "DWM Setup",
                      "status": 1
                    }
                  }, {
                    "id": 1,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 1,
                      "setupName": "Suggestion Approach",
                      "status": 1
                    }
                  }, {
                    "id": 5,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 5,
                      "setupName": "Executive",
                      "status": 1
                    }
                  }, {
                    "id": 7,
                    "isSetupCompleted": 1,
                    "isMandatory": 0,
                    "setupMaster": {
                      "setupId": 7,
                      "setupName": "Evaluator",
                      "status": 1
                    }
                  }],
                  "locationCode": null,
                  "createdBy": 0,
                  "updatedBy": 0
                },
                "isExecutive": 0,
                "level": 2,
                "levelName": "Employee",
                "createdDate": "2023-09-22T09:09:57.000+0000",
                "updatedDate": "2023-09-22T09:09:57.000+0000",
                "isEsclate": 0,
                "ftime": null,
                "ltime": null,
                "createdBy": 0,
                "updatedBy": 0,
                "line": null,
                "empId": 0,
                "execId": 0,
                "deptId": 0,
                "orgId": 0,
                "roleId": 0,
                "roleName": null,
                "branchId": 0,
                "emailId": null,
                "firstName": null,
                "lastName": null,
                "roles": null,
                "isActive": 0,
                "isSetupCompleted": 0
              }],
              "teamDetails": null,
              "moodIndicator": [{
                "id": 3123,
                "rating": 5,
                "empDetails": null,
                "branch": null,
                "createdDate": "2025-02-24T05:12:34.000+0000",
                "branchId": 0,
                "deptId": 0,
                "emoji": 0
              }],
              "roles": [{
                "id": 13,
                "name": "STAFF_PERSON",
                "label": null
              }, {
                "id": 5,
                "name": "EXECUTIVE",
                "label": null
              }, {
                "id": 2,
                "name": "SUPERADMIN",
                "label": null
              }, {
                "id": 6,
                "name": "CONTROLLER",
                "label": null
              }, {
                "id": 9,
                "name": "IMPLEMENTER",
                "label": null
              }, {
                "id": 19,
                "name": "FINANCE_HEAD",
                "label": null
              }, {
                "id": 15,
                "name": "AUDITOR",
                "label": null
              }, {
                "id": 16,
                "name": "OPERATING_ENGINEER",
                "label": null
              }, {
                "id": 10,
                "name": "FINANCE_CONTROLLER",
                "label": null
              }, {
                "id": 8,
                "name": "EVALUATOR",
                "label": null
              }, {
                "id": 18,
                "name": "COO",
                "label": null
              }, {
                "id": 4,
                "name": "EMPLOYEE",
                "label": null
              }, {
                "id": 23,
                "name": "DOCUMENT_OWNER",
                "label": null
              }, {
                "id": 20,
                "name": "CF_TEAM",
                "label": null
              }],
              "productOrgConfigDet": {
                "id": 1,
                "product": {
                  "id": 2,
                  "name": "eNovation",
                  "description": "This is eNovation Product",
                  "status": 1,
                  "createDate": "2018-11-06T05:00:00.000+0000",
                  "updateDate": null,
                  "createdById": null
                },
                "subscriptionPlan": {
                  "subscripId": 1,
                  "type": null,
                  "description": "Free Version",
                  "noOfEmployee": 200,
                  "noOfDays": 365,
                  "isDeactive": 0,
                  "createdDate": "2018-11-06T05:00:00.000+0000",
                  "product": {
                    "id": 2,
                    "name": "eNovation",
                    "description": "This is eNovation Product",
                    "status": 1,
                    "createDate": "2018-11-06T05:00:00.000+0000",
                    "updateDate": null,
                    "createdById": null
                  }
                },
                "isSetupCompleted": 1,
                "isEscalation": 1,
                "isDeactivated": 0,
                "isDocChangeOn": 1,
                "isActivityOn": 1,
                "registrationByPass": "Y",
                "isHappinessOn": 0,
                "isScoreMandatory": 0,
                "isThemeCostMandate": 1,
                "isTierOneSelfImpl": 0,
                "isSustenanceAuditRequired": 1,
                "isSusAuditRequired": 1,
                "tierTwoSelfImpl": 0,
                "createdDate": null,
                "updatedDate": "2025-01-25T09:56:44.000+0000",
                "createdBy": 0,
                "updatedBy": 0,
                "regDate": null,
                "subscriptionDate": "2025-01-25T09:56:44.000+0000",
                "deactivationDate": "2024-08-25T18:49:12.000+0000",
                "isBeforeUploadImageOn": 0,
                "isAfterUploadImageOn": 0,
                "isKuberSchedularOn": 0,
                "branchId": 0,
                "remainingDays": -183
              },
              "addController": null,
              "removeController": null,
              "designation": "Employee",
              "emproles": [],
              "langName": {
                "langId": 1,
                "langName": "English"
              },
              "pmsUserRoles": [{
                "id": 166,
                "empId": 1,
                "deptId": 116,
                "lineId": 28,
                "branchId": 1,
                "createdBy": 1,
                "updatedBy": 1,
                "createdDate": "2024-09-09T10:22:00.000+0000",
                "updatedDate": "2024-09-09T10:22:00.000+0000",
                "userType": {
                  "id": 1,
                  "userType": "SUPERVISOR",
                  "caption": "SUPERVISOR",
                  "roleId": 0
                }
              }, {
                "id": 167,
                "empId": 1,
                "deptId": 116,
                "lineId": 28,
                "branchId": 1,
                "createdBy": 1,
                "updatedBy": 1,
                "createdDate": "2024-09-09T10:22:16.000+0000",
                "updatedDate": "2024-09-09T10:22:16.000+0000",
                "userType": {
                  "id": 2,
                  "userType": "OE LEAD",
                  "caption": "OE_LEAD",
                  "roleId": 0
                }
              }, {
                "id": 168,
                "empId": 1,
                "deptId": 116,
                "lineId": 28,
                "branchId": 1,
                "createdBy": 1,
                "updatedBy": 1,
                "createdDate": "2024-09-09T10:22:35.000+0000",
                "updatedDate": "2024-09-09T10:22:35.000+0000",
                "userType": {
                  "id": 3,
                  "userType": "PRODUCTION MANAGER",
                  "caption": "PRODUCTION_MANAGER",
                  "roleId": 0
                }
              }, {
                "id": 169,
                "empId": 1,
                "deptId": 116,
                "lineId": 28,
                "branchId": 1,
                "createdBy": 1,
                "updatedBy": 1,
                "createdDate": "2024-09-09T10:22:51.000+0000",
                "updatedDate": "2024-09-09T10:22:51.000+0000",
                "userType": {
                  "id": 4,
                  "userType": "HR HEAD",
                  "caption": "HR_HEAD",
                  "roleId": 0
                }
              }, {
                "id": 170,
                "empId": 1,
                "deptId": 116,
                "lineId": 28,
                "branchId": 1,
                "createdBy": 1,
                "updatedBy": 1,
                "createdDate": "2024-09-09T10:23:06.000+0000",
                "updatedDate": "2024-09-09T10:23:06.000+0000",
                "userType": {
                  "id": 5,
                  "userType": "PLANT HEAD",
                  "caption": "PLANT_HEAD",
                  "roleId": 0
                }
              }],
              "doj": "2019-01-01",
              "middleName": null,
              "empLevelDetails": {
                "empLvlId": 8,
                "levelType": "OE",
                "levelName": "OE",
                "branchId": 1,
                "createdBy": 36,
                "updatedBy": 36,
                "createdDate": "2019-11-13T18:18:30.000+0000",
                "updatedDate": "2019-12-04T00:02:43.000+0000",
                "isActive": "Y"
              },
              "dob": "2017-08-14",
              "doa": "2018-08-16",
              "authToken": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzQwMzg5MzUwfQ.ZGy5JKH3W--tvmCMS5C67RoHOzw33XpTGjvN5DAUo83TlpGzi2r27HBR1uqjMwTb-HSwYQ0CkYW46Heus8o8Cw"
            };
            var auth_token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzQwMzg5MzUwfQ.ZGy5JKH3W--tvmCMS5C67RoHOzw33XpTGjvN5DAUo83TlpGzi2r27HBR1uqjMwTb-HSwYQ0CkYW46Heus8o8Cw";
            localStorage.setItem('userDet', JSON.stringify(obj));
            localStorage.setItem('auth_token', JSON.stringify(auth_token));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwUpdate"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["SwUpdate"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])], AppComponent);
      /***/
    },

    /***/
    "T0+U":
    /*!************************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function T0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "TzDh":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipe/order-by.pipe.ts ***!
      \**********************************************/

    /*! exports provided: OrderByPipe */

    /***/
    function TzDh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
        return OrderByPipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderByPipe = /*#__PURE__*/function () {
        function OrderByPipe() {
          _classCallCheck(this, OrderByPipe);
        }

        _createClass(OrderByPipe, [{
          key: "transform",
          value: function transform(array, field) {
            array.sort(function (a, b) {
              if (a[field].toUpperCase() < b[field].toUpperCase()) {
                return -1;
              } else if (a[field].toUpperCase() > b[field].toUpperCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            return array;
          }
        }]);

        return OrderByPipe;
      }();

      OrderByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'orderBy'
      })], OrderByPipe);
      /***/
    },

    /***/
    "UO6d":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/pagination/pagination.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function UO6d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Pagination CSS */\n.paginationFooter {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px -5px 6px #00000029;\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n.paginationFooter .paginationTotalCount {\n  background: #ecf5f8;\n  border-radius: 15px;\n  color: #373737;\n  font: normal normal normal 14px/1 Helvetica Neue;\n  padding: 0.3rem 1.3rem;\n  display: inline-block;\n}\n.paginationFooter .submitBottomBtn {\n  background: url('submitBtn.png') transparent no-repeat 100%;\n  background-position: center;\n  width: 100%;\n  background-size: auto;\n  margin-top: 0rem;\n}\n.paginationFooter .submitBottomBtn .submitBtn {\n  background: transparent;\n  font-size: 15px;\n  line-height: 33px;\n  padding: 0px;\n  width: calc(100% - 200px);\n  cursor: pointer;\n  box-shadow: none;\n}\n.paginationFooter .submitBottomBtn .submitBtn:disabled {\n  cursor: not-allowed;\n}\n.paginationFooter .customPagination {\n  /* padding: 0.3rem 1.3rem; */\n  display: flex;\n  justify-content: flex-end;\n}\n.paginationFooter .customPagination .pagination {\n  font-family: Helvetica, FontAwesome;\n  margin: 5px 0px;\n}\n.paginationFooter .customPagination .pagination .page-item {\n  display: none;\n}\n.paginationFooter .customPagination .pagination .page-item:first-child,\n.paginationFooter .customPagination .pagination .page-item:nth-child(2),\n.paginationFooter .customPagination .pagination .page-item:last-child {\n  display: block;\n}\n.paginationFooter .customPagination .pagination .page-item {\n  text-align: center;\n  border-radius: 0px;\n}\n.paginationFooter .customPagination .pagination .page-item a {\n  background: #7044cd;\n  color: #fff;\n  border: none;\n  padding: 0.3rem 1.3rem;\n}\n.paginationFooter .customPagination .pagination .page-item a:focus {\n  box-shadow: none;\n}\n.paginationFooter .customPagination .pagination .page-item:first-child a {\n  border-bottom-left-radius: 15px;\n  border-top-left-radius: 15px;\n}\n.paginationFooter .customPagination .pagination .page-item:last-child a {\n  border-bottom-right-radius: 15px;\n  border-top-right-radius: 15px;\n}\n.paginationFooter .customPagination .pagination .page-item:nth-child(2) a {\n  background: #ecf5f8;\n  color: #3a3b3b;\n  padding: 0.3rem 0.5rem;\n}\n.paginationFooter .customPagination .pagination .page-item.disabled a {\n  background: #def0f6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFFQTtFQUNJLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNSO0FBRUk7RUFDSSwyREFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUFZO0VBQ0ksbUJBQUE7QUFFaEI7QUFFSTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQVI7QUFDUTtFQUNJLG1DQUFBO0VBQ0EsZUFBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0FBRWhCO0FBQVk7OztFQUdJLGNBQUE7QUFFaEI7QUFBWTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFEZ0I7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFHcEI7QUFEZ0I7RUFDSSxnQkFBQTtBQUdwQjtBQUNnQjtFQUNJLCtCQUFBO0VBQ0EsNEJBQUE7QUFDcEI7QUFHZ0I7RUFDSSxnQ0FBQTtFQUNBLDZCQUFBO0FBRHBCO0FBS2dCO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFIcEI7QUFPZ0I7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FBTHBCIiwiZmlsZSI6InBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYWdpbmF0aW9uIENTUyAqL1xyXG5cclxuLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTVweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAucGFnaW5hdGlvblRvdGFsQ291bnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlY2Y1Zjg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBjb2xvcjogIzM3MzczNztcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgcGFkZGluZzogMC4zcmVtIDEuM3JlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgLy8gbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1Ym1pdEJvdHRvbUJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi9zdWJtaXRCdG4ucG5nXCIpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcclxuICAgICAgICAuc3VibWl0QnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgLyogcGFkZGluZzogMC4zcmVtIDEuM3JlbTsgKi9cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgLnBhZ2luYXRpb24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBGb250QXdlc29tZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAucGFnZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZ2UtaXRlbTpmaXJzdC1jaGlsZCxcclxuICAgICAgICAgICAgLnBhZ2UtaXRlbTpudGgtY2hpbGQoMiksXHJcbiAgICAgICAgICAgIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFnZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYWdlLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFnZS1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmNWY4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjM2EzYjNiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZ2UtaXRlbS5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGVmMGY2O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "UrpS":
    /*!*******************************************************!*\
      !*** ./src/app/theme/layout/auth/auth.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function UrpS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "VT1F":
    /*!********************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function VT1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".custom-Alert {\n  position: fixed;\n  margin: 3rem;\n  z-index: 9999;\n  width: calc(100% - 6rem);\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n.custom-Alert span {\n  vertical-align: middle;\n}\n.backPage {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFDSjtBQUFJO0VBQ0ksc0JBQUE7QUFFUjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUoiLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLUFsZXJ0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbjogM3JlbTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNnJlbSk7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuLmJhY2tQYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet>\r\n    <app-spinner></app-spinner>\r\n    <app-global-loader *ngIf=\"auth.globalLoader\"></app-global-loader>\r\n</router-outlet>";
      /***/
    },

    /***/
    "WGuA":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WGuA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"main-search\" class=\"main-search open\">\r\n  <div class=\"input-group\">\r\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"'130px'\">\r\n    <span class=\"input-group-append search-btn btn btn-primary\">\r\n      <i class=\"feather icon-search input-group-text\"></i>\r\n    </span>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "WuPV":
    /*!***********************************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function WuPV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUVBQUE7RUFDQSwyREFBQTtBQUNKOztBQUVBO0VBQ0k7SUFFSSxvQkFBQTtFQUNOO0VBQ0U7SUFFSSxvQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSTtJQUVJLG9CQUFBO0VBQU47RUFFRTtJQUVJLG9CQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBREo7O0FBSUE7RUFDSSx5Q0FBQTtBQURKIiwiZmlsZSI6InNrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "X9RO":
    /*!*********************************************************************!*\
      !*** ./src/app/theme/shared/components/loading/loader.component.ts ***!
      \*********************************************************************/

    /*! exports provided: LoadingComponent */

    /***/
    function X9RO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_loading_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./loading.component.html */
      "mr6m");
      /* harmony import */


      var _loading_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./loading.component.scss */
      "Qn1u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ctorParameters = function () {
        return [];
      };

      LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loading',
        template: _raw_loader_loading_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loading_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LoadingComponent);
      /***/
    },

    /***/
    "YSlq":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YSlq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"navbar-nav ml-auto profileInfo\">\r\n  <!-- <li>\r\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\r\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\r\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\r\n        <div class=\"noti-head\">\r\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\r\n          <div class=\"float-right\">\r\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\r\n            <a href=\"javascript:\">clear all</a>\r\n          </div>\r\n        </div>\r\n        <ul class=\"noti-body\">\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">NEW</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>New ticket Added</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"n-title\">\r\n            <p class=\"m-b-0\">EARLIER</p>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>Prchace New Theme and make payment</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"notification\">\r\n            <div class=\"media\">\r\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\r\n              <div class=\"media-body\">\r\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\r\n                <p>currently login</p>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <div class=\"noti-footer\">\r\n          <a href=\"javascript:\">show all</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </li> -->\r\n  <li>\r\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\r\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\r\n        <i class=\"icon feather icon-user\"></i>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\r\n        <div class=\"pro-head\">\r\n          <img src=\"assets/images/fileIcons/no-photo.png\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n          <span>John Doe</span>\r\n          <!-- <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\">\r\n            <i class=\"feather icon-log-out\"></i>\r\n          </a> -->\r\n        </div>\r\n        <ul class=\"pro-body\">\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\r\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-log-out\"></i> Logout</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "h1mt");
      /* harmony import */


      var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./theme/layout/auth/auth.component */
      "iv9w");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation.component */
      "sqAq");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-content.component */
      "E7Y8");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */
      "aFrh");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */
      "Ap1d");
      /* harmony import */


      var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */
      "HRIB");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-bar.component */
      "hiAX");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */
      "calg");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */
      "NvK5");
      /* harmony import */


      var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */
      "aM2T");
      /* harmony import */


      var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./theme/layout/admin/configuration/configuration.component */
      "kSgv");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./theme/layout/admin/navigation/navigation */
      "S8Sc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./shared/auth/auth-interceptor */
      "sc+k");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _shared_directive_custom_directive_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./shared/directive/custom-directive.module */
      "8cSO");
      /* harmony import */


      var _shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./shared/pipe/custom-pipe.module */
      "QrAV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/service-worker */
      "Jho9");
      /* harmony import */


      var _shared_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./shared/image-cropper/image-cropper.module */
      "wcBd");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* Menu Items */

      /* Form Module */
      // import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
      // import { TranslateHttpLoader } from '@ngx-translate/http-loader';
      // export function HttpLoaderFactory(http: HttpClient) {
      //   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
      // }


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"], _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"], _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"], _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"], _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"], _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"], _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"], _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"], _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"], _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"], _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__["ConfigurationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTabsetModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _shared_directive_custom_directive_module__WEBPACK_IMPORTED_MODULE_25__["CustomDirectiveModule"], _shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_26__["CustomPipeModule"], _shared_image_cropper_image_cropper_module__WEBPACK_IMPORTED_MODULE_29__["ImageCropperModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], // TranslateModule.forRoot({
        //   loader: {
        //     provide: TranslateLoader,
        //     useFactory: HttpLoaderFactory,
        //     deps: [HttpClient]
        //   },
        //   isolate: true,
        // }),
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"].register('ngsw-worker.js', {
          enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_24__["environment"].production
        })],
        providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__["NavigationItem"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
          useClass: _shared_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_23__["AuthInterceptor"],
          multi: true
        }, {
          provide: 'Environment',
          useValue: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_24__["environment"]
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "ZhNB":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZhNB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\r\n    <div class=\"loader-bg\">\r\n        <!-- material-line -->\r\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\r\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "a8xz":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function a8xz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "aFrh":
    /*!********************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: NavGroupComponent */

    /***/
    function aFrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
        return NavGroupComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_group_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-group.component.html */
      "Dp0H");
      /* harmony import */


      var _nav_group_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-group.component.scss */
      "fncE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../navigation */
      "S8Sc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../../app-config */
      "K7hc");

      var NavGroupComponent = /*#__PURE__*/function () {
        function NavGroupComponent(zone, location) {
          _classCallCheck(this, NavGroupComponent);

          this.zone = zone;
          this.location = location;
          this.layout1 = false;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_6__["NextConfig"].config;
        }

        _createClass(NavGroupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // at reload time active and trigger link
            var current_url = this.location.path();

            if (this.location['_baseHref']) {
              current_url = this.location['_baseHref'] + this.location.path();
            }

            var link = "a.nav-link[ href='" + current_url + "' ]";
            var ele = document.querySelector(link);

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;

              if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  parent.classList.add('pcoded-trigger');
                }

                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  up_parent.classList.add('pcoded-trigger');
                }

                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                  last_parent.classList.add('pcoded-trigger');
                }

                last_parent.classList.add('active');
              }
            }
          }
        }]);

        return NavGroupComponent;
      }();

      NavGroupComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      NavGroupComponent.propDecorators = {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        layout1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        activeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      NavGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-group',
        template: _raw_loader_nav_group_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_group_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], NavGroupComponent);
      /***/
    },

    /***/
    "aM2T":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: NavRightComponent */

    /***/
    function aM2T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
        return NavRightComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_right_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-right.component.html */
      "YSlq");
      /* harmony import */


      var _nav_right_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-right.component.scss */
      "vVwH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var NavRightComponent = /*#__PURE__*/function () {
        function NavRightComponent() {
          _classCallCheck(this, NavRightComponent);
        }

        _createClass(NavRightComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavRightComponent;
      }();

      NavRightComponent.ctorParameters = function () {
        return [];
      };

      NavRightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-right',
        template: _raw_loader_nav_right_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        styles: [_nav_right_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavRightComponent);
      /***/
    },

    /***/
    "afnz":
    /*!****************************************************************!*\
      !*** ./src/app/theme/shared/components/alert/alert.service.ts ***!
      \****************************************************************/

    /*! exports provided: AlertService */

    /***/
    function afnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertService", function () {
        return AlertService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _alert_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./alert.model */
      "MuVI");

      var AlertService = /*#__PURE__*/function () {
        function AlertService() {
          _classCallCheck(this, AlertService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.defaultId = 'default-alert';
          this.options = {
            autoClose: false,
            keepAfterRouteChange: false
          };
        } // enable subscribing to alerts observable


        _createClass(AlertService, [{
          key: "onAlert",
          value: function onAlert() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
              return x && x.id === id;
            }));
          } // convenience methods

        }, {
          key: "success",
          value: function success(message) {
            // this.alert(new Alert({ ...this.options, type: AlertType.Success, message }));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: 'success',
              // title: 'Oops...',
              text: message,
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              confirmButtonColor: '#7044CD',
              customClass: {
                container: 'successErrorSwal'
              },
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          }
        }, {
          key: "error",
          value: function error(message) {
            // this.alert(new Alert({ ...this.options, type: AlertType.Error, message }));
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              icon: 'error',
              // title: 'Oops...',
              text: message,
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              confirmButtonColor: '#f27474',
              customClass: {
                container: 'successErrorSwal'
              },
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          }
        }, {
          key: "closeSwal",
          value: function closeSwal() {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
          }
        }, {
          key: "info",
          value: function info(message) {
            this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"](Object.assign(Object.assign({}, this.options), {
              type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Info,
              message: message
            })));
          }
        }, {
          key: "warn",
          value: function warn(message) {
            this.alert(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"](Object.assign(Object.assign({}, this.options), {
              type: _alert_model__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Warning,
              message: message
            })));
          } // main alert method    

        }, {
          key: "alert",
          value: function alert(_alert) {
            _alert.id = _alert.id || this.defaultId;
            this.subject.next(_alert);
          } // clear alerts

        }, {
          key: "clear",
          value: function clear() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
            this.subject.next(new _alert_model__WEBPACK_IMPORTED_MODULE_5__["Alert"]({
              id: id
            }));
          }
        }]);

        return AlertService;
      }();

      AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AlertService);
      /***/
    },

    /***/
    "bZ/c":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\">\r\n        <app-nav-search></app-nav-search>\r\n    </li>\r\n</ul>";
      /***/
    },

    /***/
    "bnLG":
    /*!*********************************************!*\
      !*** ./src/app/shared/auth/http.service.ts ***!
      \*********************************************/

    /*! exports provided: HttpService */

    /***/
    function bnLG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http, env) {
          _classCallCheck(this, HttpService);

          this.http = http;
          this.headers = {
            'Content-Type': 'application/json'
          };
          this.apiUrl = env.apiUrl;
        }

        _createClass(HttpService, [{
          key: "getMethod",
          value: function getMethod(url) {
            return this.http.get(this.apiUrl + url, {
              headers: this.headers
            });
          }
        }, {
          key: "postMethod",
          value: function postMethod(url, body) {
            return this.http.post(this.apiUrl + url, body, {
              headers: this.headers
            });
          }
        }, {
          key: "formDataRequest",
          value: function formDataRequest(url, formData) {
            return this.http.post(this.apiUrl + url, formData);
          }
        }, {
          key: "putMethod",
          value: function putMethod(url, body) {
            return this.http.put(this.apiUrl + url, body, {
              headers: this.headers
            });
          }
        }, {
          key: "deleteMethod",
          value: function deleteMethod(url) {
            return this.http["delete"](this.apiUrl + url, {
              headers: this.headers
            });
          }
        }]);

        return HttpService;
      }();

      HttpService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: ['Environment']
          }]
        }];
      };

      HttpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])], HttpService);
      /***/
    },

    /***/
    "calg":
    /*!***************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
      \***************************************************************************/

    /*! exports provided: NavLeftComponent */

    /***/
    function calg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
        return NavLeftComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_left_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-left.component.html */
      "bZ/c");
      /* harmony import */


      var _nav_left_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-left.component.scss */
      "ipDc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavLeftComponent = /*#__PURE__*/function () {
        function NavLeftComponent() {
          _classCallCheck(this, NavLeftComponent);
        }

        _createClass(NavLeftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavLeftComponent;
      }();

      NavLeftComponent.ctorParameters = function () {
        return [];
      };

      NavLeftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-left',
        template: _raw_loader_nav_left_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_left_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavLeftComponent);
      /***/
    },

    /***/
    "cvOk":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/loginInfo/loginInfo.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function cvOk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".topBar {\n  width: 100%;\n  height: 60px;\n  background: transparent;\n}\n\n.profileInfo {\n  text-align: center;\n}\n\n.profileInfo .userPic img {\n  max-width: 100%;\n  height: 30px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\n.profileInfo .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n\n.profileInfo .logoutImg .feather {\n  padding: 5px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n}\n\n.navbarContainer .navbar-nav li > a {\n  font-size: 16px;\n  padding: 0 0.6rem;\n  color: #7044cd;\n}\n\n.navbarContainer .navbar-nav li .userProfile {\n  display: inline-block;\n}\n\n.navbarContainer .navbar-nav li .userProfile i {\n  font-size: 10px;\n  margin-left: 10px;\n}\n\n.navbarContainer .navbar-nav li .userProfile img {\n  max-width: 100%;\n  height: 50px;\n  width: 50px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li .userProfile .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #7044cd;\n  vertical-align: middle;\n}\n\n.navbarContainer .navbar-nav li.header-notification {\n  perspective: 1000px;\n  z-index: 99;\n  position: relative;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification {\n  background: #fff;\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  visibility: visible;\n  transform: translateY(20px);\n  padding: 0px;\n  z-index: 999;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a {\n  padding: 0.7em 20px;\n  display: block;\n  text-decoration: none;\n  font-size: 15px;\n  padding-left: 0;\n  color: #222;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:hover {\n  background-color: #f6fcff;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:first-child {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:last-child {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification i {\n  font-size: 15px;\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification.active1:before {\n  content: \"\";\n  border: 10px solid transparent;\n  border-left-color: #fff;\n  border-top-color: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: -9px;\n  right: 20px;\n  box-shadow: -30px -11px 35px 0 rgba(0, 0, 0, 0.25);\n  transform: rotate(45deg);\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGxvZ2luSW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0FBQUo7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFEWjs7QUFLSTtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBSFI7O0FBT1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFMWjs7QUFXSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQVJSOztBQVdZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVRoQjs7QUFZWTtFQUNJLHFCQUFBO0FBVmhCOztBQVlnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVZwQjs7QUFhZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBWHBCOztBQWNnQjtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBWnBCOztBQWdCWTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWRoQjs7QUFnQmdCO0VBQ0ksZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWRwQjs7QUFnQm9CO0VBS0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFsQnhCOztBQVN3QjtFQUNJLHlCQUFBO0FBUDVCOztBQWtCNEI7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFoQmhDOztBQWtCZ0M7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFoQnBDOztBQW1CZ0M7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUFqQnBDOztBQXVCb0I7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0FBckJ4Qjs7QUF3Qm9CO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQXRCeEI7O0FBeUJvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF2QnhCOztBQTJCd0I7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUF6QjVCIiwiZmlsZSI6ImxvZ2luSW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BCYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnByb2ZpbGVJbmZvIHtcclxuICAgIC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC51c2VyUGljIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VyTmFtZSB7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ291dEltZyB7XHJcbiAgICAgICAgLmZlYXRoZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhckNvbnRhaW5lciB7XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgID5hIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC42cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51c2VyUHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuaGVhZGVyLW5vdGlmaWNhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2ZpbGUtbm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzNXB4IDAgcmdiKDAgMCAwIC8gMjUlKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZmNmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW0gMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoW2hyZWZdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOm5vdChbdGFiaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGE6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zMHB4IC0xMXB4IDM1cHggMCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "cxbk":
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /*! exports provided: environment */

    /***/
    function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,
        // apiUrl: 'http://gtdev.greentinsolutions.com:8085/spicer/', //Dev
        // apiUrl: 'http://10.37.61.251:8080/enovation-prod/',   //Prod
        apiUrl: 'http://91.108.110.98:8080/spicer/',
        // apiUrl: "http://localhost:8091/",
        version: '1.0.8'
      };
      /***/
    },

    /***/
    "eB9G":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/shared/components/topBar/topBar.module.ts ***!
      \*****************************************************************/

    /*! exports provided: TopBarModule */

    /***/
    function eB9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopBarModule", function () {
        return TopBarModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _topBar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./topBar.component */
      "9O41");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var TopBarModule = function TopBarModule() {
        _classCallCheck(this, TopBarModule);
      };

      TopBarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"]],
        declarations: [_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]],
        exports: [_topBar_component__WEBPACK_IMPORTED_MODULE_3__["TopBarComponent"]],
        providers: []
      })], TopBarModule);
      /***/
    },

    /***/
    "ebz3":
    /*!***********************************************!*\
      !*** ./src/app/theme/shared/shared.module.ts ***!
      \***********************************************/

    /*! exports provided: SharedModule */

    /***/
    function ebz3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components */
      "7jS0");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bFKe");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-click-outside */
      "T4ad");
      /* harmony import */


      var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/spinner/spinner.component */
      "s2d5");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _components_certificate_certificate_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/certificate/certificate.module */
      "MdYY");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"], _components__WEBPACK_IMPORTED_MODULE_4__["DateRangePickerModule"], _components__WEBPACK_IMPORTED_MODULE_4__["TopBarModule"], _components__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], _components__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"], _components__WEBPACK_IMPORTED_MODULE_4__["GlobalLoaderModule"], _components__WEBPACK_IMPORTED_MODULE_4__["LoginInfoModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _components_certificate_certificate_module__WEBPACK_IMPORTED_MODULE_9__["CertificateModule"], _components__WEBPACK_IMPORTED_MODULE_4__["AssessessmentDetailModalModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _components__WEBPACK_IMPORTED_MODULE_4__["DateRangePickerModule"], _components__WEBPACK_IMPORTED_MODULE_4__["TopBarModule"], _components__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"], _components__WEBPACK_IMPORTED_MODULE_4__["LoadingModule"], _components__WEBPACK_IMPORTED_MODULE_4__["GlobalLoaderModule"], _components__WEBPACK_IMPORTED_MODULE_4__["LoginInfoModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"], _components_certificate_certificate_module__WEBPACK_IMPORTED_MODULE_9__["CertificateModule"], _components__WEBPACK_IMPORTED_MODULE_4__["AssessessmentDetailModalModule"]],
        declarations: [_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]],
        providers: [{
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }]
      })], SharedModule);
      /***/
    },

    /***/
    "f5zd":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/shared/components/loginInfo/loginInfo.module.ts ***!
      \***********************************************************************/

    /*! exports provided: LoginInfoModule */

    /***/
    function f5zd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginInfoModule", function () {
        return LoginInfoModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loginInfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loginInfo.component */
      "0iJm");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var LoginInfoModule = function LoginInfoModule() {
        _classCallCheck(this, LoginInfoModule);
      };

      LoginInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"]],
        declarations: [_loginInfo_component__WEBPACK_IMPORTED_MODULE_3__["LoginInfoComponent"]],
        exports: [_loginInfo_component__WEBPACK_IMPORTED_MODULE_3__["LoginInfoComponent"]],
        providers: []
      })], LoginInfoModule);
      /***/
    },

    /***/
    "fncE":
    /*!**********************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fncE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "fsW/":
    /*!*******************************************************************!*\
      !*** ./src/app/theme/shared/components/loading/loading.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LoadingModule */

    /***/
    function fsW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingModule", function () {
        return LoadingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./loader.component */
      "X9RO");

      var LoadingModule = function LoadingModule() {
        _classCallCheck(this, LoadingModule);
      };

      LoadingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
        exports: [_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"]],
        providers: []
      })], LoadingModule);
      /***/
    },

    /***/
    "fsj3":
    /*!******************************************************************************!*\
      !*** ./src/app/theme/shared/components/certificate/certificate.component.ts ***!
      \******************************************************************************/

    /*! exports provided: CertificateComponent */

    /***/
    function fsj3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CertificateComponent", function () {
        return CertificateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_certificate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./certificate.component.html */
      "9ukd");
      /* harmony import */


      var _certificate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./certificate.component.scss */
      "Lwh+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jspdf */
      "i680");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! html2canvas */
      "wOnQ");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);

      var CertificateComponent = /*#__PURE__*/function () {
        function CertificateComponent(modalService, cdr) {
          _classCallCheck(this, CertificateComponent);

          this.modalService = modalService;
          this.cdr = cdr;
          this.selectedCert = {};
          this.userDet = {};
          this.downloadLoader = false;
          this.screenWidth = window.innerWidth;
        }

        _createClass(CertificateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.selectedDet);
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            console.log(this.userDet.organization.logo);
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalService.dismissAll();
          }
        }, {
          key: "downloadCertificate",
          value: function downloadCertificate() {
            var _this15 = this;

            this.downloadLoader = true;
            var DATA = document.getElementById('certModalBody');

            if (DATA) {
              html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(DATA, {
                useCORS: true,
                allowTaint: true,
                backgroundColor: "transparent",
                scale: 2 // Increase scale for better quality

              }).then(function (canvas) {
                console.log(canvas);
                var FILEURI = canvas.toDataURL('image/png');
                var PDF = new jspdf__WEBPACK_IMPORTED_MODULE_5__["default"]('l', 'mm', 'a4');
                var width = PDF.internal.pageSize.getWidth();
                var height = PDF.internal.pageSize.getHeight();
                PDF.addImage(FILEURI, 'PNG', 0, 0, width, height, '', 'FAST');
                PDF.save("".concat(_this15.selectedDet.empName, "_certificate.pdf"));
                _this15.downloadLoader = false;
              })["catch"](function (error) {
                console.error('Error generating PDF: ', error);
                _this15.downloadLoader = false;
              });
            } else {
              console.error('Element not found!');
              this.downloadLoader = false;
            }
          } // Other component code
          // Update the screenWidth property on window resize

        }, {
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
            console.log(this.screenWidth); // Call the method to update the dynamic width
            // You can also use ChangeDetectorRef to trigger change detection if needed

            this.calculateDynamicWidth();
            this.cdr.detectChanges(); // Trigger change detection

            console.log(this.screenWidth);
          }
        }, {
          key: "calculateDynamicWidth",
          value: function calculateDynamicWidth() {
            // Your logic to determine the dynamic width based on screenWidth
            // For example, you can have different width values for different screen sizes
            console.log(this.screenWidth);

            if (this.screenWidth <= 600) {
              return '85%';
            } else if (this.screenWidth <= 800) {
              return '90%';
            } else if (this.screenWidth <= 992) {
              return '95%';
            } else {
              return '100%';
            }
          }
        }]);

        return CertificateComponent;
      }();

      CertificateComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      CertificateComponent.propDecorators = {
        selectedDet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CertificateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-viewCertificate',
        template: _raw_loader_certificate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], CertificateComponent);
      /***/
    },

    /***/
    "h1mt":
    /*!*******************************************************!*\
      !*** ./src/app/theme/layout/admin/admin.component.ts ***!
      \*******************************************************/

    /*! exports provided: AdminComponent */

    /***/
    function h1mt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
        return AdminComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./admin.component.html */
      "hICc");
      /* harmony import */


      var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./admin.component.scss */
      "xI0A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AdminComponent = /*#__PURE__*/function () {
        function AdminComponent(zone, location) {
          _classCallCheck(this, AdminComponent);

          this.zone = zone;
          this.location = location;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
          var currentURL = this.location.path();
          var baseHerf = this.location['_baseHref'];

          if (baseHerf) {
            currentURL = baseHerf + this.location.path();
          }

          this.windowWidth = window.innerWidth;

          if (currentURL === baseHerf + '/layout/collapse-menu' || currentURL === baseHerf + '/layout/box' || this.windowWidth >= 992 && this.windowWidth <= 1024) {
            this.nextConfig.collapseMenu = true;
          }

          this.navCollapsed = this.windowWidth >= 992 ? this.nextConfig.collapseMenu : false;
          this.navCollapsedMob = false;
        }

        _createClass(AdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.windowWidth < 992) {
              this.nextConfig.layout = 'vertical';
              setTimeout(function () {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100%
              }, 500);
            }
          }
        }, {
          key: "navMobClick",
          value: function navMobClick() {
            var _this16 = this;

            if (this.windowWidth < 992) {
              if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(function () {
                  _this16.navCollapsedMob = !_this16.navCollapsedMob;
                }, 100);
              } else {
                this.navCollapsedMob = !this.navCollapsedMob;
              }
            }
          }
        }]);

        return AdminComponent;
      }();

      AdminComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], AdminComponent);
      /***/
    },

    /***/
    "h3AA":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/theme/shared/components/assessessment-detail-modal/assessessment-detail-modal.module.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AssessessmentDetailModalModule */

    /***/
    function h3AA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessessmentDetailModalModule", function () {
        return AssessessmentDetailModalModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _assessessment_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./assessessment-detail-modal.component */
      "Oq+w");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bFKe");
      /* harmony import */


      var _assessment_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./assessment.constant */
      "2WdO");

      var AssessessmentDetailModalModule = function AssessessmentDetailModalModule() {
        _classCallCheck(this, AssessessmentDetailModalModule);
      };

      AssessessmentDetailModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assessessment_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["AssessessmentDetailModalComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"]],
        exports: [_assessessment_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["AssessessmentDetailModalComponent"]],
        providers: [{
          provide: 'Constant',
          useValue: _assessment_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"]
        }]
      })], AssessessmentDetailModalModule);
      /***/
    },

    /***/
    "h77R":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/pagination/pagination.component.ts ***!
      \****************************************************************************/

    /*! exports provided: PaginationComponent */

    /***/
    function h77R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
        return PaginationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pagination.component.html */
      "sKfT");
      /* harmony import */


      var _pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pagination.component.scss */
      "UO6d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var PaginationComponent = /*#__PURE__*/function () {
        function PaginationComponent(config) {
          _classCallCheck(this, PaginationComponent);

          this.paginationData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.submitData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        }

        _createClass(PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.buttonLabel);

            if (this.submitButton == true || this.submitButton == false) {
              this.isSubmitBtnShow = true;
            }
          }
        }, {
          key: "loadPage",
          value: function loadPage(page) {
            this.paginationData.emit(this.staticPagination);
          }
        }, {
          key: "callSubmitBtn",
          value: function callSubmitBtn() {
            this.submitData.emit('Call Submit Data');
          }
        }]);

        return PaginationComponent;
      }();

      PaginationComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]
        }];
      };

      PaginationComponent.propDecorators = {
        staticPagination: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        paginationData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        submitData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        submitButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        submitSpinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        buttonLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PaginationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pagination',
        template: _raw_loader_pagination_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        styles: [_pagination_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]])], PaginationComponent);
      /***/
    },

    /***/
    "hICc":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hICc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\r\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\r\n<div class=\"pcoded-main-container\">\r\n    <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\r\n        <div class=\"pcoded-content\">\r\n            <div class=\"pcoded-inner-content\">\r\n                <div class=\"main-body\">\r\n                    <div class=\"page-wrapper\">\r\n                        <perfect-scrollbar [style.height]=\"'calc(100vh)'\">\r\n                            <app-alert></app-alert>\r\n                            <app-breadcrumb></app-breadcrumb>\r\n                            <router-outlet></router-outlet>\r\n                        </perfect-scrollbar>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-configuration></app-configuration>";
      /***/
    },

    /***/
    "hiAX":
    /*!*****************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function hiAX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "2U/g");
      /* harmony import */


      var _nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./nav-bar.component.scss */
      "Nq98");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent() {
          _classCallCheck(this, NavBarComponent);

          this.screenDet = {
            hideLabel: false
          };
          this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
          this.menuClass = false;
          this.collapseStyle = 'none';
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMobOption",
          value: function toggleMobOption() {
            this.menuClass = !this.menuClass;
            this.collapseStyle = this.menuClass ? 'block' : 'none';
          }
        }, {
          key: "navCollapse",
          value: function navCollapse() {
            this.screenDet.hideLabel = !this.screenDet.hideLabel;

            if (this.windowWidth >= 992) {
              this.onNavCollapse.emit();
            } else {
              this.onNavHeaderMobCollapse.emit();
            }
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ctorParameters = function () {
        return [];
      };

      NavBarComponent.propDecorators = {
        onNavCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        onNavHeaderMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-bar',
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavBarComponent);
      /***/
    },

    /***/
    "ipDc":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function ipDc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtbGVmdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "iv9w":
    /*!*****************************************************!*\
      !*** ./src/app/theme/layout/auth/auth.component.ts ***!
      \*****************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function iv9w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth.component.html */
      "Empq");
      /* harmony import */


      var _auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component.scss */
      "UrpS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ctorParameters = function () {
        return [];
      };

      AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AuthComponent);
      /***/
    },

    /***/
    "jGGy":
    /*!*********************************************!*\
      !*** ./src/app/shared/auth/auth.service.ts ***!
      \*********************************************/

    /*! exports provided: AuthService */

    /***/
    function jGGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../theme/layout/admin/navigation/navigation */
      "S8Sc");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./http.service */
      "bnLG");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(router, nav, titleService, httpService) {
          _classCallCheck(this, AuthService);

          this.router = router;
          this.nav = nav;
          this.titleService = titleService;
          this.httpService = httpService;
          this.globalLoader = false;
          this.menuData = [];
          this.userDet = {};
          this.navigations = this.nav.get();
        }

        _createClass(AuthService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getAuthorizationToken",
          value: function getAuthorizationToken() {
            if (localStorage.getItem('userDet')) {
              var rec = JSON.parse(localStorage.getItem('userDet'));
              return rec.authToken;
            } else {
              return 'auth-token';
            }
          }
        }, {
          key: "canActivate",
          value: function canActivate(route, state) {
            if (localStorage.getItem('userDet')) {
              var obj = this.getCurrentMenu(state.url);
              this.menuData = JSON.parse(window.atob(localStorage.getItem('menuData')));

              if (obj && obj.hasOwnProperty('title')) {
                this.titleService.setTitle(obj.title);
              }

              if (obj && obj.hasOwnProperty('menuName') && obj.hasOwnProperty('subMenuName')) {
                if (!this.checkSubMenuAccess(obj.menuName, obj.subMenuName)) {
                  // this.router.navigate(['my']); this.titleService.setTitle('My Action');
                  this.router.navigateByUrl('template.html#!/homepageV1');
                }
              } // logged in so return true


              return true;
            } // not logged in so redirect to login page with the return url and return false


            this.router.navigate(['login']);
            return false;
          }
        }, {
          key: "getLoggedInUserData",
          value: function getLoggedInUserData() {
            return JSON.parse(localStorage.getItem('userDet'));
          }
        }, {
          key: "getCurrentMenu",
          value: function getCurrentMenu(activeLink) {
            var currentMenuObj;

            if (this.navigations[0].children != null && this.navigations[0].children.length > 0) {
              this.navigations[0].children.forEach(function (a) {
                if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                  currentMenuObj = a;
                } else if (a.type === 'collapse') {
                  if (a.hasOwnProperty('children') && a.children != null && a.children.length > 0) {
                    a.children.forEach(function (b) {
                      if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                        currentMenuObj = b;
                      } else if (b.type === 'collapse') {
                        if (b.hasOwnProperty('children') && b.children != null && b.children.length > 0) {
                          b.children.forEach(function (c) {
                            if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                              currentMenuObj = c;
                            } else {
                              if (c.type === 'collapse' && 'children' in c) {
                                c.children.forEach(function (d) {
                                  if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                    currentMenuObj = d;
                                  }
                                });
                              }
                            }
                          });
                        }
                      }
                    });
                  }
                }
              });
            }

            return currentMenuObj;
          }
        }, {
          key: "checkMenuAccess",
          value: function checkMenuAccess(menuName) {
            var flag = false;
            this.menuData = JSON.parse(window.atob(localStorage.getItem('menuData'))); // console.log(this.menuData);

            if (this.menuData == null || this.menuData == undefined) {
              return flag;
            }

            for (var k = 0; k < this.menuData.length; k++) {
              if (this.menuData[k].menuName == "Skill Matrix") {
                for (var i = 0; i < this.menuData[k].subMenuList.length; i++) {
                  if (this.menuData[k].subMenuList[i].subMenuName == menuName) {
                    if (this.menuData[k].subMenuList[i].statusId == 1) {
                      flag = true;
                    }
                  }
                }
              }
            }

            return flag;
          }
        }, {
          key: "checkSubMenuAccess",
          value: function checkSubMenuAccess(menuName, subMenuName) {
            var flag = false;
            this.menuData = JSON.parse(window.atob(localStorage.getItem('menuData'))); // console.log(this.menuData);

            if (this.menuData == null || this.menuData == undefined) {
              return flag;
            }

            for (var k = 0; k < this.menuData.length; k++) {
              if (this.menuData[k].menuName == "Skill Matrix") {
                for (var i = 0; i < this.menuData[k].subMenuList.length; i++) {
                  if (this.menuData[k].subMenuList[i].subMenuName == menuName) {
                    if (this.menuData[k].subMenuList[i].statusId == 1) {
                      flag = true;
                    }
                  }
                }
              }
            }

            return flag;
          }
        }, {
          key: "sortArray",
          value: function sortArray(array) {
            if (array.length > 0) {
              array.sort(function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB) {
                  return -1;
                }

                if (nameA > nameB) {
                  return 1;
                }

                return 0;
              });
            }

            return array;
          }
        }]);

        return AuthService;
      }();

      AuthService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItem"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
        }, {
          type: _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }];
      };

      AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_3__["NavigationItem"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])], AuthService);
      /***/
    },

    /***/
    "kSgv":
    /*!*****************************************************************************!*\
      !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ConfigurationComponent */

    /***/
    function kSgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
        return ConfigurationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "A2he");
      /* harmony import */


      var _configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./configuration.component.scss */
      "tvpS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ConfigurationComponent = /*#__PURE__*/function () {
        function ConfigurationComponent(zone, location) {
          var _this17 = this;

          _classCallCheck(this, ConfigurationComponent);

          this.zone = zone;
          this.location = location;

          this.scroll = function () {
            if (_this17.headerFixedLayout === false) {
              document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
              var el = document.querySelector('.pcoded-navbar.menupos-fixed');
              var scrollPosition = window.pageYOffset;

              if (scrollPosition > 60) {
                el.style.position = 'fixed';
                el.style.transition = 'none';
                el.style.marginTop = '0';
              } else {
                el.style.position = 'absolute';
                el.style.marginTop = '60px';
              }
            } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
              document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
          };

          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
          this.setThemeLayout();
        }

        _createClass(ConfigurationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.styleSelectorToggle = false;
            this.layoutType = this.nextConfig.layoutType;
            this.setLayout(this.layoutType);
            this.headerBackgroundColor = this.nextConfig.headerBackColor;
            this.brandBackgroundColor = this.nextConfig.navBrandColor;
            this.setHeaderBackground(this.headerBackgroundColor);
            this.setBrandBackground(this.brandBackgroundColor);
            this.rtlLayout = this.nextConfig.rtlLayout;
            this.changeRtlLayout(this.rtlLayout);
            this.menuFixedLayout = this.nextConfig.navFixedLayout;

            if (this.nextConfig.layout === 'vertical') {
              this.changeMenuFixedLayout(this.menuFixedLayout);
            }

            this.headerFixedLayout = this.nextConfig.headerFixedLayout;
            this.changeHeaderFixedLayout(this.headerFixedLayout);
            this.boxLayout = this.nextConfig.boxLayout;
            this.changeBoxLayout(this.boxLayout);
          }
        }, {
          key: "setThemeLayout",
          value: function setThemeLayout() {
            var currentURL = this.location.path();
            var baseHref = this.location['_baseHref'];

            if (baseHref) {
              currentURL = baseHref + this.location.path();
            }

            switch (currentURL) {
              case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;

              case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;

              case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;

              case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                break;

              case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;

              case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-default';
                break;

              case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'header-blue';
                break;

              case baseHref + '/layout/nav-color':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-info';
                this.nextConfig.navBrandColor = 'brand-info';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;

              default:
                break;
            }
          }
        }, {
          key: "setHeaderBackColor",
          value: function setHeaderBackColor(color) {
            this.headerBackColor = color;
            document.querySelector('body').style.background = color;
          } // change main layout

        }, {
          key: "setLayout",
          value: function setLayout(layout) {
            this.isConfig = true;
            this.setBrandBackground(this.nextConfig.navBrandColor);
            document.querySelector('.pcoded-navbar').classList.remove('menu-light');
            document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
            document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
            document.querySelector('body').classList.remove('next-dark');
            this.layoutType = layout;

            if (layout === 'menu-light') {
              this.setBrandBackground(this.brandBackgroundColor);
              document.querySelector('.pcoded-navbar').classList.add(layout);
            }

            if (layout === 'dark') {
              document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
              document.querySelector('.pcoded-navbar').classList.add('brand-dark');
              this.setBrandBackground('brand-blue');
              this.setHeaderBackground('header-blue');
              document.querySelector('body').classList.add('next-dark');
            }

            if (layout === 'reset') {
              this.reset();
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
            this.ngOnInit();
          }
        }, {
          key: "setRtlLayout",
          value: function setRtlLayout(e) {
            var flag = !!e.target.checked;
            this.changeRtlLayout(flag);
          }
        }, {
          key: "changeRtlLayout",
          value: function changeRtlLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('next-rtl');
            } else {
              document.querySelector('body').classList.remove('next-rtl');
            }
          }
        }, {
          key: "setMenuFixedLayout",
          value: function setMenuFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeMenuFixedLayout(flag);
          }
        }, {
          key: "changeMenuFixedLayout",
          value: function changeMenuFixedLayout(flag) {
            var _this18 = this;

            setTimeout(function () {
              if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

                if (_this18.nextConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }

                window.addEventListener('scroll', _this18.scroll, true);
                window.scrollTo(0, 0);
              } else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

                if (_this18.nextConfig.layout === 'vertical') {
                  document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }

                if (_this18.nextConfig.layout === 'vertical') {
                  window.removeEventListener('scroll', _this18.scroll, true);
                }
              }
            }, 100);
          }
        }, {
          key: "setHeaderFixedLayout",
          value: function setHeaderFixedLayout(e) {
            var flag = !!e.target.checked;
            this.changeHeaderFixedLayout(flag);
          }
        }, {
          key: "changeHeaderFixedLayout",
          value: function changeHeaderFixedLayout(flag) {
            if (flag) {
              document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
            } else {
              document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

              if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
              } else {
                window.removeEventListener('scroll', this.scroll, true);
              }
            }
          }
        }, {
          key: "setBoxLayout",
          value: function setBoxLayout(e) {
            var flag = !!e.target.checked;
            this.changeBoxLayout(flag);
          }
        }, {
          key: "changeBoxLayout",
          value: function changeBoxLayout(flag) {
            if (flag) {
              document.querySelector('body').classList.add('container');
              document.querySelector('body').classList.add('box-layout');
            } else {
              document.querySelector('body').classList.remove('box-layout');
              document.querySelector('body').classList.remove('container');
            }
          }
        }, {
          key: "setHeaderBackground",
          value: function setHeaderBackground(background) {
            this.headerBackgroundColor = background;
            this.nextConfig.headerBackColor = background;
            document.querySelector('.pcoded-header').classList.remove('header-blue');
            document.querySelector('.pcoded-header').classList.remove('header-red');
            document.querySelector('.pcoded-header').classList.remove('header-purple');
            document.querySelector('.pcoded-header').classList.remove('header-info');
            document.querySelector('.pcoded-header').classList.remove('header-dark');

            if (background !== 'header-default') {
              document.querySelector('.pcoded-header').classList.add(background);
            }
          }
        }, {
          key: "setBrandBackground",
          value: function setBrandBackground(background) {
            this.brandBackgroundColor = background;
            this.nextConfig.navBrandColor = background;
            document.querySelector('.pcoded-header').classList.remove('brand-blue');
            document.querySelector('.pcoded-header').classList.remove('brand-red');
            document.querySelector('.pcoded-header').classList.remove('brand-purple');
            document.querySelector('.pcoded-header').classList.remove('brand-info');
            document.querySelector('.pcoded-header').classList.remove('brand-dark');
            document.querySelector('.pcoded-header').classList.remove('brand-default');
            document.querySelector('.pcoded-header').classList.add(background);
          }
        }]);

        return ConfigurationComponent;
      }();

      ConfigurationComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      };

      ConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-configuration',
        template: _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])], ConfigurationComponent);
      /***/
    },

    /***/
    "m9KD":
    /*!**************************************************************************************!*\
      !*** ./src/app/theme/shared/components/dateRangePicker/dateRangePicker.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: DateRangePickerComponent */

    /***/
    function m9KD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateRangePickerComponent", function () {
        return DateRangePickerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dateRangePicker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dateRangePicker.component.html */
      "/UhJ");
      /* harmony import */


      var _dateRangePicker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dateRangePicker.component.scss */
      "L63d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var DateRangePickerComponent = /*#__PURE__*/function () {
        function DateRangePickerComponent(calendar, formatter, datepipe, modalConfig, modalService, router) {
          _classCallCheck(this, DateRangePickerComponent);

          this.calendar = calendar;
          this.formatter = formatter;
          this.datepipe = datepipe;
          this.modalService = modalService;
          this.router = router;
          this.selectedDate = {};
          this.hoveredDate = null;
          this.ngbSelectedDate = {};
          this.isSet = false;
          this.dateObj = {};
          this.profileDiv = {};
          this.dateRangeDates = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.loggedInEmpDet = {};
          this.collapsed = true;
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(DateRangePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.setDate('1Y');
            this.maxDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

            if (localStorage.getItem('userDet')) {
              this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));
            }
          }
        }, {
          key: "setDate",
          value: function setDate(type) {
            if (this.selectedDateType && this.selectedDateType == type) {
              this.selectedDateType = undefined;
              this.selectedDate = {};
            } else {
              this.selectedDateType = type;
              this.selectedDate.toDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
              var tmpFromMonthYear = '';
              this.isSet = false;

              if (type) {
                if (type == '1M') {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(1, 'months').format();
                } else if (type == '6M') {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(6, 'months').format();
                } else if (type == '1Y') {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(1, 'year').format();
                } else if (type == '2Y') {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_4__().subtract(2, 'year').format();
                }

                this.selectedDate.fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(tmpFromMonthYear).format('YYYY-MM-DD');
              } else {
                this.isSet = true;
              }
            } // console.log(this.selectedDate);


            this.dateRangeDates.emit(this.selectedDate);
          }
        }, {
          key: "selectCustomDate",
          value: function selectCustomDate(fromDate, toDate) {
            if (fromDate) {
              var fromdate = new Date(fromDate.value);
              this.dateObj.fromDate = moment__WEBPACK_IMPORTED_MODULE_4__(fromDate.value).format('YYYY-MM-DD');
            } else if (toDate) {
              var todate = new Date(toDate.value);
              this.dateObj.toDate = moment__WEBPACK_IMPORTED_MODULE_4__(toDate.value).format('YYYY-MM-DD');
              ;
            }

            if (this.dateObj.fromDate && this.dateObj.toDate) {
              this.dateRangeDates.emit(this.dateObj); // console.log(this.dateObj);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.clear();
            this.router.navigateByUrl('/login');
          }
        }]);

        return DateRangePickerComponent;
      }();

      DateRangePickerComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      DateRangePickerComponent.propDecorators = {
        dateRangeDates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      DateRangePickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dateRangePicker',
        template: _raw_loader_dateRangePicker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]],
        styles: [_dateRangePicker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCalendar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateParserFormatter"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], DateRangePickerComponent);
      /***/
    },

    /***/
    "mr6m":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/loading/loading.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mr6m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"backPage\"></div>\r\n<div class=\"sk-chase\">\r\n    <div class=\"sk-chase-dot\"></div>\r\n    <div class=\"sk-chase-dot\"></div>\r\n    <div class=\"sk-chase-dot\"></div>\r\n    <div class=\"sk-chase-dot\"></div>\r\n    <div class=\"sk-chase-dot\"></div>\r\n    <div class=\"sk-chase-dot\"></div>\r\n</div>\r\n<!-- <div class=\"animationload\">\r\n    <div class=\"osahanloading\"></div>\r\n</div> -->";
      /***/
    },

    /***/
    "p3TK":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/assessment/assessment.service.ts ***!
      \********************************************************************************/

    /*! exports provided: AssessmentService */

    /***/
    function p3TK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentService", function () {
        return AssessmentService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/auth/auth.service */
      "jGGy");
      /* harmony import */


      var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/auth/http.service */
      "bnLG");

      var AssessmentService = /*#__PURE__*/function () {
        function AssessmentService(httpService, authService) {
          _classCallCheck(this, AssessmentService);

          this.httpService = httpService;
          this.authService = authService;
        }
        /* User Login details */


        _createClass(AssessmentService, [{
          key: "getLoggedInData",
          value: function getLoggedInData() {
            return this.authService.getLoggedInUserData();
          }
          /*
              Get Obj empty or not
          */

        }, {
          key: "isEmptyObject",
          value: function isEmptyObject(obj) {
            return obj && Object.keys(obj).length === 0;
          }
          /* Empty String */

        }, {
          key: "isEmptyOrSpaces",
          value: function isEmptyOrSpaces(str) {
            return str === undefined || str === null || str.match(/^ *$/) !== null;
          } // get branch access list 

        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList(url) {
            return this.httpService.getMethod(url);
          }
          /*
            Get Assessment list
          */

        }, {
          key: "getAssessmentList",
          value: function getAssessmentList(url, data) {
            return this.httpService.postMethod(url, data);
          }
          /*
            Get Master Skill Level List
          */

        }, {
          key: "getMasterLevelList",
          value: function getMasterLevelList(url) {
            return this.httpService.getMethod(url);
          }
        }, {
          key: "addAssessmentDetails",
          value: function addAssessmentDetails(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "updateAssessmentDetails",
          value: function updateAssessmentDetails(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "getAssessmentDetailsById",
          value: function getAssessmentDetailsById(url) {
            return this.httpService.getMethod(url);
          }
        }, {
          key: "deleteAsssessment",
          value: function deleteAsssessment(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "publishAsssessment",
          value: function publishAsssessment(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "addQuestions",
          value: function addQuestions(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "deleteAsssessmentQuesAndOption",
          value: function deleteAsssessmentQuesAndOption(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "updateQuestionsAndOpt",
          value: function updateQuestionsAndOpt(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "deleteAssessmentOption",
          value: function deleteAssessmentOption(url, data) {
            return this.httpService.postMethod(url, data);
          }
          /* Upload Assessment file */

        }, {
          key: "uploadAssessmentData",
          value: function uploadAssessmentData(url, data) {
            return this.httpService.formDataRequest(url, data);
          } //  Add Category

        }, {
          key: "addCatgeoryand",
          value: function addCatgeoryand(url, data) {
            return this.httpService.postMethod(url, data);
          } // Update Category

        }, {
          key: "updateCatgeory",
          value: function updateCatgeory(url, data) {
            return this.httpService.postMethod(url, data);
          } // Get Category List

        }, {
          key: "getCatgeoryList",
          value: function getCatgeoryList(url, data) {
            return this.httpService.postMethod(url, data);
          } // Delete Category

        }, {
          key: "deleteCatgeory",
          value: function deleteCatgeory(url, data) {
            return this.httpService.postMethod(url, data);
          } // get department list by branch id simran

        }, {
          key: "getDepartmentByBranch",
          value: function getDepartmentByBranch(url) {
            return this.httpService.getMethod(url);
          }
        }, {
          key: "getCellList",
          value: function getCellList(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }, {
          key: "getWorkforceDeploymentData",
          value: function getWorkforceDeploymentData(url, data) {
            return this.httpService.postMethod(url, data);
          }
        }]);

        return AssessmentService;
      }();

      AssessmentService.ctorParameters = function () {
        return [{
          type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      AssessmentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], AssessmentService);
      /***/
    },

    /***/
    "pzKI":
    /*!******************************************************!*\
      !*** ./src/app/shared/directive/custom.directive.ts ***!
      \******************************************************/

    /*! exports provided: CustomDirective */

    /***/
    function pzKI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomDirective", function () {
        return CustomDirective;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var CustomDirective = /*#__PURE__*/function () {
        function CustomDirective(el, sanitization) {
          _classCallCheck(this, CustomDirective);

          this.el = el;
          this.sanitization = sanitization;
        }

        _createClass(CustomDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var img;
            console.log(this.fileDet);
            var fileName = this.fileDet.name;
            var filepath = this.fileDet.docPath;

            if (fileName == undefined) {
              var name = filepath.substring(filepath.lastIndexOf('/') + 1);
              var file = this.file_get_ext(name);
            } else {
              var file = this.file_get_ext(fileName);
            } // if (file == 'doc' || file == 'docx' || file == 'txt') {
            //   img = '<img src="assets/images/fileIcons/doc.png" class="UploadDoc" />';
            // } else if (file == 'pdf') {
            //   img = '<img src="assets/images/fileIcons/pdf.png" class="UploadDoc"/>';
            // } else if (file == 'xls' || file == 'xlx' || file == 'xlsx') {
            //   img = '<img src="assets/images/fileIcons/xls.png" class="UploadDoc"/>';
            // } else


            if (file == 'jpg' || file == 'png' || file == 'jpeg' || file == 'JPG' || file == 'PNG' || file == 'JPEG' || file == 'gif' || file == 'svg') {
              img = '<img src="' + filepath + '" class="UploadImg" (error)="onImgError($event)"/>';
            } else {
              img = '<img src="assets/images/fileIcons/doc.png" class="UploadDoc" />';
            }

            this.el.nativeElement.innerHTML = img;
          }
        }, {
          key: "onImgError",
          value: function onImgError(event) {
            console.log(event);
            event.target.src = 'assets/images/fileIcons/no-photo.png';
          }
        }, {
          key: "file_get_ext",
          value: function file_get_ext(filename) {
            return typeof filename != "undefined" ? filename.substring(filename.lastIndexOf(".") + 1, filename.length).toLowerCase() : false;
          }
        }, {
          key: "getSanitizedUrl",
          value: function getSanitizedUrl(url) {
            return this.sanitization.bypassSecurityTrustStyle("url(" + url + ")");
          }
        }]);

        return CustomDirective;
      }();

      CustomDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      CustomDirective.propDecorators = {
        fileDet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['getFileDet']
        }]
      };
      CustomDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[getFileInfo]'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])], CustomDirective);
      /***/
    },

    /***/
    "s2d5":
    /*!**********************************************************************!*\
      !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function s2d5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "ZhNB");
      /* harmony import */


      var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner.component.scss */
      "T0+U");
      /* harmony import */


      var _spinkit_css_sk_line_material_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./spinkit-css/sk-line-material.scss */
      "WuPV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _spinkits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./spinkits */
      "CKO6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var SpinnerComponent = /*#__PURE__*/function () {
        function SpinnerComponent(router, document) {
          var _this19 = this;

          _classCallCheck(this, SpinnerComponent);

          this.router = router;
          this.document = document;
          this.isSpinnerVisible = true;
          this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_5__["Spinkit"];
          this.backgroundColor = '#2196f3';
          this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_5__["Spinkit"].skLine;
          this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
              _this19.isSpinnerVisible = true;
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"]) {
              _this19.isSpinnerVisible = false;
            }
          }, function () {
            _this19.isSpinnerVisible = false;
          });
        }

        _createClass(SpinnerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.isSpinnerVisible = false;
          }
        }]);

        return SpinnerComponent;
      }();

      SpinnerComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
          }]
        }];
      };

      SpinnerComponent.propDecorators = {
        backgroundColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        spinner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }]
      };
      SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _spinkit_css_sk_line_material_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], Document])], SpinnerComponent);
      /***/
    },

    /***/
    "sHKn":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/image-cropper/component/image-cropper.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sHKn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [style.background]=\"imageVisible && backgroundColor\" #wrapper>\r\n    <img #sourceImage class=\"source-image\" *ngIf=\"safeImgDataUrl\" [src]=\"safeImgDataUrl\" [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\" [style.transform]=\"safeTransformStyle\" (load)=\"imageLoadedInView()\" />\r\n    <div class=\"overlay\" [style.width.px]=\"maxSize.width\" [style.height.px]=\"maxSize.height\" [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"></div>\r\n    <div class=\"cropper\" *ngIf=\"imageVisible\" [class.rounded]=\"roundCropper\" [style.top.px]=\"cropper.y1\" [style.left.px]=\"cropper.x1\" [style.width.px]=\"cropper.x2 - cropper.x1\" [style.height.px]=\"cropper.y2 - cropper.y1\" [style.margin-left]=\"alignImage === 'center' ? marginLeft : null\"\r\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\" (keydown)=\"keyboardAccess($event)\" tabindex=\"0\">\r\n        <div (mousedown)=\"startMove($event, moveTypes.Move)\" (touchstart)=\"startMove($event, moveTypes.Move)\" class=\"move\">\r\n        </div>\r\n        <ng-container *ngIf=\"!hideResizeSquares\">\r\n            <span class=\"resize topleft\" (mousedown)=\"startMove($event, moveTypes.Resize, 'topleft')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'topleft')\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize top\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize topright\" (mousedown)=\"startMove($event, moveTypes.Resize, 'topright')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'topright')\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize right\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize bottomright\" (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomright')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomright')\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize bottom\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize bottomleft\" (mousedown)=\"startMove($event, moveTypes.Resize, 'bottomleft')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'bottomleft')\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize left\">\r\n                <span class=\"square\"></span>\r\n            </span>\r\n            <span class=\"resize-bar top\" (mousedown)=\"startMove($event, moveTypes.Resize, 'top')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'top')\">\r\n            </span>\r\n            <span class=\"resize-bar right\" (mousedown)=\"startMove($event, moveTypes.Resize, 'right')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'right')\">\r\n            </span>\r\n            <span class=\"resize-bar bottom\" (mousedown)=\"startMove($event, moveTypes.Resize, 'bottom')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'bottom')\">\r\n            </span>\r\n            <span class=\"resize-bar left\" (mousedown)=\"startMove($event, moveTypes.Resize, 'left')\" (touchstart)=\"startMove($event, moveTypes.Resize, 'left')\">\r\n            </span>\r\n        </ng-container>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "sKfT":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/pagination/pagination.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sKfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"paginationFooter bg-Transperant shadow-none\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-4 m-auto text-left p-l-0\">\r\n            <div class=\"paginationTotalCount\" [ngStyle]=\"(staticPagination.total == 0) && {'margin-top':'5px'}\">\r\n                <p class=\"m-0\">Total Rows: {{staticPagination.total}} </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-4 text-center\" style=\"position: relative;\">\r\n            <div class=\"submitBottomBtn\" *ngIf=\"isSubmitBtnShow\">\r\n                <button class=\"btn btn-sm submitBtn\" (click)=\"callSubmitBtn()\" [disabled]=\"submitSpinner || !submitButton\">\r\n                    <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                    <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                    <span *ngIf=\"!submitSpinner\" class=\"btn-text\">{{buttonLabel || 'Submit'}}</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-4 text-right p-r-0\">\r\n            <ng-container *ngIf=\"staticPagination.total > 0\">\r\n                <ngb-pagination class=\"customPagination\" [collectionSize]=\"staticPagination.total\" [(page)]=\"staticPagination.page\" [pageSize]=\"staticPagination.itemsPerPage\" (pageChange)=\"loadPage($event)\">\r\n                    <ng-template ngbPaginationPrevious><i class=\"fa fa-angle-left\"></i></ng-template>\r\n                    <ng-template ngbPaginationNext><i class=\"fa fa-angle-right\"></i></ng-template>\r\n                    <ng-template ngbPaginationNumber let-page>\r\n                        <b>\r\n                            <ng-container *ngIf=\"staticPagination.listLength == staticPagination.total\">\r\n                                {{((staticPagination.page-1)*staticPagination.itemsPerPage)+1}} -\r\n                                {{(staticPagination.itemsPerPage*staticPagination.page)>staticPagination.total\r\n                                &&\r\n                                staticPagination.total ||\r\n                                (staticPagination.itemsPerPage*staticPagination.page)}}\r\n                                <!-- {{staticPagination.page*staticPagination.itemsPerPage}} -->\r\n                            </ng-container>\r\n                            <ng-container\r\n                                *ngIf=\"staticPagination.listLength != staticPagination.total && staticPagination.listLength>0\">\r\n                                {{((staticPagination.page-1)*staticPagination.itemsPerPage)+1}} -\r\n                                {{(staticPagination.itemsPerPage > staticPagination.listLength)\r\n                                ?\r\n                                (staticPagination.listLength +\r\n                                ((staticPagination.page-1)*staticPagination.itemsPerPage)) :\r\n                                (staticPagination.itemsPerPage*staticPagination.page)}}\r\n                                <!-- {{staticPagination.page*staticPagination.itemsPerPage}} -->\r\n                            </ng-container>\r\n                        </b><small>of\r\n                            {{staticPagination.total}}</small>\r\n                    </ng-template>\r\n                </ngb-pagination>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "sc+k":
    /*!*************************************************!*\
      !*** ./src/app/shared/auth/auth-interceptor.ts ***!
      \*************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function scK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.service */
      "jGGy");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(auth, router) {
          _classCallCheck(this, AuthInterceptor);

          this.auth = auth;
          this.router = router;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this20 = this;

            // Get the auth token from the service.
            var authToken = this.auth.getAuthorizationToken();
            /*
            * The verbose way:
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
              headers: req.headers.set('Authorization', authToken)
            });
            */
            // Clone the request and set the new header in one step.

            var authReq = req.clone({
              setHeaders: {
                Authorization: authToken
              }
            }); // send cloned request with header to the next handler.

            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (response) {
              if (response.status === 401) {
                _this20.router.navigateByUrl("/login");
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(response);
            }));
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AuthInterceptor);
      /***/
    },

    /***/
    "sqAq":
    /*!***********************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
      \***********************************************************************/

    /*! exports provided: NavigationComponent */

    /***/
    function sqAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
        return NavigationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "7J/v");
      /* harmony import */


      var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navigation.component.scss */
      "ENTz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../app-config */
      "K7hc");

      var NavigationComponent = /*#__PURE__*/function () {
        function NavigationComponent() {
          _classCallCheck(this, NavigationComponent);

          this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.version = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
          this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_5__["NextConfig"].config;
          this.windowWidth = window.innerWidth;
        }

        _createClass(NavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "navMobCollapse",
          value: function navMobCollapse() {
            if (this.windowWidth < 992) {
              this.onNavMobCollapse.emit();
            }
          }
        }]);

        return NavigationComponent;
      }();

      NavigationComponent.ctorParameters = function () {
        return [];
      };

      NavigationComponent.propDecorators = {
        onNavMobCollapse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navigation',
        template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], NavigationComponent);
      /***/
    },

    /***/
    "tvpS":
    /*!*******************************************************************************!*\
      !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function tvpS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBTUk7RUFDRSxtQ0FBQTtBQUhOOztBQUtJOzs7Ozs7O0VBT0UsV0FBQTtBQUhOIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbmJvZHkubmV4dC1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "vVwH":
    /*!*******************************************************************************!*\
      !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function vVwH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme/layout/admin/admin.component */
      "h1mt"); // import { AuthService } from './shared/auth/auth.service';
      // import { AuthComponent } from './theme/layout/auth/auth.component';


      var routes = [{
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        // canActivate: [AuthService],
        children: [{
          path: '',
          redirectTo: 'mySkilling/actions',
          pathMatch: 'full'
        }, {
          path: 'mySkilling',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-my-skilling-my-skilling-module */
            [__webpack_require__.e("default~modules-my-skilling-my-skilling-module~modules-report-report-module~modules-skill-matrix-ski~9dfa6cf4"), __webpack_require__.e("modules-my-skilling-my-skilling-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/my-skilling/my-skilling.module */
            "+F1j")).then(function (m) {
              return m.MySkillingModule;
            });
          }
        }, {
          path: 'skillMatrix',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-skill-matrix-skill-matrix-module */
            [__webpack_require__.e("default~modules-my-skilling-my-skilling-module~modules-report-report-module~modules-skill-matrix-ski~9dfa6cf4"), __webpack_require__.e("common"), __webpack_require__.e("modules-skill-matrix-skill-matrix-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/skill-matrix/skill-matrix.module */
            "/wb3")).then(function (m) {
              return m.SkillMatrixModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | modules-dashboard-dashboard-module */
            "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null,
            /*! ./modules/dashboard/dashboard.module */
            "XoyV")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'report',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | modules-report-report-module */
            [__webpack_require__.e("default~modules-my-skilling-my-skilling-module~modules-report-report-module~modules-skill-matrix-ski~9dfa6cf4"), __webpack_require__.e("common"), __webpack_require__.e("modules-report-report-module")]).then(__webpack_require__.bind(null,
            /*! ./modules/report/report.module */
            "pCwN")).then(function (m) {
              return m.ReportModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | modules-settings-settings-module */
            "modules-settings-settings-module").then(__webpack_require__.bind(null,
            /*! ./modules/settings/settings.module */
            "pU93")).then(function (m) {
              return m.SettingsModule;
            });
          }
        }, {
          path: 'uiKit',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | modules-ui-kit-ui-kit-module */
            "modules-ui-kit-ui-kit-module").then(__webpack_require__.bind(null,
            /*! ./modules/ui-kit/ui-kit.module */
            "xjx4")).then(function (m) {
              return m.UiKitModule;
            });
          }
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          useHash: true
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "wSfS":
    /*!**************************************************************************************!*\
      !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function wSfS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "wcBd":
    /*!**************************************************************!*\
      !*** ./src/app/shared/image-cropper/image-cropper.module.ts ***!
      \**************************************************************/

    /*! exports provided: ImageCropperModule */

    /***/
    function wcBd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function () {
        return ImageCropperModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _component_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./component/image-cropper.component */
      "MmxS");

      var ImageCropperModule = function ImageCropperModule() {
        _classCallCheck(this, ImageCropperModule);
      };

      ImageCropperModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__["ImageCropperComponent"]],
        exports: [_component_image_cropper_component__WEBPACK_IMPORTED_MODULE_3__["ImageCropperComponent"]]
      })], ImageCropperModule);
      /***/
    },

    /***/
    "wjSg":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wjSg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<perfect-scrollbar (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\"\r\n    ngClass=\"next-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\"\r\n    [disabled]=\"null\">\r\n    <div class=\"navbar-content\" *ngIf=\"this.nextConfig['layout'] === 'vertical'\">\r\n        <ul class=\"nav pcoded-inner-navbar\">\r\n            <!-- (clickOutside)=\"fireOutClick()\" -->\r\n            <ng-container *ngFor=\"let item of navigation\">\r\n                <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n                <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n                <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</perfect-scrollbar>\r\n\r\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\"\r\n    id=\"layout-sidenav\">\r\n    <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\r\n    <div class=\"sidenav-horizontal-wrapper\">\r\n        <!-- add 14-4 viral -->\r\n        <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\"\r\n            (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\r\n            <ng-container *ngFor=\"let item of navigation\">\r\n                <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n                <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n                <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n    <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\r\n</div>";
      /***/
    },

    /***/
    "x+E6":
    /*!**********************************************************************************!*\
      !*** ./src/app/theme/shared/components/globalLoader/globalLoader.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function xE6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".loaderDiv {\n  position: fixed;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 100vh;\n  z-index: 9999;\n}\n\n.sk-chase {\n  width: 40px;\n  height: 40px;\n  -webkit-animation: sk-chase 2.5s infinite linear both;\n          animation: sk-chase 2.5s infinite linear both;\n  margin: auto;\n  z-index: 9999;\n  position: relative;\n  top: 50%;\n  left: 0px;\n}\n\n.sk-chase-dot {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-animation: sk-chase-dot 2s infinite ease-in-out both;\n          animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #7044cd;\n  border-radius: 100%;\n  -webkit-animation: sk-chase-dot-before 2s infinite ease-in-out both;\n          animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot:nth-child(1) {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2) {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3) {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4) {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5) {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6) {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n.sk-chase-dot:nth-child(1):before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.sk-chase-dot:nth-child(2):before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.sk-chase-dot:nth-child(3):before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.sk-chase-dot:nth-child(4):before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.sk-chase-dot:nth-child(5):before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.sk-chase-dot:nth-child(6):before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n@-webkit-keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n\n.backPage {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n/* .animationload {\n  background: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000;\n}\n.osahanloading {\n  animation: 1.5s linear 0s normal none infinite running osahanloading;\n  background: #bdebff none repeat scroll 0 0;\n  border-radius: 50px;\n  height: 50px;\n  left: 50%;\n  margin-left: -25px;\n  margin-top: -25px;\n  position: absolute;\n  top: 50%;\n  width: 50px;\n}\n.osahanloading::after {\n  animation: 1.5s linear 0s normal none infinite running osahanloading_after;\n  border-color: #7044CD transparent;\n  border-radius: 80px;\n  border-style: solid;\n  border-width: 10px;\n  content: \"\";\n  height: 80px;\n  left: -15px;\n  position: absolute;\n  top: -15px;\n  width: 80px;\n}\n@keyframes osahanloading {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    background: #85d6de none repeat scroll 0 0;\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGdsb2JhbExvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtVQUFBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHlCQUFBO0VBQ047QUFDRjs7QUFKQTtFQUNJO0lBQ0kseUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0k7SUFFSSx5QkFBQTtFQUROO0FBQ0Y7O0FBSEE7RUFDSTtJQUVJLHlCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJO0lBQ0kscUJBQUE7RUFGTjtFQUlFO0lBRUksbUJBQUE7RUFITjtBQUNGOztBQUpBO0VBQ0k7SUFDSSxxQkFBQTtFQUZOO0VBSUU7SUFFSSxtQkFBQTtFQUhOO0FBQ0Y7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUpKOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJnbG9iYWxMb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyRGl2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5zay1jaGFzZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGFuaW1hdGlvbjogc2stY2hhc2UtZG90LWJlZm9yZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMykge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMSk6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMyk6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbn1cclxuXHJcbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xyXG59XHJcblxyXG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KTpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxufVxyXG5cclxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNik6YmVmb3JlIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2stY2hhc2Uge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3Qge1xyXG4gICAgODAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1jaGFzZS1kb3QtYmVmb3JlIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpO1xyXG4gICAgfVxyXG4gICAgMTAwJSxcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmFja1BhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLyogLmFuaW1hdGlvbmxvYWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcbi5vc2FoYW5sb2FkaW5nIHtcclxuICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgb3NhaGFubG9hZGluZztcclxuICBiYWNrZ3JvdW5kOiAjYmRlYmZmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLm9zYWhhbmxvYWRpbmc6OmFmdGVyIHtcclxuICBhbmltYXRpb246IDEuNXMgbGluZWFyIDBzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgb3NhaGFubG9hZGluZ19hZnRlcjtcclxuICBib3JkZXItY29sb3I6ICM3MDQ0Q0QgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogODBweDtcclxuICBsZWZ0OiAtMTVweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICB3aWR0aDogODBweDtcclxufVxyXG5Aa2V5ZnJhbWVzIG9zYWhhbmxvYWRpbmcge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZDogIzg1ZDZkZSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufSAqL1xyXG4iXX0= */";
      /***/
    },

    /***/
    "xI0A":
    /*!*********************************************************!*\
      !*** ./src/app/theme/layout/admin/admin.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function xI0A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "ybcR":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/image-cropper/interfaces/move-start.interface.ts ***!
      \*************************************************************************/

    /*! exports provided: MoveTypes */

    /***/
    function ybcR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MoveTypes", function () {
        return MoveTypes;
      });

      var MoveTypes;

      (function (MoveTypes) {
        MoveTypes["Move"] = "move";
        MoveTypes["Resize"] = "resize";
        MoveTypes["Pinch"] = "pinch";
      })(MoveTypes || (MoveTypes = {}));
      /***/

    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "yxGX":
    /*!**********************************************************!*\
      !*** ./src/app/shared/image-cropper/utils/exif.utils.ts ***!
      \**********************************************************/

    /*! exports provided: supportsAutomaticRotation, getTransformationsFromExifData */

    /***/
    function yxGX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supportsAutomaticRotation", function () {
        return supportsAutomaticRotation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTransformationsFromExifData", function () {
        return getTransformationsFromExifData;
      }); // black 2x1 JPEG, with the following meta information set:
      // - EXIF Orientation: 6 (Rotated 90° CCW)


      var testAutoOrientationImageURL = 'data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAA' + 'AAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA' + 'QEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQE' + 'BAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/x' + 'ABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAA' + 'AAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==';

      function supportsAutomaticRotation() {
        return new Promise(function (resolve) {
          var img = new Image();

          img.onload = function () {
            // Check if browser supports automatic image orientation:
            var supported = img.width === 1 && img.height === 2;
            resolve(supported);
          };

          img.src = testAutoOrientationImageURL;
        });
      }

      function getTransformationsFromExifData(exifRotationOrBase64Image) {
        if (typeof exifRotationOrBase64Image === 'string') {
          exifRotationOrBase64Image = getExifRotation(exifRotationOrBase64Image);
        }

        switch (exifRotationOrBase64Image) {
          case 2:
            return {
              rotate: 0,
              flip: true
            };

          case 3:
            return {
              rotate: 2,
              flip: false
            };

          case 4:
            return {
              rotate: 2,
              flip: true
            };

          case 5:
            return {
              rotate: 1,
              flip: true
            };

          case 6:
            return {
              rotate: 1,
              flip: false
            };

          case 7:
            return {
              rotate: 3,
              flip: true
            };

          case 8:
            return {
              rotate: 3,
              flip: false
            };

          default:
            return {
              rotate: 0,
              flip: false
            };
        }
      }

      function getExifRotation(imageBase64) {
        var view = new DataView(base64ToArrayBuffer(imageBase64));

        if (view.getUint16(0, false) != 0xFFD8) {
          return -2;
        }

        var length = view.byteLength;
        var offset = 2;

        while (offset < length) {
          if (view.getUint16(offset + 2, false) <= 8) return -1;
          var marker = view.getUint16(offset, false);
          offset += 2;

          if (marker == 0xFFE1) {
            if (view.getUint32(offset += 2, false) != 0x45786966) {
              return -1;
            }

            var little = view.getUint16(offset += 6, false) == 0x4949;
            offset += view.getUint32(offset + 4, little);
            var tags = view.getUint16(offset, little);
            offset += 2;

            for (var i = 0; i < tags; i++) {
              if (view.getUint16(offset + i * 12, little) == 0x0112) {
                return view.getUint16(offset + i * 12 + 8, little);
              }
            }
          } else if ((marker & 0xFF00) != 0xFF00) {
            break;
          } else {
            offset += view.getUint16(offset, false);
          }
        }

        return -1;
      }

      function base64ToArrayBuffer(imageBase64) {
        imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binaryString = atob(imageBase64);
        var len = binaryString.length;
        var bytes = new Uint8Array(len);

        for (var i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
      }
      /***/

    },

    /***/
    "z0HF":
    /*!*************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
      \*************************************************************************/

    /*! exports provided: BreadcrumbModule */

    /***/
    function z0HF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
        return BreadcrumbModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./breadcrumb.component */
      "zG16");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BreadcrumbModule = function BreadcrumbModule() {
        _classCallCheck(this, BreadcrumbModule);
      };

      BreadcrumbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
      })], BreadcrumbModule);
      /***/
    },

    /***/
    "zG16":
    /*!****************************************************************************!*\
      !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \****************************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function zG16(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "CNih");
      /* harmony import */


      var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./breadcrumb.component.scss */
      "a8xz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../layout/admin/navigation/navigation */
      "S8Sc");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(route, nav, titleService) {
          _classCallCheck(this, BreadcrumbComponent);

          this.route = route;
          this.nav = nav;
          this.titleService = titleService;
          this.breadcrumbList = [];
          this.navigationList = [];
          this.navigation = this.nav.get();
          this.type = 'theme2';
          this.setBreadcrumb();
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var routerUrl;
            routerUrl = this.route.url;

            if (routerUrl && typeof routerUrl === 'string') {
              this.filterNavigation(routerUrl);
            }
          }
        }, {
          key: "setBreadcrumb",
          value: function setBreadcrumb() {
            var _this21 = this;

            var routerUrl;
            this.route.events.subscribe(function (router) {
              routerUrl = router.urlAfterRedirects;

              if (routerUrl && typeof routerUrl === 'string') {
                _this21.breadcrumbList.length = 0;
                var activeLink = router.url;

                _this21.filterNavigation(activeLink);
              }
            });
          }
        }, {
          key: "filterNavigation",
          value: function filterNavigation(activeLink) {
            var result = [];
            var title = 'Welcome';
            this.navigation.forEach(function (a) {
              if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [{
                  url: 'url' in a ? a.url : false,
                  title: a.title,
                  breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                  type: a.type
                }];
                title = a.title;
              } else {
                if (a.type === 'group' && 'children' in a) {
                  a.children.forEach(function (b) {
                    if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                      result = [{
                        url: 'url' in b ? b.url : false,
                        title: b.title,
                        breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                        type: b.type
                      }];
                      title = b.title;
                    } else {
                      if (b.type === 'collapse' && 'children' in b) {
                        b.children.forEach(function (c) {
                          if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                            result = [{
                              url: 'url' in b ? b.url : false,
                              title: b.title,
                              breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                              type: b.type
                            }, {
                              url: 'url' in c ? c.url : false,
                              title: c.title,
                              breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                              type: c.type
                            }];
                            title = c.title;
                          } else {
                            if (c.type === 'collapse' && 'children' in c) {
                              c.children.forEach(function (d) {
                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                  result = [{
                                    url: 'url' in b ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                    type: b.type
                                  }, {
                                    url: 'url' in c ? c.url : false,
                                    title: c.title,
                                    breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                    type: c.type
                                  }, {
                                    url: 'url' in d ? d.url : false,
                                    title: d.title,
                                    breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                    type: d.type
                                  }];
                                  title = d.title;
                                }
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                }
              }
            });
            this.navigationList = result;
            this.titleService.setTitle(title); // this.titleService.setTitle(title + ' | myeNovation');
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]
        }];
      };

      BreadcrumbComponent.propDecorators = {
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])], BreadcrumbComponent);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map