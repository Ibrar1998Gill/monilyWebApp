(self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_dashboard_dashboard_module_ts"],{

/***/ 4864:
/*!***********************************************************************!*\
  !*** ./src/app/components/apps/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardRoutingModule": function() { return /* binding */ dashboardRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 26350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.dashboardComponent
            }
        ]
    }
];
class dashboardRoutingModule {
}
dashboardRoutingModule.ɵfac = function dashboardRoutingModule_Factory(t) { return new (t || dashboardRoutingModule)(); };
dashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: dashboardRoutingModule });
dashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](dashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 26350:
/*!******************************************************************!*\
  !*** ./src/app/components/apps/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardComponent": function() { return /* binding */ dashboardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/universal.service */ 77537);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/firebase/auth.service */ 35873);
/* harmony import */ var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local.service */ 30652);
/* harmony import */ var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/helper.service */ 21785);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 46505);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-google-charts */ 46092);












const _c0 = ["chart"];
function dashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Profit And Loss");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "apx-chart", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "google-chart", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](65, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](82, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](83, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](91, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](92, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](100, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](101, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 15, ctx_r0.profitAndLoss + ctx_r0.expensesBar, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx_r0.bar.series)("chart", ctx_r0.bar.chart)("dataLabels", ctx_r0.bar.dataLabels)("plotOptions", ctx_r0.bar.plotOptions)("xaxis", ctx_r0.bar.xaxis)("colors", ctx_r0.bar.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](27, 18, ctx_r0.totalExpenses, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.pieChart3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.yearlyDataRevenue == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](46, 21, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](47, 24, ctx_r0.yearlyDataRevenue, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.quaterlyDataRevenue == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](55, 27, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](56, 30, ctx_r0.quaterlyDataRevenue, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.monthlyDataRevenue == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](64, 33, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](65, 36, ctx_r0.monthlyDataRevenue, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.yearlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](82, 39, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](83, 42, ctx_r0.yearlyDataPayments, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.quaterlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](91, 45, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](92, 48, ctx_r0.quaterlyDataPayments, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.monthlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](100, 51, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](101, 54, ctx_r0.monthlyDataPayments, "USD"));
} }
// import * as top10ExpensesFunc from '../../../../helpers/helper'
class dashboardComponent {
    constructor(cd, http, localService, helperService, toasterService) {
        this.cd = cd;
        this.http = http;
        this.localService = localService;
        this.helperService = helperService;
        this.toasterService = toasterService;
        this.secondary_color = localStorage.getItem("secondary_color") || "#f73164";
        this.primary_color = localStorage.getItem("primary_color") || "#5330ab";
        this.mutablePieData = {};
        this.profitAndLoss = 0;
        this.expensesBar = 0;
        this.pieArray = [["Task", "expenses"]];
        this.pieChart3 = {
            chartType: "PieChart",
            dataTable: this.pieArray,
            options: {
                width: "100%",
                height: 200,
                colors: [
                    "#f8d62b",
                    "#51bb25",
                    "#a927f9",
                    this.secondary_color,
                    this.primary_color,
                ],
                backgroundColor: "#FEF5ED",
            },
        };
        this.bar = {
            series: [
                {
                    name: "USD",
                    data: [this.profitAndLoss, this.expensesBar],
                },
            ],
            noData: {
                text: 'Loading...'
            },
            colors: [this.secondary_color],
            chart: {
                type: "bar",
                height: 185,
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: ["Income", "Expenses"],
            },
        };
    }
    redrawChart() {
        let ccComponent = this.pieChart3.component;
        //force a redraw
        ccComponent.draw();
    }
    ngOnInit() {
        this.observe();
        if (this.localService.getJsonValue("company") != null) {
            this.companyid = this.localService.getJsonValue("company");
        }
        if (this.companyid != null) {
            this.getExpenses();
            this.dashboardCharts();
            this.revenueGenerate();
            this.paymentGenerate();
        }
        else
            return;
    }
    // observing company selected or not
    observe() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__.UniversalService.companySelected.subscribe((res) => {
                if (res) {
                    this.companyid = this.localService.getJsonValue("company");
                    this.getExpenses();
                    this.dashboardCharts();
                    this.revenueGenerate();
                    this.paymentGenerate();
                }
                else
                    return;
            });
        });
    }
    getExpenses() {
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}`, true).subscribe((res) => {
            var _a;
            console.log('====================================');
            console.log(res, "res hai");
            console.log('====================================');
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map((v) => {
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Income") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.profitAndLoss = Math.round(v.Summary.ColData[1].value);
                            }
                        }
                    }
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Expenses") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.expensesBar = Math.round(v.Summary.ColData[1].value);
                            }
                        }
                    }
                });
                (_a = this.chart) === null || _a === void 0 ? void 0 : _a.updateSeries([
                    {
                        name: "USD",
                        data: [this.profitAndLoss, this.expensesBar],
                    },
                ]);
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            var _a, _b, _c;
            if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                    for (const key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                        this.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                    }
                }
            }
            console.log('====================================');
            console.log(err, "error hai");
            console.log('====================================');
        });
    }
    revenueGenerate() {
        this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from invoice startposition 1`, true).subscribe((res) => {
            let mutableData = [];
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.QueryResponse.Invoice.map((inv) => {
                    let txnDate = moment__WEBPACK_IMPORTED_MODULE_1__(inv.TxnDate).format("MM/DD/YYYY");
                    let dueDate = this.helperService.calculateDays(inv.DueDate);
                    mutableData.push({
                        Date: txnDate,
                        num: inv.DocNumber,
                        Customer: inv.CustomerRef.name,
                        Amount: inv.Balance,
                        TotalAmt: inv.TotalAmt,
                        Status: dueDate,
                        id: inv.Id,
                    });
                });
                this.monthlyDataRevenue =
                    this.helperService.getCurrentMonthExpenses(mutableData);
                this.yearlyDataRevenue = this.helperService.getYearlyExpenses(mutableData);
                const mutableQuarterly = this.helperService.getQuarterlyExpenses(mutableData);
                this.quaterlyDataRevenue = parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            var _a, _b, _c;
            if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                    for (const key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                        this.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                    }
                }
            }
            console.log(err);
        });
    }
    paymentGenerate() {
        this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from Bill startposition 1`, true).subscribe((res) => {
            let mutableData = [];
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.QueryResponse.Bill.map((bill) => {
                    let txnDate = new Date(bill.TxnDate).toLocaleString();
                    txnDate = txnDate.substring(0, txnDate.indexOf(","));
                    txnDate = this.helperService.formattedDate(bill.TxnDate);
                    const vendorName = bill.VendorRef.name;
                    const pastDue = this.helperService.calculateDays(bill.DueDate);
                    mutableData.push({
                        Date: txnDate,
                        Customer: vendorName,
                        Status: this.helperService.calculateDays(bill.DueDate),
                        pastDue,
                        Amount: bill.Balance,
                        TotalAmt: bill.TotalAmt,
                        id: bill.Id,
                    });
                });
                this.monthlyDataPayments =
                    this.helperService.getCurrentMonthExpenses(mutableData);
                this.yearlyDataPayments = this.helperService.getYearlyExpenses(mutableData);
                const mutableQuarterly = this.helperService.getQuarterlyExpenses(mutableData);
                this.quaterlyDataPayments = parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            var _a, _b, _c;
            if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                    for (const key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                        this.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                    }
                }
            }
            console.log(err);
        });
    }
    dashboardCharts() {
        this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from purchase startposition 1`, true).subscribe((res) => {
            var _a, _b;
            let ExpenseDate = [];
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.QueryResponse) === null || _b === void 0 ? void 0 : _b.Purchase.map(expense => {
                    ExpenseDate.push(expense);
                });
                let prices = [];
                ExpenseDate.map((expense) => {
                    let category = expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
                    if (this.mutablePieData[category]) {
                        this.mutablePieData[category] += parseFloat(expense.TotalAmt);
                    }
                    else {
                        this.mutablePieData[category] = parseFloat(expense.TotalAmt);
                    }
                });
                for (const key in this.mutablePieData) {
                    let val = Math.round(this.mutablePieData[key]);
                    this.pieArray.push([key, val]);
                    prices.push(val);
                }
                var sum = prices.reduce(function (a, b) {
                    return a + b;
                }, 0);
                this.totalExpenses = sum;
                this.redrawChart();
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            var _a, _b, _c;
            if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                    for (const key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                        this.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                    }
                }
            }
            console.log(err);
        });
    }
}
dashboardComponent.ɵfac = function dashboardComponent_Factory(t) { return new (t || dashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService)); };
dashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: dashboardComponent, selectors: [["app-dashboard"]], viewQuery: function dashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 3, consts: [[3, "title", "active_item"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-xl-6", "col-lg-6"], [1, "card", "o-hidden", "cstmCard"], [1, "bg-primary", "b-r-4", "card-body", "minHeight"], [1, "media", "static-top-widget"], [1, "media-body"], [1, "m-0"], [1, "d-flex", "align-items-center"], [1, "mb-0", "counter"], ["data-feather", "dollar-sign", 1, "icon-bg"], ["id", "basic-bar", 1, "mt-3"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors"], ["chart", ""], [1, "mt-3"], [3, "data"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget", "flex-column"], [1, "d-flex", "w-100"], [1, "media-body", "w-100"], [1, "row", "mt-3", "mb-3"], [1, "col-sm-6"]], template: function dashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, dashboardComponent_div_1_Template, 103, 57, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Dashboard")("active_item", "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.companyid != null);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.ChartComponent, ng2_google_charts__WEBPACK_IMPORTED_MODULE_11__.GoogleChartComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], styles: [".margin1[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n#basic-bar[_ngcontent-%COMP%] {\n  background-color: #FEF5ED !important;\n}\n\n.static-top-widget[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.minHeight[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0k7RUFDSSxlQUFBO0FBRVI7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4xe1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbiNiYXNpYy1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGNUVEICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0YXRpYy10b3Atd2lkZ2V0IHtcclxuICAgIC5tZWRpYS1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4ubWluSGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 26389:
/*!***************************************************************!*\
  !*** ./src/app/components/apps/dashboard/dashboard.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardModule": function() { return /* binding */ dashboardModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 46505);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 26350);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 4864);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-google-charts */ 46092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);











class dashboardModule {
}
dashboardModule.ɵfac = function dashboardModule_Factory(t) { return new (t || dashboardModule)(); };
dashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: dashboardModule });
dashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__.Ng2GoogleChartsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.dashboardRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](dashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.dashboardComponent], imports: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__.Ng2GoogleChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.dashboardRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_dashboard_dashboard_module_ts-es2015.js.map