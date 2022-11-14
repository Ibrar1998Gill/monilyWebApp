(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_financial_financial_module_ts"], {
    /***/76291:
    /*!***********************************************************************!*\
      !*** ./src/app/components/apps/financial/financial-routing.module.ts ***!
      \***********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"financialRoutingModule": function financialRoutingModule() {
          return (/* binding */_financialRoutingModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _financial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./financial.component */2515);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _financial_component__WEBPACK_IMPORTED_MODULE_0__.financialComponent
        }]
      }];
      var _financialRoutingModule = /*#__PURE__*/_createClass(function _financialRoutingModule() {
        _classCallCheck(this, _financialRoutingModule);
      });
      _financialRoutingModule.ɵfac = function financialRoutingModule_Factory(t) {
        return new (t || _financialRoutingModule)();
      };
      _financialRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _financialRoutingModule
      });
      _financialRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_financialRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();

      /***/
    },

    /***/2515:
    /*!******************************************************************!*\
      !*** ./src/app/components/apps/financial/financial.component.ts ***!
      \******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"financialComponent": function financialComponent() {
          return (/* binding */_financialComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/shared/services/firebase/auth.service */35873);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../shared/components/breadcrumb/breadcrumb.component */41299);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */38583);
      function financialComponent_ng_template_9_ngb_panel_4_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.salesHead ? ctx_r8.salesHead : "Sales");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r8.salesValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 2, ctx_r8.salesValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_9_ngb_panel_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-panel", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_9_ngb_panel_4_ng_template_1_Template, 7, 5, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      function financialComponent_ng_template_9_ng_template_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var expense_r10 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](expense_r10.expenseHead ? expense_r10.expenseHead : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", expense_r10.expenseValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, expense_r10.expenseValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_9_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_9_ng_template_6_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.expenses);
        }
      }
      function financialComponent_ng_template_9_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.totalIncomeHead ? ctx_r7.totalIncomeHead : "Total Income");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.totalIncomeValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 8, ctx_r7.totalIncomeValue, "USD") : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.totalExpensesHead ? ctx_r7.totalExpensesHead : "Total Expenses");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.totalExpensesValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 11, ctx_r7.totalExpensesValue, "USD") : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.totalNetOperHead ? ctx_r7.totalNetOperHead : "Total Net Operating");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.totalNetOperValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 14, ctx_r7.totalNetOperValue, "USD") : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.totalNetIncHead ? ctx_r7.totalNetIncHead : "Total Net Incoming");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.totalNetIncValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](24, 17, ctx_r7.totalNetIncValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngb-accordion", 13, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, financialComponent_ng_template_9_ngb_panel_4_Template, 2, 0, "ngb-panel", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ngb-panel", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, financialComponent_ng_template_9_ng_template_6_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ngb-panel", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, financialComponent_ng_template_9_ng_template_8_Template, 25, 20, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.salesHead && ctx_r1.salesValue);
        }
      }
      function financialComponent_ng_template_11_ng_template_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var bank_r17 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](bank_r17.ColData[0].value ? bank_r17.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", bank_r17.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, bank_r17.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_11_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_11_ng_template_5_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.bank);
        }
      }
      function financialComponent_ng_template_11_ng_template_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ar_r19 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ar_r19.ColData[0].value ? ar_r19.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ar_r19.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, ar_r19.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_11_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_11_ng_template_7_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.AR);
        }
      }
      function financialComponent_ng_template_11_ng_template_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var otherAsset_r21 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](otherAsset_r21.ColData[0].value ? otherAsset_r21.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", otherAsset_r21.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, otherAsset_r21.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_11_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_11_ng_template_9_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r14.otherAsset);
        }
      }
      function financialComponent_ng_template_11_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.totalCurrentAssetsHead ? ctx_r15.totalCurrentAssetsHead : "Total Current Assets");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.totalCurrentAssetsValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 4, ctx_r15.totalCurrentAssetsValue, "USD") : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.totalAssetsHead ? ctx_r15.totalAssetsHead : "Total Expenses");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r15.totalAssetsValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 7, ctx_r15.totalAssetsValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngb-accordion", 20, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngb-panel", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, financialComponent_ng_template_11_ng_template_5_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngb-panel", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, financialComponent_ng_template_11_ng_template_7_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngb-panel", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, financialComponent_ng_template_11_ng_template_9_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngb-panel", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, financialComponent_ng_template_11_ng_template_11_Template, 13, 10, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
        }
      }
      function financialComponent_ng_template_13_ng_template_5_ng_template_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ap_r31 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ap_r31.ColData[0].value ? ap_r31.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ap_r31.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, ap_r31.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_5_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_13_ng_template_5_ng_template_3_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r27.AP);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.totalAPHead ? ctx_r27.totalAPHead : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r27.totalAPValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, ctx_r27.totalAPValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_5_ng_template_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var CreditCard_r33 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](CreditCard_r33.ColData[0].value ? CreditCard_r33.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", CreditCard_r33.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, CreditCard_r33.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_5_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_13_ng_template_5_ng_template_5_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r28.CreditCards);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r28.totalCreditCardsHead ? ctx_r28.totalCreditCardsHead : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r28.totalCreditCardsValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 3, ctx_r28.totalCreditCardsValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_5_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r29.totalCurrentLiabilitiesHead ? ctx_r29.totalCurrentLiabilitiesHead : "Total Current Liabilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r29.totalCurrentLiabilitiesValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 4, ctx_r29.totalCurrentLiabilitiesValue, "USD") : "N/A", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r29.totalLiabilitiesHead ? ctx_r29.totalLiabilitiesHead : "Total Liabilities");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r29.totalLiabilitiesValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 7, ctx_r29.totalLiabilitiesValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-accordion", 28, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngb-panel", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, financialComponent_ng_template_13_ng_template_5_ng_template_3_Template, 8, 6, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngb-panel", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, financialComponent_ng_template_13_ng_template_5_ng_template_5_Template, 8, 6, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngb-panel", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, financialComponent_ng_template_13_ng_template_5_ng_template_7_Template, 13, 10, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
        }
      }
      function financialComponent_ng_template_13_ng_template_7_ng_template_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var equity_r38 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](equity_r38.ColData[0].value ? equity_r38.ColData[0].value : "N/A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", equity_r38.ColData[1].value ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, equity_r38.ColData[1].value, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_7_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, financialComponent_ng_template_13_ng_template_7_ng_template_3_div_1_Template, 6, 5, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r35.equities);
        }
      }
      function financialComponent_ng_template_13_ng_template_7_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.totalEquityHead ? ctx_r36.totalEquityHead : "Total Equity");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r36.totalEquityValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 2, ctx_r36.totalEquityValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ngb-accordion", 32, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngb-panel", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, financialComponent_ng_template_13_ng_template_7_ng_template_3_Template, 2, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngb-panel", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, financialComponent_ng_template_13_ng_template_7_ng_template_5_Template, 7, 5, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
        }
      }
      function financialComponent_ng_template_13_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r25.totalLiabilitiesandEquityHead ? ctx_r25.totalLiabilitiesandEquityHead : "Total Current Assets");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r25.totalLiabilitiesandEquityValue ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](6, 2, ctx_r25.totalLiabilitiesandEquityValue, "USD") : "N/A", " ");
        }
      }
      function financialComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ngb-accordion", 24, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ngb-panel", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, financialComponent_ng_template_13_ng_template_5_Template, 8, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngb-panel", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, financialComponent_ng_template_13_ng_template_7_Template, 6, 1, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngb-panel", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, financialComponent_ng_template_13_ng_template_9_Template, 7, 5, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
        }
      }
      var _financialComponent = /*#__PURE__*/function () {
        function _financialComponent(http, localService, toasterService) {
          _classCallCheck(this, _financialComponent);
          this.http = http;
          this.localService = localService;
          this.toasterService = toasterService;
          this.expenses = [];
          this.bank = [];
          this.AR = [];
          this.otherAsset = [];
          this.AP = [];
          this.CreditCards = [];
          this.equities = [];
        }
        _createClass(_financialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyid = this.localService.getJsonValue("company");
            this.getFinancial();
          }
        }, {
          key: "getFinancial",
          value: function getFinancial() {
            var _this = this;
            this.http.getMonilyData("report?entity=ProfitAndLoss&id=".concat(this.companyid.id), true).subscribe(function (res) {
              var _a;
              console.log(res, "hello financial response");
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows.Row.map(function (e) {
                  if (e.hasOwnProperty('group')) {
                    if (e.group == "Income") {
                      e.Rows.Row.map(function (s) {
                        _this.salesHead = s.ColData[0].value;
                        _this.salesValue = s.ColData[1].value;
                      });
                      _this.totalIncomeHead = e.Summary.ColData[0].value;
                      _this.totalIncomeValue = e.Summary.ColData[1].value;
                    }
                    if (e.group == "Expenses") {
                      e.Rows.Row.map(function (ex) {
                        var expenseHead = ex.ColData[0].value;
                        var expenseValue = ex.ColData[1].value;
                        _this.expenses.push({
                          expenseHead: expenseHead,
                          expenseValue: expenseValue
                        });
                      });
                      _this.totalExpensesHead = e.Summary.ColData[0].value;
                      _this.totalExpensesValue = e.Summary.ColData[1].value;
                    }
                    if (e.group == "NetOperatingIncome") {
                      _this.totalNetOperHead = e.Summary.ColData[0].value;
                      _this.totalNetOperValue = e.Summary.ColData[1].value;
                    }
                    if (e.group == "NetIncome") {
                      _this.totalNetIncHead = e.Summary.ColData[0].value;
                      _this.totalNetIncValue = e.Summary.ColData[1].value;
                    }
                  }
                });
              } else {
                _this.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              console.log(err);
            });
            this.http.getMonilyData("report?entity=BalanceSheet&id=".concat(this.companyid.id), true).subscribe(function (res) {
              var _a;
              console.log(res, "hello financial response");
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows.Row.map(function (b) {
                  if (b.hasOwnProperty('group')) {
                    if (b.group == "TotalAssets") {
                      b.Rows.Row.map(function (ba) {
                        ba.Rows.Row.map(function (balAss) {
                          if (balAss.group == "BankAccounts") {
                            balAss.Rows.Row.map(function (bank) {
                              _this.bank.push(bank);
                            });
                          }
                          if (balAss.group == "AR") {
                            balAss.Rows.Row.map(function (AR) {
                              _this.AR.push(AR);
                            });
                          }
                          if (balAss.group == "OtherCurrentAssets") {
                            balAss.Rows.Row.map(function (otherAsset) {
                              _this.otherAsset.push(otherAsset);
                            });
                          }
                        });
                        if (ba.group == 'CurrentAssets') {
                          _this.totalCurrentAssetsHead = ba.Summary.ColData[0].value;
                          _this.totalCurrentAssetsValue = ba.Summary.ColData[1].value;
                        }
                      });
                      if (b.group == 'TotalAssets') {
                        _this.totalAssetsHead = b.Summary.ColData[0].value;
                        _this.totalAssetsValue = b.Summary.ColData[1].value;
                      }
                    }
                    if (b.group == "TotalLiabilitiesAndEquity") {
                      b.Rows.Row.map(function (ba) {
                        if (ba.group == "Liabilities") {
                          ba.Rows.Row.map(function (balAss) {
                            if (balAss.group == "CurrentLiabilities") {
                              balAss.Rows.Row.map(function (currentLiablities) {
                                if (currentLiablities.group == "AP") {
                                  currentLiablities.Rows.Row.map(function (Ap) {
                                    _this.AP.push(Ap);
                                  });
                                  _this.totalAPHead = currentLiablities.Summary.ColData[0].value;
                                  _this.totalAPValue = currentLiablities.Summary.ColData[1].value;
                                }
                                if (currentLiablities.group == "CreditCards") {
                                  currentLiablities.Rows.Row.map(function (CreditCards) {
                                    _this.CreditCards.push(CreditCards);
                                  });
                                  _this.totalCreditCardsHead = currentLiablities.Summary.ColData[0].value;
                                  _this.totalCreditCardsValue = currentLiablities.Summary.ColData[1].value;
                                }
                              });
                              _this.totalCurrentLiabilitiesHead = balAss.Summary.ColData[0].value;
                              _this.totalCurrentLiabilitiesValue = balAss.Summary.ColData[1].value;
                            }
                          });
                          _this.totalLiabilitiesHead = ba.Summary.ColData[0].value;
                          _this.totalLiabilitiesValue = ba.Summary.ColData[1].value;
                        }
                        if (ba.group == "Equity") {
                          ba.Rows.Row.map(function (equity) {
                            _this.equities.push(equity);
                          });
                          _this.totalEquityHead = ba.Summary.ColData[0].value;
                          _this.totalEquityValue = ba.Summary.ColData[1].value;
                        }
                      });
                      console.log('====================================');
                      console.log(b, "helloba");
                      console.log('====================================');
                      _this.totalLiabilitiesandEquityHead = b.Summary.ColData[0].value;
                      _this.totalLiabilitiesandEquityValue = b.Summary.ColData[1].value;
                    }
                  }
                  console.log('====================================');
                  console.log(b, "helloeu");
                  console.log('====================================');
                });
              } else {
                _this.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              console.log(err);
            });
            console.log('====================================');
            console.log(this.bank, this.CreditCards);
            console.log('====================================');
          }
        }]);
        return _financialComponent;
      }();
      _financialComponent.ɵfac = function financialComponent_Factory(t) {
        return new (t || _financialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
      };
      _financialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _financialComponent,
        selectors: [["app-financial"]],
        decls: 14,
        vars: 3,
        consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "default-accordion"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Profit And Loss", "id", "static-1"], ["ngbPanelContent", ""], ["title", "Balancesheet", "id", "static-2"], ["title", "Liabilitites And Equity", "id", "static-3"], [1, "col-sm-12", "mb-3"], ["activeIds", "expense-1", 3, "closeOthers"], ["title", "Income", "id", "expense-1", 4, "ngIf"], ["title", "Expenses", "id", "expense-2"], ["title", "Summary", "id", "expense-3"], ["title", "Income", "id", "expense-1"], [1, "col-sm-12", "d-flex", "justify-content-between", "align-items-center"], ["class", "col-sm-12 d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["activeIds", "balance-1", 3, "closeOthers"], ["title", "Bank", "id", "balance-1"], ["title", "Accounts Recievable", "id", "balance-2"], ["title", "Other Current Assets", "id", "balance-3"], ["activeIds", "liable-1", 3, "closeOthers"], ["title", "Liabilitites", "id", "liable-1"], ["title", "Equities", "id", "liable-2"], ["title", "Summary", "id", "liable-2"], ["activeIds", "liablity-1", 3, "closeOthers"], ["title", "Account Payable", "id", "liablity-1"], ["title", "Credit Cards", "id", "liablity-2"], ["title", "Summary", "id", "liablity-3"], ["activeIds", "equity1", 3, "closeOthers"], ["title", "Equity", "id", "equity1"], ["title", "Summary", "id", "equity2"]],
        template: function financialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-breadcrumb", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ngb-accordion", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngb-panel", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, financialComponent_ng_template_9_Template, 9, 2, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ngb-panel", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, financialComponent_ng_template_11_Template, 12, 1, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, financialComponent_ng_template_13_Template, 10, 1, "ng-template", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Financial Status")("active_item", "Financial Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
        styles: [".col-sm-12[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFuY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLHlCQUFBO0FBRFoiLCJmaWxlIjoiZmluYW5jaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1zbS0xMntcclxuICAgIHB7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"]
      });

      /***/
    },

    /***/32963:
    /*!***************************************************************!*\
      !*** ./src/app/components/apps/financial/financial.module.ts ***!
      \***************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"financialModule": function financialModule() {
          return (/* binding */_financialModule
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
      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ng-apexcharts */46505);
      /* harmony import */
      var _financial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./financial.component */2515);
      /* harmony import */
      var _financial_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./financial-routing.module */76291);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      var _financialModule = /*#__PURE__*/_createClass(function _financialModule() {
        _classCallCheck(this, _financialModule);
      });
      _financialModule.ɵfac = function financialModule_Factory(t) {
        return new (t || _financialModule)();
      };
      _financialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _financialModule
      });
      _financialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _financial_routing_module__WEBPACK_IMPORTED_MODULE_2__.financialRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_financialModule, {
          declarations: [_financial_component__WEBPACK_IMPORTED_MODULE_1__.financialComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _financial_routing_module__WEBPACK_IMPORTED_MODULE_2__.financialRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule]
        });
      })();

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_financial_financial_module_ts-es5.js.map