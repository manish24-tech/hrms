(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ai/":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.ts ***!
  \******************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alert.component.html */ "PQEG");
/* harmony import */ var _alert_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.component.scss */ "VT1F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AlertComponent = class AlertComponent {
    constructor() { }
    dismissAlert(element) {
        element.parentElement.removeChild(element);
    }
    ngOnInit() {
    }
};
AlertComponent.ctorParameters = () => [];
AlertComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alert',
        template: _raw_loader_alert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alert_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AlertComponent);



/***/ }),

/***/ "+Vct":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" [ngClass]=\"{'in': visibleAnimate}\" [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" role=\"document\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "/n7v":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.ts ***!
  \****************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./card.component.html */ "ClDY");
/* harmony import */ var _card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.component.scss */ "ZtXS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "SOMP");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "R0Ic");







let CardComponent = class CardComponent {
    constructor(animationService, config) {
        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
    }
    ngOnInit() {
        if (this.hidHeader) {
            this.options = false;
        }
        if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
        }
    }
    fullCardToggle(element, animation, status) {
        animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
        this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
        // const duration = this.cardClass === 'full-card' ? 300 : 600;
        this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animators
            .setType(this.animation)
            .setDuration(500)
            .setDirection('alternate')
            .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
            .animate(element)
            .then(() => {
            this.isAnimating = false;
        })
            .catch(() => {
            this.isAnimating = false;
        });
        setTimeout(() => {
            this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
            if (this.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
            }
            else {
                document.querySelector('body').removeAttribute('style');
            }
        }, 500);
    }
    collapsedCardToggle() {
        this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
        this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
    }
    cardRefresh() {
        this.loadCard = true;
        this.cardClass = 'card-load';
        setTimeout(() => {
            this.loadCard = false;
            this.cardClass = 'expanded';
        }, 3000);
    }
    cardRemoveAction() {
        this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
    }
};
CardComponent.ctorParameters = () => [
    { type: css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"] }
];
CardComponent.propDecorators = {
    cardTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    cardClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    blockClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hidHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    customHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    cardCaption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    captionClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    isCardFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    footerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-card',
        template: _raw_loader_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('collapsedCard', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    overflow: 'hidden',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_6__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('collapsed <=> expanded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('cardRemove', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                    opacity: 0,
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('400ms')),
            ])
        ],
        styles: [_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]])
], CardComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\POC\Angular\practice-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0Tmn":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"{{this.chartID}}\"></div>\n");

/***/ }),

/***/ "2U/g":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"['/dashboard/analytics']\" class=\"b-brand\">\n      <img id=\"main-logo\" src=\"/assets/images/logo.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor !== 'brand-default' || this.nextConfig.headerBackColor !== 'header-default'\">\n      <img src=\"/assets/images/logo-dark.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor === 'brand-default' && this.nextConfig.headerBackColor === 'header-default'\">\n      <img src=\"/assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "7J/v":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>\n\n");

/***/ }),

/***/ "7jS0":
/*!**************************************************!*\
  !*** ./src/app/theme/shared/components/index.ts ***!
  \**************************************************/
/*! exports provided: AlertModule, CardModule, BreadcrumbModule, ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.module */ "N4L5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return _alert_alert_module__WEBPACK_IMPORTED_MODULE_0__["AlertModule"]; });

/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.module */ "wcvO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"]; });

/* harmony import */ var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ "z0HF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"]; });

/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/modal.module */ "sIwa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return _modal_modal_module__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]; });







/***/ }),

/***/ "9OXH":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts ***!
  \********************************************************************************/
/*! exports provided: ApexChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartService", function() { return ApexChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ApexChartService = class ApexChartService {
    constructor() {
        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    eventChangeTimeRange() {
        this.changeTimeRange.emit();
    }
    eventChangeSeriesData() {
        this.changeSeriesData.emit();
    }
};
ApexChartService.ctorParameters = () => [];
ApexChartService.propDecorators = {
    changeTimeRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    changeSeriesData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
ApexChartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ApexChartService);



/***/ }),

/***/ "A2he":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "Afc9":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Ap1d":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_collapse_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "OE1v");
/* harmony import */ var _nav_collapse_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-collapse.component.scss */ "EwA0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation */ "S8Sc");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../app-config */ "K7hc");







let NavCollapseComponent = class NavCollapseComponent {
    constructor() {
        this.visible = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_6__["NextConfig"].config;
        this.themeLayout = this.nextConfig.layout;
    }
    ngOnInit() {
    }
    navCollapse(e) {
        this.visible = !this.visible;
        let parent = e.target;
        if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
        }
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
            }
        }
        let firstParent = parent.parentElement;
        let preParent = parent.parentElement.parentElement;
        if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
                firstParent.classList.add('pcoded-trigger');
                // firstParent.parentElement.classList.toggle('pcoded-trigger');
                firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
        }
        else if (preParent.classList.contains('pcoded-submenu')) {
            do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
        }
        parent.classList.toggle('pcoded-trigger');
    }
};
NavCollapseComponent.ctorParameters = () => [];
NavCollapseComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NavCollapseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-collapse',
        template: _raw_loader_nav_collapse_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-100%)', display: 'block' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ],
        styles: [_nav_collapse_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavCollapseComponent);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CKO6":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkits.ts ***!
  \*************************************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "CNih":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.navigationList\">\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12\">\n            <div class=\"page-header-title\">\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\n              </li>\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "ClDY":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/card/card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\n        </ul>\n      </div>\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </div>\n  <ng-template #subMenuContent>\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\n    <ng-content select=\".app-card-footer\"></ng-content>\n  </div>\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\n</div>\n");

/***/ }),

/***/ "DgD/":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n  </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "Dp0H":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n");

/***/ }),

/***/ "E7Y8":
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContentComponent", function() { return NavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_content_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-content.component.html */ "wjSg");
/* harmony import */ var _nav_content_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-content.component.scss */ "wSfS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation */ "S8Sc");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../app-config */ "K7hc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let NavContentComponent = class NavContentComponent {
    constructor(nav, zone, location) {
        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_5__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
            }, 500);
        }
    }
    ngAfterViewInit() {
        if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
        }
    }
    scrollPlus() {
        this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
        if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
        }
        this.prevDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    scrollMinus() {
        this.scrollWidth = this.scrollWidth - this.wrapperWidth;
        if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
        }
        this.nextDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    fireLeave() {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
        }
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
            }
        }
    }
    navMob() {
        if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavContentComponent.ctorParameters = () => [
    { type: _navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
NavContentComponent.propDecorators = {
    onNavMobCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    navbarContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['navbarContent',] }],
    navbarWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['navbarWrapper',] }]
};
NavContentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-content',
        template: _raw_loader_nav_content_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_content_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], NavContentComponent);



/***/ }),

/***/ "ENTz":
/*!*************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Empq":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/auth/auth.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "EwA0":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "HRIB":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-item.component.html */ "DgD/");
/* harmony import */ var _nav_item_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-item.component.scss */ "LfhD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation */ "S8Sc");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../app-config */ "K7hc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







