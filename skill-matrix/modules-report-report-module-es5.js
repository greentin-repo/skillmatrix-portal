(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-report-report-module"], {
    /***/
    "+V9X":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/report/average-time-taken/average-time-taken.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function V9X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXZlcmFnZS10aW1lLXRha2VuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoiYXZlcmFnZS10aW1lLXRha2VuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmMxZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sYXN0Um93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTUsIDIxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hc3Nlc3NtZW50Q29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTRkNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwcm92YWxDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlZmQ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5wcm9qZWN0Q29sIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2RlZWFmNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "0Vnf":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/report/skill-matrix-cellwise-plantwise/skill-matrix-cellwise-plantwise.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vnf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2tpbGwtbWF0cml4LWNlbGx3aXNlLXBsYW50d2lzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFDWjtBQUFZO0VBQ0csc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBRWY7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoic2tpbGwtbWF0cml4LWNlbGx3aXNlLXBsYW50d2lzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyYzFmMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2QyYzFmMztcclxuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAvKiBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmxhc3RSb3cge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTgsIDIxNSwgMjE1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFzc2Vzc21lbnRDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJlNGQ1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcHByb3ZhbENvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMmVmZDkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLnByb2plY3RDb2wge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZGVlYWY2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "0iWG":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/report/cell-level-adherence/cell-level-adherence.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function iWG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2VsbC1sZXZlbC1hZGhlcmVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQ1o7QUFBWTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUNZO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNoQjtBQUVRO0VBQ0ksZ0NBQUE7QUFBWjtBQUVRO0VBQ0ksOEJBQUE7QUFBWjtBQUVRO0VBQ0ksOEJBQUE7QUFBWiIsImZpbGUiOiJjZWxsLWxldmVsLWFkaGVyZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJjMWYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2QyYzFmMztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgICYubGFzdFJvdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOCwgMjE1LCAyMTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXNzZXNzbWVudENvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmU0ZDUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcHJvdmFsQ29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZWZkOSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAucHJvamVjdENvbCB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNkZWVhZjYgIWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "1h6Z":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/report/average-time-taken/average-time-taken.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: AverageTimeTakenComponent */

    /***/
    function h6Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AverageTimeTakenComponent", function () {
        return AverageTimeTakenComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_average_time_taken_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./average-time-taken.component.html */
      "Xmbd");
      /* harmony import */


      var _average_time_taken_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./average-time-taken.component.scss */
      "+V9X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AverageTimeTakenComponent = /*#__PURE__*/function () {
        function AverageTimeTakenComponent() {
          _classCallCheck(this, AverageTimeTakenComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(AverageTimeTakenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }, {
          key: "sortReportData",
          value: function sortReportData(sort) {}
        }]);

        return AverageTimeTakenComponent;
      }();

      AverageTimeTakenComponent.ctorParameters = function () {
        return [];
      };

      AverageTimeTakenComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AverageTimeTakenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-average-time-taken',
        template: _raw_loader_average_time_taken_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_average_time_taken_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AverageTimeTakenComponent);
      /***/
    },

    /***/
    "3wx3":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/plantvsactualcomplition/plantvsactualcomplition.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wx3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"TotalPlan\">Total Plan</th>\r\n                    <th mat-sort-header=\"ActualCompletion\">Actual Completion</th>\r\n                    <th mat-sort-header=\"CompletionPercentage\">Completion %</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.plantVsActual\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.totalPlan}}</td>\r\n                    <td>{{x.actualCompletion}}</td>\r\n                    <td>{{x.completionPercentage}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.plantVsActual == null || reportData.plantVsActual.length == 0\">\r\n                    <td colspan=\"5\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "5peD":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/report/skill-gap-cellwise/skill-gap-cellwise.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function peD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2tpbGwtZ2FwLWNlbGx3aXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoic2tpbGwtZ2FwLWNlbGx3aXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmMxZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sYXN0Um93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTUsIDIxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hc3Nlc3NtZW50Q29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTRkNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwcm92YWxDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlZmQ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5wcm9qZWN0Q29sIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2RlZWFmNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "68L1":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/report/assessment-pass-fail/assessment-pass-fail.component.scss ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function L1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXNzbWVudC1wYXNzLWZhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQ1o7QUFBWTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUNRO0VBQ0ksZ0NBQUE7QUFDWjtBQUNRO0VBQ0ksOEJBQUE7QUFDWjtBQUNRO0VBQ0ksOEJBQUE7QUFDWiIsImZpbGUiOiJhc3Nlc3NtZW50LXBhc3MtZmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJjMWYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2QyYzFmMztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGFzdFJvdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOCwgMjE1LCAyMTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXNzZXNzbWVudENvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmU0ZDUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcHJvdmFsQ29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZWZkOSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAucHJvamVjdENvbCB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNkZWVhZjYgIWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "7mqS":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/cellwise-multitasking/cellwise-multitasking.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"TotalEmp\">Total Employee Count</th>\r\n                    <th mat-sort-header=\"EmpMultiskillingCount\">Employee Multiskilling Count</th>\r\n                    <th mat-sort-header=\"MultiskillingPercentage\">Multiskilling %</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.cellWiseMultitasking\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.TotalEmp}}</td>\r\n                    <td>{{x.EmpMultiskillingCount}}</td>\r\n                    <td>{{x.MultiskillingPercentage}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.cellWiseMultitasking == null || reportData.cellWiseMultitasking.length == 0\">\r\n                    <td colspan=\"4\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "BJc4":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/report/plantwise-multitasking/plantwise-multitasking.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function BJc4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGxhbnR3aXNlLW11bHRpdGFza2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7QUFDWjtBQUFZO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBRWhCO0FBQVk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRWhCO0FBQ1E7RUFDSSxnQ0FBQTtBQUNaO0FBQ1E7RUFDSSw4QkFBQTtBQUNaO0FBQ1E7RUFDSSw4QkFBQTtBQUNaIiwiZmlsZSI6InBsYW50d2lzZS1tdWx0aXRhc2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVGaXhIZWFkIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgLyogYmFja2dyb3VuZDogI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2QyYzFmMyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkMmMxZjM7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50OyAqL1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmxhc3RSb3cge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMTgsIDIxNSwgMjE1KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFzc2Vzc21lbnRDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJlNGQ1ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcHByb3ZhbENvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMmVmZDkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gLnByb2plY3RDb2wge1xyXG4gICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjZGVlYWY2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "D0hf":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/report/skill-gap-cellwise/skill-gap-cellwise.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: SkillGapCellwiseComponent */

    /***/
    function D0hf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillGapCellwiseComponent", function () {
        return SkillGapCellwiseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_skill_gap_cellwise_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./skill-gap-cellwise.component.html */
      "uG8w");
      /* harmony import */


      var _skill_gap_cellwise_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill-gap-cellwise.component.scss */
      "5peD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkillGapCellwiseComponent = /*#__PURE__*/function () {
        function SkillGapCellwiseComponent() {
          _classCallCheck(this, SkillGapCellwiseComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(SkillGapCellwiseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return SkillGapCellwiseComponent;
      }();

      SkillGapCellwiseComponent.ctorParameters = function () {
        return [];
      };

      SkillGapCellwiseComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SkillGapCellwiseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-gap-cellwise',
        template: _raw_loader_skill_gap_cellwise_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_gap_cellwise_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SkillGapCellwiseComponent);
      /***/
    },

    /***/
    "DpkX":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/skill-matrix-cellwise-plantwise/skill-matrix-cellwise-plantwise.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DpkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"PlanCount\">Plan Count</th>\r\n                    <th mat-sort-header=\"ActualCount\">Actual Count</th>\r\n                    <th mat-sort-header=\"WorkstationName\">Workstation Name</th>\r\n                    <th mat-sort-header=\"MonthYear\">Month Year</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.skillMatrixCellPlantWise\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.planCount}}</td>\r\n                    <td>{{x.actualCount}} ({{x.percentage}} %)</td>\r\n                    <td>{{x.workstationName}}</td>\r\n                    <td>{{x.monthYear}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.skillMatrixCellPlantWise == null || reportData.skillMatrixCellPlantWise.length == 0\">\r\n                    <td colspan=\"5\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "ENw3":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/assessment-pass-fail/assessment-pass-fail.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ENw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"PassCount\">Pass Count</th>\r\n                    <th mat-sort-header=\"FailCount\">Fail Count</th>\r\n                    <th mat-sort-header=\"TotalCount\">Total Count</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.assessmentPassOrFail\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.passCount}} ( {{x.passPercentage}}% )</td>\r\n                    <td>{{x.failCount}} ( {{x.failPercentage}}% )</td>\r\n                    <td>{{x.totalCount}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"4\" class=\"pr text-center no-record-found\">\r\n                        <!-- Data Not Found -->\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "EO9k":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/plant-level-adherence/plant-level-adherence.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EO9k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <th mat-sort-header=\"BranchName\">Plant</th>\r\n                <th mat-sort-header=\"DeptName\">Department</th>\r\n                <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                <th mat-sort-header=\"LevelName\">Level</th>\r\n                <th mat-sort-header=\"Plan\">Plan</th>\r\n                <th mat-sort-header=\"CompleteCount\">Completed</th>\r\n                <th mat-sort-header=\"CompletePercentage\">Complete %</th>\r\n                <th mat-sort-header=\"PendingCount\">Pending</th>\r\n                <th mat-sort-header=\"PendingPercentage\">Pending %</th>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.plantLevelAdherence\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.plan}}</td>\r\n                    <td>{{x.completeCount}}</td>\r\n                    <td>{{x.completePercentage}}</td>\r\n                    <td>{{x.pendingCount}}</td>\r\n                    <td>{{x.pendingPercentage}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.plantLevelAdherence == null || reportData.plantLevelAdherence.length == 0\">\r\n                    <td colspan=\"8\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "EThV":
    /*!**********************************************************!*\
      !*** ./src/app/modules/report/report-service.service.ts ***!
      \**********************************************************/

    /*! exports provided: ReportServiceService */

    /***/
    function EThV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportServiceService", function () {
        return ReportServiceService;
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


      var src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/auth/auth.service */
      "jGGy");
      /* harmony import */


      var src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/auth/http.service */
      "bnLG");

      var ReportServiceService = /*#__PURE__*/function () {
        function ReportServiceService(httpService, authService) {
          _classCallCheck(this, ReportServiceService);

          this.httpService = httpService;
          this.authService = authService;
        }
        /* Get Report List */


        _createClass(ReportServiceService, [{
          key: "getReportList",
          value: function getReportList(url, reqBody) {
            return this.httpService.postMethod(url, reqBody);
          }
          /* Get Department List by BranchId */

        }, {
          key: "getDepartmentByBranch",
          value: function getDepartmentByBranch(url) {
            return this.httpService.getMethod(url);
          } // get branch access list 

        }, {
          key: "getBranchAccessList",
          value: function getBranchAccessList(url) {
            return this.httpService.getMethod(url);
          } // get level  list 

        }, {
          key: "getMasterLevelList",
          value: function getMasterLevelList(url) {
            return this.httpService.getMethod(url);
          } // get line list 

        }, {
          key: "getLineNameList",
          value: function getLineNameList(url, reqBody) {
            return this.httpService.postMethod(url, reqBody);
          }
        }]);

        return ReportServiceService;
      }();

      ReportServiceService.ctorParameters = function () {
        return [{
          type: src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
        }, {
          type: src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      };

      ReportServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_auth_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], src_app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], ReportServiceService);
      /***/
    },

    /***/
    "HYDo":
    /*!*********************************************************!*\
      !*** ./src/app/modules/report/report-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ReportRoutingModule */

    /***/
    function HYDo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function () {
        return ReportRoutingModule;
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


      var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.component */
      "T3xo");

      var routes = [{
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"]
      }];

      var ReportRoutingModule = function ReportRoutingModule() {
        _classCallCheck(this, ReportRoutingModule);
      };

      ReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportRoutingModule);
      /***/
    },

    /***/
    "IOdn":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/report/employee-wise-plan/employee-wise-plan.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: EmployeeWisePlanComponent */

    /***/
    function IOdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmployeeWisePlanComponent", function () {
        return EmployeeWisePlanComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_employee_wise_plan_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./employee-wise-plan.component.html */
      "YQTN");
      /* harmony import */


      var _employee_wise_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./employee-wise-plan.component.scss */
      "hKRC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EmployeeWisePlanComponent = /*#__PURE__*/function () {
        function EmployeeWisePlanComponent() {
          _classCallCheck(this, EmployeeWisePlanComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(EmployeeWisePlanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return EmployeeWisePlanComponent;
      }();

      EmployeeWisePlanComponent.ctorParameters = function () {
        return [];
      };

      EmployeeWisePlanComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      EmployeeWisePlanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-employee-wise-plan',
        template: _raw_loader_employee_wise_plan_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_employee_wise_plan_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmployeeWisePlanComponent);
      /***/
    },

    /***/
    "Jy0l":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/report/assessment-pass-fail/assessment-pass-fail.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: AssessmentPassFailComponent */

    /***/
    function Jy0l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AssessmentPassFailComponent", function () {
        return AssessmentPassFailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_assessment_pass_fail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./assessment-pass-fail.component.html */
      "ENw3");
      /* harmony import */


      var _assessment_pass_fail_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./assessment-pass-fail.component.scss */
      "68L1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AssessmentPassFailComponent = /*#__PURE__*/function () {
        function AssessmentPassFailComponent() {
          _classCallCheck(this, AssessmentPassFailComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
          this.staticPagination = {
            total: 50,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 5,
            listLength: 50
          };
        }

        _createClass(AssessmentPassFailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {//this.selectedReportData = this.selectedDet
            //console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }, {
          key: "sortReportData",
          value: function sortReportData(sort) {}
        }, {
          key: "loadMore",
          value: function loadMore(event) {}
        }]);

        return AssessmentPassFailComponent;
      }();

      AssessmentPassFailComponent.ctorParameters = function () {
        return [];
      };

      AssessmentPassFailComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AssessmentPassFailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-assessment-pass-fail',
        template: _raw_loader_assessment_pass_fail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_assessment_pass_fail_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AssessmentPassFailComponent);
      /***/
    },

    /***/
    "Lrd+":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/plantwise-multitasking/plantwise-multitasking.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <!-- <th mat-sort-header=\"DeptName\">Department</th> -->\r\n                    <th mat-sort-header=\"TotalEmp\">Total Employee</th>\r\n                    <th mat-sort-header=\"EmpMultiskillingCount\">Employee Multiskilling Count</th>\r\n                    <th mat-sort-header=\"MultiskillingPercentage\">Multiskilling %</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.plantWiseMultitasking\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <!-- <td>{{x.deptName}}</td> -->\r\n                    <td>{{x.TotalEmp}}</td>\r\n                    <td>{{x.EmpMultiskillingCount}}</td>\r\n                    <td>{{x.MultiskillingPercentage}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.plantWiseMultitasking == null || reportData.plantWiseMultitasking.length == 0\">\r\n                    <td colspan=\"4\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "PEO2":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/report/plantvsactualcomplition/plantvsactualcomplition.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PlantvsactualcomplitionComponent */

    /***/
    function PEO2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlantvsactualcomplitionComponent", function () {
        return PlantvsactualcomplitionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_plantvsactualcomplition_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./plantvsactualcomplition.component.html */
      "3wx3");
      /* harmony import */


      var _plantvsactualcomplition_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plantvsactualcomplition.component.scss */
      "hQrE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlantvsactualcomplitionComponent = /*#__PURE__*/function () {
        function PlantvsactualcomplitionComponent() {
          _classCallCheck(this, PlantvsactualcomplitionComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(PlantvsactualcomplitionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return PlantvsactualcomplitionComponent;
      }();

      PlantvsactualcomplitionComponent.ctorParameters = function () {
        return [];
      };

      PlantvsactualcomplitionComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PlantvsactualcomplitionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plantvsactualcomplition',
        template: _raw_loader_plantvsactualcomplition_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plantvsactualcomplition_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PlantvsactualcomplitionComponent);
      /***/
    },

    /***/
    "QW2y":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/report/plant-level-adherence/plant-level-adherence.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: PlantLevelAdherenceComponent */

    /***/
    function QW2y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlantLevelAdherenceComponent", function () {
        return PlantLevelAdherenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_plant_level_adherence_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./plant-level-adherence.component.html */
      "EO9k");
      /* harmony import */


      var _plant_level_adherence_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plant-level-adherence.component.scss */
      "Xsvq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlantLevelAdherenceComponent = /*#__PURE__*/function () {
        function PlantLevelAdherenceComponent() {
          _classCallCheck(this, PlantLevelAdherenceComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(PlantLevelAdherenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return PlantLevelAdherenceComponent;
      }();

      PlantLevelAdherenceComponent.ctorParameters = function () {
        return [];
      };

      PlantLevelAdherenceComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PlantLevelAdherenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plant-level-adherence',
        template: _raw_loader_plant_level_adherence_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plant_level_adherence_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PlantLevelAdherenceComponent);
      /***/
    },

    /***/
    "RECk":
    /*!******************************************************!*\
      !*** ./src/app/modules/report/report.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function RECk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tdcount {\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.excelbutton {\n  cursor: pointer;\n  padding-right: 1rem;\n}\n\n.dateRangePicker {\n  width: 100%;\n  height: 60px;\n  background: #fff;\n}\n\nul {\n  padding: 0px;\n  margin: 0px;\n  list-style: none;\n  display: inline-block;\n}\n\n.dateBlock.customDateBlock {\n  width: 80px;\n}\n\n.dateBlock {\n  float: left;\n  width: 50px;\n  height: 35px;\n  color: #c3c3c3;\n  margin: 3.6% 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.dateBlock .dateBlock-inner {\n  font: normal normal 400 13px/35px Helvetica Neue;\n  letter-spacing: 0px;\n  margin: auto;\n  text-align: center;\n}\n\n.dateBlock:hover,\n.dateBlockactive {\n  background: #7044cd;\n  color: #fff;\n}\n\n.dateBlock.noBg:hover,\n.dateBlockactive.noBg {\n  background: transparent;\n  color: #7044cd;\n}\n\n.form-group.hidden {\n  width: 0;\n  margin: 0;\n  border: none;\n  padding: 0;\n}\n\n.custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  display: inline-block;\n  height: 2rem;\n  width: 2rem;\n}\n\n.custom-day.focused {\n  background-color: #e6e6e6;\n}\n\n.custom-day.range,\n.custom-day:hover {\n  background-color: #0275d8;\n  color: white;\n}\n\n.custom-day.faded {\n  background-color: rgba(2, 117, 216, 0.5);\n}\n\n.customDateBlock .fromToDatePicker {\n  display: inline-flex;\n  width: 210px;\n}\n\n.customDateBlock .fromToDatePicker .toString {\n  color: #7044cd;\n  line-height: 34px;\n  font-weight: bold;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n}\n\n.customDateBlock .fromToDatePicker input,\n.customDateBlock .fromToDatePicker input:focus,\n.customDateBlock .fromToDatePicker input:hover {\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n  border-radius: 0px;\n  outline: none;\n  border-bottom: 1px solid #ccc;\n  padding: 0.375rem 0px;\n  text-align: center;\n}\n\n.customDateBlock .fromToDatePicker .btn,\n.customDateBlock .fromToDatePicker .btn:hover,\n.customDateBlock .fromToDatePicker .btn:focus {\n  box-shadow: none;\n  outline: none;\n  border: none;\n}\n\n.profileInfo {\n  text-align: right;\n}\n\n.profileInfo .userPic img {\n  max-width: 100%;\n  height: 30px;\n  vertical-align: bottom;\n  margin-right: 5px;\n}\n\n.profileInfo .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #1fa0e2;\n  vertical-align: middle;\n}\n\n.profileInfo .logoutImg .feather {\n  padding: 5px;\n  margin-left: 5px;\n  font-size: 1.2rem;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav li > a {\n  font-size: 16px;\n  padding: 0 0.6rem;\n  color: #1fa0e2;\n}\n\n.navbarContainer .navbar-nav li .userProfile {\n  display: inline-block;\n}\n\n.navbarContainer .navbar-nav li .userProfile i {\n  font-size: 10px;\n  margin-left: 10px;\n}\n\n.navbarContainer .navbar-nav li .userProfile img {\n  max-width: 100%;\n  height: 40px;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li .userProfile .userName {\n  font: normal normal bold 14px/1.5 Helvetica Neue;\n  color: #1fa0e2;\n  vertical-align: middle;\n}\n\n.navbarContainer .navbar-nav li.header-notification {\n  perspective: 1000px;\n  z-index: 99;\n  position: relative;\n  cursor: pointer;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification {\n  background: #fff;\n  box-shadow: 0 0 35px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n  visibility: visible;\n  transform: translateY(20px);\n  padding: 0px;\n  z-index: 999;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a {\n  border-radius: 5px;\n  padding: 0.7em 20px;\n  display: block;\n  text-decoration: none;\n  font-size: 15px;\n  padding-left: 0;\n  color: #222;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:hover {\n  background-color: #f6fcff;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):focus {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification a:not([href]):not([tabindex]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification i {\n  font-size: 15px;\n  margin-left: 0;\n  margin-right: 5px;\n}\n\n.navbarContainer .navbar-nav li.header-notification .profile-notification.active1:before {\n  content: \"\";\n  border: 10px solid transparent;\n  border-left-color: #fff;\n  border-top-color: #fff;\n  position: absolute;\n  border-radius: 5px;\n  top: -9px;\n  right: 20px;\n  box-shadow: -30px -11px 35px 0 rgba(0, 0, 0, 0.25);\n  transform: rotate(45deg);\n  z-index: 9999;\n}\n\n:host ::ng-deep .custom-multiSelection.customWidthForRport .selected-item,\n:host ::ng-deep .custom-multiSelection.customWidthForRport .selected-item:hover,\n:host ::ng-deep .custom-multiSelection.customWidthForRport .selected-item:focus {\n  max-width: 100%;\n  /* Replace 100px with your desired value */\n}\n\n.headerBar {\n  display: inline-flex;\n  width: 100%;\n}\n\n.headerBar .backArrow {\n  margin: auto;\n  display: inline-block;\n  padding-left: 1rem;\n}\n\n.headerBar .backArrow .feather {\n  color: #7044cd;\n  vertical-align: bottom;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.homepage-block {\n  height: calc(100vh - 22vh);\n}\n\n.reportBlock {\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 3px 0 rgba(0, 0, 0, 0.19) !important;\n}\n\n.p-r-15 {\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n}\n\n.row .input-group {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQWlDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBOUJKOztBQWlDQTtFQUNJLFdBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBOUJKOztBQWdDSTtFQUNJLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUE5QlI7O0FBa0NBOztFQUVJLG1CQUFBO0VBQ0EsV0FBQTtBQS9CSjs7QUFrQ0E7O0VBRUksdUJBQUE7RUFDQSxjQUFBO0FBL0JKOztBQWtDQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUEvQko7O0FBa0NBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUEvQko7O0FBa0NBO0VBQ0kseUJBQUE7QUEvQko7O0FBa0NBOztFQUVJLHlCQUFBO0VBQ0EsWUFBQTtBQS9CSjs7QUFrQ0E7RUFDSSx3Q0FBQTtBQS9CSjs7QUFtQ0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7QUFoQ1I7O0FBa0NRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFoQ1o7O0FBbUNROzs7RUFHSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQWpDWjs7QUFvQ1E7OztFQUdJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFsQ1o7O0FBdUNBO0VBQ0ksaUJBQUE7QUFwQ0o7O0FBdUNRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBckNaOztBQXlDSTtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBdkNSOztBQTJDUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQXpDWjs7QUFpRFk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBOUNoQjs7QUFpRFk7RUFDSSxxQkFBQTtBQS9DaEI7O0FBaURnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQS9DcEI7O0FBa0RnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQWhEcEI7O0FBbURnQjtFQUNJLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBakRwQjs7QUFxRFk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFuRGhCOztBQXFEZ0I7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBbkRwQjs7QUFxRG9CO0VBS0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQXZEeEI7O0FBNkN3QjtFQUNJLHlCQUFBO0FBM0M1Qjs7QUF1RDRCO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBckRoQzs7QUF1RGdDO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBckRwQzs7QUF3RGdDO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FBdERwQzs7QUE0RG9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQTFEeEI7O0FBOER3QjtFQUNJLFdBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQTVENUI7O0FBcUVBOzs7RUFHSSxlQUFBO0VBQ0EsMENBQUE7QUFsRUo7O0FBcUVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FBbEVKOztBQW9FSTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBbEVSOztBQW9FUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBbEVaOztBQXVFQTtFQUNJLDBCQUFBO0FBcEVKOztBQXVFQTtFQUNJLHNGQUFBO0FBcEVKOztBQXVFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUFwRUo7O0FBd0VJO0VBQ0ksZUFBQTtBQXJFUiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGRjb3VudCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmV4Y2VsYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi8vIC5kYXRlQmxvY2sge1xyXG4vLyAgICAgd2lkdGg6IDU1cHg7XHJcbi8vICAgICBoZWlnaHQ6IDQ1cHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XHJcbi8vICAgICBjb2xvcjogI2I3YjJiMjtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIG1hcmdpbjogNXB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAuZGF0ZUJsb2NrLWlubmVyIHtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHg7XHJcbi8vICAgICBmb250OiBub3JtYWwgbm9ybWFsIDUwMCAxNHB4IFJvYm90bztcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5kYXRlQmxvY2s6aG92ZXIge1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBjb2xvcjogIzcwNDRjZDtcclxuLy8gfVxyXG5cclxuLy8gLmRhdGVCbG9ja2FjdGl2ZSB7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGNvbG9yOiAjNzA0NGNkO1xyXG4vLyB9XHJcblxyXG4uZGF0ZVJhbmdlUGlja2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZGF0ZUJsb2NrLmN1c3RvbURhdGVCbG9jayB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmRhdGVCbG9jayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgY29sb3I6ICNjM2MzYzM7XHJcbiAgICBtYXJnaW46IDMuNiUgNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5kYXRlQmxvY2staW5uZXIge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgNDAwIDEzcHgvMzVweCBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlQmxvY2s6aG92ZXIsXHJcbi5kYXRlQmxvY2thY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzcwNDRjZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZGF0ZUJsb2NrLm5vQmc6aG92ZXIsXHJcbi5kYXRlQmxvY2thY3RpdmUubm9CZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjNzA0NGNkO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC5oaWRkZW4ge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LmZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxufVxyXG5cclxuLmN1c3RvbS1kYXkucmFuZ2UsXHJcbi5jdXN0b20tZGF5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jdXN0b20tZGF5LmZhZGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbn1cclxuXHJcbi5jdXN0b21EYXRlQmxvY2sge1xyXG4gICAgLmZyb21Ub0RhdGVQaWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHdpZHRoOiAyMTBweDtcclxuXHJcbiAgICAgICAgLnRvU3RyaW5nIHtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDQ0Y2Q7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIGlucHV0OmZvY3VzLFxyXG4gICAgICAgIGlucHV0OmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuLFxyXG4gICAgICAgIC5idG46aG92ZXIsXHJcbiAgICAgICAgLmJ0bjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9maWxlSW5mbyB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAudXNlclBpYyB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXNlck5hbWUge1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAxNHB4LzEuNSBIZWx2ZXRpY2EgTmV1ZTtcclxuICAgICAgICBjb2xvcjogIzFmYTBlMjtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvdXRJbWcge1xyXG4gICAgICAgIC5mZWF0aGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXZiYXJDb250YWluZXIge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgPmEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjZyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzFmYTBlMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXJQcm9maWxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnVzZXJOYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMTRweC8xLjUgSGVsdmV0aWNhIE5ldWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxZmEwZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5oZWFkZXItbm90aWZpY2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAucHJvZmlsZS1ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDM1cHggMCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmY2ZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN2VtIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bm90KFtocmVmXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoW3RhYmluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zMHB4IC0xMXB4IDM1cHggMCByZ2IoMCAwIDAgLyAyNSUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tbXVsdGlTZWxlY3Rpb24uY3VzdG9tV2lkdGhGb3JScG9ydCAuc2VsZWN0ZWQtaXRlbSxcclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tbXVsdGlTZWxlY3Rpb24uY3VzdG9tV2lkdGhGb3JScG9ydCAuc2VsZWN0ZWQtaXRlbTpob3ZlcixcclxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tbXVsdGlTZWxlY3Rpb24uY3VzdG9tV2lkdGhGb3JScG9ydCAuc2VsZWN0ZWQtaXRlbTpmb2N1cyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBSZXBsYWNlIDEwMHB4IHdpdGggeW91ciBkZXNpcmVkIHZhbHVlICovXHJcbn1cclxuXHJcbi5oZWFkZXJCYXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuYmFja0Fycm93IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuXHJcbiAgICAgICAgLmZlYXRoZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNDRjZDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ob21lcGFnZS1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMnZoKTtcclxufVxyXG5cclxuLnJlcG9ydEJsb2NrIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC1yLTE1IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "T3xo":
    /*!****************************************************!*\
      !*** ./src/app/modules/report/report.component.ts ***!
      \****************************************************/

    /*! exports provided: ReportComponent */

    /***/
    function T3xo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
        return ReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report.component.html */
      "pYBd");
      /* harmony import */


      var _report_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report.component.scss */
      "RECk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var exceljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! exceljs */
      "6K47");
      /* harmony import */


      var exceljs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _report_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./report-service.service */
      "EThV");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/theme/shared/components */
      "7jS0");

      var ReportComponent = /*#__PURE__*/function () {
        function ReportComponent(reportService, modalService, calendar, alertService, formatter, fb) {
          var _this = this;

          _classCallCheck(this, ReportComponent);

          this.reportService = reportService;
          this.modalService = modalService;
          this.calendar = calendar;
          this.alertService = alertService;
          this.formatter = formatter;
          this.fb = fb;
          this.dateRangeDates = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.companies = [{
            companyName: "Company A",
            companyLogo: "CompanyLogo A",
            mobileNo: "123-456-7890",
            location: "Location A"
          }, {
            companyName: "Company B",
            companyLogo: "CompanyLogo B",
            mobileNo: "987-654-3210",
            location: "Location B"
          }, {
            companyName: "Company C",
            companyLogo: "CompanyLogo C",
            mobileNo: "555-555-5555",
            location: "Location C"
          }];
          this.selectedReport = {};
          this.selectedReportData = {};
          this.SingleDropdownSettings = {};
          this.multipleDropdownSettings = {};
          this.userDet = {};
          this.data = {};
          this.plantList = [];
          this.departmentList = [];
          this.listLoading = false;
          this.isDataAvail = false;
          this.searchDet = {};
          this.selectedDate = {};
          this.dateObj = {};
          this.selectedDateType = {};
          this.reportBody = {};
          this.tableAppliedSortData = {};
          this.isAppliedFilter = false;
          this.reportFilterFlag = false; // dateRangeDates: any = {};

          this.staticPagination = {
            total: 0,
            page: 1,
            maxSize: 5,
            itemsPerPage: 10,
            totalPages: 0,
            listLength: 0
          };
          this.reportCaptionsList = [{
            id: 1,
            name: "Completion Discrepancy Report",
            reportCaption: "Completion_Discrepancy_Report",
            isDataFound: false
          }, {
            id: 2,
            name: "Assessment Success Rate",
            reportCaption: "Assessment_Success_Rate",
            isDataFound: false
          }, {
            id: 3,
            name: "Employee Performance Analysis",
            reportCaption: "Employee_Performance_Analysis",
            isDataFound: false
          }, {
            id: 4,
            name: "Cell Adherence Status",
            reportCaption: "Cell_Adherence_Status",
            isDataFound: false
          }, {
            id: 5,
            name: "Plant Adherence Status",
            reportCaption: "Plant_Adherence_Status",
            isDataFound: false
          }, {
            id: 6,
            name: "Multiskilling Status At Cell Level",
            reportCaption: "Multiskilling_Status_At_Cell_Level",
            isDataFound: false
          }, {
            id: 7,
            name: "Multiskilling Status At Plant Level",
            reportCaption: "Multiskilling_Status_At_Plant_Level",
            isDataFound: false
          }, {
            id: 8,
            name: "Task Completion Status",
            reportCaption: "Task_Completion_Status",
            isDataFound: false
          }, {
            id: 9,
            name: "Monthly Skill Matrix Report",
            reportCaption: "Monthly_Skill_Matrix_Report",
            isDataFound: false
          }, {
            id: 10,
            name: "Skill Gap Analysis",
            reportCaption: "Skill_Gap_Analysis",
            isDataFound: false
          }];
          this.isSelectedReportDataFound = false;
          this.isSortingApplied = false;

          this.callbackFuncGenReport = function (appliedSort) {
            _this.isSortingApplied = true;
            console.log(appliedSort);
            _this.tableAppliedSortData = appliedSort;

            _this.generateReport("filter");
          };

          this.getDateFromInput = function (type) {
            this.datePicker = {};
            this.datePicker.date = "";
            this.dateType = type;
            this.setdateType = type;
            console.log(type);
            var d = new Date();
            moment__WEBPACK_IMPORTED_MODULE_5__().endOf("month");
            this.toDate = moment__WEBPACK_IMPORTED_MODULE_5__(d).endOf("months").format("YYYY-MM");

            if (type == "1m") {
              this.fromDate = moment__WEBPACK_IMPORTED_MODULE_5__(d).subtract(1, "months").format("YYYY-MM");
            } else if (type == "6m") {
              this.fromDate = moment__WEBPACK_IMPORTED_MODULE_5__(d).subtract(6, "months").format("YYYY-MM");
            } else if (type == "1y") {
              this.fromDate = moment__WEBPACK_IMPORTED_MODULE_5__(d).subtract(1, "year").format("YYYY-MM");
            }
          };
        }

        _createClass(ReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.filterData = this.fb.group({
              branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
              deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](),
              skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]()
            });
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
            this.filterData = this.fb.group({
              branchId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required),
              skillLvlId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"](""),
              deptIds: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]("")
            });
            this.userDet = JSON.parse(localStorage.getItem("userDet"));
            this.getAccessiblePlantList();
            this.getReportLevelList();
          }
        }, {
          key: "selectCustomDate",
          value: function selectCustomDate(fromDate, toDate) {
            console.log("From Date:", fromDate);
            console.log("To Date:", toDate);

            if (fromDate.value != null && fromDate.value != undefined && fromDate.value != "") {
              this.selectedReport.fromDate = new Date(fromDate.value);
            }

            if (toDate.value != null && toDate.value != undefined && toDate.value != "") {
              this.selectedReport.toDate = new Date(toDate.value);
            }
          }
          /* Reprt Generate Functionality post clicking on Generate Report OR after appling Filter
          Author Simran
          created Date 21/09/2023 */

        }, {
          key: "generateReport",
          value: function generateReport(searchFilter) {
            var _this2 = this;

            // && searchfilter == "filter"
            if (this.staticPagination.offset > 0 && this.searchDet.reportFilterFlag == false) {
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
              limit: this.staticPagination.itemsPerPage,
              reportCaption: this.selectedReport.reportCaption,
              // orgId: this.userDet.organization.orgId,
              branchId: this.userDet.branch.branchId
            };
            console.log(reqData); // if (this.sorting) {
            //   if (this.sorting.direction != "") {
            //     reqData.colName = this.sorting.active;
            //     reqData.orderType = this.sorting.direction;
            //   }
            // }

            if ((this.selectedReport.reportType != undefined || this.selectedReport.reportType != null) && this.selectedReport.reportType.length > 0) {
              if (!this.isSortingApplied) {
                this.listLoading = true;
              } // this.reportBody = {
              //   "reportCaption": this.selectedReport.reportCaption,
              //   "orgId": this.userDet.organization.orgId,
              //   "branchId": this.userDet.branch.branchId,
              //   // "deptId": this.userDet.dept.deptId,
              //   "colName": this.tableAppliedSortData.active,
              //   "orderType": this.tableAppliedSortData.direction
              // };


              if (searchFilter == "filter") {
                console.log(this.searchDet.branchId);

                if (this.searchDet.branchId != null && this.searchDet.branchId.length > 0) {
                  for (var i = 0; i < this.searchDet.branchId.length; i++) {
                    reqData.branchId = this.searchDet.branchId[0].id;
                  }
                }

                if (this.getIDsArray(this.searchDet.deptIds) != null && this.getIDsArray(this.searchDet.deptIds).length > 0) {
                  for (var _i = 0; _i < this.getIDsArray(this.searchDet.deptIds).length; _i++) {
                    reqData.lineIds = this.getIDsArray(this.searchDet.deptIds);
                  }
                }

                if (this.searchDet.skillLvlId != null && this.searchDet.skillLvlId.length > 0) {
                  for (var _i2 = 0; _i2 < this.searchDet.skillLvlId.length; _i2++) {
                    reqData.skillLevelId = this.searchDet.skillLvlId[0].id;
                  }
                }
              }

              if (this.tableAppliedSortData && this.tableAppliedSortData.direction) {
                reqData.colName = this.tableAppliedSortData.active;
                reqData.orderType = this.tableAppliedSortData.direction.toUpperCase();
              }

              reqData.fromDt = moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedReport.fromDate).format("YYYY-MM-DD") + " 00:00:00";
              reqData.toDt = moment__WEBPACK_IMPORTED_MODULE_5__(this.selectedReport.toDate).format("YYYY-MM-DD") + " 23:59:59";
              this.selectedReport.isDataFound = false;
              this.isSelectedReportDataFound = false;
              this.reportService.getReportList("apis/sm/getSkillMatrixReport", reqData).subscribe(function (response) {
                _this2.listLoading = false;
                _this2.isSortingApplied = false;

                var _iterator = _createForOfIteratorHelper(_this2.reportCaptionsList),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var item = _step.value;

                    if (item.reportCaption === reqData.reportCaption) {
                      _this2.reportName = item.name;
                      break;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (response.result) {
                  _this2.selectedReport.isDataFound = true;
                  _this2.isSelectedReportDataFound = true;

                  _this2.showReport(response);
                } else {
                  _this2.showReport(response);
                }
              });
            } else {
              this.alertService.error("Please select report type");
            }
          }
        }, {
          key: "showReport",
          value: function showReport(response) {
            if (this.selectedReport.reportCaption == "MULTI_SKILLING_REPORT") {
              this.setMultiSkillingReport(response.dataList);
            } else if (this.selectedReport.reportCaption == "Monthly_Skill_Matrix_Report") {
              this.setSkillMatrixCellPlantWiseReport(response);
            } else if (this.selectedReport.reportCaption == "Employee_Performance_Analysis") {
              this.setEmployeeWisePlanReport(response);
            } else if (this.selectedReport.reportCaption == "Task_Completion_Status") {
              this.setAverageTimeTakenReport(response);
            } else if (this.selectedReport.reportCaption == "Plant_Adherence_Status") {
              this.setPlantLevelAdherenceReport(response);
            } else if (this.selectedReport.reportCaption == "Cell_Adherence_Status") {
              this.setCellLevelAdherenceReport(response);
            } else if (this.selectedReport.reportCaption == "Completion_Discrepancy_Report") {
              this.setPlantVsActualReport(response);
            } else if (this.selectedReport.reportCaption == "Assessment_Success_Rate") {
              this.setAssessmentPassOrFailReport(response);
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Cell_Level") {
              this.setCellWiseMultitaskingReport(response);
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Plant_Level") {
              this.setPlantwiseMultitaskingReport(response);
            } else if (this.selectedReport.reportCaption == "Skill_Gap_Analysis") {
              this.setSkillGapCellWiseReport(response);
            }
          }
        }, {
          key: "exportReport",
          value: function exportReport() {
            this.listLoading = true;

            if (this.selectedReport.reportCaption == "Level_1_REPORT") {
              this.exportExcelReport();
            } else if (this.selectedReport.reportCaption == "Assessment_Success_Rate") {
              this.exportAssessmentPasssOrFail();
            } else if (this.selectedReport.reportCaption == "Task_Completion_Status") {
              this.exportAverageTime();
            } else if (this.selectedReport.reportCaption == "Cell_Adherence_Status") {
              this.exportCellLevelAdherence();
            } else if (this.selectedReport.reportCaption == "Plant_Adherence_Status") {
              this.exportPlantLevelAdherence();
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Cell_Level") {
              this.exportCellWiseMultitasking();
            } else if (this.selectedReport.reportCaption == "Employee_Performance_Analysis") {
              this.exportEmployeeWisePlan();
            } else if (this.selectedReport.reportCaption == "OJT_PLAN_ORGWISE_REPORT") {
              this.exportPlantLevelAdherence();
            } else if (this.selectedReport.reportCaption == "Completion_Discrepancy_Report") {
              this.exportPlantVsActualComplition();
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Plant_Level") {
              this.exportPlantWiseMultitasking();
            } else if (this.selectedReport.reportCaption == "Skill_Gap_Analysis") {
              this.exportSkillGap();
            } else if (this.selectedReport.reportCaption == "Monthly_Skill_Matrix_Report") {
              this.exportSkillMatrixCellWisePlantWise();
            }

            this.listLoading = false;
          }
        }, {
          key: "exportExcelReport",
          value: function exportExcelReport() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Registration Status", {});
            headers = [{
              header: "Company Name",
              key: "companyName",
              width: 20
            }, {
              header: "Company Logo",
              key: "companyLogo",
              width: 20
            }, {
              header: "Mobile No.",
              key: "mobileNo",
              width: 20
            }, {
              header: "Location",
              key: "location",
              width: 20
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.companies.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                element[x] = element[x] ? element[x] : "N/A";
                rowslist[x] = element[x] ? element[x] : "N/A";
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "Level 1 Report";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
          /* Report Exporting Functionality
          Author Simran
          created Date 21/09/2023 */

        }, {
          key: "exportAssessmentPasssOrFail",
          value: function exportAssessmentPasssOrFail() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Assessment Success Rate", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Pass Count",
              key: "passCount",
              width: 30
            }, {
              header: "Fail Count",
              key: "failCount",
              width: 30
            }, {
              header: "Total Count",
              key: "totalCount",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.assessmentPassOrFail.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                //rowslist[x] = element[x];
                if (x == 'passCount') {
                  rowslist[x] = element.passCount + " (".concat(element.passPercentage, "%)");
                } else if (x == 'failCount') {
                  rowslist[x] = element.failCount + " (".concat(element.failPercentage, "%)");
                } else {
                  rowslist[x] = element[x];
                }
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "ASSESSMENT_SUCCESS_RATE";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportAverageTime",
          value: function exportAverageTime() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Task Completion Status", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Average Time",
              key: "avgTime",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.averageTimeTaken.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "TASK_COMPLETION_STATUS";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportCellLevelAdherence",
          value: function exportCellLevelAdherence() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Cell Adherence Status", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Workstation",
              key: "workstation",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Plan",
              key: "plan",
              width: 30
            }, {
              header: "Completed",
              key: "completeCount",
              width: 30
            }, {
              header: "Complete %",
              key: "completePercentage",
              width: 30
            }, {
              header: "Pending",
              key: "pendingCount",
              width: 30
            }, {
              header: "Pending %",
              key: "pendingPercentage",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.cellLevelAdherence.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "CELL_ADHERENCE_STATUS";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportCellWiseMultitasking",
          value: function exportCellWiseMultitasking() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Multiskilling Status At Cell Level", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Total Employee Count",
              key: "TotalEmp",
              width: 30
            }, {
              header: "Employee Multiskilling Count",
              key: "EmpMultiskillingCount",
              width: 30
            }, {
              header: "Multiskilling",
              key: "MultiskillingPercentage",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.cellWiseMultitasking.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "MULTISKILLING_STATUS_AT_CELL_LEVEL";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportEmployeeWisePlan",
          value: function exportEmployeeWisePlan() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Employee Performance Analysis", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Plan",
              key: "planCount",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Actual",
              key: "actulCount",
              width: 30
            }, {
              header: "Pass",
              key: "passCount",
              width: 30
            }, {
              header: "Fail",
              key: "failCount",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.employeeWisePlan.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "EMPLOYEE_PERFORMANCE_ANALYSIS";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportPlantLevelAdherence",
          value: function exportPlantLevelAdherence() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Plant Adherence Status", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Plan",
              key: "plan",
              width: 30
            }, {
              header: "Completed",
              key: "completeCount",
              width: 30
            }, {
              header: "Complete %",
              key: "completePercentage",
              width: 30
            }, {
              header: "Pending",
              key: "pendingCount",
              width: 30
            }, {
              header: "Pending %",
              key: "pendingPercentage",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.plantLevelAdherence.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "PLANT_ADHERENCE_STATUS";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportPlantVsActualComplition",
          value: function exportPlantVsActualComplition() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Completion Discrepancy Report", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Total Plan",
              key: "totalPlan",
              width: 30
            }, {
              header: "Actual Completion",
              key: "actualCompletion",
              width: 30
            }, {
              header: "Completion %",
              key: "completionPercentage",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.plantVsActual.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "COMPLETION_DISCREPANCY_REPORT";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportPlantWiseMultitasking",
          value: function exportPlantWiseMultitasking() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Multiskilling Status At Plant Level", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Total Employee",
              key: "TotalEmp",
              width: 30
            }, {
              header: "Employee Multiskilling Count",
              key: "EmpMultiskillingCount",
              width: 30
            }, {
              header: "Multiskilling %",
              key: "MultiskillingPercentage",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.plantWiseMultitasking.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "MULTISKILLING_STATUS_AT_PLANT_LEVEL";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportSkillGap",
          value: function exportSkillGap() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Skill Gap Analysis", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Skill Gap Count",
              key: "gapCount",
              width: 30
            }, {
              header: "Average",
              key: "gapAvg",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.skillGapCellWise.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                rowslist[x] = element[x];
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "SKILL_GAP_ANALYSIS";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
        }, {
          key: "exportSkillMatrixCellWisePlantWise",
          value: function exportSkillMatrixCellWisePlantWise() {
            var headers = [];
            var workbook = new exceljs__WEBPACK_IMPORTED_MODULE_4__["Workbook"]();
            var worksheet = workbook.addWorksheet("Monthly Skill Matrix Report", {});
            headers = [{
              header: "Plant",
              key: "branchName",
              width: 30
            }, {
              header: "Department",
              key: "deptName",
              width: 30
            }, {
              header: "Cell/Line",
              key: "lineName",
              width: 30
            }, {
              header: "Level",
              key: "levelName",
              width: 30
            }, {
              header: "Plan Count",
              key: "planCount",
              width: 30
            }, {
              header: "Actual Count",
              key: "actualCount",
              width: 30
            }, {
              header: "Workstation Name",
              key: "workstationName",
              width: 30
            }, {
              header: "Month Year",
              key: "monthYear",
              width: 30
            }];
            worksheet.columns = headers;
            console.log(worksheet.columns);
            worksheet.getRow(1).eachCell(function (cell, number) {
              worksheet.getCell(cell.address).style = {
                font: {
                  name: "Calibri",
                  bold: true,
                  color: {
                    argb: "000"
                  }
                }
              };
            });
            var rows = [];
            var rowslist = {};
            Object.assign({}, rowslist);
            this.selectedReportData.skillMatrixCellPlantWise.forEach(function (element) {
              rowslist = {};
              console.log(element);

              for (var x in element) {
                // element[x] = element[x] ? element[x] : "N/A";
                // ? element[x] : "N/A";
                // rowslist[x] = element[x];
                if (x == 'actualCount') {
                  rowslist[x] = element.actualCount + " (".concat(element.percentage, "%)");
                } else {
                  rowslist[x] = element[x];
                }
              }

              rows.push(rowslist);
              console.log(rows);
            });
            worksheet.addRows(rows, "n");
            workbook.xlsx.writeBuffer().then(function (data) {
              var excelName = "MONTHLY_SKILL_MATRIX_REPORT";
              var blob = new Blob([data], {
                type: "xlsx"
              });
              file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, excelName + ".xlsx");
            });
          }
          /* To set the response for Reports
          Author Simran
          created Date 22/09/2023 */

        }, {
          key: "setMultiSkillingReport",
          value: function setMultiSkillingReport(data) {
            console.log(data);
            this.selectedReportData.mutltiSkillMatrixReport = [];

            if (data.multiskillingReport != null && data.multiskillingReport.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.mutltiSkillMatrixReport = data.multiskillingReport;
            } else {
              this.selectedReport.isDataFound = false;
              this.selectedReportData.mutltiSkillMatrixReport = [];
            }
          }
        }, {
          key: "setAssessmentPassOrFailReport",
          value: function setAssessmentPassOrFailReport(data) {
            console.log(data);
            this.selectedReportData.assessmentPassOrFail = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.assessmentPassOrFail = data.dataList;
              console.log(this.selectedReportData.assessmentPassOrFail);
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.assessmentPassOrFail = [];
            }
          }
        }, {
          key: "setAverageTimeTakenReport",
          value: function setAverageTimeTakenReport(data) {
            console.log(data);
            this.selectedReportData.averageTimeTaken = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.averageTimeTaken = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.averageTimeTaken = [];
            }
          }
        }, {
          key: "setCellLevelAdherenceReport",
          value: function setCellLevelAdherenceReport(data) {
            console.log(data);
            this.selectedReportData.cellLevelAdherence = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.cellLevelAdherence = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.cellLevelAdherence = [];
            }
          }
        }, {
          key: "setCellWiseMultitaskingReport",
          value: function setCellWiseMultitaskingReport(data) {
            console.log(data);
            this.selectedReportData.cellWiseMultitasking = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.cellWiseMultitasking = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.cellWiseMultitasking = [];
            }
          }
        }, {
          key: "setEmployeeWisePlanReport",
          value: function setEmployeeWisePlanReport(data) {
            console.log(data);
            this.selectedReportData.employeeWisePlan = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.employeeWisePlan = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.employeeWisePlan = [];
            }
          }
        }, {
          key: "setPlantLevelAdherenceReport",
          value: function setPlantLevelAdherenceReport(data) {
            this.selectedReportData.plantLevelAdherence = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantLevelAdherence = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantLevelAdherence = [];
            }
          }
        }, {
          key: "setPlantVsActualReport",
          value: function setPlantVsActualReport(data) {
            console.log(data);
            this.selectedReportData.plantVsActual = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantVsActual = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantVsActual = [];
            }
          }
        }, {
          key: "setPlantwiseMultitaskingReport",
          value: function setPlantwiseMultitaskingReport(data) {
            console.log(data);
            this.selectedReportData.plantWiseMultitasking = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantWiseMultitasking = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.plantWiseMultitasking = [];
            }
          }
        }, {
          key: "setSkillGapCellWiseReport",
          value: function setSkillGapCellWiseReport(data) {
            console.log(data);
            this.selectedReportData.skillGapCellWise = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.skillGapCellWise = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.skillGapCellWise = [];
            }
          }
        }, {
          key: "setSkillMatrixCellPlantWiseReport",
          value: function setSkillMatrixCellPlantWiseReport(data) {
            console.log(data);
            this.selectedReportData.skillMatrixCellPlantWise = [];

            if (data.dataList != null && data.dataList.length > 0) {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.skillMatrixCellPlantWise = data.dataList;
            } else {
              this.selectedReport.isDataFound = true;
              this.selectedReportData.skillMatrixCellPlantWise = [];
            }
          }
        }, {
          key: "selectReport",
          value: function selectReport(ev) {
            this.selectReportCaption = ev;
          }
        }, {
          key: "getSortFunction",
          value: function getSortFunction(array, fieldToSort) {
            if (array && Array.isArray(array) && array.length > 0) {
              if (fieldToSort === "report" || fieldToSort === "dept" || fieldToSort === "level" || fieldToSort === "cell") {
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
          key: "onSingleSelectDropdown",
          value: function onSingleSelectDropdown(ev, type) {
            this.selectedReport.isDataFound = false;

            if (ev) {
              if (type == "reportType") {
                this.resetField();
                this.selectedReport.reportCaption = this.getObjFromArray(ev.id, this.reportCaptionsList).reportCaption;
              }
            }
          }
        }, {
          key: "resetField",
          value: function resetField() {
            this.tableAppliedSortData = {};
            this.selectedReport.fromDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
            this.selectedReport.toDate = new Date();
          }
        }, {
          key: "getObjFromArray",
          value: function getObjFromArray(id, array) {
            var obj = {};

            if (array != null && array.length > 0) {
              for (var index = 0; index < array.length; index++) {
                if (array[index].id == id) {
                  obj = array[index];
                }
              }
            }

            return obj;
          }
        }, {
          key: "filterModalOpen",
          value: function filterModalOpen(modal) {
            if ((this.selectedReport.reportType != undefined || this.selectedReport.reportType != null) && this.selectedReport.reportType.length > 0) {
              this.modalService.open(modal, {
                windowClass: "filterPopup"
              });
            } else {
              this.alertService.error("Please select report type");
            }
          }
          /* Get Department List
          Author: Simran
          Date: 22/09/2023 */

        }, {
          key: "getDepartmentList",
          value: function getDepartmentList(branch) {
            var _this3 = this;

            this.reportService.getDepartmentByBranch("getdepartmentlistbybranchid/" + branch.id).subscribe(function (res) {
              if (res.result) {
                if (res.deptList != null && res.deptList.length > 0) {
                  /* Use For Add Screen */
                  _this3.searchDet.departmentList = _this3.setArray(res.deptList, "deptId", "deptName");
                } else {
                  _this3.searchDet.departmentList = [];
                }
              } else {
                _this3.searchDet.departmentList = [];
              }
            });
          }
          /* Get Accessible Plant List
          Author: Simran
          Date : 22/09/2023 */

        }, {
          key: "getAccessiblePlantList",
          value: function getAccessiblePlantList() {
            var _this4 = this;

            this.reportService.getBranchAccessList("getBranchAccessSetupByEmpId/" + this.userDet.organization.orgId + "/" + this.userDet.empId).subscribe(function (res) {
              if (res.result) {
                if (res.branchAccessList != null && res.branchAccessList.length > 0) {
                  /* Use For Add Screen */
                  _this4.plantList = _this4.setArray(res.branchAccessList, "branchId", "branchName");
                  /* Use For Filter */

                  _this4.searchDet.plantList = _this4.setArray(res.branchAccessList, "branchId", "branchName");
                } else {
                  /* Use For Add Screen */
                  _this4.plantList = [{
                    id: _this4.userDet.branch.branchId,
                    name: _this4.userDet.branch.name
                  }];
                  /* Use For Filter */

                  _this4.searchDet.plantList = [{
                    id: _this4.userDet.branch.branchId,
                    name: _this4.userDet.branch.name
                  }];
                }
              } else {
                /* Use For Add Screen */
                _this4.plantList = [{
                  id: _this4.userDet.branch.branchId,
                  name: _this4.userDet.branch.name
                }];
                /* Use For Filter */

                _this4.searchDet.plantList = [{
                  id: _this4.userDet.branch.branchId,
                  name: _this4.userDet.branch.name
                }];
              } // this.branchId = [this.searchDet.plantList[0]];
              // this.getDepartmentList(this.branchId[0]);

            });
          }
          /* Common function for set an array for dropdown
          Author: Simran
          Date : 23/09/2023 */

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
        }, {
          key: "onChange",
          value: function onChange(ev, type) {
            if (ev) {
              if (type == "plant") {
                // this.getDepartmentList(ev);
                this.getLineNameList(ev);
                this.searchDet.deptIds = [];
              }
            } else {
              if (type == "plant") {
                console.log("in");

                if (this.searchDet) {
                  console.log("out");
                  this.searchDet.departmentList = [];
                }
              }
            }
          }
          /* Get Department List as per branchwise
          Author: Simran
          Date : 05/10/2023 */

        }, {
          key: "getLineNameList",
          value: function getLineNameList(branchId) {
            var _this5 = this;

            console.log(branchId);
            this.selectedBranchId = branchId.id;
            var data = {
              branchId: this.selectedBranchId
            };
            this.reportService.getLineNameList("apis/sm/getCellList", data).subscribe(function (response) {
              if (response.result) {
                if (response.dataList != null && response.dataList.length > 0) {
                  for (var index = 0; index < response.dataList.length; index++) {
                    response.dataList[index].tmpName = "";

                    if (response.dataList[index].lineName) {
                      response.dataList[index].tmpName += response.dataList[index].lineName;

                      if (response.dataList[index].deptName) {
                        response.dataList[index].tmpName += " (Department : " + response.dataList[index].deptName + ")";
                      }
                    }
                  }

                  _this5.cellLineList = response.dataList;
                  console.log(_this5.cellLineList);
                  _this5.cellLineName = _this5.setArray(response.dataList, "lineId", "tmpName"); // this.searchDet.cellLineName = this.setArray(response.dataList, 'lineId', 'tmpName');
                } else {
                  _this5.cellLineName = [];
                }
              } else {
                _this5.cellLineName = [];
              }
            });
          }
        }, {
          key: "onChangeAll",
          value: function onChangeAll(ev, type) {
            if (ev) {
              console.log("Select All action");
            } else {
              console.log("Unselect All action");
            }
          }
        }, {
          key: "getIDsArray",
          value: function getIDsArray(array) {
            var tmp = [];

            if (array != null && array.length > 0) {
              var _iterator3 = _createForOfIteratorHelper(array),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var element = _step3.value;
                  tmp.push(element.id);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }

            return tmp;
          }
        }, {
          key: "submitFilterForm",
          value: function submitFilterForm(filterData) {
            this.isAppliedFilter = true;

            if (filterData.invalid) {
              Object.keys(filterData.controls).forEach(function (key) {
                filterData.controls[key].markAsDirty();
              });
              return;
            }

            this.searchDet.reportFilterFlag = true;

            if (filterData.status == "INVALID") {
              Object.keys(filterData.controls).forEach(function (key) {
                filterData.controls[key].markAsDirty();
              });
              return;
            } else {
              this.generateReport("filter");
              this.modalService.dismissAll();
            }
          }
        }, {
          key: "removeFilter",
          value: function removeFilter() {
            this.isAppliedFilter = false;
            this.filterData.reset();
            this.searchDet.branchId = [];
            this.searchDet.deptIds = [];
            this.searchDet.skillLvlId = [];
            this.searchDet.reportFilterFlag = false;
            this.generateReport("filter");
          }
        }, {
          key: "setDate",
          value: function setDate(type) {
            if (this.selectedDateType && this.selectedDateType == type) {
              this.selectedDateType = undefined;
              this.selectedDate = {};
            } else {
              this.selectedDateType = type;
              this.selectedDate.toDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date()).format("YYYY-MM");
              console.log(this.selectedDate.toDate);
              var tmpFromMonthYear = "";
              this.isSet = false;

              if (type) {
                if (type == "1M") {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "months").format();
                } else if (type == "6M") {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(6, "months").format();
                } else if (type == "1Y") {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(1, "year").format();
                } else if (type == "2Y") {
                  tmpFromMonthYear = moment__WEBPACK_IMPORTED_MODULE_5__().subtract(2, "year").format();
                }

                this.selectedDate.fromDate = moment__WEBPACK_IMPORTED_MODULE_5__(tmpFromMonthYear).format("YYYY-MM");
                console.log(this.selectedDate.fromDate);
              } else {
                this.isSet = true;
              }
            }

            this.dateRangeDates.emit(this.selectedDate);
          }
          /* Get level list function
          Author: Simran
          Date : 23/09/2023 */

        }, {
          key: "getReportLevelList",
          value: function getReportLevelList() {
            var _this6 = this;

            this.reportService.getMasterLevelList("apis/sm/getLevelList").subscribe(function (res) {
              if (res.result) {
                if (res.dataList != null && res.dataList.length > 0) {
                  _this6.masterLevelList = _this6.setArray(res.dataList, "id", "levelName");
                } else {
                  _this6.masterLevelList = [];
                }
              } else {
                _this6.masterLevelList = [];
              }
            });
          }
        }, {
          key: "onChangeLevel",
          value: function onChangeLevel(ev, type) {
            if (ev) {
              console.log("Select plant");
            } else {
              console.log("Unselect plant");
            }
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sorting = sort;
            this.generateReport("");
          }
        }, {
          key: "loadMore",
          value: function loadMore(data) {
            this.staticPagination = data;

            if (this.selectedReport.reportCaption == "MULTI_SKILLING_REPORT") {
              this.selectedReportData.mutltiSkillMatrixReport = [];
            } else if (this.selectedReport.reportCaption == "Monthly_Skill_Matrix_Report") {
              this.selectedReportData.skillMatrixCellPlantWise = [];
            } else if (this.selectedReport.reportCaption == "Employee_Performance_Analysis") {
              this.selectedReportData.employeeWisePlan = [];
            } else if (this.selectedReport.reportCaption == "Task_Completion_Status") {
              this.selectedReportData.averageTimeTaken = [];
            } else if (this.selectedReport.reportCaption == "Plant_Adherence_Status") {
              this.selectedReportData.plantLevelAdherence = [];
            } else if (this.selectedReport.reportCaption == "Cell_Adherence_Status") {
              this.selectedReportData.cellLevelAdherence = [];
            } else if (this.selectedReport.reportCaption == "Completion_Discrepancy_Report") {
              this.selectedReportData.plantVsActual = [];
            } else if (this.selectedReport.reportCaption == "Assessment_Success_Rate") {
              this.selectedReportData.assessmentPassOrFail = [];
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Cell_Level") {
              this.selectedReportData.cellWiseMultitasking = [];
            } else if (this.selectedReport.reportCaption == "Multiskilling_Status_At_Plant_Level") {
              this.selectedReportData.plantWiseMultitasking = [];
            } else if (this.selectedReport.reportCaption == "Skill_Gap_Analysis") {
              this.selectedReportData.skillGapCellWise = [];
            }

            this.listLoading = true;

            if (this.searchDet.reportFilterFlag) {
              this.generateReport("filter");
            } else {
              this.generateReport("");
            } // this.getTrainingTestDetails();

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
        }]);

        return ReportComponent;
      }();

      ReportComponent.ctorParameters = function () {
        return [{
          type: _report_service_service__WEBPACK_IMPORTED_MODULE_7__["ReportServiceService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCalendar"]
        }, {
          type: src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
        }];
      };

      ReportComponent.propDecorators = {
        dateRangeDates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-report",
        template: _raw_loader_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_report_service_service__WEBPACK_IMPORTED_MODULE_7__["ReportServiceService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCalendar"], src_app_theme_shared_components__WEBPACK_IMPORTED_MODULE_10__["AlertService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDateParserFormatter"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]])], ReportComponent);
      /***/
    },

    /***/
    "TOEk":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/report/cell-level-adherence/cell-level-adherence.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: CellLevelAdherenceComponent */

    /***/
    function TOEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CellLevelAdherenceComponent", function () {
        return CellLevelAdherenceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cell_level_adherence_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cell-level-adherence.component.html */
      "Xmyb");
      /* harmony import */


      var _cell_level_adherence_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cell-level-adherence.component.scss */
      "0iWG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CellLevelAdherenceComponent = /*#__PURE__*/function () {
        //selectedReportData: any;
        // sorting: any = {
        //   "active" : "",
        //   "direction" : ""
        // };
        function CellLevelAdherenceComponent() {
          _classCallCheck(this, CellLevelAdherenceComponent);

          this.reportData = []; //@Input() reportReqBody: any = {};

          this.sort = {
            "active": "",
            "direction": ""
          };
          this.listLoading = false;
        }

        _createClass(CellLevelAdherenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("NG ON INIT"); //this.selectedReportData = this.selectedDet;

            if (this.sort == null || this.sort == undefined) {
              this.sort = {
                "active": "",
                "direction": ""
              };
            }

            console.log(this.sort);
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Aug 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            //this.sorting = sort;
            this.sort = sort; //this.generateReport();

            this.callbackFuncGenReport(sort);
          }
        }, {
          key: "sortReportData",
          value: function sortReportData(sort) {// public generateReport() {
            //   this.listLoading = true;
            //   this.selectedReportData.cellLevelAdherence = [];
            //   let reportBody: any = {
            //     "reportCaption": this.reportReqBody.reportCaption,
            //     "orgId": this.reportReqBody.orgId,
            //     "branchId": this.reportReqBody.branchId,
            //     "deptId": this.reportReqBody.deptId,
            //     "colName": this.reportReqBody.colName,
            //     "orderType": this.reportReqBody.orderType,
            //     "fromDt": this.reportReqBody.fromDt,
            //     "toDt": this.reportReqBody.toDt
            //   };
            //   if (this.sorting) {
            //     if (this.sorting.direction != "") {
            //       reportBody.colName = this.sorting.active;
            //       reportBody.orderType = this.sorting.direction;
            //     } else {
            //       //Default Sort
            //       //reportBody.colName = "empName";
            //       //reportBody.orderType = "asc";
            //     }
            //   } else {
            //     //Default Sort
            //     //reportBody.colName = "empName";
            //     //reportBody.orderType = "asc";
            //   }
            //   this.reportService.getReportList("apis/sm/getSkillMatrixReport", reportBody).subscribe((response: any) => {
            //     this.listLoading = false;
            //     if (response.result) {
            //       this.selectedReportData.cellLevelAdherence = [];
            //       if (response.dataList != null && response.dataList.length > 0) {
            //         this.selectedReportData.cellLevelAdherence = response.dataList;
            //       } else {
            //         this.selectedReportData.cellLevelAdherence = []
            //       }
            //     }
            //     else {
            //       this.selectedReportData.cellLevelAdherence = []
            //       // this.selectedReport.isDataFound = false;
            //       // this.setAssessmentPassOrFailReport(response)
            //       // this.selectedReportData = {}
            //     }
            //   });
            // }
          }
        }]);

        return CellLevelAdherenceComponent;
      }();

      CellLevelAdherenceComponent.ctorParameters = function () {
        return [];
      };

      CellLevelAdherenceComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CellLevelAdherenceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cell-level-adherence',
        template: _raw_loader_cell_level_adherence_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cell_level_adherence_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CellLevelAdherenceComponent);
      /***/
    },

    /***/
    "Xaoa":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/report/skill-matrix-cellwise-plantwise/skill-matrix-cellwise-plantwise.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: SkillMatrixCellwisePlantwiseComponent */

    /***/
    function Xaoa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillMatrixCellwisePlantwiseComponent", function () {
        return SkillMatrixCellwisePlantwiseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_skill_matrix_cellwise_plantwise_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./skill-matrix-cellwise-plantwise.component.html */
      "DpkX");
      /* harmony import */


      var _skill_matrix_cellwise_plantwise_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./skill-matrix-cellwise-plantwise.component.scss */
      "0Vnf");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkillMatrixCellwisePlantwiseComponent = /*#__PURE__*/function () {
        function SkillMatrixCellwisePlantwiseComponent() {
          _classCallCheck(this, SkillMatrixCellwisePlantwiseComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(SkillMatrixCellwisePlantwiseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return SkillMatrixCellwisePlantwiseComponent;
      }();

      SkillMatrixCellwisePlantwiseComponent.ctorParameters = function () {
        return [];
      };

      SkillMatrixCellwisePlantwiseComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      SkillMatrixCellwisePlantwiseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-skill-matrix-cellwise-plantwise',
        template: _raw_loader_skill_matrix_cellwise_plantwise_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_skill_matrix_cellwise_plantwise_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SkillMatrixCellwisePlantwiseComponent);
      /***/
    },

    /***/
    "Xmbd":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/average-time-taken/average-time-taken.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xmbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"AvgTime\">Averge Time(Days)</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.averageTimeTaken\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.avgTime}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"(reportData.averageTimeTaken == null || reportData.averageTimeTaken.length == 0)\">\r\n                    <td colspan=\"3\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n        <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n</div>";
      /***/
    },

    /***/
    "Xmyb":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/cell-level-adherence/cell-level-adherence.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xmyb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-loading *ngIf=\"listLoading\"></app-loading>\r\n<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"Workstation\">Workstation</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"Plan\">Plan</th>\r\n                    <th mat-sort-header=\"CompleteCount\">Completed</th>\r\n                    <th mat-sort-header=\"CompletePercentage\">Completed %</th>\r\n                    <th mat-sort-header=\"PendingCount\">Pending</th>\r\n                    <th mat-sort-header=\"PendingPercentage\">Pending %</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.cellLevelAdherence\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.workstation}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.plan}}</td>\r\n                    <td>{{x.completeCount}}</td>\r\n                    <td>{{x.completePercentage}}</td>\r\n                    <td>{{x.pendingCount}}</td>\r\n                    <td>{{x.pendingPercentage}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.cellLevelAdherence == null || reportData.cellLevelAdherence.length == 0\">\r\n                    <td colspan=\"10\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n\r\n</div>";
      /***/
    },

    /***/
    "Xsvq":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/report/plant-level-adherence/plant-level-adherence.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Xsvq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGxhbnQtbGV2ZWwtYWRoZXJlbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoicGxhbnQtbGV2ZWwtYWRoZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmMxZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sYXN0Um93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTUsIDIxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hc3Nlc3NtZW50Q29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTRkNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwcm92YWxDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlZmQ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5wcm9qZWN0Q29sIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2RlZWFmNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "YQTN":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/employee-wise-plan/employee-wise-plan.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YQTN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"Plan\">Plan</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"Actual\">Actual</th>\r\n                    <th mat-sort-header=\"PassCount\">Pass </th>\r\n                    <th mat-sort-header=\"FailCount\">Fail</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.employeeWisePlan\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.planCount}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.actulCount}}</td>\r\n                    <td>{{x.passCount}}</td>\r\n                    <td>{{x.failCount}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.employeeWisePlan == null || reportData.employeeWisePlan.length == 0\">\r\n                    <td colspan=\"5\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n\r\n</div>";
      /***/
    },

    /***/
    "a6Ab":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/report/plantwise-multitasking/plantwise-multitasking.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PlantwiseMultitaskingComponent */

    /***/
    function a6Ab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlantwiseMultitaskingComponent", function () {
        return PlantwiseMultitaskingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_plantwise_multitasking_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./plantwise-multitasking.component.html */
      "Lrd+");
      /* harmony import */


      var _plantwise_multitasking_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plantwise-multitasking.component.scss */
      "BJc4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PlantwiseMultitaskingComponent = /*#__PURE__*/function () {
        function PlantwiseMultitaskingComponent() {
          _classCallCheck(this, PlantwiseMultitaskingComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(PlantwiseMultitaskingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return PlantwiseMultitaskingComponent;
      }();

      PlantwiseMultitaskingComponent.ctorParameters = function () {
        return [];
      };

      PlantwiseMultitaskingComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PlantwiseMultitaskingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-plantwise-multitasking',
        template: _raw_loader_plantwise_multitasking_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_plantwise_multitasking_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PlantwiseMultitaskingComponent);
      /***/
    },

    /***/
    "fJu5":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/report/cellwise-multitasking/cellwise-multitasking.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: CellwiseMultitaskingComponent */

    /***/
    function fJu5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CellwiseMultitaskingComponent", function () {
        return CellwiseMultitaskingComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cellwise_multitasking_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cellwise-multitasking.component.html */
      "7mqS");
      /* harmony import */


      var _cellwise_multitasking_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cellwise-multitasking.component.scss */
      "nVHU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CellwiseMultitaskingComponent = /*#__PURE__*/function () {
        function CellwiseMultitaskingComponent() {
          _classCallCheck(this, CellwiseMultitaskingComponent);

          this.reportData = [];
          this.sort = {
            "active": "",
            "direction": ""
          };
        }

        _createClass(CellwiseMultitaskingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.selectedReportData = this.selectedDet
            // console.log(this.selectedReportData)
          }
          /*
            @DESC : Sort table
            @Author: Shashi
            @Date : 29 Sept 2023
          */

        }, {
          key: "sortData",
          value: function sortData(sort) {
            this.sort = sort;
            this.callbackFuncGenReport(sort);
          }
        }]);

        return CellwiseMultitaskingComponent;
      }();

      CellwiseMultitaskingComponent.ctorParameters = function () {
        return [];
      };

      CellwiseMultitaskingComponent.propDecorators = {
        reportData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        sort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        callbackFuncGenReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      CellwiseMultitaskingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cellwise-multitasking',
        template: _raw_loader_cellwise_multitasking_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cellwise_multitasking_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CellwiseMultitaskingComponent);
      /***/
    },

    /***/
    "hKRC":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/report/employee-wise-plan/employee-wise-plan.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function hKRC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW1wbG95ZWUtd2lzZS1wbGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoiZW1wbG95ZWUtd2lzZS1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmMxZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sYXN0Um93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTUsIDIxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hc3Nlc3NtZW50Q29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTRkNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwcm92YWxDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlZmQ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5wcm9qZWN0Q29sIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2RlZWFmNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "hQrE":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/report/plantvsactualcomplition/plantvsactualcomplition.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function hQrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGxhbnR2c2FjdHVhbGNvbXBsaXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBQ1o7QUFBWTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUVoQjtBQUNRO0VBQ0ksZ0NBQUE7QUFDWjtBQUNRO0VBQ0ksOEJBQUE7QUFDWjtBQUNRO0VBQ0ksOEJBQUE7QUFDWiIsImZpbGUiOiJwbGFudHZzYWN0dWFsY29tcGxpdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZUZpeEhlYWQge1xyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAvKiBiYWNrZ3JvdW5kOiAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjsgKi9cclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDJjMWYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2QyYzFmMztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYubGFzdFJvdyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRke1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOCwgMjE1LCAyMTUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXNzZXNzbWVudENvbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmU0ZDUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcHJvdmFsQ29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UyZWZkOSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAucHJvamVjdENvbCB7XHJcbiAgICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNkZWVhZjYgIWltcG9ydGFudDtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "nVHU":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/report/cellwise-multitasking/cellwise-multitasking.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function nVHU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".tableFixHead table {\n  background: #fff;\n}\n.tableFixHead table thead {\n  position: sticky;\n  z-index: 999;\n  top: 0px;\n}\n.tableFixHead table thead th {\n  /* background: #fff; */\n  box-shadow: none !important;\n  /* border-right: 1px solid #fff; */\n  /* border-left: 1px solid #fff; */\n  border-bottom: 2px solid #d2c1f3 !important;\n  border-top: 2px solid #d2c1f3;\n  font-weight: bold;\n  color: #000;\n  /* border-top: none !important; */\n  /* border-bottom: none !important; */\n  vertical-align: middle;\n}\n.tableFixHead table thead.lastRow {\n  position: sticky;\n  z-index: 1;\n  bottom: 0px;\n}\n.tableFixHead table td {\n  border-bottom: 1px solid #dad7d7;\n}\n.tableFixHead table .assessmentCol {\n  background: #fbe4d5 !important;\n}\n.tableFixHead table .approvalCol {\n  background: #e2efd9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2VsbHdpc2UtbXVsdGl0YXNraW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUNaO0FBQVk7RUFDSSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFFaEI7QUFBWTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFFaEI7QUFDUTtFQUNJLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1o7QUFDUTtFQUNJLDhCQUFBO0FBQ1oiLCJmaWxlIjoiY2VsbHdpc2UtbXVsdGl0YXNraW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlRml4SGVhZCB7XHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6ICNmZmY7ICovXHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvKiBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgLyogYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkMmMxZjMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDJjMWYzO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIC8qIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDsgKi9cclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5sYXN0Um93IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGR7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjE4LCAyMTUsIDIxNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hc3Nlc3NtZW50Q29sIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZTRkNSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwcm92YWxDb2wge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTJlZmQ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIC5wcm9qZWN0Q29sIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogI2RlZWFmNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ== */";
      /***/
    },

    /***/
    "pCwN":
    /*!*************************************************!*\
      !*** ./src/app/modules/report/report.module.ts ***!
      \*************************************************/

    /*! exports provided: ReportModule */

    /***/
    function pCwN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
        return ReportModule;
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


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report-routing.module */
      "HYDo");
      /* harmony import */


      var _report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./report.component */
      "T3xo");
      /* harmony import */


      var src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/theme/shared/shared.module */
      "ebz3");
      /* harmony import */


      var _plantvsactualcomplition_plantvsactualcomplition_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./plantvsactualcomplition/plantvsactualcomplition.component */
      "PEO2");
      /* harmony import */


      var _assessment_pass_fail_assessment_pass_fail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./assessment-pass-fail/assessment-pass-fail.component */
      "Jy0l");
      /* harmony import */


      var _employee_wise_plan_employee_wise_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./employee-wise-plan/employee-wise-plan.component */
      "IOdn");
      /* harmony import */


      var _cell_level_adherence_cell_level_adherence_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./cell-level-adherence/cell-level-adherence.component */
      "TOEk");
      /* harmony import */


      var _plant_level_adherence_plant_level_adherence_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./plant-level-adherence/plant-level-adherence.component */
      "QW2y");
      /* harmony import */


      var _cellwise_multitasking_cellwise_multitasking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./cellwise-multitasking/cellwise-multitasking.component */
      "fJu5");
      /* harmony import */


      var _plantwise_multitasking_plantwise_multitasking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./plantwise-multitasking/plantwise-multitasking.component */
      "a6Ab");
      /* harmony import */


      var _average_time_taken_average_time_taken_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./average-time-taken/average-time-taken.component */
      "1h6Z");
      /* harmony import */


      var _skill_matrix_cellwise_plantwise_skill_matrix_cellwise_plantwise_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./skill-matrix-cellwise-plantwise/skill-matrix-cellwise-plantwise.component */
      "Xaoa");
      /* harmony import */


      var _skill_gap_cellwise_skill_gap_cellwise_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./skill-gap-cellwise/skill-gap-cellwise.component */
      "D0hf");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "Egam");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var ReportModule = function ReportModule() {
        _classCallCheck(this, ReportModule);
      };

      ReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"], _plantvsactualcomplition_plantvsactualcomplition_component__WEBPACK_IMPORTED_MODULE_6__["PlantvsactualcomplitionComponent"], _assessment_pass_fail_assessment_pass_fail_component__WEBPACK_IMPORTED_MODULE_7__["AssessmentPassFailComponent"], _employee_wise_plan_employee_wise_plan_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeWisePlanComponent"], _cell_level_adherence_cell_level_adherence_component__WEBPACK_IMPORTED_MODULE_9__["CellLevelAdherenceComponent"], _plant_level_adherence_plant_level_adherence_component__WEBPACK_IMPORTED_MODULE_10__["PlantLevelAdherenceComponent"], _cellwise_multitasking_cellwise_multitasking_component__WEBPACK_IMPORTED_MODULE_11__["CellwiseMultitaskingComponent"], _plantwise_multitasking_plantwise_multitasking_component__WEBPACK_IMPORTED_MODULE_12__["PlantwiseMultitaskingComponent"], _average_time_taken_average_time_taken_component__WEBPACK_IMPORTED_MODULE_13__["AverageTimeTakenComponent"], _skill_matrix_cellwise_plantwise_skill_matrix_cellwise_plantwise_component__WEBPACK_IMPORTED_MODULE_14__["SkillMatrixCellwisePlantwiseComponent"], _skill_gap_cellwise_skill_gap_cellwise_component__WEBPACK_IMPORTED_MODULE_15__["SkillGapCellwiseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"], src_app_theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]]
      })], ReportModule);
      /***/
    },

    /***/
    "pYBd":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/report.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function pYBd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row m-0\">\r\n    <div class=\"col-11 m-auto\">\r\n        <app-topBar title=\"Reports\"></app-topBar>\r\n    </div>\r\n    <div class=\"col-1 m-auto \">\r\n        <!-- <app-loginInfo></app-loginInfo> -->\r\n        <div class=\"btn-filter-wrap\">\r\n            <button class=\"btn btn-default filter-btn\" [ngClass]=\"{'applied' : searchDet.reportFilterFlag}\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n                <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-clear-filter\" *ngIf=\"searchDet.reportFilterFlag\" (click)=\"removeFilter();\">x</div>\r\n            <div class=\"lbl-filter-applied\" *ngIf=\"searchDet.reportFilterFlag\">Filter Applied</div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row m-0\" style=\"border-bottom: 4px solid #dcd5eb;padding-bottom: 10px;\">\r\n    <div class=\"col-4 m-auto\">\r\n        <label for=\"report\" class=\"col-form-label p-0\">Report Type</label>\r\n        <div class=\"singleSelecter\">\r\n            <ng-multiselect-dropdown name=\"report\" class=\"custom-multiSelection assessmentdropDown customWidthForInter\"\r\n                [placeholder]=\"'Select Report Type'\" [settings]=\"SingleDropdownSettings\"\r\n                [data]=\"getSortFunction(reportCaptionsList,'report')\" (onSelect)=\"onSingleSelectDropdown($event,'reportType')\"\r\n                (onDeSelect)=\"onSingleSelectDropdown($event,'reportType')\" [(ngModel)]=\"selectedReport.reportType\">\r\n            </ng-multiselect-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 m-auto\">\r\n        <label for=\"fromDate\" class=\"col-form-label p-0\">From Date</label>\r\n        <div class=\"input-group m-0 custom-Input-Group\" (click)=\"startDatePicker.open()\">\r\n            <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\">\r\n                    <i class=\"feather icon-calendar\"></i>\r\n                </div>\r\n            </div>\r\n            <input matInput #input=\"ngModel\" [(ngModel)]=\"selectedReport.fromDate\" [max]=\"maxDate\"\r\n                [matDatepicker]=\"startDatePicker\" class=\"form-control datePickInput\" placeholder=\"From Date\"\r\n                (keydown)=\"false\" (dateChange)=\"selectCustomDate($event,'')\" name=\"fromDate\">\r\n            <mat-datepicker #startDatePicker></mat-datepicker>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 m-auto\">\r\n        <label for=\"toDate\" class=\"col-form-label p-0\">To Date</label>\r\n        <div>\r\n            <div class=\"input-group m-0 custom-Input-Group\" (click)=\"toDatePicker.open()\">\r\n                <div class=\"input-group-prepend\">\r\n                    <div class=\"input-group-text\">\r\n                        <i class=\"feather icon-calendar\"></i>\r\n                    </div>\r\n                </div>\r\n                <input matInput #input=\"ngModel\" [(ngModel)]=\"selectedReport.toDate\" [min]=\"selectedReport.fromDate\"\r\n                    [max]=\"maxDate\" [matDatepicker]=\"toDatePicker\" class=\"form-control datePickInput\"\r\n                    placeholder=\"To Date\" (keydown)=\"false\" (dateChange)=\"selectCustomDate('', $event)\" name=\"toDate\">\r\n                <mat-datepicker #toDatePicker></mat-datepicker>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-2 m-auto\">\r\n        <label for=\"report\" class=\"col-form-label p-0\"></label>\r\n        <div>\r\n            <button class=\"btn btn-sm submitBtn\" style=\"height: 34px;margin-bottom: 0px;vertical-align: bottom;\"\r\n                title=\"Generate Report\" type=\"button\" (click)=\"generateReport('')\">Generate Report\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-1 p-0 mt-4\">\r\n        <!-- <button class=\"btn btn-default filter-btn\" title=\"Filter\" (click)=\"filterModalOpen(filterPopup)\">\r\n            <i class=\"fa fa-filter filter-icon\" aria-hidden=\"true\"></i>\r\n        </button> -->\r\n        <div class=\"pl-3 text-center\" *ngIf=\"isSelectedReportDataFound\">\r\n            <div class=\"excelbutton\">\r\n                <!-- <div class=\"excelFont\">Export</div> -->\r\n                <img src=\"assets/images/ic_excel.png\" alt=\"\" class=\"img-fluid\" (click)=\"exportReport()\">\r\n            </div>\r\n        </div>\r\n       \r\n    </div>\r\n</div>\r\n<div class=\"homepage-block bg-Transperant p-l-5 p-r-5 p-t-5\">\r\n    <app-loading *ngIf=\"listLoading\"></app-loading>\r\n    <div *ngIf=\"selectedReport.reportType != null && selectedReport.reportType.length > 0\" style=\"width: 100%;\">\r\n        <div *ngIf=\"selectedReport.isDataFound\">\r\n            <div class=\"row m-0\" style=\"height: 35px;\">\r\n                <div class=\"col-{{searchDet.reportFilterFlag ? '8' : '11'}} p-1 text-left\">\r\n                    <h3 style=\"padding-left: 1rem; color: #7044cd;\">{{reportName}}</h3>\r\n                </div>\r\n                <!-- <div class=\"col-3 m-auto\" *ngIf=\"searchDet.reportFilterFlag\">\r\n                    <div class=\"filterDiv\" style=\"position: relative;\">\r\n                        <button class=\"clearFilter\" (click)=\"removeFilter()\" style=\"box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),\r\n                        0 6px 20px 0 rgba(0, 0, 0, 0.19);;\">Clear filter</button>&nbsp;\r\n                        <span style=\"color: green;font-size: 12px; font-weight: 500;\">Filter applied</span>\r\n                    </div>\r\n                </div> -->\r\n              \r\n            </div>\r\n            <app-plantvsactualcomplition [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 1\"></app-plantvsactualcomplition>\r\n            <app-assessment-pass-fail [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 2\"></app-assessment-pass-fail>\r\n            <app-employee-wise-plan [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 3\"></app-employee-wise-plan>\r\n            <app-cell-level-adherence [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 4\"></app-cell-level-adherence>\r\n            <app-plant-level-adherence [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 5\"></app-plant-level-adherence>\r\n            <app-cellwise-multitasking [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 6\"></app-cellwise-multitasking>\r\n            <app-plantwise-multitasking [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\" \r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 7\"></app-plantwise-multitasking>\r\n            <app-average-time-taken [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 8\"></app-average-time-taken>\r\n            <app-skill-matrix-cellwise-plantwise [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 9\"></app-skill-matrix-cellwise-plantwise>\r\n            <app-skill-gap-cellwise [reportData]=\"selectedReportData\" [callbackFuncGenReport]=\"callbackFuncGenReport\"\r\n                [sort]=\"tableAppliedSortData\" *ngIf=\"selectedReport.reportType[0].id == 10\"></app-skill-gap-cellwise>\r\n        </div>\r\n    </div>\r\n</div>\r\n<ng-template #filterPopup let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title popup-header-txt\" id=\"myModalLabel2\">Filter</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click');\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <form [formGroup]=\"filterData\" (ngSubmit)=\"submitFilterForm(filterData)\" autocomplete=\"off\"\r\n        class=\"needs-validation\">\r\n        <div class=\"modal-body p-2\" style=\"height: calc(100vh - 14vh);\">\r\n            <perfect-scrollbar>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Plant</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Plant'\" [settings]=\"SingleDropdownSettings\"                            \r\n                            [data]=\" getSortFunction(searchDet.plantList,'dept')\" formControlName=\"branchId\" [(ngModel)]=\"searchDet.branchId\"\r\n                            (onSelect)=\"onChange($event,'plant')\" (onDeSelect)=\"onChange(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <div *ngIf=\"isAppliedFilter && filterData.controls['branchId'].invalid && (filterData.controls['branchId'].touched || filterData.controls['branchId'].dirty)\" class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['branchId'].errors.required\">\r\n                                Please select plant\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Cell/Line</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"opt\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Cell/Line'\" [settings]=\"multipleDropdownSettings\" [data]=\"getSortFunction(cellLineName,'cell')\"\r\n                            formControlName=\"deptIds\" [(ngModel)]=\"searchDet.deptIds\"\r\n                            (onSelect)=\"onChange($event,'dept')\" (onDeSelect)=\"onChange(false,'dept')\"\r\n                            (onSelectAll)=\"onChangeAll($event,'dept')\" (onDeSelectAll)=\"onChangeAll($event,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"isAppliedFilter && filterData.controls['deptIds'].invalid && (filterData.controls['deptIds'].touched || filterData.controls['deptIds'].dirty)\" class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['deptIds'].errors.required\">\r\n                                Please select cell/line\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row m-b-0\">\r\n                    <label for=\"opt\" class=\"col-sm-12 col-form-label filter-label\">Level</label>\r\n                    <div class=\"col-sm-12\">\r\n                        <ng-multiselect-dropdown name=\"branchId\"\r\n                            class=\"custom-multiSelection assessmentdropDown customWidthForRport\"\r\n                            [placeholder]=\"'Select Level'\" [settings]=\"SingleDropdownSettings\" [data]=\"masterLevelList\"\r\n                            formControlName=\"skillLvlId\" [(ngModel)]=\"searchDet.skillLvlId\"\r\n                            (onSelect)=\"onChangeLevel($event,'plant')\" (onDeSelect)=\"onChangeLevel(false,'dept')\">\r\n                        </ng-multiselect-dropdown>\r\n                        <!-- <div *ngIf=\"isAppliedFilter && filterData.controls['skillLvlId'].invalid && (filterData.controls['skillLvlId'].touched || filterData.controls['skillLvlId'].dirty)\" class=\"custom-errorMsg\">\r\n                            <div *ngIf=\"filterData.controls['skillLvlId'].errors.required\">\r\n                                Please select level\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n            </perfect-scrollbar>\r\n        </div>\r\n        <div class=\"modal-footer footerBlock text-right\">\r\n            <button class=\"btn submitBtn event-btn\" type=\"submit\">\r\n                <span *ngIf=\"submitSpinner\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\r\n                <span *ngIf=\"submitSpinner\" class=\"load-text\"> Loading...</span>\r\n                <span *ngIf=\"!submitSpinner\" class=\"btn-text\">Apply Filter</span>\r\n            </button>\r\n            <!-- <button type=\"button\" class=\"btn cancelBtn\" aria-label=\"Close\" (click)=\"d('Cross click')\">Cancel</button> -->\r\n        </div>\r\n    </form>\r\n</ng-template>";
      /***/
    },

    /***/
    "uG8w":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/report/skill-gap-cellwise/skill-gap-cellwise.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uG8w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"table-block\">\r\n    <div class=\"table-responsive tableFixHead\">\r\n        <table matSort (matSortChange)=\"sortData($event)\" [matSortActive]=\"sort.active\"\r\n            [matSortDirection]=\"sort.direction\" matSortDisableClear class=\"table table-bordered\">\r\n            <thead>\r\n                <tr>\r\n                    <th mat-sort-header=\"BranchName\">Plant</th>\r\n                    <th mat-sort-header=\"DeptName\">Department</th>\r\n                    <th mat-sort-header=\"LineName\">Cell/Line</th>\r\n                    <th mat-sort-header=\"LevelName\">Level</th>\r\n                    <th mat-sort-header=\"GapCount\">Skill Gap Count</th>\r\n                    <th>Required Skill Count</th>\r\n                    <th mat-sort-header=\"GapAvg\">Average</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let x of reportData.skillGapCellWise\">\r\n                    <td>{{x.branchName}}</td>\r\n                    <td>{{x.deptName}}</td>\r\n                    <td>{{x.lineName}}</td>\r\n                    <td>{{x.levelName}}</td>\r\n                    <td>{{x.gapCount}}</td>\r\n                    <td>{{x.requiredCount}}</td>\r\n                    <td>{{x.gapAvg}}</td>\r\n                </tr>\r\n                <tr *ngIf=\"reportData.skillGapCellWise == null || reportData.skillGapCellWise.length == 0\">\r\n                    <td colspan=\"3\" class=\"text-center no-record-found\">\r\n                        Data Not Found\r\n                        <!-- <div class=\"dataNotAvailable\"></div> -->\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <!-- <app-pagination [staticPagination]=\"staticPagination\" (paginationData)=\"loadMore($event)\"></app-pagination> -->\r\n\r\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-report-report-module-es5.js.map