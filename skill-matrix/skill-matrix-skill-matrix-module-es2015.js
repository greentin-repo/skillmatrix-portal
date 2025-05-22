(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["skill-matrix-skill-matrix-module"],{

/***/ "35nH":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/stake-holder/stake-holder.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFrZS1ob2xkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "4sxW":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/certificate/certificate.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-9 m-auto\">\r\n        <app-topBar title=\"Certificate\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                                placeholder=\"Search by level or status\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                applied</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-r-5 p-l-5 form-group\">\r\n\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\" style=\"bottom: -0.1rem;\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"addCertificate(certificateAddModal)\"><i\r\n                            class=\"fa fa-plus m-r-10\"></i>Add Certificate</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th  mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"SkillLevelName\" class=\"fixedColumn\">Level</th>\r\n                        <!-- <th>Certificate Name</th> -->\r\n                        <th mat-sort-header=\"Status\">Status</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                   \r\n                    <tr *ngFor=\"let data of certificateList\">\r\n                        <td>{{data.branchName}}</td>\r\n                        <td>{{data.skillLevelName || 'NA'}}</td>\r\n                        <!-- <td>{{data.certificateName || 'NA'}}</td> -->\r\n                        <td>{{data.status || 'NA'}}</td>\r\n                        <td class=\"actionTd fixedColumn text-left\">\r\n                            <a class=\"btn btn-sm editIcon\" href=\"{{data.certificatePath}}\" download target=\"_blank\"\r\n                                *ngIf=\"data.certificatePath\"><i class=\"fa fa-download\"></i></a>&nbsp;\r\n                            <i class=\"fa fa-eye editIcon\" (click)=\"previewCertificate(data,certificateModalForSettings)\"\r\n                                *ngIf=\"data.certificatePath\"></i>\r\n                            &nbsp; &nbsp;\r\n                            <!-- <i class=\"fa fa-edit editIcon\" (click)=\"editCertificate(InterventionModal, inter)\"></i> -->\r\n                            <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"deleteCertificate(data)\"></i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(certificateList == null || certificateList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\">\r\n        </app-pagination>\r\n    </div>\r\n</div>\r\n<ng-template #certificateAddModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Add Certificate</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeCertificateModal()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body p-l-15 p-r-15\">\r\n        <form autocomplete=\"off\" class=\"needs-validation\" [formGroup]=\"formdata\"\r\n            (ngSubmit)=\"submitCertificate(formdata)\">\r\n            <div style=\"border-bottom: 1px solid lightgray;\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-3\">\r\n                        <label for=\"certificateTyapeId\" class=\"col-form-label\">Skill-Level</label> &nbsp;<span\r\n                            style=\"color: red;\">*</span>\r\n                        <ng-multiselect-dropdown class=\"custom-multiSelection customWidthForInter\"\r\n                            id=\"certificateTypeId\" [placeholder]=\"'Select skill level'\"\r\n                            [settings]=\"singleDropdownSettings\" [data]=\"LevelList\" formControlName=\"skillLevel\"\r\n                            name=\"skillLevel\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"formdata.controls['skillLevel'].invalid && (formdata.controls['skillLevel'].touched || formdata.controls['skillLevel'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"formdata.controls['skillLevel'].errors.required\">\r\n                                Please select skill-level\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-3\">\r\n                        <label for=\"branch\" class=\"col-form-label\">Plant</label> &nbsp;<span\r\n                            style=\"color: red;\">*</span>\r\n                        <ng-multiselect-dropdown class=\"custom-multiSelection customWidthForInter\"\r\n                             [placeholder]=\"'Select plant'\" formControlName=\"branch\" name=\"branch\"\r\n                            [settings]=\"singleDropdownSettings\" [data]=\"getSortFunction(branchAccessList,'dept')\"\r\n                            name=\"branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"formdata.controls['branch'].invalid && (formdata.controls['branch'].touched || formdata.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"formdata.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-4\">\r\n                        <label for=\"certificate\" class=\"col-form-label\">Certificate</label> &nbsp;<span\r\n                            style=\"color: red;\">*</span>\r\n                        <small style=\"color:red\">&nbsp;&nbsp;[Only jpg or Png]</small>\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" #certImage class=\"custom-file-input\"\r\n                                    (change)=\"handleFileInput($event.target.files)\" id=\"inputGroupFile04\"\r\n                                    formControlName=\"certificate\" accept=\"image/*\" required>\r\n                                <label class=\"custom-file-label\" *ngIf=\"!fileSelected\" for=\"inputGroupFile04\">Choose\r\n                                    file</label>\r\n                                <label class=\"custom-file-label\" *ngIf=\"fileSelected\" for=\"inputGroupFile04\"\r\n                                    style=\"color: green;\">File\r\n                                    selected</label>\r\n                            </div>\r\n                            <div *ngIf=\"certImage.files.length === 0 && formdata.controls['certificate'].dirty\"\r\n                                class=\"custom-errorMsg\">\r\n                                <!-- *ngIf=\"formdata.controls['certificate'].invalid && (formdata.controls['certificate'].touched || formdata.controls['certificate'].dirty)\" -->\r\n                                <div>\r\n                                    <!-- *ngIf=\"formdata.controls['certificate'].errors.required\" -->\r\n                                    Please choose file\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input-group-append\" *ngIf=\"fileSelected\">\r\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" [disabled]=\"isUploadSpinner\"\r\n                                    (click)=\"resetFile(certImage)\"><i class=\"fa fa-times\"></i></button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-2 text-right p-t-35 p-b-10\">\r\n                        <button type=\"submit\" class=\"btn submitBtn\" [disabled]=\"isUploadSpinner\">\r\n                            <span *ngIf=\"isUploadSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                            <span *ngIf=\"isUploadSpinner\" class=\"load-text\"> Loading...</span>\r\n                            <span *ngIf=\"!isUploadSpinner\" class=\"btn-text\">Upload</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</ng-template>\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeEmpPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"filterList(filterData)\" autocomplete=\"off\" class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            formControlName=\"branchId\" [data]=\"branchAccessList\" [disabled]=\"false\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select option'\" [settings]=\"multipleDropdownSettings\" [data]=\"deptList\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n\r\n<ng-template #certificateModalForSettings let-c=\"close\">\r\n    <app-viewCertificate [close]=\"c\" [selectedDet]=\"selectedRecForModal\"></app-viewCertificate>\r\n</ng-template>\r\n<!-- <ng-template #previewCertModal let-c1=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content previewCert\" >\r\n            <div class=\"modal-header previewHeader\">\r\n                <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Preview Certificate</h4>\r\n            </div>\r\n            <div class=\"modal-body p-0 text-center\">\r\n                <perfect-scrollbar [style.height]=\"'calc(100vh - 25vh)'\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"certImgDiv\">\r\n                                <span style=\"display: inline-block;width: calc(100% - 46%);position: relative;\"\r\n                                    id=\"certDiv\">\r\n                                    <img src=\"{{selectedCert.certificatePath}}\" alt=\"\" class=\"certImg\" />\r\n\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n                <div class=\"row text-center p-2\">\r\n                    <div class=\"col\">\r\n                        <a class=\"btn Downloadbtn submitBtn\" href=\"{{selectedCert.certificatePath}}\" download\r\n                            target=\"_blank\">Download</a>\r\n                        &nbsp;&nbsp;\r\n                        <button type=\"button\" class=\"btn cancelBtn\" (click)=\"c1('Cross click')\">\r\n                            Cancel\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template> -->");

/***/ }),

/***/ "8PCo":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/stake-holder/stake-holder.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"User Role\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\">\r\n                <div class=\"row m-0\">\r\n                    <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\"> -->\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                            (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search by User ID or User Name\"\r\n                                [(ngModel)]=\"searchDet.searchInput\" autocomplete=\"off\" \r\n                            (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\"></div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" title=\"Add User Role\"\r\n                        (click)=\"addStakeholder(addStakeholderModal)\"><i class=\"fa fa-plus m-r-10\"></i>Add\r\n                        User Role</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn \" mat-sort-header=\"BranchName\">Plant</th>    \r\n                        <th mat-sort-header=\"UserType\">Role</th>                   \r\n                        <th mat-sort-header=\"EmpId\">User ID</th>\r\n                        <th mat-sort-header=\"EmpName\">User Name</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"Line\">Cell/Line</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of stakeholderList\">\r\n                        <td class=\"fixedColumn\">{{x.branchName || '-'}}</td>  \r\n                        <td>{{x.userType || '-'}}</td>                     \r\n                        <td>{{x.companyEmpId || '-'}}</td>\r\n                        <td>{{x.empName || '-'}}</td>\r\n                        <td>{{x.deptName || '-'}}</td>\r\n                        <td>{{x.lineName || '-'}}</td>\r\n                        <td class=\"actionTd size text-left\">\r\n                            <!-- <i class=\"fa fa-edit\" style=\"color:#7044CD;cursor: pointer;\"\r\n                                (click)=\"updateStakeholder(addStakeholderModal, x)\"></i> &nbsp; &nbsp; -->\r\n                            <i class=\"fas fa-trash-alt\" style=\"color: #f95371;cursor: pointer;\"\r\n                                (click)=\"deleteStakeholder(x)\"></i>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"stakeholderList == null || stakeholderList.length == 0\">\r\n                        <td colspan=\"6\" class=\"text-center no-record-found\" *ngIf=\"!masterLoader\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"6\" class=\"text-center loading-div\" *ngIf=\"masterLoader\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n\r\n<!-- Top Modal -->  \r\n<ng-template #addStakeholderModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\" *ngIf=\"isEditing\" >Update User Role</h4>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\" *ngIf=\"!isEditing\">Add User Role</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"stakeholderForm\" (ngSubmit)=\"submitStakeholderForm(stakeholderForm)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-0\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"branchId\" class=\"col-sm-4 col-form-label\">Plant &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"branchId\" class=\"custom-multiSelection customWidthForInter\"\r\n                        placeholder=\"Please Select Plant\" [settings]=\"SingleDropdownSettings\" [data]=\"getSortFunction(plantList,'plant')\"\r\n                        formControlName=\"branchId\" (onSelect)=\"onChange($event,'plant')\" [disabled]=\"isEditing && stakeholderForm.get('branchId').value\"\r\n                        (onDeSelect)=\"onChange(false,'plant')\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"stakeholderForm.controls['branchId'].invalid && (stakeholderForm.controls['branchId'].touched || stakeholderForm.controls['branchId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"stakeholderForm.controls['branchId'].errors.required\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"deptId\" class=\"col-sm-4 col-form-label\">Department &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"deptId\" class=\"custom-multiSelection customWidthForInter\"\r\n                        placeholder=\"Please Select Department\" [settings]=\"SingleDropdownSettings\" [data]=\"getSortFunction(departmentList,'dept')\"\r\n                        formControlName=\"deptId\" (onSelect)=\"onChange($event,'dept')\"  [disabled]=\"isEditing && stakeholderForm.get('deptId').value\" (onDeSelect)=\"onChange(false,'dept')\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"stakeholderForm.controls['deptId'].invalid && (stakeholderForm.controls['deptId'].touched || stakeholderForm.controls['deptId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"stakeholderForm.controls['deptId'].errors.required\">\r\n                            Please select department\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"deptId\" class=\"col-sm-4 col-form-label\">Cell/Line &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"deptId\" class=\"custom-multiSelection customWidthForInter\" \r\n                        placeholder=\"Please Select Cell/Line\" [settings]=\"SingleDropdownSettings\" [data]=\"getSortFunction(cellList,'cell')\"\r\n                        formControlName=\"lineId\"  [disabled]=\"isEditing && stakeholderForm.get('lineId').value\" [(ngModal)]=\"cellList\" >\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"stakeholderForm.controls['lineId'].invalid && (stakeholderForm.controls['lineId'].touched || stakeholderForm.controls['lineId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"stakeholderForm.controls['lineId'].errors.required\">\r\n                            Please select cell/line\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"userTypeId\" class=\"col-sm-4 col-form-label\">Role &nbsp;<span\r\n                        class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"userTypeId\" class=\"custom-multiSelection customWidthForInter\"\r\n                        placeholder=\"Please Select Role\" [settings]=\"SingleDropdownSettings\"\r\n                        [data]=\"getSortFunction(masterUserTypes,'userType')\" formControlName=\"userTypeId\" >\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"stakeholderForm.controls['userTypeId'].invalid && (stakeholderForm.controls['userTypeId'].touched || stakeholderForm.controls['userTypeId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"stakeholderForm.controls['userTypeId'].errors.required\">\r\n                            Please select role\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"empId\" class=\"col-sm-4 col-form-label\">User &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"empId\" class=\"custom-multiSelection customWidthForInter\"\r\n                        placeholder=\"Please Select User\" [settings]=\"SingleDropdownSettings\"  [data]=\"getSortFunction(employeeList,'emp')\"\r\n                        formControlName=\"empId\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"stakeholderForm.controls['empId'].invalid && (stakeholderForm.controls['empId'].touched || stakeholderForm.controls['empId'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"stakeholderForm.controls['empId'].errors.required\">\r\n                            Please select user\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"formSubmitLoader\">\r\n                <span *ngIf=\"formSubmitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"formSubmitLoader\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!formSubmitLoader\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Top Modal -->\r\n\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branchId\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\" id=\"branchId\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.plantList,'plant')\" formControlName=\"branchId\" [(ngModel)]=\"searchDet.branchId\"\r\n                            (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted  && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.departmentList,'dept')\" formControlName=\"deptIds\" [(ngModel)]=\"searchDet.deptIds\"\r\n                            (onSelect)=\"onChange($event,'dept')\" (onDeSelect)=\"onChange(false,'dept')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'dept')\" (onDeSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select cell\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"deptIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"deptIds\" id=\"deptIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"getSortFunction(searchDet.cellList,'cell')\" formControlName=\"lineId\" [(ngModel)]=\"searchDet.lineId\"\r\n                          >\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['lineId'].invalid && (filterData.controls['lineId'].touched || filterData.controls['lineId'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterData.controls['lineId'].errors.required\">\r\n                                Please select cell/line\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"row m-b-0\">\r\n                    <label for=\"userTypeIds\" class=\"col-sm-12 col-form-label filter-label p-b-0\">User Type</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"userTypeIds\" id=\"userTypeIds\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select User Type'\" [settings]=\"multipleDropdownSettings\"\r\n                            [data]=\"searchDet.masterUserTypes\" formControlName=\"userTypeIds\"\r\n                            [(ngModel)]=\"searchDet.userTypeIds\" (onSelect)=\"onChange($event,'userType')\"\r\n                            (onDeSelect)=\"onChange(false,'userType')\" (onSelectAll)=\"onChangeAll($event,'userType')\"\r\n                            (onDeSelectAll)=\"onChangeAll($event,'userType')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted && filterData.controls['userTypeIds'].invalid && (filterData.controls['userTypeIds'].touched || filterData.controls['userTypeIds'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['userTypeIds'].errors.required\">\r\n                                Please select user type\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<!-- Filter Popup  -->");

/***/ }),

/***/ "8x61":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/certificate/certificate.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-group-append .fa {\n  position: relative;\n  top: 0.1em;\n}\n\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n\n.customInputField {\n  margin-left: 15px;\n  padding-top: 5px;\n  width: 100%;\n  box-sizing: border-box;\n  border: none;\n  box-shadow: none;\n}\n\n.tableFixHead table {\n  position: relative;\n}\n\n.tableFixHead table th.actionTh,\n.tableFixHead table td.actionTd {\n  width: 100px;\n}\n\n.tableFixHead table tbody td {\n  vertical-align: middle;\n}\n\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n\n.modal-header .popup-header-txt {\n  letter-spacing: 0px;\n  color: #7044cd;\n  font: normal normal 500 18px/1.5 Helvetica Neue;\n  text-align: left;\n  width: 100%;\n}\n\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n\n.modal-content.previewCert.previewHeader {\n  border: none !important;\n}\n\n.modal-body .errroMsg {\n  position: absolute;\n  top: 100%;\n}\n\n.previewCert {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: transparent !important;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  outline: 0;\n}\n\n.previewCert .previewHeader {\n  border-bottom: none !important;\n}\n\n.previewCert .previewHeader .popup-header-txt {\n  text-align: center !important;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNlcnRpZmljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBQVI7O0FBSUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKOztBQU1JO0VBQ0ksa0JBQUE7QUFIUjs7QUFLUTs7RUFFSSxZQUFBO0FBSFo7O0FBTVE7RUFDSSxzQkFBQTtBQUpaOztBQVNBO0VBQ0ksMkNBQUE7QUFOSjs7QUFRSTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTlI7O0FBU0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVBSOztBQVNRO0VBQ0ksNkNBQUE7QUFQWjs7QUFhQTtFQUNJLHVCQUFBO0FBVko7O0FBYUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFWUjs7QUFvQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWpDSjs7QUFtQ0k7RUFDSSw4QkFBQTtBQWpDUjs7QUFtQ1E7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFqQ1oiLCJmaWxlIjoiY2VydGlmaWNhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZ3JvdXAtYXBwZW5kIHtcclxuICAgIC5mYSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMC4xZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20tZXJyb3JNc2cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxufVxyXG5cclxuLmN1c3RvbUlucHV0RmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgdGguYWN0aW9uVGgsXHJcbiAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ym9keSB0ZCB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWVmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnBvcHVwLWhlYWRlci10eHQge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMThweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgMzAwIDI1cHgvMSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQucHJldmlld0NlcnQucHJldmlld0hlYWRlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubW9kYWwtYm9keXtcclxuICAgIC5lcnJyb01zZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi8vIC5tb2RhbC1kaWFsb2cge1xyXG4vLyAgICAgLnByZXZpZXdDZXJ0IC5tb2RhbC1jb250ZW50IHtcclxuLy8gICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4vLyAgICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICovXHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuLy8gICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgICAgIG91dGxpbmU6IDA7XHJcblxyXG4vLyAgICAgICAgIC5wcmV2aWV3SGVhZGVyIHtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4vLyAgICAgICAgICAgICAucG9wdXAtaGVhZGVyLXR4dCB7XHJcbi8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4ucHJldmlld0NlcnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG5cclxuICAgIC5wcmV2aWV3SGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5wb3B1cC1oZWFkZXItdHh0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "CYrx":
/*!***********************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/skill-matrix.service.ts ***!
  \***********************************************************************/
/*! exports provided: SkillMatrixService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixService", function() { return SkillMatrixService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/auth/http.service */ "bnLG");



let SkillMatrixService = class SkillMatrixService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    // ---------------  OJT Checksheet API's by @Jayshri Kolase ---------------------
    // get branch access list 
    getBranchAccessList(url) {
        return this.httpService.getMethod(url);
    }
    // Save checksheet details
    saveChecksheetDetails(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // update checksheet details
    updateChecksheet(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get checksheet List
    getChecksheetList(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    // get checksheet Details
    getChecksheetDetails(url) {
        return this.httpService.getMethod(url);
    }
    // delete Checksheet
    deleteChecksheet(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    // save checksheet points
    saveChecksheetPoint(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get Checksheet Point List
    getChecksheetPointList(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // delete Checksheet Point
    deleteChecksheetPoint(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get Parameter Type List
    getParameterTypeList(url) {
        return this.httpService.getMethod(url);
    }
    // save Checksheet Parameter
    saveChecksheetParameter(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    // update Checksheet Parameter
    updateChecksheetParameter(url, reqData) {
        return this.httpService.postMethod(url, reqData);
    }
    // ---------------- Workstation API's by @Jayshri Kolase-----------------------
    // get department list by branch id
    getdepartmentlistbybranchid(url) {
        return this.httpService.getMethod(url);
    }
    //save or update workstation
    saveWorkstation(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // deactivate workstation
    deleteWorkstationDetails(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get workstation list
    getWorkstationList(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get Line list
    getLineList(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // ------------- Certificate by @Jayshri Kolase------------------
    // get certificate list
    getLevelList(url) {
        return this.httpService.getMethod(url);
    }
    // save or add new certificate
    addNewCertificate(url, formData) {
        return this.httpService.formDataRequest(url, formData);
    }
    // get master certificate list
    getCertificateList(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    //Delete master Certificate 
    deleteCertificate(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // ---------------- Satge & Workflow by @Jayshri Kolase -----------------
    // get satge List
    getStageList(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // get workflow config list
    getWorkflowConfigList(url) {
        return this.httpService.getMethod(url);
    }
    // save workflow
    saveWorkflowSetup(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // delete workflow config
    deleteWorkflowConfig(url, reqbody) {
        return this.httpService.postMethod(url, reqbody);
    }
    // <---- Reference API's by Sanket B. --------> 
    // Get Master Certificate Level list
    getMasterCertificateData(url) {
        return this.httpService.getMethod(url);
    }
    // Model list API
    getModelListData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    saveReferenceModel(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    updateModalDetails(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    deleteModelDetails(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // Gap Reason list API
    getGapReasonListData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    saveReferenceGapReason(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    updateGapDetails(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    removeRefGapReason(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // Shift No list API
    getShiftNoData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    saveReferenceShiftNo(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    updateShiftDetails(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    deleteShiftDetails(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    /*************  STACKHOLDER SCREEN API By Mahesh W ***************/
    /* Get Master Usertypes */
    getMasterUserType(url) {
        return this.httpService.getMethod(url);
    }
    /* Get Department List by BranchId */
    getDepartmentByBranch(url) {
        return this.httpService.getMethod(url);
    }
    /* Get Employee List */
    getEmployeeList(url) {
        return this.httpService.getMethod(url);
    }
    /* Get Stakeholder List */
    getStakeholderList(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    /* Save Stakeholder */
    saveStakeholderData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    /* Delete Stakeholder */
    deleteStakeholderData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // save number of days
    saveAssessmentNoDays(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // remove number of days
    removeNoOfDays(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // get cell/line list
    getCellList(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    //-------------STAGE LABEL----------
    getStageLevelList(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    /* Save Stage */
    updateStageData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    /* Delete Stage */
    deleteStageData(url, reqBody) {
        return this.httpService.postMethod(url, reqBody);
    }
    // workstation list simran
    getWorkforceDeploymentData(url, data) {
        return this.httpService.postMethod(url, data);
    }
    //-------------master setup----------
    // document number 
    //  Aniket :- Call All API for document List 
    getDocumentList(url, data) {
        return this.httpService.postMethod(url, data);
    }
    updateDocumentNumber(url, data) {
        return this.httpService.postMethod(url, data);
    }
    saveDocument(url, data) {
        return this.httpService.postMethod(url, data);
    }
    deleteDocument(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // save copy checksheet
    saveCopyChecksheet(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // Create New Workstation Mapping
    saveWorkstationMapping(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // Get Workstation Mapping List
    getWorkstationMappingList(url) {
        return this.httpService.getMethod(url);
    }
    // Delete Workstation Mapping
    deleteWorkstationMapping(url, data) {
        return this.httpService.postMethod(url, data);
    }
    // Update Workstation Mapping
    updateWorkstationMapping(url, data) {
        return this.httpService.postMethod(url, data);
    }
};
SkillMatrixService.ctorParameters = () => [
    { type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
];
SkillMatrixService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
], SkillMatrixService);



/***/ }),

/***/ "Ecce":
/*!************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/certificate/certificate.component.ts ***!
  \************************************************************************************/
/*! exports provided: CertificateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateComponent", function() { return CertificateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_certificate_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./certificate.component.html */ "4sxW");
/* harmony import */ var _certificate_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificate.component.scss */ "8x61");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skill-matrix.service */ "CYrx");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let CertificateComponent = class CertificateComponent {
    constructor(modalService, skillMatrixService, alertService, fb) {
        this.modalService = modalService;
        this.skillMatrixService = skillMatrixService;
        this.alertService = alertService;
        this.fb = fb;
        this.filterFlag = false;
        this.selectedDet = {};
        this.searchDet = {};
        this.isUploadSpinner = false;
        this.fileSelected = false;
        this.clickedLoadMore = false;
        this.LevelList = [];
        this.certificateList = [];
        this.isUpload = false;
        this.newCertificateData = {};
        this.selectedCert = {};
        this.dataSpinner = [];
        this.userDet = {};
        this.listLoading = false;
        this.paginationLoading = false;
        this.plantSelected = false;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 0
        };
        this.skillLevelSelected = false;
        this.isFileSelected = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        this.getLevelList();
        this.getMasterCertificateList();
        this.singleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.formdata = this.fb.group({
            skillLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            branch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            certificate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.getBranchAccessList();
    }
    /* get skill level list
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    getLevelList() {
        this.skillMatrixService.getLevelList('apis/sm/getLevelList').subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.LevelList = this.setArray(response.dataList, 'id', 'levelName');
                }
                else {
                    this.LevelList = [];
                }
            }
        });
    }
    /* Get Master Certificate List
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    getMasterCertificateList() {
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
            'limit': this.staticPagination.itemsPerPage
        };
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
        this.skillMatrixService.getCertificateList('apis/sm/getMasterCertificateList', req).subscribe((response) => {
            this.listLoading = false;
            console.log(response);
            if (response.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(response.totalCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.certificateList = response.dataList;
                    this.staticPagination.listLength = this.certificateList.length;
                }
                else {
                    this.certificateList = [];
                    this.staticPagination.listLength = this.certificateList.length;
                }
            }
        }, (error) => {
            this.certificateList = [];
            this.listLoading = false;
        });
    }
    /* Preview Selected Certificate
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    previewCertificate(data, certificateModalForSettings) {
        this.selectedRecForModal = data;
        this.modalService.open(certificateModalForSettings, {
            windowClass: 'bottom'
        });
    }
    /* open filter modal popup
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    filterModalOpen(FilterModal) {
        console.log("In filter");
        if (!this.filterFlag) {
            // this.filterData.reset();
        }
        // this.getInterventions();
        this.modalService.open(FilterModal, {
            windowClass: 'filterPopup',
        });
    }
    /* reset selected file or remove selected file
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    resetFile(ev) {
        ev.value = "";
        this.newCertificateData.imgURL = undefined;
        this.isUpload = false;
        this.fileSelected = false;
    }
    /* read or store selected file from localstorage
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    handleFileInput(files) {
        if (files.length === 0) {
            // File is not selected, show error
            this.isFileSelected = true;
            return;
        }
        if (files.length === 0)
            return;
        const file = files[0];
        if (!file.type.includes('image/jpeg') && !file.type.includes('image/png')) {
            // Display an error message for unsupported file types
            this.isFileSelected = true;
            this.alertService.error('Only JPG or PNG files is allowed.');
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.newCertificateData.imgURL = reader.result;
        };
        this.uploadDataList = files.item(0);
        this.fileSelected = true;
    }
    /* show add new certificate modal popup
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    addCertificate(modal) {
        this.uploadDataList = undefined;
        this.fileSelected = false;
        this.isUploadSpinner = false;
        this.formdata.reset();
        this.modalService.open(modal, {
            windowClass: 'right',
        });
    }
    /* save certificate
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    submitCertificate(form) {
        console.log(form);
        this.isUploadSpinner = true;
        const formData = new FormData();
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
                this.isUploadSpinner = false;
            });
            return;
        }
        formData.append('branchId', form.value.branch[0].id);
        formData.append('skillLevelId', form.value.skillLevel[0].id);
        formData.append('certificatePath', this.uploadDataList);
        this.skillMatrixService.addNewCertificate('apis/sm/saveMasterCertificate', formData).subscribe((res) => {
            this.isUploadSpinner = false;
            if (res.result) {
                this.alertService.success("Certificate uploaded successfully");
                this.modalService.dismissAll();
                this.newCertificateData.skillLvl = [];
                this.getMasterCertificateList();
            }
            else {
                if (res.statusCode == 100) {
                    this.alertService.error(res.reason);
                }
                else {
                    this.alertService.error('Error occurred while uploading file. Please try again');
                }
            }
        });
    }
    /* save certificate
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    deleteCertificate(data) {
        console.log(data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are You Sure!',
            text: 'Do you want to remove this certificate ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7044cd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove It',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            this.dataSpinner[data] = true;
            if (result.isConfirmed) {
                let reqbody = {
                    "certificateId": data.certificateId,
                    "updatedBy": this.userDet.empId
                };
                this.skillMatrixService.deleteCertificate('apis/sm/deleteMasterCertificate', reqbody).subscribe((data) => {
                    this.dataSpinner[data.certificateId] = false;
                    if (data.result) {
                        this.alertService.success("Certificate removed successfully");
                        this.getMasterCertificateList();
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error('Error occurred while removing data. Please try again');
                        }
                    }
                });
            }
            else {
                this.dataSpinner[data.certificateId] = false;
            }
        });
    }
    /* Common function For Searching
  @Author Saurabh salunke
  * @Date August 31, 2023*/
    getSearchList(ev) {
        // this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (this.filterFlag) {
            this.getMasterCertificateList();
        }
        else {
            this.getMasterCertificateList();
        }
    }
    modalOpen(modal, data) {
    }
    /* Sorts certificate list
      @Author Saurabh salunke
     * @Date August 29, 2023
   */
    sortData(sort) {
        this.sorting = sort;
        this.getMasterCertificateList();
    }
    /*
    pagination for certificate list
     @Author Saurabh salunke
    *@Date August 29, 2023
   */
    loadMore(ev) {
        this.staticPagination = ev;
        this.certificateList = [];
        this.listLoading = true;
        this.getMasterCertificateList();
    }
    /*
    to clear data from filter
     @Author Saurabh salunke
    *@Date August 29, 2023
   */
    closeCertificateModal() {
        this.formdata.reset();
        this.newCertificateData.skillLvl = [];
        this.formdata.get('skillLevel').markAsUntouched();
        this.formdata.get('branch').markAsUntouched();
        this.formdata.get('certificate').markAsUntouched();
        this.modalService.dismissAll();
    }
    /*
   to get branchList
    @Author Saurabh salunke
   *@Date oct 1, 2023
  */
    getBranchAccessList() {
        this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId)
            .subscribe((res) => {
            console.log(res);
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
        });
    }
    /*
      Common function for set an array for dropdown
      @Author Saurabh salunke
  *@Date oct 1, 2023
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
};
CertificateComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CertificateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-certificate',
        template: _raw_loader_certificate_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_certificate_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], CertificateComponent);



/***/ }),

/***/ "Evmk":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/work-station/work-station.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".homepage-block .tableFixHead {\n  overflow-y: auto;\n  max-height: calc(100vh - 30vh);\n  min-height: calc(100vh - 30vh);\n  height: calc(100vh - 30vh);\n  border-bottom: 2px solid #7044cd;\n}\n.homepage-block .table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.homepage-block .extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  font: normal normal 700 12px/1.5 Helvetica Neue !important;\n  left: 1rem !important;\n  color: #7044cd !important;\n  margin: -2px 0 !important;\n}\n.homepage-block .tableFixHead table .fixedColumn {\n  position: sticky;\n  top: 0px;\n  /* left: 0px; */\n  z-index: 999;\n  border-left: none;\n  border-right: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 13px/1.5 Helvetica Neue;\n  letter-spacing: 0;\n  color: #707070;\n}\ninput[type=text] {\n  outline: none;\n  outline-style: none;\n  border: none;\n  font-weight: 400;\n}\n@media (max-width: 1024px) {\n  .modal-body .form-group {\n    border-bottom: 1px solid lightgray;\n    padding: 7px 20px;\n    margin: 0px;\n  }\n}\n@media (max-width: 1440px) {\n  .modal-body .form-group {\n    border-bottom: 1px solid lightgray;\n    padding: 7px 20px;\n    margin: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHdvcmstc3RhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFBUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBRlI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBEQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpSO0FBU0E7RUFDSSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBTko7QUFTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0E7RUFDSTtJQUNJLGtDQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBTk47QUFDRjtBQVFBO0VBQ0k7SUFDSSxrQ0FBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQU5OO0FBQ0YiLCJmaWxlIjoid29yay1zdGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVwYWdlLWJsb2NrIHtcclxuICAgIC50YWJsZUZpeEhlYWQge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMwdmgpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMHZoKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMHZoKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzcwNDRjZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgfVxyXG5cclxuICAgIC5leHRyYUNvbnRlbnQgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNzAwIDEycHgvMS41IEhlbHZldGljYSBOZXVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAtMnB4IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGVGaXhIZWFkIHRhYmxlIC5maXhlZENvbHVtbiB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAvKiBsZWZ0OiAwcHg7ICovXHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTNweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLm1vZGFsLWJvZHkgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm1vZGFsLWJvZHkgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Fpl6":
/*!******************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/skill-matrix-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: SkillMatrixRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixRoutingModule", function() { return SkillMatrixRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _skill_matrix_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-matrix.component */ "wng/");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./certificate/certificate.component */ "Ecce");
/* harmony import */ var _stake_holder_stake_holder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stake-holder/stake-holder.component */ "wR7w");
/* harmony import */ var _work_station_work_station_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-station/work-station.component */ "mgRB");
/* harmony import */ var _stage_and_workflow_stage_and_workflow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stage-and-workflow/stage-and-workflow.component */ "k6R7");








const routes = [
    {
        path: '',
        component: _skill_matrix_component__WEBPACK_IMPORTED_MODULE_3__["SkillMatrixComponent"]
    },
    {
        path: 'configuration',
        loadChildren: () => __webpack_require__.e(/*! import() | configuration-configuration-module */ "configuration-configuration-module").then(__webpack_require__.bind(null, /*! ./configuration/configuration.module */ "ds71")).then(m => m.ConfigurationModule)
    },
    {
        path: 'workflow',
        component: _stage_and_workflow_stage_and_workflow_component__WEBPACK_IMPORTED_MODULE_7__["StageAndWorkflowComponent"]
    },
    {
        path: 'workstation',
        component: _work_station_work_station_component__WEBPACK_IMPORTED_MODULE_6__["WorkStationComponent"]
    },
    {
        path: 'stakeholder',
        component: _stake_holder_stake_holder_component__WEBPACK_IMPORTED_MODULE_5__["StakeHolderComponent"]
    },
    {
        path: 'reference',
        // component: ReferenceComponent
        loadChildren: () => __webpack_require__.e(/*! import() | reference-reference-module */ "reference-reference-module").then(__webpack_require__.bind(null, /*! ./reference/reference.module */ "0JGa")).then(m => m.ReferenceModule)
    },
    {
        path: 'assessment',
        loadChildren: () => __webpack_require__.e(/*! import() | assessment-assessment-module */ "assessment-assessment-module").then(__webpack_require__.bind(null, /*! ./assessment/assessment.module */ "Agah")).then(m => m.AssessmentModule)
    },
    {
        path: 'ojtchecksheet',
        loadChildren: () => __webpack_require__.e(/*! import() | ojt-check-sheet-ojt-check-sheet-module */ "ojt-check-sheet-ojt-check-sheet-module").then(__webpack_require__.bind(null, /*! ./ojt-check-sheet/ojt-check-sheet.module */ "6xNQ")).then(m => m.OjtCheckSheetModule)
    },
    {
        path: 'certificates',
        component: _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_4__["CertificateComponent"]
    },
    {
        path: 'workflow',
        component: _stage_and_workflow_stage_and_workflow_component__WEBPACK_IMPORTED_MODULE_7__["StageAndWorkflowComponent"]
    },
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

/***/ "P1gt":
/*!**********************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/skill-matrix.module.ts ***!
  \**********************************************************************/
/*! exports provided: SkillMatrixModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixModule", function() { return SkillMatrixModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _skill_matrix_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-matrix-routing.module */ "Fpl6");
/* harmony import */ var _skill_matrix_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-matrix.component */ "wng/");
/* harmony import */ var _work_station_work_station_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-station/work-station.component */ "mgRB");
/* harmony import */ var _stake_holder_stake_holder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stake-holder/stake-holder.component */ "wR7w");
/* harmony import */ var _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./certificate/certificate.component */ "Ecce");
/* harmony import */ var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/shared/shared.module */ "ebz3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _stage_and_workflow_stage_and_workflow_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stage-and-workflow/stage-and-workflow.component */ "k6R7");
/* harmony import */ var src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pipe/custom-pipe.module */ "QrAV");













let SkillMatrixModule = class SkillMatrixModule {
};
SkillMatrixModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_skill_matrix_component__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixComponent"], _stake_holder_stake_holder_component__WEBPACK_IMPORTED_MODULE_6__["StakeHolderComponent"], _certificate_certificate_component__WEBPACK_IMPORTED_MODULE_7__["CertificateComponent"], _work_station_work_station_component__WEBPACK_IMPORTED_MODULE_5__["WorkStationComponent"], _stage_and_workflow_stage_and_workflow_component__WEBPACK_IMPORTED_MODULE_11__["StageAndWorkflowComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _skill_matrix_routing_module__WEBPACK_IMPORTED_MODULE_3__["SkillMatrixRoutingModule"],
            src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_12__["CustomPipeModule"],
        ]
    })
], SkillMatrixModule);



/***/ }),

/***/ "gBl0":
/*!***************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/skill-matrix.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbC1tYXRyaXguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "gYpE":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/work-station/work-station.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0\">\r\n    <!-- <div class=\"col-8 m-auto\">\r\n        <app-topBar title=\"Workstation\"></app-topBar>\r\n    </div> -->     \r\n    <div class=\"col-8 p-r-5 p-l-15\" style=\"padding-top: 10px; padding-bottom: 10px;\">                \r\n        <div class=\"performanceBg\">\r\n            <div class=\"main-tab-switcher\">\r\n                <div class=\"main-tab-switch\" [ngClass]=\"{'mainActiveSwitch': selectedTab === 'workStation'}\"\r\n                    (click)=\"selectTab('workStation')\">\r\n                Workstation\r\n                </div>\r\n                <div class=\"main-tab-switch\"\r\n                [ngClass]=\"{'mainActiveSwitch': selectedTab === 'workStationMapping'}\" (click)=\"selectTab('workStationMapping')\">\r\n                Workstation Mapping\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <div class=\"col-1 p-0 m-auto text-center\" [style.visibility]=\"isVisible ? 'visible' : 'hidden'\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.filterFlag}\" title=\"Filter\"\r\n                (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.filterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.filterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"p-l-0 p-r-5 col-4\" [style.visibility]=\"isVisible ? 'visible' : 'hidden'\">\r\n                <div class=\"row m-0\">\r\n                    <!-- <div class=\"p-l-0 p-r-5\" [ngClass]=\"(searchDet.filterFlag)?'col-6':'col-12'\"> -->\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group has-search\">\r\n                            <span *ngIf=\"!searchDet.searchData\" class=\"fa fa-search form-control-feedback\"\r\n                                (click)=\"getSearchList(true)\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input style=\"border-bottom: 1px solid #7044cd;overflow-y: auto; white-space: pre-wrap;\"\r\n                                type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                                placeholder=\"Search by workstation and line\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"  (ngModelChange)=\"searchDet.searchInput = searchDet.searchInput.trim()\"/>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"searchDet.filterFlag\">\r\n                        <div class=\"filterDiv\">\r\n                            <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                            &nbsp;\r\n                            <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                applied</span>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-r-5 p-l-5 form-group\"></div>\r\n            <div class=\"col-4 p-0\" *ngIf=\"selectedTab === 'workStation'\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"modalOpen(workStation,'top')\"><i\r\n                            class=\"fa fa-plus m-r-10\"></i>Add Workstation</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-12 p-0\" *ngIf=\"selectedTab === 'workStationMapping'\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"modalOpen(workstationMappingTemplate,'top')\"><i\r\n                            class=\"fa fa-plus m-r-10\"></i>Add Mapping</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"table-block\" *ngIf=\"selectedTab === 'workStation'\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Department</th>\r\n                        <th mat-sort-header=\"Line\">Cell/Line</th>\r\n                        <th mat-sort-header=\"Workstation\">Workstation</th>\r\n                        <th mat-sort-header=\"MachineIndex\">Machine Index</th>\r\n                        <th mat-sort-header=\"MachineCount\">Machine Count</th>\r\n                        <th mat-sort-header=\"LevelName\">Required Skill Level</th>\r\n                        <th mat-sort-header=\"RequiredWorkforce\">Required Workforce</th>\r\n                        <!-- <th>Tolerance(%)</th> -->\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of workstationData\">\r\n                        <td class=\"actionTh fixedColumn\">{{data.branchName || 'NA'}}</td>\r\n                        <td>{{data.deptName}}</td>\r\n                        <td>{{data.lineName}}</td>\r\n                        <td>{{data.workstation}}</td>\r\n                        <td>{{data.machineIndex}}</td>\r\n                        <td>{{data.machineCount}}</td>\r\n                        <td>{{data.levelName}}</td>\r\n                        <td>{{data.requiredWorkforce}}</td>\r\n                        <!-- <td></td> -->\r\n                        <td class=\"actionTd fixedColumn text-left\">\r\n                            <i class=\"fa fa-edit editIcon\" (click)=\"updateWorkstationForm(workStation, data)\"></i>\r\n                            &nbsp; &nbsp;\r\n                            <i class=\"fas fa-trash-alt deleteIcon\"\r\n                                (click)=\"deactivateWorkstationDetails(data)\"></i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(workstationData == null || workstationData.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n    <div class=\"table-block\" *ngIf=\"selectedTab === 'workStationMapping'\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\" mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"DeptName\">Master Workstation</th>\r\n                        <th mat-sort-header=\"Line\">Linked Workstation</th>\r\n                        <!-- <th>Tolerance(%)</th> -->\r\n                        <th class=\"actionTh fixedColumn\" width=\"90px\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let data of mappingStationData\">\r\n                        <td class=\"actionTh fixedColumn\">{{data.branchName || 'NA'}}</td>\r\n                        <td>{{data.parentWorkstationName}}</td>\r\n                        <td>\r\n                            <span *ngFor=\"let child of data.childWorkstations; let last = last\">\r\n                                {{child.childWorkstationName}}{{!last ? ', ' : ''}}\r\n                            </span>\r\n                        </td>\r\n                        <td class=\"actionTd fixedColumn\">\r\n                            <i class=\"fa fa-edit editIcon\" (click)=\"updateWorkstationMappingForm(workstationMappingTemplate, data)\"></i>\r\n                            &nbsp; &nbsp;\r\n                            <i class=\"fas fa-trash-alt deleteIcon\"\r\n                                (click)=\"onDeleteWorkstationMapping(data)\"></i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(mappingStationData == null || mappingStationData.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n<!-- Top Modal -->\r\n<ng-template #workStation let-c=\"close\" let-d=\"dismiss\">\r\n\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTital}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"addOrUpdateWorkstation(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                        [data]=\"getSortFunction(branchAccessList,'plant')\" (onSelect)=\"onChange($event,'Plant')\"\r\n                        (onDeSelect)=\"onChange(false,'Plant')\" [disabled]=\"isEditing && formdata.get('branch').value\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"formdata.controls['branch'].invalid && (formdata.controls['branch'].touched || formdata.controls['branch'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['branch'].errors.required\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"dept\" class=\"col-sm-4 col-form-label\">Department &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"dept\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\" formControlName=\"dept\"\r\n                        [data]=\"getSortFunction(deparmentList,'dept')\"\r\n                        [disabled]=\"isEditing && formdata.get('dept').value\" (onSelect)=\"onChange($event,'dept')\"\r\n                        (onDeSelect)=\"onChange(false,'dept')\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"formdata.controls['dept'].invalid && (formdata.controls['dept'].touched || formdata.controls['dept'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['dept'].errors.required\">\r\n                            Please select department\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"cell\" class=\"col-sm-4 col-form-label\">Cell/Line &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"cell\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Cell/Line'\" [settings]=\"SingleDropdownSettings\" formControlName=\"cell\"\r\n                        [data]=\"getSortFunction(cellLevelList,'cell')\"\r\n                        [disabled]=\"isEditing && formdata.get('cell').value\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"isSubmit && formdata.controls['cell'].invalid && (formdata.controls['cell'].touched || formdata.controls['cell'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['cell'].errors.required\">\r\n                            Please select cell/line\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"workstation\" class=\"col-sm-4 col-form-label\">Workstation &nbsp;<span\r\n                        class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input style=\"padding: 6px 12px;\" id=\"workstation\" name=\"workstation\" type=\"text\"\r\n                        placeholder=\"Enter Workstation\" formControlName=\"workstation\">\r\n                    <div *ngIf=\"formdata.controls['workstation'].invalid && (formdata.controls['workstation'].touched || formdata.controls['workstation'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['workstation'].errors.required\">\r\n                            Enter workstation\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"machineIndex\" class=\"col-sm-4 col-form-label\">Machine Index &nbsp;<span\r\n                        class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <input style=\"padding: 6px 12px;\" type=\"text\" placeholder=\"Enter Machine Index\" id=\"machineIndex\"\r\n                        name=\"machineIndex\" formControlName=\"machineIndex\">\r\n                    <div *ngIf=\"formdata.controls['machineIndex'].invalid && (formdata.controls['machineIndex'].touched || formdata.controls['machineIndex'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['machineIndex'].errors.required\">\r\n                            Enter machine index\r\n                        </div>\r\n                        <div *ngIf=\"formdata.get('machineIndex').hasError('invalidInput')\">\r\n                            Invalid input. Please enter a valid number.\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"machineCount\" class=\"col-sm-4 col-form-label\">Machine Count &nbsp;<span\r\n                        class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                        <input style=\"padding: 6px 12px;\" type=\"text\" placeholder=\"Enter Machine Count\" id=\"machineCount\" \r\n                        name=\"machineCount\" formControlName=\"machineCount\"  maxlength=\"3\" />\r\n\r\n                    <div *ngIf=\"formdata.controls['machineCount'].invalid && (formdata.controls['machineCount'].touched || formdata.controls['machineCount'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['machineCount'].errors.required\">\r\n                            Enter machine count\r\n                        </div>\r\n                        <div *ngIf=\"formdata.get('machineCount').hasError('invalidInput')\">\r\n                            Invalid input. Please enter a valid number.\r\n                        </div>\r\n                        <div *ngIf=\"formdata.get('machineCount')?.errors?.lessThanOrEqualToZero\">\r\n                            Value must be greater than zero.\r\n                          </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"reqWorkforce\" class=\"col-sm-4 col-form-label \">Required Workforce<span\r\n                        class=\"astrik\">*</span></label>\r\n\r\n                <div class=\"col-sm-8\">\r\n                    <input style=\"padding: 6px 12px; width: 70%;\" id=\"reqWorkforce\" name=\"reqWorkforce\" type=\"text\"\r\n                        placeholder=\"Enter Required Workforce\" formControlName=\"reqWorkforce\" required>\r\n                    <div *ngIf=\"formdata.controls['reqWorkforce'].invalid && (formdata.controls['reqWorkforce'].touched || formdata.controls['reqWorkforce'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['reqWorkforce'].errors.required\">\r\n                            Enter required workforce\r\n                        </div>\r\n                        <div *ngIf=\"formdata.get('reqWorkforce').hasError('invalidInput')\">\r\n                            Invalid input. Please enter a valid number.\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;border-bottom:none;\">\r\n                <label for=\"reqSkillLvl\" class=\"col-sm-4 col-form-label label-with-asterisk\">Required Skill Level<span\r\n                        class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"reqSkillLvl\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Required Skill Level'\" [settings]=\"SingleDropdownSettings\"\r\n                        formControlName=\"reqSkillLvl\" id=\"reqSkillLvl\" [data]=\"skillLevelList\" [disabled]=\"false\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"formdata.controls['reqSkillLvl'].invalid && (formdata.controls['reqSkillLvl'].touched || formdata.controls['reqSkillLvl'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"formdata.controls['reqSkillLvl'].errors.required\">\r\n                            Please select required skill level\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- <div class=\"footerDiv\"></div> -->\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterFormData\" (ngSubmit)=\"submitFilterForm(filterFormData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"branch\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                            [data]=\"getSortFunction(branchAccessList,'plant')\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"selectedBranch.branch\" (onSelect)=\"onChange($event,'Plant')\"\r\n                            (onDeSelect)=\"onChange(false,'Plant')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted  && filterFormData.controls['branch'].invalid && (filterFormData.controls['branch'].touched || filterFormData.controls['branch'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterFormData.controls['branch'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Department</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"dept\" id=\"dept\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                            formControlName=\"dept\" [data]=\"getSortFunction(searchDet.deptList,'dept')\"\r\n                            [disabled]=\"false\" [(ngModel)]=\"selectedBranch.dept\" (onSelect)=\"onChange($event,'dept')\"\r\n                            (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted  && filterFormData.controls['dept'].invalid && (filterFormData.controls['dept'].touched || filterFormData.controls['dept'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterFormData.controls['dept'].errors.required\">\r\n                                Please select department\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"cell\" id=\"cell\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\"\r\n                            formControlName=\"cell\" [data]=\"getSortFunction(cellLevelList,'cell')\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"selectedBranch.cell\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"submitAttempted  && filterFormData.controls['cell'].invalid && (filterFormData.controls['cell'].touched || filterFormData.controls['cell'].dirty)\"\r\n                            class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            <div *ngIf=\"filterFormData.controls['cell'].errors.required\">\r\n                                Please select cell\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">Cancel\r\n            </button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>\r\n\r\n<ng-template #workstationMappingTemplate let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTital}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"workstationMappingForm\" (ngSubmit)=\"submitWorkstationMapping(workstationMappingForm)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\" formControlName=\"branch\"\r\n                        [data]=\"getSortFunction(branchAccessList,'plant')\" (onSelect)=\"onChangeMappingPlant($event)\"\r\n                        (onDeSelect)=\"onChangeMappingPlant(false)\" [disabled]=\"isEditing && workstationMappingForm.get('branch').value\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"workstationMappingForm.controls['branch']?.invalid && (workstationMappingForm.controls['branch'].touched || workstationMappingForm.controls['branch'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"workstationMappingForm.controls['branch'].errors?.required\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"masterWorkstation\" class=\"col-sm-4 col-form-label\">Master Workstation &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                    <ng-multiselect-dropdown name=\"masterWorkstation\" class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Master Workstation'\" [settings]=\"SingleDropdownSettings\" formControlName=\"masterWorkstation\"\r\n                        [data]=\"filteredWorkstationList\"\r\n                        [disabled]=\"isEditing && workstationMappingForm.get('masterWorkstation').value\" (onSelect)=\"onMasterWorkstationSelect($event)\"\r\n                        (onDeSelect)=\"onMasterWorkstationDeselect()\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div *ngIf=\"workstationMappingForm.controls['masterWorkstation']?.invalid && (workstationMappingForm.controls['masterWorkstation'].touched || workstationMappingForm.controls['masterWorkstation'].dirty)\"\r\n                        class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                        <div *ngIf=\"workstationMappingForm.controls['masterWorkstation'].errors?.required\">\r\n                            Please select master workstation\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\" style=\"padding-left: 15px;\">\r\n                <label for=\"mappingWorkstations\" class=\"col-sm-4 col-form-label\">Workstation For Mapping &nbsp;<span class=\"astrik\">*</span></label>\r\n                <div class=\"col-sm-8\">\r\n                  <ng-multiselect-dropdown name=\"mappingWorkstations\" class=\"custom-multiSelection customWidthForInter\"\r\n                    [placeholder]=\"'Select Workstations For Mapping'\" [settings]=\"multipleDropdownSettings\" formControlName=\"mappingWorkstations\"\r\n                    [data]=\"filteredWorkstationList\">\r\n                  </ng-multiselect-dropdown>\r\n                  <div *ngIf=\"workstationMappingForm.controls['mappingWorkstations']?.invalid && (workstationMappingForm.controls['mappingWorkstations'].touched || workstationMappingForm.controls['mappingWorkstations'].dirty)\"\r\n                    class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                    <div *ngIf=\"workstationMappingForm.controls['mappingWorkstations'].errors?.required\">\r\n                      Please select workstations for mapping\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n        </div> \r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>");

/***/ }),

/***/ "iJmx":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/stage-and-workflow/stage-and-workflow.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"col-12 execution\">\r\n                Workflow Approach\r\n            </div>\r\n            <div class=\"custom-toggle-btn\">\r\n            </div>\r\n            <div class=\"row m-0\" style=\"padding: 1rem 0em;\">\r\n                <div class=\"col-12 p-0 \">\r\n                    <span class=\"header-title\">Skill-Level</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"scrollableDiv\">\r\n                <div class=\"interventions\" *ngFor=\"let level of levelList\" (click)=\"selectLevel(level)\"\r\n                    [ngClass]=\"selectedLevelData.id == level.id ? 'active' : ''\">\r\n                    <p class=\"interventionName col-12\">{{level.levelName}}\r\n                    </p>\r\n                    <i class=\"fa fa-caret-right arrow-right\" *ngIf=\"selectedLevelData.id == level.id\"></i>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 interventionfeatures p-0\">\r\n            <app-loading *ngIf=\"listLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n            <div *ngIf=\"!listLoading\">\r\n                <div class=\"row intNames m-0\">\r\n                    <div class=\"col-6 name m-auto\">\r\n                        {{selectedLevelData.levelName}}\r\n                    </div>\r\n                    <div class=\"col-6 insideLabel\">\r\n                        <label for=\"moduleId\" class=\"col-form-label p-0\">Plant</label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"selectedModuleId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"branchAccessList\" (onSelect)=\"onChangeBranch($event)\"\r\n                                [(ngModel)]=\"selectedBranch.branch\">\r\n                            </ng-multiselect-dropdown>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"(workflowStageList == null || workflowStageList.length == 0)\">\r\n                    <div class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                        Data not found\r\n                    </div>\r\n                </div>\r\n                <perfect-scrollbar [style.height]=\"'calc(100vh - 13vh)'\">\r\n                    <div>\r\n                        <div class=\"row assessment\" *ngFor=\"let stage of workflowStageList\">\r\n                            <div class=\"col-7 assessmentname\" *ngIf=\"stage.stageCaption !== 'Stage7'\">\r\n                                {{ stage.stageLabelName ? stage.stageLabelName : stage.stageName }}\r\n                            </div>\r\n                            <div class=\"col-5 custom-toggle-btn m-auto\" *ngIf=\"stage.stageCaption !== 'Stage7'\">\r\n                                <span class=\"switcher switcher-1\">\r\n                                    <input type=\"checkbox\" [id]=\"'isActive_' + stage.id\" [name]=\"'isActive_' + stage.id\"\r\n                                        [attr.inter-label-true]=\"'YES'\" [attr.inter-label-false]=\"'NO'\" [attr.disabled]=\"stage.isDisabled ? true : null\"\r\n                                        [(ngModel)]=\"stage.isActive\" (click)=\"handleCheckboxClick(stage)\">\r\n                                    <label [for]=\"'isActive_' + stage.id\"></label>\r\n                                </span> \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </perfect-scrollbar>\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 pr\">\r\n            <div class=\"row m-0\">\r\n                <div class=\"col-12 m-auto p-0\">\r\n                    <!-- <app-loginInfo></app-loginInfo> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"FooterButton text-right\">\r\n                <button type=\"button\" class=\"btn submitBtn\" (click)=\"saveWorkFlow()\"\r\n                    [disabled]=\"submitLoader\">Submit</button> &nbsp;&nbsp;\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "k6R7":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/stage-and-workflow/stage-and-workflow.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: StageAndWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageAndWorkflowComponent", function() { return StageAndWorkflowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stage_and_workflow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stage-and-workflow.component.html */ "iJmx");
/* harmony import */ var _stage_and_workflow_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stage-and-workflow.component.scss */ "s0pu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../skill-matrix.service */ "CYrx");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");






let StageAndWorkflowComponent = class StageAndWorkflowComponent {
    constructor(skillMatrixService, alertService) {
        this.skillMatrixService = skillMatrixService;
        this.alertService = alertService;
        this.submitLoader = false;
        this.selectedLevelData = {};
        this.selectedBranch = {};
        this.levelList = [];
        this.listLoading = false;
        this.branchAccessList = [];
        this.stageList = [];
        this.userDet = {};
        this.stageDet = {};
        this.workflowStageList = [];
        this.workflowConfigList = [];
    }
    ngOnInit() {
        // this.selectedBranch.branch = [];
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.userDet);
        this.getBranchAccessList();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.getLevelList();
        // this.getWorkflowConfigList();
    }
    /* get skill level list
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getLevelList() {
        this.skillMatrixService.getLevelList('apis/sm/getLevelList').subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.levelList = response.dataList;
                    this.selectedLevelData.id = this.levelList[0].id;
                    console.log();
                    this.selectedLevelData.levelName = this.levelList[0].levelName;
                }
                else {
                    this.levelList = [];
                }
                this.getWorkflowConfigList();
            }
            else {
                this.levelList = [];
            }
        });
    }
    /* get stage list
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    // getStageList() {
    //   const data = {
    //     branchId: this.selectedBranch.branch[0].id
    //   }
    //   console.log(data);
    //   this.skillMatrixService.getStageList('apis/sm/getStageLabelList', data).subscribe((response: any) => {
    //     console.log(response);
    //     if (response.result) {
    //       if (response.dataList != null && response.dataList.length > 0) {
    //         this.stageList = response.dataList;
    //         if (this.stageList != null && this.stageList.length > 0) {
    //           for (let i = 0; i < this.stageList.length; i++) {
    //             if (this.stageList[i].stageCaption === 'Stage1DayWise' || this.stageList[i].stageCaption === 'Stage2DayWise' || this.stageList[i].stageCaption === 'Stage5') {
    //               this.stageList[i].isDisabled = true;
    //             } else {
    //               this.stageList[i].isDisabled = false;
    //             }
    //           }
    //         }
    //         this.getWorkflowConfigList();
    //       } else {
    //         this.stageList = []
    //       }
    //     } else {
    //       this.stageList = []
    //     }
    //   })
    // }
    /* get branch access list on organization and logged in employee
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getBranchAccessList() {
        this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe((response) => {
            console.log(response);
            if (response.result) {
                console.log(response);
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(response.branchAccessList, 'branchId', 'branchName');
                    this.branchAccessList = this.sortFunction(this.branchAccessList, 'name');
                    console.log(this.branchAccessList);
                    this.selectedBranch.branchId = [this.branchAccessList[0]];
                    /* Use For Filter */
                    // this.selectedBranch.branchId = this.setArray(response.branchAccessList, 'branchId', 'branchName');
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                    /* Use For Filter */
                    this.selectedBranch.branchId = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                /* Use For Filter */
                this.selectedBranch.branchId = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
            this.selectedBranch.branch = [this.branchAccessList[0]];
            this.selectedBranch.branched = this.selectedBranch.branchId[0];
            console.log(this.selectedBranch.branch);
            this.onChangeBranch(this.selectedBranch.branched);
        });
    }
    /* change branch on branch selection and call stage list and Workflow Config List
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    onChangeBranch(event) {
        console.log(event);
        if (event) {
            this.submitLoader = false;
            this.selectedBranch.branched = event;
            console.log(this.selectedBranch.branch);
            // this.getStageList();
            this.getWorkflowConfigList();
        }
        else {
            this.submitLoader = true;
            this.workflowStageList = [];
        }
    }
    /* get workflow config list on branch selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getWorkflowConfigList() {
        this.listLoading = true;
        if (this.selectedBranch.branched.id && this.selectedLevelData.id) {
            this.workflowConfigList = [];
            this.skillMatrixService.getWorkflowConfigList('apis/sm/getWorkflowConfigList/' + this.selectedBranch.branched.id + '/' + this.selectedLevelData.id).subscribe((response) => {
                console.log(response);
                this.listLoading = false;
                if (response.result) {
                    console.log(response);
                    this.workflowStageList = response.dataList;
                    if (this.workflowStageList != null && this.workflowStageList.length > 0) {
                        for (let i = 0; i < this.workflowStageList.length; i++) {
                            if (this.workflowStageList[i].stageCaption === 'Stage1DayWise' || this.workflowStageList[i].stageCaption === 'Stage2DayWise' || this.workflowStageList[i].stageCaption === 'Stage5' || this.workflowStageList[i].stageCaption === 'Stage4') {
                                this.workflowStageList[i].isDisabled = true;
                                this.workflowStageList[i].isActive = true;
                            }
                            else {
                                this.workflowStageList[i].isDisabled = false;
                            }
                        }
                    }
                    // Create a mapping of workflow stages by stageId
                    const workflowMapping = {};
                    this.workflowStageList.forEach(workflowStage => {
                        workflowMapping[workflowStage.stageId] = workflowStage;
                    });
                    // Update the stageList with data from workflowStageList
                    this.workflowStageList.forEach(stage => {
                        const workflowStage = workflowMapping[stage.stageId];
                        if (workflowStage) {
                            stage.isActive = workflowStage.isActive;
                            stage.skillLevelId = this.selectedLevelData.id;
                            stage.branchName = this.selectedBranch.branch[0].branchName;
                            stage.levelName = this.selectedLevelData.levelName;
                            stage.workflowId = workflowStage.id;
                        }
                    });
                    if (this.workflowStageList != null && this.workflowStageList.length > 0) {
                        for (let i = 0; i < this.workflowStageList.length; i++) {
                            this.handleCheckboxClick(this.workflowStageList[0]);
                        }
                    }
                    // Print the updated stageList
                    // this.stageList.forEach(stage => {
                    //   console.log(stage);
                    // });
                    console.log(this.workflowStageList);
                }
                else {
                    this.workflowStageList = [];
                }
            }, (error) => {
                this.listLoading = false;
                this.workflowStageList = [];
            });
        }
    }
    /* change selected skill level on level selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    selectLevel(rec) {
        console.log(rec);
        this.selectedLevelData = rec;
        // this.getStageList();
        this.selectedLevelData.reviewType = true;
        this.getWorkflowConfigList();
    }
    /* save and delete the workflow setup on selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    handleCheckboxClick(stage) {
        console.log(stage);
        // Toggle the isActive value
        if (stage.stageCaption !== "Stage1DayWise") {
            stage.isActive = !stage.isActive;
        }
        const existingIndex = this.workflowConfigList.findIndex(item => item.stageId === stage.stageId && item.skillLevelId === stage.skillLevelId);
        const updatedObject = {
            stageId: stage.stageId,
            skillLevelId: stage.skillLevelId || this.selectedLevelData.id,
            isActive: stage.isActive
        };
        if (stage.workflowId) {
            updatedObject['workflowId'] = stage.workflowId;
        }
        if (existingIndex !== -1) {
            if (this.workflowConfigList[existingIndex].isActive !== stage.isActive ||
                this.workflowConfigList[existingIndex].workflowId !== stage.workflowId) {
                this.workflowConfigList[existingIndex] = updatedObject;
            }
        }
        else {
            // Check for duplicate stageId
            const duplicateIndex = this.workflowConfigList.findIndex(item => item.stageId === updatedObject.stageId && item.skillLevelId === updatedObject.skillLevelId);
            if (duplicateIndex !== -1) {
                this.workflowConfigList[duplicateIndex] = updatedObject;
            }
            else {
                this.workflowConfigList.push(updatedObject);
            }
        }
        console.log(this.workflowConfigList);
    }
    /* delete the Workflow Config setup
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    deleteWorkflowConfig() {
        let delConfigReq = {
            "workflowId": this.stageDet.workflowId,
            "updatedBy": this.userDet.empId
        };
        this.skillMatrixService.deleteWorkflowConfig('apis/sm/deleteWorkflowConfig', delConfigReq).subscribe((response) => {
            console.log(response);
            if (response.result) {
                this.alertService.success('Workflow setup removed successfully.');
                // this.getStageList();
                this.workflowConfigList();
            }
            else {
                this.alertService.error('Error occurred while removing data. Please try again.');
            }
        });
    }
    /* save or add the Workflow Config setup
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    saveWorkFlow() {
        this.workflowConfigList = this.workflowConfigList.map(configStage => {
            const matchingStage = this.workflowStageList.find(stage => stage.stageId === configStage.stageId && stage.skillLevelId === configStage.skillLevelId);
            if (matchingStage) {
                configStage.isActive = matchingStage.isActive;
            }
            return configStage;
        });
        this.workflowStageList.forEach(stage => {
            const existingIndex = this.workflowConfigList.findIndex(configStage => configStage.stageId === stage.stageId && configStage.skillLevelId === stage.skillLevelId);
            if (existingIndex === -1) {
                this.workflowConfigList.push({
                    stageId: stage.stageId,
                    skillLevelId: stage.skillLevelId || this.selectedLevelData.id,
                    isActive: stage.isActive,
                    workflowId: stage.workflowId
                });
            }
        });
        console.log(this.workflowConfigList);
        let workflowReq = {
            "branchId": this.selectedBranch.branched.id,
            "createdBy": this.userDet.empId,
            "workflowConfigList": this.workflowConfigList
        };
        console.log(workflowReq);
        // return;
        this.listLoading = true;
        this.skillMatrixService.saveWorkflowSetup('apis/sm/saveWorkflowConfig', workflowReq).subscribe((response) => {
            this.listLoading = false;
            if (response.result) {
                this.alertService.success('Workflow setup submitted successfully.');
                // this.getStageList();
                this.getWorkflowConfigList();
                // this.getInterWorkflowDetails(true);
            }
            else {
                if (response.statusCode == 100) {
                    this.alertService.error(response.reason);
                }
                else {
                    this.alertService.error('Error occurred while submitting data. Please try again.');
                }
            }
        });
    }
    /*
        Common function for set an array for dropdown
         @Author Saurabh S
      * @Date  Sept 29 2023
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
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "plant") {
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
};
StageAndWorkflowComponent.ctorParameters = () => [
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
StageAndWorkflowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stage-and-workflow',
        template: _raw_loader_stage_and_workflow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stage_and_workflow_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
], StageAndWorkflowComponent);



/***/ }),

/***/ "mgRB":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/work-station/work-station.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WorkStationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkStationComponent", function() { return WorkStationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_work_station_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./work-station.component.html */ "gYpE");
/* harmony import */ var _work_station_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-station.component.scss */ "Evmk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skill-matrix.service */ "CYrx");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let WorkStationComponent = class WorkStationComponent {
    constructor(skillMatrixService, modalConfig, modalService, fb, alertService) {
        this.skillMatrixService = skillMatrixService;
        this.modalService = modalService;
        this.fb = fb;
        this.alertService = alertService;
        this.searchDet = {};
        this.filterFlag = false;
        this.multipleDropdownSettings = {};
        this.array = {};
        this.selected = {};
        this.skillLevelList = [];
        this.userDet = {};
        this.branchAccessList = [];
        this.deptList = [];
        this.workstationData = [];
        this.mappingStationData = [];
        this.formSubmitLoader = false;
        this.SingleDropdownSettings = {};
        this.submitAttempted = false;
        this.workstationDet = {};
        this.selctedWorkstationId = 0;
        this.dataSpinner = [];
        this.selectedBranch = {};
        this.listLoading = false;
        this.activeEmployeesObject = {};
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
        this.submitSpinner = false;
        this.isEditing = false;
        this.deparmentList = [];
        this.cellLevelList = [];
        this.isSubmit = false;
        this.modalTital = "";
        this.isVisible = false;
        this.workstationList = []; // For workstation mapping 
        modalConfig.backdrop = 'static';
        modalConfig.keyboard = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem('userDet'));
        console.log(this.userDet);
        this.getBranchAccessList();
        this.getWorkstationList();
        this.SingleDropdownSettings = {
            singleSelection: true,
            idField: 'id',
            textField: 'name',
            allowSearchFilter: true,
            closeDropDownOnSelection: true,
        };
        this.getLevelList();
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
        this.formdata = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            workstation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            machineIndex: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.floatValidator()]],
            machineCount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.floatAndGreaterThanZeroValidator()]],
            reqWorkforce: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, this.floatValidator()]],
            reqSkillLvl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.workstationMappingForm = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            masterWorkstation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mappingWorkstations: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.filterFormData = this.fb.group({
            branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            dept: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
        this.selectTab('workStation');
        this.getMappingList();
    }
    /* gets Branch access list on employee
      @Author Jayshri Kolase
     * @Date August 18, 2023
    */
    getBranchAccessList() {
        this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId)
            .subscribe((res) => {
            console.log(res);
            if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                    this.branchAccessList = this.setArray(res.branchAccessList, 'branchId', 'branchName');
                    this.selectedBranch.branched = [this.branchAccessList[0]];
                }
                else {
                    this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
                }
            }
            else {
                this.branchAccessList = [{ id: this.userDet.branch.branchId, name: this.userDet.branch.name }];
            }
        });
    }
    /* get skill level list
     @Author Jayshri Kolase
    * @Date August 18, 2023
  */
    getLevelList() {
        this.skillMatrixService.getLevelList('apis/sm/getLevelList').subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.skillLevelList = this.setArray(response.dataList, 'id', 'levelName');
                }
                else {
                    this.skillLevelList = [];
                }
            }
            else {
                this.skillLevelList = [];
            }
        });
    }
    /* get department list on branch selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getDeptList(branchId) {
        console.log(branchId);
        this.skillMatrixService.getdepartmentlistbybranchid('getdepartmentlistbybranchid/' + branchId).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.deptList != null && response.deptList.length > 0) {
                    console.log(response);
                    this.deparmentList = response.deptList;
                    /* Use For Add Screen */
                    this.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    /* Use For Filter */
                    this.searchDet.deptList = this.setArray(response.deptList, 'deptId', 'deptName');
                    // if (this.deptList != null && this.deptList.length > 0) {
                    // this.selectedBranch.dept = this.searchDet.deptList;
                    // }
                    if (this.workstationData == null || this.workstationData.length == 0) {
                        this.getWorkstationList();
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
    /* open filter modal popup
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    filterModalOpen(FilterModal) {
        // this.searchDet.deptList = [];
        // this.cellLevelList = [];
        this.clearPagination();
        console.log("In filter");
        if (!this.filterFlag) {
            // this.filterData.reset();
        }
        // this.getInterventions();
        this.modalService.open(FilterModal, {
            windowClass: 'filterPopup',
        });
    }
    /* Close filter modal popup
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    closeFilterPopup() {
        this.submitAttempted = false;
        this.selectedBranch.branch = [];
        // this.deparmentList = [];
        this.selectedBranch.dept = [];
        // this.cellLevelList = [];
        this.selectedBranch.cell = [];
        this.selected.cell = [];
        this.modalService.dismissAll();
    }
    /* get workstation list on branch selection and department selection
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    getWorkstationList() {
        this.listLoading = true;
        this.submitSpinner = true;
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let getReq = {
            "orgId": this.userDet.organization.orgId,
            'offset': this.staticPagination.offset,
            'limit': this.staticPagination.itemsPerPage,
        };
        if (this.getIDsArray(this.selectedBranch.cell) != null && this.getIDsArray(this.selectedBranch.cell).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.selectedBranch.cell).length; i++) {
                getReq.lineIds = this.getIDsArray(this.selectedBranch.cell);
            }
        }
        if (this.selectedBranch.branch != null && this.selectedBranch.branch.length > 0) {
            for (let i = 0; i < this.selectedBranch.branch.length; i++) {
                getReq.branchId = this.selectedBranch.branch[0].id;
            }
        }
        else {
            getReq.branchId = this.userDet.branch.branchId;
        }
        if (this.selectedBranch.dept != null && this.selectedBranch.dept.length > 0) {
            for (let i = 0; i < this.selectedBranch.dept.length; i++) {
                getReq.deptId = this.selectedBranch.dept[0].id;
            }
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                getReq.colName = this.sorting.active,
                    getReq.orderType = this.sorting.direction.toUpperCase();
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            getReq.search = this.searchDet.searchInput;
        }
        console.log(getReq);
        this.skillMatrixService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
            console.log(response);
            this.submitSpinner = false;
            this.listLoading = false;
            if (response.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(this.workstationData.totalCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.workstationData = response.dataList.filter(item => item.isActive === true);
                    this.staticPagination.listLength = this.workstationData.length;
                    this.modalService.dismissAll();
                }
                else {
                    this.workstationData = [];
                    this.staticPagination.listLength = this.workstationData.length;
                }
            }
            else {
                this.workstationData = [];
                // this.modalService.dismissAll();
                this.staticPagination.listLength = this.workstationData.length;
            }
        }, (error) => {
            this.workstationData = [];
            this.listLoading = false;
        });
    }
    greaterThanZeroValidator(control) {
        const value = Number(control.value);
        return value > 0 ? null : { invalidInput: true };
    }
    /* add and update workstation details
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    addOrUpdateWorkstation(formdata) {
        console.log(formdata);
        this.isSubmit = true;
        this.submitSpinner = true;
        if (formdata.invalid) {
            Object.keys(formdata.controls).forEach(key => {
                formdata.controls[key].markAsDirty();
            });
            this.submitSpinner = false;
            return;
        }
        console.log(formdata);
        // const formControl = this.formdata.get('machineCount');
        // if (formControl) {
        //   const currentValue = formControl.value || '';
        //   const sanitizedValue = currentValue.replace(/\D/g, '');
        //   const validValue = Math.max(Number(sanitizedValue || 0), 1).toString();
        //   formControl.setValue(validValue, { emitEvent: false });
        // }
        if (formdata.status == "VALID" && this.selctedWorkstationId == 0) {
            let addReq = {
                "workstation": formdata.value.workstation,
                "machineIndex": parseFloat(formdata.value.machineIndex),
                "machineCount": parseFloat(formdata.value.machineCount),
                "requiredWorkforce": parseFloat(formdata.value.reqWorkforce),
                "isActive": "true",
                "deptId": formdata.value.dept[0].id,
                "lineId": formdata.value.cell[0].id,
                "branchId": formdata.value.branch[0].id,
                "reqSkillLevelId": formdata.value.reqSkillLvl[0].id
            };
            console.log(addReq);
            this.skillMatrixService.saveWorkstation('apis/sm/saveWorkstation', addReq).subscribe((response) => {
                console.log(response);
                this.submitSpinner = false;
                if (response.result) {
                    this.alertService.success("Workstation saved successfully.");
                    this.resetData();
                    this.modalService.dismissAll();
                    this.getWorkstationList();
                }
                else {
                    if (response.statusCode == 400) {
                        this.alertService.error(response.reason);
                    }
                    else {
                        this.alertService.error('Error occurred while adding data. Please try again');
                    }
                }
            });
        }
        else {
            let updateReq = {
                "id": this.selctedWorkstationId,
                "workstation": formdata.value.workstation,
                "machineIndex": formdata.value.machineIndex,
                "machineCount": formdata.value.machineCount,
                "requiredWorkforce": parseFloat(formdata.value.reqWorkforce),
                "isActive": true,
                "deptId": formdata.value.dept[0].id,
                "lineId": formdata.value.cell[0].id,
                "branchId": formdata.value.branch[0].id,
                "reqSkillLevelId": formdata.value.reqSkillLvl[0].id
            };
            console.log(updateReq);
            this.skillMatrixService.saveWorkstation('apis/sm/updateWorkstation', updateReq).subscribe((response) => {
                console.log(response);
                this.submitSpinner = false;
                if (response.result) {
                    this.alertService.success("Workstation details updated successfully.");
                    this.modalService.dismissAll();
                    this.resetData();
                    this.getWorkstationList();
                }
                else {
                    if (response.statusCode == 100) {
                        this.alertService.error(response.reason);
                    }
                    else {
                        this.alertService.error('Error occurred while updating data. Please try again');
                    }
                }
            });
        }
    }
    /* reset worksation add or update details form data
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    resetData() {
        this.resetFormField(this.formdata, 'branch');
        this.resetFormField(this.formdata, 'dept');
        this.resetFormField(this.formdata, 'workstation');
        this.resetFormField(this.formdata, 'machineIndex');
        this.resetFormField(this.formdata, 'machineCount');
        this.resetFormField(this.formdata, 'reqWorkforce');
        this.resetFormField(this.formdata, 'reqSkillLvl');
        this.formdata.reset();
    }
    /*
      Reset Form function
      Author: Saurabh s
      Date :18 oct 2023
    */
    resetFormField(form, keyName) {
        if (keyName != "") {
            Object.keys(form.controls).forEach((key) => {
                if (key == keyName) {
                    form.get(keyName).reset();
                    form.get(keyName).markAsPristine();
                    form.get(keyName).markAsUntouched();
                }
            });
        }
        else {
            Object.keys(form.controls).forEach((key) => {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            });
        }
    }
    /* delete or deactivate workstation details
      @Author Jayshri Kolase
     * @Date August 18, 2023
   */
    deactivateWorkstationDetails(data) {
        console.log(data);
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are You Sure!',
            text: 'Do you want to remove this workstation ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7044cd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove It',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            this.dataSpinner[data] = true;
            if (result.isConfirmed) {
                let reqbody = {
                    "id": data.id
                };
                this.skillMatrixService.deleteWorkstationDetails('apis/sm/deActivateWorkstation', reqbody).subscribe((data) => {
                    this.dataSpinner[data.id] = false;
                    if (data.result) {
                        this.alertService.success("Workstation removed successfully");
                        this.getWorkstationList();
                    }
                    else {
                        if (data.statusCode == 100) {
                            this.alertService.error(data.reason);
                        }
                        else {
                            this.alertService.error('Error occurred while removing data. Please try again');
                        }
                    }
                });
            }
            else {
                this.dataSpinner[data.id] = false;
            }
        });
    }
    /* Common function For Searching
    @Author Saurabh salunke
  * @Date August 31, 2023*/
    getSearchList(ev) {
        this.clearPagination();
        this.searchDet.searchData = ev;
        if (!ev) {
            this.searchDet.searchInput = '';
        }
        if (!ev) {
            this.getWorkstationList();
        }
        else {
            this.getWorkstationList();
        }
    }
    /* To clear pagination
    @Author Saurabh salunke
  * @Date Oct 12, 2023*/
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
    /* Change function
      @Author saurabh salunke
     * @Date Oct 4, 2023
   */
    onChangeAll(ev, type) {
        if (ev) {
            console.log('Select All action');
        }
        else {
            console.log('Unselect All action');
        }
    }
    /* Change function
       @Author saurabh salunke
      * @Date Oct 4, 2023
    */
    onChange(ev, type) {
        var _a, _b, _c, _d, _e, _f;
        console.log(ev, type);
        if (ev) {
            if (type == 'dept') {
                console.log(ev.id, type);
                const deptId = ev.id;
                // this.formdata.get('cell').setValue('', { emitEvent: false });
                this.resetFormField(this.formdata, 'cell');
                this.selectedBranch.cell = [];
                this.getCellList(deptId);
            }
            if (type == 'Plant') {
                (_a = this.filterFormData.get('dept')) === null || _a === void 0 ? void 0 : _a.setValue(null);
                (_b = this.filterFormData.get('dept')) === null || _b === void 0 ? void 0 : _b.markAsUntouched();
                (_c = this.filterFormData.get('dept')) === null || _c === void 0 ? void 0 : _c.markAsPristine();
                (_d = this.formdata.get('dept')) === null || _d === void 0 ? void 0 : _d.setValue(null);
                (_e = this.formdata.get('dept')) === null || _e === void 0 ? void 0 : _e.markAsUntouched();
                (_f = this.formdata.get('dept')) === null || _f === void 0 ? void 0 : _f.markAsPristine();
                this.selectedBranch.cell = [];
                this.branchId = ev.id;
                this.getDeptList(this.branchId);
            }
        }
        else {
            if (type == "Plant") {
                this.selectedBranch.dept = [];
                this.selectedBranch.cell = [];
                this.resetFormField(this.formdata, 'dept');
                this.deparmentList = [];
                this.searchDet.deptList = [];
                this.resetFormField(this.formdata, 'cell');
                this.cellLevelList = [];
            }
            else if (type == 'dept') {
                this.resetFormField(this.formdata, 'cell');
                this.cellLevelList = [];
                this.selectedBranch.cell = [];
            }
        }
    }
    /*
    Remove Filter
     @Author Saurabh salunke
  * @Date August 31, 2023
  */
    removeFilter() {
        this.filterFormData.reset();
        // this.submitAttempted = false;
        this.clearPagination();
        this.selectedBranch.branch = null;
        this.selectedBranch.branch = [];
        this.selectedBranch.dept = [];
        this.selectedBranch.cell = [];
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.workstationData = [];
        // this.getDeptList(this.branchAccessList[0].id)
        this.getWorkstationList();
        this.filterFormData.reset();
    }
    /* show add or update workstation modal popup
       @Author Jayshri Kolase
      * @Date August 18, 2023
    */
    modalOpen(modal, popupClass) {
        this.isEditing = false;
        this.selctedWorkstationId = 0;
        this.resetData();
        this.workstationMappingForm.reset();
        // this.deparmentList = [];
        // this.cellLevelList = [];
        this.modalTital = this.isVisible ? "Add Workstation" : "Add Workstation Mapping";
        const screenWidth = window.innerWidth;
        let modifiedPopupClass = popupClass;
        if (screenWidth <= 1024) {
            // Apply different styles for screens up to 1024px width
            modifiedPopupClass += ' custom-modal-1024';
        }
        this.modalService.open(modal, {
            windowClass: modifiedPopupClass
        });
    }
    /* set selected workstation details for update workstation details
         @Author Jayshri Kolase
        * @Date August 18, 2023
      */
    updateWorkstationForm(modal, data) {
        this.isEditing = true;
        console.log(data);
        this.modalTital = "Update Workstation";
        this.selctedWorkstationId = data.id;
        // const isBranchAndDeptSelected = data.branchId && data.deptId;
        this.formdata.patchValue({
            branch: [{ id: data.branchId, name: data.branchName }],
            dept: [{ id: data.deptId, name: data.deptName }],
            cell: [{ id: data.lineId, name: data.lineName }],
            workstation: data.workstation,
            machineIndex: data.machineIndex,
            machineCount: data.machineCount,
            reqWorkforce: data.requiredWorkforce,
            reqSkillLvl: [{ id: data.reqSkillLevelId, name: data.levelName }]
        });
        this.modalService.open(modal, {
            windowClass: 'top'
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
    /* Sorts workstation table data
         @Author Saurabh salunke
        * @Date August 29, 2023
      */
    sortData(sort) {
        this.sorting = sort;
        console.log(this.sorting);
        this.getWorkstationList();
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
    /*
        Apply filter function
        @Author Saurabh salunke
      * @Date August 29, 2023
  */
    submitFilterForm(form) {
        this.submitAttempted = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.controls[key].markAsDirty();
            });
            return;
        }
        this.searchDet.filterFlag = true;
        this.searchDet.filterPopupOpen = false;
        this.getWorkstationList();
        this.modalService.dismissAll();
    }
    /*
         Apply filter function
         @Author Saurabh salunke
       * @Date August 29, 2023
   */
    loadMore(ev) {
        this.workstationData = [];
        this.listLoading = true;
        this.formdata.get('dept').reset();
        this.formdata.get('dept').markAsUntouched();
        this.staticPagination = ev;
        this.getWorkstationList();
    }
    /* get cell/line list
     @Author Saurabh salunke
       * @Date 5 oct 2023
   */
    getCellList(deptId) {
        const getReq = {};
        if (this.branchId) {
            getReq.branchId = this.branchId;
        }
        if (deptId) {
            getReq.deptId = deptId;
        }
        if (this.selectedBranch.branch != null && this.selectedBranch.branch.length > 0) {
            for (let i = 0; i < this.selectedBranch.branch.length; i++) {
                getReq.branchId = this.selectedBranch.branch[0].id;
            }
        }
        this.skillMatrixService.getLineList('apis/sm/getCellList', getReq).subscribe((response) => {
            console.log(response);
            if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                    this.cellLevelList = this.setArray(response.dataList, 'lineId', 'lineName');
                }
                else {
                    this.cellLevelList = [];
                }
            }
            else {
                this.cellLevelList = [];
            }
        });
    }
    /* To apply validation
     @Author Saurabh salunke
       * @Date 5 oct 2023
   */
    numericValidator() {
        return (control) => {
            const numericPattern = /^[0-9]+$/;
            if (control.value && !control.value.match(numericPattern)) {
                return { 'invalidInput': true };
            }
            return null;
        };
    }
    /* To apply validation to select float value
    @Author Saurabh salunke
      * @Date 5 oct 2023
  */
    floatValidator() {
        return (control) => {
            const floatValue = parseFloat(control.value);
            if (control.value && isNaN(floatValue)) {
                return { 'invalidInput': true };
            }
            return null;
        };
    }
    floatAndGreaterThanZeroValidator() {
        return (control) => {
            const value = control.value;
            if (!value) {
                return null;
            }
            const floatValue = parseFloat(value);
            if (isNaN(floatValue)) {
                return { invalidInput: true };
            }
            if (floatValue <= 0) {
                return { lessThanOrEqualToZero: true };
            }
            return null;
        };
    }
    /* To add sorting in dropdown
  @Author Aniket
    * @Date 20 oct 2023
  */
    getSortFunction(array, fieldToSort) {
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
    selectTab(tab) {
        this.selectedTab = tab;
        this.isVisible = tab === 'workStation' ? true : false;
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
        };
    }
    onChangeMappingPlant(event) {
        if (event) {
            this.workstationMappingForm.patchValue({
                masterWorkstation: '',
                mappingWorkstations: ''
            });
            this.getListForMapping(event.id);
        }
        else {
            this.workstationList = [];
            this.filteredWorkstationList = [];
            this.workstationMappingForm.patchValue({
                masterWorkstation: '',
                mappingWorkstations: ''
            });
        }
    }
    /* Get workstation list for mapping */
    getListForMapping(branchId) {
        this.submitSpinner = true;
        let getReq = {
            "orgId": this.userDet.organization.orgId,
            "branchId": branchId || this.userDet.branch.branchId
        };
        this.skillMatrixService.getWorkstationList('apis/sm/getWorkstationList', getReq).subscribe((response) => {
            this.submitSpinner = false;
            if (response.result && response.dataList != null && response.dataList.length > 0) {
                this.workstationList = response.dataList.filter(item => item.isActive === true);
                this.filteredWorkstationList = this.setArray(this.workstationList, 'id', 'workstation');
            }
            else {
                this.workstationList = [];
                this.filteredWorkstationList = [];
            }
        }, (error) => {
            this.submitSpinner = false;
            this.workstationList = [];
            this.filteredWorkstationList = [];
        });
    }
    onMasterWorkstationSelect(event) {
        this.updateFilteredWorkstationList();
    }
    onMasterWorkstationDeselect() {
        this.updateFilteredWorkstationList();
    }
    updateFilteredWorkstationList() {
        const selectedMaster = this.workstationMappingForm.get('masterWorkstation').value;
        if (selectedMaster && selectedMaster.length > 0) {
            // Clear the mappingWorkstations field
            this.workstationMappingForm.get('mappingWorkstations').reset();
            // Filter out the selected master workstation
            this.filteredWorkstationList = this.workstationList.filter(item => item.id !== selectedMaster[0].id);
        }
        else {
            this.filteredWorkstationList = [...this.workstationList];
        }
    }
    getMappingList() {
        this.listLoading = true;
        this.submitSpinner = true;
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let getReq = {
            "orgId": this.userDet.organization.orgId,
            'offset': this.staticPagination.offset,
            'limit': this.staticPagination.itemsPerPage,
        };
        if (this.getIDsArray(this.selectedBranch.cell) != null && this.getIDsArray(this.selectedBranch.cell).length > 0) {
            for (let i = 0; i < this.getIDsArray(this.selectedBranch.cell).length; i++) {
                getReq.lineIds = this.getIDsArray(this.selectedBranch.cell);
            }
        }
        if (this.selectedBranch.branch != null && this.selectedBranch.branch.length > 0) {
            for (let i = 0; i < this.selectedBranch.branch.length; i++) {
                getReq.branchId = this.selectedBranch.branch[0].id;
            }
        }
        else {
            getReq.branchId = this.userDet.branch.branchId;
        }
        if (this.selectedBranch.dept != null && this.selectedBranch.dept.length > 0) {
            for (let i = 0; i < this.selectedBranch.dept.length; i++) {
                getReq.deptId = this.selectedBranch.dept[0].id;
            }
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                getReq.colName = this.sorting.active,
                    getReq.orderType = this.sorting.direction.toUpperCase();
            }
        }
        if (this.searchDet.searchData && this.searchDet.searchInput && this.searchDet.searchInput != '') {
            getReq.search = this.searchDet.searchInput;
        }
        this.skillMatrixService.getWorkstationMappingList('apis/sm/getAllWorkstationMapping').subscribe((response) => {
            this.submitSpinner = false;
            this.listLoading = false;
            if (response.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = response.totalCount;
                    this.staticPagination.totalPages = Math.ceil(this.mappingStationData.totalCount / this.staticPagination.itemsPerPage);
                }
                if (response.dataList != null && response.dataList.length > 0) {
                    this.mappingStationData = response.dataList.filter(item => item.isActive === true);
                    this.staticPagination.listLength = this.mappingStationData.length;
                    this.modalService.dismissAll();
                }
                else {
                    this.mappingStationData = [];
                    this.staticPagination.listLength = this.mappingStationData.length;
                }
            }
            else {
                this.mappingStationData = [];
                // this.modalService.dismissAll();
                this.staticPagination.listLength = this.mappingStationData.length;
            }
        }, (error) => {
            this.mappingStationData = [];
            this.listLoading = false;
        });
    }
    submitWorkstationMapping(form) {
        if (form.invalid) {
            Object.keys(form.controls).forEach(key => {
                form.get(key).markAsTouched();
            });
            return;
        }
        this.submitSpinner = true;
        // Get the selected master workstation to extract deptId and lineId
        const selectedMasterWorkstationId = form.value.masterWorkstation[0].id;
        // Find the corresponding entry in workstationList to get deptId and lineId
        const masterWorkstation = this.workstationList.find(item => item.id === selectedMasterWorkstationId);
        const mappingData = {
            orgId: this.userDet.organization.orgId,
            branchId: form.value.branch[0].id,
            parentWorkstationId: selectedMasterWorkstationId,
            childWorkstationId: this.getIDsArray(form.value.mappingWorkstations),
            isActive: true,
            deptId: masterWorkstation ? masterWorkstation.deptId : null,
            lineId: masterWorkstation ? masterWorkstation.lineId : null
        };
        if (this.isEditing) {
            // Update existing mapping
            this.skillMatrixService.updateWorkstationMapping('apis/sm/workstation-mapping/update', mappingData).subscribe((response) => {
                this.submitSpinner = false;
                if (response.result) {
                    this.alertService.success("Workstation mapping updated successfully.");
                    this.workstationMappingForm.reset();
                    this.modalService.dismissAll();
                    this.getMappingList(); // Refresh the list after update
                }
                else {
                    this.alertService.error('Error occurred while updating mapping. Please try again');
                }
            }, (error) => {
                this.submitSpinner = false;
                this.alertService.error('Error occurred while updating mapping. Please try again');
            });
        }
        else {
            // Create new mapping
            this.skillMatrixService.saveWorkstationMapping('apis/sm/workstation-mapping/save', mappingData).subscribe((response) => {
                this.submitSpinner = false;
                if (response.result) {
                    this.alertService.success("Workstation mapping saved successfully.");
                    this.workstationMappingForm.reset();
                    this.modalService.dismissAll();
                    this.getMappingList(); // Refresh the list after save
                }
                else {
                    this.alertService.error('Error occurred while saving mapping. Please try again');
                }
            }, (error) => {
                this.submitSpinner = false;
                this.alertService.error('Error occurred while saving mapping. Please try again');
            });
        }
    }
    onDeleteWorkstationMapping(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are You Sure!',
            text: 'Do you want to remove this workstation mapping?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#7044cd',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove It',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        }).then((result) => {
            this.dataSpinner[data] = true;
            if (result.isConfirmed) {
                const deletePayload = {
                    parentWorkstationId: data.parentWorkstationId,
                    branchId: data.branchId
                };
                this.skillMatrixService.deleteWorkstationMapping('apis/sm/workstation-mapping/delete-by-parent', deletePayload).subscribe((response) => {
                    this.dataSpinner[data.id] = false;
                    if (response.result) {
                        this.alertService.success("Workstation mapping removed successfully");
                        this.getMappingList();
                    }
                    else {
                        if (response.statusCode == 100) {
                            this.alertService.error(response.reason);
                        }
                        else {
                            this.alertService.error('Error occurred while removing mapping. Please try again');
                        }
                    }
                });
            }
            else {
                this.dataSpinner[data.id] = false;
            }
        });
    }
    updateWorkstationMappingForm(modal, data) {
        this.isEditing = true;
        console.log(data);
        this.modalTital = "Update Workstation Mapping";
        // Get the branch details
        const branch = this.branchAccessList.find(b => b.name === data.branchName);
        // Get the master workstation details
        const masterWorkstation = {
            id: data.parentWorkstationId,
            name: data.parentWorkstationName
        };
        // Get the child workstations
        const childWorkstations = data.childWorkstations.map(child => ({
            id: child.childWorkstationId,
            name: child.childWorkstationName
        }));
        this.workstationMappingForm.patchValue({
            branch: [branch],
            masterWorkstation: [masterWorkstation],
            mappingWorkstations: childWorkstations
        });
        // Get the workstation list for the selected branch
        this.getListForMapping(branch.id);
        this.modalService.open(modal, {
            windowClass: 'top'
        });
    }
};
WorkStationComponent.ctorParameters = () => [
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
WorkStationComponent.propDecorators = {
    workstationMappingTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['workstationMappingTemplate',] }]
};
WorkStationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-work-station',
        template: _raw_loader_work_station_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_work_station_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], WorkStationComponent);