let NavItemComponent = class NavItemComponent {
    constructor(location) {
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_5__["NextConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
    }
    ngOnInit() {
    }
    closeOtherMenu(event) {
        if (this.nextConfig['layout'] === 'vertical') {
            const ele = event.target;
            if (ele !== null && ele !== undefined) {
                const parent = ele.parentElement;
                const up_parent = parent.parentElement.parentElement;
                const last_parent = up_parent.parentElement;
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                if (parent.classList.contains('pcoded-hasmenu')) {
                    parent.classList.add('pcoded-trigger');
                    parent.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('pcoded-trigger');
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('pcoded-trigger');
                    last_parent.classList.add('active');
                }
            }
            if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
        }
        else {
            setTimeout(() => {
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                let current_url = this.location.path();
                if (this.location['_baseHref']) {
                    current_url = this.location['_baseHref'] + this.location.path();
                }
                const link = "a.nav-link[ href='" + current_url + "' ]";
                const ele = document.querySelector(link);
                if (ele !== null && ele !== undefined) {
                    const parent = ele.parentElement;
                    const up_parent = parent.parentElement.parentElement;
                    const last_parent = up_parent.parentElement;
                    if (parent.classList.contains('pcoded-hasmenu')) {
                        parent.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('active');
                    }
                }
            }, 500);
        }
    }
};
NavItemComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
NavItemComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NavItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-item',
        template: _raw_loader_nav_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_item_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], NavItemComponent);



/***/ }),

/***/ "Jltz":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/data-table/data-filter.pipe.ts ***!
  \************************************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DataFilterPipe = class DataFilterPipe {
    transform(array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, row => row.name.indexOf(query) > -1);
        }
        return array;
    }
};
DataFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'dataFilter'
    })
], DataFilterPipe);



/***/ }),

/***/ "K7hc":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: NextConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextConfig", function() { return NextConfig; });
class NextConfig {
}
NextConfig.config = {
    layout: 'vertical',
    subLayout: '',
    collapseMenu: false,
    layoutType: 'menu-dark',
    headerBackColor: 'header-blue',
    navBrandColor: 'brand-default',
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: true,
    boxLayout: false,
};


/***/ }),

/***/ "LfhD":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "N4L5":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.module.ts ***!
  \***************************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "+Ai/");




let AlertModule = class AlertModule {
};
AlertModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "Nq98":
/*!*******************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "NvK5":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function() { return NavSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_search_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-search.component.html */ "WGuA");
/* harmony import */ var _nav_search_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-search.component.scss */ "Afc9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavSearchComponent = class NavSearchComponent {
    constructor() { }
    ngOnInit() { }
};
NavSearchComponent.ctorParameters = () => [];
NavSearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-search',
        template: _raw_loader_nav_search_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_search_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavSearchComponent);



/***/ }),

/***/ "OE1v":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n      <span class=\"pcoded-mtext\">{{item.title}}\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title}}\n        </span>\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "OF5i":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
  \****************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "k7+O");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let ToggleFullScreenDirective = class ToggleFullScreenDirective {
    constructor(elements) {
        this.elements = elements;
    }
    onClick() {
        /*if (screenfull.enabled) {
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
          screenfull.toggle();
        }*/
        if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            }
            else {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
        }
    }
};
ToggleFullScreenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
ToggleFullScreenDirective.propDecorators = {
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
ToggleFullScreenDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggleFullScreen]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ToggleFullScreenDirective);

function isScreenFull(sf) {
    return sf.isFullscreen;
}


/***/ }),

/***/ "PQEG":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/alert/alert.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #alert class=\"alert alert-{{type}}\" role=\"alert\" [ngClass]=\"{'alert-dismissible': dismiss}\">\n  <ng-content></ng-content>\n  <button *ngIf=\"dismiss\" (click)=\"dismissAlert(alert)\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n</div>\n");

/***/ }),

/***/ "S8Sc":
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/*! exports provided: NavigationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const NavigationItems = [
    {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                url: '/dashboard/analytics',
                icon: 'feather icon-home'
            },
            {
                id: 'page-layouts',
                title: 'Horizontal Layouts',
                type: 'item',
                url: '/layout/horizontal',
                target: true,
                icon: 'feather icon-layout'
            }
        ]
    },
    {
        id: 'pages',
        title: 'Pages',
        type: 'group',
        icon: 'feather icon-file-text',
        children: [
            {
                id: 'auth',
                title: 'Authentication',
                type: 'collapse',
                icon: 'feather icon-lock',
                children: [
                    {
                        id: 'signup',
                        title: 'Sign up',
                        type: 'item',
                        url: '/auth/signup',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'signin',
                        title: 'Sign in',
                        type: 'item',
                        url: '/auth/signin',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'reset-password',
                        title: 'Reset Password',
                        type: 'item',
                        url: '/auth/reset-password',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'change-password',
                        title: 'Change Password',
                        type: 'item',
                        url: '/auth/change-password',
                        target: true,
                        breadcrumbs: false
                    }
                ]
            },
            {
                id: 'maintenance',
                title: 'Maintenance',
                type: 'collapse',
                icon: 'feather icon-sliders',
                children: [
                    {
                        id: 'error',
                        title: 'Error',
                        type: 'item',
                        url: '/maintenance/error',
                        target: true,
                        breadcrumbs: false
                    },
                    {
                        id: 'coming-soon',
                        title: 'Maintenance',
                        type: 'item',
                        url: '/maintenance/coming-soon',
                        target: true,
                        breadcrumbs: false
                    }
                ]
            }
        ]
    },
    {
        id: 'other',
        title: 'Other',
        type: 'group',
        icon: 'feather icon-align-left',
        children: [
            {
                id: 'sample-page',
                title: 'Sample Page',
                type: 'item',
                url: '/sample-page',
                classes: 'nav-item',
                icon: 'feather icon-sidebar'
            }
        ]
    }
];
let NavigationItem = class NavigationItem {
    get() {
        return NavigationItems;
    }
};
NavigationItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationItem);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AppComponent);



/***/ }),

/***/ "T0+U":
/*!************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7RUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXX0= */");

/***/ }),

/***/ "UrpS":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "VT1F":
/*!********************************************************************!*\
  !*** ./src/app/theme/shared/components/alert/alert.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n  <app-spinner></app-spinner>\n</router-outlet>\n");

/***/ }),

