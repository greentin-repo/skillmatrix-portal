(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assessment-assessment-module"],{

/***/ "7CTX":
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bulkupload {\n  outline: none;\n  border: none;\n  outline-style: none;\n  background: #7044cd 0% 0% no-repeat padding-box;\n  border-radius: 4px;\n  opacity: 1;\n  color: #fff;\n  font-family: Helvetica Neue;\n}\n\n/* .addRegDiv { \n    position: absolute;\n    right: 0%;\n    bottom: 0rem;\n    // z-index: 999;\n    width: 100%;\n    background: url(\"../../../../../assets/images/login/createAssessImg.png\");\n    background-position: right;\n    background-repeat: no-repeat;\n    height: 37px;\n\n    .addRegBtn,\n    .addRegBtn:hover,\n    .addRegBtn:focus {\n        position: absolute;\n        right: 7rem;\n        font: normal normal 400 14px/37px Helvetica Neue;\n        color: #fff;\n        text-transform: capitalize;\n        top: 0px;\n        box-shadow: none;\n        outline: none;\n        border: none;\n        padding: 0px;\n        filter: hue-rotate(20deg);\n    }\n}\n */\n\n.tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  border-left: none;\n  border-right: none;\n}\n\n.stickyclass {\n  position: sticky;\n  right: 108px;\n}\n\n.tableFixHead tr th:nth-child(13), .tableFixHead tr td:nth-child(13) {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  right: 80px;\n}\n\n.extraContent {\n  padding: 0px;\n}\n\n.extraContent .has-search {\n  margin-bottom: 16px;\n}\n\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 4px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1rem !important;\n  color: #7044cd !important;\n}\n\n.extraContent .input-group {\n  padding: 0.5rem 0px;\n}\n\n.extraContent .created {\n  color: #ffa21d;\n}\n\n.extraContent .published {\n  color: #009845;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0FBc0RBO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBMEJBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBdkJKOztBQTJDSTtFQUNJLFlBQUE7RUFBYSxnQkFBQTtFQUFpQixnQkFBQTtFQUM5QixXQUFBO0FBdENSOztBQTZDQTtFQUNJLFlBQUE7QUExQ0o7O0FBMkNJO0VBQ0ksbUJBQUE7QUF6Q1I7O0FBMENRO0VBQ0ksY0FBQTtBQXhDWjs7QUEwQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXhDWjs7QUEwQ1E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUF4Q1o7O0FBMkNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUF6Q1I7O0FBMkNJO0VBQ0ksbUJBQUE7QUF6Q1I7O0FBMkNJO0VBQ0ksY0FBQTtBQXpDUjs7QUE0Q0k7RUFDSSxjQUFBO0FBMUNSIiwiZmlsZSI6ImFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnVsa3VwbG9hZCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlO1xyXG59XHJcbi8qIC5hZGRSZWdEaXYgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJvdHRvbTogMHJlbTtcclxuICAgIC8vIHotaW5kZXg6IDk5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi9jcmVhdGVBc3Nlc3NJbWcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG5cclxuICAgIC5hZGRSZWdCdG4sXHJcbiAgICAuYWRkUmVnQnRuOmhvdmVyLFxyXG4gICAgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA3cmVtO1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbiAqL1xyXG4vLyAudGFibGVGaXhIZWFkIHtcclxuLy8gICAgIHRhYmxlIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgdGQuZml4ZWRDb2x1bW4ge1xyXG4vLyAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbi8vICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIC8vIHRoLmZpeGVkQ29sdW1uOmxhc3QtY2hpbGQsXHJcbi8vICAgICAgICAgLy8gdGQuZml4ZWRDb2x1bW46bGFzdC1jaGlsZCB7XHJcbi8vICAgICAgICAgLy8gICAgIHJpZ2h0OiAwcHg7XHJcbi8vICAgICAgICAgLy8gICAgIGJveC1zaGFkb3c6IC01cHggMCA1cHggLTVweCAjMzMzO1xyXG4vLyAgICAgICAgIC8vIH1cclxuLy8gICAgICAgICB0Ym9keSB7XHJcbi8vICAgICAgICAgICAgIHRkIHtcclxuLy8gICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLnRhYmxlRml4SGVhZCB0YWJsZSAuZml4ZWRDb2x1bW4ge1xyXG4vLyAgICAgcG9zaXRpb246IHN0aWNreTtcclxuLy8gICAgIHRvcDogMHB4O1xyXG4vLyAgICAgei1pbmRleDogOTk5O1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbi8vICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbi8vIH1cclxuLnRhYmxlRml4SGVhZCB0YWJsZSAuZml4ZWRDb2x1bW4ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMjsgXHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG4uc3RpY2t5Y2xhc3N7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgcmlnaHQ6IDEwOHB4O1xyXG59XHJcbi50YWJsZUZpeEhlYWQge1xyXG4gICAgLy8gdHIgdGg6Zmlyc3QtY2hpbGQoMSksIHRyIHRkOmZpcnN0LWNoaWxkKDEpIHtcclxuICAgIC8vICAgICB3aWR0aDogNTBweDttaW4td2lkdGg6IDUwcHg7bWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgLy8gICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIC8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gdHIgdGg6bnRoLWNoaWxkKDIpLCB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDBweDttaW4td2lkdGg6IDEwMHB4O21heC13aWR0aDogMTAwcHg7XHJcbiAgICAvLyAgICAgbGVmdDogNjRweDtcclxuICAgIC8vICAgICB0ZXh0LXdyYXA6IHdyYXA7XHJcbiAgICAvLyAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIC8vIH1cclxuICAgIC8vIHRyIHRoOm50aC1jaGlsZCgzKSwgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIC8vICAgICB3aWR0aDogMjAwcHg7bWluLXdpZHRoOiAyMDBweDttYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgLy8gICAgIGxlZnQ6IDE2NHB4O1xyXG4gICAgLy8gICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIC8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLy8gfVxyXG4gICAgdHIgdGg6bnRoLWNoaWxkKDEzKSwgdHIgdGQ6bnRoLWNoaWxkKDEzKSB7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O21pbi13aWR0aDogMTUwcHg7bWF4LXdpZHRoOiAxNTBweDtcclxuICAgICAgICByaWdodDogODBweDtcclxuICAgICAgICAvLyBsZWZ0OiA3NXB4O1xyXG4gICAgICAgIC8vIHRleHQtd3JhcDogd3JhcDtcclxuICAgICAgICAvLyB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXh0cmFDb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1jbGVhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjk1MzcxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGlucHV0OmZvY3VzLFxyXG4gICAgICAgIGlucHV0OmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2QgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1ncm91cCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDBweDtcclxuICAgIH1cclxuICAgIC5jcmVhdGVkIHtcclxuICAgICAgICBjb2xvcjogI2ZmYTIxZDsgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5wdWJsaXNoZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMDA5ODQ1OyBcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "8iil":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AssessmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentRoutingModule", function() { return AssessmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment.component */ "F5dy");




const routes = [
    {
        path: '',
        component: _assessment_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentComponent"]
    },
    {
        path: 'assessment-detail',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./assessment-detail/assessment-detail.module */ "KXr7")).then(m => m.AssessmentDetailModule)
    }
];
let AssessmentRoutingModule = class AssessmentRoutingModule {
};
AssessmentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssessmentRoutingModule);



/***/ }),

/***/ "AWsS":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment-detail/assessment-detail.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AssessmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentDetailComponent", function() { return AssessmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assessment_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assessment-detail.component.html */ "Eo/v");
/* harmony import */ var _assessment_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment-detail.component.scss */ "BQf9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assessment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assessment.service */ "p3TK");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");











