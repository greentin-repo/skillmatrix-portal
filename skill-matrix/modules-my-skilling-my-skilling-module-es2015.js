(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-my-skilling-my-skilling-module"],{

/***/ "+F1j":
/*!***********************************************************!*\
  !*** ./src/app/modules/my-skilling/my-skilling.module.ts ***!
  \***********************************************************/
/*! exports provided: MySkillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillingModule", function() { return MySkillingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_skilling_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-skilling-routing.module */ "Cxbq");
/* harmony import */ var _my_skilling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-skilling.component */ "Jeiv");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/actions.component */ "b8fD");
/* harmony import */ var _skill_matrix_skill_matrix_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill-matrix/skill-matrix.component */ "tphk");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificates/certificates.component */ "tlPf");
/* harmony import */ var _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assessments/assessments.component */ "lnmk");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "ebz3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _actions_stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/stage-four/stage-four.component */ "QLaw");
/* harmony import */ var _actions_stage_five_stage_five_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/stage-five/stage-five.component */ "nJ8t");
/* harmony import */ var _actions_action_det_cycle_action_det_cycle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/action-det-cycle/action-det-cycle.component */ "EUn2");
/* harmony import */ var src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/pipe/custom-pipe.module */ "QrAV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _actions_stage_one_stage_one_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/stage-one/stage-one.component */ "VY1d");
/* harmony import */ var _actions_stage_two_stage_two_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./actions/stage-two/stage-two.component */ "df6L");
/* harmony import */ var _actions_stage_three_stage_three_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./actions/stage-three/stage-three.component */ "OVBF");
/* harmony import */ var _actions_stage_two_verification_stage_two_verification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./actions/stage-two-verification/stage-two-verification.component */ "TIRe");
/* harmony import */ var _skill_matrix_skill_matrix_details_skill_matrix_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./skill-matrix/skill-matrix-details/skill-matrix-details.component */ "Csm4");





















let MySkillingModule = class MySkillingModule {
};
MySkillingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_my_skilling_component__WEBPACK_IMPORTED_MODULE_4__["MySkillingComponent"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__["ActionsComponent"], _skill_matrix_skill_matrix_component__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixComponent"], _skill_matrix_skill_matrix_details_skill_matrix_details_component__WEBPACK_IMPORTED_MODULE_20__["SkillMatrixDetailsComponent"], _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__["CertificatesComponent"], _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_8__["AssessmentsComponent"], _actions_stage_four_stage_four_component__WEBPACK_IMPORTED_MODULE_11__["StageFourComponent"], _actions_stage_five_stage_five_component__WEBPACK_IMPORTED_MODULE_12__["StageFiveComponent"], _actions_action_det_cycle_action_det_cycle_component__WEBPACK_IMPORTED_MODULE_13__["ActionDetCycleComponent"], _actions_stage_one_stage_one_component__WEBPACK_IMPORTED_MODULE_16__["ActionDetComponent"], _actions_stage_two_stage_two_component__WEBPACK_IMPORTED_MODULE_17__["StageTwoComponent"], _actions_stage_two_verification_stage_two_verification_component__WEBPACK_IMPORTED_MODULE_19__["StageTwoVerificationComponent"], _actions_stage_three_stage_three_component__WEBPACK_IMPORTED_MODULE_18__["StageThreeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _my_skilling_routing_module__WEBPACK_IMPORTED_MODULE_3__["MySkillingRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
            src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_14__["CustomPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]
        ]
    })
], MySkillingModule);



/***/ }),

/***/ "0C3Q":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-two-verification/stage-two-verification.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-tab-switcher {\n  padding: 0px !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  border-radius: 0px !important;\n  margin: 0px !important;\n  left: 0px !important;\n}\n.main-tab-switcher .main-tab-switch {\n  padding: 10px 20px;\n}\n.main-tab-switcher .main-tab-switch.active {\n  background: #7044cd;\n  color: #fff;\n}\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n.tableFixHead table thead th {\n  vertical-align: middle;\n  text-align: center;\n}\n.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  /* or other alignment value */\n}\n.stopBtn {\n  background: #ffa21d 0% 0% no-repeat padding-box;\n  /* box-shadow: 0px 3px 6px #00000029; */\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  /* box-shadow: none; */\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  margin: 0px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.tableFixHead {\n  overflow-y: auto !important;\n  max-height: calc(100vh - 50vh) !important;\n  min-height: calc(100vh - 50vh) !important;\n  height: calc(100vh - 50vh) !important;\n  border-bottom: 2px solid #b395f1 !important;\n}\n.tableFixHead table thead th {\n  background: #f2f2f2;\n  color: #707070;\n  font: normal normal bold 13px/1.5 Helvetica Neue;\n  position: relative !important;\n  top: 0;\n  box-shadow: inset 0px 1px #d2c1f3, 0 1px #b395f1 !important;\n  border-top: none;\n  border: 2px solid #d2c1f3;\n  border-collapse: collapse;\n  white-space: nowrap;\n  width: 15% !important;\n}\n.tableFixHead table td {\n  padding: 8px 16px;\n  border: 2px solid #d2c1f3;\n}\n.asterisk {\n  color: red;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLXR3by12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBQ1o7QUFJQTtFQUNJLGlCQUFBO0FBREo7QUFNUTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQVFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUxKO0FBUUE7RUFDSSwrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkVBQUE7QUFMSjtBQU9BO0VBQ0ksMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtBQUpKO0FBa0JBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7RUFFQSw2QkFBQTtFQUNBLE1BQUE7RUFFQSwyREFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFqQko7QUFtQkM7RUFDRyxpQkFBQTtFQUNBLHlCQUFBO0FBaEJKO0FBa0JBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FBZkoiLCJmaWxlIjoic3RhZ2UtdHdvLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRhYi1zd2l0Y2hlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAubWFpbi10YWItc3dpdGNoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICAvKiBvciBvdGhlciBhbGlnbm1lbnQgdmFsdWUgKi9cclxufVxyXG5cclxuLnN0b3BCdG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYTIxZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7ICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTBwdC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAvKiBib3gtc2hhZG93OiBub25lOyAqL1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLnRhYmxlRml4SGVhZCB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTB2aCkgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHZoKSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTB2aCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjM5NWYxICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLnRleHRhcmVhLWN1c3RvbSB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7IFxyXG4vLyAgICAgb3ZlcmZsb3cteTogYXV0bzsgXHJcbi8vICAgICBtYXgtaGVpZ2h0OiAyMDBweDsgXHJcbi8vICAgICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgICBtaW4taGVpZ2h0OiA2NXB4O1xyXG4vLyAgICAgcmVzaXplOiBub25lOyBcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4vLyAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmOyBcclxuLy8gfVxyXG5cclxuLnRhYmxlRml4SGVhZCB0YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTNweCAvIDEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIC8vIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIHRvcDogMDtcclxuICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4ICNkMmMxZjMsIDAgMXB4ICNiMzk1ZjEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuIC50YWJsZUZpeEhlYWQgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG59XHJcbi5hc3RlcmlzayB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "0FKX":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/certificates/certificates.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Certificates\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n        <div class=\"homepage-block bg-Transperant p-l-15 p-r-15\"> \r\n            <div class=\"extraContent\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"p-l-0 p-r-5 col-4\">\r\n                        <div class=\"row m-0\">\r\n                            <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\"> -->\r\n                            <div class=\"col-12\">\r\n                                <div class=\"form-group has-search\">\r\n                                    <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"></span>\r\n                                    <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                    (click)=\"getSearchList(false)\"></span>                                    \r\n                                    <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search by workstation\"\r\n                                    [(ngModel)]=\"searchDet.searchInput\" (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\"/>\r\n                                </div>\r\n                            </div>\r\n                            <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                                <div class=\"filterDiv\">\r\n                                    <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                                    &nbsp;\r\n                                    <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                        Applied</span>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4 p-r-5 p-l-5 form-group\">\r\n        \r\n                    </div>\r\n                    <!-- <div class=\"col-4 p-0\">\r\n                        <div class=\"addRegDiv\" style=\"bottom: -0.1rem;\">\r\n                            <button class=\"btn addRegBtn m-0\" type=\"button\"><i\r\n                                    class=\"fa fa-plus m-r-10\"></i>Add Certificate</button>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\" class>Plant</th>\r\n                        <th mat-sort-header=\"DeptName\" class>Department</th>\r\n                        <th mat-sort-header=\"LineName\" class>Cell/Line</th>\r\n                        <th mat-sort-header=\"Workstation\"class>Workstation</th>\r\n                        <th mat-sort-header=\"LevelName\" class>Level</th>\r\n                        <th mat-sort-header=\"LevelName\" class>Created On</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of certificateList\">\r\n                        <td>{{data.branchName}}</td>\r\n                        <td>{{data.deptName}}</td>\r\n                        <td>{{data.lineName}}</td>\r\n                        <td>{{data.workstationName}}</td>\r\n                        <td>{{data.levelName}}</td>\r\n                        <td>{{data.createdDate | date:'dd-MM-yyyy'}}</td>\r\n                        <td class=\"actionTd fixedColumn text-left\">\r\n                            <a  (click)=\"previewCertificate(data,certificateForMySkilling)\" style=\"color:#7044CD;cursor: pointer\"><i class=\"fa fa-eye viewIcon\"></i></a>\r\n                                &nbsp; &nbsp;\r\n                            <!-- <a style=\"color:#7044CD;cursor: pointer;\" href=\"{{data.certificatePath}}\" download target=\"_blank\"><i class=\"fa fa-download\"></i></a> -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(certificateList == null || certificateList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data Not Found                   \r\n                             </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <app-pagination\r\n        [staticPagination]=\"staticPagination\"\r\n        (paginationData)=\"loadMore($event)\">\r\n    </app-pagination>\r\n</div>\r\n\r\n<ng-template #certificateForMySkilling let-c=\"close\">\r\n    <app-viewCertificate [close]=\"c\" [selectedDet]=\"selectedRecForModal\"></app-viewCertificate>\r\n</ng-template>\r\n\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterFormData\" (ngSubmit)=\"submitFilterForm(filterFormData)\" autocomplete=\"off\" class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branch\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                            [data]=\"getSortFunction(branchAccessList,'plant')\" [disabled]=\"false\" [(ngModel)]=\"selectedBranch.branch\"\r\n                            (onSelect)=\"onChangeBranch($event)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted  && filterFormData.controls['branch'].invalid && (filterFormData.controls['branch'].touched || filterFormData.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterFormData.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"dept\" id=\"dept\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"multipleDropdownSettings\" formControlName=\"dept\"\r\n                            [data]=\"getSortFunction(deptList,'dept')\" [disabled]=\"false\" [(ngModel)]=\"selectedBranch.dept\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" submitAttempted  && filterFormData.controls['dept'].invalid && (filterFormData.controls['dept'].touched || filterFormData.controls['dept'].dirty)\"\r\n                            class=\"custom-errorMsg\"  style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterFormData.controls['dept'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">Cancel\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ }),

/***/ "0tSj":
/*!************************************************************************!*\
  !*** ./src/app/modules/my-skilling/assessments/assessments.service.ts ***!
  \************************************************************************/
/*! exports provided: AssessmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentsService", function() { return AssessmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth/auth.service */ "jGGy");
/* harmony import */ var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth/http.service */ "bnLG");




let AssessmentsService = class AssessmentsService {
    constructor(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    /*
     Get Assessment list
   */
    getAssessmentList(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // you will get branch list here simran
    getBranchAccessList(url) {
        return this.httpService.getMethod(url);
    }
    // you will get level list here simran
    getMasterLevelList(url) {
        return this.httpService.getMethod(url);
    }
    // you will get department list here simran
    getMasterDepartmentList(url) {
        return this.httpService.getMethod(url);
    }
    // get workstation list
    getWorkstationList(url, getReq) {
        return this.httpService.postMethod(url, getReq);
    }
    getCellList(url, getReq) {
        return this.httpService.postMethod(url, getReq);
    }
};
AssessmentsService.ctorParameters = () => [
    { type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
    { type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AssessmentsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
        src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AssessmentsService);



/***/ }),

/***/ "4Tqx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-five/stage-five.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"submitLoading\">\r\n    <app-loading></app-loading>\r\n</div>\r\n<div class=\"row modal-header\">\r\n    <div class=\"col-12\" style=\"display: inline-flex;\">\r\n        <h2 class=\"heading m-0\">\r\n            Assessment\r\n        </h2>\r\n        <!-- Aniket :- when start assessment then remove the close icon -->\r\n        <button type=\"button\" aria-label=\"Close\" class=\"close\" (click)=\"closeModal()\"\r\n            *ngIf=\"!isAssessmentStart\"><span>×</span></button>\r\n    </div>\r\n</div>\r\n<div class=\"modal-body assessment-block\" style=\"height: 83.5%;\">\r\n    <div class=\"row\" style=\"height: 100%;\">\r\n        <div class=\"col-4\" style=\"height: 100%;\">\r\n            <div class=\"assessmentDet-block\">\r\n                <perfect-scrollbar [style.max-height]=\"'calc(73vh)'\">\r\n                    <!--Anikte - Countdown time show in assessment -->\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-8 text-left p-r-0\">\r\n                            <span class=\"key\">Assessment Time</span>\r\n                        </div>\r\n                        <div class=\"col-4 text-right\">\r\n                            <span class=\"value assessmentTimer\">{{actionDet.assessmentTimer\r\n                                || '00:00:00'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-8 text-left p-r-0\">\r\n                            <span class=\"key\">Total Marks</span>\r\n                        </div>\r\n                        <div class=\"col-4 text-right\">\r\n                            <span class=\"value\">{{assessmentDet.totalMark\r\n                                || '00:00:00'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-8 text-left p-r-0\">\r\n                            <span class=\"key\">Passing %</span>\r\n                        </div>\r\n                        <div class=\"col-4 text-right\">\r\n                            <span class=\"value\">{{assessmentDet.passingMark\r\n                                || '00:00:00'}}</span>\r\n                        </div>\r\n                    </div>\r\n                   \r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Assessment Type</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.assessmentType || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Plant</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.branchName || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Cell</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.lineName || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Workstation</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.workstation || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div *ngIf=\"actionDet.assessmentType != 'SAFETY'\" class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Level</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.levelName || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Activity</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.activity || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Assigned Date</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.activityDate | date: 'dd-MM-yyyy' || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Activity Completeion Date</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.activityCompletionDate || 'N/A'}}</span>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Status</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.status || 'N/A'}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"row assessment-input-block m-0\">\r\n                        <div class=\"col-4 text-left p-r-0\">\r\n                            <span class=\"key\">Action Status</span>\r\n                        </div>\r\n                        <div class=\"col-8 text-right\">\r\n                            <span class=\"value\">{{actionDet.actionStatus || 'N/A'}}</span>\r\n                        </div>\r\n                    </div> -->\r\n                </perfect-scrollbar>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-8\" *ngIf=\"!isAssessmentStart && !assessmentStartCloseSpinner &&\r\n        (assessmentDet.quesList != null && assessmentDet.quesList.length>\r\n        0)\">\r\n            <!-- Aniket :- Show start button in assessment-->\r\n            <div class=\"asessmentStartBlock\">\r\n                <div class=\"assessmentMsg text-center\">\r\n                    <ng-container *ngIf=\"!isAssessmentClose\">\r\n                        <div class=\"assessmentHighlightMsg\">\r\n                            <p>Online Assessment Precautions</p>\r\n                            <ul>\r\n                                <li>\r\n                                    <b>Check your internet connection:</b> Make sure you have a stable and reliable connection\r\n                                    before you begin.\r\n                                </li>\r\n                                <li>\r\n                                    <b>Avoid closing or refreshing your browser while taking the assessment:</b> Doing so could\r\n                                    lead to losing progress or facing technical problems.\r\n                                </li>\r\n                                <li>\r\n                                    <b>Once you begin the assessment, you cannot cancel it:</b> Be prepared to start and\r\n                                    complete it by the set deadline.\r\n                                </li>\r\n                                <li>\r\n                                    <b>If you miss the submission deadline:</b> Your responses up to that point will be\r\n                                    automatically submitted.\r\n                                </li>\r\n                            </ul>\r\n                            <p class=\"allTheBest\">Good luck!</p>\r\n                        </div>\r\n                        <!-- <p class=\"msg\">Start Assessment</p> -->\r\n                        <button class=\"btn submitBtn startAssessment\" type=\"button\" (click)=\"connect()\">\r\n\r\n                            <span *ngIf=\"assessmentStartCloseSpinner\" class=\"spinner-grow spinner-grow-sm\"\r\n                                role=\"status\"></span>\r\n                            <span *ngIf=\"assessmentStartCloseSpinner\" class=\"load-text\"> {{'Loading' |\r\n                                translate}}...</span>\r\n                            <span *ngIf=\"!assessmentStartCloseSpinner\" class=\"btn-text\">Start Assessment</span>\r\n                        </button>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"isAssessmentClose\">\r\n                        <p class=\"msg\"> Assessment time closed</p>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-8\" style=\"height: 100%;\" *ngIf=\"isAssessmentStart && assessmentStartCloseSpinner \">\r\n            <app-spinner *ngIf=\"assessmentLoader\"></app-spinner>\r\n            <div class=\"dataNotAvailable\"\r\n                *ngIf=\"(assessmentDet.quesList == null || assessmentDet.quesList.length == 0) && !assessmentLoader\">\r\n            </div>\r\n            <ng-container>\r\n                <div class=\"assessmentQueAns-block\"\r\n                    *ngIf=\"assessmentDet.quesList !=\r\n                    null && assessmentDet.quesList.length> 0 && !assessmentLoader\">\r\n                    <form #empSkillForm=\"ngForm\" autocomplete=\"off\"\r\n                        class=\"needs-validation\" novalidate [ngClass]=\"empSkillForm.submitted ? 'was-validated':''\">\r\n                        <perfect-scrollbar [style.height]=\"'calc(73vh)'\" #QuesPerfectScroll>\r\n                            <ng-container\r\n                                *ngIf=\"assessmentDet.quesListGroupBy != null && assessmentDet.quesListGroupBy.length > 0\">\r\n                                <div *ngFor=\"let quesGroup of assessmentDet.quesListGroupBy\">\r\n                                    <div class=\"qsBlock\">\r\n                                        <div class=\"questions-block\">\r\n                                            <div class=\"overlay\">\r\n                                                <div class=\"Category\" *ngIf=\"quesGroup.catId && quesGroup.catName\">\r\n                                                    <label class=\"form-check-label catLbl\"\r\n                                                        for=\"isCatgeory\">{{quesGroup.catName\r\n                                                        || 'N/A'}}</label>\r\n                                                </div>\r\n                                                <ng-container\r\n                                                    *ngIf=\"quesGroup.quesList != null && quesGroup.quesList.length > 0\">\r\n                                                    <div class=\"assessmentQue-block\">\r\n                                                        <div class=\"ques-card otherQuesCard\"\r\n                                                            *ngFor=\"let ques of quesGroup.quesList; let quesIndex = index\" [ngClass]=\"{'highlight-unanswered': ques.highlight}\">\r\n                                                            <div class=\"row m-0\">\r\n                                                                <div class=\"col-1 p-0\">\r\n                                                                    <!-- <p class=\"question_number text-center\">{{quesIndex + 1}}</p> -->\r\n                                                                    <p class=\"question_number text-center\">\r\n                                                                        {{quesIndex + 1}}\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                                <div class=\"col-11\">\r\n                                                                    <!-- <p class=\"questions\">{{ques.question || 'N/A'}}</p> -->\r\n                                                                    <p class=\"questions\">\r\n                                                                        {{ques.question}}&nbsp;<span\r\n                                                                            class=\"astrick\">*</span>\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"option-block\">\r\n                                                                <ul class=\"optList-Div\">\r\n                                                                    <ng-container\r\n                                                                        *ngIf=\"ques.optList != null && ques.optList.length > 0\">\r\n                                                                        <li\r\n                                                                            *ngFor=\"let opt of ques.optList; let optIndex = index\">\r\n                                                                            <div class=\"row\">\r\n                                                                                <div class=\"col-2 p-0 text-center\"\r\n                                                                                    style=\"margin: auto 0px;\">\r\n                                                                                    <div class=\"optIndex\">\r\n                                                                                        {{Constant.AlphabetLetter[optIndex]}}\r\n                                                                                    </div>\r\n                                                                                </div>\r\n                                                                                <div class=\"col-8 p-0\">\r\n                                                                                    <ng-container>\r\n                                                                                        <div\r\n                                                                                            class=\"optText-div radiobtn\">\r\n                                                                                            <input type=\"radio\"\r\n                                                                                                id=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\"\r\n                                                                                                name=\"answer{{ques.quetionId}}\"\r\n                                                                                                value=\"{{opt.assessmentQueOptId}}\"\r\n                                                                                                required\r\n                                                                                                [(ngModel)]=\"opt.isChecked\"\r\n                                                                                                (change)=\"addOrUpdateRequestList(ques, opt);\" />\r\n                                                                                            <label\r\n                                                                                                for=\"opt_{{ques.quetionId+'_'+opt.assessmentQueOptId}}\"\r\n                                                                                                class=\"optText\">{{opt.option\r\n                                                                                                || 'N/A'}}\r\n                                                                                            </label>\r\n                                                                                        </div>\r\n                                                                                    </ng-container>\r\n                                                                                </div>\r\n                                                                            </div>\r\n                                                                        </li>\r\n                                                                    </ng-container>\r\n                                                                </ul>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </perfect-scrollbar>\r\n                    </form>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-footer text-center pad0 paginationFooter\" *ngIf=\"isAssessmentStart && assessmentStartCloseSpinner \">\r\n    <button type=\"button\" class=\"btn submitBtn\" (click)=\"submitStageFiveStatus()\"\r\n        style=\"background: #7044cd;\">Submit</button>\r\n</div>\r\n<!-- Aniket :- show confirmation model -->\r\n<ng-template #openRefModalShiftNo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveDocument(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>\r\n                <div class=\"row form-group\">\r\n                    <label for=\"docName\" class=\"col-sm-4 col-form-label\">Document Name &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"docName\" name=\"docName\" placeholder=\"Enter Document Name\"\r\n                            formControlName=\"docName\" [(ngModel)]=\"addEditReferenceDocName.doc\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['docName'].invalid || \r\n                            (formdata.controls['docName'].touched || formdata.controls['docName'].Untouched) \r\n                            && formdata.controls['docName'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            Please enter document name\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ }),

/***/ "6X44":
/*!******************************************************************************!*\
  !*** ./src/app/modules/my-skilling/skill-matrix/skill-matrix.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homepage-block .row .exportPdf {\n  border: 1px solid #00AEEF;\n  width: 30px;\n  height: 30px;\n  background-color: #00AEEF;\n  margin-left: calc(100% - 60%);\n  float: right;\n  margin: 5px;\n}\n.homepage-block .row .exportPdf .iconPDF {\n  font-size: 22px;\n  color: #ffffff;\n  margin: 3px 5px;\n}\n.homepage-block .row .excelbutton {\n  cursor: pointer;\n  margin-left: 20px;\n}\n.homepage-block .row .excelbutton .img-fluid {\n  height: 25px;\n  width: 25px;\n  right: initial;\n  position: absolute;\n  left: 200%;\n}\n.homepage-block .row .excelbutton .excelFont {\n  font: normal normal 500 11px/20px Helvetica Neue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2tpbGwtbWF0cml4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURaO0FBR1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFEaEI7QUFLUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFIaEI7QUFLWTtFQUNJLGdEQUFBO0FBSGhCIiwiZmlsZSI6InNraWxsLW1hdHJpeC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lcGFnZS1ibG9jayB7XHJcbiAgICAucm93IHtcclxuICAgICAgICAuZXhwb3J0UGRmIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwQUVFRjtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQUVFRjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDYwJSk7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAuaWNvblBERiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmV4Y2VsYnV0dG9uIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5pbWctZmx1aWQge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV4Y2VsRm9udCB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxMXB4LzIwcHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "7Q1W":
/*!****************************************************************************!*\
  !*** ./src/app/modules/my-skilling/assessments/assessments.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  border-left: none;\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXNzbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6ImFzc2Vzc21lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB0YWJsZSAuZml4ZWRDb2x1bW4ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMjsgXHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "A3oa":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/my-skilling.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-9 m-auto\">\r\n        <app-topBar title=\"My Skilling\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <app-loginInfo></app-loginInfo>\r\n    </div>\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div> -->\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n\r\n</div>");

/***/ }),

