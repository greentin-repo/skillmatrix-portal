(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ojt-plan-ojt-plan-module"],{

/***/ "0FNr":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/ojt-plan/ojt-register/ojt-register.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">{{this.OJTRegiData.title}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\"> <span\r\n                aria-hidden=\"true\">&times;</span> </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding: 0px;\">\r\n        <div class=\"row m-0 padding-tb\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3 insideLabel\">\r\n                        <label for=\"moduleId\" class=\"col-form-label p-0\">Plant&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"branchAccessList\" (onSelect)=\"onChangeBranch($event)\"\r\n                                (onDeSelect)=\"onChange(false,'plant')\" [(ngModel)]=\"ojtPlan.branch\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 insideLabel p-l-5 p-r-5\">\r\n                        <label for=\"dept\" class=\"col-form-label p-0\">Department&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"dept\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                                (onSelect)=\"onChangeDept($event)\" (onDeSelect)=\"onChangeDept(false)\" [data]=\"deptList\"\r\n                                [(ngModel)]=\"ojtPlan.dept\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 insideLabel\">\r\n                        <label for=\"moduleId\" class=\"col-form-label p-0\">Cell/Line&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Cell/Line'\" [settings]=\"SingleDropdownSettings\"\r\n                                (onSelect)=\"onChangeLine($event)\" [data]=\"cellList\" [(ngModel)]=\"ojtPlan.cell\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 insideLabel\">\r\n                        <label for=\"moduleId\" class=\"col-form-label p-0\">Trainer&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Trainer'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"getSortFunction(userTypeList,'trainer')\" [(ngModel)]=\"ojtPlan.trainer\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-block skill-table\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <ng-container *ngFor=\"let x of empDetailsList.columns\">\r\n                                <th class=\"fixedColumn empNameCol\" *ngIf=\"x.field === 'empName'\">\r\n                                    {{ getCombinedHeader()}}\r\n                                </th>\r\n                                <th style=\"text-align: center;\"\r\n                                    *ngIf=\"x.field !== 'empLevel' && x.field !== 'empName' && x.field !== 'empId'\">\r\n                                    {{ getHeadingWithLevel(x.field, x.heading)\r\n                                    }}\r\n                                </th>\r\n                            </ng-container>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <!-- <tr *ngFor=\"let row of empDetailsList.tableData\">\r\n                            <td class=\"actionTd fixedColumn\">{{ row.cmpyEmpId }}</td>\r\n                            <td class=\"actionTd fixedColumn\" style=\"text-align: left;\">\r\n                                {{ row.empName }} (<span>{{ row.empLevel }}</span>)\r\n                            </td>\r\n                            <ng-container *ngFor=\"let column of empDetailsList.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName' && column.field !== 'empLevel' && column.field !== 'workstationId'\">\r\n                                    <td>\r\n                                        <div class=\"checkbox-block form-check\">\r\n                                            Bind the checked state and the change event to the checkbox\r\n                                            <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                [checked]=\"isChecked(row, column.field)\"\r\n                                                (change)=\"onCheckboxChange(row, column.field)\"\r\n                                                [id]=\"'checkbox' + row.empId + '_' + column.field\">\r\n\r\n                                            <label [for]=\"'checkbox' + row.empId + '_' + column.field\"></label>\r\n                                            Use property binding to set for attribute\r\n                                        </div>\r\n                                    </td>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tr> -->\r\n                        <tr *ngFor=\"let row of empDetailsList.tableData\">\r\n                            <td class=\"actionTd fixedColumn\">{{ row.cmpyEmpId }}</td>\r\n                            <td class=\"actionTd fixedColumn\" style=\"text-align: left;\">\r\n                                {{row.empName}}\r\n                            </td>\r\n                            <ng-container *ngFor=\"let column of empDetailsList.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName'\">\r\n                                    <ng-container\r\n                                        *ngIf=\"!isObjectEmpty(isChecked(row,column.field)) && isChecked(row,column.field).status != constant.ELIGIBLE\">\r\n                                        <td class=\"empSkillLevelTd text-center\"\r\n                                            [ngClass]=\"(!isObjectEmpty(isChecked(row, column.field))) ? isChecked(row, column.field).status : ''\">\r\n                                            <label class=\"form-check-label\" for=\"\">\r\n                                                {{!isObjectEmpty(isChecked(row, column.field)) ? isChecked(row,\r\n                                                column.field).level : ''}}\r\n                                            </label>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <ng-container\r\n                                        *ngIf=\"!isObjectEmpty(isChecked(row, column.field)) && isChecked(row,column.field).status == constant.ELIGIBLE\">\r\n                                        <td class=\"empSkillLevelTd\"\r\n                                            (ngClick)=\"column.isChecked = (column.isChecked) ? false : true\">\r\n                                            <!-- <div class=\"checkbox-block form-check\">\r\n                                                <input type=\"checkbox\" class=\"form-check-input\"\r\n                                                    id=\"{{'checkbox' + row.empId + '_' + column.field}}\"\r\n                                                    name=\"emp{{row.empId + '_' + column.field}}\" />\r\n                                                <label class=\"form-check-label\" for=\"\"></label>\r\n                                            </div> -->\r\n                                            <div class=\"checkbox-block form-check\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                    (change)=\"onCheckboxChange(row, column.field)\"\r\n                                                    [id]=\"'checkbox' + row.empId + '_' + column.field\">\r\n                                                <label [for]=\"'checkbox' + row.empId + '_' + column.field\"></label>\r\n                                            </div>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                    <!-- <td >\r\n                                        <div class=\"checkbox-block form-check\">\r\n                                            <label class=\"form-check-label\" for=\"\">\r\n                                                {{isChecked(row, column.field)}}\r\n                                            </label> -->\r\n                                    <!-- <div *ngIf=\"isChecked(row, column.field) == 2\">2</div>\r\n                                            <div *ngIf=\"isChecked(row, column.field) == 3\">3</div> -->\r\n                                    <!-- Bind the checked state and the change event to the checkbox -->\r\n                                    <!-- <div>{{isChecked(row, column.field)}}</div> -->\r\n                                    <!-- <div>{{row.empId}} {{column.field}}</div> -->\r\n                                    <!-- <div>{{onCheckboxChange(row, column.field)}}</div>\r\n                                            <div>{{onCheckboxChange(row, column.field)}}</div> -->\r\n                                    <!-- <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                [checked]=\"isChecked(row, column.field)\"\r\n                                                (change)=\"onCheckboxChange(row, column.field)\"\r\n                                                [(ngModel)]=\"checkboxStates[row.empId + '_' + column.field]\"\r\n                                                [id]=\"'checkbox' + row.empId + '_' + column.field\"> -->\r\n                                    <!-- <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                [checked]=\"isChecked(row, column.field)\"\r\n                                                (change)=\"onCheckboxChange(row, column.field)\"\r\n                                                [id]=\"'checkbox' + row.empId + '_' + column.field\">\r\n                                            <label [for]=\"'checkbox' + row.empId + '_' + column.field\"></label> -->\r\n                                    <!-- Use property binding to set for attribute -->\r\n                                    <!-- </div>\r\n                                    </td> -->\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 footer-buttons\">\r\n                    <button style=\"margin-right: 10px;\" type=\"submit\" class=\"btn submitBtn m-l-5\" aria-label=\"Submit\"\r\n                        [disabled]=\"submitLoader\" (click)=\"submitOJTRegi('SAVE')\">\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"load-text\">\r\n                            Loading...</span>\r\n                        <span *ngIf=\"!isSubmitSpinner\" class=\"btn-text\">Save</span>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                        (click)=\"closeModal()\">Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "CaMb":
/*!*********************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-plan.component.ts ***!
  \*********************************************************************/
/*! exports provided: OjtPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OjtPlanComponent", function() { return OjtPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ojt_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ojt-plan.component.html */ "F/GQ");
/* harmony import */ var _ojt_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ojt-plan.component.scss */ "mUek");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skilling.service */ "Sh6i");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);














