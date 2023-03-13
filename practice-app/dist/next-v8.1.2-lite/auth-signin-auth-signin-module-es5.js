(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-signin-auth-signin-module"], {
    /***/
    "RqJJ":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-signin/auth-signin.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RqJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"/assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-3 f-w-400\">Signin</h4>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-group text-left mt-2\">\n              <div class=\"checkbox checkbox-primary d-inline\">\n                <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\n                <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\n              </div>\n            </div>\n            <button class=\"btn btn-block btn-primary mb-4\">Signin</button>\n            <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\" class=\"f-w-400\">Reset</a></p>\n            <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\" class=\"f-w-400\">Signup</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "T2LV":
    /*!**********************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function T2LV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1zaWduaW4vYXV0aC1zaWduaW4uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "ePca":
    /*!*************************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: AuthSigninRoutingModule */

    /***/
    function ePca(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSigninRoutingModule", function () {
        return AuthSigninRoutingModule;
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


      var _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-signin.component */
      "wkwp");

      var routes = [{
        path: '',
        component: _auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
      }];

      var AuthSigninRoutingModule = function AuthSigninRoutingModule() {
        _classCallCheck(this, AuthSigninRoutingModule);
      };

      AuthSigninRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthSigninRoutingModule);
      /***/
    },

    /***/
    "qWcS":
    /*!*****************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: AuthSigninModule */

    /***/
    function qWcS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSigninModule", function () {
        return AuthSigninModule;
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


      var _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-signin-routing.module */
      "ePca");
      /* harmony import */


      var _auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-signin.component */
      "wkwp");

      var AuthSigninModule = function AuthSigninModule() {
        _classCallCheck(this, AuthSigninModule);
      };

      AuthSigninModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_signin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthSigninRoutingModule"]],
        declarations: [_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]]
      })], AuthSigninModule);
      /***/
    },

    /***/
    "wkwp":
    /*!********************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-signin/auth-signin.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AuthSigninComponent */

    /***/
    function wkwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function () {
        return AuthSigninComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_signin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-signin.component.html */
      "RqJJ");
      /* harmony import */


      var _auth_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-signin.component.scss */
      "T2LV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthSigninComponent = /*#__PURE__*/function () {
        function AuthSigninComponent() {
          _classCallCheck(this, AuthSigninComponent);
        }

        _createClass(AuthSigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthSigninComponent;
      }();

      AuthSigninComponent.ctorParameters = function () {
        return [];
      };

      AuthSigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-signin',
        template: _raw_loader_auth_signin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_signin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AuthSigninComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-signin-auth-signin-module-es5.js.map