/***/ "WGuA":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"main-search\" class=\"main-search open\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"'130px'\">\n    <span class=\"input-group-append search-btn btn btn-primary\">\n      <i class=\"feather icon-search input-group-text\"></i>\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "WuPV":
/*!***********************************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0);\n  }\n  40% {\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2Y7O0FBRUE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFLO0VBQ0wscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixtRUFBbUU7RUFDbkUsMkRBQTJEO0FBQy9EOztBQUVBO0VBQ0k7SUFFSSxvQkFBb0I7RUFDMUI7RUFDRTtJQUVJLG9CQUFvQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0k7SUFFSSxvQkFBb0I7RUFDMUI7RUFDRTtJQUVJLG9CQUFvQjtFQUMxQjtBQUNGOztBQUVBO0VBQ0ksTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQ0FBK0I7QUFDbkM7O0FBRUE7RUFDSSx5Q0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "YIhi":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-perspective {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-perspective body {\n  height: 100%;\n  overflow: hidden;\n  perspective: 600px;\n}\n\n.container {\n  min-height: 100%;\n}\n\n.md-modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  max-width: 630px;\n  min-width: 320px;\n  height: auto;\n  z-index: 2000;\n  visibility: hidden;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n  visibility: visible;\n}\n\n.md-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  top: 0;\n  left: 0;\n  z-index: 1030;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.55);\n  transition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n  opacity: 1;\n  visibility: visible;\n}\n\n/* Content styles */\n\n.md-content {\n  background: #fff;\n  position: relative;\n  border-radius: 3px;\n  margin: 0 auto;\n}\n\n.md-content h3 {\n  margin: 0;\n  padding: 0.4em;\n  text-align: center;\n  opacity: 0.8;\n  color: #fff;\n  border-radius: 3px 3px 0 0;\n}\n\n.md-content > div {\n  padding: 15px 40px 30px;\n  margin: 0;\n}\n\n.md-content > div p {\n  margin: 0;\n  padding: 10px 0;\n  line-height: 1.5;\n}\n\n.md-content > div ul {\n  margin: 0;\n  padding: 0 0 30px 20px;\n}\n\n.md-content > div ul li {\n  padding: 5px 0;\n}\n\n.md-content button {\n  display: block;\n  margin: 0 auto;\n  font-size: 0.8em;\n}\n\n/* Individual modal styles with animations/transitions */\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n  transform: scale(0.7);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n  transform: translateX(20%);\n  opacity: 0;\n  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n\n.md-show.md-effect-2 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n}\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n  transform: translateY(20%);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-3 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n  transform: scale(0) rotate(720deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-4 ~ .md-overlay, .md-effect-4 .md-content {\n  transition: all 0.5s;\n}\n\n.md-show.md-effect-4 .md-content {\n  transform: scale(1) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-5 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(600px) rotateX(20deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-5 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translateZ(0px) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-6 .md-content {\n  transform-style: preserve-3d;\n  transform: translate(30%) translateZ(600px) rotate(10deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-6 .md-content {\n  transition: all 0.3s ease-in;\n  transform: translate(0%) translateZ(0) rotate(0deg);\n  opacity: 1;\n}\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7 {\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.md-effect-7 .md-content {\n  transform: translateY(-200%);\n  transition: all .3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-7 .md-content {\n  transform: translateY(0%);\n  border-radius: 0 0 3px 3px;\n  opacity: 1;\n}\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-8 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateY(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-8 .md-content {\n  transform: rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-9 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-70deg);\n  transition: all 0.3s;\n  opacity: 0;\n}\n\n.md-show.md-effect-9 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-10 .md-content {\n  transform-style: preserve-3d;\n  transform: rotateX(-60deg);\n  transform-origin: 50% 0;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-10 .md-content {\n  transform: rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n  transform: scale(2);\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-11 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n  transform: scale(0.8);\n  opacity: 0;\n  transition: all 0.3s;\n  color: #fff;\n  background: transparent;\n}\n\n.md-effect-12 .md-content h3 {\n  background: transparent;\n}\n\n.md-show.md-effect-12 .md-content {\n  transform: scale(1);\n  opacity: 1;\n}\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-13 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(-3000px) rotateY(90deg);\n  opacity: 0;\n}\n\n.md-show.md-effect-13 .md-content {\n  -webkit-animation: slit .7s forwards ease-out;\n  animation: slit .7s forwards ease-out;\n}\n\n@-webkit-keyframes slit {\n  50% {\n    -webkit-transform: translateZ(-250px) rotateY(89deg);\n    opacity: .5;\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes slit {\n  50% {\n    transform: translateZ(-250px) rotateY(89deg);\n    opacity: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  100% {\n    transform: translateZ(0) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-14 .md-content {\n  transform-style: preserve-3d;\n  transform: translateY(100%) rotateX(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s ease-out;\n}\n\n.md-show.md-effect-14 .md-content {\n  transform: translateY(0%) rotateX(0deg);\n  opacity: 1;\n}\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n  perspective: 1300px;\n}\n\n.md-effect-15 .md-content {\n  transform-style: preserve-3d;\n  transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n  transform-origin: 0 100%;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-15 .md-content {\n  transform: translateZ(0px) translateX(0%) rotateY(0deg);\n  opacity: 1;\n}\n\n/* Effect 16:  Blur */\n\nbody.modal-16 > nav, body.modal-16 > header, body.modal-16 > section {\n  -webkit-filter: blur(3px);\n  filter: blur(3px);\n}\n\n.md-effect-16 .md-content {\n  transform: translateY(-5%);\n  opacity: 0;\n}\n\n.md-show.md-effect-16 ~ .container, .md-effect-16 .md-content {\n  transition: all 0.3s;\n}\n\n.md-show.md-effect-16 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\nbody.modal-17 > nav, body.modal-17 > section, body.modal-17 > .md-overlay {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n\n.md-show.md-effect-17 ~ .container {\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.3s;\n}\n\nbody.modal-17 > header {\n  height: 70px;\n}\n\nbody.modal-17 > nav {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n}\n\nbody.modal-17 .pcoded-main-container {\n  overflow: hidden;\n  height: calc(100vh - 70px);\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\nbody.modal-17 > .header-chat, body.modal-17 > .header-user-list {\n  display: none;\n}\n\nbody.modal-17 > nav, body.modal-17 > .md-overlay, body.modal-17 > section {\n  transform: rotateX(-2deg);\n  transform-origin: 50% 0%;\n  transform-style: preserve-3d;\n}\n\n.md-effect-17 .md-content {\n  opacity: 0;\n  transform: translateY(200%);\n}\n\n.md-show.md-effect-17 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.3s 0.2s;\n}\n\n/* Effect 18:  Slide from right with perspective on container */\n\nbody.modal-18 {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-18 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\nbody.modal-18 > .header-chat, body.modal-18 > .header-user-list {\n  display: none;\n}\n\nbody.modal-18 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\nbody.modal-18 > nav, body.modal-18 > header, body.modal-18 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 0% 50%;\n  -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 0% 50%;\n  animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes rotateRightSideFirst {\n  50% {\n    -webkit-transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n  100% {\n    -webkit-transform: translateZ(-200px);\n  }\n}\n\n@keyframes rotateRightSideFirst {\n  50% {\n    transform: translateZ(-50px) rotateY(5deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateZ(-200px);\n  }\n}\n\n.md-effect-18 .md-content {\n  transform: translateX(200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-18 .md-content {\n  transform: translateX(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n.md-show.md-effect-19 ~ .container {\n  height: 100%;\n  overflow: hidden;\n}\n\n.md-show.md-effect-19 ~ .md-overlay {\n  transition: all 0.5s;\n}\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\nbody.modal-19 > .header-chat, body.modal-19 > .header-user-list {\n  display: none;\n}\n\nbody.modal-19 .pcoded-main-container {\n  height: calc(100vh - 70px);\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\nbody.modal-19 > nav, body.modal-19 > header, body.modal-19 > section {\n  -webkit-transform-style: preserve-3d;\n  -webkit-transform-origin: 50% 100%;\n  -webkit-animation: OpenTop 0.5s forwards ease-in;\n  -moz-transform-style: preserve-3d;\n  -moz-transform-origin: 50% 100%;\n  -moz-animation: OpenTop 0.5s forwards ease-in;\n  transform-style: preserve-3d;\n  transform-origin: 50% 100%;\n  animation: OpenTop 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes OpenTop {\n  50% {\n    -webkit-transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n  }\n}\n\n@keyframes OpenTop {\n  50% {\n    transform: rotateX(10deg);\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n}\n\n.md-effect-19 .md-content {\n  transform: translateY(-200%);\n  opacity: 0;\n}\n\n.md-show.md-effect-19 .md-content {\n  transform: translateY(0);\n  opacity: 1;\n  transition: all 0.5s 0.1s;\n}\n\n@media screen and (max-width: 32em) {\n  body {\n    font-size: 75%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvYW5pbWF0aW9uLW1vZGFsL2FuaW1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBSEE7RUFJSSxZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLGtCQUFrQjtBQUd0Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUVsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQywyQkFBMkI7RUFFM0IsNENBQTRDO0FBRTlDOztBQUNBO0VBQ0UsbUJBQW1CO0FBRXJCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFVBQVU7RUFDViwrQkFBK0I7RUFFL0Isb0JBQW9CO0FBRXRCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUVyQjs7QUFDQSxtQkFBQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBTEE7RUFNSSxTQUFTO0VBQ1QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDBCQUEwQjtBQUc5Qjs7QUFkQTtFQWNJLHVCQUF1QjtFQUN2QixTQUFTO0FBSWI7O0FBbkJBO0VBaUJNLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBTXRCOztBQXpCQTtFQXNCTSxTQUFTO0VBQ1Qsc0JBQXNCO0FBTzVCOztBQTlCQTtFQXlCUSxjQUFjO0FBU3RCOztBQWxDQTtFQThCSSxjQUFjO0VBQ2QsY0FBYztFQUNkLGdCQUFnQjtBQVFwQjs7QUFKQSx3REFBQTs7QUFFQSxtQ0FBQTs7QUFFQTtFQUVFLHFCQUFxQjtFQUNyQixVQUFVO0VBRVYsb0JBQW9CO0FBS3RCOztBQUZBO0VBRUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFLWjs7QUFGQSxtQ0FBQTs7QUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsc0RBQXNEO0FBSXhEOztBQURBO0VBRUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFJWjs7QUFEQSxvQ0FBQTs7QUFFQTtFQUVFLDBCQUEwQjtFQUMxQixVQUFVO0VBRVYsb0JBQW9CO0FBR3RCOztBQUFBO0VBRUUsd0JBQXdCO0VBQ3hCLFVBQVU7QUFHWjs7QUFBQSx3QkFBQTs7QUFFQTtFQUlFLGtDQUFrQztFQUNsQyxVQUFVO0FBRVo7O0FBQ0E7RUFHRSxvQkFBb0I7QUFFdEI7O0FBQ0E7RUFJRSxnQ0FBZ0M7RUFDaEMsVUFBVTtBQUVaOztBQUNBLG1CQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBQXZCOztBQUpBO0VBU0ksNEJBQTRCO0VBSTVCLDJDQUEyQztFQUMzQyxVQUFVO0FBQ2Q7O0FBR0E7RUFHRSw0QkFBNEI7RUFJNUIsd0NBQXdDO0VBQ3hDLFVBQVU7QUFBWjs7QUFHQSx3QkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQUZ2Qjs7QUFGQTtFQVNJLDRCQUE0QjtFQUk1Qix5REFBeUQ7RUFDekQsVUFBVTtBQURkOztBQUtBO0VBR0UsNEJBQTRCO0VBSTVCLG1EQUFtRDtFQUNuRCxVQUFVO0FBRlo7O0FBS0Esc0NBQUE7O0FBRUE7RUFDRSxNQUFNO0VBSU4sMkJBQTJCO0FBSDdCOztBQUZBO0VBVUksNEJBQTRCO0VBRzVCLG1CQUFtQjtFQUNuQixVQUFVO0FBRGQ7O0FBS0E7RUFJRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFVBQVU7QUFGWjs7QUFLQSxpQ0FBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQUp2Qjs7QUFBQTtFQVNJLDRCQUE0QjtFQUk1QiwwQkFBMEI7RUFHMUIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFIZDs7QUFPQTtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0FBSlo7O0FBT0EsK0JBQUE7O0FBRUE7RUFJSSxtQkFBbUI7QUFOdkI7O0FBRUE7RUFTSSw0QkFBNEI7RUFJNUIsMEJBQTBCO0VBRzFCLG9CQUFvQjtFQUNwQixVQUFVO0FBTGQ7O0FBU0E7RUFJRSx3QkFBd0I7RUFDeEIsVUFBVTtBQU5aOztBQVNBLHVCQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBUnZCOztBQUlBO0VBU0ksNEJBQTRCO0VBSTVCLDBCQUEwQjtFQUcxQix1QkFBdUI7RUFDdkIsVUFBVTtFQUdWLG9CQUFvQjtBQVB4Qjs7QUFXQTtFQUlFLHdCQUF3QjtFQUN4QixVQUFVO0FBUlo7O0FBV0EsNEJBQUE7O0FBRUE7RUFJRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUdWLG9CQUFvQjtBQVR0Qjs7QUFZQTtFQUlFLG1CQUFtQjtFQUNuQixVQUFVO0FBVFo7O0FBWUEsd0JBQUE7O0FBRUE7RUFJRSxxQkFBcUI7RUFDckIsVUFBVTtFQUdWLG9CQUFvQjtFQUNwQixXQUFXO0VBSVgsdUJBQXVCO0FBYnpCOztBQUFBO0VBV0ksdUJBQXVCO0FBUDNCOztBQVlBO0VBSUUsbUJBQW1CO0VBQ25CLFVBQVU7QUFUWjs7QUFZQSx1QkFBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQVh2Qjs7QUFPQTtFQVNJLDRCQUE0QjtFQUk1Qiw2Q0FBNkM7RUFDN0MsVUFBVTtBQVZkOztBQWNBO0VBQ0UsNkNBQTZDO0VBRTdDLHFDQUFxQztBQVh2Qzs7QUFjQTtFQUNFO0lBQ0Usb0RBQW9EO0lBQ3BELFdBQVc7SUFDWCwyQ0FBMkM7RUFYN0M7RUFjQTtJQUNFLDhDQUE4QztJQUM5QyxVQUFVO0VBWlo7QUFDRjs7QUE4QkE7RUFDRTtJQUNFLDRDQUE0QztJQUM1QyxVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztFQWZwQztFQWtCQTtJQUNFLHNDQUFzQztJQUN0QyxVQUFVO0VBaEJaO0FBQ0Y7O0FBb0JBLHNDQUFBOztBQUVBO0VBSUksbUJBQW1CO0FBbkJ2Qjs7QUFlQTtFQVNJLDRCQUE0QjtFQUk1QiwwQ0FBMEM7RUFHMUMsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHViw2QkFBNkI7QUFsQmpDOztBQXNCQTtFQUlFLHVDQUF1QztFQUN2QyxVQUFVO0FBbkJaOztBQXNCQSx1Q0FBQTs7QUFFQTtFQUlJLG1CQUFtQjtBQXJCdkI7O0FBaUJBO0VBU0ksNEJBQTRCO0VBSTVCLDREQUE0RDtFQUc1RCx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLG9CQUFvQjtBQXBCeEI7O0FBd0JBO0VBSUUsdURBQXVEO0VBQ3ZELFVBQVU7QUFyQlo7O0FBd0JBLHFCQUFBOztBQUVBO0VBRUkseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQXZCckI7O0FBMkJBO0VBRUUsMEJBQTBCO0VBQzFCLFVBQVU7QUF4Qlo7O0FBMkJBO0VBRUUsb0JBQW9CO0FBeEJ0Qjs7QUEyQkE7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVTtBQXhCWjs7QUEyQkEsbUVBQUE7O0FBRUE7RUFFSSxZQUFZO0VBQ1osZ0JBQWdCO0VBR2hCLDBCQUEwQjtBQTFCOUI7O0FBOEJBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUdoQiwwQkFBMEI7QUEzQjVCOztBQThCQTtFQUdNLFlBQVk7QUE3QmxCOztBQTBCQTtFQU1NLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUE1QmhDOztBQXFCQTtFQVdJLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFFMUIseUJBQXlCO0VBRXpCLHdCQUF3QjtFQUV4Qiw0QkFBNEI7QUE1QmhDOztBQVVBO0VBc0JNLGFBQWE7QUE1Qm5COztBQU1BO0VBNEJNLHlCQUF5QjtFQUV6Qix3QkFBd0I7RUFFeEIsNEJBQTRCO0FBN0JsQzs7QUFrQ0E7RUFDRSxVQUFVO0VBRVYsMkJBQTJCO0FBL0I3Qjs7QUFrQ0E7RUFFRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUdWLHlCQUF5QjtBQS9CM0I7O0FBa0NBLCtEQUFBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQWhDbEI7O0FBbUNBO0VBRUUsb0JBQW9CO0FBaEN0Qjs7QUFtQ0E7RUFHTSxhQUFhO0FBbENuQjs7QUErQkE7RUFPSSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxnQ0FBZ0M7RUFDaEMsNkRBQTZEO0VBQzdELDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIscURBQXFEO0FBbEN6RDs7QUFvQkE7RUFrQk0sb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyw2REFBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixxREFBcUQ7QUFsQzNEOztBQXVDQTtFQUNFO0lBQ0Usa0RBQWtEO0lBQ2xELDJDQUEyQztFQXBDN0M7RUF1Q0E7SUFDRSxxQ0FBcUM7RUFyQ3ZDO0FBQ0Y7O0FBeUNBO0VBQ0U7SUFDRSwwQ0FBMEM7SUFDMUMsMkNBQW1DO1lBQW5DLG1DQUFtQztFQXRDckM7RUF5Q0E7SUFDRSw2QkFBNkI7RUF2Qy9CO0FBQ0Y7O0FBMkNBO0VBRUUsMkJBQTJCO0VBQzNCLFVBQVU7QUF4Q1o7O0FBMkNBO0VBR0ksd0JBQXdCO0VBQ3hCLFVBQVU7RUFFVix5QkFBeUI7QUF6QzdCOztBQW1DQTtFQVVNLFlBQVk7RUFDWixnQkFBZ0I7QUF6Q3RCOztBQThCQTtFQWdCTSxvQkFBb0I7QUF4QzFCOztBQTZDQSxtRUFBQTs7QUFFQTtFQUdNLGFBQWE7QUE3Q25COztBQTBDQTtFQU9JLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxnREFBZ0Q7RUFDaEQsaUNBQWlDO0VBQ2pDLCtCQUErQjtFQUMvQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQix3Q0FBd0M7QUE3QzVDOztBQTRCQTtFQXFCTSxvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLGdEQUFnRDtFQUNoRCxpQ0FBaUM7RUFDakMsK0JBQStCO0VBQy9CLDZDQUE2QztFQUM3Qyw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLHdDQUF3QztBQTdDOUM7O0FBa0RBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsMkNBQTJDO0VBL0M3QztBQUNGOztBQTJEQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLDJDQUFtQztZQUFuQyxtQ0FBbUM7RUFqRHJDO0FBQ0Y7O0FBcURBO0VBSUUsNEJBQTRCO0VBQzVCLFVBQVU7QUFsRFo7O0FBcURBO0VBSUUsd0JBQXdCO0VBQ3hCLFVBQVU7RUFHVix5QkFBeUI7QUFsRDNCOztBQXFEQTtFQUNFO0lBQ0UsY0FBYztFQWxEaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbi1tb2RhbC9hbmltYXRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWQtcGVyc3BlY3RpdmUge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1kLW1vZGFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWF4LXdpZHRoOiA2MzBweDtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxMDMwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU1KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdyB+IC5tZC1vdmVybGF5IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIENvbnRlbnQgc3R5bGVzICovXHJcblxyXG4ubWQtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAuNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICB9XHJcbiAgPiBkaXYge1xyXG4gICAgcGFkZGluZzogMTVweCA0MHB4IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICB9XHJcbiAgICB1bCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIEluZGl2aWR1YWwgbW9kYWwgc3R5bGVzIHdpdGggYW5pbWF0aW9ucy90cmFuc2l0aW9ucyAqL1xyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcblxyXG4ubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuXHJcbi5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcblxyXG4ubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA0OiBOZXdzcGFwZXIgKi9cclxuXHJcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoNzIwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IH4gLm1kLW92ZXJsYXksIC5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC01IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG5cclxuLm1kLWVmZmVjdC02IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG5cclxuLm1kLWVmZmVjdC03IHtcclxuICB0b3A6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuXHJcbi5tZC1lZmZlY3QtOCB7XHJcbiAgJi5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gIH1cclxuICAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcblxyXG4ubWQtZWZmZWN0LTkge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC05IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTAge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMTogU3VwZXIgc2NhbGVkICovXHJcblxyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgb3BhY2l0eTogMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGgzIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEzOiAzRCBzbGl0ICovXHJcblxyXG4ubWQtZWZmZWN0LTEzIHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxuICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaXQge1xyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogLjU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2xpdCB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBFZmZlY3QgMTQ6ICAzRCBSb3RhdGUgZnJvbSBib3R0b20gKi9cclxuXHJcbi5tZC1lZmZlY3QtMTQge1xyXG4gICYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICB9XHJcbiAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE0IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcblxyXG4ubWQtZWZmZWN0LTE1IHtcclxuICAmLm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgfVxyXG4gIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDAlKSByb3RhdGVZKDBkZWcpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNjogIEJsdXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTYgPiB7XHJcbiAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIGZpbHRlcjogYmx1cigzcHgpO1xyXG4gIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLCAubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG5cclxuYm9keS5tb2RhbC0xNyA+IHtcclxuICBuYXYsIHNlY3Rpb24sIC5tZC1vdmVybGF5IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICB9XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbmJvZHkubW9kYWwtMTcge1xyXG4gID4ge1xyXG4gICAgaGVhZGVyIHtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgfVxyXG4gICAgbmF2IHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICB9XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB7XHJcbiAgICBuYXYsIC5tZC1vdmVybGF5LCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTgge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuYm9keS5tb2RhbC0xOCB7XHJcbiAgPiB7XHJcbiAgICAuaGVhZGVyLWNoYXQsIC5oZWFkZXItdXNlci1saXN0IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA3MHB4KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgYW5pbWF0aW9uOiByb3RhdGVSaWdodFNpZGVGaXJzdCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgfVxyXG4gID4ge1xyXG4gICAgbmF2LCBoZWFkZXIsIHNlY3Rpb24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93IHtcclxuICAmLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIH1cclxuICAmLm1kLWVmZmVjdC0xOSB+IHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWQtb3ZlcmxheSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyogRWZmZWN0IDE5OiAgU2xpcCBpbiBmcm9tIHRoZSB0b3Agd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuXHJcbmJvZHkubW9kYWwtMTkge1xyXG4gID4ge1xyXG4gICAgLmhlYWRlci1jaGF0LCAuaGVhZGVyLXVzZXItbGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wY29kZWQtbWFpbi1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNzBweCk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICBhbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gIH1cclxuICA+IHtcclxuICAgIG5hdiwgaGVhZGVyLCBzZWN0aW9uIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcclxuICAgICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTBkZWcpO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5ALW1vei1rZXlmcmFtZXMgT3BlblRvcCB7XHJcbiAgNTAlIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMmVtKSB7XHJcbiAgYm9keSB7XHJcbiAgICBmb250LXNpemU6IDc1JTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "YSlq":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav ml-auto\">\n  <li>\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\n        <div class=\"noti-head\">\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\n          <div class=\"float-right\">\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\n            <a href=\"javascript:\">clear all</a>\n          </div>\n        </div>\n        <ul class=\"noti-body\">\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">NEW</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"/assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>New ticket Added</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">EARLIER</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"/assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"/assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>currently login</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"noti-footer\">\n          <a href=\"javascript:\">show all</a>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <i class=\"icon feather icon-user\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"pro-head\">\n          <img src=\"/assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          <span>John Doe</span>\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\">\n            <i class=\"feather icon-log-out\"></i>\n          </a>\n        </div>\n        <ul class=\"pro-body\">\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/shared/shared.module */ "ebz3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "h1mt");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "iv9w");
/* harmony import */ var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation.component */ "sqAq");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-content.component */ "E7Y8");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */ "aFrh");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "Ap1d");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */ "HRIB");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-bar.component */ "hiAX");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */ "calg");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */ "NvK5");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */ "aM2T");
/* harmony import */ var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/layout/admin/configuration/configuration.component */ "kSgv");
/* harmony import */ var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/shared/full-screen/toggle-full-screen */ "OF5i");
/* harmony import */ var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation */ "S8Sc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




















