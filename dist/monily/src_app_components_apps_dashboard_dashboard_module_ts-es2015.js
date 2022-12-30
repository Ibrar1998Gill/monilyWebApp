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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Profit And Loss / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Annually");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "apx-chart", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Expenses / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Annually");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "google-chart", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Revenue / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Annually");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](55, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](64, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](72, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](73, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Payments / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Annually");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](92, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](93, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](101, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](102, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](110, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](111, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](15, 15, ctx_r0.profitAndLoss + ctx_r0.expensesBar, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("series", ctx_r0.bar.series)("chart", ctx_r0.bar.chart)("dataLabels", ctx_r0.bar.dataLabels)("plotOptions", ctx_r0.bar.plotOptions)("xaxis", ctx_r0.bar.xaxis)("colors", ctx_r0.bar.colors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](33, 18, ctx_r0.totalExpenses, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("data", ctx_r0.pieChart3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.YearlyprofitAndLoss == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](54, 21, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](55, 24, ctx_r0.YearlyprofitAndLoss, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.QuaterlyprofitAndLoss == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 27, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](64, 30, ctx_r0.QuaterlyprofitAndLoss, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.MonthlyprofitAndLoss == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](72, 33, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](73, 36, ctx_r0.MonthlyprofitAndLoss, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.yearlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](92, 39, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](93, 42, ctx_r0.yearlyDataPayments, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.quaterlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](101, 45, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](102, 48, ctx_r0.quaterlyDataPayments, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.monthlyDataPayments == null ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](110, 51, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](111, 54, ctx_r0.monthlyDataPayments, "USD"));
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
        this.totalExpenses = 0;
        this.profitAndLoss = 0;
        this.otherIncome = 0;
        this.otherExpenses = 0;
        this.YearlyprofitAndLoss = 0;
        this.MonthlyprofitAndLoss = 0;
        this.QuaterlyprofitAndLoss = 0;
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
                    data: [this.profitAndLoss, this.otherIncome, this.expensesBar, this.otherIncome],
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
                style: {
                    color: "black"
                },
                formatter: function (val, opt) {
                    return "$" + (val === null || val === void 0 ? void 0 : val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }
            },
            xaxis: {
                categories: ["Income", "Other Income", "Expenses", "Other Expenses"],
            },
        };
        this.lastyear = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY');
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD');
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD');
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
            // this.dashboardCharts();
            // this.revenueGenerate();
            // this.paymentGenerate();
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
                    // this.dashboardCharts();
                    // this.revenueGenerate();
                    // this.paymentGenerate();
                }
                else
                    return;
            });
        });
    }
    getExpenses() {
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            var _a;
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map((v) => {
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Income") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.profitAndLoss = Math.round(v.Summary.ColData[1].value);
                            }
                        }
                        if (v.group == "OtherIncome") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.otherIncome = Math.round(v.Summary.ColData[1].value);
                            }
                        }
                        if (v.group == "OtherExpenses") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.otherExpenses = Math.round(v.Summary.ColData[1].value);
                            }
                        }
                        if (v.group == "Expenses") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.expensesBar = Math.round(v.Summary.ColData[1].value);
                            }
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty('Rows')) {
                                this.loopAppendRows(v, this.pieArray);
                            }
                        }
                    }
                });
                (_a = this.chart) === null || _a === void 0 ? void 0 : _a.updateSeries([
                    {
                        name: "USD",
                        data: [this.profitAndLoss, this.otherIncome, this.expensesBar, this.otherExpenses],
                    },
                ]);
                this.redrawChart();
                this.totalExpenses = this.expensesBar;
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
        }), err => {
            console.log(err);
        };
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Quarter&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map((v) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Income") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.YearlyprofitAndLoss = Math.round((_d = (_a = v === null || v === void 0 ? void 0 : v.Summary) === null || _a === void 0 ? void 0 : _a.ColData[((_c = (_b = v === null || v === void 0 ? void 0 : v.Summary) === null || _b === void 0 ? void 0 : _b.ColData) === null || _c === void 0 ? void 0 : _c.length) - 1]) === null || _d === void 0 ? void 0 : _d.value);
                                this.QuaterlyprofitAndLoss = Math.round((_h = (_e = v === null || v === void 0 ? void 0 : v.Summary) === null || _e === void 0 ? void 0 : _e.ColData[((_g = (_f = v === null || v === void 0 ? void 0 : v.Summary) === null || _f === void 0 ? void 0 : _f.ColData) === null || _g === void 0 ? void 0 : _g.length) - 2]) === null || _h === void 0 ? void 0 : _h.value);
                            }
                        }
                    }
                });
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }), err => {
            console.log(err);
        };
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Month&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map((v) => {
                    var _a, _b, _c, _d;
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Income") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                                this.MonthlyprofitAndLoss = (_d = (_a = v === null || v === void 0 ? void 0 : v.Summary) === null || _a === void 0 ? void 0 : _a.ColData[((_c = (_b = v === null || v === void 0 ? void 0 : v.Summary) === null || _b === void 0 ? void 0 : _b.ColData) === null || _c === void 0 ? void 0 : _c.length) - 2]) === null || _d === void 0 ? void 0 : _d.value;
                            }
                        }
                    }
                });
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }), err => {
            console.log(err);
        };
    }
    loopAppendRows(v, array) {
        var _a, _b;
        (_b = (_a = v === null || v === void 0 ? void 0 : v.Rows) === null || _a === void 0 ? void 0 : _a.Row) === null || _b === void 0 ? void 0 : _b.map((e) => {
            var _a, _b, _c, _d, _e, _f;
            if (e === null || e === void 0 ? void 0 : e.hasOwnProperty('ColData')) {
                array.push([((_a = e === null || e === void 0 ? void 0 : e.ColData[0]) === null || _a === void 0 ? void 0 : _a.value) ? (_b = e === null || e === void 0 ? void 0 : e.ColData[0]) === null || _b === void 0 ? void 0 : _b.value : null, Math.round(((_c = e === null || e === void 0 ? void 0 : e.ColData[1]) === null || _c === void 0 ? void 0 : _c.value) ? (_d = e === null || e === void 0 ? void 0 : e.ColData[1]) === null || _d === void 0 ? void 0 : _d.value : 0)]);
            }
            else {
                (_f = (_e = e === null || e === void 0 ? void 0 : e.Rows) === null || _e === void 0 ? void 0 : _e.Row) === null || _f === void 0 ? void 0 : _f.map((s) => {
                    this.loopAppendRows(s, array);
                });
            }
        });
    }
}
dashboardComponent.ɵfac = function dashboardComponent_Factory(t) { return new (t || dashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService)); };
dashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: dashboardComponent, selectors: [["app-dashboard"]], viewQuery: function dashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 3, consts: [[3, "title", "active_item"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-xl-6", "col-lg-6"], [1, "card", "o-hidden", "cstmCard"], [1, "bg-primary", "b-r-4", "card-body", "minHeight"], [1, "media", "static-top-widget"], [1, "media-body"], [1, "d-flex", "flex-wrap", "align-items-baseline"], [1, "m-0"], [1, "d-flex", "align-items-center"], [1, "mb-0", "counter"], ["data-feather", "dollar-sign", 1, "icon-bg"], ["id", "basic-bar", 1, "mt-3"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors"], ["chart", ""], [1, "mt-3"], [3, "data"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget", "flex-column"], [1, "d-flex", "w-100", "flex-wrap", "align-items-baseline"], [1, "media-body", "w-100"], [1, "row", "mt-3", "mb-3"], [1, "col-sm-6"]], template: function dashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, dashboardComponent_div_1_Template, 113, 57, "div", 1);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 46505);
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
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](dashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.dashboardComponent], imports: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__.Ng2GoogleChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.dashboardRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule] }); })();