let AssessmentDetailComponent = class AssessmentDetailComponent {
    constructor(modalConfig, modalService, fb, assessmentService, router, alertService, titleService, Constant) {
        this.modalService = modalService;
        this.fb = fb;
        this.assessmentService = assessmentService;
        this.router = router;
        this.alertService = alertService;
        this.titleService = titleService;
        this.assessmentDet = {
            tempQues: {
                categoryList: [],
                subCategoryList: [],
            },
        };
        this.assessmentDetails = {
            moduleSkillList: [],
            interventionsList: [],
            categoryList: [],
            subCategoryList: [],
        };
        this.Constant = {};
        this.categoryList = [];
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
        this.multipleDropdownSettings = {};
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
        this.isFeedBackSelect = false;
        // assessmentFormData:any = { template: any[]; intervention: any[]; SkillandModule: any[]; assessmentTitle: string; time: number; marksApplicable: any[]; };
        this.dataSpinner = [];
        this.plantList = [];
        this.masterLevelList = [];
        this.isAssessmentAvailable = false;
        this.constant = {};
        this.isSubmit = false;
        this.assessmentDetail = {};
        this.searchDet = {};
        this.departmentList = [];
        this.assessmentType = [];
        this.workforceList = [];
        this.userDet = {};
        this.lineIds = [];
        this.isCheckSheetAvailable = false;
        this.assessmentTypeList = [
            { id: 1, name: "SAFETY" },
            { id: 2, name: "LEVEL" }
        ];
        this.isSafetyAssessment = false;
        this.isReqAssTime = false;
        // Assessment Module
        // date: 07/09/2023
        // description: user not able to enter negative values
        // author: simran
        this.noNegativeValidator = (control) => {
            console.log(control);
            const value = control.value;
            console.log(value);
            if (value === 0) {
                return { zeroValue: true };
            }
            if (value < 0) {
                return { negativeValue: true };
            }
            // if (value.toString().length > 3) {
            //   return { minLength: true };
            // }
            return null;
        };
        this.deletePublishloader = false;
        modalConfig.backdrop = "static";
        modalConfig.keyboard = false;
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem("userDet"));
        this.titleService.setTitle("Assessment Details");
        this.loggedInEmpDet = this.assessmentService.getLoggedInData();
        this.assessmentForm = this.fb.group({
            assessmentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            cellLineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            workstationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            time: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                this.noNegativeValidator
            ]),
            passingMark: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                this.noNegativeValidator,
            ]),
        });
        // this.formdata = this.fb.group({
        //   category: [this.selectedCategeory],
        //   subCategory: [this.selectedSubCategeory],
        //   questionTypeName: [this.selectedQuestionType],
        // });
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: "id",
            textField: "name",
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: "id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 2,
            allowSearchFilter: true,
        };
        /*
          Get Local Storage Data
        */
        if (localStorage.getItem("selectedActionData")) {
            this.selectedDet = JSON.parse(localStorage.getItem("selectedActionData"));
            this.plantList = this.selectedDet.plantList;
            console.log(this.plantList);
            this.masterLevelList = this.selectedDet.masterLevelList;
            console.log(this.masterLevelList);
            if (this.selectedDet.isEditable && this.selectedDet.assessmentId == 0) {
                this.editAssessment = false;
                this.assessmentDet = {};
            }
            else {
                this.getdetails(this.selectedDet);
                this.getAssessmentDetails();
            }
        }
        else {
            this.assessmentDet = {};
        }
    }
    getdetails(data) {
        console.log(data);
        this.isAssessmentAvailable = true;
        this.isCheckSheetAvailable = true;
        this.assessmentDet.assessmentId = data.assessmentId;
        this.submitAssessment = true;
        this.addQuestionDisabled = false;
        this.editAssessment = true;
        let assessmentTypeis = {};
        if (data.assessmentType == "SAFETY") {
            assessmentTypeis = { id: 1, name: "SAFETY" };
            this.isSafetyAssessment = true;
        }
        if (data.assessmentType == "LEVEL") {
            assessmentTypeis = { id: 2, name: "LEVEL" };
        }
        this.assessmentForm.patchValue({
            assessmentType: [assessmentTypeis],
            branchId: [{ id: data.branchId, name: data.branchName }],
            skillLvlId: [{ id: data.skillLevelId, name: data.skillLevel }],
            deptId: [{ id: data.deptId, name: data.deptName }],
            cellLineId: [{ id: data.lineId, name: data.lineName }],
            workstationId: [{ id: data.workstationId, name: data.workstation }],
            title: data.title,
            time: data.time,
            passingMark: data.passingMarks,
        });
        this.getcategroryDetails();
    }
    /*
      Reset Form Field
      @Author Mahesh W
      @Date : 23 Aug 2023
    */
    resetFormField(form, keyName) {
        Object.keys(form.controls).forEach((key) => {
            if (key == keyName) {
                form.get(keyName).reset();
                form.get(keyName).markAsPristine();
                form.get(keyName).markAsUntouched();
            }
        });
    }
    /*
      Return Object from given array & obj
      @Author Mahesh W
      @Date : 23 Aug 2023
    */
    getObjFromArray(array, obj) {
        var rec;
        if (array != null && array.length > 0) {
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == obj.id) {
                    rec = array[index];
                    break;
                }
            }
        }
        return rec;
    }
    /*
      Return Object from given array & id
      @Author Mahesh W
      @Date : 23 Aug 2023
    */
    getValueFromArray(array, value) {
        var rec = [];
        if (array != null && array.length > 0) {
            for (let index = 0; index < array.length; index++) {
                if (array[index].id == value) {
                    rec.push(array[index]);
                }
            }
        }
        return rec;
    }
    /*
      Save and Update function
      @Author Mahesh W
      @Date : 23 Aug 2023
    */
    saveAssessmentDetails(data) {
        console.log(data);
        if (!this.editAssessment && this.selectedDet.assessmentId == 0) {
            this.isAssessmentAvailable = true;
            this.saveAssessment(data);
        }
        else {
            this.isAssessmentAvailable = true;
            this.updateAssesment(data);
        }
    }
    /*
        Save Assessment
        @Author Mahesh W
        @Date : 23 Aug 2023
      */
    saveAssessment(data) {
        this.submitLoader = true;
        if (data.controls['assessmentType'].invalid ||
            data.controls['branchId'].invalid ||
            data.controls['deptId'].invalid ||
            data.controls['cellLineId'].invalid ||
            data.controls['workstationId'].invalid ||
            data.controls['title'].invalid ||
            data.controls['time'].invalid ||
            data.controls['passingMark'].invalid ||
            (!this.isSafetyAssessment && data.controls['skillLvlId'].invalid)) {
            // Mark all invalid controls as dirty
            Object.keys(data.controls).forEach((key) => {
                if (data.controls[key].invalid) {
                    data.controls[key].markAsDirty();
                }
            });
            this.submitLoader = false;
            return; // Exit the function to prevent submission
        }
        let reqBody = {
            title: data.value.title,
            assessmentType: data.value.assessmentType[0].name,
            branchId: data.value.branchId[0].id,
            deptId: data.value.deptId[0].id,
            lineId: data.value.cellLineId[0].id,
            workstationId: data.value.workstationId[0].id,
            time: data.value.time,
            passingMark: data.value.passingMark,
            createdBy: this.loggedInEmpDet.empId,
        };
        if (data.value.assessmentType[0].name == 'LEVEL' && !this.isSafetyAssessment) {
            reqBody.skillLvlId = data.value.skillLvlId[0].id;
        }
        console.log(reqBody);
        this.assessmentService
            .addAssessmentDetails("apis/sm/addAssessment", reqBody)
            .subscribe((data) => {
            this.submitLoader = false;
            if (data.result) {
                this.alertService.success("Assessment details added successfully.");
                this.assessmentDet.assessmentId = data.responseData.assessmentId;
                this.isCheckSheetAvailable = true;
                this.getAssessmentDetails();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again..");
                }
            }
        }, (error) => {
            this.alertService.error(error);
            this.submitLoader = false;
        });
    }
    /*
      Update Assessment
      @Author Mahesh W
      @Date : 23 Aug 2023
    */
    updateAssesment(data) {
        this.submitLoader = true;
        if (data.controls['assessmentType'].invalid ||
            data.controls['branchId'].invalid ||
            data.controls['deptId'].invalid ||
            data.controls['cellLineId'].invalid ||
            data.controls['workstationId'].invalid ||
            data.controls['title'].invalid ||
            data.controls['time'].invalid ||
            data.controls['passingMark'].invalid ||
            (!this.isSafetyAssessment && data.controls['skillLvlId'].invalid)) {
            // Mark all invalid controls as dirty
            Object.keys(data.controls).forEach((key) => {
                if (data.controls[key].invalid) {
                    data.controls[key].markAsDirty();
                }
            });
            this.submitLoader = false;
            return; // Exit the function to prevent submission
        }
        if (data.controls.time.value == null) {
            data.controls['time'].markAsDirty();
            data.controls['time'].invalid;
            data.controls['time'].touched;
            data.controls['time'].dirty;
            data.controls['time'].errors;
            this.isReqAssTime = true;
            this.submitLoader = false;
            return;
        }
        let reqBody = {
            assessmentId: this.assessmentDet.assessmentId,
            title: data.value.title,
            branchId: data.value.branchId[0].id,
            // skillLvlId: data.value.skillLvlId[0].id,
            deptId: data.value.deptId[0].id,
            lineId: data.value.cellLineId[0].id,
            workstationId: data.value.workstationId[0].id,
            time: data.value.time,
            passingMark: data.value.passingMark,
            updatedBy: this.loggedInEmpDet.empId,
        };
        if (data.value.assessmentType[0].name == 'Level' && !this.isSafetyAssessment) {
            reqBody.skillLvlId = data.value.skillLvlId[0].id;
        }
        this.assessmentService
            .updateAssessmentDetails("apis/sm/updateAssessment", reqBody)
            .subscribe((data) => {
            this.submitLoader = false;
            if (data.result) {
                this.alertService.success("Assessment details updated successfully.");
                this.isCheckSheetAvailable = true;
                this.getAssessmentDetails();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while updating data. Please try again..");
                }
            }
        });
    }
    /*
         Open Question addition modal
         @Author Mahesh W
         @Date : 23 Aug 2023
    */
    openAddQuestionModal(modal) {
        this.addQuestion = false;
        // this.isAssessmentAvailable = true;
        this.questionsList = [];
        var rec;
        if (this.assessmentDetails.interventionsList != null &&
            this.assessmentDetails.interventionsList.length > 0) {
            rec = this.assessmentDetails.interventionsList.filter((res) => res.interId == this.selectedDet.interventionId);
        }
        this.assessmentDet.tempQues = {
            quetionId: 0,
            assessmentQuestion: "",
            isRightAns: "",
            // questionTypeIds: [],
            optList: [{ optIndex: 0, option: "", isRightAns: false }],
            mark: "",
        };
        var modalRef = this.modalService.open(modal, {
            windowClass: "right",
        });
        modalRef.result.then((result) => {
            if (result === "success") {
                this.getAssessmentDetails();
            }
        }, (reason) => {
            console.log(reason);
        });
    }
    /*
         Add,remove option function
         @Author Mahesh W
         @Date : 23 Aug 2023
    */
    addRemoveOptions(oIndex, type) {
        if (this.assessmentDet.tempQues.optList != null &&
            this.assessmentDet.tempQues.optList.length > 4) {
            if (type == "add") {
                return;
            }
        }
        if (type == "add") {
            if (this.assessmentDet.tempQues.optList[oIndex].option == undefined ||
                this.assessmentDet.tempQues.optList[oIndex].option == "" ||
                this.assessmentDet.tempQues.optList[oIndex].option == null) {
                this.alertService.error("Please enter option");
                return;
            }
            this.assessmentDet.tempQues.optList.push({
                optIndex: this.assessmentDet.tempQues.optList != null
                    ? this.assessmentDet.tempQues.optList.length
                    : 0,
                option: "",
                isRightAns: false,
            });
        }
        else {
            this.assessmentDet.tempQues.optList.splice(oIndex, 1);
        }
    }
    /*
         Get Assessment details
         @Author Mahesh W
         @Date : 23 Aug 2023
    */
    getAssessmentDetails() {
        this.assessmentService
            .getAssessmentDetailsById("apis/sm/getAssessmentDetail/" + this.assessmentDet.assessmentId)
            .subscribe((data) => {
            if (data.result) {
                this.selectedDet = Object.assign({}, this.selectedDet, data.assessment);
                this.editAssessment = true;
                this.isCheckSheetAvailable = true;
                var tmpLocalData = JSON.parse(localStorage.getItem("selectedActionData"));
                console.log(tmpLocalData);
                if (tmpLocalData.assessmentId == 0) {
                    var newData = Object.assign({}, tmpLocalData, this.selectedDet);
                    this.selectedDet = newData;
                    localStorage.setItem("selectedActionData", JSON.stringify(newData));
                }
                if (data.assessment.quesList != null &&
                    data.assessment.quesList.length > 0) {
                    for (let index = 0; index < data.assessment.quesList.length; index++) {
                        if (data.assessment.quesList[index].optList != null &&
                            data.assessment.quesList[index].optList.length > 0) {
                            for (let opt = 0; opt < data.assessment.quesList[index].optList.length; opt++) {
                                data.assessment.quesList[index].optList[opt].option =
                                    data.assessment.quesList[index].optList[opt].option;
                            }
                            data.assessment.quesList[index].optList.forEach((currentValue, optIndex) => {
                                if (currentValue.rightAns) {
                                    data.assessment.quesList[index].rightAns =
                                        optIndex.toString();
                                }
                            });
                        }
                    }
                }
                this.assessmentDet.quesList = data.assessment.quesList;
                this.assessmentDetail = data.assessment;
                console.log(this.assessmentDetail);
                this.setSubCategoryGroup();
            }
            else {
                this.assessmentDet.quesListGroupBy = [];
            }
        });
    }
    setSubCategoryGroup() {
        var tmpCatArray = [
            {
                catId: 0,
                catName: "",
                subCatList: [
                    {
                        subCatId: 0,
                        subCatName: 0,
                        applicableQues: 0,
                        quesList: [],
                    },
                ],
            },
        ];
        var tmpCatIds = [];
        var quesArray = [];
        this.assessmentDet.quesList.filter((data) => {
            if (tmpCatIds.indexOf(data.categoryId) == -1) {
                if (data.subCategoryId > 0) {
                    tmpCatArray.push({
                        catId: data.categoryId,
                        catName: data.categoryName,
                        subCatList: [
                            {
                                subCatId: data.subCategoryId,
                                subCatName: data.subCategoryName,
                                applicableQues: data.applicableQues,
                                quesList: [data],
                            },
                        ],
                    });
                }
                else {
                    tmpCatArray.push({
                        catId: data.categoryId,
                        catName: data.categoryName,
                        subCatList: [
                            {
                                subCatId: data.subCategoryId,
                                subCatName: data.subCategoryName,
                                applicableQues: data === null || data === void 0 ? void 0 : data.applicableQues,
                                quesList: [data],
                            },
                        ],
                    });
                }
                tmpCatIds.push(data.categoryId);
            }
            else {
                for (let x = 0; x < tmpCatArray.length; x++) {
                    if (tmpCatArray[x].catId == data.categoryId) {
                        if (data.subCategoryId > 0) {
                            if (tmpCatArray[x].subCatList != null &&
                                tmpCatArray[x].subCatList.filter((res) => res.subCatId == data.subCategoryId).length > 0) {
                                tmpCatArray[x].subCatList.forEach((subCat, i) => {
                                    if (subCat.subCatId == data.subCategoryId) {
                                        tmpCatArray[x].subCatList[i].quesList.push(data);
                                    }
                                });
                            }
                            else {
                                tmpCatArray[x].subCatList.push({
                                    subCatId: data.subCategoryId,
                                    subCatName: data.subCategoryName,
                                    applicableQues: data.applicableQues,
                                    quesList: [data],
                                });
                            }
                        }
                        else {
                            tmpCatArray[x].subCatList.forEach((subCat, i) => {
                                if (subCat.subCatId == data.subCategoryId) {
                                    tmpCatArray[x].subCatList[i].quesList.push(data);
                                }
                            });
                        }
                    }
                }
            }
        });
        console.log(tmpCatArray);
        if (tmpCatArray != null && tmpCatArray.length > 0) {
            tmpCatArray.splice(0, 1);
            this.assessmentDet.quesListGroupBy = tmpCatArray;
        }
    }
    ontemplateSelect(val) {
        this.assessmentDet.templateSelect = val;
    }
    /*
       Save Question
       @Author Mahesh W
       @Date : 23 Aug 2023
    */
    saveQuestion(data) {
        if (this.addQuestion == false) {
            this.saveQuestionandAns(data);
        }
        else {
            this.updateQuestionansAns(data);
        }
    }
    saveQuestionandAns(data) {
        this.submitLoader = true;
        if (data.invalid) {
            Object.keys(data.controls).forEach((key) => {
                data.controls[key].markAsDirty();
            });
            this.submitLoader = false;
            return;
        }
        var reqbody = {
            assessmentId: this.assessmentDet.assessmentId,
            questionTypeId: 1,
            // "categoryId": this.assessmentDet.tempQues.selectedCat[0].id,
            question: this.assessmentDet.tempQues.assessmentQuestion,
            queMark: this.assessmentDet.tempQues.mark,
        };
        if (this.assessmentDet.tempQues.selectedCat != null) {
            reqbody.categoryId = this.assessmentDet.tempQues.selectedCat[0].id;
        }
        reqbody.optList = [];
        if (this.assessmentDet.tempQues.optList == null ||
            this.assessmentDet.tempQues.optList.length == 0) {
            this.alertService.error("Please add options.");
            this.submitLoader = false;
            return;
        }
        if (this.assessmentDet.tempQues.optList != null &&
            this.assessmentDet.tempQues.optList.length < 2) {
            this.alertService.error("Please add minimum two options.");
            this.submitLoader = false;
            return;
        }
        if (this.assessmentDet.tempQues.optList.filter((rec) => rec.isRightAns)
            .length == 0) {
            this.alertService.error("Please select one correct answers");
            this.submitLoader = false;
            return;
        }
        this.assessmentDet.tempQues.optList.filter((element) => {
            console.log(element);
            reqbody.optList.push({
                option: element.option,
                isRightAns: element.isRightAns ? true : false,
            });
        });
        this.assessmentService
            .addQuestions("apis/sm/addAssessmentQuestion", reqbody)
            .subscribe((data) => {
            this.submitLoader = false;
            if (data.result) {
                this.alertService.success("Question added successfully.");
                this.getAssessmentDetails();
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while submitting data. Please try again.");
                }
            }
        });
    }
    updateques(modal, ques) {
        this.addQuestion = true;
        console.log(ques);
        this.assessmentDet.tempQues = {
            quetionId: ques.quetionId,
            selectedCat: [{ id: ques.categoryId, name: ques.categoryName }],
            assessmentQuestion: ques.question,
            mark: ques.questionMark,
            optList: ques.optList,
        };
        ques.optList.forEach((currentValue, optIndex) => {
            console.log(currentValue);
            if (currentValue.rightAns) {
                this.assessmentDet.tempQues.isRightAns = optIndex.toString();
                console.log(this.assessmentDet.tempQues.isRightAns);
            }
        });
        console.log(this.assessmentDet.tempQues.optList);
        var modalRef = this.modalService.open(modal, {
            windowClass: "right",
        });
        modalRef.result.then((result) => {
            if (result === "success") {
                this.getAssessmentDetails();
            }
        }, (reason) => {
            console.log(reason);
        });
    }
    updateQuestionansAns(data) {
        this.submitLoader = true;
        if (data.invalid) {
            Object.keys(data.controls).forEach((key) => {
                data.controls[key].markAsDirty();
            });
            this.submitLoader = false;
            return;
        }
        console.log(this.assessmentDet.tempQues.optList);
        var reqBody = {
            assessmentQueId: this.assessmentDet.tempQues.quetionId,
            assessmentId: this.assessmentDet.assessmentId,
            questionTypeId: 1,
            // "categoryId": this.assessmentDet.tempQues.selectedCat[0].id,
            queMark: this.assessmentDet.tempQues.mark,
            question: this.assessmentDet.tempQues.assessmentQuestion,
            updatedBy: this.loggedInEmpDet.empId,
        };
        if (this.assessmentDet.tempQues.selectedCat != null) {
            reqBody.categoryId = this.assessmentDet.tempQues.selectedCat[0].id;
        }
        reqBody.optList = [];
        if (this.assessmentDet.tempQues.optList == null ||
            this.assessmentDet.tempQues.optList.length == 0) {
            this.alertService.error("Please add options.");
            this.submitLoader = false;
            return;
        }
        if (this.assessmentDet.tempQues.optList != null &&
            this.assessmentDet.tempQues.optList.length < 2) {
            this.alertService.error("Please add minimum two options.");
            this.submitLoader = false;
            return;
        }
        console.log(this.assessmentDet.tempQues.optList);
        // if (this.assessmentDet.tempQues.optList.filter(rec => rec.isRightAns).length == 0) {
        //   this.alertService.error('Please select one correct answer');
        //   this.submitLoader = false;
        //   return;
        // }
        if (!this.assessmentDet.tempQues.isRightAns) {
            this.alertService.error("Please select one correct answer");
            this.submitLoader = false;
            return;
        }
        else {
            for (let opt = 0; opt < this.assessmentDet.tempQues.optList.length; opt++) {
                this.assessmentDet.tempQues.optList[opt].isRightAns = false;
                if (opt == parseInt(this.assessmentDet.tempQues.isRightAns)) {
                    this.assessmentDet.tempQues.optList[opt].isRightAns = true;
                }
            }
        }
        this.assessmentDet.tempQues.optList.filter((element) => {
            console.log(element);
            if (element.hasOwnProperty("assessmentQueOptId")) {
                reqBody.optList.push({
                    option: element.option,
                    isRightAns: element.isRightAns ? true : false,
                    id: element.assessmentQueOptId,
                });
            }
            else {
                reqBody.optList.push({
                    option: element.option,
                    isRightAns: element.isRightAns ? true : false,
                });
            }
        });
        this.assessmentService
            .updateQuestionsAndOpt("apis/sm/updateAssessmentQuestion", reqBody)
            .subscribe((data) => {
            this.submitLoader = false;
            if (data.result) {
                this.alertService.success("Question updated successfully.");
                this.getAssessmentDetails();
                this.modalService.dismissAll();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while updating data. Please try again.");
                }
            }
        });
    }
    removeExistOption(opt, quesId) {
        this.dataSpinner[quesId] = true;
        var req = {
            assessmentQueOptId: opt.assessmentQueOptId,
            updatedBy: this.loggedInEmpDet.empId,
            createdBy: this.loggedInEmpDet.empId,
        };
        this.assessmentService
            .deleteAssessmentOption("apis/sm/deleteAssessmentOptions", req)
            .subscribe((res) => {
            this.dataSpinner[quesId] = false;
            if (res.result) {
                this.alertService.success("Option removed successfully.");
                for (let index = 0; index < this.assessmentDet.tempQues.optList.length; index++) {
                    if (this.assessmentDet.tempQues.optList[index].assessmentQueOptId ==
                        opt.assessmentQueOptId) {
                        this.assessmentDet.tempQues.optList.splice(index, 1);
                        index--;
                    }
                }
            }
            else {
                if (res.statusCode == 100) {
                    this.alertService.error(res.reason);
                }
                else {
                    this.alertService.success("Error occurred while removing option. Please try again.");
                }
            }
        });
    }
    showDeleteQuestModal(ques) {
        console.log(ques);
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure",
            text: "You want remove this record",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044CD",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes remove it",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            this.dataSpinner[ques.quetionId] = true;
            if (result.isConfirmed) {
                let reqbody = {
                    assessmentId: this.assessmentDet.assessmentId,
                    assessmentQueId: ques.quetionId,
                    updatedBy: this.loggedInEmpDet.empId,
                    createdBy: this.loggedInEmpDet.empId,
                };
                this.assessmentService
                    .deleteAsssessmentQuesAndOption("apis/sm/deleteAssessmentQuestion", reqbody)
                    .subscribe((data) => {
                    this.dataSpinner[ques.quetionId] = false;
                    if (data.result) {
                        this.alertService.success("Question removed successfully.");
                        this.getAssessmentDetails();
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while removing data. Please try again");
                        }
                    }
                });
            }
            else {
                this.dataSpinner[ques.quetionId] = false;
            }
        });
    }
    publishAssessment() {
        this.deletePublishloader = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are you sure",
            text: "You want publish this record",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044CD",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes publish it",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                let reqbody = {
                    assessmentId: this.assessmentDet.assessmentId,
                    updatedBy: this.loggedInEmpDet.empId,
                    createdBy: this.loggedInEmpDet.empId,
                };
                this.assessmentService
                    .publishAsssessment("apis/sm/publishAssessments", reqbody)
                    .subscribe((data) => {
                    this.deletePublishloader = false;
                    if (data.result) {
                        this.alertService.success("Assessment published successfully.");
                        this.router.navigateByUrl("settings/skillMatrix/assessment");
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while publishing assessment. Please try again");
                        }
                    }
                });
            }
            else {
                this.deletePublishloader = false;
            }
        });
    }
    deleteAssessment() {
        this.deletePublishloader = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are You Sure!",
            text: "You want remove this record ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044CD",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove It",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                let reqbody = {
                    assessmentId: this.assessmentDet.assessmentId,
                    updatedBy: this.loggedInEmpDet.empId,
                    createdBy: this.loggedInEmpDet.empId,
                };
                this.assessmentService
                    .deleteAsssessment("apis/sm/deActiveAssessment", reqbody)
                    .subscribe((data) => {
                    this.deletePublishloader = false;
                    if (data.result) {
                        this.alertService.success("Record removed successfully.");
                        this.router.navigateByUrl("/settings/skillMatrix/assessment");
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while deleting data. Please try again");
                        }
                    }
                });
            }
            else {
                this.deletePublishloader = false;
            }
        });
    }
    isCatgeorycheck() {
        this.assessmentDet.isCatgeorychecked =
            !this.assessmentDet.isCatgeorychecked;
    }
    /*
       Open add category Modal
       Author: Jayshri Kolase
       Date : 13 Oct 2023
     */
    addCategory(modal) {
        this.catUpdateFlag = false;
        this.assessmentDet.category = "";
        this.assessmentDet.subCategoryList = [
            { name: "", applicableNumOfQues: "", show: true },
        ];
        this.modalService.open(modal, {
            windowClass: "assessmentpopup",
        });
    }
    /*
      save and update category
      Author: Jayshri Kolase
      Date : 13 Oct 2023
    */
    submitCatAndSubCat(c) {
        if (this.catUpdateFlag == true) {
            this.updateCatAndSubCategory(c);
        }
        else {
            this.addCatAndSubCategory(c);
        }
    }
    /*
       save or submit category details
       Author: Jayshri Kolase
       Date : 13 Oct 2023
     */
    addCatAndSubCategory(c) {
        this.submitCatLoader = true;
        if (this.assessmentService.isEmptyOrSpaces(this.assessmentDet.category)) {
            this.alertService.error("Please add category name");
            this.submitCatLoader = false;
            return;
        }
        let reqBody = {
            assessmentId: this.assessmentDet.assessmentId,
            categoryName: this.assessmentDet.category,
        };
        // this.assessmentDet.subCategoryList.filter((subcat: any) => {
        //   reqBody.subCategory.push({ name: subcat.name, applicableNumOfQues: subcat.applicableNumOfQues })
        // });
        console.log(reqBody);
        this.assessmentService
            .addCatgeoryand("apis/sm/addCategory", reqBody)
            .subscribe((data) => {
            this.submitCatLoader = false;
            if (data.result) {
                this.alertService.success("Category details added successfully.");
                c("Cross Click");
                this.getcategroryDetails();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while deleting data. Please try again");
                }
            }
        });
    }
    /*
     Update category details
     Author: Jayshri Kolase
     Date : 13 Oct 2023
   */
    updateCatAndSubCategory(c) {
        this.submitCatLoader = true;
        if (this.assessmentService.isEmptyOrSpaces(this.assessmentDet.category)) {
            this.alertService.error("Please add category name");
            this.submitCatLoader = false;
            return;
        }
        let reqBody = {
            assessmentId: this.assessmentDet.assessmentId,
            categoryName: this.assessmentDet.category,
            id: this.assessmentDet.categoryId,
        };
        // this.assessmentDet.subCategoryList.filter((subcat: any) => {
        //   reqBody.subCategory.push({ id: subcat.id, name: subcat.name, applicableNumOfQues: subcat.applicableNumOfQues });
        // });
        this.assessmentService
            .updateCatgeory("apis/sm/updateCategory", reqBody)
            .subscribe((data) => {
            this.submitCatLoader = false;
            if (data.result) {
                this.alertService.success("Category details updated successfully.");
                c("Cross Click");
                this.getcategroryDetails();
            }
            else {
                if (data.statusCode == 100) {
                    this.alertService.error(data.reason);
                }
                else {
                    this.alertService.error("Error occurred while deleting data. Please try again");
                }
            }
        });
    }
    /*
     Get category details
     Author: Jayshri Kolase
     Date : 13 Oct 2023
   */
    getcategroryDetails() {
        let req = {
            assessmentId: this.assessmentDet.assessmentId,
        };
        this.assessmentService
            .getCatgeoryList("apis/sm/getCategoryList", req)
            .subscribe((data) => {
            if (data.result) {
                if (data.dataList != null && data.dataList.length > 0) {
                    this.assessmentDet.isCatgeorychecked = true;
                    this.assessmentDetails.categoryList = data.dataList;
                    this.categoryList = this.setArray(this.assessmentDetails.categoryList, "id", "categoryName");
                    // this.assessmentDetails.categoryList.forEach(cat => {
                    //   this.categoryListIds.push(cat.id)
                    // });
                    // this.getSubcategroryDetails(this.categoryListIds);
                }
                else {
                    this.assessmentDetails.categoryList = [];
                    // this.catAndSubCatList = [];
                }
            }
            else {
                this.assessmentDetails.categoryList = [];
                // this.catAndSubCatList = [];
            }
        });
    }
    /*
     View category Modal
     Author: Jayshri Kolase
     Date : 13 Oct 2023
   */
    viewCategory(modal) {
        var modalRef = this.modalService.open(modal, {
            windowClass: "right",
        });
        modalRef.result.then((result) => {
            if (result === "success") {
                this.getcategroryDetails();
            }
        }, (reason) => {
            console.log(reason);
        });
    }
    /*
     edit category modal open
     Author: Jayshri Kolase
     Date : 13 Oct 2023
   */
    editCatAndSubCat(content, list) {
        this.catUpdateFlag = true;
        this.assessmentDet.category = list.categoryName;
        this.assessmentDet.categoryId = list.id;
        this.assessmentDet.assessmentId = list.assessmentId;
        // if (list.subCategoryList != null && list.subCategoryList.length > 0) {
        //   this.assessmentDetails.subCategoryList[list.subCategoryList.length - 1].show = true;
        // } else {
        // }
        // this.assessmentDet.subCategoryList = list.subCategoryList;
        this.modalService.open(content, {
            windowClass: "assessmentpopup",
        });
    }
    /*
     delete category
     Author: Jayshri Kolase
     Date : 13 Oct 2023
   */
    deleteCatAndSubCat(catId) {
        this.modalService.dismissAll();
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Are You Sure!",
            text: "You want remove this category ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044CD",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove It",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                let req = {
                    id: catId,
                };
                this.assessmentService
                    .deleteCatgeory("apis/sm/deleteCategory", req)
                    .subscribe((data) => {
                    if (data.result) {
                        // if (data.reason != '' || data.reason != undefined) {
                        //   this.alertService.success(data.reason)
                        // } else {
                        this.alertService.success("Category deleted successfully.");
                        // }
                        this.getcategroryDetails();
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while deleting data. Please try again");
                        }
                    }
                });
            }
            else {
            }
        });
    }
    /*
     Common function for set an array for dropdown
     Author: Jayshri Kolase
     Date : 13 Oct 2023
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
        console.log(tmpArray);
        return tmpArray;
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "dept" || fieldToSort === "level") {
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
    onChange(ev, type) {
        console.log("Hello");
        if (ev) {
            console.log(ev);
            if (type == "type") {
                this.assessmentType = ev;
                if (ev.name == 'SAFETY') {
                    this.isSafetyAssessment = true;
                }
                else if (ev.name == 'LEVEL') {
                    this.isSafetyAssessment = false;
                }
                console.log(this.branchId);
                this.branchId = [];
                this.searchDet.deptIds = [];
                this.resetFormField(this.assessmentForm, "branchId");
                this.resetFormField(this.assessmentForm, "deptId");
                this.resetFormField(this.assessmentForm, "cellLineId");
                this.resetFormField(this.assessmentForm, "workstationId");
            }
            if (type == "plant") {
                this.branchId = ev.id;
                console.log(this.branchId);
                this.searchDet.deptIds = [];
                this.resetFormField(this.assessmentForm, "deptId");
                this.resetFormField(this.assessmentForm, "cellLineId");
                this.resetFormField(this.assessmentForm, "workstationId");
                this.getDepartmentList(this.branchId);
            }
            if (type == "dept") {
                console.log(ev);
                this.cellList = [];
                this.deptId = ev.id;
                this.searchDet.cell = [];
                this.resetFormField(this.assessmentForm, "cellLineId");
                this.resetFormField(this.assessmentForm, "workstationId");
                this.getCellList(this.deptId);
            }
            if (type == "cell") {
                console.log(ev);
                this.lineId = ev.id;
                this.searchDet.work = [];
                this.resetFormField(this.assessmentForm, "workstationId");
                this.getWorkforceList(this.lineId);
            }
            if (type == "work") {
                this.workId = ev.id;
            }
        }
        else {
            if (type == "plant") {
                // if (this.searchDet) {
                //   this.departmentList = [];
                //   this.searchDet.departmentList = [];
                // this.cellList = [];
                // this.searchDet.cellList = [];
                // this.resetFormField(this.filterData, "deptIds");
                // this.resetFormField(this.stakeholderForm, "deptId");
                // this.resetFormField(this.stakeholderForm, 'lineId');
                // this.searchDet.lineId = [];
                // }
            }
            else if (type == "dept") {
                // this.resetFormField(this.stakeholderForm, 'lineId');
                // this.cellList = [];
                // this.searchDet.cellList = [];
                // this.searchDet.lineId = [];
            }
        }
    }
    onChangeAll(ev, type) {
        if (ev) {
            console.log("Select All action");
        }
        else {
            console.log("Unselect All action");
        }
    }
    sortFunction(array, key) {
        if (array != null && array.length > 0) {
            array.sort(function (a, b) {
                var nameA = !Number(a[key]) ? a[key].toUpperCase() : a[key];
                var nameB = !Number(b[key]) ? b[key].toUpperCase() : b[key];
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
    getDepartmentList(branch) {
        this.assessmentService
            .getDepartmentByBranch("getdepartmentlistbybranchid/" + branch)
            .subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.deptList != null && res.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.departmentList = this.setArray(res.deptList, "deptId", "deptName");
                    this.departmentList = this.sortFunction(this.departmentList, "deptName");
                    this.searchDet.dept = [this.departmentList[0]];
                    console.log(this.departmentList);
                }
                else {
                    this.searchDet.departmentList = [];
                }
            }
            else {
                this.searchDet.departmentList = [];
            }
        });
    }
    getCellList(deptId) {
        var req = {
            branchId: this.branchId,
            deptId: deptId
        };
        // if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
        //   req.deptId = this.searchDet.dept[0].id;
        // }
        this.assessmentService.getCellList("apis/sm/getCellList", req).subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.cellList = this.setArray(response.dataList, "lineId", "lineName");
                    this.cellList = this.sortFunction(this.cellList, "lineName");
                    this.searchDet.cell = [this.cellList[0]];
                }
                else {
                    this.cellList = [];
                }
            }
            else {
                this.cellList = [];
            }
        });
    }
    getWorkforceList(data) {
        // this.workforceList = [];
        // this.listLoader = true;
        console.log(data);
        let req = {
            branchId: this.branchId,
            orgId: this.userDet.organization.orgId,
            deptId: this.deptId,
            lineIds: [data]
        };
        console.log(req);
        // if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
        //   req.deptId = this.searchDet.dept[0].id;
        // }
        // if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
        //   req.lineId = this.searchDet.cell[0].id;
        // }
        this.assessmentService
            .getWorkforceDeploymentData("apis/sm/getWorkstationList", req)
            .subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.dataList != null && res.dataList.length > 0) {
                    this.workforceList = this.setArray(res.dataList, "id", "workstation");
                    this.workforceList = this.sortFunction(this.workforceList, "workstation");
                    this.searchDet.workforceList = [this.workforceList[0]];
                    console.log(this.workforceList);
                }
                else {
                    this.workforceList = [];
                }
            }
            else {
                this.workforceList = [];
            }
        });
    }
    // validateTimeInput(control: AbstractControl) {
    //   const value = control.value;
    //   if (value % 1 === 0 && value >= 0 && value <= 999) {
    //     control.setErrors(null); // Clear any previous errors
    //   } else {
    //     if (value % 1 === 0) {
    //       control.setErrors({ threeDigits: true });
    //     } else {
    //       control.setErrors({ decimalValue: true });
    //     }
    //   }
    // }
    validateTimeInput(control) {
        const value = control.value;
        this.isReqAssTime = false;
        if ((control.value == '' || control.value == null) && control.value !== 0) {
            this.isReqAssTime = true;
        }
        if (value % 1 === 0 && value >= 0 && value <= 99) {
            if (value === 0) {
                control.setErrors({ zeroValue: true });
            }
            else {
                control.setErrors(null); // Clear any previous errors
            }
        }
        else {
            if (value < 0) {
                control.setErrors({ negativeValue: true });
            }
            else if (value % 1 === 0) {
                control.setErrors({ threeDigits: true });
            }
            else {
                control.setErrors({ decimalValue: true });
            }
        }
    }
};
AssessmentDetailComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _assessment_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ["Constant",] }] }
];
AssessmentDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assessment-detail",
        template: _raw_loader_assessment_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessment_detail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _assessment_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["Title"], Object])
], AssessmentDetailComponent);



/***/ }),