let OjtPlanComponent = class OjtPlanComponent {
    constructor(router, modalConfig, modalService, apiService, alertService, fb, Constant) {
        this.router = router;
        this.modalConfig = modalConfig;
        this.modalService = modalService;
        this.apiService = apiService;
        this.alertService = alertService;
        this.fb = fb;
        this.filterFlag = false;
        this.submitAttempted = false;
        this.isDropdownOpen = false;
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.SingleDropdownTypeSettings = {};
        this.searchDet = {};
        this.constant = {};
        this.worksatationData = [];
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0,
        };
        this.ojtPlanList = [];
        this.dataSpinner = [];
        this.deptList = [];
        this.branchAccessList = [];
        this.userDet = {};
        this.listLoading = false;
        this.viewPlanData = [];
        this.tableData = [];
        this.cellList = [];
        this.isAppliedFilter = false;
        this.regiList = [
            { id: 1, type: "Register OJT Plan" },
        ];
        this.exportingDetails = {};
        modalConfig.backdrop = 'static';
        modalConfig.keyboard = false;
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem("userDet"));
        this.getBranchAccessList();
        this.getOJTPlanList("");
        this.formdata = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
        });
        this.SingleDropdownTypeSettings = {
            singleSelection: true,
            idField: "id",
            textField: "type",
            allowSearchFilter: false,
            itemsShowLimit: 1,
            showSelectedItemsAtTop: true,
            closeDropDownOnSelection: true,
        };
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
    }
    getBranchAccessList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = res.branchAccessList;
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    this.branchAccessList = [
                        {
                            id: this.userDet.branch.branchId,
                            name: this.userDet.branch.name,
                        },
                    ];
                }
            }
            else {
                this.branchAccessList = [
                    {
                        id: this.userDet.branch.branchId,
                        name: this.userDet.branch.name,
                    },
                ];
            }
        });
    }
    /* Change branch selction
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    onChangeBranch(event) {
        console.log(event);
        // this.getDeptList(event);
        this.searchDet.cell = [];
        this.searchDet.dept = [];
        this.searchDet.deptList = [];
        this.cellList = [];
        // this.getCellList();
        this.getDeptList();
    }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getDeptList() {
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            this.apiService
                .getdepartmentlistbybranchid("getdepartmentlistbybranchid/" + this.searchDet.branch[0].id)
                .subscribe((response) => {
                if (response.result) {
                    if (response.deptList != null && response.deptList.length > 0) {
                        /* Use For Add Screen */
                        this.deptList = this.setArray(response.deptList, "deptId", "deptName");
                        /* Use For Filter */
                        this.searchDet.deptList = this.setArray(response.deptList, "deptId", "deptName");
                        console.log(response);
                        if (this.ojtPlanList == null || this.ojtPlanList.length == 0) {
                            this.getOJTPlanList("");
                        }
                    }
                }
                else {
                    this.deptList = [];
                }
            });
        }
    }
    onChangeDept(event) {
        console.log(event);
        this.searchDet.dept = [{ id: event.id, name: event.name }];
        this.cellList = [];
        this.searchDet.cell = [];
        this.searchDet.cell = null;
        this.getCellList();
    }
    getCellList() {
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            var req = {
                branchId: this.searchDet.branch[0].id
            };
            if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
                req.deptId = this.searchDet.dept[0].id;
            }
            this.apiService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
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
    getFilterList(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach((key) => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.isAppliedFilter = true;
        if (form.value.branch != undefined || form.value.cell != undefined) {
            this.searchDet.filterFlag = true;
        }
        this.clearPagination();
        this.searchDet.filterPopupOpen = false;
        this.modalService.dismissAll();
        this.getOJTPlanList("Filter");
    }
    getSearchListData(ev) {
        // this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = "";
        }
        if (this.filterFlag) {
            this.getOJTPlanList("filter");
        }
        else {
            this.getOJTPlanList("");
        }
    }
    // Get OJT Plan List
    getOJTPlanList(searchfilter) {
        this.listLoading = true;
        if (this.staticPagination.offset > 0 &&
            this.filterFlag == false &&
            searchfilter == "filter") {
            this.clearPagination();
        }
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset =
                (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let reqData = {
            orgId: this.userDet.organization.orgId,
            offset: this.staticPagination.offset,
            limit: this.staticPagination.itemsPerPage,
        };
        if (this.sorting) {
            if (this.sorting.direction != "") {
                reqData.colName = this.sorting.active;
                reqData.orderType = this.sorting.direction;
            }
        }
        if (this.searchDet.searchData &&
            this.searchDet.searchInput &&
            this.searchDet.searchInput != "") {
            reqData.search = this.searchDet.searchInput;
        }
        // if (searchfilter == "filter") {
        //   if (this.formdata.invalid) {
        //     Object.keys(this.formdata.controls).forEach((key) => {
        //       this.formdata.controls[key].markAsDirty();
        //     });
        //     return;
        //   }
        // }
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            reqData.branchId = this.searchDet.branch[0].id;
        }
        else {
            reqData.branchId = this.userDet.branch.branchId;
        }
        if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            reqData.deptIds = [this.searchDet.dept[0].id];
        }
        if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            reqData.lineIds = this.getIDsArray(this.searchDet.cell);
        }
        // if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
        //   for (let i = 0; i < this.cellList.length; i++) {
        //     if (this.cellList[i].lineId == this.searchDet.cell[0].id) {
        //       reqData.deptIds = [this.searchDet.cell[0].id];
        //     }
        //   }
        // }
        this.apiService.getOJTPlan("apis/sm/getOJTPlanList", reqData).subscribe((response) => {
            console.log(response);
            this.listLoading = false;
            if (response.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(response.totalMyActionCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.ojtPlanList = response.dataList;
                    console.log(this.ojtPlanList);
                    this.staticPagination.listLength = response.dataList.length;
                }
                else {
                    this.ojtPlanList = [];
                }
            }
            else {
                this.ojtPlanList = [];
            }
            (error) => {
                this.ojtPlanList = [];
                this.listLoading = false;
            };
        }, (error) => {
            this.ojtPlanList = [];
            this.listLoading = false;
        });
    }
    addOJTPlan(modal, data, flag) {
        console.log(data);
        if (data == "") {
            var data = {
                title: "Add OJT Plan",
                isEditable: false,
                // isEditPoint: false,
                // isEditParameter: false,
                planId: 0,
            };
        }
        else {
            var data = data;
            data.title = "Update OJT Plan";
            data.isEditable = true;
            data.planId = data.planId;
        }
        var tmpData = Object.assign({}, data, { 'tmpPagination': this.staticPagination });
        if (modal) {
            if (tmpData != undefined) {
                localStorage.removeItem("ojtPlanDetails");
                localStorage.setItem("ojtPlanDetails", JSON.stringify(tmpData));
            }
            else {
                localStorage.removeItem("ojtPlanDetails");
            }
            var modalRef = this.modalService.open(modal, {
                windowClass: "right",
            });
            modalRef.result.then((result) => {
                if (result === "success") {
                    this.searchDet.selectedRegiType = "";
                }
            }, (reason) => {
                this.getOJTPlanList("");
                console.log(reason);
            });
            modalRef.componentInstance.modalClosed.subscribe(() => {
                this.getOJTPlanList("");
            });
        }
    }
    deleteOJTPlan(data) {
        console.log(data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: "Are You Sure!",
            text: "Do you want to remove this OJT Plan?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7044cd",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Remove It",
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            this.dataSpinner[data.planId] = true;
            if (result.isConfirmed) {
                this.apiService
                    .deleteOJTPlan("apis/sm/deleteOJTPlan/" + data.planId)
                    .subscribe((data) => {
                    this.dataSpinner[data.planId] = false;
                    if (data.result) {
                        this.alertService.success("OJT Plan Deleted Sucessfully");
                        this.getOJTPlanList("");
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error("Error Occurred While Deleting Data. Please Try Again");
                        }
                    }
                });
            }
            else {
                this.dataSpinner[data.planId] = false;
            }
        });
    }
    filterModalOpen(modal) {
        console.log("In filter");
        if (!this.filterFlag) {
            // this.filterData.reset();
        }
        this.modalService.open(modal, {
            windowClass: "filterPopup",
        });
    }
    /*
       Common function for set an array for dropdown
       Author: Jayshri Kolase
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
    /*
      Common function For get Ids from array
      Author: Mahesh W
      Date : 21 Aug 2023
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
    viewPlan(data) {
        console.log(data);
        this.apiService.getOJTPlanDetails('apis/sm/getOJTPlanDetails/' + data.planId).subscribe((res) => {
            console.log(res);
            if (res.result) {
                console.log(res);
                res.ojtPlan.column.push({
                    "field": "assessmentType",
                    "heading": "Assessment Type"
                });
                res.ojtPlan.column.push({
                    "field": "assessmentStatus",
                    "heading": "Safety Assessment Status"
                });
                this.viewPlanData = res.ojtPlan;
                this.tableData = this.viewPlanData.ojtRegiList;
                if (this.tableData != null && this.tableData.length > 0) {
                    this.viewPlanData.trainer = this.tableData[0].trainerName;
                }
                const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
                this.viewPlanData.updatedDate = datePipe.transform(this.viewPlanData.updatedDate, 'yyyy-MM-dd');
                console.log(this.viewPlanData);
                console.log(this.tableData);
                this.getWorkstationList();
            }
        });
    }
    handleIconClick(x) {
        this.viewPlan(x);
        this.modalOpen(this.rightModal, "right");
    }
    modalOpen(modal, popupClass) {
        const modalElement = this.rightModal.nativeElement;
        this.modalService.open(modal, {
            windowClass: popupClass,
        });
    }
    sortData(sort) {
        this.sorting = sort;
        this.getOJTPlanList("");
    }
    loadMore(data) {
        this.staticPagination = data;
        this.ojtPlanList = [];
        this.listLoading = true;
        if (this.filterFlag) {
            this.getOJTPlanList("filter");
        }
        else {
            this.getOJTPlanList("");
        }
        // this.getTrainingTestDetails();
    }
    clearPagination() {
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0,
        };
    }
    selectedRegi(type) {
        localStorage.removeItem('ojtPlanDetails');
        if (type) {
            if (type === 'Register OJT Plan') {
                // Open the AddOjtPlan modal
                this.addOJTPlan(this.AddOjtPlan, '', true);
            }
            else if (type === 'Register OJT') {
                // Open the OJTRegi modal
                this.OJTRegistration(this.OJTRegi, '', true);
            }
        }
    }
    OJTRegistration(modal, data, flag) {
        console.log(data);
        if (data == "") {
            var data = {
                title: "OJT Registration",
                isEditable: false,
            };
        }
        else {
            var data = data;
            data.title = "OJT Registration";
            data.isEditable = true;
            data.planId = data.planId;
        }
        console.log(data);
        localStorage.setItem("OJTRegiData", JSON.stringify(data));
        if (modal) {
            var modalRef = this.modalService.open(modal, {
                windowClass: "right",
            });
            this.getOJTPlanList("");
            modalRef.result.then((result) => {
                if (result === "success") {
                    this.searchDet.selectedRegiType = [];
                    this.getOJTPlanList("");
                }
            }, (reason) => {
                console.log(reason);
                this.getOJTPlanList("");
            });
        }
    }
    resetSelectedRegiType() {
        console.log("resetSelectedRegiType() called");
        this.searchDet.selectedRegiType = [];
    }
    /*
    Remove Filter
     @Author Saurabh salunke
  * @Date August 31, 2023
  */
    removeFilter() {
        this.submitAttempted = false;
        this.formdata.reset();
        this.searchDet.branch = [];
        this.searchDet.dept = [];
        this.searchDet.cell = [];
        this.isAppliedFilter = false;
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.submitAttempted = false;
        this.ojtPlanList = [];
        // this.getDeptList(this.branchAccessList[0]);
        // this.cellList();
        this.getOJTPlanList("");
    }
    /* SHow Color code
       @Author Jayshri Kolase
      * @Date Oct 11, 2023
    */
    getColorClass(row, column) {
        var _a, _b;
        if (row && row.workstation && row.workstation === column.field) {
            // Check if the workstation matches the column field
            return "#ffff00"; // Set the background color to yellow
        }
        else {
            // If the workstation does not match, check the skill level
            const requireSkillLevel = (_a = row[column.field]) === null || _a === void 0 ? void 0 : _a.requireSkillLevel;
            const currentSkillLevel = (_b = row[column.field]) === null || _b === void 0 ? void 0 : _b.currentSkillLevel;
            if (requireSkillLevel && currentSkillLevel) {
                if (currentSkillLevel.currentSkillLevelId >= requireSkillLevel.currentSkillLevelId) {
                    return "#99cd3a"; // Set the background color to green
                }
            }
        }
        return "#FFFFFF"; // Default background color
    }
    /* get Current Skill Level
      @Author Jayshri Kolase
     * @Date Oct 11, 2023
   */
    getCurrentSkillLevel(rowData, column) {
        if (column == rowData.workstation) {
            return rowData[column].requireSkillLevel;
        }
        else if (rowData[column].requireSkillLevel == rowData.currentLvl) {
            return rowData.currentLvl;
        }
        return null;
    }
    // || rowData.currentSkillLvlId > rowData[column].requireSkillLevelId
    getRequireSkillLevel(field) {
        const ojtRegiList = this.viewPlanData.ojtRegiList;
        const matchingObject = ojtRegiList.find((item) => field in item);
        if (matchingObject) {
            for (const key in matchingObject) {
                if (matchingObject.hasOwnProperty(key) && key === field) {
                    const fieldData = matchingObject[field];
                    return fieldData.requireSkillLevel;
                }
            }
        }
        else {
            return "";
        }
    }
    /* Get Workstation List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getWorkstationList() {
        if (this.viewPlanData) {
            let getReq = {
                "orgId": this.userDet.organization.orgId,
                "branchId": this.viewPlanData.branchId,
                "deptId": this.viewPlanData.deptId,
                "lineIds": [this.viewPlanData.lineId]
            };
            console.log(getReq);
            this.apiService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
                console.log(response);
                if (response.result) {
                    this.worksatationData = response.dataList;
                }
                else {
                    this.worksatationData = [];
                }
            });
        }
    }
    /*
       Combined Header Employee Name and Employee Level
       Author: Mahesh W
       Date : 11 Oct 2023
    */
    getCombinedHeader() {
        const empLevelColumn = this.viewPlanData.column.find(column => column.field === 'empName');
        return ` ${empLevelColumn.heading}`;
    }
    /* Get Heading With Level
      @Author Jayshri Kolase
     * @Date Oct 10, 2023
   */
    getHeadingWithLevel(field, heading) {
        const workstationMatch = this.worksatationData.find(item => item.workstation === field);
        if (workstationMatch) {
            return `${heading} (${workstationMatch.levelName})`;
        }
        else {
            return heading;
        }
        // const columnMatch = this.columns.find(column => column.field === field);
        // return columnMatch ? columnMatch.heading : field;
    }
    isObjectEmpty(objectName) {
        return Object.keys(objectName).length == 0;
    }
    isChecked(row, field) {
        let obj = {};
        // this.isSelected(row, field);
        for (let item in row) {
            if (field == item) {
                //Condition 1
                if (row[item].hasOwnProperty("currentSkillLevel") && row[item].hasOwnProperty("currentSkillLevelId")) {
                    if (row[item].currentSkillLevelId == row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId > row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId + 1 == row[item].requireSkillLevelId) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].requireSkillLevelId > row[item].currentSkillLevelId + 1) {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                }
                else {
                    if (row[item].requireSkillLevelId == 1) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].requireSkillLevel };
                    }
                    else {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].requireSkillLevel };
                    }
                }
            }
        }
        return obj;
    }
    getSortFunction(array, fieldToSort) {
        console.log(array, fieldToSort);
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
    exportExcelReport() {
        let headers = [];
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_11__["Workbook"]();
        let worksheet = workbook.addWorksheet("OJT Plan", {});
        worksheet.addRow(["Plant", "Cell", "OJT Plan Date", "Trainer"]);
        worksheet.addRow([this.viewPlanData.branchName, this.viewPlanData.deptName, this.viewPlanData.updatedDate, this.viewPlanData.trainer]);
        worksheet.addRow([]);
        let tableHeader = [];
        this.viewPlanData.column.forEach(element => {
            if (element.field == 'cmpyEmpId' || element.field == 'empName') {
                tableHeader.push(element.heading);
            }
        });
        this.viewPlanData.column.forEach(element => {
            if (element.field !== 'empId' && element.field !== 'cmpyEmpId' && element.field !== 'empName') {
                tableHeader.push(element.heading);
            }
        });
        worksheet.addRow(tableHeader);
        let highlightCellIndexes = [];
        this.viewPlanData.ojtRegiList.forEach((rowData, rowIndex) => {
            let tableRow = [];
            this.viewPlanData.column.forEach(column => {
                if (column.field !== 'empId' && (column.field == 'cmpyEmpId' || column.field == 'empName')) {
                    tableRow.push(rowData[column.field]);
                }
            });
            this.viewPlanData.column.forEach((column, colIndex) => {
                if (column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName' && rowData !== 'empName' && rowData !== 'cmpyEmpId') {
                    if (rowData.hasOwnProperty(column.field) && rowData.workstation === column.field) {
                        tableRow.push(this.getCurrentSkillLevel(rowData, column.field));
                        highlightCellIndexes.push({
                            row: rowIndex,
                            col: colIndex,
                            color: this.getColorClass(rowData, column)
                        });
                    }
                    else {
                        tableRow.push("");
                    }
                }
            });
            worksheet.addRow(tableRow);
        });
        //Bold headers
        worksheet.getRow(1).font = {
            bold: true
        };
        worksheet.getRow(4).font = {
            bold: true
        };
        //Highlighting cells
        highlightCellIndexes.forEach(element => {
            let row = worksheet.getRow(element.row + 5);
            row.getCell(element.col + 3).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: element.color.replace('#', '') }
            };
            row.getCell(element.col + 3).border = {
                top: { style: 'double', color: { argb: 'f6f6f6' } },
                left: { style: 'double', color: { argb: 'f6f6f6' } },
                bottom: { style: 'double', color: { argb: 'f6f6f6' } },
                right: { style: 'double', color: { argb: 'f6f6f6' } }
            };
        });
        worksheet.columns.forEach((column, index) => {
            if (index == 0)
                column.width = 20;
            else if (index == 1)
                column.width = 30;
            else
                column.width = 15;
        });
        workbook.xlsx.writeBuffer().then((data) => {
            var excelName = "OJT Plan Details";
            let blob = new Blob([data], { type: "xlsx" });
            file_saver__WEBPACK_IMPORTED_MODULE_12__["saveAs"](blob, excelName + ".xlsx");
        });
    }
    canEditStartDate(x) {
        const today = new Date();
        const startDate = new Date(x.staretDate); // Assuming x.staretDate is a valid date string
        // Calculate the difference in milliseconds between today and the start date
        // const timeDiff = startDate.getTime() - today.getTime();
        if (startDate.getTime() > today.getTime() && startDate.getTime() != today.getTime()) {
            return true;
        }
        else {
            return false;
        }
        // // Check if the start date is equal to or earlier than today
        // // and if the difference is less than or equal to -1 day (86400000 milliseconds)
        // return timeDiff <= -86400000;
    }
    getFormatDate(date) {
        const inputDate = new Date(date);
        const day = String(inputDate.getDate()).padStart(2, "0");
        const month = String(inputDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1.
        const year = inputDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        console.log(formattedDate);
        if (formattedDate == "NaN/NaN/NaN") {
            return " ";
        }
        else {
            return formattedDate;
        }
    }
    getExportingDetails(x) {
        console.log(x);
        this.apiService.getOJTPlanDetails('apis/sm/getOJTPlanDetails/' + x.planId).subscribe((res) => {
            console.log(res);
            if (res.result) {
                console.log(res);
                this.exportingDetails = res.ojtPlan;
                if (this.exportingDetails.ojtRegiList.length > 0 && this.exportingDetails.ojtRegiList != null) {
                    for (let i = 0; i < this.exportingDetails.ojtRegiList.length; i++) {
                        this.exportingDetails.ojtRegiList[i].srNo = i + 1;
                        this.exportingDetails.ojtRegiList[i].ojtPlanDate = this.getFormatDate(this.exportingDetails.startDate);
                        this.exportingDetails.ojtRegiList[i].ojtActualDate = this.getFormatDate(this.exportingDetails.ojtRegiList[i].actualOJTDate);
                        this.exportingDetails.ojtRegiList[i].examPlanDate = this.getFormatDate(this.exportingDetails.ojtRegiList[i].assessmentCreatedDate);
                        this.exportingDetails.ojtRegiList[i].dateOfExamAttended = this.getFormatDate(this.exportingDetails.ojtRegiList[i].assessmentUpdatedDate);
                        this.exportingDetails.ojtRegiList[i].status = this.exportingDetails.status;
                    }
                }
                console.log(this.exportingDetails);
                this.exportToExcel();
            }
        });
    }
    exportToExcel() {
        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_11__["Workbook"]();
        const worksheet = workbook.addWorksheet("Skill Matrix");
        const greenFill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "99cd3a" },
        };
        const yellowFill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFFFFF00" },
        };
        const headers = [
            "SR NO",
            "OJT PLAN DATE",
            "OJT Actual Date",
            "EXAM PLAN DATE",
            "DATE OF EXAM ATTENDED",
            "EMPL. I.D.",
            "NAME OF OE",
            "CELL NAME",
            "WORKSTATION",
            "SKILL LEVEL PLAN",
            "PASS / FAIL"
        ];
        const commonColumnWidth = 15; // You can adjust this value as needed
        for (let i = 1; i <= headers.length; i++) {
            worksheet.getColumn(i).width = commonColumnWidth;
        }
        const mainHeading = Array(headers.length).fill("");
        const centerIndex = Math.floor(headers.length / 2);
        const monthName = this.getMonthName(this.exportingDetails.monthValue);
        const subHeading = Array(headers.length).fill("");
        subHeading[centerIndex] = "MONTH :- " + monthName + " " + this.exportingDetails.yearValue;
        mainHeading[centerIndex] = "Workstaion";
        // Set the height of the first row
        worksheet.getRow(1).height = 30;
        worksheet.getRow(2).height = 30;
        // Make the text in the first row bold
        worksheet.getRow(1).font = {
            bold: true,
        };
        worksheet.getRow(2).font = {
            bold: true,
        };
        worksheet.mergeCells("A1:K1"); // Merge cells from A1 to K1
        worksheet.getCell("A1").value = this.exportingDetails.lineName; // Set the value for the merged cell
        worksheet.getCell("A1").fill = greenFill; // Apply the fill color
        worksheet.getCell("A1").alignment = {
            horizontal: "center",
            vertical: "middle",
            wrapText: true,
        }; // Center the text
        // Set the height of the merged cell
        worksheet.getCell("A1").border = {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
        };
        worksheet.mergeCells("A2:K2"); // Merge cells from A1 to K1
        // worksheet.getCell("A2").value = "MONTH :- " + monthName + " " + - +" " + this.exportingDetails.yearValue // "-" Negative sign in the concatinatating is causing extra 0 in the yearValue
        worksheet.getCell("A2").value = "MONTH :- " + monthName + " " + this.exportingDetails.yearValue;
        worksheet.getCell("A2").fill = yellowFill; // Apply the fill color
        worksheet.getCell("A2").alignment = {
            horizontal: "center",
            vertical: "middle",
            wrapText: true,
        }; // Center the text
        // Set the height of the merged cell
        worksheet.getCell("A2").border = {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
        };
        worksheet.addRow(headers);
        // Add data to the worksheet
        this.exportingDetails.ojtRegiList.forEach((item) => {
            const row = [
                item.srNo,
                item.ojtPlanDate,
                item.ojtActualDate,
                item.examPlanDate,
                item.dateOfExamAttended,
                item.cmpyEmpId,
                item.empName,
                item.lineName,
                item.workstation,
                item.desiredLvl,
                item.assessmentStatus
            ];
            worksheet.addRow(row);
        });
        // Generate Excel file
        workbook.xlsx.writeBuffer().then((data) => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "OJT_Plan.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
    getMonthName(monthValue) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (monthValue >= 1 && monthValue <= 12) {
            return monthNames[monthValue - 1];
        }
        return undefined; // Return undefined for invalid month values
    }
};
OjtPlanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
OjtPlanComponent.propDecorators = {
    AddOjtPlan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["AddOjtPlan",] }],
    OJTRegi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["OJTRegi",] }],
    rightModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["rightModal",] }]
};
OjtPlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-ojt-plan",
        template: _raw_loader_ojt_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ojt_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"], Object])
], OjtPlanComponent);



/***/ }),

