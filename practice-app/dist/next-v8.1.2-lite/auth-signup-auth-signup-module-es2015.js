(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signup-auth-signup-module"],{

/***/ "AJUs":
/*!**********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWdudXAvYXV0aC1zaWdudXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ALTM":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signup/auth-signup.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"/assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-3 f-w-400\">Sign up</h4>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-user\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n            </div>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-group text-left mt-2\">\n              <div class=\"checkbox checkbox-primary d-inline\">\n                <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\n                <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\"> Newsletter</a> weekly.</label>\n              </div>\n            </div>\n            <button class=\"btn btn-primary btn-block mb-4\">Sign up</button>\n            <p class=\"mb-2\">Already have an account? <a [routerLink]=\"['/auth/signin']\" class=\"f-w-400\">Signin</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "MFPU":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AuthSignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupRoutingModule", function() { return AuthSignupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup.component */ "fqFm");




const routes = [
    {
        path: '',
        component: _auth_signup_component__WEBPACK_IMPORTED_MODULE_3__["AuthSignupComponent"]
    }
];
let AuthSignupRoutingModule = class AuthSignupRoutingModule {
};
AuthSignupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthSignupRoutingModule);



/***/ }),

/***/ "YXWv":
/*!*****************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AuthSignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupModule", function() { return AuthSignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup-routing.module */ "MFPU");
/* harmony import */ var _auth_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-signup.component */ "fqFm");





let AuthSignupModule = class AuthSignupModule {
};
AuthSignupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSignupRoutingModule"]
        ],
        declarations: [_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"]]
    })
], AuthSignupModule);



/***/ }),

/***/ "fqFm":
/*!********************************************************************************!*\
  !*** ./src/app/demo/pages/authentication/auth-signup/auth-signup.component.ts ***!
  \********************************************************************************/
/*! exports provided: AuthSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function() { return AuthSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_signup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth-signup.component.html */ "ALTM");
/* harmony import */ var _auth_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-signup.component.scss */ "AJUs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthSignupComponent = class AuthSignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthSignupComponent.ctorParameters = () => [];
AuthSignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-signup',
        template: _raw_loader_auth_signup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_signup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AuthSignupComponent);



/***/ })

}]);
//# sourceMappingURL=auth-signup-auth-signup-module-es2015.js.map