/***/ "Albp":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-five/stage-five.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header {\n  border-bottom: 2px solid #c8e4f5 !important;\n}\n.modal-header .heading {\n  width: 100%;\n}\n.modal-header .close {\n  padding: 0;\n  margin: 0;\n}\n.modal-footer {\n  padding: 5px 15px;\n  float: right;\n  display: flex;\n}\n.dataNotAvailable {\n  height: 100%;\n}\n.assessment-block {\n  padding-top: 10px;\n}\n.assessment-block .heading {\n  text-align: left;\n  font: normal normal bold 20px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  text-transform: uppercase;\n  padding: 1rem 1rem 1rem 0px;\n}\n.assessment-block .heading .feather {\n  color: #5dc3ed;\n  vertical-align: bottom;\n  font-size: 1.5em;\n  cursor: pointer;\n}\n.assessment-block .assessmentDet-block {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 14px;\n  height: 100%;\n  position: relative;\n  padding-bottom: 0px;\n}\n.assessment-block .assessmentDet-block .assessment-input-block {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 1rem 0px;\n}\n.assessment-block .assessmentDet-block .assessment-input-block .key {\n  font: normal normal bold 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  word-break: break-all;\n}\n.assessment-block .assessmentDet-block .assessment-input-block .value {\n  font: normal normal bold 15px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  word-break: break-all;\n}\n.assessment-block .assessmentDet-block .assessment-progress {\n  padding: 1rem 0px;\n  position: absolute;\n  z-index: 999;\n  width: 100%;\n  bottom: 8px;\n}\n.assessment-block .assessmentDet-block .assessment-progress .key {\n  font: normal normal bold 12px/15px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #01a0e2;\n}\n.assessment-block .assessmentDet-block .assessment-progress .value {\n  font: normal normal bold 18px/22px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n}\n.assessment-block .assessmentDet-block .assessment-progress .progress {\n  background: #d8d8d8 0% 0% no-repeat padding-box;\n  border-radius: 7px;\n  margin: 0px 5px;\n  height: 0.5rem;\n}\n.assessment-block .assessmentDet-block .assessment-progress .progress .bgThemeColor {\n  background: #01a0e2 0% 0% no-repeat padding-box;\n}\n.assessment-block .assessmentQueAns-block {\n  height: 100%;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n  padding: 5px;\n}\n.assessment-block .assessmentQueAns-block .header-block {\n  border-bottom: 1px solid #01a0e2;\n}\n.assessment-block .assessmentQueAns-block .header-block .assessmentTitle {\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n  margin: 0px;\n  padding: 5px 10px;\n  color: #01a0e2;\n}\n.assessment-block .assessmentQueAns-block .header-block .selfAssessLegends {\n  font: normal normal normal 13px/1.5 Helvetica Neue;\n  color: #01a0e2;\n  padding: 5px 12px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block:first-child {\n  margin-top: 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .Category {\n  /* margin: 0px 0px 5px -1px; */\n  position: relative;\n  padding: 5px 10px;\n  background: #01a0e2 0% 0% no-repeat padding-box;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .Category .catLbl {\n  color: white;\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv {\n  margin: 5px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .ques-blk {\n  margin: 5px 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat {\n  padding: 5px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk {\n  padding-bottom: 5px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk:last-child {\n  padding-bottom: 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory {\n  position: relative;\n  padding: 5px 10px;\n  background: #01a0e2 0% 0% no-repeat padding-box;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .key,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .key {\n  font: normal normal 400 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .value,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .value {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block {\n  padding: 0px 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card {\n  background: #fff 0% 0% no-repeat padding-box;\n  position: relative;\n  padding: 0px 5px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  margin-bottom: 1rem;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card.otherQuesCard,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card.otherQuesCard {\n  background: #f1f1f1 0% 0% no-repeat padding-box;\n  padding: 0px 10px;\n  margin: 10px;\n  box-shadow: none;\n  border-radius: 10px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .question_number,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .question_number {\n  background: #01a0e2 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 10px 10px;\n  color: #fff;\n  line-height: 30px;\n  font: normal normal 600 15px/30px Helvetica Neue;\n  width: 100%;\n  margin: 0px;\n  padding: 5px 0px 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .questions,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .questions {\n  font: normal normal 500 14px/1.4 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #4c4c4c;\n  margin: 0px;\n  padding: 5px 0px 0px;\n  white-space: pre-line;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block {\n  padding: 0.5rem;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li {\n  float: left;\n  width: 50%;\n  margin: 0.2rem 0px;\n  cursor: pointer;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex {\n  font: normal normal 600 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #01a0e2;\n  text-transform: capitalize;\n  padding: 0.5rem 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div {\n  /* padding: 0.5rem; */\n  position: relative;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label {\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n  margin: 0px;\n  border-radius: 5px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 6px #00000029;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  margin: 0px;\n  padding-left: 30px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  background-color: #01a0e2;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after {\n  width: 20px;\n  height: 20px;\n  content: \"\";\n  border: 2px solid #d1d7dc;\n  background-color: #fff;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label {\n  color: #fff;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after {\n  background-color: #01a0e2;\n  border-color: #1b8fc7;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input {\n  width: 20px;\n  height: 20px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div .radiobtn input,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div .radiobtn input {\n  width: 100%;\n  height: 37px;\n  left: 0px;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star {\n  font-size: 2rem;\n  color: #ccc;\n  margin: 7px 2px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled,\n.assessment-block .assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled {\n  color: #f7c001;\n}\n.assessment-block .helpSection-block {\n  height: 100vh;\n  padding: 1.5rem 0px 0px;\n}\n.assessment-block .helpSection-block .helpSection-heading.dangerColor {\n  color: #fa7272;\n}\n.assessment-block .helpSection-block .helpSection-heading.warningColor {\n  color: #fac964;\n}\n.assessment-block .helpSection-block .helpSection-heading.blueColor {\n  color: #4e7dfd;\n}\n.assessment-block .helpSection-block .helpSection-heading.greenColor {\n  color: #30b74a;\n}\n.assessment-block .helpSection-block .helpSection-heading.pinkColor {\n  color: #f840ac;\n}\n.assessment-block .helpSection-block .helpSection-msg {\n  font: normal normal normal 12px/1.5 Helvetica Neue;\n  color: #717171;\n}\n.assessment-block .assessment-footerSection {\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 0px 10px 1px rgba(171, 171, 171, 0.75);\n}\n.assessment-block .assessment-footerSection .submitBtn,\n.assessment-block .assessment-footerSection .cancelBtn {\n  font-size: 14px;\n}\n.asessmentStartBlock {\n  position: fixed;\n  z-index: 999;\n  background: rgba(0, 0, 0, 0.09);\n  width: calc(100% - 35%);\n  height: 100%;\n  display: inline-block;\n}\n.asessmentStartBlock .assessmentMsg {\n  position: absolute;\n  z-index: 999;\n  transform: translate(0%, -50%);\n  top: 45%;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  text-align: center;\n}\n.asessmentStartBlock .assessmentMsg .msg {\n  color: #fff;\n  font: normal normal 500 18px/1.5 Helvetica Neue;\n}\n.asessmentStartBlock .assessmentMsg .assessmentHighlightMsg {\n  padding: 2rem;\n}\n.asessmentStartBlock .assessmentMsg .assessmentHighlightMsg p {\n  font-size: 1rem;\n  font-weight: 600;\n  color: rebeccapurple;\n}\n.asessmentStartBlock .assessmentMsg .assessmentHighlightMsg ul {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n  width: 100%;\n  text-decoration: none !important;\n  text-align: left;\n}\n.asessmentStartBlock .assessmentMsg .assessmentHighlightMsg ul li {\n  text-decoration: none !important;\n}\n.assessmentProgress {\n  text-align: center;\n  float: right;\n}\n.assessmentProgress .parent_time {\n  margin: 0px 5px;\n  color: #fff;\n}\n.assessmentProgress .child_time0 {\n  background: #f39a3f;\n  border-radius: 5px 0px 0px 5px;\n}\n.assessmentProgress .child_time1 {\n  background: #ff7c0c;\n  border-radius: 0px 5px 5px 0px;\n}\n.assessmentProgress .child_time {\n  float: left;\n  color: #fff;\n  padding: 6px;\n  margin: 0px;\n}\n.astrick {\n  color: #ff5252;\n}\n.profDefDet {\n  border-bottom: 1px solid lightgray;\n  padding: 5px 10px;\n  display: inline-block;\n  width: 100%;\n}\n.profDefDet span:first-child {\n  color: #01a0e2;\n}\n.profDefDet span.skillName {\n  display: inline-block;\n  width: 75%;\n}\n.profDefDet:first-child {\n  background-color: #01a0e2;\n}\n.profDefDet:first-child span {\n  color: #fff;\n}\n.assessmentQueAns-block {\n  height: 100vh;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 0px;\n}\n.assessmentQueAns-block .assessmentTitle {\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n  margin: 0px;\n  padding: 10px;\n  border-bottom: 1px solid #01a0e2;\n  color: #01a0e2;\n}\n.assessmentQueAns-block .qsBlock {\n  border-bottom: 1px solid #01a0e2;\n}\n.assessmentQueAns-block .qsBlock .questions-block {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n.assessmentQueAns-block .qsBlock .questions-block:first-child {\n  margin-top: 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .Category {\n  /* margin: 0px 0px 5px -1px; */\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box !important;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .Category .catLbl {\n  color: white;\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv {\n  margin: 5px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .ques-blk {\n  margin: 5px 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat {\n  padding: 5px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk {\n  padding-bottom: 5px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .ques-blk:last-child {\n  padding-bottom: 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory {\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box !important;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .key,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .key {\n  font: normal normal 400 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .subCategory .value,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .subCategory .value {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block {\n  padding: 0px 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card {\n  background: #fff 0% 0% no-repeat padding-box;\n  position: relative;\n  padding: 0px 5px;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n  margin-bottom: 1rem;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card.otherQuesCard,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card.otherQuesCard {\n  background: #f1f1f1 0% 0% no-repeat padding-box;\n  padding: 0px 10px;\n  margin: 10px;\n  box-shadow: none;\n  border-radius: 10px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .question_number,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .question_number {\n  background: #7044cd 0% 0% no-repeat padding-box;\n  border-radius: 0px 0px 10px 10px;\n  color: #fff;\n  line-height: 30px;\n  font: normal normal 600 15px/30px Helvetica Neue;\n  width: 100%;\n  margin: 0px;\n  padding: 5px 0px 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .questions,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .questions {\n  font: normal normal 500 14px/1.4 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #4c4c4c;\n  margin: 0px;\n  padding: 5px 0px 0px;\n  white-space: pre-line;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block {\n  padding: 0.5rem;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li {\n  float: left;\n  width: 50%;\n  margin: 0.2rem 0px;\n  cursor: pointer;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optIndex {\n  font: normal normal 600 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  text-transform: capitalize;\n  padding: 0.5rem 0px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div {\n  /* padding: 0.5rem; */\n  position: relative;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label {\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n  margin: 0px;\n  border-radius: 5px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 6px #00000029;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  margin: 0px;\n  padding-left: 30px;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  background-color: #7044cd;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div label:after {\n  width: 20px;\n  height: 20px;\n  content: \"\";\n  border: 2px solid #d1d7dc;\n  background-color: #fff;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label {\n  color: #fff;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input:checked ~ label:after {\n  background-color: #7044cd;\n  border-color: white;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div li .optText-div input {\n  width: 20px;\n  height: 20px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .star {\n  font-size: 2rem;\n  color: #ccc;\n  margin: 7px 2px;\n  padding: 5px 0px;\n  display: inline-block;\n}\n.assessmentQueAns-block .qsBlock .questions-block .overlay .groupQuestionDiv .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled,\n.assessmentQueAns-block .qsBlock .questions-block .overlay .noSubCat .assessmentQue-block .ques-card .option-block .optList-Div .rating-block .ratingStar .starFilled {\n  color: #f7c001;\n}\n.highlight-unanswered {\n  border: 2px solid #ff4d4d;\n  /* Red border */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLWZpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBQVI7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjtBQUlBO0VBQ0ksWUFBQTtBQURKO0FBSUE7RUFDSSxpQkFBQTtBQURKO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQURSO0FBR1E7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFEWjtBQUtJO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1k7RUFDSSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBSGhCO0FBTVk7RUFDSSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBSmhCO0FBUVE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBTlo7QUFRWTtFQUNJLGlEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBTmhCO0FBU1k7RUFDSSxpREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVBoQjtBQVVZO0VBQ0ksK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBUmhCO0FBVWdCO0VBQ0ksK0NBQUE7QUFScEI7QUFjSTtFQUNJLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWlI7QUFjUTtFQUNJLGdDQUFBO0FBWlo7QUFjWTtFQUNJLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVpoQjtBQWVZO0VBQ0ksa0RBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFiaEI7QUFxQlk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFuQmhCO0FBcUJnQjtFQUNJLGVBQUE7QUFuQnBCO0FBdUJvQjtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBckJ4QjtBQXVCd0I7RUFDSSxZQUFBO0VBQ0EsK0NBQUE7QUFyQjVCO0FBMEJvQjtFQUNJLFdBQUE7QUF4QnhCO0FBMEJ3QjtFQUNJLGVBQUE7QUF4QjVCO0FBNEJvQjtFQUNJLFlBQUE7QUExQnhCO0FBNEJ3QjtFQUNJLG1CQUFBO0FBMUI1QjtBQTRCNEI7RUFDSSxtQkFBQTtBQTFCaEM7QUFpQ3dCOztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQTlCNUI7QUFnQzRCOztFQUNJLCtDQUFBO0VBQ0EsV0FBQTtBQTdCaEM7QUFnQzRCOztFQUNJLCtDQUFBO0VBQ0EsV0FBQTtBQTdCaEM7QUFpQ3dCOztFQUNJLGdCQUFBO0FBOUI1QjtBQWdDNEI7O0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQTdCaEM7QUErQmdDOztFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTVCcEM7QUErQmdDOztFQUNJLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUE1QnBDO0FBK0JnQzs7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBNUJwQztBQStCZ0M7O0VBQ0ksZUFBQTtBQTVCcEM7QUE4Qm9DOztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUEzQnhDO0FBNkJ3Qzs7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTFCNUM7QUE0QjRDOztFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQXpCaEQ7QUE0QjRDOztFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUF6QmhEO0FBMkJnRDs7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUF4QnBEO0FBMEJvRDs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXZCeEQ7QUEwQm9EOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxWkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQXZCeEQ7QUEyQmdEOztFQUNJLFdBQUE7QUF4QnBEO0FBMEJvRDs7RUFDSSxtREFBQTtFQUNBLFVBQUE7QUF2QnhEO0FBMEJvRDs7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBdkJ4RDtBQTJCZ0Q7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhCcEQ7QUEyQmdEOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQXhCcEQ7QUErQmdEOztFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUE1QnBEO0FBK0JnRDs7RUFDSSxjQUFBO0FBNUJwRDtBQTBDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQXhDUjtBQTJDWTtFQUNJLGNBQUE7QUF6Q2hCO0FBNENZO0VBQ0ksY0FBQTtBQTFDaEI7QUE2Q1k7RUFDSSxjQUFBO0FBM0NoQjtBQThDWTtFQUNJLGNBQUE7QUE1Q2hCO0FBK0NZO0VBQ0ksY0FBQTtBQTdDaEI7QUFpRFE7RUFDSSxrREFBQTtFQUNBLGNBQUE7QUEvQ1o7QUFtREk7RUFDSSxvQkFBQTtFQUNBLHNEQUFBO0FBakRSO0FBbURROztFQUVJLGVBQUE7QUFqRFo7QUFzREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFuREo7QUFxREk7RUFNSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXhEUjtBQTRDUTtFQUNJLFdBQUE7RUFDQSwrQ0FBQTtBQTFDWjtBQXNEUTtFQUNJLGFBQUE7QUFwRFo7QUFzRFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQXBEaEI7QUF3RFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBRUEsZ0JBQUE7QUF2RGhCO0FBeURnQjtFQUNJLGdDQUFBO0FBdkRwQjtBQThEQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQTNESjtBQTZESTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBM0RSO0FBOERJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQTVEUjtBQStESTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUE3RFI7QUFnRUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBOURSO0FBa0VBO0VBQ0ksY0FBQTtBQS9ESjtBQWtFQTtFQUNJLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUEvREo7QUFpRUk7RUFDSSxjQUFBO0FBL0RSO0FBa0VJO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FBaEVSO0FBbUVJO0VBQ0kseUJBQUE7QUFqRVI7QUFtRVE7RUFDSSxXQUFBO0FBakVaO0FBc0VBO0VBQ0ksYUFBQTtFQUNBLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQW5FSjtBQXFFSTtFQUNJLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7QUFuRVI7QUFzRUk7RUFDSSxnQ0FBQTtBQXBFUjtBQXVFUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQXJFWjtBQXVFWTtFQUNJLGVBQUE7QUFyRWhCO0FBeUVnQjtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBEQUFBO0FBdkVwQjtBQXlFb0I7RUFDSSxZQUFBO0VBQ0EsK0NBQUE7QUF2RXhCO0FBNEVnQjtFQUNJLFdBQUE7QUExRXBCO0FBNEVvQjtFQUNJLGVBQUE7QUExRXhCO0FBOEVnQjtFQUNJLFlBQUE7QUE1RXBCO0FBOEVvQjtFQUNJLG1CQUFBO0FBNUV4QjtBQThFd0I7RUFDSSxtQkFBQTtBQTVFNUI7QUFtRm9COztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwREFBQTtBQWhGeEI7QUFrRndCOztFQUNJLCtDQUFBO0VBQ0EsV0FBQTtBQS9FNUI7QUFrRndCOztFQUNJLCtDQUFBO0VBQ0EsV0FBQTtBQS9FNUI7QUFtRm9COztFQUNJLGdCQUFBO0FBaEZ4QjtBQWtGd0I7O0VBQ0ksNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQS9FNUI7QUFpRjRCOztFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTlFaEM7QUFpRjRCOztFQUNJLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUE5RWhDO0FBaUY0Qjs7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBOUVoQztBQWlGNEI7O0VBQ0ksZUFBQTtBQTlFaEM7QUFnRmdDOztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUE3RXBDO0FBK0VvQzs7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTVFeEM7QUE4RXdDOztFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQTNFNUM7QUE4RXdDOztFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUEzRTVDO0FBNkU0Qzs7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUExRWhEO0FBNEVnRDs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlEQUFBO0VBQ0Esa0RBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQXpFcEQ7QUE0RWdEOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxWkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQXpFcEQ7QUE2RTRDOztFQUNJLFdBQUE7QUExRWhEO0FBNEVnRDs7RUFDSSxtREFBQTtFQUNBLFVBQUE7QUF6RXBEO0FBNEVnRDs7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBekVwRDtBQTZFNEM7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTFFaEQ7QUFpRjRDOztFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUE5RWhEO0FBaUY0Qzs7RUFDSSxjQUFBO0FBOUVoRDtBQTRGQTtFQUVJLHlCQUFBO0VBQTJCLGVBQUE7QUF6Ri9CIiwiZmlsZSI6InN0YWdlLWZpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzhlNGY1ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGF0YU5vdEF2YWlsYWJsZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hc3Nlc3NtZW50LWJsb2NrIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAyMHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMHB4O1xyXG5cclxuICAgICAgICAuZmVhdGhlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNWRjM2VkO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hc3Nlc3NtZW50RGV0LWJsb2NrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5hc3Nlc3NtZW50LWlucHV0LWJsb2NrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMHB4O1xyXG5cclxuICAgICAgICAgICAgLmtleSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTVweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICAgICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hc3Nlc3NtZW50LXByb2dyZXNzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAua2V5IHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzE1cHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMWEwZTI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMThweC8yMnB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q4ZDhkOCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAuYmdUaGVtZUNvbG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDFhMGUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXNzbWVudFF1ZUFucy1ibG9jayB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyLWJsb2NrIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMWEwZTI7XHJcblxyXG4gICAgICAgICAgICAuYXNzZXNzbWVudFRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE1cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDFhMGUyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VsZkFzc2Vzc0xlZ2VuZHMge1xyXG4gICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAxYTBlMjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucXNCbG9jayB7XHJcblxyXG4gICAgICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDFhMGUyO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIC5xdWVzdGlvbnMtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLkNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwcHggMHB4IDVweCAtMXB4OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDFhMGUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRMYmwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTVweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyb3VwUXVlc3Rpb25EaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzLWJsayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5ub1N1YkNhdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzLWJsayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmdyb3VwUXVlc3Rpb25EaXYsXHJcbiAgICAgICAgICAgICAgICAgICAgLm5vU3ViQ2F0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YkNhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxYTBlMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmtleSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFzc2Vzc21lbnRRdWUtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlcy1jYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5vdGhlclF1ZXNDYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlc3Rpb25fbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAxYTBlMiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNjAwIDE1cHgvMzBweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVzdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxNHB4LzEuNCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0YzRjNGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbi1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRMaXN0LURpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0SW5kZXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDYwMCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMWEwZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdFRleHQtZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFkZGluZzogMC41cmVtOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMWEwZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2QxZDdkYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE5TNHpJREV6TGpJaVBpQWdQSEJoZEdnZ1ptbHNiRDBpSTJabVppSWdaRDBpVFRFMExqY3VPR3d0TGpRdExqUmhNUzQzSURFdU55QXdJREFnTUMweUxqTXVNVXcxTGpJZ09DNHlJRE1nTmk0MFlURXVOeUF4TGpjZ01DQXdJREF0TWk0ekxqRk1MalFnTjJFeExqY2dNUzQzSURBZ01DQXdJQzR4SURJdU0yd3pMamdnTXk0MVlURXVOeUF4TGpjZ01DQXdJREFnTWk0MExTNHhUREUxSURNdU1XRXhMamNnTVM0M0lEQWdNQ0F3TFM0eUxUSXVNM29pSUdSaGRHRXRibUZ0WlQwaVVHWmhaQ0EwSWk4K1BDOXpkbWMrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDFhMGUyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzFiOGZjNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhZGlvYnRuIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmdTdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDdweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhckZpbGxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y3YzAwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaGVscFNlY3Rpb24tYmxvY2sge1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDBweCAwcHg7XHJcblxyXG4gICAgICAgIC5oZWxwU2VjdGlvbi1oZWFkaW5nIHtcclxuICAgICAgICAgICAgJi5kYW5nZXJDb2xvciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZhNzI3MjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi53YXJuaW5nQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmYWM5NjQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuYmx1ZUNvbG9yIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGU3ZGZkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmdyZWVuQ29sb3Ige1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMGI3NGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucGlua0NvbG9yIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjg0MGFjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVscFNlY3Rpb24tbXNnIHtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzE3MTcxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXNzbWVudC1mb290ZXJTZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMTcxLCAxNzEsIDE3MSwgMC43NSk7XHJcblxyXG4gICAgICAgIC5zdWJtaXRCdG4sXHJcbiAgICAgICAgLmNhbmNlbEJ0biB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hc2Vzc21lbnRTdGFydEJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDklKTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNSUpOyAvL0FuaWtldFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIC5hc3Nlc3NtZW50TXNnIHtcclxuICAgICAgICAubXNnIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE4cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbiAgICAgICAgdG9wOiA0NSU7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmFzc2Vzc21lbnRIaWdobGlnaHRNc2cge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFzc2Vzc21lbnRQcm9ncmVzcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgLnBhcmVudF90aW1lIHtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoaWxkX3RpbWUwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjM5YTNmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hpbGRfdGltZTEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjdjMGM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDVweCA1cHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsZF90aW1lIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hc3RyaWNrIHtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG59XHJcblxyXG4ucHJvZkRlZkRldCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogIzAxYTBlMjtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLnNraWxsTmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxYTBlMjtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFzc2Vzc21lbnRRdWVBbnMtYmxvY2sge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxuICAgIC5hc3Nlc3NtZW50VGl0bGUge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE1cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMWEwZTI7XHJcbiAgICAgICAgY29sb3I6ICMwMWEwZTI7XHJcbiAgICB9XHJcblxyXG4gICAgLnFzQmxvY2sge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDFhMGUyO1xyXG5cclxuICAgICAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgLnF1ZXN0aW9ucy1ibG9jayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgICAgIC5DYXRlZ29yeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogbWFyZ2luOiAwcHggMHB4IDVweCAtMXB4OyAqL1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2F0TGJsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxNXB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cFF1ZXN0aW9uRGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXMtYmxrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubm9TdWJDYXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXMtYmxrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ncm91cFF1ZXN0aW9uRGl2LFxyXG4gICAgICAgICAgICAgICAgLm5vU3ViQ2F0IHtcclxuICAgICAgICAgICAgICAgICAgICAuc3ViQ2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmtleSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFzc2Vzc21lbnRRdWUtYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXMtY2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYub3RoZXJRdWVzQ2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucXVlc3Rpb25fbnVtYmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDYwMCAxNXB4LzMwcHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXN0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTRweC8xLjQgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzRjNGM0YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbi1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAub3B0TGlzdC1EaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRJbmRleCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA2MDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRUZXh0LWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogcGFkZGluZzogMC41cmVtOyAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAwLjVyZW0gMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkMWQ3ZGM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TlM0eklERXpMaklpUGlBZ1BIQmhkR2dnWm1sc2JEMGlJMlptWmlJZ1pEMGlUVEUwTGpjdU9Hd3RMalF0TGpSaE1TNDNJREV1TnlBd0lEQWdNQzB5TGpNdU1VdzFMaklnT0M0eUlETWdOaTQwWVRFdU55QXhMamNnTUNBd0lEQXRNaTR6TGpGTUxqUWdOMkV4TGpjZ01TNDNJREFnTUNBd0lDNHhJREl1TTJ3ekxqZ2dNeTQxWVRFdU55QXhMamNnTUNBd0lEQWdNaTQwTFM0eFRERTFJRE11TVdFeExqY2dNUzQzSURBZ01DQXdMUzR5TFRJdU0zb2lJR1JoZEdFdGJtRnRaVDBpVUdaaFpDQTBJaTgrUEM5emRtYyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDU2LCA1NiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmF0aW5nLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmdTdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogN3B4IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJGaWxsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Y3YzAwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oaWdobGlnaHQtdW5hbnN3ZXJlZCB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNmU2ICFpbXBvcnRhbnQ7IC8qIExpZ2h0IHJlZCBiYWNrZ3JvdW5kIGZvciB2aXNpYmlsaXR5ICovXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmY0ZDRkOyAvKiBSZWQgYm9yZGVyICovXHJcbn0iXX0= */");

/***/ }),

/***/ "BEzr":
/*!********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-one/stage-one.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .main-tab-switcher {\n    display: inline-flex;\n    color: #474747;\n    opacity: 1;\n    position: relative;\n    top: 0px;\n    box-shadow: none;\n    margin-top: 0px;\n    left: 0;\n}\n\n.main-tab-switch {\n    line-height: 1.5;\n    padding: 3px 20px;\n    cursor: pointer;\n}\n\n.mainActiveSwitchTraining {\n    border-bottom: 3px solid #6610f2;\n    color: #6610f2;\n}\n\n.mainActiveSwitchProduction {\n    border-bottom: 3px solid #6610f2;\n    color: #6610f2;\n}\n\n.table-block {\n    margin-left: 15px;\n    margin-right: 15px;\n}\n\n.modal-footer {\n    padding: 10px 15px;\n    float: right;\n    display: inline-flex;\n}\n\n.mat-sort-header-container {\n    display: flex;\n    cursor: pointer;\n    align-items: center;\n    letter-spacing: normal;\n    text-align: center !important;\n    outline: 0;\n    justify-content: center !important;\n}\n\n.mat-sort-header-text {\n    text-align: center !important;\n}\n */\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n.main-tab-switcher {\n  padding: 0px !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  border-radius: 0px !important;\n  margin: 0px !important;\n  left: 0px !important;\n}\n.main-tab-switcher .main-tab-switch {\n  padding: 10px 20px;\n}\n.main-tab-switcher .main-tab-switch.active {\n  background: #7044cd;\n  color: #fff;\n}\n.tableFixHead {\n  overflow-y: auto !important;\n  max-height: calc(100vh - 50vh) !important;\n  min-height: calc(100vh - 50vh) !important;\n  height: calc(100vh - 50vh) !important;\n  border-bottom: 2px solid #b395f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFxREE7RUFDSSxpQkFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBQVo7QUFLQTtFQUNJLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7QUFGSiIsImZpbGUiOiJzdGFnZS1vbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWFpbi10YWItc3dpdGNoZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcblxyXG4ubWFpbi10YWItc3dpdGNoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1haW5BY3RpdmVTd2l0Y2hUcmFpbmluZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzY2MTBmMjtcclxuICAgIGNvbG9yOiAjNjYxMGYyO1xyXG59XHJcblxyXG4ubWFpbkFjdGl2ZVN3aXRjaFByb2R1Y3Rpb24ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM2NjEwZjI7XHJcbiAgICBjb2xvcjogIzY2MTBmMjtcclxufVxyXG5cclxuLnRhYmxlLWJsb2NrIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXNvcnQtaGVhZGVyLXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuICovXHJcblxyXG4ubW9kYWwtZm9vdGVyLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLXRhYi1zd2l0Y2hlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAubWFpbi10YWItc3dpdGNoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHZoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwdmgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHZoKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMzk1ZjEgIWltcG9ydGFudDtcclxufVxyXG4vLyAudGV4dGFyZWEtY3VzdG9tIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4vLyAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbi8vICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuLy8gICAgIG1heC1oZWlnaHQ6IDIwMHB4OyBcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbi8vICAgICByZXNpemU6IG5vbmU7IFxyXG4vLyAgICAgcGFkZGluZzogMTBweDsgXHJcbi8vICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG4vLyB9Il19 */");

/***/ }),

/***/ "CExr":
/*!**************************************************************************!*\
  !*** ./src/app/modules/my-skilling/certificates/certificates.service.ts ***!
  \**************************************************************************/
/*! exports provided: CertificatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesService", function() { return CertificatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth/http.service */ "bnLG");



let CertificatesService = class CertificatesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    //--------------------@saurabh---------------
    //gets certificate data
    getCertificateListData(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get branch access list 
    getBranchAccessListData(url) {
        return this.httpService.getMethod(url);
    }
    // get department list by branch id
    getdepartmentlistbybranchid(url) {
        return this.httpService.getMethod(url);
    }
};
CertificatesService.ctorParameters = () => [
    { type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
CertificatesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], CertificatesService);



/***/ }),

/***/ "Csm4":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/skill-matrix/skill-matrix-details/skill-matrix-details.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SkillMatrixDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixDetailsComponent", function() { return SkillMatrixDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skill_matrix_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skill-matrix-details.component.html */ "m2za");
/* harmony import */ var _skill_matrix_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-matrix-details.component.scss */ "e5O3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skill-matrix.service */ "nc6T");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






let SkillMatrixDetailsComponent = class SkillMatrixDetailsComponent {
    constructor(modalService, appService) {
        this.modalService = modalService;
        this.appService = appService;
        this.userDet = {};
        this.dayList = {};
        this.dayWiseAuditList = {};
        this.ojtRegiDetails = {};
        this.TLDayAudit = [];
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.userDet);
        console.log(this.selectedDetail);
        this.getOJTRegistrationDetails();
    }
    getOJTRegistrationDetails() {
        this.appService.getSkillMatrixetails('apis/sm/getOJTRegistrationDetails/' + this.selectedDetail.ojtRegisId).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.data) {
                    this.ojtRegiDetails = response.data;
                    console.log(this.ojtRegiDetails);
                    if (this.ojtRegiDetails.skillingList != null && this.ojtRegiDetails.skillingList.length > 0) {
                        this.dayWiseAuditList = this.ojtRegiDetails.skillingList;
                        // this.dayList = this.dayWiseAuditList.dayWiseAuditList;
                        console.log(this.dayWiseAuditList);
                    }
                }
                else {
                    this.ojtRegiDetails = [];
                }
            }
            else {
                this.ojtRegiDetails = [];
            }
        });
    }
    checkParameter(parameterList, parameterType) {
        let flag = false;
        let tmpKey = (parameterType) ? parameterType.toLowerCase().trim() : '';
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    getParamaterData(parameterList, parameterType) {
        let flag = false;
        let tmpKey = (parameterType) ? parameterType.toLowerCase().trim() : '';
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return parameterList[index].parameterValue;
                    break;
                }
            }
        }
        return flag;
    }
    isCyclePlan(parameterList) {
        let flag = 0;
        let tmpKey = ('cyclePlan').toLowerCase().trim();
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    if (parameterList[index].hasOwnProperty("cycleValue")) {
                        return parameterList[index].cycleValue;
                    }
                    break;
                }
            }
        }
        return flag;
    }
    getCyclePlanList(parameterList) {
        let flag = false;
        let tmpKey = ('cyclePlan').toLowerCase().trim();
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return parameterList[index].cyclePlanList;
                    break;
                }
            }
        }
        return flag;
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    expand(i, j) {
        this.dayWiseAuditList[i].dayWiseAuditList[j].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].expand;
    }
    assessmentAuditExpand(i, j, k) {
        this.dayWiseAuditList[i].dayWiseAuditList[j].assessmentAudit[k].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].assessmentAudit[k].expand;
    }
    tlAuditExpand(i, j, k) {
        this.dayWiseAuditList[i].dayWiseAuditList[j].tlAudit[k].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].tlAudit[k].expand;
    }
    expandSkilling(i) {
        this.dayWiseAuditList[i].expand = !this.dayWiseAuditList[i].expand;
    }
    getParameterDataByValue(key, index, day) {
        var _a, _b, _c, _d;
        let tmpKey = key;
        if (this.dayWiseAuditList[day].dayWiseAuditList != null) {
            let chkCntr = 0;
            for (let i = 0; i < this.dayWiseAuditList[day].dayWiseAuditList.length; i++) {
                if (!(((_d = (_c = (_b = (_a = this.dayWiseAuditList) === null || _a === void 0 ? void 0 : _a[day]) === null || _b === void 0 ? void 0 : _b.dayWiseAuditList) === null || _c === void 0 ? void 0 : _c[i]) === null || _d === void 0 ? void 0 : _d.dayAudit) === undefined ||
                    this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length === 0)) {
                    for (let j = 0; j < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length; j++) {
                        if (this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList != null && this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length > 0) {
                            for (let k = 0; k < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length; k++) {
                                let tmpParam = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].parameterType;
                                //let prmIndex = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].index;
                                if (tmpKey == tmpParam) {
                                    if (chkCntr == index) {
                                        return this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].parameterValue;
                                    }
                                    chkCntr++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
    getParameterDataByLabel(key, index, day) {
        var _a, _b, _c, _d;
        let tmpKey = key;
        if (this.dayWiseAuditList[day].dayWiseAuditList != null) {
            let chkCntr = 0;
            for (let i = 0; i < this.dayWiseAuditList[day].dayWiseAuditList.length; i++) {
                if (!(((_d = (_c = (_b = (_a = this.dayWiseAuditList) === null || _a === void 0 ? void 0 : _a[day]) === null || _b === void 0 ? void 0 : _b.dayWiseAuditList) === null || _c === void 0 ? void 0 : _c[i]) === null || _d === void 0 ? void 0 : _d.dayAudit) === undefined ||
                    this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length === 0)) {
                    for (let j = 0; j < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length; j++) {
                        if (this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList != null && this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length > 0) {
                            for (let k = 0; k < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length; k++) {
                                let tmpParam = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].parameterType;
                                //let prmIndex = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].index;
                                if (tmpKey == tmpParam) {
                                    if (chkCntr == index) {
                                        return this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].label;
                                    }
                                    chkCntr++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
};
SkillMatrixDetailsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"] }
];
SkillMatrixDetailsComponent.propDecorators = {
    selectedDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
SkillMatrixDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-matrix-details',
        template: _raw_loader_skill_matrix_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_matrix_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]])
], SkillMatrixDetailsComponent);



/***/ }),

/***/ "Cxbq":
/*!*******************************************************************!*\
  !*** ./src/app/modules/my-skilling/my-skilling-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: MySkillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillingRoutingModule", function() { return MySkillingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_skilling_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-skilling.component */ "Jeiv");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/actions.component */ "b8fD");
/* harmony import */ var _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessments/assessments.component */ "lnmk");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./certificates/certificates.component */ "tlPf");
/* harmony import */ var _skill_matrix_skill_matrix_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill-matrix/skill-matrix.component */ "tphk");








const routes = [
    {
        path: '',
        component: _my_skilling_component__WEBPACK_IMPORTED_MODULE_3__["MySkillingComponent"]
    },
    {
        path: 'actions',
        component: _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__["ActionsComponent"]
    },
    {
        path: 'assessments',
        component: _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_5__["AssessmentsComponent"]
    },
    {
        path: 'certificates',
        component: _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_6__["CertificatesComponent"]
    },
    {
        path: 'skillMatrix',
        component: _skill_matrix_skill_matrix_component__WEBPACK_IMPORTED_MODULE_7__["SkillMatrixComponent"]
    }
];
let MySkillingRoutingModule = class MySkillingRoutingModule {
};
MySkillingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MySkillingRoutingModule);



/***/ }),

/***/ "EUn2":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/action-det-cycle/action-det-cycle.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ActionDetCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDetCycleComponent", function() { return ActionDetCycleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_action_det_cycle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./action-det-cycle.component.html */ "VlxY");
/* harmony import */ var _action_det_cycle_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-det-cycle.component.scss */ "GHHc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions.service */ "FTWj");





let ActionDetCycleComponent = class ActionDetCycleComponent {
    constructor(actionsService) {
        this.actionsService = actionsService;
        this.actionDet = {};
        this.productionList = [];
        this.filterFlag = false;
        this.submitSpinner = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: ''
        };
        this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.listLoading = false;
    }
    ngOnInit() {
    }
    getCheckedValue() {
        return true;
    }
    /*
      @DESC : Function to sort table asc dsc
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    sortData(sort) {
        this.sorting = sort;
        this.getProductionList('', false);
    }
    getSearchListTrainingProd(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getProductionList('filter', false);
        }
        else {
            this.getProductionList('', false);
        }
    }
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    removeFilterTrainingProd() {
        this.filterFlag = false;
        this.clearPagination();
        this.getProductionList('', false);
    }
    getProductionList(filterFlag, isClearPagination) {
        // this.productionList = [];
        // let reqBody: any;
        // Object.assign({}, reqBody)
        // this.listLoading = true;
        // if (this.staticPagination.offset > 0 && isClearPagination == true && filterFlag == 'filter') {
        //   this.clearPagination();
        // }
        // if (this.staticPagination.page == 1) {
        //   this.staticPagination.offset = 0;
        // } else {
        //   this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        // }
        // reqBody = {
        //   // "empId": id,
        //   "limit": this.staticPagination.itemsPerPage,
        //   "offset": this.staticPagination.offset
        // }
        // if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
        //   reqBody.search = this.searchDet.searchInput;
        // }
        // if (this.sorting) {
        //   if (this.sorting.direction != "") {
        //     reqBody.colName = this.sorting.active,
        //     reqBody.orderType = this.sorting.direction
        //   }
        // }
        // this.actionsService.getProductionList(reqBody).subscribe((data: any) => {
        //   this.listLoading = false;
        //   if (data.result) {
        //     if (this.staticPagination.page == 1) {
        //       this.staticPagination.total = data.totalMySkillingCount;
        //       this.staticPagination.totalPages = Math.ceil(data.participantList.length / this.staticPagination.itemsPerPage);
        //     }
        //     if (data.participantList != null && data.participantList.length > 0) {
        //       this.productionList = data.participantList;
        //       this.staticPagination.listLength = data.participantList.length;
        //     } else {
        //       this.productionList = []
        //       this.staticPagination.listLength = this.productionList.length;
        //       this.staticPagination.total = this.productionList.length;
        //     }
        //   } else {
        //     this.productionList = []
        //     this.staticPagination.listLength = this.productionList.length;
        //     this.staticPagination.total = this.productionList.length;
        //   }
        // })
    }
    statusUpdate(ev) {
    }
    loadMoreTrainingProd(data) {
        this.staticPagination = data;
        if (this.filterFlag) {
            this.getProductionList('filter', false);
        }
        else {
            this.getProductionList('', false);
        }
    }
};
ActionDetCycleComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"] }
];
ActionDetCycleComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ActionDetCycleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-action-det-cycle',
        template: _raw_loader_action_det_cycle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_action_det_cycle_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"]])
], ActionDetCycleComponent);



/***/ }),

/***/ "FTWj":
/*!****************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/actions.service.ts ***!
  \****************************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth/http.service */ "bnLG");



let ActionsService = class ActionsService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    setGlobalLoader(flag) {
        return flag;
    }
    getBranchAccessList(url) {
        return this.httpService.getMethod(url);
    }
    getDepartmentByBranch(url) {
        return this.httpService.getMethod(url);
    }
    getLineNameList(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    getMasterLevelList(url) {
        return this.httpService.getMethod(url);
    }
    getMasterDepartmentList(url) {
        return this.httpService.getMethod(url);
    }
    getWorkstationList(url, getReq) {
        return this.httpService.postMethod(url, getReq);
    }
    getActionsList(req) {
        return this.httpService.postMethod('apis/sm/getMyActionList', req); //getOJTAssessmentsList
    }
    getMasterUserType() {
        return this.httpService.getMethod('apis/sm/getMasterUserType');
    }
    getUserTypeList(req) {
        return this.httpService.postMethod('apis/sm/getUserTypeList', req);
    }
    getTrainingList(req) {
        return this.httpService.postMethod('apis/sm/getMyActionDetails', req);
    }
    getProductionList(req) {
        return this.httpService.getMethod('');
    }
    getAssessmentDetails(req) {
        return this.httpService.getMethod('apis/sm/getOJTAssessmentDetails/' + req);
    }
    getAssignedAssessmentDetails(req) {
        return this.httpService.getMethod('apis/sm/getAssignedAssessmentDetails/' + req);
    }
    submitStageOneStatus(req) {
        return this.httpService.postMethod('apis/sm/stageOneSubmission', req);
    }
    submitStageTwoStatus(reqBody) {
        return this.httpService.postMethod('apis/sm/stageTwoSubmission', reqBody);
    }
    submitStageThreeStatus(reqBody) {
        return this.httpService.postMethod('apis/sm/stageThreeSubmission', reqBody);
    }
    submitStageFourStatus(reqBody) {
        return this.httpService.postMethod('apis/sm/stageFourSubmission', reqBody);
    }
    getGapReasonList(req) {
        return this.httpService.postMethod('apis/sm/getGapReasonList', req);
    }
    getModelList(req) {
        return this.httpService.postMethod('apis/sm/getModelList', req);
    }
    submitStageFiveStatus(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    stageTwoVerificationSubmission(req) {
        return this.httpService.postMethod('apis/sm/stageTwoVerificationSubmission', req);
    }
    // Aniket
    setRemainingTime(data) {
        return this.httpService.postMethod('apis/sm/updateAssessmentTime', data);
    }
};
ActionsService.ctorParameters = () => [
    { type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
ActionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], ActionsService);



/***/ }),