/***/ }),

/***/ "mocS":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/skill-matrix.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>skill-matrix works!</p>\r\n");

/***/ }),

/***/ "s0pu":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/stage-and-workflow/stage-and-workflow.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".execution {\n  text-align: left;\n  font: normal normal normal 18px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  padding: 1em 0px;\n}\n\n.header-title {\n  font: normal normal bold 16px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n}\n\n.score1 {\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  padding-right: 5px;\n  margin-right: 5px;\n  border-right: 0.5px solid #757575;\n}\n\n.score2 {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n}\n\n.scrollableDiv {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 24vh);\n  padding: 0px 10px 0px 5px;\n  margin-right: -2rem;\n  direction: rtl;\n  /* width */\n  /* Track */\n  /* Handle */\n}\n\n.scrollableDiv::-webkit-scrollbar {\n  width: 4px;\n  height: 5em;\n  cursor: pointer;\n}\n\n.scrollableDiv::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #dbdbdb;\n  border-radius: 10px;\n  opacity: 0.5;\n  height: 5em;\n}\n\n.scrollableDiv::-webkit-scrollbar-thumb {\n  background: #7044cd;\n  border-radius: 10px;\n  opacity: 0.5;\n}\n\n.interventions {\n  width: calc(100% - 1rem);\n  max-width: calc(100% - 1rem);\n  height: 4em;\n  box-shadow: 3px 0px 4px #00000029, 3px 0px 4px #00000029;\n  border: 1px solid #7044cd;\n  border-radius: 7px;\n  margin: 6px 1rem;\n  position: relative;\n  cursor: pointer;\n}\n\n.interventions .interventionName {\n  text-align: left;\n  font: normal normal 500 15px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #515774;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  margin: 0px;\n}\n\n.interventions .interventionName .interStatus {\n  font: normal normal 500 11px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n}\n\n.interventions .interventionName .interStatus.completed {\n  color: #a9e2af;\n}\n\n.interventions .interventionName .interStatus.pending {\n  color: #fdd285;\n}\n\n.interventions.active {\n  background: white;\n  border: none;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.interventions.active .interventionName {\n  color: #7044cd;\n}\n\n.interventions.active .arrow-right {\n  color: white;\n  z-index: 999;\n  top: 50%;\n  right: -1rem;\n  position: absolute;\n  font-size: 6rem;\n  transform: translate(1rem, -50%);\n}\n\n.interventionfeatures {\n  border-left: 3px solid #dbdbdb;\n  border-right: 3px solid #dbdbdb;\n}\n\n.interventionfeatures .intNames {\n  border-bottom: 3px solid #dbdbdb;\n  padding: 1rem;\n  position: relative;\n}\n\n.interventionfeatures .intNames .name {\n  text-align: left;\n  font: normal normal 500 18px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n}\n\n.interventionfeatures .intNames .icon-search {\n  color: #7044cd;\n  font-size: 30px;\n  line-height: 1.5;\n}\n\n.interventionfeatures .assessment {\n  border-bottom: 3px solid #dbdbdb;\n  margin: 0px;\n  padding: 1rem 0px;\n}\n\n.interventionfeatures .assessment .assessmentname {\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  text-align: left;\n  margin: auto;\n}\n\n.interventionfeatures .assessment .angleRight {\n  font-size: 30px;\n  color: #bebebe;\n}\n\n.interventionfeatures .assessment:last-child {\n  border-bottom: none;\n}\n\n.interventionfeatures .no-record-found {\n  position: absolute;\n  top: 46%;\n  left: 40%;\n}\n\n.proficiencypop {\n  text-align: left;\n  font: normal normal 500 21px/28px Helvetica Neue;\n  letter-spacing: 0px;\n  color: #7044cd;\n  opacity: 1;\n}\n\n.skill-table .tableFixHead {\n  border-bottom: none;\n  max-height: calc(100vh - 15vh);\n  min-height: calc(100vh - 15vh);\n  height: calc(100vh - 15vh);\n}\n\n.skill-table th {\n  background: #fff !important;\n}\n\n.skill-table .tdData .assessment {\n  padding: 0.5rem 0px;\n}\n\n.skill-table .tdData .assessment .assessmentname {\n  font: normal normal 500 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #474747;\n  text-align: left;\n  margin: auto;\n}\n\n.skill-table .checkbox-block {\n  padding: 0px !important;\n  border: none !important;\n}\n\n.skill-table td:not(:first-child) {\n  vertical-align: middle;\n  text-align: center;\n}\n\n.noofProjects {\n  background: #7044cd;\n  border-radius: 50px;\n  right: 2em;\n  color: white;\n  font: normal normal 500 18px/29px Helvetica Neue;\n  text-align: center;\n}\n\n.thbackground {\n  background-color: white;\n}\n\n.close {\n  float: inherit;\n}\n\n.close span {\n  font: normal normal 300 35px/1 Helvetica Neue;\n}\n\n.insideLabel .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 0px;\n  font: normal normal bold 12px/1.5 Helvetica Neue;\n  left: 1.5rem;\n  color: #7044cd;\n}\n\n.masterSkillDiv {\n  margin: 10px;\n  width: calc(100% - 20px);\n}\n\n.masterSkillDiv .col-form-label {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  margin: auto 0px;\n  padding: 0px 5px 0px 15px;\n}\n\n.astrik {\n  color: #ff5252;\n}\n\n.FooterButton {\n  position: absolute;\n  z-index: 999;\n  bottom: 10px;\n  width: 100%;\n  right: 15px;\n}\n\n.timelinePopup .modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n\n.timelinePopup .modal-header .popup-header-txt {\n  letter-spacing: 0px;\n  color: #7044cd;\n  font: normal normal 500 18px/1.5 Helvetica Neue;\n  text-align: left;\n  width: 100%;\n}\n\n.timelinePopup .modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n\n.timelinePopup .modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n\n.timelinePopup .form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 1rem 0px;\n  margin: 0px;\n}\n\n.timelinePopup .form-group:last-child {\n  border-bottom: none;\n}\n\n.timelinePopup .form-group .col-form-label {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  margin: auto 0px;\n  padding: 0px 5px 0px 15px;\n}\n\n.timelinePopup .form-group .customInput-field,\n.timelinePopup .form-group .customInput-field:hover,\n.timelinePopup .form-group .customInput-field:focus {\n  border-radius: 4px;\n  box-shadow: 0px 0px 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n  margin-left: 14px;\n}\n\n.panelAuthCheckBox .form-check-label {\n  padding: 5px 15px !important;\n  width: 100% !important;\n}\n\n.panelAuthCheckBox .checkbox-block.form-check input[type=checkbox]:checked + label::after {\n  left: 1.2rem;\n  top: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHN0YWdlLWFuZC13b3JrZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSxVQUFBO0VBT0EsVUFBQTtFQVFBLFdBQUE7QUFiSjs7QUFESTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUdSOztBQUNJO0VBQ0ksaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1I7O0FBR0k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx3REFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRlI7O0FBSVE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0FBRlo7O0FBSVk7RUFDSSxjQUFBO0FBRmhCOztBQUtZO0VBQ0ksY0FBQTtBQUhoQjs7QUFRSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUFOUjs7QUFRUTtFQUNJLGNBQUE7QUFOWjs7QUFvQlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFsQlo7O0FBd0JBO0VBQ0ksOEJBQUE7RUFDQSwrQkFBQTtBQXJCSjs7QUF1Qkk7RUFDSSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXJCUjs7QUF1QlE7RUFDSSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBckJaOztBQXdCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF0Qlo7O0FBMEJJO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF4QlI7O0FBMEJRO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF4Qlo7O0FBMkJRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUF6Qlo7O0FBNEJRO0VBQ0ksbUJBQUE7QUExQlo7O0FBOEJJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQTVCUjs7QUFnQ0E7RUFDSSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQTdCSjs7QUFpQ0k7RUFDSSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQTlCUjs7QUFpQ0k7RUFDSSwyQkFBQTtBQS9CUjs7QUFtQ1E7RUFDSSxtQkFBQTtBQWpDWjs7QUFtQ1k7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWpDaEI7O0FBc0NJO0VBQ0ksdUJBQUE7RUFDQSx1QkFBQTtBQXBDUjs7QUF1Q0k7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0FBckNSOztBQXlDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0JBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksdUJBQUE7QUF0Q0o7O0FBeUNBO0VBQ0ksY0FBQTtBQXRDSjs7QUF3Q0k7RUFDSSw2Q0FBQTtBQXRDUjs7QUEyQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQXhDUjs7QUE0Q0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7QUF6Q0o7O0FBMkNJO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBekNSOztBQTZDQTtFQUNJLGNBQUE7QUExQ0o7O0FBNkNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBMUNKOztBQThDSTtFQUNJLDJDQUFBO0FBM0NSOztBQTZDUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBM0NaOztBQThDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBNUNaOztBQThDWTtFQUNJLDZDQUFBO0FBNUNoQjs7QUFpREk7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQS9DUjs7QUFpRFE7RUFDSSxtQkFBQTtBQS9DWjs7QUFrRFE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFoRFo7O0FBbURROzs7RUFHSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWpEWjs7QUFzREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBbkRKOztBQXVESTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7QUFwRFI7O0FBdURJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFyRFIiLCJmaWxlIjoic3RhZ2UtYW5kLXdvcmtmbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4ZWN1dGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMThweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM0NzQ3NDc7XHJcbiAgICBwYWRkaW5nOiAxZW0gMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxufVxyXG5cclxuLnNjb3JlMSB7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwLjVweCBzb2xpZCAjNzU3NTc1O1xyXG59XHJcblxyXG4uc2NvcmUyIHtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxufVxyXG5cclxuLnNjcm9sbGFibGVEaXYge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI0dmgpO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTJyZW07XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuXHJcbiAgICAvKiB3aWR0aCAqL1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1ZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFRyYWNrICovXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjZGJkYmRiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIGhlaWdodDogNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEhhbmRsZSAqL1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnRlcnZlbnRpb25zIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcclxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggNHB4ICMwMDAwMDAyOSwgM3B4IDBweCA0cHggIzAwMDAwMDI5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIG1hcmdpbjogNnB4IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmludGVydmVudGlvbk5hbWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMTVweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzUxNTc3NDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbnRlclN0YXR1cyB7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDExcHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cclxuICAgICAgICAgICAgJi5jb21wbGV0ZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNhOWUyYWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYucGVuZGluZyB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZkZDI4NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuXHJcbiAgICAgICAgLmludGVydmVudGlvbk5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICY6YWZ0ZXIge1xyXG4gICAgICAgIC8vICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgLy8gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIC8vICAgIGhlaWdodDogMDtcclxuICAgICAgICAvLyAgICB3aWR0aDogMDtcclxuICAgICAgICAvLyAgICBsZWZ0OiAxMDAlO1xyXG4gICAgICAgIC8vICAgIHRvcDogMDtcclxuICAgICAgICAvLyAgICBib3JkZXI6IDI4cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgLy8gICAgYm9yZGVyLWxlZnQ6IDM1cHggc29saWQgI2ZmZjtcclxuICAgICAgICAvLyAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC5hcnJvdy1yaWdodCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xcmVtO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXJlbSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmludGVydmVudGlvbmZlYXR1cmVzIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2RiZGJkYjtcclxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNkYmRiZGI7XHJcblxyXG4gICAgLmludE5hbWVzIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RiZGJkYjtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxOHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1zZWFyY2gge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXNzZXNzbWVudCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkYmRiZGI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwcHg7XHJcblxyXG4gICAgICAgIC5hc3Nlc3NtZW50bmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNTAwIDE0cHgvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFuZ2xlUmlnaHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmViZWJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5uby1yZWNvcmQtZm91bmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ2JTtcclxuICAgICAgICBsZWZ0OiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWNpZW5jeXBvcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMjFweC8yOHB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnNraWxsLXRhYmxlIHtcclxuICAgIC50YWJsZUZpeEhlYWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE1dmgpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXZoKTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXZoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZERhdGEge1xyXG4gICAgICAgIC5hc3Nlc3NtZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDBweDtcclxuXHJcbiAgICAgICAgICAgIC5hc3Nlc3NtZW50bmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LWJsb2NrIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub29mUHJvamVjdHMge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICByaWdodDogMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA1MDAgMThweC8yOXB4IEhlbHZldGljYSBOZXVlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGhiYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgZmxvYXQ6IGluaGVyaXQ7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCAzMDAgMzVweC8xIEhlbHZldGljYSBOZXVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zaWRlTGFiZWwge1xyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXN0ZXJTa2lsbERpdiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcblxyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFzdHJpayB7XHJcbiAgICBjb2xvcjogI2ZmNTI1MjtcclxufVxyXG5cclxuLkZvb3RlckJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGltZWxpbmVQb3B1cCB7XHJcbiAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZWFlZiAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAucG9wdXAtaGVhZGVyLXR4dCB7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxOHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyNXB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHggMHB4IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY3VzdG9tSW5wdXQtZmllbGQsXHJcbiAgICAgICAgLmN1c3RvbUlucHV0LWZpZWxkOmhvdmVyLFxyXG4gICAgICAgIC5jdXN0b21JbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICNlYWUxZWE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWVycm9yTXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNmZjUyNTI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTRweDtcclxufVxyXG5cclxuLnBhbmVsQXV0aENoZWNrQm94IHtcclxuICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrYm94LWJsb2NrLmZvcm0tY2hlY2sgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCtsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICAgIGxlZnQ6IDEuMnJlbTtcclxuICAgICAgICB0b3A6IDAuNnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "wR7w":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/stake-holder/stake-holder.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StakeHolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeHolderComponent", function() { return StakeHolderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_stake_holder_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./stake-holder.component.html */ "8PCo");
/* harmony import */ var _stake_holder_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stake-holder.component.scss */ "35nH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../skill-matrix.service */ "CYrx");
/* harmony import */ var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/theme/shared/components */ "7jS0");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let StakeHolderComponent = class StakeHolderComponent {
    constructor(modalConfig, modalService, apiService, fb, alertService) {
        this.modalConfig = modalConfig;
        this.modalService = modalService;
        this.apiService = apiService;
        this.fb = fb;
        this.alertService = alertService;
        this.isEditing = false;
        this.filterFlag = false;
        this.submitAttempted = false;
        this.searchDet = {};
        this.userDet = {};
        this.masterLoader = false;
        this.formSubmitLoader = false;
        this.SingleDropdownSettings = {};
        this.multipleDropdownSettings = {};
        this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 0,
        };
        this.submitSpinner = false;
        this.masterUserTypes = [];
        this.stakeholderList = [];
        this.employeeList = [];
        this.plantList = [];
        this.departmentList = [];
        this.dataSpinner = [];
        this.stakeHolderDet = {};
        this.reportBodyCell = {};
        modalConfig.backdrop = "static";
        modalConfig.keyboard = false;
    }
    ngOnInit() {
        this.userDet = JSON.parse(localStorage.getItem("userDet"));
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
        this.filterData = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            lineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
        });
        this.stakeholderForm = this.fb.group({
            branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            userTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            lineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.getMasterUsertypeList();
        this.getAccessiblePlantList();
        this.getStakeholdersList();
    }
    /*
    on changes Sorting function
    Author: Mahesh W
    Date : 1 Sept 2023
    */
    sortData(sort) {
        console.log(sort);
        this.sorting = sort;
        this.getStakeholdersList();
    }
    /*
    Get Master UserType List
    Author: Mahesh W
    Date : 21 Aug 2023
    */
    getMasterUsertypeList() {
        this.apiService
            .getMasterUserType("apis/sm/getMasterUserType")
            .subscribe((res) => {
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    /* Use For Add Screen */
                    this.masterUserTypes = this.setArray(res.dataList, "id", "userType");
                    /* Use For Filter */
                    this.searchDet.masterUserTypes = this.setArray(res.dataList, "id", "userType");
                    // this.searchDet.userTypeIds = this.searchDet.masterUserTypes;
                }
                else {
                    this.masterUserTypes = [];
                    this.searchDet.masterUserTypes = [];
                }
            }
            else {
                this.masterUserTypes = [];
                this.searchDet.masterUserTypes = [];
            }
        });
    }
    /*
    Get Department List
    Author: Mahesh W
    Date : 21 Aug 2023
    */
    getDepartmentList(branch) {
        this.apiService
            .getDepartmentByBranch("getdepartmentlistbybranchid/" + branch)
            .subscribe((res) => {
            if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                    /* Use For Add Screen */
                    this.departmentList = this.setArray(res.deptList, "deptId", "deptName");
                    if (!this.searchDet.addForm) {
                        /* Use For Filter */
                        this.searchDet.departmentList = this.setArray(res.deptList, "deptId", "deptName");
                        // this.searchDet.deptIds = this.searchDet.departmentList;
                    }
                    if (this.stakeholderList == null ||
                        this.stakeholderList.length == 0) {
                        this.getStakeholdersList();
                    }
                }
                else {
                    this.masterUserTypes = [];
                    this.searchDet.departmentList = [];
                }
            }
            else {
                this.masterUserTypes = [];
                this.searchDet.departmentList = [];
            }
        });
    }
    /*
    Get Accessible Plant List
    Author: Mahesh W
    Date : 21 Aug 2023
    */
    getAccessiblePlantList() {
        this.apiService
            .getBranchAccessList("getBranchAccessSetupByEmpId/" +
            this.userDet.organization.orgId +
            "/" +
            this.userDet.empId)
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
                            id: this.userDet.branch.branchId,
                            name: this.userDet.branch.name,
                        },
                    ];
                    /* Use For Filter */
                    this.searchDet.plantList = [
                        {
                            id: this.userDet.branch.branchId,
                            name: this.userDet.branch.name,
                        },
                    ];
                }
            }
            else {
                /* Use For Add Screen */
                this.plantList = [
                    {
                        id: this.userDet.branch.branchId,
                        name: this.userDet.branch.name,
                    },
                ];
                /* Use For Filter */
                this.searchDet.plantList = [
                    {
                        id: this.userDet.branch.branchId,
                        name: this.userDet.branch.name,
                    },
                ];
            }
            // this.branchId = [this.searchDet.plantList[0]];
            // this.getDepartmentList(this.branchId[0]);
        });
    }
    getCellList(ev) {
        console.log(ev);
        this.reportBodyCell = {
            branchId: this.branchId,
            deptId: ev,
        };
        this.apiService
            .getCellList("apis/sm/getCellList/", this.reportBodyCell)
            .subscribe((res) => {
            console.log(res);
            if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                    /* Use For Add Screen */
                    this.cellList = this.setArray(res.dataList, "lineId", "lineName");
                    console.log(this.cellList);
                    /* Use For Filter */
                    this.searchDet.cellList = this.setArray(res.dataList, "lineId", "lineName");
                    if (this.stakeholderList == null ||
                        this.stakeholderList.length == 0) {
                        this.getEmployeeData();
                    }
                }
                else {
                    this.cellList = [];
                    this.searchDet.cellList = [];
                }
            }
            else {
                // this.cellList = [];
                // this.searchDet.cellList = [];
            }
            // this.branchId = [this.searchDet.cellList[0]];
            // // this.getDepartmentList(this.branchId[0]);
        });
    }
    getEmployeeData() {
        this.employeeList = [];
        console.log(this.employeeList);
        let tmpArray = [];
        if (this.stakeholderForm.get("branchId").value == null ||
            this.stakeholderForm.get("branchId").value.length == 0) {
            console.log("return");
            return;
        }
        let plantId = this.stakeholderForm.get("branchId").value[0].id;
        this.apiService
            .getEmployeeList("getAllEmpList/0/" + plantId + "/0")
            .subscribe((res) => {
            console.log(res);
            if (res.result) {
                if (res.allEmpDetails != null && res.allEmpDetails.length > 0) {
                    for (const element of res.allEmpDetails) {
                        let name = "";
                        if (element.firstName) {
                            name += element.firstName.trim();
                        }
                        if (element.lastName) {
                            if (element.firstName) {
                                name += " ";
                            }
                            name += element.lastName.trim();
                        }
                        element.name = name;
                        element.id = element.empId;
                        if (element.isDeactive == 0) {
                            tmpArray.push(element);
                        }
                    }
                    if (tmpArray != null && tmpArray.length > 0) {
                        this.employeeList = tmpArray;
                    }
                    else {
                        console.log("list1");
                        this.employeeList = [];
                    }
                }
                else {
                    console.log("list2");
                    this.employeeList = [];
                }
            }
            else {
                console.log("list3");
                this.employeeList = [];
            }
        }, (error) => {
            this.employeeList = [];
        });
    }
    /*
      Get Stakeholders List
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    getStakeholdersList() {
        this.masterLoader = true;
        this.stakeholderList = [];
        if (this.staticPagination.page == 1) {
            this.staticPagination.offset = 0;
        }
        else {
            this.staticPagination.offset =
                (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
        }
        let req = {
            orgId: this.userDet.organization.orgId,
            offset: this.staticPagination.offset,
            limit: this.staticPagination.itemsPerPage,
        };
        if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
            for (let i = 0; i < this.searchDet.branchId.length; i++) {
                req.branchId = this.searchDet.branchId[0].id;
            }
        }
        else {
            req.branchId = this.userDet.branch.branchId;
        }
        if (this.searchDet.deptIds != null && this.searchDet.deptIds.length > 0) {
            for (let i = 0; i < this.searchDet.deptIds.length; i++) {
                console.log(this.searchDet.deptIds);
                req.deptId = this.searchDet.deptIds[0].id;
            }
        }
        // if (this.getIDsArray(this.searchDet.deptIds) != null && this.getIDsArray(this.searchDet.deptIds).length > 0) {
        //   for (let i = 0; i < this.getIDsArray(this.searchDet.deptIds).length; i++) {
        //   req.deptIds = this.getIDsArray(this.searchDet.deptIds)
        //   }
        // }
        // if (this.searchDet.userTypeIds != null && this.searchDet.userTypeIds.length > 0) {
        //   req.userTypeIds = this.getIDsArray(this.searchDet.userTypeIds);
        // }
        if (this.searchDet.lineId != null && this.searchDet.lineId.length > 0) {
            req.lineIds = this.getIDsArray(this.searchDet.lineId);
        }
        if (this.sorting) {
            if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
            }
        }
        if (this.searchDet.searchData &&
            this.searchDet.searchInput &&
            this.searchDet.searchInput != "") {
            req.search = this.searchDet.searchInput;
        }
        this.apiService
            .getStakeholderList("apis/sm/getUserTypeList", req)
            .subscribe((res) => {
            this.masterLoader = false;
            if (res.result) {
                if (this.staticPagination.page == 1) {
                    this.staticPagination.total = res.totalCount;
                    this.staticPagination.totalPages = Math.ceil(res.totalCount / this.staticPagination.itemsPerPage);
                }
                if (res.dataList != null && res.dataList.length > 0) {
                    this.stakeholderList = res.dataList;
                    console.log(this.stakeholderList);
                    this.staticPagination.listLength = this.stakeholderList.length;
                }
                else {
                    this.stakeholderList = [];
                    this.staticPagination.listLength = this.stakeholderList.length;
                }
            }
            else {
                this.stakeholderList = [];
            }
        }, (error) => {
            this.stakeholderList = [];
            this.masterLoader = false;
        });
    }
    /*
      Add Stakeholder Open Modal
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    addStakeholder(modal) {
        this.isEditing = false;
        this.formSubmitLoader = false;
        this.resetFormField(this.stakeholderForm, "branchId");
        this.resetFormField(this.stakeholderForm, "deptId");
        this.resetFormField(this.stakeholderForm, "lineId");
        this.resetFormField(this.stakeholderForm, "userTypeId");
        this.resetFormField(this.stakeholderForm, "empId");
        this.departmentList = [];
        this.cellList = [];
        this.stakeHolderDet.id = 0;
        this.searchDet.addForm = true;
        // if (this.employeeList != null && this.employeeList.filter(x => x.branch.branchId == this.searchDet.branchId[0].id).length > 0) {
        //   console.log('Exist Employee List');
        // } else {
        //   this.getEmployeeData();
        // }
        this.modalService.open(modal, { windowClass: "top" }).result.then((result) => {
            console.log(`Closed with: ${result}`);
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            console.log(`Closed with:` + reason);
            if (reason == "Cross click") {
                this.searchDet.addForm = false;
            }
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    submitStakeholderForm(form) {
        console.log(form);
        this.formSubmitLoader = true;
        if (form.invalid) {
            Object.keys(form.controls).forEach((key) => {
                form.controls[key].markAsDirty();
            });
            this.formSubmitLoader = false;
            return;
        }
        let req = {
            branchId: form.get("branchId").value[0].id,
            deptId: form.get("deptId").value[0].id,
            userTypeId: form.get("userTypeId").value[0].id,
            empId: form.get("empId").value[0].id,
            lineId: form.get("lineId").value[0].id,
            isActive: 1,
            createdBy: this.userDet.empId,
        };
        // let duplicate = false;
        // if (this.stakeholderList != null && this.stakeholderList.length > 0) {
        //   for (const element of this.stakeholderList) {
        //     if (this.stakeHolderDet.id != element.id) {
        //       if (element.branchId == form.get('branchId').value[0].id && element.deptId == form.get('deptId').value[0].id && element.userTypeId == form.get('userTypeId').value[0].id && element.empId == form.get('empId').value[0].id) {
        //         duplicate = true;
        //         break;
        //       }
        //     }
        //   }
        // }
        // if (duplicate) {
        //   this.alertService.error('Stakeholder already exists');
        //   this.formSubmitLoader = false;
        //   return;
        // }
        let url = "";
        let msg = "";
        if (this.stakeHolderDet.id != 0) {
            req.id = this.stakeHolderDet.id;
            url = "apis/sm/updateUserType";
            msg = "Stakeholder updated successfully.";
        }
        else {
            url = "apis/sm/saveUserType";
            msg = "Stakeholder added successfully.";
        }
        console.log(req);
        if (url) {
            this.apiService.saveStakeholderData(url, req).subscribe((res) => {
                this.formSubmitLoader = false;
                if (res.result) {
                    this.alertService.success(msg);
                    this.searchDet.addForm = false;
                    this.modalService.dismissAll();
                    this.getStakeholdersList();
                }
                else {
                    if (res.statusCode == 100) {
                        this.alertService.error(res.reason);
                    }
                    else {
                        this.alertService.error("Error occurred while submitting data. Please try again.");
                    }
                }
            }, (error) => {
                this.alertService.error(error);
                this.formSubmitLoader = false;
            });
        }
        else {
            this.formSubmitLoader = false;
        }
    }
    /*
      Single Select Dropdown onChange function
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    onChange(ev, type) {
        if (ev) {
            console.log(ev);
            if (type == "dept") {
                this.cellList = [];
                this.deptId = ev.id;
                this.searchDet.lineId = [];
                this.getCellList(this.deptId);
                this.resetFormField(this.stakeholderForm, "lineId");
            }
            if (type == "plant") {
                this.branchId = ev.id;
                this.searchDet.deptIds = [];
                this.getDepartmentList(this.branchId);
                if (this.searchDet.addForm) {
                    console.log("inside");
                    this.resetFormField(this.stakeholderForm, "deptId");
                    this.resetFormField(this.stakeholderForm, "empId");
                    this.getEmployeeData();
                }
            }
        }
        else {
            if (type == "plant") {
                if (this.searchDet) {
                    this.departmentList = [];
                    this.searchDet.departmentList = [];
                    this.cellList = [];
                    this.searchDet.cellList = [];
                    this.resetFormField(this.filterData, "deptIds");
                    this.resetFormField(this.stakeholderForm, "deptId");
                    this.resetFormField(this.stakeholderForm, "lineId");
                    this.searchDet.lineId = [];
                }
                else {
                    this.resetFormField(this.stakeholderForm, "empId");
                }
            }
            else if (type == "dept") {
                this.resetFormField(this.stakeholderForm, "lineId");
                this.cellList = [];
                this.searchDet.cellList = [];
                this.searchDet.lineId = [];
            }
        }
    }
    /*
      Multi Select Dropdown onChange function
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    onChangeAll(ev, type) {
        if (ev) {
            console.log("Select All action");
        }
        else {
            console.log("Unselect All action");
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
    /*
      Open Filter function
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    filterModalOpen(modal) {
        this.searchDet.filterPopupOpen = true;
        this.clearPagination();
        if (!this.searchDet.filterFlag) {
            this.filterData.patchValue({
                branchId: [this.searchDet.plantList[0]],
                deptIds: this.searchDet.departmentList,
            });
        }
        this.modalService.open(modal, {
            windowClass: "filterPopup",
        });
        this.modalService.open(modal, { windowClass: "filterPopup" }).result.then((result) => {
            console.log(`Closed with: ${result}`);
            //this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            console.log(`Closed with:` + reason);
            if (reason == "Cross click") {
                this.searchDet.filterFlag = false;
                this.searchDet.filterPopupOpen = false;
                // this.getStakeholdersList();
            }
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
        this.searchDet.filterFlag = true;
        this.searchDet.filterPopupOpen = false;
        this.getStakeholdersList();
        this.modalService.dismissAll();
    }
    /*
      Remove Filter
      Author : Mahesh W
      Date : 21 Aug 2023
    */
    removeFilter() {
        // this.submitAttempted = false;
        this.filterData.reset();
        this.searchDet.branchId = [];
        this.searchDet.deptIds = [];
        this.searchDet.lineId = [];
        this.searchDet.userTypeIds = [];
        this.searchDet.filterFlag = false;
        this.searchDet.filterPopupOpen = false;
        this.stakeholderList = [];
        this.getDepartmentList(this.searchDet.plantList[0]);
        this.getStakeholdersList();
    }
    /*
      Edit Stakeholder Open Modal
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    updateStakeholder(modal, rec) {
        console.log(modal, rec);
        this.isEditing = true;
        // if (this.employeeList != null && this.employeeList.filter(x => x.branch.branchId == this.branchId[0].id).length > 0) {
        //   console.log('Exist Employee List');
        // } else {
        //   console.log("else")
        //   this.getEmployeeData();
        // }
        this.stakeHolderDet.id = rec.id;
        this.stakeholderForm.patchValue({
            branchId: [{ id: rec.branchId, name: rec.branchName }],
            deptId: [{ id: rec.deptId, name: rec.deptName }],
            lineId: [{ id: rec.lineId, name: rec.lineName }],
            userTypeId: [{ id: rec.userTypeId, name: rec.userType }],
            empId: [{ id: rec.empId, name: rec.empName }],
        });
        this.modalService.open(modal, {
            windowClass: "top",
        });
        this.getEmployeeData();
    }
    /*
      Delete Stakeholder Cofirmation alert
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    deleteStakeholder(rec) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: "Are You Sure!",
            text: "Do you want remove this stakeholder ?",
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
                    id: rec.id,
                };
                this.apiService
                    .deleteWorkstationDetails("apis/sm/deleteUserType", reqbody)
                    .subscribe((res) => {
                    if (res.result) {
                        this.alertService.success("Stakeholder removed successfully");
                        this.getStakeholdersList();
                    }
                    else {
                        if (res.statusCode == 100) {
                            this.alertService.error(res.reason);
                        }
                        else {
                            this.alertService.error("Error occurred while removing data. Please try again");
                        }
                    }
                });
            }
            else {
                console.log("Cancel request");
            }
        });
    }
    /*
      Reset Form function
      Author: Mahesh W
      Date : 21 Aug 2023
    */
    resetFormField(form, keyName) {
        if (keyName != "") {
            Object.keys(form.controls).forEach((key) => {
                if (key == keyName) {
                    form.get(keyName).reset();
                    form.get(keyName).markAsPristine();
                    form.get(keyName).markAsUntouched();
                }
            });
        }
        else {
            Object.keys(form.controls).forEach((key) => {
                form.get(key).reset();
                form.get(key).markAsPristine();
                form.get(key).markAsUntouched();
            });
        }
    }
    loadMore(ev) {
        this.stakeholderList = [];
        this.masterLoader = true;
        this.staticPagination = ev;
        this.getStakeholdersList();
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
    /* To close modal
    @Author Saurabh salunke
  * @Date August 31, 2023*/ closeFilterPopup() {
        this.filterData.reset();
        this.modalService.dismissAll();
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
            this.getStakeholdersList();
        }
        else {
            this.getStakeholdersList();
        }
    }
    getSortFunction(array, fieldToSort) {
        if (array && Array.isArray(array) && array.length > 0) {
            if (fieldToSort === "dept" ||
                fieldToSort === "plant" ||
                fieldToSort === "cell") {
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
StakeHolderComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
StakeHolderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-stake-holder",
        template: _raw_loader_stake_holder_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stake_holder_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
        _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], StakeHolderComponent);



/***/ }),

/***/ "wng/":
/*!*************************************************************************!*\
  !*** ./src/app/modules/settings/skill-matrix/skill-matrix.component.ts ***!
  \*************************************************************************/
/*! exports provided: SkillMatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillMatrixComponent", function() { return SkillMatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./skill-matrix.component.html */ "mocS");
/* harmony import */ var _skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-matrix.component.scss */ "gBl0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SkillMatrixComponent = class SkillMatrixComponent {
    constructor() { }
    ngOnInit() {
    }
};
SkillMatrixComponent.ctorParameters = () => [];
SkillMatrixComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-matrix',
        template: _raw_loader_skill_matrix_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_matrix_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SkillMatrixComponent);



/***/ })

}]);
//# sourceMappingURL=skill-matrix-skill-matrix-module-es2015.js.map