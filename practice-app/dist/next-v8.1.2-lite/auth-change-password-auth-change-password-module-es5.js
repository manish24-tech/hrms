(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-change-password-auth-change-password-module"], {
    /***/
    "+FkV":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password-routing.module.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: AuthChangePasswordRoutingModule */

    /***/
    function FkV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthChangePasswordRoutingModule", function () {
        return AuthChangePasswordRoutingModule;
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


      var _auth_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-change-password.component */
      "OYHO");

      var routes = [{
        path: '',
        component: _auth_change_password_component__WEBPACK_IMPORTED_MODULE_3__["AuthChangePasswordComponent"]
      }];

      var AuthChangePasswordRoutingModule = function AuthChangePasswordRoutingModule() {
        _classCallCheck(this, AuthChangePasswordRoutingModule);
      };

      AuthChangePasswordRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AuthChangePasswordRoutingModule);
      /***/
    },

    /***/
    "OYHO":
    /*!**************************************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: AuthChangePasswordComponent */

    /***/
    function OYHO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthChangePasswordComponent", function () {
        return AuthChangePasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_auth_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./auth-change-password.component.html */
      "lClv");
      /* harmony import */


      var _auth_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-change-password.component.scss */
      "zLUd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthChangePasswordComponent = /*#__PURE__*/function () {
        function AuthChangePasswordComponent() {
          _classCallCheck(this, AuthChangePasswordComponent);
        }

        _createClass(AuthChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthChangePasswordComponent;
      }();

      AuthChangePasswordComponent.ctorParameters = function () {
        return [];
      };

      AuthChangePasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-change-password',
        template: _raw_loader_auth_change_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_change_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AuthChangePasswordComponent);
      /***/
    },

    /***/
    "UCeZ":
    /*!***********************************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.module.ts ***!
      \***********************************************************************************************/

    /*! exports provided: AuthChangePasswordModule */

    /***/
    function UCeZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthChangePasswordModule", function () {
        return AuthChangePasswordModule;
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


      var _auth_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth-change-password-routing.module */
      "+FkV");
      /* harmony import */


      var _auth_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-change-password.component */
      "OYHO");

      var AuthChangePasswordModule = function AuthChangePasswordModule() {
        _classCallCheck(this, AuthChangePasswordModule);
      };

      AuthChangePasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_change_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthChangePasswordRoutingModule"]],
        declarations: [_auth_change_password_component__WEBPACK_IMPORTED_MODULE_4__["AuthChangePasswordComponent"]]
      })], AuthChangePasswordModule);
      /***/
    },

    /***/
    "lClv":
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.html ***!
      \******************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lClv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"auth-wrapper\">\n  <div class=\"blur-bg-images\"></div>\n  <!-- [ change-password ] start -->\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"/assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-4 f-w-400\">Change your password</h4>\n            <div class=\"input-group mb-2\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\">\n            </div>\n            <div class=\"input-group mb-2\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"New Password\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <input type=\"password\" class=\"form-control\" placeholder=\"Re-Type New Password\">\n            </div>\n            <button class=\"btn btn-block btn-primary mb-4\">Change password</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- [ change-password ] end -->\n</div>\n";
      /***/
    },

    /***/
    "zLUd":
    /*!****************************************************************************************************!*\
      !*** ./src/app/demo/pages/authentication/auth-change-password/auth-change-password.component.scss ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zLUd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aC1jaGFuZ2UtcGFzc3dvcmQvYXV0aC1jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-change-password-auth-change-password-module-es5.js.map