/***/ "G38m":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-two-verification/stage-two-verification.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <form #myForm=\"ngForm\" (ngSubmit)=\"stageTwoVerificationSubmission('','COMPLETED',myForm.valid)\">\r\n\r\n            <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n                <div *ngIf=\"submitLoading\">\r\n                    <app-loading></app-loading>\r\n                </div>\r\n                <div class=\"modal-body p-t-0 p-b-0\" style=\"padding: 0;\">\r\n                    <div [style.height]=\"'calc(100vh - 38vh)'\">\r\n                        <div class=\"row modal-header stage-header\">\r\n                            <div class=\"col-11\">\r\n                                <div class=\"main-tab-switcher\">\r\n                                    <div class=\"main-tab-switch active\">\r\n                                        <span>Production </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1\">\r\n                                <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n                                    <span>×</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div style=\"height: calc(100vh - 12%);\">\r\n                            <div class=\"table-block\">\r\n                                <div class=\"table-responsive tableFixHead\">\r\n                                    <table class=\"table table-bordered\">\r\n                                        <thead>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <th scope=\"col\" colspan=\"2\">Day</th>\r\n                                                <td>\r\n                                                    {{x.dayNo || ''}}</td>\r\n                                                <th scope=\"col\" colspan=\"2\">Date</th>\r\n                                                <td>\r\n                                                    {{x.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                            </tr>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <th scope=\"col\" *ngIf=\"showCycle != -1\" rowspan=\"2\">Production</th>\r\n                                                <th scope=\"col\" *ngIf=\"showCycle != -1\">Plan</th>\r\n                                                <ng-container *ngIf=\"showCycle != -1\">\r\n                                                    <td colspan=\"4\">\r\n                                                        {{showCycle}}\r\n                                                    </td>\r\n                                                </ng-container>\r\n                                            </tr>\r\n                                            <ng-container *ngIf=\"!trainingProdDetails.parameterList\">\r\n                                                <tr>\r\n                                                    <td colspan=\"6\" style=\"text-align: center; vertical-align: middle;\">\r\n                                                        <div\r\n                                                            style=\"margin-top: 115px; font-size: larger;margin-bottom: 115px;\">\r\n                                                            No verification parameters available</div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <th scope=\"col\" *ngIf=\"showCycle != -1\">Actual <span\r\n                                                        class=\"asterisk\">*</span></th>\r\n                                                <td *ngIf=\"showCycle != -1\" colspan=\"4\">\r\n                                                    <div\r\n                                                        *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                        {{x.productionActual}}</div>\r\n                                                    <input *ngIf=\"actionDet.status == 'PENDING'\" type=\"text\"\r\n                                                        class=\"form-control\" placeholder=\"Enter Value\"\r\n                                                        name=\"parameterValue{{dataIndex}}\"\r\n                                                        [(ngModel)]=\"x.productionActual\" required>\r\n                                                </td>\r\n                                            </tr>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <ng-container *ngIf=\"isVisibleParam('Text')\">\r\n                                                    <th scope=\"col\" colspan=\"2\">{{getParamaterLabelByIndex('Text',\r\n                                                        0)}}<span class=\"asterisk\">*</span>\r\n                                                    </th>\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"isVisibleParam('Text')\">\r\n                                                    <td colspan=\"4\">\r\n                                                        <div\r\n                                                            *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                            {{getParamaterDataByIndex('Text', 0)}}</div>\r\n                                                        <div *ngIf=\"actionDet.status == 'PENDING'\">\r\n                                                            <input type=\"text\" class=\"form-control\" name=\"text\"\r\n                                                                id=\"text\" [(ngModel)]=\"x.text\" placeholder=\"Enter Text\"\r\n                                                                required />\r\n                                                            <!-- (input)=\"onTextChanged($event.target.value, 'Text')\" -->\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </ng-container>\r\n                                            </tr>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <ng-container *ngIf=\"isVisibleParam('Number')\">\r\n                                                    <th scope=\"col\" colspan=\"2\">{{getParamaterLabelByIndex('Number',\r\n                                                        0)}} <span class=\"asterisk\">*</span>\r\n                                                    </th>\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"isVisibleParam('Number')\">\r\n                                                    <td colspan=\"4\">\r\n                                                        <div\r\n                                                            *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                            {{getParamaterDataByIndex('Number', 0)}}</div>\r\n                                                        <div *ngIf=\"actionDet.status == 'PENDING'\">\r\n                                                            <input type=\"number\" class=\"form-control\" name=\"number\"\r\n                                                                id=\"number\" [(ngModel)]=\"x.number\"\r\n                                                                placeholder=\"Enter Number\"\r\n                                                                (input)=\"onNumberChanged($event.target.value, 'Number')\"\r\n                                                                required />\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </ng-container>\r\n                                            </tr>\r\n                                            <ng-container *ngIf=\"getParamaterLabelByIndex('DateTime', 0) != 0\">\r\n                                                <tr\r\n                                                    *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Datetime')\">\r\n                                                        <th scope=\"col\" colspan=\"2\">\r\n                                                            {{getParamaterLabelByIndex('DateTime',\r\n                                                            0)}} <span class=\"asterisk\">*</span>\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Datetime')\">\r\n                                                        <td colspan=\"4\">\r\n                                                            <div\r\n                                                                *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                                {{getParamaterDataByIndex('Datetime', 0)}}</div>\r\n                                                            <div class=\"input-group-prepend\"\r\n                                                                *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                                (click)=\"actualTimeDatePicker.open()\">\r\n                                                                <div class=\"input-group-text\">\r\n                                                                    <i class=\"feather icon-calendar\"></i>\r\n                                                                </div>\r\n                                                                <input matInput [matDatepicker]=\"actualTimeDatePicker\"\r\n                                                                    class=\"form-control datePickInput\" name=\"actualTime\"\r\n                                                                    id=\"actualTimeDatePicker\" [(ngModel)]=\"x.actualTime\"\r\n                                                                    (keydown)=\"false\" placeholder=\"Select Date\"\r\n                                                                    (dateChange)=\"onDateChange(dataIndex, 'actualTime', $event)\"\r\n                                                                    [min]=\"minDate\" required />\r\n                                                            </div>\r\n                                                            <mat-datepicker #actualTimeDatePicker></mat-datepicker>\r\n                                                        </td>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"getParamaterLabelByIndex('DateTime', 1) != 0\">\r\n                                                <tr\r\n                                                    *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Datetime')\">\r\n                                                        <th scope=\"col\" colspan=\"2\">\r\n                                                            {{getParamaterLabelByIndex('DateTime',\r\n                                                            1)}} <span class=\"asterisk\">*</span>\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Datetime')\">\r\n                                                        <td colspan=\"4\">\r\n                                                            <div\r\n                                                                *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                                {{getParamaterDataByIndex('Datetime', 1)}}</div>\r\n                                                            <div class=\"input-group-prepend\"\r\n                                                                *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                                (click)=\"targetTimeDatePicker.open()\">\r\n                                                                <div class=\"input-group-text\">\r\n                                                                    <i class=\"feather icon-calendar\"></i>\r\n                                                                </div>\r\n                                                                <input matInput [matDatepicker]=\"targetTimeDatePicker\"\r\n                                                                    class=\"form-control datePickInput\" name=\"targetTime\"\r\n                                                                    id=\"targetTimeDatePicker\" [(ngModel)]=\"x.targetTime\"\r\n                                                                    (keydown)=\"false\" placeholder=\"Select Date\"\r\n                                                                    (dateChange)=\"onDateChange(dataIndex, 'targetTime', $event)\"\r\n                                                                    [min]=\"minDate\" required />\r\n                                                            </div>\r\n                                                            <mat-datepicker #targetTimeDatePicker></mat-datepicker>\r\n                                                        </td>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"getParamaterLabelByIndex('Model', 0) != 0\">\r\n                                                <tr\r\n                                                    *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Model')\">\r\n                                                        <th scope=\"col\" colspan=\"2\">{{getParamaterLabelByIndex('Model',\r\n                                                            0)}} <span class=\"asterisk\">*</span>\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Model')\">\r\n                                                        <td colspan=\"4\">\r\n                                                            <div\r\n                                                                *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                                {{getParamaterDataByIndex('Model', 0)}}</div>\r\n                                                            <ng-multiselect-dropdown\r\n                                                                *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                                name=\"model{{dataIndex}}\"\r\n                                                                class=\"custom-multiSelection customWidthForInter\"\r\n                                                                placeholder=\"Select Model\" required\r\n                                                                [settings]=\"SingleDropdownModelSettings\"\r\n                                                                [(ngModel)]=\"x.fromModel\" [data]=\"modelList\">\r\n                                                            </ng-multiselect-dropdown>\r\n                                                        </td>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"getParamaterLabelByIndex('Model', 1) != 0\">\r\n                                                <tr\r\n                                                    *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Model')\">\r\n                                                        <th scope=\"col\" colspan=\"2\">{{getParamaterLabelByIndex('Model',\r\n                                                            1)}} <span class=\"asterisk\">*</span>\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isVisibleParam('Model')\">\r\n                                                        <td colspan=\"4\">\r\n                                                            <div\r\n                                                                *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                                {{getParamaterDataByIndex('Model', 1)}}</div>\r\n                                                            <ng-multiselect-dropdown\r\n                                                                *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                                name=\"toModel{{dataIndex}}\"\r\n                                                                class=\"custom-multiSelection customWidthForInter\"\r\n                                                                placeholder=\"Select Model\" required\r\n                                                                [settings]=\"SingleDropdownModelSettings\"\r\n                                                                [(ngModel)]=\"x.toModel\" [data]=\"modelList\">\r\n                                                            </ng-multiselect-dropdown>\r\n                                                        </td>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </ng-container>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <ng-container *ngIf=\"isVisibleParam('Gap')\">\r\n                                                    <th *ngIf=\"actionDet.status == 'PENDING'\" scope=\"col\" colspan=\"2\">\r\n                                                        Gap<span class=\"asterisk\">*</span>\r\n                                                    </th>\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"isVisibleParam('Gap')\">\r\n                                                    <td colspan=\"4\" *ngIf=\"actionDet.status == 'PENDING'\">\r\n                                                        <select *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                            class=\"custom-selectField form-control\"\r\n                                                            name=\"gap{{dataIndex}}\" required\r\n                                                            (change)=\"onChangeComplete($event, x)\" [(ngModel)]=\"x.gap\">\r\n                                                            <option value=\"\">Select Status</option>\r\n                                                            <option value=\"Yes\">Yes</option>\r\n                                                            <option value=\"No\">No</option>\r\n                                                        </select>\r\n                                                    </td>\r\n                                                </ng-container>\r\n                                            </tr>\r\n                                            <tr\r\n                                                *ngFor=\"let x of trainingProdDetails.auditPointList;let dataIndex = index\">\r\n                                                <ng-container *ngIf=\"isVisibleParam('Gap')\">\r\n                                                    <th scope=\"col\" colspan=\"2\">Gap Reason <span\r\n                                                            class=\"asterisk\">*</span></th>\r\n                                                </ng-container>\r\n                                                <ng-container *ngIf=\"isVisibleParam('Gap')\">\r\n                                                    <td colspan=\"4\">\r\n                                                        <div\r\n                                                            *ngIf=\"actionDet.status == 'COMPLETED' || actionDet.status == 'REJECTED'\">\r\n                                                            {{x.gapReason || \"No\"}}</div>\r\n                                                        <ng-multiselect-dropdown *ngIf=\"actionDet.status == 'PENDING'\"\r\n                                                            name=\"gapReason{{dataIndex}}\"\r\n                                                            class=\"custom-multiSelection customWidthForInter\"\r\n                                                            placeholder=\"Select Gap Reason\" [disabled]=\"x.gap == 'No'\"\r\n                                                            [settings]=\"SingleDropdownSettings\"\r\n                                                            (onSelect)=\"onChange($event)\" [(ngModel)]=\"x.gapReason\"\r\n                                                            [data]=\"gapReasonList\" [required]=\"x.gap === 'Yes'\">\r\n                                                        </ng-multiselect-dropdown>\r\n                                                        <textarea *ngIf=\"isOtherReason && x.gap == 'Yes'\"\r\n                                                            class=\"form-control textarea-custom\" id=\"gapOtherReason\"\r\n                                                            name=\"gapOtherReason\" [(ngModel)]=\"x.gapOtherReason\"\r\n                                                            rows=\"2\" placeholder=\"Enter other gap reason\"\r\n                                                            [maxlength]=\"250\"></textarea>\r\n                                                    </td>\r\n                                                </ng-container>\r\n                                            </tr>\r\n                                            <ng-container *ngIf=\"isVisibleParam('cyclePlan')\">\r\n                                                <ng-container\r\n                                                    *ngFor=\"let cycle of trainingProdDetails.cyclePlanList; let cycleIndex = index\">\r\n                                                    <tr>\r\n                                                        <th scope=\"col\" rowspan=\"2\" style=\"text-align: center;\">Cycle {{\r\n                                                            cycleIndex + 1 }}</th>\r\n                                                        <th scope=\"col\">Standard <span class=\"asterisk\">*</span></th>\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let x of trainingProdDetails.auditPointList; let dataIndex = index\">\r\n                                                            <td colspan=\"4\">\r\n                                                                <div\r\n                                                                    *ngIf=\"isStatusCompletedOrRejected(actionDet.status)\">\r\n                                                                    {{ cycle.expectedValue }}\r\n                                                                </div>\r\n                                                                <input *ngIf=\"actionDet.status == 'PENDING'\" type=\"text\"\r\n                                                                    class=\"form-control\"\r\n                                                                    name=\"expectedCycleVal{{ cycleIndex + '_' + dataIndex }}\"\r\n                                                                    placeholder=\"Enter standard value\" required\r\n                                                                    [(ngModel)]=\"cycle.expectedValue\">\r\n                                                            </td>\r\n                                                        </ng-container>\r\n                                                    </tr>\r\n                                                    <tr>\r\n                                                        <th scope=\"col\">Actual <span class=\"asterisk\">*</span></th>\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let x of trainingProdDetails.auditPointList; let dataIndex = index\">\r\n\r\n                                                            <td colspan=\"4\">\r\n                                                                <div\r\n                                                                    *ngIf=\"isStatusCompletedOrRejected(actionDet.status)\">\r\n                                                                    {{ cycle.actualValue }}\r\n                                                                </div>\r\n                                                                <input *ngIf=\"actionDet.status == 'PENDING'\" type=\"text\"\r\n                                                                    class=\"form-control\"\r\n                                                                    name=\"actualCycleVal{{ cycleIndex + '_' + dataIndex }}\"\r\n                                                                    placeholder=\"Enter actual value\"\r\n                                                                    [(ngModel)]=\"cycle.actualValue\" required>\r\n                                                            </td>\r\n                                                        </ng-container>\r\n                                                    </tr>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </thead>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-0\"\r\n                    *ngIf=\"trainingProdDetails.auditPointList && trainingProdDetails.auditPointList[0].oeComment?.trim()\">\r\n                    <div class=\"col-12\" style=\"display: inline-flex; padding-bottom: 10px;\">\r\n                        <label for=\"oeComment\" class=\"col-form-label\" style=\"margin-right: 10px; width: 12.5rem;\">\r\n                            OE Comment:\r\n                        </label>\r\n                        <textarea class=\"form-control textarea-custom\" id=\"oeComment\" name=\"oeComment\"\r\n                            [(ngModel)]=\"trainingProdDetails.auditPointList[0].oeComment\" rows=\"2\" placeholder=\"Comment\"\r\n                            disabled [maxlength]=\"1000\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row m-0\"\r\n                    *ngIf=\"trainingProdDetails.auditPointList && trainingProdDetails.auditPointList[0].trainerActComment?.trim()\">\r\n                    <div class=\"col-12\" style=\"display: inline-flex; padding-bottom: 10px;\">\r\n                        <label for=\"trainerActComment\" class=\"col-form-label\"\r\n                            style=\"margin-right: 10px; width: 12.5rem;\">\r\n                            Trainer Activity Comment:\r\n                        </label>\r\n                        <textarea class=\"form-control textarea-custom\" id=\"trainerActComment\" name=\"trainerActComment\"\r\n                            [(ngModel)]=\"trainingProdDetails.auditPointList[0].trainerActComment\" rows=\"2\"\r\n                            placeholder=\"Comment\" disabled [maxlength]=\"1000\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"modal-footer text-right pad0 paginationFooter\">\r\n                    <ng-container *ngIf=\"actionDet.status == 'PENDING'\">\r\n                        <button type=\"submit\" class=\"btn submitBtn\" [ngClass]=\"{'disable-btn' : myForm.invalid }\"\r\n                            style=\"background: #7044cd;\">Approve</button>\r\n                        <button type=\"button\" class=\"btn submitBtn\"\r\n                            (click)=\"stageTwoVerificationSubmission('','REJECTED',true)\"\r\n                            style=\"margin-left: 10px; background: #f20000;\">Reject</button>\r\n                    </ng-container>\r\n                    <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "GHHc":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/action-det-cycle/action-det-cycle.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-header {\n  border-bottom: 2px solid #c8e4f5 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFjdGlvbi1kZXQtY3ljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtBQUNKIiwiZmlsZSI6ImFjdGlvbi1kZXQtY3ljbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYzhlNGY1ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "Jeiv":
/*!**************************************************************!*\
  !*** ./src/app/modules/my-skilling/my-skilling.component.ts ***!
  \**************************************************************/
/*! exports provided: MySkillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MySkillingComponent", function() { return MySkillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_skilling_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-skilling.component.html */ "A3oa");
/* harmony import */ var _my_skilling_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-skilling.component.scss */ "vzXo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MySkillingComponent = class MySkillingComponent {
    constructor() { }
    ngOnInit() {
    }
};
MySkillingComponent.ctorParameters = () => [];
MySkillingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-skilling',
        template: _raw_loader_my_skilling_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_skilling_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MySkillingComponent);



/***/ }),

/***/ "OVBF":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-three/stage-three.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StageThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageThreeComponent", function() { return StageThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_three_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-three.component.html */ "iZdW");
/* harmony import */ var _stage_three_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-three.component.scss */ "RwX+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var _actions_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions.constant */ "yuR8");








let StageThreeComponent = class StageThreeComponent {
    constructor(actionsService, modalService, alertService, Constant) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.mainTab = 1;
        this.filterFlag = false;
        this.submitLoading = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: '',
            masterSelected: ''
        };
        this.listLoading = false;
        this.trainingProdDetails = [];
        this.completedBtnStatus = false;
        this.notCompletedBtnStatus = false;
        this.userDet = {};
        this.constant = {};
        this.isDisableStatus = false;
        this.enableCompletedBtn = false;
        /*
          @DESC : Returns selected tab id
          @Author: Jayshri Kolase
          @Date : 06 Sep 2023
        */
        this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
        };
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.actionDet);
        this.getTrainingList();
    }
    /*
      @DESC : Selects tab
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    setMainTab(tabId) {
        this.mainTab = tabId;
        this.getTrainingList();
        // if (this.mainTab == 1) {
        //   this.getTrainingList();
        // } 
    }
    ;
    /*
      @DESC : Calls api and show training task list in table
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    getTrainingList() {
        this.trainingProdDetails.auditPointList = [];
        let reqBody = {};
        this.listLoading = true;
        reqBody = {
            "skillingId": this.actionDet.skillingId,
            "skillingAuditId": this.actionDet.auditId //auditId
        };
        this.actionsService.getTrainingList(reqBody).subscribe((response) => {
            this.listLoading = false;
            if (response.result) {
                if (response.actionDetails) {
                    if (response.actionDetails.auditPointList != null && response.actionDetails.auditPointList) {
                        for (let index = 0; index < response.actionDetails.auditPointList.length; index++) {
                            response.actionDetails.auditPointList[index].selectedStatus = '';
                        }
                    }
                    else {
                        this.trainingProdDetails.auditPointList = [];
                    }
                    this.trainingProdDetails = response.actionDetails;
                    this.showCycle = response.actionDetails.parameterList.filter(x => x.parameterType == 'cyclePlan')[0].cycleValue;
                }
                else {
                    this.trainingProdDetails.auditPointList = [];
                }
            }
            else {
                this.trainingProdDetails.auditPointList = [];
            }
        }, (error) => {
        });
    }
    /*
      @DESC : Sort table
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    sortData(sort) {
        this.sorting = sort;
        if (this.mainTab == 1) {
            this.getTrainingList();
        }
    }
    onChangeComplete(event, data) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                // this.trainingProdDetails.auditPointList.forEach(element => {
                //   if (element.id == data.id) {
                //     element.selectedStatus = event.target.value;
                //   }
                // });
                let selectStatusLength = this.trainingProdDetails.auditPointList.filter(x => x.selectedStatus == event.target.value).length;
                this.searchDet.masterSelected = (selectStatusLength == this.trainingProdDetails.auditPointList.length) ? event.target.value : '';
            }
            this.isCompletedAllSelected();
        }
    }
    onChangeCompleteAll(event) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                this.trainingProdDetails.auditPointList.forEach(element => {
                    element.selectedStatus = event.target.value;
                });
                this.searchDet.masterSelected = event.target.value;
                this.isCompletedAllSelected();
            }
        }
    }
    // isCompletedAll() {
    //   this.enableCompletedBtn = true;
    //   this.trainingProdDetails.auditPointList.forEach(element => {
    //     if (element.status !== "COMPLETED") {
    //       this.enableCompletedBtn = false;
    //     }
    //     else {
    //       element.completed = "COMPLETED";
    //     }
    //   });
    // }
    isCompletedAllSelected() {
        this.enableCompletedBtn = false; // Set to false by default
        this.trainingProdDetails.auditPointList.forEach(element => {
            if (element.selectedStatus === "COMPLETED") {
                this.enableCompletedBtn = true;
            }
        });
    }
    submitStageThreeStatus(status) {
        if (status) {
            if (!this.enableCompletedBtn) {
                this.alertService.error("Please select status of each row as YES.");
                return;
            }
            if (this.trainingProdDetails.comment == null || this.trainingProdDetails.comment == undefined || this.trainingProdDetails.comment == '') {
                this.submitLoading = false;
                this.alertService.error('Please enter comment.');
                return;
            }
        }
        if (this.trainingProdDetails.comment == null || this.trainingProdDetails.comment == undefined || this.trainingProdDetails.comment == '') {
            this.submitLoading = false;
            this.alertService.error('Please enter comment.');
            return;
        }
        this.submitLoading = true;
        let auditList = [];
        this.trainingProdDetails.auditPointList.forEach(element => {
            auditList.push({
                id: element.pointAuditId,
                status: element.selectedStatus,
                skillingAuditId: element.skillingAuditId,
                ojtPointId: element.ojtPointId,
                checksheetPointId: element.checksheetPointId,
            });
        });
        // if (auditList != null && auditList.filter(x => x.status == this.constant.COMPLETED).length != this.trainingProdDetails.auditPointList.length) {
        //   this.submitLoading = false;
        //   this.alertService.error('Please select status of each row as YES.');
        //   return;
        // }
        let reqBody;
        reqBody = {
            // empId: 36,
            dayNo: this.trainingProdDetails.auditPointList[0].dayNo,
            oeEmpId: this.trainingProdDetails.oeEmpId,
            branchId: this.trainingProdDetails.branchId,
            skillLevelId: this.trainingProdDetails.levelId,
            deptId: this.trainingProdDetails.deptId,
            lineId: this.trainingProdDetails.lineId,
            stageId: this.trainingProdDetails.stageId,
            workstationId: this.trainingProdDetails.workstationId,
            skillingAuditId: this.trainingProdDetails.skillingAuditId,
            status: status ? "COMPLETED" : "NOT COMPLETED",
            comment: this.trainingProdDetails.comment,
            skillingId: this.trainingProdDetails.skillingId,
            checkSheetId: this.trainingProdDetails.checksheetId,
            skillingChecksheetId: this.trainingProdDetails.skillingChecksheetId,
            csPointAuditList: auditList,
            tlEmpId: this.trainingProdDetails.tlEmpId,
            ojtRegiId: this.trainingProdDetails.ojtRegiId
        };
        console.log(reqBody);
        this.actionsService.submitStageThreeStatus(reqBody).subscribe((data) => {
            this.submitLoading = false;
            if (data.result) {
                this.alertService.success("Activity Submitted Successfully.");
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again");
                }
            }
        }, (error) => {
            this.submitLoading = false;
        });
    }
    getCycleValue() {
        let tmpKey = 'cyclePlan';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType;
                if (tmpKey.toLowerCase().trim() == tmpParam.toLowerCase().trim()) {
                    return this.trainingProdDetails.parameterList[index].cycleValue;
                }
            }
        }
        return 0;
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    isVisibleParam(key) {
        let flag = false;
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    getParamaterDataByIndex(key, index) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            let chkCntr = 0;
            for (let i = 0; i < this.trainingProdDetails.parameterList.length; i++) {
                let tmpParam = this.trainingProdDetails.parameterList[i].parameterType.toLowerCase().trim();
                //let prmIndex = this.trainingProdDetails.parameterList[i].index;
                if (tmpKey == tmpParam) {
                    if (chkCntr == index) {
                        return this.trainingProdDetails.parameterList[i].parameterValue;
                    }
                    chkCntr++;
                }
            }
        }
        return 0;
    }
    getParamaterLabelByIndex(key, index) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            let chkCntr = 0;
            for (let i = 0; i < this.trainingProdDetails.parameterList.length; i++) {
                let tmpParam = this.trainingProdDetails.parameterList[i].parameterType.toLowerCase().trim();
                //let prmIndex = this.trainingProdDetails.parameterList[i].index;
                if (tmpKey == tmpParam) {
                    if (chkCntr == index) {
                        return this.trainingProdDetails.parameterList[i].label;
                    }
                    chkCntr++;
                }
            }
        }
        return 0;
    }
};
StageThreeComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
StageThreeComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
StageThreeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-three',
        template: _raw_loader_stage_three_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: 'Constant', useValue: _actions_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"] }
        ],
        styles: [_stage_three_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"], Object])
], StageThreeComponent);



/***/ }),

/***/ "QLaw":
/*!********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-four/stage-four.component.ts ***!
  \********************************************************************************/
/*! exports provided: StageFourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageFourComponent", function() { return StageFourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_four_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-four.component.html */ "wA3j");
/* harmony import */ var _stage_four_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-four.component.scss */ "fIuR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var _actions_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions.constant */ "yuR8");








let StageFourComponent = class StageFourComponent {
    constructor(actionsService, modalService, alertService, Constant) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.submitLoading = false;
        this.trainingDet = {};
        this.listLoading = false;
        this.userDet = {};
        this.constant = {};
        this.dayList = [];
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.actionDet);
        this.getTrainingList();
    }
    /*
      @DESC : Calls api and show training task list in table
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    getTrainingList() {
        this.submitLoading = true;
        this.trainingDet.auditPointList = [];
        let reqBody = {};
        this.listLoading = true;
        reqBody = {
            // "skillingId": 114,
            // "stageId": 5,
            // "skillingAuditId": 284
            "skillingId": this.actionDet.skillingId,
            "stageId": 5,
            "skillingAuditId": this.actionDet.auditId
        };
        this.actionsService.getTrainingList(reqBody).subscribe((response) => {
            this.submitLoading = false;
            if (response.result) {
                if (response.dayWiseAuditList) {
                    this.dayList = response.dayWiseAuditList;
                    console.log(this.dayList);
                    if (this.dayList != null && this.dayList.length > 0) {
                        for (let i = 0; i < this.dayList.length; i++) {
                            for (let j = 0; j < this.dayList[i].dayAudit.length; j++) {
                                if (this.dayList[i].dayAudit[j].stage == "TL Verification" && this.dayList[i].dayAudit[j].status == "COMPLETED") {
                                    this.trainingDet.comment = this.dayList[i].dayAudit[j].comment;
                                }
                            }
                        }
                    }
                }
                else {
                    this.dayList = [];
                }
            }
            else {
                this.dayList = [];
            }
        }, (error) => {
            this.submitLoading = false;
        });
    }
    submitStageFourStatus(status) {
        if (this.trainingDet.comment == null || this.trainingDet.comment == undefined || this.trainingDet.comment == '') {
            this.submitLoading = false;
            this.alertService.error('Please enter comment.');
            return;
        }
        this.submitLoading = true;
        let reqBody;
        reqBody = {
            status: status ? "COMPLETED" : "NOT COMPLETED",
            skillingId: this.dayList[0].dayAudit[0].skillingId,
            desiredSkillLevelId: this.dayList[0].dayAudit[0].levelId,
            skillingAuditId: this.actionDet.auditId,
            comment: this.trainingDet.comment,
            checkSheetId: this.dayList[0].dayAudit[0].checksheetId,
            ojtRegiId: this.dayList[0].dayAudit[0].ojtRegiId,
            empId: this.userDet.empId,
            oeEmpId: this.dayList[0].dayAudit[0].oeEmpId,
            branchId: this.dayList[0].dayAudit[0].branchId,
            deptId: this.dayList[0].dayAudit[0].deptId,
            lineId: this.dayList[0].dayAudit[0].lineId,
            workstationId: this.dayList[0].dayAudit[0].workstationId,
            updatedBy: this.userDet.empId,
            createdBy: this.userDet.empId
        };
        console.log(reqBody);
        this.actionsService.submitStageFourStatus(reqBody).subscribe((data) => {
            this.submitLoading = false;
            if (data.result) {
                this.alertService.success("Activity Submitted Successfully.");
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again");
                }
            }
        }, (error) => {
            this.submitLoading = false;
        });
    }
    checkParameter(parameterList, parameterType) {
        let flag = false;
        let tmpKey = (parameterType) ? parameterType.toLowerCase().trim() : '';
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    getParameterDataByKey(data, key) {
        if (data.parameterValue === key) {
            return data.parameter;
        }
        return 0;
    }
    getParameterDataByValue(key, index) {
        var _a, _b;
        let tmpKey = key;
        if (this.dayList != null) {
            let chkCntr = 0;
            for (let i = 0; i < this.dayList.length; i++) {
                if (((_b = (_a = this.dayList) === null || _a === void 0 ? void 0 : _a[i]) === null || _b === void 0 ? void 0 : _b.dayAudit) !== undefined && this.dayList[i].dayAudit.length > 0) {
                    for (let j = 0; j < this.dayList[i].dayAudit.length; j++) {
                        if (this.dayList[i].dayAudit[j].parameterList != null && this.dayList[i].dayAudit[j].parameterList.length > 0) {
                            for (let k = 0; k < this.dayList[i].dayAudit[j].parameterList.length; k++) {
                                let tmpParam = this.dayList[i].dayAudit[j].parameterList[k].parameterType;
                                //let prmIndex = this.dayList[i].dayAudit[j].parameterList[k].index;
                                if (tmpKey == tmpParam) {
                                    if (chkCntr == index) {
                                        return this.dayList[i].dayAudit[j].parameterList[k].parameterValue;
                                    }
                                    chkCntr++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
    getParameterDataByLabel(key, index) {
        var _a, _b;
        let tmpKey = key;
        if (this.dayList != null) {
            let chkCntr = 0;
            for (let i = 0; i < this.dayList.length; i++) {
                if (((_b = (_a = this.dayList) === null || _a === void 0 ? void 0 : _a[i]) === null || _b === void 0 ? void 0 : _b.dayAudit) !== undefined && this.dayList[i].dayAudit.length > 0) {
                    for (let j = 0; j < this.dayList[i].dayAudit.length; j++) {
                        if (this.dayList[i].dayAudit[j].parameterList != null && this.dayList[i].dayAudit[j].parameterList.length > 0) {
                            for (let k = 0; k < this.dayList[i].dayAudit[j].parameterList.length; k++) {
                                let tmpParam = this.dayList[i].dayAudit[j].parameterList[k].parameterType;
                                //let prmIndex = this.dayList[i].dayAudit[j].parameterList[k].index;
                                if (tmpKey == tmpParam) {
                                    if (chkCntr == index) {
                                        return this.dayList[i].dayAudit[j].parameterList[k].label;
                                    }
                                    chkCntr++;
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0;
    }
    getParamaterData(parameterList, parameterType) {
        let flag = false;
        let tmpKey = (parameterType) ? parameterType.toLowerCase().trim() : '';
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    if (tmpParam == "gap" && tmpKey == "gap") {
                        if (parameterList[index].parameterValue == null || parameterList[index].parameterValue == '') {
                            return "No";
                            break;
                        }
                        else {
                            return parameterList[index].parameterValue;
                            break;
                        }
                    }
                    else {
                        return parameterList[index].parameterValue;
                        break;
                    }
                }
            }
        }
        return flag;
    }
    isCyclePlan(parameterList) {
        let flag = 0;
        let tmpKey = ('cyclePlan').toLowerCase().trim();
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    if (parameterList[index].hasOwnProperty("cycleValue")) {
                        return parameterList[index].cycleValue;
                    }
                    break;
                }
            }
        }
        return flag;
    }
    getCyclePlanList(parameterList) {
        let flag = false;
        let tmpKey = ('cyclePlan').toLowerCase().trim();
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return parameterList[index].cyclePlanList;
                    break;
                }
            }
        }
        return flag;
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    expand(i) {
        this.dayList[i].expand = !this.dayList[i].expand;
    }
};
StageFourComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
StageFourComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
StageFourComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-four',
        template: _raw_loader_stage_four_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: 'Constant', useValue: _actions_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"] }
        ],
        styles: [_stage_four_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"], Object])
], StageFourComponent);



/***/ }),

