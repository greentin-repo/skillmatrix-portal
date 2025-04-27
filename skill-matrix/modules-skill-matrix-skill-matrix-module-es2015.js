(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-skill-matrix-skill-matrix-module"],{

/***/ "/wb3":
/*!*************************************************************!*\
  !*** ./src/app/modules/skill-matrix/skill-matrix.module.ts ***!
  \*************************************************************/
/*! exports provided: MY_FORMATS, SkillMatrixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixModule", function() { return SkillMatrixModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _skill_matrix_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-matrix-routing.module */ "IiAp");
/* harmony import */ var _skill_matrix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-matrix.component */ "53Z8");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions/actions.component */ "xgNC");
/* harmony import */ var _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assessments/assessments.component */ "Tdju");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificates/certificates.component */ "t+f2");
/* harmony import */ var _workforce_deployment_workforce_deployment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workforce-deployment/workforce-deployment.component */ "Mh6V");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "ebz3");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/pipe/custom-pipe.module */ "QrAV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./skill-matrix.constant */ "VX2j");
/* harmony import */ var _workforce_deployment_add_view_workforce_add_view_workforce_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workforce-deployment/add-view-workforce/add-view-workforce.component */ "QPyU");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















// import { AssessessmentDetailModalComponent } from 'src/app/theme/shared/components/assessessment-detail-modal/assessessment-detail-modal.component';
const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
let SkillMatrixModule = class SkillMatrixModule {
};
SkillMatrixModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skill_matrix_component__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixComponent"], _actions_actions_component__WEBPACK_IMPORTED_MODULE_5__["ActionsComponent"], _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_6__["AssessmentsComponent"], _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__["CertificatesComponent"], _workforce_deployment_workforce_deployment_component__WEBPACK_IMPORTED_MODULE_8__["WorkforceDeploymentComponent"], _workforce_deployment_add_view_workforce_add_view_workforce_component__WEBPACK_IMPORTED_MODULE_14__["AddViewWorkforceComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _skill_matrix_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillMatrixRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_11__["CustomPipeModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_17__["MomentDateModule"]
        ],
        providers: [
            { provide: 'Constant', useValue: _skill_matrix_constant__WEBPACK_IMPORTED_MODULE_13__["CONSTANT"] },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ]
    })
], SkillMatrixModule);



/***/ }),

/***/ "53Z8":
/*!****************************************************************!*\
  !*** ./src/app/modules/skill-matrix/skill-matrix.component.ts ***!
  \****************************************************************/