/***/ "F/GQ":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/ojt-plan/ojt-plan.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-11 m-auto\">\r\n        <app-topBar title=\"OJT Plan\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-6\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"p-l-0 p-r-5 col-9\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                                (click)=\"getSearchListData(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchListData(false)\"></span>\r\n                            <input style=\"border-bottom: 1px solid #7044cd;\" type=\"text\" class=\"form-control\"\r\n                                name=\"searchInput\" placeholder=\"Search by department name, line name, status..\"\r\n                                [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchListData(true) : ''\" autocomplete=\"off\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <!-- <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                Applied</span>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-2 p-r-5 p-l-5 form-group\"></div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <!-- <ng-multiselect-dropdown [ngClass]=\"'ojtRegDropDown'\" name=\"opt\"\r\n                        style=\"border: none;width: 50%;right: 3rem;\" class=\"addRegBtn m-0\" [placeholder]=\"'Create'\"\r\n                        (onSelect)=\"selectedRegi($event)\" [settings]=\"SingleDropdownTypeSettings\" [data]=\"regiList\"\r\n                        [(ngModel)]=\"searchDet.selectedRegiType\">\r\n                    </ng-multiselect-dropdown> -->\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" title=\"Register OJT Plan\"\r\n                        (click)=\"selectedRegi('Register OJT Plan')\"><i class=\"fa fa-plus m-r-10\" style=\"text-align: center;\"></i>Register OJT Plan</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"Branch\" class=\"actionTh fixedColumn\">Plant</th>\r\n                        <th mat-sort-header=\"PlanId\"> OJT Plan No.</th>\r\n                        <th mat-sort-header=\"Month\" class=\"\">Month</th>\r\n                        <th mat-sort-header=\"Year\" class=\"\">Year</th>\r\n                        <th mat-sort-header=\"StaretDate\" class=\"\">OJT Start Date</th>\r\n                        <th mat-sort-header=\"DeptName\" class=\"\">Department</th>\r\n                        <th mat-sort-header=\"Line\" class=\"\">Cell/Line</th>\r\n                        <th mat-sort-header=\"PlanedByName\" class=\"\">Planned By</th>\r\n                        <th mat-sort-header=\"Status\" class=\"pending actionTh fixedColumn\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\" style=\"text-align: center;\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of ojtPlanList\">\r\n                        <td class=\"actionTd fixedColumn text-left\">{{x.branch}}</td>\r\n                        <td>{{x.planId}}</td>\r\n                        <td>{{x.staretDate | date:'MMMM'}}</td>\r\n                        <td>{{x.staretDate | date:'yyyy'}}</td>\r\n                        <td>{{x.staretDate | date: 'dd-MM-yyyy' }}</td>\r\n                        <td>{{x.deptName}}</td>\r\n                        <td>{{x.lineName}}</td>\r\n                        <td>{{x.planedByName}}</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':x.status == 'PUBLISH','pending':x.status == 'SAVE'}\">\r\n                            {{x.status || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn\" style=\"text-align: right;\">\r\n                            <!-- <i class=\"fa fa-edit editIcon\" *ngIf=\"x.status != 'PUBLISH'\" (click)=\"addOJTPlan(AddOjtPlan,x,true)\"></i> -->\r\n                            <!-- <i class=\"fa fa-edit editIcon\" *ngIf=\"canEditStartDate(x)\" (click)=\"addOJTPlan(AddOjtPlan,x,true)\"></i> -->\r\n                            <!-- Before using [style.visibility] -->\r\n                            <i class=\"fa fa-edit editIcon\"\r\n                                [style.visibility]=\"canEditStartDate(x) ? 'visible' : 'hidden'\"\r\n                                (click)=\"addOJTPlan(AddOjtPlan,x,true)\"></i>\r\n                            <!-- [style.visibility] is used to align the icons properly in one line & should not shift their position by Sanket B. -->\r\n                            &nbsp; &nbsp;\r\n                            <i class=\"fa fa-eye editIcon\" (click)=\"handleIconClick(x)\"></i>\r\n                            &nbsp; &nbsp;\r\n                            <!-- <i *ngIf=\"x.status != 'PUBLISH'\" class=\"fas fa-trash-alt deleteIcon\" (click)=\"deleteOJTPlan(x)\"></i> -->\r\n                            <!-- Before using [style.visibility] -->\r\n                            <i class=\"fas fa-trash-alt deleteIcon\"\r\n                                [style.visibility]=\"x.status != 'PUBLISH' ? 'visible' : 'hidden'\"\r\n                                (click)=\"deleteOJTPlan(x)\"></i>\r\n                            <!-- [style.visibility] is used to align the icons properly in one line & should not shift their position by Sanket B. -->\r\n                            &nbsp; &nbsp;\r\n                            <i style=\"color:#7044CD;cursor: pointer\">\r\n                                <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid\"\r\n                                    (click)=\"getExportingDetails(x)\">\r\n                            </i>\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n    <ng-template #AddOjtPlan let-modal let-c=\"close\">\r\n        <app-add-ojt-plan></app-add-ojt-plan>\r\n    </ng-template>\r\n    <ng-template #OJTRegi let-modal let-c=\"close\">\r\n        <app-ojt-register (childComponentClosed)=\"resetSelectedRegiType()\"></app-ojt-register>\r\n    </ng-template>\r\n</div>\r\n\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4> <button type=\"button\" class=\"close\"\r\n            aria-label=\"Close\" (click)=\"d('Cross click')\"> <span aria-hidden=\"true\">&times;</span> </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"getFilterList(formdata)\" autocomplete=\"off\" class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\"> <perfect-scrollbar>\r\n                <div class=\"row m-b-0\"> <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                            (onSelect)=\"onChangeBranch($event)\" [data]=\"getSortFunction(branchAccessList,'plant')\"\r\n                            [(ngModel)]=\"searchDet.branch\" [disabled]=\"false\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && formdata.controls['branch'].invalid && (formdata.controls['branch'].touched || formdata.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"formdata.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\"> <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\" formControlName=\"dept\"\r\n                            (onSelect)=\"onChangeDept($event)\" [placeholder]=\"'Select Department'\"\r\n                            [settings]=\"SingleDropdownSettings\" [data]=\"getSortFunction(searchDet.deptList,'dept')\"\r\n                            [(ngModel)]=\"searchDet.dept\">\r\n                        </ng-multiselect-dropdown> </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell</label>\r\n                    <div class=\"col-sm-12\"> <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\" formControlName=\"cell\"\r\n                            [placeholder]=\"'Select Cell'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.cellList,'cell')\" [(ngModel)]=\"searchDet.cell\">\r\n                        </ng-multiselect-dropdown> </div>\r\n                </div>\r\n            </perfect-scrollbar> </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\"> <span *ngIf=\"submitSpinner\"\r\n                    class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span> </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- View OJT Plan Details Modal-->\r\n<ng-template #rightModal id=\"rightModal\" let-modal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content interDetContent\">\r\n        <div class=\"modal-header mt-1 mb-1\" style=\"border-bottom:2px solid #c8e4f5; width: 100%;\">\r\n            <div class=\"row\" style=\"width: 100%;\">\r\n                <div class=\"col-2\">\r\n                    <div class=\"input-container\">\r\n                        <label for=\"opt\" class=\"col-form-label p-0\">Plant</label>\r\n                        <input class=\"read-only-input\" type=\"text\" value=\"{{viewPlanData.branchName}}\" readonly>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <div class=\"input-container\">\r\n                        <label for=\"opt\" class=\"col-form-label p-0\">Department</label>\r\n                        <input class=\"read-only-input\" type=\"text\" value=\"{{viewPlanData.deptName}}\" readonly>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-3\">\r\n                    <div class=\"input-container\">\r\n                        <label for=\"opt\" class=\"col-form-label p-0\">Cell</label>\r\n                        <input class=\"read-only-input\" type=\"text\" value=\"{{viewPlanData.lineName}}\" readonly>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <div class=\"input-container\">\r\n                        <label for=\"opt\" class=\"col-form-label p-0\">OJT Plan Date</label>\r\n                        <input class=\"read-only-input\" type=\"text\" value=\"{{viewPlanData.updatedDate}}\" readonly>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-2\">\r\n                    <div class=\"input-container\">\r\n                        <label for=\"opt\" class=\"col-form-label p-0\">Trainer</label>\r\n                        <input class=\"read-only-input\" type=\"text\" value=\"{{viewPlanData.trainer}}\" readonly>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-11\"></div>\r\n                <div class=\"col-1\">\r\n                    <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid btn-excel-export\"\r\n                        (click)=\"exportExcelReport()\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-body fixedHead \">\r\n            <div class=\"table-block skill-table\">\r\n                <div class=\"table-responsive tableFixHead\">\r\n                    <table class=\"table table-bordered\">\r\n                        <thead>\r\n                            <tr>\r\n                                <ng-container *ngFor=\"let column of viewPlanData.column\">\r\n                                    <th class=\"fixedColumn\"\r\n                                        *ngIf=\"column.field == 'cmpyEmpId' || column.field == 'empName' || column.field == 'assessmentStatus'\">\r\n                                        {{ column.heading }}\r\n                                    </th>\r\n                                </ng-container>\r\n                                <ng-container *ngFor=\"let column of viewPlanData.column\">\r\n                                    <ng-container\r\n                                        *ngIf=\"column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName' && column.field !== 'assessmentStatus' && column.field !== 'assessmentType'\">\r\n                                        <th class=\"subHeading\">\r\n                                            {{ column.heading }}\r\n                                            <span>({{ getRequireSkillLevel(column.field) }})</span>\r\n                                        </th>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let rowData of viewPlanData.ojtRegiList\">\r\n                                <ng-container *ngIf=\"rowData.\r\n                                assessmentType !== 'LEVEL'\">\r\n                                    <ng-container *ngFor=\"let column of viewPlanData.column\">\r\n                                        <ng-container *ngIf=\"column.field !== 'empId'\">\r\n                                            <td style=\"text-align: center;\" class=\"fixedColumn\"\r\n                                                *ngIf=\"column.field == 'cmpyEmpId' || column.field == 'empName' || column.field == 'assessmentStatus'\">\r\n                                                {{ rowData[column.field] }} </td>\r\n                                        </ng-container>\r\n                                    </ng-container>\r\n                                    <ng-container *ngFor=\"let column of viewPlanData.column\">\r\n                                        <td *ngIf=\"column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName' && rowData !== 'empName' && rowData !== 'cmpyEmpId'&& column.field !== 'assessmentStatus' && column.field !== 'assessmentType'\"\r\n                                            [ngStyle]=\"{ 'background-color': getColorClass(rowData, column) }\">\r\n                                            <div class=\"checkbox-block form-check\">\r\n                                                <div>\r\n                                                    <!-- Check if rowData has the column.field -->\r\n                                                    <ng-container *ngIf=\"rowData.hasOwnProperty(column.field)\">\r\n                                                        <!-- Check if rowData.workstation and workstationId match the column.field -->\r\n                                                        <ng-container *ngIf=\"rowData.workstation === column.field\">\r\n                                                            <span>\r\n                                                                <!-- {{getCurrentSkillLevel(rowData,column.field)}} -->\r\n                                                                {{rowData.desiredLvl}}\r\n                                                            </span>\r\n                                                        </ng-container>\r\n                                                    </ng-container>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </tr>\r\n                            <tr *ngIf=\"(viewPlanData.ojtRegiList == null || viewPlanData.ojtRegiList.length == 0)\">\r\n                                <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                    Data Not Found\r\n                                </td>\r\n                                <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                    <app-loading></app-loading>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "FDYh":
/*!******************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-plan.module.ts ***!
  \******************************************************************/
/*! exports provided: MY_YEAR_FORMATS, MY_MONTH_FORMATS, OjtPlanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_YEAR_FORMATS", function() { return MY_YEAR_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_MONTH_FORMATS", function() { return MY_MONTH_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OjtPlanModule", function() { return OjtPlanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ojt_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ojt-plan-routing.module */ "FW5w");
/* harmony import */ var _ojt_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ojt-plan.component */ "CaMb");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "ebz3");
/* harmony import */ var _add_ojt_plan_add_ojt_plan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-ojt-plan/add-ojt-plan.component */ "RlAh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _ojt_register_ojt_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ojt-register/ojt-register.component */ "ofuv");
/* harmony import */ var _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../skill-matrix.constant */ "VX2j");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");















const MY_YEAR_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
const MY_MONTH_FORMATS = {
    parse: {
        dateInput: 'MM-YYYY',
    },
    display: {
        dateInput: 'MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
let OjtPlanModule = class OjtPlanModule {
};
OjtPlanModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ojt_plan_component__WEBPACK_IMPORTED_MODULE_4__["OjtPlanComponent"], _add_ojt_plan_add_ojt_plan_component__WEBPACK_IMPORTED_MODULE_6__["AddOjtPlanComponent"], _ojt_register_ojt_register_component__WEBPACK_IMPORTED_MODULE_12__["OjtRegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ojt_plan_routing_module__WEBPACK_IMPORTED_MODULE_3__["OjtPlanRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"]
        ],
        providers: [
            { provide: MY_MONTH_FORMATS, useValue: MY_YEAR_FORMATS },
            { provide: 'Constant', useValue: _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_13__["CONSTANT"] },
        ]
    })
], OjtPlanModule);



/***/ }),

/***/ "FW5w":
/*!**************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-plan-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: OjtPlanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OjtPlanRoutingModule", function() { return OjtPlanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ojt_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ojt-plan.component */ "CaMb");
/* harmony import */ var _add_ojt_plan_add_ojt_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-ojt-plan/add-ojt-plan.component */ "RlAh");





const routes = [
    {
        path: '',
        component: _ojt_plan_component__WEBPACK_IMPORTED_MODULE_3__["OjtPlanComponent"]
    },
    {
        path: 'add-ojt-plan',
        component: _add_ojt_plan_add_ojt_plan_component__WEBPACK_IMPORTED_MODULE_4__["AddOjtPlanComponent"]
    }
];
let OjtPlanRoutingModule = class OjtPlanRoutingModule {
};
OjtPlanRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OjtPlanRoutingModule);



/***/ }),

/***/ "RlAh":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/add-ojt-plan/add-ojt-plan.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddOjtPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOjtPlanComponent", function() { return AddOjtPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_ojt_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-ojt-plan.component.html */ "soj9");
/* harmony import */ var _add_ojt_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-ojt-plan.component.scss */ "uajb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../skilling.service */ "Sh6i");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");