/***/ "QTPD":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/assessments/assessments.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Assessments\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n\r\n    <div class=\"extraContent p-l-15 p-r-15\">\r\n        <div class=\"p-0\" [ngClass]=\"searchDet.isUpload ? 'col-6' : 'col-4'\">\r\n            <div class=\"row m-0\">\r\n                <!-- <div [ngClass]=\"(searchDet.filterFlag)?'col-5':''\" *ngIf=\"searchDet.filterFlag && !searchDet.isUpload\">\r\n                    <div class=\"filterDiv\" style=\"bottom: 0 !important;\">\r\n                        <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp; <span\r\n                            style=\"color: green;font-size: 12px; font-weight: 500;\">Applied</span>\r\n                    </div>\r\n                </div> -->\r\n                <!-- <div [ngClass]=\"(searchDet.filterFlag)?'col-7':'col-12'\"> -->\r\n                <div class=\"col-12\">\r\n                    <div class=\"form-group has-search\" *ngIf=\"!isUpload\">\r\n                        <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                            (click)=\"getSearchList(true)\"></span>\r\n                        <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                            (click)=\"getSearchList(false)\"></span>\r\n                        <input type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                            placeholder=\"Search By Assessment Title\" [(ngModel)]=\"searchDet.searchInput\"\r\n                            (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                            style=\"padding-right: 2.4rem;\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th class=\"\" mat-sort-header=\"DeptName\">Department</th>\r\n                        <!-- <th class=\"\" mat-sort-header=\"Line\">Cell/Line</th> -->\r\n                        <th class=\"\" mat-sort-header=\"EmpId\">Emp Id</th>\r\n                        <th class=\"\" mat-sort-header=\"EmpName\">Emp Name</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentTitle\">Assessment Title</th>\r\n                        <th class=\"\" mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th class=\"\" mat-sort-header=\"LevelName\">Level</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentType\">Assessment Type</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentDate\">Assessment Date</th>\r\n                        <th class=\"\" mat-sort-header=\"Score\">Score</th>\r\n                        <th class=\"\" mat-sort-header=\"Score\">Percentage</th>\r\n                        <th class=\"actionTh fixedColumn\" mat-sort-header=\"Status\">Status</th>\r\n                        <!-- <th class=\"actionTh fixedColumn\">Action</th> -->\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of assessementList\">\r\n                        <td class=\"actionTd fixedColumn\">{{item.branchName}}</td>\r\n                        <td>{{item.deptName}}</td>\r\n                        <!-- <td>{{x.lineName}}</td> -->\r\n                        <td>{{item.cmpEmpId}}</td>\r\n                        <td>{{item.empName}}</td>\r\n                        <td>{{item.title}}</td>\r\n                        <td>{{item.workstationName}}</td>\r\n                        <td>{{item.levelName || 'N/A'}}</td>\r\n                        <td>{{item.assessmentType || 'N/A'}}</td>\r\n                        <td>{{(item.assessmentDate) ? (item.assessmentDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <td>{{item.score}}</td>\r\n                        <td>{{item.percentage}}%</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING','completed':item.status == 'PASS','not-completed':item.status == 'FAIL'}\">\r\n                            {{item.status}}\r\n                        </td>\r\n                        <!-- <td class=\"actionTd fixedColumn\">\r\n                            <i class=\"fa fa-eye viewIcon\" (click)=\"openViewModal(assessmentDetail,item)\"\r\n                                style=\"cursor: pointer;\"></i>\r\n                        </td> -->\r\n                    </tr>\r\n                    <tr *ngIf=\"(assessementList == null || assessementList.length == 0)\">\r\n                        <td colspan=\"8\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            <!-- *ngIf=\"!listLoading\" -->\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"8\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"\r\n                [submitButton]=\"getCheckedValue()\" [submitSpinner]=\"submitSpinner\" (submitData)=\"statusUpdate($event)\"\r\n                [buttonLabel]=\"'Submit'\">\r\n        </app-pagination> -->\r\n    </div>\r\n\r\n    <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n</div>\r\n\r\n\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'plant')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branchId\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(masterDeptList,'dept')\" formControlName=\"deptIds\"\r\n                            [(ngModel)]=\"searchDet.deptIds\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cell\" id=\"cell\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"cell\" [data]=\"getSortFunction(searchDet.cellList,'cell')\"\r\n                            [disabled]=\"false\" [(ngModel)]=\"searchDet.lineIds\" (onSelect)=\"onChange($event,'cell')\"\r\n                            (onDeSelect)=\"onChange(false,'cell')\" (onSelectAll)=\"onChangeAll($event,'cell')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'cell')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['cell'].invalid && (filterData.controls['cell'].touched || filterData.controls['cell'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['cell'].errors.required\">\r\n                                Please select Cell/Line\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row m-b-0\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvlId\" id=\"skillLvlId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\" [data]=\"masterLevelList\"\r\n                            formControlName=\"skillLvlId\" [(ngModel)]=\"searchDet.masterLevel\"\r\n                            (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"filterData.controls['skillLvlId'].invalid && (filterData.controls['skillLvlId'].touched || filterData.controls['skillLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['skillLvlId'].errors.required\">\r\n                                Please Select Level\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Workstation</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"masterWorkList\" id=\"masterWorkList\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"masterWork\" [data]=\"getSortFunction(masterWorkList,'work')\"\r\n                            [disabled]=\"false\" [(ngModel)]=\"searchDet.masterWorkList\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['masterWork'].invalid && (filterData.controls['masterWork'].touched || filterData.controls['masterWork'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['masterWork'].errors.required\">\r\n                                Please select workstation\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n\r\n\r\n<ng-template #assessmentDetail let-c=\"close\">\r\n    <app-assessessment-detail-modal [selectedDetail]=\"selectedRecForModal\">\r\n    </app-assessessment-detail-modal>\r\n</ng-template>");

/***/ }),

/***/ "RwX+":
/*!************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-three/stage-three.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-tab-switcher {\n  padding: 0px !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  border-radius: 0px !important;\n  margin: 0px !important;\n  left: 0px !important;\n}\n.main-tab-switcher .main-tab-switch {\n  padding: 10px 20px;\n}\n.main-tab-switcher .main-tab-switch.active {\n  background: #7044cd;\n  color: #fff;\n}\n.stageTwoVerifyHeader {\n  padding: 0px 10px 0px 0px !important;\n}\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n.tableFixHead table thead th {\n  vertical-align: middle;\n  text-align: center;\n}\n.tableFixHead {\n  overflow-y: auto !important;\n  max-height: calc(100vh - 50vh) !important;\n  min-height: calc(100vh - 50vh) !important;\n  height: calc(100vh - 50vh) !important;\n  border-bottom: 2px solid #b395f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLXRocmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFEUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUdaO0FBQ0E7RUFDSSxvQ0FBQTtBQUVKO0FBQUE7RUFDSSxpQkFBQTtBQUdKO0FBQ1E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBRVo7QUFHQTtFQUNJLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7QUFBSiIsImZpbGUiOiJzdGFnZS10aHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXRhYi1zd2l0Y2hlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC5tYWluLXRhYi1zd2l0Y2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc3RhZ2VUd29WZXJpZnlIZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5tb2RhbC1mb290ZXIucGFnaW5hdGlvbkZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4udGFibGVGaXhIZWFkIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICB0aGVhZCB0aCB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbi50YWJsZUZpeEhlYWQge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDUwdmgpICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTB2aCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwdmgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IzOTVmMSAhaW1wb3J0YW50O1xyXG59XHJcbi8vIC50ZXh0YXJlYS1jdXN0b20ge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbi8vICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBcclxuLy8gICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4vLyAgICAgbWF4LWhlaWdodDogMjAwcHg7IFxyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWluLWhlaWdodDogNjVweDtcclxuLy8gICAgIHJlc2l6ZTogbm9uZTsgXHJcbi8vICAgICBwYWRkaW5nOiAxMHB4OyBcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjsgXHJcbi8vIH0iXX0= */");

/***/ }),

/***/ "TIRe":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-two-verification/stage-two-verification.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: StageTwoVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageTwoVerificationComponent", function() { return StageTwoVerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_two_verification_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-two-verification.component.html */ "G38m");
/* harmony import */ var _stage_two_verification_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-two-verification.component.scss */ "0C3Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let StageTwoVerificationComponent = class StageTwoVerificationComponent {
    //completedBtnStatus: boolean = false;
    //notCompletedBtnStatus: boolean = false;
    constructor(modalService, actionsService, alertService) {
        this.modalService = modalService;
        this.actionsService = actionsService;
        this.alertService = alertService;
        this.trainingProdDetails = [];
        this.listLoading = false;
        this.userDet = {};
        this.stage2Verify = {};
        this.SingleDropdownSettings = {};
        this.SingleDropdownModelSettings = {};
        this.gapReasonList = [];
        this.gapReasonResetList = [];
        this.modelList = [];
        this.mainAuditPointList = [];
        this.isGap = false;
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_7__();
        this.actualDate = new Date();
        this.showCycle = -1;
        this.submitLoading = false;
        this.isOtherReason = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        const today = new Date();
        this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        this.getTrainingList();
        this.getGapReasonList();
        this.getModelList();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'reason',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.SingleDropdownModelSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'modelName',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    onDateChange(index, key, date) {
        this.trainingProdDetails.auditPointList[index][key] = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(date.value)).format("YYYY-MM-DD");
    }
    /*
     @DESC : Calls api and show training task list in table
     @Author: Jayshri Kolase
     @Date : 06 Sep 2023
   */
    getTrainingList() {
        this.trainingProdDetails = {};
        this.listLoading = true;
        let reqBody = {
            "skillingId": this.actionDet.skillingId,
            "skillingAuditId": this.actionDet.auditId //auditId
            //"skillingId": 70, //this.actionDet.skillingId,
            //"skillingAuditId": 107, //this.actionDet.auditId //auditId
            // "skillingId": 13, //this.actionDet.skillingId,
            // "skillingAuditId": 138, //this.actionDet.auditId //auditId 13 138 for from to model
        };
        this.actionsService.getTrainingList(reqBody).subscribe((response) => {
            this.listLoading = false;
            if (response.result) {
                if (response.actionDetails) {
                    if (response.actionDetails.auditPointList != null && response.actionDetails.auditPointList) {
                        for (let index = 0; index < response.actionDetails.auditPointList.length; index++) {
                            response.actionDetails.auditPointList[index].gap = '';
                            response.actionDetails.auditPointList[index].gapReason = '';
                            response.actionDetails.auditPointList[index].parameterValue = '';
                            response.actionDetails.auditPointList[index].planProduction = '';
                            response.actionDetails.auditPointList[index].expectedValue = '';
                            response.actionDetails.auditPointList[index].actualValue = '';
                            // response.actionDetails.auditPointList[index].targetTime = '';
                            response.actionDetails.auditPointList[index].text = '';
                            response.actionDetails.auditPointList[index].number = '';
                        }
                    }
                    else {
                        this.trainingProdDetails.auditPointList = [];
                    }
                    this.mainAuditPointList = response.actionDetails.auditPointList;
                    response.actionDetails.auditPointList = [response.actionDetails.auditPointList[0]];
                    this.trainingProdDetails = response.actionDetails;
                    console.log(this.trainingProdDetails);
                    this.trainingProdDetails.cyclePlanList = [];
                    // if (this.actionDet.status == 'COMPLETED') { 
                    //   if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                    //     for (let index = 0; index < this.trainingProdDetails.auditPointList.length; index++) {
                    //       if()
                    //     }
                    //   }
                    // }
                    if (response.actionDetails.parameterList != null) {
                        let textParameters = response.actionDetails.parameterList.filter(x => x.parameterType === 'Text');
                        this.trainingProdDetails.auditPointList.forEach((element, index) => {
                            // Assuming there's a one-to-one correspondence between audit points and text parameters
                            if (textParameters[index]) {
                                element.text = textParameters[index].parameterValue;
                            }
                            else {
                                element.text = ''; // Or whatever default value you want to assign
                            }
                        });
                    }
                    if (response.actionDetails.parameterList != null) {
                        let textParameters = response.actionDetails.parameterList.filter(x => x.parameterType === 'Number');
                        this.trainingProdDetails.auditPointList.forEach((element, index) => {
                            // Assuming there's a one-to-one correspondence between audit points and text parameters
                            if (textParameters[index]) {
                                element.number = textParameters[index].parameterValue;
                            }
                            else {
                                element.number = ''; // Or whatever default value you want to assign
                            }
                        });
                    }
                    if (response.actionDetails.parameterList != null && response.actionDetails.parameterList.filter(x => x.parameterType == 'cyclePlan').length > 0) {
                        let cyclePlan = response.actionDetails.parameterList.filter(x => x.parameterType == 'cyclePlan')[0];
                        let productionActual = cyclePlan.parameterValue;
                        let gap = response.actionDetails.parameterList.filter(x => x.parameterType == 'Gap')[0].parameterValue;
                        // let actualTime = response.actionDetails.parameterList.filter(x => x.parameterType == 'Datetime')[0].parameterValue;
                        // let targetTime = response.actionDetails.parameterList.filter(x => x.parameterType == 'Datetime')[1].parameterValue;
                        // let fromModel = response.actionDetails.parameterList.filter(x => x.parameterType == 'model')[0].parameterValue;
                        // let toModel = response.actionDetails.parameterList.filter(x => x.parameterType == 'model')[1].parameterValue;
                        this.trainingProdDetails.auditPointList.forEach(element => {
                            element.productionActual = productionActual;
                            element.gapReason = gap;
                            // element.actualTime = actualTime;
                            // element.targetTime = targetTime;
                            // element.fromModel  = fromModel;
                            // element.toModel    = toModel;
                        });
                        for (let n = 0; n < cyclePlan.cycleValue; n++) {
                            this.trainingProdDetails.cyclePlanList.push({ expectedValue: 0, actualValue: 0 });
                        }
                        this.showCycle = response.actionDetails.parameterList.filter(x => x.parameterType == 'cyclePlan')[0].cycleValue;
                        if (this.actionDet.status == 'COMPLETED') {
                            this.trainingProdDetails.cyclePlanList = cyclePlan.cyclePlanList;
                        }
                        console.log(this.trainingProdDetails.cyclePlanList);
                    }
                    else {
                        this.trainingProdDetails.cyclePlanList = [];
                    }
                }
            }
            else {
                this.trainingProdDetails = {};
            }
        }, (error) => {
            this.listLoading = false;
        });
    }
    getGapReasonList() {
        let req = {
            "branchId": this.userDet.branch.branchId,
        };
        this.actionsService.getGapReasonList(req).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.gapReasonList = response.dataList;
                    this.gapReasonList.push({
                        branchId: 0,
                        branchName: "",
                        createdDate: "",
                        id: 0,
                        reason: "Other"
                    });
                }
                else {
                    this.gapReasonList = [];
                }
            }
            else {
                this.gapReasonList = [];
            }
            this.gapReasonResetList = this.gapReasonList;
        });
    }
    getModelList() {
        let req = {
            "branchId": this.userDet.branch.branchId,
        };
        this.actionsService.getModelList(req).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.modelList = response.dataList;
                    // this.modelList.push({
                    //   branchId: 0,
                    //   branchName: "",
                    //   createdDate: "",
                    //   id: 0,
                    //   reason: "Other"
                    // })
                }
                else {
                    this.modelList = [];
                }
            }
            else {
                this.modelList = [];
            }
        });
    }
    onReasonChange(event, enableOtherReason) {
        console.log(event);
        if (event.gapReason[0].reason == "Other") {
            this.trainingProdDetails.parameterList.forEach(element => {
                if (element.id == event.id) {
                    element.enableOtherReason = true;
                }
            });
        }
        else {
            this.trainingProdDetails.parameterList.forEach(element => {
                if (element.id == event.id) {
                    element.enableOtherReason = false;
                }
            });
        }
        console.log(this.trainingProdDetails.parameterList);
    }
    onChangeComplete(event, data) {
        if (data.gap === "No") {
            data.gapReason = null;
            data.gapOtherReason = null;
            this.isOtherReason = false;
            this.gapReasonList = this.gapReasonResetList;
        }
        // this.trainingProdDetails.parameterList.forEach(element => {
        //   if (element.id == data.id) {
        //     if (event.target.value == 'Yes') {
        //       element.gap = "Yes";
        //       this.isGap = true;
        //     } else if (event.target.value == 'No') {
        //       element.gap = "No";
        //       this.isGap = false;
        //     }
        //   }
        // });
        // console.log(this.trainingProdDetails.parameterList)
    }
    onNumberChanged(event, key) {
        this.trainingProdDetails.parameterList.forEach(element => {
            if (element.parameterType == key) {
                // element.number = event;
                this.trainingProdDetails.auditPointList[0].number = event;
            }
        });
    }
    stageTwoVerificationSubmission(data, status, form) {
        //console.log(this.trainingProdDetails.auditPointList);
        if (form || !this.trainingProdDetails.parameterList) {
            this.submitLoading = true;
            data = this.trainingProdDetails.auditPointList[0];
            // if (status == "COMPLETED") {
            //   data.acceptBtnLbl = "Loading...";
            // } else {
            //   data.rejectBtnLbl = "Loading...";
            // }
            let auditList = [];
            let skillingParamList = [];
            if (this.isVisibleParam('model')) {
                //if (data.gap == 'Yes') {
                if (data.fromModel != null && data.fromModel != undefined) {
                    const paramFromModel = {
                        id: this.getParamIdByIndex('Model', 0),
                        parameterValue: data.fromModel[0].modelName,
                        skillingAuditId: data.skillingAuditId
                    };
                    skillingParamList.push(paramFromModel);
                }
                if (data.toModel != null && data.toModel != undefined) {
                    const paramToModel = {
                        id: this.getParamIdByIndex('Model', 1),
                        parameterValue: data.toModel[0].modelName,
                        skillingAuditId: data.skillingAuditId
                    };
                    skillingParamList.push(paramToModel);
                }
                //}
                //}
            }
            //this.trainingProdDetails.parameterList.forEach(element => {
            if (this.isVisibleParam('Number')) {
                const paramActual = {
                    id: this.getParamId('Number'),
                    parameterValue: data.number,
                    skillingAuditId: data.skillingAuditId,
                };
                skillingParamList.push(paramActual);
            }
            if (this.isVisibleParam('Text')) {
                const paramActual = {
                    id: this.getParamId('Text'),
                    parameterValue: data.text,
                    skillingAuditId: data.skillingAuditId,
                };
                skillingParamList.push(paramActual);
            }
            //   const paramPlan = {
            //     id: this.getParamId('Number'),
            //     parameterValue: data.productionPlan,
            //     skillingAuditId: data.skillingAuditId,
            //   };
            //   skillingParamList.push(paramPlan);
            // }
            if (this.isVisibleParam('Datetime')) {
                const paramActualTime = {
                    id: this.getParamIdByIndex('Datetime', 0),
                    parameterValue: data.actualTime,
                    skillingAuditId: data.skillingAuditId,
                };
                skillingParamList.push(paramActualTime);
            }
            if (this.isVisibleParam('Datetime')) {
                const paramTargetTime = {
                    id: this.getParamIdByIndex('Datetime', 1),
                    parameterValue: data.targetTime,
                    skillingAuditId: data.skillingAuditId,
                };
                skillingParamList.push(paramTargetTime);
            }
            if (this.isVisibleParam('Gap')) {
                // if (data.enableOtherReason) {
                //   const paramGap = {
                //     id: data.id,
                //     parameterValue: data.gapOtherReason,
                //     skillingAuditId: data.skillingAuditId
                //   }
                //   skillingParamList.push(paramGap);
                // } else {
                console.log(data.gapReason);
                let paramGap = {};
                if (data.gap == 'Yes') {
                    if (data.gapReason[0].reason == "Other") {
                        paramGap = {
                            id: this.getParamId('Gap'),
                            parameterValue: data.gapOtherReason,
                            skillingAuditId: data.skillingAuditId
                        };
                    }
                    else {
                        paramGap = {
                            id: this.getParamId('Gap'),
                            parameterValue: data.gapReason[0].reason,
                            skillingAuditId: data.skillingAuditId
                        };
                    }
                    skillingParamList.push(paramGap);
                    //}
                }
            }
            if (this.isVisibleParam('cyclePlan')) {
                console.log(this.trainingProdDetails);
                // Check if cyclePlanList is available
                if (this.trainingProdDetails.cyclePlanList && this.trainingProdDetails.cyclePlanList.length > 0) {
                    // Create cyclePlanList array for the paramElement
                    let paramCycles = {
                        "id": this.getParamId('cyclePlan'),
                        "parameterValue": data.productionActual,
                        "skillingAuditId": data.skillingAuditId
                    };
                    paramCycles.cyclePlanList = this.trainingProdDetails.cyclePlanList.map(cycle => ({
                        actualValue: cycle.actualValue,
                        expectedValue: cycle.expectedValue,
                        cyclePlanId: this.getParamId('cyclePlan'),
                        checksheetParameterId: this.getChecksheetParameterId('cyclePlan'),
                        skillingParameterId: this.getSkillingParameterId('cyclePlan'),
                        cycleNo: cycle.cycleNo
                    }));
                    skillingParamList.push(paramCycles);
                }
            }
            this.mainAuditPointList.forEach(element => {
                auditList.push({
                    id: element.pointAuditId,
                    dayNo: element.dayNo,
                    status: status,
                    skillingAuditId: element.skillingAuditId,
                    ojtPointId: element.ojtPointId,
                    checksheetPointId: element.checksheetPointId,
                    comment: ""
                });
            });
            // if (skillingParamList != null && skillingParamList.length > 0 && auditList != null && auditList.length > 0) {
            let req = {
                "empId": this.userDet.empId,
                "dayNo": this.mainAuditPointList[0].dayNo,
                "skillingAuditId": this.trainingProdDetails.skillingAuditId,
                "skillingChecksheetId": this.trainingProdDetails.skillingChecksheetId,
                "deptId": this.trainingProdDetails.deptId,
                "lineId": this.trainingProdDetails.lineId,
                "workstationId": this.trainingProdDetails.workstationId,
                "status": status,
                "comment": "",
                "stageId": this.trainingProdDetails.stageId,
                "skillingId": this.trainingProdDetails.skillingId,
                "checkSheetId": this.trainingProdDetails.checksheetId,
                "skillingParamList": skillingParamList,
                "csPointAuditList": auditList,
                "createdBy": this.userDet.empId,
                "skillLevelId": this.trainingProdDetails.levelId,
                "branchId": this.trainingProdDetails.branchId,
                "oeEmpId": this.trainingProdDetails.oeEmpId,
                "tlEmpId": this.trainingProdDetails.tlEmpId,
                "ojtRegiId": this.trainingProdDetails.ojtRegiId,
            };
            console.log(req);
            this.actionsService.stageTwoVerificationSubmission(req).subscribe((response) => {
                this.submitLoading = false;
                console.log(response);
                if (response.result) {
                    this.alertService.success("Activity Submitted Successfully.");
                    this.modalService.dismissAll();
                }
                else {
                    if (response.statusCode == 100) {
                        this.alertService.error(response.reason);
                    }
                    else {
                        this.alertService.error("Error occurred while submitting data. Please try again");
                    }
                }
            });
        }
        else {
            this.alertService.error("Please fill all parameters");
            this.submitLoading = false;
        }
    }
    isVisibleParam(key) {
        let flag = false;
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    getParamId(key) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return this.trainingProdDetails.parameterList[index].id;
                }
            }
        }
        return 0;
    }
    getParamIdByIndex(key, index) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            let chkCntr = 0;
            for (let i = 0; i < this.trainingProdDetails.parameterList.length; i++) {
                let tmpParam = this.trainingProdDetails.parameterList[i].parameterType.toLowerCase().trim();
                //let prmIndex = this.trainingProdDetails.parameterList[i].index;
                if (tmpKey == tmpParam) {
                    if (chkCntr == index) {
                        return this.trainingProdDetails.parameterList[i].id;
                    }
                    chkCntr++;
                }
            }
        }
        return 0;
    }
    getParamaterLabelByIndex(key, index) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            let chkCntr = 0;
            for (let i = 0; i < this.trainingProdDetails.parameterList.length; i++) {
                let tmpParam = this.trainingProdDetails.parameterList[i].parameterType.toLowerCase().trim();
                //let prmIndex = this.trainingProdDetails.parameterList[i].index;
                if (tmpKey == tmpParam) {
                    if (chkCntr == index) {
                        return this.trainingProdDetails.parameterList[i].label;
                    }
                    chkCntr++;
                }
            }
        }
        return 0;
    }
    getParamaterLabel(key) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return this.trainingProdDetails.parameterList[index].label;
                }
            }
        }
        return 0;
    }
    getParamaterData(parameterList, parameterType) {
        let flag = false;
        let tmpKey = (parameterType) ? parameterType.toLowerCase().trim() : '';
        if (parameterList != null && parameterList.length > 0) {
            for (let index = 0; index < parameterList.length; index++) {
                let tmpParam = parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return parameterList[index].parameterValue;
                }
            }
        }
        return flag;
    }
    getParamaterDataByIndex(key, index) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            let chkCntr = 0;
            for (let i = 0; i < this.trainingProdDetails.parameterList.length; i++) {
                let tmpParam = this.trainingProdDetails.parameterList[i].parameterType.toLowerCase().trim();
                //let prmIndex = this.trainingProdDetails.parameterList[i].index;
                if (tmpKey == tmpParam) {
                    if (chkCntr == index) {
                        return this.trainingProdDetails.parameterList[i].parameterValue;
                    }
                    chkCntr++;
                }
            }
        }
        return 0;
    }
    getChecksheetParameterId(key) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return this.trainingProdDetails.parameterList[index].checksheetParameterId;
                }
            }
        }
        return 0;
    }
    getSkillingParameterId(key) {
        let tmpKey = (key) ? key.toLowerCase().trim() : '';
        if (this.trainingProdDetails.parameterList != null && this.trainingProdDetails.parameterList.length > 0) {
            for (let index = 0; index < this.trainingProdDetails.parameterList.length; index++) {
                let tmpParam = this.trainingProdDetails.parameterList[index].parameterType.toLowerCase().trim();
                if (tmpKey == tmpParam) {
                    return this.trainingProdDetails.parameterList[index].id;
                }
            }
        }
        return 0;
    }
    onChange(data) {
        console.log(data);
        if (data) {
            if (data.reason == "Other") {
                this.isOtherReason = true;
            }
            else {
                this.isOtherReason = false;
            }
        }
    }
    isStatusCompletedOrRejected(status) {
        return status === 'COMPLETED' || status === 'REJECTED';
    }
};
StageTwoVerificationComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_5__["ActionsService"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
StageTwoVerificationComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
StageTwoVerificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-two-verification',
        template: _raw_loader_stage_two_verification_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stage_two_verification_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _actions_service__WEBPACK_IMPORTED_MODULE_5__["ActionsService"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], StageTwoVerificationComponent);



/***/ }),

/***/ "VY1d":
/*!******************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-one/stage-one.component.ts ***!
  \******************************************************************************/
/*! exports provided: ActionDetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionDetComponent", function() { return ActionDetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_one_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-one.component.html */ "ydGN");
/* harmony import */ var _stage_one_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-one.component.scss */ "BEzr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _actions_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions.constant */ "yuR8");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let ActionDetComponent = class ActionDetComponent {
    constructor(actionsService, modalService, alertService, Constant) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.mainTab = 1;
        this.filterFlag = false;
        this.submitLoading = false;
        this.enableCompletedBtn = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: '',
            masterSelected: ''
        };
        this.listLoading = false;
        this.trainingProdDetails = [];
        this.completedBtnStatus = false;
        this.notCompletedBtnStatus = false;
        this.userDet = {};
        this.isDisableStatus = false;
        this.constant = {};
        /*
          @DESC : Returns selected tab id
          @Author: Shashi
          @Date : 25 Aug 2023
        */
        this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
        };
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.getTrainingList();
    }
    /*
      @DESC : Compares Training Date with current date, if less then enables select status dropdown.
      @Author: Shashi
      @Date : 21 Sept 2023
    */
    enableSelectStatusOption(assignedDate) {
        let currentDate = (moment__WEBPACK_IMPORTED_MODULE_8__(new Date())).format('DD-MMM-YYYY');
        if (assignedDate <= currentDate) {
            return true;
        }
        else {
            return false;
        }
    }
    /*
      @DESC : Selects tab
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    setMainTab(tabId) {
        this.mainTab = tabId;
        if (this.mainTab == 1) {
            this.getTrainingList();
        }
    }
    ;
    /*
      @DESC : Calls api and show training task list in table
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    getTrainingList() {
        this.trainingProdDetails.auditPointList = [];
        let reqBody = {};
        this.listLoading = true;
        reqBody = {
            "skillingId": this.actionDet.skillingId,
            "skillingAuditId": this.actionDet.auditId //auditId
        };
        this.actionsService.getTrainingList(reqBody).subscribe((response) => {
            console.log(response);
            this.listLoading = false;
            if (response.result) {
                if (response.actionDetails) {
                    if (response.actionDetails.auditPointList != null && response.actionDetails.auditPointList) {
                        for (let index = 0; index < response.actionDetails.auditPointList.length; index++) {
                            response.actionDetails.auditPointList[index].selectedStatus = (this.actionDet.status == 'PENDING') ? '' : this.actionDet.status;
                        }
                    }
                    else {
                        this.trainingProdDetails.auditPointList = [];
                    }
                    this.trainingProdDetails = response.actionDetails;
                }
                else {
                    this.trainingProdDetails.auditPointList = [];
                }
            }
            else {
                this.trainingProdDetails.auditPointList = [];
            }
        }, (error) => {
        });
    }
    /*
      @DESC : Sort table
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    sortData(sort) {
        this.sorting = sort;
        if (this.mainTab == 1) {
            this.getTrainingList();
        }
    }
    onChangeComplete(event, data) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                // this.trainingProdDetails.auditPointList.forEach(element => {
                //   if (element.id == data.id) {
                //     element.selectedStatus = event.target.value;
                //   }
                // });
                let selectStatusLength = this.trainingProdDetails.auditPointList.filter(x => x.selectedStatus == event.target.value).length;
                this.searchDet.masterSelected = (selectStatusLength == this.trainingProdDetails.auditPointList.length) ? event.target.value : '';
            }
            this.isCompletedAllSelected();
        }
    }
    onChangeCompleteAll(event) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                this.trainingProdDetails.auditPointList.forEach(element => {
                    element.selectedStatus = event.target.value;
                });
                this.searchDet.masterSelected = event.target.value;
            }
            this.isCompletedAllSelected();
        }
    }
    isCompletedAllSelected() {
        this.enableCompletedBtn = true;
        this.trainingProdDetails.auditPointList.forEach(element => {
            if (element.selectedStatus !== "COMPLETED") {
                this.enableCompletedBtn = false;
                return;
            }
        });
    }
    submitStatus() {
        this.submitLoading = true;
        let auditList = [];
        this.trainingProdDetails.auditPointList.forEach(element => {
            auditList.push({
                id: element.pointAuditId,
                status: element.selectedStatus,
                skillingAuditId: element.skillingAuditId,
                ojtPointId: element.ojtPointId,
                checksheetPointId: element.checksheetPointId,
            });
        });
        if (auditList != null && auditList.filter(x => x.status == this.constant.COMPLETED).length != this.trainingProdDetails.auditPointList.length) {
            this.submitLoading = false;
            this.alertService.error('Please select status of each row or complete the task and update.');
            return;
        }
        if (this.trainingProdDetails.comment == null || this.trainingProdDetails.comment == undefined || this.trainingProdDetails.comment == '') {
            this.submitLoading = false;
            this.alertService.error('Please enter comment.');
            return;
        }
        let reqBody = {
            oeEmpId: this.trainingProdDetails.oeEmpId,
            trainerEmpId: this.trainingProdDetails.trainerEmpId,
            branchId: this.trainingProdDetails.branchId,
            skillLevelId: this.trainingProdDetails.levelId,
            deptId: this.trainingProdDetails.deptId,
            lineId: this.trainingProdDetails.lineId,
            stageId: this.trainingProdDetails.stageId,
            workstationId: this.trainingProdDetails.workstationId,
            // empId: this.empIdFromUserTypeList, //stackholder ID => Add Trainer Employee Id 
            skillingAuditId: this.trainingProdDetails.skillingAuditId,
            status: "COMPLETED",
            comment: (this.trainingProdDetails.comment) ? this.trainingProdDetails.comment : '',
            skillingId: this.trainingProdDetails.skillingId,
            checkSheetId: this.trainingProdDetails.checksheetId,
            skillingChecksheetId: this.trainingProdDetails.skillingChecksheetId,
            csPointAuditList: auditList,
            tlEmpId: this.trainingProdDetails.tlEmpId,
            ojtRegiId: this.trainingProdDetails.ojtRegiId,
        };
        console.log(reqBody);
        if (reqBody.csPointAuditList == null || reqBody.csPointAuditList.length == 0) {
            this.submitLoading = false;
            this.alertService.error('Please select status');
            return;
        }
        this.actionsService.submitStageOneStatus(reqBody).subscribe((data) => {
            console.log(data);
            this.submitLoading = false;
            if (data.result) {
                this.alertService.success("Activity Submitted Successfully.");
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again");
                }
            }
        }, (error) => {
            this.submitLoading = false;
        });
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    isStagePending() {
        let flag = false;
        if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length == this.trainingProdDetails.auditPointList.filter(x => x.status == this.constant.PENDING).length) {
            flag = true;
        }
        return flag;
    }
};
ActionDetComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
ActionDetComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ActionDetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-one',
        template: _raw_loader_stage_one_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: 'Constant', useValue: _actions_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"] }
        ],
        styles: [_stage_one_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"], Object])
], ActionDetComponent);



/***/ }),