/* Menu Items */


let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
            _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
            _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
            _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"],
            _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"],
            _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"],
            _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"],
            _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"],
            _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"],
            _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_18__["ConfigurationComponent"],
            _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_19__["ToggleFullScreenDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbTabsetModule"]
        ],
        providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_20__["NavigationItem"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "ZhNB":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/spinner/spinner.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "ZtXS":
/*!******************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcclxuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICB0b3A6IDAgIWltcG9ydGFudDtcclxuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "a8xz":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "aFrh":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function() { return NavGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_group_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-group.component.html */ "Dp0H");
/* harmony import */ var _nav_group_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-group.component.scss */ "fncE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navigation */ "S8Sc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../app-config */ "K7hc");







let NavGroupComponent = class NavGroupComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_6__["NextConfig"].config;
    }
    ngOnInit() {
        // at reload time active and trigger link
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
NavGroupComponent.propDecorators = {
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    layout1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    activeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
NavGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-group',
        template: _raw_loader_nav_group_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_group_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], NavGroupComponent);



/***/ }),

/***/ "aM2T":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_right_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-right.component.html */ "YSlq");
/* harmony import */ var _nav_right_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-right.component.scss */ "vVwH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





let NavRightComponent = class NavRightComponent {
    constructor() { }
    ngOnInit() { }
};
NavRightComponent.ctorParameters = () => [];
NavRightComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-right',
        template: _raw_loader_nav_right_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]],
        styles: [_nav_right_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavRightComponent);



