(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ojt-registration-ojt-registration-module"], {
    /***/
    "C6wX":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration-details/ojt-registration-details.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function C6wX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".hidden {\n  display: none;\n}\n\n.expand {\n  display: block;\n}\n\n.modal-footer.paginationFooter {\n  padding: 5px 10px;\n}\n\n.expand-card {\n  margin: 20px 0px;\n}\n\n.expand-card .title {\n  height: auto;\n  background-color: #7044cd;\n  color: white;\n  vertical-align: middle;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n\n.expand-card .title i {\n  float: right;\n  margin-top: 3px;\n}\n\n.expand-card .content {\n  min-height: 50px;\n  background-color: white;\n  padding: 15px 20px;\n  border-left: 1px solid #7044cd;\n  border-bottom: 1px solid #7044cd;\n  border-right: 1px solid #7044cd;\n}\n\n.expand-card .content .table-responsive {\n  margin-bottom: 20px;\n}\n\n.expand-card .content .table-responsive:last-child {\n  margin-bottom: 0px;\n}\n\n.expand-card .content .tableFixHead {\n  max-height: unset;\n  min-height: unset;\n  height: auto;\n}\n\n.expand-card .content .stage-title {\n  display: inline-flex;\n  background: #7044cd;\n  color: white;\n  padding: 8px;\n  height: auto;\n}\n\n.expand-card .content .stage-title .index {\n  margin-right: 10px;\n  background: #b395f1;\n  padding: 1px 6px;\n  font-size: 13px;\n}\n\n.expand-card .content .stage-title .text {\n  padding: 1px 0px;\n  font-size: 13px;\n}\n\n.expand-card .content .table {\n  margin-bottom: 0px;\n}\n\n.stage-header {\n  border-bottom: 3px solid #7044cd !important;\n}\n\n.stage-header .modal-title {\n  padding: 7px 12px;\n  color: #7044cd !important;\n}\n\n.expand-card:first-child {\n  margin-top: 0px;\n}\n\n.textarea-custom {\n  border: 1px solid #ccc;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  overflow-y: auto;\n  max-height: 200px;\n  height: auto;\n  min-height: 116px;\n  resize: none;\n  padding: 10px;\n  font-family: Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9qdC1yZWdpc3RyYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFFSSxnQkFBQTtBQUFKOztBQUVJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBRVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUFaOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FBRlI7O0FBSVE7RUFDSSxtQkFBQTtBQUZaOztBQUtRO0VBQ0ksa0JBQUE7QUFIWjs7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSlo7O0FBT1E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBTFo7O0FBT1k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTGhCOztBQVFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBTmhCOztBQVVRO0VBQ0ksa0JBQUE7QUFSWjs7QUFpQkE7RUFDSSwyQ0FBQTtBQWRKOztBQWdCSTtFQUNJLGlCQUFBO0VBQ0EseUJBQUE7QUFkUjs7QUFrQkE7RUFDSSxlQUFBO0FBZko7O0FBaUJBO0VBQ0ksc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBZEoiLCJmaWxlIjoib2p0LXJlZ2lzdHJhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyLnBhZ2luYXRpb25Gb290ZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5leHBhbmQtY2FyZCB7XHJcblxyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG5cclxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFibGUtcmVzcG9uc2l2ZTpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYmxlRml4SGVhZCB7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN0YWdlLXRpdGxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaW5kZXgge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2IzOTVmMTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCA2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgICAgIC8vIC50YWJsZUZpeEhlYWQgdGFibGUgdGJvZHkgdGQubm8tcmVjb3JkLWZvdW5kIHtcclxuICAgICAgICAgICAgLy8gICAgIHBvc2l0aW9uOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3RhZ2UtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXhwYW5kLWNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi50ZXh0YXJlYS1jdXN0b20ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgXHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpOyBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87IFxyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7IFxyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogMTE2cHg7XHJcbiAgICByZXNpemU6IG5vbmU7IFxyXG4gICAgcGFkZGluZzogMTBweDsgXHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "FO9m":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/ojt-registration/ojt-registration.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FO9m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row m-0\">\r\n    <div class=\"col-11 m-auto\">\r\n        <app-topBar title=\"OJT Tracking\"></app-topBar>\r\n    </div>\r\n    <!-- <div class=\"col-3 m-auto\">\r\n        <app-loginInfo></app-loginInfo>\r\n    </div> -->\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n\r\n    </div> -->\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"p-l-0 p-r-8\" [ngClass]=\"(searchDet.filterFlag)?'col-12':'col-12'\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                                (click)=\"getSearchListData(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchListData(false)\"></span>\r\n                            <input style=\"border-bottom: 1px solid #7044cd; min-width: 400px;\" type=\"text\" class=\"form-control\"\r\n                                name=\"searchInput\" placeholder=\"Search by emp. Id, emp. name, plant\"\r\n                                [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchListData(true) : ''\" autocomplete=\"off\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <!-- <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                Applied</span>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-5 p-r-5 p-l-5 form-group\">\r\n\r\n            </div>\r\n            <div class=\"col-3 p-0\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\" class=\"fixedColumn\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\" class=\"\">Department</th>\r\n                        <th mat-sort-header=\"LineName\" class=\"\">Cell/Line</th>\r\n                        <th>OJT Start Date</th>\r\n                        <th>Team Lead</th>\r\n                        <th mat-sort-header=\"EmpId\" class=\"\">Emp Id</th>\r\n                        <th mat-sort-header=\"EmpName\" class=\"\">Emp Name</th>\r\n                        <th mat-sort-header=\"WorkstationName\" class=\"\">Workstation</th>\r\n                        <th mat-sort-header=\"Level\" class=\"\">Level</th>\r\n                        <th mat-sort-header=\"RegisteredDate\" class=\"\">Registered Date</th>\r\n                        <th mat-sort-header=\"Status\" class=\"pending actionTh fixedColumn\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of ojtRegList\">\r\n                        <td class=\"actionTd fixedColumn text-left\">{{x.branchName}}</td>\r\n                        <td>{{x.deptName}}</td>\r\n                        <td>{{x.lineName}}</td>\r\n                        <td>{{x.ojtStartDate | date: 'dd-MM-yyyy'}}</td>\r\n                        <td>{{x.tlName}}</td>\r\n                        <td>{{x.companyEmpId}}</td>\r\n                        <td>{{x.empName}}</td>\r\n                        <td>{{x.workstationName}}</td>\r\n                        <td>{{x.level}}</td>\r\n                        <td>{{x.registeredDate | date: 'dd-MM-yyyy' }}</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':x.status == 'COMPLETED','pending':x.status == 'PENDING','not-completed':x.status == 'NOT COMPLETED','rejected':x.status == 'REJECTED'}\">\r\n                            {{x.status || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <!-- <i class=\"fa fa-edit editIcon\" (click)=\"addOJTPlan(AddOjtPlan,x,true)\"></i>\r\n                            &nbsp; &nbsp; -->\r\n                            <i class=\"fa fa-eye editIcon\" (click)=\"handleIconClick(x,ojtRegistrationDetails)\"></i>\r\n                            <!-- &nbsp; &nbsp;\r\n                            <i *ngIf=\"x.status != 'PUBLISH'\" class=\"fas fa-trash-alt deleteIcon\"\r\n                                (click)=\"deleteOJTPlan(x)\"></i>&nbsp; &nbsp; -->\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!ojtRegList || ojtRegList.length === 0\">\r\n                          Data Not Found\r\n                        </td>\r\n                      </tr>\r\n                      \r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4> <button type=\"button\" class=\"close\"\r\n            aria-label=\"Close\" (click)=\"d('Cross click')\"> <span aria-hidden=\"true\">&times;</span> </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"getFilterList(formdata)\" autocomplete=\"off\" class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\"> <perfect-scrollbar>\r\n                <div class=\"row m-b-0\"> <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                            (onSelect)=\"onChangeBranch($event)\" [data]=\"getSortFunction(branchAccessList,'plant')\"\r\n                            [(ngModel)]=\"searchDet.branch\" [disabled]=\"false\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && formdata.controls['branch'].invalid && (formdata.controls['branch'].touched || formdata.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"formdata.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\"> <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\" formControlName=\"cell\"\r\n                            (onSelect)=\"onChangeDept($event)\" (onDeSelect)=\"onDeptDeselect($event)\" [placeholder]=\"'Select Cell/Line'\"\r\n                            [settings]=\"multipleDropdownSettings\" [data]=\"getSortFunction(cellList,'cell')\"\r\n                            [(ngModel)]=\"searchDet.cell\">\r\n                        </ng-multiselect-dropdown> </div>\r\n                </div>\r\n            </perfect-scrollbar> </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\"> <span *ngIf=\"submitSpinner\"\r\n                    class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span> </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n\r\n<ng-template style=\"width: 80%;\" #ojtRegistrationDetails let-modal let-c=\"close\">\r\n    <app-ojt-registration-details [selectedDetail]=\"selectedOjtDetails\"></app-ojt-registration-details>\r\n</ng-template>";
      /***/
    },

    /***/
    "P6h1":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function P6h1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "th .fixedColumn {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n}\n\ntd .fixedColumn {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n}\n\nth.actionTh,\ntd.actionTd {\n  z-index: 3;\n}\n\n.fixedColumn:nth-child(11),\n.fixedColumn:nth-child(11) {\n  right: 71px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n}\n\n.fixedColumn:nth-child(9),\n.fixedColumn:nth-child(9) {\n  width: 120px;\n  right: 40px;\n  min-width: 120px;\n  max-width: 120px;\n}\n\n.fixedColumn:nth-child(1),\n.fixedColumn:nth-child(1) {\n  width: 80px;\n  min-width: 80px;\n  max-width: 80px;\n}\n\ntr th:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n\n.actionTd div {\n  position: relative;\n  z-index: 5;\n  min-height: 36px;\n  overflow: hidden;\n}\n\nth.fixedColumn.empNameCol {\n  left: 108px;\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb2p0LXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsT0FBQTtFQUVBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsT0FBQTtFQUVBLFVBQUE7QUFESjs7QUFJQTs7RUFHSSxVQUFBO0FBRko7O0FBS0E7O0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7O0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7O0VBRUksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFFSSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUZKIiwiZmlsZSI6Im9qdC1yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCAuZml4ZWRDb2x1bW4ge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbnRkIC5maXhlZENvbHVtbiB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxudGguYWN0aW9uVGgsXHJcbnRkLmFjdGlvblRkIHtcclxuICAgIC8vIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDExKSxcclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxMSkge1xyXG4gICAgcmlnaHQ6IDcxcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCg5KSxcclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCg5KSB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpLFxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG50ciB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5hY3Rpb25UZCBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1pbi1oZWlnaHQ6IDM2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG50aC5maXhlZENvbHVtbi5lbXBOYW1lQ29sIHtcclxuICAgIGxlZnQ6IDEwOHB4O1xyXG4gICAgei1pbmRleDogNTtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "YZv3":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration.module.ts ***!
      \**********************************************************************************/

    /*! exports provided: MY_YEAR_FORMATS, MY_MONTH_FORMATS, OjtRegistrationModule */

    /***/
    function YZv3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MY_YEAR_FORMATS", function () {
        return MY_YEAR_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MY_MONTH_FORMATS", function () {
        return MY_MONTH_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtRegistrationModule", function () {
        return OjtRegistrationModule;
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


      var _ojt_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ojt-registration-routing.module */
      "Zsvp");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../skill-matrix.constant */
      "VX2j");
      /* harmony import */


      var _ojt_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./ojt-registration.component */
      "hUUv");
      /* harmony import */


      var _ojt_registration_details_ojt_registration_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ojt-registration-details/ojt-registration-details.component */
      "jrXs");

      var MY_YEAR_FORMATS = {
        parse: {
          dateInput: 'YYYY'
        },
        display: {
          dateInput: 'YYYY',
          monthYearLabel: 'YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'YYYY'
        }
      };
      var MY_MONTH_FORMATS = {
        parse: {
          dateInput: 'MM-YYYY'
        },
        display: {
          dateInput: 'MM-YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      };

      var OjtRegistrationModule = function OjtRegistrationModule() {
        _classCallCheck(this, OjtRegistrationModule);
      };

      OjtRegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ojt_registration_component__WEBPACK_IMPORTED_MODULE_11__["OjtRegistrationComponent"], _ojt_registration_details_ojt_registration_details_component__WEBPACK_IMPORTED_MODULE_12__["OjtRegistrationDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ojt_registration_routing_module__WEBPACK_IMPORTED_MODULE_3__["OjtRegistrationRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateModule"]],
        providers: [{
          provide: MY_MONTH_FORMATS,
          useValue: MY_YEAR_FORMATS
        }, {
          provide: 'Constant',
          useValue: _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_10__["CONSTANT"]
        }]
      })], OjtRegistrationModule);
      /***/
    },

    /***/
    "ZCdD":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/ojt-registration/ojt-registration-details/ojt-registration-details.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZCdD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div *ngIf=\"submitLoading\">\r\n    <app-loading></app-loading>\r\n</div> -->\r\n<div class=\"row modal-header stage-header\">\r\n    <div class=\"col-11\">\r\n        <div class=\"modal-title\">OJT Registartion Details</div>\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\">\r\n            <span>×</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"modal-body\" style=\"height: 86.5%;padding-bottom: 0px;\">\r\n    <perfect-scrollbar [style.max-height]=\"'calc(81vh)'\">\r\n        <div class=\"expand-card\" *ngFor=\"let skilling of dayWiseAuditList; let k = index;\">\r\n            <div class=\"title\" (click)=\"expandSkilling(k)\">Skilling {{k\r\n                + 1}}<i class=\"fa\"\r\n                    [ngClass]=\"{'fa-minus': skilling.expand === true, 'fa-plus': skilling.expand === undefined || skilling.expand === false}\"\r\n                    aria-hidden=\"true\"></i>\r\n            </div>\r\n            <div class=\"content hidden\" [ngClass]=\"{'expand': skilling.expand}\">\r\n                <div class=\"table-block\">\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList; let i = index;\">\r\n                        <div *ngIf=\"!day.tlAudit && !day.assessmentAudit\" class=\"title\" (click)=\"expand(k,i)\">Day {{i\r\n                            + 1}}<i class=\"fa\"\r\n                                [ngClass]=\"{'fa-minus': day.expand === true, 'fa-plus': day.expand === undefined || day.expand === false}\"\r\n                                aria-hidden=\"true\"></i></div>\r\n                        <div class=\"content hidden\" *ngIf=\"!day.tlAudit && !day.assessmentAudit\"\r\n                            [ngClass]=\"{'expand': day.expand && !day.tlAudit && !day.assessmentAudit}\">\r\n                            <div class=\"table-block\">\r\n                                <ng-container *ngFor=\"let audit of day.dayAudit\">\r\n                                    <div class=\"table-responsive tableFixHead\">\r\n                                        <div class=\"stage-title\">\r\n                                            <div class=\"index\">{{audit.stageId}}</div>\r\n                                            <div class=\"text\">{{audit.stage}} ( {{audit.empName}} )</div>\r\n                                        </div>\r\n                                        <table class=\"table\" matSort *ngIf=\"audit.stageId == 1\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo || ''}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint || ''}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"1\">OE Comment</td>\r\n                                                    <td colspan=\"3\"><textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].oeComment\" maxlength=\"1000\"></textarea></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 2\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\" style=\"text-align: center;\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"1\" style=\"width: 27%;\">Trainer Activity Comment</td>\r\n                                                    <td colspan=\"3\" ><textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].trainerActComment\" maxlength=\"1000\"></textarea></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 3\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Day</th>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Date</th>\r\n                                                    <th scope=\"col\" colspan=\"2\"\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\"\r\n                                                        style=\"text-align: center;\">Production</th>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Text',\r\n                                                            0,k)}}</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Number',\r\n                                                            0,k)}}</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 0,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">\r\n                                                            {{getParameterDataByLabel('Datetime', 0,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByLabel('Datetime', 1,k) !=0 \">\r\n                                                        <th scope=\"col\" rowspan=\"2\">\r\n                                                            {{getParameterDataByLabel('Datetime', 1,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 0,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model',\r\n                                                            0,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByLabel('Model', 1,k) !=0\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">{{getParameterDataByLabel('Model',\r\n                                                            1,k)}}\r\n                                                        </th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Gap')\">\r\n                                                        <th scope=\"col\" rowspan=\"2\">Gap Reason</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList); let i = index\">\r\n                                                            <th scope=\"col\" colspan=\"2\" style=\"text-align: center;\">\r\n                                                                Cycle {{ i + 1\r\n                                                                }}</th>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                    <th scope=\"col\" rowspan=\"2\">Status</th>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                                        <th scope=\"col\">Plan</th>\r\n                                                        <th scope=\"col\">Actual</th>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                            <th scope=\"col\">Standard</th>\r\n                                                            <th scope=\"col\">Actual</th>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <!-- <tr *ngFor=\"let item of audit.auditPointList\"> -->\r\n                                                <tr>\r\n                                                    <!-- <td>{{item.dayNo}}</td> -->\r\n                                                    <td>{{audit.auditPointList[0].dayNo}}</td>\r\n                                                    <!-- <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td> -->\r\n                                                    <td>{{audit.auditPointList[0].assignedDate | date: 'dd-MM-yyyy'}}\r\n                                                    </td>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'cyclePlan')\">\r\n                                                        <td>{{isCyclePlan(audit.parameterList)}}</td>\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'cyclePlan')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Text')\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Text')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Number')\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Number')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 0,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Datetime', 0,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container\r\n                                                        *ngIf=\"checkParameter(audit.parameterList, 'Datetime') && getParameterDataByValue('Datetime', 1,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Datetime', 1,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 0,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue('Model', 0,k)}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"checkParameter(audit.parameterList, 'Model') && getParameterDataByValue('Model', 1,k) !=0\">\r\n                                                        <td>{{getParameterDataByValue( 'Model', 1,k)}}</td>\r\n                                                    </ng-container>\r\n\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <td>{{getParamaterData(audit.parameterList, 'Gap')}}</td>\r\n                                                    </ng-container>\r\n                                                    <ng-container *ngIf=\"isCyclePlan(audit.parameterList) > 0\">\r\n                                                        <ng-container\r\n                                                            *ngFor=\"let cycle of getCyclePlanList(audit.parameterList);\">\r\n                                                            <td>{{cycle.actualValue}}</td>\r\n                                                            <td>{{cycle.expectedValue}}</td>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                    <!-- <td [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">{{item.status || ''}}</td> -->\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':audit.auditPointList[0].status == 'COMPLETED','pending':audit.auditPointList[0].status == 'PENDING', 'rejected':audit.auditPointList[0].status == 'REJECTED', 'not-completed':audit.auditPointList[0].status == 'NOT COMPLETED'}\">\r\n                                                        {{audit.auditPointList[0].status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                        <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 4\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"fixedColumn\">Day</th>\r\n                                                    <th class=\"\">Date</th>\r\n                                                    <th class=\"\">Key Point</th>\r\n                                                    <th class=\"\">Status</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr *ngFor=\"let item of audit.auditPointList\">\r\n                                                    <td>{{item.dayNo}}</td>\r\n                                                    <td>{{item.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                    <td>{{item.keyPoint}}</td>\r\n                                                    <td\r\n                                                        [ngClass]=\"{'completed':item.status == 'COMPLETED','pending':item.status == 'PENDING', 'rejected':item.status == 'REJECTED', 'not-completed':item.status == 'NOT COMPLETED'}\">\r\n                                                        {{item.status || ''}}</td>\r\n                                                </tr>\r\n                                                <tr\r\n                                                    *ngIf=\"(audit.auditPointList == null || audit.auditPointList.length == 0)\">\r\n                                                    <td colspan=\"4\" class=\"text-center\">\r\n                                                        Data Not Found\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                            <tbody *ngIf=\"(audit.auditPointList != null || audit.auditPointList.length != 0)\">\r\n                                                <tr>\r\n                                                    <td colspan=\"1\">QA Comment</td>\r\n                                                    <td colspan=\"3\">\r\n                                                        <textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.auditPointList[0].comment\" maxlength=\"1000\"></textarea>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList; let i = index;\">\r\n                        <span *ngIf=\"day.tlAudit\">\r\n                            <div *ngFor=\"let audit of day.tlAudit; let j = index;\">\r\n                                <div class=\"title\" (click)=\"tlAuditExpand(k,i,j)\">{{audit.stage}} ( {{audit.empName}}\r\n                                    )<i class=\"fa\"\r\n                                        [ngClass]=\"{'fa-minus': audit.expand === true, 'fa-plus': audit.expand === undefined || audit.expand === false}\"\r\n                                        aria-hidden=\"true\"></i></div>\r\n                                <div class=\"content hidden\" [ngClass]=\"{'expand': audit.expand}\">\r\n                                    <div class=\"table-block\">\r\n                                        <ng-container>\r\n                                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 5\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"fixedColumn\">Emp. Name</th>\r\n                                                        <th class=\"\">Status</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>{{audit.empName}}</td>\r\n                                                        <td\r\n                                                            [ngClass]=\"{'completed':audit.status == 'COMPLETED','pending':audit.status == 'PENDING', 'rejected':audit.status == 'REJECTED', 'not-completed':audit.status == 'NOT COMPLETED'}\">\r\n                                                            {{audit.status || ''}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                                <tbody *ngIf=\"(audit.comment != undefined || audit.comment != '')\">\r\n                                                    <tr>\r\n                                                        <td colspan=\"1\">TL Comment</td>\r\n                                                        <td colspan=\"3\">\r\n                                                            <textarea disabled style=\"border: none;\" class=\"form-control textarea-custom\" name=\"\" id=\"\" rows=\"2\" [(ngModel)]=\"audit.comment\" maxlength=\"1000\"></textarea>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"expand-card\" *ngFor=\"let day of skilling.dayWiseAuditList; let i = index;\">\r\n                        <span *ngIf=\"day.assessmentAudit\">\r\n                            <div *ngFor=\"let audit of day.assessmentAudit; let j = index;\">\r\n                                <div class=\"title\" (click)=\"assessmentAuditExpand(k,i,j)\">Assessment ( {{audit.empName}}\r\n                                    )<i class=\"fa\"\r\n                                        [ngClass]=\"{'fa-minus': audit.expand === true, 'fa-plus': audit.expand === undefined || audit.expand === false}\"\r\n                                        aria-hidden=\"true\"></i></div>\r\n\r\n                                <div class=\"content hidden\" [ngClass]=\"{'expand': audit.expand}\">\r\n                                    <div class=\"table-block\">\r\n                                        <ng-container>\r\n                                            <table class=\"table table-bordered\" matSort *ngIf=\"audit.stageId == 0\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"fixedColumn\">Assessment Title</th>\r\n                                                        <th class=\"\">Date</th>\r\n                                                        <th class=\"\">Status</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr>\r\n                                                        <td>{{audit.title}}</td>\r\n                                                        <td>{{audit.assignedDate | date: 'dd-MM-yyyy'}}</td>\r\n                                                        <td\r\n                                                            [ngClass]=\"{'completed':audit.status == 'COMPLETED','pending':audit.status == 'PENDING', 'rejected':audit.status == 'REJECTED', 'not-completed':audit.status == 'NOT COMPLETED'}\">\r\n                                                            {{audit.status || ''}}</td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div class=\"modal-footer paginationFooter\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-12 text-right\">\r\n            <button type=\"button\" class=\"btn cancelBtn\" (click)=\"closeModal()\"\r\n                style=\"margin-left: 10px;\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "Zsvp":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration-routing.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: OjtRegistrationRoutingModule */

    /***/
    function Zsvp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtRegistrationRoutingModule", function () {
        return OjtRegistrationRoutingModule;
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


      var _ojt_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ojt-registration.component */
      "hUUv"); //import { OjtPlanComponent } from './ojt-registration.component';
      //import { AddOjtPlanComponent } from './add-ojt-registration/add-ojt-registration.component';


      var routes = [{
        path: '',
        component: _ojt_registration_component__WEBPACK_IMPORTED_MODULE_3__["OjtRegistrationComponent"]
      }];

      var OjtRegistrationRoutingModule = function OjtRegistrationRoutingModule() {
        _classCallCheck(this, OjtRegistrationRoutingModule);
      };

      OjtRegistrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OjtRegistrationRoutingModule);
      /***/
    },

    /***/
    "hUUv":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OjtRegistrationComponent */

    /***/
    function hUUv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtRegistrationComponent", function () {
        return OjtRegistrationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ojt_registration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ojt-registration.component.html */
      "FO9m");
      /* harmony import */


      var _ojt_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ojt-registration.component.scss */
      "P6h1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _skilling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../skilling.service */
      "Sh6i");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var OjtRegistrationComponent = /*#__PURE__*/function () {
        function OjtRegistrationComponent(router, modalConfig, modalService, apiService, alertService, fb, Constant) {
          _classCallCheck(this, OjtRegistrationComponent);

          this.router = router;
          this.modalConfig = modalConfig;
          this.modalService = modalService;
          this.apiService = apiService;
          this.alertService = alertService;
          this.fb = fb;
          this.submitAttempted = false;
          this.filterFlag = false;
          this.searchDet = {};
          this.constant = {};
          this.userDet = {};
          this.listLoading = false;
          this.ojtRegList = [];
          this.isDropdownOpen = false;
          this.SingleDropdownSettings = {};
          this.multipleDropdownSettings = {};
          this.SingleDropdownTypeSettings = {};
          this.branchAccessList = [];
          this.cellList = [];
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          this.selectedOjtDetails = {};
          this.isAppliedFilter = false;
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
          this.constant = Constant;
        }

        _createClass(OjtRegistrationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem("userDet"));
            this.formdata = this.fb.group({
              branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
              cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("")
            });
            this.SingleDropdownTypeSettings = {
              singleSelection: true,
              idField: "id",
              textField: "type",
              allowSearchFilter: false,
              itemsShowLimit: 1,
              showSelectedItemsAtTop: true,
              closeDropDownOnSelection: true
            };
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: "id",
              textField: "name",
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.multipleDropdownSettings = {
              singleSelection: false,
              idField: "id",
              textField: "name",
              selectAllText: "Select All",
              unSelectAllText: "UnSelect All",
              itemsShowLimit: 2,
              allowSearchFilter: true
            };
            this.getBranchAccessList();
            this.getOjtRegList("");
          }
        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this = this;

            this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (res) {
              if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                  _this.branchAccessList = res.branchAccessList;
                  _this.branchAccessList = _this.setArray(res.branchAccessList, 'branchId', 'branchName');
                } else {
                  _this.branchAccessList = [{
                    id: _this.userDet.branch.branchId,
                    name: _this.userDet.branch.name
                  }];
                }
              } else {
                _this.branchAccessList = [{
                  id: _this.userDet.branch.branchId,
                  name: _this.userDet.branch.name
                }];
              }
            });
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            console.log(event); // this.getDeptList(event);

            this.searchDet.cell = [];
            this.getCellList();
          }
        }, {
          key: "onChangeDept",
          value: function onChangeDept(event) {
            if (!Array.isArray(this.searchDet.dept)) {
              this.searchDet.dept = [];
            }

            if (!this.searchDet.dept.some(function (dept) {
              return dept.id === event.id;
            })) {
              this.searchDet.dept.push({
                id: event.id,
                name: event.name
              });
            }
          }
        }, {
          key: "onDeptDeselect",
          value: function onDeptDeselect(event) {
            if (!Array.isArray(this.searchDet.dept)) {
              this.searchDet.dept = [];
            }

            this.searchDet.dept = this.searchDet.dept.filter(function (dept) {
              return dept.id !== event.id;
            });
          }
        }, {
          key: "getCellList",
          value: function getCellList() {
            var _this2 = this;

            if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
              var req = {
                branchId: this.searchDet.branch[0].id
              };

              if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
                req.deptId = this.searchDet.dept[0].id;
              }

              this.apiService.getCellList('apis/sm/getCellList', req).subscribe(function (response) {
                if (response.result) {
                  if (response.dataList != null && response.dataList.length > 0) {
                    for (var index = 0; index < response.dataList.length; index++) {
                      response.dataList[index].tmpName = '';

                      if (response.dataList[index].lineName) {
                        response.dataList[index].tmpName += response.dataList[index].lineName;

                        if (response.dataList[index].deptName) {
                          response.dataList[index].tmpName += ' (Department : ' + response.dataList[index].deptName + ')';
                        }
                      }
                    }

                    _this2.cellList = _this2.setArray(response.dataList, 'lineId', 'tmpName');
                  } else {
                    _this2.cellList = [];
                  }
                } else {
                  _this2.cellList = [];
                }
              });
            } else {
              this.cellList = [];
            }
          }
        }, {
          key: "filterModalOpen",
          value: function filterModalOpen(modal) {
            console.log("In filter");

            if (!this.filterFlag) {// this.filterData.reset();
            }

            this.modalService.open(modal, {
              windowClass: "filterPopup"
            });
          }
        }, {
          key: "getFilterList",
          value: function getFilterList(form) {
            this.submitAttempted = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key) {
                form.controls[key].markAsDirty();
              });
              return;
            }

            this.clearPagination();
            this.isAppliedFilter = true;
            this.searchDet.filterFlag = true;
            this.searchDet.filterPopupOpen = false;
            this.modalService.dismissAll();
            this.getOjtRegList("Filter");
          }
        }, {
          key: "setArray",
          value: function setArray(array, key1, key2) {
            var tmpArray = [];

            if (array != null && array.length > 0) {
              var _iterator = _createForOfIteratorHelper(array),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return tmpArray;
          }
        }, {
          key: "clearPagination",
          value: function clearPagination() {
            this.staticPagination = {
              total: 0,
              page: 1,
              maxSize: 5,
              itemsPerPage: 10,
              totalPages: 0,
              listLength: 0
            };
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.getOjtRegList("");
          }
        }, {
          key: "removeFilter",
          value: function removeFilter() {
            this.submitAttempted = false;
            this.formdata.reset();
            this.searchDet.branch = [];
            this.searchDet.cell = [];
            this.submitAttempted = false;
            this.isAppliedFilter = false;
            this.searchDet.filterFlag = false;
            this.searchDet.filterPopupOpen = false;
            this.ojtRegList = [];
            this.searchDet.dept = [];
            this.getOjtRegList("");
          }
        }, {
          key: "loadMore",
          value: function loadMore(data) {
            this.staticPagination = data;
            this.ojtRegList = [];
            this.listLoading = true;

            if (this.filterFlag) {
              this.getOjtRegList("filter");
            } else {
              this.getOjtRegList("");
            } // this.getTrainingTestDetails();

          }
        }, {
          key: "getOjtRegList",
          value: function getOjtRegList(searchfilter) {
            var _this3 = this;

            this.listLoading = true;

            if (this.staticPagination.offset > 0 && this.filterFlag == false && searchfilter == "filter") {
              this.clearPagination();
            }

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var reqData = {
              orgId: this.userDet.organization.orgId,
              offset: this.staticPagination.offset,
              limit: this.staticPagination.itemsPerPage
            };

            if (this.sorting) {
              if (this.sorting.direction != "") {
                reqData.colName = this.sorting.active;
                reqData.orderType = this.sorting.direction;
              }
            }

            if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != "") {
              reqData.search = this.searchDet.searchInput;
            }

            if (searchfilter == "filter") {
              if (this.formdata.invalid) {
                Object.keys(this.formdata.controls).forEach(function (key) {
                  _this3.formdata.controls[key].markAsDirty();
                });
                return;
              }
            }

            if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
              reqData.branchId = this.searchDet.branch[0].id;
            } else {
              reqData.branchId = this.userDet.branch.branchId;
            }

            if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
              reqData.lineIds = this.searchDet.dept.map(function (dept) {
                return dept.id;
              });
            }

            var matchingLineIds = this.cellList.filter(function (cell) {
              return _this3.searchDet.dept.some(function (dept) {
                return dept.id === cell.lineId && dept.name.includes(cell.lineName) && dept.name.includes(cell.deptName);
              });
            }).map(function (cell) {
              return cell.deptId;
            });

            if (matchingLineIds.length > 0) {
              reqData.deptIds = matchingLineIds;
            } // if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            //   for (let i = 0; i < this.cellList.length; i++) {
            //     if (this.cellList[i].lineId == this.searchDet.cell[0].id) {
            //       reqData.deptIds = [this.cellList[i].deptId];
            //     }
            //   }
            // }


            console.log(reqData);
            this.apiService.getOJTRegistration("apis/sm/getOJTRegistrationList", reqData).subscribe(function (response) {
              console.log(response);
              _this3.listLoading = false;

              if (response.result) {
                if (_this3.staticPagination.page == 1) {
                  _this3.staticPagination.total = response.totalCount;
                  _this3.staticPagination.totalPages = Math.ceil(response.totalMyActionCount / _this3.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this3.ojtRegList = response.dataList;
                  console.log(_this3.ojtRegList);
                  _this3.staticPagination.listLength = response.dataList.length;
                } else {
                  _this3.ojtRegList = [];
                }
              } else {
                _this3.ojtRegList = [];
              }

              (function (error) {
                _this3.ojtRegList = [];
                _this3.listLoading = false;
              });
            }, function (error) {
              _this3.ojtRegList = [];
              _this3.listLoading = false;
            });
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
            if (array && Array.isArray(array) && array.length > 0) {
              if (fieldToSort === "plant" || fieldToSort === "dept" || fieldToSort === "cell") {
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
        }, {
          key: "handleIconClick",
          value: function handleIconClick(data, modal) {
            console.log(data);
            this.selectedOjtDetails = data;
            console.log("In filter");

            if (!this.filterFlag) {// this.filterData.reset();
            }

            this.modalService.open(modal, {
              windowClass: "bottom"
            });
          }
        }, {
          key: "getSearchListData",
          value: function getSearchListData(ev) {
            // this.clearPagination();
            this.searchDet.searchData = ev;

            if (!ev) {
              this.searchDet.searchInput = "";
            }

            if (this.filterFlag) {
              this.getOjtRegList("filter");
            } else {
              this.getOjtRegList("");
            }
          }
        }]);

        return OjtRegistrationComponent;
      }();

      OjtRegistrationComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: ['Constant']
          }]
        }];
      };

      OjtRegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-ojt-registration",
        template: _raw_loader_ojt_registration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ojt_registration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], Object])], OjtRegistrationComponent);
      /***/
    },

    /***/
    "jrXs":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/skill-matrix/ojt-registration/ojt-registration-details/ojt-registration-details.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: OjtRegistrationDetailsComponent */

    /***/
    function jrXs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtRegistrationDetailsComponent", function () {
        return OjtRegistrationDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ojt_registration_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ojt-registration-details.component.html */
      "ZCdD");
      /* harmony import */


      var _ojt_registration_details_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ojt-registration-details.component.scss */
      "C6wX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _skilling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../skilling.service */
      "Sh6i");

      var OjtRegistrationDetailsComponent = /*#__PURE__*/function () {
        function OjtRegistrationDetailsComponent(modalService, appService) {
          _classCallCheck(this, OjtRegistrationDetailsComponent);

          this.modalService = modalService;
          this.appService = appService;
          this.userDet = {};
          this.dayList = {};
          this.dayWiseAuditList = {};
          this.ojtRegiDetails = {};
          this.TLDayAudit = [];
        }

        _createClass(OjtRegistrationDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            console.log(this.userDet);
            console.log(this.selectedDetail);
            this.getOJTRegistrationDetails();
          }
        }, {
          key: "getOJTRegistrationDetails",
          value: function getOJTRegistrationDetails() {
            var _this4 = this;

            this.appService.getOJTRegistrationDetails('apis/sm/getOJTRegistrationDetails/' + this.selectedDetail.ojtRegisId).subscribe(function (response) {
              console.log(response);

              if (response.result) {
                if (response.data) {
                  _this4.ojtRegiDetails = response.data;
                  console.log(_this4.ojtRegiDetails);

                  if (_this4.ojtRegiDetails.skillingList != null && _this4.ojtRegiDetails.skillingList.length > 0) {
                    _this4.dayWiseAuditList = _this4.ojtRegiDetails.skillingList; // this.dayList = this.dayWiseAuditList.dayWiseAuditList;

                    console.log(_this4.dayWiseAuditList);
                  }
                } else {
                  _this4.ojtRegiDetails = [];
                }
              } else {
                _this4.ojtRegiDetails = [];
              }
            });
          }
        }, {
          key: "checkParameter",
          value: function checkParameter(parameterList, parameterType) {
            var flag = false;
            var tmpKey = parameterType ? parameterType.toLowerCase().trim() : '';

            if (parameterList != null && parameterList.length > 0) {
              for (var index = 0; index < parameterList.length; index++) {
                var tmpParam = parameterList[index].parameterType.toLowerCase().trim();

                if (tmpKey == tmpParam) {
                  flag = true;
                  break;
                }
              }
            }

            return flag;
          }
        }, {
          key: "isCyclePlan",
          value: function isCyclePlan(parameterList) {
            var flag = 0;
            var tmpKey = 'cyclePlan'.toLowerCase().trim();

            if (parameterList != null && parameterList.length > 0) {
              for (var index = 0; index < parameterList.length; index++) {
                var tmpParam = parameterList[index].parameterType.toLowerCase().trim();

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
        }, {
          key: "getParamaterData",
          value: function getParamaterData(parameterList, parameterType) {
            var flag = false;
            var tmpKey = parameterType ? parameterType.toLowerCase().trim() : '';

            if (parameterList != null && parameterList.length > 0) {
              for (var index = 0; index < parameterList.length; index++) {
                var tmpParam = parameterList[index].parameterType.toLowerCase().trim();

                if (tmpKey == tmpParam) {
                  return parameterList[index].parameterValue;
                  break;
                }
              }
            }

            return flag;
          }
        }, {
          key: "getCyclePlanList",
          value: function getCyclePlanList(parameterList) {
            var flag = false;
            var tmpKey = 'cyclePlan'.toLowerCase().trim();

            if (parameterList != null && parameterList.length > 0) {
              for (var index = 0; index < parameterList.length; index++) {
                var tmpParam = parameterList[index].parameterType.toLowerCase().trim();

                if (tmpKey == tmpParam) {
                  return parameterList[index].cyclePlanList;
                  break;
                }
              }
            }

            return flag;
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalService.dismissAll();
          }
        }, {
          key: "expand",
          value: function expand(i, j) {
            this.dayWiseAuditList[i].dayWiseAuditList[j].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].expand;
          }
        }, {
          key: "assessmentAuditExpand",
          value: function assessmentAuditExpand(i, j, k) {
            this.dayWiseAuditList[i].dayWiseAuditList[j].assessmentAudit[k].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].assessmentAudit[k].expand;
          }
        }, {
          key: "tlAuditExpand",
          value: function tlAuditExpand(i, j, k) {
            this.dayWiseAuditList[i].dayWiseAuditList[j].tlAudit[k].expand = !this.dayWiseAuditList[i].dayWiseAuditList[j].tlAudit[k].expand;
          }
        }, {
          key: "expandSkilling",
          value: function expandSkilling(i) {
            this.dayWiseAuditList[i].expand = !this.dayWiseAuditList[i].expand;
          }
        }, {
          key: "getParameterDataByValue",
          value: function getParameterDataByValue(key, index, day) {
            var _a, _b, _c, _d;

            var tmpKey = key;

            if (this.dayWiseAuditList[day].dayWiseAuditList != null) {
              var chkCntr = 0;

              for (var i = 0; i < this.dayWiseAuditList[day].dayWiseAuditList.length; i++) {
                if (!(((_d = (_c = (_b = (_a = this.dayWiseAuditList) === null || _a === void 0 ? void 0 : _a[day]) === null || _b === void 0 ? void 0 : _b.dayWiseAuditList) === null || _c === void 0 ? void 0 : _c[i]) === null || _d === void 0 ? void 0 : _d.dayAudit) === undefined || this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length === 0)) {
                  for (var j = 0; j < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length; j++) {
                    if (this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList != null && this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length > 0) {
                      for (var k = 0; k < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length; k++) {
                        var tmpParam = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].parameterType; //let prmIndex = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].index;

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
        }, {
          key: "getParameterDataByLabel",
          value: function getParameterDataByLabel(key, index, day) {
            var _a, _b, _c, _d;

            var tmpKey = key;

            if (this.dayWiseAuditList[day].dayWiseAuditList != null && this.dayWiseAuditList[day].dayWiseAuditList.length > 0) {
              var chkCntr = 0;

              for (var i = 0; i < this.dayWiseAuditList[day].dayWiseAuditList.length; i++) {
                if (!(((_d = (_c = (_b = (_a = this.dayWiseAuditList) === null || _a === void 0 ? void 0 : _a[day]) === null || _b === void 0 ? void 0 : _b.dayWiseAuditList) === null || _c === void 0 ? void 0 : _c[i]) === null || _d === void 0 ? void 0 : _d.dayAudit) === undefined || this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length === 0)) {
                  for (var j = 0; j < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit.length; j++) {
                    if (this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList != null && this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length > 0) {
                      for (var k = 0; k < this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList.length; k++) {
                        var tmpParam = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].parameterType; //let prmIndex = this.dayWiseAuditList[day].dayWiseAuditList[i].dayAudit[j].parameterList[k].index;

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
        }]);

        return OjtRegistrationDetailsComponent;
      }();

      OjtRegistrationDetailsComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _skilling_service__WEBPACK_IMPORTED_MODULE_5__["SkillingService"]
        }];
      };

      OjtRegistrationDetailsComponent.propDecorators = {
        selectedDetail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      OjtRegistrationDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ojt-registration-details',
        template: _raw_loader_ojt_registration_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ojt_registration_details_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _skilling_service__WEBPACK_IMPORTED_MODULE_5__["SkillingService"]])], OjtRegistrationDetailsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ojt-registration-ojt-registration-module-es5.js.map