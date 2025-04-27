(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-ojt-check-sheet-add-ojt-check-sheet-module"], {
    /***/
    "+M3u":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-ojt-check-sheet-routing.module.ts ***!
      \*************************************************************************************************************************/

    /*! exports provided: AddOjtCheckSheetRoutingModule */

    /***/
    function M3u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOjtCheckSheetRoutingModule", function () {
        return AddOjtCheckSheetRoutingModule;
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


      var _add_ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-ojt-check-sheet.component */
      "vIuQ");

      var routes = [{
        path: '',
        component: _add_ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_3__["AddOjtCheckSheetComponent"]
      }];

      var AddOjtCheckSheetRoutingModule = function AddOjtCheckSheetRoutingModule() {
        _classCallCheck(this, AddOjtCheckSheetRoutingModule);
      };

      AddOjtCheckSheetRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddOjtCheckSheetRoutingModule);
      /***/
    },

    /***/
    "EAK5":
    /*!********************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-parameter/add-check-sheet-parameter.component.html ***!
      \********************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EAK5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title headerTitle\" id=\"modal-basic-title\" style=\"color: #7044cd;font-weight: bold;\">Add OJT\r\n        Checksheet Parameters</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross Click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body\" style=\"padding: 10px;\">\r\n    <div class=\"checksheetForm\">\r\n        <form [formGroup]=\"checksheetParameterForm\" (ngSubmit)=\"addChecksheetParameter(checksheetParameterForm)\">\r\n            <input type=\"hidden\" name=\"checkSheetId\" formControlName=\"checkSheetId\" />\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"parameterTypeId\" class=\"col-sm-12 col-form-label\">Field\r\n                        Type &nbsp;<span class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"template\"\r\n                            class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                            [placeholder]=\"'Select Field Type'\" [settings]=\"SingleDropdownSettings\"\r\n                            [(ngModel)]=\"selectedDet.parameterType\" [data]=\"getSortFunction(paraTypeList,'paraType')\"\r\n                            formControlName=\"parameterTypeId\" (onSelect)=\"onParameterTypeSelect($event)\"\r\n                            (onDeSelect)=\"onParameterTypeSelect(false)\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"checksheetParameterForm.controls['parameterTypeId'].invalid && (checksheetParameterForm.controls['parameterTypeId'].touched || checksheetParameterForm.controls['parameterTypeId'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"checksheetParameterForm.controls['parameterTypeId'].errors.required\">\r\n                                Please select field type\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <label for=\"parameter\" class=\"col-sm-12 col-form-label\">Field\r\n                        &nbsp;<span class=\"astrik\">*</span>&nbsp;\r\n                        <!-- <small style=\"color:red\" *ngIf=\"isNoteShowParameter\">&nbsp;&nbsp;[Only]</small> -->\r\n                    </label>\r\n\r\n                    <div class=\"col-sm-12\">\r\n                        <input placeholder=\"Enter Actual Parameter\"\r\n                            *ngIf=\"isDateTimeParameter && !isNumberParameter && !isTextParameter && !isGapParameter && !isModelParameter\"\r\n                            class=\"form-control checksheetinputBox\" type=\"text\" formControlName=\"parameter\">\r\n                        <input *ngIf=\"isNumberParameter\" placeholder=\"Enter Parameter\"\r\n                            class=\"form-control checksheetinputBox\" type=\"text\" formControlName=\"parameter\">\r\n                        <input\r\n                            *ngIf=\"!isNumberParameter && !isDateTimeParameter && !isModelParameter && !isGapParameter || isTextParameter\"\r\n                            placeholder=\"Enter Parameter\" class=\"form-control checksheetinputBox\" type=\"text\"\r\n                            formControlName=\"parameter\">\r\n                        <!-- <span *ngIf=\"isNoteShowParameter\" class=\"custom-errorMsg\">Note <sup style=\"font-size: 10px;\">*</sup></span> -->\r\n                        <!-- <label for=\"parameter\" *ngIf=\"isNoteShowParameter\" class=\"col-sm-12 col-form-label\">Note\r\n                        &nbsp;<span class=\"astrik\">*</span></label> -->\r\n                        <input *ngIf=\"isGapParameter && !isDateTimeParameter && !isNumberParameter \"\r\n                            placeholder=\"Enter Gap\" class=\"form-control checksheetinputBox\" type=\"text\"\r\n                            formControlName=\"parameter\">\r\n                        <input *ngIf=\"isModelParameter && !isDateTimeParameter\" placeholder=\"Enter From Model\"\r\n                            class=\"form-control checksheetinputBox\" type=\"text\" formControlName=\"parameter\">\r\n                        <div *ngIf=\"checksheetParameterForm.controls['parameter'].invalid && (checksheetParameterForm.controls['parameter'].touched || checksheetParameterForm.controls['parameter'].dirty) || checksheetParameterForm.get('parameter').hasError('required') \"\r\n                            class=\"custom-errorMsg\">\r\n                            <div\r\n                                *ngIf=\"isAddButtonClicked && checksheetParameterForm.get('parameter').hasError('required') && !isDateTimeParameter && !isNumberParameter && !isGapParameter && !isModelParameter\">\r\n                                Please\r\n                                enter a parameter\r\n                            </div>\r\n                            <div *ngIf=\" isAddButtonClicked && isNumberParameter\">Please\r\n                                enter a number\r\n                            </div>\r\n                            <div *ngIf=\"isAddButtonClicked && isDateTimeParameter\">Please\r\n                                enter a parameter\r\n                            </div>\r\n                            <div *ngIf=\"isAddButtonClicked && isGapParameter\">Please\r\n                                enter a gap\r\n                            </div>\r\n                            <div *ngIf=\"isAddButtonClicked && isModelParameter\">Please\r\n                                enter a model\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <ng-container\r\n                        *ngIf=\"( checksheetParameterForm.get('parameterTypeId').value != null && checksheetParameterForm.get('parameterTypeId').value.length > 0 && checksheetParameterForm.get('parameterTypeId').value[0].typeName == 'cyclePlan')\">\r\n                        <label for=\"cycleValue\" class=\"col-sm-12 col-form-label\">No. of Cycle\r\n                            &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"col-sm-12\">\r\n                            <input placeholder=\"Enter No. of Cycle\" onkeydown=\"false\" onkeyup=\"false\"\r\n                                class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                (input)=\"onParameterInputChange($event ,'Number')\" formControlName=\"cycleValue\">\r\n                            <div *ngIf=\"checksheetParameterForm.controls['cycleValue'].invalid && (checksheetParameterForm.controls['cycleValue'].touched || checksheetParameterForm.controls['cycleValue'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div\r\n                                    *ngIf=\"isAddButtonClicked && isCyclePlan && checksheetParameterForm.controls['cycleValue'].errors.required\">\r\n                                    Please enter cycle plan\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-md-3 m-auto\">\r\n                    <button style=\"margin-top: 1.7rem;\" class=\"btn btn-lg submitBtn event-btn\" type=\"submit\"\r\n                        [disabled]=\"!disableReferModel\">\r\n                        <span *ngIf=\"addLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                        <span *ngIf=\"addLoader\" class=\"load-text\"> Loading...</span>\r\n                        <span *ngIf=\"!addLoader\" class=\"btn-text\">Add </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <!-- for cretae duplicate -->\r\n\r\n        <div *ngIf=\"isSelectedParaType == 'Datetime' || isSelectedParaType == 'Model'\" style=\"margin-top: 10px;\">\r\n            <form [formGroup]=\"checksheetParameterFormDate\"\r\n                (ngSubmit)=\"addChecksheetParameterCopy(checksheetParameterFormDate)\">\r\n                <input type=\"hidden\" name=\"checkSheetId\" formControlName=\"checkSheetId\" />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"col-sm-12\">\r\n                            <ng-multiselect-dropdown name=\"template\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                [placeholder]=\"'Select Field Type'\" [settings]=\"SingleDropdownSettings\"\r\n                                [(ngModel)]=\"selectedDet.parameterType\"\r\n                                [data]=\"getSortFunction(paraTypeList,'paraType')\" formControlName=\"parameterTypeId\"\r\n                                (onSelect)=\"onParameterTypeSelect($event)\" (onDeSelect)=\"onParameterTypeSelect(false)\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetParameterFormDate.controls['parameterTypeId'].invalid && (checksheetParameterFormDate.controls['parameterTypeId'].touched || checksheetParameterFormDate.controls['parameterTypeId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetParameterFormDate.controls['parameterTypeId'].errors.required\">\r\n                                    Please select field type\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"col-sm-12\">\r\n                            <input placeholder=\"Enter Target Parameter\"\r\n                                *ngIf=\"isDateTimeParameter && !isNumberParameter && !isTextParameter && !isGapParameter && !isModelParameter\"\r\n                                class=\"form-control checksheetinputBox\" type=\"text\" formControlName=\"parameter\">\r\n                            <input *ngIf=\"isModelParameter && !isDateTimeParameter\" placeholder=\"Enter To Model\"\r\n                                class=\"form-control checksheetinputBox\" type=\"text\" formControlName=\"parameter\">\r\n                            <div *ngIf=\"checksheetParameterFormDate.controls['parameter'].invalid && (checksheetParameterFormDate.controls['parameter'].touched || checksheetParameterFormDate.controls['parameter'].dirty) || checksheetParameterFormDate.get('parameter').hasError('required') \"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"isAddButtonClicked && isDateTimeParameter\">Please\r\n                                    enter a parameter\r\n                                </div>\r\n                                <div *ngIf=\"isAddButtonClicked && isModelParameter\">Please\r\n                                    enter a model\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\"></div>\r\n                    <div class=\"col-md-3 m-auto\">\r\n                        <button style=\"margin-top: 0.2rem;\" class=\"btn btn-lg submitBtn event-btn\" type=\"submit\"\r\n                            [disabled]=\"!disableReferModel\">\r\n                            <span *ngIf=\"addLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                            <span *ngIf=\"addLoader\" class=\"load-text\"> Loading...</span>\r\n                            <span *ngIf=\"!addLoader\" class=\"btn-text\">Add </span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n    <perfect-scrollbar [style.height]=\"'calc(100vh - 52vh)'\">\r\n        <div class *ngIf=\"parameterDet.rec != null && parameterDet.rec.length > 0\">\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Parameter Type</th>\r\n                        <th>Parameter</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of parameterDet.rec;let paramIndex = index;\">\r\n                        <td>{{x.parameterData.typeName || ''}}</td>\r\n                        <td>\r\n                            {{x.parameter || ''}}\r\n                            <span *ngIf=\"x.parameterData.typeName == 'cyclePlan'\"><small>(<b>Cycle\r\n                                        Value :\r\n                                    </b>{{x.cycleValue || 0}})</small></span>\r\n                        </td>\r\n                        <td>\r\n                            <button type=\"button\" class=\"btn btn-sm dangerBtn\" (click)=\"removeParameter(paramIndex)\">\r\n                                <i class=\"fa fa-times\"></i>\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </perfect-scrollbar>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <button type=\"button\" class=\"btn submitBtn event-btn\"\r\n                *ngIf=\"parameterDet.rec != null && parameterDet.rec.length > 0\" (click)=\"saveChecksheetParameter()\">\r\n                <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitLoader\" class=\"btn-text\">Submit </span>\r\n            </button>\r\n            <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                (click)=\"close('Cross Click')\">Cancel\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "EhhM":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-ojt-check-sheet.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EhhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row m-0\">\r\n    <div class=\"p-0 col-9\">\r\n        <div class=\"headerBar\">\r\n            <span class=\"backArrow\">\r\n                <a routerLink=\"..\"><i class=\"feather icon-arrow-left\"></i></a>\r\n            </span>\r\n            <div class=\"main-tab-switcher\">\r\n                <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetChecksheetTab(3)}\"\r\n                    (click)=\"setcheckSheetTab(3)\">\r\n                    Create OJT Checksheet\r\n                </div>\r\n                <div *ngIf=\"!isCheckSheetAvailable\" class=\"main-tab-switch\"\r\n                    [ngClass]=\"{mainActiveSwitch:isSetChecksheetTab(4)}\" (click)=\"setcheckSheetTab(4)\">\r\n                    Copy OJT Checksheet\r\n                </div>\r\n            </div>\r\n            <!-- <app-topBar title=\"Add OJT Checksheet\" style=\"width: 100%;\">\r\n            </app-topBar> -->\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n</div>\r\n<app-loading *ngIf=\"actionLoader\"></app-loading>\r\n<ng-container *ngIf=\"isSetChecksheetTab(3) || isCheckSheetAvailable\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-md-12\">\r\n            <form class=\"checksheetForm\" [formGroup]=\"checksheetForm\"\r\n                (ngSubmit)=\"saveChecksheetDetails(checksheetForm)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"plant\" class=\" col-form-label\">Plant &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"plant\" id=\"plant\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"plant\" [placeholder]=\"'Select Plant'\"\r\n                                [settings]=\"SingleBranchDropdownSettings\"\r\n                                [data]=\"getSortFunction(branchAccessList,'dept')\" [disabled]=\"isCheckSheetAvailable\"\r\n                                (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetForm.controls['plant'].invalid && (checksheetForm.controls['plant'].touched || checksheetForm.controls['plant'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['plant'].errors.required\">\r\n                                    Please select plant\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"deptId\" class=\" col-form-label\">Department &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"deptId\" id=\"deptId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"deptId\" [placeholder]=\"'Select Department'\"\r\n                                [settings]=\"SingleDropdownSettings\" [data]=\"departmentList\"\r\n                                [disabled]=\"isCheckSheetAvailable\" (onSelect)=\"onChange($event,'dept')\"\r\n                                (onDeSelect)=\"onChange(false,'dept')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetForm.controls['deptId'].invalid && (checksheetForm.controls['deptId'].touched || checksheetForm.controls['deptId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['deptId'].errors.required\">\r\n                                    Please select department\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"cellLineId\" class=\" col-form-label\">Cell/Line &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"cellLineId\" id=\"cellLineId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"cellLineId\" [placeholder]=\"'Select Cell/Line'\"\r\n                                [settings]=\"SingleDropdownSettings\" [data]=\"cellList\" [disabled]=\"isCheckSheetAvailable\"\r\n                                (onSelect)=\"onChange($event,'cell')\" (onDeSelect)=\"onChange(false,'cell')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetForm.controls['cellLineId'].invalid && (checksheetForm.controls['cellLineId'].touched || checksheetForm.controls['cellLineId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['cellLineId'].errors.required\">\r\n                                    Please select cell/line\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"workstationId\" class=\" col-form-label\">Workstation &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"workstationId\" id=\"workstationId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"workstationId\" [placeholder]=\"'Select Workstation'\"\r\n                                [settings]=\"SingleDropdownSettings\" [data]=\"workforceList\"\r\n                                [disabled]=\"isCheckSheetAvailable\"\r\n                                (onChange)=\"updateLevelOptions(checksheetForm.get('workstationId').value)\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetForm.controls['workstationId'].invalid && (checksheetForm.controls['workstationId'].touched || checksheetForm.controls['workstationId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['workstationId'].errors.required\">\r\n                                    Please select workstation\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"level\" class=\" col-form-label\">Level &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"level\" id=\"level\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"level\" [placeholder]=\"'Select Level'\"\r\n                                [settings]=\"SingleLevelDropdownSettings\" [data]=\"LevelList\"\r\n                                [disabled]=\"isCheckSheetAvailable\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"checksheetForm.controls['level'].invalid && (checksheetForm.controls['level'].touched || checksheetForm.controls['level'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['level'].errors.required\">\r\n                                    Please select level\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"noOfDays\" class=\" col-form-label\">No. of Days &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <input placeholder=\"Enter No. of Days\" class=\"form-control checksheetinputBox\" id=\"noOfDays\"\r\n                                name=\"noOfDays\" [(ngModel)]=\"noOfDays\" formControlName=\"noOfDays\" type=\"number\"\r\n                                pattern=\"^\\d{1,2}$\">\r\n                            <div *ngIf=\"checksheetForm.controls['noOfDays'].invalid && (checksheetForm.controls['noOfDays'].touched || checksheetForm.controls['noOfDays'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['noOfDays'].errors.required\">\r\n                                    Please enter no. of days\r\n                                </div>\r\n                                <div *ngIf=\"checksheetForm.get('noOfDays').hasError('zeroValue')\">\r\n                                    No. of days can not be 0.\r\n                                </div>\r\n                                <!-- <div *ngIf=\"checksheetForm.get('noOfDays').hasError('negativeValue')\">\r\n                                    No. of days can not be negative.\r\n                                </div> -->\r\n                                <div *ngIf=\"checksheetForm.get('noOfDays').hasError('pattern')\">\r\n                                    Please enter two-digit positive integer no. of days.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                        <label for=\"title\" class=\" col-form-label\">Title &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <input placeholder=\"Enter Checksheet Title\" class=\"form-control checksheetinputBox\"\r\n                                id=\"title\" name=\"title\" formControlName=\"title\" type=\"text\" maxlength=\"250\">\r\n                            <div *ngIf=\"checksheetForm.controls['title'].invalid && (checksheetForm.controls['title'].touched || checksheetForm.controls['title'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"checksheetForm.controls['title'].errors.required\">\r\n                                    Please enter checksheet title\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"row text-right\">\r\n                    <div class=\"col-md-12 m-t-5\">\r\n                        <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\">\r\n                            <span *ngIf=\"!isCheckSheetAvailable\" class=\"btn-text\">Submit</span>\r\n                            <span *ngIf=\"isCheckSheetAvailable\" class=\"btn-text\">Update</span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <div *ngIf=\"isCheckSheetAvailable\" class=\"row m-t-10\">\r\n                <div class=\"col-md-6\">\r\n                    <ng-container\r\n                        *ngIf=\"(checksheetDetails.hasOwnProperty('groupPointList') && checksheetDetails.groupPointList != null && checksheetDetails.groupPointList.length != 0) || (checksheetDetails.parameterList != null && checksheetDetails.parameterList.length != 0)\">\r\n                        <div class=\"main-tab-switcher\">\r\n                            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\"\r\n                                (click)=\"setMainTab(1)\">\r\n                                Key\r\n                                Points\r\n                            </div>\r\n                            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(2)}\"\r\n                                (click)=\"setMainTab(2)\">\r\n                                Verification\r\n                                Parameter\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <div class=\"col-md-6 text-right\">\r\n                    <button style=\"margin: 5px;\" class=\"btn btn-lg submitBtn event-btn m-r-10\" type=\"button\"\r\n                        (click)=\"openAddChecksheetPointsModal(AddChecksheetPointsModel)\">\r\n                        <span class=\"btn-text\">Add Key Points</span>\r\n                    </button>\r\n                    <button style=\"margin: 5px;\" class=\"btn btn-lg submitBtn event-btn m-l-5\" type=\"button\"\r\n                        (click)=\"openAddChecksheetPointsModal(AddChecksheetParametersModel)\">\r\n                        <span class=\"btn-text\">Add Verification Parameters</span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <perfect-scrollbar [style.height]=\"'calc(100vh - 60vh)'\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-md-12\">\r\n                <ng-container *ngIf=\"isSetMainTab(1)\">\r\n                    <div class=\"pointsBlock\"\r\n                        *ngIf=\"checksheetDetails.hasOwnProperty('groupPointList') && checksheetDetails.groupPointList != null && checksheetDetails.groupPointList.length != 0\">\r\n                        <div class=\"row formElementsBlock\" *ngFor=\"let x of checksheetDetails.groupPointList\">\r\n                            <div class=\"overlay-bg\"></div>\r\n                            <table class=\"table table-bordered\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th colspan=\"2\">\r\n                                            Day : {{x.dayNo || ''}}\r\n                                        </th>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th>Key Points</th>\r\n                                        <th> Reference</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngFor=\"let point of x.pointList\">\r\n                                    <tr>\r\n                                        <td>{{point.itemName || ''}}</td>\r\n                                        <td>{{point.reference || ''}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                            <div class=\"actionBtn\">\r\n                                <div>\r\n                                    <button class=\"btn btn-edit btn-que-edit\" type=\"button\"\r\n                                        (click)=\"updatePoint(AddChecksheetPointsModel,x)\">EDIT</button>\r\n                                </div>\r\n                                <div>\r\n                                    <button class=\"btn ques-delete-btn btn-que-delete\" type=\"button\"\r\n                                        (click)=\"deleteChecksheetPoint(x)\">DELETE</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isSetMainTab(2)\">\r\n                    <div class=\"pointsBlock\"\r\n                        *ngIf=\"checksheetDetails.parameterList != null && checksheetDetails.parameterList.length != 0\">\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th style=\"width: 20%;\"> Field Type</th>\r\n                                    <th> Field</th>\r\n                                    <th *ngIf=\"isActionTakenInParam()\" style=\"width: 20%;\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody class=\"formElementsBlock1\"\r\n                                [ngClass]=\"isActionTakenInParam() ? '' : 'formElementsBlock'\"\r\n                                *ngFor=\"let x of checksheetDetails.parameterList\">\r\n                                <div class=\"overlay-bg\" *ngIf=\"!isActionTakenInParam()\"></div>\r\n                                <tr>\r\n                                    <td style=\"width: 20%;\">\r\n                                        {{x.parameterType || ''}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"!x.isActionTaken\">\r\n                                            {{x.parameter || ''}}\r\n                                            <ng-container\r\n                                                *ngIf=\"x.hasOwnProperty('paramObj') && x.paramObj.typeCaption == 'CyclePlan'\">\r\n                                                &nbsp;<small>(<b>Cycle Value : </b>{{x.cycleValue ||\r\n                                                    ''}})</small></ng-container>\r\n                                        </span>\r\n                                        <div *ngIf=\"x.isActionTaken\" style=\"display: inline-flex;width: 100%;\">\r\n                                            <input placeholder=\"Enter Parameter\" class=\"form-control\" type=\"text\"\r\n                                                [(ngModel)]=\"x.editableParameter\" name=\"editableParameter\" />\r\n                                            <ng-container\r\n                                                *ngIf=\"x.hasOwnProperty('paramObj') && x.paramObj.typeCaption == 'CyclePlan'\">&nbsp;\r\n                                                <input placeholder=\"Enter Cycle Value\" class=\"form-control\"\r\n                                                    type=\"number\" [(ngModel)]=\"x.editableCycleValue\"\r\n                                                    name=\"editableCycleValue\" />\r\n                                            </ng-container>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td *ngIf=\"x.isActionTaken\" style=\"width: 20%;\">\r\n                                        <button class=\"btn submitBtn\" type=\"button\"\r\n                                            (click)=\"updateParameter(x,'')\">Update</button>&nbsp;&nbsp;\r\n                                        <button class=\"btn borderBtn\" type=\"button\"\r\n                                            (click)=\"updateParameter(x,'cancel')\">Cancel</button>\r\n                                    </td>\r\n                                </tr>\r\n                                <div class=\"actionBtn\">\r\n                                    <div>\r\n                                        <button class=\"btn btn-edit btn-que-edit\" type=\"button\"\r\n                                            (click)=\"updateParameter(x,'edit')\">EDIT</button>\r\n                                    </div>\r\n                                    <div>\r\n                                        <button class=\"btn ques-delete-btn btn-que-delete\" type=\"button\"\r\n                                            (click)=\"deleteChecksheetParameter(x)\">DELETE</button>\r\n                                    </div>\r\n                                </div>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </perfect-scrollbar>\r\n</ng-container>\r\n<ng-container *ngIf=\"isSetChecksheetTab(4) && !isCheckSheetAvailable\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-md-12\">\r\n            <form class=\"checksheetForm\" [formGroup]=\"copyChecksheetForm\"\r\n                (ngSubmit)=\"saveCopyChecksheetDetails(copyChecksheetForm)\" [style.height]=\"'calc(100vh - 11vh)'\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"plant\" class=\" col-form-label\">Plant &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"plant\" id=\"plant\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"plant\" [ngModel]=\"copyChecksheetDetails.plant\"\r\n                                [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                [data]=\"getSortFunction(branchAccessList,'dept')\" [disabled]=\"isCheckSheetAvailable\"\r\n                                (onSelect)=\"onPlantChange($event,'plant')\" (onDeSelect)=\"onChange(false,'plant')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"isDirty && copyChecksheetForm.controls['plant'].invalid && (copyChecksheetForm.controls['plant'].touched || copyChecksheetForm.controls['plant'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['plant'].errors.required\">\r\n                                    Please select plant\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"deptId\" class=\" col-form-label\">Department &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"deptId\" id=\"deptId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"deptId\" ([ngModel])=\"copyChecksheetDetails.dept\"\r\n                                [placeholder]=\"'Select Department'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"departmentList\" [disabled]=\"isCheckSheetAvailable\"\r\n                                (onSelect)=\"onPlantChange($event,'dept')\" (onDeSelect)=\"onChange(false,'dept')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"copyChecksheetForm.controls['deptId'].invalid && (copyChecksheetForm.controls['deptId'].touched || copyChecksheetForm.controls['deptId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['deptId'].errors.required\">\r\n                                    Please select department\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"cellLineId\" class=\" col-form-label\">Cell/Line &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"cellLineId\" id=\"cellLineId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"cellLineId\" ([ngModel])=\"copyChecksheetDetails.cell\"\r\n                                [placeholder]=\"'Select Cell/Line'\" [settings]=\"SingleDropdownSettings\" [data]=\"cellList\"\r\n                                [disabled]=\"isCheckSheetAvailable\" (onSelect)=\"onPlantChange($event,'cell')\"\r\n                                (onDeSelect)=\"onChange(false,'cell')\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"copyChecksheetForm.controls['cellLineId'].invalid && (copyChecksheetForm.controls['cellLineId'].touched || copyChecksheetForm.controls['cellLineId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['cellLineId'].errors.required\">\r\n                                    Please select cell/line\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"workstationId\" class=\" col-form-label\">Workstation &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"workstationId\" id=\"workstationId\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"workstationId\" ([ngModel])=\"copyChecksheetDetails.workstation\"\r\n                                [placeholder]=\"'Select Workstation'\" [settings]=\"SingleDropdownSettings\"\r\n                                [data]=\"workforceList\" [disabled]=\"isCheckSheetAvailable\"\r\n                                (onChange)=\"updateLevelOptions(copyChecksheetForm.get('workstationId').value)\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"copyChecksheetForm.controls['workstationId'].invalid && (copyChecksheetForm.controls['workstationId'].touched || copyChecksheetForm.controls['workstationId'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['workstationId'].errors.required\">\r\n                                    Please select workstation\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"level\" class=\" col-form-label\">Level &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <ng-multiselect-dropdown name=\"level\" id=\"level\"\r\n                                class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                formControlName=\"level\" ([ngModel])=\"copyChecksheetDetails.level\"\r\n                                (onSelect)=\"onPlantChange($event,'level')\" [placeholder]=\"'Select Level'\"\r\n                                [settings]=\"SingleLevelDropdownSettings\" [data]=\"LevelList\"\r\n                                [disabled]=\"isCheckSheetAvailable\">\r\n                            </ng-multiselect-dropdown>\r\n                            <div *ngIf=\"copyChecksheetForm.controls['level'].invalid && (copyChecksheetForm.controls['level'].touched || copyChecksheetForm.controls['level'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['level'].errors.required\">\r\n                                    Please select level\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <label for=\"noOfDays\" class=\" col-form-label\">No. of Days &nbsp;<span\r\n                                class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <input placeholder=\"Enter No. of Days\" class=\"form-control checksheetinputBox\" id=\"noOfDays\"\r\n                                name=\"noOfDays\" ([ngModel])=\"copyChecksheetDetails.noOfDays\" formControlName=\"noOfDays\"\r\n                                type=\"number\" pattern=\"^\\d{1,2}$\">\r\n                            <div *ngIf=\"copyChecksheetForm.controls['noOfDays'].invalid && (copyChecksheetForm.controls['noOfDays'].touched || copyChecksheetForm.controls['noOfDays'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['noOfDays'].errors.required\">\r\n                                    Please enter no. of days\r\n                                </div>\r\n                                <div *ngIf=\"copyChecksheetForm.get('noOfDays').hasError('zeroValue')\">\r\n                                    No. of days can not be 0.\r\n                                </div>\r\n                                <!-- <div *ngIf=\"copyChecksheetForm.get('noOfDays').hasError('negativeValue')\">\r\n                                    No. of days can not be negative.\r\n                                </div> -->\r\n                                <div *ngIf=\"copyChecksheetForm.get('noOfDays').hasError('pattern')\">\r\n                                    Please enter two-digit positive integer no. of days.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                        <label for=\"title\" class=\" col-form-label\">Title &nbsp;<span class=\"astrik\">*</span></label>\r\n                        <div class=\"\">\r\n                            <input placeholder=\"Enter Checksheet Title\" class=\"form-control checksheetinputBox\"\r\n                                id=\"title\" name=\"title\" formControlName=\"title\"\r\n                                ([ngModel])=\"copyChecksheetDetails.title\" type=\"text\" maxlength=\"250\">\r\n                            <div *ngIf=\"copyChecksheetForm.controls['title'].invalid && (copyChecksheetForm.controls['title'].touched || copyChecksheetForm.controls['title'].dirty)\"\r\n                                class=\"custom-errorMsg\">\r\n                                <div *ngIf=\"copyChecksheetForm.controls['title'].errors.required\">\r\n                                    Please enter checksheet title\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"copy-checksheets\" *ngIf=\"checksheetList != null && checksheetList.length > 0\">\r\n                    <perfect-scrollbar [style.height]=\"'calc(100vh - 63vh)'\">\r\n                        <div class=\"row m-t-10\">\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"txt-color-primary\" style=\"text-align:center;font-size:18px;\">\r\n                                    <span>Checksheet List</span>\r\n                                </div>\r\n                                <ng-container class=\"copy-checksheet-container\">\r\n                                    <div>\r\n                                        <div class=\"small-checksheet-card\" *ngFor=\"let x of checksheetList\"\r\n                                            [ngClass]=\"(selectedchecksheet.id==x.id) ? 'active-copy-sheet' : '' \">\r\n                                            <div style=\"margin-left: 10px;\" (click)=\"setChecksheet(x)\">\r\n                                                <div class=\"txt-capitalize checksheet-title\">\r\n                                                    {{x.title}}\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n                            <div class=\"col-md-7 checksheet-list-col\">\r\n                                <ng-container>\r\n                                    <div class=\"main-tab-switcher1\">\r\n                                        <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\"\r\n                                            (click)=\"setMainTab(1)\">\r\n                                            Key\r\n                                            Points\r\n                                        </div>\r\n                                        <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(2)}\"\r\n                                            (click)=\"setMainTab(2)\">\r\n                                            Verification\r\n                                            Parameter\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                                <div class=\"row m-0\">\r\n                                    <div class=\"col-md-12\" *ngIf=\"isCopyChecksheetDetailsAvail\">\r\n                                        <ng-container *ngIf=\"isSetMainTab(1)\">\r\n                                            <div class=\"modal-body\" style=\"padding: 10px 5px 10px 10px;\">\r\n                                                <!-- <perfect-scrollbar [style.height]=\"'calc(100vh - 30vh)'\"> -->\r\n                                                <ng-container formArrayName=\"daysList\">\r\n                                                    <div class=\"daywiseBlock\"\r\n                                                        *ngFor=\"let dayNumForm of daysList().controls; let dayNumIndex = index;let dayNumLast = last;\">\r\n                                                        <ng-container [formGroupName]=\"dayNumIndex\">\r\n                                                            <div class=\"row m-0\">\r\n                                                                <label for=\"dayNo\" class=\"col-sm-4 col-form-label\"\r\n                                                                    style=\"padding-right: 7px !important;\">Day\r\n                                                                    Number &nbsp;<span class=\"astrik\">*</span></label>\r\n                                                                <div class=\"col-sm-6\"\r\n                                                                    style=\"padding-left: 0px !important;padding-right: 7px !important;\">\r\n                                                                    <input placeholder=\"Enter Number Day\"\r\n                                                                        class=\"form-control\" type=\"number\" id=\"dayNo\"\r\n                                                                        name=\"dayNo\" formControlName=\"dayNo\" disabled>\r\n                                                                </div>\r\n                                                                <div class=\"col-sm-2 p-0 text-right\">\r\n                                                                    <button type=\"button\" class=\"btn btn-sm successBtn\"\r\n                                                                        *ngIf=\"dayNumLast\"\r\n                                                                        (click)=\"addDaysRow(daysList().controls.length)\">\r\n                                                                        <i class=\"fa fa-plus\"></i>\r\n                                                                    </button>&nbsp;&nbsp;\r\n                                                                    <button type=\"button\" class=\"btn btn-sm dangerBtn\"\r\n                                                                        (click)=\"removeDayNumRow(dayNumIndex)\"\r\n                                                                        *ngIf=\"daysList().controls.length > 1\">\r\n                                                                        <i class=\"fa fa-times\"></i>\r\n                                                                    </button>&nbsp;&nbsp;\r\n                                                                    <button type=\"button\" class=\"btn btn-sm borderBtn\"\r\n                                                                        (click)=\"dayNumForm.isVisible = (dayNumForm.isVisible) ? false : true\">\r\n                                                                        <i class=\"fa\"\r\n                                                                            [ngClass]=\"(dayNumForm.isVisible) ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r\n                                                                    </button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <ng-container formArrayName=\"pointList\"\r\n                                                                *ngIf=\"!dayNumForm.isVisible\">\r\n                                                                <table class=\"table table-bordered\"\r\n                                                                    style=\"margin-top: 10px;\">\r\n                                                                    <thead>\r\n                                                                        <tr>\r\n                                                                            <th>Key Points &nbsp;<span\r\n                                                                                    class=\"astrik\">*</span></th>\r\n                                                                            <th>Reference\r\n                                                                                <!--&nbsp;<span class=\"astrik\">*</span>-->\r\n                                                                            </th>\r\n                                                                            <th style=\"width: 10%;\"></th>\r\n                                                                        </tr>\r\n                                                                    </thead>\r\n                                                                    <tbody>\r\n                                                                        <tr\r\n                                                                            *ngFor=\"let point of pointList(dayNumIndex).controls; let pointIndex = index;let pointLast = last;\">\r\n                                                                            <ng-container [formGroupName]=\"pointIndex\">\r\n                                                                                <td>\r\n                                                                                    <input type=\"hidden\" name=\"id\"\r\n                                                                                        formControlName=\"id\" />\r\n                                                                                    <input type=\"hidden\" name=\"action\"\r\n                                                                                        formControlName=\"action\" />\r\n                                                                                    <input\r\n                                                                                        placeholder=\"Enter Checksheet Point\"\r\n                                                                                        class=\"form-control\" type=\"text\"\r\n                                                                                        id=\"itemName\" name=\"itemName\"\r\n                                                                                        formControlName=\"itemName\" />\r\n                                                                                    <div *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('itemName').invalid && (pointList(dayNumIndex).controls.at(pointIndex).get('itemName').touched || pointList(dayNumIndex).controls.at(pointIndex).get('itemName').dirty)\"\r\n                                                                                        class=\"custom-errorMsg\">\r\n                                                                                        <div\r\n                                                                                            *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('itemName').errors.required\">\r\n                                                                                            Please enter checksheet\r\n                                                                                            point\r\n                                                                                        </div>\r\n                                                                                    </div>\r\n                                                                                </td>\r\n                                                                                <td>\r\n                                                                                    <input placeholder=\"Enter Reference\"\r\n                                                                                        class=\"form-control\" type=\"text\"\r\n                                                                                        id=\"reference\" name=\"reference\"\r\n                                                                                        formControlName=\"reference\" />\r\n                                                                                    <div *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('reference').invalid && (pointList(dayNumIndex).controls.at(pointIndex).get('reference').touched || pointList(dayNumIndex).controls.at(pointIndex).get('reference').dirty)\"\r\n                                                                                        class=\"custom-errorMsg\">\r\n                                                                                        <div\r\n                                                                                            *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('reference').errors.required\">\r\n                                                                                            Please enter reference\r\n                                                                                        </div>\r\n                                                                                    </div>\r\n                                                                                </td>\r\n                                                                                <td style=\"width: 10%;\">\r\n                                                                                    <button type=\"button\"\r\n                                                                                        class=\"btn btn-sm successBtn\"\r\n                                                                                        (click)=\"addPointsRow(dayNumIndex)\"\r\n                                                                                        *ngIf=\"pointLast\">\r\n                                                                                        <i\r\n                                                                                            class=\"fa fa-plus\"></i></button>&nbsp;&nbsp;\r\n                                                                                    <button type=\"button\"\r\n                                                                                        class=\"btn btn-sm dangerBtn\"\r\n                                                                                        (click)=\"removePointRow(dayNumIndex,pointIndex)\"\r\n                                                                                        *ngIf=\"pointList(dayNumIndex).controls.length > 1\">\r\n                                                                                        <i class=\"fa fa-times\"></i>\r\n                                                                                    </button>\r\n                                                                                </td>\r\n                                                                            </ng-container>\r\n                                                                        </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </ng-container>\r\n                                                        </ng-container>\r\n                                                    </div>\r\n                                                </ng-container>\r\n                                                <!-- </perfect-scrollbar> -->\r\n                                            </div>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"isSetMainTab(2)\">\r\n                                            <div class=\"modal-body\" style=\"padding: 10px;\">\r\n                                                <div class=\"checksheetForm\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-3\" style=\"padding-right: 5px !important;padding-left: 5px !important;\">\r\n                                                            <!-- style=\"padding-right: 5px !important;padding-left: 5px !important;\" -->\r\n                                                            <label for=\"parameterTypeId\"\r\n                                                                class=\"col-sm-12 col-form-label\">Field\r\n                                                                Type &nbsp;<span class=\"astrik\">*</span></label>\r\n                                                            <div class=\"col-sm-12\"\r\n                                                                style=\"padding-right: 5px !important;padding-left: 5px !important;\">\r\n                                                                <ng-multiselect-dropdown name=\"template\"\r\n                                                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                                                    [placeholder]=\"'Select Field Type'\"\r\n                                                                    [settings]=\"SingleParaDropdownSettings\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameterType\"\r\n                                                                    [data]=\"getParaSortFunction(paraTypeList,'paraType')\"\r\n                                                                    formControlName=\"parameterTypeId\"\r\n                                                                    (onSelect)=\"onParameterTypeSelect($event)\"\r\n                                                                    (onDeSelect)=\"onParameterTypeSelect(false)\">\r\n                                                                </ng-multiselect-dropdown>\r\n                                                                <div *ngIf=\"isAddButtonClicked\" class=\"custom-errorMsg\">\r\n                                                                    <div\r\n                                                                        *ngIf=\"copyChecksheetDetails.parameterType == null || copyChecksheetDetails.parameterType.length == 0\">\r\n                                                                        Please select field type\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-3\">\r\n                                                            <!--  style=\"padding-right: 5px !important;padding-left: 5px !important;\" -->\r\n                                                            <label for=\"parameter\"\r\n                                                                class=\"col-sm-12 col-form-label\">Field\r\n                                                                &nbsp;<span class=\"astrik\">*</span>&nbsp;\r\n                                                            </label>\r\n\r\n                                                            <div class=\"col-sm-12\"\r\n                                                                style=\"padding-right: 5px !important;padding-left: 0px !important;\">\r\n                                                                <input placeholder=\"Enter Parameter\"\r\n                                                                    *ngIf=\"isDateTimeParameter && !isNumberParameter && !isTextParameter && !isGapParameter && !isModelParameter\"\r\n                                                                    class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                                                    formControlName=\"parameter\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameter\">\r\n                                                                <input *ngIf=\"isNumberParameter\"\r\n                                                                    placeholder=\"Enter Parameter\"\r\n                                                                    class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                                                    formControlName=\"parameter\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameter\">\r\n                                                                <input\r\n                                                                    *ngIf=\"!isNumberParameter && !isDateTimeParameter && !isModelParameter && !isGapParameter || isTextParameter\"\r\n                                                                    placeholder=\"Enter Parameter\"\r\n                                                                    class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                                                    formControlName=\"parameter\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameter\">\r\n                                                                <input\r\n                                                                    *ngIf=\"isGapParameter && !isDateTimeParameter && !isNumberParameter \"\r\n                                                                    placeholder=\"Enter Gap\"\r\n                                                                    class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                                                    formControlName=\"parameter\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameter\">\r\n                                                                <input *ngIf=\"isModelParameter && !isDateTimeParameter\"\r\n                                                                    placeholder=\"Enter Model\"\r\n                                                                    class=\"form-control checksheetinputBox\" type=\"text\"\r\n                                                                    formControlName=\"parameter\"\r\n                                                                    [(ngModel)]=\"copyChecksheetDetails.parameter\">\r\n                                                                <div *ngIf=\"isAddButtonClicked\" class=\"custom-errorMsg\">\r\n                                                                    <div\r\n                                                                        *ngIf=\"copyChecksheetDetails.parameter == undefined || copyChecksheetDetails.parameter == ''\">\r\n                                                                        Please\r\n                                                                        enter a parameter\r\n                                                                    </div>\r\n                                                                    <div\r\n                                                                        *ngIf=\" isAddButtonClicked && isNumberParameter\">\r\n                                                                        Please\r\n                                                                        enter a number\r\n                                                                    </div>\r\n                                                                    <div\r\n                                                                        *ngIf=\"isAddButtonClicked && isDateTimeParameter\">\r\n                                                                        Please\r\n                                                                        enter a parameter\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"isAddButtonClicked && isGapParameter\">\r\n                                                                        Please\r\n                                                                        enter a gap\r\n                                                                    </div>\r\n                                                                    <div *ngIf=\"isAddButtonClicked && isModelParameter\">\r\n                                                                        Please\r\n                                                                        enter a model\r\n                                                                    </div>\r\n\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-3\"\r\n                                                            style=\"padding-right: 5px !important;padding-left: 5px !important;\">\r\n                                                            <ng-container\r\n                                                                *ngIf=\"(copyChecksheetDetails.parameterType[0].typeName == 'cyclePlan')\">\r\n                                                                <label for=\"cycleValue\"\r\n                                                                    class=\"col-sm-12 col-form-label\">No.\r\n                                                                    of\r\n                                                                    Cycle\r\n                                                                    &nbsp;<span class=\"astrik\">*</span></label>\r\n                                                                <div class=\"col-sm-12\"\r\n                                                                    style=\"padding-right: 5px !important;padding-left: 0px !important;\">\r\n                                                                    <input placeholder=\"Enter No. of Cycle\"\r\n                                                                        onkeydown=\"false\" onkeyup=\"false\"\r\n                                                                        class=\"form-control checksheetinputBox\"\r\n                                                                        type=\"text\"\r\n                                                                        (input)=\"onParameterInputChange($event ,'Number')\"\r\n                                                                        formControlName=\"cycleValue\"\r\n                                                                        [(ngModel)]=\"copyChecksheetDetails.cycleValue\">\r\n                                                                    <div *ngIf=\"isAddButtonClicked\"\r\n                                                                        class=\"custom-errorMsg\">\r\n                                                                        <div\r\n                                                                            *ngIf=\"copyChecksheetDetails.cycleValue == undefined || copyChecksheetDetails.cycleValue == ''\">\r\n                                                                            Please enter cycle plan\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </ng-container>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-3 m-auto\">\r\n                                                            <button style=\"margin-top: 0.2rem;\"\r\n                                                                class=\"btn btn-lg submitBtn event-btn\" type=\"button\"\r\n                                                                (click)=\"addChecksheetParameter()\">\r\n                                                                <span *ngIf=\"addLoader\"\r\n                                                                    class=\"spinner-grow spinner-grow-sm\"\r\n                                                                    role=\"status\"></span>\r\n                                                                <span *ngIf=\"addLoader\" class=\"load-text\">\r\n                                                                    Loading...</span>\r\n                                                                <span *ngIf=\"!addLoader\" class=\"btn-text\">Add </span>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div\r\n                                                        *ngIf=\"isSelectedParaType == 'Datetime' || isSelectedParaType == 'Model'\">\r\n                                                        <!-- <form [formGroup]=\"checksheetParameterFormDate\"\r\n                                                    (ngSubmit)=\"addChecksheetParameter(checksheetParameterFormDate)\"> -->\r\n                                                        <input type=\"hidden\" name=\"checkSheetId\"\r\n                                                            formControlName=\"checkSheetId\" />\r\n                                                        <div class=\"row\" style=\"margin-top: 6px;\">\r\n                                                            <div class=\"col-md-3\"\r\n                                                                style=\"padding-right: 5px !important;padding-left: 5px !important;\">\r\n                                                                <div class=\"col-sm-12\"\r\n                                                                    style=\"padding-right: 5px !important;padding-left: 5px !important;\">\r\n                                                                    <ng-multiselect-dropdown name=\"template\"\r\n                                                                        class=\"custom-multiSelection customWidthForInter assessmentdropDown\"\r\n                                                                        [placeholder]=\"'Select Field Type'\"\r\n                                                                        [settings]=\"SingleParaDropdownSettings\"\r\n                                                                        [(ngModel)]=\"copyChecksheetDetails.parameterType\"\r\n                                                                        [data]=\"getParaSortFunction(paraTypeList,'paraType')\"\r\n                                                                        formControlName=\"parameterTypeId\"\r\n                                                                        (onSelect)=\"onParameterTypeSelect($event)\"\r\n                                                                        (onDeSelect)=\"onParameterTypeSelect(false)\">\r\n                                                                    </ng-multiselect-dropdown>\r\n                                                                    <div *ngIf=\"isAddButtonClicked\"\r\n                                                                        class=\"custom-errorMsg\">\r\n                                                                        <div\r\n                                                                            *ngIf=\"copyChecksheetDetails.parameterType == null || copyChecksheetDetails.parameterType.length == 0\">\r\n                                                                            Please select field type\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-3\">\r\n                                                                <!-- \r\n                                                                style=\"padding-right: 5px !important;padding-left: 5px !important;\" -->\r\n                                                                <div class=\"col-sm-12\"\r\n                                                                style=\"padding-right: 5px !important;padding-left: 0px !important;\">\r\n                                                                    <input placeholder=\"Enter Target Parameter\"\r\n                                                                        *ngIf=\"isDateTimeParameter && !isNumberParameter && !isTextParameter && !isGapParameter && !isModelParameter\"\r\n                                                                        class=\"form-control checksheetinputBox\"\r\n                                                                        [(ngModel)]=\"copyChecksheetDetails.parameter1\"\r\n                                                                        type=\"text\" formControlName=\"parameter\">\r\n                                                                    <input\r\n                                                                        *ngIf=\"isModelParameter && !isDateTimeParameter\"\r\n                                                                        placeholder=\"Enter To Model\"\r\n                                                                        class=\"form-control checksheetinputBox\"\r\n                                                                        [(ngModel)]=\"copyChecksheetDetails.parameter1\"\r\n                                                                        type=\"text\" formControlName=\"parameter\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-3\"></div>\r\n                                                            <div class=\"col-md-3 m-auto\">\r\n                                                                <button style=\"margin-top: 0.2rem;\"\r\n                                                                    class=\"btn btn-lg submitBtn event-btn\" type=\"button\"\r\n                                                                    (click)=\"addChecksheetParameter()\">\r\n                                                                    <span *ngIf=\"addLoader\"\r\n                                                                        class=\"spinner-grow spinner-grow-sm\"\r\n                                                                        role=\"status\"></span>\r\n                                                                    <span *ngIf=\"addLoader\" class=\"load-text\">\r\n                                                                        Loading...</span>\r\n                                                                    <span *ngIf=\"!addLoader\" class=\"btn-text\">Add\r\n                                                                    </span>\r\n                                                                </button>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <!-- </form> -->\r\n                                                    </div>\r\n                                                </div>\r\n                                                <!-- <perfect-scrollbar [style.height]=\"'calc(100vh - 40vh)'\"> -->\r\n                                                <div class\r\n                                                    *ngIf=\"parameterDet.rec != null && parameterDet.rec.length > 0\">\r\n                                                    <table class=\"table table-bordered\">\r\n                                                        <thead>\r\n                                                            <tr>\r\n                                                                <th>Parameter Type</th>\r\n                                                                <th>Parameter</th>\r\n                                                                <th></th>\r\n                                                            </tr>\r\n                                                        </thead>\r\n                                                        <tbody>\r\n                                                            <tr\r\n                                                                *ngFor=\"let x of parameterDet.rec;let paramIndex = index;\">\r\n                                                                <td>{{x.parameterData.typeName || ''}}</td>\r\n                                                                <td>\r\n                                                                    {{x.parameter || ''}}\r\n                                                                    <span\r\n                                                                        *ngIf=\"x.parameterData.typeName == 'cyclePlan'\"><small>(<b>Cycle\r\n                                                                                Value :\r\n                                                                            </b>{{x.cycleValue || 0}})</small></span>\r\n                                                                </td>\r\n                                                                <td>\r\n                                                                    <button type=\"button\" class=\"btn btn-sm dangerBtn\"\r\n                                                                        (click)=\"removeParameter(paramIndex)\">\r\n                                                                        <i class=\"fa fa-times\"></i>\r\n                                                                    </button>\r\n                                                                </td>\r\n                                                            </tr>\r\n                                                        </tbody>\r\n                                                    </table>\r\n                                                </div>\r\n                                                <!-- </perfect-scrollbar> -->\r\n                                            </div>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </perfect-scrollbar>\r\n                </div>\r\n\r\n                <div class=\"row text-right\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button type=\"submit\" class=\"btn submitBtn event-btn\">\r\n                            <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                            <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                            <span *ngIf=\"!submitLoader\" class=\"btn-text\">Submit </span>\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                            (click)=\"close('Cross Click')\">Cancel\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n<!-- Add OJT Checksheet point or Update Popup -->\r\n<ng-template #AddChecksheetPointsModel let-modal let-c=\"close\">\r\n    <app-add-check-sheet-points [close]=\"c\" [dayValue]=\"noOfDays\"></app-add-check-sheet-points>\r\n</ng-template>\r\n\r\n<!-- Add OJT Checksheet Parameter Popup -->\r\n<ng-template #AddChecksheetParametersModel let-modal let-c=\"close\">\r\n    <app-add-check-sheet-parameter [close]=\"c\"></app-add-check-sheet-parameter>\r\n</ng-template>";
      /***/
    },

    /***/
    "GlMh":
    /*!**************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-points/add-check-sheet-points.component.html ***!
      \**************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function GlMh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"modal-header\">\r\n    <h4 style=\"color: #7044cd;font-weight: bold;\" class=\"modal-title headerTitle\" id=\"modal-basic-title\">Add OJT\r\n        Checksheet Points</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross Click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<form class=\"checksheetForm\" [formGroup]=\"checkSheetForm\" (ngSubmit)=\"saveChecksheetForm(checkSheetForm)\"\r\n    autocomplete=\"off\">\r\n    <div class=\"modal-body\" style=\"padding: 10px 5px 10px 10px;\">\r\n        <perfect-scrollbar [style.height]=\"'calc(100vh - 15vh)'\">\r\n            <ng-container formArrayName=\"daysList\">\r\n                <div class=\"daywiseBlock\"\r\n                    *ngFor=\"let dayNumForm of daysList().controls; let dayNumIndex = index;let dayNumLast = last;\">\r\n                    <ng-container [formGroupName]=\"dayNumIndex\">\r\n                        <div class=\"row m-0\">\r\n                            <label for=\"dayNo\" class=\"col-sm-2 col-form-label\">Day Number &nbsp;<span\r\n                                    class=\"astrik\">*</span></label>\r\n                            <div class=\"col-sm-8\">\r\n                                <input placeholder=\"Enter Number Day\" class=\"form-control\" type=\"number\" id=\"dayNo\"\r\n                                    name=\"dayNo\" formControlName=\"dayNo\" disabled>\r\n                            </div>\r\n                            <div class=\"col-sm-2 p-0 text-right\">\r\n                                <button type=\"button\" class=\"btn btn-sm successBtn\"\r\n                                    *ngIf=\"dayNumLast && !selectedDet.isEditPoint\"\r\n                                    (click)=\"addDaysRow(daysList().controls.length)\">\r\n                                    <i class=\"fa fa-plus\"></i>\r\n                                </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" class=\"btn btn-sm dangerBtn\"\r\n                                    (click)=\"removeDayNumRow(dayNumIndex)\" *ngIf=\"daysList().controls.length > 1\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </button>&nbsp;&nbsp;\r\n                                <button type=\"button\" class=\"btn btn-sm borderBtn\"\r\n                                    (click)=\"dayNumForm.isVisible = (dayNumForm.isVisible) ? false : true\">\r\n                                    <i class=\"fa\"\r\n                                        [ngClass]=\"(dayNumForm.isVisible) ? 'fa-chevron-up':'fa-chevron-down'\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <ng-container formArrayName=\"pointList\" *ngIf=\"!dayNumForm.isVisible\">\r\n                            <table class=\"table table-bordered\" style=\"margin-top: 10px;\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Key Points &nbsp;<span class=\"astrik\">*</span></th>\r\n                                        <th>Reference <!--&nbsp;<span class=\"astrik\">*</span>--></th>\r\n                                        <th style=\"width: 10%;\"></th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr\r\n                                        *ngFor=\"let point of pointList(dayNumIndex).controls; let pointIndex = index;let pointLast = last;\">\r\n                                        <ng-container [formGroupName]=\"pointIndex\">\r\n                                            <td>\r\n                                                <input type=\"hidden\" name=\"id\" formControlName=\"id\" />\r\n                                                <input type=\"hidden\" name=\"action\" formControlName=\"action\" />\r\n                                                <input placeholder=\"Enter Checksheet Point\" class=\"form-control\"\r\n                                                    type=\"text\" id=\"itemName\" name=\"itemName\"\r\n                                                    formControlName=\"itemName\" />\r\n                                                <div *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('itemName').invalid && (pointList(dayNumIndex).controls.at(pointIndex).get('itemName').touched || pointList(dayNumIndex).controls.at(pointIndex).get('itemName').dirty)\"\r\n                                                    class=\"custom-errorMsg\">\r\n                                                    <div\r\n                                                        *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('itemName').errors.required\">\r\n                                                        Please enter checksheet point\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <input placeholder=\"Enter Reference\" class=\"form-control\" type=\"text\"\r\n                                                    id=\"reference\" name=\"reference\" formControlName=\"reference\" />\r\n                                                <div *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('reference').invalid && (pointList(dayNumIndex).controls.at(pointIndex).get('reference').touched || pointList(dayNumIndex).controls.at(pointIndex).get('reference').dirty)\"\r\n                                                    class=\"custom-errorMsg\">\r\n                                                    <div\r\n                                                        *ngIf=\"pointList(dayNumIndex).controls.at(pointIndex).get('reference').errors.required\">\r\n                                                        Please enter reference\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td style=\"width: 10%;\">\r\n                                                <button type=\"button\" class=\"btn btn-sm successBtn\"\r\n                                                    (click)=\"addPointsRow(dayNumIndex)\" *ngIf=\"pointLast\">\r\n                                                    <i class=\"fa fa-plus\"></i></button>&nbsp;&nbsp;\r\n                                                <button type=\"button\" class=\"btn btn-sm dangerBtn\"\r\n                                                    (click)=\"(pointList(dayNumIndex).controls.at(pointIndex).get('id').value > 0) ? deleteChecksheetPoint(pointList(dayNumIndex).controls.at(pointIndex).get('id').value,dayNumIndex,pointIndex) :removePointRow(dayNumIndex,pointIndex)\"\r\n                                                    *ngIf=\"pointList(dayNumIndex).controls.length > 1\">\r\n                                                    <i class=\"fa fa-times\"></i>\r\n                                                </button>\r\n                                            </td>\r\n                                        </ng-container>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </perfect-scrollbar>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <button type=\"submit\" class=\"btn submitBtn event-btn\">\r\n                    <span *ngIf=\"submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                    <span *ngIf=\"submitLoader\" class=\"load-text\"> Loading...</span>\r\n                    <span *ngIf=\"!submitLoader\" class=\"btn-text\">Submit </span>\r\n                </button>\r\n                <button type=\"button\" class=\"btn cancelBtn m-l-5\" aria-label=\"Close\" [disabled]=\"submitLoader\"\r\n                    (click)=\"close('Cross Click')\">Cancel\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>";
      /***/
    },

    /***/
    "KNha":
    /*!******************************************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-parameter/add-check-sheet-parameter.component.scss ***!
      \******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KNha(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checksheetinputBox,\n.checksheetinputBox:hover {\n  border-radius: 4px;\n  box-shadow: 0 0 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n\n.checksheetForm {\n  border: 1px solid #7044cd;\n  padding: 0px 5px 10px 0px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWNoZWNrLXNoZWV0LXBhcmFtZXRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiYWRkLWNoZWNrLXNoZWV0LXBhcmFtZXRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVja3NoZWV0aW5wdXRCb3gsXHJcbi5jaGVja3NoZWV0aW5wdXRCb3g6aG92ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAxcHggI2VhZTFlYTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5jaGVja3NoZWV0Rm9ybSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgcGFkZGluZzogMHB4IDVweCAxMHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "SkBa":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-ojt-check-sheet.module.ts ***!
      \*****************************************************************************************************************/

    /*! exports provided: AddOjtCheckSheetModule */

    /***/
    function SkBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOjtCheckSheetModule", function () {
        return AddOjtCheckSheetModule;
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


      var _add_ojt_check_sheet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-ojt-check-sheet-routing.module */
      "+M3u");
      /* harmony import */


      var _add_check_sheet_parameter_add_check_sheet_parameter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-check-sheet-parameter/add-check-sheet-parameter.component */
      "vEll");
      /* harmony import */


      var _add_check_sheet_points_add_check_sheet_points_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-check-sheet-points/add-check-sheet-points.component */
      "jvwK");
      /* harmony import */


      var _add_ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-ojt-check-sheet.component */
      "vIuQ");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "bFKe");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");

      var AddOjtCheckSheetModule = function AddOjtCheckSheetModule() {
        _classCallCheck(this, AddOjtCheckSheetModule);
      };

      AddOjtCheckSheetModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_check_sheet_parameter_add_check_sheet_parameter_component__WEBPACK_IMPORTED_MODULE_4__["AddCheckSheetParameterComponent"], _add_check_sheet_points_add_check_sheet_points_component__WEBPACK_IMPORTED_MODULE_5__["AddCheckSheetPointsComponent"], _add_ojt_check_sheet_component__WEBPACK_IMPORTED_MODULE_6__["AddOjtCheckSheetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _add_ojt_check_sheet_routing_module__WEBPACK_IMPORTED_MODULE_3__["AddOjtCheckSheetRoutingModule"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["TopBarModule"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["LoginInfoModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"]]
      })], AddOjtCheckSheetModule);
      /***/
    },

    /***/
    "WHix":
    /*!************************************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-points/add-check-sheet-points.component.scss ***!
      \************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function WHix(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checksheetForm {\n  background: #fff;\n  position: relative;\n}\n\n.daywiseBlock {\n  border: 1px solid #7044cd;\n  padding: 5px;\n  margin: 0px 10px 5px 0px;\n}\n\n.daywiseBlock:last-child {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWNoZWNrLXNoZWV0LXBvaW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtBQUVSIiwiZmlsZSI6ImFkZC1jaGVjay1zaGVldC1wb2ludHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tzaGVldEZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vIGhlaWdodDogMTByZW07XHJcbn1cclxuLmRheXdpc2VCbG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCA1cHggMHB4O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "b5fi":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-ojt-check-sheet.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b5fi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checksheetinputBox,\n.checksheetinputBox:hover {\n  border-radius: 4px;\n  box-shadow: 0 0 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n\n.col-md-12 .checksheetForm {\n  padding: 10px;\n  background: #fff;\n  border: 1px solid #7044cd;\n  border-radius: 2px;\n  position: relative;\n}\n\n.headerBar {\n  width: 100%;\n}\n\n.headerBar .backArrow {\n  margin: auto;\n  display: inline-block;\n  padding-left: 1rem;\n}\n\n.headerBar .backArrow .feather {\n  color: #7044cd;\n  vertical-align: bottom;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.pointsBlock {\n  padding: 10px;\n  border: 1px solid #7044cd;\n  margin: 10px;\n  border-radius: 2px;\n}\n\n.pointsBlock h4 {\n  margin: 0px;\n  background-color: transparent;\n  color: #7044cd;\n}\n\n.pointsBlock .formElementsBlock,\n.pointsBlock row {\n  background: #fff;\n  cursor: pointer;\n  border: 1px dotted #8792d6;\n  position: relative;\n  padding: 1rem;\n  margin: 0px;\n}\n\n.pointsBlock .formElementsBlock .cheksheet-point-block,\n.pointsBlock row .cheksheet-point-block {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.95rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 2px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.actionBtn {\n  position: absolute;\n  right: 8px;\n  top: 2px;\n  display: inline-flex;\n  z-index: 999;\n}\n\n.overlay-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0);\n  transition: background 0.5s ease;\n  z-index: 999;\n}\n\n.formElementsBlock:hover .overlay-bg {\n  display: block;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.formElementsBlock:hover .btn-que-edit {\n  opacity: 1;\n}\n\n.formElementsBlock:hover .ques-delete-btn {\n  opacity: 1;\n}\n\n.btn-edit {\n  position: relative;\n  top: 4px;\n  margin-right: 3px;\n  margin-top: -2px;\n  height: 30px;\n  border: 1px solid #00bf6f;\n  width: 70px;\n  color: #fff;\n  font-size: 14px;\n  text-transform: uppercase;\n  font-weight: normal;\n  background: #00bf6f;\n  border-radius: 3px;\n  opacity: 0;\n  transition: opacity 0.35s ease;\n}\n\n.ques-delete-btn:hover {\n  color: #fff;\n  background: #e46363;\n  border: 1px solid #e46363;\n}\n\n.ques-delete-btn {\n  position: relative;\n  top: 4px;\n  margin-right: 0px;\n  margin-top: -2px;\n  height: 30px;\n  width: 70px;\n  background: #dd4b39;\n  border: 1px solid #dd4b39;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 12px;\n  opacity: 0;\n  transition: opacity 0.35s ease;\n}\n\n.col-form-label {\n  padding-left: 3px;\n}\n\n.txt-color-primary {\n  color: #7044cd;\n}\n\n.copy-checksheets {\n  background: #fff;\n  position: relative;\n  padding: 10px;\n  border: 1px solid #7044cd;\n  margin: 10px;\n  border-radius: 2px;\n}\n\n.active-copy-sheet {\n  background: #fff;\n  position: relative;\n  padding: 10px;\n  border: 2px solid #7044cd;\n  margin: 10px;\n  border-radius: 2px;\n}\n\n.copy-checksheet-container {\n  /* height: 471px; */\n  overflow: auto;\n}\n\n.small-checksheet-card {\n  box-shadow: 0px 1px 5px #888;\n  margin: 5px;\n  padding: 5px;\n  overflow: hidden;\n  background-clip: padding-box;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  cursor: pointer;\n}\n\n.small-checksheet-card:hover {\n  border: 2px solid #4b4795;\n}\n\n.small-checksheet-card .checksheet-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n}\n\n.checksheet-list-col {\n  height: auto;\n  border-left: 1px solid gray;\n  padding-left: 5px;\n}\n\n.checksheetinputBox,\n.checksheetinputBox:hover {\n  border-radius: 4px;\n  box-shadow: 0 0 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n\n.checksheetForm {\n  border: 1px solid #7044cd;\n  padding: 0px 5px 10px 0px;\n  margin-bottom: 10px;\n}\n\n.main-tab-switcher1 {\n  box-shadow: 0px 0px 5px 1px #e2e2e2;\n  padding: 2px;\n  background: white;\n  border-radius: 25px;\n  display: inline-flex;\n  color: #474747;\n  opacity: 1;\n  /* margin-top: 15px; */\n  position: relative;\n  top: 0px;\n  left: 11px;\n  margin-bottom: 10px;\n}\n\n.mainActiveSwitch {\n  background: #7044cd 0% 0% no-repeat padding-box;\n  padding: 3px 20px;\n  color: white;\n  border-radius: 25px;\n  line-height: 1.5;\n  box-shadow: 0px 0px 12px -2px #8f8d8f;\n}\n\n.main-tab-switch {\n  line-height: 1.5;\n  padding: 3px 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtb2p0LWNoZWNrLXNoZWV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFLQTtFQUVJLFdBQUE7QUFISjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSFI7O0FBS1E7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhaOztBQVFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBT0k7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0FBTFI7O0FBUUk7O0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBTlI7O0FBUVE7O0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdFQUNJO0FBUGhCOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFWSjs7QUFhQTtFQUNJLGNBQUE7RUFDQSw4QkFBQTtBQVZKOztBQWFBO0VBQ0ksVUFBQTtBQVZKOztBQWFBO0VBQ0ksVUFBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBVko7O0FBYUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVZKOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUFWSjs7QUFhQTtFQUNJLGlCQUFBO0FBVko7O0FBYUE7RUFDSSxjQUFBO0FBVko7O0FBYUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVko7O0FBYUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVko7O0FBYUE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFWSjs7QUFhQTtFQUNJLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFWSjs7QUFhQTtFQUNJLHlCQUFBO0FBVko7O0FBY0k7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FBWFI7O0FBZUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQVpKOztBQWVBOztFQUVJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBWko7O0FBZUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlQTtFQUNJLCtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVhKIiwiZmlsZSI6ImFkZC1vanQtY2hlY2stc2hlZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tzaGVldGlucHV0Qm94LFxyXG4uY2hlY2tzaGVldGlucHV0Qm94OmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4ICNlYWUxZWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNvbC1tZC0xMiB7XHJcbiAgICAuY2hlY2tzaGVldEZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gaGVpZ2h0OiAxMHJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlckJhciB7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5iYWNrQXJyb3cge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG5cclxuICAgICAgICAuZmVhdGhlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBvaW50c0Jsb2NrIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybUVsZW1lbnRzQmxvY2ssXHJcbiAgICByb3cge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZCAjODc5MmQ2O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICAuY2hla3NoZWV0LXBvaW50LWJsb2NrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC45NXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjpcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aW9uQnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ub3ZlcmxheS1iZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2U7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5mb3JtRWxlbWVudHNCbG9jazpob3ZlciAub3ZlcmxheS1iZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZvcm1FbGVtZW50c0Jsb2NrOmhvdmVyIC5idG4tcXVlLWVkaXQge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvcm1FbGVtZW50c0Jsb2NrOmhvdmVyIC5xdWVzLWRlbGV0ZS1idG4ge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwYmY2ZjtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGJmNmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyBlYXNlO1xyXG59XHJcblxyXG4ucXVlcy1kZWxldGUtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2U0NjM2MztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNDYzNjM7XHJcbn1cclxuXHJcbi5xdWVzLWRlbGV0ZS1idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGQ0YjM5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyBlYXNlO1xyXG59XHJcblxyXG4uY29sLWZvcm0tbGFiZWwge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuXHJcbi50eHQtY29sb3ItcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogIzcwNDRjZDtcclxufVxyXG5cclxuLmNvcHktY2hlY2tzaGVldHMge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYWN0aXZlLWNvcHktc2hlZXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzA0NGNkO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY29weS1jaGVja3NoZWV0LWNvbnRhaW5lciB7XHJcbiAgICAvKiBoZWlnaHQ6IDQ3MXB4OyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zbWFsbC1jaGVja3NoZWV0LWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggIzg4ODtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc21hbGwtY2hlY2tzaGVldC1jYXJkOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0YjQ3OTU7XHJcbn1cclxuXHJcbi5zbWFsbC1jaGVja3NoZWV0LWNhcmQge1xyXG4gICAgLmNoZWNrc2hlZXQtdGl0bGUge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jaGVja3NoZWV0LWxpc3QtY29sIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2hlY2tzaGVldGlucHV0Qm94LFxyXG4uY2hlY2tzaGVldGlucHV0Qm94OmhvdmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycHggMXB4ICNlYWUxZWE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmNoZWNrc2hlZXRGb3JtIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1haW4tdGFiLXN3aXRjaGVyMXtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAjZTJlMmUyO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAxNXB4OyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAxMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm1haW5BY3RpdmVTd2l0Y2gge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNDRjZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0ycHggIzhmOGQ4ZjtcclxufVxyXG4ubWFpbi10YWItc3dpdGNoIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "jvwK":
    /*!**********************************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-points/add-check-sheet-points.component.ts ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: AddCheckSheetPointsComponent */

    /***/
    function jvwK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCheckSheetPointsComponent", function () {
        return AddCheckSheetPointsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_check_sheet_points_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-check-sheet-points.component.html */
      "GlMh");
      /* harmony import */


      var _add_check_sheet_points_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-check-sheet-points.component.scss */
      "WHix");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var AddCheckSheetPointsComponent = /*#__PURE__*/function () {
        function AddCheckSheetPointsComponent(fb, skillMatrixService, alertService, modalService) {
          var _this = this;

          _classCallCheck(this, AddCheckSheetPointsComponent);

          this.fb = fb;
          this.skillMatrixService = skillMatrixService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.addPoints = {}; // setChecksheetId: any = {};

          this.userDet = {}; // selectedPointsDet: any = {};

          this.submitLoader = false;
          this.selectedDet = {};
          /* Validation for checksheet point(is value not a 0 and not a negative and not a greater than no. of days)
           @Author Jayshri Kolase
           *@Date Sep 1, 2023
          */

          this.onPointInputChange = function (control) {
            var value = control.value;
            var noOfDays = _this.selectedDet.noOfDays;

            if (value === 0) {
              return {
                zeroValue: true
              };
            }

            if (value < 0) {
              return {
                negativeValue: true
              };
            }

            if (value > noOfDays) {
              return {
                greaterThanNoOfDays: true
              };
            }

            return null;
          };
        }

        _createClass(AddCheckSheetPointsComponent, [{
          key: "dayNumForm",
          value: function dayNumForm() {
            return this.fb.group({
              dayNo: '1',
              pointList: this.fb.array([])
            });
          }
        }, {
          key: "pointsForm",
          value: function pointsForm() {
            return this.fb.group({
              itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('0'),
              action: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('ADD')
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.dayValue);
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.checkSheetForm = this.fb.group({
              daysList: this.fb.array([])
            });
            this.addDaysRow(0);
            this.getChecksheetDetails();
          }
        }, {
          key: "daysList",
          value: function daysList() {
            return this.checkSheetForm.get("daysList");
          }
        }, {
          key: "addDaysRow",
          value: function addDaysRow(dayNumIndex) {
            // this.daysList().push(this.fb.group({
            //     dayNo: dayNumIndex + 1,
            //     pointList: this.fb.array([])
            //   }));
            //   this.addPointsRow(dayNumIndex);
            var totalDays = this.selectedDet.noOfDays;
            var currentDays = this.daysList().length;

            if (currentDays >= totalDays) {
              this.alertService.error('Cannot add more days. Maximum number of days reached.');
              return;
            }

            this.daysList().push(this.fb.group({
              dayNo: currentDays + 1,
              pointList: this.fb.array([])
            }));
            this.addPointsRow(currentDays);
          }
        }, {
          key: "removeDayNumRow",
          value: function removeDayNumRow(dayNumIndex) {
            this.daysList().removeAt(dayNumIndex);
            this.updateDayField();
          }
        }, {
          key: "pointList",
          value: function pointList(dayNumIndex) {
            return this.daysList().at(dayNumIndex).get("pointList");
          }
        }, {
          key: "addPointsRow",
          value: function addPointsRow(dayNumIndex) {
            this.pointList(dayNumIndex).push(this.pointsForm());
          }
        }, {
          key: "removePointRow",
          value: function removePointRow(empNumIndex, pointIndex) {
            this.pointList(empNumIndex).removeAt(pointIndex);
          }
        }, {
          key: "updateDayField",
          value: function updateDayField() {
            if (this.daysList().controls != null && this.daysList().controls.length > 0) {
              for (var index = 0; index < this.daysList().controls.length; index++) {
                this.daysList().at(index).get("dayNo").setValue(index + 1);
              }
            }
          }
          /* Get Checksheet Details form Local Storage
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "getChecksheetDetails",
          value: function getChecksheetDetails() {
            if (localStorage.getItem('setChecksheetId')) {
              this.selectedDet = JSON.parse(localStorage.getItem('setChecksheetId'));
            }

            if (localStorage.getItem('selectedPointsDet')) {
              this.selectedDet = JSON.parse(localStorage.getItem('selectedPointsDet'));
            }

            var obj = {
              daysList: []
            }; //  && (this.setChecksheetId.isEditPoint == false || this.setChecksheetId.isEditPoint == undefined)

            if (this.selectedDet) {
              if (this.selectedDet.hasOwnProperty('isEditPoint') && this.selectedDet.isEditPoint) {
                obj.daysList.push(this.selectedDet);
              } else {
                obj.daysList = this.selectedDet.groupPointList;
              }
            }

            console.log(obj);

            if (obj.daysList != null && obj.daysList.length > 0) {
              for (var index = 0; index < obj.daysList.length; index++) {
                if (index != 0) {
                  this.addDaysRow(index);
                }

                this.daysList().controls[index].get('dayNo').setValue(obj.daysList[index].dayNo);

                if (obj.daysList[index].pointList != null && obj.daysList[index].pointList.length > 0) {
                  for (var x = 0; x < obj.daysList[index].pointList.length; x++) {
                    if (x != 0) {
                      this.addPointsRow(index);
                    }

                    this.pointList(index).controls[x].get('id').setValue(obj.daysList[index].pointList[x].checksheetPointId);
                    this.pointList(index).controls[x].get('action').setValue('UPDATE');
                    this.pointList(index).controls[x].get('itemName').setValue(obj.daysList[index].pointList[x].itemName);
                    this.pointList(index).controls[x].get('reference').setValue(obj.daysList[index].pointList[x].reference);
                  }
                }
              }
            }
          }
        }, {
          key: "saveChecksheetForm",
          value: function saveChecksheetForm(form) {
            var _this2 = this;

            console.log(form.value);
            this.submitLoader = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key, index) {
                form.controls[key].markAsDirty();
                _this2.submitLoader = false;
              });
              this.alertService.error('Please fill mandatory data');
              return;
            }

            if (form.value.daysList.length < this.dayValue) {
              this.alertService.error('It is mandatory to add checksheet points for all days.');
              this.submitLoader = false;
              return;
            }

            console.log(this.noOfDays);
            var reqBody = {
              "checkSheetId": this.selectedDet.checkSheetId,
              "createdBy": this.userDet.empId,
              "daysList": form.value.daysList
            }; // let x = 0;
            // if (x == 0) {

            console.log(reqBody); //   this.submitLoader = false;
            //   return;
            // }

            this.skillMatrixService.saveChecksheetPoint('apis/sm/addChecksheetPoint', reqBody).subscribe(function (response) {
              if (response.result) {
                _this2.submitLoader = false; // this.alertService.success("OJT checksheet point saved successfully.");

                _this2.alertService.success("OJT key point saved successfully.");

                _this2.modalService.dismissAll();
              } else {
                if (response.statusCode == 100) {
                  _this2.alertService.error(response.reason);
                } else {
                  _this2.alertService.error('Error occurred while saving data. Please try again');
                }
              }
            }, function (error) {
              _this2.submitLoader = false;
            });
          }
          /* Delete Checksheet Parameter
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "deleteChecksheetPoint",
          value: function deleteChecksheetPoint(id, dayNumIndex, pointIndex) {
            var _this3 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this points?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes remove it',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              customClass: {
                container: 'swalConfirmationModal'
              }
            }).then(function (result) {
              if (result.isConfirmed) {
                var reqbody = {
                  "updatedBy": _this3.userDet.empId,
                  "createdBy": _this3.userDet.empId,
                  "id": id
                };

                _this3.skillMatrixService.deleteChecksheetPoint('apis/sm/deleteChecksheetPoint', reqbody).subscribe(function (data) {
                  if (data.result) {
                    // this.alertService.success("Checksheet point removed successfully");
                    _this3.alertService.success("Key point removed successfully");

                    _this3.removePointRow(dayNumIndex, pointIndex);
                  } else {
                    if (data.statusCode == 100) {
                      _this3.alertService.error(data.reason);
                    } else {
                      _this3.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
          /* Save or Update Checksheet Point
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "saveChecksheetPoint",
          value: function saveChecksheetPoint(checksheetPointsForm) {
            var _this4 = this;

            if (checksheetPointsForm.invalid) {
              Object.keys(checksheetPointsForm.controls).forEach(function (key) {
                checksheetPointsForm.controls[key].markAsDirty();
              });
              return;
            }

            console.log(checksheetPointsForm); // if (checksheetPointsForm.status == "VALID") {
            //   if (this.selectedPointsDet.isEditPoint != true && (this.setChecksheetId.isEditPoint == false || this.setChecksheetId.isEditPoint == undefined) && (this.selectedPointsDet.checksheetPointId == undefined || this.selectedPointsDet.checksheetPointId == 0)) {

            var pointReq = {
              "checkSheetId": this.selectedDet.checkSheetId,
              "createdBy": this.userDet.empId,
              "daysList": [{
                "dayNo": checksheetPointsForm.value.dayNum,
                "pointList": [{
                  "itemName": checksheetPointsForm.value.point,
                  "reference": checksheetPointsForm.value.reference
                }]
              }]
            };
            this.skillMatrixService.saveChecksheetPoint('apis/sm/addChecksheetPoint', pointReq).subscribe(function (response) {
              console.log(response);

              if (response.result) {
                _this4.alertService.success("OJT checksheet point added successfully."); // this.alertService.success("OJT key point added successfully.");


                _this4.modalService.dismissAll();
              } else {
                _this4.alertService.error(response.reason);
              }
            }); // }
            // else {
            //   let pointReq = {
            //     itemName: checksheetPointsForm.value.point,
            //     dayNo: checksheetPointsForm.value.dayNum,
            //     checkSheetId: this.selectedPointsDet.checkSheetId,
            //     id: this.selectedPointsDet.checksheetPointId,
            //     updatedBy: this.userDet.empId,
            //     createdBy: this.userDet.empId
            //   }
            //   this.skillMatrixService.saveChecksheetPoint('apis/sm/updateChecksheetPoint', pointReq).subscribe((response: any) => {
            //     console.log(response);
            //     if (response.result) {
            //       this.alertService.success("OJT checksheet point updated successfully.")
            //       this.modalService.dismissAll();
            //     }
            //     else {
            //       this.alertService.error(response.reason);
            //     }
            //   })
            // }
            // }
          }
        }]);

        return AddCheckSheetPointsComponent;
      }();

      AddCheckSheetPointsComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
        }];
      };

      AddCheckSheetPointsComponent.propDecorators = {
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        dayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        noOfDays: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AddCheckSheetPointsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-check-sheet-points',
        template: _raw_loader_add_check_sheet_points_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_check_sheet_points_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])], AddCheckSheetPointsComponent);
      /***/
    },

    /***/
    "vEll":
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-check-sheet-parameter/add-check-sheet-parameter.component.ts ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: AddCheckSheetParameterComponent */

    /***/
    function vEll(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddCheckSheetParameterComponent", function () {
        return AddCheckSheetParameterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_check_sheet_parameter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-check-sheet-parameter.component.html */
      "EAK5");
      /* harmony import */


      var _add_check_sheet_parameter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-check-sheet-parameter.component.scss */
      "KNha");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var AddCheckSheetParameterComponent = /*#__PURE__*/function () {
        // isNoteShowParameter : boolean = false;
        function AddCheckSheetParameterComponent(apiService, fb, alertService, modalService) {
          var _this5 = this;

          _classCallCheck(this, AddCheckSheetParameterComponent);

          this.apiService = apiService;
          this.fb = fb;
          this.alertService = alertService;
          this.modalService = modalService;
          this.SingleDropdownSettings = {};
          this.isNumberParameter = false;
          this.selectedDet = {};
          this.paraTypeList = [];
          this.isAddButtonClicked = false;
          this.parameterDet = {
            rec: []
          };
          this.userDet = {};
          this.setChecksheetId = {};
          this.selectedParameterDet = {};
          this.isValidateNonNegativeOrZero = false;
          this.submitLoader = false;
          this.addLoader = false;
          this.zeroValue = false;
          this.negativeValue = false;
          this.isTextParameter = true;
          this.disableReferModel = true;

          this.onPointInputChange = function (control) {
            var value = control.value;

            if (value === 0) {
              return {
                zeroValue: true
              };
            }

            if (value < 0) {
              return {
                negativeValue: true
              };
            }

            return null;
          };

          this.onNumberInputChange = function (control) {
            var value = parseInt(control.data);

            if (value === 0) {
              _this5.zeroValue = true;
            }

            if (value < 0) {
              _this5.negativeValue = true;
            }
          };
        }

        _createClass(AddCheckSheetParameterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getParameterTypeList();
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'typeName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.checksheetParameterForm = this.fb.group({
              parameterTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              cycleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              checkSheetId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
            this.checksheetParameterFormDate = this.fb.group({
              parameterTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
              cycleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
              checkSheetId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
            });
            this.getChecksheetDetails();
          }
          /* Get Parameter Type List
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "getParameterTypeList",
          value: function getParameterTypeList() {
            var _this6 = this;

            this.apiService.getParameterTypeList('apis/sm/getParameterTypeList').subscribe(function (response) {
              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  _this6.paraTypeList = response.dataList;
                  _this6.selectedDet.parameterType = [_this6.paraTypeList[0]];
                  console.log(_this6.selectedDet.parameterType);

                  if (_this6.selectedDet.parameterType[0].typeName == 'Text') {
                    _this6.checksheetParameterForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);

                    _this6.checksheetParameterForm.get('cycleValue').clearValidators();

                    _this6.isAddButtonClicked = false;
                    _this6.isNumberParameter = false;
                    _this6.isTextParameter = true;
                    _this6.isDateTimeParameter = false;
                    _this6.isModelParameter = false;
                    _this6.isGapParameter = false;
                  }
                } else {
                  _this6.paraTypeList = [];
                }
              } else {
                _this6.paraTypeList = [];
              }
            });
          }
          /* Get Checksheet Details from Local Storage
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "getChecksheetDetails",
          value: function getChecksheetDetails() {
            if (localStorage.getItem('setChecksheetId')) {
              this.selectedDet = JSON.parse(localStorage.getItem('setChecksheetId'));
            }

            if (localStorage.getItem('selectedParameterDet')) {
              this.selectedDet = JSON.parse(localStorage.getItem('selectedParameterDet'));
            }

            if (this.selectedDet) {
              this.checksheetParameterForm.get('checkSheetId').setValue(this.selectedDet.checkSheetId);

              if (this.selectedDet.hasOwnProperty('isEditParameter')) {}
            }
          }
          /* Save or Update Checksheet Parameter
          @Author Jayshri Kolase
          * @Date August 18, 2023
          */

        }, {
          key: "addChecksheetParameter",
          value: function addChecksheetParameter(form) {
            console.log(form);
            this.isAddButtonClicked = true;
            this.addLoader = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key) {
                form.controls[key].markAsDirty();
              });
              this.addLoader = false;
              return;
            }

            var obj = Object.assign({}, form.value, {
              parameterData: form.value.parameterTypeId[0],
              parameterTypeId: form.value.parameterTypeId[0].id
            });
            var hasCyclePlanParameter = this.selectedDet.parameterType.some(function (param) {
              return param.parameterType === "cyclePlan";
            });

            if (hasCyclePlanParameter && obj.parameterData.typeName === "cyclePlan") {
              this.alertService.error('Only one cycle plan can be added for this checksheet.');
              this.addLoader = false;
            } else {
              this.parameterDet.rec.push(obj);
              this.addLoader = false;
            }

            this.checksheetParameterForm.get('checkSheetId').setValue(this.selectedDet.checkSheetId);
            this.checksheetParameterForm.get('parameter').setValue('');
          }
        }, {
          key: "addChecksheetParameterCopy",
          value: function addChecksheetParameterCopy(form) {
            console.log(form);
            this.isAddButtonClicked = true;
            this.addLoader = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key) {
                form.controls[key].markAsDirty();
              });
              this.addLoader = false;
              return;
            }

            var obj = Object.assign({}, form.value, {
              parameterData: form.value.parameterTypeId[0],
              parameterTypeId: form.value.parameterTypeId[0].id
            });
            var hasCyclePlanParameter = this.selectedDet.parameterType.some(function (param) {
              return param.parameterType === "cyclePlan";
            });

            if (hasCyclePlanParameter && obj.parameterData.typeName === "cyclePlan") {
              this.alertService.error('Only one cycle plan can be added for this checksheet.');
              this.addLoader = false;
            } else {
              this.parameterDet.rec.push(obj);
              this.addLoader = false;
            }

            this.checksheetParameterForm.get('checkSheetId').setValue(this.selectedDet.checkSheetId);
            this.checksheetParameterFormDate.get('parameter').setValue('');
          }
        }, {
          key: "saveChecksheetParameter",
          value: function saveChecksheetParameter() {
            var _this7 = this;

            this.submitLoader = true;
            var req = {
              "updatedBy": this.userDet.empId,
              "createdBy": this.userDet.empId,
              "checkSheetId": this.selectedDet.checkSheetId,
              "parameterList": this.parameterDet.rec
            };

            for (var index = 0; index < req.parameterList.length; index++) {
              if (req.parameterList[index].parameterData.typeName != 'cyclePlan') {
                delete req.parameterList[index]['cycleValue'];
              } // delete req.parameterList[index]['parameterData'];

            }

            console.log(req); // let x = 0;
            // if (x == 0) {
            //   this.submitLoader = false;
            //   return
            // }

            this.apiService.saveChecksheetParameter('apis/sm/addChecksheetParameter', req).subscribe(function (response) {
              _this7.submitLoader = false;

              if (response.result) {
                // this.alertService.success("OJT checksheet parameter saved successfully.")
                _this7.alertService.success("OJT verification parameter saved successfully.");

                _this7.modalService.dismissAll();
              } else {
                if (response.statusCode == 100) {
                  _this7.alertService.error(response.reason);
                } else {
                  _this7.alertService.error('Error occurred while submitting data. Please try again');
                }
              }
            }, function (error) {
              _this7.submitLoader = false;
            });
          }
        }, {
          key: "removeParameter",
          value: function removeParameter(paramIndex) {
            this.parameterDet.rec.splice(paramIndex, 1);
          } // Custom validator function

        }, {
          key: "validateNonNegativeOrZero",
          value: function validateNonNegativeOrZero(inputValue) {
            return inputValue >= 0 && inputValue !== 0;
          } // Event handler for input change

        }, {
          key: "onInputChange",
          value: function onInputChange(event) {
            var inputValue = parseInt(event.target.value);

            if (!this.validateNonNegativeOrZero(inputValue)) {
              this.isValidateNonNegativeOrZero = false;
              console.log('Invalid input');
            } else {
              this.parameterDet.parameter = inputValue;
            }
          }
        }, {
          key: "onParameterInputChange",
          value: function onParameterInputChange(event, type) {
            var newValue = event.target.value;

            if (type === 'Number') {
              newValue = newValue.replace(/[^0-9]/g, "");
              newValue = newValue.replace(/^0+/g, "");

              if (newValue === "" || parseInt(newValue) < 1) {
                newValue = " ";
              }
            } else if (type === 'Text') {
              newValue = newValue.replace(/[^a-zA-Z0-9]/g, "");
            }

            event.target.value = newValue; // console.log(this.ParameterFlag);
          }
          /* to change input fields in parameterTye
           @Author Saurabh salunke
           * @Date Oct 7, 2023
          */

        }, {
          key: "onParameterTypeSelect",
          value: function onParameterTypeSelect(event) {
            this.checksheetParameterForm.get('parameter').reset();
            console.log(event);
            this.disableReferModel = true;
            var selectedParameterType = event.typeName;
            this.isSelectedParaType = event.typeName;

            if (selectedParameterType === 'Text') {
              this.checksheetParameterForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
              this.checksheetParameterForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isTextParameter = true;
              this.isCyclePlan = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false;
            } else if (selectedParameterType === 'Number') {
              this.checksheetParameterForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
              this.checksheetParameterForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = true;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false;
            } else if (selectedParameterType === 'cyclePlan') {
              // this.checksheetParameterForm.get('parameter').clearValidators();
              this.checksheetParameterForm.get('cycleValue').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]*$')]);
              this.isTextParameter = false;
              this.isCyclePlan = true;
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false; // this.isNoteShowParameter = false;
            } else if (selectedParameterType === 'Datetime') {
              this.checksheetParameterForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]);
              this.checksheetParameterForm.get('cycleValue').clearValidators();
              this.isTextParameter = false;
              this.isAddButtonClicked = false;
              this.isGapParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = true;
              this.isModelParameter = false; // this.isNoteShowParameter = false;
            } else if (selectedParameterType === 'Gap') {
              this.checksheetParameterForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = true; // this.isNoteShowParameter = true;
            } else if (selectedParameterType === 'Model') {
              this.checksheetParameterForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isGapParameter = false;
              this.isModelParameter = true; // this.isNoteShowParameter = false;
            } else {
              // Handle other parameter types if necessary
              this.isTextParameter = false;
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isGapParameter = false;
              this.isModelParameter = false;
              this.disableReferModel = false; // this.isNoteShowParameter = false;
            }

            this.checksheetParameterForm.get('parameter').updateValueAndValidity();
            this.checksheetParameterForm.get('cycleValue').updateValueAndValidity();
          }
          /* Save or Update Checksheet Parameter
          @Author Jayshri Kolase
          * @Date August 18, 2023
          */

          /* saveChecksheetParameter(checksheetParameterForm: any) {
            if (checksheetParameterForm.invalid) {
              Object.keys(checksheetParameterForm.controls).forEach(key => {
                checksheetParameterForm.controls[key].markAsDirty();
              });
              return;
            }
            console.log(checksheetParameterForm);
            if (checksheetParameterForm.status == "VALID") {
              if (checksheetParameterForm.value.paraType != null && checksheetParameterForm.value.paraType.length > 0) {
                for (let i = 0; i < checksheetParameterForm.value.paraType.length; i++) {
                  this.parameterDet.parameterTypeId = checksheetParameterForm.value.paraType[i].id;
                }
              }
              // if (this.selectedParameterDet.id == undefined && this.selectedParameterDet.id == '') {
              if (this.selectedParameterDet.isEditParameter != true && (this.setChecksheetId.isEditParameter == false || this.setChecksheetId.isEditParameter == undefined) && (this.selectedParameterDet.id == undefined || this.selectedParameterDet.id == 0)) {
                let reqData = {
                  "updatedBy": this.userDet.empId,
                  "createdBy": this.userDet.empId,
                  "parameter": checksheetParameterForm.value.parameter,
                  "checkSheetId": this.setChecksheetId.checkSheetId,
                  "parameterTypeId": this.parameterDet.parameterTypeId
                }
                console.log(reqData)
                this.apiService.saveChecksheetParameter('apis/sm/addChecksheetParameter', reqData).subscribe((response: any) => {
                  if (response.result) {
                    this.alertService.success("OJT checksheet parameter saved successfully.")
                    this.modalService.dismissAll();
                  }
                  else {
                    this.alertService.error(response.reason)
                  }
                });
              }
              else {
                let reqData = {
                  "updatedBy": this.userDet.empId,
                  "createdBy": this.userDet.empId,
                  "parameter": checksheetParameterForm.value.parameter,
                  "checkSheetId": this.setChecksheetId.checkSheetId,
                  "parameterTypeId": this.parameterDet.parameterTypeId,
                  "parameterId": this.selectedParameterDet.id
                }
                this.apiService.updateChecksheetParameter('apis/sm/updateChecksheetParameter', reqData).subscribe((response: any) => {
                  console.log(response);
                  if (response.result) {
                    this.alertService.success("OJT checksheet parameter updated successfully.");
                    this.modalService.dismissAll();
                  }
                  else {
                    this.alertService.error(response.reason)
                  }
                })
              }
            }
          } */

        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
            if (array && Array.isArray(array) && array.length > 0) {
              if (fieldToSort === "paraType") {
                array.sort(function (a, b) {
                  var nameA = a.typeName ? a.typeName.toUpperCase() : "";
                  var nameB = b.typeName ? b.typeName.toUpperCase() : "";

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
        }]);

        return AddCheckSheetParameterComponent;
      }();

      AddCheckSheetParameterComponent.ctorParameters = function () {
        return [{
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
        }];
      };

      AddCheckSheetParameterComponent.propDecorators = {
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AddCheckSheetParameterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-check-sheet-parameter',
        template: _raw_loader_add_check_sheet_parameter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_check_sheet_parameter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]])], AddCheckSheetParameterComponent);
      /***/
    },

    /***/
    "vIuQ":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/ojt-check-sheet/add-ojt-check-sheet/add-ojt-check-sheet.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: AddOjtCheckSheetComponent */

    /***/
    function vIuQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddOjtCheckSheetComponent", function () {
        return AddOjtCheckSheetComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_ojt_check_sheet_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-ojt-check-sheet.component.html */
      "EhhM");
      /* harmony import */


      var _add_ojt_check_sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-ojt-check-sheet.component.scss */
      "b5fi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var AddOjtCheckSheetComponent = /*#__PURE__*/function () {
        function AddOjtCheckSheetComponent(modalConfig, modalService, apiService, fb, alertService, cdRef) {
          _classCallCheck(this, AddOjtCheckSheetComponent);

          this.modalConfig = modalConfig;
          this.modalService = modalService;
          this.apiService = apiService;
          this.fb = fb;
          this.alertService = alertService;
          this.cdRef = cdRef;
          this.branchAccessList = [];
          this.SingleBranchDropdownSettings = {};
          this.SingleLevelDropdownSettings = {};
          this.SingleDropdownSettings = {};
          this.SingleParaDropdownSettings = {};
          this.userDet = {};
          this.isCheckSheetAvailable = false;
          this.setChecksheetId = {};
          this.editChecksheet = false;
          this.constant = {}; // level: any;

          this.checksheetDetails = {};
          this.LevelList = [];
          this.savedChecksheetDet = {};
          this.checksheetPointList = [];
          this.editChecksheetData = {};
          this.parameterTypeList = [];
          this.dataSpinner = [];
          this.actionLoader = false;
          this.reportBodyCell = {};
          this.departmentList = [];
          this.workforceList = [];
          this.lineId = [];
          this.searchDet = {};
          this.levelList = [];
          this.checksheetList = [];
          this.copyChecksheetDetails = {};
          this.selectedchecksheet = {};
          this.isCopyChecksheetDetailsAvail = false;
          this.paraTypeList = [];
          this.isAddButtonClicked = false;
          this.isNumberParameter = false;
          this.isTextParameter = false;
          this.isCyclePlan = false;
          this.isDateTimeParameter = false;
          this.isModelParameter = false;
          this.isGapParameter = false;
          this.disableReferModel = false;
          this.parameterDet = {
            rec: []
          };
          this.addLoader = false;
          this.submitLoader = false;
          this.isDirty = false;
          this.mainTab = 1;

          this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
          };

          this.mainChecksheetTab = 3;

          this.isSetChecksheetTab = function (tabId) {
            return this.mainChecksheetTab === tabId;
          };
          /* Validation for checksheet point(is value not a 0 and not a negative and not a greater than no. of days)
          @Author Jayshri Kolase
          *@Date Sep 1, 2023
          */


          this.onPointInputChange = function (control) {
            var value = control.value;

            if (value === 0) {
              return {
                zeroValue: true
              };
            }

            if (value < 0) {
              return {
                negativeValue: true
              };
            }

            return null;
          };

          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(AddOjtCheckSheetComponent, [{
          key: "dayNumForm",
          value: function dayNumForm() {
            return this.fb.group({
              dayNo: '1',
              pointList: this.fb.array([])
            });
          }
        }, {
          key: "pointsForm",
          value: function pointsForm() {
            return this.fb.group({
              itemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              reference: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('0'),
              action: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('ADD')
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet')); // console.log(this.userDet)

            this.getLocalStorageChecksheetData();
            this.checksheetForm = this.fb.group({
              plant: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              cellLineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              workstationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              level: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.onPointInputChange])
            });
            this.copyChecksheetForm = this.fb.group({
              plant: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              deptId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              cellLineId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              workstationId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              level: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.onPointInputChange]),
              parameterTypeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              parameter: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              cycleValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
              daysList: this.fb.array([])
            });
            this.getLevelList();
            this.getBranchAccessList();
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
            this.SingleParaDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'typeName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            }; // this.getChecksheetPointList();
          }
        }, {
          key: "daysList",
          value: function daysList() {
            return this.copyChecksheetForm.get("daysList");
          }
        }, {
          key: "setMainTab",
          value: function setMainTab(tabId) {
            this.mainTab = tabId;

            if (this.mainTab == 1) {} else if (this.mainTab == 2) {
              this.getParameterTypeList();
              this.getCopyParameterTypeList();
            }
          }
        }, {
          key: "setcheckSheetTab",
          value: function setcheckSheetTab(tabId) {
            this.mainChecksheetTab = tabId;

            if (this.mainTab == 3) {} else if (this.mainTab == 4) {}
          }
        }, {
          key: "getLocalStorageChecksheetData",
          value:
          /* Get Local Storage Checksheet Data
             @Author Jayshri Kolase
           * @Date August 18, 2023
          */
          function getLocalStorageChecksheetData() {
            if (localStorage.getItem('setChecksheetId')) {
              this.setChecksheetId = JSON.parse(localStorage.getItem('setChecksheetId'));

              if (this.setChecksheetId.isEditable && this.setChecksheetId.checkSheetId == 0) {
                this.editChecksheet = false;
                this.checksheetDetails = {};
              } else {
                console.log(this.setChecksheetId);

                if (this.setChecksheetId.checkSheetId == undefined && this.setChecksheetId.checkSheetId != 0) {
                  this.setChecksheetId.checkSheetId = this.setChecksheetId.id;
                }

                this.getChecksheetDetails(this.setChecksheetId);
              } // this.getChecksheetDetails(this.setChecksheetId);

            } else {}
          }
          /* get skill level list
           @Author Jayshri Kolase
          * @Date August 18, 2023
          */

        }, {
          key: "getLevelList",
          value: function getLevelList() {
            var _this8 = this;

            this.apiService.getLevelList('apis/sm/getLevelList').subscribe(function (response) {
              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  _this8.LevelList = response.dataList;
                } else {
                  _this8.LevelList = [];
                }
              }
            });
          }
          /* Get Branch Access List
          @Author Jayshri Kolase
          * @Date August 18, 2023
          */

        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this9 = this;

            this.apiService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              // console.log(response);
              if (response.result) {
                _this9.branchAccessList = response.branchAccessList;
                console.log(_this9.branchAccessList);

                if (_this9.branchAccessList.length > 0) {// this.filterData.selectedBranch = [this.branchAccessList[0]]; // Set the default value
                } else {
                  _this9.branchAccessList = [{
                    branchId: _this9.userDet.branch.branchId,
                    branchName: _this9.userDet.branch.name
                  }];
                }
              } else {
                // this.branchAccessList = [];
                _this9.branchAccessList = [{
                  branchId: _this9.userDet.branch.branchId,
                  branchName: _this9.userDet.branch.name
                }];
                console.log(_this9.branchAccessList);
              }
            });
          }
          /* Get Checksheet Details
          @Author Jayshri Kolase
          * @Date August 18, 2023
          */

        }, {
          key: "getChecksheetDetails",
          value: function getChecksheetDetails(data) {
            var _this10 = this;

            console.log(data);
            this.apiService.getChecksheetDetails('apis/sm/getChecksheetDetails/' + data.checkSheetId).subscribe(function (response) {
              console.log(response);

              if (response.result) {
                localStorage.removeItem('setChecksheetId');
                /* Point */

                if (response.data.hasOwnProperty('pointList') && response.data.pointList != null && response.data.pointList.length > 0) {
                  var resGroups = response.data.pointList.reduce(function (obj, item) {
                    obj[item.dayNo] = obj[item.dayNo] || [];
                    obj[item.dayNo].push(item);
                    return obj;
                  }, {});
                  response.data.groupPointList = Object.keys(resGroups).map(function (key) {
                    return {
                      dayNo: key,
                      pointList: resGroups[key]
                    };
                  });
                }
                /* Parameter */


                if (response.data.parameterList != null && response.data.parameterList.length > 0) {
                  for (var index = 0; index < response.data.parameterList.length; index++) {
                    response.data.parameterList[index].isActionTaken = false;
                    response.data.parameterList[index].editableParameter = response.data.parameterList[index].parameter;
                    response.data.parameterList[index].editableCycleValue = response.data.parameterList[index].cycleValue;
                  }
                }

                _this10.checksheetDetails = response.data;
                console.log(_this10.checksheetDetails);
                _this10.checksheetDetails.checkSheetId = _this10.checksheetDetails.id;
                _this10.isCheckSheetAvailable = true;
                localStorage.setItem('setChecksheetId', JSON.stringify(_this10.checksheetDetails));

                _this10.checksheetForm.controls['plant'].setValue([{
                  branchId: _this10.checksheetDetails.branchId,
                  branchName: _this10.checksheetDetails.branchName
                }]);

                _this10.checksheetForm.controls['deptId'].setValue([{
                  id: _this10.checksheetDetails.deptId,
                  name: _this10.checksheetDetails.deptName
                }]);

                _this10.checksheetForm.controls['cellLineId'].setValue([{
                  id: _this10.checksheetDetails.lineId,
                  name: _this10.checksheetDetails.lineName
                }]);

                _this10.checksheetForm.controls['workstationId'].setValue([{
                  id: _this10.checksheetDetails.workstationId,
                  name: _this10.checksheetDetails.workstation
                }]);

                _this10.checksheetForm.controls['level'].setValue([{
                  id: _this10.checksheetDetails.skillLevelId,
                  levelName: _this10.checksheetDetails.skillLevel
                }]);

                _this10.checksheetForm.controls['title'].setValue(_this10.checksheetDetails.title);

                _this10.checksheetForm.controls['noOfDays'].setValue(_this10.checksheetDetails.noOfDays);
              }
            });
          }
          /* Save or Update Checksheet Details
          @Author Jayshri Kolase
          * @Date August 18, 2023
          */

        }, {
          key: "saveChecksheetDetails",
          value: function saveChecksheetDetails(checksheetForm) {
            var _this11 = this;

            console.log(checksheetForm);

            if (checksheetForm.invalid) {
              Object.keys(checksheetForm.controls).forEach(function (key) {
                checksheetForm.controls[key].markAsDirty();
              });
              return;
            }

            this.getLocalStorageChecksheetData();

            if (this.setChecksheetId.checkSheetId == undefined || this.setChecksheetId.checkSheetId == "" || this.setChecksheetId.checkSheetId == 0) {
              var checksheetData = {
                branchId: checksheetForm.value.plant[0].branchId,
                deptId: checksheetForm.value.deptId[0].id,
                lineId: checksheetForm.value.cellLineId[0].id,
                workstationId: checksheetForm.value.workstationId[0].id,
                noOfDays: checksheetForm.value.noOfDays,
                skillLvlId: checksheetForm.value.level[0].id,
                title: checksheetForm.value.title
              };
              this.apiService.saveChecksheetDetails('apis/sm/addChecksheet', checksheetData).subscribe(function (response) {
                if (response.result) {
                  _this11.savedChecksheetDet = response.responseData;
                  localStorage.removeItem('setChecksheetId');
                  localStorage.removeItem('savedChecksheetDet');
                  _this11.savedChecksheetDet.isEditable = true;
                  _this11.savedChecksheetDet.isEditPoint = false;
                  _this11.savedChecksheetDet.isEditParameter = false;
                  localStorage.setItem('setChecksheetId', JSON.stringify(_this11.savedChecksheetDet));

                  _this11.alertService.success("OJT checksheet details added successfully.");

                  _this11.isCheckSheetAvailable = true;

                  _this11.getLocalStorageChecksheetData();
                } else {
                  if (response.statusCode == 100) {
                    _this11.alertService.error(response.reason);
                  } else {
                    _this11.alertService.error('Error occurred while submitting data. Please try again');
                  }
                }
              });
            } else {
              var _checksheetData = {
                branchId: checksheetForm.value.plant[0].branchId,
                deptId: checksheetForm.value.deptId[0].id,
                lineId: checksheetForm.value.cellLineId[0].id,
                workstationId: checksheetForm.value.workstationId[0].id,
                noOfDays: checksheetForm.value.noOfDays,
                skillLvlId: checksheetForm.value.level[0].id,
                title: checksheetForm.value.title,
                updatedBy: this.userDet.empId,
                checkSheetId: this.checksheetDetails.checkSheetId
              };
              this.apiService.updateChecksheet('apis/sm/updateChecksheet', _checksheetData).subscribe(function (response) {
                if (response.result) {
                  localStorage.removeItem('savedChecksheetDet');
                  _this11.savedChecksheetDet.isEditable = true;
                  _this11.savedChecksheetDet.isEditPoint = false;
                  _this11.savedChecksheetDet.isEditParameter = false;
                  _this11.savedChecksheetDet.checkSheetId = _this11.setChecksheetId.checkSheetId;
                  localStorage.setItem('setChecksheetId', JSON.stringify(_this11.savedChecksheetDet));

                  _this11.getLocalStorageChecksheetData();

                  _this11.alertService.success("OJT checksheet details updated successfully.");

                  _this11.isCheckSheetAvailable = true;
                } else {
                  if (response.statusCode == 100) {
                    _this11.alertService.error(response.reason);
                  } else {
                    _this11.alertService.error('Error occurred while submitting data. Please try again');
                  }
                }
              });
            }
          }
          /* Open Add Checksheet Points Modal
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "openAddChecksheetPointsModal",
          value: function openAddChecksheetPointsModal(modal) {
            var _this12 = this;

            localStorage.removeItem('selectedPointsDet');
            localStorage.removeItem('selectedParameterDet');
            var data = {};
            data = this.checksheetDetails;
            console.log(this.checksheetDetails);
            data.isEditPoint = false;
            data.checkSheetId = this.checksheetDetails.id;
            localStorage.setItem('setChecksheetId', JSON.stringify(data));
            var modalRef = this.modalService.open(modal, {
              windowClass: 'right'
            });
            modalRef.result.then(function (result) {
              // if (result === "success") {
              _this12.getChecksheetDetails(data); // }

            }, function (reason) {
              _this12.getChecksheetDetails(data);
            });
          }
          /* Open Update Point Modal
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "updatePoint",
          value: function updatePoint(modal, data) {
            var _this13 = this;

            data.isEditPoint = true;
            data.checkSheetId = this.checksheetDetails.id;
            localStorage.setItem('selectedPointsDet', JSON.stringify(data));
            var Obj = JSON.parse(localStorage.getItem('setChecksheetId'));
            var modalRef = this.modalService.open(modal, {
              windowClass: 'right'
            });
            modalRef.result.then(function (result) {
              // if (result === "success") {
              _this13.getChecksheetDetails(Obj); // }

            }, function (reason) {
              _this13.getChecksheetDetails(Obj);
            });
          }
        }, {
          key: "isActionTakenInParam",
          value: function isActionTakenInParam() {
            var flag = false;

            if (this.checksheetDetails.parameterList != null && this.checksheetDetails.parameterList.length > 0) {
              for (var index = 0; index < this.checksheetDetails.parameterList.length; index++) {
                if (this.checksheetDetails.parameterList[index].isActionTaken) {
                  flag = true;
                  break;
                }
              }
            }

            return flag;
          }
        }, {
          key: "getParameterTypeList",
          value: function getParameterTypeList() {
            var _this14 = this;

            if (this.parameterTypeList != null && this.parameterTypeList.length > 0) {
              if (this.checksheetDetails.parameterList != null && this.checksheetDetails.parameterList.length > 0) {
                var _loop = function _loop(index) {
                  _this14.checksheetDetails.parameterList[index].paramObj = _this14.parameterTypeList != null && _this14.parameterTypeList.filter(function (x) {
                    return x.id == _this14.checksheetDetails.parameterList[index].parameterTypeId;
                  }).length > 0 ? _this14.parameterTypeList.filter(function (x) {
                    return x.id == _this14.checksheetDetails.parameterList[index].parameterTypeId;
                  })[0] : '';
                };

                for (var index = 0; index < this.checksheetDetails.parameterList.length; index++) {
                  _loop(index);
                }
              }

              return;
            }

            this.apiService.getParameterTypeList('apis/sm/getParameterTypeList').subscribe(function (response) {
              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  _this14.parameterTypeList = response.dataList;

                  if (_this14.checksheetDetails.parameterList != null && _this14.checksheetDetails.parameterList.length > 0) {
                    var _loop2 = function _loop2(_index) {
                      _this14.checksheetDetails.parameterList[_index].paramObj = _this14.parameterTypeList != null && _this14.parameterTypeList.filter(function (x) {
                        return x.id == _this14.checksheetDetails.parameterList[_index].parameterTypeId;
                      }).length > 0 ? _this14.parameterTypeList.filter(function (x) {
                        return x.id == _this14.checksheetDetails.parameterList[_index].parameterTypeId;
                      })[0] : '';
                    };

                    for (var _index = 0; _index < _this14.checksheetDetails.parameterList.length; _index++) {
                      _loop2(_index);
                    }
                  }
                } else {
                  _this14.parameterTypeList = [];
                }
              } else {
                _this14.parameterTypeList = [];
              }
            });
          }
          /* Open Update Parameter Modal
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "updateParameter",
          value: function updateParameter(data, type) {
            if (type == '') {
              this.updateParameterData(data);
            } else {
              var flag = type == 'cancel' ? false : true;
              data.isActionTaken = flag;
              data.editableCycleValue = data.cycleValue;
              data.editableParameter = data.parameter;
            }
          }
        }, {
          key: "updateParameterData",
          value: function updateParameterData(data) {
            var _this15 = this;

            this.actionLoader = true;

            if (!data.editableParameter) {
              this.alertService.error('Please enter paramater');
              this.actionLoader = false;
              return;
            }

            if (data.paramObj.typeCaption == 'CyclePlan' && !data.editableCycleValue) {
              this.alertService.error('Please enter cycle value');
              this.actionLoader = false;
              return;
            }

            var req = {
              "updatedBy": this.userDet.empId,
              "parameter": data.editableParameter,
              "checkSheetId": this.checksheetDetails.checkSheetId,
              "parameterTypeId": data.parameterTypeId,
              "parameterId": data.id
            };

            if (data.paramObj.typeCaption == 'CyclePlan') {
              req.cycleValue = data.editableCycleValue;
            }

            this.apiService.updateChecksheetParameter('apis/sm/updateChecksheetParameter', req).subscribe(function (response) {
              _this15.actionLoader = false;

              if (response.result) {
                // this.alertService.success("OJT checksheet parameter updated successfully.");
                _this15.alertService.success("OJT verification parameter updated successfully.");

                _this15.getChecksheetDetails(_this15.checksheetDetails);
              } else {
                if (response.statusCode == 100) {
                  _this15.alertService.error(response.reason);
                } else {
                  _this15.alertService.error('Error occurred while updating data. Please try again');
                }
              }
            }, function (error) {
              _this15.actionLoader = false;
            });
          }
          /* Delete Checksheet Point
            @Author Jayshri Kolase
            * @Date August 18, 2023
          */

        }, {
          key: "deleteChecksheetPoint",
          value: function deleteChecksheetPoint(data) {
            var _this16 = this;

            // console.log(data)
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this point ?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes remove it',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                var reqbody = {
                  "checkSheetId": _this16.checksheetDetails.checkSheetId,
                  "dayNo": data.dayNo
                };

                _this16.apiService.deleteChecksheetPoint('apis/sm/deleteChecksheetPoint', reqbody).subscribe(function (data) {
                  if (data.result) {
                    // this.alertService.success("Checksheet point removed sucessfully");
                    _this16.alertService.success("Key point removed sucessfully");

                    _this16.getChecksheetDetails(_this16.setChecksheetId);
                  } else {
                    if (data.statusCode == 100) {
                      _this16.alertService.error(data.reason);
                    } else {
                      _this16.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
          /* Delete Checksheet Parameter
           @Author Jayshri Kolase
           * @Date August 18, 2023
          */

        }, {
          key: "deleteChecksheetParameter",
          value: function deleteChecksheetParameter(data) {
            var _this17 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this parameter?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes remove it',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                var reqbody = {
                  "parameterId": data.id
                };

                _this17.apiService.deleteChecksheetPoint('apis/sm/deleteChecksheetParameter', reqbody).subscribe(function (data) {
                  if (data.result) {
                    // this.alertService.success("Checksheet parameter removed successfully");
                    _this17.alertService.success("Verification parameter removed successfully");

                    _this17.getChecksheetDetails(_this17.setChecksheetId);
                  } else {
                    if (data.statusCode == 100) {
                      _this17.alertService.error(data.reason);
                    } else {
                      _this17.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
            // console.log(array, fieldToSort);
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
          /* get Department List
             @Author Simran
             * @Date 27/10/2023
            */

        }, {
          key: "getDepartmentList",
          value: function getDepartmentList(branch) {
            var _this18 = this;

            this.apiService.getDepartmentByBranch("getdepartmentlistbybranchid/" + branch).subscribe(function (res) {
              if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                  /* Use For Add Screen */
                  _this18.departmentList = _this18.setArray(res.deptList, "deptId", "deptName");
                  _this18.departmentList = _this18.sortFunction(_this18.departmentList, "deptName");
                  _this18.searchDet.dept = [_this18.departmentList[0]];

                  if (!_this18.searchDet.addForm) {
                    /* Use For Filter */
                    _this18.searchDet.departmentList = _this18.setArray(res.deptList, "deptId", "deptName"); // this.searchDet.deptIds = this.searchDet.departmentList;
                  }
                } else {
                  _this18.searchDet.departmentList = [];
                }
              } else {
                _this18.searchDet.departmentList = [];
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
            var _this19 = this;

            console.log(ev);
            this.reportBodyCell = {
              branchId: this.branchId,
              deptId: ev
            };
            this.apiService.getCellList("apis/sm/getCellList", this.reportBodyCell).subscribe(function (res) {
              console.log(res);

              if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                  /* Use For Add Screen */
                  _this19.cellList = _this19.setArray(res.dataList, "lineId", "lineName");
                  console.log(_this19.cellList);
                  _this19.cellList = _this19.sortFunction(_this19.cellList, "lineName");
                  _this19.searchDet.dept = [_this19.cellList[0]];
                  /* Use For Filter */

                  _this19.searchDet.cellList = _this19.setArray(res.dataList, "lineId", "lineName");
                } else {
                  _this19.cellList = [];
                  _this19.searchDet.cellList = [];
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
            var _this20 = this;

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

            this.apiService.getWorkforceDeploymentData("apis/sm/getWorkstationList", req).subscribe(function (res) {
              if (res.result) {
                console.log(res);

                if (res.dataList != null && res.dataList.length > 0) {
                  _this20.workforceList = _this20.setArray(res.dataList, "id", "workstation");
                  _this20.workforceList = _this20.sortFunction(_this20.workforceList, "workstation");
                  _this20.searchDet.workforceList = [_this20.workforceList[0]];
                  console.log(_this20.workforceList);
                } else {
                  _this20.workforceList = [];
                }
              } else {
                _this20.workforceList = [];
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
                this.resetFormField(this.checksheetForm, "cellLineId");
                this.resetFormField(this.checksheetForm, "workstationId");
                this.getCellList(this.deptId); // this.resetFormField(this.checksheetForm, 'lineId')
              }

              if (type == "plant") {
                console.log(ev);
                this.branchId = ev.branchId;
                this.searchDet.deptIds = [];
                this.resetFormField(this.checksheetForm, "deptId");
                this.resetFormField(this.checksheetForm, "cellLineId");
                this.resetFormField(this.checksheetForm, "workstationId");
                this.getDepartmentList(this.branchId);

                if (this.searchDet.addForm) {
                  console.log("inside"); // this.resetFormField(this.checksheetForm, "deptId");
                }
              }

              if (type == "cell") {
                console.log(ev);
                this.lineId = ev.id;
                this.searchDet.work = [];
                this.resetFormField(this.checksheetForm, "workstationId");
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
          key: "updateLevelOptions",
          value: function updateLevelOptions(workstationId) {
            console.log(workstationId);
            this.checksheetForm.get('level').setValue(''); // Clear the selection

            var filteredLevels = this.levelList.filter(function (level) {
              return level.workstationId === workstationId;
            });
            this.levelList = _toConsumableArray(filteredLevels);
          }
          /*
          Single Select Dropdown onChange function
          Author: Mahesh W
          Date : 21 Aug 2023
          */

        }, {
          key: "onPlantChange",
          value: function onPlantChange(ev, type) {
            if (ev) {
              console.log(ev);

              if (type == "dept") {
                this.cellList = [];
                this.copyChecksheetDetails.deptId = ev.id;
                this.deptId = ev.id;
                this.searchDet.lineId = [];
                this.copyChecksheetDetails.level = [];
                this.resetFormField(this.copyChecksheetForm, "level");
                this.checksheetList = [];
                this.resetFormField(this.copyChecksheetForm, "cellLineId");
                this.resetFormField(this.copyChecksheetForm, "workstationId");
                this.getCellList(this.deptId); // this.getChecksheetList();
              }

              if (type == "plant") {
                console.log(ev);
                this.isDirty = true;
                this.copyChecksheetDetails.branchId = ev.branchId;
                this.branchId = ev.branchId;
                this.searchDet.deptIds = [];
                this.copyChecksheetDetails.level = [];
                this.resetFormField(this.copyChecksheetForm, "level");
                this.checksheetList = [];
                this.resetFormField(this.copyChecksheetForm, "deptId");
                this.resetFormField(this.copyChecksheetForm, "cellLineId");
                this.resetFormField(this.copyChecksheetForm, "workstationId");
                this.getDepartmentList(this.branchId);
                this.checksheetList = []; // this.getChecksheetList();

                if (this.searchDet.addForm) {
                  console.log("inside");
                }
              }

              if (type == "cell") {
                console.log(ev);
                this.copyChecksheetDetails.lineId = ev.id;
                this.lineId = ev.id;
                this.searchDet.work = [];
                this.copyChecksheetDetails.level = [];
                this.resetFormField(this.copyChecksheetForm, "level");
                this.checksheetList = [];
                this.resetFormField(this.copyChecksheetForm, "workstationId");
                this.getWorkforceList(this.lineId);
                this.checksheetList = []; // this.getChecksheetList();
              }

              if (type == "level") {
                console.log(ev);
                this.copyChecksheetDetails.skillLevelId = ev.id;
                this.getChecksheetList();
              }
            } else {
              if (type == "plant") {
                if (this.searchDet) {
                  this.departmentList = [];
                  this.searchDet.departmentList = [];
                  this.cellList = [];
                  this.searchDet.cellList = [];
                  this.searchDet.lineId = [];
                  this.checksheetList = [];
                } else {}
              } else if (type == 'dept') {
                this.cellList = [];
                this.searchDet.cellList = [];
                this.searchDet.lineId = [];
                this.checksheetList = [];
              }
            }
          }
          /* Get Checksheet List
          @Author - Jayshri Kolase
          @Date January 30, 2024 */

        }, {
          key: "getChecksheetList",
          value: function getChecksheetList() {
            var _this21 = this;

            this.checksheetList = [];
            var reqData = {
              createdBy: this.userDet.empId,
              orgId: this.userDet.organization.orgId,
              updatedBy: this.userDet.empId
            };

            if (this.copyChecksheetDetails.branchId != undefined && this.copyChecksheetDetails.branchId != '') {
              reqData.branchId = this.copyChecksheetDetails.branchId;
            }

            if (this.copyChecksheetDetails.deptId != undefined && this.copyChecksheetDetails.deptId != '') {
              reqData.deptId = this.copyChecksheetDetails.deptId;
            }

            if (this.copyChecksheetDetails.lineId != undefined && this.copyChecksheetDetails.lineId != '') {
              reqData.lineId = this.copyChecksheetDetails.lineId;
            }

            if (this.copyChecksheetDetails.skillLevelId != undefined && this.copyChecksheetDetails.skillLevelId != '') {
              reqData.skillLvlId = this.copyChecksheetDetails.skillLevelId;
            }

            console.log(reqData);
            this.apiService.getChecksheetList('apis/sm/getChecksheetList', reqData).subscribe(function (response) {
              if (response.result) {
                _this21.checksheetList = response.dataList;

                var filteredChecksheetList = _this21.checksheetList.filter(function (item) {
                  return item.title !== _this21.searchDet.title;
                });

                if (filteredChecksheetList != null && filteredChecksheetList.length > 0) {
                  if (_this21.checksheetList.length === 1 && _this21.checksheetList[0].title === _this21.searchDet.title) {
                    _this21.checksheetList = [];
                  } else {
                    filteredChecksheetList = _this21.sortFunction(filteredChecksheetList, "title");
                    _this21.checksheetList = filteredChecksheetList;
                  }
                } else {
                  _this21.checksheetList = [];
                  _this21.searchDet.checksheetList = [];
                }
              } else {
                if (response.statusCode == 100) {} else {}
              }
            });
          }
          /* Get Checksheet Details Onchange function
          @Author - Jayshri Kolase
          @Date Feb 20, 2024 */

        }, {
          key: "getSelectedChecksheetDetails",
          value: function getSelectedChecksheetDetails(checkSheetId) {
            var _this22 = this;

            this.isCopyChecksheetDetailsAvail = false; // Clear parameterDet.rec before populating with new data

            this.parameterDet.rec = []; // Clear daysList before populating with new data

            var daysList = this.daysList();

            if (daysList) {
              daysList.clear();
            }

            this.apiService.getChecksheetDetails('apis/sm/getChecksheetDetails/' + checkSheetId).subscribe(function (response) {
              if (response.result) {
                if (response.data.hasOwnProperty('pointList') && response.data.pointList != null && response.data.pointList.length > 0) {
                  var resGroups = response.data.pointList.reduce(function (obj, item) {
                    obj[item.dayNo] = obj[item.dayNo] || [];
                    obj[item.dayNo].push(item);
                    return obj;
                  }, {});
                  response.data.groupPointList = Object.keys(resGroups).map(function (key) {
                    return {
                      dayNo: key,
                      pointList: resGroups[key]
                    };
                  });
                }

                if (response.data.groupPointList != null && response.data.groupPointList.length > 0) {
                  for (var index = 0; index < response.data.groupPointList.length; index++) {
                    if (index < response.data.groupPointList.length) {
                      _this22.addcopyDaysRow(index);
                    }

                    _this22.daysList().controls[index].get('dayNo').setValue(response.data.groupPointList[index].dayNo);

                    if (response.data.groupPointList[index].pointList != null && response.data.groupPointList[index].pointList.length > 0) {
                      for (var x = 0; x < response.data.groupPointList[index].pointList.length; x++) {
                        // Add a new FormGroup to pointList
                        _this22.pointList(index).push(_this22.pointsForm()); // Now you can set values for the newly added FormGroup


                        var lastIndex = _this22.pointList(index).length - 1;

                        _this22.pointList(index).controls[lastIndex].get('id').setValue('0');

                        _this22.pointList(index).controls[lastIndex].get('action').setValue('ADD');

                        _this22.pointList(index).controls[lastIndex].get('itemName').setValue(response.data.groupPointList[index].pointList[x].itemName);

                        _this22.pointList(index).controls[lastIndex].get('reference').setValue(response.data.groupPointList[index].pointList[x].reference);
                      }
                    }
                  }
                }

                if (response.data.parameterList != null && response.data.parameterList.length > 0) {
                  _this22.checksheetDetails.copyCheckSheetId = response.data.id;

                  for (var _index2 = 0; _index2 < response.data.parameterList.length; _index2++) {
                    var obj = Object.assign({}, {
                      parameterData: {
                        typeName: response.data.parameterList[_index2].parameterType,
                        typeCaption: response.data.parameterList[_index2].parameterType,
                        id: response.data.parameterList[_index2].parameterTypeId
                      },
                      parameterTypeId: response.data.parameterList[_index2].parameterTypeId,
                      parameter: response.data.parameterList[_index2].parameter
                    });
                    var hasCyclePlanParameter = response.data.parameterList[_index2].parameterType === "cyclePlan";
                    obj.cycleValue = response.data.parameterList[_index2].cycleValue;

                    if (obj.parameterData.typeName === "cyclePlan") {
                      obj.cycleValue = response.data.parameterList[_index2].cycleValue;
                    }

                    _this22.parameterDet.rec.push(obj); // }

                  }
                }

                _this22.filteredChecksheetDetails = response.data;

                if (_this22.filteredChecksheetDetails.groupPointList || _this22.filteredChecksheetDetails.parameterList) {
                  _this22.isCopyChecksheetDetailsAvail = true;
                }

                _this22.setMainTab(1);
              }
            });
          }
        }, {
          key: "setChecksheet",
          value: function setChecksheet(data) {
            console.log(data);
            this.selectedchecksheet.id = data.id;
            this.getSelectedChecksheetDetails(this.selectedchecksheet.id);
          }
          /* Get Parameter Type List for copy functionality
          @Author Jayshri Kolase
          * @Date Feb 03, 2024
          */

        }, {
          key: "getCopyParameterTypeList",
          value: function getCopyParameterTypeList() {
            var _this23 = this;

            this.apiService.getParameterTypeList('apis/sm/getParameterTypeList').subscribe(function (response) {
              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  _this23.paraTypeList = response.dataList;
                  _this23.copyChecksheetDetails.parameterType = [_this23.paraTypeList[0]];
                  console.log(_this23.copyChecksheetDetails.parameterType);

                  if (_this23.copyChecksheetDetails.parameterType[0].typeName == 'Text') {
                    _this23.copyChecksheetForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);

                    if (_this23.copyChecksheetForm.get('cycleValue')) {
                      _this23.copyChecksheetForm.get('cycleValue').clearValidators();
                    }

                    _this23.isAddButtonClicked = false;
                    _this23.isNumberParameter = false;
                    _this23.isTextParameter = true;
                    _this23.isDateTimeParameter = false;
                    _this23.isModelParameter = false;
                    _this23.isGapParameter = false;
                  }
                } else {
                  _this23.paraTypeList = [];
                }
              } else {
                _this23.paraTypeList = [];
              }
            });
          }
          /* get Parameter Sort Function copy Checksheet Parameter
           @Author Jayshri Kolase
           * @Date Feb 03, 2024
          */

        }, {
          key: "getParaSortFunction",
          value: function getParaSortFunction(array, fieldToSort) {
            if (array && Array.isArray(array) && array.length > 0) {
              if (fieldToSort === "paraType") {
                array.sort(function (a, b) {
                  var nameA = a.typeName ? a.typeName.toUpperCase() : "";
                  var nameB = b.typeName ? b.typeName.toUpperCase() : "";

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
          /* to change input fields in parameterTye
          @Author Jayshri Kolase
          * @Date Feb 03, 2024
          */

        }, {
          key: "onParameterTypeSelect",
          value: function onParameterTypeSelect(event) {
            // this.copyChecksheetForm.get('parameter').reset();
            console.log(event);
            this.disableReferModel = true;
            var selectedParameterType = event.typeName;
            this.isSelectedParaType = event.typeName;

            if (selectedParameterType === 'Text') {
              this.copyChecksheetForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.copyChecksheetForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isTextParameter = true;
              this.isCyclePlan = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false;
            } else if (selectedParameterType === 'Number') {
              this.copyChecksheetForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.copyChecksheetForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = true;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false;
            } else if (selectedParameterType === 'cyclePlan') {
              this.copyChecksheetForm.get('cycleValue').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]*$')]);
              this.isTextParameter = false;
              this.isCyclePlan = true;
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = false;
            } else if (selectedParameterType === 'Datetime') {
              this.copyChecksheetForm.get('parameter').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
              this.copyChecksheetForm.get('cycleValue').clearValidators();
              this.isTextParameter = false;
              this.isAddButtonClicked = false;
              this.isGapParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = true;
              this.isModelParameter = false;
            } else if (selectedParameterType === 'Gap') {
              this.copyChecksheetForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isModelParameter = false;
              this.isGapParameter = true;
            } else if (selectedParameterType === 'Model') {
              this.copyChecksheetForm.get('cycleValue').clearValidators();
              this.isAddButtonClicked = false;
              this.isTextParameter = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isGapParameter = false;
              this.isModelParameter = true;
            } else {
              // Handle other parameter types if necessary
              this.isTextParameter = false;
              this.isAddButtonClicked = false;
              this.isNumberParameter = false;
              this.isDateTimeParameter = false;
              this.isGapParameter = false;
              this.isModelParameter = false;
              this.disableReferModel = false;
            }

            this.copyChecksheetForm.get('parameter').updateValueAndValidity();
            this.copyChecksheetForm.get('cycleValue').updateValueAndValidity();
          }
          /* Save or Update copy Checksheet Parameter
           @Author Jayshri Kolase
           * @Date Feb 03, 2024
          */

        }, {
          key: "addChecksheetParameter",
          value: function addChecksheetParameter() {
            console.log("form");
            this.isAddButtonClicked = true;
            this.addLoader = true;

            if (this.copyChecksheetDetails.parameterType == null || this.copyChecksheetDetails.parameterType.length == 0) {
              this.addLoader = false;
              return;
            }

            if (this.copyChecksheetDetails.parameter == undefined || this.copyChecksheetDetails.parameter == '') {
              this.addLoader = false;
              return;
            }

            var obj = Object.assign({}, {
              parameterData: this.copyChecksheetDetails.parameterType[0],
              parameterTypeId: this.copyChecksheetDetails.parameterType[0].id,
              parameter: this.copyChecksheetDetails.parameter
            });
            var hasCyclePlanParameter = this.copyChecksheetDetails.parameterType.some(function (param) {
              return param.parameterType === "cyclePlan";
            });
            obj.cycleValue = this.copyChecksheetDetails.cycleValue;

            if (obj.parameterData.typeName === "cyclePlan") {
              obj.cycleValue = this.copyChecksheetDetails.cycleValue;
            }

            if (hasCyclePlanParameter && obj.parameterData.typeName === "cyclePlan") {
              this.alertService.error('Only one cycle plan can be added for this checksheet.');
              this.addLoader = false;
            } else {
              this.parameterDet.rec.push(obj);
              this.addLoader = false;
            }
          }
          /* remove or Update copy Checksheet Parameter
          @Author Jayshri Kolase
          * @Date Feb 03, 2024
          */

        }, {
          key: "removeParameter",
          value: function removeParameter(paramIndex) {
            this.parameterDet.rec.splice(paramIndex, 1);
          }
          /* on Parameter Input Change copy Checksheet Parameter
          @Author Jayshri Kolase
          * @Date Feb 03, 2024
          */

        }, {
          key: "onParameterInputChange",
          value: function onParameterInputChange(event, type) {
            var newValue = event.target.value;

            if (type === 'Number') {
              newValue = newValue.replace(/[^0-9]/g, "");
              newValue = newValue.replace(/^0+/g, "");

              if (newValue === "" || parseInt(newValue) < 1) {
                newValue = " ";
              }
            } else if (type === 'Text') {
              newValue = newValue.replace(/[^a-zA-Z0-9]/g, "");
            }

            event.target.value = newValue;
          }
        }, {
          key: "pointList",
          value: function pointList(dayNumIndex) {
            return this.daysList().at(dayNumIndex).get("pointList");
          }
        }, {
          key: "addPointsRow",
          value: function addPointsRow(dayNumIndex) {
            this.pointList(dayNumIndex).push(this.pointsForm());
          }
        }, {
          key: "addDaysRow",
          value: function addDaysRow(dayNumIndex) {
            this.daysList().push(this.fb.group({
              dayNo: dayNumIndex + 1,
              pointList: this.fb.array([])
            }));
            this.addPointsRow(dayNumIndex);
            var totalDays = this.copyChecksheetDetails.noOfDays;
            var currentDays = this.daysList().length;

            if (currentDays >= totalDays) {
              this.alertService.error('Cannot add more days. Maximum number of days reached.');
              return;
            }
          }
        }, {
          key: "addcopyDaysRow",
          value: function addcopyDaysRow(dayNumIndex) {
            this.daysList().push(this.fb.group({
              dayNo: dayNumIndex + 1,
              pointList: this.fb.array([])
            })); // this.addPointsRow(dayNumIndex);

            var totalDays = this.copyChecksheetDetails.noOfDays;
            var currentDays = this.daysList().length;

            if (currentDays >= totalDays) {
              this.alertService.error('Cannot add more days. Maximum number of days reached.');
              return;
            }
          }
        }, {
          key: "removePointRow",
          value: function removePointRow(empNumIndex, pointIndex) {
            this.pointList(empNumIndex).removeAt(pointIndex);
          }
        }, {
          key: "updateDayField",
          value: function updateDayField() {
            if (this.daysList().controls != null && this.daysList().controls.length > 0) {
              for (var index = 0; index < this.daysList().controls.length; index++) {
                this.daysList().at(index).get("dayNo").setValue(index + 1);
              }
            }
          }
        }, {
          key: "removeDayNumRow",
          value: function removeDayNumRow(dayNumIndex) {
            this.daysList().removeAt(dayNumIndex);
            this.updateDayField();
          }
        }, {
          key: "saveCopyChecksheetDetails",
          value: function saveCopyChecksheetDetails(form) {
            var _this24 = this;

            // this.submitLoader = true
            this.isDirty = true; // Create a new form group containing only the desired fields

            var requiredFields = this.fb.group({
              plant: form.controls['plant'],
              deptId: form.controls['deptId'],
              cellLineId: form.controls['cellLineId'],
              workstationId: form.controls['workstationId'],
              level: form.controls['level'],
              title: form.controls['title'],
              noOfDays: form.controls['noOfDays']
            }); // Check if the required fields are valid

            if (requiredFields.invalid) {
              Object.keys(requiredFields.controls).forEach(function (key) {
                requiredFields.controls[key].markAsDirty();
              });
              return;
            }

            console.log(form);

            if (form.value.daysList.length > form.value.noOfDays) {
              this.alertService.error('Cannot add more days. Maximum number of days reached.');
              return;
            }

            if (form.value.daysList.length < form.value.noOfDays) {
              this.alertService.error('It is mandatory to add checksheet points for all days.');
              this.submitLoader = false;
              return;
            }

            var req = {
              "branchId": parseInt(form.value.plant[0].branchId),
              "deptId": parseInt(form.value.deptId[0].id),
              "lineId": parseInt(form.value.cellLineId[0].id),
              "workstationId": parseInt(form.value.workstationId[0].id),
              "noOfDays": form.value.noOfDays,
              "skillLvlId": parseInt(form.value.level[0].id),
              "title": form.value.title,
              "updatedBy": this.userDet.empId,
              "createdBy": this.userDet.empId,
              "daysList": form.value.daysList,
              "parameterList": this.parameterDet.rec
            };
            this.apiService.saveCopyChecksheet('apis/sm/saveCopyChecksheet', req).subscribe(function (response) {
              console.log(response);

              if (response.result) {
                // this.alertService.success("OJT checksheet details added successfully.");
                _this24.parameterDet.rec = [];

                var daysList = _this24.daysList();

                if (daysList) {
                  daysList.clear();
                }

                localStorage.removeItem('setChecksheetId');
                localStorage.removeItem('savedChecksheetDet');
                _this24.savedChecksheetDet.isEditable = true;
                _this24.savedChecksheetDet.isEditPoint = false;
                _this24.savedChecksheetDet.isEditParameter = false;
                localStorage.setItem('setChecksheetId', JSON.stringify(response.responseData));

                _this24.alertService.success("OJT checksheet details added successfully.");

                _this24.isCheckSheetAvailable = true;

                _this24.getLocalStorageChecksheetData();

                _this24.mainChecksheetTab = 3; // this.getChecksheetDetails(response.responseData);
              } else {
                if (response.statusCode == 100) {
                  _this24.alertService.error(response.reason);
                } else {
                  _this24.alertService.error('Error occurred while submitting data. Please try again');
                }
              }
            });
          }
        }]);

        return AddOjtCheckSheetComponent;
      }();

      AddOjtCheckSheetComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__["SkillMatrixService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }];
      };

      AddOjtCheckSheetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-ojt-check-sheet',
        template: _raw_loader_add_ojt_check_sheet_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_ojt_check_sheet_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_5__["SkillMatrixService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], AddOjtCheckSheetComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-ojt-check-sheet-add-ojt-check-sheet-module-es5.js.map