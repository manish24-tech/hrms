(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-layout-layout-module"],{

/***/ "NYwM":
/*!************************************************************!*\
  !*** ./src/app/demo/pages/layout/layout-routing.module.ts ***!
  \************************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        children: [
            {
                path: 'horizontal',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-horizontal-theme-horizontal-module */ "theme-horizontal-theme-horizontal-module").then(__webpack_require__.bind(null, /*! ./theme-horizontal/theme-horizontal.module */ "rEjK")).then(module => module.ThemeHorizontalModule)
            }
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ "d3Dy":
/*!****************************************************!*\
  !*** ./src/app/demo/pages/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "NYwM");




let LayoutModule = class LayoutModule {
};
LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"]
        ]
    })
], LayoutModule);



/***/ })

}]);
//# sourceMappingURL=demo-pages-layout-layout-module-es2015.js.map