/***/ "Agah":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AssessmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentModule", function() { return AssessmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _assessment_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-routing.module */ "8iil");
/* harmony import */ var _assessment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment.component */ "F5dy");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "ebz3");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pipe/custom-pipe.module */ "QrAV");
/* harmony import */ var _assessment_detail_assessment_detail_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assessment-detail/assessment-detail.module */ "KXr7");
/* harmony import */ var _assessment_constant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assessment.constant */ "ZQ3s");













let AssessmentModule = class AssessmentModule {
};
AssessmentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assessment_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _assessment_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssessmentRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["TopBarModule"],
            src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["LoginInfoModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
            src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_10__["CustomPipeModule"],
            _assessment_detail_assessment_detail_module__WEBPACK_IMPORTED_MODULE_11__["AssessmentDetailModule"]
        ],
        providers: [
            { provide: 'Constant', useValue: _assessment_constant__WEBPACK_IMPORTED_MODULE_12__["CONSTANT"] }
        ]
    })
], AssessmentModule);



/***/ }),

/***/ "BB5g":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment-detail/assessment-detail-routing.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: AssessmentDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentDetailRoutingModule", function() { return AssessmentDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assessment_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-detail.component */ "AWsS");




const routes = [{ path: '', component: _assessment_detail_component__WEBPACK_IMPORTED_MODULE_3__["AssessmentDetailComponent"] }];
let AssessmentDetailRoutingModule = class AssessmentDetailRoutingModule {
};
AssessmentDetailRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssessmentDetailRoutingModule);



/***/ }),

