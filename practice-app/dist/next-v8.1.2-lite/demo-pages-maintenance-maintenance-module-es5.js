(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-pages-maintenance-maintenance-module"], {
    /***/
    "6hsW":
    /*!**********************************************************************!*\
      !*** ./src/app/demo/pages/maintenance/maintenance-routing.module.ts ***!
      \**********************************************************************/

    /*! exports provided: MaintenanceRoutingModule */

    /***/
    function hsW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function () {
        return MaintenanceRoutingModule;
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
          path: 'coming-soon',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | mainten-coming-soon-mainten-coming-soon-module */
            "mainten-coming-soon-mainten-coming-soon-module").then(__webpack_require__.bind(null,
            /*! ./mainten-coming-soon/mainten-coming-soon.module */
            "C0ob")).then(function (module) {
              return module.MaintenComingSoonModule;
            });
          }
        }, {
          path: 'error',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | mainten-error-mainten-error-module */
            "mainten-error-mainten-error-module").then(__webpack_require__.bind(null,
            /*! ./mainten-error/mainten-error.module */
            "kn0m")).then(function (module) {
              return module.MaintenErrorModule;
            });
          }
        }]
      }];

      var MaintenanceRoutingModule = function MaintenanceRoutingModule() {
        _classCallCheck(this, MaintenanceRoutingModule);
      };

      MaintenanceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MaintenanceRoutingModule);
      /***/
    },

    /***/
    "l8Z8":
    /*!**************************************************************!*\
      !*** ./src/app/demo/pages/maintenance/maintenance.module.ts ***!
      \**************************************************************/

    /*! exports provided: MaintenanceModule */

    /***/
    function l8Z8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function () {
        return MaintenanceModule;
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


      var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maintenance-routing.module */
      "6hsW");

      var MaintenanceModule = function MaintenanceModule() {
        _classCallCheck(this, MaintenanceModule);
      };

      MaintenanceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["MaintenanceRoutingModule"]],
        declarations: []
      })], MaintenanceModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=demo-pages-maintenance-maintenance-module-es5.js.map