let AddOjtPlanComponent = class AddOjtPlanComponent {
    constructor(modalService, apiService, datepipe, fb, alertService, Constant) {
        this.modalService = modalService;
        this.apiService = apiService;
        this.datepipe = datepipe;
        this.fb = fb;
        this.alertService = alertService;
        this.userDet = {};
        this.ojtPlanData = {};
        this.submitLoader = false;
        this.submitSpinner = false;
        this.branchAccessList = [];
        this.ojtPlan = {};
        this.deptList = [];
        this.cellList = [];
        this.filterFlag = false;
        this.SingleDropdownSettings = {};
        this.SingleDropdownSettingsOjtPlan = {};
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](moment__WEBPACK_IMPORTED_MODULE_7__());
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_7__();
        this.masterLevelList = [];
        this.empDetailsList = {};
        this.filteredEmpData = {};
        this.searchDet = {};
        this.worksatationData = [];
        this.selectedEntries = [];
        this.userTypeList = [];
        this.isSubmitSpinner = false;
        this.ojtPlanDetails = {};
        this.planDetails = {};
        this.selectedWorkstation = {};
        this.constant = {};
        this.errorList = [];
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.userDet);
        const today = new Date();
        this.minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.SingleDropdownSettingsOjtPlan = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: false,
            closeDropDownOnSelection: true,
        };
        // this.getSkillMatrixEmpList();
        // this.ojtPlan.ojtPlanDate = new Date;
        this.getOjtPlanDetails();
        // this.updateCheckboxes();
        this.getMasterSkillLevelList();
    }
    /* get OJT Plan Details
      @Author Jayshri Kolase
     * @Date August 26, 2023
   */
    getOjtPlanDetails() {
        this.ojtPlanData = JSON.parse(localStorage.getItem('ojtPlanDetails'));
        console.log(this.ojtPlanData);
        if (this.ojtPlanData.isEditable && this.ojtPlanData.planId > 0) {
            this.ojtPlan.branch = [{ id: this.ojtPlanData.branchId, name: this.ojtPlanData.branch }];
            // this.ojtPlan.cell = [{ id: this.ojtPlanData.deptId, name: this.ojtPlanData.deptName }];
            // this.ojtPlan.cell[0].deptId = this.ojtPlanData.deptId;
            // this.ojtPlan.ojtPlanDate = new Date(this.ojtPlanData.createdDate);
            var parsedDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.ojtPlanData.createdDate, "YYYY-MM-DDTHH:mm:ss.SSSZ");
            // Format the parsed date into the desired moment.js format
            this.ojtPlan.ojtPlanDate = parsedDate.format("YYYY-MM-DD HH:mm:ss");
            console.log(this.ojtPlan.ojtPlanDate);
            this.getPlanDetailsById(this.ojtPlanData.planId);
        }
        else {
            this.getBranchAccessList();
            // this.getWorkstationList();
            // this.getSkillMatrixEmpList();
        }
    }
    /* gets selected plan details
     @Author Jayshri Kolase
     * @Date August 25, 2023
   */
    getPlanDetailsById(planId) {
        this.apiService.getOJTPlanDetails('apis/sm/getOJTPlanDetails/' + planId).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.ojtPlan) {
                    this.planDetails = response.ojtPlan;
                    if (this.planDetails.ojtRegiList != null && this.planDetails.ojtRegiList.length > 0) {
                        for (let i = 0; i < this.planDetails.ojtRegiList.length; i++) {
                            this.selectedEntries.push({
                                ojtRegisId: this.planDetails.ojtRegiList[i].ojtRegiId,
                                empId: this.planDetails.ojtRegiList[i].oeEmpId,
                                desiredSkillLevelId: this.planDetails.ojtRegiList[i].desiredSkillLvlId,
                                workstationId: this.planDetails.ojtRegiList[i].workstationId,
                                action: "UPDATE"
                            });
                        }
                    }
                    if (this.planDetails.ojtRegiList != null) {
                        this.ojtPlan.trainer = [{ id: this.planDetails.ojtRegiList[0].trainerEmpId, name: this.planDetails.ojtRegiList[0].trainerName }];
                        this.ojtPlan.cell = [{ id: this.planDetails.ojtRegiList[0].lineId, name: this.planDetails.ojtRegiList[0].lineName }];
                        this.ojtPlan.cell[0].deptId = this.planDetails.deptId;
                        this.ojtPlan.dept = [{ id: this.planDetails.ojtRegiList[0].deptId, name: this.planDetails.ojtRegiList[0].deptName }];
                    }
                    console.log(this.ojtPlan.trainer);
                    const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
                    // this.ojtPlan.ojtPlanDate = datePipe.transform(this.planDetails.startDate, 'yyyy-MM-dd');
                    this.ojtPlan.ojtPlanDate = new Date(moment__WEBPACK_IMPORTED_MODULE_7__(this.planDetails.startDate).format("YYYY,MM,DD"));
                    console.log(this.ojtPlan.ojtPlanDate);
                    this.getWorkstationList();
                    this.getUserTypeList();
                    this.getSkillMatrixEmpList();
                }
            }
        });
    }
    /* gets Branch access list on employee
   @Author Jayshri Kolase
  * @Date August 25, 2023
  */
    getBranchAccessList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    console.log(this.branchAccessList);
                    this.branchAccessList = this.sortFunction(this.branchAccessList, 'name');
                    this.ojtPlan.branchId = [this.branchAccessList[0]];
                    // this.ojtPlan.branch = [this.branchAccessList[0]];
                    console.log(this.ojtPlan.branch);
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            // this.ojtPlan.branch = [this.branchAccessList[0]];
            // this.ojtPlan.branchId = [this.branFchAccessList[0]];
            console.log(this.ojtPlan.branch);
            // this.getDeptList(this.ojtPlan.branchId[0]);
            // this.getLineList(this.ojtPlan.branchId[0]);
        });
    }
    /* Change branch selction
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    onChangeBranch(event) {
        this.ojtPlan.branchId = event.branchId;
        console.log(event);
        this.selectedEntries = [];
        this.cellList = [];
        this.ojtPlan.cell = [];
        this.getDeptList(event);
        // this.getLineList(event);
        // this.getWorkstationList();
        // this.getUserTypeList();
    }
    /* get Line list on branch selection
       @Author Jayshri Kolase
      * @Date oct 05, 2023
    */
    getLineList() {
        console.log(this.ojtPlan.dept);
        if (this.ojtPlan.dept != null) {
            const req = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": this.ojtPlan.dept[0].id
            };
            this.apiService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
                if (response.result) {
                    if (response.dataList != null && response.dataList.length > 0) {
                        this.cellList = this.setArray(response.dataList, 'lineId', 'lineName');
                        console.log(this.cellList);
                        if (this.cellList != null && this.cellList.length > 0) {
                            this.cellList = this.sortFunction(this.cellList, 'lineName');
                            // this.ojtPlan.cell = [this.cellList[0]];
                            // this.ojtPlan.cell = [this.cellList[0]];
                            this.getWorkstationList();
                            this.getUserTypeList();
                            this.getSkillMatrixEmpList();
                        }
                    }
                    else {
                        this.cellList = [];
                    }
                }
            });
        }
    }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getDeptList(branch) {
        this.apiService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branch.id).subscribe((response) => {
            if (response.result) {
                if (response.deptList != null && response.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    /* Use For Filter */
                    this.searchDet.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    console.log(response);
                    // this.deptList = response.deptList;
                    // console.log(this.deptList);
                    if (this.deptList != null && this.deptList.length > 0) {
                        console.log(this.deptList[0]);
                        // this.ojtPlan.dept = [this.deptList[0]];
                        console.log(this.ojtPlan.dept);
                        // this.getOjtPlanDetails();
                        this.getLineList();
                        this.getWorkstationList();
                        this.getSkillMatrixEmpList();
                    }
                }
            }
            else {
                this.deptList = [];
            }
        });
    }
    /* Change dept selction
       @Author Shashi
       @Date Sptember 12, 2023
    */
    onChangeDept(data) {
        if (data) {
            console.log(data);
            this.selectedEntries = [];
            this.cellList = [];
            this.ojtPlan.cell = [];
            this.empDetailsList = [];
            this.getLineList();
            // this.getWorkstationList();
            // this.getUserTypeList();
            // this.getSkillMatrixEmpList();
        }
        else {
            this.cellList = [];
            this.selectedEntries = [];
        }
    }
    /* On Change Line
      @Author Jayshri Kolase
     * @Date August 25, 2023
   */
    onChangeLine(data) {
        console.log(data);
        this.selectedEntries = [];
        this.getWorkstationList();
        this.getUserTypeList();
        this.getSkillMatrixEmpList();
    }
    /* Get Workstation List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getWorkstationList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.dept != null && this.ojtPlan.cell != null) {
            let deptId;
            if (this.ojtPlanData.isEditable) {
                deptId = this.ojtPlan.cell[0].deptId;
            }
            else {
                // for (let i = 0; i < this.cellList.length; i++) {
                //   if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                deptId = this.ojtPlan.dept[0].id;
                //   }
                // }
            }
            let getReq = {
                "orgId": this.userDet.organization.orgId,
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId,
                "lineIds": [parseInt(this.ojtPlan.cell[0].id)]
            };
            console.log(getReq);
            this.apiService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
                console.log(response);
                if (response.result) {
                    this.worksatationData = response.dataList;
                }
                else {
                    this.worksatationData = [];
                }
            });
        }
    }
    /* Get SkillMatrix Employee List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getSkillMatrixEmpList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null) {
            let deptId;
            if (this.ojtPlanData.isEditable) {
                deptId = this.ojtPlan.cell[0].deptId;
            }
            else {
                for (let i = 0; i < this.cellList.length; i++) {
                    if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                        deptId = this.cellList[i].deptId;
                    }
                }
            }
            let reqData = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId
            };
            if (this.ojtPlan.cell != null && this.ojtPlan.cell.length > 0) {
                reqData.lineId = parseInt(this.ojtPlan.cell[0].id);
            }
            if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
                reqData.search = this.searchDet.searchInput;
            }
            this.submitSpinner = true;
            this.apiService.getSkillMatrixEmpList('apis/sm/getSkillMatrixEmpList', reqData).subscribe((response) => {
                if (response.result) {
                    this.submitSpinner = false;
                    if (response.data) {
                        this.empDetailsList = response.data;
                        this.columns = this.empDetailsList.columns;
                        this.filteredEmpData = this.empDetailsList.tableData;
                        if (this.empDetailsList.tableData != null && this.empDetailsList.tableData.length > 0) {
                            for (let i = 0; i < this.empDetailsList.tableData.length; i++) {
                                if (this.planDetails.ojtRegiList != null && this.planDetails.ojtRegiList.length > 0) {
                                    for (let j = 0; j < this.planDetails.ojtRegiList.length; j++) {
                                        if (this.planDetails.ojtRegiList[j].oeEmpId == this.empDetailsList.tableData[i].empId) {
                                            // this.empDetailsList.tableData[i].isSelected = true;
                                            let data = this.empDetailsList.tableData[i];
                                            for (const key in data) {
                                                if (data.hasOwnProperty(key)) {
                                                    // Check if the key is not equal to the field and if the key contains empSelectedLevel
                                                    if (this.planDetails.ojtRegiList[j].workstation == key) {
                                                        data[this.planDetails.ojtRegiList[j].workstation].empSelectedLevel = this.planDetails.ojtRegiList[j].desiredSkillLvlId;
                                                    }
                                                }
                                            }
                                            this.empDetailsList.tableData[i] = data;
                                        }
                                    }
                                }
                            }
                            for (let i = this.empDetailsList.tableData.length - 1; i >= 0; i--) {
                                if (this.empDetailsList.tableData[i].oJTPending === "Y" && this.ojtPlanData.isEditable) {
                                    // Remove the record from the array when oJTPending is "Y"
                                    if (this.planDetails.ojtRegiList != null)
                                        for (let j = 0; j < this.planDetails.ojtRegiList.length; j++) {
                                            if (this.planDetails.ojtRegiList[j].oeEmpId != this.empDetailsList.tableData[i].empId) {
                                                this.empDetailsList.tableData.splice(i, 1);
                                            }
                                        }
                                }
                            }
                        }
                        // console.log(this.empDetailsList)
                        for (let i = this.empDetailsList.tableData.length - 1; i >= 0; i--) {
                            if (this.empDetailsList.tableData[i].oJTPending === "Y" && !this.ojtPlanData.isEditable) {
                                // Remove the record from the array when oJTPending is "Y"
                                this.empDetailsList.tableData.splice(i, 1);
                            }
                        }
                        if (this.empDetailsList.tableData != null && this.empDetailsList.tableData.length > 0) {
                            for (let i = 0; i < this.empDetailsList.tableData.length; i++) {
                                this.empDetailsList.tableData[i].isSelected = false;
                            }
                        }
                        console.log(this.empDetailsList);
                    }
                }
            });
        }
    }
    /* Get Heading With Level
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getHeadingWithLevel(field, heading) {
        const workstationMatch = this.worksatationData.find(item => item.workstation === field);
        if (workstationMatch) {
            return `${heading} (${workstationMatch.levelName})`;
        }
        else {
            return heading;
        }
        // const columnMatch = this.columns.find(column => column.field === field);
        // return columnMatch ? columnMatch.heading : field;
    }
    isObjectEmpty(objectName) {
        return Object.keys(objectName).length == 0;
    }
    /* After select Check Box
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    isChecked(row, field) {
        let obj = {};
        this.isSelected(row, field);
        for (let item in row) {
            if (field == item) {
                //Condition 1
                if (row[item].hasOwnProperty("currentSkillLevel") && row[item].hasOwnProperty("currentSkillLevelId")) {
                    if (row[item].currentSkillLevelId == row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId > row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId + 1 == row[item].requireSkillLevelId) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].requireSkillLevelId > row[item].currentSkillLevelId + 1) {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                }
                else {
                    if (row[item].requireSkillLevelId == 1) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].requireSkillLevel };
                    }
                    else {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].requireSkillLevel };
                    }
                }
            }
        }
        return obj;
    }
    toggleCheckBox(row, columnId) {
        // return rowWorkstationId === columnId;
        if (Array.isArray(row.workstationList) && row.workstationList.length > 0) {
            return row.workstationList.some(workstation => workstation.workstationId === columnId);
        }
        return false;
    }
    /* On Checkbox Change
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    onCheckboxChange(row, columnField) {
        if (!this.ojtPlanData.isEditable) {
            // Find the selected workstation for this checkbox
            const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
            if (workstationMatch) {
                const empId = row.empId;
                const isSelectedField = this.isSelectedField(empId, columnField); // Check if already selected
                if (row[columnField].currentSkillLevelId >= parseInt(row[columnField].empSelectedLevel)) {
                    this.alertService.error('Upgrade level must be greater than the current skill level.');
                    row[columnField].empSelectedLevel = '';
                    return;
                }
                if (isSelectedField) {
                    // If it's already selected, deselect it
                    this.deselectCheckbox(row, columnField);
                }
                else {
                    // If it's not selected, select it
                    this.selectCheckbox(row, columnField);
                }
            }
        }
        else {
            const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
            if (workstationMatch) {
                if (row[columnField].currentSkillLevelId >= parseInt(row[columnField].empSelectedLevel)) {
                    this.alertService.error('Upgrade level must be greater than the current skill level.');
                    row[columnField].empSelectedLevel = '';
                    return;
                }
                const empId = row.empId;
                const isSelected = this.isSelectedField(empId, columnField); // Check if already selected
                const isAlreadyExist = this.isAlreadyExist(row, columnField);
                // if (isSelected || isAlreadyExist) {
                // If it's already selected, deselect it
                this.deselectCheckbox(row, columnField);
                // } else {
                // If it's not selected, select it
                this.selectUpdatedCheckbox(row, columnField);
                // }
            }
        }
    }
    isSelectedField(empId, columnField) {
        return this.selectedWorkstation[empId] === columnField;
    }
    isAlreadyExist(row, field) {
        if (this.ojtPlanData.isEditable) {
            for (let i = 0; i < this.planDetails.ojtRegiList.length; i++) {
                // && this.planDetails.ojtRegiList[i].workstation === field 
                if (this.planDetails.ojtRegiList[i].oeEmpId === row.empId) {
                    // row.isSelected = false;
                    return true;
                }
            }
            return false;
        }
    }
    getSkillValue(array, value) {
        var obj = undefined;
        if (array != null && array.length > 0) {
            for (let index = 0; index < array.length; index++) {
                if (array[index].id === value) {
                    obj = array[index];
                    break;
                }
            }
        }
        return obj;
    }
    resetSelectedWorkstation(upRow, field) {
        if (typeof upRow === 'object' && !Array.isArray(upRow)) {
            for (const key in upRow) {
                if (upRow.hasOwnProperty(key)) {
                    // Check if the key is not equal to the field and if the key contains empSelectedLevel
                    if (key !== field && typeof upRow[key] === 'object' && upRow[key].hasOwnProperty('empSelectedLevel')) {
                        delete upRow[key].empSelectedLevel;
                    }
                }
            }
        }
        // Remove the entry from selectedEntries
        const existingIndex = this.selectedEntries.findIndex(entry => entry.empId === upRow.empId);
        if (existingIndex !== -1) {
            this.selectedEntries.splice(existingIndex, 1);
        }
        // Update the selected workstation
        this.selectedWorkstation[upRow.empId] = undefined;
        console.log(this.selectedEntries);
    }
    deselectCheckbox(upRow, field) {
        if (typeof upRow === 'object' && !Array.isArray(upRow)) {
            for (const key in upRow) {
                if (upRow.hasOwnProperty(key)) {
                    // Check if the key is not equal to the field and if the key contains empSelectedLevel
                    if (key !== field && typeof upRow[key] === 'object' && upRow[key].hasOwnProperty('empSelectedLevel')) {
                        delete upRow[key].empSelectedLevel;
                    }
                }
            }
        }
        // Remove the entry from selectedEntries
        const existingIndex = this.selectedEntries.findIndex(entry => entry.empId === upRow.empId);
        if (existingIndex !== -1) {
            this.selectedEntries.splice(existingIndex, 1);
        }
        // Update the selected workstation
        this.selectedWorkstation[upRow] = undefined;
        console.log(this.selectedEntries);
    }
    // set New OJT Plan Register Request Body
    selectCheckbox(row, columnField) {
        const empId = row.empId;
        const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
        if (row[columnField].empSelectedLevel == '' || row[columnField].empSelectedLevel == undefined || row[columnField].empSelectedLevel == 0) {
            return;
        }
        if (workstationMatch) {
            // Add the new entry
            this.selectedEntries.push({
                empId: empId,
                currentSkillLevelId: row.empLevelId,
                desiredSkillLevelId: parseInt(row[columnField].empSelectedLevel),
                workstationId: workstationMatch.id,
                action: "ADD"
            });
            // Update the UI to deselect the previous checkbox
            const previousWorkstation = this.selectedWorkstation[empId];
            if (previousWorkstation) {
                this.deselectCheckbox(row, columnField);
            }
            // Update the selected workstation for this employee
            this.selectedWorkstation[empId] = columnField;
            console.log(this.selectedEntries);
        }
    }
    // set Update OJT Plan Register Request Body
    selectUpdatedCheckbox(row, columnField) {
        console.log(row);
        console.log(columnField);
        if (row[columnField].empSelectedLevel == '' || row[columnField].empSelectedLevel == undefined || row[columnField].empSelectedLevel == 0) {
            return;
        }
        // Find the selected workstation for this checkbox
        const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
        // if (workstationMatch) {
        const empId = row.empId;
        // Check if the employee has already applied for a workstation skill
        const existingIndex = this.selectedEntries.findIndex(entry => entry.empId === empId);
        const existingWorkstationIndex = this.selectedEntries.findIndex(entry => entry.workstationId === workstationMatch.id);
        if (existingIndex !== -1) {
            // Employee has already applied for a workstation skill
            // Remove the previous entry if it exists
            this.selectedEntries.splice(existingIndex, 1);
        }
        if (existingWorkstationIndex !== -1) {
            // Employee has already applied for a workstation skill
            // Remove the previous entry if it exists
            this.selectedEntries.splice(existingWorkstationIndex, 1);
        }
        // Check if empId exists in this.planDetails.ojtRegiList as oeEmpId
        const ojtRegiItem = this.planDetails.ojtRegiList.find(item => item.oeEmpId === empId);
        let ojtRegiId;
        let isWorkstation;
        let isWorkstationAvail;
        for (let i = 0; i < this.planDetails.ojtRegiList.length; i++) {
            if (this.planDetails.ojtRegiList[i].oeEmpId == empId) {
                ojtRegiId = this.planDetails.ojtRegiList[i].ojtRegiId;
                isWorkstation = this.planDetails.ojtRegiList[i].workstation;
                this.selectedWorkstation[empId] = isWorkstation;
                isWorkstationAvail = this.planDetails.ojtRegiList[i].workstation === columnField;
                // If the checkbox is unchecked, create a DELETE action
                /* if (this.planDetails.ojtRegiList[i].workstation !== columnField || isWorkstationAvail) {
                  this.selectedEntries.push({
                    ojtRegisId: this.planDetails.ojtRegiList[i].ojtRegiId,
                    empId: this.planDetails.ojtRegiList[i].oeEmpId,
                    desiredSkillLevelId: this.planDetails.ojtRegiList[i].desiredSkillLvlId,
                    workstationId: this.planDetails.ojtRegiList[i].workstationId,
                    action: "DELETE"
                  });
                } */
                if (ojtRegiId != undefined) {
                    if (ojtRegiItem) {
                        // Update the selected workstation for this employee
                        this.selectedWorkstation[empId] = columnField;
                    }
                    // Add the new entry only if the checkbox is checked
                    this.selectedEntries.push({
                        ojtRegisId: ojtRegiId,
                        empId: empId,
                        desiredSkillLevelId: parseInt(row[columnField].empSelectedLevel),
                        workstationId: workstationMatch.id,
                        action: "UPDATE"
                    });
                    // // Update the selected workstation for this employee
                    this.selectedWorkstation[empId] = columnField;
                }
            }
        }
        if (ojtRegiId == undefined || ojtRegiId == "") {
            this.selectedEntries.push({
                "empId": empId,
                "desiredSkillLevelId": parseInt(row[columnField].empSelectedLevel),
                "workstationId": workstationMatch.id,
                "action": "ADD",
                "updatedBy": this.userDet.empId,
                "createdBy": this.userDet.empId
            });
            // Update the selected workstation for this employee
            this.selectedWorkstation[empId] = columnField;
        }
        console.log(this.selectedEntries);
    }
    onOjtPlanDateSelected(event) {
        this.ojtPlan.ojtPlanDate = event.value;
    }
    /* Get User Type List
      @Author Jayshri Kolase
     * @Date August 25, 2023
    */
    getUserTypeList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null) {
            let deptId;
            if (this.ojtPlanData.isEditable) {
                deptId = this.ojtPlan.cell[0].deptId;
            }
            else {
                for (let i = 0; i < this.cellList.length; i++) {
                    if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                        deptId = this.cellList[i].deptId;
                    }
                }
            }
            let reqData = {};
            reqData = {
                "orgId": this.userDet.organization.orgId,
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId
            };
            if (this.ojtPlan.cell != null && this.ojtPlan.cell.length > 0) {
                reqData.lineIds = [parseInt(this.ojtPlan.cell[0].id)];
            }
            this.apiService.getUserTypeList('apis/sm/getUserTypeList', reqData).subscribe((response) => {
                if (response.result) {
                    if (response.dataList != null && response.dataList.length > 0) {
                        // this.userTypeList = response.dataList;
                        let data = [];
                        for (let i = 0; i < response.dataList.length; i++) {
                            if (response.dataList[i].userType == "TRAINER") {
                                data.push(response.dataList[i]);
                            }
                        }
                        this.userTypeList = this.setArray(data, 'empId', 'empName');
                        console.log(response);
                        // this.ojtPlan.trainer = [this.userTypeList[0]];
                    }
                    else {
                        this.userTypeList = [];
                        this.ojtPlan.trainer = [];
                    }
                }
                else {
                    this.userTypeList = [];
                    this.ojtPlan.trainer = [];
                }
            });
        }
    }
    /* Show default selected
      @Author Jayshri Kolase
     * @Date Oct 06, 2023
    */
    isSelected(row, field) {
        if (this.ojtPlanData.isEditable) {
            for (let i = 0; i < this.planDetails.ojtRegiList.length; i++) {
                if (this.planDetails.ojtRegiList[i].oeEmpId == row.empId) {
                    if (this.planDetails.ojtRegiList[i].workstation == field) {
                        const newCheckboxId = `checkbox${row.empId}_${field}`;
                        const newCheckboxElement = document.getElementById(newCheckboxId);
                        if (newCheckboxElement) {
                            newCheckboxElement.checked = true;
                            row.isSelected = true;
                        }
                    }
                }
            }
        }
    }
    /* Submit OJT Plan
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    submitOJTPlan(status, content) {
        this.isSubmitSpinner = true;
        console.log(this.ojtPlan.ojtPlanDate);
        if (this.ojtPlan.branch == null || this.ojtPlan.branch.length == 0 || this.ojtPlan.branch == undefined) {
            this.alertService.error('Please select Plant.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (this.ojtPlan.dept == null || this.ojtPlan.dept.length == 0 || this.ojtPlan.dept == undefined) {
            this.alertService.error('Please select Department.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (this.ojtPlan.cell == null || this.ojtPlan.cell.length == 0 || this.ojtPlan.cell == undefined) {
            this.alertService.error('Please select Cell.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (this.ojtPlan.trainer == null || this.ojtPlan.trainer.length === 0 || this.ojtPlan.trainer == undefined) {
            this.alertService.error('Please select trainer.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (!this.ojtPlan.ojtPlanDate) {
            this.alertService.error('Please select OJT plan date.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (!this.selectedEntries == null || this.selectedEntries.length === 0) {
            this.alertService.error('Please select an employee for level upgrade.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no entries are selected
        }
        let formattedDate;
        if (this.ojtPlan.ojtPlanDate) {
            // Format the date in 'YYYY/MM/DD' format
            formattedDate = this.datepipe.transform(this.ojtPlan.ojtPlanDate, 'yyyy-MM-dd');
            // Extract month and year components (if needed)
            const dateComponents = formattedDate.split('-');
            this.ojtPlan.ojtPlanMonth = dateComponents[1]; // Month component (MM)
            this.ojtPlan.ojtPlanYear = dateComponents[0]; // Year component (yyyy)
            console.log('Formatted Date:', formattedDate);
            console.log('Month:', this.ojtPlan.ojtPlanMonth);
            console.log('Year:', this.ojtPlan.ojtPlanYear);
        }
        let deptId;
        for (let i = 0; i < this.cellList.length; i++) {
            if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                deptId = this.cellList[i].deptId;
            }
        }
        console.log(status);
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null && this.ojtPlan.trainer != null && this.ojtPlan.ojtPlanDate != undefined && this.selectedEntries != null && this.selectedEntries.length > 0) {
            // Add the trainerEmpId to each entry in this.selectedEntries
            const trainerEmpId = this.ojtPlan.trainer[0].id;
            for (const entry of this.selectedEntries) {
                entry.trainerEmpId = trainerEmpId;
            }
            const lineId = this.ojtPlan.cell[0].id;
            for (const entry of this.selectedEntries) {
                entry.lineId = lineId;
            }
            let reqData = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId,
                "lineId": this.ojtPlan.cell[0].id,
                "yearValue": this.ojtPlan.ojtPlanYear,
                "monthValue": this.ojtPlan.ojtPlanMonth,
                "startDate": formattedDate,
                "status": status,
                "updatedBy": this.userDet.empId,
                "createdBy": this.userDet.empId,
                "ojtRegisList": this.selectedEntries
            };
            console.log(reqData);
            this.apiService.submitOJTPlan('apis/sm/submitOJTPlan', reqData).subscribe((response) => {
                console.log(response);
                this.isSubmitSpinner = false;
                if (response.result) {
                    this.alertService.success("OJT Plan registartion completed.");
                    this.modalService.dismissAll();
                }
                else {
                    if (response.statusCode == 100) {
                        if (response.errorList) {
                            if (response.errorList) {
                                if (response.errorList != null && response.errorList.length > 0) {
                                    this.errorList = response.errorList;
                                    this.modalService.open(content, {
                                        windowClass: "errorListClass",
                                    });
                                }
                            }
                        }
                        else {
                            this.alertService.error(response.reason);
                        }
                    }
                    else if (response.statusCode == 500) {
                        console.log("500");
                        this.alertService.error("Oops! Something went wrong");
                    }
                    else {
                        this.alertService.success(response.reason);
                    }
                }
            });
        }
    }
    /* Update OJT Plan
      @Author Jayshri Kolase
     * @Date Aug 06, 2023
    */
    UpdateOJTPlan(status, content) {
        this.isSubmitSpinner = true;
        console.log(this.ojtPlan.ojtPlanDate);
        if (this.ojtPlan.branch == null || this.ojtPlan.branch.length == 0 || this.ojtPlan.branch == undefined) {
            this.alertService.error('Please select Plant.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (this.ojtPlan.dept == null || this.ojtPlan.dept.length == 0 || this.ojtPlan.dept == undefined) {
            this.alertService.error('Please select Department.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (this.ojtPlan.cell == null || this.ojtPlan.cell.length == 0 || this.ojtPlan.cell == undefined) {
            this.alertService.error('Please select Cell.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (!this.ojtPlan.trainer == null || this.ojtPlan.trainer.length === 0) {
            this.alertService.error('Please select trainer.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (!this.ojtPlan.ojtPlanDate) {
            this.alertService.error('Please select OJT plan date.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        if (!this.selectedEntries == null || this.selectedEntries.length === 0) {
            this.alertService.error('Please select an employee for level upgrade.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no entries are selected
        }
        let formattedDate;
        if (this.ojtPlan.ojtPlanDate) {
            // Format the date in 'YYYY/MM/DD' format
            formattedDate = this.datepipe.transform(this.ojtPlan.ojtPlanDate, 'yyyy-MM-dd');
            // Extract month and year components (if needed)
            const dateComponents = formattedDate.split('-');
            this.ojtPlan.ojtPlanMonth = dateComponents[1]; // Month component (MM)
            this.ojtPlan.ojtPlanYear = dateComponents[0]; // Year component (yyyy)
            console.log('Formatted Date:', formattedDate);
            console.log('Month:', this.ojtPlan.ojtPlanMonth);
            console.log('Year:', this.ojtPlan.ojtPlanYear);
        }
        console.log(status);
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null && this.ojtPlan.ojtPlanDate != undefined && this.selectedEntries != null && this.selectedEntries.length > 0) {
            const trainerEmpId = this.ojtPlan.trainer[0].id;
            for (const entry of this.selectedEntries) {
                entry.trainerEmpId = trainerEmpId;
            }
            let reqData = {
                "ojtPlanId": this.planDetails.ojtPlanId,
                "yearValue": this.ojtPlan.ojtPlanYear,
                "monthValue": this.ojtPlan.ojtPlanMonth,
                "startDate": formattedDate,
                "status": status,
                "updatedBy": this.userDet.empId,
                "action": "UPDATE",
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": this.ojtPlan.dept[0].id,
                "lineId": parseInt(this.ojtPlan.cell[0].id),
                "ojtRegisList": this.selectedEntries,
            };
            console.log(reqData);
            this.apiService.submitOJTPlan('apis/sm/updateOJTPlan', reqData).subscribe((response) => {
                console.log(response);
                this.isSubmitSpinner = false;
                if (response.result) {
                    this.alertService.success("OJT plan updated successfully.");
                    this.modalService.dismissAll();
                }
                //  else {
                //   if (response.statuCode == 100) {
                //     this.alertService.error(response.reason);
                //   } else {
                //     this.alertService.success("Error occurred while submitting data. Please try again")
                //   }
                // }
                else {
                    if (response.statusCode == 100) {
                        if (response.errorList) {
                            if (response.errorList) {
                                if (response.errorList != null && response.errorList.length > 0) {
                                    this.errorList = response.errorList;
                                    this.modalService.open(content, {
                                        windowClass: "errorListClass",
                                    });
                                }
                            }
                        }
                        else {
                            this.alertService.error(response.reason);
                        }
                    }
                    else if (response.statusCode == 500) {
                        console.log("500");
                        this.alertService.error("Oops! Something went wrong");
                    }
                    else {
                        this.alertService.success(response.reason);
                    }
                }
            });
        }
    }
    /* Set Month And Year
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    setMonthAndYear(normalizedMonthAndYear, datepicker) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonthAndYear.month());
        ctrlValue.year(normalizedMonthAndYear.year());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
    /* Close Modal
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    closeModal() {
        this.searchDet.selectedRegiType = "";
        this.modalService.dismissAll();
    }
    /*
       Single Select Dropdown onChange function
       Author: Jayshri Kolase
       Date : 21 Aug 2023
    */
    onChange(ev, type) {
        if (ev) {
            if (type == 'plant') {
                this.getDeptList(this.ojtPlan.branch[0]);
                // this.getLineList(this.ojtPlan.branchId[0]);
            }
        }
        else {
            if (type == 'plant') {
                this.ojtPlan.departmentList = [];
                this.resetFormField(this.addOJTPlan, 'deptIds');
            } /*else if (type == 'dept') {
                } else if (type == 'userType') { }*/
        }
    }
    /*
        Reset Form function
        Author: Mahesh W
        Date : 21 Aug 2023
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
    /*
       Common function for set an array for dropdown
       Author: Jayshri Kolase
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
    /*
       Common function For get Ids from array
       Author: Mahesh W
       Date : 21 Aug 2023
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
       Combined Header Employee Name and Employee Level
       Author: Mahesh W
       Date : 21 Aug 2023
    */
    getCombinedHeader() {
        const empLevelColumn = this.empDetailsList.columns.find(column => column.field === 'empName');
        return ` ${empLevelColumn.heading}`;
    }
    /*
       Should Show Checkbox
       Author: Mahesh W
       Date : 21 Aug 2023
    */
    shouldShowCheckbox(columnField) {
        // Add your logic here to determine whether a checkbox should be displayed
        // For example, you can check if the columnField is a specific field that requires a checkbox
        return columnField === 'fieldName1' || columnField === 'fieldName2';
    }
    /* Common function For Searching
    @Author Saurabh salunke
    * @Date August 31, 2023*/
    getSearchList(ev) {
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.searchDet.searchInput != undefined) {
            for (let i = 0; i < this.empDetailsList.tableData.length; i++) {
                if (this.empDetailsList.tableData[i].cmpyEmpId != this.searchDet.searchInput || this.empDetailsList.tableData[i].empName != this.searchDet.searchInput) {
                    this.empDetailsList.tableData.splice(i, 1);
                }
            }
        }
    }
    clearSearch(ev) {
        this.searchDet.searchData = false;
        this.searchDet.searchInput = '';
        this.getSkillMatrixEmpList();
    }
    getSortFunction(array, fieldToSort) {
        // console.log(array, fieldToSort);
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
    sortFunction(array, key) {
        if (array != null && array.length > 0) {
            array.sort(function (a, b) {
                var nameA = (!Number(a[key])) ? a[key].toUpperCase() : a[key];
                var nameB = (!Number(b[key])) ? b[key].toUpperCase() : b[key];
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
    getMasterSkillLevelList() {
        this.apiService.getMasterLevelList('apis/sm/getLevelList').subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    const list = [];
                    for (let i = 0; i < res.dataList.length; i++) {
                        if (res.dataList[i].id !== 4) {
                            list.push(res.dataList[i]);
                        }
                    }
                    this.masterLevelList = this.setArray(list, 'id', 'levelName');
                    console.log(this.masterLevelList);
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
    isCurrentLevelCheck(row, field) {
        let obj = {};
        this.isSelected(row, field);
        for (let item in row) {
            if (field == item) {
                //Condition 1
                if (row[item].currentSkillLevelId == undefined || row[item].currentSkillLevelId == 0) {
                    return "L0";
                }
                else if (row[item].currentSkillLevelId == 1) {
                    return row[item].currentSkillLevel;
                }
                else if (row[item].currentSkillLevelId == 2) {
                    return row[item].currentSkillLevel;
                }
                else if (row[item].currentSkillLevelId == 2) {
                    return row[item].currentSkillLevel;
                }
                else if (row[item].currentSkillLevelId == 4) {
                    return row[item].currentSkillLevel;
                }
            }
        }
    }
    getOptionBackgroundColor(currentSkillLvl, levelId) {
        const defaultColor = { 'background-color': '#d9d9d9' };
        if (currentSkillLvl.currentSkillLevelId == null || currentSkillLvl.currentSkillLevelId == undefined) {
            currentSkillLvl.currentSkillLevelId = 0;
        }
        if (currentSkillLvl.currentSkillLevelId == levelId) {
            return { 'background-color': 'green' };
        }
        else if (currentSkillLvl.currentSkillLevelId > levelId) {
            return { 'background-color': 'green' };
        }
        else if (levelId > currentSkillLvl.currentSkillLevelId + 1) {
            return { 'background-color': 'red' };
        }
        else {
            return defaultColor;
        }
    }
    filterList() {
        const searchValue = this.searchInput.trim().toLowerCase();
        // empDetailsList.tableData
        this.filteredEmpData = this.empDetailsList.tableData.filter(row => Object.values(row).some(value => value.toString().toLowerCase().includes(searchValue)));
        console.log(this.filteredEmpData);
    }
    clearModalSearch() {
        this.searchInput = '';
        this.filteredEmpData = [...this.empDetailsList.tableData];
    }
};
AddOjtPlanComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_5__["SkillingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
AddOjtPlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-ojt-plan',
        template: _raw_loader_add_ojt_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [_add_ojt_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _skilling_service__WEBPACK_IMPORTED_MODULE_5__["SkillingService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_9__["AlertService"], Object])
], AddOjtPlanComponent);



/***/ }),

/***/ "mUek":
/*!***********************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-plan.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lableHead {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.input-container {\n  position: relative;\n  border: #ebe7e7 1px solid;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  height: 44px;\n  padding: 3px 12px;\n  background-color: #eceeef;\n}\n\n.input-container label {\n  display: block;\n  font-weight: bold;\n  font-size: 12px;\n  color: #4e21d1;\n}\n\n.input-container input {\n  border: none;\n  background: transparent;\n  font-size: 14px;\n  color: #333;\n  /* Disable user interaction */\n  pointer-events: none;\n  cursor: default;\n}\n\n.tableFixHead table .checkbox-block.form-check {\n  text-align: center;\n}\n\n.subHeading {\n  text-align: center;\n}\n\n.addRegDiv {\n  background-size: contain;\n}\n\nth.fixedColumn {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n}\n\ntd.fixedColumn {\n  position: sticky;\n  left: 0;\n}\n\nth.actionTh,\ntd.actionTd {\n  min-width: 150px;\n}\n\n.fixedColumn:nth-child(9),\n.fixedColumn:nth-child(9) {\n  right: 150px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n}\n\n.fixedColumn:nth-child(1),\n.fixedColumn:nth-child(1) {\n  position: sticky;\n  left: 0px;\n  z-index: 5;\n  width: 100px;\n  min-width: 100px;\n  max-width: 100px;\n}\n\n.fixedColumn:nth-child(2),\n.fixedColumn:nth-child(2) {\n  position: sticky;\n  left: 100px;\n  z-index: 5;\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n}\n\n.fixedColumn:nth-child(3),\n.fixedColumn:nth-child(3) {\n  position: sticky;\n  left: 250px;\n  z-index: 5;\n  width: 180px;\n  min-width: 180px;\n  max-width: 180px;\n}\n\n.pending {\n  position: sticky;\n  left: 0;\n  z-index: 5;\n}\n\n.actionTd div {\n  position: relative;\n  z-index: 5;\n  min-height: 36px;\n  overflow: hidden;\n}\n\nth.fixedColumn.empNameCol {\n  left: 108px;\n  z-index: 5;\n}\n\n.extraContent {\n  padding: 0px 0px 0px;\n  bottom: 5px;\n}\n\n.empSkillLevelTd {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.empSkillLevelTd .form-check-label {\n  color: #000 !important;\n  font-weight: 400;\n  text-align: center;\n}\n\n.empSkillLevelTd .checkbox-block label {\n  margin: 0px;\n}\n\n.empSkillLevelTd .checkbox-block label:after {\n  left: 0px !important;\n  right: 0px !important;\n  margin: auto;\n  text-align: center;\n}\n\n.empSkillLevelTd.EQUAL {\n  background: #99cd3a;\n  color: #000;\n}\n\n.empSkillLevelTd.NOT_ELIGIBLE {\n  background: #99cd3a;\n  color: #000;\n}\n\n.tableFixHead table .checkbox-block.form-check {\n  margin: auto;\n  padding: 0px;\n  text-align: center;\n}\n\n.interDetContent .fixedHead {\n  max-height: calc(100vh - 25vh) !important;\n  min-height: calc(100vh - 25vh) !important;\n  height: calc(100vh - 25vh);\n}\n\n.interDetContent .fixedHead .skill-table .tableFixHead,\n.interDetContent .fixedHead .table-block .tableFixHead {\n  overflow-y: auto;\n  max-height: calc(100vh - 28vh) !important;\n  min-height: calc(100vh - 28vh) !important;\n  height: calc(100vh - 28vh);\n  border-bottom: 2px solid #b395f1;\n}\n\n.fixedColumn:nth-child(8),\n.fixedColumn:nth-child(8) {\n  width: 120px;\n  right: 120px;\n  min-width: 120px;\n  max-width: 120px;\n}\n\n.footerBlock {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 20px 25px !important;\n  border-top: 1px solid #e3eaef;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n\n.extraContent .addRegDiv .addRegBtn,\n.extraContent .addRegDiv .addRegBtn:focus,\n.extraContent .addRegDiv .addRegBtn:hover {\n  right: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb2p0LXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFFQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7RUFDQSxPQUFBO0FBVkY7O0FBZUE7O0VBRUUsZ0JBQUE7QUFaRjs7QUFnQkE7O0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZ0JBOztFQUdFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWJGOztBQWdCQTs7RUFHRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiRjs7QUFnQkE7O0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZ0JBO0VBRUUsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQWJGOztBQXNCQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQW5CRjs7QUFzQkE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBbkJGOztBQXFCRTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQW5CSjs7QUF1Qkk7RUFDRSxXQUFBO0FBckJOOztBQXVCTTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFyQlI7O0FBMEJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBeEJKOztBQTJCRTtFQUNFLG1CQUFBO0VBRUEsV0FBQTtBQTFCSjs7QUErQkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBNUJKOztBQWlDRTtFQUNFLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSwwQkFBQTtBQTlCSjs7QUFrQ007O0VBQ0UsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQS9CUjs7QUFxQ0E7O0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbENGOztBQXFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4Q0FBQTtFQUNBLDZDQUFBO0FBbENGOztBQXFDQTs7O0VBR0Usc0JBQUE7QUFsQ0YiLCJmaWxlIjoib2p0LXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFibGVIZWFkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogcmdiKDIzNSwgMjMxLCAyMzEpIDFweCBzb2xpZDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGhlaWdodDogNDRweDtcclxuICBwYWRkaW5nOiAzcHggMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlZWVmO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM0ZTIxZDE7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgLy9wYWRkaW5nLWxlZnQ6IDEzcHg7XHJcbiAgLyogRGlzYWJsZSB1c2VyIGludGVyYWN0aW9uICovXHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHRhYmxlIC5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJIZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRSZWdEaXYge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLy8gLmZpeGVkQ29sdW1uIHtcclxuLy8gICBwb3NpdGlvbjogc3RpY2t5O1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBpZiBuZWNlc3NhcnkgKi9cclxuLy8gICBsZWZ0OiAwO1xyXG4vLyAgIC8qIEFkanVzdCB0aGlzIHZhbHVlIGlmIG5lY2Vzc2FyeSAqL1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxudGguZml4ZWRDb2x1bW4ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG50ZC5maXhlZENvbHVtbiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICBsZWZ0OiAwO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC8vIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbnRoLmFjdGlvblRoLFxyXG50ZC5hY3Rpb25UZCB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICAvLyB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDkpLFxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDkpIHtcclxuICByaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSxcclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSB7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgyKSxcclxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgyKSB7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgbGVmdDogMTAwcHg7XHJcbiAgei1pbmRleDogNTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDMpLFxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDMpIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGxlZnQ6IDI1MHB4O1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgbWF4LXdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLnBlbmRpbmcge1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmFjdGlvblRkIGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWluLWhlaWdodDogMzZweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG50aC5maXhlZENvbHVtbi5lbXBOYW1lQ29sIHtcclxuICBsZWZ0OiAxMDhweDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4vLyBhY3Rpb25UZCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2VjZjRmODtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgbWFyZ2luOiBhdXRvO1xyXG4vLyB9XHJcblxyXG4uZXh0cmFDb250ZW50IHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDBweDtcclxuICBib3R0b206IDVweDtcclxufVxyXG5cclxuLmVtcFNraWxsTGV2ZWxUZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWJsb2NrIHtcclxuICAgIGxhYmVsIHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5FUVVBTCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTljZDNhO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG5cclxuICAmLk5PVF9FTElHSUJMRSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTljZDNhO1xyXG4gICAgO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGVGaXhIZWFkIHRhYmxlIHtcclxuICAuY2hlY2tib3gtYmxvY2suZm9ybS1jaGVjayB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4uaW50ZXJEZXRDb250ZW50IHtcclxuICAuZml4ZWRIZWFkIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXZoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNXZoKTtcclxuXHJcbiAgICAuc2tpbGwtdGFibGUsXHJcbiAgICAudGFibGUtYmxvY2sge1xyXG4gICAgICAudGFibGVGaXhIZWFkIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyOHZoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyOHZoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI4dmgpO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjM5NWYxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDgpLFxyXG4uZml4ZWRDb2x1bW46bnRoLWNoaWxkKDgpIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgcmlnaHQ6IDEyMHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLmZvb3RlckJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlM2VhZWY7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4zcmVtIC0gMXB4KTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbn1cclxuXHJcbi5leHRyYUNvbnRlbnQgLmFkZFJlZ0RpdiAuYWRkUmVnQnRuLFxyXG4uZXh0cmFDb250ZW50IC5hZGRSZWdEaXYgLmFkZFJlZ0J0bjpmb2N1cyxcclxuLmV4dHJhQ29udGVudCAuYWRkUmVnRGl2IC5hZGRSZWdCdG46aG92ZXIge1xyXG4gIHJpZ2h0OiA2cmVtICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "ofuv":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-register/ojt-register.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OjtRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OjtRegisterComponent", function() { return OjtRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ojt_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ojt-register.component.html */ "0FNr");
/* harmony import */ var _ojt_register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ojt-register.component.scss */ "zfJ6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../skilling.service */ "Sh6i");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");







// import { DatePipe } from '@angular/common';

let OjtRegisterComponent = class OjtRegisterComponent {
    constructor(modalConfig, modalService, apiService, fb, alertService, Constant) {
        this.modalConfig = modalConfig;
        this.modalService = modalService;
        this.apiService = apiService;
        this.fb = fb;
        this.alertService = alertService;
        this.userDet = {};
        this.ojtPlanData = {};
        this.submitLoader = false;
        this.branchAccessList = [];
        this.ojtPlan = {};
        this.deptList = [];
        this.cellList = [];
        this.SingleBranchDropdownSettings = {};
        this.SingleDeptDropdownSettings = {};
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.empDetailsList = {};
        this.searchDet = {};
        this.worksatationData = [];
        this.selectedEntries = [];
        this.isSubmitSpinner = false;
        this.ojtPlanDetails = {};
        this.planDetails = {};
        this.childComponentClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.userTypeList = [];
        this.selectedWorkstation = {};
        this.constant = {};
        this.OJTRegiData = {};
        modalConfig.backdrop = 'static';
        modalConfig.keyboard = false;
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.userDet);
        this.OJTRegiData = JSON.parse(localStorage.getItem('OJTRegiData'));
        console.log(this.OJTRegiData);
        const today = new Date();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.ojtPlan.ojtPlanDate = new Date();
        this.getBranchAccessList();
    }
    /* gets Branch access list on employee
   @Author Jayshri Kolase
  * @Date August 25, 2023
  */
    getBranchAccessList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    this.branchAccessList = this.getSortFunction(this.branchAccessList, 'name');
                    this.ojtPlan.branch = [this.branchAccessList[0]];
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            // this.ojtPlan.branch = [this.branchAccessList[0]];
            // this.ojtPlan.branchId = [this.branchAccessList[0]];
            console.log(this.ojtPlan.branch);
            this.getDeptList(this.ojtPlan.branch[0]);
            this.getLineList(this.ojtPlan.branch[0]);
            this.getUserTypeList();
        });
    }
    /* Change branch selction
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    onChangeBranch(event) {
        this.ojtPlan.branchId = event.branchId;
        console.log(event);
        this.getDeptList(event);
        this.getLineList(event);
        this.getUserTypeList();
        // this.getWorkstationList();
    }
    /* get Line list on branch selection
       @Author Jayshri Kolase
      * @Date oct 05, 2023
    */
    getLineList(dept) {
        if (dept != null) {
            const req = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": this.ojtPlan.dept[0].id
            };
            this.apiService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
                if (response.result) {
                    if (response.dataList != null && response.dataList.length > 0) {
                        this.cellList = this.setArray(response.dataList, 'lineId', 'lineName');
                        console.log(this.cellList);
                        if (this.cellList != null && this.cellList.length > 0) {
                            this.cellList = this.getSortFunction(this.cellList, 'lineName');
                            this.ojtPlan.cell = [this.cellList[0]];
                            this.getWorkstationList();
                            this.getSkillMatrixEmpList();
                        }
                    }
                    else {
                        this.cellList = [];
                    }
                }
            });
        }
    }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getDeptList(branch) {
        this.apiService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branch.id).subscribe((response) => {
            if (response.result) {
                if (response.deptList != null && response.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    /* Use For Filter */
                    this.searchDet.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    console.log(response);
                    // this.deptList = response.deptList;
                    // console.log(this.deptList);
                    if (this.deptList != null && this.deptList.length > 0) {
                        this.ojtPlan.dept = [this.deptList[0]];
                        // this.getOjtPlanDetails();
                        this.getLineList(this.ojtPlan.dept);
                        this.getWorkstationList();
                        this.getSkillMatrixEmpList();
                        this.getUserTypeList();
                    }
                }
            }
            else {
                this.deptList = [];
            }
        });
    }
    /* After select Check Box
      @Author Jayshri Kolase
     * @Date August 25, 2023
   */
    isChecked(row, field) {
        let obj = {};
        for (let item in row) {
            if (field == item) {
                //Condition 1
                if (!this.isObjectEmpty(row) && row[item].hasOwnProperty("currentSkillLevel") && row[item].hasOwnProperty("currentSkillLevelId")) {
                    if (row[item].currentSkillLevelId == row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId > row[item].requireSkillLevelId) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if ((row[item].requireSkillLevelId - row[item].currentSkillLevelId) == 1) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else if ((row[item].requireSkillLevelId - row[item].currentSkillLevelId) > 1) {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                }
                else {
                    if (row[item].requireSkillLevelId == 1) {
                        return { 'status': this.constant.ELIGIBLE, level: '-' };
                    }
                    else {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: '-' };
                    }
                }
            }
        }
        return obj;
    }
    /* Change Line/Cell selction
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    onChangeLine(data) {
        console.log(data);
        this.getWorkstationList();
        this.getSkillMatrixEmpList();
        this.getUserTypeList();
    }
    /* Get Workstation List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getWorkstationList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null) {
            let deptId;
            for (let i = 0; i < this.cellList.length; i++) {
                if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                    deptId = this.cellList[i].deptId;
                }
            }
            let getReq = {
                "orgId": this.userDet.organization.orgId,
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId,
                "lineIds": [this.ojtPlan.cell[0].id]
            };
            console.log(getReq);
            this.apiService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
                console.log(response);
                if (response.result) {
                    this.worksatationData = response.dataList;
                    console.log(this.worksatationData);
                }
                else {
                    this.worksatationData = [];
                }
            });
        }
    }
    /* Get Skill Matrix Employee List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getSkillMatrixEmpList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null) {
            let deptId;
            for (let i = 0; i < this.cellList.length; i++) {
                if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                    deptId = this.cellList[i].deptId;
                }
            }
            let reqData = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId
            };
            if (this.ojtPlan.cell != null && this.ojtPlan.cell.length > 0) {
                reqData.lineId = this.ojtPlan.cell[0].id;
            }
            this.apiService.getSkillMatrixEmpList('apis/sm/getSkillMatrixEmpList', reqData).subscribe((response) => {
                if (response.result) {
                    this.empDetailsList = response.data;
                    console.log(response);
                    for (let i = this.empDetailsList.tableData.length - 1; i >= 0; i--) {
                        if (this.empDetailsList.tableData[i].oJTPending === "Y" && !this.ojtPlanData.isEditable) {
                            // Remove the record from the array when oJTPending is "Y"
                            this.empDetailsList.tableData.splice(i, 1);
                        }
                    }
                }
            });
        }
    }
    /* Get User Type List
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getUserTypeList() {
        if (this.ojtPlan.branch != null && this.ojtPlan.dept != null) {
            let deptId;
            // for (let i = 0; i < this.cellList.length; i++) {
            //   if (this.ojtPlan.dept[0].id == this.cellList[i].lineId) {
            deptId = this.ojtPlan.dept[0].deptId;
            // }
            // }
            let reqData = {
                "orgId": this.userDet.organization.orgId,
                "branchId": this.ojtPlan.branch[0].id,
                "deptIds": [deptId]
            };
            this.apiService.getUserTypeList('apis/sm/getUserTypeList', reqData).subscribe((response) => {
                if (response.result) {
                    if (response.dataList != null && response.dataList.length > 0) {
                        // this.userTypeList = response.dataList;
                        let data = [];
                        for (let i = 0; i < response.dataList.length; i++) {
                            if (response.dataList[i].userType == "TRAINER") {
                                data.push(response.dataList[i]);
                            }
                        }
                        this.userTypeList = this.setArray(data, 'empId', 'empName');
                        console.log(response);
                        // this.ojtPlan.trainer = [this.userTypeList[0]];
                    }
                    else {
                        this.userTypeList = [];
                        this.ojtPlan.trainer = [];
                    }
                }
                else {
                    this.userTypeList = [];
                    this.ojtPlan.trainer = [];
                }
            });
        }
    }
    /* Get Heading With Level
       @Author Jayshri Kolase
      * @Date August 25, 2023
    */
    getHeadingWithLevel(field, heading) {
        const workstationMatch = this.worksatationData.find(item => item.workstation === field);
        if (workstationMatch) {
            return `${heading} (${workstationMatch.levelName})`;
        }
        else {
            return heading;
        }
    }
    /* Change on check employee or apply emplyee for level upgrade
     @Author Jayshri Kolase
    * @Date August 25, 2023
  */
    onCheckboxChange(row, columnField) {
        // Find the selected workstation for this checkbox
        const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
        if (workstationMatch) {
            const empId = row.empId;
            const isSelected = this.isSelected(empId, columnField); // Check if already selected
            if (isSelected) {
                // If it's already selected, deselect it
                this.deselectCheckbox(empId, columnField);
            }
            else {
                // If it's not selected, select it
                this.selectCheckbox(row, columnField);
            }
        }
    }
    isSelected(empId, columnField) {
        return this.selectedWorkstation[empId] === columnField;
    }
    deselectCheckbox(empId, columnField) {
        const checkboxId = `checkbox${empId}_${columnField}`;
        const checkboxElement = document.getElementById(checkboxId);
        if (checkboxElement) {
            checkboxElement.checked = false;
        }
        // Remove the entry from selectedEntries
        const existingIndex = this.selectedEntries.findIndex(entry => entry.empId === empId);
        if (existingIndex !== -1) {
            this.selectedEntries.splice(existingIndex, 1);
        }
        // Update the selected workstation
        this.selectedWorkstation[empId] = undefined;
        console.log(this.selectedEntries);
    }
    selectCheckbox(row, columnField) {
        const empId = row.empId;
        const workstationMatch = this.worksatationData.find(item => item.workstation === columnField);
        if (workstationMatch) {
            // Add the new entry
            this.selectedEntries.push({
                empId: empId,
                currentSkillLevelId: row.empLevelId,
                desiredSkillLevelId: workstationMatch.reqSkillLevelId,
                workstationId: workstationMatch.id,
            });
            // Update the UI to deselect the previous checkbox
            const previousWorkstation = this.selectedWorkstation[empId];
            if (previousWorkstation) {
                this.deselectCheckbox(empId, previousWorkstation);
            }
            // Update the selected workstation for this employee
            this.selectedWorkstation[empId] = columnField;
            // Update the UI to select the new checkbox
            const newCheckboxId = `checkbox${empId}_${columnField}`;
            const newCheckboxElement = document.getElementById(newCheckboxId);
            if (newCheckboxElement) {
                newCheckboxElement.checked = true;
            }
            console.log(this.selectedEntries);
        }
    }
    /* Submit or Save OJT Single Registartion
      @Author Jayshri Kolase
     * @Date August 25, 2023
   */
    submitOJTRegi(status) {
        this.isSubmitSpinner = true;
        console.log(status);
        if (!this.selectedEntries == null || this.selectedEntries.length === 0) {
            this.alertService.error('Please select an employee for level upgrade.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no entries are selected
        }
        if (!this.ojtPlan.trainer) {
            this.alertService.error('Please select trainer.');
            this.isSubmitSpinner = false;
            return; // Exit the function if no date is selected
        }
        let deptId;
        for (let i = 0; i < this.cellList.length; i++) {
            if (this.ojtPlan.cell[0].id == this.cellList[i].lineId) {
                deptId = this.cellList[i].deptId;
            }
        }
        if (this.ojtPlan.branch != null && this.ojtPlan.cell != null && this.ojtPlan.trainer != undefined && this.selectedEntries != null && this.selectedEntries.length > 0) {
            const trainerEmpId = this.ojtPlan.trainer[0].id;
            for (const entry of this.selectedEntries) {
                entry.trainerEmpId = trainerEmpId;
            }
            const lineId = this.ojtPlan.cell[0].id;
            for (const entry of this.selectedEntries) {
                entry.lineId = lineId;
            }
            let reqData = {
                "branchId": this.ojtPlan.branch[0].id,
                "deptId": deptId,
                "lineId": this.ojtPlan.cell[0].id,
                "createdBy": this.userDet.empId,
                "updatedBy": this.userDet.empId,
                "ojtRegisList": this.selectedEntries
            };
            console.log(reqData);
            this.apiService.submitOJTRegi('apis/sm/ojtRegistration', reqData).subscribe((response) => {
                console.log(response);
                this.isSubmitSpinner = false;
                if (response.result) {
                    this.alertService.success("OJT registartion completed..");
                    this.modalService.dismissAll();
                }
                else {
                    if (response.statuCode == 100) {
                        this.alertService.error(response.reason);
                    }
                    else {
                        this.alertService.error(response.reason);
                    }
                }
            });
        }
    }
    closeModal() {
        this.modalService.dismissAll();
    }
    /*
       Single Select Dropdown onChange function
       Author: Jayshri Kolase
       Date : 21 Aug 2023
    */
    onChange(ev, type) {
        if (ev) {
            if (type == 'plant') {
                this.getDeptList(this.ojtPlan.branchId[0]);
                this.getLineList(this.ojtPlan.branchId[0]);
            }
        }
        else {
            if (type == 'plant') {
                this.ojtPlan.departmentList = [];
                this.resetFormField(this.addOJTPlan, 'deptIds');
            } /*else if (type == 'dept') {
                } else if (type == 'userType') { }*/
        }
    }
    /*
        Reset Form function
        Author: Mahesh W
        Date : 21 Aug 2023
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
    /*
       Common function for set an array for dropdown
       Author: Jayshri Kolase
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
    /*
       Common function For get Ids from array
       Author: Mahesh W
       Date : 21 Aug 2023
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
     Get Combined Header
      Author: Mahesh W
      Date : 21 Aug 2023
   */
    getCombinedHeader() {
        const empNameColumn = this.empDetailsList.columns.find(column => column.field === 'empName');
        return `${empNameColumn.heading}`;
    }
    isObjectEmpty(objectName) {
        return Object.keys(objectName).length == 0;
    }
    shouldShowCheckbox(columnField) {
        // Add your logic here to determine whether a checkbox should be displayed
        // For example, you can check if the columnField is a specific field that requires a checkbox
        return columnField === 'fieldName1' || columnField === 'fieldName2';
    }
    closeChildComponent() {
        // Any necessary logic to close the child component
        this.childComponentClosed.emit();
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "trainer" || fieldToSort === "dept" || fieldToSort === "plant" || fieldToSort === "cell") {
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
    /* Change dept selction
       @Author Shashi
       @Date Sptember 12, 2023
    */
    onChangeDept(data) {
        if (data) {
            console.log(data);
            this.selectedEntries = [];
            this.cellList = [];
            this.ojtPlan.cell = [];
            this.empDetailsList = [];
            this.getLineList(data);
            // this.getWorkstationList();
            // this.getUserTypeList();
            // this.getSkillMatrixEmpList();
        }
        else {
            this.cellList = [];
            this.selectedEntries = [];
        }
    }
    sortFunction(array, key) {
        if (array != null && array.length > 0) {
            array.sort(function (a, b) {
                var nameA = (!Number(a[key])) ? a[key].toUpperCase() : a[key];
                var nameB = (!Number(b[key])) ? b[key].toUpperCase() : b[key];
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
};
OjtRegisterComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
OjtRegisterComponent.propDecorators = {
    childComponentClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
OjtRegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ojt-register',
        template: _raw_loader_ojt_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ojt_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], Object])
], OjtRegisterComponent);



/***/ }),