/***/ }),

/***/ 21785:
/*!***************************************************!*\
  !*** ./src/app/shared/services/helper.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelperService": function() { return /* binding */ HelperService; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase/auth.service */ 35873);
/* harmony import */ var _local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.service */ 30652);




class HelperService {
    constructor(httpService, localService) {
        this.httpService = httpService;
        this.localService = localService;
        this.monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        this.authToken = this.localService.getJsonValue('authUser');
        // yearly quaterly monthly sepration
        this.getYearlyExpenses = expenses => {
            const yearlyExpenses = {};
            expenses.map(expense => {
                const currentYear = new Date().getFullYear();
                const year = new Date(expense.Date).getFullYear();
                if (year === currentYear) {
                    if (yearlyExpenses[year]) {
                        yearlyExpenses[year] += parseFloat(expense.Amount);
                    }
                    else {
                        yearlyExpenses[year] = parseFloat(expense.Amount);
                    }
                }
            });
            if (yearlyExpenses == null) {
                return 0;
            }
            else {
                return parseFloat(yearlyExpenses[new Date().getFullYear()]).toFixed(2);
            }
        };
        this.getQuarterlyExpenses = expenses => {
            const quarterlyExpenses = {};
            expenses.map(expense => {
                const month = new Date(expense.Date).getMonth();
                const year = new Date(expense.Date).getFullYear();
                const currentYear = new Date().getFullYear();
                if (year === currentYear) {
                    if (month <= 2) {
                        if (quarterlyExpenses['Q1']) {
                            quarterlyExpenses['Q1'] += parseFloat(expense.Amount);
                        }
                        else {
                            quarterlyExpenses['Q1'] = parseFloat(expense.Amount);
                        }
                    }
                    else if (month <= 5) {
                        if (quarterlyExpenses['Q2']) {
                            quarterlyExpenses['Q2'] += parseFloat(expense.Amount);
                        }
                        else {
                            quarterlyExpenses['Q2'] = parseFloat(expense.Amount);
                        }
                    }
                    else if (month <= 8) {
                        if (quarterlyExpenses['Q3']) {
                            quarterlyExpenses['Q3'] += parseFloat(expense.Amount);
                        }
                        else {
                            quarterlyExpenses['Q3'] = parseFloat(expense.Amount);
                        }
                    }
                    else {
                        if (quarterlyExpenses['Q4']) {
                            quarterlyExpenses['Q4'] += parseFloat(expense.Amount);
                        }
                        else {
                            quarterlyExpenses['Q4'] = parseFloat(expense.Amount);
                        }
                    }
                }
            });
            return quarterlyExpenses;
        };
        this.getCurrentMonthExpenses = expenses => {
            const currentMonthExpenses = {};
            expenses.map(expense => {
                var dateMomentObject = expense.Date;
                var dateObject = new Date(dateMomentObject);
                const month = dateObject.getMonth();
                const currentMonth = new Date().getMonth() + 1;
                if (month === currentMonth) {
                    if (currentMonthExpenses[month]) {
                        currentMonthExpenses[month] += parseFloat(expense.Amount);
                    }
                    else {
                        currentMonthExpenses[month] = parseFloat(expense.Amount);
                    }
                }
            });
            if (currentMonthExpenses == null) {
                return 0;
            }
            else
                return currentMonthExpenses[new Date().getMonth() - 1];
        };
        this.getMonthlyExpenses = (expenses, frontColor = '#006DFF', gradientColor = '#009FFF') => {
            let monthlyExpensesPaid = {}, monthlyExpensesUnpaid = {};
            expenses.map(expense => {
                const date = new Date(expense.Date);
                const month = date.getMonth();
                if (monthlyExpensesPaid[month]) {
                    monthlyExpensesPaid[month] +=
                        parseFloat(expense.TotalAmt) - parseFloat(expense.Amount);
                }
                else if (!monthlyExpensesPaid[month])
                    monthlyExpensesPaid[month] =
                        parseFloat(expense.TotalAmt) - parseFloat(expense.Amount);
                if (monthlyExpensesUnpaid[month]) {
                    monthlyExpensesUnpaid[month] += parseFloat(expense.Amount);
                }
                else
                    monthlyExpensesUnpaid[month] = parseFloat(expense.Amount);
            });
            // initialising the empty months with 0
            for (let i = 0; i < new Date().getMonth(); i++) {
                if (!monthlyExpensesPaid[i])
                    monthlyExpensesPaid[i] = 0;
                if (!monthlyExpensesUnpaid[i])
                    monthlyExpensesUnpaid[i] = 0;
            }
            // yahan se krna hai
            let chartData = [];
            Object.keys(monthlyExpensesPaid).map(month => {
                chartData.push({
                    value: monthlyExpensesPaid[month],
                    frontColor: "yellow",
                    gradientColor: "yellow",
                    label: this.monthNames[month],
                    spacing: 2,
                    labelWidth: 30,
                });
                chartData.push({
                    value: monthlyExpensesUnpaid[month],
                    frontColor: "orange",
                    gradientColor: "orange",
                });
            });
            return chartData;
        };
        // top 10
        this.top10ExpensesFunc = expenses => {
            return expenses
                .sort((a, b) => {
                const bAmt = parseFloat(b.Amount);
                const aAmt = parseFloat(a.Amount);
                return bAmt - aAmt;
            })
                .slice(0, 10);
        };
        // calculate days
        this.calculateDays = oldDate => {
            const time = new Date() - new Date(oldDate);
            return Math.floor(time / (1000 * 3600 * 24));
        };
        // format date
        this.formattedDate = date => {
            const dateMomentObject = moment__WEBPACK_IMPORTED_MODULE_0__(date, 'YYYY/MM/DD'); // 1st argument - string, 2nd argument - format
            const day = dateMomentObject.format('DD');
            const month = dateMomentObject.format('MM');
            const year = dateMomentObject.format('YYYY');
            return `${month}/${day}/${year}`;
        };
        // upload image
        this.uploadImage = (event, remarks) => {
            const file = event.target.files[0];
            if (file) {
                // this.fileName = file.name;
                const formData = new FormData();
                formData.append('user_id', this.authToken.userId);
                formData.append("file", file);
                this.httpService.uploadImage('uploadFile', formData).subscribe(res => {
                    console.log('====================================');
                    console.log(res);
                    console.log('====================================');
                }), err => {
                    console.log('====================================');
                    console.log(err);
                    console.log('====================================');
                };
                // const upload$ = this.http.post("/api/thumbnail-upload", formData);
                // upload$.subscribe();
            }
        };
        this.numberWithCommas = x => {
            if (!x)
                return x;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        };
    }
    formatMMDDYY(inputDate) {
        // var date = new Date(inputDate);
        const dd = inputDate.substring(8, inputDate.length);
        const mm = inputDate.substring(5, 7);
        const yyyy = inputDate.substring(0, 4);
        return `${mm}/${dd}/${yyyy}`;
    }
}
HelperService.ɵfac = function HelperService_Factory(t) { return new (t || HelperService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService)); };
HelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HelperService, factory: HelperService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_dashboard_dashboard_module_ts-es2015.js.map