(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ui-kit-ui-kit-module"], {
    /***/
    "Bax6":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui-kit/ui-kit.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bax6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"\">\r\n    <div class=\"row m-0\">\r\n        <div class=\"col-8 m-auto\">\r\n            <app-topBar title=\"Title\"></app-topBar><!--Title => replace to your page title-->\r\n        </div>\r\n        <div class=\"col-3 m-auto\">\r\n            <app-loginInfo></app-loginInfo> <!--LoggedIn Info Directive-->\r\n        </div>\r\n        <div class=\"col-1 p-0 m-auto text-center\">\r\n            <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n        <div class=\"extraContent\">\r\n            <div class=\"row m-0\">\r\n                <div class=\"p-l-0 p-r-5 col-4\">\r\n                    <div class=\"row m-0\">\r\n                        <div class=\"p-l-0 p-r-5\" [ngClass]=\"(filterFlag)?'col-6':'col-12'\">\r\n                            <div class=\"form-group has-search\">\r\n                                <span class=\"fa fa-search form-control-feedback\"></span>\r\n                                <input type=\"text\" class=\"form-control\" name=\"searchInput\"\r\n                                    placeholder=\"Search By Participant Name or ID\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                    (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-6 p-r-5 p-l-5\" *ngIf=\"filterFlag\">\r\n                            <div class=\"filterDiv\">\r\n                                <button class=\"clearFilter\" (click)=\"removeFilter()\">Clear filter</button>\r\n                                &nbsp;\r\n                                <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter\r\n                                    Applied</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 p-r-5 p-l-5 form-group\">\r\n                    <label for=\"opt\" class=\"col-form-label p-0\">DROPDOWN</label>\r\n                    <div class=\"\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select option'\" [settings]=\"multipleDropdownSettings\" [data]=\"array\"\r\n                            [(ngModel)]=\"searchDet.optId\" (onSelect)=\"onChange($event)\" (onDeSelect)=\"onChange(false)\"\r\n                            (onSelectAll)=\"onChangeAll($event)\" (onDeSelectAll)=\"onChangeAll($event)\">\r\n                        </ng-multiselect-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-4 p-0\">\r\n                    <div class=\"addRegDiv\">\r\n                        <button class=\"btn addRegBtn m-0\" type=\"button\"><i class=\"fa fa-plus m-r-10\"></i>Add\r\n                            Button</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- Modal Section -->\r\n        <div style=\"margin-bottom: 10px;\">\r\n            <button type=\"button\" class=\"btn submitBtn\" (click)=\"modalOpen(topModal,'top')\">Top</button>&nbsp;&nbsp;\r\n            <button type=\"button\" class=\"btn submitBtn\"\r\n                (click)=\"modalOpen(bottomModal,'bottom')\">Bottom</button>&nbsp;&nbsp;\r\n            <button type=\"button\" class=\"btn submitBtn\"\r\n                (click)=\"modalOpen(rightModal,'right')\">Right</button>&nbsp;&nbsp;\r\n        </div>\r\n        <!-- Input Field -->\r\n        <div class=\"form-group row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <label for=\"fieldName1\" class=\"col-sm-4 col-form-label\">Field 1 &nbsp;<span\r\n                            class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <ng-multiselect-dropdown name=\"fieldName1\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForInter\"\r\n                            [placeholder]=\"'Select DROPDOWN'\" [settings]=\"SingleDropdownSettings\" [data]=\"array\"\r\n                            (onSelect)=\"onChange($event)\" (onDeSelect)=\"onChange(false)\" [disabled]=\"false\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"formdata.controls['fieldName1'].invalid && (formdata.controls['fieldName1'].touched || formdata.controls['fieldName1'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"formdata.controls['fieldName1'].errors.required\">\r\n                                Please Select Field\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <label for=\"fieldName2\" class=\"col-sm-4 col-form-label\">Field 2 &nbsp;<span\r\n                            class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"fieldName2\" name=\"fieldName2\" placeholder=\"Enter Field\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <!-- <div *ngIf=\"formdata.controls['fieldName2'].invalid && (formdata.controls['fieldName2'].touched || formdata.controls['fieldName2'].dirty)\"\r\n                        class=\"custom-errorMsg\">\r\n                        <div *ngIf=\"formdata.controls['fieldName2'].errors.required\">\r\n                            Please Enter Field\r\n                        </div>\r\n                    </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"row\">\r\n                    <label for=\"fieldName3\" class=\"col-sm-8 col-form-label\">Field 3\r\n                        &nbsp;<span class=\"astrik\">*</span></label>\r\n                    <div class=\"col-sm-4 custom-toggle-btn\">\r\n                        <span class=\"switcher switcher-1\">\r\n                            <input type=\"checkbox\" id=\"fieldName3\" name=\"fieldName3\" [attr.inter-label-true]=\"'YES'\"\r\n                                [attr.inter-label-false]=\"'NO'\" />\r\n                            <label for=\"fieldName3\"></label>\r\n                        </span>\r\n                        <!-- <div *ngIf=\"formdata.controls['fieldName3'].invalid && (formdata.controls['fieldName3'].touched || formdata.controls['fieldName3'].dirty)\"\r\n                            class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"formdata.controls['fieldName3'].errors.required\">\r\n                                Please Select Field\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- TABLE BLOCK -->\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table datatable class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class=\"fixedColumn\">SR NO</th>\r\n                            <th class=\"\">COL 1</th>\r\n                            <th class=\"\">COL 2</th>\r\n                            <th class=\"\">COL 3</th>\r\n                            <th class=\"\">COL 4</th>\r\n                            <th class=\"\">COL 5</th>\r\n                            <th class=\"\">COL 6</th>\r\n                            <th class=\"\">COL 7</th>\r\n                            <th class=\"\">COL 8</th>\r\n                            <th class=\"\">COL 9</th>\r\n                            <th class=\"\">COL 10</th>\r\n                            <th class=\"pending fixedColumn\">STATUS</th>\r\n                            <th class=\"actionTh fixedColumn\">ACTION</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>1</td>\r\n                            <td>DATA 1</td>\r\n                            <td>DATA 2</td>\r\n                            <td>DATA 3</td>\r\n                            <td>DATA 4</td>\r\n                            <td>DATA 5</td>\r\n                            <td>DATA 6</td>\r\n                            <td>DATA 7</td>\r\n                            <td>DATA 8</td>\r\n                            <td>DATA 9</td>\r\n                            <td>DATA 10</td>\r\n                            <td>STATUS</td>\r\n                            <td>\r\n                                <button type=\"button\" class=\"btn btn-sm actionBtn\">Action</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n            <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"\r\n                [submitButton]=\"getCheckedValue()\" [submitSpinner]=\"submitSpinner\" (submitData)=\"statusUpdate($event)\"\r\n                [buttonLabel]=\"'Submit'\">\r\n            </app-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Filter Popup  -->\r\n<ng-template #FilterModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n        <perfect-scrollbar></perfect-scrollbar>\r\n    </div>\r\n    <div class=\"modal-footer footerBlock text-right\">\r\n        <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n            <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n            <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n            <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n<!-- Filter Popup  -->\r\n<!-- Top Modal -->\r\n<ng-template #topModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">TOP MODAL</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body p-0\">\r\n        <div style=\"height: 100px;\"></div>\r\n    </div>\r\n    <div class=\"footerDiv\"></div>\r\n    <div class=\"footerBtn\">\r\n        <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n            <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n            <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n            <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n        </button>\r\n    </div>\r\n</ng-template>\r\n<!-- Top Modal -->\r\n<!-- Bottom Modal-->\r\n<ng-template #bottomModal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n        <div class=\"modal-content\" style=\"height: calc(100vh - 7%);\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\" id=\"myModalLabel2\" style=\"width: 98%;display: inline-block;\">Bottom Modal</h4>\r\n                <button type=\"button\" class=\"close closebtn1\" aria-label=\"Close\" (click)=\"d('Cross click');\">\r\n                    <span aria-hidden=\"true\" class=\"close-icon\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body p-t-0 p-b-0\">\r\n                <div [style.height]=\"'calc(100vh - 38vh)'\"></div>\r\n            </div>\r\n            <div class=\"modal-footer text-center pad0 paginationFooter\">\r\n                <app-pagination [staticPagination]=\"staticPagination\"\r\n                    (paginationData)=\"loadMore($event)\"></app-pagination>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<!-- Bottom Modal-->\r\n<!-- Right Modal-->\r\n<ng-template #rightModal let-modal let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content interDetContent\">\r\n        <div class=\"modal-header\" style=\"border-bottom:2px solid #c8e4f5; width: 98%;\">\r\n            <h4 class=\"name\">Right Modal</h4>\r\n            <button style=\"position: absolute;right: 20px;\" type=\"button\" class=\"close closebtn1\" aria-label=\"Close\"\r\n                (click)=\"d('Cross click');\">\r\n                <span aria-hidden=\"true\" class=\"close-icon\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body fixedHead\">\r\n\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<!-- Right Modal-->";
      /***/
    },

    /***/
    "H1z2":
    /*!****************************************************!*\
      !*** ./src/app/modules/ui-kit/ui-kit.component.ts ***!
      \****************************************************/

    /*! exports provided: UiKitComponent */

    /***/
    function H1z2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiKitComponent", function () {
        return UiKitComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ui_kit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ui-kit.component.html */
      "Bax6");
      /* harmony import */


      var _ui_kit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ui-kit.component.scss */
      "q+D1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var UiKitComponent = /*#__PURE__*/function () {
        function UiKitComponent(modalConfig, modalService) {
          _classCallCheck(this, UiKitComponent);

          this.modalService = modalService;
          this.searchDet = {};
          this.filterFlag = false;
          this.SingleDropdownSettings = {};
          this.multipleDropdownSettings = {};
          this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
          };
          this.submitSpinner = false;
          this.array = [{
            id: 1,
            name: 'Field 1'
          }, {
            id: 2,
            name: 'Field 2'
          }, {
            id: 3,
            name: 'Field 3'
          }, {
            id: 4,
            name: 'Field 4'
          }, {
            id: 5,
            name: 'Field 5'
          }];
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(UiKitComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
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
          }
        }, {
          key: "getCheckedValue",
          value: function getCheckedValue() {
            return true;
          }
          /*
              Filter modal function
          */

        }, {
          key: "filterModalOpen",
          value: function filterModalOpen(modal) {
            this.modalService.open(modal, {
              windowClass: 'filterPopup'
            });
          }
          /*
            Top Modal
          */

        }, {
          key: "modalOpen",
          value: function modalOpen(modal, popupClass) {
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "getSearchList",
          value: function getSearchList(ev) {
            console.log('Search Event');
          }
        }, {
          key: "onChangeAll",
          value: function onChangeAll(ev) {
            console.log('Select All Event');
          }
        }, {
          key: "onChange",
          value: function onChange(ev) {
            console.log('Single Select Event');
          }
        }, {
          key: "loadMore",
          value: function loadMore(ev) {
            console.log('Pagination Event');
          }
        }, {
          key: "statusUpdate",
          value: function statusUpdate(ev) {
            console.log('Pagination Event');
          }
        }]);

        return UiKitComponent;
      }();

      UiKitComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      };

      UiKitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ui-kit',
        template: _raw_loader_ui_kit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ui_kit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])], UiKitComponent);
      /***/
    },

    /***/
    "q+D1":
    /*!******************************************************!*\
      !*** ./src/app/modules/ui-kit/ui-kit.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function qD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 1rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  font: normal normal 500 13px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n  margin: auto 0px;\n  padding: 0px 5px 0px 15px;\n}\n.form-group .customInput-field,\n.form-group .customInput-field:hover,\n.form-group .customInput-field:focus {\n  border-radius: 4px;\n  box-shadow: 0px 0px 2px 1px #eae1ea;\n  border: 1px solid #dedede;\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1aS1raXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxtQkFBQTtBQUVSO0FBQUk7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUFJOzs7RUFHSSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUVSIiwiZmlsZSI6InVpLWtpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxM3B4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDVweCAwcHggMTVweDtcclxuICAgIH1cclxuICAgIC5jdXN0b21JbnB1dC1maWVsZCxcclxuICAgIC5jdXN0b21JbnB1dC1maWVsZDpob3ZlcixcclxuICAgIC5jdXN0b21JbnB1dC1maWVsZDpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjZWFlMWVhO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "rvhr":
    /*!*********************************************************!*\
      !*** ./src/app/modules/ui-kit/ui-kit-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: UiKitRoutingModule */

    /***/
    function rvhr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiKitRoutingModule", function () {
        return UiKitRoutingModule;
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


      var _ui_kit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ui-kit.component */
      "H1z2");

      var routes = [{
        path: '',
        component: _ui_kit_component__WEBPACK_IMPORTED_MODULE_3__["UiKitComponent"]
      }];

      var UiKitRoutingModule = function UiKitRoutingModule() {
        _classCallCheck(this, UiKitRoutingModule);
      };

      UiKitRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UiKitRoutingModule);
      /***/
    },

    /***/
    "xjx4":
    /*!*************************************************!*\
      !*** ./src/app/modules/ui-kit/ui-kit.module.ts ***!
      \*************************************************/

    /*! exports provided: UiKitModule */

    /***/
    function xjx4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UiKitModule", function () {
        return UiKitModule;
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


      var _ui_kit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ui-kit-routing.module */
      "rvhr");
      /* harmony import */


      var _ui_kit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./ui-kit.component */
      "H1z2");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");

      var UiKitModule = function UiKitModule() {
        _classCallCheck(this, UiKitModule);
      };

      UiKitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ui_kit_component__WEBPACK_IMPORTED_MODULE_4__["UiKitComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ui_kit_routing_module__WEBPACK_IMPORTED_MODULE_3__["UiKitRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"]]
      })], UiKitModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ui-kit-ui-kit-module-es5.js.map