/***/ }),

/***/ "bZ/c":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav mr-auto\">\n  <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li>\n</ul>\n");

/***/ }),

/***/ "btuU":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AnimationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationModalComponent", function() { return AnimationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_animation_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./animation-modal.component.html */ "obKr");
/* harmony import */ var _animation_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animation-modal.component.scss */ "YIhi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AnimationModalComponent = class AnimationModalComponent {
    constructor() {
        this.backDrop = false;
    }
    close(event) {
        document.querySelector('#' + event).classList.remove('md-show');
    }
    ngOnInit() { }
};
AnimationModalComponent.ctorParameters = () => [];
AnimationModalComponent.propDecorators = {
    modalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    contentClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    modalID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    backDrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AnimationModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-animation-modal',
        template: _raw_loader_animation_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_animation_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AnimationModalComponent);



/***/ }),

/***/ "calg":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_left_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-left.component.html */ "bZ/c");
/* harmony import */ var _nav_left_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-left.component.scss */ "ipDc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavLeftComponent = class NavLeftComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavLeftComponent.ctorParameters = () => [];
NavLeftComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-left',
        template: _raw_loader_nav_left_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_left_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavLeftComponent);



/***/ }),

/***/ "ebz3":
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "7jS0");
/* harmony import */ var _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/data-table/data-filter.pipe */ "Jltz");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "bFKe");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-click-outside */ "T4ad");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "s2d5");
/* harmony import */ var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.component */ "q6ff");
/* harmony import */ var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.service */ "9OXH");











