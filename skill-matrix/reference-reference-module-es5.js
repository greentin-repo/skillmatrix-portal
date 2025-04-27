(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reference-reference-module"], {
    /***/
    "+7Im":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-shift/reference-shift.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Im(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2Utc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJOzs7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxZQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWjtBQUtROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBSFo7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSSjtBQTBCQTtFQUNJLDJDQUFBO0FBdkJKO0FBeUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QlI7QUF5QlE7RUFDSSw2Q0FBQTtBQXZCWiIsImZpbGUiOiJyZWZlcmVuY2Utc2hpZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIHRhYiAxKi9cclxuXHJcbi5hZGRSZWdEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwcmVtO1xyXG5cclxuICAgIC5hZGRSZWdCdG4sXHJcbiAgICAuYWRkUmVnQnRuOmhvdmVyLFxyXG4gICAgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA4cmVtO1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4dHJhQ29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmhhcy1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1jbGVhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjk1MzcxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWVycm9yTXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNmZjUyNTI7XHJcbn1cclxuXHJcbi8vIC50YWJsZUZpeEhlYWQge1xyXG4vLyAgICAgdGFibGUge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAgICAgdGguYWN0aW9uVGgsXHJcbi8vICAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0Ym9keSB0ZCB7XHJcbi8vICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWVmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyNXB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "/JkF":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-shift/reference-shift.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ReferenceShiftComponent */

    /***/
    function JkF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceShiftComponent", function () {
        return ReferenceShiftComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reference_shift_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reference-shift.component.html */
      "I9qe");
      /* harmony import */


      var _reference_shift_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-shift.component.scss */
      "+7Im");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
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

      var ReferenceShiftComponent = /*#__PURE__*/function () {
        function ReferenceShiftComponent(modalConfig, skillMatrixService, modalService, alertService, fb) {
          _classCallCheck(this, ReferenceShiftComponent);

          this.skillMatrixService = skillMatrixService;
          this.modalService = modalService;
          this.alertService = alertService;
          this.fb = fb;
          this.searchDet = {};
          this.referenceShiftNo = {};
          this.SingleBranchDropdownSettings = {};
          this.userDet = {};
          this.addEditReferenceShiftNo = {};
          this.branchAccessList = [];
          this.formSubmitted = false;
          this.isFormSubmitted = false;
          this.isShiftListLoading = false;
          this.isEditing = false;
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(ReferenceShiftComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getBranchAccessList();
            this.SingleBranchDropdownSettings = {
              singleSelection: true,
              idField: 'branchId',
              textField: 'branchName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.formdata = this.fb.group({
              // branch: new FormControl('', Validators.required),
              shiftNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
            });
            this.resetForm();
          }
        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this.branchAccessList = response.branchAccessList;
                  _this.branchAccessList = _this.setArray(_this.branchAccessList, 'branchId', 'branchName');
                  console.log(_this.branchAccessList);
                  _this.branchAccessList = _this.sortFunction(_this.branchAccessList, 'name');
                  _this.referenceShiftNo.branch = [_this.branchAccessList[0]];
                } else {
                  /* Use For Add Screen */
                  _this.branchAccessList = [{
                    branchId: _this.userDet.branch.branchId,
                    branchName: _this.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this.branchAccessList = [{
                  branchId: _this.userDet.branch.branchId,
                  branchName: _this.userDet.branch.name
                }];
              }

              if (_this.branchAccessList.length > 0) {
                _this.referenceShiftNo.branch = [_this.branchAccessList[0]];
              }

              _this.onChangeBranch(_this.branchAccessList[0]);
            });
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            if (event) {
              this.disableReferShift = true;
              this.referenceShiftNo.branchId = event.branchId;
              this.getShiftNoData();
            } else {
              this.disableReferShift = false;
              this.refShiftNoData = [];
            }
          }
        }, {
          key: "getShiftNoData",
          value: function getShiftNoData() {
            var _this2 = this;

            this.isShiftListLoading = true;

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage,
              'branchId': this.referenceShiftNo.branchId
            };

            if (this.searchDet.searchInput && this.searchDet.searchInput != '') {
              req.search = this.searchDet.searchInput;
            }

            if (this.sorting) {
              if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
              }
            }

            console.log(req);
            this.skillMatrixService.getShiftNoData('apis/sm/getShiftList', req).subscribe(function (response) {
              if (response.result) {
                _this2.isShiftListLoading = false;

                if (_this2.staticPagination.page == 1) {
                  _this2.staticPagination.total = response.totalCount;
                  _this2.staticPagination.totalPages = Math.ceil(response.totalCount / _this2.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this2.refShiftNoData = response.dataList;
                  _this2.staticPagination.listLength = _this2.refShiftNoData.length;
                } else {
                  _this2.refShiftNoData = [];
                  _this2.staticPagination.listLength = _this2.refShiftNoData.length;
                  _this2.staticPagination.total = _this2.refShiftNoData.length;
                } // this.refShiftNoData = response.dataList;

              } else {
                _this2.refShiftNoData = [];
                _this2.staticPagination.listLength = _this2.refShiftNoData.length;
                _this2.staticPagination.total = _this2.refShiftNoData.length;
                _this2.isShiftListLoading = false;
              }
            }, function (error) {
              _this2.refShiftNoData = [];
              _this2.isShiftListLoading = false;
            });
          }
        }, {
          key: "addRefShiftNoOpen",
          value: function addRefShiftNoOpen(modal, popupClass) {
            this.isEditing = false;
            this.modalTitle = "Add Shift";
            this.addEditReferenceShiftNo.branch = '';
            this.addEditReferenceShiftNo.shiftName = '';
            this.resetForm();
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formdata.reset();
            this.isFormSubmitted = false;
          }
        }, {
          key: "editRefShiftNo",
          value: function editRefShiftNo(modal, popupClass, refShiftData) {
            this.isEditing = true;
            this.modalTitle = "Update Shift";
            this.addEditReferenceShiftNo.shiftName = refShiftData.shiftName;
            this.addEditReferenceShiftNo.shiftId = refShiftData.id;

            for (var i = 0; i < this.branchAccessList.length; i++) {
              if (this.branchAccessList[i].branchId == refShiftData.branchId) {
                this.addEditReferenceShiftNo.branch = [this.branchAccessList[i]];
              }
            }

            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "saveReferenceShiftNo",
          value: function saveReferenceShiftNo(formdata) {
            var _this3 = this;

            this.isFormSubmitted = true;

            if (formdata.valid) {
              if (this.addEditReferenceShiftNo.shiftId == undefined || this.addEditReferenceShiftNo.shiftId == '') {
                if (this.addEditReferenceShiftNo.branch != null && this.addEditReferenceShiftNo.branch.length > 0) {
                  for (var i = 0; i < this.addEditReferenceShiftNo.branch.length; i++) {
                    this.addEditReferenceShiftNo.branchId = this.addEditReferenceShiftNo.branch[i].branchId;
                  }
                }

                this.reqBody = {
                  // "branchId": this.addEditReferenceShiftNo.branchId,
                  "branchId": this.referenceShiftNo.branch[0].branchId,
                  "shiftName": this.addEditReferenceShiftNo.shiftName,
                  "isActive": true,
                  "updatedBy": this.userDet.empId
                };
                console.log(this.reqBody);
                this.skillMatrixService.saveReferenceShiftNo('apis/sm/saveShiftDetails', this.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this3.modalService.dismissAll();

                    _this3.alertService.success("New shift added successfully");

                    _this3.addEditReferenceShiftNo.branch = '';
                    _this3.addEditReferenceShiftNo.modelName = '';

                    _this3.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this3.alertService.error(response.reason);
                    } else {
                      _this3.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceShiftNo.shiftId != null && this.addEditReferenceShiftNo.branch.length > 0) {
                  for (var _i = 0; _i < this.addEditReferenceShiftNo.branch.length; _i++) {
                    this.addEditReferenceShiftNo.branchId = this.addEditReferenceShiftNo.branch[_i].branchId;
                  }
                }

                this.reqBody = {
                  "shiftId": this.addEditReferenceShiftNo.shiftId,
                  "branchId": this.addEditReferenceShiftNo.branchId,
                  "shiftName": this.addEditReferenceShiftNo.shiftName,
                  "updatedBy": this.userDet.empId
                };
                this.skillMatrixService.updateShiftDetails('apis/sm/updateShiftDetails', this.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this3.modalService.dismissAll();

                    _this3.alertService.success("Shift updated successfully");

                    _this3.addEditReferenceShiftNo.branch = '';
                    _this3.addEditReferenceShiftNo.modelName = '';
                    _this3.addEditReferenceShiftNo.modelId = '';

                    _this3.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this3.alertService.error(response.reason);
                    } else {
                      _this3.alertService.error('Error occurred while updating data. Please try again');
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "removeRefShift",
          value: function removeRefShift(RefShiftData) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this shift ?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Remove It',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                _this4.reqBody = {
                  "shiftId": RefShiftData.id,
                  "updatedBy": _this4.userDet.empId
                };
                console.log(_this4.reqBody);

                _this4.skillMatrixService.deleteShiftDetails('apis/sm/deleteShiftDetails', _this4.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this4.alertService.success("Shift removed successfully");

                    _this4.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this4.alertService.error(response.reason);
                    } else {
                      _this4.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
          /*
           Load More Pagination next page Data
           Author : Simran
           @Date : 08/09/2023
          */

        }, {
          key: "loadMore",
          value: function loadMore(ev) {
            this.staticPagination = ev;
            this.refShiftNoData = [];
            this.isShiftListLoading = true;
            this.getShiftNoData();
          }
          /*
           Common function for sorting
           Author: Simran
           Date : 07/09/2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.getShiftNoData();
          }
        }, {
          key: "getSearchList",
          value: function getSearchList(ev) {
            this.clearPagination();
            this.searchDet.searchData = ev;

            if (!ev) {
              this.searchDet.searchInput = '';
              this.getShiftNoData();
            } else {
              this.getShiftNoData();
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
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
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
        }]);

        return ReferenceShiftComponent;
      }();

      ReferenceShiftComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      ReferenceShiftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-shift',
        template: _raw_loader_reference_shift_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_shift_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], ReferenceShiftComponent);
      /***/
    },

    /***/
    "0JGa":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: ReferenceModule */

    /***/
    function JGa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceModule", function () {
        return ReferenceModule;
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


      var _reference_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reference-routing.module */
      "KeIJ");
      /* harmony import */


      var _reference_model_reference_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./reference-model/reference-model.component */
      "UAN1");
      /* harmony import */


      var _reference_gap_reason_reference_gap_reason_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reference-gap-reason/reference-gap-reason.component */
      "A+/Y");
      /* harmony import */


      var _reference_shift_reference_shift_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reference-shift/reference-shift.component */
      "/JkF");
      /* harmony import */


      var _reference_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./reference.component */
      "K4KQ");
      /* harmony import */


      var _reference_level_reference_level_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./reference-level/reference-level.component */
      "UuZk");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ReferenceModule = function ReferenceModule() {
        _classCallCheck(this, ReferenceModule);
      };

      ReferenceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reference_component__WEBPACK_IMPORTED_MODULE_7__["ReferenceComponent"], _reference_model_reference_model_component__WEBPACK_IMPORTED_MODULE_4__["ReferenceModelComponent"], _reference_gap_reason_reference_gap_reason_component__WEBPACK_IMPORTED_MODULE_5__["ReferenceGapReasonComponent"], _reference_shift_reference_shift_component__WEBPACK_IMPORTED_MODULE_6__["ReferenceShiftComponent"], _reference_level_reference_level_component__WEBPACK_IMPORTED_MODULE_8__["ReferenceLevelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reference_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReferenceRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbPaginationModule"]]
      })], ReferenceModule);
      /***/
    },

    /***/
    "5uT8":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/reference/reference-model/reference-model.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\">\r\n                            <!-- <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                            <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by model and plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1 p-0\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"p-l-5\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceModel.branch\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"addRefModalOpen(openRefModalModel, 'top')\" [disabled]=\"!disableReferModel\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Model</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-loading *ngIf=\"isModelListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please\r\n            Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th mat-sort-header=\"BranchName\">Plant</th>\r\n                            <th mat-sort-header=\"ModelName\">Model</th>\r\n                            <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of referencemodelList\">\r\n                            <td>{{x.branchName}}</td>\r\n                            <td>{{x.modelName}}</td>\r\n                            <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                            <td class=\"actionTd size text-left\">\r\n                                <i class=\"fa fa-edit editIcon\" (click)=\"editRefModel(openRefModalModel, 'top', x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefModel(x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"(referencemodelList == null || referencemodelList.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isModelListLoading\">\r\n                                Data not Found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isModelListLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceModel(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>\r\n                <!-- <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [data]=\"branchAccessList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"addEditReferenceModel.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row form-group\">\r\n                    <label for=\"modelName\" class=\"col-sm-4 col-form-label\">Model Name &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"modelName\" name=\"modelName\" placeholder=\"Enter model name\"\r\n                            formControlName=\"modelName\" [(ngModel)]=\"addEditReferenceModel.modelName\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['modelName'].invalid || \r\n                        (formdata.controls['modelName'].touched || formdata.controls['modelName'].Untouched) \r\n                        && formdata.controls['modelName'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            please enter model name\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "A+/Y":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-gap-reason/reference-gap-reason.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ReferenceGapReasonComponent */

    /***/
    function AY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceGapReasonComponent", function () {
        return ReferenceGapReasonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reference_gap_reason_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reference-gap-reason.component.html */
      "eMYZ");
      /* harmony import */


      var _reference_gap_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-gap-reason.component.scss */
      "kuko");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ReferenceGapReasonComponent = /*#__PURE__*/function () {
        function ReferenceGapReasonComponent(modalConfig, skillMatrixService, alertService, modalService, fb) {
          _classCallCheck(this, ReferenceGapReasonComponent);

          this.skillMatrixService = skillMatrixService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.searchDet = {};
          this.submitSpinner = false;
          this.refGapReasonList = [];
          this.SingleBranchDropdownSettings = {};
          this.branchAccessList = [];
          this.referenceGapReason = {};
          this.userDet = {};
          this.addEditReferenceGapReason = {};
          this.isFormSubmitted = false;
          this.isGapListLoading = false;
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(ReferenceGapReasonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getBranchAccessList();
            this.SingleBranchDropdownSettings = {
              singleSelection: true,
              idField: 'branchId',
              textField: 'branchName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.formdata = this.fb.group({
              // branch: new FormControl('', Validators.required),
              gapReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
            });
            this.resetForm();
          }
        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this5 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this5.branchAccessList = response.branchAccessList;
                  _this5.branchAccessList = _this5.setArray(_this5.branchAccessList, 'branchId', 'branchName');
                  _this5.branchAccessList = _this5.sortFunction(_this5.branchAccessList, 'name');
                  _this5.referenceGapReason.branch = [_this5.branchAccessList[0]];
                } else {
                  /* Use For Add Screen */
                  _this5.branchAccessList = [{
                    branchId: _this5.userDet.branch.branchId,
                    branchName: _this5.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this5.branchAccessList = [{
                  branchId: _this5.userDet.branch.branchId,
                  branchName: _this5.userDet.branch.name
                }];
              }

              if (_this5.branchAccessList.length > 0) {
                _this5.referenceGapReason.branch = [_this5.branchAccessList[0]];
              }

              _this5.onChangeBranch(_this5.branchAccessList[0]);
            });
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            if (event) {
              this.referenceGapReason.branchId = event.branchId;
              this.disableReferGap = true;
              this.getRefGapReasonList();
            } else {
              this.disableReferGap = false;
              this.refGapReasonList = [];
            }
          }
        }, {
          key: "getRefGapReasonList",
          value: function getRefGapReasonList() {
            var _this6 = this;

            this.isGapListLoading = true;

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage,
              'branchId': this.referenceGapReason.branchId
            };

            if (this.searchDet.searchInput && this.searchDet.searchInput != '') {
              req.search = this.searchDet.searchInput;
            }

            if (this.sorting) {
              if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
              }
            }

            console.log(req);
            this.skillMatrixService.getGapReasonListData('apis/sm/getGapReasonList', req).subscribe(function (response) {
              if (response.result) {
                _this6.isGapListLoading = false;

                if (_this6.staticPagination.page == 1) {
                  _this6.staticPagination.total = response.totalCount;
                  _this6.staticPagination.totalPages = Math.ceil(response.totalCount / _this6.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this6.refGapReasonList = response.dataList;
                  _this6.staticPagination.listLength = _this6.refGapReasonList.length;
                } else {
                  _this6.refGapReasonList = [];
                  _this6.staticPagination.listLength = _this6.refGapReasonList.length;
                  _this6.staticPagination.total = _this6.refGapReasonList.length;
                } // this.refGapReasonList = response.dataList

              } else {
                _this6.refGapReasonList = [];
                _this6.staticPagination.listLength = _this6.refGapReasonList.length;
                _this6.staticPagination.total = _this6.refGapReasonList.length;
                _this6.isGapListLoading = false;
              }
            }, function (error) {
              _this6.refGapReasonList = [];
              _this6.isGapListLoading = false;
            });
          }
        }, {
          key: "openRefGapReasonModal",
          value: function openRefGapReasonModal(modal, popupClass) {
            this.modalTitle = "Add Gap Reason";
            this.addEditReferenceGapReason.branch = '';
            this.addEditReferenceGapReason.gapReason = '';
            this.resetForm();
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formdata.reset();
            this.isFormSubmitted = false;
          }
        }, {
          key: "updateRefGapReason",
          value: function updateRefGapReason(modal, popupClass, refGapData) {
            this.modalTitle = "Update Gap Reason";
            this.addEditReferenceGapReason.gapReason = refGapData.reason;
            this.addEditReferenceGapReason.gapId = refGapData.id;

            for (var i = 0; i < this.branchAccessList.length; i++) {
              if (this.branchAccessList[i].branchId == refGapData.branchId) {
                this.addEditReferenceGapReason.branch = [this.branchAccessList[i]];
              }
            }

            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "saveReferenceGapReason",
          value: function saveReferenceGapReason(formdata) {
            var _this7 = this;

            this.isFormSubmitted = true;

            if (formdata.valid) {
              // for (let index = 0; index < this.refGapReasonList.length; index++) {
              //   this.gapReason = this.refGapReasonList[index].reason.toLowerCase();
              //   this.newGapReason = this.addEditReferenceGapReason.gapReason.toLowerCase();
              //   if (this.gapReason == this.newGapReason) {
              //     this.alertService.error("Gap reason already exist.");
              //     return;
              //   }
              // }
              if (this.addEditReferenceGapReason.gapId == undefined || this.addEditReferenceGapReason.gapId == '') {
                if (this.addEditReferenceGapReason.branch != null && this.addEditReferenceGapReason.branch.length > 0) {
                  for (var i = 0; i < this.addEditReferenceGapReason.branch.length; i++) {
                    this.addEditReferenceGapReason.branchId = this.addEditReferenceGapReason.branch[i].branchId;
                  }
                }

                this.reqBody = {
                  // "branchId": this.addEditReferenceGapReason.branchId,
                  "branchId": this.referenceGapReason.branch[0].branchId,
                  "reason": this.addEditReferenceGapReason.gapReason,
                  "isActive": true,
                  "createdBy": this.userDet.empId
                };
                this.skillMatrixService.saveReferenceGapReason('apis/sm/saveGapReason', this.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this7.modalService.dismissAll();

                    _this7.alertService.success("Gap reason added successfully");

                    _this7.addEditReferenceGapReason.branch = '';
                    _this7.addEditReferenceGapReason.gapReason = '';

                    _this7.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this7.alertService.error(response.reason);
                    } else {
                      _this7.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceGapReason.branch != null && this.addEditReferenceGapReason.branch.length > 0) {
                  for (var _i2 = 0; _i2 < this.addEditReferenceGapReason.branch.length; _i2++) {
                    this.addEditReferenceGapReason.branchId = this.addEditReferenceGapReason.branch[_i2].branchId;
                  }
                } // for (let index = 0; index < this.refGapReasonList.length; index++) {
                //   this.gapReason = this.refGapReasonList[index].modelName.toLowerCase();
                //   this.newGapReason = this.addEditReferenceGapReason.gapReason.toLowerCase();
                //   if (this.gapReason == this.newGapReason) {
                //     this.alertService.error("Gap reason already exist.");
                //     return;
                //   }
                // }


                this.reqBody = {
                  "reasonId": this.addEditReferenceGapReason.gapId,
                  "branchId": this.addEditReferenceGapReason.branchId,
                  "reason": this.addEditReferenceGapReason.gapReason,
                  "updatedBy": this.userDet.empId
                };
                this.skillMatrixService.updateGapDetails('apis/sm/updateGapReason', this.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this7.modalService.dismissAll();

                    _this7.alertService.success("Gap reason updated successfully");

                    _this7.addEditReferenceGapReason.branch = '';
                    _this7.addEditReferenceGapReason.gapReason = '';
                    _this7.addEditReferenceGapReason.gapId = '';

                    _this7.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this7.alertService.error(response.reason);
                    } else {
                      _this7.alertService.error('Error occurred while updating data. Please try again');
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "removeRefGapReason",
          value: function removeRefGapReason(RefGapReasonData) {
            var _this8 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: 'Are You Sure!',
              text: 'You want remove this gap reason ?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Remove it',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                _this8.reqBody = {
                  "reasonId": RefGapReasonData.id,
                  "updatedBy": _this8.userDet.empId
                };

                _this8.skillMatrixService.removeRefGapReason('apis/sm/deleteGapReason', _this8.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this8.alertService.success("Gap reason removed successfully");

                    _this8.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this8.alertService.error(response.reason);
                    } else {
                      _this8.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
          /*
           Load More Pagination next page Data
           Author : Simran
           @Date : 08/09/2023
          */

        }, {
          key: "loadMore",
          value: function loadMore(ev) {
            this.staticPagination = ev;
            this.refGapReasonList = [];
            this.isGapListLoading = true;
            this.getRefGapReasonList();
          }
          /*
           Common function for searching
           Author: Simran
           Date : 07/09/2023
          */

        }, {
          key: "getSearchList",
          value: function getSearchList(ev) {
            this.clearPagination();
            this.searchDet.searchData = ev;

            if (!ev) {
              this.searchDet.searchInput = '';
              this.getRefGapReasonList();
            } else {
              this.getRefGapReasonList();
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
          }
          /*
             Common function for sorting
             Author: Simran
             Date : 07/09/2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            console.log(this.sorting);
            this.getRefGapReasonList();
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
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
        }, {
          key: "setArray",
          value: function setArray(array, key1, key2) {
            var tmpArray = [];

            if (array != null && array.length > 0) {
              var _iterator2 = _createForOfIteratorHelper(array),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var element = _step2.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            return tmpArray;
          }
        }]);

        return ReferenceGapReasonComponent;
      }();

      ReferenceGapReasonComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      ReferenceGapReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-gap-reason',
        template: _raw_loader_reference_gap_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_gap_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], ReferenceGapReasonComponent);
      /***/
    },

    /***/
    "I9qe":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/reference/reference-shift/reference-shift.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function I9qe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\">\r\n                            <!-- <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                            <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by shift and plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1 p-0\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceShiftNo.branch\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"addRefShiftNoOpen(openRefModalShiftNo, 'top')\" [disabled]=\"!disableReferShift\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Shift</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-loading *ngIf=\"isShiftListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please\r\n            Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th mat-sort-header=\"BranchName\">Plant</th>\r\n                            <th mat-sort-header=\"ShiftName\">Shift</th>\r\n                            <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of refShiftNoData\">\r\n                            <td>{{x.branchName}}</td>\r\n                            <td>{{x.shiftName}}</td>\r\n                            <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                            <td class=\"actionTd size text-left\">\r\n                                <i class=\"fa fa-edit editIcon\" (click)=\"editRefShiftNo(openRefModalShiftNo, 'top', x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefShift(x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"(refShiftNoData == null || refShiftNoData.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isShiftListLoading\">\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isShiftListLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalShiftNo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceShiftNo(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>\r\n                <!-- <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [(ngModel)]=\"addEditReferenceShiftNo.branch\"\r\n                            [data]=\"branchAccessList\" [disabled]=\"isEditing && formdata.get('branch').value\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row form-group\">\r\n                    <label for=\"shiftNo\" class=\"col-sm-4 col-form-label\">Shift Name &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"shiftNo\" name=\"shiftNo\" placeholder=\"Enter shift\"\r\n                            formControlName=\"shiftNo\" [(ngModel)]=\"addEditReferenceShiftNo.shiftName\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['shiftNo'].invalid || \r\n                            (formdata.controls['shiftNo'].touched || formdata.controls['shiftNo'].Untouched) \r\n                            && formdata.controls['shiftNo'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            Please enter shift name\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "JUyX":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-model/reference-model.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JUyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2UtbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJOzs7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxZQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWjtBQUtROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBSFo7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSSjtBQTBCQTtFQUNJLDJDQUFBO0FBdkJKO0FBeUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QlI7QUF5QlE7RUFDSSw2Q0FBQTtBQXZCWiIsImZpbGUiOiJyZWZlcmVuY2UtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIHRhYiAxKi9cclxuXHJcbi5hZGRSZWdEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwcmVtO1xyXG5cclxuICAgIC5hZGRSZWdCdG4sXHJcbiAgICAuYWRkUmVnQnRuOmhvdmVyLFxyXG4gICAgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA4cmVtO1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4dHJhQ29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmhhcy1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1jbGVhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjk1MzcxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWVycm9yTXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNmZjUyNTI7XHJcbn1cclxuXHJcbi8vIC50YWJsZUZpeEhlYWQge1xyXG4vLyAgICAgdGFibGUge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAgICAgdGguYWN0aW9uVGgsXHJcbi8vICAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0Ym9keSB0ZCB7XHJcbi8vICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWVmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyNXB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "K4KQ":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference.component.ts ***!
      \********************************************************************************/

    /*! exports provided: ReferenceComponent */

    /***/
    function K4KQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
        return ReferenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reference_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reference.component.html */
      "u5pl");
      /* harmony import */


      var _reference_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference.component.scss */
      "Yvky");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ReferenceComponent = /*#__PURE__*/function () {
        function ReferenceComponent(router, route) {
          _classCallCheck(this, ReferenceComponent);

          this.router = router;
          this.route = route;

          this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
          };
        }

        _createClass(ReferenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mainTab = 1;
          }
        }, {
          key: "setMainTab",
          value: function setMainTab(tabId) {
            this.mainTab = tabId;

            if (this.mainTab == 1) {} else if (this.mainTab == 2) {} else if (this.mainTab == 3) {} else if (this.mainTab == 4) {}
          }
        }]);

        return ReferenceComponent;
      }();

      ReferenceComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      ReferenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference',
        template: _raw_loader_reference_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], ReferenceComponent);
      /***/
    },

    /***/
    "KeIJ":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ReferenceRoutingModule */

    /***/
    function KeIJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceRoutingModule", function () {
        return ReferenceRoutingModule;
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


      var _reference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reference.component */
      "K4KQ");

      var routes = [{
        path: '',
        component: _reference_component__WEBPACK_IMPORTED_MODULE_3__["ReferenceComponent"]
      }];

      var ReferenceRoutingModule = function ReferenceRoutingModule() {
        _classCallCheck(this, ReferenceRoutingModule);
      };

      ReferenceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReferenceRoutingModule);
      /***/
    },

    /***/
    "P9LE":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/reference/reference-level/reference-level.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P9LE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div>\r\n        <app-loading *ngIf=\"isLevelListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 8%;\">Sr. No</th>\r\n                            <th>Level</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of refMasterCertificateLevel; let i = index\">\r\n                            <td style=\"width: 10%;\">{{i + 1}}</td>\r\n                            <td>{{x.levelName}}</td>\r\n                        </tr>                        \r\n                        <tr *ngIf=\"(refMasterCertificateLevel == null || refMasterCertificateLevel.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\"><!-- *ngIf=\"!listLoading\" -->\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr> \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "UAN1":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-model/reference-model.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ReferenceModelComponent */

    /***/
    function UAN1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceModelComponent", function () {
        return ReferenceModelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reference_model_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reference-model.component.html */
      "5uT8");
      /* harmony import */


      var _reference_model_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-model.component.scss */
      "JUyX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ReferenceModelComponent = /*#__PURE__*/function () {
        function ReferenceModelComponent(modalConfig, skillMatrixService, alertService, modalService, fb) {
          _classCallCheck(this, ReferenceModelComponent);

          this.skillMatrixService = skillMatrixService;
          this.alertService = alertService;
          this.modalService = modalService;
          this.fb = fb;
          this.searchDet = {};
          this.submitSpinner = false;
          this.isModelListLoading = false;
          this.referencemodelList = [];
          this.referenceModel = {};
          this.SingleBranchDropdownSettings = {};
          this.userDet = {};
          this.branchAccessList = [];
          this.addEditReferenceModel = {};
          this.isFormSubmitted = false;
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(ReferenceModelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getBranchAccessList();
            this.SingleBranchDropdownSettings = {
              singleSelection: true,
              idField: 'branchId',
              textField: 'branchName',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.formdata = this.fb.group({
              // branch: new FormControl('', Validators.required),
              modelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required)
            });
            this.resetForm();
          }
          /*
            Get Accessible Plant List
            Author: Sanket B.
            Date : 21 Aug 2023
          */

        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this9 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this9.branchAccessList = response.branchAccessList;
                  _this9.branchAccessList = _this9.setArray(_this9.branchAccessList, 'branchId', 'branchName');
                  _this9.branchAccessList = _this9.sortFunction(_this9.branchAccessList, 'name');
                  _this9.referenceModel.branch = [_this9.branchAccessList[0]];
                } else {
                  /* Use For Add Screen */
                  _this9.branchAccessList = [{
                    branchId: _this9.userDet.branch.branchId,
                    branchName: _this9.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this9.branchAccessList = [{
                  branchId: _this9.userDet.branch.branchId,
                  branchName: _this9.userDet.branch.name
                }];
              }

              if (_this9.branchAccessList.length > 0) {
                _this9.referenceModel.branch = [_this9.branchAccessList[0]];
              }

              _this9.onChangeBranch(_this9.branchAccessList[0]);
            });
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            if (event) {
              this.disableReferModel = true;
              this.referenceModel.branchId = event.branchId;
              this.getModelListData();
            } else {
              this.disableReferModel = false;
              this.referencemodelList = [];
            }
          }
          /*
              Get Reference Model List
              Author: Sanket B.
              Date : 21 Aug 2023
          */

        }, {
          key: "getModelListData",
          value: function getModelListData() {
            var _this10 = this;

            this.isModelListLoading = true;
            console.log(this.staticPagination.total);

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage,
              'branchId': this.referenceModel.branchId
            };

            if (this.searchDet.searchInput && this.searchDet.searchInput != '') {
              req.search = this.searchDet.searchInput;
            }

            if (this.sorting) {
              if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
              }
            }

            console.log(req);
            this.skillMatrixService.getModelListData('apis/sm/getModelList', req).subscribe(function (response) {
              if (response.result) {
                _this10.isModelListLoading = false;

                if (_this10.staticPagination.page == 1) {
                  _this10.staticPagination.total = response.totalCount;
                  _this10.staticPagination.totalPages = Math.ceil(response.totalCount / _this10.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this10.referencemodelList = response.dataList;
                  _this10.staticPagination.listLength = _this10.referencemodelList.length;
                } else {
                  _this10.referencemodelList = [];
                  _this10.staticPagination.listLength = _this10.referencemodelList.length;
                  _this10.staticPagination.total = _this10.referencemodelList.length;
                } // this.referencemodelList = response.dataList;

              } else {
                _this10.referencemodelList = [];
                _this10.staticPagination.listLength = _this10.referencemodelList.length;
                _this10.staticPagination.total = _this10.referencemodelList.length;
                _this10.isModelListLoading = false;
              }
            }, function (error) {
              _this10.referencemodelList = [];
              _this10.isModelListLoading = false;
            });
          }
        }, {
          key: "addRefModalOpen",
          value: function addRefModalOpen(modal, popupClass) {
            this.modalTitle = "Add New Model";
            this.addEditReferenceModel.branch = '';
            this.addEditReferenceModel.modelName = '';
            this.resetForm();
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.formdata.reset();
            this.isFormSubmitted = false;
          }
        }, {
          key: "editRefModel",
          value: function editRefModel(modal, popupClass, refmodelData) {
            this.modalTitle = "Update Model";
            this.addEditReferenceModel.modelName = refmodelData.modelName;
            this.addEditReferenceModel.modelId = refmodelData.id;

            for (var i = 0; i < this.branchAccessList.length; i++) {
              if (this.branchAccessList[i].branchId == refmodelData.branchId) {
                this.addEditReferenceModel.branch = [this.branchAccessList[i]];
              }
            }

            this.modalService.open(modal, {
              windowClass: popupClass
            });
          }
          /*
              Add & Update Reference Model
              Author: Mahesh W
              Date : 21 Aug 2023
          */

        }, {
          key: "saveReferenceModel",
          value: function saveReferenceModel(formdata) {
            var _this11 = this;

            this.isFormSubmitted = true;

            if (formdata.valid) {
              // for (let index = 0; index < this.referencemodelList.length; index++) {
              //   this.ReferenceModel = this.referencemodelList[index].modelName.toLowerCase();
              //   this.newReferenceModel = this.addEditReferenceModel.modelName.toLowerCase();
              //   if (this.ReferenceModel == this.newReferenceModel) {
              //     this.alertService.error("Model already exist.");
              //     return;
              //   }
              // }
              if (this.addEditReferenceModel.modelId == undefined || this.addEditReferenceModel.modelId == '') {
                if (this.addEditReferenceModel.branch != null && this.addEditReferenceModel.branch.length > 0) {
                  for (var i = 0; i < this.addEditReferenceModel.branch.length; i++) {
                    this.addEditReferenceModel.branchId = this.addEditReferenceModel.branch[i].branchId;
                  }
                }

                this.reqBody = {
                  // "branchId": this.addEditReferenceModel.branchId,
                  "branchId": this.referenceModel.branch[0].branchId,
                  "modelName": this.addEditReferenceModel.modelName,
                  "isActive": true,
                  "updatedBy": this.userDet.empId
                };
                this.skillMatrixService.saveReferenceModel('apis/sm/addModelDetails', this.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this11.modalService.dismissAll();

                    _this11.alertService.success("New model added successfully");

                    _this11.submitSpinner = false;
                    _this11.addEditReferenceModel.branch = '';
                    _this11.addEditReferenceModel.modelName = '';

                    _this11.getModelListData();
                  } else {
                    if (response.statusCode == 100) {
                      _this11.alertService.error(response.reason);
                    } else {
                      _this11.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceModel.branch != null && this.addEditReferenceModel.branch.length > 0) {
                  for (var _i3 = 0; _i3 < this.addEditReferenceModel.branch.length; _i3++) {
                    this.addEditReferenceModel.branchId = this.addEditReferenceModel.branch[_i3].branchId;
                  }
                } // for (let index = 0; index < this.referencemodelList.length; index++) {
                //   this.ReferenceModel = this.referencemodelList[index].modelName.toLowerCase();
                //   this.newReferenceModel = this.addEditReferenceModel.modelName.toLowerCase();
                //   if (this.addEditReferenceModel.modelId == 0) {
                //     if (this.ReferenceModel == this.newReferenceModel) {
                //       this.alertService.error("Model already exist.");
                //       return;
                //     }
                //   }
                // }


                this.reqBody = {
                  "modelId": this.addEditReferenceModel.modelId,
                  "branchId": this.addEditReferenceModel.branchId,
                  "modelName": this.addEditReferenceModel.modelName,
                  "updatedBy": this.userDet.empId
                };
                this.skillMatrixService.updateModalDetails('apis/sm/updateModelDetails', this.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this11.modalService.dismissAll();

                    _this11.alertService.success("Model updated successfully");

                    _this11.addEditReferenceModel.branch = '';
                    _this11.addEditReferenceModel.modelName = '';
                    _this11.addEditReferenceModel.modelId = '';
                    _this11.submitSpinner = false;

                    _this11.getModelListData();
                  } else {
                    if (response.statusCode == 100) {
                      _this11.alertService.error(response.reason);
                    } else {
                      _this11.alertService.error('Error occurred while updating data. Please try again');
                    }
                  }
                });
              }
            }
          }
          /*
          Remove Reference Model
          Author: Sanket B.
          Date : 21 Aug 2023
          */

        }, {
          key: "removeRefModel",
          value: function removeRefModel(RefModelData) {
            var _this12 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this model ?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#7044cd',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, Remove It',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false
            }).then(function (result) {
              if (result.isConfirmed) {
                _this12.reqBody = {
                  "modelId": RefModelData.id,
                  "updatedBy": _this12.userDet.empId
                };

                _this12.skillMatrixService.deleteModelDetails('apis/sm/deleteModelDetails', _this12.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this12.alertService.success("Model removed successfully");

                    _this12.getModelListData();
                  } else {
                    if (response.statusCode == 100) {
                      _this12.alertService.error(response.reason);
                    } else {
                      _this12.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          }
          /*
            Load More Pagination next page Data
            Author : Simran
            @Date : 08/09/2023
          */

        }, {
          key: "loadMore",
          value: function loadMore(ev) {
            this.staticPagination = ev;
            this.referencemodelList = [];
            this.isModelListLoading = true;
            this.getModelListData();
          }
          /*
            Common function for sorting
            Author: Simran
            Date : 07/09/2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.getModelListData();
          }
        }, {
          key: "getSearchList",
          value: function getSearchList(ev) {
            this.clearPagination();
            this.searchDet.searchData = ev;

            if (!ev) {
              this.searchDet.searchInput = '';
              this.getModelListData();
            } else {
              this.getModelListData();
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
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
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
          key: "setArray",
          value: function setArray(array, key1, key2) {
            var tmpArray = [];

            if (array != null && array.length > 0) {
              var _iterator3 = _createForOfIteratorHelper(array),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var element = _step3.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            return tmpArray;
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
        }]);

        return ReferenceModelComponent;
      }();

      ReferenceModelComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
        }];
      };

      ReferenceModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-model',
        template: _raw_loader_reference_model_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_model_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]])], ReferenceModelComponent);
      /***/
    },

    /***/
    "UuZk":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-level/reference-level.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: ReferenceLevelComponent */

    /***/
    function UuZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceLevelComponent", function () {
        return ReferenceLevelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reference_level_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reference-level.component.html */
      "P9LE");
      /* harmony import */


      var _reference_level_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-level.component.scss */
      "jFtQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var ReferenceLevelComponent = /*#__PURE__*/function () {
        function ReferenceLevelComponent(modalConfig, skillMatrixService) {
          _classCallCheck(this, ReferenceLevelComponent);

          this.skillMatrixService = skillMatrixService;
          this.listLoading = false;
          this.isLevelListLoading = false;
        }

        _createClass(ReferenceLevelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRefMasterCertificateLevel();
          }
        }, {
          key: "getRefMasterCertificateLevel",
          value: function getRefMasterCertificateLevel() {
            var _this13 = this;

            this.isLevelListLoading = true;
            this.skillMatrixService.getMasterCertificateData('apis/sm/getLevelList').subscribe(function (response) {
              if (response.result) {
                _this13.isLevelListLoading = false;

                if (response.dataList != null && response.dataList.length > 0) {
                  _this13.refMasterCertificateLevel = response.dataList;
                } else {
                  _this13.refMasterCertificateLevel = [];
                }
              } else {
                _this13.refMasterCertificateLevel = [];
              }
            });
          }
        }]);

        return ReferenceLevelComponent;
      }();

      ReferenceLevelComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }];
      };

      ReferenceLevelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-level',
        template: _raw_loader_reference_level_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_level_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]])], ReferenceLevelComponent);
      /***/
    },

    /***/
    "Yvky":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function Yvky(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWZlcmVuY2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "eMYZ":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/reference/reference-gap-reason/reference-gap-reason.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eMYZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <!-- <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                        <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                        <!-- </div> -->\r\n\r\n\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by gap reason and plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceGapReason.branch\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"openRefGapReasonModal(openRefModalGapReason, 'top')\" [disabled]=\"!disableReferGap\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Gap Reason</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-loading *ngIf=\"isGapListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"Reason\">Gap Reason</th>\r\n                        <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of refGapReasonList\">\r\n\r\n                        <td>{{x.branchName}}</td>\r\n                        <td>{{x.reason}}</td>\r\n                        <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <td class=\"actionTd size text-left\">\r\n                            <i class=\"fa fa-edit editIcon\"\r\n                                (click)=\"updateRefGapReason(openRefModalGapReason, 'top', x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                            <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefGapReason(x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(refGapReasonList == null || refGapReasonList.length == 0)\">\r\n                        <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isGapListLoading\">\r\n                            <!-- *ngIf=\"!listLoading\" -->\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isGapListLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalGapReason let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceGapReason(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <!-- <div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-8 p-l-7\">\r\n\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [data]=\"branchAccessList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"addEditReferenceGapReason.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"row form-group\">\r\n                <label for=\"gapReason\" class=\"col-sm-4 col-form-label\">Gap Reason &nbsp;\r\n                    <span class=\"astrik\">*</span>\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"gapReason\" name=\"gapReason\" placeholder=\"Enter gap reason\"\r\n                        formControlName=\"gapReason\" [(ngModel)]=\"addEditReferenceGapReason.gapReason\"\r\n                        class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                    <div *ngIf=\"isFormSubmitted && formdata.controls['gapReason'].invalid || \r\n                            (formdata.controls['gapReason'].touched || formdata.controls['gapReason'].Untouched) \r\n                            && formdata.controls['gapReason'].hasError('required')\" class=\"custom-errorMsg\">\r\n                        Please enter gap reason\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "jFtQ":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-level/reference-level.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jFtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n  width: 100%;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 7rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #5dc3ed;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #5dc3ed;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 4px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.tableFixHead table {\n  position: relative;\n}\n.tableFixHead table th.actionTh,\n.tableFixHead table td.actionTd {\n  width: 100px;\n}\n.tableFixHead table tbody td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2UtbGV2ZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0FBREo7QUFLSTs7O0VBR0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIUjtBQU9BO0VBQ0ksWUFBQTtBQUpKO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBSVE7RUFDSSxjQUFBO0FBRlo7QUFJUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRlo7QUFJUTs7O0VBR0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQUZaO0FBS0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQUhSO0FBT0E7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUpKO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBS0k7RUFDSSxnQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSFI7QUFlSTtFQUNJLGtCQUFBO0FBWlI7QUFhUTs7RUFFSSxZQUFBO0FBWFo7QUFhUTtFQUNJLHNCQUFBO0FBWFoiLCJmaWxlIjoicmVmZXJlbmNlLWxldmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciB0YWIgMSovXHJcblxyXG4uYWRkUmVnRGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJvdHRvbTogMHJlbTtcclxuICAgIC8vIHotaW5kZXg6IDk5OTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi9SZWdidXR0b24ucG5nXCIpIHRyYW5zcGFyZW50IG5vLXJlcGVhdCAxMDAlO1xyXG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICAvLyBoZWlnaHQ6IDM3cHg7XHJcbiAgICAuYWRkUmVnQnRuLFxyXG4gICAgLmFkZFJlZ0J0bjpob3ZlcixcclxuICAgIC5hZGRSZWdCdG46Zm9jdXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogN3JlbTtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxNHB4LzM3cHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLmhhcy1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcclxuICAgICAgICAgICAgY29sb3I6ICM1ZGMzZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVkYzNlZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvbC1mb3JtLWxhYmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHRvcDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDEycHgvMS41IEhlbHZldGljYSBOZXVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gLmN1c3RvbS1lcnJvck1zZyB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbi8vICAgICBmb250LXNpemU6IDgwJTtcclxuLy8gICAgIGNvbG9yOiAjZmY1MjUyO1xyXG4vLyB9XHJcblxyXG4udGFibGVGaXhIZWFkIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGguYWN0aW9uVGgsXHJcbiAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRib2R5IHRkIHtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "kuko":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/reference/reference-gap-reason/reference-gap-reason.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kuko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n.ng-multiselect-dropdown.custom-multiSelection {\n  margin-left: 10px;\n  /* Adjust the value as needed */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2UtZ2FwLXJlYXNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7OztFQUdJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQVI7QUFJQTtFQUNJLFlBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUdRO0VBQ0ksY0FBQTtBQURaO0FBSVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS1E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFIWjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFMUjtBQVNBO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFOSjtBQVFJO0VBQ0ksbUJBQUE7QUFOUjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVBSO0FBV0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVJKO0FBMEJBO0VBQ0ksMkNBQUE7QUF2Qko7QUF5Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXZCUjtBQXlCUTtFQUNJLDZDQUFBO0FBdkJaO0FBNEJBO0VBQ0ksaUJBQUE7RUFBbUIsK0JBQUE7QUF4QnZCIiwiZmlsZSI6InJlZmVyZW5jZS1nYXAtcmVhc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciB0YWIgMSovXHJcblxyXG4uYWRkUmVnRGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJvdHRvbTogMHJlbTtcclxuXHJcbiAgICAuYWRkUmVnQnRuLFxyXG4gICAgLmFkZFJlZ0J0bjpob3ZlcixcclxuICAgIC5hZGRSZWdCdG46Zm9jdXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHJlbTtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxNHB4LzM3cHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdG9wOiAycHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMC43cmVtIDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1lcnJvck1zZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG59XHJcblxyXG4vLyAudGFibGVGaXhIZWFkIHtcclxuLy8gICAgIHRhYmxlIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgICAgICAgIHRoLmFjdGlvblRoLFxyXG4vLyAgICAgICAgIHRkLmFjdGlvblRkIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgdGJvZHkgdGQge1xyXG4vLyAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZWFlZiAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCAzMDAgMjVweC8xIEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duLmN1c3RvbS1tdWx0aVNlbGVjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "u5pl":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/reference/reference.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u5pl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Author - Sanket B.\r\nPurpose - Skill-matrix > Settings > Reference UI tabs\r\nDate - 16.08.2023 -->\r\n\r\n<div class=\"row m-0\">\r\n    <div class=\"col-9 m-auto\">\r\n        <div class=\"main-tab-switcher\">\r\n            <!-- <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\" (click)=\"setMainTab(1)\">Level\r\n            </div> -->\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\" (click)=\"setMainTab(1)\">Model\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(2)}\" (click)=\"setMainTab(2)\">Gap\r\n                Reason\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(3)}\" (click)=\"setMainTab(3)\">No. Of\r\n                Shifts\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-3 m-auto\">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n    </div>\r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div> -->\r\n</div>\r\n<!-- <app-reference-level *ngIf=\"isSetMainTab(1)\"></app-reference-level> -->\r\n<app-reference-model *ngIf=\"isSetMainTab(1)\"></app-reference-model>\r\n<app-reference-gap-reason *ngIf=\"isSetMainTab(2)\"></app-reference-gap-reason>\r\n<app-reference-shift *ngIf=\"isSetMainTab(3)\"></app-reference-shift>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=reference-reference-module-es5.js.map