(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-authentication-authentication-module"], {
    /***/
    "Qikc":
    /*!********************************************************************!*\
      !*** ./src/app/demo/pages/authentication/authentication.module.ts ***!
      \********************************************************************/

    /*! exports provided: AuthenticationModule */

    /***/
    function Qikc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
        return AuthenticationModule;
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


      var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication-routing.module */
      "VZfP");

      var AuthenticationModule = function AuthenticationModule() {
        _classCallCheck(this, AuthenticationModule);
      };

      AuthenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"]],
        declarations: []
      })], AuthenticationModule);
      /***/
    },

    /***/
    "VZfP":
    /*!****************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/authentication-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: AuthenticationRoutingModule */

    /***/
    function VZfP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
        return AuthenticationRoutingModule;
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

      var routes = [{
        path: '',
        children: [{
          path: 'signup',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | auth-signup-auth-signup-module */
            "auth-signup-auth-signup-module").then(__webpack_require__.bind(null,
            /*! ./auth-signup/auth-signup.module */
            "YXWv")).then(function (module) {
              return module.AuthSignupModule;
            });
          }
        }, {
          path: 'signin',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | auth-signin-auth-signin-module */
            "auth-signin-auth-signin-module").then(__webpack_require__.bind(null,
            /*! ./auth-signin/auth-signin.module */
            "qWcS")).then(function (module) {
              return module.AuthSigninModule;
            });
          }
        }, {
          path: 'reset-password',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | auth-reset-password-auth-reset-password-module */
            "auth-reset-password-auth-reset-password-module").then(__webpack_require__.bind(null,
            /*! ./auth-reset-password/auth-reset-password.module */
            "wPbg")).then(function (module) {
              return module.AuthResetPasswordModule;
            });
          }
        }, {
          path: 'change-password',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | auth-change-password-auth-change-password-module */
            "auth-change-password-auth-change-password-module").then(__webpack_require__.bind(null,
            /*! ./auth-change-password/auth-change-password.module */
            "UCeZ")).then(function (module) {
              return module.AuthChangePasswordModule;
            });
          }
        }]
      }];

      var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
        _classCallCheck(this, AuthenticationRoutingModule);
      };

      AuthenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthenticationRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-pages-authentication-authentication-module-es5.js.map