const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
            _components__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_7__["ClickOutsideModule"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__["ApexChartComponent"]
        ],
        declarations: [
            _components_data_table_data_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["DataFilterPipe"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_9__["ApexChartComponent"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_10__["ApexChartService"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "fncE":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "h1mt":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admin.component.html */ "hICc");
/* harmony import */ var _admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component.scss */ "xI0A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app-config */ "K7hc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let AdminComponent = class AdminComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        let currentURL = this.location.path();
        const baseHerf = this.location['_baseHref'];
        if (baseHerf) {
            currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if (currentURL === baseHerf + '/layout/collapse-menu'
            || currentURL === baseHerf + '/layout/box'
            || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
            this.nextConfig.collapseMenu = true;
        }
        this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
            }, 500);
        }
    }
    navMobClick() {
        if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(() => {
                    this.navCollapsedMob = !this.navCollapsedMob;
                }, 100);
            }
            else {
                this.navCollapsedMob = !this.navCollapsedMob;
            }
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
AdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: _raw_loader_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], AdminComponent);



/***/ }),

/***/ "hICc":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/admin.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <app-breadcrumb></app-breadcrumb>\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-configuration></app-configuration>\n");

/***/ }),

/***/ "hiAX":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "2U/g");
/* harmony import */ var _nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component.scss */ "Nq98");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-config */ "K7hc");





let NavBarComponent = class NavBarComponent {
    constructor() {
        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    toggleMobOption() {
        this.menuClass = !this.menuClass;
        this.collapseStyle = (this.menuClass) ? 'block' : 'none';
    }
    navCollapse() {
        if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
        }
        else {
            this.onNavHeaderMobCollapse.emit();
        }
    }
};
NavBarComponent.ctorParameters = () => [];
NavBarComponent.propDecorators = {
    onNavCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    onNavHeaderMobCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
NavBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav-bar',
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "ipDc":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "iv9w":
/*!*****************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.ts ***!
  \*****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "Empq");
/* harmony import */ var _auth_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component.scss */ "UrpS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AuthComponent);



/***/ }),

/***/ "kSgv":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./configuration.component.html */ "A2he");
/* harmony import */ var _configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.component.scss */ "tvpS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-config */ "K7hc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