/***/ "BQf9":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment-detail/assessment-detail.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerBar {\n  display: inline-flex;\n  width: 100%;\n}\n.headerBar .backArrow {\n  margin: auto;\n  display: inline-block;\n  padding-left: 1rem;\n}\n.headerBar .backArrow .feather {\n  color: #7044cd;\n  vertical-align: bottom;\n  font-size: 2em;\n  cursor: pointer;\n}\n.formStyle {\n  padding: 20px 20px 5px 20px;\n  background: #ffffff;\n  border: 1px solid #7044cd;\n  margin: 0 auto;\n  margin-top: 10px;\n  border-radius: 2px;\n  position: relative;\n}\n.formStyle .form-group .col-form-label {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  margin: auto 0px;\n  padding: 0px 5px 0px 15px;\n}\n.formStyle .form-group .checkbox-block.form-check .form-check-label {\n  font: normal normal 300 14px/1.5 Helvetica Neue;\n}\n.formStyle .form-group .checkbox-block.form-check input[type=checkbox]:checked + label::after {\n  top: 1.5ex;\n}\n.formStyle .form-group .optText-div {\n  position: relative;\n}\n.formStyle .form-group .optText-div label {\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n  margin: 0px;\n  border-radius: 5px;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  margin: 0px;\n  padding-left: 30px;\n}\n.formStyle .form-group .optText-div label:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n.formStyle .form-group .optText-div label:after {\n  width: 20px;\n  height: 20px;\n  content: \"\";\n  border: 2px solid #d1d7dc;\n  background-color: #fff;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n.formStyle .form-group .optText-div input:checked ~ label {\n  color: #7044cd;\n}\n.formStyle .form-group .optText-div input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n.formStyle .form-group .optText-div input:checked ~ label:after {\n  background-color: #7044cd;\n  border-color: #7044cd;\n}\n.formStyle .form-group .optText-div input {\n  width: 20px;\n  height: 20px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n.formStyle .rating-block .ratingStar {\n  padding: 1em;\n}\n.formStyle .rating-block .ratingStar .star {\n  font-size: 2rem;\n  margin: 0px 2px;\n}\n.formStyle .rating-block .ratingStar .starFilled {\n  color: #f7c001;\n}\n.formStyle .rating-block .ratingWithLabel {\n  padding: 1em 0px 0px;\n}\n.formStyle .rating-block .ratingWithLabel .starTemp {\n  padding: 0px 0.5em 1em;\n  position: relative;\n}\n.formStyle .rating-block .ratingWithLabel .starTemp .star-label {\n  font-size: 12px !important;\n  margin: 0px !important;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.formStyle .custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.formStyle .astrik {\n  color: #ff5252;\n}\n.formStyle .btn-add {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  border: 1px solid #00bf6f;\n  border-radius: 50%;\n  color: #ffffff;\n  cursor: pointer;\n  background: #00bf6f;\n}\n.formStyle .btn-minus {\n  margin-left: 2px;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  border: 1px solid #ff5252;\n  text-align: center;\n  border-radius: 50%;\n  color: #ffffff;\n  cursor: pointer;\n  background: #ff5252;\n}\n.formStyle .btn-modify {\n  font-size: 17px;\n  color: #7044cd;\n}\n.formStyle .btn-delete {\n  color: #f95371;\n  font-size: 17px;\n}\n.formStyle .assessmentinputBox,\n.formStyle .assessmentinputBox:hover,\n.formStyle .assessmentinputBox:focus {\n  border-radius: 4px;\n  box-shadow: 0px 0px 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n.formStyle .assessmentinputBox[readonly],\n.formStyle .assessmentinputBox:hover[readonly],\n.formStyle .assessmentinputBox:focus[readonly] {\n  background-color: #fff;\n}\n.catModal {\n  background: #fff;\n  z-index: 999;\n}\n.catModal .modal-header {\n  padding: 10px 15px;\n}\n.catModal .modal-body {\n  padding: 10px 15px;\n}\n.catModal .modal-body .form-group .col-form-label {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  margin: auto 0px;\n  padding: 0px 5px 0px 15px;\n}\n.catModal .modal-body .form-group .customInput-field,\n.catModal .modal-body .form-group .customInput-field:hover,\n.catModal .modal-body .form-group .customInput-field:focus {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  border-radius: 4px;\n  box-shadow: 0px 0px 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n.subCategoryadd {\n  padding-top: 0.3rem;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #00b3ff;\n  text-align: center;\n  border-radius: 25%;\n  color: #ffffff;\n  cursor: pointer;\n  background: #7044cd;\n}\n.subCategoryremove {\n  padding-top: 0.3rem;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #f95371;\n  text-align: center;\n  border-radius: 25%;\n  color: #ffffff;\n  cursor: pointer;\n  background: #f95371;\n}\n.inputboxStyle {\n  border-radius: 6px;\n  box-shadow: 0px 0px 5px 1px #eae1ea;\n}\n.fontCat {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n}\n.headerTitle {\n  color: #7044cd !important;\n  font: normal normal 500 18px/1.5 Helvetica Neue !important;\n}\n.qsBlock {\n  border: 1px solid #7044cd;\n}\n.qsBlock .questions-block {\n  margin: 0 auto;\n  margin-top: 10px;\n}\n.qsBlock .questions-block:first-child {\n  margin-top: 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk {\n  position: relative;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock {\n  background: white;\n  cursor: pointer;\n  border: 1px dotted #8792d6;\n  position: relative;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv {\n  margin: 0px;\n  position: relative;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .quesIndex {\n  background-color: #cdd1d6;\n  margin: 0px auto auto;\n  text-align: center;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .quesIndex label {\n  padding: 15px;\n  margin: 0px;\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .quesBlock {\n  width: 100%;\n  z-index: 999;\n  margin: auto 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .quesBlock label {\n  margin: 0px 0px 0px 10px;\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  white-space: pre-line;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .markDiv {\n  margin: auto 0px;\n  padding-left: 0px;\n  text-align: right;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .markDiv label {\n  margin: 0px 0px 0px 10px;\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .quesDiv .actionBtn {\n  position: absolute;\n  right: 8px;\n  top: 2px;\n  display: inline-flex;\n  z-index: 999;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block {\n  padding: 0.5rem;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li {\n  float: left;\n  width: 50%;\n  margin: 0.2rem 0px;\n  cursor: pointer;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optIndex {\n  font: normal normal 600 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  text-transform: capitalize;\n  padding: 0.5rem 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div {\n  position: relative;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div label {\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  width: 100%;\n  display: block;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n  margin: 0px;\n  border-radius: 5px;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #464646;\n  margin: 0px;\n  padding-left: 30px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div label:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div label:after {\n  width: 20px;\n  height: 20px;\n  content: \"\";\n  border: 2px solid #d1d7dc;\n  background-color: #fff;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position: center;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div input:checked ~ label {\n  color: #7044cd;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div input:checked ~ label:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div input:checked ~ label:after {\n  background-color: #7044cd;\n  border-color: #7044cd;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .optText-div input {\n  width: 20px;\n  height: 20px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  visibility: hidden;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .checkbox-block.form-check {\n  border: none;\n  padding-left: 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .checkbox-block.form-check .form-check-label {\n  line-height: 1.5;\n  width: 100%;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .checkbox-block.form-check input[type=checkbox]:checked + label {\n  color: #7044cd;\n  font-weight: 500;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li .checkbox-block.form-check input[type=checkbox]:checked + label::after {\n  top: 1.6ex;\n  z-index: 1;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.input-block {\n  width: 100%;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.input-block input,\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.input-block input:hover,\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.input-block input:focus {\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n  border-radius: 0px;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n  padding-left: 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.textarea-block {\n  width: 100%;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.textarea-block .textAreaField,\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.textarea-block .textAreaField:hover,\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div li.textarea-block .textAreaField:focus {\n  border: none;\n  border-radius: 0px;\n  background-color: transparent;\n  border-bottom: 1px solid #ccc;\n  box-shadow: none;\n  outline: none;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div .rating-block .ratingStar .star {\n  font-size: 2rem;\n  margin: 0px 2px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div .rating-block .ratingStar .starFilled {\n  color: #f7c001;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div .rating-block .ratingWithLabel {\n  padding: 1em 0px 0px;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div .rating-block .ratingWithLabel .starTemp {\n  padding: 0px 0.5em 1em;\n  position: relative;\n}\n.qsBlock .questions-block .overlay .ques-blk .formElementsBlock .option-block .optList-Div .rating-block .ratingWithLabel .starTemp .star-label {\n  font-size: 12px !important;\n  margin: 0px !important;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n.qsBlock .overlay-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0);\n  transition: background 0.5s ease;\n  z-index: 999;\n}\n.qsBlock .ques-blk:hover .overlay-bg {\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n}\n.qsBlock .ques-blk:hover .btn-que-edit {\n  opacity: 1;\n}\n.qsBlock .ques-blk:hover .ques-delete-btn {\n  opacity: 1;\n}\n.qsBlock .btn-edit {\n  position: relative;\n  top: 4px;\n  margin-right: 3px;\n  margin-top: -2px;\n  height: 30px;\n  border: 1px solid #00bf6f;\n  width: 70px;\n  color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: normal;\n  background: #00bf6f;\n  border-radius: 3px;\n  opacity: 0;\n  transition: opacity 0.35s ease;\n}\n.qsBlock .ques-delete-btn:hover {\n  color: #fff;\n  background: #e46363;\n  border: 1px solid #e46363;\n}\n.qsBlock .ques-delete-btn {\n  position: relative;\n  top: 4px;\n  margin-right: 0px;\n  margin-top: -2px;\n  height: 30px;\n  width: 70px;\n  background: #dd4b39;\n  border: 1px solid #dd4b39;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.35s ease;\n}\n.qsBlock .checkBoxAudit {\n  content: \"\";\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: 2px solid #343172;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n  padding: 6px;\n  position: fixed;\n  margin-left: 5px;\n  position: absolute;\n}\n.qsBlock .survey-labels {\n  padding-left: 1px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #7a6e6e;\n}\n.qsBlock .Category {\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box;\n}\n.qsBlock .Category .catLbl {\n  color: white;\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n}\n.qsBlock .groupQuestionDiv {\n  margin: 5px;\n}\n.qsBlock .groupQuestionDiv .ques-blk {\n  margin: 5px 0px;\n}\n.qsBlock .noSubCat {\n  padding: 5px;\n}\n.qsBlock .noSubCat .ques-blk {\n  padding-bottom: 5px;\n}\n.qsBlock .noSubCat .ques-blk:last-child {\n  padding-bottom: 0px;\n}\n.qsBlock .subCategory {\n  position: relative;\n  padding: 5px 10px;\n  background: #7044cd 0% 0% no-repeat padding-box;\n}\n.qsBlock .subCategory .key {\n  font: normal normal 400 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.qsBlock .subCategory .value {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  color: #fff;\n}\n.catSubCatPopup .tableFixHead {\n  max-height: calc(100vh - 6vh);\n  min-height: calc(100vh - 6vh);\n  height: calc(100vh - 6vh);\n  border: none;\n}\n.deleteBtn {\n  background: #dd4b39;\n  border: 1px solid #dd4b39;\n}\n.deleteBtn:hover, .deleteBtn:focus {\n  background: #e46363;\n  border: 1px solid #e46363;\n}\n.publishBtn {\n  background-color: #00bf6f;\n  border-color: #28a745;\n}\n.publishBtn:hover, .publishBtn:focus {\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.viewCatBtn {\n  margin-right: 5px !important;\n}\n.textarea-custom {\n  border: 1px solid #ccc;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n  max-height: 200px;\n  height: auto;\n  min-height: 65px;\n  resize: none;\n  padding: 10px;\n  font-family: Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3Nlc3NtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBRFE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdaO0FBRUE7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFUTtFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUFaO0FBR1k7RUFDSSwrQ0FBQTtBQURoQjtBQUdZO0VBQ0ksVUFBQTtBQURoQjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQUlZO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBR0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKaEI7QUFLZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxpREFBQTtFQUNBLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFKcEI7QUFNZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscVpBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFKcEI7QUFPWTtFQUNJLGNBQUE7QUFMaEI7QUFNZ0I7RUFDSSxtREFBQTtFQUNBLFVBQUE7QUFKcEI7QUFNZ0I7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FBSnBCO0FBT1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBTGhCO0FBVVE7RUFDSSxZQUFBO0FBUlo7QUFTWTtFQUNJLGVBQUE7RUFFQSxlQUFBO0FBUmhCO0FBV1k7RUFDSSxjQUFBO0FBVGhCO0FBWVE7RUFDSSxvQkFBQTtBQVZaO0FBV1k7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBVGhCO0FBVWdCO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFScEI7QUFhSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBWFI7QUFhSTtFQUNJLGNBQUE7QUFYUjtBQWFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFYUjtBQWFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVhSO0FBYUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVhSO0FBYUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVhSO0FBYUk7OztFQUdJLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBWFI7QUFZUTs7O0VBQ0ksc0JBQUE7QUFSWjtBQWFBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBVko7QUFXSTtFQUNJLGtCQUFBO0FBVFI7QUFXSTtFQUNJLGtCQUFBO0FBVFI7QUFXWTtFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVRoQjtBQVdZOzs7RUFHSSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBVGhCO0FBZUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpKO0FBZUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVpKO0FBZUE7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0FBWko7QUFlQTtFQUNJLCtDQUFBO0FBWko7QUFlQTtFQUNJLHlCQUFBO0VBQ0EsMERBQUE7QUFaSjtBQWVBO0VBQ0kseUJBQUE7QUFaSjtBQWNJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBWlI7QUFhUTtFQUNJLGVBQUE7QUFYWjtBQWVZO0VBQ0ksa0JBQUE7QUFiaEI7QUFjZ0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBWnBCO0FBYW9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBWHhCO0FBWXdCO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBVjVCO0FBVzRCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVRoQztBQVl3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFWNUI7QUFXNEI7RUFDSSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFUaEM7QUFZd0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFWNUI7QUFXNEI7RUFDSSx3QkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVGhDO0FBWXdCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQVY1QjtBQWFvQjtFQUNJLGVBQUE7QUFYeEI7QUFZd0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBVjVCO0FBVzRCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFUaEM7QUFVZ0M7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFScEM7QUFVZ0M7RUFDSSxrQkFBQTtBQVJwQztBQVNvQztFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUdBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVHhDO0FBVXdDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaURBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBVDVDO0FBV3dDO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFaQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBVDVDO0FBWW9DO0VBQ0ksY0FBQTtBQVZ4QztBQVd3QztFQUNJLG1EQUFBO0VBQ0EsVUFBQTtBQVQ1QztBQVd3QztFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFUNUM7QUFZb0M7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBVnhDO0FBYWdDO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBWHBDO0FBWW9DO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBVnhDO0FBWW9DO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBVnhDO0FBWW9DO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUFWeEM7QUFhZ0M7RUFDSSxXQUFBO0FBWHBDO0FBWW9DOzs7RUFHSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUFWeEM7QUFhZ0M7RUFDSSxXQUFBO0FBWHBDO0FBWW9DOzs7RUFHSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBVnhDO0FBZ0JvQztFQUNJLGVBQUE7RUFFQSxlQUFBO0FBZnhDO0FBaUJvQztFQUNJLGNBQUE7QUFmeEM7QUFrQmdDO0VBQ0ksb0JBQUE7QUFoQnBDO0FBaUJvQztFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFmeEM7QUFnQndDO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFkNUM7QUF5Qkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQXZCUjtBQXlCSTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQXZCUjtBQXlCSTtFQUNJLFVBQUE7QUF2QlI7QUF5Qkk7RUFDSSxVQUFBO0FBdkJSO0FBeUJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBdkJSO0FBeUJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUF2QlI7QUF5Qkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQXZCUjtBQXlCSTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSx5RkFDSTtFQUVKLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXpCUjtBQTJCSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQXpCUjtBQTJCSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBQXpCUjtBQTBCUTtFQUNJLFlBQUE7RUFDQSwrQ0FBQTtBQXhCWjtBQTJCSTtFQUNJLFdBQUE7QUF6QlI7QUEwQlE7RUFDSSxlQUFBO0FBeEJaO0FBMkJJO0VBQ0ksWUFBQTtBQXpCUjtBQTBCUTtFQUNJLG1CQUFBO0FBeEJaO0FBeUJZO0VBQ0ksbUJBQUE7QUF2QmhCO0FBMkJJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FBekJSO0FBMEJRO0VBQ0ksK0NBQUE7RUFDQSxXQUFBO0FBeEJaO0FBMEJRO0VBQ0ksK0NBQUE7RUFDQSxXQUFBO0FBeEJaO0FBOEJJO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQTNCUjtBQStCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7QUE1Qko7QUE2Qkk7RUFFSSxtQkFBQTtFQUNBLHlCQUFBO0FBNUJSO0FBZ0NBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQTdCSjtBQThCSTtFQUVJLHlCQUFBO0VBQ0EscUJBQUE7QUE3QlI7QUFpQ0E7RUFDSSw0QkFBQTtBQTlCSjtBQWdDQTtFQUNJLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQTdCSiIsImZpbGUiOiJhc3Nlc3NtZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJCYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5iYWNrQXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIC5mZWF0aGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybVN0eWxlIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCA1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYmVlYWZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIHtcclxuICAgICAgICAgICAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCAzMDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxLjVleDtcclxuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDAuNmV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcHRUZXh0LWRpdiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0Q0Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDFkN2RjO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TlM0eklERXpMaklpUGlBZ1BIQmhkR2dnWm1sc2JEMGlJMlptWmlJZ1pEMGlUVEUwTGpjdU9Hd3RMalF0TGpSaE1TNDNJREV1TnlBd0lEQWdNQzB5TGpNdU1VdzFMaklnT0M0eUlETWdOaTQwWVRFdU55QXhMamNnTUNBd0lEQXRNaTR6TGpGTUxqUWdOMkV4TGpjZ01TNDNJREFnTUNBd0lDNHhJREl1TTJ3ekxqZ2dNeTQxWVRFdU55QXhMamNnTUNBd0lEQWdNaTQwTFM0eFRERTFJRE11TVdFeExqY2dNUzQzSURBZ01DQXdMUzR5TFRJdU0zb2lJR1JoZEdFdGJtRnRaVDBpVUdaaFpDQTBJaTgrUEM5emRtYyspO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yYXRpbmctYmxvY2sge1xyXG4gICAgICAgIC5yYXRpbmdTdGFyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICAuc3RhciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogI2NjYztcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAuc3RhckJsYW5rZWQge31cclxuICAgICAgICAgICAgLnN0YXJGaWxsZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmN2MwMDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJhdGluZ1dpdGhMYWJlbCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwcHggMHB4O1xyXG4gICAgICAgICAgICAuc3RhclRlbXAge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDAuNWVtIDFlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIC5zdGFyLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWVycm9yTXNnIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgICAgIGNvbG9yOiAjZmY1MjUyO1xyXG4gICAgfVxyXG4gICAgLmFzdHJpayB7XHJcbiAgICAgICAgY29sb3I6ICNmZjUyNTI7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDBiZjZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAwYmY2ZjtcclxuICAgIH1cclxuICAgIC5idG4tbWludXMge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjUyNTI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNTI1MjtcclxuICAgIH1cclxuICAgIC5idG4tbW9kaWZ5IHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICB9XHJcbiAgICAuYnRuLWRlbGV0ZSB7XHJcbiAgICAgICAgY29sb3I6ICNmOTUzNzE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgLmFzc2Vzc21lbnRpbnB1dEJveCxcclxuICAgIC5hc3Nlc3NtZW50aW5wdXRCb3g6aG92ZXIsXHJcbiAgICAuYXNzZXNzbWVudGlucHV0Qm94OmZvY3VzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICNlYWUxZWE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICZbcmVhZG9ubHldIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXRNb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgfVxyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDBweCAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jdXN0b21JbnB1dC1maWVsZCxcclxuICAgICAgICAgICAgLmN1c3RvbUlucHV0LWZpZWxkOmhvdmVyLFxyXG4gICAgICAgICAgICAuY3VzdG9tSW5wdXQtZmllbGQ6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggI2VhZTFlYTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3ViQ2F0ZWdvcnlhZGQge1xyXG4gICAgcGFkZGluZy10b3A6IDAuM3JlbTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYjNmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxufVxyXG5cclxuLnN1YkNhdGVnb3J5cmVtb3ZlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjNyZW07XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOTUzNzE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmOTUzNzE7XHJcbn1cclxuXHJcbi5pbnB1dGJveFN0eWxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMjM0IDIyNSAyMzQpO1xyXG59XHJcblxyXG4uZm9udENhdCB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxufVxyXG5cclxuLmhlYWRlclRpdGxlIHtcclxuICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxOHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucXNCbG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC5xdWVzdGlvbnMtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjNzA0NENEO1xyXG4gICAgICAgICAgICAucXVlcy1ibGsge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmZvcm1FbGVtZW50c0Jsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZG90dGVkICM4NzkyZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIC5xdWVzRGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXNJbmRleCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkMWQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucXVlc0Jsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcmtEaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbkJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAub3B0aW9uLWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAub3B0TGlzdC1EaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRJbmRleCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNjAwIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5vcHRUZXh0LWRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICMwMDAwMDAyOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDY0NjQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0Q0Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZTNkKDEsIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDFkN2RjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0F4TlM0eklERXpMaklpUGlBZ1BIQmhkR2dnWm1sc2JEMGlJMlptWmlJZ1pEMGlUVEUwTGpjdU9Hd3RMalF0TGpSaE1TNDNJREV1TnlBd0lEQWdNQzB5TGpNdU1VdzFMaklnT0M0eUlETWdOaTQwWVRFdU55QXhMamNnTUNBd0lEQXRNaTR6TGpGTUxqUWdOMkV4TGpjZ01TNDNJREFnTUNBd0lDNHhJREl1TTJ3ekxqZ2dNeTQxWVRFdU55QXhMamNnTUNBd0lEQWdNaTQwTFM0eFRERTFJRE11TVdFeExqY2dNUzQzSURBZ01DQXdMUzR5TFRJdU0zb2lJR1JoZEdFdGJtRnRaVDBpVUdaaFpDQTBJaTgrUEM5emRtYyspO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlM2QoNTYsIDU2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3gtYmxvY2suZm9ybS1jaGVjayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEuNmV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmlucHV0LWJsb2NrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJi50ZXh0YXJlYS1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dEFyZWFGaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRleHRBcmVhRmllbGQ6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0QXJlYUZpZWxkOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmctYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yYXRpbmdTdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJGaWxsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmN2MwMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJhdGluZ1dpdGhMYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhclRlbXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDAuNWVtIDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFyLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAub3ZlcmxheS1iZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgIH1cclxuICAgIC5xdWVzLWJsazpob3ZlciAub3ZlcmxheS1iZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG4gICAgLnF1ZXMtYmxrOmhvdmVyIC5idG4tcXVlLWVkaXQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAucXVlcy1ibGs6aG92ZXIgLnF1ZXMtZGVsZXRlLWJ0biB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIC5idG4tZWRpdCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMGJmNmY7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiZjZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMgZWFzZTtcclxuICAgIH1cclxuICAgIC5xdWVzLWRlbGV0ZS1idG46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNDYzNjM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0NjM2MztcclxuICAgIH1cclxuICAgIC5xdWVzLWRlbGV0ZS1idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZDRiMzk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMgZWFzZTtcclxuICAgIH1cclxuICAgIC5jaGVja0JveEF1ZGl0IHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzQzMTcyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpLFxyXG4gICAgICAgICAgICBpbnNldCAwcHggLTE1cHggMTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuc3VydmV5LWxhYmVscyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICM3YTZlNmU7XHJcbiAgICB9XHJcbiAgICAuQ2F0ZWdvcnkge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAuY2F0TGJsIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxNXB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ3JvdXBRdWVzdGlvbkRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgLnF1ZXMtYmxrIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5ub1N1YkNhdCB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIC5xdWVzLWJsayB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN1YkNhdGVnb3J5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgLmtleSB7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDEzcHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbHVlIHtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNhdFN1YkNhdFBvcHVwIHtcclxuICAgIC50YWJsZUZpeEhlYWQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2dmgpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2dmgpO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZ2aCk7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVsZXRlQnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGQ0YjM5O1xyXG4gICAgJjpob3ZlcixcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNDYzNjM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0NjM2MztcclxuICAgIH1cclxufVxyXG5cclxuLnB1Ymxpc2hCdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmY2ZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzFlN2UzNDtcclxuICAgIH1cclxufVxyXG5cclxuLnZpZXdDYXRCdG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dGFyZWEtY3VzdG9tIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTsgXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvOyBcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4OyBcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDY1cHg7XHJcbiAgICByZXNpemU6IG5vbmU7IFxyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG59Il19 */");

/***/ }),