/*! exports provided: SkillMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixComponent", function() { return SkillMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skill-matrix.component.html */ "rh6a");
/* harmony import */ var _skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-matrix.component.scss */ "X7Pu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skilling.service */ "Sh6i");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let SkillMatrixComponent = class SkillMatrixComponent {
    constructor(apiService, modalService, fb, Constant) {
        this.apiService = apiService;
        this.modalService = modalService;
        this.fb = fb;
        this.listLoader = false;
        this.exportLoader = false;
        this.skillMatrixDetails = {};
        this.searchDet = {};
        this.SingleDropdownSettings = {};
        this.SingleCellDropdownSettings = {};
        this.branchAccessList = [];
        this.userDet = {};
        this.selectedBranch = {};
        this.deptList = [];
        this.cellList = [];
        this.constant = {};
        this.filterFlag = false;
        this.isAppliedFilter = false;
        this.hasSkillMatrixData = false;
        this.revNo = [];
        this.shiftList = [
            { id: 1, name: 1 },
            { id: 2, name: 2 },
            { id: 3, name: 3 },
        ];
        this.filteredSkillMatrixTLData = [];
        this.sheetColumns = [];
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        // console.log(this.userDet)
        this.searchDet.shift = [this.shiftList[0]];
        this.searchDet.branch = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
        // this.searchDet.dept = [{ id: this.userDet.dept.deptId, name: this.userDet.dept.deptName }];
        // this.searchDet.cell = [{ id: this.userDet.line.id, name: this.userDet.line.name }];
        this.getBranchAccessList();
        this.searchDet.isDefaultWorking = true;
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            lineIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("")
        });
        // this.getSkillMatixData();
    }
    /* get branch access list on organization and logged in employee
        @Author Jayshri Kolase
       * @Date August 18, 2023
     */
    getBranchAccessList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    /* Use For Add Screen */
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    /* Use For Add Screen */
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                /* Use For Add Screen */
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            this.branchAccessList = this.sortFunction(this.branchAccessList, 'name');
            // this.searchDet.branch = [this.branchAccessList[0]];
            // this.onChangeBranch(this.searchDet.branch[0]);
            this.getDeptList();
        });
    }
    /* change branch on branch selection and call stage list and Workflow Config List
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    onChangeBranch(event) {
        // console.log(event)
        this.searchDet.isDefaultWorking = false;
        if (event) {
            this.deptList = [];
            this.searchDet.dept = [];
            this.cellList = [];
            this.searchDet.cell = [];
            // this.skillMatrixDetails = {};
            this.searchDet.branch = [{ id: event.id, name: event.name }];
            this.getDeptList();
            // this.getCellList();
        }
        else {
            this.deptList = [];
            this.searchDet.dept = [];
            this.cellList = [];
            this.searchDet.cell = [];
            // this.skillMatrixDetails = {};
        }
    }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getDeptList() {
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            this.apiService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + this.searchDet.branch[0].id).subscribe((res) => {
                if (res.result) {
                    if (res.deptList != null && res.deptList.length > 0) {
                        /* Use For Add Screen */
                        this.deptList = this.setArray(res.deptList, 'deptId', 'deptName');
                        this.deptList = this.sortFunction(this.deptList, 'deptName');
                        if (this.searchDet.isDefaultWorking) {
                            this.searchDet.dept = [this.deptList[0]];
                            this.getCellList();
                            // this.getSkillMatixData();
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
    }
    /* get Cell list on branch selection
      @Author Mahesh
     * @Date Oct 05, 2023
   */
    getCellList() {
        var req = {
            branchId: this.searchDet.branch[0].id
        };
        if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            req.deptId = this.searchDet.dept[0].id;
        }
        this.apiService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    response.dataList = this.sortFunction(response.dataList, 'lineName');
                    this.cellList = this.setArray(response.dataList, 'lineId', 'lineName');
                    this.searchDet.cell = [this.cellList[0]];
                    if (!this.searchDet.filterFlag) {
                        this.getSkillMatixData();
                    }
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
    onChangeCell(event) {
        this.searchDet.isDefaultWorking = false;
        // if (event) {
        //   this.getSkillMatixData();
        // } else {
        //   // this.deptList = [];
        // this.skillMatrixDetails = {};
        // }
    }
    onChangeDept(event) {
        this.searchDet.isDefaultWorking = false;
        if (event) {
            this.getCellList();
            // this.getSkillMatixData();
            this.cellList = [];
            this.searchDet.cell = [];
            // this.skillMatrixDetails = {};
        }
        else {
            this.cellList = [];
            this.searchDet.cell = [];
            this.searchDet.dept = [];
            // this.skillMatrixDetails = {};
        }
    }
    isObjectEmpty(objectName) {
        return Object.keys(objectName).length == 0;
    }
    getSkillMatixData() {
        this.skillMatrixDetails = {};
        this.skillMatrixDocument = {};
        this.filteredSkillMatrixTLData = [];
        this.listLoader = true;
        let cellObj;
        if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            cellObj = this.cellList.filter(x => x.id == this.searchDet.cell[0].id);
        }
        let req = {
            "orgId": this.userDet.organization.orgId,
        };
        if (this.searchDet.shift != null && this.searchDet.shift.length > 0) {
            req.shiftNo = this.searchDet.shift[0].id;
        }
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            req.branchId = this.searchDet.branch[0].id;
        }
        if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            req.deptId = this.searchDet.dept[0].id;
        }
        if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            req.lineId = this.searchDet.cell[0].id;
        }
        this.getSkillMatrixListForExport = {};
        this.hasSkillMatrixData = false;
        this.multiskillingPercentage = 0;
        this.apiService.getSkillMatrixData('apis/sm/getSkillMatrixList', req).subscribe((res) => {
            var _a;
            // console.log(res);
            this.listLoader = false;
            if (res.result) {
                this.getSkillMatrixListForExport = (_a = res.data.skillMatrixDetails) !== null && _a !== void 0 ? _a : {};
                this.hasSkillMatrixData = res.data.skillMatrixDetails != null ? true : false;
                if (res.data.hasOwnProperty('levelSummary') && res.data.levelSummary != null && res.data.levelSummary.length > 0) {
                    for (let count = 0; count < res.data.levelSummary.length; count++) {
                        res.data.levelSummary[count].requiredCount = (res.data.levelSummary[count].requiredCount) ? Math.round(res.data.levelSummary[count].requiredCount) : 0;
                        res.data.levelSummary[count].actualCount = (res.data.levelSummary[count].actualCount) ? Math.round(res.data.levelSummary[count].actualCount) : 0;
                    }
                    res.data.levelSummary = this.sortFunction(res.data.levelSummary, 'levelId');
                }
                this.skillMatrixDetails = res.data;
                if (res.data.tableData != null && res.data.tableData.length > 0) {
                    // First, initialize the array if it doesn't exist
                    // if (!this.skillMatrixDetails.tableEmpData) {
                    this.skillMatrixDetails.tableEmpData = [];
                    this.filteredEmpData = [];
                    // }
                    for (let i = 0; i < res.data.tableData.length; i++) {
                        if (res.data.tableData[i].empLevel != 'TL') {
                            this.skillMatrixDetails.tableEmpData.push(res.data.tableData[i]);
                            this.multiskillingPercentage += res.data.tableData[i].skillingPer;
                        }
                    }
                    this.multiskillingPercentage = Math.round(this.multiskillingPercentage / this.skillMatrixDetails.tableEmpData.length);
                    // for (let i = 0; i < res.data.tableData.length; i++) {
                    //   if (res.data.tableData[i].empLevel == 'TL') {
                    //     this.skillMatrixDetails.tableEmpData.push(res.data.tableData[i]);
                    //   }
                    // }
                    this.filteredEmpData = this.skillMatrixDetails.tableEmpData;
                }
                //     Aniket :- Store document value in skillMatrixDocument
                this.skillMatrixDocument = res.data.documentName;
            }
            else {
                this.skillMatrixDetails = {};
            }
            this.filteredSkillMatrixTLData = this.skillMatrixDetails.tableData.filter(row => row.empLevel == 'TL');
        }, (error) => {
            this.listLoader = false;
        });
    }
    getCombinedHeader(key) {
        const empLevelColumn = this.skillMatrixDetails.columns.find(column => column.field == key);
        return `${empLevelColumn.heading}`;
    }
    getHeadingWithLevel(obj) {
        return ` ${obj.heading}`;
    }
    getWorkStationLength() {
        let length = 0;
        if (!this.isObjectEmpty(this.skillMatrixDetails) && this.skillMatrixDetails.columns != null && this.skillMatrixDetails.columns.length != 0) {
            for (let index = 0; index < this.skillMatrixDetails.columns.length; index++) {
                if (this.skillMatrixDetails.columns[index].field != 'empId' && this.skillMatrixDetails.columns[index].field != 'empName' && this.skillMatrixDetails.columns[index].field != 'gender' && this.skillMatrixDetails.columns[index].field != 'experience' && this.skillMatrixDetails.columns[index].field != 'empLevel') {
                    length++;
                }
            }
        }
        return length;
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
    isChecked(row, field) {
        let obj = {};
        for (let item in row) {
            if (field == item) {
                // Condition 1
                if (!this.isObjectEmpty(row) && row[item].hasOwnProperty("currentSkillLevelId")) {
                    if (row[item].currentSkillLevelId == 1) {
                        return { 'status': this.constant.EQUAL, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId == 2) {
                        return { 'status': this.constant.ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId == 3) {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else if (row[item].currentSkillLevelId == 4) {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: row[item].currentSkillLevel };
                    }
                    else {
                        return { 'status': this.constant.OTHER, level: ' ' };
                    }
                }
                else {
                    return { 'status': this.constant.OTHER, level: ' ' };
                }
            }
        }
        return obj;
    }
    getSkillLevelClass(skillLevel) {
        switch (skillLevel) {
            case 'L1':
                return 'red-background';
            case 'L2':
                return 'gray-background';
            case 'L3':
                return 'green-background';
            case 'L4':
                return 'green-background';
            default:
                return 'white-background';
        }
    }
    exportSkillMatrix() {
        this.exportLoader = true;
        let headers = [];
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_5__["Workbook"]();
        let worksheet = workbook.addWorksheet("Skill Matrix", {});
        this.sheetColumns = [
            { header: '', key: 'sr', width: 30 },
            { header: '', key: 'empName', width: 30 },
            { header: '', key: 'empName', width: 30 },
            // { header: '', key: 'experience', width: 30 },
            // { header: '', key: 'empLevel', width: 30 },
            { header: 'MACHINE INDEX RATING', key: 'MACHINE_INDEX_RATING', width: 30 },
        ];
        for (let i = 0; i < this.skillMatrixDetails.columns.length; i++) {
            if (this.skillMatrixDetails.columns[i].field != 'empId' && this.skillMatrixDetails.columns[i].field != 'empName' && this.skillMatrixDetails.columns[i].field != 'gender' && this.skillMatrixDetails.columns[i].field != 'experience' && this.skillMatrixDetails.columns[i].field != 'empLevel') {
                this.sheetColumns.push({ header: this.skillMatrixDetails.columns[i].machineIndex, key: this.skillMatrixDetails.columns[i].machineIndex, width: 30 });
            }
        }
        ;
        worksheet.columns = this.sheetColumns;
        this.sheetColumns = [];
        worksheet.mergeCells('A1', 'C1');
        this.sheetColumns = [
            { header: '', key: 'sr', width: 30 },
            { header: '', key: 'empName', width: 30 },
            { header: '', key: 'empName', width: 30 },
            // { header: '', key: 'experience', width: 30 },
            // { header: '', key: 'empLevel', width: 30 },
            { header: 'MIN. SKILL LEVEL REQ.', key: 'MIN_SKILL_LEVEL_REQ', width: 30 },
        ];
        for (let i = 0; i < this.skillMatrixDetails.columns.length; i++) {
            if (this.skillMatrixDetails.columns[i].field != 'empId' && this.skillMatrixDetails.columns[i].field != 'empName' && this.skillMatrixDetails.columns[i].field != 'gender' && this.skillMatrixDetails.columns[i].field != 'experience' && this.skillMatrixDetails.columns[i].field != 'empLevel') {
                this.sheetColumns.push({ header: this.skillMatrixDetails.columns[i].levelName, key: this.skillMatrixDetails.columns[i].levelName, width: 30 });
            }
        }
        ;
        worksheet.columns = this.sheetColumns;
        workbook.xlsx.writeBuffer().then((data) => {
            let blob = new Blob([data], { type: 'xlsx' });
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, 'Skill_Matrix.xlsx');
        });
        this.exportLoader = false;
    }
    // exportReportOld() {
    //   let exportData: any = [];
    //   let machineIndexColCount = this.skillMatrixDetails.columns.filter(x => x["machineIndex"]).length;
    //   let columnCount = 5 + machineIndexColCount;
    //   if (this.skillMatrixDocument != null && this.skillMatrixDocument != undefined) {
    //     var date = new Date(this.skillMatrixDocument.currentDate);
    //     var formattedDate = formatDate(date);
    //   }
    //   function formatDate(date) {
    //     var options = { day: '2-digit', month: 'short', year: 'numeric' };
    //     return date.toLocaleDateString('en-US', options);
    //   }
    //   //SECTION 1
    //   for (let i = 0; i < 3; i++) {
    //     let row = {};
    //     // Aniket :- Show doc-no,rev-date,rev-no
    //     if (i === 0) {
    //       if (this.skillMatrixDocument !== undefined && this.skillMatrixDocument !== null) {
    //         row["c0"] = "Doc No:-" + this.skillMatrixDocument.docName;
    //       } else {
    //         row["c0"] = "Doc No:-";
    //       }
    //     } else if (i === 1) {
    //       if (formattedDate !== undefined && formattedDate !== null) {
    //         row["c0"] = "Rev Date:-" + formattedDate;
    //       } else {
    //         row["c0"] = "Rev Date:-";
    //       }
    //     } else if (i === 2) {
    //       if (this.revNo !== undefined && this.revNo !== null && this.revNo != '') {
    //         row["c0"] = "Rev No:- " + this.revNo;
    //       } else {
    //         row["c0"] = "Rev No:- ";
    //       }
    //     }
    //     if (i == 0) {
    //       row["c" + 3] = "MACHINE INDEX RATING";
    //     } else if (i == 1) {
    //       row["c" + 3] = "MIN. SKILL LEVEL REQ.";
    //     } else if (i == 2) {
    //       row["c" + 3] = "REQUIRED NUMBER TRAINED";
    //     }
    //     if (i == 0) {
    //       for (let j = 5; j < machineIndexColCount + 5; j++) {
    //         row["c" + (j)] = this.skillMatrixDetails.columns[j].machineIndex;
    //       }
    //       row["c" + (machineIndexColCount + 5)] = "NO. OF SHIFTS";
    //       columnCount++;
    //       row["c" + (machineIndexColCount + 6)] = this.searchDet.shift[0].id;
    //       columnCount++;
    //     }
    //     else if (i == 1) {
    //       for (let j = 5; j < machineIndexColCount + 5; j++) {
    //         row["c" + (j)] = this.skillMatrixDetails.columns[j].levelName;
    //       }
    //     }
    //     else if (i == 2) {
    //       for (let j = 5; j < machineIndexColCount + 5; j++) {
    //         row["c" + (j)] = this.skillMatrixDetails.columns[j].requiredWorkforce;
    //       }
    //       row["c" + (machineIndexColCount + 5)] = "SKILL LEVEL";
    //       columnCount++;
    //       row["c" + (machineIndexColCount + 6)] = "MULTI SKILL %";
    //       columnCount++;
    //       row["c" + (machineIndexColCount + 7)] = "MARKS";
    //       columnCount++;
    //     }
    //     console.log(row)
    //     exportData.push(row);
    //   }
    //   let tempWorkstationList = [];
    //   //SECTION 2
    //   let row = {};
    //   row["c" + 0] = "Sr No";
    //   row["c" + 1] = "Emp Id";
    //   row["c" + 2] = "Name";
    //   row["c" + 3] = "Exp";
    //   row["c" + 4] = "Employee Level";
    //   for (let j = 5; j < machineIndexColCount + 5; j++) {
    //     row["c" + (j)] = this.skillMatrixDetails.columns[j].field;
    //     tempWorkstationList.push(this.skillMatrixDetails.columns[j].field);
    //   }
    //   exportData.push(row);
    //   let sheetColWidths = [];
    //   sheetColWidths.push(10);
    //   sheetColWidths.push(10);
    //   sheetColWidths.push(20);
    //   sheetColWidths.push(10);
    //   sheetColWidths.push(20);
    //   let checkedIndexes: any = [];
    //   //SECTION 3
    //   let isNotTE = 0;
    //   for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
    //     if (this.skillMatrixDetails.tableEmpData[i].empLevel != 'TL') {
    //       let row = {};
    //       row["c" + 0] = i + 1;
    //       row["c" + 1] = this.skillMatrixDetails.tableEmpData[i].empId;
    //       row["c" + 2] = this.skillMatrixDetails.tableEmpData[i].empName;
    //       row["c" + 3] = this.skillMatrixDetails.tableEmpData[i].experience;
    //       row["c" + 4] = this.skillMatrixDetails.tableEmpData[i].empLevel;
    //       for (let j = 5; j < machineIndexColCount + 5; j++) {
    //         sheetColWidths.push(20);
    //         for (var key in this.skillMatrixDetails.tableEmpData[i]) {
    //           if (key == tempWorkstationList[j - 5]) {
    //             let checked = this.isChecked(this.skillMatrixDetails.tableEmpData[i], key);
    //             row["c" + j] = checked.level;
    //             if (checked.status == this.constant.EQUAL) {
    //               checkedIndexes.push({
    //                 row: i + 5,
    //                 col: j + 1
    //               });
    //             }
    //             break;
    //           }
    //         }
    //       }
    //       row["c" + (machineIndexColCount + 5)] = this.skillMatrixDetails.tableEmpData[i].skillLevel;
    //       row["c" + (machineIndexColCount + 6)] = this.skillMatrixDetails.tableEmpData[i].skillingPer + '%';
    //       row["c" + (machineIndexColCount + 7)] = this.skillMatrixDetails.tableEmpData[i].marks;
    //       exportData.push(row);
    //       isNotTE++;
    //     }
    //   }
    //   // console.log(exportData)
    //   exportData.push({});
    // if (this.skillMatrixDetails.workstationLvlCount != null) {
    //   let row = {};
    //   row["c" + 0] = 'Actual No Trained';
    //   row["c" + 1] = '';
    //   row["c" + 2] = '';
    //   row["c" + 3] = '';
    //   row["c" + 4] = '';
    //   let index = 5
    //   for (let j = 0; j < this.skillMatrixDetails.workstationLvlCount.length; j++) {
    //     row["c" + (index)] = this.skillMatrixDetails.workstationLvlCount[j].totalCount;
    //     index++;
    //   }
    //   exportData.push(row);
    // }
    // if (this.skillMatrixDetails.tableEmpData != null) {
    //   let row = {};
    //   row["c" + 0] = 'Team Leader Skill Level';
    //   row["c" + 1] = '';
    //   row["c" + 2] = '';
    //   row["c" + 3] = '';
    //   row["c" + 4] = '';
    //   let index = 5
    //   for (let j = 0; j < this.skillMatrixDetails.workstationLvlCount.length + 5; j++) {
    //     row["c" + (index)] = '';
    //     index++;
    //   }
    //   exportData.push(row);
    // }
    // // console.log(exportData)
    // exportData.push({});
    // for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
    //   if (this.skillMatrixDetails.tableEmpData[i].empLevel === 'TL') {
    //     let row = {};
    //     row["c" + 0] = i + 1;
    //     row["c" + 1] = this.skillMatrixDetails.tableEmpData[i].empId;
    //     row["c" + 2] = this.skillMatrixDetails.tableEmpData[i].empName;
    //     row["c" + 3] = this.skillMatrixDetails.tableEmpData[i].experience;
    //     row["c" + 4] = this.skillMatrixDetails.tableEmpData[i].empLevel;
    //     for (let j = 5; j < machineIndexColCount + 5; j++) {
    //       sheetColWidths.push(20);
    //       for (var key in this.skillMatrixDetails.tableEmpData[i]) {
    //         if (key == tempWorkstationList[j - 5]) {
    //           let checked = this.isChecked(this.skillMatrixDetails.tableEmpData[i], key);
    //           row["c" + j] = checked.level;
    //           if (checked.status == this.constant.EQUAL) {
    //             checkedIndexes.push({
    //               row: i + 5,
    //               col: j + 1
    //             });
    //           }
    //           break;
    //         }
    //       }
    //     }
    //     row["c" + (machineIndexColCount + 5)] = this.skillMatrixDetails.tableEmpData[i].skillLevel;
    //     row["c" + (machineIndexColCount + 6)] = this.skillMatrixDetails.tableEmpData[i].skillingPer + '%';
    //     row["c" + (machineIndexColCount + 7)] = this.skillMatrixDetails.tableEmpData[i].marks;
    //     exportData.push(row);
    //   }
    // }
    // // console.log(exportData)
    // exportData.push({});
    //   //SECTION 6 - Bottom small level tables - Data
    //   row = {};
    //   row["c" + 0] = "Skill Level";
    //   row["c" + 1] = "REQD.";
    //   row["c" + 2] = "ACT.";
    //   row["c" + 3] = "GAP";
    //   exportData.push(row);
    //   for (let i = 0; i < this.skillMatrixDetails.levelSummary.length; i++) {
    //     if (this.skillMatrixDetails.levelSummary[i].levelName != 'L4') {
    //       row = {};
    //       row["c" + 0] = "L" + (i + 1);
    //       row["c" + 1] = this.skillMatrixDetails.levelSummary[i].requiredCount;
    //       row["c" + 2] = this.skillMatrixDetails.levelSummary[i].actualCount;
    //       if ((this.skillMatrixDetails.levelSummary[i].requiredCount && this.skillMatrixDetails.levelSummary[i].requiredCount > 0)
    //         && (this.skillMatrixDetails.levelSummary[i].requiredCount > this.skillMatrixDetails.levelSummary[i].actualCount)) {
    //         row["c" + 3] = this.skillMatrixDetails.levelSummary[i].requiredCount - this.skillMatrixDetails.levelSummary[i].actualCount;
    //       } else {
    //         row["c" + 3] = 0;
    //       }
    //       exportData.push(row);
    //     }
    //   }
    //   // console.log(exportData);
    //   let headers: any = [];
    //   let workbook = new Workbook();
    //   let worksheet = workbook.addWorksheet("Skill Matrix", {});
    //   for (let index = 0; index < columnCount; index++) {
    //     headers.push({
    //       key: ["c" + index], width: sheetColWidths[index]
    //     });
    //   }
    //   worksheet.columns = headers;
    //   var rows = [];
    //   var rowslist: any = {};
    //   Object.assign({}, rowslist);
    //   exportData.forEach((element) => {
    //     rowslist = {};
    //     for (var x in element) {
    //       rowslist[x] = element[x]
    //     }
    //     rows.push(rowslist);
    //   });
    //   worksheet.addRows(rows, "n");
    //   //Merging cells for MACHINE INDEX RATING, MIN.SKILL LEVL REQ. & REQUIRED NUMBER TRAINED cells
    //   for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
    //     worksheet.mergeCells(rowNumber, 4, rowNumber, 5);
    //   }
    //   /* worksheet.mergeCells(1, 51, 2, 51); // Merge cells for rows 1 and 2 in column 51 ("c51")
    //    const areCellsMerged = worksheet.getCell(1, 51).isMerged || worksheet.getCell(1, 52).isMerged;
    //    if (!areCellsMerged) {
    //      // Merge cells for rows 1 and 2 in columns 51 and 52 ("c51" and "c52")
    //      worksheet.mergeCells(1, 52, 1, 53);
    //      worksheet.mergeCells(2, 53, 2, 53);
    //    }
    //    worksheet.mergeCells(3, 51, 4, 51); // Merge cells for rows 1 and 2 in column 51 ("c51")
    //    worksheet.mergeCells(3, 52, 4, 52); // Merge cells for rows 1 and 2 in column 51 ("c51")
    //    worksheet.mergeCells(3, 53, 4, 53); // Merge cells for rows 1 and 2 in column 51 ("c51")
    //    //Setting bold font to all cells first 4 rows*/
    //   // console.log(isNotTE)
    //   worksheet.mergeCells((isNotTE + 6), 1, (isNotTE + 6), 5);
    //   worksheet.mergeCells((isNotTE + 7), 1, (isNotTE + 7), (this.skillMatrixDetails.workstationLvlCount.length + 5 + 3));
    //   for (let rowNumber = 1; rowNumber < 5; rowNumber++) {
    //     let row = worksheet.getRow(rowNumber);
    //     row.font = {
    //       bold: true
    //     }
    //   }
    //   for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
    //     let row = worksheet.getRow(rowNumber);
    //     // Loop through all columns starting from F (index 6 in Excel)
    //     for (let colNumber = 6; colNumber <= row.cellCount; colNumber++) {
    //       // Get the current cell
    //       let cell = row.getCell(colNumber);
    //       // Apply center alignment if the column is F or beyond
    //       cell.alignment = {
    //         vertical: 'middle',
    //         horizontal: 'center'
    //       };
    //     }
    //   }
    //   //Setting bold font to headers of bottom level table
    //   let lvlTblRowIndex = 3 + 1 + 2 + this.skillMatrixDetails.tableEmpData.length;
    //   {
    //     let row = worksheet.getRow(lvlTblRowIndex);
    //     row.font = {
    //       bold: true
    //     }
    //   }
    //   //Setting borders to cells from tableData which shows level(L0,L1,L2) in RED & GREEN color
    //   for (let i = 5; i < this.skillMatrixDetails.tableEmpData.length + 5; i++) {
    //     let row = worksheet.getRow(i);
    //     row.eachCell((cell, colNumber) => {
    //       if (colNumber > 5) {
    //         cell.border = {
    //           top: { style: 'double', color: { argb: 'f6f6f6' } },
    //           left: { style: 'double', color: { argb: 'f6f6f6' } },
    //           bottom: { style: 'double', color: { argb: 'f6f6f6' } },
    //           right: { style: 'double', color: { argb: 'f6f6f6' } }
    //         };
    //         cell.alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //     });
    //   }
    //   //Setting text center to cells of bottom lelve table
    //   lvlTblRowIndex = 3 + 1 + 2 + this.skillMatrixDetails.tableEmpData.length + 4;
    //   // console.log('lvlTblRowIndex:', lvlTblRowIndex);
    //   // console.log('Total Rows:', worksheet.rowCount);
    //   for (let i = 0; i < this.skillMatrixDetails.levelSummary.length; i++) {
    //     let row = worksheet.getRow(lvlTblRowIndex + i + 1);
    //     row.alignment = {
    //       horizontal: 'center'
    //     }
    //     if (this.skillMatrixDetails.levelSummary[i].levelId == 1) {
    //       //RED color to L1 cell
    //       row.getCell(1).fill = {
    //         type: 'pattern',
    //         pattern: 'solid',
    //         fgColor: { argb: 'FF0000' }
    //       }
    //     } else if (this.skillMatrixDetails.levelSummary[i].levelId == 2) {
    //       //GREEN color to L2 cell
    //       row.getCell(1).fill = {
    //         type: 'pattern',
    //         pattern: 'solid',
    //         fgColor: { argb: 'D9D9D9' }
    //       }
    //     } else if (this.skillMatrixDetails.levelSummary[i].levelId == 3) {
    //       //YELLOW color to L3 cell
    //       row.getCell(1).fill = {
    //         type: 'pattern',
    //         pattern: 'solid',
    //         fgColor: { argb: '99cd3a' }
    //       }
    //     }
    //     /* else if (this.skillMatrixDetails.levelSummary[i].levelId == 4) {
    //       //YELLOW color to L4 cell
    //       row.getCell(1).fill = {
    //         type: 'pattern',
    //         pattern: 'solid',
    //         fgColor: { argb: '99cd3a' }
    //       }
    //     } */
    //   }
    //   //Highlighting EQUAL, NOT EQUAL Cells with RED and GREEN color
    //   let nonTlEmployees = [];
    //   let tlEmployees = [];
    //   for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
    //     if (this.skillMatrixDetails.tableEmpData[i].empLevel !== 'TL') {
    //       nonTlEmployees.push(this.skillMatrixDetails.tableEmpData[i]);
    //     } else {
    //       tlEmployees.push(this.skillMatrixDetails.tableEmpData[i]);
    //     }
    //   }
    //   for (let rowNumber = 5; rowNumber < nonTlEmployees.length + 5; rowNumber++) {
    //     let row = worksheet.getRow(rowNumber);
    //     for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 4; colNumber++) {
    //       let isChecked = false;
    //       checkedIndexes.forEach(element => {
    //         if (element.row === rowNumber && element.col === colNumber) {
    //           isChecked = true;
    //         }
    //       });
    //       // Get the value of the current cell
    //       let cellValue = row.getCell(colNumber).value;
    //       // Check if the cell value is "L1", "L2", or "L3"
    //       if (cellValue === "L1") {
    //         // Set the fill color for "L1"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'FF0000' } // Yellow
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L2") {
    //         // Set the fill color for "L2"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'D9D9D9' } // Orange
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L3") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //       else if (cellValue === "L4") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else {
    //         // Handle other cases if needed
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //     }
    //   }
    //   for (let rowNumber = 5 + nonTlEmployees.length; rowNumber < this.skillMatrixDetails.tableEmpData.length + 5 + 4; rowNumber++) {
    //     let row = worksheet.getRow(rowNumber);
    //     for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 4; colNumber++) {
    //       let isChecked = false;
    //       checkedIndexes.forEach(element => {
    //         if (element.row === rowNumber && element.col === colNumber) {
    //           isChecked = true;
    //         }
    //       });
    //       // Get the value of the current cell
    //       let cellValue = row.getCell(colNumber).value;
    //       // Check if the cell value is "L1", "L2", or "L3"
    //       if (cellValue === "L1") {
    //         // Set the fill color for "L1"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'FF0000' } // Yellow
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L2") {
    //         // Set the fill color for "L2"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'D9D9D9' } // Orange
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L3") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //       else if (cellValue === "L4") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else {
    //         // Handle other cases if needed
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //     }
    //   }
    //   for (let rowNumber = 5; rowNumber < this.skillMatrixDetails.workstationLvlCount.length + 5; rowNumber++) {
    //     let row = worksheet.getRow(rowNumber);
    //     for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 1 + 1; colNumber++) {
    //       let isChecked = false;
    //       checkedIndexes.forEach(element => {
    //         if (element.row === rowNumber && element.col === colNumber) {
    //           isChecked = true;
    //         }
    //       });
    //       // Get the value of the current cell
    //       let cellValue = row.getCell(colNumber).value;
    //       // Check if the cell value is "L1", "L2", or "L3"
    //       if (cellValue === "L1") {
    //         // Set the fill color for "L1"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'FF0000' } // Yellow
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L2") {
    //         // Set the fill color for "L2"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: 'D9D9D9' } // Orange
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L3") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else if (cellValue === "L4") {
    //         // Set the fill color for "L3"
    //         row.getCell(colNumber).fill = {
    //           type: 'pattern',
    //           pattern: 'solid',
    //           fgColor: { argb: '99cd3a' } // Red
    //         };
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       } else {
    //         // Handle other cases if needed
    //         row.getCell(colNumber).alignment = {
    //           vertical: 'middle',
    //           horizontal: 'center'
    //         };
    //       }
    //     }
    //   }
    //   for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
    //     worksheet.mergeCells(rowNumber, 1, rowNumber, 3);
    //   }
    //   workbook.xlsx.writeBuffer().then((data) => {
    //     var excelName = "Skill Matrix";
    //     let blob = new Blob([data], { type: "xlsx" });
    //     fs.saveAs(blob, excelName + ".xlsx");
    //   });
    // }
    exportReport() {
        let exportData = [];
        let titleSheet = '';
        let machineIndexColCount = this.skillMatrixDetails.columns.filter(x => x["machineIndex"]).length;
        let columnCount = 5 + machineIndexColCount;
        if (this.skillMatrixDocument != null && this.skillMatrixDocument != undefined) {
            var date = new Date(this.skillMatrixDocument.currentDate);
            var formattedDate = formatDate(date);
        }
        function formatDate(date) {
            var options = { day: '2-digit', month: 'short', year: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }
        if (this.hasSkillMatrixData) {
            let titleRow = {};
            titleRow["c0"] = "Cell Name" + ":-" + this.getSkillMatrixListForExport.lineName;
            exportData.push(titleRow);
        }
        //SECTION 1
        for (let i = 0; i < 3; i++) {
            let row = {};
            // Aniket :- Show doc-no,rev-date,rev-no
            if (i === 0) {
                if (this.skillMatrixDocument !== undefined && this.skillMatrixDocument !== null) {
                    row["c0"] = "Doc No:-" + this.skillMatrixDocument.docName;
                }
                else {
                    row["c0"] = "Doc No:-";
                }
            }
            else if (i === 1) {
                if (formattedDate !== undefined && formattedDate !== null) {
                    row["c0"] = "Rev Date:-" + formattedDate;
                }
                else {
                    row["c0"] = "Rev Date:-";
                }
            }
            else if (i === 2) {
                if (this.revNo !== undefined && this.revNo !== null && this.revNo != '') {
                    row["c0"] = "Rev No:- " + this.revNo;
                }
                else {
                    row["c0"] = "Rev No:- ";
                }
            }
            if (i == 0) {
                row["c" + 3] = "MACHINE INDEX RATING";
            }
            else if (i == 1) {
                row["c" + 3] = "MIN. SKILL LEVEL REQ.";
            }
            else if (i == 2) {
                row["c" + 3] = "REQUIRED NUMBER TRAINED";
            }
            if (i == 0) {
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    row["c" + (j)] = this.skillMatrixDetails.columns[j].machineIndex;
                }
                row["c" + (machineIndexColCount + 5)] = "NO. OF SHIFTS";
                columnCount++;
                row["c" + (machineIndexColCount + 6)] = this.searchDet.shift[0].id;
                columnCount++;
            }
            else if (i == 1) {
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    row["c" + (j)] = this.skillMatrixDetails.columns[j].levelName;
                }
            }
            else if (i == 2) {
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    row["c" + (j)] = this.skillMatrixDetails.columns[j].requiredWorkforce;
                }
                row["c" + (machineIndexColCount + 5)] = "SKILL LEVEL";
                columnCount++;
                row["c" + (machineIndexColCount + 6)] = "MULTI SKILL %";
                columnCount++;
                row["c" + (machineIndexColCount + 7)] = "MARKS";
                columnCount++;
            }
            console.log(row);
            exportData.push(row);
        }
        let tempWorkstationList = [];
        //SECTION 2
        let row = {};
        row["c" + 0] = "Sr No";
        row["c" + 1] = "Emp Id";
        row["c" + 2] = "Name";
        row["c" + 3] = "Exp";
        row["c" + 4] = "Employee Level";
        for (let j = 5; j < machineIndexColCount + 5; j++) {
            row["c" + (j)] = this.skillMatrixDetails.columns[j].field;
            tempWorkstationList.push(this.skillMatrixDetails.columns[j].field);
        }
        exportData.push(row);
        let sheetColWidths = [];
        sheetColWidths.push(10);
        sheetColWidths.push(10);
        sheetColWidths.push(20);
        sheetColWidths.push(10);
        sheetColWidths.push(20);
        let checkedIndexes = [];
        //SECTION 3
        let isNotTE = 0;
        for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
            if (this.skillMatrixDetails.tableEmpData[i].empLevel != 'TL') {
                let row = {};
                row["c" + 0] = i + 1;
                row["c" + 1] = this.skillMatrixDetails.tableEmpData[i].empId;
                row["c" + 2] = this.skillMatrixDetails.tableEmpData[i].empName;
                row["c" + 3] = this.skillMatrixDetails.tableEmpData[i].experience;
                row["c" + 4] = this.skillMatrixDetails.tableEmpData[i].empLevel;
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    sheetColWidths.push(20);
                    for (var key in this.skillMatrixDetails.tableEmpData[i]) {
                        if (key == tempWorkstationList[j - 5]) {
                            let checked = this.isChecked(this.skillMatrixDetails.tableEmpData[i], key);
                            row["c" + j] = checked.level;
                            if (checked.status == this.constant.EQUAL) {
                                checkedIndexes.push({
                                    row: i + 5,
                                    col: j + 1
                                });
                            }
                            break;
                        }
                    }
                }
                row["c" + (machineIndexColCount + 5)] = this.skillMatrixDetails.tableEmpData[i].skillLevel;
                row["c" + (machineIndexColCount + 6)] = this.skillMatrixDetails.tableEmpData[i].skillingPer + '%';
                row["c" + (machineIndexColCount + 7)] = this.skillMatrixDetails.tableEmpData[i].marks;
                exportData.push(row);
                isNotTE++;
            }
        }
        if (this.skillMatrixDetails.workstationLvlCount != null) {
            let row = {};
            row["c" + 0] = 'Actual No Trained';
            row["c" + 1] = '';
            row["c" + 2] = '';
            row["c" + 3] = '';
            row["c" + 4] = '';
            let index = 5;
            for (let j = 0; j < this.skillMatrixDetails.workstationLvlCount.length; j++) {
                row["c" + (index)] = this.skillMatrixDetails.workstationLvlCount[j].totalCount;
                index++;
            }
            exportData.push(row);
        }
        // console.log(exportData)
        exportData.push({});
        if (this.filteredSkillMatrixTLData != null) {
            let row = {};
            row["c" + 0] = 'Team Leader Skill Level';
            row["c" + 1] = '';
            row["c" + 2] = '';
            row["c" + 3] = '';
            row["c" + 4] = '';
            let index = 5;
            for (let j = 0; j < this.skillMatrixDetails.workstationLvlCount.length + 5; j++) {
                row["c" + (index)] = '';
                index++;
            }
            exportData.push(row);
        }
        exportData.push({});
        for (let i = 0; i < this.filteredSkillMatrixTLData.length; i++) {
            if (this.filteredSkillMatrixTLData[i].empLevel === 'TL') {
                let row = {};
                row["c" + 0] = i + 1;
                row["c" + 1] = this.filteredSkillMatrixTLData[i].empId;
                row["c" + 2] = this.filteredSkillMatrixTLData[i].empName;
                row["c" + 3] = this.filteredSkillMatrixTLData[i].experience;
                row["c" + 4] = this.filteredSkillMatrixTLData[i].empLevel;
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    sheetColWidths.push(20);
                    for (var key in this.filteredSkillMatrixTLData[i]) {
                        if (key == tempWorkstationList[j - 5]) {
                            let checked = this.isChecked(this.filteredSkillMatrixTLData[i], key);
                            row["c" + j] = checked.level;
                            if (checked.status == this.constant.EQUAL) {
                                checkedIndexes.push({
                                    row: i + 5,
                                    col: j + 1
                                });
                            }
                            break;
                        }
                    }
                }
                row["c" + (machineIndexColCount + 5)] = this.filteredSkillMatrixTLData[i].skillLevel;
                row["c" + (machineIndexColCount + 6)] = this.filteredSkillMatrixTLData[i].skillingPer + '%';
                row["c" + (machineIndexColCount + 7)] = this.filteredSkillMatrixTLData[i].marks;
                exportData.push(row);
            }
        }
        exportData.push({});
        for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
            if (this.skillMatrixDetails.tableEmpData[i].empLevel === 'TL') {
                let row = {};
                row["c" + 0] = i + 1;
                row["c" + 1] = this.skillMatrixDetails.tableEmpData[i].empId;
                row["c" + 2] = this.skillMatrixDetails.tableEmpData[i].empName;
                row["c" + 3] = this.skillMatrixDetails.tableEmpData[i].experience;
                row["c" + 4] = this.skillMatrixDetails.tableEmpData[i].empLevel;
                for (let j = 5; j < machineIndexColCount + 5; j++) {
                    sheetColWidths.push(20);
                    for (var key in this.skillMatrixDetails.tableEmpData[i]) {
                        if (key == tempWorkstationList[j - 5]) {
                            let checked = this.isChecked(this.skillMatrixDetails.tableEmpData[i], key);
                            row["c" + j] = checked.level;
                            if (checked.status == this.constant.EQUAL) {
                                checkedIndexes.push({
                                    row: i + 5,
                                    col: j + 1
                                });
                            }
                            break;
                        }
                    }
                }
                row["c" + (machineIndexColCount + 5)] = this.skillMatrixDetails.tableEmpData[i].skillLevel;
                row["c" + (machineIndexColCount + 6)] = this.skillMatrixDetails.tableEmpData[i].skillingPer + '%';
                row["c" + (machineIndexColCount + 7)] = this.skillMatrixDetails.tableEmpData[i].marks;
                exportData.push(row);
            }
        }
        // console.log(exportData)
        //SECTION 6 - Bottom small level tables - Data
        row = {};
        row["c" + 0] = "Skill Level";
        row["c" + 1] = "REQD.";
        row["c" + 2] = "ACT.";
        row["c" + 3] = "GAP";
        exportData.push(row);
        for (let i = 0; i < this.skillMatrixDetails.levelSummary.length; i++) {
            if (this.skillMatrixDetails.levelSummary[i].levelName != 'L4') {
                row = {};
                row["c" + 0] = "L" + (i + 1);
                row["c" + 1] = this.skillMatrixDetails.levelSummary[i].requiredCount;
                row["c" + 2] = this.skillMatrixDetails.levelSummary[i].actualCount;
                if ((this.skillMatrixDetails.levelSummary[i].requiredCount && this.skillMatrixDetails.levelSummary[i].requiredCount > 0)
                    && (this.skillMatrixDetails.levelSummary[i].requiredCount > this.skillMatrixDetails.levelSummary[i].actualCount)) {
                    row["c" + 3] = this.skillMatrixDetails.levelSummary[i].requiredCount - this.skillMatrixDetails.levelSummary[i].actualCount;
                }
                else {
                    row["c" + 3] = 0;
                }
                exportData.push(row);
            }
        }
        exportData.push({});
        row = {};
        row["c" + 0] = "Average Multiskilling %";
        row["c" + 1] = this.multiskillingPercentage + " %";
        exportData.push(row);
        // console.log(exportData);
        let headers = [];
        let workbook = new exceljs__WEBPACK_IMPORTED_MODULE_5__["Workbook"]();
        let worksheet = workbook.addWorksheet("Skill Matrix", {});
        for (let index = 0; index < columnCount; index++) {
            headers.push({
                key: ["c" + index], width: sheetColWidths[index]
            });
        }
        worksheet.columns = headers;
        var rows = [];
        var rowslist = {};
        Object.assign({}, rowslist);
        exportData.forEach((element) => {
            rowslist = {};
            for (var x in element) {
                rowslist[x] = element[x];
            }
            rows.push(rowslist);
        });
        worksheet.addRows(rows, "n");
        //Merging cells for MACHINE INDEX RATING, MIN.SKILL LEVL REQ. & REQUIRED NUMBER TRAINED cells
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            worksheet.mergeCells(rowNumber, 4, rowNumber, 5);
        }
        /* worksheet.mergeCells(1, 51, 2, 51); // Merge cells for rows 1 and 2 in column 51 ("c51")
         const areCellsMerged = worksheet.getCell(1, 51).isMerged || worksheet.getCell(1, 52).isMerged;
     
         if (!areCellsMerged) {
           // Merge cells for rows 1 and 2 in columns 51 and 52 ("c51" and "c52")
           worksheet.mergeCells(1, 52, 1, 53);
           worksheet.mergeCells(2, 53, 2, 53);
         }
         worksheet.mergeCells(3, 51, 4, 51); // Merge cells for rows 1 and 2 in column 51 ("c51")
         worksheet.mergeCells(3, 52, 4, 52); // Merge cells for rows 1 and 2 in column 51 ("c51")
         worksheet.mergeCells(3, 53, 4, 53); // Merge cells for rows 1 and 2 in column 51 ("c51")
         //Setting bold font to all cells first 4 rows*/
        // console.log(isNotTE)
        worksheet.mergeCells((isNotTE + 6), 1, (isNotTE + 6), 5);
        worksheet.mergeCells((isNotTE + 7), 1, (isNotTE + 7), (this.skillMatrixDetails.workstationLvlCount.length + 5 + 3));
        for (let rowNumber = 1; rowNumber < 5; rowNumber++) {
            let row = worksheet.getRow(rowNumber);
            row.font = {
                bold: true
            };
        }
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            let row = worksheet.getRow(rowNumber);
            // Loop through all columns starting from F (index 6 in Excel)
            for (let colNumber = 6; colNumber <= row.cellCount; colNumber++) {
                // Get the current cell
                let cell = row.getCell(colNumber);
                // Apply center alignment if the column is F or beyond
                cell.alignment = {
                    vertical: 'middle',
                    horizontal: 'center'
                };
            }
        }
        //Setting bold font to headers of bottom level table
        let lvlTblRowIndex = 3 + 1 + 2 + this.skillMatrixDetails.tableEmpData.length;
        {
            let row = worksheet.getRow(lvlTblRowIndex);
            row.font = {
                bold: true
            };
        }
        //Setting borders to cells from tableData which shows level(L0,L1,L2) in RED & GREEN color
        for (let i = 5; i < this.skillMatrixDetails.tableEmpData.length + 5; i++) {
            let row = worksheet.getRow(i);
            row.eachCell((cell, colNumber) => {
                if (colNumber > 5) {
                    cell.border = {
                        top: { style: 'double', color: { argb: 'f6f6f6' } },
                        left: { style: 'double', color: { argb: 'f6f6f6' } },
                        bottom: { style: 'double', color: { argb: 'f6f6f6' } },
                        right: { style: 'double', color: { argb: 'f6f6f6' } }
                    };
                    cell.alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
            });
        }
        //Setting text center to cells of bottom lelve table
        if (this.hasSkillMatrixData) {
            lvlTblRowIndex = 3 + 1 + 2 + this.skillMatrixDetails.tableEmpData.length + this.filteredSkillMatrixTLData.length + 5;
        }
        else {
            lvlTblRowIndex = 3 + 1 + 2 + this.skillMatrixDetails.tableEmpData.length + this.filteredSkillMatrixTLData.length + 4;
        }
        // console.log('lvlTblRowIndex:', lvlTblRowIndex);
        // console.log('Total Rows:', worksheet.rowCount);
        for (let i = 0; i < this.skillMatrixDetails.levelSummary.length; i++) {
            let row = worksheet.getRow(lvlTblRowIndex + i + 1);
            row.alignment = {
                horizontal: 'center'
            };
            if (this.skillMatrixDetails.levelSummary[i].levelId == 1) {
                //RED color to L1 cell
                row.getCell(1).fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FF0000' }
                };
            }
            else if (this.skillMatrixDetails.levelSummary[i].levelId == 2) {
                //GREEN color to L2 cell
                row.getCell(1).fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'D9D9D9' }
                };
            }
            else if (this.skillMatrixDetails.levelSummary[i].levelId == 3) {
                //YELLOW color to L3 cell
                row.getCell(1).fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: '99cd3a' }
                };
            }
            /* else if (this.skillMatrixDetails.levelSummary[i].levelId == 4) {
              //YELLOW color to L4 cell
              row.getCell(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '99cd3a' }
              }
            } */
        }
        //Highlighting EQUAL, NOT EQUAL Cells with RED and GREEN color
        let nonTlEmployees = [];
        let tlEmployees = [];
        for (let i = 0; i < this.skillMatrixDetails.tableEmpData.length; i++) {
            if (this.skillMatrixDetails.tableEmpData[i].empLevel !== 'TL') {
                nonTlEmployees.push(this.skillMatrixDetails.tableEmpData[i]);
            }
            else {
                tlEmployees.push(this.skillMatrixDetails.tableEmpData[i]);
            }
        }
        for (let rowNumber = 5; rowNumber < nonTlEmployees.length + 5; rowNumber++) {
            let row = worksheet.getRow(rowNumber);
            for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 4; colNumber++) {
                let isChecked = false;
                checkedIndexes.forEach(element => {
                    if (element.row === rowNumber && element.col === colNumber) {
                        isChecked = true;
                    }
                });
                // Get the value of the current cell
                let cellValue = row.getCell(colNumber).value;
                // Check if the cell value is "L1", "L2", or "L3"
                if (cellValue === "L1") {
                    // Set the fill color for "L1"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FF0000' } // Yellow
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L2") {
                    // Set the fill color for "L2"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'D9D9D9' } // Orange
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L3") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L4") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else {
                    // Handle other cases if needed
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
            }
        }
        for (let rowNumber = 5 + nonTlEmployees.length; rowNumber < this.skillMatrixDetails.tableEmpData.length + 5 + 4; rowNumber++) {
            let row = worksheet.getRow(rowNumber);
            for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 4; colNumber++) {
                let isChecked = false;
                checkedIndexes.forEach(element => {
                    if (element.row === rowNumber && element.col === colNumber) {
                        isChecked = true;
                    }
                });
                // Get the value of the current cell
                let cellValue = row.getCell(colNumber).value;
                // Check if the cell value is "L1", "L2", or "L3"
                if (cellValue === "L1") {
                    // Set the fill color for "L1"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FF0000' } // Yellow
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L2") {
                    // Set the fill color for "L2"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'D9D9D9' } // Orange
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L3") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L4") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else {
                    // Handle other cases if needed
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
            }
        }
        for (let rowNumber = 5; rowNumber < this.skillMatrixDetails.workstationLvlCount.length + 5; rowNumber++) {
            let row = worksheet.getRow(rowNumber);
            for (let colNumber = 6; colNumber < machineIndexColCount + 5 + 1 + 1; colNumber++) {
                let isChecked = false;
                checkedIndexes.forEach(element => {
                    if (element.row === rowNumber && element.col === colNumber) {
                        isChecked = true;
                    }
                });
                // Get the value of the current cell
                let cellValue = row.getCell(colNumber).value;
                // Check if the cell value is "L1", "L2", or "L3"
                if (cellValue === "L1") {
                    // Set the fill color for "L1"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FF0000' } // Yellow
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L2") {
                    // Set the fill color for "L2"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'D9D9D9' } // Orange
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L3") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else if (cellValue === "L4") {
                    // Set the fill color for "L3"
                    row.getCell(colNumber).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: '99cd3a' } // Red
                    };
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
                else {
                    // Handle other cases if needed
                    row.getCell(colNumber).alignment = {
                        vertical: 'middle',
                        horizontal: 'center'
                    };
                }
            }
        }
        for (let rowNumber = 1; rowNumber < 4; rowNumber++) {
            worksheet.mergeCells(rowNumber, 1, rowNumber, 3);
        }
        // Common Function to Define colors for L1, L2, L3, L4 and implement it
        const colorMapping = {
            "L1": "FF0000",
            "L2": "D9D9D9",
            "L3": "99CD3A",
            "L4": "99CD3A",
        };
        const highlightValues = ["Actual No Trained", "Team Leader Skill Level", "Skill Level", "Average Multiskilling %"];
        const startColumn = "A";
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 3) { // Skip first 3 rows
                row.eachCell((cell) => {
                    let cellValue = cell.value ? cell.value.toString() : ""; // Convert value to string
                    if (colorMapping[cellValue]) {
                        cell.fill = {
                            type: "pattern",
                            pattern: "solid",
                            fgColor: { argb: colorMapping[cellValue] },
                        };
                        cell.alignment = {
                            vertical: "middle",
                            horizontal: "center",
                        };
                        cell.font = {
                            bold: true,
                        };
                        cell.border = {
                            top: { style: "thin", color: { argb: "808080" } },
                            bottom: { style: "thin", color: { argb: "808080" } },
                            left: { style: "thin", color: { argb: "808080" } },
                            right: { style: "thin", color: { argb: "808080" } },
                        };
                    }
                    // Array of values to check
                    if (highlightValues.includes(cellValue)) {
                        cell.alignment = {
                            vertical: "middle",
                            horizontal: "left",
                        };
                        cell.font = {
                            bold: true,
                        };
                    }
                    const columnIndex = cell.col;
                    const minWidth = 20;
                    const currentWidth = worksheet.getColumn(columnIndex).width || 10;
                    if (currentWidth < minWidth) {
                        worksheet.getColumn(columnIndex).width = minWidth;
                    }
                });
            }
            // if (rowNumber === (this.hasSkillMatrixData ? 5 : 4)) {
            //   row.alignment = {
            //     vertical: "middle",
            //     horizontal: "center",
            //   };
            // }
            if (rowNumber === (this.hasSkillMatrixData ? 4 : 3)) {
                row.eachCell((cell, colNumber) => {
                    if (colNumber > 5) { // Exclude columns A to E (1 to 5)
                        cell.alignment = {
                            vertical: "middle",
                            horizontal: "center",
                        };
                    }
                });
            }
            // if (rowNumber === (this.hasSkillMatrixData ? 4 : 3)) {
            //   row.alignment = {
            //     vertical: "middle",
            //     horizontal: "center",
            //   };
            // }
        });
        // Apply center alignment for all cells in columns M (13) and N (14)
        worksheet.getColumn(13).alignment = { vertical: "middle", horizontal: "center" };
        worksheet.getColumn(14).alignment = { vertical: "middle", horizontal: "center" };
        workbook.xlsx.writeBuffer().then((data) => {
            var excelName = "Skill Matrix";
            let blob = new Blob([data], { type: "xlsx" });
            file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
        });
    }
    testCell() {
        return true;
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
    getSearchList(flag) {
    }
    getSkillMatrixDetails() {
    }
    getBCForfReqSkillLvl(levelName) {
        switch (levelName) {
            case 'Level 1':
                return 'white';
            case 'Level 2':
                return 'yellow';
            case 'Level 3':
                return '#acc906';
            case 'Level 4':
                return '#acc906';
            default:
                return ''; // You can set a default color here if needed
        }
    }
    getLevelNameForWorkstation(employee, workstationId) {
        const workstation = employee.workstations.find(data => data.id === workstationId);
        return workstation ? workstation.levelName : '';
    }
    getBackgroundColorForLevel(employee, workstationId) {
        const levelName = this.getLevelNameForWorkstation(employee, workstationId);
        switch (levelName) {
            case 'Level 1':
                return 'white';
            case 'Level 2':
                return 'yellow';
            case 'Level 3':
                return '#acc906';
            case 'Level 4':
                return '#acc906';
            default:
                return ''; // You can set a default color here if needed
        }
    }
    getHighestWorkstationLevel(workstations) {
        const highestWorkstation = workstations.reduce((highest, current) => {
            if (!highest || current.reqSkillLevelId > highest.reqSkillLevelId) {
                return current;
            }
            return highest;
        }, null);
        return highestWorkstation ? highestWorkstation.levelName : '';
    }
    getBackgroundColorForHighestLevel(workstations) {
        const highestLevelName = this.getHighestWorkstationLevel(workstations);
        switch (highestLevelName) {
            case 'Level 1':
                return 'white';
            case 'Level 2':
                return 'yellow';
            case 'Level 3':
                return '#acc906';
            case 'Level 4':
                return '#acc906';
            default:
                return ''; // You can set a default color here if needed
        }
    }
    filterModalOpen(modal) {
        this.searchDet.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
            backdrop: 'static',
            keyboard: false
        });
    }
    submitFilterForm(form) {
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.isAppliedFilter = true;
        this.searchDet.filterFlag = false;
        this.modalService.dismissAll();
        this.getSkillMatixData();
    }
    removeFilter() {
        this.isAppliedFilter = false;
        this.filterData.reset();
        this.searchDet.branch = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
        this.searchDet.branchId = [];
        this.searchDet.deptId = [];
        this.searchDet.lineIds = [];
        this.searchDet.dept = [];
        this.searchDet.cell = [];
        this.searchDet.fromDate = null;
        this.searchDet.toDate = null;
        //this.searchDet.statusId = [];
        this.getSkillMatixData();
    }
    onChangeShift(ev) {
        // console.log(ev);
        this.getSkillMatixData();
    }
    filterList() {
        const searchValue = this.searchInput.trim().toLowerCase();
        this.filteredEmpData = this.skillMatrixDetails.tableEmpData.filter(row => Object.values(row).some(value => value.toString().toLowerCase().includes(searchValue)));
    }
    clearSearch() {
        this.searchInput = '';
        this.filteredEmpData = [...this.skillMatrixDetails.tableEmpData];
    }
};
SkillMatrixComponent.ctorParameters = () => [
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
SkillMatrixComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-matrix',
        template: _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], Object])
], SkillMatrixComponent);



