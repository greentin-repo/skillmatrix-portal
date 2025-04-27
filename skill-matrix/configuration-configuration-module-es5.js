(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"], {
    /***/
    "1Oxx":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-model/reference-model.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Oxx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2UtbW9kZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJOzs7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxZQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWjtBQUtROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBSFo7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSSjtBQTBCQTtFQUNJLDJDQUFBO0FBdkJKO0FBeUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QlI7QUF5QlE7RUFDSSw2Q0FBQTtBQXZCWiIsImZpbGUiOiJyZWZlcmVuY2UtbW9kZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIHRhYiAxKi9cclxuXHJcbi5hZGRSZWdEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwcmVtO1xyXG5cclxuICAgIC5hZGRSZWdCdG4sXHJcbiAgICAuYWRkUmVnQnRuOmhvdmVyLFxyXG4gICAgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA4cmVtO1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4dHJhQ29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmhhcy1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1jbGVhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjk1MzcxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWVycm9yTXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNmZjUyNTI7XHJcbn1cclxuXHJcbi8vIC50YWJsZUZpeEhlYWQge1xyXG4vLyAgICAgdGFibGUge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAgICAgdGguYWN0aW9uVGgsXHJcbi8vICAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0Ym9keSB0ZCB7XHJcbi8vICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWVmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyNXB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "1Sgw":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/stagelabel/stagelabel.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Sgw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homepage-block {\n  position: absolute;\n  top: 12%;\n}\n\n.table .form-control {\n  border: none;\n  background-color: #f2f2f2;\n  /* Grey background color */\n  color: #333;\n  /* Specific text color */\n}\n\n.table .form-control::-moz-placeholder {\n  color: #bbbbbb;\n}\n\n.table .form-control::placeholder {\n  color: #bbbbbb;\n}\n\n.table .actionTd .updateButton {\n  background: #7044cd;\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n.table .actionTd .cancelButton {\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n.table .reset-button {\n  color: #7044cd;\n}\n\n.table .enabled-input {\n  border: 2px solid #9ec2ba;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdGFnZWxhYmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBQUo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQUFSOztBQUdJO0VBQ0ksY0FBQTtBQURSOztBQUFJO0VBQ0ksY0FBQTtBQURSOztBQUtRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUhaOztBQUtRO0VBQ0ksV0FBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIWjs7QUFTSTtFQUNJLGNBQUE7QUFQUjs7QUFVSTtFQUNJLHlCQUFBO0FBUlIiLCJmaWxlIjoic3RhZ2VsYWJlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaG9tZXBhZ2UtYmxvY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTIlO1xyXG59XHJcbi50YWJsZSB7XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAvKiBHcmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAvKiBTcGVjaWZpYyB0ZXh0IGNvbG9yICovXHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYmJiYmJiO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25UZCB7XHJcbiAgICAgICAgLnVwZGF0ZUJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTBwdC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2FuY2VsQnV0dG9ue1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDEwcHQvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAucmVzZXQtYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZW5hYmxlZC1pbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzllYzJiYTsgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "1WE7":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-model/reference-model.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ReferenceModelComponent */

    /***/
    function WE7(module, __webpack_exports__, __webpack_require__) {
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
      "YT4U");
      /* harmony import */


      var _reference_model_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-model.component.scss */
      "1Oxx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              this.getModelListData();
            }
          }
        }, {
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
              modelName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
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
            var _this = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this.branchAccessList = response.branchAccessList;
                  _this.branchAccessList = _this.setArray(_this.branchAccessList, 'branchId', 'branchName');
                  _this.branchAccessList = _this.sortFunction(_this.branchAccessList, 'name');
                  _this.referenceModel.branch = [_this.branchAccessList[0]];
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
                _this.referenceModel.branch = [_this.branchAccessList[0]];
              }

              _this.onChangeBranch(_this.branchAccessList[0]);
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
            var _this2 = this;

            this.isModelListLoading = true;
            console.log(this.staticPagination.total);

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage
            };

            if (this.searchDet.branchId != '') {
              req.branchId = this.searchDet.branchId;
            }

            if (this.branchId) {
              console.log(this.branchId[0].id);
              req.branchId = this.branchId[0].id;
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

            console.log(req);
            this.skillMatrixService.getModelListData('apis/sm/getModelList', req).subscribe(function (response) {
              if (response.result) {
                _this2.isModelListLoading = false;

                if (_this2.staticPagination.page == 1) {
                  _this2.staticPagination.total = response.totalCount;
                  _this2.staticPagination.totalPages = Math.ceil(response.totalCount / _this2.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this2.referencemodelList = response.dataList;
                  _this2.staticPagination.listLength = _this2.referencemodelList.length;
                } else {
                  _this2.referencemodelList = [];
                  _this2.staticPagination.listLength = _this2.referencemodelList.length;
                  _this2.staticPagination.total = _this2.referencemodelList.length;
                } // this.referencemodelList = response.dataList;

              } else {
                _this2.referencemodelList = [];
                _this2.staticPagination.listLength = _this2.referencemodelList.length;
                _this2.staticPagination.total = _this2.referencemodelList.length;
                _this2.isModelListLoading = false;
              }
            }, function (error) {
              _this2.referencemodelList = [];
              _this2.isModelListLoading = false;
            });
          }
        }, {
          key: "addRefModalOpen",
          value: function addRefModalOpen(modal, popupClass) {
            this.modalTitle = "Add New Model";
            this.addEditReferenceModel.branch = this.branchId;
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
            var _this3 = this;

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
                  "branchId": this.addEditReferenceModel.branch[0].id,
                  "modelName": this.addEditReferenceModel.modelName,
                  "isActive": true,
                  "updatedBy": this.userDet.empId
                };
                console.log(this.reqBody);
                this.skillMatrixService.saveReferenceModel('apis/sm/addModelDetails', this.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this3.modalService.dismissAll();

                    _this3.alertService.success("Model added successfully");

                    _this3.submitSpinner = false;
                    _this3.addEditReferenceModel.branch = '';
                    _this3.addEditReferenceModel.modelName = '';

                    _this3.getModelListData();
                  } else {
                    if (response.statusCode == 100) {
                      _this3.alertService.error(response.reason);
                    } else {
                      _this3.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceModel.branch != null && this.addEditReferenceModel.branch.length > 0) {
                  for (var _i = 0; _i < this.addEditReferenceModel.branch.length; _i++) {
                    this.addEditReferenceModel.branchId = this.addEditReferenceModel.branch[_i].branchId;
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
                    _this3.modalService.dismissAll();

                    _this3.alertService.success("Model updated successfully");

                    _this3.addEditReferenceModel.branch = '';
                    _this3.addEditReferenceModel.modelName = '';
                    _this3.addEditReferenceModel.modelId = '';
                    _this3.submitSpinner = false;

                    _this3.getModelListData();
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
          /*
          Remove Reference Model
          Author: Sanket B.
          Date : 21 Aug 2023
          */

        }, {
          key: "removeRefModel",
          value: function removeRefModel(RefModelData) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
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
                _this4.reqBody = {
                  "modelId": RefModelData.id,
                  "updatedBy": _this4.userDet.empId
                };

                _this4.skillMatrixService.deleteModelDetails('apis/sm/deleteModelDetails', _this4.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this4.alertService.success("Model removed successfully");

                    _this4.getModelListData();
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

        return ReferenceModelComponent;
      }();

      ReferenceModelComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ReferenceModelComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ReferenceModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-model',
        template: _raw_loader_reference_model_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_model_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ReferenceModelComponent);
      /***/
    },

    /***/
    "6ndI":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/stagelabel/stagelabel.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: StagelabelComponent */

    /***/
    function ndI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StagelabelComponent", function () {
        return StagelabelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stagelabel_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stagelabel.component.html */
      "kkES");
      /* harmony import */


      var _stagelabel_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stagelabel.component.scss */
      "1Sgw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var StagelabelComponent = /*#__PURE__*/function () {
        function StagelabelComponent(skillMatrixService, alertService, formBuilder) {
          _classCallCheck(this, StagelabelComponent);

          this.skillMatrixService = skillMatrixService;
          this.alertService = alertService;
          this.formBuilder = formBuilder;
          this.isInputEnabled = false;
          this.plantList = {};
          this.stage = {};
          this.isEditIconVisible = true;
          this.currentlyEditedStage = null;
          this.currentlyEditedStageId = null;
          this.isSubmitClicked = false;
          this.emphasize = false;
          this.isStageNameEmpty = false;
          this.singleDropdownSettings = {};
          this.searchDet = {};
          this.stageList = [];
          this.listLoading = false;
          this.borderColor = 'initial';
          this.isShowStageError = false;
        }

        _createClass(StagelabelComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              this.getStageList();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getStageList();
            this.stageForm = this.formBuilder.group({
              stageLabelUpdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
            });
            this.singleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
              allowSearchFilter: true,
              noDataAvailablePlaceholderText: 'Data not found',
              closeDropDownOnSelection: true
            };
          }
          /* get stage list
                @Author Saurabh S
               * @Date  Sept 29
             */

        }, {
          key: "getStageList",
          value: function getStageList() {
            var _this5 = this;

            this.listLoading = true;
            console.log(this.branchId[0].id);
            var data = {
              "branchId": this.branchId[0].id
            };
            this.skillMatrixService.getStageLevelList('apis/sm/getStageLabelList', data).subscribe(function (response) {
              console.log(response);
              _this5.listLoading = false;

              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  _this5.stageList = response.dataList;
                  _this5.isStageNameEmpty = _this5.stageList.some(function (stage) {
                    return stage.stageLabel !== null;
                  });

                  if (_this5.stageList != null && _this5.stageList.length > 0) {
                    for (var i = 0; i < _this5.stageList.length; i++) {
                      _this5.stageList[i].isStageNameEmpty = false;
                    }
                  }

                  _this5.stageList = _this5.stageList.map(function (stage) {
                    return Object.assign(Object.assign({}, stage), {
                      originalStageLabel: stage.stageLabel
                    });
                  });

                  if (_this5.stageList != null && _this5.stageList.length > 0) {
                    for (var _i2 = 0; _i2 < _this5.stageList.length; _i2++) {
                      _this5.stageList[_i2].isActive = false;
                      _this5.stageList[_i2].isStageNameEmpty = false;
                    }
                  }
                } else {
                  _this5.stageList = [];
                }
              } else {
                _this5.stageList = [];
              }
            }, function (error) {
              _this5.stageList = [];
              _this5.listLoading = false;
            });
          }
          /*
            Common function for set an array for dropdown
             @Author Saurabh S
          * @Date  Sept 29 2023
          */

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
          /*
          Single Select Dropdown onChange function
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "onChange",
          value: function onChange(ev, type) {
            if (ev) {} else {}
          }
          /*
              Multi Select Dropdown onChange function
              @Author Saurabh S
            * @Date  Sept 29 2023
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
          /*
                function updates stageLabel
                @Author Saurabh S
              * @Date  Sept 29 2023
            */

        }, {
          key: "updateStageLabel",
          value: function updateStageLabel(x) {
            var _this6 = this;

            if (!x.stageLabel) {
              this.isShowStageError = true;
              return;
            }

            this.isShowStageError = false;
            this.isSubmitClicked = true;
            this.emphasize = !this.emphasize;
            console.log(x);
            this.listLoading = true;
            var data = {
              "branchId": this.branchId[0].id,
              "stageId": x.stageId,
              "stageLabel": x.stageLabel,
              "updatedBy": this.userDet.empId
            };

            if (x.stageLabelId != undefined && x.stageLabelId != "") {
              data.id = x.stageLabelId;
            }

            console.log(data);
            this.skillMatrixService.updateStageData('apis/sm/updateStageLabel', data).subscribe(function (res) {
              x.isEdited = false;
              _this6.listLoading = false;

              if (res.result) {
                _this6.isStageNameEmpty = true;

                _this6.alertService.success("Stage Label Updated Successfully");

                _this6.getStageList();
              } else {
                if (res.statusCode == 100) {
                  _this6.alertService.error(res.reason);
                } else {
                  _this6.alertService.error('Error occurred while updating data. Please try again');
                }
              }
            });
            this.isSubmitClicked = false;
          }
          /*
          To reset input field
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "resetInput",
          value: function resetInput(x) {
            console.log(x);

            if (x.stageLabel !== x.originalStageLabel) {
              x.stageLabel = x.originalStageLabel; // Reset the input value to its original value
            }

            x.isEditable = false;
          }
          /*
          To show reset button
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "onInputChange",
          value: function onInputChange(stage) {
            stage.isInputEdited = true; // stage.isInputEdited = stage.stageLabel ? true : false;
          }
          /*
          To show save button
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "toggleEdit",
          value: function toggleEdit(stage) {
            var _this7 = this;

            this.cancelEdit(this.currentlyEditedStage);
            this.currentlyEditedStageId = stage.stageId;
            this.currentlyEditedStage = stage;
            this.currentlyEditedStage.isEditable = true;
            this.currentlyEditedStage.originalStageLabel = this.currentlyEditedStage.stageLabel;
            setTimeout(function () {
              _this7.stageInputField.nativeElement.focus();
            }, 0);
          }
          /*
          To show cancel button
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "cancelEdit",
          value: function cancelEdit(stage) {
            if (stage) {
              stage.stageLabel = stage.originalStageLabel;
              stage.isEditable = false;
            }

            this.currentlyEditedStageId = null;
            this.currentlyEditedStage = null;
          }
        }]);

        return StagelabelComponent;
      }();

      StagelabelComponent.ctorParameters = function () {
        return [{
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }];
      };

      StagelabelComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        stageInputField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['stageInputField']
        }]
      };
      StagelabelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stagelabel',
        template: _raw_loader_stagelabel_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stagelabel_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], StagelabelComponent);
      /***/
    },

    /***/
    "7VT4":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-shift/reference-shift.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: ReferenceShiftComponent */

    /***/
    function VT4(module, __webpack_exports__, __webpack_require__) {
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
      "rxG3");
      /* harmony import */


      var _reference_shift_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-shift.component.scss */
      "7nay");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              this.getShiftNoData();
            }
          }
        }, {
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
              shiftNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
            this.resetForm();
          }
        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this8 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this8.branchAccessList = response.branchAccessList;
                  _this8.branchAccessList = _this8.setArray(_this8.branchAccessList, 'branchId', 'branchName');
                  console.log(_this8.branchAccessList);
                  _this8.branchAccessList = _this8.sortFunction(_this8.branchAccessList, 'name');
                  _this8.referenceShiftNo.branch = [_this8.branchAccessList[0]];
                } else {
                  /* Use For Add Screen */
                  _this8.branchAccessList = [{
                    branchId: _this8.userDet.branch.branchId,
                    branchName: _this8.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this8.branchAccessList = [{
                  branchId: _this8.userDet.branch.branchId,
                  branchName: _this8.userDet.branch.name
                }];
              }

              if (_this8.branchAccessList.length > 0) {
                _this8.referenceShiftNo.branch = [_this8.branchAccessList[0]];
              }

              _this8.onChangeBranch(_this8.branchAccessList[0]);
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
            var _this9 = this;

            this.isShiftListLoading = true;

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage
            };

            if (this.searchDet.branchId != '') {
              req.branchId = this.searchDet.branchId;
            }

            if (this.branchId) {
              console.log(this.branchId[0].id);
              req.branchId = this.branchId[0].id;
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

            console.log(req);
            this.skillMatrixService.getShiftNoData('apis/sm/getShiftList', req).subscribe(function (response) {
              if (response.result) {
                _this9.isShiftListLoading = false;

                if (_this9.staticPagination.page == 1) {
                  _this9.staticPagination.total = response.totalCount;
                  _this9.staticPagination.totalPages = Math.ceil(response.totalCount / _this9.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this9.refShiftNoData = response.dataList;
                  _this9.staticPagination.listLength = _this9.refShiftNoData.length;
                } else {
                  _this9.refShiftNoData = [];
                  _this9.staticPagination.listLength = _this9.refShiftNoData.length;
                  _this9.staticPagination.total = _this9.refShiftNoData.length;
                } // this.refShiftNoData = response.dataList;

              } else {
                _this9.refShiftNoData = [];
                _this9.staticPagination.listLength = _this9.refShiftNoData.length;
                _this9.staticPagination.total = _this9.refShiftNoData.length;
                _this9.isShiftListLoading = false;
              }
            }, function (error) {
              _this9.refShiftNoData = [];
              _this9.isShiftListLoading = false;
            });
          }
        }, {
          key: "addRefShiftNoOpen",
          value: function addRefShiftNoOpen(modal, popupClass) {
            this.isEditing = false;
            this.modalTitle = "Add Shift";
            this.addEditReferenceShiftNo.branch = this.branchId;
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
            var _this10 = this;

            this.isFormSubmitted = true;

            if (formdata.valid) {
              if (this.addEditReferenceShiftNo.shiftId == undefined || this.addEditReferenceShiftNo.shiftId == '') {
                if (this.addEditReferenceShiftNo.branch != null && this.addEditReferenceShiftNo.branch.length > 0) {
                  for (var i = 0; i < this.addEditReferenceShiftNo.branch.length; i++) {
                    this.addEditReferenceShiftNo.branchId = this.addEditReferenceShiftNo.branch[i].branchId;
                  }
                }

                this.reqBody = {
                  "branchId": this.addEditReferenceShiftNo.branch[0].id,
                  // "branchId": this.referenceShiftNo.branch[0].branchId,
                  "shiftName": this.addEditReferenceShiftNo.shiftName,
                  "isActive": true,
                  "updatedBy": this.userDet.empId
                };
                console.log(this.reqBody);
                this.skillMatrixService.saveReferenceShiftNo('apis/sm/saveShiftDetails', this.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this10.modalService.dismissAll();

                    _this10.alertService.success("New shift added successfully");

                    _this10.addEditReferenceShiftNo.branch = '';
                    _this10.addEditReferenceShiftNo.modelName = '';

                    _this10.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this10.alertService.error(response.reason);
                    } else {
                      _this10.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceShiftNo.shiftId != null && this.addEditReferenceShiftNo.branch.length > 0) {
                  for (var _i3 = 0; _i3 < this.addEditReferenceShiftNo.branch.length; _i3++) {
                    this.addEditReferenceShiftNo.branchId = this.addEditReferenceShiftNo.branch[_i3].branchId;
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
                    _this10.modalService.dismissAll();

                    _this10.alertService.success("Shift updated successfully");

                    _this10.addEditReferenceShiftNo.branch = '';
                    _this10.addEditReferenceShiftNo.modelName = '';
                    _this10.addEditReferenceShiftNo.modelId = '';

                    _this10.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this10.alertService.error(response.reason);
                    } else {
                      _this10.alertService.error('Error occurred while updating data. Please try again');
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "removeRefShift",
          value: function removeRefShift(RefShiftData) {
            var _this11 = this;

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
                _this11.reqBody = {
                  "shiftId": RefShiftData.id,
                  "updatedBy": _this11.userDet.empId
                };
                console.log(_this11.reqBody);

                _this11.skillMatrixService.deleteShiftDetails('apis/sm/deleteShiftDetails', _this11.reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this11.alertService.success("Shift removed successfully");

                    _this11.getShiftNoData();
                  } else {
                    if (response.statusCode == 100) {
                      _this11.alertService.error(response.reason);
                    } else {
                      _this11.alertService.error('Error occurred while removing data. Please try again');
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

        return ReferenceShiftComponent;
      }();

      ReferenceShiftComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ReferenceShiftComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ReferenceShiftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-shift',
        template: _raw_loader_reference_shift_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_shift_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_6__["SkillMatrixService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ReferenceShiftComponent);
      /***/
    },

    /***/
    "7nay":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-shift/reference-shift.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nay(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2Utc2hpZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJOzs7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUFSO0FBSUE7RUFDSSxZQUFBO0FBREo7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFHUTtFQUNJLGNBQUE7QUFEWjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFGWjtBQUtROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBSFo7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBTFI7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBTko7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFSSjtBQTBCQTtFQUNJLDJDQUFBO0FBdkJKO0FBeUJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUF2QlI7QUF5QlE7RUFDSSw2Q0FBQTtBQXZCWiIsImZpbGUiOiJyZWZlcmVuY2Utc2hpZnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjc3MgZm9yIHRhYiAxKi9cclxuXHJcbi5hZGRSZWdEaXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYm90dG9tOiAwcmVtO1xyXG5cclxuICAgIC5hZGRSZWdCdG4sXHJcbiAgICAuYWRkUmVnQnRuOmhvdmVyLFxyXG4gICAgLmFkZFJlZ0J0bjpmb2N1cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA4cmVtO1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDE0cHgvMzdweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmV4dHJhQ29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLmhhcy1zZWFyY2gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZvcm0tY29udHJvbC1jbGVhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjk1MzcxO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICBpbnB1dDpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwNDRjZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAwLjdyZW0gMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY3VzdG9tLWVycm9yTXNnIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNmZjUyNTI7XHJcbn1cclxuXHJcbi8vIC50YWJsZUZpeEhlYWQge1xyXG4vLyAgICAgdGFibGUge1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbi8vICAgICAgICAgdGguYWN0aW9uVGgsXHJcbi8vICAgICAgICAgdGQuYWN0aW9uVGQge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0Ym9keSB0ZCB7XHJcbi8vICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTNlYWVmICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDMwMCAyNXB4LzEgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "ASH+":
    /*!********************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-gap-reason/reference-gap-reason.component.ts ***!
      \********************************************************************************************************************/

    /*! exports provided: ReferenceGapReasonComponent */

    /***/
    function ASH(module, __webpack_exports__, __webpack_require__) {
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
      "KFBB");
      /* harmony import */


      var _reference_gap_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reference-gap-reason.component.scss */
      "ZQ7R");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
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


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");

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
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              this.getRefGapReasonList();
            }
          }
        }, {
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
              gapReason: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
            this.resetForm();
          }
        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList() {
            var _this12 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (response) {
              if (response.result) {
                if (response.branchAccessList != null && response.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this12.branchAccessList = response.branchAccessList;
                  _this12.branchAccessList = _this12.setArray(_this12.branchAccessList, 'branchId', 'branchName');
                  _this12.branchAccessList = _this12.sortFunction(_this12.branchAccessList, 'name');
                  _this12.searchDet.branchId = [_this12.branchAccessList[0]];
                  console.log(_this12.searchDet.branchId);
                } else {
                  /* Use For Add Screen */
                  _this12.branchAccessList = [{
                    branchId: _this12.userDet.branch.branchId,
                    branchName: _this12.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this12.branchAccessList = [{
                  branchId: _this12.userDet.branch.branchId,
                  branchName: _this12.userDet.branch.name
                }];
              }

              if (_this12.branchAccessList.length > 0) {
                _this12.searchDet.branchId = [_this12.branchAccessList[0]];
              }

              _this12.onChangeBranch(_this12.branchAccessList[0]);
            });
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            console.log(event);

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
            var _this13 = this;

            this.isGapListLoading = true;

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage
            };

            if (this.searchDet.branchId != '') {
              req.branchId = this.searchDet.branchId;
            }

            if (this.branchId) {
              console.log(this.branchId[0].id);
              req.branchId = this.branchId[0].id;
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

            console.log(req);
            this.skillMatrixService.getGapReasonListData('apis/sm/getGapReasonList', req).subscribe(function (response) {
              if (response.result) {
                _this13.isGapListLoading = false;

                if (_this13.staticPagination.page == 1) {
                  _this13.staticPagination.total = response.totalCount;
                  _this13.staticPagination.totalPages = Math.ceil(response.totalCount / _this13.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this13.refGapReasonList = response.dataList;
                  console.log(_this13.refGapReasonList);
                  _this13.staticPagination.listLength = _this13.refGapReasonList.length;
                } else {
                  _this13.refGapReasonList = [];
                  _this13.staticPagination.listLength = _this13.refGapReasonList.length;
                  _this13.staticPagination.total = _this13.refGapReasonList.length;
                } // this.refGapReasonList = response.dataList

              } else {
                _this13.refGapReasonList = [];
                _this13.staticPagination.listLength = _this13.refGapReasonList.length;
                _this13.staticPagination.total = _this13.refGapReasonList.length;
                _this13.isGapListLoading = false;
              }
            }, function (error) {
              _this13.refGapReasonList = [];
              _this13.isGapListLoading = false;
            });
          }
        }, {
          key: "openRefGapReasonModal",
          value: function openRefGapReasonModal(modal, popupClass) {
            this.modalTitle = "Add Gap Reason";
            this.addEditReferenceGapReason.branch = this.branchId;
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
            var _this14 = this;

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
                  "branchId": this.addEditReferenceGapReason.branch[0].id,
                  // "branchId": this.referenceGapReason.branch[0].branchId,
                  "reason": this.addEditReferenceGapReason.gapReason,
                  "isActive": true,
                  "createdBy": this.userDet.empId
                };
                this.skillMatrixService.saveReferenceGapReason('apis/sm/saveGapReason', this.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this14.modalService.dismissAll();

                    _this14.alertService.success("Gap reason added successfully");

                    _this14.addEditReferenceGapReason.branch = '';
                    _this14.addEditReferenceGapReason.gapReason = '';

                    _this14.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this14.alertService.error(response.reason);
                    } else {
                      _this14.alertService.error('Error occurred while adding data. Please try again');
                    }
                  }
                });
              } else {
                if (this.addEditReferenceGapReason.branch != null && this.addEditReferenceGapReason.branch.length > 0) {
                  for (var _i4 = 0; _i4 < this.addEditReferenceGapReason.branch.length; _i4++) {
                    this.addEditReferenceGapReason.branchId = this.addEditReferenceGapReason.branch[_i4].branchId;
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
                    _this14.modalService.dismissAll();

                    _this14.alertService.success("Gap reason updated successfully");

                    _this14.addEditReferenceGapReason.branch = '';
                    _this14.addEditReferenceGapReason.gapReason = '';
                    _this14.addEditReferenceGapReason.gapId = '';

                    _this14.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this14.alertService.error(response.reason);
                    } else {
                      _this14.alertService.error('Error occurred while updating data. Please try again');
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "removeRefGapReason",
          value: function removeRefGapReason(RefGapReasonData) {
            var _this15 = this;

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
                _this15.reqBody = {
                  "reasonId": RefGapReasonData.id,
                  "updatedBy": _this15.userDet.empId
                };

                _this15.skillMatrixService.removeRefGapReason('apis/sm/deleteGapReason', _this15.reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this15.alertService.success("Gap reason removed successfully");

                    _this15.getRefGapReasonList();
                  } else {
                    if (response.statusCode == 100) {
                      _this15.alertService.error(response.reason);
                    } else {
                      _this15.alertService.error('Error occurred while removing data. Please try again');
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
              var _iterator4 = _createForOfIteratorHelper(array),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var element = _step4.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
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
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      ReferenceGapReasonComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ReferenceGapReasonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reference-gap-reason',
        template: _raw_loader_reference_gap_reason_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reference_gap_reason_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_7__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_8__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], ReferenceGapReasonComponent);
      /***/
    },

    /***/
    "CJTW":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/level/level.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CJTW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div>\r\n        <app-loading *ngIf=\"isLevelListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width: 8%;\">Sr. No</th>\r\n                            <th>Level</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of refMasterCertificateLevel; let i = index\">\r\n                            <td style=\"width: 10%;\">{{i + 1}}</td>\r\n                            <td>{{x.levelName}}</td>\r\n                        </tr>                        \r\n                        <tr *ngIf=\"(refMasterCertificateLevel == null || refMasterCertificateLevel.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\"><!-- *ngIf=\"!listLoading\" -->\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr> \r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "Dn0Z":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/document-number/document-number.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dn0Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homepage-block {\n  position: absolute;\n  top: 12%;\n}\n\n.extraContent {\n  padding: 0px;\n}\n\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  background-color: transparent;\n}\n\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n\n.table .form-control {\n  border: none;\n  background-color: #f2f2f2;\n  /* Grey background color */\n  color: #333;\n  /* Specific text color */\n}\n\n.table .form-control::-moz-placeholder {\n  color: #bbbbbb;\n}\n\n.table .form-control::placeholder {\n  color: #bbbbbb;\n}\n\n.table .actionTd .updateButton {\n  background: #7044cd;\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n.table .actionTd .cancelButton {\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n.table .reset-button {\n  color: #7044cd;\n}\n\n.table .enabled-input {\n  border: 2px solid #9ec2ba;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkb2N1bWVudC1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBSTtFQUNJLGtCQUFBO0FBRVI7O0FBQVE7RUFDSSxjQUFBO0FBRVo7O0FBQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUVROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUFaOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFGUjs7QUFNSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0FBSFI7O0FBTUk7RUFDSSxjQUFBO0FBSlI7O0FBR0k7RUFDSSxjQUFBO0FBSlI7O0FBUVE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTlo7O0FBUVE7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU5aOztBQVlJO0VBQ0ksY0FBQTtBQVZSOztBQWFJO0VBQ0kseUJBQUE7QUFYUiIsImZpbGUiOiJkb2N1bWVudC1udW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXBhZ2UtYmxvY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTIlO1xyXG59XHJcbi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLnRhYmxlIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgICAgIC8qIEdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIC8qIFNwZWNpZmljIHRleHQgY29sb3IgKi9cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNiYmJiYmI7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvblRkIHtcclxuICAgICAgICAudXBkYXRlQnV0dG9uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxMHB0LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYW5jZWxCdXR0b257XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCA0MDAgMTBwdC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5yZXNldC1idXR0b24ge1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5lbmFibGVkLWlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOWVjMmJhOyBcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "JBbn":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/document-number/document-number.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: DocumentNumberComponent */

    /***/
    function JBbn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentNumberComponent", function () {
        return DocumentNumberComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_document_number_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./document-number.component.html */
      "gchv");
      /* harmony import */


      var _document_number_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./document-number.component.scss */
      "Dn0Z");
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


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var DocumentNumberComponent = /*#__PURE__*/function () {
        function DocumentNumberComponent(skillMatrixService, modalConfig, modalService, alertService, fb) {
          _classCallCheck(this, DocumentNumberComponent);

          this.skillMatrixService = skillMatrixService;
          this.modalService = modalService;
          this.alertService = alertService;
          this.fb = fb;
          this.addEditReferenceDocName = {};
          this.currentlyEditedDocument = null;
          this.currentlyEditedDocumentId = null;
          modalConfig.backdrop = 'static';
          modalConfig.keyboard = false;
        }

        _createClass(DocumentNumberComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              console.log(changes.branchId.currentValue[0]);
              this.branchId = changes.branchId.currentValue[0].id;
              this.getDocumentList(this.branchId);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.branchId && this.branchId != null) {
              this.branchId = this.branchId[0].id;
              this.getDocumentList(this.branchId);
            }

            this.formdata = this.fb.group({
              docName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
            });
            this.resetForm();
          } // Aniket :- Get Document List 

        }, {
          key: "getDocumentList",
          value: function getDocumentList(id) {
            var _this16 = this;

            console.log(id);
            var req = {
              "branchId": id
            };
            this.skillMatrixService.getDocumentList('apis/sm/getDocName', req).subscribe(function (response) {
              if (response.result) {
                console.log(response);

                if (response.data != null) {
                  _this16.documentList = [response.data];
                } else {
                  _this16.documentList = [];
                }
              } else {
                _this16.documentList = [];
              }
            });
          } // Aniket :- Update Document Name 

        }, {
          key: "updateDocumentNumber",
          value: function updateDocumentNumber(doc) {
            var _this17 = this;

            var req = {
              "branchId": doc.branchId,
              "id": doc.id,
              "docName": doc.docName
            };
            this.skillMatrixService.updateDocumentNumber('apis/sm/updateDocName', req).subscribe(function (response) {
              if (response.result) {
                console.log();

                _this17.alertService.success("Document name updated successfully");

                _this17.getDocumentList(_this17.branchId);
              } else {
                _this17.alertService.error('Error occurred while adding data. Please try again');
              }
            });
          } // Aniket :- Save Document Name 

        }, {
          key: "saveDocument",
          value: function saveDocument(formdata) {
            var _this18 = this;

            var _a;

            this.isFormSubmitted = true;

            if (formdata.valid) {
              var trimmedDoc = (_a = this.addEditReferenceDocName.doc) === null || _a === void 0 ? void 0 : _a.trim();

              if (trimmedDoc && trimmedDoc !== '') {
                this.addEditReferenceDocName.docName = trimmedDoc;
              } else {
                this.alertService.error('Enter a document name');
                return;
              }

              if (this.addEditReferenceDocName.branch != null && this.addEditReferenceDocName.branch != undefined) {
                this.addEditReferenceDocName.branchId = this.addEditReferenceDocName.branch;
              } else {
                this.alertService.error('Please select branch');
                return;
              }

              var reqBody = {
                "branchId": this.addEditReferenceDocName.branchId,
                "docName": this.addEditReferenceDocName.docName
              };
              this.skillMatrixService.saveDocument('apis/sm/saveDocName', reqBody).subscribe(function (response) {
                if (response.result) {
                  _this18.modalService.dismissAll();

                  _this18.alertService.success("Document name added successfully");

                  _this18.addEditReferenceDocName.branch = '';
                  _this18.addEditReferenceDocName.modelName = '';

                  _this18.getDocumentList(_this18.addEditReferenceDocName.branchId);
                } else {
                  if (response.statusCode == 100) {
                    _this18.alertService.error(response.reason);

                    _this18.getDocumentList(_this18.addEditReferenceDocName.branchId);
                  } else {
                    _this18.alertService.error('Error occurred while adding data. Please try again');

                    _this18.getDocumentList(_this18.addEditReferenceDocName.branchId);
                  }
                }
              });
            }
          } // Aniket :- Delet Document Name 

        }, {
          key: "deleteDocument",
          value: function deleteDocument(document) {
            var _this19 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want to remove this document name ?',
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
                console.log(document);
                var reqBody = {
                  "branchId": document.branchId,
                  "id": document.id
                };

                _this19.skillMatrixService.deleteDocument('apis/sm/deleteDocName', reqBody).subscribe(function (response) {
                  if (response.result) {
                    _this19.alertService.success("Document name deleted successfully");

                    _this19.getDocumentList(document.branchId);
                  } else {
                    if (response.statusCode == 100) {
                      _this19.alertService.error(response.reason);

                      _this19.getDocumentList(document.branchId);
                    } else {
                      _this19.alertService.error('Error occurred while deleting data. Please try again');

                      _this19.getDocumentList(document.branchId);
                    }
                  }
                });
              }
            });
          } // Aniket :- Show button 

        }, {
          key: "toggleEdit",
          value: function toggleEdit(Doc) {
            var _this20 = this;

            this.cancelEdit(this.currentlyEditedDocument);
            this.currentlyEditedDocumentId = Doc.id;
            this.currentlyEditedDocument = Doc;
            this.currentlyEditedDocument.isEditable = true;
            this.currentlyEditedDocument.originalDocLabel = this.currentlyEditedDocument.docName;
            setTimeout(function () {
              _this20.DocInputField.nativeElement.focus();
            }, 0);
          } // Aniket :- Cancel button

        }, {
          key: "cancelEdit",
          value: function cancelEdit(Doc) {
            if (Doc) {
              Doc.docName = this.currentlyEditedDocument.originalDocLabel;
              Doc.isEditable = false;
            }

            this.currentlyEditedDocumentId = null;
            this.currentlyEditedDocument = null;
            this.DocInputField = null;
          } // Aniket :- Show modal for add document 

        }, {
          key: "addRefShiftNoOpen",
          value: function addRefShiftNoOpen(modal, popupClass) {
            console.log(this.branchId);
            this.modalTitle = "Add Document";
            this.addEditReferenceDocName.branch = this.branchId;
            this.addEditReferenceDocName.doc = '';
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
        }]);

        return DocumentNumberComponent;
      }();

      DocumentNumberComponent.ctorParameters = function () {
        return [{
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }];
      };

      DocumentNumberComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        DocInputField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['DocInputField']
        }]
      };
      DocumentNumberComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-document-number',
        template: _raw_loader_document_number_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_document_number_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])], DocumentNumberComponent);
      /***/
    },

    /***/
    "KFBB":
    /*!************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/reference-gap-reason/reference-gap-reason.component.html ***!
      \************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KFBB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <!-- <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                        <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                        <!-- </div> -->\r\n\r\n\r\n                        <div class=\"form-group has-search\">\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by gap reason or plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <!-- <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"searchDet.branchId\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div> -->\r\n                   <!-- referenceGapReason.branch -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"openRefGapReasonModal(openRefModalGapReason, 'top')\" [disabled]=\"!disableReferGap\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Gap Reason</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-loading *ngIf=\"isGapListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"Reason\">Gap Reason</th>\r\n                        <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of refGapReasonList\">\r\n\r\n                        <td>{{x.branchName}}</td>\r\n                        <td>{{x.reason}}</td>\r\n                        <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                        <td class=\"actionTd size text-left\">\r\n                            <i class=\"fa fa-edit editIcon\"\r\n                                (click)=\"updateRefGapReason(openRefModalGapReason, 'top', x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                            <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefGapReason(x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(refGapReasonList == null || refGapReasonList.length == 0)\">\r\n                        <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isGapListLoading\">\r\n                            <!-- *ngIf=\"!listLoading\" -->\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isGapListLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalGapReason let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceGapReason(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <!-- <div>\r\n                <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-8 p-l-7\">\r\n\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [data]=\"branchAccessList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"addEditReferenceGapReason.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div> -->\r\n            <div class=\"row form-group\">\r\n                <label for=\"gapReason\" class=\"col-sm-4 col-form-label\">Gap Reason &nbsp;\r\n                    <span class=\"astrik\">*</span>\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"text\" id=\"gapReason\" name=\"gapReason\" placeholder=\"Enter gap reason\"\r\n                        formControlName=\"gapReason\" [(ngModel)]=\"addEditReferenceGapReason.gapReason\"\r\n                        class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                    <div *ngIf=\"isFormSubmitted && formdata.controls['gapReason'].invalid || \r\n                            (formdata.controls['gapReason'].touched || formdata.controls['gapReason'].Untouched) \r\n                            && formdata.controls['gapReason'].hasError('required')\" class=\"custom-errorMsg\">\r\n                        Please enter gap reason\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "KmVL":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/configuration-routing.module.ts ***!
      \*********************************************************************************************/

    /*! exports provided: ConfigurationRoutingModule */

    /***/
    function KmVL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function () {
        return ConfigurationRoutingModule;
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


      var _configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./configuration.component */
      "xswA");

      var routes = [{
        path: '',
        component: _configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"]
      }];

      var ConfigurationRoutingModule = function ConfigurationRoutingModule() {
        _classCallCheck(this, ConfigurationRoutingModule);
      };

      ConfigurationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfigurationRoutingModule);
      /***/
    },

    /***/
    "M4Al":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/level/level.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function M4Al(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homepage-block {\n  position: absolute;\n  top: 12%;\n}\n\n.table .form-control {\n  border: none;\n  background-color: #f2f2f2;\n  /* Grey background color */\n  color: #333;\n  /* Specific text color */\n}\n\n.table .form-control::-moz-placeholder {\n  color: #bbbbbb;\n}\n\n.table .form-control::placeholder {\n  color: #bbbbbb;\n}\n\n.table .actionTd .updateButton {\n  background: #7044cd;\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n\n.table .actionTd .cancelButton {\n  color: #fff;\n  text-transform: capitalize;\n  font: normal normal 400 10pt/1.5 Helvetica Neue;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsZXZlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQUFKOztBQUdJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUFBUjs7QUFHSTtFQUNJLGNBQUE7QUFEUjs7QUFBSTtFQUNJLGNBQUE7QUFEUjs7QUFLUTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIWjs7QUFLUTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSFoiLCJmaWxlIjoibGV2ZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhvbWVwYWdlLWJsb2Nre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjEyJTtcclxufVxyXG4udGFibGUge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgLyogR3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgLyogU3BlY2lmaWMgdGV4dCBjb2xvciAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogI2JiYmJiYjtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uVGQge1xyXG4gICAgICAgIC51cGRhdGVCdXR0b24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNzA0NGNkO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDEwcHQvMS41IEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbmNlbEJ1dHRvbntcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxMHB0LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "MUxl":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/level/level.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: LevelComponent */

    /***/
    function MUxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LevelComponent", function () {
        return LevelComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_level_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./level.component.html */
      "CJTW");
      /* harmony import */


      var _level_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./level.component.scss */
      "M4Al");
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

      var LevelComponent = /*#__PURE__*/function () {
        function LevelComponent(modalConfig, skillMatrixService) {
          _classCallCheck(this, LevelComponent);

          this.skillMatrixService = skillMatrixService;
          this.listLoading = false;
          this.isLevelListLoading = false;
        }

        _createClass(LevelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRefMasterCertificateLevel();
          }
        }, {
          key: "getRefMasterCertificateLevel",
          value: function getRefMasterCertificateLevel() {
            var _this21 = this;

            this.isLevelListLoading = true;
            this.skillMatrixService.getMasterCertificateData('apis/sm/getLevelList').subscribe(function (response) {
              if (response.result) {
                _this21.isLevelListLoading = false;

                if (response.dataList != null && response.dataList.length > 0) {
                  _this21.refMasterCertificateLevel = response.dataList;
                } else {
                  _this21.refMasterCertificateLevel = [];
                }
              } else {
                _this21.refMasterCertificateLevel = [];
              }
            });
          }
        }]);

        return LevelComponent;
      }();

      LevelComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }];
      };

      LevelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-level',
        template: _raw_loader_level_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_level_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]])], LevelComponent);
      /***/
    },

    /***/
    "NC2Z":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/assessment-configuration/assessment-configuration.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NC2Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\" >\r\n                            <span  class=\"form-control-feedback\"\r\n                               ></span>\r\n                            <input type=\"text\" class=\"form-control\" />\r\n                        </div>\r\n             \r\n                    </div>\r\n\r\n                    <!-- <div class=\"col-6 p-r-5 p-l-5 m-b-20\">\r\n                        <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1\">Plant</label>\r\n                            <div class=\"\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"plantList\" [(ngModel)]=\"searchDet.branchId\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"openNoOfDaysModal(openRefModalGapReason, 'top')\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Gap Days</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <app-loading *ngIf=\"isGapListLoading\"\r\n        style=\"position: absolute;top: 50%;left: 50%;\">Please Wait...</app-loading>\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th mat-sort-header=\"BranchName\">Plant</th>\r\n                        <th mat-sort-header=\"LevelName\">Level</th>\r\n                        <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                        <th class=\"actionTh\" mat-sort-header=\"NoOfDays\">Gap In Days</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let x of assessmentAssign\">\r\n                        <td>{{x.branchName}}</td>\r\n                        <td>{{x.levelName}}</td>\r\n                        <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy')\r\n                            : 'N/A'}}</td>\r\n                        <td>{{x.noOfDays}}</td>\r\n                        <td class=\"actionTd size text-left\">\r\n                            <i class=\"fa fa-edit editIcon\"\r\n                                (click)=\"updateNoOfDays(openRefModalGapReason, 'top', x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                            <i class=\"fas fa-trash-alt deleteIcon\"\r\n                                (click)=\"removeNoOfDays(x)\">\r\n                            </i>&nbsp; &nbsp;\r\n                        </td>\r\n                    </tr>\r\n                    <tr\r\n                        *ngIf=\"(assessmentAssign == null || assessmentAssign.length == 0)\">\r\n                        <td colspan=\"2\" class=\"text-center no-record-found\"\r\n                            *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"2\" class=\"text-center loading-div\"\r\n                            *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <app-pagination [staticPagination]=\"staticPagination\"\r\n            (paginationData)=\"loadMore($event)\"></app-pagination>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalGapReason let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\"\r\n            (click)=\"closeFilterPopup()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\"\r\n        (ngSubmit)=\"saveOrUpdateAssessmentDays(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div class=\"form-group row\">\r\n                <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant\r\n                    &nbsp;\r\n                    <span class=\"astrik\">*</span>\r\n                </label>\r\n                <div class=\"col-8 p-l-7\">\r\n                    <ng-multiselect-dropdown name=\"branchId\"\r\n                        class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Plant'\"\r\n                        [settings]=\"SingleDropdownSettings\" [disabled]=\"isEditing && formdata.get('branchId').value\"\r\n                        formControlName=\"branchId\" [data]=\"plantList\"\r\n                        [(ngModel)]=\"searchDet.branchId\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div\r\n                        *ngIf=\"isFormSubmitted  && formdata.controls['branchId'].invalid && (formdata.controls['branchId'].touched || formdata.controls['branchId'].dirty)\"\r\n                        class=\"custom-errorMsg\">\r\n                        <div\r\n                            *ngIf=\"formdata.controls['branchId'].errors.required\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <label for=\"skillLvlId\" class=\"col-sm-4 col-form-label\">Skill\r\n                    Level &nbsp;\r\n                    <span class=\"astrik\">*</span>\r\n                </label>\r\n                <div class=\"col-8 p-l-7\">\r\n                    <ng-multiselect-dropdown name=\"skillLvlId\"\r\n                        class=\"custom-multiSelection customWidthForInter\"\r\n                        [placeholder]=\"'Select Skill Level'\"\r\n                        [settings]=\"SingleDropdownSettings\"\r\n                        formControlName=\"skillLvlId\"\r\n                        [data]=\"masterLevelList\"\r\n                        [(ngModel)]=\"searchDet.masterLevelData\">\r\n                    </ng-multiselect-dropdown>\r\n                    <div\r\n                        *ngIf=\"isFormSubmitted  && formdata.controls['skillLvlId'].invalid &&  (formdata.controls['skillLvlId'].touched || formdata.controls['skillLvlId'].dirty)\"\r\n                        class=\"custom-errorMsg\">\r\n                        <div\r\n                            *ngIf=\"formdata.controls['skillLvlId'].errors.required\">\r\n                            Please select skill level\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <label for=\"noOfDays\" class=\"col-sm-4 col-form-label\">No Of Days\r\n                    &nbsp;\r\n                    <span class=\"astrik\">*</span>\r\n                </label>\r\n                <div class=\"col-sm-8\">\r\n                    <input type=\"number\" id=\"noOfDays\" name=\"noOfDays\"\r\n                        placeholder=\"Enter Number Of Days\"\r\n                        formControlName=\"noOfDays\"\r\n                        [(ngModel)]=\"searchDet.noOfDaysEnter\"\r\n                        class=\"form-control customInput-field\" maxlength=\"255\" />\r\n\r\n                    <div\r\n                        *ngIf=\"formdata.controls['noOfDays'].invalid && (formdata.controls['noOfDays'].touched || formdata.controls['noOfDays'].dirty)\"\r\n                        class=\"custom-errorMsg\">\r\n                        <div\r\n                            *ngIf=\"formdata.controls['noOfDays'].errors.required\">\r\n                            Please enter no. of days\r\n                        </div>\r\n\r\n                        <div *ngIf=\"formdata.get('noOfDays').hasError('negativeValue') && !formdata.get('noOfDays').hasError('notAnInteger')\">\r\n                            Number of days can not be negative.\r\n                          </div>\r\n                          <div *ngIf=\"formdata.get('noOfDays').hasError('notAnInteger') && !formdata.get('noOfDays').hasError('negativeValue')\">\r\n                            Number of days must be an integer.\r\n                          </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\"\r\n                [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\"\r\n                    role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "Qbr0":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/configuration.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qbr0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Configuration Ui\r\nAuthor simran\r\nDat 27/09/2023 -->\r\n    <div class=\"extraContent\">\r\n        \r\n<div class=\"row m-0\">\r\n    <!-- <div class=\"col-md-9 m-auto\">\r\n        <div class=\"main-tab-switcher\">\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\" (click)=\"setMainTab(1)\">Stages\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(3)}\" (click)=\"setMainTab(3)\">Level\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(2)}\" (click)=\"setMainTab(2)\">Activity Assessment Gap (Days)\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(4)}\" (click)=\"setMainTab(4)\">Model\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(5)}\" (click)=\"setMainTab(5)\">Gap\r\n                Reason\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(6)}\" (click)=\"setMainTab(6)\">No. Of\r\n                Shifts\r\n            </div>\r\n            <div class=\"main-tab-switch\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(7)}\" (click)=\"setMainTab(7)\">Document Number\r\n            </div>  \r\n        </div>\r\n    </div> -->\r\n    <!-- Aniket :- Add Horizontal ScrollBar -->\r\n    <div class=\"col-9 m-auto\" style=\" max-width: 72%;\">\r\n        <div class=\"pr tabMenu\">\r\n            <div class=\"scrollLeftside\" (click)=\"scrollLeft()\" *ngIf=\"scrollLeftBtn\">\r\n                <i class=\"feather icon-chevron-left\"></i>\r\n            </div>\r\n            <div class=\"swiper-container\" #widgetsContent>\r\n                <div class=\"swiper-wrapper header-block\">\r\n                    <div class=\"scrollmenu\">\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(1)}\" (click)=\"setMainTab(1)\">Stages\r\n                        </div>\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(3)}\" (click)=\"setMainTab(3)\">Level\r\n                        </div>\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(2)}\" (click)=\"setMainTab(2)\">Activity Assessment Gap (Days)\r\n                        </div>\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(4)}\" (click)=\"setMainTab(4)\">Model\r\n                        </div>\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(5)}\" (click)=\"setMainTab(5)\">Gap\r\n                            Reason\r\n                        </div>\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(6)}\" (click)=\"setMainTab(6)\">No. Of\r\n                            Shifts\r\n                        </div>\r\n                        <!--  Aniket :- Add tab for document number  -->\r\n                        <div class=\"main-tab-switch1\" [ngClass]=\"{mainActiveSwitch:isSetMainTab(7)}\" (click)=\"setMainTab(7)\">Document Number\r\n                        </div>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"scrollRightside\" (click)=\"scrollRight()\" *ngIf=\"scrollRightBtn\">\r\n                <i class=\"feather icon-chevron-right\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-3 p-r-5 p-l-5\" style=\"margin-top: -18px\">\r\n        <div class=\"form-group m-0 plantDropdown\" *ngIf=\"showBranchForStageAndAssess\">\r\n            <label for=\"branch\" class=\"col-form-label1\">Plant</label>\r\n            <div class=\"\">\r\n                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                    [placeholder]=\"'Select Plant'\"\r\n                    [settings]=\"singleDropdownSettings\"\r\n                    (onSelect)=\"onChange($event,'plant')\"\r\n                    (onDeSelect)=\"onChange(false,'plant')\"\r\n                    [data]=\"plantList\" [(ngModel)]=\"searchDet.branchId\">\r\n                </ng-multiselect-dropdown>\r\n            </div>\r\n        </div>\r\n        <!-- <div class=\"form-group m-0\">\r\n            <label for=\"branch\" class=\"col-form-label1 p-0\" style=\"top: 11px;\">Plant</label>\r\n            <div class=\"p-l-5\">\r\n                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceModel.branch\">\r\n                </ng-multiselect-dropdown>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n    <!-- <div class=\"col-3 m-auto\">\r\n        <app-loginInfo></app-loginInfo>\r\n    </div> -->\r\n     \r\n    <!-- <div class=\"col-1 p-0 m-auto text-center\">\r\n        <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(FilterModal)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button>\r\n    </div> -->\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\"></div>\r\n        <div class=\"col-6\"></div>\r\n\r\n    </div>\r\n</div>\r\n<app-stagelabel [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(1)\"></app-stagelabel>\r\n<app-level [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(3)\"></app-level>\r\n<app-assessment-configuration [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(2)\"></app-assessment-configuration>\r\n<app-reference-model [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(4)\"></app-reference-model>\r\n<app-reference-gap-reason [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(5)\"></app-reference-gap-reason>\r\n<app-reference-shift [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(6)\"></app-reference-shift>\r\n<!--  Aniket :- open tab to show document list  -->\r\n<app-document-number [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(7)\"></app-document-number>\r\n\r\n\r\n<!-- <app-reference-level [branchId]=\"searchDet.branchId\" *ngIf=\"isSetMainTab(5)\"></app-reference-level> -->\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "YT4U":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/reference-model/reference-model.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YT4U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\">\r\n                            <!-- <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                            <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by model or plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <!-- <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1 p-0\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"p-l-5\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceModel.branch\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\" (click)=\"addRefModalOpen(openRefModalModel, 'top')\"\r\n                        [disabled]=\"!disableReferModel\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Model</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-loading *ngIf=\"isModelListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please\r\n            Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th mat-sort-header=\"BranchName\">Plant</th>\r\n                            <th mat-sort-header=\"ModelName\">Model</th>\r\n                            <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of referencemodelList\">\r\n                            <td>{{x.branchName}}</td>\r\n                            <td>{{x.modelName}}</td>\r\n                            <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                            <td class=\"actionTd size text-left\">\r\n                                <i class=\"fa fa-edit editIcon\" (click)=\"editRefModel(openRefModalModel, 'top', x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefModel(x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"(referencemodelList == null || referencemodelList.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isModelListLoading\">\r\n                                Data not Found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isModelListLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalModel let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceModel(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>\r\n                <!-- <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [data]=\"branchAccessList\" [disabled]=\"false\"\r\n                            [(ngModel)]=\"addEditReferenceModel.branch\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row form-group\">\r\n                    <label for=\"modelName\" class=\"col-sm-4 col-form-label\">Model Name &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"modelName\" name=\"modelName\" placeholder=\"Enter model name\"\r\n                            formControlName=\"modelName\" [(ngModel)]=\"addEditReferenceModel.modelName\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['modelName'].invalid || \r\n                        (formdata.controls['modelName'].touched || formdata.controls['modelName'].Untouched) \r\n                        && formdata.controls['modelName'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            Please enter model name\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "ZQ7R":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/reference-gap-reason/reference-gap-reason.component.scss ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ZQ7R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* css for tab 1*/\n.addRegDiv {\n  position: absolute;\n  right: 0%;\n  bottom: 0rem;\n}\n.addRegDiv .addRegBtn,\n.addRegDiv .addRegBtn:hover,\n.addRegDiv .addRegBtn:focus {\n  position: absolute;\n  right: 8rem;\n  font: normal normal 400 14px/37px Helvetica Neue;\n  color: #fff;\n  text-transform: capitalize;\n  top: 0px;\n  box-shadow: none;\n  outline: none;\n  border: none;\n  padding: 0px;\n}\n.extraContent {\n  padding: 0px;\n}\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  border-bottom: 1px solid #7044cd;\n  background-color: transparent;\n}\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n.form-group {\n  border-bottom: 1px solid lightgray;\n  padding: 0.7rem 0px;\n  margin: 0px;\n}\n.form-group:last-child {\n  border-bottom: none;\n}\n.form-group .col-form-label {\n  text-align: left;\n  font: normal normal normal 14px/1.5 Helvetica Neue;\n  letter-spacing: 0px;\n  color: #707070;\n}\n.custom-errorMsg {\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #ff5252;\n}\n.modal-header {\n  border-bottom: 1px solid #e3eaef !important;\n}\n.modal-header .close {\n  padding: 0px;\n  margin: 0px;\n}\n.modal-header .close span {\n  font: normal normal 300 25px/1 Helvetica Neue;\n}\n.ng-multiselect-dropdown.custom-multiSelection {\n  margin-left: 10px;\n  /* Adjust the value as needed */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxyZWZlcmVuY2UtZ2FwLXJlYXNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7OztFQUdJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQVI7QUFJQTtFQUNJLFlBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUdRO0VBQ0ksY0FBQTtBQURaO0FBSVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS1E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFIWjtBQU9JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFMUjtBQVNBO0VBQ0ksa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFOSjtBQVFJO0VBQ0ksbUJBQUE7QUFOUjtBQVNJO0VBQ0ksZ0JBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVBSO0FBV0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQVJKO0FBMEJBO0VBQ0ksMkNBQUE7QUF2Qko7QUF5Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQXZCUjtBQXlCUTtFQUNJLDZDQUFBO0FBdkJaO0FBNEJBO0VBQ0ksaUJBQUE7RUFBbUIsK0JBQUE7QUF4QnZCIiwiZmlsZSI6InJlZmVyZW5jZS1nYXAtcmVhc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY3NzIGZvciB0YWIgMSovXHJcblxyXG4uYWRkUmVnRGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJvdHRvbTogMHJlbTtcclxuXHJcbiAgICAuYWRkUmVnQnRuLFxyXG4gICAgLmFkZFJlZ0J0bjpob3ZlcixcclxuICAgIC5hZGRSZWdCdG46Zm9jdXMge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogOHJlbTtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIDQwMCAxNHB4LzM3cHggSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdG9wOiAycHggIWltcG9ydGFudDtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTJweC8xLjUgSGVsdmV0aWNhIE5ldWUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzcwNDRjZCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMC43cmVtIDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1lcnJvck1zZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGNvbG9yOiAjZmY1MjUyO1xyXG59XHJcblxyXG4vLyAudGFibGVGaXhIZWFkIHtcclxuLy8gICAgIHRhYmxlIHtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4vLyAgICAgICAgIHRoLmFjdGlvblRoLFxyXG4vLyAgICAgICAgIHRkLmFjdGlvblRkIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgdGJvZHkgdGQge1xyXG4vLyAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UzZWFlZiAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCAzMDAgMjVweC8xIEhlbHZldGljYSBOZXVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duLmN1c3RvbS1tdWx0aVNlbGVjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICB9XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "b1yC":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/assessment-configuration/assessment-configuration.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: AssessmentConfigurationComponent */

    /***/
    function b1yC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentConfigurationComponent", function () {
        return AssessmentConfigurationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assessment_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assessment-configuration.component.html */
      "NC2Z");
      /* harmony import */


      var _assessment_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessment-configuration.component.scss */
      "jHup");
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

      var AssessmentConfigurationComponent = /*#__PURE__*/function () {
        function AssessmentConfigurationComponent(skillMatrixService, modalConfig, modalService, fb, alertService) {
          _classCallCheck(this, AssessmentConfigurationComponent);

          this.skillMatrixService = skillMatrixService;
          this.modalService = modalService;
          this.fb = fb;
          this.alertService = alertService;
          this.isLevelListLoading = false;
          this.isGapListLoading = false;
          this.isEdit = false;
          this.plantList = [];
          this.searchDet = {};
          this.SingleDropdownSettings = {};
          this.assessmentData = {};
          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          this.listLoading = false;
          this.isFormSubmitted = false;
          this.submitSpinner = false;
          this.isEditing = false;
          /* To add validator for no of days
             @Author Saurabh salunke
            * @Date Oct 11, 2023
          */

          this.noNegativeValidator = function (control) {
            console.log(control);
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

        _createClass(AssessmentConfigurationComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.branchId && !changes.branchId.firstChange) {
              this.getAssessmentNumberOfDays();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.formdata = this.fb.group({
              branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
              noOfDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, this.noNegativeValidator, this.integerValidator]),
              skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required)
            });
            this.SingleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
              allowSearchFilter: true,
              closeDropDownOnSelection: true
            };
            this.getAccessiblePlantList();
            this.getMasterLevelList();
            this.getAssessmentNumberOfDays();
          } // You will get level list
          // simran
          // created date 27/09/2023

        }, {
          key: "getMasterLevelList",
          value: function getMasterLevelList() {
            var _this22 = this;

            this.isLevelListLoading = true;
            this.skillMatrixService.getMasterCertificateData('apis/sm/getLevelList').subscribe(function (res) {
              if (res.result) {
                //   if (res.dataList != null && res.dataList.length > 0) {
                //     this.masterLevelList = this.setArray(res.dataList, 'id', 'levelName');
                //     // this.searchDet.skillLvlId = [this.masterLevelList[0]];
                //   } else {
                //     this.masterLevelList = [];
                //   }
                // } else {
                //   this.masterLevelList = [];
                // }
                if (res.dataList != null && res.dataList.length > 0) {
                  /* Use For Add Screen */
                  _this22.masterLevelList = _this22.setArray(res.dataList, 'id', 'levelName');
                  /* Use For Filter */

                  _this22.searchDet.masterLevelList = _this22.setArray(res.dataList, 'id', 'levelName');
                } else {
                  /* Use For Add Screen */
                  _this22.masterLevelList = [{
                    id: _this22.userDet.branch.branchId,
                    name: _this22.userDet.branch.name
                  }];
                  /* Use For Filter */

                  _this22.searchDet.masterLevelList = [{
                    id: _this22.userDet.branch.branchId,
                    name: _this22.userDet.branch.name
                  }];
                }
              }
            });
          } // You will able to save assessment Number of days
          // simran
          // created date 27/09/2023

        }, {
          key: "saveOrUpdateAssessmentDays",
          value: function saveOrUpdateAssessmentDays(form) {
            var _this23 = this;

            console.log(form);
            this.isFormSubmitted = true;

            if (form.invalid) {
              Object.keys(form.controls).forEach(function (key) {
                form.controls[key].markAsDirty();
              }); // this.formSubmitLoader = false;

              return;
            }

            if (form.status == "VALID" && this.assessmentData.id == 0) {
              var reqBody = {
                "skillLevelId": form.get('skillLvlId').value[0].id,
                "branchId": form.get('branchId').value[0].id,
                "noOfDays": this.searchDet.noOfDaysEnter
              };
              console.log(reqBody);
              this.skillMatrixService.saveAssessmentNoDays('apis/sm/addAssessmentConfig', reqBody).subscribe(function (response) {
                if (response.result) {
                  _this23.alertService.success("Activity assessment gap(days) added successfully");

                  _this23.getAssessmentNumberOfDays();

                  _this23.searchDet.addForm = false;

                  _this23.modalService.dismissAll();
                } else {
                  if (response.statusCode == 100) {
                    _this23.alertService.error(response.reason);
                  } else {
                    _this23.alertService.error('Error occurred while submitting data. Please try again.');
                  }
                }
              });
            } else {
              var _reqBody = {
                "skillLevelId": form.get('skillLvlId').value[0].id,
                "branchId": form.get('branchId').value[0].id,
                "noOfDays": this.searchDet.noOfDaysEnter,
                "id": this.assessmentData.id,
                "updatedBy": this.userDet.empId
              };
              console.log(_reqBody);
              this.skillMatrixService.saveAssessmentNoDays('apis/sm/updateAssessmentConfig', _reqBody).subscribe(function (response) {
                if (response.result) {
                  _this23.alertService.success("Activity assessment gap(days) updated successfully");

                  _this23.modalService.dismissAll();

                  _this23.getAssessmentNumberOfDays();
                } else {
                  if (response.statusCode == 100) {
                    _this23.alertService.error(response.reason);
                  } else {
                    _this23.alertService.error('Error occurred while submitting data. Please try again.');
                  }
                }
              });
            }
          } // You will able to open assessment Number of days modal
          // simran
          // created date 27/09/2023

        }, {
          key: "openNoOfDaysModal",
          value: function openNoOfDaysModal(modal, popupClass) {
            this.isEditing = false;
            this.modalTitle = "Add Gap Days";
            this.searchDet.branchId = '';
            this.searchDet.masterLevelData = '';
            this.searchDet.noOfDaysEnter = '';
            this.resetForm();
            this.assessmentData.id = 0; // this.formdata.reset();

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
          /*
              Get Accessible Plant List
              Author: simran
              Date : 27/09/2023
          */

        }, {
          key: "getAccessiblePlantList",
          value: function getAccessiblePlantList() {
            var _this24 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (res) {
              if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this24.plantList = _this24.setArray(res.branchAccessList, 'branchId', 'branchName');
                  /* Use For Filter */

                  _this24.searchDet.plantList = _this24.setArray(res.branchAccessList, 'branchId', 'branchName');
                } else {
                  /* Use For Add Screen */
                  _this24.plantList = [{
                    id: _this24.userDet.branch.branchId,
                    name: _this24.userDet.branch.name
                  }];
                  /* Use For Filter */

                  _this24.searchDet.plantList = [{
                    id: _this24.userDet.branch.branchId,
                    name: _this24.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this24.plantList = [{
                  id: _this24.userDet.branch.branchId,
                  name: _this24.userDet.branch.name
                }];
                /* Use For Filter */

                _this24.searchDet.plantList = [{
                  id: _this24.userDet.branch.branchId,
                  name: _this24.userDet.branch.name
                }];
              } // this.getDepartmentList(this.branchId[0]);

            });
          }
          /*
          Common function for set an array for dropdown
          Author: simran
          Date : 27/09/2023
          */

        }, {
          key: "setArray",
          value: function setArray(array, key1, key2) {
            var tmpArray = [];

            if (array != null && array.length > 0) {
              var _iterator5 = _createForOfIteratorHelper(array),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var element = _step5.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }

            return tmpArray;
          } // You will able to update assessment Number of days modal
          // simran
          // created date 27/09/2023

        }, {
          key: "updateNoOfDays",
          value: function updateNoOfDays(modal, popupClass, assessmentData) {
            this.isEditing = true;
            this.modalTitle = "Update Gap Days"; // this.assessmentData.noOfDaysEnter = assessmentData.noOfDays;

            this.assessmentData.id = assessmentData.id; // this.assessmentData.id = 3;

            console.log(assessmentData);
            this.searchDet.branchId = [{
              id: assessmentData.branchId,
              name: assessmentData.branchName
            }];
            this.searchDet.noOfDaysEnter = assessmentData.noOfDays;
            this.searchDet.masterLevelData = [{
              id: assessmentData.skillLevelId,
              name: assessmentData.levelName
            }];
            this.modalService.open(modal, {
              windowClass: popupClass
            });
          } // You will able to delete no of days
          // simran
          // created date 27/09/2023

        }, {
          key: "removeNoOfDays",
          value: function removeNoOfDays(assessmentData) {
            var _this25 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: 'Are You Sure!',
              text: 'Do you want remove this assessment No. of days?',
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
                var reqBody = {
                  "id": assessmentData.id,
                  "updatedBy": _this25.userDet.empId
                };

                _this25.skillMatrixService.removeNoOfDays('apis/sm/deleteAssessmentConfig', reqBody).subscribe(function (response) {
                  console.log(response);

                  if (response.result) {
                    _this25.alertService.success("Activity assessment gap(days) deleted successfully");

                    _this25.getAssessmentNumberOfDays();
                  } else {
                    if (response.statusCode == 100) {
                      _this25.alertService.error(response.reason);
                    } else {
                      _this25.alertService.error('Error occurred while removing data. Please try again');
                    }
                  }
                });
              } else {}
            });
          } // You will get list of number of assessment days
          // simran
          // created date 27/09/2023

        }, {
          key: "getAssessmentNumberOfDays",
          value: function getAssessmentNumberOfDays() {
            var _this26 = this;

            if (this.staticPagination.page == 1) {
              this.staticPagination.offset = 0;
            } else {
              this.staticPagination.offset = (this.staticPagination.page - 1) * this.staticPagination.itemsPerPage;
            }

            var req = {
              'offset': this.staticPagination.offset,
              'limit': this.staticPagination.itemsPerPage,
              'orgId': this.userDet.organization.orgId
            };

            if (this.searchDet.branchId != '') {
              req.branchId = this.searchDet.branchId;
            }

            if (this.branchId) {
              console.log(this.branchId[0].id);
              req.branchId = this.branchId[0].id;
            }

            if (this.sorting) {
              if (this.sorting.direction != "") {
                req.colName = this.sorting.active;
                req.orderType = this.sorting.direction.toUpperCase();
              }
            }

            console.log(req);
            this.skillMatrixService.getGapReasonListData('apis/sm/getAssessmentConfigList', req).subscribe(function (response) {
              if (response.result) {
                if (_this26.staticPagination.page == 1) {
                  _this26.staticPagination.total = response.totalCount;
                  _this26.staticPagination.totalPages = Math.ceil(response.totalCount / _this26.staticPagination.itemsPerPage);
                }

                if (response.dataList != null && response.dataList.length > 0) {
                  _this26.assessmentAssign = response.dataList;
                  _this26.staticPagination.listLength = _this26.assessmentAssign.length;
                } else {
                  _this26.assessmentAssign = [];
                  _this26.staticPagination.listLength = _this26.assessmentAssign.length;
                  _this26.staticPagination.total = _this26.assessmentAssign.length;
                } // this.assessmentAssign = response.dataList

              } else {
                _this26.assessmentAssign = [];
                _this26.listLoading = false;
                _this26.staticPagination.listLength = _this26.assessmentAssign.length;
                _this26.staticPagination.total = _this26.assessmentAssign.length;
              }
            });
          } // You will able to load more pagination pages
          // simran
          // created date 27/09/2023

        }, {
          key: "loadMore",
          value: function loadMore(ev) {
            console.log(ev);
            this.staticPagination = ev; // this.getAssessmentList();
            // setTimeout(() => {

            this.assessmentAssign = [];
            this.listLoading = true; //  }, 3000);

            this.getAssessmentNumberOfDays();
          } // You will able to sort
          // simran
          // created date 27/09/2023

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.getAssessmentNumberOfDays();
          }
        }, {
          key: "onChangeBranch",
          value: function onChangeBranch(event) {
            console.log(event);
            this.searchDet.branchId = event.id;
            this.getAssessmentNumberOfDays();
          }
        }, {
          key: "integerValidator",
          value: function integerValidator(control) {
            var value = control.value;

            if (value !== '' && !Number.isInteger(value)) {
              return {
                'notAnInteger': true
              };
            }

            return null;
          }
          /* Close filter modal popup
           @Author Saurabh salunke
          * @Date Oct 11, 2023
          */

        }, {
          key: "closeFilterPopup",
          value: function closeFilterPopup() {
            this.searchDet.branchId = [];
            this.searchDet.masterLevelData = [];
            this.assessmentData.noOfDaysEnter = [];
            this.formdata.reset(); // this.formdata.get('branchId').markAsUntouched();
            // this.formdata.get('skillLvlId').markAsUntouched();
            // this.formdata.get('noOfDays').markAsUntouched();
            // this.formdata.get('noOfDays').markAsPristine();

            this.modalService.dismissAll();
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
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
        }]);

        return AssessmentConfigurationComponent;
      }();

      AssessmentConfigurationComponent.ctorParameters = function () {
        return [{
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      };

      AssessmentConfigurationComponent.propDecorators = {
        branchId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AssessmentConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessment-configuration',
        template: _raw_loader_assessment_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessment_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])], AssessmentConfigurationComponent);
      /***/
    },

    /***/
    "ds71":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/configuration.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: ConfigurationModule */

    /***/
    function ds71(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function () {
        return ConfigurationModule;
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


      var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./configuration-routing.module */
      "KmVL");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _assessment_configuration_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./assessment-configuration/assessment-configuration.component */
      "b1yC");
      /* harmony import */


      var _stagelabel_stagelabel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stagelabel/stagelabel.component */
      "6ndI");
      /* harmony import */


      var src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/pipe/custom-pipe.module */
      "QrAV");
      /* harmony import */


      var _configuration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./configuration.component */
      "xswA");
      /* harmony import */


      var _level_level_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./level/level.component */
      "MUxl");
      /* harmony import */


      var _reference_gap_reason_reference_gap_reason_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reference-gap-reason/reference-gap-reason.component */
      "ASH+");
      /* harmony import */


      var _reference_model_reference_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./reference-model/reference-model.component */
      "1WE7");
      /* harmony import */


      var _reference_shift_reference_shift_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./reference-shift/reference-shift.component */
      "7VT4");
      /* harmony import */


      var _document_number_document_number_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./document-number/document-number.component */
      "JBbn"); //   Aniket :- Get Document modal


      var ConfigurationModule = function ConfigurationModule() {
        _classCallCheck(this, ConfigurationModule);
      };

      ConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_9__["ConfigurationComponent"], _assessment_configuration_assessment_configuration_component__WEBPACK_IMPORTED_MODULE_6__["AssessmentConfigurationComponent"], _stagelabel_stagelabel_component__WEBPACK_IMPORTED_MODULE_7__["StagelabelComponent"], _level_level_component__WEBPACK_IMPORTED_MODULE_10__["LevelComponent"], _reference_gap_reason_reference_gap_reason_component__WEBPACK_IMPORTED_MODULE_11__["ReferenceGapReasonComponent"], _reference_model_reference_model_component__WEBPACK_IMPORTED_MODULE_12__["ReferenceModelComponent"], _reference_shift_reference_shift_component__WEBPACK_IMPORTED_MODULE_13__["ReferenceShiftComponent"], _document_number_document_number_component__WEBPACK_IMPORTED_MODULE_14__["DocumentNumberComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _configuration_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConfigurationRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"], src_app_shared_pipe_custom_pipe_module__WEBPACK_IMPORTED_MODULE_8__["CustomPipeModule"]]
      })], ConfigurationModule);
      /***/
    },

    /***/
    "gchv":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/document-number/document-number.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function gchv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <!-- style=\"height: 40px;\" -->\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\" >\r\n                            <span  class=\"form-control-feedback\"\r\n                               ></span>\r\n                            <input type=\"text\" class=\"form-control\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\" >\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"addRefShiftNoOpen(openRefModalShiftNo, 'top')\" >\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Document</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table datatable class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th class>Document Number</th>\r\n                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let Doc of documentList\">\r\n                            <td>\r\n                                <span *ngIf=\"!Doc.isEditable\">{{ Doc.docName}}</span>\r\n                                <input *ngIf=\"Doc.isEditable  && Doc.id === currentlyEditedDocumentId\" type=\"text\" class=\"form-control my-custom-input\"\r\n                                    name=\"searchInput\" [class.editing]=\"Doc.isEditable\" #DocInputField\r\n                                    placeholder=\"Enter Doc name\" [(ngModel)]=\"Doc.docName\" autocomplete=\"off\" />\r\n                                <span class=\"custom-errorMsg\" *ngIf=\"isShowDocError && !Doc.docName\">Please\r\n                                    enter document name</span>\r\n                            </td>\r\n                            <td class=\"actionTd size text-left\">\r\n                                <i *ngIf=\"!Doc.isEditable\" class=\"fa fa-edit editIcon\" (click)=\"toggleEdit(Doc)\"></i>&nbsp;&nbsp;&nbsp;\r\n                                <i *ngIf=\"!Doc.isEditable\" class=\"fas fa-trash-alt deleteIcon\" (click)=\"deleteDocument(Doc)\"></i>\r\n                                <ng-container *ngIf=\"Doc.isEditable && Doc.id === currentlyEditedDocumentId\">\r\n                                    <button class=\"btn btn-primary updateButton\"\r\n                                        (click)=\"updateDocumentNumber(Doc)\">Save</button>&nbsp;\r\n                                    <button class=\"btn btn-danger cancelButton\" (click)=\"cancelEdit(Doc)\">Cancel</button>\r\n                                </ng-container>\r\n                            </td>                   \r\n                        </tr>\r\n                        <tr *ngIf=\"(documentList == null || documentList.length == 0)\">\r\n                            <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n     <!-- Aniket :- Show document list  -->\r\n\r\n</div>\r\n<!--   Aniket :- Show Add modal -->\r\n<ng-template #openRefModalShiftNo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveDocument(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>                \r\n                <div class=\"row form-group\">\r\n                    <label for=\"docName\" class=\"col-sm-4 col-form-label\">Document Number\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"docName\" name=\"docName\" placeholder=\"Enter Document Number\"\r\n                            formControlName=\"docName\" [(ngModel)]=\"addEditReferenceDocName.doc\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['docName'].invalid || \r\n                            (formdata.controls['docName'].touched || formdata.controls['docName'].Untouched) \r\n                            && formdata.controls['docName'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            Please enter document number\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "jHup":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/assessment-configuration/assessment-configuration.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jHup(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".homepage-block {\n  position: absolute;\n  top: 12%;\n}\n\n.extraContent {\n  padding: 0px;\n}\n\n.extraContent .has-search {\n  margin-bottom: 0px;\n}\n\n.extraContent .has-search .form-control-feedback {\n  color: #7044cd;\n}\n\n.extraContent .has-search .form-control-clear {\n  color: #f95371;\n  cursor: pointer;\n}\n\n.extraContent .has-search input,\n.extraContent .has-search input:focus,\n.extraContent .has-search input:hover {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  border-radius: 0px;\n  background-color: transparent;\n}\n\n.extraContent .col-form-label {\n  position: absolute;\n  z-index: 999;\n  top: 2px !important;\n  font: normal normal bold 12px/1.5 Helvetica Neue !important;\n  left: 1.5rem !important;\n  color: #7044cd !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3Nlc3NtZW50LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBSTtFQUNJLGtCQUFBO0FBRVI7O0FBQVE7RUFDSSxjQUFBO0FBRVo7O0FBQ1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUVROzs7RUFHSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQUFaOztBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFGUiIsImZpbGUiOiJhc3Nlc3NtZW50LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXBhZ2UtYmxvY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTIlO1xyXG59XHJcbi5leHRyYUNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG5cclxuICAgIC5oYXMtc2VhcmNoIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2wtY2xlYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y5NTM3MTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgaW5wdXQ6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICB0b3A6IDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxMnB4LzEuNSBIZWx2ZXRpY2EgTmV1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjNzA0NGNkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "kkES":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/stagelabel/stagelabel.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kkES(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n\r\n            <div class=\"col-3 p-r-5 p-l-5 m-l-2\">\r\n            </div>\r\n\r\n            <div class=\"col-3 p-r-5 p-l-5 form-group\">\r\n\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- TABLE BLOCK -->\r\n    <div class=\"table-block\">\r\n        <div class=\"table-responsive tableFixHead\">\r\n            <table datatable class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th class=\"fixedColumn\">Stage</th>\r\n                        <th class>Stage Label</th>\r\n                        <th class=\"actionTh fixedColumn\">Action</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let stage of stageList\">\r\n                        <td *ngIf=\"stage.stageCaption != 'Stage7'\">{{stage.stageName}}</td>\r\n                        <td *ngIf=\"stage.stageCaption != 'Stage7'\">\r\n                            <span *ngIf=\"!stage.isEditable\">{{ stage.stageLabel}}</span>\r\n                            <input *ngIf=\"stage.isEditable  && stage.stageId === currentlyEditedStageId\" type=\"text\" class=\"form-control my-custom-input\"\r\n                                name=\"searchInput\" [class.editing]=\"stage.isEditable\" #stageInputField\r\n                                placeholder=\"Enter stage name\" [(ngModel)]=\"stage.stageLabel\" autocomplete=\"off\" />\r\n                            <span class=\"custom-errorMsg\" *ngIf=\"isShowStageError && !stage.stageLabel\">Please\r\n                                enter stage name</span>\r\n\r\n                        </td>\r\n\r\n                        <td class=\"actionTd size text-left\" *ngIf=\"stage.stageCaption != 'Stage7'\">\r\n                            <i *ngIf=\"!stage.isEditable\" class=\"fa fa-edit editIcon\" (click)=\"toggleEdit(stage)\"></i>\r\n                            <ng-container *ngIf=\"stage.isEditable && stage.stageId === currentlyEditedStageId\">\r\n                                <button class=\"btn btn-primary updateButton\"\r\n                                    (click)=\"updateStageLabel(stage)\">Save</button>&nbsp;\r\n                                <button class=\"btn btn-danger cancelButton\" (click)=\"cancelEdit(stage)\">Cancel</button>\r\n                            </ng-container>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"(stageList == null || stageList.length == 0)\">\r\n                        <td colspan=\"11\" class=\"text-center no-record-found\" *ngIf=\"!listLoading\">\r\n                            Data not found\r\n                        </td>\r\n                        <td colspan=\"11\" class=\"text-center loading-div\" *ngIf=\"listLoading\">\r\n                            <app-loading></app-loading>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
      /***/
    },

    /***/
    "mDef":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/configuration.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function mDef(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".plantDropdown {\n  position: relative;\n  top: 30%;\n}\n\n.tabMenu {\n  margin-left: -5px;\n}\n\n.tabMenu .swiper-container {\n  width: 100%;\n  margin: auto;\n  overflow-y: auto;\n  margin-top: 17px;\n}\n\n.tabMenu .swiper-container .swiper-wrapper {\n  display: inline-flex;\n  flex-direction: row;\n  overflow-y: auto;\n  justify-content: center;\n}\n\n.tabMenu .swiper-container .swiper-wrapper .scrollmenu {\n  overflow: auto;\n  white-space: nowrap;\n  background-color: #fff;\n  border-radius: 25px;\n}\n\n.tabMenu .swiper-container .swiper-wrapper .scrollmenu .main-tab-switch1 {\n  display: inline-block;\n  color: #474747;\n  text-align: center;\n  line-height: 1.5;\n  padding: 3px 20px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.tabMenu .swiper-container .swiper-wrapper .scrollmenu .main-tab-switch1.mainActiveSwitch {\n  background: #7044cd 0% 0% no-repeat padding-box;\n  padding: 3px 20px;\n  color: white;\n  border-radius: 25px;\n  line-height: 1.5;\n  box-shadow: 0px 0px 12px -2px #8f8d8f;\n}\n\n.tabMenu .swiper-container::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.tabMenu .swiper-container::-webkit-scrollbar {\n  width: 0;\n  /* Remove scrollbar space */\n  background: transparent;\n  /* Optional: just make scrollbar invisible */\n}\n\n.tabMenu .swiper-container::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.tabMenu .scrollRightside {\n  position: absolute;\n  z-index: 999;\n  right: -26px;\n  top: 0;\n  background: #7044cd 0% 0% no-repeat padding-box;\n  padding: 0.3rem;\n  cursor: pointer;\n}\n\n.tabMenu .scrollRightside .feather {\n  color: #fff;\n  font-weight: bold;\n}\n\n.tabMenu .scrollLeftside {\n  position: absolute;\n  z-index: 999;\n  left: -15px;\n  top: 0;\n  background: #7044cd 0% 0% no-repeat padding-box;\n  padding: 0.3rem;\n  cursor: pointer;\n}\n\n.tabMenu .scrollLeftside .feather {\n  color: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUFDSjs7QUFHQTtFQUNJLGlCQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFBUTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRVo7O0FBRFk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBR2hCOztBQUZnQjtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUlwQjs7QUFIb0I7RUFDSSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSxxQ0FBQTtBQUt4Qjs7QUFDSTtFQUNJLHVCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDRDQUFBO0FBQ1I7O0FBQ0k7RUFDSSx1QkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFFQSwrQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQVI7O0FBRVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFBWjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBRUEsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUZSOztBQUlRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRloiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFudERyb3Bkb3duIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgLy8gcmlnaHQ6IDIyJTtcclxufVxyXG4vLyBBbmlrZXQgOi0gQ3NzIGZvciBIb3Jpem9udGFsIFNjcm9sbEJhclxyXG4udGFiTWVudSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIC5zd2lwZXItY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgICAgIC5zd2lwZXItd3JhcHBlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLnNjcm9sbG1lbnUge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAubWFpbi10YWItc3dpdGNoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgJi5tYWluQWN0aXZlU3dpdGNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzcwNDRjZCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IC0ycHggcmdiYSgxNDMsIDE0MSwgMTQzLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTJweCByZ2JhKDE0MywgMTQxLCAxNDMsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggLTJweCByZ2JhKDE0MywgMTQxLCAxNDMsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zd2lwZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAvKiBPcHRpb25hbDoganVzdCBtYWtlIHNjcm9sbGJhciBpbnZpc2libGUgKi9cclxuICAgIH1cclxuICAgIC5zd2lwZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAuc2Nyb2xsUmlnaHRzaWRlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgIHJpZ2h0OiAtMjZweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIC5mZWF0aGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zY3JvbGxMZWZ0c2lkZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM3MDQ0Y2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiKDAsIDAsIDApO1xyXG4gICAgICAgIC5mZWF0aGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "rxG3":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/skill-matrix/configuration/reference-shift/reference-shift.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rxG3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"homepage-block bg-Transperant p-l-15 p-r-15\">\r\n    <div class=\"extraContent\">\r\n        <div class=\"row m-0\">\r\n            <div class=\"col-8 p-0\">\r\n                <div class=\"row m-0\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group has-search\">\r\n                            <!-- <span class=\"fa fa-search form-control-feedback\"></span>\r\n                            <input type=\"text\" class=\"form-control\" name=\"searchInput\" placeholder=\"Search\"> -->\r\n                            <!-- [(ngModel)]=\"searchDet.searchInput\" -->\r\n                            <span class=\"fa fa-search form-control-feedback\" (click)=\"getSearchList(true)\"\r\n                                *ngIf=\"!searchDet.searchData\"></span>\r\n                            <span *ngIf=\"searchDet.searchData\" class=\"fa fa-times-circle form-control-clear\"\r\n                                (click)=\"getSearchList(false)\"></span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"your-element-id\" name=\"searchInput\"\r\n                                placeholder=\"Search by shift or plant name\" [(ngModel)]=\"searchDet.searchInput\"\r\n                                (keyup)=\"$event.keyCode == 13 ? getSearchList(true) : ''\" autocomplete=\"off\"\r\n                                style=\"padding-right: 2.4rem;\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6 p-r-5 p-l-5\">\r\n                        <!-- <div class=\"form-group m-0\">\r\n                            <label for=\"branch\" class=\"col-form-label1 p-0\" style=\"top: 11px;\">Plant</label>\r\n                            <div class=\"\">\r\n                                <ng-multiselect-dropdown name=\"branch\" id=\"branch\"\r\n                                    class=\"custom-multiSelection customWidthForInter assessmentdropDown addLabelInside\"\r\n                                    [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                                    (onSelect)=\"onChangeBranch($event)\" (onDeSelect)=\"onChangeBranch(false)\"\r\n                                    [data]=\"branchAccessList\" [(ngModel)]=\"referenceShiftNo.branch\">\r\n                                </ng-multiselect-dropdown>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-4 p-0\">\r\n                <div class=\"addRegDiv\">\r\n                    <button class=\"btn addRegBtn m-0\" type=\"button\"\r\n                        (click)=\"addRefShiftNoOpen(openRefModalShiftNo, 'top')\" [disabled]=\"!disableReferShift\">\r\n                        <i class=\"fa fa-plus m-r-10\"></i> Add Shift</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-loading *ngIf=\"isShiftListLoading\" style=\"position: absolute;top: 50%;left: 50%;\">Please\r\n            Wait...</app-loading>\r\n        <div class=\"table-block\">\r\n            <div class=\"table-responsive tableFixHead\">\r\n                <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th mat-sort-header=\"BranchName\">Plant</th>\r\n                            <th mat-sort-header=\"ShiftName\">Shift</th>\r\n                            <th mat-sort-header=\"CreatedDate\">Created Date</th>\r\n                            <th class=\"actionTh fixedColumn\">Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let x of refShiftNoData\">\r\n                            <td>{{x.branchName}}</td>\r\n                            <td>{{x.shiftName}}</td>\r\n                            <td>{{(x.createdDate) ? (x.createdDate | date:'dd-MM-yyyy') : 'N/A'}}</td>\r\n                            <td class=\"actionTd size text-left\">\r\n                                <i class=\"fa fa-edit editIcon\" (click)=\"editRefShiftNo(openRefModalShiftNo, 'top', x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                                <i class=\"fas fa-trash-alt deleteIcon\" (click)=\"removeRefShift(x)\">\r\n                                </i>&nbsp; &nbsp;\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"(refShiftNoData == null || refShiftNoData.length == 0)\">\r\n                            <td colspan=\"2\" class=\"text-center no-record-found\" *ngIf=\"!isShiftListLoading\">\r\n                                Data not found\r\n                            </td>\r\n                            <td colspan=\"2\" class=\"text-center loading-div\" *ngIf=\"isShiftListLoading\">\r\n                                <app-loading></app-loading>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #openRefModalShiftNo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel2\">{{modalTitle}}</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"formdata\" (ngSubmit)=\"saveReferenceShiftNo(formdata)\" autocomplete=\"off\">\r\n        <div class=\"modal-body p-0\">\r\n            <div>\r\n                <!-- <div class=\"form-group row\">\r\n                    <label for=\"branch\" class=\"col-sm-4 col-form-label\">Plant &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <ng-multiselect-dropdown name=\"branch\" class=\"custom-multiSelection customWidthForInter\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleBranchDropdownSettings\"\r\n                            formControlName=\"branch\" [(ngModel)]=\"addEditReferenceShiftNo.branch\"\r\n                            [data]=\"branchAccessList\" [disabled]=\"isEditing && formdata.get('branch').value\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['branch'].invalid || \r\n                        (formdata.controls['branch'].touched || formdata.controls['branch'].Untouched) \r\n                        && formdata.controls['branch'].hasError('required')\" class=\"custom-errorMsg\" style=\"padding-left: 15px;\">\r\n                            Please select plant\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n                <div class=\"row form-group\">\r\n                    <label for=\"shiftNo\" class=\"col-sm-4 col-form-label\">Shift Name &nbsp;\r\n                        <span class=\"astrik\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-8\">\r\n                        <input type=\"text\" id=\"shiftNo\" name=\"shiftNo\" placeholder=\"Enter shift\"\r\n                            formControlName=\"shiftNo\" [(ngModel)]=\"addEditReferenceShiftNo.shiftName\"\r\n                            class=\"form-control customInput-field\" maxlength=\"255\" />\r\n                        <div *ngIf=\"isFormSubmitted && formdata.controls['shiftNo'].invalid || \r\n                            (formdata.controls['shiftNo'].touched || formdata.controls['shiftNo'].Untouched) \r\n                            && formdata.controls['shiftNo'].hasError('required')\" class=\"custom-errorMsg\">\r\n                            Please enter shift name\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"footerDiv\"></div>\r\n        <div class=\"footerBtn\">\r\n            <button class=\"btn btn-lg submitBtn event-btn\" type=\"submit\" [disabled]=\"submitSpinner\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Submit</span>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "xswA":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/settings/skill-matrix/configuration/configuration.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ConfigurationComponent */

    /***/
    function xswA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
        return ConfigurationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "Qbr0");
      /* harmony import */


      var _configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./configuration.component.scss */
      "mDef");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../skill-matrix.service */
      "CYrx");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");

      var ConfigurationComponent = /*#__PURE__*/function () {
        function ConfigurationComponent(skillMatrixService, alertService) {
          _classCallCheck(this, ConfigurationComponent);

          this.skillMatrixService = skillMatrixService;
          this.alertService = alertService;
          this.searchDet = {};
          this.userDet = {};
          this.showBranchForStageAndAssess = true;
          this.branchIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.scrollRightBtn = true;
          this.scrollLeftBtn = false;

          this.isSetMainTab = function (tabId) {
            return this.mainTab === tabId;
          };
        }

        _createClass(ConfigurationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mainTab = 1;
            this.userDet = JSON.parse(localStorage.getItem('userDet'));
            this.getAccessiblePlantList();
            this.singleDropdownSettings = {
              singleSelection: true,
              idField: 'id',
              textField: 'name',
              allowSearchFilter: true,
              noDataAvailablePlaceholderText: 'Data not found',
              closeDropDownOnSelection: true
            };
          }
        }, {
          key: "setMainTab",
          value: function setMainTab(tabId) {
            this.mainTab = tabId;

            if (this.mainTab == 1) {
              this.showBranchForStageAndAssess = true;
            } else if (this.mainTab == 2) {
              this.showBranchForStageAndAssess = true;
            } else if (this.mainTab == 3) {
              this.showBranchForStageAndAssess = true;
            } else if (this.mainTab == 4) {
              this.showBranchForStageAndAssess = true;
            } else if (this.mainTab == 5) {
              this.showBranchForStageAndAssess = true;
            } else if (this.mainTab == 6) {
              this.showBranchForStageAndAssess = true;
            } // Aniket :- Add document tab lable 
            else if (this.mainTab == 7) {
                this.showBranchForStageAndAssess = true;
              } else if (this.mainTab == 8) {
                this.showBranchForStageAndAssess = false;
              } else if (this.mainTab == 8) {} //  else if (this.mainTab == 1) {
            //     this. showBranchForStageAndAssess = true;
            //   } else if (this.mainTab == 2) {
            //     this. showBranchForStageAndAssess = true;
            //   } else if (this.mainTab == 3) {
            //     this. showBranchForStageAndAssess = false;
            //   } else if (this.mainTab == 4) {
            //   }

          }
        }, {
          key: "getAccessiblePlantList",
          value:
          /*
           Get Accessible Plant List
           @Author Saurabh S
          * @Date  Sept 29 2023
          */
          function getAccessiblePlantList() {
            var _this27 = this;

            this.skillMatrixService.getBranchAccessList('getBranchAccessSetupByEmpId/' + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (res) {
              if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this27.plantList = _this27.setArray(res.branchAccessList, 'branchId', 'branchName');
                  _this27.plantList = _this27.sortFunction(_this27.plantList, 'name');
                  /* Use For Filter */

                  _this27.searchDet.plantList = _this27.setArray(res.branchAccessList, 'branchId', 'branchName');
                  _this27.searchDet.plantList = _this27.sortFunction(_this27.plantList, 'name');
                } else {
                  /* Use For Add Screen */
                  _this27.plantList = [{
                    id: _this27.userDet.branch.branchId,
                    name: _this27.userDet.branch.name
                  }];
                  /* Use For Filter */

                  _this27.searchDet.plantList = [{
                    id: _this27.userDet.branch.branchId,
                    name: _this27.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this27.plantList = [{
                  id: _this27.userDet.branch.branchId,
                  name: _this27.userDet.branch.name
                }];
                /* Use For Filter */

                _this27.searchDet.plantList = [{
                  id: _this27.userDet.branch.branchId,
                  name: _this27.userDet.branch.name
                }];
              }

              _this27.searchDet.branchId = [_this27.searchDet.plantList[0]];
              _this27.searchDet.branchId = [_this27.plantList[0]];
              console.log(_this27.searchDet.branchId[0].id);
            });
          }
          /*
              Common function for set an array for dropdown
               @Author Saurabh S
            * @Date  Sept 29 2023
          */

        }, {
          key: "setArray",
          value: function setArray(array, key1, key2) {
            var tmpArray = [];

            if (array != null && array.length > 0) {
              var _iterator6 = _createForOfIteratorHelper(array),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var element = _step6.value;
                  element.id = element[key1];
                  element.name = element[key2];
                  tmpArray.push(element);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }

            return tmpArray;
          }
          /*
          Single Select Dropdown onChange function
          @Author Saurabh S
          * @Date  Sept 29 2023
          */

        }, {
          key: "onChange",
          value: function onChange(ev, type) {
            if (ev) {
              this.branchIdChange.emit(ev.id);
            } else {
              this.branchIdChange.emit(null);
            }
          }
          /*
              Multi Select Dropdown onChange function
              @Author Saurabh S
            * @Date  Sept 29 2023
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
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
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
          } //Aniket :-  Horizontal Scroll Bar

        }, {
          key: "scrollRight",
          value: function scrollRight() {
            var rightWidth = this.widgetsContent.nativeElement.clientWidth + this.widgetsContent.nativeElement.scrollLeft;

            if (this.widgetsContent.nativeElement.scrollWidth == rightWidth) {
              this.scrollRightBtn = false;
              rightWidth = 0;
            }

            this.widgetsContent.nativeElement.scrollTo({
              left: this.widgetsContent.nativeElement.scrollLeft + 150,
              behavior: 'smooth'
            });
            this.scrollLeftBtn = true;
          }
        }, {
          key: "scrollLeft",
          value: function scrollLeft() {
            if (this.widgetsContent.nativeElement.scrollLeft == 0 || this.widgetsContent.nativeElement.scrollLeft == 150) {
              this.scrollLeftBtn = false;
            }

            this.widgetsContent.nativeElement.scrollTo({
              left: this.widgetsContent.nativeElement.scrollLeft - 150,
              behavior: 'smooth'
            });
            this.scrollRightBtn = true;
          }
        }]);

        return ConfigurationComponent;
      }();

      ConfigurationComponent.ctorParameters = function () {
        return [{
          type: _skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
        }];
      };

      ConfigurationComponent.propDecorators = {
        branchIdChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        widgetsContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['widgetsContent', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }]
        }]
      };
      ConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-configuration',
        template: _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_skill_matrix_service__WEBPACK_IMPORTED_MODULE_4__["SkillMatrixService"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])], ConfigurationComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=configuration-configuration-module-es5.js.map