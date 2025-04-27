(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ojt-check-sheet-ojt-check-sheet-module"], {
    /***/
    "+6yo":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/ojt-check-sheet/ojt-check-sheet.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"OJT Checksheet\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <!-- <div [ngClass]=\"(searchDet.filterFlag)?'col-5':''\"\r\n                        *ngIf=\"searchDet.filterFlag && !searchDet.isUpload\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp; <span\r\n                                style=\"color: green;font-size: 12px; font-weight: 500;\">Applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                    <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-7':'col-12'\"> -->\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                                (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search by title or workstation\"\r\n                                [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\" />\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                Applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-r-5 p-l-5 form-group\">\r\n\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\" style=\"bottom: -0.1rem;\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"goOJTChecksheetDetailPage('/settings/skillMatrix/ojtchecksheet/add-ojt-check-sheet','',true)\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i>\r\n                        Create OJT Checksheet\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\" class=\"fixedColumn\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                        <th mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th mat-sort-header=\"Level\">Level</th>\r\n                        <th mat-sort-header=\"Title\">Title</th>\r\n                        <th mat-sort-header=\"NoOfDay\">No. of Days</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of checksheetList\">\r\n                        <td>{{x.branchName}}</td>\r\n                        <td>{{x.deptName}}</td>\r\n                        <td>{{x.lineName}}</td>\r\n                        <td>{{x.workstation}}</td>\r\n                        <td>{{x.skillLevel}}</td>\r\n                        <td>{{x.title}}</td>\r\n                        <td>{{x.noOfDays}}</td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <ng-container>\r\n                                <i class=\"fa fa-edit editIcon\"\r\n                                    (click)=\"goOJTChecksheetDetailPage('/settings/skillMatrix/ojtchecksheet/add-ojt-check-sheet',x,true)\"></i>\r\n                                &nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"deleteChecksheet(x)\"></i>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(checksheetList == null || checksheetList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"dismissModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterFormData\" (ngSubmit)=\"submitFilterForm(filterFormData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branch\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [data]=\"branchAccessList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"filterData.selectedBranch\" (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterFormData.controls['branch'].invalid && (filterFormData.controls['branch'].touched || filterFormData.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptId\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptId\" id=\"deptId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            formControlName=\"deptId\" [data]=\"departmentList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"searchDet.deptIds\" (onSelect)=\"onChange($event,'dept')\" (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterFormData.controls['deptId'].invalid && (filterFormData.controls['deptId'].touched || filterFormData.controls['deptId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['deptId'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"lineId\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"lineId\" id=\"lineId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"lineId\" [data]=\"cellList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"searchDet.line\" (onSelect)=\"onChange($event,'cell')\" (onDeSelect)=\"onChange(false,'cell')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'cell')\" (onDeSelectAll)=\"onChangeAll($event,'cell')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterFormData.controls['lineId'].invalid && (filterFormData.controls['lineId'].touched || filterFormData.controls['lineId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['lineId'].errors.required\">\r\n                                Please select cell/line\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"workstationId\" class=\"col-sm-12 col-form-label filter-label\">Workstation</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"workstationId\" id=\"workstationId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"workstationId\" [data]=\"workforceList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"searchDet.workstation\" (onSelect)=\"onChange($event,'workstation')\" (onDeSelect)=\"onChange(false,'workstation')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'Workstation')\" (onDeSelectAll)=\"onChangeAll($event,'Workstation')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterFormData.controls['workstationId'].invalid && (filterFormData.controls['workstationId'].touched || filterFormData.controls['workstationId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['workstationId'].errors.required\">\r\n                                Please select workstation\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label filter-label\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvl\" id=\"skillLvlId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleLevelDropdownSettings\"\r\n                            [(ngModel)]=\"filterData.selectedLvl\" formControlName=\"skillLvl\" [data]=\"LevelList\"\r\n                            [disabled]=\"false\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterFormData.controls['skillLvl'].invalid && (filterFormData.controls['skillLvl'].touched || filterFormData.controls['skillLvl'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['skillLvl'].errors.required\">\r\n                                Please select level\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "1lU3":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/ojt-check-sheet.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: OjtCheckSheetComponent */

    /***/
    function lU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtCheckSheetComponent", function () {
        return OjtCheckSheetComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ojt_check_sheet_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ojt-check-sheet.component.html */
      "+6yo");
      /* harmony import */


      var _ojt_check_sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ojt-check-sheet.component.scss */
      "JqzC");
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


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);

      var OjtCheckSheetComponent = /*#__PURE__*/function () {
        function OjtCheckSheetComponent(modalService, router, skillMatrixService, fb, alertService) {
          _classCallCheck(this, OjtCheckSheetComponent);

          this.modalService = modalService;
          this.router = router;
          this.skillMatrixService = skillMatrixService;
          this.fb = fb;
          this.alertService = alertService;
          this.searchDet = {};
          this.filterData = {};
          this.SingleBranchDropdownSettings = {};
          this.SingleLevelDropdownSettings = {};
          this.SingleDropdownSettings = {};
          this.multipleDropdownSettings = {};
          this.branchAccessList = [];
          this.checksheetList = [];
          this.LevelList = [];
          this.userDet = {};
          this.submitSpinner = false;
          this.listLoading = false;
          this.submitAttempted = false;
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          this.departmentList = [];
          this.workforceList = [];
          this.lineId = [];
          this.dataSpinner = [];
          this.reportBodyCell = {};
        }

        _createClass(OjtCheckSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            console.log(this.userDet);
            this.getLevelList();
            this.getBranchAccessList(); // this.filterList();

            this.SingleBranchDropdownSettings = {
              singleSelection: true,
              idField: 'branchId',
              textField: 'branchName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.SingleLevelDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'levelName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
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
            this.filterFormData = this.fb.group({
              branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              lineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              workstationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              skillLvl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            });
            this.filterList('');
          }
          /* get skill level list
            @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "getLevelList",
          value: function getLevelList() {
            var _this = this;

            this.skillMatrixService.getLevelList('apis/sm/getLevelList').subscribe(function (response) {
              console.log(response);

              if (response.result) {
                _this.LevelList = response.dataList;

                if (_this.LevelList.length > 0) {// this.filterData.selectedLvl = [this.LevelList[0]]; // Set the default value
                }
              }
            });
          }
        }, {
          key: "getSearchList",
          value: function getSearchList(ev) {
            this.clearPagination();
            this.searchDet.searchData = ev;

            if (!ev) {
              this.searchDet.searchInput = '';
            }

            if (this.searchDet.filterFlag) {
              this.filterList('filter');
            } else {
              this.filterList('');
            }
          }
          /* Open filter modal
             @Author Jayshri Kolase
            * @Date August 18, 2023
          */

        }, {
          key: "filterModalOpen",
          value: function filterModalOpen(FilterModal) {
            console.log("In filter");
            this.clearPagination();

            if (!this.searchDet.filterFlag) {// this.filterData.reset();
            } // this.getInterventions();


            this.modalService.open(FilterModal, {
              windowClass: 'filterPopup'
            });
          }
          /* Get Branch Access List on orgId and empId
            @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this2 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              console.log(response);

              if (response.result) {
                _this2.branchAccessList = response.branchAccessList;
                console.log(_this2.branchAccessList);

                if (_this2.branchAccessList.length > 0) {// this.filterData.selectedBranch = [this.branchAccessList[0]]; // Set the default value
                }

                _this2.filterList('');
              } else {
                // this.branchAccessList = [];
                _this2.branchAccessList = [{
                  branchId: _this2.userDet.branch.branchId,
                  branchName: _this2.userDet.branch.name
                }];
              }
            });
          }
          /* Popup save or update workstation modal from top
              @Author Jayshri Kolase
             * @Date August 18, 2023
           */

        }, {
          key: "modalOpen",
          value: function modalOpen(modal, popupClass) {
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
          /* redirect to OJT checksheet details page
             @Author Jayshri Kolase
            * @Date August 18, 2023
          */

        }, {
          key: "goOJTChecksheetDetailPage",
          value: function goOJTChecksheetDetailPage(url, data, flag) {
            if (data == '') {
              var data = {
                isEditable: true,
                isEditPoint: false,
                isEditParameter: false,
                checkSheetId: 0
              };
            } else {
              var data = {
                isEditable: true,
                isEditPoint: false,
                isEditParameter: false,
                checkSheetId: data.id
              };
            }

            data.isEditable = flag;
            var tmpData = Object.assign({}, data, {
              'tmpPagination': this.staticPagination
            });

            if (url) {
              if (tmpData != undefined) {
                localStorage.removeItem('setChecksheetId');
                localStorage.setItem('setChecksheetId', JSON.stringify(tmpData));
              } else {
                localStorage.removeItem('setChecksheetId');
              }

              this.router.navigateByUrl(url);
            }
          }
          /* Get Checksheet List
            @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "filterList",
          value: function filterList(searchfilter) {
            var _this3 = this;

            this.listLoading = true;
            this.submitSpinner = true; // if (this.staticPagination.offset > 0 && this.filterFlag == false && searchfilter == 'filter') {
            //   this.clearPagination();
            // }

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            console.log(this.filterData.slectedBranch);
            var reqData = {
              orgId: this.userDet.organization.orgId,
              offset: this.staticPagination.offset,
              limit: this.staticPagination.itemsPerPage,
              updatedBy: this.userDet.empId,
              createdBy: this.userDet.empId
            };

            if (this.sorting) {
              if (this.sorting.direction != "") {
                reqData.colName = this.sorting.active;
                reqData.orderType = this.sorting.direction.toUpperCase();
              }
            }

            if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
              reqData.search = this.searchDet.searchInput;
            }

            if (searchfilter == 'filter') {
              if (this.filterFormData.invalid) {
                Object.keys(this.filterFormData.controls).forEach(function (key) {
                  _this3.filterFormData.controls[key].markAsDirty();
                });
                return;
              }

              if (this.filterData.selectedBranch != null && this.filterData.selectedBranch.length > 0) {
                for (var i = 0; i < this.filterData.selectedBranch.length; i++) {
                  reqData.branchId = this.filterData.selectedBranch[i].branchId;
                }
              }

              if (this.filterData.selectedLvl != null && this.filterData.selectedLvl.length > 0) {
                for (var _i = 0; _i < this.filterData.selectedLvl.length; _i++) {
                  reqData.skillLvlId = this.filterData.selectedLvl[_i].id;
                }
              }

              if (this.getIDsArray(this.searchDet.workstation) != null && this.getIDsArray(this.searchDet.workstation).length > 0) {
                for (var _i2 = 0; _i2 < this.getIDsArray(this.searchDet.workstation).length; _i2++) {
                  reqData.workstationIds = this.getIDsArray(this.searchDet.workstation);
                }
              }

              if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
                for (var _i3 = 0; _i3 < this.searchDet.deptIds.length; _i3++) {
                  reqData.deptId = this.searchDet.deptIds[0].id;
                }
              }

              if (this.getIDsArray(this.searchDet.line) != null && this.getIDsArray(this.searchDet.line).length > 0) {
                for (var _i4 = 0; _i4 < this.getIDsArray(this.searchDet.line).length; _i4++) {
                  reqData.lineIds = this.getIDsArray(this.searchDet.line);
                }
              }
            } else {
              reqData.branchId = this.userDet.branch.branchId;
            }

            console.log(reqData);
            this.skillMatrixService.getChecksheetList('apis/sm/getChecksheetList', reqData).subscribe(function (response) {
              _this3.submitSpinner = false;
              _this3.listLoading = false;

              if (response.result) {
                if (_this3.staticPagination.page == 1) {
                  _this3.staticPagination.total = response.totalCount;
                  _this3.staticPagination.totalPages = Math.ceil(response.totalCount / _this3.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this3.checksheetList = response.dataList;
                  _this3.staticPagination.listLength = _this3.checksheetList.length;
                } else {
                  _this3.staticPagination.listLength = _this3.checksheetList.length;
                  _this3.listLoading = false;
                  _this3.submitSpinner = false;
                }
              } else {
                _this3.listLoading = false;
                _this3.submitSpinner = false;
                _this3.checksheetList = [];
              }
            }, function (error) {
              _this3.listLoading = false;
            });
          }
          /* Delete Checksheet
            @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "deleteChecksheet",
          value: function deleteChecksheet(data) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this checksheet?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Remove It',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              _this4.dataSpinner[data] = true;

              if (result.isConfirmed) {
                var reqData = {
                  "updatedBy": _this4.userDet.empId,
                  "createdBy": _this4.userDet.empId,
                  "checkSheetId": data.id
                };

                _this4.skillMatrixService.deleteChecksheet('apis/sm/deleteChecksheet', reqData).subscribe(function (data) {
                  _this4.dataSpinner[data.id] = false;

                  if (data.result) {
                    _this4.alertService.success("OJT checksheet removed successfully.");

                    if (_this4.searchDet.filterFlag) {
                      _this4.filterList('filter');
                    } else {
                      _this4.filterList('');
                    }
                  } else {
                    if (data.statusCode == 100) {
                      _this4.alertService.error(data.reason);
                    } else {
                      _this4.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {
                _this4.dataSpinner[data.checksheetPointId] = false;
              }
            });
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.filterList('');
          }
        }, {
          key: "loadMore",
          value: function loadMore(data) {
            this.staticPagination = data;

            if (this.searchDet.filterFlag) {
              this.checksheetList = [];
              this.listLoading = true;
              this.filterList('filter');
            } else {
              this.checksheetList = [];
              this.listLoading = true;
              this.filterList('');
            }
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
          } // filter modal
          // Author simran
          // created date 07/09/2023
          // for closing filter modal on cross

        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.submitAttempted = false;
            this.filterData.selectedBranch = [];
            this.searchDet.deptIds = [];
            this.searchDet.line = [];
            this.searchDet.workstation = [];
            this.filterData.selectedLvl = [];
            this.modalService.dismissAll();
          }
          /*
               Apply filter function
               Author: Mahesh W
               Date : 21 Aug 2023
          */

        }, {
          key: "submitFilterForm",
          value: function submitFilterForm(form) {
            this.submitAttempted = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key) {
                form.controls[key].markAsDirty();
              });
              return;
            }

            this.searchDet.filterFlag = true;
            this.filterList('filter');
            this.modalService.dismissAll();
          } //  Remove filter
          // date 07/09/2023
          // author simran
          // for removing applied filter

        }, {
          key: "removeFilter",
          value: function removeFilter() {
            this.submitAttempted = false;
            this.filterFormData.patchValue({
              branch: [],
              skillLvl: [] // branchId: [this.plantList[0]],
              // skillLvlId: [this.masterLevelList[0]]

            });
            this.filterData.selectedBranch = [];
            this.searchDet.deptIds = [];
            this.searchDet.workstation = [];
            this.searchDet.line = [];
            this.filterData.selectedLvl = []; // this.searchDet.branchId = [this.plantList[0]];
            // this.searchDet.skillLvlId = [this.masterLevelList[0]];

            this.searchDet.filterFlag = false;
            this.filterList('');
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
            console.log(array, fieldToSort);

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
          /* get Department List
           @Author Simran
           * @Date 27/10/2023
          */

        }, {
          key: "getDepartmentList",
          value: function getDepartmentList(branch) {
            var _this5 = this;

            this.skillMatrixService.getDepartmentByBranch("getdepartmentlistbybranchid/" + branch).subscribe(function (res) {
              if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                  /* Use For Add Screen */
                  _this5.departmentList = _this5.setArray(res.deptList, "deptId", "deptName");
                  _this5.departmentList = _this5.sortFunction(_this5.departmentList, "deptName");
                  _this5.searchDet.dept = [_this5.departmentList[0]];

                  if (!_this5.searchDet.addForm) {
                    /* Use For Filter */
                    _this5.searchDet.departmentList = _this5.setArray(res.deptList, "deptId", "deptName"); // this.searchDet.deptIds = this.searchDet.departmentList;
                  }
                } else {
                  _this5.searchDet.departmentList = [];
                }
              } else {
                _this5.searchDet.departmentList = [];
              }
            });
          }
          /* get Cell/Line List
          @Author Simran
          * @Date 27/10/2023
          */

        }, {
          key: "getCellList",
          value: function getCellList(ev) {
            var _this6 = this;

            console.log(ev);
            this.reportBodyCell = {
              branchId: this.branchId,
              deptId: ev
            };
            this.skillMatrixService.getCellList("apis/sm/getCellList/", this.reportBodyCell).subscribe(function (res) {
              console.log(res);

              if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                  /* Use For Add Screen */
                  _this6.cellList = _this6.setArray(res.dataList, "lineId", "lineName");
                  console.log(_this6.cellList);
                  _this6.cellList = _this6.sortFunction(_this6.cellList, "lineName");
                  _this6.searchDet.dept = [_this6.cellList[0]];
                  /* Use For Filter */

                  _this6.searchDet.cellList = _this6.setArray(res.dataList, "lineId", "lineName");
                } else {
                  _this6.cellList = [];
                  _this6.searchDet.cellList = [];
                }
              } else {// this.cellList = [];
                // this.searchDet.cellList = [];
              } // this.branchId = [this.searchDet.cellList[0]];
              // // this.getDepartmentList(this.branchId[0]);

            });
          }
          /* get Workstation List List
           @Author Simran
           * @Date 27/10/2023
          */

        }, {
          key: "getWorkforceList",
          value: function getWorkforceList(data) {
            var _this7 = this;

            // this.workforceList = [];
            // this.listLoader = true;
            console.log(data);
            var req = {
              branchId: this.branchId,
              orgId: this.userDet.organization.orgId,
              deptId: this.deptId,
              lineIds: [data]
            };
            console.log(req); // if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            //   req.deptId = this.searchDet.dept[0].id;
            // }
            // if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            //   req.lineId = this.searchDet.cell[0].id;
            // }

            this.skillMatrixService.getWorkforceDeploymentData("apis/sm/getWorkstationList", req).subscribe(function (res) {
              if (res.result) {
                console.log(res);

                if (res.dataList != null && res.dataList.length > 0) {
                  _this7.workforceList = _this7.setArray(res.dataList, "id", "workstation");
                  _this7.workforceList = _this7.sortFunction(_this7.workforceList, "workstation");
                  _this7.searchDet.workforceList = [_this7.workforceList[0]];
                  console.log(_this7.workforceList);
                } else {
                  _this7.workforceList = [];
                }
              } else {
                _this7.workforceList = [];
              }
            });
          }
          /*
           Common function for set an array for dropdown
           Author: Simran
           Date : 27/10/2023
          */

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
          /*
            Common function For get Ids from array
            Author: Simran
            Date : 27/10/2023
          */

        }, {
          key: "getIDsArray",
          value: function getIDsArray(array) {
            var tmp = [];

            if (array != null && array.length > 0) {
              var _iterator2 = _createForOfIteratorHelper(array),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var element = _step2.value;
                  tmp.push(element.id);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return tmp;
          }
          /*
          Single Select Dropdown onChange function
          Author: Mahesh W
          Date : 21 Aug 2023
          */

        }, {
          key: "onChange",
          value: function onChange(ev, type) {
            if (ev) {
              console.log(ev);

              if (type == "dept") {
                this.cellList = [];
                this.deptId = ev.id;
                this.searchDet.lineId = [];
                this.resetFormField(this.filterFormData, "cellLineId");
                this.resetFormField(this.filterFormData, "workstationId");
                this.getCellList(this.deptId); // this.resetFormField(this.filterFormData, 'lineId')
              }

              if (type == "plant") {
                console.log(ev);
                this.branchId = ev.branchId;
                this.searchDet.deptIds = [];
                this.resetFormField(this.filterFormData, "deptId");
                this.resetFormField(this.filterFormData, "cellLineId");
                this.resetFormField(this.filterFormData, "workstationId");
                this.getDepartmentList(this.branchId);

                if (this.searchDet.addForm) {
                  console.log("inside"); // this.resetFormField(this.filterFormData, "deptId");
                }
              }

              if (type == "cell") {
                console.log(ev);
                this.lineId = ev.id;
                this.searchDet.work = [];
                this.resetFormField(this.filterFormData, "workstationId");
                this.getWorkforceList(this.lineId);
              }
            } else {
              if (type == "plant") {
                if (this.searchDet) {
                  this.departmentList = [];
                  this.searchDet.departmentList = [];
                  this.cellList = [];
                  this.searchDet.cellList = []; // this.resetFormField(this.filterData, "deptIds");
                  // this.resetFormField(this.stakeholderForm, "deptId");
                  // this.resetFormField(this.stakeholderForm, 'lineId');

                  this.searchDet.lineId = [];
                } else {// this.resetFormField(this.stakeholderForm, "empId");
                }
              } else if (type == 'dept') {
                // this.resetFormField(this.stakeholderForm, 'lineId');
                this.cellList = [];
                this.searchDet.cellList = [];
                this.searchDet.lineId = [];
              }
            }
          }
        }, {
          key: "resetFormField",
          value: function resetFormField(form, keyName) {
            Object.keys(form.controls).forEach(function (key) {
              if (key == keyName) {
                form.get(keyName).reset();
                form.get(keyName).markAsPristine();
                form.get(keyName).markAsUntouched();
              }
            });
          }
        }, {
          key: "sortFunction",
          value: function sortFunction(array, key) {
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
          /*
              Multi Select Dropdown onChange function
              Author: Simran
              Date : 27/10/2023
          */

        }, {
          key: "onChangeAll",
          value: function onChangeAll(ev, type) {
            if (ev) {
              console.log('Select All action');
            } else {
              console.log('Unselect All action');
            }
          }
        }]);

        return OjtCheckSheetComponent;
      }();

      OjtCheckSheetComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__["SkillMatrixService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }];
      };

      OjtCheckSheetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ojt-check-sheet',
        template: _raw_loader_ojt_check_sheet_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ojt_check_sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__["SkillMatrixService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"]])], OjtCheckSheetComponent);
      /***/
    },

    /***/
    "6xNQ":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/ojt-check-sheet.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: OjtCheckSheetModule */

    /***/
    function xNQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtCheckSheetModule", function () {
        return OjtCheckSheetModule;
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


      var _ojt_check_sheet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ojt-check-sheet-routing.module */
      "ujxQ");
      /* harmony import */


      var _ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ojt-check-sheet.component */
      "1lU3");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _theme_shared_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../theme/shared/components/pagination/pagination.module */
      "PRC2");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");

      var OjtCheckSheetModule = function OjtCheckSheetModule() {
        _classCallCheck(this, OjtCheckSheetModule);
      };

      OjtCheckSheetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_4__["OjtCheckSheetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _ojt_check_sheet_routing_module__WEBPACK_IMPORTED_MODULE_3__["OjtCheckSheetRoutingModule"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["TopBarModule"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["LoginInfoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _theme_shared_components_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["LoadingModule"]]
      })], OjtCheckSheetModule);
      /***/
    },

    /***/
    "JqzC":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/ojt-check-sheet.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function JqzC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checksheetinputBox,\n.checksheetinputBox:hover {\n  border-radius: 4px;\n  box-shadow: 0 0 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n\n.extraContent .addRegDiv .addRegBtn,\n.extraContent .addRegDiv .addRegBtn:hover,\n.extraContent .addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 6rem !important;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n\n.tableFixHead th {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9qdC1jaGVjay1zaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBOzs7RUFHSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUoiLCJmaWxlIjoib2p0LWNoZWNrLXNoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrc2hlZXRpbnB1dEJveCxcclxuLmNoZWNrc2hlZXRpbnB1dEJveDpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDFweCAjZWFlMWVhO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5leHRyYUNvbnRlbnQgLmFkZFJlZ0RpdiAuYWRkUmVnQnRuLFxyXG4uZXh0cmFDb250ZW50IC5hZGRSZWdEaXYgLmFkZFJlZ0J0bjpob3ZlcixcclxuLmV4dHJhQ29udGVudCAuYWRkUmVnRGl2IC5hZGRSZWdCdG46Zm9jdXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDZyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcbi50YWJsZUZpeEhlYWQgdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLy8gOmhvc3QgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHtcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gIH0iXX0= */";
      /***/
    },

    /***/
    "ujxQ":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/ojt-check-sheet-routing.module.ts ***!
      \*************************************************************************************************/

    /*! exports provided: OjtCheckSheetRoutingModule */

    /***/
    function ujxQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OjtCheckSheetRoutingModule", function () {
        return OjtCheckSheetRoutingModule;
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


      var _ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ojt-check-sheet.component */
      "1lU3");

      var routes = [{
        path: '',
        component: _ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_3__["OjtCheckSheetComponent"]
      }, {
        path: 'add-ojt-check-sheet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | add-ojt-check-sheet-add-ojt-check-sheet-module */
          "add-ojt-check-sheet-add-ojt-check-sheet-module").then(__webpack_require__.bind(null,
          /*! ./add-ojt-check-sheet/add-ojt-check-sheet.module */
          "SkBa")).then(function (m) {
            return m.AddOjtCheckSheetModule;
          });
        }
      }];

      var OjtCheckSheetRoutingModule = function OjtCheckSheetRoutingModule() {
        _classCallCheck(this, OjtCheckSheetRoutingModule);
      };

      OjtCheckSheetRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OjtCheckSheetRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ojt-check-sheet-ojt-check-sheet-module-es5.js.map