/***/ }),

/***/ "6846":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/assessments/assessments.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Assessments\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n\r\n    <div class=\" extraContent row m-0\">\r\n        <div class=\"col-4\">\r\n            <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)? 'col-6':'col-12'\"> -->\r\n            <div class=\"form-group has-search\">\r\n                <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\"\r\n                    (click)=\"getSearchList(true)\"></span>\r\n                <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                    (click)=\"getSearchList(false)\"></span>\r\n                <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search By Name\"\r\n                    [(ngModel)]=\"searchDet.searchInput\" (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\"\r\n                    autocomplete=\"off\" />\r\n            </div>\r\n            <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button> &nbsp; <span\r\n                                style=\"color: green;font-size: 12px; font-weight: 500;\">Filter applied</span>\r\n                        </div>\r\n                    </div> -->\r\n        </div>\r\n        <div class=\"col-4 p-0\"></div>\r\n        <div class=\"col-4 p-0\"></div>\r\n    </div>\r\n\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <!-- <th class=\"fixedColumn\">SR NO</th> -->\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th>OJT Start Date</th>\r\n                        <th>Emp ID</th>\r\n                        <th class=\"\" mat-sort-header=\"EmpName\">Emp Name</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentTitle\">Assessment Title</th>\r\n                        <th class=\"\" mat-sort-header=\"DeptName\">Department</th>\r\n                        <th class=\"\" mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th class=\"\" mat-sort-header=\"SkillLevel\">Level</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentType\">Assessment Type</th>\r\n                        <th class=\"\" mat-sort-header=\"AssessmentDate\">Assessment Date</th>\r\n                        <th class=\"\" mat-sort-header=\"Score\">Score</th>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"Status\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of assessmentData\">\r\n                        <td class=\"actionTd fixedColumn text-left\">{{item.branchName || 'N/A'}}</td>\r\n                        <td>{{item.ojtStartDate | date: 'dd-MM-yyyy'}}</td>\r\n                        <td>{{item.cmpEmpId}}</td>\r\n                        <td>{{item.empName}}</td>\r\n                        <td>{{item.title}}</td>\r\n                        <td>{{item.deptName}}</td>\r\n                        <td>{{item.workstationName}}</td>\r\n                        <td>{{item.levelName || 'N/A'}}</td>\r\n                        <td>{{item.assessmentType || 'N/A'}}</td>\r\n                        <td>{{(item.assessmentDate) ? (item.assessmentDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <td>{{item.score}}</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':item.status == 'PASS','pending':item.status == 'FAIL'}\">\r\n                            {{item.status || 'N/A'}}</td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <!-- <button type=\"button\" class=\"btn btn-sm actionBtn\">Action</button> -->\r\n                            <i class=\"fa fa-eye viewIcon\" (click)=\"openViewModal(assessmentDetail,item)\"\r\n                                style=\"cursor: pointer;\"></i>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(assessmentData == null || assessmentData.length == 0)\">\r\n                        <td colspan=\"8\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            <!-- *ngIf=\"!listLoading\" -->\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"8\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'plant')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branchId\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onDeSelectPlant(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptLvlId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptLvlId\" id=\"deptLvlId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(masterDeptList,'cell')\" formControlName=\"deptLvlId\"\r\n                            [(ngModel)]=\"searchDet.deptIds \" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\" (onSelectAll)=\"onChangeAll($event,'userType')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'userType')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptLvlId'].invalid && (filterData.controls['deptLvlId'].touched || filterData.controls['deptLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['deptLvlId'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Workstation</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"masterWorkList\" id=\"masterWorkList\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Workstation'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"masterWork\" [data]=\"getSortFunction(masterWorkList,'work')\"\r\n                            [disabled]=\"false\" [(ngModel)]=\"searchDet.masterWorkList\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"filterData.controls['masterWork'].invalid && (filterData.controls['masterWork'].touched || filterData.controls['masterWork'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"submitAttempted && filterData.controls['masterWork'].errors.required\">\r\n                                Please select workstation\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n<ng-template #assessmentDetail let-c=\"close\">\r\n    <app-assessessment-detail-modal [selectedDetail]=\"selectedRecForModal\">\r\n    </app-assessessment-detail-modal>\r\n</ng-template>");

/***/ }),

/***/ "CJJ0":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/workforce-deployment/add-view-workforce/add-view-workforce.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableFixHead {\n  max-height: calc(100vh - 23vh) !important;\n  min-height: calc(100vh - 23vh) !important;\n  height: calc(100vh - 23vh) !important;\n}\n.tableFixHead.ViewTable {\n  max-height: calc(100vh - 15vh) !important;\n  min-height: calc(100vh - 15vh) !important;\n  height: calc(100vh - 15vh) !important;\n}\n.formInputField {\n  border-bottom: 1px solid #7044cd;\n}\n.formInputField .insideLabel {\n  margin-bottom: 10px;\n}\n.formInputField .insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n.formInputField .insideLabel.datePickerBlock .col-form-label {\n  top: -10px;\n  background: #fff;\n  padding: 0px 5px;\n  left: 15px;\n}\n.formInputField .insideLabel.datePickerBlock .custom-Input-Group .input-group-prepend .input-group-text {\n  background-color: transparent;\n}\n.formInputField .insideLabel.datePickerBlock .custom-Input-Group .input-group-prepend .form-control:disabled {\n  background-color: transparent;\n}\n.checkbox-block {\n  padding: 8px 10px !important;\n  border-bottom: 1px solid lightgray !important;\n  cursor: pointer !important;\n}\n.checkbox-block:last-child {\n  border-bottom: none !important;\n}\n.checkbox-block label {\n  margin: 0px;\n  cursor: pointer !important;\n}\n.checkbox-block label::before {\n  margin-right: 5px !important;\n}\n.checkbox-block label:after {\n  top: 0.9rem !important;\n  left: 0.89rem !important;\n}\n/* .fixedColumn {\n    z-index: 4;\n    &:nth-child(1) {\n        left: 0px;\n    }\n    &:nth-child(2) {\n        left: 5.8%; // 67px;\n    }\n    &:nth-child(3) {\n        left: 12.5%; // 142px;\n    }\n    &:nth-child(4) {\n        left: 18.5%; // 211px; \n    }\n    &:nth-child(5) {\n        left: 23%; // 266px\n    }\n} */\n.red-text {\n  color: red;\n}\n.footerBlock {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 5px 25px !important;\n  border-top: 1px solid #e3eaef;\n  border-bottom-right-radius: calc(0.3rem - 1px);\n  border-bottom-left-radius: calc(0.3rem - 1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC12aWV3LXdvcmtmb3JjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUFBO0VBQ0EseUNBQUE7RUFDQSxxQ0FBQTtBQUNKO0FBQ0k7RUFDSSx5Q0FBQTtFQUNBLHlDQUFBO0VBQ0EscUNBQUE7QUFDUjtBQUdBO0VBQ0ksZ0NBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBWjtBQUlZO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBRmhCO0FBT29CO0VBQ0ksNkJBQUE7QUFMeEI7QUFRb0I7RUFDSSw2QkFBQTtBQU54QjtBQWNBO0VBQ0ksNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLDBCQUFBO0FBWEo7QUFhSTtFQUNJLDhCQUFBO0FBWFI7QUFjSTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQVpSO0FBY1E7RUFDSSw0QkFBQTtBQVpaO0FBZVE7RUFDSSxzQkFBQTtFQUNBLHdCQUFBO0FBYlo7QUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBQUE7QUFrQkE7RUFDSSxVQUFBO0FBZko7QUFrQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSw2Q0FBQTtBQWZKIiwiZmlsZSI6ImFkZC12aWV3LXdvcmtmb3JjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIzdmgpICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjN2aCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIzdmgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5WaWV3VGFibGUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXZoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXZoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE1dmgpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtSW5wdXRGaWVsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuXHJcbiAgICAuaW5zaWRlTGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBsZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kYXRlUGlja2VyQmxvY2sge1xyXG4gICAgICAgICAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1c3RvbS1JbnB1dC1Hcm91cCB7XHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2w6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGVja2JveC1ibG9jayB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHRvcDogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAuODlyZW0gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC5maXhlZENvbHVtbiB7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBsZWZ0OiA1LjglOyAvLyA2N3B4O1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgIGxlZnQ6IDEyLjUlOyAvLyAxNDJweDtcclxuICAgIH1cclxuICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBsZWZ0OiAxOC41JTsgLy8gMjExcHg7IFxyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIGxlZnQ6IDIzJTsgLy8gMjY2cHhcclxuICAgIH1cclxufSAqL1xyXG4ucmVkLXRleHQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmZvb3RlckJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDVweCAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZWFlZjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDAuM3JlbSAtIDFweCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "D3/z":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/certificates/certificates.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 4px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1rem !important;\n  color: #7044cd !important;\n}\n.input-group-append .fa {\n  position: relative;\n  top: 0.5em;\n}\n.form-group {\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.customInputField {\n  margin-left: 15px;\n  padding-top: 5px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n}\n.tableFixHead table {\n  position: relative;\n}\n.tableFixHead table th.actionTh,\n.tableFixHead table td.actionTd {\n  width: 100px;\n}\n.tableFixHead table tbody td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2VydGlmaWNhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxjQUFBO0FBQ1o7QUFFUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQVo7QUFHUTs7O0VBR0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQURaO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUhSO0FBUUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFMUjtBQVNBO0VBRUksbUJBQUE7RUFDQSxXQUFBO0FBUEo7QUFTSTtFQUNJLG1CQUFBO0FBUFI7QUFVSTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVlBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFUSjtBQVlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVRKO0FBY0k7RUFDSSxrQkFBQTtBQVhSO0FBYVE7O0VBRUksWUFBQTtBQVhaO0FBY1E7RUFDSSxzQkFBQTtBQVpaIiwiZmlsZSI6ImNlcnRpZmljYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2QgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFwcGVuZCB7XHJcbiAgICAuZmEge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDAuNWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMC43cmVtIDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1lcnJvck1zZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG59XHJcblxyXG4uY3VzdG9tSW5wdXRGaWVsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICB0aC5hY3Rpb25UaCxcclxuICAgICAgICB0ZC5hY3Rpb25UZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRib2R5IHRkIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "IiAp":
/*!*********************************************************************!*\
  !*** ./src/app/modules/skill-matrix/skill-matrix-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SkillMatrixRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixRoutingModule", function() { return SkillMatrixRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skill_matrix_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-matrix.component */ "53Z8");
