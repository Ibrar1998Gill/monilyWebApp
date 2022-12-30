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
      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! moment */16738);
      /* harmony import */
      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/services/firebase/auth.service */35873);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../shared/components/breadcrumb/breadcrumb.component */41299);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _shared_components_rows_rows_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../shared/components/rows/rows.component */17643);
      function financialComponent_ng_template_11_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-rows", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var item_r4 = ctx.$implicit;
          var i_r5 = ctx.index;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", item_r4)("index", i_r5);
        }
      }
      function financialComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, financialComponent_ng_template_11_div_0_Template, 2, 2, "div", 12);
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.expenses);
        }
      }
      function financialComponent_ng_template_13_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-rows", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var item_r7 = ctx.$implicit;
          var i_r8 = ctx.index;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", item_r7)("index", i_r8);
        }
      }
      function financialComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, financialComponent_ng_template_13_div_0_Template, 2, 2, "div", 12);
        }
        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.bank);
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
          this.lastyear = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY');
          this.startDate = moment__WEBPACK_IMPORTED_MODULE_0__(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD');
          this.endDate = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        }
        _createClass(_financialComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.companyid = this.localService.getJsonValue("company");
            this.getFinancial();
          }
        }, {
          key: "dynamicRows",
          value: function dynamicRows(v) {
            if (v) {
              if (v === null || v === void 0 ? void 0 : v.hasOwnProperty('Header')) {
                this.expenses.push({
                  header: v === null || v === void 0 ? void 0 : v.Header
                });
              }
            }
          }
        }, {
          key: "getFinancial",
          value: function getFinancial() {
            var _this = this;
            this.http.getMonilyData("report?entity=ProfitAndLoss&id=".concat(this.companyid.id, "&start_date=").concat(this.startDate.replace(/['"]+/g, ''), "&end_date=").concat(this.endDate.replace(/['"]+/g, '')), true).subscribe(function (res) {
              var _a;
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows.Row.map(function (e) {
                  _this.expenses.push(e);
                });
              } else {
                _this.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              console.log(err);
            });
            this.http.getMonilyData("report?entity=BalanceSheet&id=".concat(this.companyid.id, "&start_date=").concat(this.startDate.replace(/['"]+/g, ''), "&end_date=").concat(this.endDate.replace(/['"]+/g, '')), true).subscribe(function (res) {
              var _a;
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.Rows.Row.map(function (e) {
                  _this.bank.push(e);
                });
              } else {
                _this.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);
        return _financialComponent;
      }();
      _financialComponent.ɵfac = function financialComponent_Factory(t) {
        return new (t || _financialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
      };
      _financialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _financialComponent,
        selectors: [["app-financial"]],
        decls: 14,
        vars: 3,
        consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body", "default-accordion"], [1, "col-sm-12", "mt-3", "mb-3"], ["activeIds", "static-1", 3, "closeOthers"], ["acc", "ngbAccordion"], ["title", "Profit And Loss", "id", "static-1"], ["ngbPanelContent", ""], ["title", "Balancesheet", "id", "static-2"], ["class", "roa", 4, "ngFor", "ngForOf"], [1, "roa"], [3, "data", "index"]],
        template: function financialComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ngb-accordion", 7, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ngb-panel", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, financialComponent_ng_template_11_Template, 1, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ngb-panel", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, financialComponent_ng_template_13_Template, 1, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Financial Status")("active_item", "Financial Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("closeOthers", true);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__.BreadcrumbComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPanelContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_components_rows_rows_component__WEBPACK_IMPORTED_MODULE_4__.RowsComponent],
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
      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ng-select/ng-select */86640);
      /* harmony import */
      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-dropzone */30753);
      /* harmony import */
      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../shared/shared.module */44466);
      /* harmony import */
      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ng-apexcharts */46505);
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _financial_routing_module__WEBPACK_IMPORTED_MODULE_2__.financialRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_financialModule, {
          declarations: [_financial_component__WEBPACK_IMPORTED_MODULE_1__.financialComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _financial_routing_module__WEBPACK_IMPORTED_MODULE_2__.financialRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.NgApexchartsModule]
        });
      })();

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_financial_financial_module_ts-es5.js.map