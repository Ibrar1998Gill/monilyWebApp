(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_expenses_expenses_module_ts"], {
    /***/37429:
    /*!*********************************************************************!*\
      !*** ./src/app/components/apps/expenses/expenses-routing.module.ts ***!
      \*********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"expensesRoutingModule": function expensesRoutingModule() {
          return (/* binding */_expensesRoutingModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _expenses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./expenses.component */64853);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _expenses_component__WEBPACK_IMPORTED_MODULE_0__.expensesComponent
        }]
      }];
      var _expensesRoutingModule = /*#__PURE__*/_createClass(function _expensesRoutingModule() {
        _classCallCheck(this, _expensesRoutingModule);
      });
      _expensesRoutingModule.ɵfac = function expensesRoutingModule_Factory(t) {
        return new (t || _expensesRoutingModule)();
      };
      _expensesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _expensesRoutingModule
      });
      _expensesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_expensesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();

      /***/
    },

    /***/64853:
    /*!****************************************************************!*\
      !*** ./src/app/components/apps/expenses/expenses.component.ts ***!
      \****************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"expensesComponent": function expensesComponent() {
          return (/* binding */_expensesComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/services/helper.service */21785);
      /* harmony import */
      var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/services/firebase/auth.service */35873);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../shared/components/breadcrumb/breadcrumb.component */41299);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ng2-google-charts */46092);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-pagination */82798);
      function expensesComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Yearly");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Quaterly");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Monthly");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.yearlyExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 3, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 6, ctx_r1.yearlyExpenses, "USD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.quarterlyExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 9, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 12, ctx_r1.quarterlyExpenses, "USD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.currentMonthExpenses == null ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](29, 15, 0, "USD") : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](30, 18, ctx_r1.currentMonthExpenses, "USD"));
        }
      }
      function expensesComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "google-chart", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r2.pieChart3);
        }
      }
      function expensesComponent_ng_template_13_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var transaction_r6 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r6.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", transaction_r6.Payee ? transaction_r6.Payee : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r6.Category ? transaction_r6.Category : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, transaction_r6.Amount, "USD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r6.Date ? transaction_r6.Date : "N/A");
        }
      }
      var _c0 = function _c0(a1, a2) {
        return {
          itemsPerPage: 5,
          currentPage: a1,
          totalItems: a2
        };
      };
      function expensesComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "thead");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Payee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, expensesComponent_ng_template_13_tr_16_Template, 12, 8, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "pagination-controls", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function expensesComponent_ng_template_13_Template_pagination_controls_pageChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
            return ctx_r7.top10Page = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 1, ctx_r3.top10Expenses, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, ctx_r3.top10Page, ctx_r3.total)));
        }
      }
      function expensesComponent_ng_template_15_tr_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "th", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var transaction_r10 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r10.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", transaction_r10.Payee ? transaction_r10.Payee : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r10.Category ? transaction_r10.Category : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 5, transaction_r10.Amount, "USD"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](transaction_r10.Date ? transaction_r10.Date : "N/A");
        }
      }
      function expensesComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "thead");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Payee");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, expensesComponent_ng_template_15_tr_16_Template, 12, 8, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "pagination-controls", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function expensesComponent_ng_template_15_Template_pagination_controls_pageChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
            return ctx_r11.recentPage = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 1, ctx_r4.RecentTranSort, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, ctx_r4.recentPage, ctx_r4.total)));
        }
      }
      var _expensesComponent = /*#__PURE__*/function () {
        function _expensesComponent(localService, helperService, http, toasterService) {
          _classCallCheck(this, _expensesComponent);
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
          this.pieChart3 = {
            chartType: "PieChart",
            dataTable: this.pieArray,
            options: {
              width: "100%",
              height: 300,
              colors: ["#f8d62b", "#51bb25", "#a927f9", this.secondary_color, this.primary_color],
              backgroundColor: "#FEF5ED"
            }
          };
        }
        _createClass(_expensesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyid = this.localService.getJsonValue("company");
            this.mutableData = [];
            if (this.companyid != null) {
              this.revenueGenerate();
            } else return;
            this.getExpenses();
          }
        }, {
          key: "getExpenses",
          value: function getExpenses() {
            var _this = this;
            this.http.getMonilyData("query?id=".concat(this.companyid.id, "&_query=select * from purchase startposition 1"), true).subscribe(function (res) {
              var _a, _b;
              var ExpenseDate = [];
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.QueryResponse) === null || _b === void 0 ? void 0 : _b.Purchase.map(function (expense) {
                  ExpenseDate.push(expense);
                });
                var prices = [];
                ExpenseDate.map(function (expense) {
                  var memo = expense.PrivateNote;
                  var txnDate = expense.TxnDate;
                  var payee = expense.EntityRef ? expense.EntityRef.name : "";
                  var category = expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
                  _this.mutableData.push({
                    Date: txnDate,
                    Payee: payee,
                    Category: category,
                    Memo: memo,
                    Amount: expense.TotalAmt,
                    id: expense.Id
                  });
                  if (_this.mutablePieData[category]) {
                    _this.mutablePieData[category] += parseFloat(expense.TotalAmt);
                  } else {
                    _this.mutablePieData[category] = parseFloat(expense.TotalAmt);
                  }
                });
                for (var key in _this.mutablePieData) {
                  var val = Math.round(_this.mutablePieData[key]);
                  _this.pieArray.push([key, val]);
                  prices.push(val);
                }
                var sum = prices.reduce(function (a, b) {
                  return a + b;
                }, 0);
                _this.totalExpenses = sum;
                var sortedDesc = _this.mutableData.sort(function (a, b) {
                  return new Date(b.Date) - new Date(a.Date);
                });
                _this.RecentTranSort = sortedDesc.slice(0, 10);
                _this.top10Expenses = _this.helperService.top10ExpensesFunc(_this.mutableData);
                _this.yearlyExpenses = _this.helperService.getYearlyExpenses(_this.mutableData);
                var mutableQuarterly = _this.helperService.getQuarterlyExpenses(_this.mutableData);
                _this.quarterlyExpenses = parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
                _this.currentMonthExpenses = _this.helperService.getCurrentMonthExpenses(_this.mutableData);
                _this.RecentTransaction = _this.mutableData.slice(0, 10);
                console.log(_this.RecentTranSort, _this.top10Expenses);
              } else {
                _this.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              console.log('====================================');
              console.log(err, "error hai");
              console.log('====================================');
            });
          }
        }, {
          key: "revenueGenerate",
          value: function revenueGenerate() {
            // this.getExpenses()
          }
        }]);
        return _expensesComponent;
      }();
      _expensesComponent.ɵfac = function expensesComponent_Factory(t) {
        return new (t || _expensesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
      };
      _expensesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _expensesComponent,
        selectors: [["app-expenses"]],
        decls: 16,
        vars: 3,
        consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "default-accordion"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Expenses", "id", "static-1"], ["ngbPanelContent", ""], ["title", "Biggest Expense Heads", "id", "static-2"], ["title", "Top 10 Transactions", "id", "static-3"], ["title", "Recent Transactions", "id", "static-4"], [1, "card", "o-hidden", "cstmCard"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget", "flex-column"], [1, "media-body", "w-100"], [1, "row", "mt-3", "mb-3"], [1, "col-sm-6"], [1, "m-0"], [1, "mb-0", "counter"], ["data-feather", "dollar-sign", 1, "icon-bg"], [1, "bg-primary", "b-r-4", "card-body", "minHeight"], [1, "media", "static-top-widget"], [1, "media-body"], [1, "mt-3"], [3, "data"], [1, "col-sm-12"], [1, "table-responsive"], [1, "table", "table-hover"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "pageChange"], ["scope", "row"]],
        template: function expensesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-breadcrumb", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ngb-accordion", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, expensesComponent_ng_template_9_Template, 32, 21, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ngb-panel", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, expensesComponent_ng_template_11_Template, 7, 1, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, expensesComponent_ng_template_13_Template, 19, 7, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ngb-panel", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, expensesComponent_ng_template_15_Template, 19, 7, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Expenses")("active_item", "Expenses");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOthers", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbPanelContent, ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__.GoogleChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe],
        styles: [".margin1[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n#basic-bar[_ngcontent-%COMP%] {\n  background-color: #FEF5ED !important;\n}\n\n.static-top-widget[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.minHeight[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVuc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksb0NBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7QUFFUjs7QUFDQTtFQUNJLGlCQUFBO0FBRUoiLCJmaWxlIjoiZXhwZW5zZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luMXtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4jYmFzaWMtYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjVFRCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdGF0aWMtdG9wLXdpZGdldCB7XHJcbiAgICAubWVkaWEtYm9keXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuLm1pbkhlaWdodHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG59Il19 */"]
      });

      /***/
    },

    /***/17045:
    /*!*************************************************************!*\
      !*** ./src/app/components/apps/expenses/expenses.module.ts ***!
      \*************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"expensesModule": function expensesModule() {
          return (/* binding */_expensesModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ckeditor/ckeditor5-angular */22723);
      /* harmony import */
      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ng-select/ng-select */86640);
      /* harmony import */
      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-dropzone */30753);
      /* harmony import */
      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../shared/shared.module */44466);
      /* harmony import */
      var _expenses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./expenses.component */64853);
      /* harmony import */
      var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./expenses-routing.module */37429);
      /* harmony import */
      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @swimlane/ngx-datatable */38550);
      /* harmony import */
      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ng2-google-charts */46092);
      /* harmony import */
      var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-pagination */82798);
      /* harmony import */
      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ng-apexcharts */46505);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      var _expensesModule = /*#__PURE__*/_createClass(function _expensesModule() {
        _classCallCheck(this, _expensesModule);
      });
      _expensesModule.ɵfac = function expensesModule_Factory(t) {
        return new (t || _expensesModule)();
      };
      _expensesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _expensesModule
      });
      _expensesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__.expensesRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__.Ng2GoogleChartsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.NgxDatatableModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_expensesModule, {
          declarations: [_expenses_component__WEBPACK_IMPORTED_MODULE_1__.expensesComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__.expensesRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_9__.Ng2GoogleChartsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__.NgxDatatableModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.NgxPaginationModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_12__.NgApexchartsModule]
        });
      })();

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_expenses_expenses_module_ts-es5.js.map