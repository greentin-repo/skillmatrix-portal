(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-settings-settings-module"],{

/***/ "1mY8":
/*!*************************************************************!*\
  !*** ./src/app/modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "I7x6");




const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"]
    },
    {
        path: 'skillMatrix',
        loadChildren: () => __webpack_require__.e(/*! import() | skill-matrix-skill-matrix-module */ "skill-matrix-skill-matrix-module").then(__webpack_require__.bind(null, /*! ./skill-matrix/skill-matrix.module */ "P1gt")).then(m => m.SkillMatrixModule)
    }
];
let SettingsRoutingModule = class SettingsRoutingModule {
};
SettingsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SettingsRoutingModule);



/***/ }),

/***/ "I7x6":
/*!********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.ts ***!
  \********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.component.html */ "qNiJ");
/* harmony import */ var _settings_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.component.scss */ "JhP8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent.ctorParameters = () => [];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SettingsComponent);



/***/ }),

/***/ "JhP8":
/*!**********************************************************!*\
  !*** ./src/app/modules/settings/settings.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "RByd":
/*!******************************************************!*\
  !*** ./src/app/modules/settings/setting-constant.ts ***!
  \******************************************************/
/*! exports provided: CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANT", function() { return CONSTANT; });
const CONSTANT = {
// GROUP_LEVEL: "GROUP_LEVEL",
// COMPANY_LEVEL: "COMPANY_LEVEL",
// FUNCTION_LEVEL: "FUNCTION_LEVEL",
// PROFICIENCY_LEVEL: "PROFICIENCY_LEVEL",
// STANDARD: "STANDARD",
// GENDER: [
//   {
//     name: "Male",
//     id: "M",
//   },
//   {
//     name: "Female",
//     id: "F",
//   },
// ],
};


/***/ }),

/***/ "pU93":
/*!*****************************************************!*\
  !*** ./src/app/modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-routing.module */ "1mY8");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.component */ "I7x6");
/* harmony import */ var _setting_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-constant */ "RByd");






let SettingsModule = class SettingsModule {
};
SettingsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["SettingsRoutingModule"]
        ],
        providers: [
            { provide: 'Constant', useValue: _setting_constant__WEBPACK_IMPORTED_MODULE_5__["CONSTANT"] }
        ]
    })
], SettingsModule);



/***/ }),

/***/ "qNiJ":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/settings/settings.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\r\n");

/***/ })

}]);
//# sourceMappingURL=modules-settings-settings-module-es2015.js.map