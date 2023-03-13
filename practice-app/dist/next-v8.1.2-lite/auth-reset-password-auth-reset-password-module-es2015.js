(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-reset-password-auth-reset-password-module"],{

/***/ "1chO":
/*!************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AuthResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordComponent", function() { return AuthResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-reset-password.component.html */ "JC3u");
/* harmony import */ var _auth_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-reset-password.component.scss */ "ftSH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthResetPasswordComponent = class AuthResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthResetPasswordComponent.ctorParameters = () => [];
AuthResetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-reset-password',
        template: _raw_loader_auth_reset_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_reset_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AuthResetPasswordComponent);



/***/ }),

/***/ "IAWF":
/*!*****************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AuthResetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordRoutingModule", function() { return AuthResetPasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-reset-password.component */ "1chO");




const routes = [
    {
        path: '',
        component: _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["AuthResetPasswordComponent"]
    }
];
let AuthResetPasswordRoutingModule = class AuthResetPasswordRoutingModule {
};
AuthResetPasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthResetPasswordRoutingModule);



/***/ }),

/***/ "JC3u":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\n  <!-- [ reset-password ] start -->\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"/assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-3 f-w-400\">Reset your password</h4>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\n            </div>\n            <button class=\"btn btn-block btn-primary mb-4\">Reset password</button>\n            <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\" class=\"f-w-400\">Signup</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ reset-password ] end -->\n</div>\n");

/***/ }),

/***/ "ftSH":
/*!**************************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1yZXNldC1wYXNzd29yZC9hdXRoLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "wPbg":
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-reset-password/auth-reset-password.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: AuthResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResetPasswordModule", function() { return AuthResetPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-reset-password-routing.module */ "IAWF");
/* harmony import */ var _auth_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-reset-password.component */ "1chO");





let AuthResetPasswordModule = class AuthResetPasswordModule {
};
AuthResetPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_reset_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthResetPasswordRoutingModule"]
        ],
        declarations: [_auth_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["AuthResetPasswordComponent"]]
    })
], AuthResetPasswordModule);



/***/ })

}]);
//# sourceMappingURL=auth-reset-password-auth-reset-password-module-es2015.js.map