/***/ "Eo/v":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/assessment/assessment-detail/assessment-detail.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"p-0\" [ngClass]=\"selectedDet.assessmentId != 0 ? 'col-10':'col-12'\">\r\n        <div class=\"headerBar\">\r\n            <span class=\"backArrow\">\r\n                <a routerLink=\"..\"><i class=\"feather icon-arrow-left\"></i></a>\r\n            </span>\r\n            <app-topBar\r\n                title=\"Assessment Details {{(selectedDet.assessmentId > 0) ? ' - '+ selectedDet.assessmentId : ''}}\"\r\n                style=\"width: 100%;\">\r\n            </app-topBar>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 text-right m-auto p-0 text-center\" *ngIf=\"selectedDet.assessmentId != 0\">\r\n        <button class=\"btn submitBtn publishBtn\" (click)=\"publishAssessment()\" [disabled]=\"deletePublishloader\"\r\n            *ngIf=\"assessmentDet.quesList != null && assessmentDet.quesList.length > 0 && selectedDet.status != 'PUBLISHED'\">\r\n            <span *ngIf=\"deletePublishloader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n            <span *ngIf=\"deletePublishloader\" class=\"load-text\"> Loading...</span>\r\n            <span *ngIf=\"!deletePublishloader\" class=\"btn-text\">Publish</span>\r\n        </button>&nbsp;&nbsp;\r\n        <!-- <button class=\"btn submitBtn deleteBtn\" (click)=\"deleteAssessment()\"\r\n            *ngIf=\"selectedDet.isEditable || selectedDet.status == 'COMPLETED'\" [disabled]=\"deletePublishloader\">\r\n            <span *ngIf=\"deletePublishloader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n            <span *ngIf=\"deletePublishloader\" class=\"load-text\"> Loading...</span>\r\n            <span *ngIf=\"!deletePublishloader\" class=\"btn-text\">Delete</span>\r\n        </button> -->\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <!-- <perfect-scrollbar [style.height]=\"'calc(100vh - 62px)'\"> -->\r\n    <form [formGroup]=\"assessmentForm\" class=\"formStyle\" autocomplete=\"off\"\r\n        (ngSubmit)=\"saveAssessmentDetails(assessmentForm)\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 m-auto\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"assessmentType\" class=\"col-sm-12 col-form-label\">Assessment Type &nbsp;<span\r\n                            class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"assessmentType\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Assessment Type'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"assessmentTypeList\" formControlName=\"assessmentType\"\r\n                            [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\"\r\n                            (onSelect)=\"onChange($event,'type')\" (onDeSelect)=\"onChange(false,'type')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"assessmentForm.controls['assessmentType'].invalid && (assessmentForm.controls['assessmentType'].touched || assessmentForm.controls['assessmentType'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['assessmentType'].errors.required\">\r\n                                Please select assessment type\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 m-auto\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label\">Plant &nbsp;<span\r\n                            class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'dept')\" formControlName=\"branchId\"\r\n                            [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\"\r\n                            (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"assessmentForm.controls['branchId'].invalid && (assessmentForm.controls['branchId'].touched || assessmentForm.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 m-auto\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"deptId\" class=\"col-sm-12 col-form-label\">Department &nbsp;<span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"departmentList\" formControlName=\"deptId\"\r\n                            [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\"\r\n                            (onSelect)=\"onChange($event,'dept')\" (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" assessmentForm.controls['deptId'].invalid && (assessmentForm.controls['deptId'].touched || assessmentForm.controls['deptId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['deptId'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6 m-auto\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"cellLineId\" class=\"col-sm-12 col-form-label\">Cell/Line &nbsp;<span\r\n                            class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cellLineId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"SingleDropdownSettings\" [data]=\"cellList\"\r\n                            formControlName=\"cellLineId\" [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\"\r\n                            (onSelect)=\"onChange($event,'cell')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" assessmentForm.controls['cellLineId'].invalid && (assessmentForm.controls['cellLineId'].touched || assessmentForm.controls['cellLineId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['cellLineId'].errors.required\">\r\n                                Please select cell/line\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"m-auto\" [ngClass]=\"(!isSafetyAssessment) ? 'col-md-3' :'col-md-6'\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"workstationId\" class=\"col-sm-12 col-form-label\">Workstation &nbsp;<span\r\n                            class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"workstationId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"workforceList\" formControlName=\"workstationId\"\r\n                            [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\"\r\n                            (onSelect)=\"onChange($event,'work')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" assessmentForm.controls['workstationId'].invalid && (assessmentForm.controls['workstationId'].touched || assessmentForm.controls['workstationId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['workstationId'].errors.required\">\r\n                                Please select workstation\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"!isSafetyAssessment\" class=\"col-md-3 m-auto\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label\">Level &nbsp;<span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvlId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\" [data]=\"masterLevelList\"\r\n                            formControlName=\"skillLvlId\" [disabled]=\"!selectedDet.isEditable || isCheckSheetAvailable\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" assessmentForm.controls['skillLvlId'].invalid && (assessmentForm.controls['skillLvlId'].touched || assessmentForm.controls['skillLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['skillLvlId'].errors.required\">\r\n                                Please select level\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"title\" class=\"col-sm-12 col-form-label\">Assessment Title\r\n                        &nbsp;<span class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Enter Assessment Title\"\r\n                            formControlName=\"title\" class=\"form-control assessmentinputBox\" maxlength=\"250\"\r\n                            [readonly]=\"!selectedDet.isEditable\" />\r\n                        <div *ngIf=\"assessmentForm.controls['title'].invalid && (assessmentForm.controls['title'].touched || assessmentForm.controls['title'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['title'].errors.required\">\r\n                                Please enter assessment title\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"time\" class=\"col-sm-12 col-form-label\">Assessment Time (Minutes)\r\n                        &nbsp;<span class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"number\" id=\"time\" name=\"time\" placeholder=\"Enter Assessment Time\"\r\n                            formControlName=\"time\" class=\"form-control assessmentinputBox\"\r\n                            [readonly]=\"!selectedDet.isEditable\" min=\"0\" max=\"999\" step=\"1\"\r\n                            (input)=\"validateTimeInput(assessmentForm.get('time'))\" />\r\n                        <div *ngIf=\"assessmentForm.controls['time'].invalid && (assessmentForm.controls['time'].touched || assessmentForm.controls['time'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['time'].errors.required\">\r\n                                Please enter assessment time\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('time').hasError('zeroValue')\">\r\n                                Assessment time cannot be 0.\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('time').hasError('negativeValue')\">\r\n                                Assessment time cannot be negative.\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('time').hasError('threeDigits')\">\r\n                                Assessment time should be two digits.\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('time').hasError('decimalValue')\">\r\n                                Assessment time should not be a decimal value.\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"isReqAssTime\" class=\"custom-errorMsg\">\r\n                            Please enter assessment time\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"col-md-3\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"time\" class=\"col-sm-12 col-form-label\">Assessment Time (Minutes)\r\n                            &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"col-sm-12\">\r\n                            <input type=\"number\" id=\"time\" name=\"time\" placeholder=\"Enter Assessment Time\"\r\n                            formControlName=\"time\" class=\"form-control assessmentinputBox\"\r\n                            [readonly]=\"!selectedDet.isEditable\" min=\"0\" max=\"999\" step=\"1\" pattern=\"^[0-9]{1,3}\" />\r\n                            <div *ngIf=\"assessmentForm.controls['time'].invalid && (assessmentForm.controls['time'].touched || assessmentForm.controls['time'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"assessmentForm.controls['time'].errors.required\">\r\n                                    Please enter assessment time\r\n                                </div>\r\n                                <div *ngIf=\"assessmentForm.get('time').hasError('zeroValue')\">\r\n                                    Assessment time can not be 0.\r\n                                </div>\r\n                                <div *ngIf=\"assessmentForm.get('time').hasError('negativeValue')\">\r\n                                    Assessment time can not be negative.\r\n                                </div>\r\n                               \r\n                                <div *ngIf=\"assessmentForm.get('time').hasError('pattern') && !assessmentForm.get('time').hasError('decimalValue')\">\r\n                                    Assessment time should be three digits.\r\n                                </div>\r\n                           \r\n                                <div *ngIf=\"assessmentForm.get('time').hasError('decimalValue')\">\r\n                                    Assessment time should not be a decimal value.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group row\">\r\n                    <label for=\"passingMark\" class=\"col-sm-12 col-form-label\">Passing (%)\r\n                        &nbsp;<span class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <input type=\"number\" id=\"passingMark\" name=\"passingMark\" placeholder=\"Enter Passing Marks\"\r\n                            formControlName=\"passingMark\" class=\"form-control assessmentinputBox\" maxlength=\"255\"\r\n                            [readonly]=\"!selectedDet.isEditable\" min=\"0\" max=\"100\" step=\"0.01\"\r\n                            pattern=\"^(100(\\.0{1,2})?|[0-9]{1,2}(\\.[0-9]{1,2})?)$\" />\r\n                        <div *ngIf=\"assessmentForm.controls['passingMark'].invalid && (assessmentForm.controls['passingMark'].touched || assessmentForm.controls['passingMark'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"assessmentForm.controls['passingMark'].errors.required\">\r\n                                Please enter passing marks\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('passingMark').hasError('zeroValue')\">\r\n                                Passing marks can not be 0.\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.get('passingMark').hasError('negativeValue')\">\r\n                                Passing marks can not be negative.\r\n                            </div>\r\n                            <div *ngIf=\"assessmentForm.controls['passingMark'].errors?.pattern\">\r\n                                Passing percent should be between 0 and 100, with a maximum\r\n                                of 2 decimal places.\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-right\" *ngIf=\"selectedDet.isEditable\">\r\n            <!-- && (assessmentDet.quesList == null || assessmentDet.quesList.length == 0)\" -->\r\n            <button type=\"submit\" class=\"btn submitBtn\">\r\n                <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitLoader\" class=\"btn-text\">\r\n                    <!-- *ngIf=\"!submitLoader\" -->\r\n                    <!-- *ngIf=\"!selectedDet.isUpdate\" -->\r\n                    <!-- *ngIf=\"selectedDet.assessmentId != 0\" -->\r\n                    <!-- *ngIf=\"selectedDet.assessmentId == 0\" -->\r\n                    <!-- *ngIf=\"!isAssessmentAvailable\" -->\r\n                    <!-- *ngIf=\"isAssessmentAvailable\" -->\r\n                    <b *ngIf=\"selectedDet.assessmentId == 0\">Submit</b>\r\n                    <b *ngIf=\"selectedDet.assessmentId != 0\">Update</b>\r\n                </span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div *ngIf=\"!assessmentService.isEmptyObject(assessmentDet)\">\r\n        <div class=\"form-group row\" style=\"margin: 10px 0px;\">\r\n            <!-- <div class=\"form-group row\"> -->\r\n            <div class=\"checkbox-block text-center form-check\" style=\"border-bottom: none;\"\r\n                [ngClass]=\"(assessmentDet.isCatgeorychecked && assessmentDetails.categoryList != null && assessmentDetails.categoryList.length > 0) ? 'col-sm-8' : (assessmentDet.isCatgeorychecked && (assessmentDetails.categoryList == null || assessmentDetails.categoryList.length == 0) ? 'col-sm-8' :'col-sm-12')\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"isCatgeory\"\r\n                    [(ngModel)]=\"assessmentDet.isCatgeorychecked\"\r\n                    [disabled]=\"!selectedDet.isEditable || (assessmentDetails.categoryList != null && assessmentDetails.categoryList.length > 0)\" />\r\n                <label class=\"form-check-label\" for=\"isCatgeory\">Is Category applicable?</label>\r\n            </div>\r\n            <!-- [ngClass]=\"(assessmentDet.isCatgeorychecked && catAndSubCatList != null && catAndSubCatList.length > 0) ? 'col-sm-4' : 'col-sm-2'\" -->\r\n            <div class=\"m-auto text-right\" *ngIf=\"assessmentDet.isCatgeorychecked\">\r\n                <button *ngIf=\"(assessmentDetails.categoryList != null && assessmentDetails.categoryList.length > 0)\"\r\n                    type=\"button\" class=\"btn submitBtn viewCatBtn\" (click)=\"viewCategory(CategotyViewOrUpdate)\">\r\n\r\n                    <span class=\"btn-text\">View Categories</span>\r\n                </button>\r\n                <button type=\"button\" class=\"btn submitBtn\" *ngIf=\"selectedDet.isEditable\"\r\n                    (click)=\"addCategory(categoryModel)\">\r\n                    <span class=\"btn-text\">Add Category</span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 text-right p-r-0\" *ngIf=\"selectedDet.isEditable\">\r\n            <button type=\"button\" class=\"btn submitBtn\"\r\n                [disabled]=\"assessmentDet.isCatgeorychecked && (assessmentDetails.categoryList == null || assessmentDetails.categoryList.length == 0)\"\r\n                (click)=\"openAddQuestionModal(AddQuestionModel)\">Add\r\n                Question</button>\r\n        </div>\r\n        <!-- </div> -->\r\n        <ng-container *ngIf=\"assessmentDet.quesList != null && assessmentDet.quesList.length > 0\">\r\n            <div class=\"qsBlock\" style=\"margin-top: 25px;\">\r\n                <div class=\"questions-block\">\r\n                    <div class=\"overlay\">\r\n                        <ng-container *ngFor=\"let ques of assessmentDet.quesList; let qIdx = index\">\r\n                            <div class=\"ques-blk\">\r\n                                <div class=\"overlay-bg\"></div>\r\n                                <div class=\"grid-item formElementsBlock\">\r\n                                    <div class=\"quesDiv row\">\r\n                                        <div class=\"quesIndex col-1\">\r\n                                            <label class=\"\">Q{{qIdx+1}}</label>\r\n                                        </div>\r\n                                        <div class=\"col-9 quesBlock\">\r\n                                            <label>{{ques.question}}</label>\r\n                                        </div>\r\n                                        <div class=\"markDiv col-2\">\r\n                                            <label><b>Marks : </b> {{ques.questionMark || '0'}}</label>\r\n                                        </div>\r\n                                        <div class=\"actionBtn\" *ngIf=\"selectedDet.isEditable\">\r\n                                            <div>\r\n                                                <button class=\"btn btn-edit btn-que-edit\" type=\"button\"\r\n                                                    [disabled]=\"dataSpinner[ques.quetionId]\"\r\n                                                    (click)=\"updateques(AddQuestionModel,ques)\">EDIT</button>\r\n                                            </div>\r\n                                            <div>\r\n                                                <button class=\"btn ques-delete-btn btn-que-delete\" type=\"button\"\r\n                                                    [disabled]=\"dataSpinner[ques.quetionId]\"\r\n                                                    (click)=\"showDeleteQuestModal(ques)\">DELETE</button>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"option-block\">\r\n                                        <ul class=\"optList-Div\">\r\n                                            <ng-container *ngIf=\"ques.optList != null && ques.optList.length > 0\">\r\n                                                <li *ngFor=\"let opt of ques.optList;let optIndex = index\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-2 p-0 text-center\" style=\"margin: auto 0px;\">\r\n                                                            <div class=\"optIndex\">\r\n                                                                {{constant.AlphabetLetter[optIndex]}}</div>\r\n                                                        </div>\r\n                                                        <div class=\"col-8 p-0\">\r\n                                                            <div class=\"optText-div radiobtn\">\r\n                                                                <input type=\"radio\" id=\"opt_{{qIdx +'_'+optIndex}}\"\r\n                                                                    disabled name=\"answer{{qIdx}}\" value=\"{{optIndex}}\"\r\n                                                                    required [(ngModel)]=\"ques.rightAns\"\r\n                                                                    [checked]=\"ques.rightAns\" />\r\n                                                                <label for=\"opt_{{qIdx +'_'+optIndex}}\" class=\"optText\">\r\n                                                                    {{opt.option || 'N/A'}}</label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ng-container>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </div>\r\n    <!-- </perfect-scrollbar>  -->\r\n</div>\r\n<!-- Add Category Popup -->\r\n<ng-template #categoryModel let-modal let-c=\"close\">\r\n    <div class=\"custom-backdrop\" *ngIf=\"catUpdateFlag\"></div>\r\n    <div class=\"catModal\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\" *ngIf=\"!catUpdateFlag\">Add Category</h4>\r\n            <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\" *ngIf=\"catUpdateFlag\">Update Category</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"category\" class=\"col-sm-3 col-form-label\">Category : </label>\r\n                <div class=\"col-sm-9\">\r\n                    <input id=\"category\" class=\"form-control customInput-field\" placeholder=\"Enter Category\"\r\n                        name=\"category\" id=\"category\" [(ngModel)]=\"assessmentDet.category\">\r\n                </div>\r\n            </div>\r\n            <!-- <div class=\"form-group\">\r\n                <label for=\"subCategory\" class=\"col-form-label\" style=\"padding-left: 0px !important;\">Sub Category <span\r\n                        *ngIf=\"selectedDet.assessmentType == constant.TEMPLETE_TYPE[2].id\"> & Number Of Questions</span>\r\n                    :</label>\r\n                <div class=\"row\" *ngFor=\"let cat of assessmentDet.subCategoryList;let Index = index;let first = first;\">\r\n                    <div class=\"input-group m-t-5\"\r\n                        [ngClass]=\"(selectedDet.assessmentType == constant.TEMPLETE_TYPE[2].id) ? 'col-sm-6' : 'col-sm-9'\">\r\n                        <input id=\"subCategory\" class=\"form-control customInput-field\" placeholder=\"Enter Sub Category\"\r\n                            name=\"subCategory\" [(ngModel)]=\"cat.name\">\r\n                    </div>\r\n                    <div class=\"input-group col-sm-3 m-t-5\"\r\n                        *ngIf=\"selectedDet.assessmentType == constant.TEMPLETE_TYPE[2].id\">\r\n                        <input id=\"applicableNumOfQues\" class=\"form-control customInput-field\"\r\n                            placeholder=\"Number of Questions\" name=\"number\" [(ngModel)]=\"cat.applicableNumOfQues\">\r\n                    </div>\r\n                    <div class=\"col-sm-3 m-auto\">\r\n                        <label class=\"col-sm-6 col-form-label\">\r\n                            <i class=\"fa fa-plus subCategoryadd\" (click)=\"addSubCategory(cat,Index)\"\r\n                                *ngIf=\"(catUpdateFlag && cat.hasOwnProperty('id')) ? !subCatSpinner[cat.id] : 'true'\"></i>\r\n                            <ng-container *ngIf=\"(catUpdateFlag && cat.hasOwnProperty('id')) && subCatSpinner[cat.id]\">\r\n                                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                <span class=\"sr-only\">Loading...</span>\r\n                            </ng-container>\r\n                        </label>\r\n                        <label class=\"col-sm-6 col-form-label\" *ngIf=\"!first\">\r\n                            <i class=\"fa fa-minus subCategoryremove\"\r\n                                (click)=\"(catUpdateFlag && cat.hasOwnProperty('id')) ? removeSubCategory(cat,'rm') : removeSubCategory(Index,'new')\"\r\n                                *ngIf=\"(catUpdateFlag && cat.hasOwnProperty('id')) ? !subCatSpinner[cat.id] : 'true'\"></i>\r\n                            <ng-container *ngIf=\"(catUpdateFlag && cat.hasOwnProperty('id')) && subCatSpinner[cat.id]\">\r\n                                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                <span class=\"sr-only\">Loading...</span>\r\n                            </ng-container>\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button type=\"button\" class=\"btn submitBtn\" (click)=\"submitCatAndSubCat(c)\">\r\n                        <!-- [disabled]=\"submitCatLoader || !assessmentDet.category\" -->\r\n                        <!--  -->\r\n                        <!--   -->\r\n                        <span *ngIf=\"!catUpdateFlag\" class=\"btn-text\">Save</span>\r\n                        <span *ngIf=\"catUpdateFlag\" class=\"btn-text\">Update</span>\r\n                    </button>\r\n                    <!-- [disabled]=\"submitCatLoader\" -->\r\n                    <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\"\r\n                        (click)=\"c('Cross click')\">Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- View and Modify Category -->\r\n<ng-template #CategotyViewOrUpdate let-modal let-c=\"close\">\r\n    <div class=\"catSubCatPopup\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\">Category</h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Cross Click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"\">\r\n            <div class=\"tableFixHead\">\r\n                <table class=\"table table-bordered table-md\" style=\"font-family: 'Helvetica Neue';\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Category</th>\r\n                            <!-- <th>Sub Category</th> -->\r\n                            <th class=\"actionTh\" style=\"width:20%\" *ngIf=\"selectedDet.isEditable\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of assessmentDetails.categoryList\">\r\n                            <td>{{x.categoryName || 'N/A'}}</td>\r\n                            <!-- <td>\r\n                                <span *ngFor=\"let subCat of x.subCategoryList;let last = last;\">{{subCat.name ||\r\n                                    'N/A'}} <span *ngIf=\"!last\">,</span></span>\r\n                            </td> -->\r\n                            <td class=\"actionTd\" style=\"width:20%\" *ngIf=\"selectedDet.isEditable\">\r\n                                <i class=\"fa fa-edit editIcon\" (click)=\"editCatAndSubCat(categoryModel, x)\"\r\n                                    *ngIf=\"!dataSpinner[x.id]\"></i> &nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"deleteCatAndSubCat(x.id)\"\r\n                                    *ngIf=\"!dataSpinner[x.id]\"></i>\r\n                                <ng-container *ngIf=\"dataSpinner[x.id]\">\r\n                                    <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                    <span class=\"sr-only\">Loading...</span>\r\n                                </ng-container>\r\n                            </td>\r\n                        </tr>\r\n                        <tr\r\n                            *ngIf=\"(assessmentDetails.categoryList == null || assessmentDetails.categoryList.length == 0)\">\r\n                            <td colspan=\"3\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"3\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Assessment Add or Update Popup -->\r\n<ng-template #AddQuestionModel let-modal let-c=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\">Add Question</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"c('Cross Click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form #quesForm=\"ngForm\" (ngSubmit)=\"saveQuestion(quesForm)\" novalidate autocomplete=\"off\">\r\n        <div class=\"modal-body\">\r\n            <perfect-scrollbar [style.height]=\"'calc(100vh - 18vh)'\">\r\n                <div class=\"formStyle\">\r\n                    <ng-container>\r\n                        <div class=\"row\" *ngIf=\"assessmentDet.isCatgeorychecked\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"Category\" class=\"col-sm-2 col-form-label\">Category Name</label>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <ng-multiselect-dropdown name=\"category\"\r\n                                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                            [placeholder]=\"'Select Category'\" [settings]=\"SingleDropdownSettings\"\r\n                                            [data]=\"categoryList\" [disabled]=\"false\"\r\n                                            [(ngModel)]=\"assessmentDet.tempQues.selectedCat\">\r\n                                        </ng-multiselect-dropdown>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"question1\" class=\"col-sm-2 col-form-label\">Question &nbsp;<span\r\n                                            class=\"astrik\">*</span></label>\r\n                                    <div class=\"col-sm-10\">\r\n                                        <textarea id=\"question\" name=\"question\" placeholder=\"Enter Question\"\r\n                                            [(ngModel)]=\"assessmentDet.tempQues.assessmentQuestion\"\r\n                                            class=\"form-control assessmentinputBox textarea-custom\" required\r\n                                            maxlength=\"1000\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <ng-container\r\n                            *ngIf=\"assessmentDet && assessmentDet.tempQues.optList != null && assessmentDet.tempQues.optList.length > 0\">\r\n                            <div class=\"row\" *ngFor=\"let opt of assessmentDet.tempQues.optList;let Index = index;\">\r\n                                <div class=\"col-md-8\">\r\n                                    <div class=\"form-group row\">\r\n                                        <label for=\"question1\"\r\n                                            class=\"col-sm-2 col-form-label\">{{constant.AlphabetLetter[Index]}}</label>\r\n                                        <div class=\"col-sm-10\">\r\n                                            <input type=\"text\" placeholder=\"Enter Option\"\r\n                                                class=\"form-control assessmentinputBox\" name=\"opt_{{Index}}\"\r\n                                                [(ngModel)]=\"opt.option\" maxlength=\"255\" required />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-1 m-auto\">\r\n                                    <div class=\"form-group row text-center\">\r\n                                        <label class=\"col-sm-6 p-0 m-0\" *ngIf=\"Index < 4\">\r\n                                            <i class=\"fa fa-plus btn-add\" (click)=\"addRemoveOptions(Index,'add')\"\r\n                                                *ngIf=\"!dataSpinner[assessmentDet.tempQues.quetionId]\"></i>\r\n                                            <ng-container *ngIf=\"dataSpinner[assessmentDet.tempQues.quetionId]\">\r\n                                                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                                <span class=\"sr-only\">Loading...</span>\r\n                                            </ng-container>\r\n                                        </label>\r\n                                        <label class=\"col-sm-6 p-0 m-0\"\r\n                                            *ngIf=\"assessmentDet.tempQues.optList.length > 1\">\r\n                                            <i class=\"fa fa-minus btn-minus\"\r\n                                                (click)=\"(opt.hasOwnProperty('assessmentQueOptId')) ? removeExistOption(opt,assessmentDet.tempQues.quetionId) :addRemoveOptions(Index,'rm')\"\r\n                                                *ngIf=\"!dataSpinner[assessmentDet.tempQues.quetionId]\"></i>\r\n                                            <ng-container *ngIf=\"dataSpinner[assessmentDet.tempQues.quetionId]\">\r\n                                                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                                <span class=\"sr-only\">Loading...</span>\r\n                                            </ng-container>\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\">\r\n                                    <div class=\"form-group row m-b-0\">\r\n                                        <div class=\"optText-div radiobtn col-sm-12\">\r\n                                            <input type=\"radio\" id=\"isRightAns{{Index}}\" name=\"isRightAns\"\r\n                                                [(ngModel)]=\"assessmentDet.tempQues.isRightAns\" value=\"{{Index}}\"\r\n                                                required [checked]=\"assessmentDet.tempQues.isRightAns == Index\"\r\n                                                (change)=\"opt.isRightAns = (assessmentDet.tempQues.isRightAns == Index) ? true : false;\" />\r\n                                            <label for=\"isRightAns{{Index}}\" class=\"optText\">Is Answer</label>\r\n                                            <!-- {{assessmentDet.tempQues.isRightAns}} -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div class=\"marksApplicableDiv\"\r\n                            *ngIf=\"(assessmentDet.tempQues.optList != null && assessmentDet.tempQues.optList.length > 0)\">\r\n                            <div class=\"form-group row\">\r\n                                <label for=\"question1\" class=\"col-sm-2 col-form-label\">Mark &nbsp;<span\r\n                                        class=\"astrik\">*</span></label>\r\n                                <div class=\"col-sm-10\">\r\n                                    <input type=\"number\" placeholder=\"Enter Mark\"\r\n                                        class=\"form-control assessmentinputBox\" name=\"mark\"\r\n                                        [(ngModel)]=\"assessmentDet.tempQues.mark\" min=\"0\"\r\n                                        pattern=\"^(?:[1-9]|[1-9][0-9]|100)$\" required />\r\n                                    <div *ngIf=\"quesForm.controls['mark'].invalid && (quesForm.controls['mark'].touched || quesForm.controls['mark'].dirty)\"\r\n                                        class=\"custom-errorMsg\">\r\n                                        <div\r\n                                            *ngIf=\"quesForm.controls['mark'].errors.pattern && assessmentDet.tempQues.mark !== 0\">\r\n                                            Mark should be between 1 to 100\r\n                                        </div>\r\n                                        <div *ngIf=\"assessmentDet.tempQues.mark === 0\">\r\n                                            Mark cannot be 0.\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <button type=\"submit\" class=\"btn submitBtn event-btn\" [disabled]=\"quesForm.invalid || submitLoader\">\r\n                        <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                        <span *ngIf=\"!submitLoader\" class=\"btn-text\">Save </span>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                        (click)=\"c('Cross Click')\">Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ }),

/***/ "F5dy":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentComponent", function() { return AssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assessment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assessment.component.html */ "srSa");
/* harmony import */ var _assessment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessment.component.scss */ "7CTX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _assessment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessment.service */ "p3TK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");










let AssessmentComponent = class AssessmentComponent {
    constructor(router, apiService, modalConfig, modalService, fb, alertService, Constant) {
        this.router = router;
        this.apiService = apiService;
        this.modalConfig = modalConfig;
        this.modalService = modalService;
        this.fb = fb;
        this.alertService = alertService;
        this.loggedInEmpDet = {};
        this.listLoading = false;
        this.searchDet = {};
        this.assessementList = [];
        this.plantList = [];
        this.masterLevelList = [];
        this.dataSpinner = [];
        this.filterFlag = false;
        this.isUploadSpinner = false;
        this.fileSelected = false;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0,
        };
        this.assessmentList = {};
        this.isUpload = false;
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.submitAttempted = false;
        this.Constant = {};
        this.constant = {};
        this.branchId = [];
        this.deptId = [];
        this.lineId = [];
        this.userDet = [];
        this.fileToUpload = null;
        modalConfig.backdrop = "static";
        modalConfig.keyboard = false;
        this.constant = Constant;
    }
    ngOnInit() {
        this.loggedInEmpDet = JSON.parse(localStorage.getItem("userDet"));
        console.log(this.loggedInEmpDet);
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: "id",
            textField: "name",
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.multipleDropdownSettings = {
            singleSelection: false,
            idField: "id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 2,
            allowSearchFilter: true,
            closeDropDownOnSelection: false,
        };
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            workstation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
        });
        this.getMasterSkillLevelList();
        this.getAccessiblePlantList();
    }
    /*
        Get Accessible Plant List
        Author: Mahesh W
        Date : 22 Aug 2023
    */
    getAccessiblePlantList() {
        this.apiService
            .getBranchAccessList("getBranchAccessSetupByEmpId/" +
            this.loggedInEmpDet.organization.orgId +
            "/" +
            this.loggedInEmpDet.empId)
            .subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.plantList = this.setArray(res.branchAccessList, "branchId", "branchName");
                }
                else {
                    this.plantList = [
                        {
                            id: this.loggedInEmpDet.branch.branchId,
                            name: this.loggedInEmpDet.branch.name,
                        },
                    ];
                }
            }
            else {
                this.plantList = [
                    {
                        id: this.loggedInEmpDet.branch.branchId,
                        name: this.loggedInEmpDet.branch.name,
                    },
                ];
            }
            // this.searchDet.branchId = [this.plantList[0]];
            this.getAssessmentList();
        });
    }
    /*
        Get Master Level List
        Author: Mahesh W
        Date : 22 Aug 2023
    */
    getMasterSkillLevelList() {
        this.apiService
            .getMasterLevelList("apis/sm/getLevelList")
            .subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.masterLevelList = this.setArray(res.dataList, "id", "levelName");
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
    /*
        Create New Assessment
        @Author : Mahesh W
        @Date : 22 Aug 2023
    */
    goAssessmentDetailPage(url, data, flag) {
        if (data == "") {
            data = {
                isEditable: true,
                assessmentId: 0,
                isUpdate: false,
            };
        }
        else {
            // data.assessmentId = data.assessmentId
            data.isUpdate = true;
            data.isEditable = true;
        }
        data.isEditable = flag;
        let tmpData = Object.assign({}, data, {
            tmpPagination: this.staticPagination,
            plantList: this.plantList,
            masterLevelList: this.masterLevelList,
        });
        if (url) {
            if (tmpData != undefined) {
                localStorage.setItem("selectedActionData", JSON.stringify(tmpData));
            }
            else {
                localStorage.removeItem("selectedActionData");
            }
            this.router.navigateByUrl(url);
        }
    }
    getAssessmentList() {
        this.assessementList = [];
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset =
                (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let req = {
            orgId: this.loggedInEmpDet.organization.orgId,
            offset: this.staticPagination.offset,
            limit: this.staticPagination.itemsPerPage,
        };
        if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
            req.branchId = this.searchDet.branchId[0].id;
        }
        else {
            req.branchId = this.loggedInEmpDet.branch.branchId;
        }
        if (this.searchDet.skillLvlId != null &&
            this.searchDet.skillLvlId.length > 0) {
            req.skillLvlId = this.searchDet.skillLvlId[0].id;
        }
        if (this.searchDet.workstationIds != null &&
            this.searchDet.workstationIds.length > 0) {
            // req.searchDet.workstationIds = this.searchDet.workstationIds[0].id;
            req.workstationIds = this.getIDsArray(this.searchDet.workstationIds);
        }
        if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
            // for (let i = 0; i < this.searchDet.deptIds.length; i++) {
            console.log(this.searchDet.deptIds);
            req.deptId = this.searchDet.deptIds[0].id;
            // }
        }
        if (this.searchDet.lineId != null && this.searchDet.lineId.length > 0) {
            req.lineIds = this.getIDsArray(this.searchDet.lineId);
        }
        if (this.searchDet.searchInput && this.searchDet.searchInput != "") {
            req.search = this.searchDet.searchInput;
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
            }
        }
        this.apiService
            .getAssessmentList("apis/sm/getAssessmentList", req)
            .subscribe((response) => {
            if (response.result) {
                // this.listLoading = false;
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(response.totalCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.assessementList = response.dataList;
                    console.log(this.assessementList);
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
    // resetFormField(form, keyName) {
    //   Object.keys(form.controls).forEach((key) => {
    //     if (key == keyName) {
    //       form.get(keyName).reset();
    //       form.get(keyName).markAsPristine();
    //       form.get(keyName).markAsUntouched();
    //     }
    //   });
    // }
    /*
      Load More Pagination next page Data
      @Author : Mahesh W
      @Date : 23 Aug 2023
    */
    loadMore(ev) {
        console.log(ev);
        this.staticPagination = ev;
        // this.getAssessmentList();
        // setTimeout(() => {
        this.assessementList = [];
        this.listLoading = true;
        //  }, 3000);
        this.getAssessmentList();
    }
    /*
      Delete Assessment
      @Author: Mahesh W
      @Date : 23 Aug 2023
    */
    deleteAssessment(x) {
        this.dataSpinner[x.assessmentId] = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Are You Sure!",
            text: "Do you want to remove this assessment ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044CD",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove It",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            if (result.isConfirmed) {
                let reqbody = {
                    assessmentId: x.assessmentId,
                };
                this.apiService
                    .deleteAsssessment("apis/sm/deActiveAssessment", reqbody)
                    .subscribe((data) => {
                    this.dataSpinner[x.assessmentId] = false;
                    if (data.result) {
                        this.alertService.success("Assessment removed successfully.");
                        this.getAssessmentList();
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while removing data. Please try again");
                        }
                    }
                });
            }
            else {
                this.dataSpinner[x.assessmentId] = false;
            }
        });
    }
    /*
        Open Filter function
        Author: Mahesh W
        Date : 21 Aug 2023
    */
    filterModalOpen(modal) {
        this.clearPagination();
        this.modalService.open(modal, {
            windowClass: "filterPopup",
        });
    }
    /*
          Apply filter function
          Author: Mahesh W
          Date : 21 Aug 2023
    */
    submitFilterForm(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach((key) => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        if (this.searchDet.branchId == null && this.searchDet.skillLvlId == null) {
            this.filterFlag = false;
        }
        else {
            this.filterFlag = true;
        }
        this.getAssessmentList();
        this.modalService.dismissAll();
    }
    /*
      Remove Filter
      Author : Mahesh W
      Date : 21 Aug 2023
    */
    removeFilter() {
        this.submitAttempted = false;
        this.filterData.patchValue({
            branchId: [],
            skillLvlId: [],
        });
        this.searchDet.branchId = [];
        this.searchDet.skillLvlId = [];
        this.searchDet.deptIds = [];
        this.searchDet.workstationIds = [];
        this.searchDet.lineId = [];
        // this.searchDet.branchId = [this.plantList[0]];
        // this.searchDet.skillLvlId = [this.masterLevelList[0]];
        this.filterFlag = false;
        this.getAssessmentList();
    }
    /*
       Single Select Dropdown onChange function
       Author: Mahesh W
       Date : 21 Aug 2023
    */
    // onChange(ev: any, type) {
    //   if (ev) {
    //     console.log('Select plant');
    //   } else {
    //     console.log('Unselect plant');
    //   }
    // }
    onChange(ev, type) {
        console.log("Hello");
        // if (ev) {
        //   console.log(ev);
        //   if (type == "plant") {
        //     this.branchId = ev.id;
        //     console.log(this.branchId);
        //     this.searchDet.deptIds = [];
        //     // this.resetFormField(this.filterData, "deptId");
        //     // this.resetFormField(this.filterData, "cellLineId");
        //     // this.resetFormField(this.filterData, "workstationId");
        //     this.getDepartmentList(this.branchId);
        //   }
        //   if (type == "dept") {
        //     console.log(ev)
        //     this.cellList = [];
        //     this.deptId = ev.id;
        //     this.searchDet.cell = [];
        //     // this.resetFormField(this.filterData, "cellLineId");
        //     // this.resetFormField(this.filterData, "workstationId");
        //     this.getCellList();
        //   }
        //   if(type == "cell"){
        //     console.log(ev);
        //   //   ev.forEach((item) => {
        //   //     this.lineId = item.id;
        //   // });
        //   console.log(ev);
        //   this.lineId = ev.id;
        //     this.searchDet.work = [];
        //     // this.resetFormField(this.filterData, "workstationId");
        //     this.getWorkforceList(this.lineId);
        //   }
        // } else {
        //   if (type == "plant") {
        //     // if (this.searchDet) {
        //     //   this.departmentList = [];
        //     //   this.searchDet.departmentList = [];
        //     // this.cellList = [];
        //     // this.searchDet.cellList = [];
        //     // this.resetFormField(this.filterData, "deptIds");
        //     // this.resetFormField(this.stakeholderForm, "deptId");
        //     // this.resetFormField(this.stakeholderForm, 'lineId');
        //     // this.searchDet.lineId = [];
        //     // }
        //   } else if (type == "dept") {
        //     // this.resetFormField(this.stakeholderForm, 'lineId');
        //     // this.cellList = [];
        //     // this.searchDet.cellList = [];
        //     // this.searchDet.lineId = [];
        //   }
        // }
        if (ev) {
            console.log(ev);
            if (type == "dept") {
                this.cellList = [];
                this.deptId = ev.id;
                this.searchDet.lineId = [];
                // this.resetFormField(this.filterData, "cell");
                // this.resetFormField(this.filterData, "workstation");
                this.getCellList(this.deptId);
                // this.resetFormField(this.filterData, 'lineId')
            }
            if (type == "plant") {
                console.log(ev);
                this.branchId = ev.id;
                this.searchDet.deptIds = [];
                // this.resetFormField(this.filterData, "deptIds");
                // this.resetFormField(this.filterData, "cell");
                // this.resetFormField(this.filterData, "workstation");
                this.getDepartmentList(this.branchId);
                if (this.searchDet.addForm) {
                    console.log("inside");
                    // this.resetFormField(this.filterData, "deptId");
                }
            }
            if (type == "cell") {
                console.log(ev);
                this.lineId = ev.id;
                this.searchDet.workstationIds = [];
                // this.searchDet.work = [];
                // this.resetFormField(this.filterData, "workstation");
                this.getWorkforceList(this.lineId);
            }
        }
        else {
            if (type == "plant") {
                if (this.searchDet) {
                    this.departmentList = [];
                    this.searchDet.departmentList = [];
                    this.cellList = [];
                    this.searchDet.cellList = [];
                    this.searchDet.deptIds = [];
                    // this.resetFormField(this.filterData, "deptIds");
                    // this.resetFormField(this.stakeholderForm, "deptId");
                    // this.resetFormField(this.stakeholderForm, 'lineId');
                    this.searchDet.lineId = [];
                }
                else {
                    // this.resetFormField(this.stakeholderForm, "empId");
                }
            }
            else if (type == "dept") {
                // this.resetFormField(this.stakeholderForm, 'lineId');
                // this.cellList = [];
                this.searchDet.cellList = [];
                this.searchDet.lineId = [];
            }
            else if (type == "cell") {
                this.lineId = [];
                this.workforceList = [];
                // this.getWorkforceList(this.lineId);
            }
        }
    }
    onChangeAll(ev, type) {
        if (ev) {
            if (type == "cell") {
                this.lineId = ev.map(item => item.id);
                this.searchDet.workstationIds = [];
                this.getWorkforceList(this.lineId);
            }
        }
        else {
            if (type == "cell") {
                this.lineId = [];
                this.workforceList = [];
            }
        }
    }
    /*
        Reset Form function
        Author: Mahesh W
        Date : 21 Aug 2023
    */
    resetFormField(form, keyName) {
        Object.keys(form.controls).forEach((key) => {
            if (keyName != "" && key == keyName) {
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
    /*
        Common function for set an array for dropdown
        Author: Mahesh W
        Date : 21 Aug 2023
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
    sortData(sort) {
        this.sorting = sort;
        this.getAssessmentList();
    }
    /*
        Common function for searching
        Author: Simran
        Date : 07/09/2023
    */
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = "";
            this.getAssessmentList();
        }
        else {
            this.getAssessmentList();
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
    handleFileInput(files) {
        if (files.length === 0)
            return;
        this.fileToUpload = files.item(0);
        this.fileSelected = true;
    }
    uploadAssessmentDetails(content) {
        this.isUploadSpinner = true;
        const formData = new FormData();
        if (this.fileToUpload == undefined || this.fileToUpload == null) {
            this.alertService.error("Please select file");
            this.isUploadSpinner = false;
            return;
        }
        formData.append("branchId", this.loggedInEmpDet.branch.branchId);
        formData.append("title", "ASSESSMENT");
        formData.append("orgId", this.loggedInEmpDet.organization.orgId);
        formData.append("createdBy", this.loggedInEmpDet.empId);
        formData.append("fileName", "ASSESSMENT");
        formData.append("excel", this.fileToUpload);
        this.apiService
            .uploadAssessmentData("apis/sm/uploadAssessments", formData)
            .subscribe((data) => {
            this.isUploadSpinner = false;
            console.log(data);
            if (data.result) {
                console.log(data);
                this.alertService.success("Assessment uploaded successfully.");
                if (this.filterFlag) {
                    this.getAssessmentList();
                }
                else {
                    this.getAssessmentList();
                }
                this.isUpload = false;
                this.fileSelected = false;
            }
            else {
                if (data.statusCode == 500) {
                    console.log("500");
                    this.alertService.error("Oops! Something went wrong");
                }
                else if (data.statusCode == 100) {
                    if (data.responseData) {
                        if (data.responseData.errorInSheet) {
                            if (data.responseData.errorList != null && data.responseData.errorList.length > 0) {
                                this.excelErrorList = data.responseData.errorList;
                                this.modalService.open(content, {
                                    windowClass: "errorListClass",
                                });
                                if (data.statusCode == 500) {
                                    console.log("500");
                                    this.alertService.error("Oops! Something went wrong");
                                }
                            }
                        }
                        if (data.responseData.reason) {
                            this.alertService.error(data.responseData.reason);
                            if (data.statusCode == 500) {
                                this.alertService.error("Oops! Something went wrong");
                            }
                        }
                    }
                    else {
                        this.alertService.error(data.reason);
                    }
                }
                else {
                    this.alertService.error("Error occurred while upload file. Please try again");
                }
            }
        });
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "dept" || fieldToSort === "level") {
                array.sort(function (a, b) {
                    var nameA = a.branchName ? a.branchName.toUpperCase() : "";
                    var nameB = b.branchName ? b.branchName.toUpperCase() : "";
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
    getDepartmentList(branch) {
        this.apiService
            .getDepartmentByBranch("getdepartmentlistbybranchid/" + branch)
            .subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.deptList != null && res.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.departmentList = this.setArray(res.deptList, "deptId", "deptName");
                    // this.departmentList = this.sortFunction(this.departmentList, "deptName");
                    this.searchDet.dept = [this.departmentList[0]];
                    console.log(this.departmentList);
                }
                else {
                    this.searchDet.departmentList = [];
                }
            }
            else {
                this.searchDet.departmentList = [];
            }
        });
    }
    getCellList(data) {
        var req = {
            branchId: this.branchId,
            // deptId:this.searchDet.deptId
            deptId: data,
        };
        this.apiService
            .getCellList("apis/sm/getCellList", req)
            .subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.cellList = this.setArray(response.dataList, "lineId", "lineName");
                    // this.cellList = this.sortFunction( this.cellList,"lineName");
                    console.log(this.cellList);
                    // this.searchDet.cell = [this.cellList[0]];
                    console.log(this.searchDet.cell);
                }
                else {
                    this.cellList = [];
                }
            }
            else {
                this.cellList = [];
            }
        });
    }
    getWorkforceList(data) {
        console.log(this.searchDet.workstationIds);
        console.log(this.searchDet.lineId);
        let req = {
            // branchId: this.searchDet.branchId,
            // orgId:this.loggedInEmpDet.organization.orgId,
            // deptId: this.searchDet.deptId,
            // lineIds: [this.searchDet.lineIds]
            branchId: this.branchId,
            orgId: this.loggedInEmpDet.organization.orgId,
            deptId: this.deptId,
            lineIds: Array.isArray(data) ? data : [data],
        };
        console.log(req);
        this.apiService
            .getWorkforceDeploymentData("apis/sm/getWorkstationList", req)
            .subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.dataList != null && res.dataList.length > 0) {
                    this.workforceList = this.setArray(res.dataList, "id", "workstation");
                    // this.workforceList = this.sortFunction( this.workforceList,"workstation");
                    this.searchDet.workforceList = [this.workforceList[0]];
                    console.log(this.workforceList);
                }
                else {
                    this.workforceList = [];
                }
            }
            else {
                this.workforceList = [];
            }
        });
    }
    /*
      Common function For get Ids from array
      Author: Simran
      Date : 28/10/2023
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
    closeFilterPopup() {
        this.submitAttempted = false;
        this.searchDet.branchId = [];
        this.searchDet.deptIds = [];
        this.searchDet.lineId = [];
        this.searchDet.workstationIds = [];
        this.searchDet.skillLvlId = [];
        this.departmentList = [];
        this.modalService.dismissAll();
    }
};
AssessmentComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _assessment_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ["Constant",] }] }
];
AssessmentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-assessment",
        template: _raw_loader_assessment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _assessment_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__["AlertService"], Object])
], AssessmentComponent);



/***/ }),