/* harmony import */ var _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/actions.component */ "xgNC");
/* harmony import */ var _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assessments/assessments.component */ "Tdju");
/* harmony import */ var _workforce_deployment_workforce_deployment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workforce-deployment/workforce-deployment.component */ "Mh6V");
/* harmony import */ var _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificates/certificates.component */ "t+f2");








const routes = [
    {
        path: '',
        component: _skill_matrix_component__WEBPACK_IMPORTED_MODULE_3__["SkillMatrixComponent"]
    },
    {
        path: 'home',
        component: _skill_matrix_component__WEBPACK_IMPORTED_MODULE_3__["SkillMatrixComponent"]
    },
    {
        path: 'actions',
        component: _actions_actions_component__WEBPACK_IMPORTED_MODULE_4__["ActionsComponent"]
    },
    {
        path: 'ojt_plan',
        loadChildren: () => __webpack_require__.e(/*! import() | ojt-plan-ojt-plan-module */ "ojt-plan-ojt-plan-module").then(__webpack_require__.bind(null, /*! ./ojt-plan/ojt-plan.module */ "FDYh")).then(m => m.OjtPlanModule)
    },
    {
        path: 'ojt_registration',
        loadChildren: () => __webpack_require__.e(/*! import() | ojt-registration-ojt-registration-module */ "ojt-registration-ojt-registration-module").then(__webpack_require__.bind(null, /*! ./ojt-registration/ojt-registration.module */ "YZv3")).then(m => m.OjtRegistrationModule)
    },
    {
        path: 'workforce_Deployment',
        component: _workforce_deployment_workforce_deployment_component__WEBPACK_IMPORTED_MODULE_6__["WorkforceDeploymentComponent"]
    },
    {
        path: 'assessments',
        component: _assessments_assessments_component__WEBPACK_IMPORTED_MODULE_5__["AssessmentsComponent"]
    },
    {
        path: 'certificates',
        component: _certificates_certificates_component__WEBPACK_IMPORTED_MODULE_7__["CertificatesComponent"]
    }
];
let SkillMatrixRoutingModule = class SkillMatrixRoutingModule {
};
SkillMatrixRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SkillMatrixRoutingModule);



/***/ }),

/***/ "KpN5":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/workforce-deployment/workforce-deployment.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar class=\"title\" title=\"Workforce Deployment\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div> -->\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15 \">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"form-group has-search  col-4\">\r\n                <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\"\r\n                    (click)=\"getSearchList(true)\"></span>\r\n                <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                    (click)=\"getSearchList(false)\"></span>\r\n                <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search by palace holder\"\r\n                    [(ngModel)]=\"searchDet.searchInput\" autocomplete=\"off\"\r\n                    (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\">\r\n            </div>\r\n            <div class=\"col-4\"></div>\r\n\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" title=\"Add Workforce Deployment\"\r\n                        (click)=\"addWorkForce(addWorkForceModal,{},'Add')\"><i class=\"fa fa-plus m-r-10\" style=\"text-align: center;\"></i>Create</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block skill-table\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th scope=\"col\" mat-sort-header=\"Department\">Department</th>\r\n                        <th mat-sort-header=\"Line\" scope=\"col\">Cell / Line</th>\r\n                        <th scope=\"col\" mat-sort-header=\"Shift\">Shift</th>\r\n                        <th scope=\"col\" mat-sort-header=\"FromDate\">From Date</th>\r\n                        <th scope=\"col\" mat-sort-header=\"ToDate\">To Date</th>\r\n                        <th scope=\"col\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of workforceList;let workforceIndex = index\">\r\n                        <td>{{x.deptName || ''}}</td>\r\n                        <td>{{x.lineName || ''}}</td>\r\n                        <td>{{x.shiftName || ''}}</td>\r\n                        <td>{{((x.fromDate) ? (x.fromDate | date:'dd-MM-yyyy') : '')|| ''}}</td>\r\n                        <td>{{((x.toDate) ? (x.toDate | date:'dd-MM-yyyy') : '')|| ''}}</td>\r\n                        <td>\r\n                            <a (click)=\"addWorkForce(addWorkForceModal,x,'View')\"\r\n                                style=\"color:#7044CD;cursor: pointer\"><i class=\"fa fa-eye viewIcon\"></i></a>\r\n                            &nbsp; &nbsp;\r\n                            <i style=\"color:#7044CD;cursor: pointer\"> <img src=\"assets/images/ic_excel.png\" alt=\"\"\r\n                                    class=\"img-fluid\" (click)=\"getWorkForceDeploymentDetails(x)\">\r\n                            </i>\r\n                        </td>\r\n\r\n                    </tr>\r\n                    <tr *ngIf=\"(workforceList == null || workforceList.length == 0)\">\r\n                        <td colspan=\"6\" class=\"text-center no-record-found\" *ngIf=\"!listLoader\">\r\n                            Data Not Found\r\n                        </td>\r\n                        <td colspan=\"6\" class=\"text-center loading-div\" *ngIf=\"listLoader\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Filter Popup  -->\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click');\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"moduleId\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\" col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" [data]=\"branchAccessList\"\r\n                            (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'dept')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && formdata.controls['branchId'].invalid && (formdata.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['branchId'].errors.required\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"dept\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"dept\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\" [data]=\"searchDet.deptList\" formControlName=\"deptId\" \r\n                            [(ngModel)]=\"searchDet.deptId\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'line')\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"cell\" class=\"col-sm-12 col-form-label filter-label\">Cell / Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cell\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell / Line'\" [settings]=\"SingleDropdownSettings\" [data]=\"cellLineList\" formControlName=\"lineIds\"\r\n                            [(ngModel)]=\"searchDet.lineIds\" (onSelect)=\"onChange($event,line)\"\r\n                            (onSelectAll)=\"onChange($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\">Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel</button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Add WorkForce Deployment UI -->\r\n<ng-template #addWorkForceModal let-modal let-c=\"close\">\r\n    <app-add-view-workforce [close]=\"c\" [selectedDet]=\"selectedDet\"></app-add-view-workforce>\r\n</ng-template>");

/***/ }),

/***/ "Mh6V":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/workforce-deployment/workforce-deployment.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WorkforceDeploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkforceDeploymentComponent", function() { return WorkforceDeploymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_workforce_deployment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./workforce-deployment.component.html */ "KpN5");
/* harmony import */ var _workforce_deployment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workforce-deployment.component.scss */ "TvKG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skilling.service */ "Sh6i");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! exceljs */ "6K47");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









let WorkforceDeploymentComponent = class WorkforceDeploymentComponent {
    constructor(apiService, modalConfig, fb, modalService) {
        this.apiService = apiService;
        this.modalConfig = modalConfig;
        this.fb = fb;
        this.modalService = modalService;
        this.submitAttempted = false;
        this.userDet = {};
        this.cellLineList = [];
        this.searchDet = {};
        this.selectedDet = {};
        this.branchAccessList = [];
        this.workforceList = [];
        this.deptList = [];
        this.SingleDropdownSettings = {};
        this.filterFlag = false;
        this.listLoader = false;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50,
        };
        this.headings = {};
        this.WorkForceDetails = [];
        this.empListArray = [];
        this.columnsArray = [];
        this.headingName = [];
        this.isAppliedFilter = false;
        modalConfig.backdrop = "static";
        modalConfig.keyboard = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem("userDet"));
        console.log(this.userDet);
        const today = new Date();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: "id",
            textField: "name",
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.getBranchAccessList();
        this.date = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("YYYY-MM");
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required),
            deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
            lineIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](""),
        });
        this.getWorkforceList('');
    }
    /* gets Branch access list on employee
       @Author Shashi
       @Date Sept 12, 2023
    */
    getBranchAccessList() {
        this.apiService
            .getBranchAccessList("getBranchAccessSetupByEmpId/" +
            this.userDet.organization.orgId +
            "/" +
            this.userDet.empId)
            .subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, "branchId", "branchName");
                    this.branchAccessList = this.sortFunction(this.branchAccessList, "branchName");
                    console.log(this.branchAccessList);
                    // this.searchDet.branch = [this.branchAccessList[0]];
                    console.log(this.searchDet.branch);
                    // this.getDeptList();
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
            this.branchAccessList = this.sortFunction(this.branchAccessList, "name");
            // this.searchDet.branch = [this.branchAccessList[0]];
            // this.getDeptList();
            // this.getWorkforceList();
        });
    }
    /* Change branch selction
       @Author Shashi
       @Date Sptember 12, 2023
    */
    // onChangeBranch(event: any) {
    //   if (event) {
    //     console.log(event);
    //     this.searchDet.dept=[];
    //     this.deptList=[];
    //     this.getDeptList();
    //   } else {
    //     this.cellList = [];
    //     this.searchDet.cell= [];
    //     this.workforceList = [];
    //   }
    // }
    resetFormField(form, keyName) {
        Object.keys(form.controls).forEach((key) => {
            if (key == keyName) {
                form.get(keyName).reset();
                form.get(keyName).markAsPristine();
                form.get(keyName).markAsUntouched();
            }
        });
    }
    onChange(ev, type) {
        if (ev) {
            if (type == "plant") {
                this.resetFormField(this.filterData, "searchDet.branch");
                this.resetFormField(this.filterData, "searchDet.deptId");
                this.resetFormField(this.filterData, "searchDet.lineIds");
                this.getDeptList(ev);
                //this.getLineNameList(ev);
                this.searchDet.deptId = [];
                this.searchDet.deptList = [];
            }
            else if (type == "dept") {
                console.log(ev);
                this.getCellList(this.searchDet.branch);
                //this.getLineNameList(ev);
                this.searchDet.lineIds = [];
            }
        }
        else {
            if (type == "plant") {
                if (this.searchDet) {
                    this.searchDet.deptList = [];
                    this.searchDet.lineIds = [];
                }
            }
            else if (type == "dept") {
                if (this.searchDet) {
                    this.searchDet.lineIds = [];
                }
            }
        }
    }
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getWorkforceList('filter');
        }
        else {
            this.getWorkforceList('');
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
    /* Change dept selction
       @Author Shashi
       @Date Sptember 12, 2023
    */
    // onChangeDept(data: any) {
    //   if (data) {
    //     console.log("enter");
    //     this.searchDet.dept=[{id:data.id,name:data.id}];
    //     this.searchDet.cell=[];
    //     this.cellList=[];
    //     this.getCellList();
    //     // this.getWorkforceList();
    //   } else {
    //     this.cellList = [];
    //     this.searchDet.cell = [];
    //     this.workforceList = [];
    //   }
    // }
    onChangeCell(data) {
        if (data) {
            // this.getWorkforceList();
        }
        else {
            this.workforceList = [];
        }
    }
    removeFilter() {
        this.isAppliedFilter = false;
        this.filterData.reset();
        this.searchDet.branch = [];
        this.searchDet.deptId = [];
        this.searchDet.lineIds = [];
        this.searchDet.fromDate = null;
        this.searchDet.toDate = null;
        //this.searchDet.statusId = [];
        this.getWorkforceList('');
    }
    submitFilterForm(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.clearPagination();
        this.isAppliedFilter = true;
        this.searchDet.filterFlag = true;
        this.getWorkforceList('filter');
        this.modalService.dismissAll();
    }
    getDeptList(branch) {
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            this.apiService
                .getdepartmentlistbybranchid("getdepartmentlistbybranchid/" + branch.id)
                .subscribe((res) => {
                if (res.result) {
                    console.log(res);
                    if (res.deptList != null && res.deptList.length > 0) {
                        /* Use For Add Screen */
                        console.log(res.deptList);
                        this.searchDet.deptList = this.setArray(res.deptList, "deptId", "deptName");
                        this.searchDet.deptList = this.sortFunction(this.searchDet.deptList, "deptName");
                        // this.searchDet.dept = [this.deptList[0]];
                        // this.getCellList();
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
        else {
            // this.cellList = [];
            // this.searchDet.cell = [];
            // this.workforceList = [];
        }
    }
    /* get department list on branch selection
       @Author Shashi
      * @Date August 12, 2023
    */
    getCellList(branchId) {
        this.selectedBranchId = this.searchDet.branch[0].id;
        console.log(this.selectedBranchId);
        this.selectedDeptId = this.searchDet.deptId[0].id;
        console.log(this.selectedDeptId);
        const data = {
            branchId: this.selectedBranchId,
            deptId: this.selectedDeptId
        };
        // var req: any = {
        //   branchId: this.searchDet.branch[0].id,
        //   deptId : this.searchDet.dept[0].id
        // };
        // if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
        //   req.deptId = this.searchDet.dept[0].id;
        // }
        console.log(data);
        this.apiService
            .getCellList("apis/sm/getCellList", data)
            .subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    console.log(response.dataList);
                    this.cellLineList = this.setArray(response.dataList, "lineId", "lineName");
                    this.cellLineList = this.sortFunction(this.cellLineList, "lineName");
                    // this.searchDet.cell = [this.cellList[0]];
                    // this.getWorkforceList();
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
    getWorkforceList(searchFilter) {
        this.workforceList = [];
        this.listLoader = true;
        let req = {
            branchId: this.userDet.branch.branchId,
            orgId: this.userDet.organization.orgId,
            offset: this.staticPagination.offset,
            limit: this.staticPagination.itemsPerPage,
        };
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
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
        if (searchFilter == 'filter') {
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
                req.fromDt = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchDet.fromDate).format("YYYY-MM-DD");
            }
            if (this.searchDet.toDate != null) {
                req.toDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchDet.toDate).format("YYYY-MM-DD");
            }
            // if (this.searchDet.statusId != null) {
            //   req.status = this.searchDet.statusId[0].id;
            // }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        this.staticPagination.listLength = 10;
        console.log(req);
        this.apiService
            .getWorkforceDeploymentData("apis/sm/getWorkForceDeploymentList", req)
            .subscribe((res) => {
            this.listLoader = false;
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.workforceList = res.dataList;
                    console.log(this.workforceList);
                    if (this.staticPagination.page == 1) {
                        this.staticPagination.total = res.totalCount;
                        this.staticPagination.totalPages = (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
                    }
                    //If showing action list for stage 1 then sorting it day wise 1 to N
                    let isStage1 = true;
                    this.workforceList.forEach(element => {
                        if (element.stageId != 1) {
                            isStage1 = false;
                        }
                    });
                    if (isStage1) {
                        this.workforceList = this.workforceList.sort(function (a, b) {
                            return a.dayNo - b.dayNo;
                        });
                    }
                    this.staticPagination.listLength = this.workforceList.length;
                }
                else {
                    this.workforceList = [];
                    this.staticPagination.listLength = this.workforceList.length;
                }
                this.staticPagination.listLength = this.workforceList.length;
            }
            else {
                this.workforceList = [];
                this.staticPagination.listLength = this.workforceList.length;
            }
        });
    }
    //     } else {
    //       this.actionList = [];
    //       this.staticPagination.listLength = this.actionList.length;
    //       //this.staticPagination.total = this.actionList.length;
    //     }
    //   }), (error: any) => {
    //     this.listLoading = false;
    //   });
    // }
    sortData(sort) {
        this.sorting = sort;
        console.log(this.sorting);
        this.getWorkforceList('');
    }
    getWorkForceDeploymentDetails(data) {
        this.headings.lineName = data.lineName;
        this.headings.deptName = data.deptName;
        this.headings.branchName = data.branchName;
        this.headings.shiftName = data.shiftName;
        console.log(data);
        var req = {
            deptId: data.deptId,
            branchId: data.branchId,
            lineId: data.lineId,
            shiftId: data.shiftId,
        };
        data.toDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("YYYY-MM");
        // req.fromDt = moment(data.fromDate).format("YYYY-MM-DD");
        // req.toDt =  moment(data.toDate).format("YYYY-MM-DD");
        console.log(req);
        this.apiService
            .getWorkForceDeploymentDetails("apis/sm/getWorkForceDeploymentDetails", req)
            .subscribe((res) => {
            console.log(res);
            if (res.result) {
                this.WorkForceDetails = res.data;
                this.columnsArray = this.WorkForceDetails.columns;
                this.empListArray = this.WorkForceDetails.empList;
                this.exportToExcel();
                console.log(this.WorkForceDetails);
            }
        });
    }
    addWorkForce(modal, data, type) {
        this.selectedDet = data;
        this.selectedDet.title = type;
        var modalRef = this.modalService.open(modal, {
            windowClass: "right",
        });
        modalRef.result.then((result) => {
            if (result === "success") {
                this.getWorkforceList('');
            }
            else {
                this.getWorkforceList('');
            }
        }, (reason) => {
            console.log(reason);
            this.getWorkforceList('');
        });
    }
    filterModalOpen(modal) {
        this.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
        this.getWorkforceList('filter');
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
    /*
       Common function for set an array for dropdown
       Author: Shashi
       Date : 12 Aug 2023
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
       Author: Shashi
       Date : 12 Sept, 2023
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
    exportToExcel() {
        const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_6__["Workbook"]();
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
            "Emp Id",
            "Emp Name",
            // "Cell/Name",
            "Work Station",
        ];
        const commonColumnWidth = 15; // You can adjust this value as needed
        for (let i = 1; i <= headers.length; i++) {
            worksheet.getColumn(1).width = commonColumnWidth;
        }
        worksheet.getColumn(2).width = 25;
        worksheet.getColumn(3).width = 25;
        const mainHeading = Array(headers.length).fill("");
        const centerIndex = Math.floor(headers.length / 2);
        mainHeading[centerIndex] = this.headingName;
        // Set the height of the first row
        worksheet.getRow(1).height = 30;
        worksheet.getRow(2).height = 30;
        worksheet.getRow(3).height = 30;
        // Make the text in the first row bold
        worksheet.getRow(1).font = {
            bold: true,
        };
        worksheet.getRow(2).font = {
            bold: true,
        };
        worksheet.getRow(3).font = {
            bold: true,
        };
        worksheet.mergeCells("A1:C1"); // Merge cells from A1 to K1
        worksheet.getCell("A1").value = "Plant :" + this.headings.branchName + "     " + "Department :" + this.headings.deptName + "     " + "Shift :" + this.headings.shiftName; // Set the value for the merged cell
        // worksheet.getCell("A1").fill = greenFill; // Apply the fill color
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
        worksheet.mergeCells("A2:C2"); // Merge cells from A2 to K1
        worksheet.getCell("A2").value = this.headings.lineName; // Set the value for the merged cell
        worksheet.getCell("A2").fill = greenFill; // Apply the fill color
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
        worksheet.mergeCells("A3:C3"); // Merge cells from A1 to K1
        worksheet.getCell("A3").value = "Fron Date :" + moment__WEBPACK_IMPORTED_MODULE_7__(this.WorkForceDetails.empList[0].fromDate).format("DD-MM-YYY") + "    To Date :" + moment__WEBPACK_IMPORTED_MODULE_7__(this.WorkForceDetails.empList[0].toDate).format("DD-MM-YYYY");
        worksheet.getCell("A3").fill = yellowFill; // Apply the fill color
        worksheet.getCell("A3").alignment = {
            horizontal: "center",
            vertical: "middle",
            wrapText: true,
        }; // Center the text
        // Set the height of the merged cell
        worksheet.getCell("A3").border = {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
        };
        worksheet.addRow(headers);
        // Add data to the worksheet
        this.WorkForceDetails.empList.forEach((item) => {
            const row = [
                // moment(item.fromDate).format("YYYY-MM-DD"),
                // moment(item.toDate).format("YYYY-MM-DD"),
                item.companyEmpId,
                item.empName,
                // item.line,
                item.workstationName,
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
            a.download = "skill-matrix.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        });
    }
};
WorkforceDeploymentComponent.ctorParameters = () => [
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
WorkforceDeploymentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-workforce-deployment",
        template: _raw_loader_workforce_deployment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_workforce_deployment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
], WorkforceDeploymentComponent);



/***/ }),

/***/ "QPyU":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/workforce-deployment/add-view-workforce/add-view-workforce.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddViewWorkforceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddViewWorkforceComponent", function() { return AddViewWorkforceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_view_workforce_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-view-workforce.component.html */ "uyTz");
/* harmony import */ var _add_view_workforce_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-view-workforce.component.scss */ "CJJ0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../skilling.service */ "Sh6i");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let AddViewWorkforceComponent = class AddViewWorkforceComponent {
    constructor(apiService, alertService, Constant) {
        this.apiService = apiService;
        this.alertService = alertService;
        this.searchDet = {};
        this.shiftList = [];
        this.branchAccessList = [];
        this.deptList = [];
        this.cellList = [];
        this.userDet = {};
        this.submitLoader = false;
        this.listLoader = false;
        this.skillMatrixDetails = {};
        this.columns = [];
        this.SingleDropdownSettings = {};
        this.constant = {};
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_6__();
        this.selectedWorkForceData = [];
        this.constant = Constant;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.minDate = new Date();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        if (this.selectedDet.title == 'View') {
            this.searchDet = {
                branch: [{ id: this.selectedDet.branchId, name: this.selectedDet.branchName }],
                dept: [{ id: this.selectedDet.deptId, name: this.selectedDet.deptName }],
                cell: [{ id: this.selectedDet.lineId, name: this.selectedDet.lineName }],
                shift: [{ id: this.selectedDet.shiftId, name: this.selectedDet.shiftName }],
                maxDate: new Date(moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format("YYYY,MM,DD")),
                fromDate: new Date(moment__WEBPACK_IMPORTED_MODULE_6__(this.selectedDet.fromDate).format("YYYY,MM,DD")),
                toDate: new Date(moment__WEBPACK_IMPORTED_MODULE_6__(this.selectedDet.toDate).format("YYYY,MM,DD"))
            };
            this.getWFDetails();
        }
        else {
            this.searchDet.maxDate = new Date(moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format("YYYY,MM,DD"));
            this.getBranchAccessList();
        }
    }
    /* gets Branch access list on employee
         @Author Mahesh
         @Date Oct 05, 2023
      */
    getBranchAccessList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            this.branchAccessList = this.sortFunction(this.branchAccessList, 'branchName');
            this.searchDet.branch = [this.branchAccessList[0]];
            this.getDeptList();
            this.getShiftData(this.searchDet.branch[0]);
        });
    }
    /* Change branch selction
       @Author Mahesh
       @Date Oct 05, 2023
    */
    onChangeBranch(event) {
        if (event) {
            this.getDeptList();
            // this.getCellList(event);
            this.getShiftData(event);
            this.shiftList = [];
            this.searchDet.shift = [];
        }
        else {
            this.deptList = [];
            this.searchDet.dept = [];
            this.cellList = [];
            this.searchDet.cell = [];
            this.shiftList = [];
            this.searchDet.shift = [];
        }
    }
    onChangeDept(data) {
        if (data) {
            this.getCellList();
            // this.getSkillMatixData();
            // this.getShiftData(data);
        }
        else {
            this.skillMatrixDetails = {};
            this.cellList = [];
            this.searchDet.cell = [];
        }
    }
    /* Change dept selction
       @Author Mahesh
       @Date Oct 05, 2023
    */
    onChangeCell(data) {
        if (data) {
            this.getSkillMatixData();
        }
        else {
            this.skillMatrixDetails = {};
        }
    }
    /* Change dept selction
       @Author Mahesh
       @Date Oct 05, 2023
    */
    onChangeShift(data) {
        if (data) {
        }
        else {
        }
    }
    getDeptList() {
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            this.apiService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + this.searchDet.branch[0].id).subscribe((res) => {
                if (res.result) {
                    if (res.deptList != null && res.deptList.length > 0) {
                        /* Use For Add Screen */
                        this.deptList = this.setArray(res.deptList, 'deptId', 'deptName');
                        this.deptList = this.sortFunction(this.deptList, 'deptName');
                        this.searchDet.dept = [this.deptList[0]];
                        this.getCellList();
                        // this.getSkillMatixData();
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
        else {
            this.cellList = [];
            this.searchDet.cell = [];
            this.skillMatrixDetails = {};
        }
    }
    /* get department list on branch selection
       @Author Mahesh
      * @Date Oct 05, 2023
    */
    getCellList() {
        var req = {
            branchId: this.searchDet.branch[0].id
        };
        if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            req.deptId = this.searchDet.dept[0].id;
        }
        this.apiService.getCellList('apis/sm/getCellList', req).subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    response.dataList = this.sortFunction(response.dataList, 'lineName');
                    this.cellList = this.setArray(response.dataList, 'lineId', 'lineName');
                    this.searchDet.cell = [this.cellList[0]];
                    this.getSkillMatixData();
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
    getShiftData(branch) {
        let req = {
            branchId: branch.id
        };
        this.apiService.getShiftData('apis/sm/getShiftList', req).subscribe((response) => {
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    response.dataList = this.sortFunction(response.dataList, 'shiftName');
                    this.shiftList = this.setArray(response.dataList, 'id', 'shiftName');
                }
                else {
                    this.shiftList = [];
                }
            }
            else {
                this.shiftList = [];
            }
        });
    }
    selectDate(type, ev) {
    }
    getWFDetails() {
        this.skillMatrixDetails = {};
        this.listLoader = true;
        let req = {
            "deptId": this.selectedDet.deptId,
            "shiftId": this.selectedDet.shiftId,
            "branchId": this.selectedDet.branchId,
            "lineId": this.selectedDet.lineId
        };
        this.apiService.getWFDetailsList('apis/sm/getWorkForceDeploymentDetails', req).subscribe((res) => {
            this.listLoader = false;
            if (res.result) {
                this.skillMatrixDetails = res.data;
                if (this.skillMatrixDetails.columns != null && this.skillMatrixDetails.columns.length > 0) {
                    for (let index = 0; index < this.skillMatrixDetails.columns.length; index++) {
                        this.skillMatrixDetails.columns[index].id = this.skillMatrixDetails.columns[index].workstationId;
                        this.skillMatrixDetails.columns[index].levelName = this.skillMatrixDetails.columns[index].level;
                    }
                }
                if (this.skillMatrixDetails.empList != null && this.skillMatrixDetails.empList.length > 0) {
                    this.selectedWorkForceData = [];
                    for (let index = 0; index < this.skillMatrixDetails.empList.length; index++) {
                        this.skillMatrixDetails.empList[index].isSelected = true;
                        this.selectedWorkForceData.push(this.skillMatrixDetails.empList[index]);
                    }
                }
            }
            else {
                this.skillMatrixDetails = {};
            }
        }, (error) => {
            this.skillMatrixDetails = {};
            this.listLoader = false;
        });
    }
    getSkillMatixData() {
        this.skillMatrixDetails = {};
        this.listLoader = true;
        let req = {
            "orgId": this.userDet.organization.orgId,
            "branchId": this.searchDet.branch[0].id
        };
        if (this.searchDet.dept != null && this.searchDet.dept.length > 0) {
            req.deptId = this.searchDet.dept[0].id;
        }
        if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
            req.lineId = this.searchDet.cell[0].id;
        }
        // getSkillMatrixList
        this.apiService.getSkillMatrixData('apis/sm/getSkillMatrixEmpList', req).subscribe((res) => {
            console.log(res);
            this.listLoader = false;
            if (res.result) {
                this.skillMatrixDetails = res.data;
                if (this.skillMatrixDetails.tableData != null && this.skillMatrixDetails.tableData.length > 0) {
                    this.columns = [];
                    for (let i = 0; i < this.skillMatrixDetails.columns.length; i++) {
                        this.columns.push(this.skillMatrixDetails.columns[i].field);
                        // console.log(this.columns)
                    }
                    // for (let j = 0; j < this.skillMatrixDetails.tableData.length; j++) {
                    //   for (let i = 0; i < this.columns.length; i++) {
                    //     const result = this.isCheckedStatus(this.skillMatrixDetails.tableData[j], this.columns[i]);
                    //     // Check if the object exists before updating the property
                    //     if (this.skillMatrixDetails.tableData[j]) {
                    //       this.skillMatrixDetails.tableData[j].isEligible = result;
                    //     }
                    //   }
                    // }
                    console.log(this.skillMatrixDetails);
                    for (let index = 0; index < this.skillMatrixDetails.tableData.length; index++) {
                        this.skillMatrixDetails.tableData[index].isSelected = false;
                    }
                }
                this.skillMatrixDetails.tableDataCopy = this.setArray(this.skillMatrixDetails.tableData, 'empId', 'empName');
                this.skillMatrixDetails.tableData = this.setArray(this.skillMatrixDetails.tableData, 'empId', 'empName');
            }
            else {
                this.skillMatrixDetails = {};
            }
        }, (error) => {
            this.skillMatrixDetails = {};
            this.listLoader = false;
        });
    }
    ngOnChanges(changes) {
        console.log(changes);
        if (this.selectedWorkForceData != null && this.selectedWorkForceData.length > 0) {
            for (const element of this.selectedWorkForceData) {
                let i = this.skillMatrixDetails.tableData.length;
                while (i--) {
                    this.skillMatrixDetails.tableData[i].isSelected = false;
                    if (this.skillMatrixDetails.tableData[i].empId == element.empId) {
                        this.skillMatrixDetails.tableData[i].isSelected = true;
                    }
                }
            }
        }
    }
    /* Comparison of Required skill level & Current skill level
       @Author Sanket B. (Modifier)
      * @Date Dec 28, 2023
    */
    isCheckedStatus(row, field) {
        for (let item in row) {
            if (field === item && row[item].hasOwnProperty("currentSkillLevelId") && row[item].hasOwnProperty("requireSkillLevelId")) {
                const currentLevel = row[item].currentSkillLevelId;
                const requiredLevel = row[item].requireSkillLevelId;
                if (currentLevel >= requiredLevel) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        return false;
    }
    // return obj;
    // }
    isEligibleCheck(ev, row) {
        let flag = false;
        // console.log(row.levelId + '>' + ev[row.field].currentSkillLevelId)
        if (ev[row.field].currentSkillLevelId >= row.levelId) {
            flag = true;
        }
        return flag;
    }
    onChangeEmp(ev, row, type) {
        console.log(ev);
        console.log(row);
        if (type == 'add') {
            let name = ev.name;
            if (!this.isObjectEmpty(this.isChecked(ev, row.field))) {
                name += ' (' + this.isChecked(ev, row.field).level + ')';
            }
            let obj = {
                "empId": ev.id,
                "empName": name,
                "workstationId": row.id,
                "isSelected": true,
                "isEligible": this.isEligibleCheck(ev, row)
            };
            this.selectedWorkForceData.push(obj);
            let j = this.skillMatrixDetails.tableData.length;
            while (j--) {
                if (this.skillMatrixDetails.tableData[j].empId == ev.empId)
                    this.skillMatrixDetails.tableData[j].isSelected = true;
            }
            console.log(this.selectedWorkForceData);
        }
        else {
            if (this.selectedWorkForceData != null && this.selectedWorkForceData.length > 0) {
                let i = this.selectedWorkForceData.length;
                while (i--) {
                    if (this.selectedWorkForceData[i].empId == ev.empId)
                        this.selectedWorkForceData.splice(i, 1);
                }
            }
            let j = this.skillMatrixDetails.tableData.length;
            while (j--) {
                if (this.skillMatrixDetails.tableData[j].empId == ev.empId)
                    this.skillMatrixDetails.tableData[j].isSelected = false;
            }
        }
    }
    saveWorkForce() {
        this.submitLoader = true;
        let cellObj = {};
        // if (this.searchDet.cell != null && this.searchDet.cell.length > 0) {
        //   cellObj = this.cellList.filter(x => x.id == this.searchDet.cell[0].id);
        // } else {
        //   this.alertService.error('Please select cell / line');
        //   this.submitLoader = false;
        //   return;
        // }
        if (this.searchDet.dept == null || this.searchDet.dept.length == 0) {
            this.alertService.error('Please select department');
            this.submitLoader = false;
            return;
        }
        if (this.searchDet.cell == null || this.searchDet.cell.length == 0) {
            this.alertService.error('Please select cell / line');
            this.submitLoader = false;
            return;
        }
        if (this.searchDet.shift == null || this.searchDet.shift.length == 0) {
            this.alertService.error('Please select shift');
            this.submitLoader = false;
            return;
        }
        if (!this.searchDet.fromDate || !this.searchDet.toDate) {
            this.alertService.error('Please select from and to date');
            this.submitLoader = false;
            return;
        }
        if (this.selectedWorkForceData != null && this.selectedWorkForceData.length > 0) {
            for (let index = 0; index < this.selectedWorkForceData.length; index++) {
                this.selectedWorkForceData[index].deptId = this.searchDet.dept[0].id;
                this.selectedWorkForceData[index].lineId = this.searchDet.cell[0].id;
                this.selectedWorkForceData[index].shiftId = this.searchDet.shift[0].id;
                this.selectedWorkForceData[index].fromDt = moment__WEBPACK_IMPORTED_MODULE_6__(this.searchDet.fromDate).format('YYYY-MM-DD');
                this.selectedWorkForceData[index].toDt = moment__WEBPACK_IMPORTED_MODULE_6__(this.searchDet.toDate).format('YYYY-MM-DD');
            }
        }
        let req = {
            createdBy: this.userDet.empId,
            empList: this.selectedWorkForceData
        };
        if (req.empList == null || req.empList.length == 0) {
            this.alertService.error('Please select employee');
            this.submitLoader = false;
            return;
        }
        console.log(req);
        /* let x = 0;
        if (x == 0) {
          this.submitLoader = false;
          return;
        } */
        this.apiService.saveWorkforceData('apis/sm/saveWorkForceDeployment', req).subscribe((res) => {
            this.submitLoader = false;
            if (res.result) {
                this.alertService.success('Workforce deployment saved successfully.');
                this.close('Cross Click');
            }
            else {
                if (res.statusCode == 100) {
                    this.alertService.error(res.reason);
                }
                else {
                    this.alertService.error('Error occurred while saving data. Please try again');
                }
            }
        }, (error) => {
            this.submitLoader = false;
        });
    }
    isObjectEmpty(objectName) {
        return Object.keys(objectName).length == 0;
    }
    isChecked(row, field) {
        let obj = {};
        // console.log(row, field)
        for (let item in row) {
            if (this.selectedDet.title == 'View') {
                if (field == row.workstationName) {
                    if (!this.isObjectEmpty(row) && row.hasOwnProperty("currentSkillLevel") && row.hasOwnProperty("currentSkillLevelId") && row.currentSkillLevelId != null) {
                        if (row.currentSkillLevelId) {
                            return { 'status': this.constant.EQUAL, level: row.currentSkillLevel };
                        }
                    }
                    else {
                        if (row.currentSkillLevelId == null) {
                            return { 'status': this.constant.NOT_ELIGIBLE, level: 'L0' };
                        }
                        else {
                            return { 'status': this.constant.NOT_ELIGIBLE, level: 'L0' };
                        }
                    }
                }
            }
            else if (field == item) {
                // console.log(item);
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
                        return { 'status': this.constant.NOT_ELIGIBLE, level: 'L0' };
                    }
                    else {
                        return { 'status': this.constant.NOT_ELIGIBLE, level: 'L0' };
                    }
                }
            }
        }
        return obj;
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
    /*
       Common function for set an array for dropdown
       Author: Mahesh
       Date : 05 Oct 2023
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
};
AddViewWorkforceComponent.ctorParameters = () => [
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: ['Constant',] }] }
];
AddViewWorkforceComponent.propDecorators = {
    close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    selectedDet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AddViewWorkforceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-view-workforce',
        template: _raw_loader_add_view_workforce_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_view_workforce_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"], Object])
], AddViewWorkforceComponent);



/***/ }),