/***/ "VlxY":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/action-det-cycle/action-det-cycle.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n            <div class=\"modal-body p-t-0 p-b-0\" style=\"padding: 0;\">\r\n                <div [style.height]=\"'calc(100vh - 38vh)'\">\r\n                    <div class=\"row modal-header\" style=\"margin-bottom: 10px;\">\r\n                        <div class=\"col-6\">\r\n                            <h2 class=\"heading m-0\">\r\n                                Action Details\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"col-6\">\r\n                            <div class=\"extraContent\" style=\"padding: 0;margin-right: 20px;\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-6\">\r\n                                        <div class=\"filterDiv\" *ngIf=\"filterFlag\">\r\n                                            <button class=\"clearFilter\" (click)=\"removeFilter()\">{{'Clear_filter' |\r\n                                                translate}}</button> &nbsp;\r\n                                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                                Applied</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-6\">\r\n                                        <div class=\"form-group has-search\" style=\"margin-bottom: 0;\">\r\n                                            <span class=\"fa fa-search form-control-feedback\"\r\n                                                *ngIf=\"!searchDet.searchData\" (click)=\"getSearchList(true)\"></span>\r\n                                            <span *ngIf=\"searchDet.searchData\"\r\n                                                class=\"fa fa-times-circle form-control-clear\"\r\n                                                (click)=\"getSearchList(false)\"></span>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                                                placeholder=\"Search\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                                (keyup)=\"$event.keyCode == 13 ? getSearchListTrainingProd(true) : ''\"\r\n                                                autocomplete=\"off\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"height: calc(100vh - 12%);\">\r\n                        <!-- TABLE BLOCK -->\r\n                        <div class=\"table-block\" style=\"margin-left: 20px; margin-right: 20px;\">\r\n                            <div class=\"table-responsive tableFixHead\">\r\n                                <!-- <table class=\"table\" matSort (matSortChange)=\"sortData($event)\"> -->\r\n                                <table class=\"table\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th class=\"fixedColumn\" style=\"text-align: center;background: transparent;\">\r\n                                            </th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"\" style=\"text-align: center;background: #7044cd; color: white;\"\r\n                                                colspan=\"2\">Cycle 1</th>\r\n                                            <th class=\"\" style=\"text-align: center;background: #7044cd; color: white;\"\r\n                                                colspan=\"2\">Cycle 2</th>\r\n                                            <th class=\"\" style=\"text-align: center;background: #7044cd; color: white;\"\r\n                                                colspan=\"2\">Cycle 3</th>\r\n                                            <th class=\"\" style=\"text-align: center;background: #7044cd; color: white;\"\r\n                                                colspan=\"2\">Cycle 4</th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th lass=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"\" style=\"text-align: center;background: transparent;\"></th>\r\n                                            <th class=\"actionTh fixedColumn\"\r\n                                                style=\"text-align: center;background: transparent;\"></th>\r\n                                            <!-- <th mat-sort-header=\"day\" class=\"fixedColumn\">Day</th>\r\n                                            <th mat-sort-header=\"date\" class=\"\">Date</th>\r\n                                            <th mat-sort-header=\"productionPlan\" class=\"\">Production Plan</th>\r\n                                            <th mat-sort-header=\"productionActual\" class=\"\">Production Actual</th>\r\n                                            <th mat-sort-header=\"gap\" class=\"\">Gap</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"status\" class=\"\">Status</th>\r\n                                            <th mat-sort-header=\"rejectionQty\" class=\"\">Rejection Qty</th>\r\n                                            <th mat-sort-header=\"Remark\" class=\"\">Remark</th>\r\n                                            <th class=\"actionTh fixedColumn\">Action</th> -->\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th class=\"fixedColumn\">Day</th>\r\n                                            <th class=\"\">Date</th>\r\n                                            <th class=\"\">Production Plan</th>\r\n                                            <th class=\"\">Production Actual</th>\r\n                                            <th class=\"\">Gap</th>\r\n                                            <th class=\"\">Standard</th>\r\n                                            <th class=\"\">Actual</th>\r\n                                            <th class=\"\">Standard</th>\r\n                                            <th class=\"\">Actual</th>\r\n                                            <th class=\"\">Standard</th>\r\n                                            <th class=\"\">Actual</th>\r\n                                            <th class=\"\">Standard</th>\r\n                                            <th class=\"\">Actual</th>\r\n                                            <th class=\"\">Status</th>\r\n                                            <th lass=\"\">Rejection Qty</th>\r\n                                            <th class=\"\">Remark</th>\r\n                                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                                            <!-- <th mat-sort-header=\"day\" class=\"fixedColumn\">Day</th>\r\n                                            <th mat-sort-header=\"date\" class=\"\">Date</th>\r\n                                            <th mat-sort-header=\"productionPlan\" class=\"\">Production Plan</th>\r\n                                            <th mat-sort-header=\"productionActual\" class=\"\">Production Actual</th>\r\n                                            <th mat-sort-header=\"gap\" class=\"\">Gap</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"expected\" class=\"\">Expected</th>\r\n                                            <th mat-sort-header=\"actual\" class=\"\">Actual</th>\r\n                                            <th mat-sort-header=\"status\" class=\"\">Status</th>\r\n                                            <th mat-sort-header=\"rejectionQty\" class=\"\">Rejection Qty</th>\r\n                                            <th mat-sort-header=\"Remark\" class=\"\">Remark</th>\r\n                                            <th class=\"actionTh fixedColumn\">Action</th> -->\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of productionList\">\r\n                                            <td>{{item.day}}</td>\r\n                                            <td>{{item.date}}</td>\r\n                                            <td>{{item.productionPlan}}</td>\r\n                                            <td>{{item.productionActual}}</td>\r\n                                            <td>{{item.gap}}</td>\r\n                                            <td>{{item.expented1}}</td>\r\n                                            <td>{{item.actual1}}</td>\r\n                                            <td>{{item.expented2}}</td>\r\n                                            <td>{{item.actual2}}</td>\r\n                                            <td>{{item.expented3}}</td>\r\n                                            <td>{{item.actual3}}</td>\r\n                                            <td>{{item.expented4}}</td>\r\n                                            <td>{{item.actual4}}</td>\r\n                                            <td>{{item.expented5}}</td>\r\n                                            <td>{{item.actual5}}</td>\r\n                                            <td>{{item.status}}</td>\r\n                                            <td>{{item.rejectionQty}}</td>\r\n                                            <td>{{item.remark}}</td>\r\n                                            <td class=\"actionTd fixedColumn\">\r\n                                                <button type=\"button\" class=\"btn btn-sm actionBtn\">Action</button>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"(productionList == null || productionList.length == 0)\">\r\n                                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                                Data Not Found\r\n                                            </td>\r\n                                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                                <app-loading></app-loading>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <app-pagination [staticPagination]=\"staticPagination\"\r\n                                (paginationData)=\"loadMoreTrainingProd($event)\" [submitButton]=\"getCheckedValue()\"\r\n                                [submitSpinner]=\"submitSpinner\" (submitData)=\"statusUpdate($event)\"\r\n                                [buttonLabel]=\"'Submit'\">\r\n                            </app-pagination>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "Y/fa":
/*!********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-two/stage-two.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n\n.main-tab-switcher {\n  padding: 0px !important;\n  box-shadow: none !important;\n  background: transparent !important;\n  border-radius: 0px !important;\n  margin: 0px !important;\n  left: 0px !important;\n}\n\n.main-tab-switcher .main-tab-switch {\n  padding: 10px 20px;\n}\n\n.main-tab-switcher .main-tab-switch.active {\n  background: #7044cd;\n  color: #fff;\n}\n\n.tableFixHead {\n  overflow-y: auto !important;\n  max-height: calc(100vh - 50vh) !important;\n  min-height: calc(100vh - 50vh) !important;\n  height: calc(100vh - 50vh) !important;\n  border-bottom: 2px solid #b395f1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtREE7RUFDSSxpQkFBQTtBQWxESjs7QUFxREE7RUFDSSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFsREo7O0FBbURJO0VBQ0ksa0JBQUE7QUFqRFI7O0FBa0RRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBaERaOztBQW9EQTtFQUNJLDJCQUFBO0VBQ0EseUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7QUFqREoiLCJmaWxlIjoic3RhZ2UtdHdvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1haW4tdGFiLXN3aXRjaGVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4vLyAgICAgY29sb3I6ICM0NzQ3NDc7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdG9wOiAwcHg7XHJcbi8vICAgICBib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gfVxyXG5cclxuLy8gLm1haW4tdGFiLXN3aXRjaCB7XHJcbi8vICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4vLyAgICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5tYWluQWN0aXZlU3dpdGNoVHJhaW5pbmcge1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM2NjEwZjI7XHJcbi8vICAgICBjb2xvcjogIzY2MTBmMjtcclxuLy8gfVxyXG5cclxuLy8gLm1haW5BY3RpdmVTd2l0Y2hQcm9kdWN0aW9uIHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNjYxMGYyO1xyXG4vLyAgICAgY29sb3I6ICM2NjEwZjI7XHJcbi8vIH1cclxuXHJcbi8vIC8vIC50YWJsZS1ibG9jayB7XHJcbi8vIC8vICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuLy8gLy8gICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuLy8gLy8gfVxyXG5cclxuLy8gLm1vZGFsLWZvb3RlciB7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtc29ydC1oZWFkZXItdGV4dCB7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuLy8gICAgIC8qIENlbnRlciB0aGUgdGV4dCAqL1xyXG4vLyB9XHJcblxyXG4ubW9kYWwtZm9vdGVyLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLXRhYi1zd2l0Y2hlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIC5tYWluLXRhYi1zd2l0Y2gge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGFibGVGaXhIZWFkIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHZoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDUwdmgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHZoKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiMzk1ZjEgIWltcG9ydGFudDtcclxufVxyXG4vLyAudGV4dGFyZWEtY3VzdG9tIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4vLyAgICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbi8vICAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuLy8gICAgIG1heC1oZWlnaHQ6IDIwMHB4OyBcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbi8vICAgICByZXNpemU6IG5vbmU7IFxyXG4vLyAgICAgcGFkZGluZzogMTBweDsgXHJcbi8vICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "Zu0K":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/actions.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Actions\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row\">\r\n            <div class=\"col-7 performanceBg\">\r\n                <div class=\"main-tab-switcher\">\r\n                    <div class=\"main-tab-switch\" [ngClass]=\"{'mainActiveSwitch': selectedTab === 'pendingAction'}\"\r\n                        (click)=\"selectTab('pendingAction')\">\r\n                        Pending Actions\r\n                    </div>\r\n                    <div class=\"main-tab-switch\"\r\n                    [ngClass]=\"{'mainActiveSwitch': selectedTab === 'completedAction'}\" (click)=\"selectTab('completedAction')\">\r\n                    Completed Actions\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <div class=\"form-group has-search\">\r\n                    <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                        (click)=\"getSearchList(true)\"></span>\r\n                    <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                        (click)=\"getSearchList(false)\"></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"\r\n                        [(ngModel)]=\"searchDet.searchInput\" (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\"\r\n                        autocomplete=\"off\" />\r\n                </div>\r\n                <!-- <div class=\"filterDiv\" *ngIf=\"isAppliedFilter\">\r\n                    <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp;\r\n                    <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter Applied</span>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"col-1 p-0 m-auto text-center\">\r\n                <div class=\"btn-filter-wrap\">\r\n                    <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                        (click)=\"filterModalOpen(filterPopup)\">\r\n                        <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n                    </button>\r\n                    <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n                    <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <!-- <th mat-sort-header=\"srno\" class=\"fixedColumn\">SR NO</th> -->\r\n                        <th class=\"fixedColumn plant-Coloumn\" style=\"z-index: 4;\">Plant</th>\r\n                        <th class=\"fixedColumn\" style=\"z-index: 4;\" mat-sort-header=\"CmpyEmpId\">Emp Id</th>\r\n                        <th class=\"fixedColumn\" style=\"z-index: 4;\" mat-sort-header=\"EmpName\">Emp Name</th>\r\n                        <th mat-sort-header=\"LineName\" class=\"\">Cell/Line</th>\r\n                        <th mat-sort-header=\"Workstation\" class=\"\">Workstation</th>\r\n                        <th mat-sort-header=\"LevelName\" class=\"\">Required Level</th>\r\n                        <th mat-sort-header=\"Activity\" class=\"\">Activity</th>\r\n                        <th mat-sort-header=\"DayNo\" class=\"\">Day</th>\r\n                        <th mat-sort-header=\"ActivityDate\" class=\"\">Start Date</th>\r\n                        <!-- <th class=\"\">Activity Completion Date</th> -->\r\n                        <th mat-sort-header=\"Status\" class=\"fixedColumn\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\" style=\"z-index: 4;\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of actionList\">\r\n                        <td class=\"actionTd fixedColumn text-left\">{{item.branchName || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn text-left\">{{item.cmpyEmpId || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn text-left\">{{item.empName || 'N/A'}}</td>\r\n                        <td>{{item.lineName || 'N/A'}}</td>\r\n                        <td>{{item.workstation || 'N/A'}}</td>\r\n                        <td>{{item.levelName || 'N/A'}}</td>\r\n                        <td>{{item.activity || 'N/A'}}</td>\r\n                        <td>{{item.dayNo || 'N/A'}}</td>\r\n                        <td>{{item.activityDate | date: 'dd-MM-yyyy' || 'N/A'}}</td>\r\n                        <!-- <td>{{item.activityCompletionDate || 'N/A'}}</td> -->\r\n                        <td class=\"fixedColumn actionTd\"\r\n                            [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING','not-completed':item.status == 'NOT COMPLETED','rejected':item.status == 'REJECTED'}\">\r\n                            {{item.status || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <!-- && item.cmpyEmpId == userDet.cmpyEmpId && item.status == 'COMPLETED' -->\r\n                            <ng-container *ngIf=\"item.stageId === 1\">\r\n                                <ng-container *ngIf=\"item.status === 'COMPLETED'\">\r\n                                    <button type=\"button\" class=\"btn btn-default actionBtn\"\r\n                                        (click)=\"openActionDetailsModal(item)\">View</button>\r\n                                </ng-container>\r\n                                <!-- <ng-container *ngIf=\"item.status === 'PENDING' || item.status === 'NOT COMPLETED'\">\r\n                                    <ng-container *ngIf=\"checkPrevDayTaskCompletion(item.dayNo)\">\r\n                                        <button type=\"button\" class=\"btn btn-default actionBtn\"\r\n                                            (click)=\"openActionDetailsModal(item)\">View</button>\r\n                                    </ng-container>\r\n                                </ng-container> -->\r\n                                <ng-container *ngIf=\"item.status === 'PENDING' || item.status === 'NOT COMPLETED'\">\r\n                                    <ng-container *ngIf=\"checkPrevDayTaskCompletion(item.dayNo, item.activityDate)\">\r\n                                        <button type=\"button\" class=\"btn btn-default actionBtn\" (click)=\"openActionDetailsModal(item)\">View</button>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.stageId >= 2 && item.stageId <= 5\">\r\n                                <button type=\"button\" class=\"btn btn-default actionBtn\"\r\n                                    (click)=\"openActionDetailsModal(item)\">View</button>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.stageId == 6\">\r\n                                <ng-container *ngIf=\"item.stageId == 6 && item.status === 'PENDING'\">\r\n                                    <button type=\"button\" class=\"btn btn-default actionBtn\"\r\n                                        (click)=\"openActionDetailsModal(item)\">View</button>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"item.stageId == 7\">\r\n                                <ng-container *ngIf=\"item.stageId == 7 && item.status === 'PENDING'\">\r\n                                    <button type=\"button\" class=\"btn btn-default actionBtn\"\r\n                                        (click)=\"openActionDetailsModal(item)\">View</button>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <!-- <ng-container *ngIf=\"item.stageId === 6 && (item.stageId == 6 && item.status === 'COMPLETED')\"></ng-container> -->\r\n                            <!-- <ng-container *ngIf=\"item.stageId == 1\">\r\n                                <button type=\"button\" class=\"btn btn-default actionBtn\" (click)=\"openActionDetailsModal(item)\">View</button>\r\n                            </ng-container> -->\r\n                            <!-- <button type=\"button\" class=\"btn btn-sm actionBtn\" \r\n                            (click)=\"openAssessmentDetailsModal(stage5, item)\">View</button> -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(actionList == null || actionList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data Not Found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\">\r\n        </app-pagination> -->\r\n    </div>\r\n    <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n</div>\r\n\r\n<!-- Filter Popup  -->\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click');\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <!-- searchDet.plantList -->\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\" getSortFunction(searchDet.plantList,'dept')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branchId\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <!-- searchDet.plantList -->\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Deparment'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.deptList, 'dept')\" formControlName=\"deptId\"\r\n                            [(ngModel)]=\"searchDet.deptId\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'line')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptId'].invalid && (filterData.controls['deptId'].touched || filterData.controls['deptId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['deptId'].errors.required\">\r\n                                Please select Deparment\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(cellLineList,'cell')\" formControlName=\"lineIds\"\r\n                            [(ngModel)]=\"searchDet.lineIds\" (onSelect)=\"onChange($event,'line')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['lineIds'].invalid && (filterData.controls['lineIds'].touched || filterData.controls['lineIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['lineIds'].errors.required\">\r\n                                Please select Cell/Line\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Status</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Status'\" [settings]=\"SingleDropdownSettings\" [data]=\"getSortFunction(statusList,'cell')\"\r\n                            formControlName=\"statusId\" [(ngModel)]=\"searchDet.statusId\"\r\n                            (onSelect)=\"onChange($event,'status')\" (onDeSelect)=\"onChange(false,'status')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'status')\" (onDeSelectAll)=\"onChangeAll($event,'status')\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">From Date</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"input-group m-0 custom-Input-Group\" (click)=\"startDatePicker.open()\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <i class=\"feather icon-calendar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <input matInput [(ngModel)]=\"searchDet.fromDate\" [max]=\"maxDate\"\r\n                                [matDatepicker]=\"startDatePicker\" class=\"form-control datePickInput\"\r\n                                placeholder=\"From Date\" (keydown)=\"false\" (dateChange)=\"selectCustomDate($event,'')\"\r\n                                formControlName=\"fromDate\" name=\"opt\">\r\n                            <mat-datepicker #startDatePicker></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">To Date</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"input-group m-0 custom-Input-Group\" (click)=\"toDatePicker.open()\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <i class=\"feather icon-calendar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <input matInput [(ngModel)]=\"searchDet.toDate\" [min]=\"searchDet.fromDate\" [max]=\"maxDate\"\r\n                                [matDatepicker]=\"toDatePicker\" class=\"form-control datePickInput\" placeholder=\"To Date\"\r\n                                (keydown)=\"false\" (dateChange)=\"selectCustomDate('', $event)\" formControlName=\"toDate\"\r\n                                name=\"opt\">\r\n                            <mat-datepicker #toDatePicker></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\">Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel</button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n\r\n<ng-template #stageOne let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-one [actionDet]=\"selectedActionRecDet\"></app-stage-one>\r\n</ng-template>\r\n\r\n<ng-template #stageTwo let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-two [actionDet]=\"selectedActionRecDet\"></app-stage-two>\r\n</ng-template>\r\n\r\n<ng-template #stageTwoVerification let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-two-verification [actionDet]=\"selectedActionRecDet\"></app-stage-two-verification>\r\n</ng-template>\r\n\r\n<ng-template #stageThree let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-three [actionDet]=\"selectedActionRecDet\"></app-stage-three>\r\n</ng-template>\r\n<!-- \r\n<ng-template #ActionDetailsCycleModel let-c=\"close\" let-d=\"dismiss\">\r\n    <app-action-det-cycle [actionDet]=\"selectedActionRecDet\"></app-action-det-cycle>\r\n</ng-template> -->\r\n<ng-template #stageFour let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-four [actionDet]=\"selectedActionRecDet\" style=\"height: 90vh;\"></app-stage-four>\r\n</ng-template>\r\n\r\n<ng-template #stageFive let-c=\"close\" let-d=\"dismiss\">\r\n    <app-stage-five [actionDet]=\"selectedActionRecDet\" style=\"height: 90vh;\"></app-stage-five>\r\n</ng-template>");

/***/ }),

/***/ "b8fD":
/*!******************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/actions.component.ts ***!
  \******************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./actions.component.html */ "Zu0K");
/* harmony import */ var _actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.component.scss */ "eN5/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.service */ "FTWj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _actions_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions.constant */ "yuR8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let ActionsComponent = class ActionsComponent {
    constructor(actionsService, modalService, fb, Constant) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.fb = fb;
        this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.deptList = [];
        this.isAppliedFilter = false;
        this.listLoading = false;
        this.searchDet = {};
        this.selectedBranch = {};
        this.submitSpinner = false;
        this.isUpload = false;
        this.actionList = [];
        this.notCompletedBtnStatus = false;
        this.filterFlag = false;
        this.loggedInEmpDet = {};
        this.constant = {};
        this.submitAttempted = false;
        this.constant = Constant;
    }
    ngOnInit() {
        this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            // itemsShowLimit: 3,
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](""),
            lineIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](""),
            //statusId: new FormControl("", Validators.required),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](""),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](""),
        });
        this.getAccessiblePlantList();
        this.selectTab('pendingAction');
        // this.getActionList('');
    }
    getCheckedValue() {
        return true;
    }
    /*
      @DESC : Function to clear pagination
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "report" || fieldToSort === "dept" || fieldToSort === "level" || fieldToSort === "cell") {
                array.sort(function (a, b) {
                    var nameA = a.name ? a.name.toUpperCase() : "";
                    var nameB = b.name ? b.name.toUpperCase() : "";
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return array;
    }
    filterModalOpen(modal) {
        this.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
        //this.getActionList('filter');
    }
    /*
     @DESC : Search
     @Author: Jayshri
     @Date : 04 Sep 2023
   */
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getActionList('filter');
        }
        else {
            this.getActionList('');
        }
    }
    /* Common function for set an array for dropdown
    Author: Simran
    Date : 23/09/2023 */
    setArray(array, key1, key2) {
        let tmpArray = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                element.id = element[key1];
                element.name = element[key2];
                tmpArray.push(element);
            }
        }
        return tmpArray;
    }
    getIDsArray(array) {
        let tmp = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                tmp.push(element.id);
            }
        }
        return tmp;
    }
    resetFormField(form, keyName) {
        if (keyName != '') {
            Object.keys(form.controls).forEach(key => {
                if (key == keyName) {
                    form.get(keyName).reset();
                    form.get(keyName).markAsPristine();
                    form.get(keyName).markAsUntouched();
                }
            });
        }
        else {
            Object.keys(form.controls).forEach(key => {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            });
        }
    }
    onChange(ev, type) {
        if (ev) {
            if (type == "plant") {
                this.getDepartmentList(ev);
                //this.getLineNameList(ev);
                this.searchDet.deptId = [];
                this.searchDet.lineIds = [];
            }
            else if (type == "dept") {
                this.getLineNameList(this.searchDet.branchId, this.searchDet.deptId);
                //this.getLineNameList(ev);
                this.searchDet.lineIds = [];
            }
        }
        else {
            if (type == "plant") {
                if (this.searchDet) {
                    this.searchDet.departmentList = [];
                }
            }
            else if (type == "dept") {
                if (this.searchDet) {
                    this.searchDet.cellLineList = [];
                }
            }
        }
    }
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
    }
    getAccessiblePlantList() {
        this.actionsService
            .getBranchAccessList("getBranchAccessSetupByEmpId/" +
            this.loggedInEmpDet.organization.orgId +
            "/" +
            this.loggedInEmpDet.empId)
            .subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    /* Use For Add Screen */
                    this.plantList = this.setArray(res.branchAccessList, "branchId", "branchName");
                    /* Use For Filter */
                    this.searchDet.plantList = this.setArray(res.branchAccessList, "branchId", "branchName");
                }
                else {
                    /* Use For Add Screen */
                    this.plantList = [
                        {
                            id: this.loggedInEmpDet.branch.branchId,
                            name: this.loggedInEmpDet.branch.name,
                        },
                    ];
                    /* Use For Filter */
                    this.searchDet.plantList = [
                        {
                            id: this.loggedInEmpDet.branch.branchId,
                            name: this.loggedInEmpDet.branch.name,
                        },
                    ];
                }
            }
            else {
                /* Use For Add Screen */
                this.plantList = [
                    {
                        id: this.loggedInEmpDet.branch.branchId,
                        name: this.loggedInEmpDet.branch.name,
                    },
                ];
                /* Use For Filter */
                this.searchDet.plantList = [
                    {
                        id: this.loggedInEmpDet.branch.branchId,
                        name: this.loggedInEmpDet.branch.name,
                    },
                ];
            }
            //this.branchId = [this.searchDet.plantList[0]];
            //this.getDepartmentList(this.branchId[0]);
        });
    }
    getDepartmentList(branch) {
        this.actionsService
            .getDepartmentByBranch("getdepartmentlistbybranchid/" + branch.id)
            .subscribe((res) => {
            if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.searchDet.deptList = this.setArray(res.deptList, "deptId", "deptName");
                }
                else {
                    this.searchDet.deptList = [];
                }
            }
            else {
                this.searchDet.deptList = [];
            }
        });
    }
    getLineNameList(branchId, deptId) {
        console.log(branchId);
        console.log(deptId);
        this.selectedBranchId = branchId[0].id;
        this.selectedDeptId = deptId[0].id;
        const data = {
            branchId: this.selectedBranchId,
            deptId: this.selectedDeptId
        };
        this.actionsService
            .getLineNameList("apis/sm/getCellList", data)
            .subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    //this.cellLineList = response.dataList;
                    this.cellLineList = this.setArray(response.dataList, "lineId", "lineName");
                    // this.searchDet.cellLineName = this.setArray(response.dataList, 'lineId', 'tmpName');
                }
                else {
                    this.cellLineList = [];
                }
            }
            else {
                this.cellLineList = [];
            }
        });
    }
    selectCustomDate(fromDate, toDate) {
        console.log("From Date:", fromDate);
        console.log("To Date:", toDate);
        if (fromDate.value != null &&
            fromDate.value != undefined &&
            fromDate.value != "") {
            this.searchDet.fromDate = new Date(fromDate.value);
        }
        if (toDate.value != null &&
            toDate.value != undefined &&
            toDate.value != "") {
            this.searchDet.toDate = new Date(toDate.value);
        }
    }
    removeFilter() {
        this.isAppliedFilter = false;
        this.submitAttempted = false;
        this.filterData.reset();
        this.searchDet.branchId = [];
        this.searchDet.deptId = [];
        this.searchDet.lineIds = [];
        this.searchDet.fromDate = null;
        this.searchDet.toDate = null;
        //this.searchDet.statusId = [];
        this.getActionList('');
    }
    submitFilterForm(form) {
        this.submitAttempted = true;
        console.log(form);
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            if (form.controls.branchId.invalid) {
                console.log(form.controls.branchId.invalid);
                return;
            }
        }
        this.clearPagination();
        this.isAppliedFilter = true;
        this.searchDet.filterFlag = true;
        this.getActionList('filter');
        this.modalService.dismissAll();
    }
    /*
      @DESC : Calls api and show action list on table
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    getActionList(searchFilter) {
        this.listLoading = true;
        this.actionList = [];
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        var req = {
            empId: this.loggedInEmpDet.empId,
            offset: this.staticPagination.offset,
            limit: this.staticPagination.itemsPerPage,
        };
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
            }
            else {
                //Default Sort
                // req.colName = "empName";
                // req.orderType = "ASC";
            }
        }
        else {
            //Default Sort
            // req.colName = "empName";
            // req.orderType = "DESC";
        }
        // if (searchFilter == 'filter') {
        if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
            req.branchId = this.searchDet.branchId[0].id;
        }
        if (this.searchDet.deptId != null && this.searchDet.deptId.length > 0) {
            req.deptId = this.searchDet.deptId[0].id;
        }
        if (this.searchDet.lineIds != null && this.searchDet.lineIds.length > 0) {
            req.lineIds = this.getIDsArray(this.searchDet.lineIds);
        }
        if (this.searchDet.fromDate != null) {
            req.fromDt = moment__WEBPACK_IMPORTED_MODULE_8__(this.searchDet.fromDate).format("YYYY-MM-DD");
        }
        if (this.searchDet.toDate != null) {
            req.toDt = moment__WEBPACK_IMPORTED_MODULE_8__(this.searchDet.toDate).format("YYYY-MM-DD");
        }
        // if (this.searchDet.statusId != null) {
        //   req.status = this.searchDet.statusId[0].id;
        // }
        // }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        this.staticPagination.listLength = 10;
        if (this.selectedTab == 'pendingAction') {
            req.status = 'PENDING';
        }
        console.log(req);
        this.actionsService.getActionsList(req).subscribe((response) => {
            this.listLoading = false;
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.actionList = response.dataList;
                    //If showing action list for stage 1 then sorting it day wise 1 to N
                    let isStage1 = true;
                    this.actionList.forEach(element => {
                        if (element.stageId != 1) {
                            isStage1 = false;
                        }
                    });
                    if (isStage1) {
                        this.actionList = this.actionList.sort(function (a, b) {
                            return a.dayNo - b.dayNo;
                        });
                    }
                    // if (this.staticPagination.page == 1) {
                    //   this.staticPagination.total = res.totalCount;
                    //   this.staticPagination.totalPages = Math.ceil(res.totalCount / this.staticPagination.itemsPerPage);
                    // }
                    this.staticPagination.listLength = this.actionList.length;
                    if (this.staticPagination.page == 1) {
                        this.staticPagination.total = response.totalCount;
                        this.staticPagination.totalPages = (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
                    }
                }
                else {
                    this.actionList = [];
                    this.staticPagination.listLength = this.actionList.length;
                    this.staticPagination.total = 0;
                    this.staticPagination.totalPages = (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
                }
            }
            else {
                this.actionList = [];
                this.staticPagination.listLength = this.actionList.length;
                this.staticPagination.total = 0;
                this.staticPagination.totalPages = (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
            }
        }, (error) => {
            this.listLoading = false;
        });
    }
    /*
      @DESC : Load More Pagination next page Data
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    loadMore(data) {
        this.staticPagination = data;
        this.actionList = [];
        if (this.filterFlag) {
            this.getActionList('filter');
        }
        else {
            this.getActionList('');
        }
    }
    /*
      @DESC : Sort table
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    sortData(sort) {
        this.sorting = sort;
        this.getActionList('');
    }
    /*
      @DESC : Shows popup for action details
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    openActionDetailsModal(data) {
        this.selectedActionRecDet = data;
        var modalRef;
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_1) {
            modalRef = this.modalService.open(this.stageOne, {
                windowClass: 'bottom',
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_2) {
            modalRef = this.modalService.open(this.stageTwo, {
                windowClass: 'bottom',
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_3) {
            modalRef = this.modalService.open(this.stageThree, {
                windowClass: 'bottom',
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_2_Verification) {
            modalRef = this.modalService.open(this.stageTwoVerification, {
                windowClass: 'bottom',
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_4) {
            modalRef = this.modalService.open(this.stageFour, {
                windowClass: 'bottom',
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_5) {
            modalRef = this.modalService.open(this.stageFive, {
                windowClass: 'bottom',
                backdrop: 'static'
            });
        }
        if (this.selectedActionRecDet.asstageCaption == this.constant.Stage_7) {
            modalRef = this.modalService.open(this.stageFive, {
                windowClass: 'bottom',
                backdrop: 'static'
            });
        }
        modalRef.result.then((result) => {
            this.getActionList('');
        }, (reason) => {
            this.getActionList('');
        });
    }
    /*
      @DESC : Shows popup for assessment details
      @Author: Shashi
      @Date : 25 Aug 2023
    */
    openAssessmentDetailsModal(modal, data) {
        this.selectedActionRecDet = data;
        var modalRef = this.modalService.open(modal, {
            windowClass: 'bottom',
        });
        modalRef.result.then((result) => {
            if (result === 'success') {
                // this.getassessmentDetails();
            }
        }, (reason) => {
            console.log(reason);
        });
    }
    // checkPrevDayTaskCompletion(dayNo: any) {
    //   let flag = true;
    //   if (dayNo > 1) {
    //     this.actionList.forEach(element => {
    //       if (element.stageId == 1) {
    //         if (dayNo > element.dayNo) {
    //           if (element.status == "PENDING") {
    //             flag = false;
    //           }
    //         }
    //       }
    //     });
    //   }
    //   return flag;
    // }
    checkPrevDayTaskCompletion(dayNo, activityDate) {
        let flag = true;
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set current time to midnight for accurate date comparison
        if (dayNo > 1) {
            this.actionList.forEach(element => {
                if (element.stageId == 1) {
                    const elementActivityDate = new Date(element.activityDate);
                    elementActivityDate.setHours(0, 0, 0, 0); // Set element's activity date to midnight
                    // Compare the activity dates using .getTime() to ensure they are numbers
                    const elementActivityDateTime = elementActivityDate.getTime();
                    const inputActivityDateTime = new Date(activityDate).setHours(0, 0, 0, 0);
                    if (elementActivityDateTime < inputActivityDateTime) {
                        if (element.status == "PENDING") {
                            flag = false;
                        }
                    }
                }
            });
        }
        // Additional check for the current task's activity date
        const activityDateObj = new Date(activityDate);
        activityDateObj.setHours(0, 0, 0, 0); // Set activityDate time to midnight
        if (activityDateObj.getTime() > currentDate.getTime()) {
            flag = false; // Task can't be performed if activityDate is in the future
        }
        return flag;
    }
    selectTab(tab) {
        this.selectedTab = tab;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
        console.log(this.selectedTab);
        this.getActionList('');
    }
};
ActionsComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
ActionsComponent.propDecorators = {
    stageOne: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageOne',] }],
    stageTwo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageTwo',] }],
    stageTwoVerification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageTwoVerification',] }],
    stageThree: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageThree',] }],
    stageFour: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageFour',] }],
    stageFive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stageFive',] }]
};
ActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-actions',
        template: _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: 'Constant', useValue: _actions_constant__WEBPACK_IMPORTED_MODULE_6__["CONSTANT"] }
        ],
        styles: [_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], Object])
], ActionsComponent);



/***/ }),

/***/ "df6L":
/*!******************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-two/stage-two.component.ts ***!
  \******************************************************************************/
/*! exports provided: StageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageTwoComponent", function() { return StageTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_two_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-two.component.html */ "e/zN");
/* harmony import */ var _stage_two_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-two.component.scss */ "Y/fa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _actions_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions.constant */ "yuR8");








let StageTwoComponent = class StageTwoComponent {
    constructor(actionsService, modalService, alertService, Constant) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.mainTab = 1;
        this.filterFlag = false;
        this.submitFormLoader = false;
        this.submitSpinner = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: '',
            masterSelected: ''
        };
        this.submitLoading = false;
        //enableCompletedBtn: boolean = false;
        this.enableSubmitBtn = false;
        this.listLoading = false;
        this.trainingProdDetails = {};
        this.completedBtnStatus = false;
        this.notCompletedBtnStatus = false;
        this.userDet = {};
        this.constant = {};
        this.isDisableStatus = false;
        /*
          @DESC : Returns selected tab id
          @Author: Jayshri Kolase
          @Date : 06 Sep 2023
        */
        this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
        };
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.actionDet);
        this.getTrainingList();
    }
    /*
      @DESC : Selects tab
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    setMainTab(tabId) {
        this.mainTab = tabId;
        if (this.mainTab == 1) {
            this.getTrainingList();
        }
    }
    ;
    /*
      @DESC : Calls api and show training task list in table
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    getTrainingList() {
        this.trainingProdDetails.auditPointList = [];
        let reqBody = {};
        this.listLoading = true;
        reqBody = {
            "skillingId": this.actionDet.skillingId,
            "skillingAuditId": this.actionDet.auditId //auditId
        };
        this.actionsService.getTrainingList(reqBody).subscribe((response) => {
            this.listLoading = false;
            if (response.result) {
                if (response.actionDetails) {
                    if (response.actionDetails.auditPointList != null && response.actionDetails.auditPointList) {
                        for (let index = 0; index < response.actionDetails.auditPointList.length; index++) {
                            response.actionDetails.auditPointList[index].selectedStatus = '';
                        }
                    }
                    else {
                        this.trainingProdDetails.auditPointList = [];
                    }
                    this.trainingProdDetails = response.actionDetails;
                }
                else {
                    this.trainingProdDetails.auditPointList = [];
                }
            }
            else {
                this.trainingProdDetails.auditPointList = [];
            }
        }, (error) => {
        });
    }
    /*
      @DESC : Sort table
      @Author: Jayshri Kolase
      @Date : 06 Sep 2023
    */
    sortData(sort) {
        this.sorting = sort;
        if (this.mainTab == 1) {
            this.getTrainingList();
        }
    }
    onChangeComplete(event, data) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                // this.trainingProdDetails.auditPointList.forEach(element => {
                //   if (element.id == data.id) {
                //     element.selectedStatus = event.target.value;
                //   }
                // });
                let selectStatusLength = this.trainingProdDetails.auditPointList.filter(x => x.selectedStatus == event.target.value).length;
                this.searchDet.masterSelected = (selectStatusLength == this.trainingProdDetails.auditPointList.length) ? event.target.value : '';
            }
            //this.isCompletedAllSelected();
            this.isAllSelected();
        }
    }
    onChangeCompleteAll(event) {
        if (event) {
            if (this.trainingProdDetails.auditPointList != null && this.trainingProdDetails.auditPointList.length > 0) {
                this.trainingProdDetails.auditPointList.forEach(element => {
                    element.selectedStatus = event.target.value;
                });
                this.searchDet.masterSelected = event.target.value;
            }
            //this.isCompletedAllSelected();
            this.isAllSelected();
        }
    }
    // isCompletedAll() {
    //   this.completedBtnStatus = true;
    //   this.trainingProdDetails.auditPointList.forEach(element => {
    //     if (element.status !== "COMPLETED") {
    //       this.completedBtnStatus = false;
    //     }
    //     else {
    //       element.completed = "COMPLETED";
    //     }
    //   });
    // }
    // isCompletedAllSelected() {
    //   this.enableCompletedBtn = true;
    //   this.trainingProdDetails.auditPointList.forEach(element => {
    //     if (element.selectedStatus !== "COMPLETED") {
    //       this.enableCompletedBtn = false;
    //       return;
    //     }
    //   });
    // }
    isCompletedAllSelected() {
        let flag = true;
        this.trainingProdDetails.auditPointList.forEach(element => {
            if (element.selectedStatus != "COMPLETED") {
                flag = false;
            }
        });
        return flag;
    }
    isAllSelected() {
        this.enableSubmitBtn = true;
        this.trainingProdDetails.auditPointList.forEach(element => {
            if (element.selectedStatus !== "COMPLETED" && element.selectedStatus !== "NOT COMPLETED") {
                this.enableSubmitBtn = false;
                return;
            }
        });
    }
    submitStageTwoStatus() {
        if (!this.enableSubmitBtn) {
            this.alertService.error("Please select status of each row.");
            return;
        }
        this.submitLoading = true;
        let auditList = [];
        this.trainingProdDetails.auditPointList.forEach(element => {
            auditList.push({
                id: element.pointAuditId,
                status: element.selectedStatus,
                skillingAuditId: element.skillingAuditId,
                ojtPointId: element.ojtPointId,
                checksheetPointId: element.checksheetPointId,
            });
        });
        if (auditList != null && auditList.filter(x => x.status == '').length == this.trainingProdDetails.auditPointList.length) {
            this.submitFormLoader = false;
            this.alertService.error('Please select status of each row.');
            return;
        }
        if (this.trainingProdDetails.comment == null || this.trainingProdDetails.comment == undefined || this.trainingProdDetails.comment == '') {
            this.submitLoading = false;
            this.alertService.error('Please enter comment.');
            return;
        }
        let reqBody;
        reqBody = {
            // empId: 36,
            trainerEmpId: this.trainingProdDetails.trainerEmpId,
            oeEmpId: this.trainingProdDetails.oeEmpId,
            branchId: this.trainingProdDetails.branchId,
            skillLevelId: this.trainingProdDetails.levelId,
            deptId: this.trainingProdDetails.deptId,
            lineId: this.trainingProdDetails.lineId,
            workstationId: this.trainingProdDetails.workstationId,
            stageId: this.trainingProdDetails.stageId,
            skillingAuditId: this.trainingProdDetails.skillingAuditId,
            status: this.isCompletedAllSelected() ? "COMPLETED" : "NOT COMPLETED",
            comment: this.trainingProdDetails.comment,
            skillingId: this.trainingProdDetails.skillingId,
            dayNo: this.trainingProdDetails.dayNo,
            checkSheetId: this.trainingProdDetails.checksheetId,
            skillingChecksheetId: this.trainingProdDetails.skillingChecksheetId,
            csPointAuditList: auditList,
            tlEmpId: this.trainingProdDetails.tlEmpId,
            ojtRegiId: this.trainingProdDetails.ojtRegiId,
        };
        console.log(reqBody);
        this.actionsService.submitStageTwoStatus(reqBody).subscribe((data) => {
            this.submitLoading = false;
            if (data.result) {
                this.alertService.success("Activity Submitted Successfully.");
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again");
                }
            }
        }, (error) => {
            this.submitLoading = false;
        });
    }
    closeModal() {
        this.modalService.dismissAll();
    }
};
StageTwoComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
StageTwoComponent.propDecorators = {
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
StageTwoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-two',
        template: _raw_loader_stage_two_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [
            { provide: 'Constant', useValue: _actions_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"] }
        ],
        styles: [_stage_two_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"], Object])
], StageTwoComponent);



/***/ }),

