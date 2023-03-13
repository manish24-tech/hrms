(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-sample-page-sample-page-module"], {
    /***/
    "15nG":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/pages/sample-page/sample-page.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Hello Card\">\n      <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n    </app-card>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "JRCz":
    /*!**********************************************************************!*\
      !*** ./src/app/demo/pages/sample-page/sample-page-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: SamplePageRoutingModule */

    /***/
    function JRCz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageRoutingModule", function () {
        return SamplePageRoutingModule;
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


      var _sample_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sample-page.component */
      "i86/");

      var routes = [{
        path: '',
        component: _sample_page_component__WEBPACK_IMPORTED_MODULE_3__["SamplePageComponent"]
      }];

      var SamplePageRoutingModule = function SamplePageRoutingModule() {
        _classCallCheck(this, SamplePageRoutingModule);
      };

      SamplePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SamplePageRoutingModule);
      /***/
    },

    /***/
    "LFRe":
    /*!**************************************************************!*\
      !*** ./src/app/demo/pages/sample-page/sample-page.module.ts ***!
      \**************************************************************/

    /*! exports provided: SamplePageModule */

    /***/
    function LFRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageModule", function () {
        return SamplePageModule;
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


      var _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./sample-page-routing.module */
      "JRCz");
      /* harmony import */


      var _sample_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sample-page.component */
      "i86/");
      /* harmony import */


      var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../theme/shared/shared.module */
      "ebz3");

      var SamplePageModule = function SamplePageModule() {
        _classCallCheck(this, SamplePageModule);
      };

      SamplePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sample_page_component__WEBPACK_IMPORTED_MODULE_4__["SamplePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _sample_page_routing_module__WEBPACK_IMPORTED_MODULE_3__["SamplePageRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
      })], SamplePageModule);
      /***/
    },

    /***/
    "RdEz":
    /*!*******************************************************************!*\
      !*** ./src/app/demo/pages/sample-page/sample-page.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function RdEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvc2FtcGxlLXBhZ2Uvc2FtcGxlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "i86/":
    /*!*****************************************************************!*\
      !*** ./src/app/demo/pages/sample-page/sample-page.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SamplePageComponent */

    /***/
    function i86(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SamplePageComponent", function () {
        return SamplePageComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_sample_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./sample-page.component.html */
      "15nG");
      /* harmony import */


      var _sample_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./sample-page.component.scss */
      "RdEz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SamplePageComponent = /*#__PURE__*/function () {
        function SamplePageComponent() {
          _classCallCheck(this, SamplePageComponent);
        }

        _createClass(SamplePageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SamplePageComponent;
      }();

      SamplePageComponent.ctorParameters = function () {
        return [];
      };

      SamplePageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sample-page',
        template: _raw_loader_sample_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sample_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SamplePageComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-pages-sample-page-sample-page-module-es5.js.map