let ConfigurationComponent = class ConfigurationComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.scroll = () => {
            if (this.headerFixedLayout === false) {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
                const el = document.querySelector('.pcoded-navbar.menupos-fixed');
                const scrollPosition = window.pageYOffset;
                if (scrollPosition > 60) {
                    el.style.position = 'fixed';
                    el.style.transition = 'none';
                    el.style.marginTop = '0';
                }
                else {
                    el.style.position = 'absolute';
                    el.style.marginTop = '60px';
                }
            }
            else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
        };
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.setThemeLayout();
    }
    ngOnInit() {
        this.styleSelectorToggle = false;
        this.layoutType = this.nextConfig.layoutType;
        this.setLayout(this.layoutType);
        this.headerBackgroundColor = this.nextConfig.headerBackColor;
        this.brandBackgroundColor = this.nextConfig.navBrandColor;
        this.setHeaderBackground(this.headerBackgroundColor);
        this.setBrandBackground(this.brandBackgroundColor);
        this.rtlLayout = this.nextConfig.rtlLayout;
        this.changeRtlLayout(this.rtlLayout);
        this.menuFixedLayout = this.nextConfig.navFixedLayout;
        if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
        }
        this.headerFixedLayout = this.nextConfig.headerFixedLayout;
        this.changeHeaderFixedLayout(this.headerFixedLayout);
        this.boxLayout = this.nextConfig.boxLayout;
        this.changeBoxLayout(this.boxLayout);
    }
    setThemeLayout() {
        let currentURL = this.location.path();
        const baseHref = this.location['_baseHref'];
        if (baseHref) {
            currentURL = baseHref + this.location.path();
        }
        switch (currentURL) {
            case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-default';
                break;
            case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'header-blue';
                break;
            case baseHref + '/layout/nav-color':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-info';
                this.nextConfig.navBrandColor = 'brand-info';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            default:
                break;
        }
    }
    setHeaderBackColor(color) {
        this.headerBackColor = color;
        document.querySelector('body').style.background = color;
    }
    // change main layout
    setLayout(layout) {
        this.isConfig = true;
        this.setBrandBackground(this.nextConfig.navBrandColor);
        document.querySelector('.pcoded-navbar').classList.remove('menu-light');
        document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
        document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
        document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
        document.querySelector('body').classList.remove('next-dark');
        this.layoutType = layout;
        if (layout === 'menu-light') {
            this.setBrandBackground(this.brandBackgroundColor);
            document.querySelector('.pcoded-navbar').classList.add(layout);
        }
        if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setBrandBackground('brand-blue');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('next-dark');
        }
        if (layout === 'reset') {
            this.reset();
        }
    }
    reset() {
        document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
        this.ngOnInit();
    }
    setRtlLayout(e) {
        const flag = !!(e.target.checked);
        this.changeRtlLayout(flag);
    }
    changeRtlLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('next-rtl');
        }
        else {
            document.querySelector('body').classList.remove('next-rtl');
        }
    }
    setMenuFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeMenuFixedLayout(flag);
    }
    changeMenuFixedLayout(flag) {
        setTimeout(() => {
            if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }
                if (this.nextConfig.layout === 'vertical') {
                    window.removeEventListener('scroll', this.scroll, true);
                }
            }
        }, 100);
    }
    setHeaderFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeHeaderFixedLayout(flag);
    }
    changeHeaderFixedLayout(flag) {
        if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
        }
        else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                window.removeEventListener('scroll', this.scroll, true);
            }
        }
    }
    setBoxLayout(e) {
        const flag = !!(e.target.checked);
        this.changeBoxLayout(flag);
    }
    changeBoxLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
        }
        else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
        }
    }
    setHeaderBackground(background) {
        this.headerBackgroundColor = background;
        this.nextConfig.headerBackColor = background;
        document.querySelector('.pcoded-header').classList.remove('header-blue');
        document.querySelector('.pcoded-header').classList.remove('header-red');
        document.querySelector('.pcoded-header').classList.remove('header-purple');
        document.querySelector('.pcoded-header').classList.remove('header-info');
        document.querySelector('.pcoded-header').classList.remove('header-dark');
        if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
        }
    }
    setBrandBackground(background) {
        this.brandBackgroundColor = background;
        this.nextConfig.navBrandColor = background;
        document.querySelector('.pcoded-header').classList.remove('brand-blue');
        document.querySelector('.pcoded-header').classList.remove('brand-red');
        document.querySelector('.pcoded-header').classList.remove('brand-purple');
        document.querySelector('.pcoded-header').classList.remove('brand-info');
        document.querySelector('.pcoded-header').classList.remove('brand-dark');
        document.querySelector('.pcoded-header').classList.remove('brand-default');
        document.querySelector('.pcoded-header').classList.add(background);
    }
};
ConfigurationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
ConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-configuration',
        template: _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_configuration_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
], ConfigurationComponent);



/***/ }),

/***/ "obKr":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/shared/components/modal/animation-modal/animation-modal.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>\n");

/***/ }),

/***/ "q6ff":
/*!**********************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_apex_chart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./apex-chart.component.html */ "0Tmn");
/* harmony import */ var _apex_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apex-chart.component.scss */ "ywXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apexcharts/dist/apexcharts.common.js */ "ujAs");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apex_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apex-chart.service */ "9OXH");






let ApexChartComponent = class ApexChartComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
    }
    ngOnInit() {
        setTimeout(() => {
            this.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector('#' + this.chartID), this.chartConfig);
            this.chart.render();
        });
        this.apexEvent.changeTimeRange.subscribe(() => {
            if (this.xAxis) {
                this.chart.updateOptions({
                    xaxis: this.xAxis
                });
            }
        });
        this.apexEvent.changeSeriesData.subscribe(() => {
            if (this.newData) {
                this.chart.updateSeries([{
                        data: this.newData
                    }]);
            }
        });
    }
};
ApexChartComponent.ctorParameters = () => [
    { type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_5__["ApexChartService"] }
];
ApexChartComponent.propDecorators = {
    chartID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    chartConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    xAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    newData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ApexChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-apex-chart',
        template: _raw_loader_apex_chart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_apex_chart_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_apex_chart_service__WEBPACK_IMPORTED_MODULE_5__["ApexChartService"]])
], ApexChartComponent);



/***/ }),

/***/ "s2d5":
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/components/spinner/spinner.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./spinner.component.html */ "ZhNB");
/* harmony import */ var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.component.scss */ "T0+U");
/* harmony import */ var _spinkit_css_sk_line_material_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "WuPV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spinkits */ "CKO6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_5__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_5__["Spinkit"].skLine;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] }
];
SpinnerComponent.propDecorators = {
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"], _spinkit_css_sk_line_material_scss__WEBPACK_IMPORTED_MODULE_3__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], Document])
], SpinnerComponent);



/***/ }),

/***/ "sIwa":
/*!***************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/modal.module.ts ***!
  \***************************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ "ujr+");
/* harmony import */ var _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animation-modal/animation-modal.component */ "btuU");





let ModalModule = class ModalModule {
};
ModalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]],
        exports: [_ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_3__["UiModalComponent"], _animation_modal_animation_modal_component__WEBPACK_IMPORTED_MODULE_4__["AnimationModalComponent"]]
    })
], ModalModule);



/***/ }),

/***/ "sqAq":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.component.html */ "7J/v");
/* harmony import */ var _navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.component.scss */ "ENTz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-config */ "K7hc");