/***/ "e/zN":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-two/stage-two.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n            <div *ngIf=\"submitLoading\">\r\n                <app-loading></app-loading>\r\n            </div>\r\n            <div class=\"modal-body p-t-0 p-b-0\" style=\"padding: 0;\">\r\n                <div [style.height]=\"'calc(100vh - 38vh)'\">\r\n                    <div class=\"row modal-header stage-header\">\r\n                        <div class=\"col-11\">\r\n                            <div class=\"main-tab-switcher\">\r\n                                <div class=\"main-tab-switch\" [ngClass]=\"{'active':isSetMainTab(1)}\"\r\n                                    (click)=\"setMainTab(1)\">\r\n                                    <span>Training</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n                                <span>×</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"height: calc(100vh - 12%);\">\r\n                        <div class=\"table-block\">\r\n                            <div class=\"table-responsive tableFixHead\">\r\n                                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th mat-sort-header=\"DayNo\" class=\"fixedColumn\" style=\"text-align: center;\">\r\n                                                Day</th>\r\n                                            <th mat-sort-header=\"date\" class=\"\">Date</th>\r\n                                            <th mat-sort-header=\"keyPoint\" class=\"\">Key Point</th>\r\n                                            <th mat-sort-header=\"Ref\" class=\"\">Reference</th>\r\n                                            <th mat-sort-header=\"status\" class=\"\">OE Activity Status</th>\r\n                                            <th class=\"fixedColumn\"\r\n                                                *ngIf=\"this.actionDet.status == 'COMPLETED' || this.actionDet.status == 'REJECTED' || this.actionDet.status == 'NOT COMPLETED'\">\r\n                                                Status\r\n                                            </th>\r\n                                            <th class=\"fixedColumn p-0\" *ngIf=\"this.actionDet.status == 'PENDING'\">\r\n                                                <select style=\"width: fit-content;; border: none;\"\r\n                                                    class=\"custom-selectField form-control\"\r\n                                                    [(ngModel)]=\"searchDet.masterSelected\"\r\n                                                    (change)=\"onChangeCompleteAll($event)\">\r\n                                                    <option value=\"\">Select Status</option>\r\n                                                    <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                        {{'All '+opt.name}}</option>\r\n                                                </select>\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of trainingProdDetails.auditPointList\">\r\n                                            <td>{{item.dayNo}}</td>\r\n                                            <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                            <td>{{item.keyPoint}}</td>\r\n                                            <td>{{item.reference || ''}}</td>\r\n                                            <!-- <td>{{item.stageoneStatus}}</td> -->\r\n                                            <td class=\"completed\">COMPLETED</td>\r\n                                            <td class=\"fixedColumn\"\r\n                                                *ngIf=\"this.actionDet.status == 'COMPLETED' || this.actionDet.status == 'REJECTED' || this.actionDet.status == 'NOT COMPLETED'\"\r\n                                                [ngClass]=\"{'completed': this.actionDet.status == 'COMPLETED','pending': this.actionDet.status == 'PENDING','not-completed': this.actionDet.status == 'NOT COMPLETED'}\">\r\n                                                {{this.actionDet.status}}\r\n                                            </td>\r\n                                            <td class=\"fixedColumn p-0\" *ngIf=\"this.actionDet.status == 'PENDING'\">\r\n                                                <select class=\"custom-selectField form-control\"\r\n                                                    style=\"width: 100%; border: none;\"\r\n                                                    (change)=\"onChangeComplete($event, item)\"\r\n                                                    [(ngModel)]=\"item.selectedStatus\">\r\n                                                    <option value=\"\">Select Status</option>\r\n                                                    <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                        {{opt.name}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr\r\n                                            *ngIf=\"(trainingProdDetails.auditPointList == null || trainingProdDetails.auditPointList.length == 0)\">\r\n                                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                                Data Not Found\r\n                                            </td>\r\n                                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                                <app-loading></app-loading>\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row m-0\" *ngIf=\"trainingProdDetails.auditPointList[0].oeComment !== '' && trainingProdDetails.auditPointList[0].oeComment !== null\">\r\n                <div class=\"col-12\" style=\"display: inline-flex;padding-bottom: 10px;\">\r\n                    <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;width: 6rem;\">OE Comment</label>\r\n                    <textarea class=\"form-control textarea-custom\" id=\"comment\" name=\"comment\" [(ngModel)]=\"trainingProdDetails.auditPointList[0].oeComment\"\r\n                        rows=\"2\" placeholder=\"Comment\" disabled [maxlength]=\"1000\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer paginationFooter\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-9 p-0\" style=\"display: inline-flex;\">\r\n                            <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;display: contents;\">Comment <span class=\"astrik\">*  </span> </label>\r\n                                    <textarea class=\"form-control textarea-custom\" id=\"comment\" name=\"comment\" [(ngModel)]=\"trainingProdDetails.comment\" rows=\"2\"  placeholder=\"Comment\"  [maxlength]=\"1000\" [disabled]=\"actionDet.status != 'PENDING'\"></textarea>\r\n                    </div>\r\n                    <div class=\"col-3 text-right\">\r\n                        <ng-container *ngIf=\"actionDet.status == 'PENDING'\">\r\n                            <button type=\"button\" class=\"btn submitBtn btn-completed\" (click)=\"submitStageTwoStatus()\"\r\n                                [ngClass]=\"{'disable-btn' : enableSubmitBtn === false}\">Submit\r\n                            </button>\r\n                            <!-- <button type=\"button\" class=\"btn submitBtn btn-completed\" (click)=\"submitStageTwoStatus(true)\"\r\n                                [ngClass]=\"{'disable-btn' : enableCompletedBtn === false}\">Completed\r\n                                </button>\r\n                            <button type=\"button\" class=\"btn submitBtn btn-not-completed\" (click)=\"submitStageTwoStatus(false)\"\r\n                                style=\"margin-left: 10px; background: #f20000;\">Not\r\n                                Completed</button> -->\r\n                        </ng-container>\r\n                        <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                            style=\"margin-left: 10px;\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "e5O3":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/my-skilling/skill-matrix/skill-matrix-details/skill-matrix-details.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\n  display: none;\n}\n\n.expand {\n  display: block;\n}\n\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n\n.expand-card {\n  margin: 20px 0px;\n}\n\n.expand-card .title {\n  height: auto;\n  background-color: #7044cd;\n  color: white;\n  vertical-align: middle;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n\n.expand-card .title i {\n  float: right;\n  margin-top: 3px;\n}\n\n.expand-card .content {\n  min-height: 50px;\n  background-color: white;\n  padding: 15px 20px;\n  border-left: 1px solid #7044cd;\n  border-bottom: 1px solid #7044cd;\n  border-right: 1px solid #7044cd;\n}\n\n.expand-card .content .table-responsive {\n  margin-bottom: 20px;\n}\n\n.expand-card .content .table-responsive:last-child {\n  margin-bottom: 0px;\n}\n\n.expand-card .content .tableFixHead {\n  max-height: unset;\n  min-height: unset;\n  height: auto;\n}\n\n.expand-card .content .stage-title {\n  display: inline-flex;\n  background: #7044cd;\n  color: white;\n  padding: 8px;\n  height: auto;\n}\n\n.expand-card .content .stage-title .index {\n  margin-right: 10px;\n  background: #b395f1;\n  padding: 1px 6px;\n  font-size: 13px;\n}\n\n.expand-card .content .stage-title .text {\n  padding: 1px 0px;\n  font-size: 13px;\n}\n\n.expand-card .content .table {\n  margin-bottom: 0px;\n}\n\n.stage-header {\n  border-bottom: 3px solid #7044cd !important;\n}\n\n.stage-header .modal-title {\n  padding: 7px 12px;\n  color: #7044cd !important;\n}\n\n.expand-card:first-child {\n  margin-top: 0px;\n}\n\n.textarea-custom {\n  border: 1px solid #ccc;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n  max-height: 200px;\n  height: auto;\n  min-height: 65px;\n  resize: none;\n  padding: 10px;\n  font-family: Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNraWxsLW1hdHJpeC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUVJLGdCQUFBO0FBQUo7O0FBRUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFBUjs7QUFFUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBQVo7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUFGUjs7QUFJUTtFQUNJLG1CQUFBO0FBRlo7O0FBS1E7RUFDSSxrQkFBQTtBQUhaOztBQU1RO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFKWjs7QUFPUTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFMWjs7QUFPWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMaEI7O0FBUVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFOaEI7O0FBVVE7RUFDSSxrQkFBQTtBQVJaOztBQWlCQTtFQUNJLDJDQUFBO0FBZEo7O0FBZ0JJO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtBQWRSOztBQWtCQTtFQUNJLGVBQUE7QUFmSjs7QUFpQkE7RUFDSSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFkSiIsImZpbGUiOiJza2lsbC1tYXRyaXgtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmV4cGFuZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1vZGFsLWZvb3Rlci5wYWdpbmF0aW9uRm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4uZXhwYW5kLWNhcmQge1xyXG5cclxuICAgIG1hcmdpbjogMjBweCAwcHg7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRjZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNDRjZDtcclxuXHJcbiAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlLXJlc3BvbnNpdmU6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJsZUZpeEhlYWQge1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdGFnZS10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmluZGV4IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMzk1ZjE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgICAgICAvLyAudGFibGVGaXhIZWFkIHRhYmxlIHRib2R5IHRkLm5vLXJlY29yZC1mb3VuZCB7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0YWdlLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzcwNDRjZCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2QgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4cGFuZC1jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4udGV4dGFyZWEtY3VzdG9tIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4OyBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICByZXNpemU6IG5vbmU7IFxyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG59Il19 */");

/***/ }),

/***/ "eN5/":
/*!********************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/actions.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  border-left: none;\n  border-right: none;\n}\n\n.tableFixHead tr th:first-child(1),\n.tableFixHead tr td:first-child(1) {\n  width: 50px;\n  min-width: 50px;\n  max-width: 50px;\n  text-wrap: wrap;\n  word-break: break-word;\n}\n\n.tableFixHead tr th:nth-child(2),\n.tableFixHead tr td:nth-child(2) {\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n  left: 64px;\n  text-wrap: wrap;\n  word-break: break-word;\n}\n\n.tableFixHead tr th:nth-child(3),\n.tableFixHead tr td:nth-child(3) {\n  width: 200px;\n  min-width: 200px;\n  max-width: 200px;\n  left: 164px;\n  text-wrap: wrap;\n  word-break: break-word;\n}\n\n.tableFixHead tr th:nth-child(10),\n.tableFixHead tr td:nth-child(10) {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  right: 91px;\n  text-wrap: wrap;\n  word-break: break-word;\n}\n\n.tableFixHead tr th:last-child,\n.tableFixHead tr td:last-child {\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n  right: 0px;\n  text-wrap: wrap;\n  word-break: break-word;\n}\n\n.main-tab-switcher1 {\n  box-shadow: 0px 0px 5px 1px #e2e2e2;\n  padding: 2px;\n  background: white;\n  border-radius: 25px;\n  display: inline-flex;\n  color: #474747;\n  opacity: 1;\n  /* margin-top: 15px; */\n  position: relative;\n  top: 0px;\n  left: 11px;\n  margin-bottom: 10px;\n}\n\n.mainActiveSwitch {\n  background: #7044cd 0% 0% no-repeat padding-box;\n  padding: 3px 20px;\n  color: white;\n  border-radius: 25px;\n  line-height: 1.5;\n  box-shadow: 0px 0px 12px -2px #8f8d8f;\n}\n\n.main-tab-switch {\n  line-height: 1.5;\n  padding: 3px 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFLSTs7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFGUjs7QUFLSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIUjs7QUFNSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFKUjs7QUFPSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFMUjs7QUFRSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFOUjs7QUFVQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFVQTtFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBUEo7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVBKIiwiZmlsZSI6ImFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVGaXhIZWFkIHRhYmxlIC5maXhlZENvbHVtbiB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICAvLyB6LWluZGV4OiAyO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQge1xyXG5cclxuICAgIHRyIHRoOmZpcnN0LWNoaWxkKDEpLFxyXG4gICAgdHIgdGQ6Zmlyc3QtY2hpbGQoMSkge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHIgdGg6bnRoLWNoaWxkKDIpLFxyXG4gICAgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDY0cHg7XHJcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHIgdGg6bnRoLWNoaWxkKDMpLFxyXG4gICAgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDE2NHB4O1xyXG4gICAgICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHRoOm50aC1jaGlsZCgxMCksXHJcbiAgICB0ciB0ZDpudGgtY2hpbGQoMTApIHtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIHJpZ2h0OiA5MXB4O1xyXG4gICAgICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHRoOmxhc3QtY2hpbGQsXHJcbiAgICB0ciB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLXRhYi1zd2l0Y2hlcjEge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMXB4ICNlMmUyZTI7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIG1hcmdpbi10b3A6IDE1cHg7ICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDExcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWFpbkFjdGl2ZVN3aXRjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTJweCAjOGY4ZDhmO1xyXG59XHJcblxyXG4ubWFpbi10YWItc3dpdGNoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "fIuR":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-four/stage-four.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hidden {\n  display: none;\n}\n\n.expand {\n  display: block;\n}\n\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n\n.expand-card {\n  margin: 20px 0px;\n}\n\n.expand-card .title {\n  height: auto;\n  background-color: #7044cd;\n  color: white;\n  vertical-align: middle;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n\n.expand-card .title i {\n  float: right;\n  margin-top: 3px;\n}\n\n.expand-card .content {\n  min-height: 50px;\n  background-color: white;\n  padding: 15px 20px;\n  border-left: 1px solid #7044cd;\n  border-bottom: 1px solid #7044cd;\n  border-right: 1px solid #7044cd;\n}\n\n.expand-card .content .table-responsive {\n  margin-bottom: 20px;\n}\n\n.expand-card .content .table-responsive:last-child {\n  margin-bottom: 0px;\n}\n\n.expand-card .content .tableFixHead {\n  max-height: unset;\n  min-height: unset;\n  height: auto;\n}\n\n.expand-card .content .stage-title {\n  display: inline-flex;\n  background: #7044cd;\n  color: white;\n  padding: 8px;\n  height: auto;\n}\n\n.expand-card .content .stage-title .index {\n  margin-right: 10px;\n  background: #b395f1;\n  padding: 1px 6px;\n  font-size: 13px;\n}\n\n.expand-card .content .stage-title .text {\n  padding: 1px 0px;\n  font-size: 13px;\n}\n\n.expand-card .content .table {\n  margin-bottom: 0px;\n}\n\n.stage-header {\n  border-bottom: 3px solid #7044cd !important;\n}\n\n.stage-header .modal-title {\n  padding: 7px 12px;\n  color: #7044cd !important;\n}\n\n.expand-card:first-child {\n  margin-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLWZvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUNBO0VBRUksZ0JBQUE7QUFDSjs7QUFDSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSOztBQUNRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDWjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQURSOztBQUdRO0VBQ0ksbUJBQUE7QUFEWjs7QUFJUTtFQUNJLGtCQUFBO0FBRlo7O0FBS1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhaOztBQU1RO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUpaOztBQU1ZO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpoQjs7QUFPWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUxoQjs7QUFTUTtFQUNJLGtCQUFBO0FBUFo7O0FBZ0JBO0VBQ0ksMkNBQUE7QUFiSjs7QUFlSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFiUjs7QUFpQkE7RUFDSSxlQUFBO0FBZEoiLCJmaWxlIjoic3RhZ2UtZm91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5leHBhbmQtY2FyZCB7XHJcblxyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG5cclxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlRml4SGVhZCB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaW5kZXgge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzOTVmMTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgICAgIC8vIC50YWJsZUZpeEhlYWQgdGFibGUgdGJvZHkgdGQubm8tcmVjb3JkLWZvdW5kIHtcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhZ2UtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhwYW5kLWNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi8vIC50ZXh0YXJlYS1jdXN0b20ge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbi8vICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBcclxuLy8gICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4vLyAgICAgbWF4LWhlaWdodDogMjAwcHg7IFxyXG4vLyAgICAgaGVpZ2h0OiBhdXRvO1xyXG4vLyAgICAgbWluLWhlaWdodDogMTE2cHg7XHJcbi8vICAgICByZXNpemU6IG5vbmU7IFxyXG4vLyAgICAgcGFkZGluZzogMTBweDsgXHJcbi8vICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG4vLyB9Il19 */");

/***/ }),

/***/ "hbOD":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/skill-matrix/skill-matrix.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Skill Matrix\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n       \r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent p-l-15 p-r-15\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\"> -->\r\n                    <div class=\"p-l-0 p-r-5 col-12\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\"\r\n                                (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search here..\"\r\n                                [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                                <div class=\"filterDiv\">\r\n                                    <!-- <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp; -->\r\n                                    <!-- <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter Applied</span> -->\r\n                                </div>\r\n                            </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 p-0\"></div>\r\n            <div class=\"col-2 p-0 text-right\">\r\n                <div class=\"col-4 m-2\">\r\n                    <div class=\"excelbutton\">\r\n                        <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid\" (click)=\"exportToExcel()\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                        <th mat-sort-header=\"LevelName\">Level</th>\r\n                        <th mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th mat-sort-header=\"EmpName\">Emp ID</th>\r\n                        <th mat-sort-header=\"EmpName\">Emp Name</th>\r\n                        <th mat-sort-header=\"Status\">Status</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of skillMatrixDataList\">\r\n                        <td>{{item.branchName}}</td>\r\n                        <td>{{item.deptName}}</td>\r\n                        <td>{{item.lineName}}</td>\r\n                        <td>{{item.level}}</td>\r\n                        <td>{{item.workstationName }}</td>\r\n                        <td>{{item.companyEmpId}}</td>\r\n                        <td>{{item.empName || '-'}}</td>\r\n                        <td>{{item.status}}</td>\r\n                        <td class=\"text-left\"><a style=\"color:#7044CD;cursor: pointer\"><i class=\"fa fa-eye viewIcon\"\r\n                                    (click)=\"handleIconClick(item,skillMatrixDetails)\"></i></a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(skillMatrixDataList == null || skillMatrixDataList.length == 0)\">\r\n                        <td colspan=\"6\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"6\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\">\r\n        </app-pagination>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'plant')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branch\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please Select Plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(departmentList,'dept')\" formControlName=\"deptIds\"\r\n                            [(ngModel)]=\"searchDet.deptIds\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\" (onSelectAll)=\"onChangeAll($event,'dept')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvlId\" id=\"skillLvlId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(masterLevelList,'level')\" formControlName=\"skillLvlId\"\r\n                            [(ngModel)]=\"searchDet.skillLvlId\" (onSelect)=\"onChange($event,'level')\"\r\n                            (onDeSelect)=\"onChange(false,'level')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" submitAttempted && filterData.controls['skillLvlId'].invalid && (filterData.controls['skillLvlId'].touched || filterData.controls['skillLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['skillLvlId'].errors.required\">\r\n                                Please Select Level\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Workstation</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(workstationList,'work')\" formControlName=\"workstation\"\r\n                            [(ngModel)]=\"searchDet.workstation\" (onSelect)=\"onChange($event,'workstation')\"\r\n                            (onDeSelect)=\"onChange(false,'workstation')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'Workstation')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'Workstation')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['workstation'].invalid && (filterData.controls['workstation'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['workstation'].errors.required\">\r\n                                Please select cell\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n\r\n<ng-template #skillMatrixDetails let-modal let-c=\"close\">\r\n    <app-skill-matrix-details [selectedDetail]=\"selectedOjtDetails\"></app-skill-matrix-details>\r\n</ng-template>");

/***/ }),

/***/ "iZdW":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-three/stage-three.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n            <div *ngIf=\"submitLoading\">\r\n                <app-loading></app-loading>\r\n            </div>\r\n            <div class=\"modal-body p-t-0 p-b-0\" style=\"padding: 0;\">\r\n                <div [style.height]=\"'calc(100vh - 38vh)'\">\r\n                    <div class=\"row modal-header stage-header\">\r\n                        <div class=\"col-11\">\r\n                            <div class=\"main-tab-switcher\">\r\n                                <div class=\"main-tab-switch\" [ngClass]=\"{'active':isSetMainTab(1)}\"\r\n                                    (click)=\"setMainTab(1)\">\r\n                                    <span>Training</span>\r\n                                </div>\r\n                                <div class=\"main-tab-switch\"\r\n                                    *ngIf=\"trainingProdDetails.parameterList != null && trainingProdDetails.parameterList.length > 0\"\r\n                                    [ngClass]=\"{'active':isSetMainTab(2)}\" (click)=\"setMainTab(2)\">\r\n                                    <span>Production</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-1\">\r\n                            <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n                                <span>×</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"height: calc(100vh - 12%);\">\r\n                        <div class=\"table-block\" *ngIf=\"isSetMainTab(1)\">\r\n                            <div class=\"table-responsive tableFixHead\">\r\n                                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th mat-sort-header=\"DayNo\" class=\"fixedColumn\" style=\"text-align: center;\">\r\n                                                Day</th>\r\n                                            <th mat-sort-header=\"date\" class=\"\">Date</th>\r\n                                            <th mat-sort-header=\"keyPoint\" class=\"\">Key Point</th>\r\n                                            <th mat-sort-header=\"Ref\" class=\"\">Reference</th>\r\n                                            <th class=\"\">OE Activity Status</th>\r\n                                            <th class=\"\">Trainer Confirmation Status</th>\r\n                                            <th class=\"fixedColumn\"\r\n                                                *ngIf=\"this.actionDet.status == 'COMPLETED' || this.actionDet.status == 'NOT COMPLETED'\">\r\n                                                Status</th>\r\n                                            <th class=\"fixedColumn p-0\" *ngIf=\"this.actionDet.status == 'PENDING'\">\r\n                                                <select style=\"width:fit-content; border: none;\"\r\n                                                    class=\"custom-selectField form-control\"\r\n                                                    [(ngModel)]=\"searchDet.masterSelected\"\r\n                                                    (change)=\"onChangeCompleteAll($event)\"\r\n                                                    [disabled]=\"actionDet.status == 'COMPLETED'\">\r\n                                                    <option value=\"\">Select Status</option>\r\n                                                    <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                        {{'All '+opt.name}}</option>\r\n                                                </select>\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of trainingProdDetails.auditPointList\">\r\n                                            <td>{{item.dayNo}}</td>\r\n                                            <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                            <td>{{item.keyPoint}}</td>\r\n                                            <td>{{item.reference || ''}}</td>\r\n                                            <td\r\n                                                [ngClass]=\"{'completed':item.oeStatus == 'COMPLETED','pending':item.oeStatus == 'PENDING'}\">\r\n                                                {{item.oeStatus || ''}}</td>\r\n                                            <td\r\n                                                [ngClass]=\"{'completed':item.trainerStatus == 'COMPLETED','pending':item.trainerStatus == 'PENDING','rejected':item.trainerStatus == 'REJECTED'}\">\r\n                                                {{item.trainerStatus|| ''}}</td>\r\n                                            <td class=\"fixedColumn\"\r\n                                                *ngIf=\"this.actionDet.status == 'COMPLETED' || this.actionDet.status == 'NOT COMPLETED'\"\r\n                                                [ngClass]=\"{'completed': this.actionDet.status == 'COMPLETED','not-completed': this.actionDet.status == 'NOT COMPLETED'}\">\r\n                                                {{actionDet.status}}\r\n                                            </td>\r\n                                            <td class=\"fixedColumn p-0\" *ngIf=\"this.actionDet.status == 'PENDING'\">\r\n                                                <select class=\"custom-selectField form-control\"\r\n                                                    style=\"width: 100%; border: none;\"\r\n                                                    (change)=\"onChangeComplete($event, item)\"\r\n                                                    [(ngModel)]=\"item.selectedStatus\"\r\n                                                    [disabled]=\"actionDet.status == 'COMPLETED'\">\r\n                                                    <option value=\"\">Select Status</option>\r\n                                                    <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                        {{opt.name}}</option>\r\n                                                </select>\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr\r\n                                            *ngIf=\"(trainingProdDetails.auditPointList == null || trainingProdDetails.auditPointList.length == 0)\">\r\n                                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                                Data Not Found\r\n                                            </td>\r\n                                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                                <app-loading></app-loading>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"table-block\"\r\n                            *ngIf=\"isSetMainTab(2) && trainingProdDetails.parameterList != null && trainingProdDetails.parameterList.length > 0\">\r\n                            <div class=\"table-responsive tableFixHead\">\r\n                                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\" rowspan=\"2\">Day</th>\r\n                                            <th scope=\"col\" rowspan=\"2\">Date</th>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\">\r\n                                                    <ng-container *ngIf=\"getCycleValue() > 0\">\r\n                                                        <th scope=\"col\" colspan=\"2\">Production</th>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Text')\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('Text', 0)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Number')\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('Number', 0)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Datetime') && getParamaterLabelByIndex('DateTime', 0) !=0\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('DateTime', 0)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Datetime') && getParamaterLabelByIndex('DateTime', 1) !=0\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('DateTime', 1)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Model') && getParamaterLabelByIndex('Model', 0) !=0\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('Model', 0)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Model') && getParamaterLabelByIndex('Model', 1) !=0\">\r\n                                                <th scope=\"col\" rowspan=\"2\">{{getParamaterLabelByIndex('Model', 1)}}\r\n                                                </th>\r\n                                            </ng-container>\r\n                                            <!-- <th scope=\"col\" colspan=\"2\" *ngIf=\"getCycleValue() > 0\">Production</th> -->\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'Gap'\">\r\n                                                    <th scope=\"col\" rowspan=\"2\">Gap Reason</th>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\">\r\n                                                    <ng-container *ngFor=\"let x of prm.cyclePlanList; let i = index\">\r\n                                                        <th scope=\"col\" colspan=\"2\" style=\"text-align: center;\">Cycle {{\r\n                                                            i + 1 }}</th>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\">\r\n                                                    <th scope=\"col\">Plan</th>\r\n                                                    <th scope=\"col\">Actual</th>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\">\r\n                                                    <ng-container\r\n                                                        *ngFor=\"let cycle of prm.cyclePlanList; let cycleIndex = index\">\r\n                                                        <th scope=\"col\">Standard</th>\r\n                                                        <th scope=\"col\">Actual</th>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>{{trainingProdDetails.auditPointList[0].dayNo}}</td>\r\n                                            <td>{{trainingProdDetails.auditPointList[0].assignedDate | date:\r\n                                                'dd-MM-yyyy'}}</td>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\">\r\n                                                    <td>{{prm.parameterValue}}</td>\r\n                                                    <td>{{getCycleValue()}}</td>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Text')\">\r\n                                                <td>{{getParamaterDataByIndex('Text', 0)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Number')\">\r\n                                                <td>{{getParamaterDataByIndex('Number', 0)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Datetime') && getParamaterDataByIndex('Datetime', 0) !=0\">\r\n                                                <td>{{getParamaterDataByIndex('Datetime', 0)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Datetime') && getParamaterDataByIndex('Datetime', 1) !=0\">\r\n                                                <td>{{getParamaterDataByIndex('Datetime', 1)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Model') && getParamaterDataByIndex('Model', 0) !=0\">\r\n                                                <td>{{getParamaterDataByIndex('Model', 0)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"isVisibleParam('Model') && getParamaterDataByIndex('Model', 1) !=0\">\r\n                                                <td>{{getParamaterDataByIndex('Model', 1)}}</td>\r\n                                            </ng-container>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'Gap'\">\r\n                                                    <td>{{prm.parameterValue || \"No\"}}</td>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container\r\n                                                *ngFor=\"let prm of trainingProdDetails.parameterList; let prmIndex = index\">\r\n                                                <ng-container *ngIf=\"prm.parameterType === 'cyclePlan'\"\r\n                                                    ng-init=\"trainingProdDetails.cycleValue = 'TEST 1'\">\r\n                                                    <ng-container\r\n                                                        *ngFor=\"let cycle of prm.cyclePlanList; let cycleIndex = index\">\r\n                                                        <td>{{cycle.expectedValue}}</td>\r\n                                                        <td>{{cycle.actualValue}}</td>\r\n                                                    </ng-container>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row m-0\" *ngIf=\"trainingProdDetails.auditPointList[0].oeComment !== '' && trainingProdDetails.auditPointList[0].oeComment !== null\">\r\n                <div class=\"col-12\" style=\"display: inline-flex;padding-bottom: 10px;\">\r\n                    <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;width: 12.5rem;\">OE Comment</label>\r\n                    <textarea class=\"form-control textarea-custom\" id=\"oeComment\" name=\"oeComment\" [(ngModel)]=\"trainingProdDetails.auditPointList[0].oeComment\"\r\n                        rows=\"2\" placeholder=\"Comment\" disabled [maxlength]=\"1000\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"row m-0\" *ngIf=\"trainingProdDetails.auditPointList[0].trainerActComment !== '' && trainingProdDetails.auditPointList[0].trainerActComment !== null\">\r\n                <div class=\"col-12\" style=\"display: inline-flex;padding-bottom: 10px;\">\r\n                    <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;width: 12.5rem;\">Trainer Activity Comment</label>\r\n                    <textarea class=\"form-control textarea-custom\" id=\"trainerActComment\" name=\"trainerActComment\" [(ngModel)]=\"trainingProdDetails.auditPointList[0].trainerActComment\"\r\n                        rows=\"2\" placeholder=\"Comment\" disabled [maxlength]=\"1000\"></textarea>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer paginationFooter\">\r\n                <div class=\"row m-0\">\r\n                    <!-- <div class=\"col-7 p-0\">\r\n                        <div class=\"form-group m-0 row\">\r\n                            <label for=\"comment\" class=\"col-sm-2 col-form-label\">Comment</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"text\" placeholder=\" \" id=\"comment\" name=\"comment\"\r\n                                    class=\"custom-inputField\" [(ngModel)]=\"trainingProdDetails.comment\"\r\n                                    [disabled]=\"actionDet.status == 'COMPLETED'\" />\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-9 p-0\" style=\"display: inline-flex;\">\r\n                        <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;display: contents;\">Comment <span class=\"astrik\">*  </span></label>\r\n                                <textarea class=\"form-control textarea-custom\" id=\"comment\" name=\"comment\" [(ngModel)]=\"trainingProdDetails.comment\" rows=\"2\"  placeholder=\"Comment\"  [maxlength]=\"1000\" [disabled]=\"actionDet.status != 'PENDING'\"></textarea>\r\n                </div>\r\n                    <div class=\"col-3 text-right\">\r\n                        <ng-container *ngIf=\"actionDet.status == 'PENDING'\">\r\n                            <button type=\"button\" class=\"btn submitBtn btn-completed\"\r\n                                (click)=\"submitStageThreeStatus(true)\"\r\n                                [ngClass]=\"{'disable-btn' : enableCompletedBtn === false}\">Completed</button>\r\n                            <button type=\"button\" class=\"btn submitBtn btn-not-completed\"\r\n                                (click)=\"submitStageThreeStatus(false)\" style=\"margin-left: 10px;\">Not\r\n                                Completed</button>\r\n                        </ng-container>\r\n                        <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                            style=\"margin-left: 10px;\">Cancel</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "lnmk":
/*!**************************************************************************!*\
  !*** ./src/app/modules/my-skilling/assessments/assessments.component.ts ***!
  \**************************************************************************/