/***/ "Sh6i":
/*!**********************************************************!*\
  !*** ./src/app/modules/skill-matrix/skilling.service.ts ***!
  \**********************************************************/
/*! exports provided: SkillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillingService", function() { return SkillingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth/http.service */ "bnLG");



let SkillingService = class SkillingService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    deleteOJTPlan(url) {
        return this.httpService.getMethod(url);
    }
    getBranchAccessList(url) {
        return this.httpService.getMethod(url);
    }
    getdepartmentlistbybranchid(url) {
        return this.httpService.getMethod(url);
    }
    getOJTPlan(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getOJTRegistration(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getSkillMatrixList(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getWorkforceResourceList(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getSkillMatrixEmpList(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getWorkstationList(url, getReq) {
        return this.httpService.postMethod(url, getReq);
    }
    submitOJTPlan(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    submitOJTRegi(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getOJTPlanDetails(url) {
        return this.httpService.getMethod(url);
    }
    getUserTypeList(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    getCellList(url, req) {
        return this.httpService.postMethod(url, req);
    }
    getWorkForceDeploymentDetails(url, req) {
        return this.httpService.postMethod(url, req);
    }
    // ---------------mySkilling Certificate API's by @Saurabh salunke ---------------------
    /* Get Department List by BranchId */
    getDepartmentByBranch(url) {
        return this.httpService.getMethod(url);
    }
    // get master certificate list
    getCertificateList(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // you will get assessment list here simran
    getAssessmentDisplay(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // you will get level list here simran
    getMasterLevelList(url) {
        return this.httpService.getMethod(url);
    }
    // you will get department list here simran
    getMasterDepartmentList(url) {
        return this.httpService.getMethod(url);
    }
    // you will get skilling action list here simran
    getSkillMatrixActionList(url, data) {
        return this.httpService.postMethod(url, data);
    }
    getSkillMatrixData(url, data) {
        return this.httpService.postMethod(url, data);
    }
    getShiftData(url, data) {
        return this.httpService.postMethod(url, data);
    }
    getWorkforceDeploymentData(url, data) {
        return this.httpService.postMethod(url, data);
    }
    getWFDetailsList(url, data) {
        return this.httpService.postMethod(url, data);
    }
    saveWorkforceData(url, data) {
        return this.httpService.postMethod(url, data);
    }
    getOJTRegistrationDetails(url) {
        return this.httpService.getMethod(url);
    }
};
SkillingService.ctorParameters = () => [
    { type: _shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
SkillingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], SkillingService);



/***/ }),

/***/ "Tdju":
/*!***************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/assessments/assessments.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssessmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentsComponent", function() { return AssessmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./assessments.component.html */ "6846");
/* harmony import */ var _assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assessments.component.scss */ "c+7d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skilling.service */ "Sh6i");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let AssessmentsComponent = class AssessmentsComponent {
    // @Input() masterActivity;
    constructor(skillingService, modalService, fb) {
        this.skillingService = skillingService;
        this.modalService = modalService;
        this.fb = fb;
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.searchDet = {};
        this.isUpload = false;
        this.filterFlag = false;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
        this.submitAttempted = false;
    }
    ngOnInit() {
        this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            masterWork: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            deptLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
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
        this.getMasterSkillLevelList();
        this.getAccessiblePlantList();
        // this.getMasterDepartmentList();
        this.getAssessmentList('');
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get assessmnet list 
    getAssessmentList(searchfilter) {
        this.assessmentData = [];
        // if (
        //   this.staticPagination.offset > 0 && this.filterFlag == false && searchfilter == "filter"
        // ) {
        //   this.clearPagination();
        // }
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let data = {
            "orgId": this.loggedInEmpDet.organization.orgId,
            'offset': this.staticPagination.offset,
            'limit': this.staticPagination.itemsPerPage,
        };
        if (searchfilter == 'filter') {
            if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
                data.branchId = this.searchDet.branchId[0].id;
            }
            if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
                data.deptIds = this.getIDsArray(this.searchDet.deptIds);
            }
            if (this.searchDet.masterWorkList != null && this.searchDet.masterWorkList.length > 0) {
                data.workstationIds = this.getIDsArray(this.searchDet.masterWorkList);
            }
        }
        else {
            data.branchId = this.loggedInEmpDet.branch.branchId;
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            data.search = this.searchDet.searchInput;
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                data.colName = this.sorting.active;
                data.orderType = this.sorting.direction.toUpperCase();
            }
        }
        console.log(data);
        this.skillingService.getAssessmentDisplay('apis/sm/getOJTAssessmentsList', data).subscribe((response) => {
            // if (response.result) {
            //   console.log(response);
            //   // (response.dataList != null && response.dataList.length > 0) ? response.dataList.length : 0;
            //   this.staticPagination.total = response.totalCount;
            //   // (this.staticPagination.total > 0) ? Math.ceil(this.staticPagination.total / this.staticPagination.itemsPerPage) : 0;
            //   this.staticPagination.totalPages =  Math.ceil(response.totalMyActionCount / this.staticPagination.itemsPerPage);
            //   if (response.dataList != null && response.dataList.length > 0) {
            //     this.assessmentData = response.dataList;
            //     console.log(this.assessmentData);
            //     this.staticPagination.listLength = this.assessmentData.length;
            //     console.log(response.dataList);
            //   }
            //   else {
            //     this.assessmentData = [];
            //     this.staticPagination.listLength = this.assessmentData.length;
            //   }
            // }
            // else {
            //   this.assessmentData = [];
            //   this.staticPagination.listLength = this.assessmentData.length;
            // }
            if (response.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(response.totalCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.assessmentData = response.dataList;
                    console.log(this.assessmentData);
                    this.staticPagination.listLength = response.dataList.length;
                }
                else {
                    this.assessmentData = [];
                }
            }
            else {
                this.assessmentData = [];
            }
            (error) => {
                this.assessmentData = [];
                this.listLoading = false;
            };
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : filter modal open
    filterModalOpen(modal) {
        this.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get branch list
    getAccessiblePlantList() {
        this.skillingService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.loggedInEmpDet.organization.orgId + "/" + this.loggedInEmpDet.empId).subscribe((res) => {
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    this.searchDet.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
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
            this.getAssessmentList('');
            // this.getMasterDepartmentList();
        });
    }
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will get level list
    getMasterSkillLevelList() {
        this.skillingService.getMasterLevelList('apis/sm/getLevelList').subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.masterLevelList = this.setArray(res.dataList, 'id', 'levelName');
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
        this.skillingService.getMasterDepartmentList('getdepartmentlistbybranchid/' + selectedBranchId.id).subscribe((res) => {
            if (res.result) {
                console.log(res);
                if (res.deptList != null && res.deptList.length > 0) {
                    this.masterDeptList = this.setArray(res.deptList, 'deptId', 'deptName');
                    this.searchDet.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    // this.searchDet.deptIds = this.searchDet.departmentList;
                    this.getWorkstationList();
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
    // Assessment module
    // Author: Simran
    // created date: 25/08/2023
    // description : you will workstation list
    getWorkstationList() {
        this.listLoading = true;
        let getReq = {
            "branchId": this.searchDet.branchId[0].id,
            "orgId": this.loggedInEmpDet.organization.orgId
        };
        if (this.getIDsArray(this.searchDet.deptIds) != null && this.getIDsArray(this.searchDet.deptIds).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.searchDet.deptIds).length; i++) {
                getReq.deptIds = this.getIDsArray(this.searchDet.deptIds);
                console.log(getReq.deptIds);
            }
        }
        console.log(getReq);
        this.skillingService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
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
    // onChange(selectedPlant: any) {
    //   this.selectedBranchId = selectedPlant.id
    //   console.log(selectedPlant)
    //   // Fetch the departments based on the selected plant ID
    //   // const plantId = selectedPlant[0]?.id; // Assuming singleSelection is true
    //   if (selectedPlant.id) {
    //     this.getMasterDepartmentList(this.selectedBranchId)
    //   }
    //   else {
    //     this.masterDeptList = [];
    //   }
    // }
    // onDeSelectPlant(){
    //   this.masterDeptList = [];
    // }
    openViewModal(modal, data) {
        console.log(data);
        this.selectedRecForModal = '';
        this.selectedRecForModal = data;
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
    /*
        Load More Pagination next page Data
        @Author : Simran
        @Date : 30/08/2023
      */
    loadMore(ev) {
        this.staticPagination = ev;
        this.getAssessmentList('');
    }
    sortData(sort) {
        this.sorting = sort;
        this.getAssessmentList('');
    }
    /*
         Apply filter function
         Author: simran
         Date : 30 Aug 2023
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
      Date : 30 Aug 2023
    */
    removeFilter() {
        this.submitAttempted = false;
        this.filterData.patchValue({
            branchId: [],
            deptLvlId: [],
            masterWork: []
        });
        this.searchDet.branchId = [];
        this.searchDet.deptIds = [];
        this.searchDet.masterWorkList = [];
        this.searchDet.filterFlag = false;
        this.getAssessmentList('');
    }
    /*
  Reset Form function
  Author: Simran
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
    /*
      Multi Select Dropdown onChange function
      Author: simran
      Date : 04/09/2023
  */
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
    }
    /*
      Single Select Dropdown onChange function
      Author: simran
      Date : 01/09/2023
  */
    onChange(ev, type) {
        if (ev) {
            if (type == 'plant') {
                this.getMasterDepartmentList(ev);
            }
        }
        else {
            if (type == 'plant') {
                if (this.searchDet.filterModalOpen) {
                    this.searchDet.departmentList = [];
                    this.resetFormField(this.filterData, 'deptIds');
                }
                // else {
                //   this.resetFormField(this.stakeholderForm, 'deptIds');
                // }
            } /*else if (type == 'dept') {
                } else if (type == 'userType') { }*/
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
    /*
        @DESC : Function to clear pagination
        @Author: Simran
        @Date : 09/09/2023
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
            if (fieldToSort === "plant" || fieldToSort === "cell" || fieldToSort === "work") {
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
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
AssessmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessments',
        template: _raw_loader_assessments_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessments_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], AssessmentsComponent);



/***/ }),

/***/ "TvKG":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/workforce-deployment/workforce-deployment.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".insideLabel {\n  margin-bottom: 10px;\n}\n.insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n.extraContent .addRegDiv .addRegBtn {\n  right: 5rem !important;\n}\n.img-fluid {\n  height: 20px;\n}\n.title {\n  color: #7044CD !important;\n}\n.extraContent .addRegDiv .addRegBtn,\n.extraContent .addRegDiv .addRegBtn:hover,\n.extraContent .addRegDiv .addRegBtn:focus {\n  right: 9rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd29ya2ZvcmNlLWRlcGxveW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUVSO0FBQ0E7RUFDSSxzQkFBQTtBQUVKO0FBQUE7RUFDSSxZQUFBO0FBR0o7QUFEQTtFQUNJLHlCQUFBO0FBSUo7QUFGQTs7O0VBR0ksc0JBQUE7QUFLSiIsImZpbGUiOiJ3b3JrZm9yY2UtZGVwbG95bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGVMYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICB9XHJcbn1cclxuLmV4dHJhQ29udGVudCAuYWRkUmVnRGl2IC5hZGRSZWdCdG4ge1xyXG4gICAgcmlnaHQ6IDVyZW0gIWltcG9ydGFudDtcclxufVxyXG4uaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIGNvbG9yOiAjNzA0NENEICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4dHJhQ29udGVudCAuYWRkUmVnRGl2IC5hZGRSZWdCdG4sXHJcbi5leHRyYUNvbnRlbnQgLmFkZFJlZ0RpdiAuYWRkUmVnQnRuOmhvdmVyLFxyXG4uZXh0cmFDb250ZW50IC5hZGRSZWdEaXYgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICByaWdodDogOXJlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VX2j":
/*!***************************************************************!*\
  !*** ./src/app/modules/skill-matrix/skill-matrix.constant.ts ***!
  \***************************************************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
const CONSTANT = {
    EQUAL: "EQUAL",
    ELIGIBLE: "ELIGIBLE",
    NOT_ELIGIBLE: "NOT_ELIGIBLE",
    OTHER: "OTHER"
};


/***/ }),

/***/ "X7Pu":
/*!******************************************************************!*\
  !*** ./src/app/modules/skill-matrix/skill-matrix.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 20px;\n}\n\n.insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n\n.center-align {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.bg-l1 {\n  background-color: red;\n}\n\n.bg-l2 {\n  background-color: #D9D9D9;\n}\n\n.bg-l3 {\n  background-color: green;\n}\n\n.skill-table {\n  margin-top: 5px;\n  border-top: 1px solid lightgray;\n}\n\n.skill-table thead th {\n  box-shadow: none !important;\n  border-color: lightgray;\n  border-width: 1px;\n}\n\n.excelbutton {\n  cursor: pointer;\n}\n\n.excelbutton .excelFont {\n  font: normal normal 500 11px/1.5 Helvetica Neue;\n}\n\n.empSkillLevelTd .form-check-label {\n  color: #000 !important;\n  font-weight: 400;\n  text-align: center;\n}\n\n.empSkillLevelTd.EQUAL {\n  background: #FF0000;\n}\n\n.empSkillLevelTd.ELIGIBLE {\n  background: #D9D9D9;\n}\n\n.empSkillLevelTd.NOT_ELIGIBLE {\n  background: #99cd3a;\n}\n\n.empSkillLevelTd.OTHER {\n  background: #FFF;\n}\n\n.red-background {\n  background: #FF0000;\n}\n\n.gray-background {\n  background: #D9D9D9;\n}\n\n.green-background {\n  background: #99cd3a;\n}\n\n.white-background {\n  background: #FFF;\n}\n\n.count-block {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n  width: 100%;\n}\n\n.count-block .countLi {\n  float: left;\n  list-style: none;\n  width: 22%;\n  background: #fff;\n  padding: 0px 10px 5px;\n  margin: 10px 10px 5px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 8px #8e8e8e;\n}\n\n.count-block .countLi .heading {\n  font: normal normal normal 13px/1.5 Helvetica Neue;\n  margin: 0px;\n}\n\n.count-block .countLi .headerBlock {\n  border-bottom: 1px solid #7044cd;\n  margin: 0px -10px;\n  padding: 0px 10px;\n}\n\n.count-block .countLi .headerBlock .heading {\n  color: #7044cd;\n  padding: 5px;\n  font-weight: bold;\n}\n\n.count-block .countLi .count {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #000;\n}\n\n.btn-excel-export {\n  cursor: pointer;\n}\n\n.input-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.input-wrapper label {\n  margin-right: 10px;\n}\n\n.form-control {\n  margin-top: -9px;\n  height: calc(1.5em + 0.75rem + -4px);\n  margin-bottom: -10px;\n}\n\n.vertical-text {\n  vertical-align: middle;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.first-col {\n  position: sticky;\n  left: 0;\n  top: 0;\n  /* Makes it sticky vertically */\n  width: 100px;\n  z-index: 5;\n}\n\n.second-col {\n  position: sticky;\n  left: 68px;\n  top: 0;\n  /* Makes it sticky vertically */\n  width: 100px;\n  z-index: 5;\n}\n\n.third-col {\n  position: sticky;\n  left: 145px;\n  top: 0;\n  /* Makes it sticky vertically */\n  width: 100px;\n  z-index: 5;\n}\n\n.first-col-td {\n  position: sticky;\n  *position: relative;\n  /*ie7*/\n  left: 0;\n  width: 100px;\n  z-index: 4;\n}\n\n.second-col-td {\n  position: sticky;\n  *position: relative;\n  /*ie7*/\n  left: 68px;\n  width: 100px;\n  z-index: 4;\n}\n\n.third-col-td {\n  position: sticky;\n  *position: relative;\n  /*ie7*/\n  left: 145px;\n  width: 100px;\n  z-index: 4;\n}\n\n.extraContent {\n  margin-left: 12px;\n  padding: 2px 10px 0px 5px;\n}\n\n.main {\n  display: flex;\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2lsbC1tYXRyaXguY29tcG9uZW50LnNjc3MiLCJza2lsbC1tYXRyaXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0kscUJBQUE7QUFGSjs7QUFLQTtFQUNJLHlCQUFBO0FBRko7O0FBS0E7RUFDSSx1QkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBRko7O0FBSUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFGUjs7QUFPQTtFQUNJLGVBQUE7QUFKSjs7QUFNSTtFQUNJLCtDQUFBO0FBSlI7O0FBU0k7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFTSTtFQUVJLG1CQUFBO0FBUlI7O0FBWUk7RUFDSSxtQkFBQTtBQVZSOztBQWNJO0VBQ0ksbUJBQUE7QUFaUjs7QUFnQkk7RUFDSSxnQkFBQTtBQWRSOztBQWtCQTtFQUNJLG1CQUFBO0FBZko7O0FBa0JBO0VBQ0ksbUJBQUE7QUFmSjs7QUFrQkE7RUFDSSxtQkFBQTtBQWZKOztBQWtCQTtFQUNJLGdCQUFBO0FBZko7O0FBa0JBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUFmSjs7QUFpQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQWZSOztBQWtCUTtFQUNJLGtEQUFBO0VBRUEsV0FBQTtBQWpCWjs7QUFvQlE7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFsQlo7O0FBb0JZO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWxCaEI7O0FBc0JRO0VBQ0ksZ0RBQUE7RUFDQSxXQUFBO0FBcEJaOztBQXlCQTtFQUNJLGVBQUE7QUF0Qko7O0FBMEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBdkJKOztBQTBCQTtFQUNJLGtCQUFBO0FBdkJKOztBQTBCQTtFQUNJLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxzQkFBQTtBQXZCSjs7QUEwQkE7RUFDSSxrQkFBQTtBQXZCSjs7QUEyQkE7RUFDSSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQVEsK0JBQUE7RUFDUixZQUFBO0VBQ0EsVUFBQTtBQXZCSjs7QUEwQkE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQVEsK0JBQUE7RUFDUixZQUFBO0VBQ0EsVUFBQTtBQXRCSjs7QUF5QkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQVEsK0JBQUE7RUFDUixZQUFBO0VBQ0EsVUFBQTtBQXJCSjs7QUF3QkE7RUFDSSxnQkFBQTtHQ3JCRixrQkRzQkU7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBckJKOztBQXdCQTtFQUNJLGdCQUFBO0dDckJGLGtCRHNCRTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFyQko7O0FBd0JBO0VBQ0ksZ0JBQUE7R0NyQkYsa0JEc0JFO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQXJCSjs7QUF3QkE7RUFFSSxpQkFBQTtFQUNBLHlCQUFBO0FBdEJKOztBQXdCQTtFQUNJLGFBQUE7RUFBYyw2QkFBQTtBQXBCbEIiLCJmaWxlIjoic2tpbGwtbWF0cml4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5zaWRlTGFiZWwge1xyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uY2VudGVyLWFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5iZy1sMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5iZy1sMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xyXG59XHJcblxyXG4uYmctbDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5za2lsbC10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG5cclxuICAgIHRoZWFkIHRoIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGNlbGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmV4Y2VsRm9udCB7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTFweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXBTa2lsbExldmVsVGQge1xyXG4gICAgLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5FUVVBTCB7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogIzk5Y2QzYTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xyXG4gICAgICAgIC8vIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgICYuRUxJR0lCTEUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEOUQ5RDk7XHJcbiAgICAgICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5OT1RfRUxJR0lCTEUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5OWNkM2E7XHJcbiAgICAgICAgLy8gY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgJi5PVEhFUiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRjAwMDA7XHJcbn1cclxuXHJcbi5ncmF5LWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogI0Q5RDlEOTtcclxufVxyXG5cclxuLmdyZWVuLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogIzk5Y2QzYTtcclxufVxyXG5cclxuLndoaXRlLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxufVxyXG5cclxuLmNvdW50LWJsb2NrIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLmNvdW50TGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDIyJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICM4ZThlOGU7XHJcblxyXG5cclxuICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEzcHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICAvLyBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaGVhZGVyQmxvY2sge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggLTEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvdW50IHtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZXhjZWwtZXhwb3J0IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gQW5pa2V0IDotIGlucHV0IHRhZyBjc3NcclxuLmlucHV0LXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dC13cmFwcGVyIGxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtOXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIC00cHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC10ZXh0IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uZmlyc3QtY29sIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwOyAvKiBNYWtlcyBpdCBzdGlja3kgdmVydGljYWxseSAqL1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG5cclxuLnNlY29uZC1jb2wge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGxlZnQ6IDY4cHg7XHJcbiAgICB0b3A6IDA7IC8qIE1ha2VzIGl0IHN0aWNreSB2ZXJ0aWNhbGx5ICovXHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4udGhpcmQtY29sIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBsZWZ0OiAxNDVweDtcclxuICAgIHRvcDogMDsgLyogTWFrZXMgaXQgc3RpY2t5IHZlcnRpY2FsbHkgKi9cclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5maXJzdC1jb2wtdGQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICpwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKmllNyovXHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLnNlY29uZC1jb2wtdGQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICpwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKmllNyovXHJcbiAgICBsZWZ0OiA2OHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLnRoaXJkLWNvbC10ZCB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgKnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qaWU3Ki9cclxuICAgIGxlZnQ6IDE0NXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgei1pbmRleDogNDtcclxufVxyXG5cclxuLmV4dHJhQ29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4IDBweCA1cHg7XHJcbn1cclxuLm1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufSIsIi5sb2dvIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaW5zaWRlTGFiZWwgLmNvbC1mb3JtLWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMHB4O1xuICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWU7XG4gIGxlZnQ6IDEuNXJlbTtcbiAgY29sb3I6ICM3MDQ0Y2Q7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5iZy1sMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmJnLWwyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcbn1cblxuLmJnLWwzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5za2lsbC10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5za2lsbC10YWJsZSB0aGVhZCB0aCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG4uZXhjZWxidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZXhjZWxidXR0b24gLmV4Y2VsRm9udCB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDExcHgvMS41IEhlbHZldGljYSBOZXVlO1xufVxuXG4uZW1wU2tpbGxMZXZlbFRkIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmVtcFNraWxsTGV2ZWxUZC5FUVVBTCB7XG4gIGJhY2tncm91bmQ6ICNGRjAwMDA7XG59XG4uZW1wU2tpbGxMZXZlbFRkLkVMSUdJQkxFIHtcbiAgYmFja2dyb3VuZDogI0Q5RDlEOTtcbn1cbi5lbXBTa2lsbExldmVsVGQuTk9UX0VMSUdJQkxFIHtcbiAgYmFja2dyb3VuZDogIzk5Y2QzYTtcbn1cbi5lbXBTa2lsbExldmVsVGQuT1RIRVIge1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuXG4ucmVkLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAwO1xufVxuXG4uZ3JheS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogI0Q5RDlEOTtcbn1cblxuLmdyZWVuLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjOTljZDNhO1xufVxuXG4ud2hpdGUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG5cbi5jb3VudC1ibG9jayB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uY291bnQtYmxvY2sgLmNvdW50TGkge1xuICBmbG9hdDogbGVmdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgd2lkdGg6IDIyJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDEwcHggNXB4O1xuICBtYXJnaW46IDEwcHggMTBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggIzhlOGU4ZTtcbn1cbi5jb3VudC1ibG9jayAuY291bnRMaSAuaGVhZGluZyB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDEzcHgvMS41IEhlbHZldGljYSBOZXVlO1xuICBtYXJnaW46IDBweDtcbn1cbi5jb3VudC1ibG9jayAuY291bnRMaSAuaGVhZGVyQmxvY2sge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcbiAgbWFyZ2luOiAwcHggLTEwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLmNvdW50LWJsb2NrIC5jb3VudExpIC5oZWFkZXJCbG9jayAuaGVhZGluZyB7XG4gIGNvbG9yOiAjNzA0NGNkO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvdW50LWJsb2NrIC5jb3VudExpIC5jb3VudCB7XG4gIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5idG4tZXhjZWwtZXhwb3J0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbnB1dC13cmFwcGVyIGxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIC00cHgpO1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLnZlcnRpY2FsLXRleHQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXJzdC1jb2wge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIC8qIE1ha2VzIGl0IHN0aWNreSB2ZXJ0aWNhbGx5ICovXG4gIHdpZHRoOiAxMDBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLnNlY29uZC1jb2wge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiA2OHB4O1xuICB0b3A6IDA7XG4gIC8qIE1ha2VzIGl0IHN0aWNreSB2ZXJ0aWNhbGx5ICovXG4gIHdpZHRoOiAxMDBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLnRoaXJkLWNvbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDE0NXB4O1xuICB0b3A6IDA7XG4gIC8qIE1ha2VzIGl0IHN0aWNreSB2ZXJ0aWNhbGx5ICovXG4gIHdpZHRoOiAxMDBweDtcbiAgei1pbmRleDogNTtcbn1cblxuLmZpcnN0LWNvbC10ZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gICpwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qaWU3Ki9cbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4uc2Vjb25kLWNvbC10ZCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gICpwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qaWU3Ki9cbiAgbGVmdDogNjhweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4udGhpcmQtY29sLXRkIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgKnBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyppZTcqL1xuICBsZWZ0OiAxNDVweDtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4uZXh0cmFDb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4IDBweCA1cHg7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59Il19 */");

/***/ }),

/***/ "aDYC":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/certificates/certificates.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Certificates\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\" [(ngModel)]=\"searchDet.searchInput\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i> \r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n   \r\n        <div class=\" extraContent row m-0\">\r\n            <div class=\"col-4\">\r\n                <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\"> -->\r\n                <div class=\"form-group has-search\">\r\n                    <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\"\r\n                        (click)=\"getSearchList(true)\"></span>\r\n                    <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                        (click)=\"getSearchList(false)\"></span>\r\n                    <input type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                        placeholder=\"Search by name or workstation\" [(ngModel)]=\"searchDet.searchInput\"\r\n                        autocomplete=\"off\" (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\">\r\n                </div>\r\n                <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                Applied</span>\r\n                        </div>\r\n                    </div> -->\r\n            </div>\r\n            <div class=\"col-4\">\r\n            </div>\r\n            <div class=\"col-4\"></div>\r\n        </div>\r\n \r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"EmpId\">Emp. ID</th>\r\n                        <th mat-sort-header=\"EmpName\">Emp.Name</th>\r\n                        <th mat-sort-header=\"Workstation\">WorkStation</th>\r\n                        <th mat-sort-header=\"LevelName\">Level</th>\r\n                        <th mat-sort-header=\"Status\">Status</th>\r\n                        <th>Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of certificateList\">\r\n                        <td>{{data.branchName }}</td>\r\n                        <td>{{data.deptName }}</td>\r\n                        <!-- <td>{{x.lineName}}</td> -->\r\n                        <td>{{data.companyEmpId }}</td>\r\n                        <td>{{data.empName }}</td>\r\n                        <td>{{data.workstationName }}</td>\r\n                        <td>{{data.levelName }}</td>\r\n                        <td [ngClass]=\"{'completed':data.status == 'COMPLETED','pending':data.status == 'PENDING'}\">{{data.status}}</td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <a (click)=\"previewCertificate(data,certificateModal)\"\r\n                                style=\"color:#7044CD;cursor: pointer\"><i class=\"fa fa-eye viewIcon\"></i></a>\r\n                            &nbsp; &nbsp;\r\n                            <!-- <a style=\"color:#7044CD;cursor: pointer;\" href=\"{{data.certificatePath}}\" download\r\n                                target=\"_blank\"><i class=\"fa fa-download\"></i></a> -->\r\n\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(certificateList == null || certificateList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data Not Found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\">\r\n    </app-pagination>\r\n</div>\r\n\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(plantList,'plant')\" formControlName=\"branchId\"\r\n                            [(ngModel)]=\"searchDet.branch\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.departmentList,'dept')\" formControlName=\"deptIds\"\r\n                            [(ngModel)]=\"searchDet.deptIds\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\" (onSelectAll)=\"onChangeAll($event,'dept')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel -->\r\n            <!-- </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n\r\n<ng-template #certificateModal let-c=\"close\">\r\n    <app-viewCertificate [close]=\"c\" [selectedDet]=\"selectedRecForModal\"></app-viewCertificate>\r\n</ng-template>\r\n\r\n\r\n<!-- <ng-template #previewCertModal let-c1=\"close\" let-d=\"dismiss\">\r\n\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content previewCert\" >\r\n            <div class=\"modal-header previewHeader\">\r\n                <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Preview Certificate</h4>\r\n            </div>\r\n            <div class=\"modal-body p-0 text-center\">\r\n                <perfect-scrollbar [style.height]=\"'calc(100vh - 25vh)'\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"certImgDiv\">\r\n                                <span style=\"display: inline-block;width: calc(100% - 46%);position: relative;\"\r\n                                    id=\"certDiv\">\r\n                                    <img src=\"{{''}}\" alt=\"\" class=\"certImg\" />\r\n\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n                <div class=\"row text-center p-2\">\r\n                    <div class=\"col\">\r\n                        <a class=\"btn Downloadbtn submitBtn\" href=\"{{''}}\" download\r\n                            target=\"_blank\">Download</a>\r\n                        &nbsp;&nbsp;\r\n                        <button type=\"button\" class=\"btn cancelBtn\" (click)=\"c1('Cross click')\">\r\n                            Cancel\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template> -->");

/***/ }),

/***/ "c+7d":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/assessments/assessments.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerTitle {\n  color: #7044cd !important;\n  font: normal normal 500 18px/1.5 Helvetica Neue !important;\n}\n\n.tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  border-left: none;\n  border-right: none;\n}\n\n.tableFixHead tr th:nth-child(11),\n.tableFixHead tr td:nth-child(11) {\n  width: 150px;\n  min-width: 150px;\n  max-width: 150px;\n  right: 72px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXNzbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDBEQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQXFCSTs7RUFFSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFsQlIiLCJmaWxlIjoiYXNzZXNzbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyVGl0bGUge1xyXG4gICAgY29sb3I6ICM3MDQ0Y2QgIWltcG9ydGFudDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE4cHgvMS41IEhlbHZldGljYSBOZXVlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQgdGFibGUgLmZpeGVkQ29sdW1uIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnRhYmxlRml4SGVhZCB7XHJcblxyXG4gICAgLy8gdHIgdGg6Zmlyc3QtY2hpbGQoMSksIHRyIHRkOmZpcnN0LWNoaWxkKDEpIHtcclxuICAgIC8vICAgICB3aWR0aDogNTBweDttaW4td2lkdGg6IDUwcHg7bWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgLy8gICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIC8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gdHIgdGg6bnRoLWNoaWxkKDIpLCB0ciB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgLy8gICAgIHdpZHRoOiAxMDBweDttaW4td2lkdGg6IDEwMHB4O21heC13aWR0aDogMTAwcHg7XHJcbiAgICAvLyAgICAgbGVmdDogNjRweDtcclxuICAgIC8vICAgICB0ZXh0LXdyYXA6IHdyYXA7XHJcbiAgICAvLyAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIC8vIH1cclxuICAgIC8vIHRyIHRoOm50aC1jaGlsZCgzKSwgdHIgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIC8vICAgICB3aWR0aDogMjAwcHg7bWluLXdpZHRoOiAyMDBweDttYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgLy8gICAgIGxlZnQ6IDE2NHB4O1xyXG4gICAgLy8gICAgIHRleHQtd3JhcDogd3JhcDtcclxuICAgIC8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgLy8gfVxyXG4gICAgdHIgdGg6bnRoLWNoaWxkKDExKSxcclxuICAgIHRyIHRkOm50aC1jaGlsZCgxMSkge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDcycHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "lw/l":
/*!*********************************************************************!*\
  !*** ./src/app/modules/skill-matrix/actions/actions.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n  border-left: none;\n  border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQgdGFibGUgLmZpeGVkQ29sdW1uIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDI7IFxyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "rh6a":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/skill-matrix.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-7 m-auto\" >\r\n        <app-topBar title=\"Home\" style=\"max-width: 200px;\"></app-topBar>\r\n   </div>\r\n\r\n   \r\n    <div class=\"col-3 m-auto main\" >\r\n        <div></div>\r\n        <div class=\"form-group has-search \" style=\"margin-top: 20px; max-width: 220px;\">\r\n            <span\r\n                class=\"fa form-control-feedback\"\r\n                [ngClass]=\"{'fa-search': !searchInput, 'fa-times-circle': searchInput}\"\r\n                (click)=\"clearSearch()\">\r\n            </span>\r\n            <input style=\"border: 1px solid #7044cd; background-color: transparent; border-radius: 12px; min-width: 218px;\" type=\"text\" class=\"form-control\"\r\n                name=\"searchInput\" placeholder=\"Search by Emp Id, Name\"  [(ngModel)]=\"searchInput\"\r\n                (input)=\"filterList()\" autocomplete=\"off\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 p-0 m-auto \" style=\"display: flex; gap: 30px;\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n\r\n        <img src=\"assets/images/ic_excel.png\" style=\"height: 37px; width: 30px;\" alt=\"\" class=\"img-fluid btn-excel-export\" (click)=\"exportReport()\">\r\n    </div>\r\n    <!-- <div class=\"col-1 m-auto\" style=\"padding-left: 17px;\">\r\n        <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid btn-excel-export\" (click)=\"exportReport()\">\r\n    </div> -->\r\n    <!-- <div class=\"col-3 m-auto\">\r\n        <app-loginInfo></app-loginInfo>\r\n    </div> -->\r\n</div>\r\n\r\n\r\n\r\n<!-- <div class=\"row\" style=\"margin-top: 3px;\">\r\n    <div class=\"col-11 m-auto\">\r\n    </div>\r\n    <div class=\"col-1 m-auto\" style=\"padding-left: 17px;\">\r\n        <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid btn-excel-export\" (click)=\"exportReport()\">\r\n    </div>\r\n</div> -->\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n    </div>\r\n    <div class=\"table-block skill-table\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table id=\"tbl-skill-matrix\" class=\"table table-bordered\">\r\n                <ng-container *ngIf=\"!isObjectEmpty(skillMatrixDetails)\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th colspan=\"3\" class=\"first-col\" scope=\"col\">\r\n                                <!--    Aniket :- Show Document Name  -->\r\n                                <b>Doc No:- &nbsp; {{ skillMatrixDocument?.docName || '-' }}</b>\r\n                            </th>\r\n                            <th colspan=\"2\" scope=\"col\" class=\"\">MACHINE INDEX RATING</th>\r\n                            <ng-container *ngFor=\"let column of skillMatrixDetails.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field != 'empId' && column.field != 'empName' && column.field != 'gender' && column.field != 'experience' && column.field != 'empLevel'\">\r\n                                    <th class=\"text-center\" scope=\"col\">\r\n                                        {{column.machineIndex}}\r\n                                    </th>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <th class=\"vertical-text\" rowspan=\"2\" scope=\"col\">\r\n                                NO. OF SHIFTS\r\n                            </th>\r\n                            <th class=\"vertical-text\" rowspan=\"2\" colspan=\"2\" scope=\"col\">\r\n                                <ng-multiselect-dropdown name=\"shift\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Shift'\" [settings]=\"SingleDropdownSettings\"\r\n                                    [data]=\"shiftList\" [(ngModel)]=\"searchDet.shift\" (onSelect)=\"onChangeShift($event)\"\r\n                                    (onDeSelect)=\"onChangeShift(false)\">\r\n                                </ng-multiselect-dropdown>\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"first-col\" colspan=\"3\" scope=\"col\">\r\n                                <!--    Aniket :- Show Document date  -->\r\n                                <b>Rev Date:- &nbsp; {{ skillMatrixDocument?.currentDate | date:' dd MMMM yyyy' || '-'\r\n                                    }}</b>\r\n                            </th>\r\n                            <th colspan=\"2\" class=\"\" scope=\"col\">MIN. SKILL LEVEL REQ.</th>\r\n                            <ng-container *ngFor=\"let column of skillMatrixDetails.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field != 'empId' && column.field != 'empName' && column.field != 'gender' && column.field != 'experience' && column.field != 'empLevel'\">\r\n                                    <th class=\"text-center\" scope=\"col\">\r\n                                        {{column.levelName}}\r\n                                    </th>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                        </tr>\r\n                        <tr>\r\n                            <!--    Aniket :- Show Document Rev No  -->\r\n                            <th class=\"first-col\" colspan=\"3\" scope=\"col\">\r\n                                <div class=\"input-wrapper\">\r\n                                    <label>\r\n                                        <b>Rev No:- </b>\r\n                                    </label>\r\n                                    <input placeholder=\"Enter Rev No\" class=\"form-control checksheetinputBox\" id=\"revNo\"\r\n                                        name=\"revNo\" [(ngModel)]=\"revNo\" type=\"number\" pattern=\"^\\d{1,2}$\">\r\n                                </div>\r\n                            </th>\r\n                            <th colspan=\"2\" class=\"\" scope=\"col\">REQUIRED NUMBER TRAINED</th>\r\n                            <ng-container *ngFor=\"let column of skillMatrixDetails.columns\">\r\n                                <ng-container\r\n                                    *ngIf=\"column.field != 'empId' && column.field != 'empName' && column.field != 'gender' && column.field != 'experience' && column.field != 'empLevel'\">\r\n                                    <th class=\"text-center\" scope=\"col\">\r\n                                        {{column.requiredWorkforce}}\r\n                                    </th>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <th class=\"vertical-text\" rowspan=\"2\" scope=\"col\">SKILL LEVEL</th>\r\n\r\n                            <th class=\"vertical-text\" rowspan=\"2\" scope=\"col\" style=\"position: static !important;\">\r\n                                MULTI SKILL %\r\n                            </th>\r\n                            <th class=\"vertical-text\" rowspan=\"2\" scope=\"col\" style=\"position: static !important;\">\r\n                                MARKS\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th class=\"first-col first-col-head\" scope=\"col\">Sr No</th>\r\n                            <ng-container *ngFor=\"let x of skillMatrixDetails.columns\">\r\n                                <ng-container *ngIf=\"x.field != 'gender'\">\r\n                                    <th \r\n                                        class=\"\" \r\n                                        scope=\"col\" \r\n                                        [ngClass]=\"{\r\n                                            'second-col': x.field === 'empId', \r\n                                            'third-col': x.field === 'empName'\r\n                                        }\">\r\n                                        {{x.heading}}\r\n                                    </th>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            \r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <!--filteredEmpData <ng-container *ngFor=\"let row of skillMatrixDetails.tableEmpData; let recIndex = index;\"> -->\r\n                            <ng-container *ngFor=\"let row of filteredEmpData; let recIndex = index;\">\r\n                            <tr *ngIf=\"row.empLevel != 'TL'\">\r\n                                <td class=\"first-col-td\">{{recIndex+1}}</td>\r\n                                <td class=\"second-col-td\">{{row.empId}}</td>\r\n                                <td class=\"third-col-td\">{{row.empName}}</td>\r\n                                <!-- <td class=\"\">{{ row.gender }}</td> -->\r\n                                <td class=\"\">{{row.experience}}</td>\r\n                                <td class=\"\">{{row.empLevel}}</td>\r\n                                <ng-container *ngFor=\"let column of skillMatrixDetails.columns\">\r\n                                    <ng-container\r\n                                        *ngIf=\"column.field != 'empId' && column.field != 'empName' && column.field != 'gender' && column.field != 'experience' && column.field != 'empLevel'\">\r\n                                        <td class=\"text-center empSkillLevelTd\"\r\n                                            [ngClass]=\"(!isObjectEmpty(isChecked(row, column.field))) ? isChecked(row, column.field).status : ''\">\r\n                                            {{!isObjectEmpty(isChecked(row, column.field)) ? isChecked(row,\r\n                                            column.field).level : ''}}\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <td style=\"text-align: center;\" class=\"{{getSkillLevelClass(row.skillLevel)}}\">\r\n                                    {{row.skillLevel}}</td>\r\n                                <td style=\"text-align: center;\" class=\"\">{{row.skillingPer}}%</td>\r\n                                <td style=\"text-align: center;\" class=\"\">{{row.marks}}</td>\r\n                            </tr>\r\n                        </ng-container>\r\n                        <!-- <ng-container *ngFor=\"let row of skillMatrixDetails.workstationLvlCount;let recIndex = index;\"> -->\r\n                        <tr>\r\n                            <!-- Header for 'Actual No Trained' -->\r\n                            <td colspan=\"5\" style=\"text-align: center;\">Actual No Trained</td>\r\n\r\n                            <!-- Loop through workstationLvlCount -->\r\n                            <ng-container\r\n                                *ngFor=\"let lvlCount of skillMatrixDetails.workstationLvlCount; let recIndex = index;\">\r\n                                <!-- Loop through columns -->\r\n                                <ng-container *ngFor=\"let column of skillMatrixDetails.columns;\">\r\n                                    <!-- Check if workstation matches the column field -->\r\n                                    <td *ngIf=\"column.field === lvlCount.workstation\"\r\n                                        class=\"text-center empSkillLevelTd\">\r\n                                        <!-- Output workstation and total count -->\r\n                                        {{ lvlCount.totalCount }}\r\n                                    </td>\r\n                                </ng-container>\r\n                            </ng-container>\r\n\r\n                            <!-- Empty cells to match colspan -->\r\n                            <td colspan=\"3\"></td>\r\n                        </tr>\r\n                        <!-- </ng-container> -->\r\n                        <tr>\r\n                            <td style=\"padding-left: 15em;\" [attr.colspan]=\"skillMatrixDetails.columns.length + 3\">Team\r\n                                Leader Skill Level</td>\r\n                        </tr>\r\n                    \r\n                        <ng-container *ngFor=\"let row of filteredSkillMatrixTLData; let index = index;\">\r\n                            <tr>\r\n                                <td class=\"first-col-td\">{{ index + 1 }}</td>\r\n                                <td class=\"second-col-td\">{{ row.empId }}</td>\r\n                                <td class=\"third-col-td\">{{ row.empName }}</td>\r\n                                <td>{{ row.experience }}</td>\r\n                                <td>{{ row.empLevel }}</td>\r\n                                <ng-container *ngFor=\"let column of skillMatrixDetails.columns\">\r\n                                    <ng-container\r\n                                        *ngIf=\"column.field !== 'empId' && column.field !== 'empName' &&\r\n                                                column.field !== 'gender' && column.field !== 'experience' &&\r\n                                                column.field !== 'empLevel'\">\r\n                                        <td class=\"text-center empSkillLevelTd\"\r\n                                            [ngClass]=\"(!isObjectEmpty(isChecked(row, column.field))) ? isChecked(row, column.field).status : ''\">\r\n                                            {{ !isObjectEmpty(isChecked(row, column.field)) ? isChecked(row, column.field).level : '' }}\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <td style=\"text-align: center;\" class=\"{{ getSkillLevelClass(row.skillLevel) }}\">\r\n                                    {{ row.skillLevel }}\r\n                                </td>\r\n                                <td style=\"text-align: center;\">{{ row.skillingPer }}%</td>\r\n                                <td style=\"text-align: center;\">{{ row.marks }}</td>\r\n                            </tr>\r\n                        </ng-container>\r\n                        \r\n                    </tbody>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isObjectEmpty(skillMatrixDetails)\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoader\">\r\n                                Data Not Found\r\n                            </td>\r\n                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoader\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </ng-container>\r\n                <tr *ngIf=\"(filteredEmpData == null || filteredEmpData.length == 0)\">\r\n                    <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                        Data Not Found\r\n                    </td>\r\n                  \r\n                </tr>\r\n\r\n                \r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"pr\">\r\n        <ul class=\"count-block\">\r\n            <ng-container *ngFor=\"let count of skillMatrixDetails.levelSummary\">\r\n                <li class=\"countLi\" *ngIf=\"count.levelName != 'L4'\">\r\n                    <div class=\"headerBlock\">\r\n                        <label class=\"heading\">{{count.levelName}}</label>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\">REQD.</label><br />\r\n                            <p class=\"m-0 count\">{{count.requiredCount || '0'}}</p>\r\n                        </div>\r\n                        <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\">ACT.</label><br />\r\n                            <p class=\"m-0 count\">{{count.actualCount || '0'}}</p>\r\n                        </div>\r\n                        <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\">GAP</label><br />\r\n                            <p class=\"m-0 count\">{{((count.requiredCount && count.requiredCount > 0) &&\r\n                                (count.requiredCount\r\n                                > count.actualCount)) ? (count.requiredCount -\r\n                                count.actualCount) : 0 || '0'}}</p>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ng-container>\r\n\r\n            <ng-container >\r\n                <li class=\"countLi\">\r\n                    <div class=\"headerBlock\">\r\n                        <label class=\"heading\">Average Multiskilling %</label>\r\n                    </div>\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\"> </label><br />\r\n                            <p class=\"m-0 count\">{{multiskillingPercentage}} %</p>\r\n                        </div>\r\n                        <!-- <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\">ACT.</label><br />\r\n                            <p class=\"m-0 count\">D3</p>\r\n                        </div>\r\n                        <div class=\"col-4 text-center m-auto p-l-5 p-r-5\">\r\n                            <label class=\"heading\">GAP</label><br />\r\n                           \r\n                        </div> -->\r\n                    </div>\r\n                </li>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Filter Modal -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4> <button type=\"button\" class=\"close\"\r\n            aria-label=\"Close\" (click)=\"d('Cross click')\"> <span aria-hidden=\"true\">&times;</span> </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\"> <perfect-scrollbar>\r\n                <div class=\"row m-b-0\"> <label for=\"moduleId\" class=\"col-sm-12 col-form-label filter-label\">Plant <span\r\n                            class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" [data]=\"branchAccessList\"\r\n                            formControlName=\"branchId\" (onSelect)=\"onChangeBranch($event)\"\r\n                            (onDeSelect)=\"onChangeBranch(false)\" [(ngModel)]=\"searchDet.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"dept\" class=\"col-sm-12 col-form-label filter-label\">Department <!--<span class=\"astrik\"\r\n                            *ngIf=\"deptList != null && deptList.length > 0\">*</span>--></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"dept\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\" [data]=\"deptList\"\r\n                            formControlName=\"deptId\" [(ngModel)]=\"searchDet.dept\" (onSelect)=\"onChangeDept($event)\"\r\n                            (onDeSelect)=\"onChangeDept(false)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"filterData.controls['deptId'].invalid && (filterData.controls['deptId'].touched || filterData.controls['deptId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['deptId'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"cell\" class=\"col-sm-12 col-form-label filter-label\">Cell / Line <!--<span class=\"astrik\"\r\n                            *ngIf=\"cellList != null && cellList.length > 0\">*</span>--></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cell\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                            [placeholder]=\"'Select Cell / Line'\" [settings]=\"SingleDropdownSettings\" [data]=\"cellList\"\r\n                            formControlName=\"lineIds\" [(ngModel)]=\"searchDet.cell\" (onSelect)=\"onChangeCell($event)\"\r\n                            (onDeSelect)=\"onChangeCell(false)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"filterData.controls['lineIds'].invalid && (filterData.controls['lineIds'].touched || filterData.controls['lineIds'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['lineIds'].errors.required\">\r\n                                Please select cell/line\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\"> <span *ngIf=\"submitSpinner\"\r\n                    class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span> </button>\r\n            <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ }),

/***/ "t+f2":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/skill-matrix/certificates/certificates.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CertificatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificatesComponent", function() { return CertificatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certificates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certificates.component.html */ "aDYC");
/* harmony import */ var _certificates_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificates.component.scss */ "D3/z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skilling.service */ "Sh6i");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








let CertificatesComponent = class CertificatesComponent {
    constructor(modalConfig, modalService, alertService, fb, apiService) {
        this.modalConfig = modalConfig;
        this.modalService = modalService;
        this.alertService = alertService;
        this.fb = fb;
        this.apiService = apiService;
        this.submitAttempted = false;
        this.searchDet = {};
        this.userDet = {};
        this.submitSpinner = false;
        this.plantList = [];
        this.listLoading = false;
        this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
        };
        this.filterFlag = false;
        modalConfig.backdrop = 'static';
        modalConfig.keyboard = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
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
        this.getAccessiblePlantList();
        this.getMasterCertificateList();
    }
    ;
    /*
        Common function for set an array for dropdown
        Author: Saurabh salunke
      Date : 25 Aug 2023
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
        Get Accessible Plant List
        Author: Saurabh salunke
        Date : 25 Aug 2023
     */
    getAccessiblePlantList() {
        this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((res) => {
            console.log(res);
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.plantList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    this.plantList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.plantList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            // this.searchDet.branch = [this.plantList[0]];
            this.searchDet.branchId = this.plantList[0].branchId;
            this.getbranchId = this.plantList[0].id;
            console.log(this.getbranchId);
            // this.getDepartmentList(this.getbranchId)
        });
    }
    /*
  Get Department List
  Author: Saurabh salunke
  Date : 25 Aug 2023
  */
    getDepartmentList(branchId) {
        console.log(branchId);
        this.apiService.getDepartmentByBranch('getdepartmentlistbybranchid/' + branchId).subscribe((res) => {
            if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                    this.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    this.searchDet.departmentList = this.setArray(res.deptList, 'deptId', 'deptName');
                    // this.searchDet.deptIds = this.searchDet.departmentList;
                    if (this.certificateList == null || this.certificateList.length == 0) {
                        // this.getMasterCertificateList();
                    }
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
    /*
      Modal function to Open Filter function
      Author: Saurabh salunke
      Date : 25 Aug 2023
  */
    filterModalOpen(modal) {
        this.resetFormField(this.filterData, 'branchId');
        this.resetFormField(this.filterData, 'deptIds');
        this.searchDet.branch = [];
        this.searchDet.deptIds = [];
        this.modalService.open(modal, { windowClass: 'filterPopup' }).result.then((result) => {
            console.log(`Closed with: ${result}`);
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            console.log(`Closed with:` + reason);
            if (reason == 'Cross click') {
                this.submitAttempted = false;
                //   this.searchDet.filterFlag = false;
                //   this.searchDet.filterPopupOpen = false;
                //   this.getMasterCertificateList();
            }
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    /*
         Single Select Dropdown onChange function
          Author: Saurabh salunke
          Date : 25 Aug 2023
      */
    onChange(ev, type) {
        if (ev) {
            if (type == 'plant') {
                this.searchDet.branchId = ev.id;
                console.log(ev);
                this.searchDet.deptIds = [];
                this.getDepartmentList(this.searchDet.branchId);
            }
        }
        else {
            if (type == 'plant') {
                this.searchDet.departmentList = [];
                this.resetFormField(this.filterData, 'deptIds');
            }
        }
    }
    /*
       Multi Select Dropdown onChange function
       Author: Saurabh salunke
    Date : 25 Aug 2023
   */
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
    }
    /*
       Filter function for plant and cell
       Author: Saurabh salunke
       Date : 25 Aug 2023
     */
    submitFilterForm(form) {
        this.submitAttempted = true;
        console.log(form);
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            if (form.controls.branchId.invalid) {
                return;
            }
        }
        this.clearPagination();
        this.searchDet.filterFlag = true;
        this.getMasterCertificateList();
        this.modalService.dismissAll();
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
    /*
        Removes Filter of plant and cell
        Author: Saurabh salunke
         Date : 25 Aug 2023
      */
    removeFilter() {
        this.submitAttempted = false;
        this.filterData.reset();
        this.searchDet.branch = [];
        this.searchDet.deptIds = [];
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.certificateList = [];
        this.getDepartmentList(this.plantList[0].id);
    }
    /* Get Master Certificate List
     Author: Saurabh salunke
     Date : 25 Aug 2023
  */
    getMasterCertificateList() {
        this.listLoading = true;
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        var req = {
            "orgId": this.userDet.organization.orgId,
            "offset": this.staticPagination.offset,
            "limit": this.staticPagination.itemsPerPage,
        };
        if (this.searchDet.branch != null && this.searchDet.branch.length > 0) {
            for (let i = 0; i < this.searchDet.branch.length; i++) {
                req.branchId = this.searchDet.branch[0].id;
            }
        }
        else {
            req.branchId = this.userDet.branch.branchId;
        }
        if (this.getIDsArray(this.searchDet.deptIds) != null && this.getIDsArray(this.searchDet.deptIds).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.searchDet.deptIds).length; i++) {
                req.deptIds = this.getIDsArray(this.searchDet.deptIds);
            }
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            req.search = this.searchDet.searchInput;
        }
        this.apiService.getCertificateList('apis/sm/getCertificateList', req).subscribe((res) => {
            this.listLoading = false;
            console.log(res);
            if (res.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = res.totalCount;
                    this.staticPagination.totalPages = Math.ceil(res.totalCount / this.staticPagination.itemsPerPage);
                }
                if (res.dataList != null && res.dataList.length > 0) {
                    this.certificateList = res.dataList;
                    console.log(this.certificateList);
                    this.staticPagination.listLength = res.dataList.length;
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
        });
    }
    /* Function to view Selected Certificate
     Author: Saurabh salunke
    Date : 25 Aug 2023
  */
    previewCertificate(data, previewCertModal) {
        console.log(data, previewCertModal);
        this.selectedRecForModal = data;
        this.modalService.open(previewCertModal, {
            windowClass: 'bottom'
        });
    }
    /*
        This function resets Form
         Author: Saurabh salunke
        Date : 25 Aug 2023
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
     @DESC : Load More Pagination next page Data
     Author: Saurabh salunke
       Date : 1 sept 2023
   */
    loadMore(data) {
        this.certificateList = [];
        this.listLoading = true;
        this.staticPagination = data;
        this.certificateList = [];
        if (this.filterFlag) {
            this.getMasterCertificateList();
        }
        else {
            this.getMasterCertificateList();
        }
    }
    /*
     @DESC : Sort table
     Author: Saurabh salunke
       Date : 1 sept 2023
   */
    sortData(sort) {
        this.sorting = sort;
        this.getMasterCertificateList();
    }
    /*
  Common function For get Ids from array
  @Author Saurabh salunke
  * @Date sept 1, 2023
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
   * @Date August 31, 2023*/
    getSearchList(ev) {
        console.log(ev);
        // this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = "";
        }
        if (this.filterFlag) {
            this.getMasterCertificateList();
        }
        else {
            this.getMasterCertificateList();
        }
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "plant" || fieldToSort === "cell" || fieldToSort === "dept") {
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
CertificatesComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"] }
];
CertificatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certificates',
        template: _raw_loader_certificates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificates_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _skilling_service__WEBPACK_IMPORTED_MODULE_6__["SkillingService"]])
], CertificatesComponent);



/***/ }),

/***/ "uyTz":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/workforce-deployment/add-view-workforce/add-view-workforce.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n    <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\">\r\n        {{selectedDet.title}} Workforce Deployment\r\n    </h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross Click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"row m-0 formInputField\">\r\n    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n        <label for=\"moduleId\" class=\"col-form-label p-0\">Plant&nbsp;<span class=\"astrik\">*</span></label>\r\n        <div class=\"\">\r\n            <ng-multiselect-dropdown name=\"branch\"\r\n                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" [data]=\"branchAccessList\"\r\n                (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\" [(ngModel)]=\"searchDet.branch\"\r\n                [disabled]=\"selectedDet.title == 'View'\">\r\n            </ng-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n        <label for=\"dept\" class=\"col-form-label p-0\">Department&nbsp;<span class=\"astrik\">*</span></label>\r\n        <div class=\"\">\r\n            <ng-multiselect-dropdown name=\"dept\"\r\n                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\" [data]=\"deptList\"\r\n                [(ngModel)]=\"searchDet.dept\" (onSelect)=\"onChangeDept($event)\" (onDeSelect)=\"onChangeDept(false)\"\r\n                [disabled]=\"selectedDet.title == 'View'\">\r\n            </ng-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n        <label for=\"cell\" class=\"col-form-label p-0\">Cell / Line&nbsp;<span class=\"astrik\">*</span></label>\r\n        <div class=\"\">\r\n            <ng-multiselect-dropdown name=\"cell\"\r\n                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                [placeholder]=\"'Select Cell / Line'\" [settings]=\"SingleDropdownSettings\" [data]=\"cellList\"\r\n                [(ngModel)]=\"searchDet.cell\" (onSelect)=\"onChangeCell($event)\" (onDeSelect)=\"onChangeCell(false)\"\r\n                [disabled]=\"selectedDet.title == 'View'\">\r\n            </ng-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 insideLabel p-l-5 p-r-5\">\r\n        <label for=\"shift\" class=\"col-form-label p-0\">Shift&nbsp;<span class=\"astrik\">*</span></label>\r\n        <div class=\"\">\r\n            <ng-multiselect-dropdown name=\"shift\"\r\n                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                [placeholder]=\"'Select Shift'\" [settings]=\"SingleDropdownSettings\" [data]=\"shiftList\"\r\n                [(ngModel)]=\"searchDet.shift\" (onSelect)=\"onChangeShift($event)\" (onDeSelect)=\"onChangeShift(false)\"\r\n                [disabled]=\"selectedDet.title == 'View'\">\r\n            </ng-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-4 p-l-5 p-r-5\">\r\n        <div class=\"row  m-0\">\r\n            <div class=\"col-6 insideLabel datePickerBlock p-l-5 p-r-5\">\r\n                <label for=\"fromDate\" class=\"col-form-label\">From\r\n                    Date&nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"custom-Input-Group\" (click)=\"fromDatePicker.open()\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                            <i class=\"feather icon-calendar\"></i>\r\n                        </div>\r\n                        <input matInput #input=\"ngModel\" [(ngModel)]=\"searchDet.fromDate\" [min]=\"minDate\"\r\n                            [matDatepicker]=\"fromDatePicker\" class=\"form-control datePickInput\" placeholder=\"From Date\"\r\n                            (keydown)=\"false\" (dateChange)=\"selectDate('from', $event)\" name=\"fromDate\"\r\n                            [disabled]=\"selectedDet.title == 'View'\">\r\n                        <mat-datepicker #fromDatePicker></mat-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-6 insideLabel datePickerBlock p-l-5 p-r-5\">\r\n                <label for=\"toDate\" class=\"col-form-label\">To\r\n                    Date&nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"custom-Input-Group\" (click)=\"toDatePicker.open()\">\r\n                    <div class=\"input-group-prepend\">\r\n                        <div class=\"input-group-text\">\r\n                            <i class=\"feather icon-calendar\"></i>\r\n                        </div>\r\n                        <input matInput #input=\"ngModel\" [(ngModel)]=\"searchDet.toDate\" [min]=\"searchDet.fromDate\" [matDatepicker]=\"toDatePicker\" class=\"form-control datePickInput\"\r\n                            placeholder=\"To Date\" (keydown)=\"false\" (dateChange)=\"selectDate('to', $event)\"\r\n                            name=\"toDate\" [disabled]=\"selectedDet.title == 'View'\">\r\n                        <mat-datepicker #toDatePicker></mat-datepicker>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal-body\" style=\"padding: 10px;\">\r\n    <perfect-scrollbar [style.height]=\"(selectedDet.title == 'Add') ? 'calc(100vh - 23vh)' : 'calc(100vh - 15vh)'\">\r\n        <div class=\"table-block skill-table\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table table-bordered\">\r\n                    <ng-container *ngIf=\"!isObjectEmpty(skillMatrixDetails)\">\r\n                        <thead>\r\n                            <tr>\r\n                                <ng-container *ngFor=\"let x of skillMatrixDetails.columns\">\r\n                                    <ng-container\r\n                                        *ngIf=\"(selectedDet.title == 'Add') ? (x.field != 'empId' && x.field != 'cmpyEmpId' && x.field != 'empName') : true\">\r\n                                        <th class=\"\" scope=\"col\">\r\n                                            {{x.heading}}<ng-container\r\n                                                *ngIf=\"x.hasOwnProperty('levelName') && x.levelName\">\r\n                                                ({{x.levelName}})\r\n                                            </ng-container>\r\n                                        </th>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngIf=\"!isObjectEmpty(skillMatrixDetails)\">\r\n                                <ng-container *ngFor=\"let row of skillMatrixDetails.columns\">\r\n                                    <ng-container\r\n                                        *ngIf=\"(selectedDet.title == 'Add') ? (row.field != 'empId' && row.field != 'cmpyEmpId' && row.field != 'empName') : true\">\r\n                                        <td class=\"p-0\">\r\n                                            <!-- <ng-container\r\n                                                *ngIf=\"selectedWorkForceData != null && selectedWorkForceData.length > 0\">\r\n                                                <ng-container *ngFor=\"let x of selectedWorkForceData\">\r\n                                                    <div class=\"checkbox-block form-check\" \r\n                                                        (click)=\"(selectedDet.title == 'View') ? '' : onChangeEmp(x, row,'remove')\"\r\n                                                        *ngIf=\"x.isSelected && row.id == x.workstationId\">\r\n                                                        <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                            [checked]=\"x.isSelected\"\r\n                                                            [id]=\"'checkbox' + x.empId + '_' + row.field\"\r\n                                                            [disabled]=\"selectedDet.title == 'View'\">\r\n                                                        <label\r\n                                                            [for]=\"'checkbox' + x.empId + '_' + row.field\">{{x.empName}}\r\n                                                            <ng-container\r\n                                                                *ngIf=\"!isObjectEmpty(isChecked(x, row.field))\">\r\n                                                                &nbsp;({{isChecked(x,row.field).level}})\r\n                                                            </ng-container>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </ng-container> -->\r\n                                            <ng-container\r\n                                                *ngIf=\"selectedWorkForceData != null && selectedWorkForceData.length > 0\">\r\n                                                <ng-container *ngFor=\"let x of selectedWorkForceData\">\r\n                                                    <div class=\"checkbox-block form-check\"\r\n                                                        (click)=\"(selectedDet.title == 'View') ? '' : onChangeEmp(x, row, 'remove')\"\r\n                                                        *ngIf=\"x.isSelected && row.id == x.workstationId\"\r\n                                                        [ngClass]=\"{'red-text': x.isEligible == false}\">\r\n                                                        <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                            [checked]=\"x.isSelected\"\r\n                                                            [id]=\"'checkbox' + x.empId + '_' + row.field\"\r\n                                                            [disabled]=\"selectedDet.title == 'View'\">\r\n                                                        <label\r\n                                                            [for]=\"'checkbox' + x.empId + '_' + row.field\">{{x.empName}}\r\n                                                            <ng-container\r\n                                                                *ngIf=\"!isObjectEmpty(isChecked(x, row.field))\">\r\n                                                                &nbsp;({{isChecked(x,row.field).level}})\r\n                                                            </ng-container>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                            <ng-container\r\n                                                *ngIf=\"skillMatrixDetails.tableData != null && skillMatrixDetails.tableData.length > 0\">\r\n                                                <ng-container *ngFor=\"let y of skillMatrixDetails.tableData\">\r\n                                                    <div class=\"checkbox-block form-check\" *ngIf=\"!y.isSelected\"\r\n                                                        (click)=\"onChangeEmp(y, row,'add')\">\r\n                                                        <input class=\"form-check-input\" type=\"checkbox\"\r\n                                                            [checked]=\"y.isSelected\"\r\n                                                            [id]=\"'checkbox' + y.empId + '_' + row.field\">\r\n                                                        <label\r\n                                                            [for]=\"'checkbox' + y.empId + '_' + row.field\">{{y.empName}}\r\n                                                            <ng-container\r\n                                                                *ngIf=\"!isObjectEmpty(isChecked(y, row.field))\">\r\n                                                                &nbsp;({{isChecked(y,row.field).level}})\r\n                                                            </ng-container>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </td>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </tr>\r\n                            <tr *ngIf=\"isObjectEmpty(skillMatrixDetails)\">\r\n                                <td colspan=\"12\" class=\"text-center no-record-found\" *ngIf=\"!listLoader\">\r\n                                    Data Not Found\r\n                                </td>\r\n                                <td colspan=\"12\" class=\"text-center loading-div\" *ngIf=\"listLoader\">\r\n                                    <app-loading></app-loading>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"isObjectEmpty(skillMatrixDetails)\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td colspan=\"6\" class=\"text-center no-record-found\" *ngIf=\"!listLoader\">\r\n                                    Data Not Found\r\n                                </td>\r\n                                <td colspan=\"6\" class=\"text-center loading-div\" *ngIf=\"listLoader\">\r\n                                    <app-loading></app-loading>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </ng-container>\r\n                </table>\r\n            </div>\r\n            <!-- <div class=\"footerBlock text-right\">\r\n                <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\"\r\n                    [disabled]=\"submitLoader && selectedDet.title == 'Add'\" (click)=\"close('Cross Click')\">Cancel\r\n                </button>\r\n            </div> -->\r\n        </div>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <button style=\"margin-right: 10px;\" type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\"\r\n                    [disabled]=\"submitLoader && selectedDet.title == 'Add'\" (click)=\"close('Cross Click')\">Cancel\r\n                </button>\r\n            <button type=\"button\" class=\"btn submitBtn event-btn\" (click)=\"(!submitLoader) ? saveWorkForce() : ''\"\r\n                *ngIf=\"selectedDet.title == 'Add'\">\r\n                <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitLoader\" class=\"btn-text\">Submit </span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "xgNC":
/*!*******************************************************************!*\
  !*** ./src/app/modules/skill-matrix/actions/actions.component.ts ***!
  \*******************************************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./actions.component.html */ "zIyW");
/* harmony import */ var _actions_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.component.scss */ "lw/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skilling_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skilling.service */ "Sh6i");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let ActionsComponent = class ActionsComponent {
    constructor(skillingService, modalService, fb) {
        this.skillingService = skillingService;
        this.modalService = modalService;
        this.fb = fb;
        this.filterFlag = false;
        this.searchDet = {};
        this.actionList = [];
        this.selectedBranch = {};
        this.branchAccessList = [];
        this.deptList = [];
        this.loggedInEmpDet = {};
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.listLoading = false;
        this.submitAttempted = false;
        this.plantList = [];
        this.masterDeptList = [];
        this.isAppliedFilter = false;
        this.masterLevelList = [];
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
        /* get skill mtrix action list
           Author : simran
           created date : 14/09/2023
         */
        this.getSkillMatrixOjtList = function () {
            if (this.staticPagination.page == 1) {
                this.staticPagination.offset = 0;
            }
            else {
                this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }
            let req = {
                'orgId': this.loggedInEmpDet.organization.orgId,
                'offset': this.staticPagination.offset,
                'limit': this.staticPagination.itemsPerPage
            };
            console.log(this.searchDet.branchId);
            if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
                req.branchId = this.searchDet.branchId[0].id;
            }
            else {
                req.branchId = this.loggedInEmpDet.branch.branchId;
            }
            if (this.searchDet.deptId != null && this.searchDet.deptId.length > 0) {
                req.deptId = this.searchDet.deptId[0].id;
            }
            if (this.searchDet.lineIds != null && this.searchDet.lineIds.length > 0) {
                req.lineIds = this.getIDsArray(this.searchDet.lineIds);
            }
            if (this.searchDet.fromDate != null) {
                req.fromDt = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchDet.fromDate).format("YYYY-MM-DD");
            }
            if (this.searchDet.toDate != null) {
                req.toDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchDet.toDate).format("YYYY-MM-DD");
            }
            if (this.searchDet.skillLvlId != null && this.searchDet.skillLvlId.length > 0) {
                req.skillLevelId = this.searchDet.skillLvlId[0].id;
            }
            if (this.searchDet.searchInput && this.searchDet.searchInput != '') {
                req.search = this.searchDet.searchInput;
            }
            if (this.sorting) {
                if (this.sorting.direction != "") {
                    req.colName = this.sorting.active;
                    req.orderType = this.sorting.direction.toUpperCase();
                }
            }
            this.skillingService.getSkillMatrixActionList('apis/sm/getSkillMatrixActionList', req).subscribe((response) => {
                if (response.result) {
                    if (this.staticPagination.page == 1) {
                        this.staticPagination.total = response.totalCount;
                        this.staticPagination.totalPages = Math.ceil(response.totalCount / this.staticPagination.itemsPerPage);
                    }
                    if (response.smActionList != null && response.smActionList.length > 0) {
                        this.actionList = response.smActionList;
                        console.log(this.actionList);
                        this.staticPagination.listLength = this.actionList.length;
                    }
                    else {
                        this.actionList = [];
                        this.staticPagination.listLength = this.actionList.length;
                    }
                }
                else {
                    this.actionList = [];
                    this.listLoading = false;
                    this.staticPagination.listLength = this.actionList.length;
                }
            });
            console.log(req);
        };
    }
    ngOnInit() {
        this.loggedInEmpDet = JSON.parse(localStorage.getItem('userDet'));
        this.filterFormData = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            lineIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](""),
            skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
        });
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
        // this.SingleDeptDropdownSettings = {
        //   singleSelection: true,
        //   idField: 'deptId',
        //   textField: 'deptName',
        //   allowSearchFilter: true,
        //   closeDropDownOnSelection: true,
        // };
        this.getBranchAccessList();
        this.getSkillMatrixOjtList();
        this.getMasterSkillLevelList();
    }
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
            this.getSkillMatrixOjtList();
        }
        else {
            this.getSkillMatrixOjtList();
        }
    }
    filterModalOpen(modal) {
        this.filterFlag = true;
        this.modalService.open(modal, {
            windowClass: 'filterPopup',
        });
    }
    /* gets Branch access list on employee
     @Author Jayshri Kolase
    * @Date August 24, 2023
   */
    getBranchAccessList() {
        this.skillingService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.loggedInEmpDet.organization.orgId + "/" + this.loggedInEmpDet.empId)
            .subscribe((res) => {
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
            // this.searchDet.branchId = [this.plantList[0]];
        });
    }
    /* Change branch selction
       @Author Jayshri Kolase
      * @Date August 24, 2023
    */
    // onChangeBranch(event: any) {
    //   this.selectedBranch.branchId = event.branchId;
    //   console.log(event);
    //   this.getDeptList()
    // }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 24, 2023
    */
    getDeptList(branch) {
        this.skillingService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branch.id).subscribe((response) => {
            if (response.result) {
                if (response.deptList != null && response.deptList.length > 0) {
                    this.masterDeptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    console.log(this.masterDeptList);
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
    /*
          Apply filter function
          Author: simran
          Date : 14/09/2023
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
        this.isAppliedFilter = true;
        this.searchDet.filterFlag = true;
        this.staticPagination.offset = 0;
        this.staticPagination.itemsPerPage = 10;
        this.modalService.dismissAll();
        this.getSkillMatrixOjtList();
    }
    removeFilter() {
        this.isAppliedFilter = false;
        this.filterFormData.reset();
        this.searchDet.branchId = [];
        this.searchDet.deptId = [];
        this.searchDet.lineIds = [];
        this.searchDet.fromDate = null;
        this.searchDet.toDate = null;
        this.searchDet.skillLvlId = [];
        this.getSkillMatrixOjtList();
    }
    /*
    Common function for set an array for dropdown
    Author: simran
    Date : 14/09/2023
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
      Single Select Dropdown onChange function
      Author: Simran
      Date : 14/09/2023
    */
    onChange(ev, type) {
        console.log(ev);
        // if (ev) {
        //   this.getDeptList(ev)
        // } else {
        //   console.log('Unselect plant');
        // }
        if (ev) {
            if (type == "plant") {
                this.getDeptList(ev);
                //this.getLineNameList(ev);
                this.searchDet.deptId = [];
                this.searchDet.lineIds = [];
            }
            else if (type == "dept") {
                this.getCellList(ev);
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
    /*
    Load More Pagination next page Data
    Author : Simran
    Date : 14/09/2023
    */
    loadMore(ev) {
        this.staticPagination = ev;
        this.actionList = [];
        this.listLoading = true;
        this.getSkillMatrixOjtList();
    }
    sortData(sort) {
        this.sorting = sort;
        this.getSkillMatrixOjtList();
    }
    /*
      DESC : Function to clear pagination
      Author: Simran
      Date : 14/09/2023
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
            if (fieldToSort === "dept" || fieldToSort === "plant") {
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
    // Date select  function
    // 30/10/2023
    // simran
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
    /*
       Get Master Level List
       Author: Simran
       Date : 30/10/2023
   */
    getMasterSkillLevelList() {
        this.skillingService.getMasterLevelList('apis/sm/getLevelList').subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    this.masterLevelList = this.setArray(res.dataList, 'id', 'levelName');
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
    getCellList(data) {
        var req = {
            branchId: this.searchDet.branchId[0].id,
            // deptId:this.searchDet.deptId
            deptId: data.id
        };
        this.skillingService.getCellList("apis/sm/getCellList", req).subscribe((response) => {
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
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
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
};
ActionsComponent.ctorParameters = () => [
    { type: _skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-actions',
        template: _raw_loader_actions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_actions_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skilling_service__WEBPACK_IMPORTED_MODULE_4__["SkillingService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], ActionsComponent);



/***/ }),

/***/ "zIyW":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/skill-matrix/actions/actions.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-11 m-auto\">\r\n        <app-topBar title=\"Actions\"></app-topBar>\r\n    </div>\r\n    <!-- <div class=\"col-3 m-auto\">\r\n        <app-loginInfo></app-loginInfo>\r\n    </div> -->\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div> -->\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : isAppliedFilter}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"isAppliedFilter\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"isAppliedFilter\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"p-l-0 p-r-5\" [ngClass]=\"(filterFlag)?'col-6':'col-12'\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" *ngIf=\"!searchDet.searchData\"\r\n                                (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input style=\"border-bottom: 1px solid #7044cd;\" type=\"text\" class=\"form-control\"\r\n                                name=\"searchInput\" placeholder=\"Search here..\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\" />\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                Applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-r-5 p-l-5 form-group\">\r\n\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <!-- <div class=\"addRegDiv\" style=\"bottom: -0.1rem;\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"modalOpen(workStation,'top')\"><i\r\n                            class=\"fa fa-plus m-r-10\"></i>Add\r\n                        Workstation</button>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th class=\"\" mat-sort-header=\"AssignedEmpId\"> Assigned Emp ID</th>\r\n                        <th class=\"\" mat-sort-header=\"AssignedEmpName\">Assigned Name</th>\r\n                        <th class=\"\" mat-sort-header=\"CmpyEmpId\">Emp ID</th>\r\n                        <th class=\"\" mat-sort-header=\"EmpName\">Emp Name</th>\r\n                        <th class=\"\" mat-sort-header=\"DeptName\">Department</th>\r\n                        <th class=\"\" mat-sort-header=\"Line\">Cell/Line</th>\r\n                        <th class=\"\" mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th class=\"\" mat-sort-header=\"LevelName\">Level</th>\r\n                        <th class=\"\" mat-sort-header=\"ActivityDate\">Assigned Date</th>\r\n                        <!-- <th class=\"\" mat-sort-header=\"ActivityDate\"> Activity Due Date</th> -->\r\n                        <th class=\"\" mat-sort-header=\"Activity\">Activity</th>\r\n                        <th class=\"pending fixedColumn\" mat-sort-header=\"status\">Status</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of actionList\">\r\n                        <td class=\"actionTd fixedColumn\">{{x.branchName}}</td>\r\n                        <td>{{x.assignedEmpId}}</td>\r\n                        <td>{{x.assignedEmpName}}</td>\r\n                        <td>{{x.cmpyEmpId}}</td>\r\n                        <td>{{x.oeEmpName}}</td>\r\n                        <td>{{x.deptName}}</td>\r\n                        <td>{{x.lineName}}</td>\r\n                        <td>{{x.workstation}}</td>\r\n                        <td>{{x.currentSkillLevel}}</td>\r\n                        <td>{{(x.activityDate) ? (x.activityDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <!-- <td>{{x.activityDueDate}}</td> -->\r\n                        <td>{{x.activity}}</td>\r\n                        <td class=\"actionTd fixedColumn\"\r\n                            [ngClass]=\"{'completed':x.status == 'COMPLETED','pending':x.status == 'PENDING'}\">\r\n                            {{x.status}}</td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(actionList == null || actionList.length == 0)\">\r\n                        <td colspan=\"8\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"8\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n</div>\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterFormData\" (ngSubmit)=\"submitFilterForm(filterFormData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branch\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                            [data]=\"getSortFunction(plantList,'plant')\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"searchDet.branchId\" (onSelect)=\"onChange($event,'plant')\"\r\n                            (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\" submitAttempted && filterFormData.controls['branch'].invalid && (filterFormData.controls['branch'].touched || filterFormData.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;z-index: 10;\">\r\n                            <div *ngIf=\"filterFormData.controls['branch'].errors.required\">\r\n                                Please Select Plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"dept\" id=\"dept\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            formControlName=\"dept\" [data]=\"getSortFunction(masterDeptList,'dept')\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"searchDet.deptId\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterFormData.controls['dept'].invalid && (filterFormData.controls['dept'].touched || filterFormData.controls['dept'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterFormData.controls['dept'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(cellList,'cell')\" formControlName=\"lineIds\"\r\n                            [(ngModel)]=\"searchDet.lineIds\" (onSelect)=\"onChange($event,'line')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['lineIds'].invalid && (filterData.controls['lineIds'].touched || filterData.controls['lineIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['lineIds'].errors.required\">\r\n                                Please select Cell/Line\r\n                            </div>\r\n                        </div> -->\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"skillLvlId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"skillLvlId\" id=\"skillLvlId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\" [data]=\"masterLevelList\"\r\n                            formControlName=\"skillLvlId\" [(ngModel)]=\"searchDet.skillLvlId\"\r\n                            (onSelect)=\"onChange($event,'skillLvlId')\" (onDeSelect)=\"onChange(false,'skillLvlId')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"submitAttempted && filterData.controls['skillLvlId'].invalid && (filterData.controls['skillLvlId'].touched || filterData.controls['skillLvlId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['skillLvlId'].errors.required\">\r\n                                Please select level\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">From Date</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"input-group m-0 custom-Input-Group\" (click)=\"startDatePicker.open()\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <i class=\"feather icon-calendar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <input matInput [(ngModel)]=\"searchDet.fromDate\" [max]=\"maxDate\"\r\n                                [matDatepicker]=\"startDatePicker\" class=\"form-control datePickInput\"\r\n                                placeholder=\"From Date\" (keydown)=\"false\" (dateChange)=\"selectCustomDate($event,'')\"\r\n                                formControlName=\"fromDate\" name=\"opt\">\r\n                            <mat-datepicker #startDatePicker></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">To Date</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"input-group m-0 custom-Input-Group\" (click)=\"toDatePicker.open()\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <div class=\"input-group-text\">\r\n                                    <i class=\"feather icon-calendar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <input matInput [(ngModel)]=\"searchDet.toDate\" [min]=\"searchDet.fromDate\" [max]=\"maxDate\"\r\n                                [matDatepicker]=\"toDatePicker\" class=\"form-control datePickInput\" placeholder=\"To Date\"\r\n                                (keydown)=\"false\" (dateChange)=\"selectCustomDate('', $event)\" formControlName=\"toDate\"\r\n                                name=\"opt\">\r\n                            <mat-datepicker #toDatePicker></mat-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ })

}]);
//# sourceMappingURL=modules-skill-matrix-skill-matrix-module-es2015.js.map