/***/ "KXr7":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment-detail/assessment-detail.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: AssessmentDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentDetailModule", function() { return AssessmentDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _assessment_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assessment-detail-routing.module */ "BB5g");
/* harmony import */ var _assessment_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assessment-detail.component */ "AWsS");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../theme/shared/shared.module */ "ebz3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _assessment_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assessment.constant */ "ZQ3s");








let AssessmentDetailModule = class AssessmentDetailModule {
};
AssessmentDetailModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assessment_detail_component__WEBPACK_IMPORTED_MODULE_4__["AssessmentDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _assessment_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssessmentDetailRoutingModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"]
        ],
        providers: [
            { provide: 'Constant', useValue: _assessment_constant__WEBPACK_IMPORTED_MODULE_7__["CONSTANT"] }
        ]
    })
], AssessmentDetailModule);



/***/ }),

/***/ "ZQ3s":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/assessment/assessment.constant.ts ***!
  \*********************************************************************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
const CONSTANT = {
    AlphabetLetter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    COMPLETED: 'COMPLETED',
    PENDING: 'PENDING',
    QUES_TYPE: [{ id: '1', name: 'Single' }, { id: '2', name: 'Multiple' }, { id: '3', name: 'Rating' }],
};


/***/ }),

/***/ "srSa":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/assessment/assessment.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Assessments\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent p-l-15 p-r-15\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-0\" [ngClass]=\"isUpload ? 'col-6' : 'col-4'\">\r\n                <div class=\"row\">\r\n                    <!-- <div [ngClass]=\"(filterFlag)?'col-5':''\" *ngIf=\"filterFlag && !isUpload\">\r\n                        <div class=\"filterDiv\" style=\"bottom: 0 !important;\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp; <span\r\n                                style=\"color: green;font-size: 12px; font-weight: 500;\">Filter applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div [ngClass]=\"(filterFlag)?'col-7':'col-12'\"> -->\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group has-search\" *ngIf=\"!isUpload\">\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by assessment title , workstation and line\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                title=\"{{searchDet.searchInput}}\" style=\"padding-right: 2.4rem;\" />\r\n                        </div>\r\n                    </div>\r\n                    <div [ngClass]=\"(filterFlag && !isUpload)?'col-5':'col-12'\">\r\n                        <div class=\"input-group\" *ngIf=\"isUpload\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" #certImage class=\"custom-file-input\"\r\n                                    (change)=\"handleFileInput($event.target.files)\" id=\"inputGroupFile04\"\r\n                                    accept=\".xlsx, .xls\">\r\n                                <label class=\"custom-file-label\" for=\"inputGroupFile04\" *ngIf=\"!fileSelected\">Choose\r\n                                    file</label>\r\n                                <label class=\"custom-file-label\" for=\"inputGroupFile04\" *ngIf=\"fileSelected\"\r\n                                    style=\"color: green;\">File\r\n                                    Selected</label>\r\n                            </div>\r\n                            <div class=\"input-group-append\">\r\n                                <!-- [disabled]=\"!fileSelected || isUploadSpinner\" -->\r\n                                <button type=\"button\" class=\"btn btn-outline-secondary bulkupload\"\r\n                                    (click)=\"uploadAssessmentDetails(errorListModal)\">\r\n                                    <span *ngIf=\"isUploadSpinner\" class=\"spinner-grow spinner-grow-sm\"\r\n                                        role=\"status\"></span>\r\n                                    <span *ngIf=\"isUploadSpinner\" class=\"load-text\"> Loading...</span>\r\n                                    <span *ngIf=\"!isUploadSpinner\" class=\"btn-text\">Upload</span>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" [disabled]=\"isUploadSpinner\"\r\n                                    (click)=\"isUpload = false;fileSelected = false\"><i class=\"fa fa-times\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"m-auto\" [ngClass]=\"isUpload ? 'col-2':'col-4'\">\r\n                <button class=\"btn btn-outline-secondary bulkupload\" *ngIf=\"!isUpload\" (click)=\"isUpload = true\"\r\n                    type=\"button\">Upload File</button>&nbsp;\r\n                <a class=\"btn bulkupload\" href=\"assets/doc/AssessmentSampleFile.xlsx\" download>Sample File</a>\r\n            </div>\r\n            <div class=\"col-4\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"goAssessmentDetailPage('/settings/skillMatrix/assessment/assessment-detail','',true)\"><i\r\n                            class=\"fa fa-plus m-r-10\"></i>\r\n                        Create Assessment</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                        <th mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th mat-sort-header=\"Level\">Level</th>\r\n                        <!-- <th mat-sort-header=\"Level\">Assessment Id</th> -->\r\n                        <th mat-sort-header=\"Title\">Assessment Title</th>\r\n                        <th mat-sort-header=\"Time\">Time</th>\r\n                        <th mat-sort-header=\"PassingMarks\">Passing %</th>\r\n                        <th mat-sort-header=\"TotalMarks\">Total Marks</th>\r\n                        <th>Created By</th>\r\n                        <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                        <th mat-sort-header=\"AssessmentType\">Type</th>\r\n                        <!-- stickyclass -->\r\n                        <th class=\"actionTh fixedColumn\" mat-sort-header=\"Status\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <!--  | filterBy:'assessmentId,assessmentTitle,functionName,interName,assessmentScore,createdByName,createdDate,status':searchDet.searchInput-->\r\n                    <!-- | filterBy:'branchName,skillLevel,title,time,passingMarks,createdDate':searchDet.searchInput\" -->\r\n                    <tr *ngFor=\"let x of assessementList\">\r\n                        <td class=\"actionTd fixedColumn text-left\">{{x.branchName || 'N/A'}}</td>\r\n                        <td>{{x.deptName || 'N/A'}}</td>\r\n                        <td>{{x.lineName || 'N/A'}}</td>\r\n                        <td>{{x.workstation || 'N/A'}}</td>\r\n                        <td>{{x.skillLevel || 'N/A'}}</td>\r\n                        <!-- <td>{{x.assessmentId\r\n                            || 'N/A'}}</td> -->\r\n                        <td>{{x.title || 'N/A'}}</td>\r\n                        <td>{{x.time || 'N/A'}}</td>\r\n                        <td>{{x.passingMarks || 'N/A'}}</td>\r\n                        <td>{{x.totalMark || 'N/A'}}</td>\r\n                        <td>{{x.createdByName || 'N/A'}}</td>\r\n                        <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <td>{{(x.assessmentType) || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':x.status == 'PUBLISHED','pending':x.status == 'CREATED'}\">\r\n                            {{x.status || 'N/A'}}\r\n                        </td>\r\n                        <!-- stickyclass -->\r\n                        <td class=\"actionTd fixedColumn text-right\">\r\n                            <!-- <div class=\"\" style=\"display: flex;align-items: center; padding-left: 15px;\"> -->\r\n                            <ng-container *ngIf=\"!dataSpinner[x.assessmentId]\">\r\n                                <i class=\"fa fa-edit editIcon\" *ngIf=\"x.status == constant.CREATED || x.status == 'CREATED'\"\r\n                                    (click)=\"goAssessmentDetailPage('/settings/skillMatrix/assessment/assessment-detail',x,true)\">\r\n                                </i>\r\n                                <!-- *ngIf=\"x.status == 'PENDING'\" -->\r\n                                &nbsp; &nbsp;\r\n                                <i class=\"fa fa-eye viewIcon\"\r\n                                    (click)=\"goAssessmentDetailPage('/settings/skillMatrix/assessment/assessment-detail',x,false)\"></i>\r\n                                &nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\"(click)=\"deleteAssessment(x)\"></i>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"dataSpinner[x.assessmentId]\">\r\n                                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\r\n                                <span class=\"sr-only\">Loading...</span>\r\n                            </ng-container>\r\n                            <!-- </div> -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(assessementList == null || assessementList.length == 0)\">\r\n                        <td colspan=\"8\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"8\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'dept')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branchId\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(departmentList,'dept')\" formControlName=\"deptIds\"\r\n                            [(ngModel)]=\"searchDet.deptIds\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\" (onSelectAll)=\"onChangeAll($event,'dept')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n\r\n\r\n                        \r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cell\" id=\"cell\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"SingleDropdownSettings\"\r\n                            formControlName=\"cell\" [data]=\"cellList\" [disabled]=\"false\" [(ngModel)]=\"searchDet.lineId\"\r\n                            (onSelect)=\"onChange($event,'cell')\" (onDeSelect)=\"onChange(false,'cell')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'cell')\" (onDeSelectAll)=\"onChangeAll(false,'cell')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['cell'].invalid && (filterData.controls['cell'].touched || filterData.controls['cell'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['cell'].errors.required\">\r\n                                Please select Cell/Line\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Workstation</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"workstation\" id=\"workstation\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"workforceList\" formControlName=\"workstation\" [(ngModel)]=\"searchDet.workstationIds\"\r\n                            (onSelect)=\"onChange($event,'workstation')\" (onDeSelect)=\"onChange(false,'workstation')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'workstation')\" (onDeSelectAll)=\"onChangeAll($event,'workstation')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['workstation'].invalid && (filterData.controls['workstation'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['workstation'].errors.required\">\r\n                                Please select workstation\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvlId\" id=\"skillLvlId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\" [data]=\"masterLevelList\"\r\n                            formControlName=\"skillLvlId\" [(ngModel)]=\"searchDet.skillLvlId\"\r\n                            (onSelect)=\"onChange($event,'')\" (onDeSelect)=\"onChange(false,'')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['skillLvlId'].invalid && (filterData.controls['skillLvlId'].touched || filterData.controls['skillLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['skillLvlId'].errors.required\">\r\n                                Please select level\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n\r\n\r\n<ng-template #errorListModal let-c=\"close\" style=\"max-width: calc(100% - 30%) !important;\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\"> Assessment Error List &nbsp;</h4>\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\" class=\"close-icon\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding: 0;\">\r\n        <div class=\"tableFixHead\">\r\n            <table class=\"table table-bordered table-md\" style=\"font-family: 'Helvetica Neue';\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" scope=\"col\"> Plant Name </th>\r\n                        <th scope=\"col\">Department</th>\r\n                        <th scope=\"col\">Line</th>\r\n                        <th scope=\"col\"> Workstation </th>\r\n                        <th scope=\"col\"> Assessment Type </th>\r\n                        <th scope=\"col\">Assessment Level </th>\r\n                        <th scope=\"col\"> Assessment Duration </th>\r\n                        <th scope=\"col\">Passing Mark</th>\r\n                        <th scope=\"col\">Assessment Title</th>\r\n                        <th scope=\"col\">Question</th>\r\n                        <th scope=\"col\">Category</th>\r\n                        <th scope=\"col\">Option 1</th>\r\n                        <th scope=\"col\">Option 2</th>\r\n                        <th scope=\"col\">Option 3</th>\r\n                        <th scope=\"col\">Option 4</th>\r\n                        <th scope=\"col\">Option 5</th>\r\n                        <th scope=\"col\">Correct Answer</th>\r\n                        <th class=\"fixedColumn\" scope=\"col\">Question Mark</th>\r\n                        <th class=\"fixedColumn\">Error Message</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of excelErrorList\">\r\n                        <td class=\"fixedColumn\" scope=\"row\">{{x.branchName || 'N/A'}}</td>\r\n                        <td>{{x.deptName || 'N/A'}}</td>\r\n                        <td>{{x.lineName || 'N/A'}}</td>\r\n                        <td>{{x.workstation || 'N/A'}}</td>\r\n                        <td>{{x.assessmentType ||'N/A'}}</td>\r\n                        <td>{{x.skillLevel || 'N/A'}}</td>\r\n                        <td>{{x.time || 'N/A'}}</td>\r\n                        <td>{{x.passingMark || 'N/A'}}</td>\r\n                        <td>{{x.assessmentTitle || 'N/A'}}</td>\r\n                        <td>{{x.question || 'N/A'}}</td>\r\n                        <td>{{x.categoryName || 'N/A'}}</td>\r\n                        <td>{{x.optionOne || 'N/A'}}</td>\r\n                        <td>{{x.optionTwo || 'N/A'}}</td>\r\n                        <td>{{x.optionThree || 'N/A'}}</td>\r\n                        <td>{{x.optionFour || 'N/A'}}</td>\r\n                        <td>{{x.optionFive || 'N/A'}}</td>\r\n                        <td>{{x.correctAnswer || 'N/A'}}</td>\r\n                        <td class=\"fixedColumn\">{{x.queMark || 'N/A'}}</td>\r\n                        <td class=\"fixedColumn\" style=\"color: red;\">{{x.errorMessage || 'N/A'}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=assessment-assessment-module-es2015.js.map