/*! exports provided: AssessmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentsComponent", function() { return AssessmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assessments.component.html */ "QTPD");
/* harmony import */ var _assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessments.component.scss */ "7Q1W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _assessments_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessments.service */ "0tSj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let AssessmentsComponent = class AssessmentsComponent {
    constructor(modalService, assessmentService, fb) {
        this.modalService = modalService;
        this.assessmentService = assessmentService;
        this.fb = fb;
        this.loggedInEmpDet = {};
        this.selectedBranch = {};
        this.worksatationData = [];
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.listLoading = false;
        this.isUpload = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: ''
        };
        this.submitSpinner = false;
        this.filterFlag = false;
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.selectedAssessmentDetail = {};
        this.submitAttempted = false;
        this.cellList = [];
    }
    ngOnInit() {
        this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            // itemsShowLimit: 3,
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            masterWork: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.getAccessiblePlantList();
        this.getMasterSkillLevelList();
        this.getAssessmentList('');
    }
    getCheckedValue() {
        return true;
    }
    /*
      @DESC : Function to clear pagination
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    // My skilling Assessment modal
    // author simran
    // created date 29/08/2023
    // description : open assessment modal
    openViewModal(modal, data) {
        console.log(data);
        this.selectedRecForModal = '';
        this.selectedRecForModal = data;
        this.selectedAssessmentDetail = data;
        console.log(this.selectedRecForModal);
        var modalRef = this.modalService.open(modal, {
            windowClass: 'right'
        });
        // modalRef.componentInstance.selectedDet = data;
        modalRef.result.then((result) => {
            if (result === 'success') {
            }
        }, (reason) => {
        });
    }
    // My skilling Assessment 
    // author simran
    // created date 29/08/2023
    // description : you will get list here
    getAssessmentList(searchFilter) {
        this.assessementList = [];
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let req = {
            'orgId': this.loggedInEmpDet.organization.orgId,
            'empId': this.loggedInEmpDet.empId,
            'offset': this.staticPagination.offset,
            'limit': this.staticPagination.itemsPerPage,
        };
        if (searchFilter == 'filter') {
            if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
                req.branchId = this.searchDet.branchId[0].id;
            }
            if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
                req.deptIds = this.getIDsArray(this.searchDet.deptIds);
            }
            if (this.searchDet.lineIds != null && this.searchDet.lineIds.length > 0) {
                req.lineIds = this.getIDsArray(this.searchDet.lineIds);
            }
            if (this.searchDet.masterWorkList != null && this.searchDet.masterWorkList.length > 0) {
                req.workstationIds = this.getIDsArray(this.searchDet.masterWorkList);
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
            }
        }
        console.log(req);
        this.assessmentService.getAssessmentList('apis/sm/getOJTAssessmentsList', req).subscribe((response) => {
            if (response.result) {
                console.log(response);
                this.staticPagination.total = (response.dataList != null && response.dataList.length > 0) ? response.dataList.length : 0;
                this.staticPagination.totalPages = (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
                if (response.dataList != null && response.dataList.length > 0) {
                    this.assessementList = response.dataList;
                    console.log(this.assessementList);
                    this.assessmentDetailId = this.selectedAssessmentDetail.ojtAssessmentId;
                    this.staticPagination.listLength = this.assessementList.length;
                }
                else {
                    this.assessementList = [];
                    this.staticPagination.listLength = this.assessementList.length;
                }
            }
            else {
                this.assessementList = [];
                this.listLoading = false;
                this.staticPagination.listLength = this.assessementList.length;
            }
        });
    }
    filterModalOpen(modal) {
        this.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
        this.getAssessmentList('filter');
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get branch list
    getAccessiblePlantList() {
        this.assessmentService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.loggedInEmpDet.organization.orgId + "/" + this.loggedInEmpDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    this.searchDet.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    // this.selectedBranch.selectedBranched = [this.plantList[0]];
                    // this.selectedBranch.branch = [this.plantList[0]];
                    console.log(this.selectedBranch.branch); // Corrected assignment 
                }
                else {
                    this.plantList = [{ id: this.loggedInEmpDet.branch.branchId, name: this.loggedInEmpDet.branch.name }];
                }
            }
            else {
                this.plantList = [{ id: this.loggedInEmpDet.branch.branchId, name: this.loggedInEmpDet.branch.name }];
            }
            // this.searchDet.branchId = [this.searchDet.plantList[0]];
            // this.getMasterDepartmentList(this.searchDet.branchId[0]);
            // this.getAssessmentList('');
            // this.getMasterDepartmentList();
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get level list
    getMasterSkillLevelList() {
        this.assessmentService.getMasterLevelList('apis/sm/getLevelList').subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.masterLevelList = this.setArray(res.dataList, 'id', 'levelName');
                    this.searchDet.masterLevel = this.setArray(res.dataList, 'id', 'levelName');
                    this.searchDet.masterLevel = [this.searchDet.masterLevel[0]];
                    console.log(this.searchDet.masterLevel);
                    // this.searchDet.skillLvlId = [this.masterLevelList[0]];
                }
                else {
                    this.masterLevelList = [];
                }
            }
            else {
                this.masterLevelList = [];
            }
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get department list
    getMasterDepartmentList(selectedBranchId) {
        this.assessmentService.getMasterDepartmentList('getdepartmentlistbybranchid/' + selectedBranchId.id).subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.deptList != null && res.deptList.length > 0) {
                    this.masterDeptList = this.setArray(res.deptList, 'deptId', 'deptName');
                    this.searchDet.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    console.log(this.searchDet.departmentList);
                    // this.searchDet.deptIds = this.searchDet.departmentList;
                    // this.getWorkstationList();
                    // this.searchDet.skillLvlId = [this.masterLevelList[0]];
                }
                else {
                    this.masterDeptList = [];
                }
            }
            else {
                this.masterDeptList = [];
            }
        });
    }
    getCellList() {
        if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0 && this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
            var req = {
                branchId: this.searchDet.branchId[0].id
            };
            if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
                req.deptId = this.searchDet.deptIds[0].id;
            }
            this.assessmentService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
                if (response.result) {
                    if (response.dataList != null && response.dataList.length > 0) {
                        // for (let index = 0; index < response.dataList.length; index++) {
                        //   response.dataList[index].tmpName = '';
                        //   if (response.dataList[index].lineName) {
                        //     response.dataList[index].tmpName += response.dataList[index].lineName;
                        //     if (response.dataList[index].deptName) {
                        //       response.dataList[index].tmpName += ' (Department : ' + response.dataList[index].deptName + ')';
                        //     }
                        //   }
                        // }
                        this.cellList = this.setArray(response.dataList, 'lineId', 'tmpName');
                        this.searchDet.cellList = this.setArray(response.dataList, "lineId", "lineName");
                        this.searchDet.cell = [];
                        console.log(this.searchDet.cellList);
                    }
                    else {
                        this.cellList = [];
                        this.searchDet.cellList = [];
                    }
                }
                else {
                    this.cellList = [];
                    this.searchDet.cellList = [];
                }
            });
        }
        else {
            this.cellList = [];
        }
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will workstation list
    getWorkstationList() {
        this.listLoading = true;
        // let deptIds = [];
        let getReq = {
            "orgId": this.loggedInEmpDet.organization.orgId,
            "branchId": this.searchDet.branchId[0].id,
        };
        console.log(this.searchDet.deptIds);
        if (this.getIDsArray(this.searchDet.deptIds) != null && this.getIDsArray(this.searchDet.deptIds).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.searchDet.deptIds).length; i++) {
                getReq.deptIds = this.getIDsArray(this.searchDet.deptIds);
                console.log(getReq.deptIds);
            }
        }
        console.log(getReq);
        this.assessmentService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
            console.log(response);
            this.listLoading = false;
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.worksatationData = response.dataList;
                    this.masterWorkList = this.setArray(response.dataList, 'id', 'workstation');
                    this.searchDet.masterWorkStationList = this.setArray(response.dataList, 'id', 'workstation');
                    // this.searchDet.masterWorkList = this.searchDet.masterWorkStationList;
                    console.log(this.searchDet.masterWorkList);
                }
                else {
                    this.worksatationData = [];
                }
            }
            else {
                this.worksatationData = [];
            }
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 31/08/2023
    // description : when you change branch
    onChangeBranch(event) {
        console.log(event);
        this.selectedBranch.branchId = event.id;
        this.getMasterDepartmentList(this.selectedBranch.branchId);
        // this.getWorkstationList();
    }
    /*
         Single Select Dropdown onChange function
         Author: Mahesh W
         Date : 21 Aug 2023
     */
    onChange(ev, type) {
        if (ev) {
            if (type == 'plant') {
                this.getMasterDepartmentList(ev);
                this.searchDet.deptIds = [];
                this.searchDet.lineIds = [];
                this.searchDet.deptIds = [];
                this.masterDeptList = [];
            }
            if (type == 'dept') {
                this.searchDet.lineIds = [];
                this.getWorkstationList();
                this.getCellList();
            }
        }
        else {
            if (type == 'plant') {
                console.log("in");
                if (this.searchDet) {
                    console.log("out");
                    this.searchDet.departmentList = [];
                    this.resetFormField(this.filterData, 'deptIds');
                }
                else {
                }
            } /*else if (type == 'dept') {
            } else if (type == 'userType') { }*/
        }
    }
    /*
         Multi Select Dropdown onChange function
         Author: Mahesh W
         Date : 21 Aug 2023
     */
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
    }
    setArray(array, key1, key2) {
        let tmpArray = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                element.id = element[key1];
                element.name = element[key2];
                tmpArray.push(element);
            }
        }
        return tmpArray;
    }
    /*
       Load More Pagination next page Data
       @Author : Simran
       @Date : 30/08/2023
     */
    loadMore(ev) {
        this.staticPagination = ev;
        if (this.filterFlag) {
            this.getAssessmentList('filter');
        }
        else {
            this.getAssessmentList('');
        }
    }
    sortData(sort) {
        this.sorting = sort;
        console.log(this.sorting);
        this.getAssessmentList('');
    }
    /*
       Apply filter function
       Author: simran
       Date : 30/08/2023
  */
    submitFilterForm(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.clearPagination();
        this.searchDet.filterFlag = true;
        this.getAssessmentList('filter');
        this.modalService.dismissAll();
    }
    /*
      Remove Filter
      Author : simran
      Date : 30/08/2023
    */
    removeFilter() {
        this.submitAttempted = false;
        this.filterData.patchValue({
            branchId: [],
            skillLvlId: []
            // branchId: [this.plantList[0]],
            // skillLvlId: [this.masterLevelList[0]]
        });
        this.searchDet.branchId = [];
        this.searchDet.skillLvlId = [];
        // this.searchDet.branchId = [this.plantList[0]];
        // this.searchDet.skillLvlId = [this.masterLevelList[0]];
        this.searchDet.filterFlag = false;
        this.getAssessmentList('');
    }
    /*
       Reset Form function
       Author: Simran
       Date : 30/08/2023
   */
    resetFormField(form, keyName) {
        if (keyName != '') {
            Object.keys(form.controls).forEach(key => {
                if (key == keyName) {
                    form.get(keyName).reset();
                    form.get(keyName).markAsPristine();
                    form.get(keyName).markAsUntouched();
                }
            });
        }
        else {
            Object.keys(form.controls).forEach(key => {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            });
        }
    }
    /*
       Common function For get Ids from array
       Author: simran
       Date : 01/09/2023
   */
    getIDsArray(array) {
        let tmp = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                tmp.push(element.id);
            }
        }
        return tmp;
    }
    /*
      Common function For Searching
      Author: simran
      Date : 09/09/2023
  */
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getAssessmentList('filter');
        }
        else {
            this.getAssessmentList('');
        }
    }
    getSortFunction(array, fieldToSort) {
        console.log(array, fieldToSort);
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "plant" || fieldToSort === "cell" || fieldToSort === "level" || fieldToSort === "work") {
                array.sort(function (a, b) {
                    var nameA = a.name ? a.name.toUpperCase() : "";
                    var nameB = b.name ? b.name.toUpperCase() : "";
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return array;
    }
};
AssessmentsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _assessments_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
AssessmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessments',
        template: _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _assessments_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentsService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], AssessmentsComponent);



/***/ }),

/***/ "m2za":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/skill-matrix/skill-matrix-details/skill-matrix-details.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row modal-header stage-header\">\r\n    <div class=\"col-11\">\r\n        <div class=\"modal-title\">OJT Registartion Details</div>\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n            <span>×</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"dayList\" class=\"modal-body\" style=\"height: 86.5%;padding-bottom: 0px;\">\r\n    <perfect-scrollbar [style.max-height]=\"'calc(81vh)'\">\r\n        <div class=\"expand-card\" *ngFor=\"let skilling of dayWiseAuditList; let k = index;\">\r\n            <div class=\"title\" (click)=\"expandSkilling(k)\">Skilling {{k\r\n                + 1}}<i class=\"fa\"\r\n                    [ngClass]=\"{'fa-minus': skilling.expand === true, 'fa-plus': skilling.expand === undefined || skilling.expand === false}\"\r\n                    aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"content hidden\" [ngClass]=\"{'expand': skilling.expand}\">\r\n                <div class=\"table-block\">\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList\r\n                    ; let i = index;\">\r\n                        <div *ngIf=\"!day.tlAudit && !day.assessmentAudit\" class=\"title\" (click)=\"expand(k,i)\">Day {{i\r\n                            + 1}}<i class=\"fa\"\r\n                                [ngClass]=\"{'fa-minus': day.expand === true, 'fa-plus': day.expand === undefined || day.expand === false}\"\r\n                                aria-hidden=\"true\"></i></div>\r\n                        <div class=\"content hidden\" *ngIf=\"!day.tlAudit && !day.assessmentAudit\"\r\n                            [ngClass]=\"{'expand': day.expand && !day.tlAudit && !day.assessmentAudit}\">\r\n                            <div class=\"table-block\">\r\n                                <ng-container *ngFor=\"let audit of day.dayAudit\">\r\n                                    <div class=\"table-responsive tableFixHead\">\r\n                                        <div class=\"stage-title\">\r\n                                            <div class=\"index\">{{audit.stageId}}</div>\r\n                                            <div class=\"text\">{{audit.stage}} ( {{audit.empName}} )</div>\r\n                                        </div>\r\n                                        <table class=\"table\" matSort *ngIf=\"audit.stageId == 1\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo || ''}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint || ''}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <!-- <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">OE Comment</td>\r\n                                                    <td colspan=\"2\">{{audit.auditPointList[0].oeComment}}</td>\r\n                                                </tr>\r\n                                            </tbody> -->\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">OE Comment</td>\r\n                                                    <td colspan=\"2\"><textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].oeComment\" maxlength=\"1000\"></textarea></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 2\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\" style=\"text-align: center;\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <!-- <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">Trainer Activity Comment</td>\r\n                                                    <td colspan=\"2\">{{audit.auditPointList[0].trainerActComment}}</td>\r\n                                                </tr>\r\n                                            </tbody> -->\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">Trainer Activity Comment</td>\r\n                                                    <td colspan=\"2\"><textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].trainerActComment\" maxlength=\"1000\"></textarea></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 3\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Day</th>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Date</th>\r\n                                                    <th scope=\"col\" colspan=\"2\"\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\"\r\n                                                        style=\"text-align: center;\">Production</th>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Text',\r\n                                                            0,k)}}</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Number',\r\n                                                            0,k)}}</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 0,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">\r\n                                                            {{getParameterDataByLabel('Datetime', 0,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 1,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">\r\n                                                            {{getParameterDataByLabel('Datetime', 1,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 0,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model',\r\n                                                            0,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 1,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model',\r\n                                                            1,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Gap')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">Gap Reason</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList); let i = index\">\r\n                                                            <th scope=\"col\" colspan=\"2\" style=\"text-align: center;\">\r\n                                                                Cycle {{ i + 1\r\n                                                                }}</th>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Status</th>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                                        <th scope=\"col\">Plan</th>\r\n                                                        <th scope=\"col\">Actual</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                            <th scope=\"col\">Standard</th>\r\n                                                            <th scope=\"col\">Actual</th>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <!-- <tr *ngFor=\"let item of audit.auditPointList\"> -->\r\n                                                <tr>\r\n                                                    <!-- <td>{{item.dayNo}}</td> -->\r\n                                                    <td>{{audit.auditPointList[0].dayNo}}</td>\r\n                                                    <!-- <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td> -->\r\n                                                    <td>{{audit.auditPointList[0].assignedDate | date: 'dd-MM-yyyy'}}\r\n                                                    </td>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                                        <td>{{isCyclePlan(audit.parameterList)}}</td>\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'cyclePlan')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Text')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Number')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 0,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Datetime', 0,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 1,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Datetime', 1,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 0,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Model', 0,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 1,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue( 'Model', 1,k)}}</td>\r\n                                                    </ng-container>\r\n\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Gap')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                            <td>{{cycle.actualValue}}</td>\r\n                                                            <td>{{cycle.expectedValue}}</td>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                    <!-- <td [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">{{item.status || ''}}</td> -->\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':audit.auditPointList[0].status == 'COMPLETED','pending':audit.auditPointList[0].status == 'PENDING', 'rejected':audit.auditPointList[0].status == 'REJECTED', 'not-completed':audit.auditPointList[0].status == 'NOT COMPLETED'}\">\r\n                                                        {{audit.auditPointList[0].status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 4\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <!-- <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">QA Comment</td>\r\n                                                    <td colspan=\"2\">{{audit.auditPointList[0].comment}}</td>\r\n                                                </tr>\r\n                                            </tbody> -->\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"2\">QA Comment</td>\r\n                                                    <td colspan=\"2\">\r\n                                                        <textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].comment\" maxlength=\"1000\"></textarea>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList; let i = index;\">\r\n                        <span *ngIf=\"day.tlAudit\">\r\n                            <div *ngFor=\"let audit of day.tlAudit; let j = index;\">\r\n                                <div class=\"title\" (click)=\"tlAuditExpand(k,i,j)\">{{audit.stage}} ( {{audit.empName}}\r\n                                    )<i class=\"fa\"\r\n                                        [ngClass]=\"{'fa-minus': audit.expand === true, 'fa-plus': audit.expand === undefined || audit.expand === false}\"\r\n                                        aria-hidden=\"true\"></i></div>\r\n                                <div class=\"content hidden\" [ngClass]=\"{'expand': audit.expand}\">\r\n                                    <div class=\"table-block\">\r\n                                        <ng-container>\r\n                                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 5\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"fixedColumn\">Emp. Name</th>\r\n                                                        <th class=\"\">Status</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>{{audit.empName}}</td>\r\n                                                        <td\r\n                                                            [ngClass]=\"{'completed':audit.status == 'COMPLETED','pending':audit.status == 'PENDING', 'rejected':audit.status == 'REJECTED', 'not-completed':audit.status == 'NOT COMPLETED'}\">\r\n                                                            {{audit.status || ''}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList; let i = index;\">\r\n                        <span *ngIf=\"day.assessmentAudit\">\r\n                            <div *ngFor=\"let audit of day.assessmentAudit; let j = index;\">\r\n                                <div class=\"title\" (click)=\"assessmentAuditExpand(k,i,j)\">Assessment ( {{audit.empName}}\r\n                                    )<i class=\"fa\"\r\n                                        [ngClass]=\"{'fa-minus': audit.expand === true, 'fa-plus': audit.expand === undefined || audit.expand === false}\"\r\n                                        aria-hidden=\"true\"></i></div>\r\n\r\n                                <div class=\"content hidden\" [ngClass]=\"{'expand': audit.expand}\">\r\n                                    <div class=\"table-block\">\r\n                                        <ng-container>\r\n                                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 0\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"fixedColumn\">Assessment Title</th>\r\n                                                        <th class=\"\">Date</th>\r\n                                                        <th class=\"\">Status</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>{{audit.title}}</td>\r\n                                                        <td>{{audit.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                        <td\r\n                                                            [ngClass]=\"{'completed':audit.status == 'COMPLETED','pending':audit.status == 'PENDING', 'rejected':audit.status == 'REJECTED', 'not-completed':audit.status == 'NOT COMPLETED'}\">\r\n                                                            {{audit.status || ''}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div class=\"modal-footer paginationFooter\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-12 text-right\">\r\n            <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                style=\"margin-left: 10px;\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "nJ8t":
/*!********************************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/stage-five/stage-five.component.ts ***!
  \********************************************************************************/
/*! exports provided: StageFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageFiveComponent", function() { return StageFiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_five_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-five.component.html */ "4Tqx");
/* harmony import */ var _stage_five_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-five.component.scss */ "Albp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions.service */ "FTWj");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");








let StageFiveComponent = class StageFiveComponent {
    constructor(actionsService, modalService, alertService) {
        this.actionsService = actionsService;
        this.modalService = modalService;
        this.alertService = alertService;
        this.actionDet = {};
        this.answerList = [];
        this.submitLoading = false;
        this.reqAss = {};
        this.isAssessmentStart = false;
        this.isAssessmentClose = false;
        this.assessmentStartCloseSpinner = false;
        this.Constant = {
            RATING: 1,
            RADIO: 2,
            CHECKBOX: 3,
            AlphabetLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        };
        this.assessmentLoader = false;
        this.assessmentDet = {};
        this.checkTimeOut = false;
        this.isReload = false;
        this.assessmentCounter = 0;
    }
    ngOnInit() {
        this.getAssessmentDetails(this.actionDet.oJTAssessmentId);
        window.addEventListener('beforeunload', this.confirmExit.bind(this)); // Add the 'beforeunload' event listener
    }
    // Aniket :- add destroy fun
    ngOnDestroy() {
        console.log('Assessment page left');
        this.actionDet.assessmentTimer = '00:00:00';
        this.isAssessmentStart = false;
        if (this.timeInterval) {
            clearInterval(this.timeInterval);
        }
        window.removeEventListener('beforeunload', this.confirmExit.bind(this)); // Clean up the event listener when the component is destroyed
    }
    confirmExit(event) {
        if (this.isAssessmentStart) {
            this.isReload = true;
            const message = 'Are you sure you want to leave? Unsaved changes might be lost.';
            event.returnValue = message; // Triggers the browser's default warning
            // Automatically submit the assessment before leaving
            // this.submitStageFiveStatus();
        }
    }
    getAssessmentDetails(oJTAssessmentId) {
        this.assessmentLoader = true;
        this.assessmentDet = {};
        this.actionsService.getAssignedAssessmentDetails(oJTAssessmentId).subscribe((data) => {
            this.assessmentLoader = false;
            if (data.result) {
                if (data.assessment != null && data.assessment.quesList != null && data.assessment.quesList.length > 0) {
                    this.assessmentDet = data.assessment;
                    this.setSubCategoryGroup();
                }
                //Aniket :- Timer code
                this.actionDet.remainingTime = parseFloat(data.assessment.time) - parseFloat(data.assessment.totalAssessedTime);
                console.log(this.actionDet.remainingTime);
                // this.actionDet.assessmentTimer = '00:00:00';
                const totalMinutes = this.actionDet.remainingTime;
                const hours = Math.floor(totalMinutes / 60);
                const minutes = Math.floor(totalMinutes % 60);
                const seconds = Math.floor((totalMinutes * 60) % 60);
                const formattedTime = String(hours).padStart(2, '0') + ':' +
                    String(minutes).padStart(2, '0') + ':' +
                    String(seconds).padStart(2, '0');
                this.actionDet.assessmentTimer = formattedTime;
                if (data.assessment.time <= data.assessment.totalAssessedTime) {
                    this.actionDet.remainingTime = 0;
                    this.isAssessmentStart = false;
                    this.isAssessmentClose = true;
                    // this.alertService.error('Your assessment time up');
                    // return;
                    this.timeRemaining(this.actionDet.remainingTime);
                }
                else {
                    if (data.assessment.totalAssessedTime > 0) {
                        if (!this.isAssessmentStart) {
                            clearInterval(this.timeInterval);
                        }
                        else {
                            //this.timeRemaining(this.selectedDet.remainingTime);
                        }
                    }
                }
            }
            else {
                this.assessmentDet = {};
            }
        }, (error) => {
            this.assessmentLoader = false;
        });
    }
    setSubCategoryGroup() {
        var tmpCatArray = [];
        var tmpCatIds = [];
        var quesArray = [];
        this.assessmentDet.quesList.forEach(data => {
            if (tmpCatIds.indexOf(data.categoryId) === -1) {
                tmpCatArray.push({
                    catId: data.categoryId,
                    catName: data.categoryName,
                    quesList: [data]
                });
                tmpCatIds.push(data.categoryId);
            }
            else {
                tmpCatArray.forEach(cat => {
                    if (cat.catId === data.categoryId) {
                        cat.quesList.push(data);
                    }
                });
            }
        });
        console.log(tmpCatArray);
        if (tmpCatArray != null && tmpCatArray.length > 0) {
            this.assessmentDet.quesListGroupBy = tmpCatArray;
        }
        console.log(this.assessmentDet.quesListGroupBy);
    }
    addOrUpdateRequestList(ques, opt) {
        if (this.answerList == null && this.answerList.length == 0) {
            this.answerList.push({
                "questionId": ques.quetionId,
                "queOptionList": [
                    {
                        "optionId": opt.assessmentQueOptId
                    }
                ]
            });
        }
        else {
            let isExist = false;
            this.answerList.forEach(element => {
                if (element.questionId == ques.quetionId) {
                    isExist = true;
                    element.queOptionList = [{
                            "optionId": opt.assessmentQueOptId
                        }];
                }
            });
            if (!isExist) {
                this.answerList.push({
                    "questionId": ques.quetionId,
                    "queOptionList": [
                        {
                            "optionId": opt.assessmentQueOptId
                        }
                    ]
                });
            }
        }
        ques.highlight = false;
        console.log(this.answerList);
    }
    highlightUnansweredQuestions() {
        var _a, _b;
        if (((_a = this.assessmentDet) === null || _a === void 0 ? void 0 : _a.quesListGroupBy) &&
            this.assessmentDet.quesListGroupBy.length > 0) {
            // Collect all answered question IDs into a Set for quick lookup
            const answeredQuestionIds = new Set(((_b = this.answerList) === null || _b === void 0 ? void 0 : _b.map((answer) => answer.questionId)) || []);
            // Loop through question groups and their questions to set 'highlight' property
            this.assessmentDet.quesListGroupBy.forEach((group) => {
                if (group.quesList && group.quesList.length > 0) {
                    group.quesList.forEach((question) => {
                        question.highlight = !answeredQuestionIds.has(question.quetionId);
                    });
                }
            });
        }
    }
    submitStageFiveStatus() {
        this.submitLoading = true;
        if ((this.answerList == null || this.answerList.length == 0 || this.answerList.length != this.assessmentDet.quesList.length) && !this.checkTimeOut && !this.isReload) {
            this.highlightUnansweredQuestions();
            this.alertService.error("Please ensure all mandatory questions are answered before submitting.");
            this.submitLoading = false;
            return;
        }
        let url = '';
        this.reqAss = {
            ojtRegiId: this.assessmentDet.ojtRegisId,
            assessmentId: this.assessmentDet.assessmentId,
            skillingAuditId: this.assessmentDet.skillingAuditId,
            ojtAssId: this.assessmentDet.oJTAssessmentId,
            queList: this.answerList,
            status: "COMPLETED",
        };
        if (this.actionDet.assessmentType != "SAFETY") {
            this.reqAss.skillingId = this.assessmentDet.skillingId; //this.actionDet.skillingId
            this.reqAss.tlEmpId = this.assessmentDet.tlEmpId;
            this.reqAss.deptId = this.assessmentDet.deptId;
            this.reqAss.workstationId = this.assessmentDet.workstationId;
            this.reqAss.lineId = this.assessmentDet.lineId;
            url = 'apis/sm/stageFiveSubmission';
        }
        if (this.actionDet.assessmentType == "SAFETY") {
            url = 'apis/sm/safteyAssessmentSubmission';
        }
        console.log(this.reqAss);
        this.actionsService.submitStageFiveStatus(url, this.reqAss).subscribe((data) => {
            console.log(data);
            this.submitLoading = false;
            if (data.result) {
                this.alertService.success("Assessment Completed Successfully.");
                this.modalService.dismissAll();
            }
            else if (data.statusCode == 100 || data.statusCode == 500) {
                this.alertService.error(data.reason);
                // this.alertService.error("Error occurred.");
            }
            else {
                this.alertService.error("Error occurred.");
            }
        });
    }
    closeModal() {
        // Swal.fire({
        //     title: 'Are You Sure!',
        //     text: 'Do you want to cancel this assessment ?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#7044cd',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, Cancel It',
        //     allowOutsideClick: false,
        //     allowEscapeKey: false,
        //     allowEnterKey: false,
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         this.modalService.dismissAll();
        //     }
        // })
        this.modalService.dismissAll();
    }
    // Aniket :- Countdown time show in assessment
    connect() {
        this.assessmentStartCloseSpinner = true;
        this.isAssessmentStart = true;
        console.log(this.actionDet);
        this.timeRemaining(this.actionDet.remainingTime);
    }
    updateTimer() {
        if (!this.isAssessmentClose) {
            var req = {
                skillingAuditId: this.assessmentDet.skillingAuditId,
                assessmentTimeInterval: 1,
            };
            this.actionsService.setRemainingTime(req).subscribe((res) => {
                this.assessmentCounter = 0;
                if (res.result) {
                }
                else { }
            });
        }
    }
    timeRemaining(time) {
        var countDownDate = new Date();
        this.assessmentCounter = 0;
        countDownDate.setMinutes(countDownDate.getMinutes() + time);
        var countDownMiliSec = countDownDate.getTime();
        this.timeInterval = setInterval(() => {
            if (this.assessmentCounter == 60) {
                this.updateTimer();
            }
            else {
                this.assessmentCounter = this.assessmentCounter + 1;
            }
            var now = new Date().getTime();
            var timeleft = countDownMiliSec - now;
            // Calculating the days, hours, minutes and seconds left
            var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            hours = ("0" + hours).slice(-2);
            minutes = ("0" + minutes).slice(-2);
            seconds = ("0" + seconds).slice(-2);
            // Result is output to the specific element
            this.actionDet.assessmentTimer = hours + ':' + minutes + ':' + seconds;
            document.getElementsByClassName("assessmentTimer")[0].innerHTML = hours + ':' + minutes + ':' + seconds;
            // Display the message when countdown is over
            if (timeleft <= 0) {
                this.updateTimer();
                clearInterval(this.timeInterval);
                this.isAssessmentStart = false;
                this.isAssessmentClose = true;
                console.log('TIME UP!!');
                document.getElementsByClassName("assessmentTimer")[0].innerHTML = 'TIME UP!!';
                this.actionDet.assessmentTimer = 'TIME UP!!';
                this.checkTimeOut = true;
                this.submitStageFiveStatus();
            }
        }, 1000);
    }
};
StageFiveComponent.ctorParameters = () => [
    { type: _actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
StageFiveComponent.propDecorators = {
    QuesPerfectScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['QuesPerfectScroll',] }],
    actionDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    confirmExit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:beforeunload', ['$event'],] }]
};
StageFiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-five',
        template: _raw_loader_stage_five_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stage_five_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], StageFiveComponent);



/***/ }),

/***/ "nc6T":
/*!**************************************************************************!*\
  !*** ./src/app/modules/my-skilling/skill-matrix/skill-matrix.service.ts ***!
  \**************************************************************************/
/*! exports provided: SkillMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixService", function() { return SkillMatrixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth/http.service */ "bnLG");
/* harmony import */ var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth/auth.service */ "jGGy");




let SkillMatrixService = class SkillMatrixService {
    constructor(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
    }
    /*
      Get Master Skill Level List simran
    */
    getMasterLevelList(url) {
        return this.httpService.getMethod(url);
    }
    // get branch access list simran
    getBranchAccessList(url) {
        return this.httpService.getMethod(url);
    }
    /* User Login details */
    getLoggedInData() {
        return this.authService.getLoggedInUserData();
    }
    getSkillMatrixList(req) {
        return this.httpService.postMethod('apis/sm/getSkillMatrixList', req);
    }
    //-------------API's saurabh salunke------
    //get skillmatrixmlis
    getActionList(url, req) {
        return this.httpService.postMethod(url, req);
    }
    // get department list by branch id
    getdepartmentlistbybranchid(url) {
        return this.httpService.getMethod(url);
    }
    getSkillMatrixetails(url) {
        return this.httpService.getMethod(url);
    }
};
SkillMatrixService.ctorParameters = () => [
    { type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
    { type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
SkillMatrixService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
        src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], SkillMatrixService);



/***/ }),

/***/ "s20v":
/*!******************************************************************************!*\
  !*** ./src/app/modules/my-skilling/certificates/certificates.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "tlPf":
/*!****************************************************************************!*\
  !*** ./src/app/modules/my-skilling/certificates/certificates.component.ts ***!
  \****************************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certificates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certificates.component.html */ "0FKX");
