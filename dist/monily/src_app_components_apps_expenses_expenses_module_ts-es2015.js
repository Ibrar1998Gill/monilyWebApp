(self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_expenses_expenses_module_ts"],{

/***/ 37429:
/*!*********************************************************************!*\
  !*** ./src/app/components/apps/expenses/expenses-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expensesRoutingModule": function() { return /* binding */ expensesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _expenses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses.component */ 64853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _expenses_component__WEBPACK_IMPORTED_MODULE_0__.expensesComponent
            }
        ]
    }
];
class expensesRoutingModule {
}
expensesRoutingModule.ɵfac = function expensesRoutingModule_Factory(t) { return new (t || expensesRoutingModule)(); };
expensesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: expensesRoutingModule });
expensesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](expensesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 64853:
/*!****************************************************************!*\
  !*** ./src/app/components/apps/expenses/expenses.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expensesComponent": function() { return /* binding */ expensesComponent; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/local.service */ 30652);
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/helper.service */ 21785);
/* harmony import */ var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/firebase/auth.service */ 35873);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 49344);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 82798);










function expensesComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Yearly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Quaterly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.yearlyExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 3, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 6, ctx_r1.yearlyExpenses, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.quarterlyExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 9, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](21, 12, ctx_r1.quarterlyExpenses, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentMonthExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](29, 15, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](30, 18, ctx_r1.currentMonthExpenses, "USD"));
} }
function expensesComponent_ng_template_11_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top10Transaction_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((top10Transaction_r5[0] == null ? null : top10Transaction_r5[0].value) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 8, top10Transaction_r5[0] == null ? null : top10Transaction_r5[0].value, "dd/MM/yyyy") : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", top10Transaction_r5[4] == null ? null : top10Transaction_r5[4].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((top10Transaction_r5[4] == null ? null : top10Transaction_r5[4].value) ? top10Transaction_r5[4] == null ? null : top10Transaction_r5[4].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", top10Transaction_r5[6] == null ? null : top10Transaction_r5[6].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((top10Transaction_r5[6] == null ? null : top10Transaction_r5[6].value) ? top10Transaction_r5[6] == null ? null : top10Transaction_r5[6].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((top10Transaction_r5[7] == null ? null : top10Transaction_r5[7].value) ? top10Transaction_r5[7] == null ? null : top10Transaction_r5[7].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((top10Transaction_r5[9] == null ? null : top10Transaction_r5[9].value) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 11, ctx_r4.formatMinus(top10Transaction_r5[9] == null ? null : top10Transaction_r5[9].value), "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 14, 0, "USD"));
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 10, currentPage: a1, totalItems: a2 }; };
function expensesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Memo/Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, expensesComponent_ng_template_11_tr_18_Template, 21, 17, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "pagination-controls", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function expensesComponent_ng_template_11_Template_pagination_controls_pageChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.top10TransactionPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 1, ctx_r2.top10Transactions, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, ctx_r2.top10TransactionPage, ctx_r2.total)));
} }
function expensesComponent_ng_template_13_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recentTransaction_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((recentTransaction_r10[0] == null ? null : recentTransaction_r10[0].value) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](6, 8, recentTransaction_r10[0] == null ? null : recentTransaction_r10[0].value, "dd/MM/yyyy") : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", recentTransaction_r10[4] == null ? null : recentTransaction_r10[4].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((recentTransaction_r10[4] == null ? null : recentTransaction_r10[4].value) ? recentTransaction_r10[4] == null ? null : recentTransaction_r10[4].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", recentTransaction_r10[6] == null ? null : recentTransaction_r10[6].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((recentTransaction_r10[6] == null ? null : recentTransaction_r10[6].value) ? recentTransaction_r10[6] == null ? null : recentTransaction_r10[6].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((recentTransaction_r10[7] == null ? null : recentTransaction_r10[7].value) ? recentTransaction_r10[7] == null ? null : recentTransaction_r10[7].value : "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((recentTransaction_r10[9] == null ? null : recentTransaction_r10[9].value) ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 11, ctx_r9.formatMinus(recentTransaction_r10[9] == null ? null : recentTransaction_r10[9].value), "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](20, 14, 0, "USD"));
} }
function expensesComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Memo/Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, expensesComponent_ng_template_13_tr_18_Template, 21, 17, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "pagination-controls", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function expensesComponent_ng_template_13_Template_pagination_controls_pageChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.recentPage = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](19, 1, ctx_r3.recentTransactions, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, ctx_r3.recentPage, ctx_r3.total)));
} }
class expensesComponent {
    constructor(localService, helperService, http, toasterService) {
        this.localService = localService;
        this.helperService = helperService;
        this.http = http;
        this.toasterService = toasterService;
        this.secondary_color = localStorage.getItem("secondary_color") || "#f73164";
        this.primary_color = localStorage.getItem("primary_color") || "#5330ab";
        this.page = 1;
        this.totalPage = [];
        this.mutableData = [];
        this.mutablePieData = {};
        this.pieArray = [["Task", "expenses"]];
        this.recentTransactions = [];
        this.top10Transactions = [];
        this.lastyear = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY');
        this.startDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD');
        this.lastMonthStartDate = moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "month").format('YYYY-MM-DD');
        this.endDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        this.pieChart3 = {
            chartType: "PieChart",
            dataTable: this.pieArray,
            options: {
                width: "100%",
                height: 300,
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
    }
    ngOnInit() {
        this.companyid = this.localService.getJsonValue("company");
        this.mutableData = [];
        this.getExpenses();
        console.log(moment__WEBPACK_IMPORTED_MODULE_0__().subtract(1, "month").format('YYYY-MM-DD'));
    }
    getExpenses() {
        // by columns
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Quarter&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            // let ExpenseDate = []
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows) === null || _b === void 0 ? void 0 : _b.Row) ? (_e = (_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.Rows) === null || _d === void 0 ? void 0 : _d.Row) === null || _e === void 0 ? void 0 : _e.map(e => {
                    var _a, _b, _c, _d, _e, _f;
                    if ((e === null || e === void 0 ? void 0 : e.group) == 'Expenses') {
                        this.yearlyExpenses = (_c = (_a = e === null || e === void 0 ? void 0 : e.Summary) === null || _a === void 0 ? void 0 : _a.ColData[((_b = e === null || e === void 0 ? void 0 : e.Summary) === null || _b === void 0 ? void 0 : _b.ColData.length) - 1]) === null || _c === void 0 ? void 0 : _c.value;
                        this.quarterlyExpenses = (_f = (_d = e === null || e === void 0 ? void 0 : e.Summary) === null || _d === void 0 ? void 0 : _d.ColData[((_e = e === null || e === void 0 ? void 0 : e.Summary) === null || _e === void 0 ? void 0 : _e.ColData.length) - 2]) === null || _f === void 0 ? void 0 : _f.value;
                    }
                }) : null;
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            console.log('====================================');
            console.log(err, "error hai");
            console.log('====================================');
        });
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Month&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            var _a, _b, _c, _d, _e;
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                ((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows) === null || _b === void 0 ? void 0 : _b.Row) ? (_e = (_d = (_c = res === null || res === void 0 ? void 0 : res.data) === null || _c === void 0 ? void 0 : _c.Rows) === null || _d === void 0 ? void 0 : _d.Row) === null || _e === void 0 ? void 0 : _e.map(e => {
                    var _a, _b, _c;
                    if ((e === null || e === void 0 ? void 0 : e.group) == 'Expenses') {
                        console.log(e);
                        this.currentMonthExpenses = (_c = (_a = e === null || e === void 0 ? void 0 : e.Summary) === null || _a === void 0 ? void 0 : _a.ColData[((_b = e === null || e === void 0 ? void 0 : e.Summary) === null || _b === void 0 ? void 0 : _b.ColData.length) - 2]) === null || _c === void 0 ? void 0 : _c.value;
                    }
                }) : null;
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }, err => {
            console.log('====================================');
            console.log(err, "error hai");
            console.log('====================================');
        });
        // annual data
        this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map((v) => {
                    if (v.hasOwnProperty("group")) {
                        if (v.group == "Expenses") {
                            if (v === null || v === void 0 ? void 0 : v.hasOwnProperty('Rows')) {
                                this.rowsPush(v, this.pieArray);
                            }
                        }
                    }
                });
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
            console.log(err, "error hai");
        });
        // recent transactions
        this.http.getMonilyData(`report?entity=TransactionList&id=${this.companyid.id}&start_date=${this.lastMonthStartDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res) => {
            var _a, _b, _c;
            if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_c = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows) === null || _b === void 0 ? void 0 : _b.Row.reverse()) === null || _c === void 0 ? void 0 : _c.map(e => {
                    var _a, _b;
                    if ((e === null || e === void 0 ? void 0 : e.ColData[((_a = e === null || e === void 0 ? void 0 : e.ColData) === null || _a === void 0 ? void 0 : _a.length) - 1].value) != '' && (e === null || e === void 0 ? void 0 : e.ColData[((_b = e === null || e === void 0 ? void 0 : e.ColData) === null || _b === void 0 ? void 0 : _b.length) - 1].value) < 0) {
                        this.recentTransactions.push(e === null || e === void 0 ? void 0 : e.ColData);
                    }
                    else {
                        return;
                    }
                });
            }
            else {
                this.toasterService.error("No data found, please try again after few minutes");
            }
        }), err => {
            console.log(err);
        };
        // top 10 transactions
        this.http.getMonilyData(`report?entity=TransactionList&id=${this.companyid.id}&transaction_type=bill`, true).subscribe((res) => {
            var _a;
            let mutableData = [];
            (_a = res.data.Rows.Row) === null || _a === void 0 ? void 0 : _a.map(e => {
                var _a, _b, _c;
                if ((e === null || e === void 0 ? void 0 : e.ColData[((_a = e === null || e === void 0 ? void 0 : e.ColData) === null || _a === void 0 ? void 0 : _a.length) - 1].value) != '' && (e === null || e === void 0 ? void 0 : e.ColData[((_b = e === null || e === void 0 ? void 0 : e.ColData) === null || _b === void 0 ? void 0 : _b.length) - 1].value) < 0) {
                    (_c = this.top10Transactions) === null || _c === void 0 ? void 0 : _c.push(e === null || e === void 0 ? void 0 : e.ColData);
                }
            });
            const transactions = this.top10Transactions.sort(function (a, b) {
                var _a, _b;
                let start = (_a = b === null || b === void 0 ? void 0 : b[(b === null || b === void 0 ? void 0 : b.length) - 1]) === null || _a === void 0 ? void 0 : _a.value;
                let end = (_b = a === null || a === void 0 ? void 0 : a[(b === null || b === void 0 ? void 0 : b.length) - 1]) === null || _b === void 0 ? void 0 : _b.value;
                return end - start;
            });
            this.top10Transactions = transactions.slice(0, 10);
        });
        this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from Bill startposition 1`, true).subscribe(res => {
            console.log(res, 'queryres');
        }), err => {
            console.log(err, 'queryerr');
        };
    }
    redrawChart() {
        let ccComponent = this.pieChart3.component;
        //force a redraw
        ccComponent.draw();
    }
    rowsPush(v, array) {
        var _a, _b;
        (_b = (_a = v === null || v === void 0 ? void 0 : v.Rows) === null || _a === void 0 ? void 0 : _a.Row) === null || _b === void 0 ? void 0 : _b.map((e, i) => {
            var _a, _b, _c, _d;
            if (e === null || e === void 0 ? void 0 : e.hasOwnProperty('ColData')) {
                return array.push([(_a = e === null || e === void 0 ? void 0 : e.ColData[0]) === null || _a === void 0 ? void 0 : _a.value, Math.round((_b = e === null || e === void 0 ? void 0 : e.ColData[1]) === null || _b === void 0 ? void 0 : _b.value)]);
            }
            else {
                (_d = (_c = e === null || e === void 0 ? void 0 : e.Rows) === null || _c === void 0 ? void 0 : _c.Row) === null || _d === void 0 ? void 0 : _d.map((s, i) => {
                    this.rowsPush(s, array);
                });
            }
        });
    }
    findRows(v, val) {
        var _a, _b;
        let func = [];
        if (v === null || v === void 0 ? void 0 : v.hasOwnProperty('Rows')) {
            (_b = (_a = v === null || v === void 0 ? void 0 : v.Rows) === null || _a === void 0 ? void 0 : _a.Row) === null || _b === void 0 ? void 0 : _b.map((e, i) => {
                var _a, _b;
                if (e === null || e === void 0 ? void 0 : e.hasOwnProperty('group')) {
                    if ((e === null || e === void 0 ? void 0 : e.group) == val) {
                        (_b = (_a = e === null || e === void 0 ? void 0 : e.Rows) === null || _a === void 0 ? void 0 : _a.Row) === null || _b === void 0 ? void 0 : _b.map(s => {
                            this.top10Transactions.push(s === null || s === void 0 ? void 0 : s.ColData);
                        });
                    }
                    else {
                        this.findRows(e, val);
                    }
                }
                // else this.findRows(e, val)
            });
        }
    }
    formatMinus(value) {
        return value.replace(/-/g, '');
    }
}
expensesComponent.ɵfac = function expensesComponent_Factory(t) { return new (t || expensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_2__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService)); };
expensesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: expensesComponent, selectors: [["app-expenses"]], decls: 14, vars: 3, consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "default-accordion"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Expenses", "id", "static-1"], ["ngbPanelContent", ""], ["title", "Top 10 Transactions", "id", "static-7"], ["title", "Recent Transactions", "id", "static-6"], [1, "card", "o-hidden", "cstmCard"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget", "flex-column"], [1, "media-body", "w-100"], [1, "row", "mt-3", "mb-3"], [1, "col-sm-6"], [1, "m-0"], [1, "mb-0", "counter"], ["data-feather", "dollar-sign", 1, "icon-bg"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "pageChange"], ["scope", "row"], [3, "ngbTooltip"], [1, "descriptionCol", 3, "ngbTooltip"]], template: function expensesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ngb-accordion", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ngb-panel", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, expensesComponent_ng_template_9_Template, 32, 21, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ngb-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, expensesComponent_ng_template_11_Template, 21, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ngb-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, expensesComponent_ng_template_13_Template, 21, 7, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Expenses")("active_item", "Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("closeOthers", true);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".margin1[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n#basic-bar[_ngcontent-%COMP%] {\n  background-color: #FEF5ED !important;\n}\n\n.static-top-widget[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.minHeight[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n\n.descriptionCol[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksb0NBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7QUFFUjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKIiwiZmlsZSI6ImV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbjF7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbn1cclxuI2Jhc2ljLWJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUY1RUQgIWltcG9ydGFudDtcclxufVxyXG4uc3RhdGljLXRvcC13aWRnZXQge1xyXG4gICAgLm1lZGlhLWJvZHl7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbi5taW5IZWlnaHR7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxufVxyXG4uZGVzY3JpcHRpb25Db2x7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59Il19 */"] });


/***/ }),

/***/ 17045:
/*!*************************************************************!*\
  !*** ./src/app/components/apps/expenses/expenses.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expensesModule": function() { return /* binding */ expensesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _expenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses.component */ 64853);
/* harmony import */ var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses-routing.module */ 37429);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 38550);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ 46092);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 82798);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 46505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);












class expensesModule {
}
expensesModule.ɵfac = function expensesModule_Factory(t) { return new (t || expensesModule)(); };
expensesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: expensesModule });
expensesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__.expensesRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__.Ng2GoogleChartsModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](expensesModule, { declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_1__.expensesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__.expensesRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__.Ng2GoogleChartsModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_expenses_expenses_module_ts-es2015.js.map