/***/ "soj9":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/ojt-plan/add-ojt-plan/add-ojt-plan.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">{{this.ojtPlanData.title}}</h4>\r\n        <div class=\"form-group has-search \" style=\"margin-top: 5px; max-width: 220px;\">\r\n            <span class=\"fa form-control-feedback\"\r\n                [ngClass]=\"{'fa-search': !searchInput, 'fa-times-circle': searchInput}\" (click)=\"clearModalSearch()\">\r\n            </span>\r\n            <input\r\n                style=\"border: 1px solid #7044cd; background-color: transparent; border-radius: 12px; min-width: 218px;\"\r\n                type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search by Emp Id, Name\"\r\n                [(ngModel)]=\"searchInput\" (input)=\"filterList()\" autocomplete=\"off\" />\r\n        </div>\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\"> <span\r\n                aria-hidden=\"true\">&times;</span> </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\" style=\"padding: 0px;\">\r\n        <div class=\"row m-0 padding-tb\">\r\n            <div class=\"col-md-12  p-l-5 p-r-5\">\r\n                <div class=\"row m-0\" style=\"align-items: center;\">\r\n                    <div class=\"col-3 insideLabel p-l-5 p-r-5\">\r\n                        <label for=\"branch\" class=\"col-form-label p-0\">Plant&nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"branch\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"getSortFunction(branchAccessList,'plant')\"\r\n                                (onSelect)=\"onChangeBranch($event);ojtPlan.dept=''\"\r\n                                (onDeSelect)=\"onChange(false,'plant')\" [(ngModel)]=\"ojtPlan.branch\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3 insideLabel p-l-5 p-r-5\">\r\n                        <label for=\"dept\" class=\"col-form-label p-0\">Department&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"dept\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                                (onSelect)=\"onChangeDept($event)\" (onDeSelect)=\"onChangeDept(false)\"\r\n                                [data]=\"getSortFunction(deptList,'dept')\" [(ngModel)]=\"ojtPlan.dept\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n                        <label for=\"cell\" class=\"col-form-label p-0\">Cell/Line&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"cell\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Cell'\" [settings]=\"SingleDropdownSettings\"\r\n                                (onSelect)=\"onChangeLine($event)\" [data]=\"getSortFunction(cellList,'cell')\"\r\n                                [(ngModel)]=\"ojtPlan.cell\"\r\n                                [disabled]=\"ojtPlanData.isEditable && ojtPlanData.planId > 0\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n                        <label for=\"trainer\" class=\"col-form-label p-0\">Trainer&nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class>\r\n                            <ng-multiselect-dropdown name=\"trainer\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Trainer'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"getSortFunction(userTypeList,'Trainer')\" [(ngModel)]=\"ojtPlan.trainer\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2 form-group text-center  p-l-5 p-r-5\">\r\n                        <label for=\"ojtPlanDatePicker\" class=\"col-form-dt-label\">Start\r\n                            Date&nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"custom-Input-Group\" (click)=\"ojtPlanDatePicker.open()\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <i class=\"feather icon-calendar\"></i>\r\n                                </div>\r\n                                <input matInput #input=\"ngModel\" [matDatepicker]=\"ojtPlanDatePicker\"\r\n                                    class=\"form-control datePickInput\" name=\"dob\" id=\"ojtPlanDatePicker\"\r\n                                    [(ngModel)]=\"ojtPlan.ojtPlanDate\" (keydown)=\"false\"\r\n                                    (dateChange)=\"onOjtPlanDateSelected($event)\" placeholder=\"Select Month Year\"\r\n                                    [min]=\"minDate\" />\r\n                            </div>\r\n                            <mat-datepicker #ojtPlanDatePicker></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-block skill-table\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table table-bordered\">\r\n                    <thead>\r\n                        <tr>\r\n                            <ng-container *ngFor=\"let x of empDetailsList.columns\">\r\n                                <th class=\"fixedColumn empNameCol\" *ngIf=\"x.field == 'empName'\">\r\n                                    {{ getCombinedHeader()}}\r\n                                </th>\r\n                                <th style=\"text-align: center;z-index:4px;\"\r\n                                    *ngIf=\"x.field != 'empName' && x.field !== 'empId'\">\r\n                                    {{ getHeadingWithLevel(x.field, x.heading)\r\n                                    }}\r\n                                </th>\r\n                            </ng-container>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let row of filteredEmpData\">\r\n                            <td class=\"actionTd fixedColumn\" style=\"vertical-align: middle;\">{{ row.cmpyEmpId }}</td>\r\n                            <td class=\"actionTd fixedColumn\" style=\"text-align: left;    vertical-align: middle;\">\r\n                                {{row.empName}}\r\n                            </td>\r\n                            <ng-container *ngFor=\"let column of empDetailsList.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field !== 'empId' && column.field !== 'cmpyEmpId' && column.field !== 'empName'\">\r\n                                    <ng-container class=\"level-selection\">\r\n                                        <td style=\"text-align: center;\">\r\n                                            <!-- (ngModelChange)=\"onCheckboxChange(row,column.field ,level)\"\r\n                                                 -->\r\n                                            <!-- (change)=\"row[column.field].empSelectedLevel.id = level.id; onCheckboxChange(row,column.field);\" -->\r\n                                            <!-- \r\n                                                 -->\r\n                                            <!-- <select class=\"form-control\" name=\"level\" id=\"level\" [(ngModel)]=\"row[column.field].empSelectedLevel\" (ngModelChange)=\"onCheckboxChange(row,column.field)\">\r\n                                                <option value=\"\" disabled selected>{{row[column.field].currentSkillLevel\r\n                                                    ? row[column.field].currentSkillLevel : 'L0'}}</option>\r\n                                                <option *ngFor=\"let level of masterLevelList\" value=\"{{ level.id }}\"\r\n                                                    [ngStyle]=\"getOptionBackgroundColor(row[column.field], level.id)\">\r\n                                                    {{level.name}}\r\n                                                </option>\r\n                                            </select> -->\r\n\r\n                                            <mat-form-field class=\"customMatSelect\">\r\n                                                <mat-select [(ngModel)]=\"row[column.field].empSelectedLevel\"\r\n                                                    placeholder=\"{{(getSkillValue(masterLevelList,row[column.field].empSelectedLevel)) ? getSkillValue(masterLevelList,row[column.field].empSelectedLevel).name : (row[column.field].currentSkillLevel ? row[column.field].currentSkillLevel : 'L0')}}\"\r\n                                                    (selectionChange)=\"onCheckboxChange(row,column.field)\"\r\n                                                    [disabled]=\"row[column.field].empSelectedLevel\">\r\n                                                    <!-- <mat-option [value]=\"\">Please Select Level</mat-option> -->\r\n                                                    <mat-option *ngFor=\"let level of masterLevelList\" [value]=\"level.id\"\r\n                                                        [ngStyle]=\"getOptionBackgroundColor(row[column.field], level.id)\">{{\r\n                                                        level.name }}</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>&nbsp;\r\n                                            <span class=\"fa fa-times-circle form-control-clear\"\r\n                                                *ngIf=\"row[column.field].empSelectedLevel\"\r\n                                                (click)=\"row[column.field].empSelectedLevel = undefined;resetSelectedWorkstation(row,column.field);\"></span>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tr>\r\n                        <tr *ngIf=\"(filteredEmpData == null || filteredEmpData.length == 0)\">\r\n                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                Data Not Found\r\n                            </td>\r\n                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"submitSpinner\">\r\n                            <app-loading></app-loading>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12 footer-buttons\" style=\"display: inline-flex;\">\r\n                    <button *ngIf=\"!ojtPlanData.isEditable\" style=\"margin-right: 10px;\" type=\"submit\"\r\n                        class=\"btn submitBtn m-l-5\" aria-label=\"Submit\" [disabled]=\"submitLoader\"\r\n                        (click)=\"submitOJTPlan('SAVE', errorListModal)\">\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"load-text\">\r\n                            Loading...</span>\r\n                        <span *ngIf=\"!isSubmitSpinner\" class=\"btn-text\">Save &\r\n                            Draft</span>\r\n                    </button>\r\n                    <button *ngIf=\"ojtPlanData.isEditable\" style=\"margin-right: 10px;\" type=\"submit\"\r\n                        class=\"btn submitBtn m-l-5\" aria-label=\"Submit\" [disabled]=\"submitLoader\"\r\n                        (click)=\"UpdateOJTPlan('SAVE',errorListModal)\">\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"load-text\">\r\n                            Loading...</span>\r\n                        <span *ngIf=\"!isSubmitSpinner\" class=\"btn-text\">Update &\r\n                            Draft</span>\r\n                    </button>\r\n                    <button *ngIf=\"!ojtPlanData.isEditable\" type=\"submit\" class=\"btn submitBtn m-l-5\"\r\n                        aria-label=\"Submit\" [disabled]=\"submitLoader\"\r\n                        (click)=\"submitOJTPlan('PUBLISH', errorListModal)\">\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"load-text\">\r\n                            Loading...</span>\r\n                        <span *ngIf=\"!isSubmitSpinner\" class=\"btn-text\">Save &\r\n                            Publish</span>\r\n                    </button>\r\n                    <button *ngIf=\"ojtPlanData.isEditable\" type=\"submit\" class=\"btn submitBtn m-l-5\" aria-label=\"Submit\"\r\n                        [disabled]=\"submitLoader\" (click)=\"UpdateOJTPlan('PUBLISH', errorListModal)\">\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"isSubmitSpinner\" class=\"load-text\">\r\n                            Loading...</span>\r\n                        <span *ngIf=\"!isSubmitSpinner\" class=\"btn-text\">Update &\r\n                            Publish</span>\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                        (click)=\"closeModal()\">Cancel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #errorListModal let-c=\"close\" style=\"max-width: calc(100% - 30%) !important;\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\"> Assessment Error List &nbsp;</h4>\r\n\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\" class=\"close-icon\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\" style=\"padding: 0;\">\r\n        <div class=\"tableFixHead\">\r\n            <table class=\"table table-bordered table-md\" style=\"font-family: 'Helvetica Neue';\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" scope=\"col\"> Employee ID </th>\r\n                        <th scope=\"col\">Employee Name</th>\r\n                        <th scope=\"col\">Workstation</th>\r\n                        <th scope=\"col\">Current Skill Level</th>\r\n                        <th scope=\"col\">Desired Skill Level</th>\r\n                        <th class=\"fixedColumn\">Error Message</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of errorList\">\r\n                        <td class=\"fixedColumn\" scope=\"row\">{{x.cmpyEmpId || 'N/A'}}</td>\r\n                        <td>{{x.empName || 'N/A'}}</td>\r\n                        <td>{{x.workstation || 'N/A'}}</td>\r\n                        <td>{{x.currentSkillLevelName || 'L0'}}</td>\r\n                        <td>{{x.desiredSkillLevelName || 'N/A'}}</td>\r\n                        <td class=\"fixedColumn\" style=\"color: red;\">{{x.errorMessage || 'N/A'}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "uajb":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/add-ojt-plan/add-ojt-plan.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.headerBar {\n  display: inline-flex;\n  width: 100%;\n}\n.headerBar .backArrow {\n  margin: auto;\n  display: inline-block;\n  padding-left: 1rem;\n}\n.headerBar .backArrow .feather {\n  color: #7044cd;\n  vertical-align: bottom;\n  font-size: 2em;\n  cursor: pointer;\n}\n.insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n.padding-tb {\n  padding-top: 12px;\n  padding-bottom: 8px;\n}\n.example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n.custom-Input-Group .input-group-prepend .input-group-text {\n  background: transparent;\n  cursor: pointer;\n}\n.custom-Input-Group .input-group-prepend .input-group-text .feather {\n  color: #7044cd;\n}\n.form-group {\n  margin-bottom: 0px !important;\n}\n.form-group .col-form-dt-label {\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  color: #7044cd;\n  position: absolute;\n  z-index: 999;\n  padding: 0px 5px;\n  background: #fff;\n  left: 2em;\n  top: -8px;\n}\n.proficiencypop {\n  text-align: left;\n  font: normal normal 500 21px/28px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  opacity: 1;\n}\n.skill-table .tableFixHead {\n  border-bottom: none;\n  max-height: calc(100vh - 25vh);\n  min-height: calc(100vh - 25vh);\n  height: calc(100vh - 25vh);\n}\n.skill-table th {\n  background: #fff !important;\n}\n.skill-table .tdData .assessment {\n  padding: 0.5rem 0px;\n}\n.skill-table .tdData .assessment .assessmentname {\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  text-align: left;\n  margin: auto;\n}\n.noofProjects {\n  background: #7044cd;\n  border-radius: 50px;\n  right: 2em;\n  color: white;\n  font: normal normal 500 18px/29px Helvetica Neue;\n  text-align: center;\n}\n.thbackground {\n  background-color: white;\n}\n/* Style the button */\n#registerBtn {\n  background-color: #7044cd;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n}\n#registerBtn .fa {\n  margin-right: 10px;\n}\n#registerBtn.up .fa {\n  content: \"\";\n}\n#registerBtn.down .fa {\n  content: \"\";\n}\n.modal-footer .footer-buttons {\n  margin-top: 1px;\n}\n.fixedColumn {\n  position: sticky;\n  top: 0;\n  /* Adjust this value if necessary */\n  left: 0;\n  /* Adjust this value if necessary */\n  z-index: 1;\n  background-color: white;\n}\nth.fixedColumn,\ntd.fixedColumn {\n  position: sticky;\n  left: 0;\n  background-color: white;\n  z-index: 2;\n}\nth.actionTh,\ntd.actionTd {\n  min-width: 150px;\n  z-index: 3;\n}\n.fixedColumn:nth-child(1),\n.fixedColumn:nth-child(2) {\n  left: 150px;\n  box-shadow: 5px 0 5px -5px #333;\n  background: white;\n}\ntr th:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 4;\n}\n.actionTd div {\n  position: relative;\n  z-index: 5;\n  min-height: 36px;\n  overflow: hidden;\n}\nth.fixedColumn.empNameCol {\n  left: 150px;\n  z-index: 5;\n}\n.extraContent {\n  padding: 0px 0px 0px;\n  bottom: 5px;\n}\n.empSkillLevelTd {\n  text-align: center;\n  vertical-align: middle;\n}\n.empSkillLevelTd .form-check-label {\n  color: #000 !important;\n  font-weight: 400;\n  text-align: center;\n}\n.empSkillLevelTd .checkbox-block label {\n  margin: 0px;\n}\n.empSkillLevelTd .checkbox-block label:after {\n  left: 0px !important;\n  right: 0px !important;\n  margin: auto;\n  text-align: center;\n}\n.empSkillLevelTd.EQUAL {\n  background: #99cd3a;\n  color: #000;\n}\n.empSkillLevelTd.NOT_ELIGIBLE {\n  background: #ed3833;\n  color: #000;\n}\n.tableFixHead table .checkbox-block.form-check {\n  margin: auto;\n  padding: 0px;\n  text-align: center;\n}\n.level-selection .custom-multiSelection .dropdown-btn {\n  padding-top: 7px !important;\n}\n.custom-multiSelection .multiselect-dropdown .dropdown-multiselect__caret {\n  background-size: contain;\n  top: 2px !important;\n  right: 5px !important;\n  width: 15px !important;\n  height: 20px !important;\n  background-position: center;\n}\n.dropdown-list {\n  position: absolute;\n  padding-top: 0px !important;\n  width: 100%;\n  z-index: 9999;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #fff;\n  margin-top: 0px !important;\n  box-shadow: 0 1px 5px #959595;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.35rem !important;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 2px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.mat-select-panel {\n  min-width: 112px;\n  max-width: 280px;\n  margin-top: 2rem !important;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 0;\n  padding-bottom: 0;\n  max-height: 256px;\n  min-width: 100%;\n  border-radius: 4px;\n  outline: 0;\n}\n/* Add more rules for other options as needed */\n::ng-deep .customMatSelect .mat-form-field-infix {\n  position: relative;\n}\n.form-control-clear {\n  padding: 6px 10px;\n  display: inline-block;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1vanQtcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxvQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFEUjtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUZKO0FBS0E7RUFDSSxvQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0FBRko7QUFPUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQUpaO0FBT1k7RUFDSSxjQUFBO0FBTGhCO0FBV0E7RUFDSSw2QkFBQTtBQVJKO0FBVUk7RUFFSSxnREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFUUjtBQWFBO0VBQ0ksZ0JBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFWSjtBQWNJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFYUjtBQWNJO0VBQ0ksMkJBQUE7QUFaUjtBQWdCUTtFQUNJLG1CQUFBO0FBZFo7QUFnQlk7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWRoQjtBQTJCQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUF6Qko7QUE0QkE7RUFDSSx1QkFBQTtBQXpCSjtBQTRCQSxxQkFBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBekJKO0FBMkJJO0VBQ0ksa0JBQUE7QUF6QlI7QUE2QlE7RUFDSSxZQUFBO0FBM0JaO0FBZ0NRO0VBQ0ksWUFBQTtBQTlCWjtBQW1DQTtFQUNJLGVBQUE7QUFoQ0o7QUFtQ0E7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxtQ0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWhDSjtBQW1DQTs7RUFFSSxnQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFoQ0o7QUFtQ0E7O0VBRUksZ0JBQUE7RUFDQSxVQUFBO0FBaENKO0FBbUNBOztFQUVJLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBaENKO0FBbUNBO0VBRUksZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtBQWhDSjtBQW1DQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFoQ0o7QUFtQ0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQWhDSjtBQW1DQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQWhDSjtBQW1DQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFoQ0o7QUFrQ0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFoQ1I7QUFvQ1E7RUFDSSxXQUFBO0FBbENaO0FBb0NZO0VBQ0ksb0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWxDaEI7QUF1Q0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFyQ1I7QUF3Q0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUF0Q1I7QUEyQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBeENSO0FBOENRO0VBQ0ksMkJBQUE7QUEzQ1o7QUFpREk7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUE5Q1I7QUFrREE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBL0NKO0FBa0RBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0VBQ0k7QUFoRFI7QUFvREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFqREo7QUFvREEsK0NBQUE7QUFFQTtFQUNJLGtCQUFBO0FBbERKO0FBd0RBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFyREoiLCJmaWxlIjoiYWRkLW9qdC1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmhlYWRlckJhciB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXJCYXIgLmJhY2tBcnJvdyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG4uaGVhZGVyQmFyIC5iYWNrQXJyb3cgLmZlYXRoZXIge1xuICBjb2xvcjogIzcwNDRjZDtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmluc2lkZUxhYmVsIC5jb2wtZm9ybS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDBweDtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMS41IEhlbHZldGljYSBOZXVlO1xuICBsZWZ0OiAxLjVyZW07XG4gIGNvbG9yOiAjNzA0NGNkO1xufVxuXG4ucGFkZGluZy10YiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4uZXhhbXBsZS1tb250aC1waWNrZXIgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5leGFtcGxlLW1vbnRoLXBpY2tlciAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1JbnB1dC1Hcm91cCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3VzdG9tLUlucHV0LUdyb3VwIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IC5mZWF0aGVyIHtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCAuY29sLWZvcm0tZHQtbGFiZWwge1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWU7XG4gIGNvbG9yOiAjNzA0NGNkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5OTtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbGVmdDogMmVtO1xuICB0b3A6IC04cHg7XG59XG5cbi5wcm9maWNpZW5jeXBvcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDIxcHgvMjhweCBIZWx2ZXRpY2EgTmV1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5za2lsbC10YWJsZSAudGFibGVGaXhIZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjV2aCk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpO1xufVxuLnNraWxsLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnNraWxsLXRhYmxlIC50ZERhdGEgLmFzc2Vzc21lbnQge1xuICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xufVxuLnNraWxsLXRhYmxlIC50ZERhdGEgLmFzc2Vzc21lbnQgLmFzc2Vzc21lbnRuYW1lIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IGF1dG87XG59XG4ubm9vZlByb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzcwNDRjZDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcmlnaHQ6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxOHB4LzI5cHggSGVsdmV0aWNhIE5ldWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRoYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgYnV0dG9uICovXG4jcmVnaXN0ZXJCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA0NGNkO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI3JlZ2lzdGVyQnRuIC5mYSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiNyZWdpc3RlckJ0bi51cCAuZmEge1xuICBjb250ZW50OiBcIu+EhlwiO1xufVxuI3JlZ2lzdGVyQnRuLmRvd24gLmZhIHtcbiAgY29udGVudDogXCLvhIdcIjtcbn1cblxuLm1vZGFsLWZvb3RlciAuZm9vdGVyLWJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5maXhlZENvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgLyogQWRqdXN0IHRoaXMgdmFsdWUgaWYgbmVjZXNzYXJ5ICovXG4gIGxlZnQ6IDA7XG4gIC8qIEFkanVzdCB0aGlzIHZhbHVlIGlmIG5lY2Vzc2FyeSAqL1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxudGguZml4ZWRDb2x1bW4sXG50ZC5maXhlZENvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xufVxuXG50aC5hY3Rpb25UaCxcbnRkLmFjdGlvblRkIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSxcbi5maXhlZENvbHVtbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxNTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDAgNXB4IC01cHggIzMzMztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA0O1xufVxuXG4uYWN0aW9uVGQgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG50aC5maXhlZENvbHVtbi5lbXBOYW1lQ29sIHtcbiAgbGVmdDogMTUwcHg7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5leHRyYUNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5lbXBTa2lsbExldmVsVGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZW1wU2tpbGxMZXZlbFRkIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcFNraWxsTGV2ZWxUZCAuY2hlY2tib3gtYmxvY2sgbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cbi5lbXBTa2lsbExldmVsVGQgLmNoZWNrYm94LWJsb2NrIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wU2tpbGxMZXZlbFRkLkVRVUFMIHtcbiAgYmFja2dyb3VuZDogIzk5Y2QzYTtcbiAgY29sb3I6ICMwMDA7XG59XG4uZW1wU2tpbGxMZXZlbFRkLk5PVF9FTElHSUJMRSB7XG4gIGJhY2tncm91bmQ6ICNlZDM4MzM7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGFibGVGaXhIZWFkIHRhYmxlIC5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxldmVsLXNlbGVjdGlvbiAuY3VzdG9tLW11bHRpU2VsZWN0aW9uIC5kcm9wZG93bi1idG4ge1xuICBwYWRkaW5nLXRvcDogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tbXVsdGlTZWxlY3Rpb24gLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1tdWx0aXNlbGVjdF9fY2FyZXQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRvcDogMnB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiA1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmRyb3Bkb3duLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC4zNXJlbSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgbWF4LXdpZHRoOiAyODBweDtcbiAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIG1heC1oZWlnaHQ6IDI1NnB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogMDtcbn1cblxuLyogQWRkIG1vcmUgcnVsZXMgZm9yIG90aGVyIG9wdGlvbnMgYXMgbmVlZGVkICovXG46Om5nLWRlZXAgLmN1c3RvbU1hdFNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3JtLWNvbnRyb2wtY2xlYXIge1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "zfJ6":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/ojt-plan/ojt-register/ojt-register.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.headerBar {\n  display: inline-flex;\n  width: 100%;\n}\n.headerBar .backArrow {\n  margin: auto;\n  display: inline-block;\n  padding-left: 1rem;\n}\n.headerBar .backArrow .feather {\n  color: #7044cd;\n  vertical-align: bottom;\n  font-size: 2em;\n  cursor: pointer;\n}\n.insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n.padding-tb {\n  padding-top: 19px;\n  padding-bottom: 10px;\n}\n.example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n.custom-Input-Group .input-group-prepend .input-group-text {\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n}\n.custom-Input-Group .input-group-prepend .input-group-text .feather {\n  color: #7044cd;\n}\n.custom-Input-Group input,\n.custom-Input-Group input:hover,\n.custom-Input-Group input:focus {\n  border: none;\n  box-shadow: none;\n  border-radius: 0px;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n  padding-left: 0px;\n}\n.custom-Input-Group .datePickInput {\n  background: transparent;\n  cursor: pointer;\n  width: auto;\n}\n.input-group {\n  padding: 0.5rem 0px;\n}\n.form-group {\n  margin-bottom: 0px !important;\n}\n.form-group .row .col-form-dt-label {\n  margin-top: 10px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  color: #7044cd;\n}\n.proficiencypop {\n  text-align: left;\n  font: normal normal 500 21px/28px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  opacity: 1;\n}\n.skill-table .tableFixHead {\n  border-bottom: none;\n  max-height: calc(100vh - 25vh);\n  min-height: calc(100vh - 25vh);\n  height: calc(100vh - 25vh);\n}\n.skill-table th {\n  background: #fff !important;\n}\n.skill-table .tdData .assessment {\n  padding: 0.5rem 0px;\n}\n.skill-table .tdData .assessment .assessmentname {\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  text-align: left;\n  margin: auto;\n}\n.form-check-label {\n  padding: 5px 15px !important;\n  width: 100% !important;\n}\n.checkbox-block.form-check {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0px;\n}\n.checkbox-block.form-check label {\n  display: inline-block;\n  margin-bottom: 0px !important;\n  position: relative !important;\n}\n.checkbox-block.form-check input[type=checkbox] + label:before {\n  background: #fff 0 0 no-repeat padding-box;\n  border: 2px solid #7044cd;\n  border-radius: 5px;\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n  height: 3ex;\n  width: 3ex;\n  margin-right: 0px;\n}\n.noofProjects {\n  background: #7044cd;\n  border-radius: 50px;\n  right: 2em;\n  color: white;\n  font: normal normal 500 18px/29px Helvetica Neue;\n  text-align: center;\n}\n.thbackground {\n  background-color: white;\n}\n/* In your component's CSS file or global stylesheet */\n.custom-checkbox {\n  /* Hide the default checkbox appearance */\n  display: none;\n}\n.custom-checkbox + label {\n  /* Style the custom checkbox container */\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 18px;\n  background-color: #fff;\n  border: 2px solid #7044cd;\n  border-radius: 5px !important;\n  margin: 0;\n  cursor: pointer;\n}\n.custom-checkbox:checked + label::before {\n  /* Style the checkmark when the checkbox is checked */\n  content: \"✓\";\n  /* Unicode character for checkmark */\n  display: block;\n  color: #7044cd;\n  font-size: 14px;\n  text-align: center;\n  line-height: 18px;\n}\n/* Adjust the appearance when hovering over the label */\n.custom-checkbox + label:hover {\n  background-color: #f1f1f1;\n}\n/* Style the button */\n#registerBtn {\n  background-color: #7044cd;\n  color: #fff;\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n}\n#registerBtn .fa {\n  margin-right: 10px;\n}\n#registerBtn.up .fa {\n  content: \"\";\n}\n#registerBtn.down .fa {\n  content: \"\";\n}\n.modal-footer .footer-buttons {\n  margin-top: 10px;\n}\n.fixedColumn {\n  position: sticky;\n  top: 0;\n  /* Adjust this value if necessary */\n  left: 0;\n  /* Adjust this value if necessary */\n  z-index: 1;\n  background-color: white;\n}\nth.fixedColumn,\ntd.fixedColumn {\n  position: sticky;\n  left: 0;\n  background-color: white;\n  z-index: 2;\n}\nth.actionTh,\ntd.actionTd {\n  min-width: 150px;\n  z-index: 3;\n}\n.fixedColumn:nth-child(1),\n.fixedColumn:nth-child(2) {\n  left: 150px;\n  box-shadow: 5px 0 5px -5px #333;\n  background: white;\n}\ntr th:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 4;\n}\n.actionTd div {\n  position: relative;\n  z-index: 5;\n  min-height: 36px;\n  overflow: hidden;\n}\nth.fixedColumn.empNameCol {\n  left: 150px;\n  z-index: 4;\n}\n.empSkillLevelTd {\n  text-align: center;\n  vertical-align: middle;\n}\n.empSkillLevelTd .form-check-label {\n  color: #000 !important;\n  font-weight: 400;\n  text-align: center;\n}\n.empSkillLevelTd .checkbox-block label {\n  margin: 0px;\n}\n.empSkillLevelTd .checkbox-block label:after {\n  left: 0px !important;\n  right: 0px !important;\n  margin: auto;\n  text-align: center;\n}\n.empSkillLevelTd.EQUAL {\n  background: #99cd3a;\n  color: #000;\n}\n.empSkillLevelTd.NOT_ELIGIBLE {\n  background: #ed3833;\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG9qdC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxvQkFBQTtFQUNBLFdBQUE7QUFFSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQUFRO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFFWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFEUjtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUZKO0FBS0E7RUFDSSxvQkFBQTtBQUZKO0FBS0E7RUFDSSxhQUFBO0FBRko7QUFPUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBSlo7QUFPWTtFQUNJLGNBQUE7QUFMaEI7QUFVSTs7O0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQVJSO0FBV0k7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBVFI7QUFhQTtFQUNJLG1CQUFBO0FBVko7QUFlQTtFQUNJLDZCQUFBO0FBWko7QUFlUTtFQUNJLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0FBYlo7QUFrQkE7RUFDSSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWZKO0FBbUJJO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUFoQlI7QUFtQkk7RUFDSSwyQkFBQTtBQWpCUjtBQXFCUTtFQUNJLG1CQUFBO0FBbkJaO0FBcUJZO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFuQmhCO0FBZ0NBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtBQTlCSjtBQW1DQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQWhDSjtBQXlDSTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQXZDUjtBQTJDQTtFQUNJLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQXhDSjtBQTJDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUF4Q0o7QUEyQ0E7RUFDSSx1QkFBQTtBQXhDSjtBQTJDQSxzREFBQTtBQUNBO0VBQ0kseUNBQUE7RUFDQSxhQUFBO0FBeENKO0FBMkNBO0VBQ0ksd0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQXhDSjtBQTJDQTtFQUNJLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXhDSjtBQTJDQSx1REFBQTtBQUNBO0VBQ0kseUJBQUE7QUF4Q0o7QUEyQ0EscUJBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXhDSjtBQTBDSTtFQUNJLGtCQUFBO0FBeENSO0FBNENRO0VBQ0ksWUFBQTtBQTFDWjtBQStDUTtFQUNJLFlBQUE7QUE3Q1o7QUFrREE7RUFDSSxnQkFBQTtBQS9DSjtBQWtEQTtFQUNJLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLG1DQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBL0NKO0FBa0RBOztFQUVJLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQS9DSjtBQWtEQTs7RUFFSSxnQkFBQTtFQUNBLFVBQUE7QUEvQ0o7QUFrREE7O0VBRUksV0FBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUEvQ0o7QUFrREE7RUFFSSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBL0NKO0FBa0RBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQS9DSjtBQWtEQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0FBL0NKO0FBa0RBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQS9DSjtBQWlESTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQS9DUjtBQW1EUTtFQUNJLFdBQUE7QUFqRFo7QUFtRFk7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBakRoQjtBQXNESTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQXBEUjtBQXVESTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQXJEUiIsImZpbGUiOiJvanQtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGVyQmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlckJhciAuYmFja0Fycm93IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbi5oZWFkZXJCYXIgLmJhY2tBcnJvdyAuZmVhdGhlciB7XG4gIGNvbG9yOiAjNzA0NGNkO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBmb250LXNpemU6IDJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5zaWRlTGFiZWwgLmNvbC1mb3JtLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWU7XG4gIGxlZnQ6IDEuNXJlbTtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG59XG5cbi5wYWRkaW5nLXRiIHtcbiAgcGFkZGluZy10b3A6IDE5cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1tb250aC1waWNrZXIgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5leGFtcGxlLW1vbnRoLXBpY2tlciAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmN1c3RvbS1JbnB1dC1Hcm91cCAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b20tSW5wdXQtR3JvdXAgLmlucHV0LWdyb3VwLXByZXBlbmQgLmlucHV0LWdyb3VwLXRleHQgLmZlYXRoZXIge1xuICBjb2xvcjogIzcwNDRjZDtcbn1cbi5jdXN0b20tSW5wdXQtR3JvdXAgaW5wdXQsXG4uY3VzdG9tLUlucHV0LUdyb3VwIGlucHV0OmhvdmVyLFxuLmN1c3RvbS1JbnB1dC1Hcm91cCBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uY3VzdG9tLUlucHV0LUdyb3VwIC5kYXRlUGlja0lucHV0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHBhZGRpbmc6IDAuNXJlbSAwcHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1ncm91cCAucm93IC5jb2wtZm9ybS1kdC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG59XG5cbi5wcm9maWNpZW5jeXBvcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDIxcHgvMjhweCBIZWx2ZXRpY2EgTmV1ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5za2lsbC10YWJsZSAudGFibGVGaXhIZWFkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjV2aCk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1dmgpO1xufVxuLnNraWxsLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnNraWxsLXRhYmxlIC50ZERhdGEgLmFzc2Vzc21lbnQge1xuICBwYWRkaW5nOiAwLjVyZW0gMHB4O1xufVxuLnNraWxsLXRhYmxlIC50ZERhdGEgLmFzc2Vzc21lbnQgLmFzc2Vzc21lbnRuYW1lIHtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjNDc0NzQ3O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IGF1dG87XG59XG4uZm9ybS1jaGVjay1sYWJlbCB7XG4gIHBhZGRpbmc6IDVweCAxNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG59XG5cbi5jaGVja2JveC1ibG9jay5mb3JtLWNoZWNrIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2ZmZiAwIDAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzA0NGNkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiAzZXg7XG4gIHdpZHRoOiAzZXg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubm9vZlByb2plY3RzIHtcbiAgYmFja2dyb3VuZDogIzcwNDRjZDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcmlnaHQ6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxOHB4LzI5cHggSGVsdmV0aWNhIE5ldWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRoYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBJbiB5b3VyIGNvbXBvbmVudCdzIENTUyBmaWxlIG9yIGdsb2JhbCBzdHlsZXNoZWV0ICovXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgLyogSGlkZSB0aGUgZGVmYXVsdCBjaGVja2JveCBhcHBlYXJhbmNlICovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jdXN0b20tY2hlY2tib3ggKyBsYWJlbCB7XG4gIC8qIFN0eWxlIHRoZSBjdXN0b20gY2hlY2tib3ggY29udGFpbmVyICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzA0NGNkO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tY2hlY2tib3g6Y2hlY2tlZCArIGxhYmVsOjpiZWZvcmUge1xuICAvKiBTdHlsZSB0aGUgY2hlY2ttYXJrIHdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQgKi9cbiAgY29udGVudDogXCLinJNcIjtcbiAgLyogVW5pY29kZSBjaGFyYWN0ZXIgZm9yIGNoZWNrbWFyayAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM3MDQ0Y2Q7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuLyogQWRqdXN0IHRoZSBhcHBlYXJhbmNlIHdoZW4gaG92ZXJpbmcgb3ZlciB0aGUgbGFiZWwgKi9cbi5jdXN0b20tY2hlY2tib3ggKyBsYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b24gKi9cbiNyZWdpc3RlckJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDQ0Y2Q7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jcmVnaXN0ZXJCdG4gLmZhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuI3JlZ2lzdGVyQnRuLnVwIC5mYSB7XG4gIGNvbnRlbnQ6IFwi74SGXCI7XG59XG4jcmVnaXN0ZXJCdG4uZG93biAuZmEge1xuICBjb250ZW50OiBcIu+Eh1wiO1xufVxuXG4ubW9kYWwtZm9vdGVyIC5mb290ZXItYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5maXhlZENvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgLyogQWRqdXN0IHRoaXMgdmFsdWUgaWYgbmVjZXNzYXJ5ICovXG4gIGxlZnQ6IDA7XG4gIC8qIEFkanVzdCB0aGlzIHZhbHVlIGlmIG5lY2Vzc2FyeSAqL1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxudGguZml4ZWRDb2x1bW4sXG50ZC5maXhlZENvbHVtbiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAyO1xufVxuXG50aC5hY3Rpb25UaCxcbnRkLmFjdGlvblRkIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgei1pbmRleDogMztcbn1cblxuLmZpeGVkQ29sdW1uOm50aC1jaGlsZCgxKSxcbi5maXhlZENvbHVtbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxNTBweDtcbiAgYm94LXNoYWRvdzogNXB4IDAgNXB4IC01cHggIzMzMztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbnRyIHRoOmZpcnN0LWNoaWxkIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA0O1xufVxuXG4uYWN0aW9uVGQgZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA1O1xuICBtaW4taGVpZ2h0OiAzNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG50aC5maXhlZENvbHVtbi5lbXBOYW1lQ29sIHtcbiAgbGVmdDogMTUwcHg7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5lbXBTa2lsbExldmVsVGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZW1wU2tpbGxMZXZlbFRkIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcFNraWxsTGV2ZWxUZCAuY2hlY2tib3gtYmxvY2sgbGFiZWwge1xuICBtYXJnaW46IDBweDtcbn1cbi5lbXBTa2lsbExldmVsVGQgLmNoZWNrYm94LWJsb2NrIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZW1wU2tpbGxMZXZlbFRkLkVRVUFMIHtcbiAgYmFja2dyb3VuZDogIzk5Y2QzYTtcbiAgY29sb3I6ICMwMDA7XG59XG4uZW1wU2tpbGxMZXZlbFRkLk5PVF9FTElHSUJMRSB7XG4gIGJhY2tncm91bmQ6ICNlZDM4MzM7XG4gIGNvbG9yOiAjMDAwO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=ojt-plan-ojt-plan-module-es2015.js.map