/* harmony import */ var _certificates_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates.component.scss */ "s20v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _certificates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certificates.service */ "CExr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let CertificatesComponent = class CertificatesComponent {
    constructor(certService, modalService, fb, modalConfig) {
        this.certService = certService;
        this.modalService = modalService;
        this.fb = fb;
        this.modalConfig = modalConfig;
        this.selectedBranch = {};
        this.submitAttempted = false;
        this.actionList = [{ srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" }, { srno: 1, plant: "Plant 1", cell: "cell 1", workstation: "Workstation 1", level: "Level 1" },];
        this.userDet = {};
        this.loggedInEmpDet = {};
        this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.multipleDropdownSettings = {};
        this.SingleDropdownSettings = {};
        this.listLoading = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: ''
        };
        this.submitSpinner = false;
        this.filterFlag = false;
        this.deptList = [];
        modalConfig.backdrop = 'static';
        modalConfig.keyboard = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            // itemsShowLimit: 3,
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.filterFormData = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
        this.getBranchAccessList();
    }
    getCheckedValue() {
        return true;
    }
    /*
      @DESC : Function to clear pagination
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    /*
      @DESC : Calls api and show certificate list on table
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    getCertificateList() {
        this.listLoading = true;
        this.certificateList = [];
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        var req = {
            // "branchId": this.selectedBranch.branchId,
            "empId": this.userDet.empId,
            "orgId": this.userDet.organization.orgId,
            // "deptIds": this.getIDsArray(this.selectedBranch.dept),
            "offset": this.staticPagination.offset,
            "limit": this.staticPagination.itemsPerPage,
        };
        if (this.selectedBranch.branch != null && this.selectedBranch.branch.length > 0) {
            for (let i = 0; i < this.selectedBranch.branch.length; i++) {
                req.branchId = this.selectedBranch.branch[0].id;
            }
        }
        if (this.getIDsArray(this.selectedBranch.dept) != null && this.getIDsArray(this.selectedBranch.dept).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.selectedBranch.dept).length; i++) {
                req.deptIds = this.getIDsArray(this.selectedBranch.dept);
            }
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction;
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        this.staticPagination.listLength = this.certificateList.length;
        this.certService.getCertificateListData('apis/sm/getCertificateList', req).subscribe((data) => {
            this.listLoading = false;
            if (data.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = data.totalCount;
                    this.staticPagination.totalPages = Math.ceil(data.totalCount / this.staticPagination.itemsPerPage);
                }
                if (data.dataList != null && data.dataList.length > 0) {
                    this.certificateList = data.dataList;
                    console.log(this.certificateList);
                    this.staticPagination.listLength = data.dataList.length;
                }
                else {
                    this.certificateList = [];
                    this.staticPagination.listLength = this.certificateList.length;
                    this.staticPagination.total = this.certificateList.length;
                }
            }
            else {
                this.certificateList = [];
                this.staticPagination.listLength = this.certificateList.length;
                this.staticPagination.total = this.certificateList.length;
            }
        }, (error) => {
            this.listLoading = false;
        });
    }
    /*
      @DESC : Load More Pagination next page Data
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    loadMore(data) {
        this.staticPagination = data;
        this.certificateList = [];
        this.listLoading = true;
        if (this.filterFlag) {
            this.getCertificateList();
        }
        else {
            this.getCertificateList();
        }
    }
    /*
      @DESC : Sort table
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    sortData(sort) {
        this.sorting = sort;
        this.getCertificateList();
    }
    /* Preview Selected Certificate
     @Author Saurabh salunke
    * @Date August 18, 2023
    */
    previewCertificate(data, certificateForMySkilling) {
        console.log(data);
        this.selectedRecForModal = data;
        this.modalService.open(certificateForMySkilling, {
            windowClass: 'bottom'
        });
    }
    /* open filter modal popup
     @Author Saurabh salunke
    * @Date August 31, 2023
    */
    filterModalOpen(FilterModal) {
        this.filterFormData.reset();
        this.searchDet.filterPopupOpen = false;
        console.log("In filter");
        if (!this.filterFlag) {
        }
        this.modalService.open(FilterModal, {
            windowClass: 'filterPopup',
        });
        // this.modalService.open(FilterModal, { windowClass: 'filterPopup' }).result.then(
        //   (result) => {
        //     console.log(`Closed with: ${result}`);
        //     //this.closeResult = `Closed with: ${result}`;
        //   },
        //   (reason) => {
        //     console.log(`Closed with:` + reason);
        //     if (reason == 'Cross click') {
        //       this.searchDet.filterPopupOpen = false;
        //       this.getCertificateList();
        //     }
        //     //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        //   },
        // );
    }
    /* Change branch selction
       @Author Saurabh salunke
      * @Date August 31, 2023
    */
    onChangeBranch(event) {
        console.log(event);
        this.selectedBranch.branchId = event.id;
        this.getDeptList(this.selectedBranch.branchId);
        if (this.searchDet.addForm) {
            console.log("inside");
            this.resetFormField(this.filterFormData, "dept");
        }
    }
    /* gets Branch access list on employee
    @Author Saurabh salunke
    * @Date August 31, 2023
    */
    getBranchAccessList() {
        this.certService.getBranchAccessListData('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId)
            .subscribe((res) => {
            console.log(res);
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    // Corrected assignment 
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            this.selectedBranch.branched = [this.branchAccessList[0]];
            this.selectedBranch.selectedBranched = [this.branchAccessList[0]];
            // this.selectedBranch.branch = [this.branchAccessList[0]];
            this.onChangeBranch(this.selectedBranch.branched[0]); // Corrected function call
        });
    }
    /* get department list on branch selection
       @Author Saurabh salunke
      * @Date August 31, 2023
    */
    getDeptList(branchId) {
        this.certService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branchId).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.deptList != null && response.deptList.length > 0) {
                    console.log(response);
                    // this.deptList = response.deptList;
                    console.log(this.deptList);
                    /* Use For Add Screen */
                    this.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    /* Use For Filter */
                    this.searchDet.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    // this.selectedBranch.dept = this.searchDet.deptList;
                    if (this.certificateList == null || this.certificateList.length == 0) {
                        this.getCertificateList();
                    }
                }
                else {
                    this.deptList = [];
                }
            }
            else {
                this.deptList = [];
            }
        });
    }
    /*
      Common function for set an array for dropdown
       @Author Saurabh salunke
    * @Date August 31, 2023
    */
    setArray(array, key1, key2) {
        let tmpArray = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                element.id = element[key1];
                element.name = element[key2];
                tmpArray.push(element);
            }
        }
        return tmpArray;
    }
    /*
         Apply filter function
          @Author Saurabh salunke
    * @Date August 31, 2023
    */
    submitFilterForm(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.clearPagination();
        this.searchDet.filterFlag = true;
        this.searchDet.filterPopupOpen = false;
        this.getCertificateList();
        this.modalService.dismissAll();
    }
    /*
      Remove Filter
       @Author Saurabh salunke
    * @Date August 31, 2023
    */
    removeFilter() {
        this.submitAttempted = false;
        this.filterFormData.reset();
        // .patchValue({
        //   branchId: [],
        //   deptIds:[],
        // })
        this.selectedBranch.branch = [];
        this.selectedBranch.dept = [];
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.certificateList = [];
        this.getDeptList(this.branchAccessList[0].id);
    }
    /*
    Common function For get Ids from array
    @Author Saurabh salunke
    * @Date August 31, 2023
    */
    getIDsArray(array) {
        let tmp = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                tmp.push(element.id);
            }
        }
        return tmp;
    }
    /* Close filter modal popup
       @Author Saurabh salunke
    * @Date August 31, 2023
    */
    closeFilterPopup() {
        this.submitAttempted = false;
        this.selectedBranch.branch = [];
        this.selectedBranch.dept = [];
        this.deptList = [];
        this.branchAccessList = [];
        this.resetFormField(this.filterFormData, 'branch');
        this.resetFormField(this.filterFormData, 'dept');
        this.filterFormData.reset();
        this.modalService.dismissAll();
    }
    /* Common function For Searching
  @Author Saurabh salunke
  * @Date sept 12, 2023 */
    getSearchList(ev) {
        // this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getCertificateList();
        }
        else {
            this.getCertificateList();
        }
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "plant" || fieldToSort === "dept" || fieldToSort === "level" || fieldToSort === "work") {
                array.sort(function (a, b) {
                    var nameA = a.name ? a.name.toUpperCase() : "";
                    var nameB = b.name ? b.name.toUpperCase() : "";
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return array;
    }
    /*
       Reset Form function
       @Author Saurabh salunke
  * @Date oct 20, 2023 */
    resetFormField(form, keyName) {
        Object.keys(form.controls).forEach(key => {
            if (keyName != '' && key == keyName) {
                form.get(keyName).reset();
                form.get(keyName).markAsPristine();
                form.get(keyName).markAsUntouched();
            }
            else {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            }
        });
    }
};
CertificatesComponent.ctorParameters = () => [
    { type: _certificates_service__WEBPACK_IMPORTED_MODULE_5__["CertificatesService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] }
];
CertificatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certificates',
        template: _raw_loader_certificates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificates_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_certificates_service__WEBPACK_IMPORTED_MODULE_5__["CertificatesService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]])
], CertificatesComponent);



/***/ }),

/***/ "tphk":
/*!****************************************************************************!*\
  !*** ./src/app/modules/my-skilling/skill-matrix/skill-matrix.component.ts ***!
  \****************************************************************************/
/*! exports provided: SkillMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixComponent", function() { return SkillMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skill-matrix.component.html */ "hbOD");
/* harmony import */ var _skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-matrix.component.scss */ "6X44");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skill-matrix.service */ "nc6T");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_7__);








let SkillMatrixComponent = class SkillMatrixComponent {
    constructor(modalService, fb, skillMatrixService) {
        this.modalService = modalService;
        this.fb = fb;
        this.skillMatrixService = skillMatrixService;
        this.loggedInEmpDet = {};
        this.isAppliedFilter = false;
        this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.listLoading = false;
        this.searchDet = {
            searchFlag: false,
            searchInput: ''
        };
        this.submitSpinner = false;
        this.masterLevelList = [];
        this.plantList = [];
        this.filterFlag = false;
        this.selectedOjtDetails = {};
        this.exportSkillMatrixList = [];
        this.SingleDropdownSettings = {};
        this.skillDropDown = {};
        this.submitAttempted = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.loggedInEmpDet = this.skillMatrixService.getLoggedInData();
        console.log(this.loggedInEmpDet);
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 2,
            allowSearchFilter: true
        };
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            workstation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.getAccessiblePlantList();
        this.getMasterSkillLevelList();
        this.getWorkstationList();
        this.getSkillMatrixList();
    }
    getCheckedValue() {
        return true;
    }
    statusUpdate(event) {
    }
    filterModalOpen(modal) {
        this.searchDet.filterPopupOpen = true;
        // if (!this.searchDet.filterFlag) {
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
        // }
    }
    /*
      @DESC : Function to clear pagination
      @Author: Shashi
      @Date : 30 Aug 2023
    */
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    /*
      Apply filter function
      Author: simran
      Date : 30/08/2023
  */
    submitFilterForm(form) {
        this.submitAttempted = true;
        console.log(form);
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.clearPagination();
        this.isAppliedFilter = true;
        this.searchDet.filterFlag = true;
        this.searchDet.filterPopupOpen = false;
        this.getSkillMatrixList();
        this.modalService.dismissAll();
    }
    /*
      Remove Filter
      Author : simran
      Date : 30/08/2023
    */
    removeFilter() {
        this.filterData.reset();
        this.isAppliedFilter = false;
        this.submitAttempted = false;
        this.searchDet.branch = [];
        this.searchDet.deptIds = [];
        this.searchDet.skillLvlId = [];
        this.searchDet.workstation = [];
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.skillMatrixDataList = [];
        this.getDepartmentList(this.plantList[0].id);
    }
    /*
        Get Master Level List
        Author: Simran
        Date : 30/08/2023
    */
    getMasterSkillLevelList() {
        this.skillMatrixService.getMasterLevelList('apis/sm/getLevelList').subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.masterLevelList = this.setArray(res.dataList, 'id', 'levelName');
                }
                else {
                    this.masterLevelList = [];
                }
            }
            else {
                this.masterLevelList = [];
            }
        });
    }
    /*
        Get Action List
        Author: Saurabh Salunke
        Oct 12 2023
    */
    getSkillMatrixList() {
        this.listLoading = true;
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let req = {
            "orgId": this.userDet.organization.orgId,
            'offset': this.staticPagination.offset,
            'limit': this.staticPagination.itemsPerPage,
            'empId': this.userDet.empId
        };
        console.log(req);
        if (this.getIDsArray(this.searchDet.workstation) != null && this.getIDsArray(this.searchDet.workstation).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.searchDet.workstation).length; i++) {
                req.workstationIds = this.getIDsArray(this.searchDet.workstation);
            }
        }
        if (this.searchDet.skillLvlId != null && this.searchDet.skillLvlId.length > 0) {
            for (let i = 0; i < this.searchDet.skillLvlId.length; i++) {
                req.skillLevelId = this.searchDet.skillLvlId[0].id;
            }
        }
        if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
            for (let i = 0; i < this.searchDet.deptIds.length; i++) {
                req.deptId = this.searchDet.deptIds[0].id;
            }
        }
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            for (let i = 0; i < this.searchDet.branch.length; i++) {
                req.branchId = this.searchDet.branch[0].id;
            }
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active,
                    req.orderType = this.sorting.direction.toUpperCase();
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        console.log(req);
        this.skillMatrixService.getActionList('apis/sm/getOJTRegistrationList', req).subscribe((res) => {
            this.listLoading = false;
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    if (this.staticPagination.page == 1) {
                        this.staticPagination.total = res.totalCount;
                        this.staticPagination.totalPages = Math.ceil(res.totalCount / this.staticPagination.itemsPerPage);
                    }
                    this.skillMatrixDataList = res.dataList;
                    console.log(this.skillMatrixDataList);
                    this.skillMatrixList = this.setArray(res.dataList, 'id', 'levelName');
                    this.staticPagination.listLength = res.dataList.length;
                }
                else {
                    this.skillMatrixDataList = [];
                    this.staticPagination.listLength = res.dataList.length;
                }
            }
            else {
                this.skillMatrixDataList = [];
            }
        }, (error) => {
            this.skillMatrixDataList = [];
        });
    }
    /*
          Get workstation List
          Author: Saurabh
          Date : 12/09/2023
      */
    getWorkstationList() {
        let req = {
            "orgId": this.userDet.organization.orgId
        };
        this.skillMatrixService.getActionList('apis/sm/getWorkstationList', req).subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.workstationData = response.dataList;
                    console.log(this.workstationData);
                    this.workstationList = this.setArray(response.dataList, 'id', 'workstation');
                    this.modalService.dismissAll();
                }
                else {
                    this.workstationData = [];
                }
            }
        });
    }
    /*
     Common function for set an array for dropdown
     Author: simran
     Date : 30/08/2023
  */
    setArray(array, key1, key2) {
        let tmpArray = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                element.id = element[key1];
                element.name = element[key2];
                tmpArray.push(element);
            }
        }
        return tmpArray;
    }
    /*
       Get department List
       Author: Saurabh
       Date : 12/09/2023
   */
    getDepartmentList(branch) {
        console.log(branch);
        this.skillMatrixService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branch).subscribe((res) => {
            if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    if (!this.searchDet.addForm) {
                        /* Use For Filter */
                        this.searchDet.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    }
                    if (this.skillMatrixDataList == null || this.skillMatrixDataList.length == 0) {
                        this.getSkillMatrixList();
                    }
                }
                else {
                    this.searchDet.departmentList = [];
                }
            }
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get branch list
    getAccessiblePlantList() {
        this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.loggedInEmpDet.organization.orgId + "/" + this.loggedInEmpDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    this.plantList = [{ id: this.loggedInEmpDet.branch.branchId, name: this.loggedInEmpDet.branch.name }];
                }
            }
            else {
                this.plantList = [{ id: this.loggedInEmpDet.branch.branchId, name: this.loggedInEmpDet.branch.name }];
            }
            this.getDepartmentList(this.plantList[0].branchId);
        });
    }
    /*
        Single Select Dropdown onChange function
        Author: Simran
        Date : 30/08/2023
     */
    onChange(ev, type) {
        console.log(ev);
        if (ev) {
            if (type == 'plant') {
                this.searchDet.deptIds = [];
                this.getDepartmentList(ev.id);
                if (this.searchDet.addForm) {
                    console.log("inside");
                    this.resetFormField(this.filterData, 'deptId');
                }
            }
        }
        else {
            if (type == 'plant') {
                console.log("in");
                if (this.searchDet) {
                    console.log("out");
                    this.searchDet.departmentList = [];
                    this.resetFormField(this.filterData, 'deptIds');
                }
                else {
                    this.resetFormField(this.filterData, 'deptIds');
                }
            }
        }
    }
    /*
    Load More Pagination next page Data
    @Author : Simran
    @Date : 30/08/2023
  */
    loadMore(ev) {
        this.staticPagination = ev;
        this.getSkillMatrixList();
    }
    /*
      sorting of data
      @Author : Simran
      @Date : 30/08/2023
    */
    sortData(sort) {
        this.skillMatrixDataList = [];
        this.listLoading = true;
        this.sorting = sort;
        this.getSkillMatrixList();
    }
    /*
         Reset Form function
         Author: simran
         Date : 30/08/2023
     */
    resetFormField(form, keyName) {
        Object.keys(form.controls).forEach(key => {
            if (keyName != '' && key == keyName) {
                form.get(keyName).reset();
                form.get(keyName).markAsPristine();
                form.get(keyName).markAsUntouched();
            }
            else {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            }
        });
    }
    onChangeAll(event) {
    }
    /*
  Common function For get Ids from array
  @Author Saurabh salunke
  * @Date sept 12, 2023
  */
    getIDsArray(array) {
        let tmp = [];
        if (array != null && array.length > 0) {
            for (const element of array) {
                tmp.push(element.id);
            }
        }
        return tmp;
    }
    /* Common function For Searching
  @Author Saurabh salunke
  * Oct 12 2023 */
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getSkillMatrixList();
        }
        else {
            this.getSkillMatrixList();
        }
    }
    /* To excel table data
    @Author Saurabh salunke
    * Oct 12 2023 */
    exportToExcel() {
        let req = {
            "orgId": this.userDet.organization.orgId,
            'empId': this.userDet.empId
        };
        this.skillMatrixService.getActionList('apis/sm/getOJTRegistrationList', req).subscribe((res) => {
            this.listLoading = false;
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.exportSkillMatrixList = res.dataList;
                    this.exportData();
                }
                else {
                    this.exportSkillMatrixList = [];
                }
            }
            else {
                this.exportSkillMatrixList = [];
            }
        }, (error) => {
            this.exportSkillMatrixList = [];
        });
    }
    exportData() {
        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_7__["Workbook"]();
        const worksheet = workbook.addWorksheet('Skill Matrix');
        // Add headers to the worksheet
        const headers = ['Plant', 'Department', 'Cell/Line', 'Level', 'Workstation', 'Emp. ID', 'Emp. Name', 'Status'];
        worksheet.addRow(headers);
        // Add data to the worksheet
        this.exportSkillMatrixList.forEach(item => {
            const row = [];
            row.push(item.branchName);
            row.push(item.deptName);
            row.push(item.lineName);
            row.push(item.level);
            row.push(item.workstationName);
            row.push(item.companyEmpId);
            row.push(item.empName);
            row.push(item.status);
            worksheet.addRow(row);
        });
        // Generate Excel file
        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'skill-matrix.xlsx';
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
    /* Close filter modal popup
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    closeFilterPopup() {
        this.submitAttempted = false;
        this.searchDet.branch = [];
        this.departmentList = [];
        this.searchDet.deptIds = [];
        this.searchDet.skillLvlId = [];
        this.searchDet.workstation = [];
        this.modalService.dismissAll();
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "plant" || fieldToSort === "dept" || fieldToSort === "level" || fieldToSort === "work") {
                array.sort(function (a, b) {
                    var nameA = a.name ? a.name.toUpperCase() : "";
                    var nameB = b.name ? b.name.toUpperCase() : "";
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
        return array;
    }
    handleIconClick(data, modal) {
        console.log(data);
        this.selectedOjtDetails = data;
        console.log("In filter");
        this.modalService.open(modal, {
            windowClass: "bottom",
        });
    }
};
SkillMatrixComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"] }
];
SkillMatrixComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-matrix',
        template: _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"]])
], SkillMatrixComponent);



/***/ }),

/***/ "vzXo":
/*!****************************************************************!*\
  !*** ./src/app/modules/my-skilling/my-skilling.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1za2lsbGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wA3j":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-four/stage-four.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"submitLoading\">\r\n    <app-loading></app-loading>\r\n</div>\r\n<div class=\"row modal-header stage-header\">\r\n    <div class=\"col-11\">\r\n        <div class=\"modal-title\">Production</div>\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n            <span>×</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"modal-body\" style=\"height: 76.5%;padding-bottom: 0px;\">\r\n    <perfect-scrollbar [style.max-height]=\"'calc(81vh)'\">\r\n        <div class=\"expand-card\" *ngFor=\"let day of dayList; let i = index;\">\r\n            <div class=\"title\" (click)=\"expand(i)\">Day {{i + 1}}<i class=\"fa\"\r\n                    [ngClass]=\"{'fa-minus': day.expand === true, 'fa-plus': day.expand === undefined || day.expand === false}\"\r\n                    aria-hidden=\"true\"></i></div>\r\n            <div class=\"content hidden\" [ngClass]=\"{'expand': day.expand}\">\r\n                <div class=\"table-block\">\r\n                    <ng-container *ngFor=\"let audit of day.dayAudit\">\r\n                        <div class=\"table-responsive tableFixHead\" *ngIf=\"audit.stageId != 5\">\r\n                            <div class=\"stage-title\">\r\n                                <div class=\"index\">{{audit.stageId}}</div>\r\n                                <div class=\"text\">{{audit.stage}}</div>\r\n                            </div>\r\n                            <table class=\"table\" matSort *ngIf=\"audit.stageId == 1\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"fixedColumn\">Day</th>\r\n                                        <th class=\"\">Date</th>\r\n                                        <th class=\"\">Key Point</th>\r\n                                        <th class=\"\">Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                        <td>{{item.dayNo || ''}}</td>\r\n                                        <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <td>{{item.keyPoint || ''}}</td>\r\n                                        <td\r\n                                            [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                            {{item.status || ''}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                        <td colspan=\"4\" class=\"text-center\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                    <tr>\r\n                                        <td colspan=\"1\">OE Comment</td>\r\n                                        <td colspan=\"3\">\r\n                                            <textarea style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\"\r\n                                                id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].oeComment\" disabled\r\n                                                maxlength=\"1000\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 2\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"fixedColumn\" style=\"text-align: center;\">Day</th>\r\n                                        <th class=\"\">Date</th>\r\n                                        <th class=\"\">Key Point</th>\r\n                                        <th class=\"\">Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                        <td>{{item.dayNo}}</td>\r\n                                        <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <td>{{item.keyPoint}}</td>\r\n                                        <td\r\n                                            [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                            {{item.status || ''}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                        <td colspan=\"4\" class=\"text-center\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                    <tr>\r\n                                        <td colspan=\"1\" style=\"width: 27%;\">Trainer Activity Comment</td>\r\n                                        <td colspan=\"3\">\r\n                                            <textarea style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\"\r\n                                                id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].trainerActComment\"\r\n                                                disabled maxlength=\"1000\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 3\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th scope=\"col\" rowspan=\"2\">Day</th>\r\n                                        <th scope=\"col\" rowspan=\"2\">Date</th>\r\n                                        <th scope=\"col\" colspan=\"2\"\r\n                                            *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\"\r\n                                            style=\"text-align: center;\">Production</th>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Text', 0)}}</th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Number', 0)}}</th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 0) !=0\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Datetime', 0)}}\r\n                                            </th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 1) !=0\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Datetime', 1)}}\r\n                                            </th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 0) !=0\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model', 0)}}\r\n                                            </th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 1) !=0\">\r\n                                            <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model', 1)}}\r\n                                            </th>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Gap')\">\r\n                                            <th scope=\"col\" rowspan=\"2\">Gap Reason</th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                            <ng-container\r\n                                                *ngFor=\"let cycle of getCyclePlanList(audit.parameterList); let i = index\">\r\n                                                <th scope=\"col\" colspan=\"2\" style=\"text-align: center;\">Cycle {{ i + 1\r\n                                                    }}</th>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                        <th scope=\"col\" rowspan=\"2\">Status</th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                            <th scope=\"col\">Plan</th>\r\n                                            <th scope=\"col\">Actual</th>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                            <ng-container *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                <th scope=\"col\">Standard</th>\r\n                                                <th scope=\"col\">Actual</th>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <!-- <tr *ngFor=\"let item of audit.auditPointList\"> -->\r\n                                    <tr>\r\n                                        <!-- <td>{{item.dayNo}}</td> -->\r\n                                        <td>{{audit.auditPointList[0].dayNo}}</td>\r\n                                        <!-- <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td> -->\r\n                                        <td>{{audit.auditPointList[0].assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                            <td>{{isCyclePlan(audit.parameterList)}}</td>\r\n                                            <td>{{getParamaterData(audit.parameterList, 'cyclePlan')}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                            <td>{{getParamaterData(audit.parameterList, 'Text')}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                            <td>{{getParamaterData(audit.parameterList, 'Number')}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 0) !=0\">\r\n                                            <td>{{getParameterDataByValue('Datetime', 0)}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 1) !=0\">\r\n                                            <td>{{getParameterDataByValue('Datetime', 1)}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 0) !=0\">\r\n                                            <td>{{getParameterDataByValue('Model', 0)}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 1) !=0\">\r\n                                            <td>{{getParameterDataByValue( 'Model', 1)}}</td>\r\n                                        </ng-container>\r\n\r\n                                        <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                            <td>{{getParamaterData(audit.parameterList, 'Gap')}}</td>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                            <ng-container *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                <td>{{cycle.actualValue}}</td>\r\n                                                <td>{{cycle.expectedValue}}</td>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                        <!-- <td [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">{{item.status || ''}}</td> -->\r\n                                        <td\r\n                                            [ngClass]=\"{'completed':audit.auditPointList[0].status == 'COMPLETED','pending':audit.auditPointList[0].status == 'PENDING', 'rejected':audit.auditPointList[0].status == 'REJECTED', 'not-completed':audit.auditPointList[0].status == 'NOT COMPLETED'}\">\r\n                                            {{audit.auditPointList[0].status || ''}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                        <td colspan=\"4\" class=\"text-center\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 4\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"fixedColumn\">Day</th>\r\n                                        <th class=\"\">Date</th>\r\n                                        <th class=\"\">Key Point</th>\r\n                                        <th class=\"\">Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                        <td>{{item.dayNo}}</td>\r\n                                        <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <td>{{item.keyPoint}}</td>\r\n                                        <td\r\n                                            [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                            {{item.status || ''}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                        <td colspan=\"4\" class=\"text-center\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                    <tr>\r\n                                        <td colspan=\"1\">QA Comment</td>\r\n                                        <td colspan=\"3\">\r\n                                            <textarea style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\"\r\n                                                id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].comment\" disabled\r\n                                                maxlength=\"1000\"></textarea>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <!-- <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 5\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"fixedColumn\">Day</th>\r\n                                        <th class=\"\">Date</th>\r\n                                        <th class=\"\">Key Point</th>\r\n                                        <th class=\"\">Status</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                        <td>{{item.dayNo}}</td>\r\n                                        <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <td>{{item.keyPoint}}</td>\r\n                                        <td [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING'}\">{{item.status || ''}}</td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                        <td colspan=\"4\" class=\"text-center\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table> -->\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </perfect-scrollbar>\r\n</div>\r\n<!-- <div class=\"form-group m-0 row\" *ngIf=\"dayList[0].dayAudit[3].comment !== '' && dayList[0].dayAudit[3].comment !== null\">\r\n    <label style=\"margin-left: 1.5rem;\" for=\"comment\" class=\"col-form-label\">QA Comment</label>\r\n    <div style=\"margin-left: 2rem;\" *ngIf=\"dayList !== null && dayList.length > 0\">\r\n        <input type=\"text\" placeholder=\" \" id=\"comment\" name=\"comment\" disabled\r\n            class=\"custom-inputField\" [(ngModel)]=\"dayList[0].dayAudit[3].comment\" />\r\n    </div>\r\n</div> -->\r\n<div class=\"modal-footer paginationFooter\" style=\"padding: 5px 10px !important;\">\r\n    <div class=\"row m-0\">\r\n        <!-- <div class=\"col-7 p-0\">\r\n            <div class=\"form-group m-0 row\">\r\n                <label for=\"comment\" class=\"col-sm-2 col-form-label\">Comment<span class=\"astrik\">* </span></label>\r\n                <div class=\"col-sm-10\">\r\n                    <input type=\"text\" placeholder=\"Comment\" id=\"comment\" name=\"comment\" class=\"custom-inputField\"\r\n                        [(ngModel)]=\"trainingDet.comment\" />\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n        <div class=\"col-9 p-0\" style=\"display: inline-flex;\">\r\n            <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;display: contents;\">Comment <span\r\n                    class=\"astrik\">* </span></label>\r\n            <textarea class=\"form-control textarea-custom\" id=\"comment\" name=\"comment\" [(ngModel)]=\"trainingDet.comment\"\r\n                rows=\"2\" placeholder=\"Comment\" [maxlength]=\"1000\" [disabled]=\"actionDet.status != 'PENDING'\"></textarea>\r\n        </div>\r\n        <div class=\"col-3 text-right\">\r\n            <ng-container *ngIf=\"actionDet.status == 'PENDING'\">\r\n                <button type=\"button\" class=\"btn submitBtn\" (click)=\"submitStageFourStatus(true)\"\r\n                    style=\"background: #7044cd;\">Completed</button>\r\n                <button type=\"button\" class=\"btn submitBtn\" (click)=\"submitStageFourStatus(false)\"\r\n                    style=\"margin-left: 10px; background: #f20000;\">Not\r\n                    Completed</button>\r\n            </ng-container>\r\n            <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                style=\"margin-left: 10px;\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "ydGN":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/my-skilling/actions/stage-one/stage-one.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n        <div *ngIf=\"submitLoading\">\r\n            <app-loading></app-loading>\r\n        </div>\r\n        <div class=\"modal-body p-t-0 p-b-0\" style=\"padding: 0;\">\r\n            <div [style.height]=\"'calc(100vh - 38vh)'\">\r\n                <div class=\"row modal-header stage-header\">\r\n                    <div class=\"col-11\">\r\n                        <div class=\"main-tab-switcher\">\r\n                            <div class=\"main-tab-switch\" [ngClass]=\"{'active':isSetMainTab(1)}\" (click)=\"setMainTab(1)\">\r\n                                <span>Training</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-1\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n                            <span>×</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div style=\"height: calc(100vh - 12%);\">\r\n                    <div class=\"table-block\">\r\n                        <div class=\"table-responsive tableFixHead\">\r\n                            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th mat-sort-header=\"DayNo\" class=\"fixedColumn\" style=\"text-align: center;\">Day\r\n                                        </th>\r\n                                        <th mat-sort-header=\"date\" class=\"\">Date</th>\r\n                                        <th mat-sort-header=\"keyPoint\" class=\"\">Key Point</th>\r\n                                        <th mat-sort-header=\"Ref\" class=\"\">Reference</th>\r\n                                        <th mat-sort-header=\"Ref\" class=\"fixedColumn\"\r\n                                            *ngIf=\"actionDet.status == 'COMPLETED'\">Status</th>\r\n                                        <th class=\"fixedColumn p-0\" *ngIf=\"actionDet.status != 'COMPLETED'\">\r\n                                            <select style=\"width: 100%; border: none;\"\r\n                                                class=\"custom-selectField form-control\"\r\n                                                [(ngModel)]=\"searchDet.masterSelected\"\r\n                                                (change)=\"onChangeCompleteAll($event)\"\r\n                                                [disabled]=\"actionDet.status == 'COMPLETED'\">\r\n                                                <option value=\"\">Select Status</option>\r\n                                                <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                    {{'All '+opt.name}}</option>\r\n                                            </select>\r\n                                        </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let item of trainingProdDetails.auditPointList\">\r\n                                        <td>{{item.dayNo || ''}}</td>\r\n                                        <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                        <td>{{item.keyPoint || ''}}</td>\r\n                                        <td>{{item.reference || ''}}</td>\r\n                                        <td class=\"fixedColumn completed\" *ngIf=\"this.actionDet.status == 'COMPLETED'\">\r\n                                            {{this.actionDet.status}}\r\n                                        </td>\r\n                                        <td class=\"fixedColumn p-0 \" *ngIf=\"actionDet.status != 'COMPLETED'\">\r\n                                            <select class=\"custom-selectField form-control\"\r\n                                                style=\"width: 100%; border: none;\"\r\n                                                (change)=\"onChangeComplete($event, item)\"\r\n                                                [(ngModel)]=\"item.selectedStatus\"\r\n                                                [disabled]=\"actionDet.status == 'COMPLETED'\">\r\n                                                <!-- *ngIf=\"enableSelectStatusOption(item.assignedDate)\" -->\r\n                                                <option value=\"\">Select Status</option>\r\n                                                <option value=\"{{opt.id}}\" *ngFor=\"let opt of constant.ACTION_LIST\">\r\n                                                    {{opt.name}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr\r\n                                        *ngIf=\"(trainingProdDetails.auditPointList == null || trainingProdDetails.auditPointList.length == 0)\">\r\n                                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                            Data Not Found\r\n                                        </td>\r\n                                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                            <app-loading></app-loading>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer paginationFooter\">\r\n            <div class=\"row m-0\">\r\n                <div class=\"col-9 p-0\" style=\"display: inline-flex;\">\r\n                    <!-- <div class=\"form-group m-0 row\"> col-sm-2-->\r\n                        <label for=\"comment\" class=\"col-form-label\" style=\"margin-right: 10px;display: contents;\">Comment <span class=\"astrik\">*  </span> </label>\r\n                        <!-- <div class=\"col-sm-10\"> -->\r\n                            <!-- <input type=\"text\" placeholder=\"Comment\" id=\"comment\" name=\"comment\"\r\n                                class=\"custom-inputField\" [(ngModel)]=\"trainingProdDetails.comment\"\r\n                                [disabled]=\"actionDet.status == 'COMPLETED'\" /> -->\r\n                                <textarea class=\"form-control textarea-custom\" id=\"comment\" name=\"comment\" [(ngModel)]=\"trainingProdDetails.comment\" rows=\"2\"  placeholder=\"Comment\" [disabled]=\"actionDet.status == 'COMPLETED'\" [maxlength]=\"1000\"></textarea>\r\n                        <!-- </div> -->\r\n                    <!-- </div> -->\r\n                </div>\r\n                <div class=\"col-3 text-right\">\r\n                    <ng-container *ngIf=\"actionDet.status == 'PENDING'\">\r\n                        <button type=\"button\" class=\"btn submitBtn\" (click)=\"submitStatus()\"\r\n                            [ngClass]=\"{'disable-btn' : enableCompletedBtn === false}\">Submit</button>\r\n                    </ng-container>\r\n                    <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                        style=\"margin-left: 10px;\">Cancel</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "yuR8":
/*!*****************************************************************!*\
  !*** ./src/app/modules/my-skilling/actions/actions.constant.ts ***!
  \*****************************************************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
const CONSTANT = {
    ACTION_LIST: [{ id: 'COMPLETED', name: 'Completed' }, { id: 'NOT COMPLETED', name: 'Incompleted' }],
    Stage_1: "Stage1DayWise",
    Stage_2: "Stage2DayWise",
    Stage_3: "Stage3",
    Stage_2_Verification: "Stage2DayWiseVerification",
    Stage_4: "Stage4",
    Stage_5: "Stage5",
    Stage_7: "Stage7",
    COMPLETED: 'COMPLETED',
    PENDING: 'PENDING'
};


/***/ })

}]);
//# sourceMappingURL=modules-my-skilling-my-skilling-module-es2015.js.map