let NavigationComponent = class NavigationComponent {
    constructor() {
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    navMobCollapse() {
        if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
        }
    }
};
NavigationComponent.ctorParameters = () => [];
NavigationComponent.propDecorators = {
    onNavMobCollapse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navigation',
        template: _raw_loader_navigation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navigation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "tvpS":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFBcEI7O0FBSUE7RUFHTSxtQ0FBa0M7QUFIeEM7O0FBQUE7Ozs7Ozs7RUFZTSxXQUFXO0FBRmpCIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XHJcbiAgLm5hdi1waWxscyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuYm9keS5uZXh0LWRhcmt7XHJcbiAgLm1lbnUtc3R5bGVye1xyXG4gICAgLnRhYi1jb250ZW50e1xyXG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xyXG4gICAgfVxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQsXHJcbiAgICBoNSxcclxuICAgIHAsXHJcbiAgICBoNntcclxuICAgICAgY29sb3I6ICMyMjI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "uUsi":
/*!********************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n\n.basic.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n\n.basic.fade.in {\n  opacity: 1;\n}\n\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n\n.basic.modal.fade .modal-dialog {\n  transition: all .3s ease-out;\n  transform: translate(0, -25%);\n}\n\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhlbWUvc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvdWktbW9kYWwvdWktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFBO0VBQ0EsaUNBQWlDO0VBQ2pDLFVBQVU7QUFBZDs7QUFaQTtFQWVJLFVBQVU7RUFHViwrQkFBK0I7QUFDbkM7O0FBbkJBO0VBb0JNLFVBQVU7QUFHaEI7O0FBdkJBO0VBNEJNLDBCQUEwQjtBQUVoQzs7QUE5QkE7RUFpQ00sNEJBQTRCO0VBSTVCLDZCQUE2QjtBQUduQzs7QUF4Q0E7RUF5Q0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBR2Y7O0FBOUNBO0VBOENJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUF5QjtFQUN6QixpQkFBaUI7QUFJckIiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC91aS1tb2RhbC91aS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYyB7XHJcbiAgJi5tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgJi5mYWRlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgICYuaW4ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLm1vZGFsLmZhZGUge1xyXG4gICAgJi5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwtZGlhbG9nIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ujr+":
/*!******************************************************************************!*\
  !*** ./src/app/theme/shared/components/modal/ui-modal/ui-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: UiModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModalComponent", function() { return UiModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ui_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ui-modal.component.html */ "+Vct");
/* harmony import */ var _ui_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-modal.component.scss */ "uUsi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UiModalComponent = class UiModalComponent {
    constructor() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.containerClick = true;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() {
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
        document.querySelector('body').classList.add('modal-open');
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        document.querySelector('body').classList.remove('modal-open');
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal') && this.containerClick === true) {
            this.hide();
        }
    }
};
UiModalComponent.ctorParameters = () => [];
UiModalComponent.propDecorators = {
    dialogClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hideHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    hideFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    containerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UiModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ui-modal',
        template: _raw_loader_ui_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_ui_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UiModalComponent);



/***/ }),

/***/ "vVwH":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "h1mt");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "iv9w");





const routes = [
    {
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard/analytics',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-dashboard-dashboard-module */ "demo-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./demo/dashboard/dashboard.module */ "GqJ7")).then(module => module.DashboardModule)
            },
            {
                path: 'layout',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-layout-layout-module */ "demo-pages-layout-layout-module").then(__webpack_require__.bind(null, /*! ./demo/pages/layout/layout.module */ "d3Dy")).then(module => module.LayoutModule)
            },
            {
                path: 'sample-page',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-sample-page-sample-page-module */ "demo-pages-sample-page-sample-page-module").then(__webpack_require__.bind(null, /*! ./demo/pages/sample-page/sample-page.module */ "LFRe")).then(module => module.SamplePageModule)
            }
        ]
    },
    {
        path: '',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-authentication-authentication-module */ "demo-pages-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./demo/pages/authentication/authentication.module */ "Qikc")).then(module => module.AuthenticationModule)
            },
            {
                path: 'maintenance',
                loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-maintenance-maintenance-module */ "demo-pages-maintenance-maintenance-module").then(__webpack_require__.bind(null, /*! ./demo/pages/maintenance/maintenance.module */ "l8Z8")).then(module => module.MaintenanceModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wSfS":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "wcvO":
/*!*************************************************************!*\
  !*** ./src/app/theme/shared/components/card/card.module.ts ***!
  \*************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "/n7v");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "SOMP");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);






let CardModule = class CardModule {
};
CardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]
        ],
        declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })
], CardModule);



/***/ }),

/***/ "wjSg":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-next\" ngClass=\"next-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n    <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\n      <i class=\"feather icon-sunset f-40\"></i>\n      <h6 class=\"mt-3\">Help?</h6>\n      <p>Please contact us on our email for need any support</p>\n      <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\n    </app-card>\n  </div>\n</perfect-scrollbar>\n\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n");

/***/ }),

/***/ "xI0A":
/*!*********************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ywXK":
/*!************************************************************************************!*\
  !*** ./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "z0HF":
/*!*************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.module.ts ***!
  \*************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "zG16");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })
], BreadcrumbModule);



/***/ }),

/***/ "zG16":
/*!****************************************************************************!*\
  !*** ./src/app/theme/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "CNih");
/* harmony import */ var _breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb.component.scss */ "a8xz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layout/admin/navigation/navigation */ "S8Sc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(route, nav, titleService) {
        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
    }
    ngOnInit() {
        let routerUrl;
        routerUrl = this.route.url;
        if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
        }
    }
    setBreadcrumb() {
        let routerUrl;
        this.route.events.subscribe((router) => {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
                this.breadcrumbList.length = 0;
                const activeLink = router.url;
                this.filterNavigation(activeLink);
            }
        });
    }
    filterNavigation(activeLink) {
        let result = [];
        let title = 'Welcome';
        this.navigation.forEach((a) => {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [
                    {
                        url: ('url' in a) ? a.url : false,
                        title: a.title,
                        breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                        type: a.type
                    }
                ];
                title = a.title;
            }
            else {
                if (a.type === 'group' && 'children' in a) {
                    a.children.forEach((b) => {
                        if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                            result = [
                                {
                                    url: ('url' in b) ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                    type: b.type
                                }
                            ];
                            title = b.title;
                        }
                        else {
                            if (b.type === 'collapse' && 'children' in b) {
                                b.children.forEach((c) => {
                                    if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                                        result = [
                                            {
                                                url: ('url' in b) ? b.url : false,
                                                title: b.title,
                                                breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                type: b.type
                                            },
                                            {
                                                url: ('url' in c) ? c.url : false,
                                                title: c.title,
                                                breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                type: c.type
                                            }
                                        ];
                                        title = c.title;
                                    }
                                    else {
                                        if (c.type === 'collapse' && 'children' in c) {
                                            c.children.forEach((d) => {
                                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                                    result = [
                                                        {
                                                            url: ('url' in b) ? b.url : false,
                                                            title: b.title,
                                                            breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                            type: b.type
                                                        },
                                                        {
                                                            url: ('url' in c) ? c.url : false,
                                                            title: c.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                            type: c.type
                                                        },
                                                        {
                                                            url: ('url' in d) ? d.url : false,
                                                            title: d.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                                                            type: d.type
                                                        }
                                                    ];
                                                    title = d.title;
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        this.navigationList = result;
        this.titleService.setTitle(title + ' | Next Angular 8+ Admin Template');
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] }
];
BreadcrumbComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BreadcrumbComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-breadcrumb',
        template: _raw_loader_breadcrumb_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_breadcrumb_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
], BreadcrumbComponent);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map