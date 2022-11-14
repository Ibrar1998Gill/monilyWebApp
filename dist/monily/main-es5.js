(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["main"], {
    /***/98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/
    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }
      webpackEmptyAsyncContext.keys = function () {
        return [];
      };
      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;

      /***/
    },

    /***/90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AppRoutingModule": function AppRoutingModule() {
          return (/* binding */_AppRoutingModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./auth/login/login.component */78146);
      /* harmony import */
      var _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./shared/components/layout/content/content.component */14649);
      /* harmony import */
      var _shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./shared/routes/routes */46382);
      /* harmony import */
      var _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./shared/guard/admin.guard */85857);
      /* harmony import */
      var _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./shared/guard/SecureInnerPagesGuard.guard */60908);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */37716);
      var routes = [{
        path: 'auth/login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
        canActivate: [_shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_4__.SecureInnerPagesGuard]
      }, {
        path: '',
        redirectTo: 'dashboard',
        canActivate: [_shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__.AdminGuard],
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent,
        canActivate: [_shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__.AdminGuard],
        children: _shared_routes_routes__WEBPACK_IMPORTED_MODULE_2__.content
      }, {
        path: '**',
        redirectTo: 'dashboard',
        canActivate: [_shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__.AdminGuard]
      }];
      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });
      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };
      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
          anchorScrolling: 'enabled',
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'legacy'
        })]], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();

      /***/
    },

    /***/55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AppComponent": function AppComponent() {
          return (/* binding */_AppComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! tslib */64762);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! rxjs/operators */65792);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! rxjs/operators */57057);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! rxjs/operators */88002);
      /* harmony import */
      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! socket.io-client */43289);
      /* harmony import */
      var _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./shared/services/universal.service */77537);
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */91704);
      /* harmony import */
      var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */
      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @ngx-loading-bar/core */12252);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ngx-translate/core */29790);
      /* harmony import */
      var ng_push_notification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ng-push-notification */92233);
      /* harmony import */
      var _shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./shared/services/local.service */30652);
      /* harmony import */
      var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./shared/services/firebase/auth.service */35873);
      /* harmony import */
      var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./shared/components/loader/loader.component */90605);
      /* harmony import */
      var _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./shared/components/tap-to-top/tap-to-top.component */61916);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @ng-select/ng-select */86640);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @angular/forms */3679);
      function AppComponent_ng_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var company_r2 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", company_r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](company_r2.company);
        }
      }
      function AppComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
            return ctx_r3.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }
      var Swal = __webpack_require__( /*! sweetalert2 */88259);
      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(platformId, loader, translate, pushNotification, cd, localService, authService) {
          _classCallCheck(this, _AppComponent);
          this.platformId = platformId;
          this.loader = loader;
          this.pushNotification = pushNotification;
          this.cd = cd;
          this.localService = localService;
          this.authService = authService;
          this.socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)('https://monily-mobile-app.herokuapp.com');
          this.companies = [];
          this.companySelected = null;
          // For Progressbar
          this.loaders = this.loader.progress$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.withLatestFrom)(this.loader.progress$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (v) {
            return v[1];
          }));
          this.companyFound = false;
          if ((0, _angular_common__WEBPACK_IMPORTED_MODULE_11__.isPlatformBrowser)(this.platformId)) {
            translate.setDefaultLang('en');
            translate.addLangs(['en', 'de', 'es', 'fr', 'pt', 'cn', 'ae']);
          }
        }
        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;
            this.observe();
            if (this.localService.getJsonValue('company') == null) {
              this.getRecentUser();
            }
            this.socket.on('message', function (messageInfo) {
              var _a;
              var msg = JSON.parse(messageInfo);
              if ((msg === null || msg === void 0 ? void 0 : msg.to_id) == ((_a = _this.userDetails) === null || _a === void 0 ? void 0 : _a.userId)) {
                _this.showPush(msg);
              }
            });
          }
        }, {
          key: "getRecentUser",
          value: function getRecentUser() {
            var _this2 = this;
            this.userDetails = this.localService.getJsonValue('authUser');
            if (this.userDetails) {
              _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.companyModal.next(true);
              if (this.userDetails.hasOwnProperty('qbconfig')) {
                this.companyFound = true;
                this.userDetails.qbconfig.map(function (v) {
                  _this2.companies.push(v);
                });
              } else {
                this.companyFound = false;
                setTimeout(function () {
                  _this2.error("No Company Found");
                }, 500);
              }
            }
          }
        }, {
          key: "showPush",
          value: function showPush(messageInfo) {
            this.pushNotification.show("".concat(messageInfo === null || messageInfo === void 0 ? void 0 : messageInfo.message), {
              icon: '../assets/images/logo/logo-icon.png'
            }, 8000);
          }
        }, {
          key: "error",
          value: function error(message) {
            var _this3 = this;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: message,
              showCancelButton: false,
              confirmButtonText: "Logout"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this3.logout();
              }
            });
          }
        }, {
          key: "observe",
          value: function observe() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.login.subscribe(function (res) {
                        if (res) {
                          _this4.getRecentUser();
                        } else {
                          return;
                        }
                      });
                      _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.companyModal.subscribe(function (res) {
                        setTimeout(function () {
                          if (res && _this4.companyFound) {
                            jquery__WEBPACK_IMPORTED_MODULE_2__("#companyModal").trigger('click');
                          } else {
                            jquery__WEBPACK_IMPORTED_MODULE_2__("#closeModal").trigger('click');
                          }
                        }, 500);
                        _this4.cd.detectChanges();
                      });
                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.SignOut();
          }
        }, {
          key: "select",
          value: function select() {
            this.localService.setJsonValue('company', this.companySelected);
            _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.companyModal.next(false);
            _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.login.next(false);
            _shared_services_universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.companySelected.next(true);
          }
        }]);
        return _AppComponent;
      }();
      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__.LoadingBarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_push_notification__WEBPACK_IMPORTED_MODULE_15__.PushNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
      };
      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 19,
        vars: 7,
        consts: [[3, "color", "includeSpinner", "height"], ["type", "button", "id", "companyModal", "data-bs-toggle", "modal", "hidden", "", "data-bs-target", "#staticBackdrop"], ["id", "staticBackdrop", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-body"], ["placeholder", "Select Company", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "class", "btn btn-secondary", 3, "click", 4, "ngIf"], ["type", "button", "data-bs-dismiss", "modal", "hidden", "", "id", "closeModal"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [3, "value"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ngx-loading-bar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loader");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-tap-to-top");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h5", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Select your company");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "ng-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_ng_select_ngModelChange_12_listener($event) {
              return ctx.companySelected = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, AppComponent_ng_option_13_Template, 2, 2, "ng-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, AppComponent_button_15_Template, 2, 0, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() {
              return ctx.select();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Select");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", "#5330ab")("includeSpinner", false)("height", "4px");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.companySelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.companies);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.companyFound);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.companySelected == null);
          }
        },
        directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_13__.LoadingBarComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_6__.TapToTopComponent, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterOutlet, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_17__["ɵr"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      /***/
    },

    /***/36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"HttpLoaderFactory": function HttpLoaderFactory() {
          return (/* binding */_HttpLoaderFactory
          );
        },
        /* harmony export */"AppModule": function AppModule() {
          return (/* binding */_AppModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/platform-browser */39075);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ngx-translate/core */29790);
      /* harmony import */
      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ngx-translate/http-loader */32472);
      /* harmony import */
      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/common/http */91841);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/platform-browser/animations */75835);
      /* harmony import */
      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./shared/shared.module */44466);
      /* harmony import */
      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./app-routing.module */90158);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @ng-select/ng-select */86640);
      /* harmony import */
      var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @ngx-loading-bar/http-client */45406);
      /* harmony import */
      var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! @ngx-loading-bar/router */47525);
      /* harmony import */
      var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! @ngx-loading-bar/core */12252);
      /* harmony import */
      var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./shared/services/firebase/auth.service */35873);
      /* harmony import */
      var _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./shared/guard/admin.guard */85857);
      /* harmony import */
      var _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./shared/guard/SecureInnerPagesGuard.guard */60908);
      /* harmony import */
      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-cookie-service */31584);
      /* harmony import */
      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @angular/fire/auth */69733);
      /* harmony import */
      var ng_push_notification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ng-push-notification */92233);
      /* harmony import */
      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @angular/fire/firestore */3132);
      /* harmony import */
      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./app.component */55041);
      /* harmony import */
      var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./auth/login/login.component */78146);
      /* harmony import */
      var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @sweetalert2/ngx-sweetalert2 */60845);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */37716);

      // for HttpClient import:

      // for Router import:

      // for Core import:

      // import { PushNotificationModule } from 'ng-push-notification';

      function _HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
      }
      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });
      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };
      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        providers: [_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService, _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_3__.AdminGuard, _shared_guard_SecureInnerPagesGuard_guard__WEBPACK_IMPORTED_MODULE_4__.SecureInnerPagesGuard, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ng_push_notification__WEBPACK_IMPORTED_MODULE_15__.PushNotificationModule.forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule.forRoot(),
        // AngularFireModule.initializeApp(environment.firebase),
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
          }
        }),
        // for HttpClient use:
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_20__.LoadingBarHttpClientModule,
        // for Router use:
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_21__.LoadingBarRouterModule,
        // for Core use:
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__.LoadingBarModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_24__.SweetAlert2Module]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModule, ng_push_notification__WEBPACK_IMPORTED_MODULE_15__.PushNotificationModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_16__.ToastrModule,
          // AngularFireModule.initializeApp(environment.firebase),
          _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__.AngularFirestoreModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule,
          // for HttpClient use:
          _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_20__.LoadingBarHttpClientModule,
          // for Router use:
          _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_21__.LoadingBarRouterModule,
          // for Core use:
          _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_22__.LoadingBarModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_23__.NgSelectModule, _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_24__.SweetAlert2Module]
        });
      })();

      /***/
    },

    /***/78146:
    /*!***********************************************!*\
      !*** ./src/app/auth/login/login.component.ts ***!
      \***********************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LoginComponent": function LoginComponent() {
          return (/* binding */_LoginComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/shared/services/universal.service */77537);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../shared/services/firebase/auth.service */35873);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../shared/services/local.service */30652);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */38583);
      function LoginComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      function LoginComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Invalid Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      function LoginComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_25_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
            return ctx_r5.showPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      function LoginComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_26_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
            return ctx_r7.showPassword();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      function LoginComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }
      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(authService, fb, ngZone, router, localService, toaster) {
          _classCallCheck(this, _LoginComponent);
          this.authService = authService;
          this.fb = fb;
          this.ngZone = ngZone;
          this.router = router;
          this.localService = localService;
          this.toaster = toaster;
          this.show = false;
          this.showLoader = false;
          this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
        }
        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showPassword",
          value: function showPassword() {
            this.show = !this.show;
          }
          // Simple Login
        }, {
          key: "login",
          value: function login() {
            var _this5 = this;
            this.showLoader = true;
            this.authService.SignIn(this.loginForm.value['email'], this.loginForm.value['password']).subscribe(function (res) {
              var _a, _b, _c, _d;
              _this5.toaster.success('Login Successfull');
              _this5.loginData = {
                authtoken: (_a = res === null || res === void 0 ? void 0 : res.user) === null || _a === void 0 ? void 0 : _a.authtoken,
                userId: (_b = res === null || res === void 0 ? void 0 : res.user) === null || _b === void 0 ? void 0 : _b.id,
                name: (_c = res === null || res === void 0 ? void 0 : res.user) === null || _c === void 0 ? void 0 : _c.name,
                email: (_d = res === null || res === void 0 ? void 0 : res.user) === null || _d === void 0 ? void 0 : _d.email,
                qbconfig: res === null || res === void 0 ? void 0 : res.qb_config
              };
              _this5.localService.setJsonValue('authUser', _this5.loginData);
              src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__.UniversalService.companyModal.next(true);
              src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__.UniversalService.login.next(true);
              _this5.ngZone.run(function () {
                _this5.router.navigate(['/dashboard']);
              });
              _this5.showLoader = false;
            }, function (err) {
              var _a, _b;
              (err === null || err === void 0 ? void 0 : err.hasOwnProperty('error')) ? ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('message')) ? _this5.toaster.error((_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.message) : null : null;
            });
          }
        }]);
        return _LoginComponent;
      }();
      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
      };
      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 11,
        consts: [[1, "container-fluid", "p-0"], [1, "row"], [1, "col-12"], [1, "login-card"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo/logo.png", "alt", "looginpage", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo.png", "alt", "looginpage", 1, "img-fluid", "for-dark"], [1, "login-main"], [1, "theme-form", 3, "formGroup"], [1, "form-group"], [1, "col-form-label"], ["type", "email", "required", "", "placeholder", "app@yourmail.com", "formControlName", "email", 1, "form-control"], ["class", "text text-danger mt-1", 4, "ngIf"], ["formControlName", "password", "required", "", "placeholder", "*********", 1, "form-control", 3, "type"], ["class", "show-hide", 3, "click", 4, "ngIf"], [1, "form-group", "mb-0"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "text", "text-danger", "mt-1"], [1, "show-hide", 3, "click"], [1, "show"], [1, "Hide"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "form", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sign in to account");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Enter your email & password to login");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Email Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, LoginComponent_div_27_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_29_listener() {
              return ctx.login();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && (ctx.loginForm.controls.email.errors == null ? null : ctx.loginForm.controls.email.errors.email));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx.show ? "text" : "password");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.show);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.touched && (ctx.loginForm.controls.password.errors == null ? null : ctx.loginForm.controls.password.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loader--text", ctx.authService.showLoader);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.authService.showLoader);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.authService.showLoader ? "" : "Login");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        styles: [".loader--text[_ngcontent-%COMP%] {\n  top: 200%;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loader--text[_ngcontent-%COMP%]:after {\n  content: \"Loading\";\n  font-weight: bold;\n  animation-name: loading-text;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes loading-text {\n  0% {\n    content: \"Loading\";\n  }\n  25% {\n    content: \"Loading.\";\n  }\n  50% {\n    content: \"Loading..\";\n  }\n  75% {\n    content: \"Loading...\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQUVGO0VBQUE7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSx3QkFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLGtCQUFBO0VBRUY7RUFBQTtJQUNFLG1CQUFBO0VBRUY7RUFBQTtJQUNFLG9CQUFBO0VBRUY7RUFBQTtJQUNFLHFCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItLXRleHQge1xyXG4gIHRvcDogMjAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLS10ZXh0OmFmdGVyIHtcclxuICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb24tbmFtZTogbG9hZGluZy10ZXh0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAxNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMzBweCk7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0IHtcclxuICAwJSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy5cIjtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy4uXCI7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmcuLi5cIjtcclxuICB9XHJcbn1cclxuIl19 */"]
      });

      /***/
    },

    /***/41299:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"BreadcrumbComponent": function BreadcrumbComponent() {
          return (/* binding */_BreadcrumbComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */38583);
      function BreadcrumbComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
        }
      }
      var _BreadcrumbComponent = /*#__PURE__*/function () {
        function _BreadcrumbComponent() {
          _classCallCheck(this, _BreadcrumbComponent);
        }
        _createClass(_BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
        return _BreadcrumbComponent;
      }();
      _BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || _BreadcrumbComponent)();
      };
      _BreadcrumbComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        inputs: {
          title: "title",
          items: "items",
          active_item: "active_item"
        },
        decls: 14,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "page-title"], [1, "row"], [1, "col-6"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [3, "icon"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-feather-icons", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BreadcrumbComponent_li_11_Template, 2, 1, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/dashboard/default");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.active_item);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      /***/
    },

    /***/35831:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
      \**********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"CustomizerComponent": function CustomizerComponent() {
          return (/* binding */_CustomizerComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../services/layout.service */85682);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */3679);
      function CustomizerComponent_ng_template_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Customizer configuration");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_43_Template_button_click_3_listener() {
            var modal_r2 = ctx.$implicit;
            return modal_r2.dismiss("Cross click");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 88);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "To replace our design with your desired theme. Please do configuration as mention ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Path : src > app > shared > services > layout.service.ts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "pre");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n                  ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate6"]("\n      public config = {\n         settings: {\n            layout: '", ctx_r1.layout.config.settings.layout, "',\n            layout_type: '", ctx_r1.layout.config.settings.layout_type, "',\n            layout_version: '", ctx_r1.layout.config.settings.layout_version, "',\n            sidebar_type: '", ctx_r1.layout.config.settings.sidebar_type, "',\n         },\n         color: {\n            primary_color: '", ctx_r1.layout.config.color.primary_color, "',\n            secondary_color: '", ctx_r1.layout.config.color.secondary_color, "'\n         }\n      }\n");
        }
      }
      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };
      var _c1 = function _c1(a0) {
        return {
          "active show": a0
        };
      };
      var _c2 = function _c2() {
        return ["/dashboard/default"];
      };
      var _c3 = function _c3() {
        return {
          layout: "Dubai"
        };
      };
      var _c4 = function _c4() {
        return {
          layout: "London"
        };
      };
      var _c5 = function _c5() {
        return {
          layout: "Seoul"
        };
      };
      var _c6 = function _c6() {
        return {
          layout: "LosAngeles"
        };
      };
      var _c7 = function _c7() {
        return {
          layout: "Paris"
        };
      };
      var _c8 = function _c8() {
        return {
          layout: "Tokyo"
        };
      };
      var _c9 = function _c9() {
        return {
          layout: "Madrid"
        };
      };
      var _c10 = function _c10() {
        return {
          layout: "Moscow"
        };
      };
      var _c11 = function _c11() {
        return {
          layout: "NewYork"
        };
      };
      var _c12 = function _c12() {
        return {
          layout: "Singapore"
        };
      };
      var _c13 = function _c13() {
        return {
          layout: "Rome"
        };
      };
      var _c14 = function _c14() {
        return {
          layout: "Barcelona"
        };
      };
      var _c15 = function _c15(a0) {
        return {
          "active": a0
        };
      };
      var _CustomizerComponent = /*#__PURE__*/function () {
        function _CustomizerComponent(modalService, layout) {
          _classCallCheck(this, _CustomizerComponent);
          this.modalService = modalService;
          this.layout = layout;
          this.screenwidth = window.innerWidth;
          this.customizer = '';
          this.layoutType = 'ltr';
          this.sidebarType = 'compact-wrapper';
          this.sidebarSetting = 'default-sidebar';
          this.MIXLayout = 'default';
          this.primary_color = '#7366ff';
          this.secondary_color = '#f73164';
        }
        _createClass(_CustomizerComponent, [{
          key: "onResize",
          value: function onResize(event) {
            this.screenwidth = event.target.innerWidth;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          // Open Modal
        }, {
          key: "openModal",
          value: function openModal(popup) {
            this.modalService.open(popup, {
              backdropClass: 'dark-modal',
              centered: true
            });
          }
          // Open customizer
        }, {
          key: "Customizer",
          value: function Customizer(val) {
            this.customizer = val;
          }
          // Customize Layout Type
        }, {
          key: "customizeLayoutType",
          value: function customizeLayoutType(val) {
            this.layoutType = val;
            this.layout.config.settings.layout_type = val;
            if (val == 'rtl') {
              document.getElementsByTagName('html')[0].setAttribute('dir', val);
            } else {
              document.getElementsByTagName('html')[0].removeAttribute('dir');
            }
          }
          // Customize Sidebar Type
        }, {
          key: "customizeSidebarType",
          value: function customizeSidebarType(val) {
            this.sidebarType = val;
          }
          // Customize Sidebar Setting
        }, {
          key: "customizeSidebarSetting",
          value: function customizeSidebarSetting(val) {
            this.sidebarSetting = val;
            this.layout.config.settings.sidebar_type = val;
          }
          // Customize Mix Layout
        }, {
          key: "customizeMixLayout",
          value: function customizeMixLayout(val) {
            this.MIXLayout = val;
            this.layout.config.settings.layout_version = val;
          }
        }, {
          key: "applyColor",
          value: function applyColor() {
            document.documentElement.style.setProperty('--theme-deafult', this.primary_color);
            document.documentElement.style.setProperty('--theme-secondary', this.secondary_color);
            this.layout.config.color.primary_color = this.primary_color;
            this.layout.config.color.secondary_color = this.secondary_color;
          }
        }, {
          key: "resetColor",
          value: function resetColor() {
            document.documentElement.style.setProperty('--theme-deafult', '#7366ff');
            document.documentElement.style.setProperty('--theme-secondary', '#f73164');
            document.getElementById('ColorPicker1').value = '#7366ff';
            document.getElementById('ColorPicker2').value = '#f73164';
            this.layout.config.color.primary_color = '#7366ff';
            this.layout.config.color.secondary_color = '#f73164';
          }
        }]);
        return _CustomizerComponent;
      }();
      _CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) {
        return new (t || _CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService));
      };
      _CustomizerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CustomizerComponent,
        selectors: [["app-customizer"]],
        hostBindings: function CustomizerComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function CustomizerComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 255,
        vars: 103,
        consts: [[1, "customizer-links", 3, "ngClass"], ["id", "c-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nac-pills"], ["href", "javascript:void(0)", 1, "nav-link", 3, "ngClass", "click"], [1, "settings"], [1, "icon-paint-bucket"], ["href", "javascript:void(0)", "id", "c-pills-home-tab", 1, "nav-link", 3, "ngClass", "click"], [1, "icon-settings"], ["target", "_blank", "href", "https://pixelstrap.freshdesk.com/", "data-original-title", "", "title", "", 1, "nav-link"], [1, "icon-support"], ["target", "_blank", "href", "http://docs.pixelstrap.com/angular/cuba/document/index.html", "data-original-title", "", "title", "", 1, "nav-link"], ["target", "_blank", "href", "http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks", "data-original-title", "", "title", "", 1, "nav-link"], [1, "icon-panel"], ["target", "_blank", "href", "https://1.envato.market/3GVzd", "data-original-title", "", "title", "", 1, "nav-link"], [1, "icon-shopping-cart-full"], [1, "customizer-contain", 3, "ngClass"], ["id", "c-pills-tabContent", 1, "tab-content"], [1, "customizer-header"], [1, "icofont-close", "icon-close", 3, "click"], [1, "mb-0"], [1, "fa", "fa-thumbs-o-up", "txt-primary"], [1, "btn", "btn-primary", "plus-popup", "mt-2", 3, "click"], ["popup", ""], [1, "customizer-body", "custom-scrollbar"], ["id", "c-pills-layouts", "role", "tabpanel", 1, "tab-pane", "fade", 3, "ngClass"], [1, "sidebar-type", "layout-grid", "layout-types"], ["data-attr", "compact-sidebar"], [1, "layout-img"], [3, "routerLink", "queryParams"], ["src", "assets/images/layouts/1.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "default-body", 1, "only-body"], ["src", "assets/images/layouts/2.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "modern-layout"], ["src", "assets/images/layouts/9.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "material-layout"], ["src", "assets/images/layouts/10.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "dark-sidebar"], ["src", "assets/images/layouts/3.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "compact-wrap"], ["src", "assets/images/layouts/4.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "color-sidebar"], ["src", "assets/images/layouts/5.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "compact-small"], ["src", "assets/images/layouts/6.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "box-layout", 1, "box-layout"], ["src", "assets/images/layouts/7.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "enterprice-type"], ["src", "assets/images/layouts/8.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "material-icon"], ["src", "assets/images/layouts/11.jpg", "alt", "", 1, "img-fluid"], ["data-attr", "advance-type"], ["src", "assets/images/layouts/12.jpg", "alt", "", 1, "img-fluid"], ["id", "c-pills-home", "role", "tabpanel", "aria-labelledby", "c-pills-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "main-layout", "layout-grid"], ["data-attr", "ltr", 3, "ngClass", "click"], [1, "header", "bg-light"], [1, "body"], [1, "bg-light", "sidebar"], [1, "bg-light", "body"], [1, "badge", "badge-primary"], ["data-attr", "rtl", 3, "ngClass", "click"], ["data-attr", "Box", 1, "box-layout", 3, "ngClass", "click"], [1, "sidebar-type", "layout-grid"], ["data-attr", "normal-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar"], ["data-attr", "compact-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar", "compact"], [1, "sidebar-setting", "layout-grid"], ["data-attr", "default-sidebar", 3, "ngClass", "click"], [1, "body", "bg-light"], ["data-attr", "border-sidebar", 3, "ngClass", "click"], ["data-attr", "iconcolor-sidebar", 3, "ngClass", "click"], [1, ""], [1, "layout-grid", "unlimited-color-layout"], ["id", "ColorPicker1", "type", "color", "value", "#7366ff", 3, "ngModel", "ngModelChange"], ["id", "ColorPicker2", "type", "color", "value", "#f73164", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "color-apply-btn", "btn", "btn-primary", "color-apply-btn", 3, "click"], ["type", "button", 1, "color-apply-btn", "btn", "btn-primary", "color-apply-btn", "ml-2", 3, "click"], [1, "layout-grid", "customizer-mix"], ["data-attr", "default", 1, "color-layout", 3, "ngClass", "click"], ["data-attr", "dark-sidebar", 1, "color-layout", 3, "ngClass", "click"], ["data-attr", "dark-only", 1, "color-layout", 3, "ngClass", "click"], [1, "header", "bg-dark"], [1, "bg-dark", "body"], [1, "modal-header", "modal-copy-header"], [1, "headerTitle", "mb-0"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-header", "config-popup"]],
        template: function CustomizerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() {
              return ctx.Customizer("layout");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Check layouts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_7_listener() {
              return ctx.Customizer("option");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Quick option");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Document");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Check features");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Buy now");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_i_click_35_listener() {
              return ctx.Customizer("");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Preview Settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Try It Real Time ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_41_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
              return ctx.openModal(_r0);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Configuration");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CustomizerComponent_ng_template_43_Template, 18, 6, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ul", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Dubai");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "London");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Seoul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Los Angeles");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Paris");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Tokyo");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "img", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Madrid");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Moscow");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "New York");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Singapore");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "img", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Rome");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Barcelona");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Layout Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "ul", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_124_listener() {
              return ctx.customizeLayoutType("ltr");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "li", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "LTR");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_136_listener() {
              return ctx.customizeLayoutType("rtl");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "RTL");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "li", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_148_listener() {
              return ctx.customizeLayoutType("box-layout");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "li", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "BOX");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Sidebar Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "ul", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_163_listener() {
              return ctx.customizeSidebarType("horizontal-wrapper");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "li", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "li", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_173_listener() {
              return ctx.customizeSidebarType("compact-wrapper");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "li", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Sidebar settings");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "ul", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_186_listener() {
              return ctx.customizeSidebarSetting("default-sidebar");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_195_listener() {
              return ctx.customizeSidebarSetting("border-sidebar");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Border");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "li", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_204_listener() {
              return ctx.customizeSidebarSetting("iconcolor-sidebar");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "span", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "icon Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h6", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Unlimited Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "ul", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "input", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_input_ngModelChange_216_listener($event) {
              return ctx.primary_color = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "input", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CustomizerComponent_Template_input_ngModelChange_217_listener($event) {
              return ctx.secondary_color = $event;
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "button", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_218_listener() {
              return ctx.applyColor();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Apply");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_220_listener() {
              return ctx.resetColor();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Reset");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "h6");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Mix Layout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "ul", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_225_listener() {
              return ctx.customizeMixLayout("default");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "li", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_235_listener() {
              return ctx.customizeMixLayout("dark-sidebar");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "li", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "li", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_245_listener() {
              return ctx.customizeMixLayout("dark-only");
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "li", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "li", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c0, ctx.customizer != ""));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c1, ctx.customizer == "layout"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c1, ctx.customizer == "option"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c0, ctx.customizer != ""));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](53, _c1, ctx.customizer == "layout"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](56, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](57, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](58, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](59, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](60, _c5));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](61, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](62, _c6));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](63, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](64, _c7));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](65, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](66, _c8));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](67, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](68, _c9));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](69, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](70, _c10));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](71, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](72, _c11));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](73, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](74, _c12));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](75, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](76, _c13));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](77, _c2))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](78, _c14));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](79, _c1, ctx.customizer == "option"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](81, _c15, ctx.layoutType == "ltr"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](83, _c15, ctx.layoutType == "rtl"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](85, _c15, ctx.layoutType == "box-layout"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.screenwidth < 991);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](87, _c15, ctx.sidebarType == "horizontal-wrapper"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](89, _c15, ctx.sidebarType == "compact-wrapper"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](91, _c15, ctx.sidebarSetting == "default-sidebar"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](93, _c15, ctx.sidebarSetting == "border-sidebar"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](95, _c15, ctx.sidebarSetting == "iconcolor-sidebar"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.primary_color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.secondary_color);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](97, _c15, ctx.MIXLayout == "default"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](99, _c15, ctx.MIXLayout == "dark-sidebar"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](101, _c15, ctx.MIXLayout == "dark-only"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
        styles: [".config-popup[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpZy1wb3B1cCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn0iXX0= */"]
      });

      /***/
    },

    /***/61676:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
      \****************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"FeatherIconsComponent": function FeatherIconsComponent() {
          return (/* binding */_FeatherIconsComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! feather-icons */66379);
      /* harmony import */
      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      var _FeatherIconsComponent = /*#__PURE__*/function () {
        function _FeatherIconsComponent() {
          _classCallCheck(this, _FeatherIconsComponent);
        }
        _createClass(_FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }]);
        return _FeatherIconsComponent;
      }();
      _FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || _FeatherIconsComponent)();
      };
      _FeatherIconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      /***/
    },

    /***/66526:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"FooterComponent": function FooterComponent() {
          return (/* binding */_FooterComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */38583);
      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent() {
          _classCallCheck(this, _FooterComponent);
          this.today = Date.now();
        }
        _createClass(_FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
        return _FooterComponent;
      }();
      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)();
      };
      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 4,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-12", "footer-copyright", "text-center"], [1, "mb-0"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx.today, "y"), " \xA9 Monily ");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      /***/
    },

    /***/38400:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/bookmark/bookmark.component.ts ***!
      \**********************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"BookmarkComponent": function BookmarkComponent() {
          return (/* binding */_BookmarkComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../services/nav.service */5897);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      function BookmarkComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbTooltip", item_r2 == null ? null : item_r2.title)("routerLink", item_r2 == null ? null : item_r2.path);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r2 == null ? null : item_r2.icon);
        }
      }
      function BookmarkComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
            return ctx_r5.removeFix();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_22_div_1_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
            var item_r4 = restoredCtx.$implicit;
            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
            return ctx_r7.addToBookmark(item_r4);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var item_r4 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r4.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r4 == null ? null : item_r4.path);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", item_r4.bookmark);
        }
      }
      function BookmarkComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BookmarkComponent_div_22_div_1_Template, 10, 5, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r1.searchResult);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r1.menuItems, 0, 8));
        }
      }
      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };
      var _BookmarkComponent = /*#__PURE__*/function () {
        function _BookmarkComponent(navServices) {
          _classCallCheck(this, _BookmarkComponent);
          this.navServices = navServices;
          this.bookmarkItems = [];
          this.bookmark = false;
          this.bookmarkFlip = false;
          this.open = false;
          this.searchResult = false;
          this.searchResultEmpty = false;
        }
        _createClass(_BookmarkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;
            this.navServices.items.subscribe(function (menuItems) {
              _this6.items = menuItems;
              _this6.items.filter(function (items) {
                if (items.bookmark) {
                  _this6.bookmarkItems.push(items);
                }
                if (!items.children) return false;
                items.children.filter(function (subItems) {
                  if (subItems.bookmark) {
                    _this6.bookmarkItems.push(subItems);
                  }
                });
              });
            });
          }
        }, {
          key: "openBookMark",
          value: function openBookMark() {
            this.bookmark = !this.bookmark;
          }
        }, {
          key: "flipBookMark",
          value: function flipBookMark() {
            this.bookmarkFlip = !this.bookmarkFlip;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this7 = this;
            term ? this.addFix() : this.removeFix();
            if (!term) {
              this.open = false;
              return this.menuItems = [];
            }
            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;
              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }
              if (!menuItems.children) {
                return false;
              }
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }
                if (!subItems.children) {
                  return false;
                }
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });
              _this7.checkSearchResultEmpty(items);
              _this7.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) {
              this.searchResultEmpty = true;
            } else {
              this.searchResultEmpty = false;
            }
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = '';
          }
        }, {
          key: "addToBookmark",
          value: function addToBookmark(items) {
            var index = this.bookmarkItems.indexOf(items);
            if (index === -1 && !items.bookmark) {
              items.bookmark = true;
              this.bookmarkItems.push(items);
              this.text = '';
            } else {
              this.bookmarkItems.splice(index, 1);
              items.bookmark = false;
            }
          }
        }]);
        return _BookmarkComponent;
      }();
      _BookmarkComponent.ɵfac = function BookmarkComponent_Factory(t) {
        return new (t || _BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };
      _BookmarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BookmarkComponent,
        selectors: [["app-bookmark"]],
        decls: 30,
        vars: 13,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "onhover-show-div", "bookmark-flip"], [1, "flip-card"], [1, "flip-card-inner"], [1, "front"], [1, "droplet-dropdown", "bookmark-dropdown"], [1, "gradient-primary"], [1, "f-18", "mb-0"], [1, "custom-scrollbar"], [1, "row"], ["class", "col-4 text-center", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "click"], ["id", "flip-btn", 1, "flip-btn"], [1, "back"], [1, "droplet-dropdown", "bookmark-dropdown", "flip-back-content"], ["type", "text", "placeholder", "search...", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], ["class", "Typeahead-menu custom-scrollbar", "id", "boomark-search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], [3, "click"], ["id", "flip-back", 1, "d-block", "flip-back"], [1, "col-4", "text-center"], ["placement", "top", "routerLinkActive", "item?.active", 3, "ngbTooltip", "routerLink"], ["id", "boomark-search-outer", 1, "Typeahead-menu", "custom-scrollbar"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "pull-right"], ["href", "javacript:void(0)", 3, "click"], [1, "fa", "fa-star-o", "f-18", "mt-1"]],
        template: function BookmarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_div_click_0_listener() {
              return ctx.openBookMark();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Bookmark");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BookmarkComponent_div_13_Template, 3, 3, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_14_listener() {
              return ctx.flipBookMark();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Add New Bookmark");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookmarkComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.text = $event;
            })("keyup", function BookmarkComponent_Template_input_keyup_21_listener() {
              return ctx.searchTerm(ctx.text);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BookmarkComponent_div_22_Template, 3, 7, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " Opps!! There are no result found. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_li_click_27_listener() {
              return ctx.flipBookMark();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.bookmarkFlip || ctx.bookmark);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("flipped", ctx.bookmarkFlip);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bookmarkItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29rbWFyay5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      /***/
    },

    /***/88204:
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/cart/cart.component.ts ***!
      \**************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"CartComponent": function CartComponent() {
          return (/* binding */_CartComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      var _CartComponent = /*#__PURE__*/function () {
        function _CartComponent() {
          _classCallCheck(this, _CartComponent);
          this.openCart = false;
        }
        _createClass(_CartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          // For Mobile Device
        }, {
          key: "toggleCart",
          value: function toggleCart() {
            this.openCart = !this.openCart;
          }
        }]);
        return _CartComponent;
      }();
      _CartComponent.ɵfac = function CartComponent_Factory(t) {
        return new (t || _CartComponent)();
      };
      _CartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _CartComponent,
        selectors: [["app-cart"]],
        decls: 64,
        vars: 6,
        consts: [[1, "cart-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-primary"], [1, "cart-dropdown", "onhover-show-div"], [1, "mb-0", "f-20"], [1, "mt-0"], [1, "media"], ["src", "assets/images/ecommerce/01.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], [1, "media-body"], [1, "qty-box"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "data-type", "minus", "data-field", "", 1, "btn", "quantity-left-minus"], ["data-feather", "minus"], ["type", "text", "name", "quantity", "value", "1", 1, "form-control", "input-number"], ["type", "button", "data-type", "plus", "data-field", "", 1, "btn", "quantity-right-plus"], ["data-feather", "plus"], [1, "text-right", "text-muted"], [1, "close-circle"], ["href", "#"], ["src", "assets/images/ecommerce/03.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3", "img-60"], ["type", "button", "data-type", "minus", 1, "btn", "quantity-left-minus"], ["type", "button", "data-type", "plus", 1, "btn", "quantity-right-plus"], [1, "total"], [1, "mb-2", "mt-0", "text-muted"], [1, "f-right", "f-20"], ["href", "#", 1, "btn", "btn-block", "btn-primary", "view-cart"], ["href", "#", 1, "btn", "btn-block", "btn-secondary", "view-cart"]],
        template: function CartComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartComponent_Template_div_click_0_listener() {
              return ctx.toggleCart();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shoping Bag");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "V-Neck Shawl Collar Woman's Solid T-Shirt");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Yellow(#fcb102)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h6", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "$299.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "V-Neck Shawl Collar Woman's Solid T-Shirt");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Yellow(#fcb102)");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h6", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "$299.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Order Total : ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "$598.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Go to shoping bag ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Checkout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openCart);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "shopping-cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "x");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      /***/
    },

    /***/85607:
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/languages/languages.component.ts ***!
      \************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LanguagesComponent": function LanguagesComponent() {
          return (/* binding */_LanguagesComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngx-translate/core */29790);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../services/nav.service */5897);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common */38583);
      function LanguagesComponent_div_7_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var lang_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", lang_r1.type, ")");
        }
      }
      function LanguagesComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguagesComponent_div_7_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
            var lang_r1 = restoredCtx.$implicit;
            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
            return ctx_r4.changeLanguage(lang_r1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LanguagesComponent_div_7_span_4_Template, 2, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var lang_r1 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r1.icon, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r1.language);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", lang_r1.type);
        }
      }
      var _LanguagesComponent = /*#__PURE__*/function () {
        function _LanguagesComponent(translate, navServices) {
          _classCallCheck(this, _LanguagesComponent);
          this.translate = translate;
          this.navServices = navServices;
          this.language = false;
          this.languages = [{
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          }, {
            language: 'Español',
            code: 'es',
            icon: 'es'
          }, {
            language: 'Français',
            code: 'fr',
            icon: 'fr'
          }, {
            language: 'Português',
            code: 'pt',
            type: 'BR',
            icon: 'pt'
          }];
          this.selectedLanguage = {
            language: 'English',
            code: 'en',
            type: 'US',
            icon: 'us'
          };
        }
        _createClass(_LanguagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeLanguage",
          value: function changeLanguage(lang) {
            this.translate.use(lang.code);
            this.selectedLanguage = lang;
          }
        }]);
        return _LanguagesComponent;
      }();
      _LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) {
        return new (t || _LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };
      _LanguagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _LanguagesComponent,
        selectors: [["app-languages"]],
        decls: 8,
        vars: 9,
        consts: [[1, "translate_wrapper"], [1, "current_lang"], [1, "lang"], [1, "lang-txt"], [1, "more_lang"], ["class", "lang selected", "data-value", "en", 3, "click", 4, "ngFor", "ngForOf"], ["data-value", "en", 1, "lang", "selected", 3, "click"], [4, "ngIf"]],
        template: function LanguagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LanguagesComponent_div_7_Template, 5, 5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.navServices.language);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedLanguage.code);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.navServices.language);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      /***/
    },

    /***/95895:
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/message-box/message-box.component.ts ***!
      \****************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"MessageBoxComponent": function MessageBoxComponent() {
          return (/* binding */_MessageBoxComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! socket.io-client */43289);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/services/firebase/auth.service */35873);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */39895);
      function MessageBoxComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var message_r1 = ctx.$implicit;
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((message_r1 == null ? null : message_r1.from_id) == (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.userId) ? message_r1 == null ? null : message_r1.to_name : message_r1 == null ? null : message_r1.from_name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r1 == null ? null : message_r1.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 3, message_r1 == null ? null : message_r1.timestamp, "short"));
        }
      }
      var _MessageBoxComponent = /*#__PURE__*/function () {
        function _MessageBoxComponent(http, localService) {
          _classCallCheck(this, _MessageBoxComponent);
          this.http = http;
          this.localService = localService;
          this.openMessageBox = false;
          this.socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)('https://monily-mobile-app.herokuapp.com');
          this.messageLists = [];
        }
        _createClass(_MessageBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;
            this.getRecentUser();
            this.socket.on('message', function (messageInfo) {
              var _a, _b;
              console.log('====================================');
              console.log(messageInfo, "hello app message");
              console.log('====================================');
              var msg = JSON.parse(messageInfo);
              if (_this8.userDetails != null) {
                if ((msg === null || msg === void 0 ? void 0 : msg.to_id) == ((_a = _this8.userDetails) === null || _a === void 0 ? void 0 : _a.userId) || (msg === null || msg === void 0 ? void 0 : msg.from_id) == ((_b = _this8.userDetails) === null || _b === void 0 ? void 0 : _b.userId)) {
                  _this8.getChat();
                }
              }
            });
          }
        }, {
          key: "toggleMessageBox",
          value: function toggleMessageBox() {
            this.openMessageBox = !this.openMessageBox;
          }
        }, {
          key: "getRecentUser",
          value: function getRecentUser() {
            this.userDetails = this.localService.getJsonValue('authUser');
            if (this.userDetails != null) {
              this.getChat();
            } else return;
          }
        }, {
          key: "getChat",
          value: function getChat() {
            var _this9 = this;
            var _a;
            this.messageLists = [];
            this.http.getChat("getChatList?user_id=".concat((_a = this.userDetails) === null || _a === void 0 ? void 0 : _a.userId), true).subscribe(function (res) {
              var _a;
              console.log('====================================');
              console.log(res);
              console.log('====================================');
              (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.map(function (v) {
                var _a, _b;
                if (v.from_id == ((_a = _this9.userDetails) === null || _a === void 0 ? void 0 : _a.userId) && v.to_id == ((_b = _this9.userDetails) === null || _b === void 0 ? void 0 : _b.userId)) {
                  return;
                } else {
                  _this9.messageLists.push(v);
                }
              });
            }), function (err) {
              console.log('====================================');
              console.log(err);
              console.log('====================================');
            };
          }
        }]);
        return _MessageBoxComponent;
      }();
      _MessageBoxComponent.ɵfac = function MessageBoxComponent_Factory(t) {
        return new (t || _MessageBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
      };
      _MessageBoxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _MessageBoxComponent,
        selectors: [["app-message-box"]],
        decls: 10,
        vars: 6,
        consts: [[3, "icon", "click"], [1, "chat-dropdown", "onhover-show-div"], [3, "icon"], [1, "f-18", "mb-0"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "media"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "mr-3"], [1, "media-body"], [1, "f-12", "font-success"]],
        template: function MessageBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-feather-icons", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MessageBoxComponent_Template_app_feather_icons_click_0_listener() {
              return ctx.toggleMessageBox();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ul", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-feather-icons", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h6", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Message Box");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MessageBoxComponent_li_6_Template, 11, 6, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "View All");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "message-square");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.openMessageBox);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "message-square");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.messageLists);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "chats");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLWJveC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      /***/
    },

    /***/32413:
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/my-account/my-account.component.ts ***!
      \**************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"MyAccountComponent": function MyAccountComponent() {
          return (/* binding */_MyAccountComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../services/firebase/auth.service */35873);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      var _MyAccountComponent = /*#__PURE__*/function () {
        function _MyAccountComponent(authService, localService) {
          _classCallCheck(this, _MyAccountComponent);
          this.authService = authService;
          this.localService = localService;
        }
        _createClass(_MyAccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            this.user = this.localService.getJsonValue('authUser');
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.SignOut();
          }
        }]);
        return _MyAccountComponent;
      }();
      _MyAccountComponent.ɵfac = function MyAccountComponent_Factory(t) {
        return new (t || _MyAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService));
      };
      _MyAccountComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _MyAccountComponent,
        selectors: [["app-my-account"]],
        decls: 15,
        vars: 3,
        consts: [[1, "media", "profile-media"], [1, "ProfileInitial"], [1, "media-body"], [1, "mb-0", "font-roboto"], [1, "middle", "fa", "fa-angle-down"], [1, "profile-dropdown", "onhover-show-div"], [1, "btn", "btn-primary", 3, "click"], [3, "icon"]],
        template: function MyAccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Admin ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MyAccountComponent_Template_button_click_11_listener() {
              return ctx.logout();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-feather-icons", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Log out");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name == null ? null : ctx.user.name.toString().substring(0, 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "log-out");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent],
        styles: [".btn[_ngcontent-%COMP%] {\n  padding: 5px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSw0QkFBQTtBQUNSIiwiZmlsZSI6Im15LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9Il19 */"]
      });

      /***/
    },

    /***/22666:
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/notification/notification.component.ts ***!
      \******************************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"NotificationComponent": function NotificationComponent() {
          return (/* binding */_NotificationComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      var _NotificationComponent = /*#__PURE__*/function () {
        function _NotificationComponent() {
          _classCallCheck(this, _NotificationComponent);
          this.openNotification = false;
        }
        _createClass(_NotificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleNotificationMobile",
          value: function toggleNotificationMobile() {
            this.openNotification = !this.openNotification;
          }
        }]);
        return _NotificationComponent;
      }();
      _NotificationComponent.ɵfac = function NotificationComponent_Factory(t) {
        return new (t || _NotificationComponent)();
      };
      _NotificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NotificationComponent,
        selectors: [["app-notification"]],
        decls: 36,
        vars: 4,
        consts: [[1, "notification-box", 3, "click"], [3, "icon"], [1, "badge", "badge-pill", "badge-secondary"], [1, "notification-dropdown", "onhover-show-div"], [1, "f-18", "mb-0"], [1, "fa", "fa-circle-o", "mr-3", "font-primary"], [1, "pull-right"], [1, "fa", "fa-circle-o", "mr-3", "font-success"], [1, "fa", "fa-circle-o", "mr-3", "font-info"], [1, "fa", "fa-circle-o", "mr-3", "font-danger"], ["href", "#", 1, "btn", "btn-primary"]],
        template: function NotificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NotificationComponent_Template_div_click_0_listener() {
              return ctx.toggleNotificationMobile();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Notitications");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Delivery processing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "10 min.");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Order Complete");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1 hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Tickets Generated");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3 hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Delivery Complete");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "6 hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Check all notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.openNotification);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "bell");
          }
        },
        directives: [_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });

      /***/
    },

    /***/18249:
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/header/elements/search/search.component.ts ***!
      \******************************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"SearchComponent": function SearchComponent() {
          return (/* binding */_SearchComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../services/nav.service */5897);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */39895);
      function SearchComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_4_div_1_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
            return ctx_r3.removeFix();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", menuItem_r2.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", menuItem_r2 == null ? null : menuItem_r2.path);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuItem_r2 == null ? null : menuItem_r2.title);
        }
      }
      function SearchComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchComponent_div_4_div_1_Template, 7, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r0.searchResult);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r0.menuItems, 0, 8));
        }
      }
      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };
      var _SearchComponent = /*#__PURE__*/function () {
        function _SearchComponent(navServices) {
          var _this10 = this;
          _classCallCheck(this, _SearchComponent);
          this.navServices = navServices;
          this.searchResult = false;
          this.searchResultEmpty = false;
          this.navServices.items.subscribe(function (menuItems) {
            return _this10.items = menuItems;
          });
        }
        _createClass(_SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = false;
          }
        }, {
          key: "searchTerm",
          value: function searchTerm(term) {
            var _this11 = this;
            term ? this.addFix() : this.removeFix();
            if (!term) return this.menuItems = [];
            var items = [];
            term = term.toLowerCase();
            this.items.filter(function (menuItems) {
              if (!(menuItems === null || menuItems === void 0 ? void 0 : menuItems.title)) return false;
              if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
                items.push(menuItems);
              }
              if (!menuItems.children) return false;
              menuItems.children.filter(function (subItems) {
                if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
                  subItems.icon = menuItems.icon;
                  items.push(subItems);
                }
                if (!subItems.children) return false;
                subItems.children.filter(function (suSubItems) {
                  if (suSubItems.title.toLowerCase().includes(term)) {
                    suSubItems.icon = menuItems.icon;
                    items.push(suSubItems);
                  }
                });
              });
              _this11.checkSearchResultEmpty(items);
              _this11.menuItems = items;
            });
          }
        }, {
          key: "checkSearchResultEmpty",
          value: function checkSearchResultEmpty(items) {
            if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
          }
        }, {
          key: "addFix",
          value: function addFix() {
            this.searchResult = true;
            document.getElementsByTagName('body')[0].classList.add('offcanvas');
          }
        }, {
          key: "removeFix",
          value: function removeFix() {
            this.searchResult = false;
            this.text = "";
            document.getElementsByTagName('body')[0].classList.remove('offcanvas');
          }
        }]);
        return _SearchComponent;
      }();
      _SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || _SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
      };
      _SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _SearchComponent,
        selectors: [["app-search"]],
        decls: 9,
        vars: 9,
        consts: [[1, "form-inline", "search-full"], [1, "form-group", "w-100"], ["type", "text", "autocomplete", "off", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "close-search", 3, "icon", "click"], ["class", "Typeahead-menu", "id", "search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], ["id", "search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.text = $event;
            })("keyup", function SearchComponent_Template_input_keyup_2_listener() {
              return ctx.searchTerm(ctx.text);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-feather-icons", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_app_feather_icons_click_3_listener() {
              return ctx.searchToggle();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 3, 7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Opps!! There are no result found. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.navServices.search);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"]
      });

      /***/
    },

    /***/36290:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"HeaderComponent": function HeaderComponent() {
          return (/* binding */_HeaderComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../services/layout.service */85682);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/nav.service */5897);
      /* harmony import */
      var _elements_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./elements/search/search.component */18249);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./elements/message-box/message-box.component */95895);
      /* harmony import */
      var _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./elements/my-account/my-account.component */32413);
      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(layout, navServices, document) {
          _classCallCheck(this, _HeaderComponent);
          this.layout = layout;
          this.navServices = navServices;
          this.document = document;
          this.dark = this.layout.config.settings.layout_version == 'dark-only' ? true : false;
        }
        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.elem = document.documentElement;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
            this.navServices.megaMenu = false;
            this.navServices.levelMenu = false;
          }
        }, {
          key: "layoutToggle",
          value: function layoutToggle() {
            this.dark = !this.dark;
            this.layout.config.settings.layout_version = this.dark ? 'dark-only' : 'light';
          }
        }, {
          key: "searchToggle",
          value: function searchToggle() {
            this.navServices.search = true;
          }
        }, {
          key: "languageToggle",
          value: function languageToggle() {
            this.navServices.language = !this.navServices.language;
          }
        }, {
          key: "toggleFullScreen",
          value: function toggleFullScreen() {
            this.navServices.fullScreen = !this.navServices.fullScreen;
            if (this.navServices.fullScreen) {
              if (this.elem.requestFullscreen) {
                this.elem.requestFullscreen();
              } else if (this.elem.mozRequestFullScreen) {
                /* Firefox */
                this.elem.mozRequestFullScreen();
              } else if (this.elem.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.elem.webkitRequestFullscreen();
              } else if (this.elem.msRequestFullscreen) {
                /* IE/Edge */
                this.elem.msRequestFullscreen();
              }
            } else {
              if (!this.document.exitFullscreen) {
                this.document.exitFullscreen();
              } else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
              } else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
              } else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
              }
            }
          }
        }]);
        return _HeaderComponent;
      }();
      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_0__.LayoutService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
      };
      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 17,
        vars: 3,
        consts: [[1, "page-header"], [1, "header-wrapper", "row", "m-0"], [1, "header-logo-wrapper"], [1, "logo-wrapper"], ["routerLink", "/"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-light"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-dark"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", 3, "icon"], [1, "left-header", "col", "horizontal-wrapper", "pl-0"], [1, "nav-right", "col-8", "pull-right", "right-header", "p-0"], [1, "nav-menus"], [1, "onhover-dropdown"], [1, "profile-nav", "onhover-dropdown", "p-0"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-search");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_8_listener() {
              return ctx.sidebarToggle();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-feather-icons", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ul", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "li", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "app-message-box");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "li", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-my-account");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", "align-center");
          }
        },
        directives: [_elements_search_search_component__WEBPACK_IMPORTED_MODULE_2__.SearchComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_4__.MessageBoxComponent, _elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_5__.MyAccountComponent],
        styles: [".page-header[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXJ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59Il19 */"]
      });

      /***/
    },

    /***/14649:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/components/layout/content/content.component.ts ***!
      \***********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ContentComponent": function ContentComponent() {
          return (/* binding */_ContentComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! feather-icons */66379);
      /* harmony import */
      var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var _data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../../data/router-animation/router-animation */47028);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../services/nav.service */5897);
      /* harmony import */
      var _services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../services/layout.service */85682);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../header/header.component */36290);
      /* harmony import */
      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../sidebar/sidebar.component */6664);
      /* harmony import */
      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../footer/footer.component */66526);
      var _ContentComponent = /*#__PURE__*/function () {
        function _ContentComponent(route, navServices, layout) {
          var _this12 = this;
          _classCallCheck(this, _ContentComponent);
          this.route = route;
          this.navServices = navServices;
          this.layout = layout;
          this.route.queryParams.subscribe(function (params) {
            _this12.layout.config.settings.layout = params.layout ? params.layout : _this12.layout.config.settings.layout;
          });
        }
        _createClass(_ContentComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
            });
          }
        }, {
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "layoutClass",
          get: function get() {
            switch (this.layout.config.settings.layout) {
              case "Dubai":
                return "compact-wrapper";
              case "London":
                return "only-body";
              case "Seoul":
                return "compact-wrapper modern-type";
              case "LosAngeles":
                return this.navServices.horizontal ? "horizontal-wrapper material-type" : "compact-wrapper material-type";
              case "Paris":
                return "compact-wrapper dark-sidebar";
              case "Tokyo":
                return "compact-sidebar";
              case "Madrid":
                return "compact-wrapper color-sidebar";
              case "Moscow":
                return "compact-sidebar compact-small";
              case "NewYork":
                return "compact-wrapper box-layout";
              case "Singapore":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type" : "compact-wrapper enterprice-type";
              case "Rome":
                return "compact-sidebar compact-small material-icon";
              case "Barcelona":
                return this.navServices.horizontal ? "horizontal-wrapper enterprice-type advance-layout" : "compact-wrapper enterprice-type advance-layout";
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
        return _ContentComponent;
      }();
      _ContentComponent.ɵfac = function ContentComponent_Factory(t) {
        return new (t || _ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_3__.LayoutService));
      };
      _ContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ContentComponent,
        selectors: [["app-content"]],
        decls: 13,
        vars: 8,
        consts: [[3, "ngClass"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [1, "page-body-wrapper"], [1, "sidebar-wrapper"], [1, "page-body"], ["o", "outlet"], [1, "footer"], [1, "bg-overlay1"]],
        template: function ContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-header");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "main");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "router-outlet", null, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "footer", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "div", 7);
          }
          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.layout.config.settings.layout_version);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layout.config.settings.layout_type);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.layoutClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("close_icon", ctx.navServices.collapseSidebar);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("sidebar-layout", ctx.layout.config.settings.sidebar_type);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@fadeInAnimation", ctx.getRouterOutletState(_r0));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"],
        data: {
          animation: [_data_router_animation_router_animation__WEBPACK_IMPORTED_MODULE_1__.fadeInAnimation]
        }
      });

      /***/
    },

    /***/210:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/components/layout/full/full.component.ts ***!
      \*****************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"FullComponent": function FullComponent() {
          return (/* binding */_FullComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */39895);
      var _FullComponent = /*#__PURE__*/function () {
        function _FullComponent() {
          _classCallCheck(this, _FullComponent);
        }
        _createClass(_FullComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
        return _FullComponent;
      }();
      _FullComponent.ɵfac = function FullComponent_Factory(t) {
        return new (t || _FullComponent)();
      };
      _FullComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FullComponent,
        selectors: [["app-full"]],
        decls: 2,
        vars: 0,
        consts: [[1, "page-wrapper"]],
        template: function FullComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      /***/
    },

    /***/90605:
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/loader/loader.component.ts ***!
      \**************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LoaderComponent": function LoaderComponent() {
          return (/* binding */_LoaderComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _LoaderComponent = /*#__PURE__*/function () {
        function _LoaderComponent() {
          var _this13 = this;
          _classCallCheck(this, _LoaderComponent);
          this.show = true;
          setTimeout(function () {
            _this13.show = false;
          }, 3000);
        }
        _createClass(_LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);
        return _LoaderComponent;
      }();
      _LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || _LoaderComponent)();
      };
      _LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LoaderComponent,
        selectors: [["app-loader"]],
        decls: 3,
        vars: 2,
        consts: [[1, "loader-wrapper"], [1, "loader-box"], [1, "loader-16"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
          }
        },
        styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLXdyYXBwZXIubG9kZXJoaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"]
      });

      /***/
    },

    /***/6664:
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
      \****************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"SidebarComponent": function SidebarComponent() {
          return (/* binding */_SidebarComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../services/nav.service */5897);
      /* harmony import */
      var _services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/firebase/auth.service */35873);
      /* harmony import */
      var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../services/layout.service */85682);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ngx-translate/core */29790);
      function SidebarComponent_li_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h6", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, menuItem_r1.headTitle1));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, menuItem_r1.headTitle2));
        }
      }
      function SidebarComponent_li_25_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }
      function SidebarComponent_li_25_a_3_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r1.active ? "down" : "right", " pull-right");
        }
      }
      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };
      function SidebarComponent_li_25_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_25_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
            var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
            return ctx_r13.toggletNavActive(menuItem_r1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_25_a_3_i_6_Template, 1, 3, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("link-nav", !menuItem_r1.children);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, menuItem_r1.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }
      function SidebarComponent_li_25_a_4_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r1.active ? "down" : "right", " pull-right");
        }
      }
      var _c1 = function _c1(a0) {
        return [a0];
      };
      function SidebarComponent_li_25_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_25_a_4_i_6_Template, 1, 3, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("link-nav", !menuItem_r1.children);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c1, menuItem_r1.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, menuItem_r1.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }
      function SidebarComponent_li_25_a_5_i_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r1.active ? "down" : "right", " pull-right");
        }
      }
      function SidebarComponent_li_25_a_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_25_a_5_i_6_Template, 1, 3, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("link-nav", !menuItem_r1.children);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, menuItem_r1.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }
      function SidebarComponent_li_25_a_6_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-angle-", menuItem_r1.active ? "down" : "right", " pull-right");
        }
      }
      function SidebarComponent_li_25_a_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_25_a_6_i_5_Template, 1, 3, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("link-nav", !menuItem_r1.children);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i");
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("fa fa-angle-", childrenItem_r27.active ? "down" : "right", " pull-right");
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_25_ul_7_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
            var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
            return ctx_r35.toggletNavActive(childrenItem_r27);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_25_ul_7_li_1_a_1_i_5_Template, 1, 3, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, childrenItem_r27.title), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_2_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 46);
        }
      }
      var _c2 = function _c2() {
        return {
          exact: true
        };
      };
      function SidebarComponent_li_25_ul_7_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_25_ul_7_li_1_a_2_i_4_Template, 1, 0, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, childrenItem_r27.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, childrenItem_r27.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_3_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 46);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_25_ul_7_li_1_a_3_i_4_Template, 1, 0, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, childrenItem_r27.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 46);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_25_ul_7_li_1_a_4_i_4_Template, 1, 0, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, childrenItem_r27.title));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenSubItem_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenSubItem_r46.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, childrenSubItem_r46.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, childrenSubItem_r46.title), "");
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenSubItem_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r46.type ? null : childrenSubItem_r46.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, childrenSubItem_r46.title));
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenSubItem_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r46.type ? null : childrenSubItem_r46.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, childrenSubItem_r46.title));
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_1_Template, 4, 8, "a", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_2_Template, 4, 6, "a", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_a_3_Template, 4, 4, "a", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenSubItem_r46 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r46.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r46.type === "link");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r46.type === "extLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r46.type === "extTabLink");
        }
      }
      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };
      function SidebarComponent_li_25_ul_7_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_25_ul_7_li_1_ul_5_li_1_Template, 4, 6, "li", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", childrenItem_r27.active ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, childrenItem_r27.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c3, childrenItem_r27.active, !childrenItem_r27.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_25_ul_7_li_1_a_1_Template, 6, 4, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_25_ul_7_li_1_a_2_Template, 5, 9, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_25_ul_7_li_1_a_3_Template, 5, 7, "a", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_25_ul_7_li_1_a_4_Template, 5, 5, "a", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_25_ul_7_li_1_ul_5_Template, 2, 10, "ul", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var childrenItem_r27 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, childrenItem_r27.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "sub");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "link");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extTabLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
        }
      }
      function SidebarComponent_li_25_ul_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_25_ul_7_li_1_Template, 6, 8, "li", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("display", menuItem_r1.active ? "block" : "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, menuItem_r1.active))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c3, menuItem_r1.active, !menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
        }
      }
      function SidebarComponent_li_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_25_div_1_Template, 7, 6, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_li_25_label_2_Template, 2, 4, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_li_25_a_3_Template, 7, 10, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarComponent_li_25_a_4_Template, 7, 13, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_25_a_5_Template, 7, 11, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_25_a_6_Template, 6, 9, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SidebarComponent_li_25_ul_7_Template, 2, 10, "ul", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](menuItem_r1.headTitle1 ? "sidebar-main-title" : "sidebar-list");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, menuItem_r1.active));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.headTitle1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType && menuItem_r1.badgeValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }
      var _c4 = function _c4(a0) {
        return {
          marginLeft: a0
        };
      };
      var _SidebarComponent = /*#__PURE__*/function () {
        function _SidebarComponent(router, navServices, authService, layout) {
          var _this14 = this;
          _classCallCheck(this, _SidebarComponent);
          this.router = router;
          this.navServices = navServices;
          this.authService = authService;
          this.layout = layout;
          // For Horizontal Menu
          this.margin = 0;
          this.width = window.innerWidth;
          this.leftArrowNone = true;
          this.rightArrowNone = false;
          this.navServices.items.subscribe(function (menuItems) {
            _this14.menuItems = menuItems;
            _this14.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                menuItems.filter(function (items) {
                  if (items.path === event.url) {
                    _this14.setNavActive(items);
                  }
                  if (!items.children) {
                    return false;
                  }
                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) {
                      _this14.setNavActive(subItems);
                    }
                    if (!subItems.children) {
                      return false;
                    }
                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) {
                        _this14.setNavActive(subSubItems);
                      }
                    });
                  });
                });
              }
            });
          });
        }
        _createClass(_SidebarComponent, [{
          key: "onResize",
          value: function onResize(event) {
            this.width = event.target.innerWidth - 500;
          }
        }, {
          key: "sidebarToggle",
          value: function sidebarToggle() {
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          }
          // Active Nave state
        }, {
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem !== item) {
                menuItem.active = false;
              }
              if (menuItem.children && menuItem.children.includes(item)) {
                menuItem.active = true;
              }
              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          }
          // Click Toggle menu
        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this15 = this;
            if (!item.active) {
              this.menuItems.forEach(function (a) {
                if (_this15.menuItems.includes(item)) {
                  a.active = false;
                }
                if (!a.children) {
                  return false;
                }
                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }
            item.active = !item.active;
          }
          // For Horizontal Menu
        }, {
          key: "scrollToLeft",
          value: function scrollToLeft() {
            if (this.margin >= -this.width) {
              this.margin = 0;
              this.leftArrowNone = true;
              this.rightArrowNone = false;
            } else {
              this.margin += this.width;
              this.rightArrowNone = false;
            }
          }
        }, {
          key: "scrollToRight",
          value: function scrollToRight() {
            if (this.margin <= -3051) {
              this.margin = -3464;
              this.leftArrowNone = false;
              this.rightArrowNone = true;
            } else {
              this.margin += -this.width;
              this.leftArrowNone = false;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.SignOut();
          }
        }]);
        return _SidebarComponent;
      }();
      _SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || _SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService));
      };
      _SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _SidebarComponent,
        selectors: [["app-sidebar"]],
        hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveWindow"]);
          }
        },
        decls: 31,
        vars: 11,
        consts: [[1, "logo-wrapper"], ["routerLink", "/"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-light", "w-50"], ["src", "assets/images/logo/logo.png", "alt", "", 1, "img-fluid", "for-dark", "w-50"], [1, "back-btn", 3, "click"], [1, "fa", "fa-angle-left"], [1, "toggle-sidebar", 3, "click"], [1, "status_toggle", "middle", "sidebar-toggle", 3, "icon"], [1, "logo-icon-wrapper"], ["href", "javascript:void(0)"], [1, "sidebar-main"], ["id", "left-arrow", 1, "left-arrow", 3, "click"], [3, "icon"], ["id", "sidebar-menu", 3, "ngStyle"], [1, "sidebar-links", "custom-scrollbar"], [1, "back-btn"], [1, "mobile-back", "text-right", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-angle-right", "pl-2"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "mobileView", 3, "click"], ["id", "right-arrow", 1, "right-arrow", 3, "click"], [3, "ngClass"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["href", "javascript:void(0)", "class", "sidebar-link sidebar-title", 3, "link-nav", "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-link sidebar-title", 3, "routerLink", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["target", "_blank", "class", "sidebar-link sidebar-title", 3, "href", "link-nav", "ngClass", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", "display", 4, "ngIf"], [1, "lan-1"], [1, "lan-2"], ["href", "javascript:void(0)", 1, "sidebar-link", "sidebar-title", 3, "ngClass", "click"], [1, "according-menu"], ["routerLinkActive", "active", 1, "sidebar-link", "sidebar-title", 3, "routerLink", "ngClass"], [1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], ["target", "_blank", 1, "sidebar-link", "sidebar-title", 3, "href", "ngClass"], [1, "sidebar-submenu", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "submenu-title", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["class", "submenu-title", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "nav-sub-childmenu submenu-content", 3, "ngClass", "display", 4, "ngIf"], ["href", "javascript:void(0)", 1, "submenu-title", 3, "click"], ["routerLinkActive", "active", 1, "submenu-title", 3, "routerLink", "routerLinkActiveOptions"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 1, "submenu-title", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 1, "submenu-title", 3, "href"], [1, "nav-sub-childmenu", "submenu-content", 3, "ngClass"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_4_listener() {
              return ctx.sidebarToggle();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_6_listener() {
              return ctx.sidebarToggle();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-feather-icons", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "m");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "nav", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_13_listener() {
              return ctx.scrollToLeft();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "app-feather-icons", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "m");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_21_listener() {
              return ctx.sidebarToggle();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Back");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, SidebarComponent_li_25_Template, 8, 12, "li", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_27_listener() {
              return ctx.logout();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_Template_div_click_29_listener() {
              return ctx.scrollToRight();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-feather-icons", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "grid");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("d-none", ctx.leftArrowNone);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "arrow-left");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c4, ctx.layout.config.settings.layout == "Rome" || "Singapore" || "Barcelona" ? ctx.margin + "px" : "0px"));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("d-none", ctx.rightArrowNone);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "arrow-right");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
        styles: [".mobileView {\n  display: none;\n}\n\n@media only screen and (max-width: 540px) {\n  .mobileView {\n    display: block;\n  }\n\n  .page-wrapper.compact-wrapper .nav-right .nav-menus {\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLGNBQUE7RUFFTjs7RUFBRTtJQUNJLGlCQUFBO0VBR047QUFDRiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYmlsZVZpZXd7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NDBweCkge1xyXG4gICAgLm1vYmlsZVZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucGFnZS13cmFwcGVyLmNvbXBhY3Qtd3JhcHBlciAubmF2LXJpZ2h0IC5uYXYtbWVudXMge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG59Il19 */"],
        encapsulation: 2
      });

      /***/
    },

    /***/61916:
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
      \**********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"TapToTopComponent": function TapToTopComponent() {
          return (/* binding */_TapToTopComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../feather-icons/feather-icons.component */61676);
      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };
      var _TapToTopComponent = /*#__PURE__*/function () {
        function _TapToTopComponent(viewScroller) {
          _classCallCheck(this, _TapToTopComponent);
          this.viewScroller = viewScroller;
          this.show = false;
        }
        _createClass(_TapToTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          // @HostListener Decorator
        }, {
          key: "onWindowScroll",
          value: function onWindowScroll() {
            var number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (number > 600) {
              this.show = true;
            } else {
              this.show = false;
            }
          }
        }, {
          key: "tapToTop",
          value: function tapToTop() {
            this.viewScroller.scrollToPosition([0, 0]);
          }
        }]);
        return _TapToTopComponent;
      }();
      _TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
        return new (t || _TapToTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };
      _TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TapToTopComponent,
        selectors: [["app-tap-to-top"]],
        hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 4,
        consts: [[1, "tap-top", 3, "ngStyle", "click"], [3, "icon"]],
        template: function TapToTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
              return ctx.tapToTop();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-feather-icons", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show ? "block" : "none"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "chevrons-up");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXAtdG8tdG9wLmNvbXBvbmVudC5zY3NzIn0= */"]
      });

      /***/
    },

    /***/47028:
    /*!******************************************************************!*\
      !*** ./src/app/shared/data/router-animation/router-animation.ts ***!
      \******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"fadeInAnimation": function fadeInAnimation() {
          return (/* binding */_fadeInAnimation
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/animations */17238);
      var _fadeInAnimation = (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInAnimation', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'relative'
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      })], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '0'
      }))], {
        optional: true
      }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('.2s ease-in-out', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
        opacity: '1'
      }))], {
        delay: 300,
        optional: true
      })]), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)(), {
        optional: true
      })])]);

      /***/
    },

    /***/87500:
    /*!******************************************************************!*\
      !*** ./src/app/shared/directives/disable-key-press.directive.ts ***!
      \******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"DisableKeyPressDirective": function DisableKeyPressDirective() {
          return (/* binding */_DisableKeyPressDirective
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _DisableKeyPressDirective = /*#__PURE__*/function () {
        function _DisableKeyPressDirective() {
          _classCallCheck(this, _DisableKeyPressDirective);
          this.autocomplete = 'off';
        }
        _createClass(_DisableKeyPressDirective, [{
          key: "disableKeys",
          value: function disableKeys(event) {
            event.preventDefault();
          }
        }]);
        return _DisableKeyPressDirective;
      }();
      _DisableKeyPressDirective.ɵfac = function DisableKeyPressDirective_Factory(t) {
        return new (t || _DisableKeyPressDirective)();
      };
      _DisableKeyPressDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DisableKeyPressDirective,
        selectors: [["", "disableKeyPress", ""]],
        hostVars: 1,
        hostBindings: function DisableKeyPressDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function DisableKeyPressDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });

      /***/
    },

    /***/33177:
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/only-alphabets.directive.ts ***!
      \***************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"OnlyAlphabetsDirective": function OnlyAlphabetsDirective() {
          return (/* binding */_OnlyAlphabetsDirective
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _OnlyAlphabetsDirective = /*#__PURE__*/function () {
        function _OnlyAlphabetsDirective() {
          _classCallCheck(this, _OnlyAlphabetsDirective);
          this.autocomplete = 'off';
        }
        _createClass(_OnlyAlphabetsDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode;
            return e.keyCode === 8 || e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90;
          }
        }]);
        return _OnlyAlphabetsDirective;
      }();
      _OnlyAlphabetsDirective.ɵfac = function OnlyAlphabetsDirective_Factory(t) {
        return new (t || _OnlyAlphabetsDirective)();
      };
      _OnlyAlphabetsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyAlphabetsDirective,
        selectors: [["", "onlyAlphabets", ""]],
        hostVars: 1,
        hostBindings: function OnlyAlphabetsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyAlphabetsDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });

      /***/
    },

    /***/5262:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/only-numbers.directive.ts ***!
      \*************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"OnlyNumbersDirective": function OnlyNumbersDirective() {
          return (/* binding */_OnlyNumbersDirective
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _OnlyNumbersDirective = /*#__PURE__*/function () {
        function _OnlyNumbersDirective() {
          _classCallCheck(this, _OnlyNumbersDirective);
          this.autocomplete = 'off';
        }
        _createClass(_OnlyNumbersDirective, [{
          key: "disableKeys",
          value: function disableKeys(e) {
            document.all ? e.keyCode : e.keyCode;
            return e.keyCode == 8 || e.keyCode >= 48 && e.keyCode <= 57;
          }
        }]);
        return _OnlyNumbersDirective;
      }();
      _OnlyNumbersDirective.ɵfac = function OnlyNumbersDirective_Factory(t) {
        return new (t || _OnlyNumbersDirective)();
      };
      _OnlyNumbersDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _OnlyNumbersDirective,
        selectors: [["", "onlyNumbers", ""]],
        hostVars: 1,
        hostBindings: function OnlyNumbersDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OnlyNumbersDirective_keypress_HostBindingHandler($event) {
              return ctx.disableKeys($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("autocomplete", ctx.autocomplete);
          }
        }
      });

      /***/
    },

    /***/84177:
    /*!*************************************************************!*\
      !*** ./src/app/shared/directives/show-options.directive.ts ***!
      \*************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ShowOptionsDirective": function ShowOptionsDirective() {
          return (/* binding */_ShowOptionsDirective
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _ShowOptionsDirective = /*#__PURE__*/function () {
        function _ShowOptionsDirective(elRef, renderer) {
          _classCallCheck(this, _ShowOptionsDirective);
          this.elRef = elRef;
          this.renderer = renderer;
          this.options = false;
        }
        _createClass(_ShowOptionsDirective, [{
          key: "openOptions",
          value: function openOptions() {
            this.options = !this.options;
          }
        }, {
          key: "setStyle",
          value: function setStyle() {
            this.options = this.options === true ? false : true;
            if (this.options) {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '230px');
            } else {
              this.renderer.setStyle(this.elRef.nativeElement, 'width', '35px');
            }
          }
        }]);
        return _ShowOptionsDirective;
      }();
      _ShowOptionsDirective.ɵfac = function ShowOptionsDirective_Factory(t) {
        return new (t || _ShowOptionsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };
      _ShowOptionsDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ShowOptionsDirective,
        selectors: [["", "appShowOptions", ""]],
        hostBindings: function ShowOptionsDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowOptionsDirective_click_HostBindingHandler() {
              return ctx.openOptions();
            });
          }
        }
      });

      /***/
    },

    /***/60908:
    /*!*************************************************************!*\
      !*** ./src/app/shared/guard/SecureInnerPagesGuard.guard.ts ***!
      \*************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"SecureInnerPagesGuard": function SecureInnerPagesGuard() {
          return (/* binding */_SecureInnerPagesGuard
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../services/auth-guard.service */45510);
      /* harmony import */
      var _services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/local.service */30652);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */39895);
      var _SecureInnerPagesGuard = /*#__PURE__*/function () {
        function _SecureInnerPagesGuard(authService, localService, router) {
          _classCallCheck(this, _SecureInnerPagesGuard);
          this.authService = authService;
          this.localService = localService;
          this.router = router;
        }
        _createClass(_SecureInnerPagesGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            // Guard for user is login or not
            var user = this.localService.getJsonValue('authUser');
            if (user) {
              if (Object.keys(user).length > -1) {
                this.router.navigate(['']);
                return true;
              }
            }
            return true;
          }
        }]);
        return _SecureInnerPagesGuard;
      }();
      _SecureInnerPagesGuard.ɵfac = function SecureInnerPagesGuard_Factory(t) {
        return new (t || _SecureInnerPagesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };
      _SecureInnerPagesGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _SecureInnerPagesGuard,
        factory: _SecureInnerPagesGuard.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/85857:
    /*!*********************************************!*\
      !*** ./src/app/shared/guard/admin.guard.ts ***!
      \*********************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AdminGuard": function AdminGuard() {
          return (/* binding */_AdminGuard
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../services/auth-guard.service */45510);
      /* harmony import */
      var _services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../services/local.service */30652);
      var _AdminGuard = /*#__PURE__*/function () {
        function _AdminGuard(router, authService, localService) {
          _classCallCheck(this, _AdminGuard);
          this.router = router;
          this.authService = authService;
          this.localService = localService;
        }
        //   canActivate(): boolean {
        //   if (!this.authService.getToken()) {
        //     this.router.navigateByUrl("/login");
        //   }
        //   return this.authService.getToken();
        // }
        _createClass(_AdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            // Guard for user is login or not
            var user = this.localService.getJsonValue('authUser');
            if (!user) {
              this.router.navigate(['/auth/login']);
              return true;
            } else if (user) {
              if (!Object.keys(user).length) {
                this.router.navigate(['/registration']);
                return true;
              }
            }
            return true;
          }
        }]);
        return _AdminGuard;
      }();
      _AdminGuard.ɵfac = function AdminGuard_Factory(t) {
        return new (t || _AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_local_service__WEBPACK_IMPORTED_MODULE_1__.LocalService));
      };
      _AdminGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AdminGuard,
        factory: _AdminGuard.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/46382:
    /*!*****************************************!*\
      !*** ./src/app/shared/routes/routes.ts ***!
      \*****************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"content": function content() {
          return (/* binding */_content
          );
        }
        /* harmony export */
      });
      var _content = [{
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("default-src_app_shared_services_helper_service_ts"), __webpack_require__.e("default-node_modules_ng2-google-charts___ivy_ngcc___fesm2015_ng2-google-charts_js"), __webpack_require__.e("src_app_components_apps_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/dashboard/dashboard.module */26389)).then(function (m) {
            return m.dashboardModule;
          });
        }
      }, {
        path: 'expenses',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("default-src_app_shared_services_helper_service_ts"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js-n-98762d"), __webpack_require__.e("default-node_modules_ng2-google-charts___ivy_ngcc___fesm2015_ng2-google-charts_js"), __webpack_require__.e("src_app_components_apps_expenses_expenses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/expenses/expenses.module */17045)).then(function (m) {
            return m.expensesModule;
          });
        }
      }, {
        path: 'financial-statement',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("src_app_components_apps_financial_financial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/financial/financial.module */32963)).then(function (m) {
            return m.financialModule;
          });
        }
      }, {
        path: 'accounts-payable',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("default-src_app_shared_services_helper_service_ts"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js-n-98762d"), __webpack_require__.e("src_app_components_apps_paybale_payable_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/paybale/payable.module */76381)).then(function (m) {
            return m.payableModule;
          });
        }
      }, {
        path: 'accounts-recievable',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("default-src_app_shared_services_helper_service_ts"), __webpack_require__.e("default-node_modules_swimlane_ngx-datatable___ivy_ngcc___fesm2015_swimlane-ngx-datatable_js-n-98762d"), __webpack_require__.e("src_app_components_apps_recievable_recievable_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/recievable/recievable.module */57454)).then(function (m) {
            return m.recievableModule;
          });
        }
      }, {
        path: 'documents',
        loadChildren: function loadChildren() {
          return Promise.all( /*! import() */[__webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-c0dc9b"), __webpack_require__.e("default-src_app_shared_services_helper_service_ts"), __webpack_require__.e("src_app_components_apps_documents_documents_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/documents/documents.module */26287)).then(function (m) {
            return m.documentsModule;
          });
        }
      }, {
        path: 'chats',
        loadChildren: function loadChildren() {
          return __webpack_require__.e( /*! import() */"src_app_components_apps_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/apps/chat/chat.module */68470)).then(function (m) {
            return m.chatModule;
          });
        }
      }];

      /***/
    },

    /***/45510:
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/auth-guard.service.ts ***!
      \*******************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AuthGuardService": function AuthGuardService() {
          return (/* binding */_AuthGuardService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _local_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./local.service */30652);
      var _AuthGuardService = /*#__PURE__*/function () {
        function _AuthGuardService(localService) {
          _classCallCheck(this, _AuthGuardService);
          this.localService = localService;
        }
        _createClass(_AuthGuardService, [{
          key: "getToken",
          value: function getToken() {
            return !!this.localService.getJsonValue('authUser');
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var loggedIn = false;
            var expiration = this.getExpiration();
            if (expiration) {
              return Date.now() < expiration;
            }
            return loggedIn;
          }
        }, {
          key: "getExpiration",
          value: function getExpiration() {
            var expiresAt = null;
            var expiration = localStorage.getItem("expires_at");
            if (expiration) {
              expiresAt = JSON.parse(expiration);
            }
            return expiresAt;
          }
        }]);
        return _AuthGuardService;
      }();
      _AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || _AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_0__.LocalService));
      };
      _AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuardService,
        factory: _AuthGuardService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/88925:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/chat.service.ts ***!
      \*************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"ChatService": function ChatService() {
          return (/* binding */_ChatService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */26215);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */69165);
      /* harmony import */
      var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! socket.io-client */43289);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      var _ChatService = /*#__PURE__*/function () {
        function _ChatService() {
          var _this16 = this;
          _classCallCheck(this, _ChatService);
          this.getmessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.online$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.offline$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.options = {
            rememberUpgrade: true,
            secure: true,
            rejectUnauthorized: false
          };
          // socket = io('https://monily-mobile-app.herokuapp.com');
          this.socket = (0, socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)('http://192.168.1.103:3000');
          this.getNewMessage = function () {
            _this16.socket.on('message', function (messageInfo, socket) {
              _this16.message$.next(messageInfo);
            });
            return _this16.message$.asObservable();
          };
          this.getMessage = function () {
            _this16.socket.on('message', function (messageInfo, socket) {
              _this16.getmessage$.next(messageInfo);
            });
            return _this16.message$.asObservable();
          };
        }
        _createClass(_ChatService, [{
          key: "sendMessage",
          value: function sendMessage(messageInfo) {
            this.socket.emit('message', messageInfo);
          }
        }, {
          key: "typing",
          value: function typing(_ref) {
            var user = _ref.user,
              status = _ref.status;
            this.socket.emit('typing', {
              user: user,
              status: status
            });
          }
        }, {
          key: "display",
          value: function display() {
            var _this17 = this;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable.create(function (observer) {
              _this17.socket.on('typing', function (typing) {
                observer.next(typing);
              });
            });
          }
        }, {
          key: "online",
          value: function online(_ref2) {
            var user = _ref2.user;
            this.socket.emit('online', {
              user: user
            });
          }
        }, {
          key: "offline",
          value: function offline(_ref3) {
            var user = _ref3.user;
            this.socket.emit('offline', {
              user: user
            });
          }
        }, {
          key: "onlineStatus",
          value: function onlineStatus() {
            var _this18 = this;
            this.socket.on('online', function (user) {
              _this18.online$.next(user);
            });
            return this.online$.asObservable();
          }
        }, {
          key: "offlineStatus",
          value: function offlineStatus() {
            var _this19 = this;
            this.socket.on('offline', function (user) {
              _this19.offline$.next(user);
            });
            return this.offline$.asObservable();
          }
        }]);
        return _ChatService;
      }();
      _ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || _ChatService)();
      };
      _ChatService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ChatService,
        factory: _ChatService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/35873:
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/firebase/auth.service.ts ***!
      \**********************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"AuthService": function AuthService() {
          return (/* binding */_AuthService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/environments/environment */92340);
      /* harmony import */
      var _universal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../universal.service */77537);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common/http */91841);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ngx-cookie-service */31584);
      /* harmony import */
      var _local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../local.service */30652);
      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http, router, ngZone, toster, cookieService, localService) {
          _classCallCheck(this, _AuthService);
          this.http = http;
          this.router = router;
          this.ngZone = ngZone;
          this.toster = toster;
          this.cookieService = cookieService;
          this.localService = localService;
          this.showLoader = false;
          this.authToken = this.localService.getJsonValue('authUser');
        }
        _createClass(_AuthService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          // sign in function
          // SignIn(email, password) {
          //   return this.http.post(`https://monilyapp.yourhealthgrades.com/api/quickbooks/login?email=${email}&password=${password}`, {}, {});
          //   //     this.toster.error('You have enter Wrong Email or Password.');
          // }
        }, {
          key: "SignIn",
          value: function SignIn(email, password) {
            var headerT = {
              "Access-Control-Allow-Origin": '*',
              Accept: "application/json"
            };
            return this.http.post("https://monilyapp.yourhealthgrades.com/api/quickbooks/login?email=".concat(email, "&password=").concat(password), {}, {
              headers: headerT
            });
          }
          // Sign out
        }, {
          key: "SignOut",
          value: function SignOut() {
            var _this20 = this;
            _universal_service__WEBPACK_IMPORTED_MODULE_1__.UniversalService.companyModal.next(false);
            setTimeout(function () {
              _this20.localService.clearToken();
              _this20.cookieService.deleteAll('user', '/auth/login');
              _this20.router.navigate(['/auth/login']);
            }, 1000);
          }
        }, {
          key: "getChat",
          value: function getChat(link, token) {
            var _a;
            var header = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": '*',
              Accept: "application/json"
            };
            var headerT = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": '*',
              Authorization: "Bearer ".concat((_a = this.authToken) === null || _a === void 0 ? void 0 : _a.authtoken),
              Accept: "application/json"
            };
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.chatURL + link, {
              headers: !token ? header : headerT
            });
          }
        }, {
          key: "postChat",
          value: function postChat(link) {
            var _a;
            var headerT = {
              Authorization: "Bearer ".concat((_a = this.authToken) === null || _a === void 0 ? void 0 : _a.authtoken),
              Accept: "application/json"
            };
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.chatURL + link, {}, {
              headers: headerT
            });
          }
        }, {
          key: "uploadImage",
          value: function uploadImage(link, payload) {
            var _a;
            var headerT = {
              Authorization: "Bearer ".concat((_a = this.authToken) === null || _a === void 0 ? void 0 : _a.authtoken),
              Accept: "application/json"
            };
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.chatURL + link, payload, {
              headers: headerT
            });
          }
        }, {
          key: "getMonilyData",
          value: function getMonilyData(link, token) {
            var _a;
            var header = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": '*',
              Accept: "application/json"
            };
            var headerT = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": '*',
              Authorization: "Bearer ".concat((_a = this.authToken) === null || _a === void 0 ? void 0 : _a.authtoken),
              Accept: "application/json"
            };
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.monilyURL + link, {
              headers: !token ? header : headerT
            });
          }
        }]);
        return _AuthService;
      }();
      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_local_service__WEBPACK_IMPORTED_MODULE_2__.LocalService));
      };
      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/85682:
    /*!***************************************************!*\
      !*** ./src/app/shared/services/layout.service.ts ***!
      \***************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LayoutService": function LayoutService() {
          return (/* binding */_LayoutService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */37716);
      var _LayoutService = /*#__PURE__*/_createClass(function _LayoutService() {
        _classCallCheck(this, _LayoutService);
        this.config = {
          settings: {
            layout: 'Dubai',
            layout_type: 'ltr',
            layout_version: 'light-only',
            sidebar_type: 'default-sidebar'
          },
          color: {
            primary_color: '#7366ff',
            secondary_color: '#f73164'
          }
        };
        if (this.config.settings.layout_type == 'rtl') document.getElementsByTagName('html')[0].setAttribute('dir', this.config.settings.layout_type);
        document.documentElement.style.setProperty('--theme-deafult', this.config.color.primary_color);
        document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);
      });
      _LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || _LayoutService)();
      };
      _LayoutService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _LayoutService,
        factory: _LayoutService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/30652:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/local.service.ts ***!
      \**************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"LocalService": function LocalService() {
          return (/* binding */_LocalService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./storage.service */1303);
      var _LocalService = /*#__PURE__*/function () {
        function _LocalService(storageService) {
          _classCallCheck(this, _LocalService);
          this.storageService = storageService;
        }
        // Set the json data to local storage
        _createClass(_LocalService, [{
          key: "setJsonValue",
          value: function setJsonValue(key, value) {
            this.storageService.secureStorage.setItem(key, value);
          }
          // Get the json value from local storage
        }, {
          key: "getJsonValue",
          value: function getJsonValue(key) {
            return this.storageService.secureStorage.getItem(key);
          }
          // Clear the local storage
        }, {
          key: "clearToken",
          value: function clearToken() {
            return this.storageService.secureStorage.clear();
          }
        }]);
        return _LocalService;
      }();
      _LocalService.ɵfac = function LocalService_Factory(t) {
        return new (t || _LocalService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService));
      };
      _LocalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _LocalService,
        factory: _LocalService.ɵfac,
        providedIn: "root"
      });

      /***/
    },

    /***/5897:
    /*!************************************************!*\
      !*** ./src/app/shared/services/nav.service.ts ***!
      \************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"NavService": function NavService() {
          return (/* binding */_NavService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! rxjs */79765);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */26215);
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */22759);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */54395);
      /* harmony import */
      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */46782);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/router */39895);
      var _NavService = /*#__PURE__*/function () {
        function _NavService(router) {
          var _this21 = this;
          _classCallCheck(this, _NavService);
          this.router = router;
          this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
          this.screenWidth = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(window.innerWidth);
          // Search Box
          this.search = false;
          // Language
          this.language = false;
          // Mega Menu
          this.megaMenu = false;
          this.levelMenu = false;
          this.megaMenuColapse = window.innerWidth < 1199 ? true : false;
          // Collapse Sidebar
          this.collapseSidebar = window.innerWidth < 991 ? true : false;
          // For Horizontal Layout Mobile
          this.horizontal = window.innerWidth < 991 ? false : true;
          // Full screen
          this.fullScreen = false;
          this.MENUITEMS = [{
            path: "dashboard",
            title: "Dashboard",
            icon: "home",
            type: "link"
          }, {
            path: "expenses",
            title: "Expenses",
            icon: "credit-card",
            type: "link"
          }, {
            path: "accounts-payable",
            title: "Accounts Payable",
            icon: "dollar-sign",
            type: "link"
          }, {
            path: "accounts-recievable",
            title: "Accounts Recievable",
            icon: "dollar-sign",
            type: "link"
          }, {
            path: "financial-statement",
            title: "Financial Statement",
            icon: "bar-chart",
            type: "link"
          }, {
            path: "documents",
            title: "Documents",
            icon: "file-text",
            type: "link"
          }];
          // Array
          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
          this.setScreenWidth(window.innerWidth);
          (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, "resize").pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(1000), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.unsubscriber)).subscribe(function (evt) {
            _this21.setScreenWidth(evt.target.innerWidth);
            if (evt.target.innerWidth < 991) {
              _this21.collapseSidebar = true;
              _this21.megaMenu = false;
              _this21.levelMenu = false;
            }
            if (evt.target.innerWidth < 1199) {
              _this21.megaMenuColapse = true;
            }
          });
          if (window.innerWidth < 991) {
            // Detect Route change sidebar close
            this.router.events.subscribe(function (event) {
              _this21.collapseSidebar = true;
              _this21.megaMenu = false;
              _this21.levelMenu = false;
            });
          }
        }
        _createClass(_NavService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscriber.next();
            this.unsubscriber.complete();
          }
        }, {
          key: "setScreenWidth",
          value: function setScreenWidth(width) {
            this.screenWidth.next(width);
          }
        }]);
        return _NavService;
      }();
      _NavService.ɵfac = function NavService_Factory(t) {
        return new (t || _NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };
      _NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
        token: _NavService,
        factory: _NavService.ɵfac,
        providedIn: "root"
      });

      /***/
    },

    /***/1303:
    /*!****************************************************!*\
      !*** ./src/app/shared/services/storage.service.ts ***!
      \****************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"StorageService": function StorageService() {
          return (/* binding */_StorageService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var secure_web_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! secure-web-storage */55968);
      /* harmony import */
      var secure_web_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(secure_web_storage__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */
      var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! crypto-js */2527);
      /* harmony import */
      var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      var SECRET_KEY = 'secret_key';
      var _StorageService = /*#__PURE__*/_createClass(function _StorageService() {
        _classCallCheck(this, _StorageService);
        this.secureStorage = new (secure_web_storage__WEBPACK_IMPORTED_MODULE_0___default())(localStorage, {
          hash: function hash(key) {
            key = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().SHA256(key, SECRET_KEY);
            return key.toString();
          },
          // Encrypt the localstorage data
          encrypt: function encrypt(data) {
            data = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.encrypt(data, SECRET_KEY);
            data = data.toString();
            return data;
          },
          // Decrypt the encrypted data
          decrypt: function decrypt(data) {
            data = crypto_js__WEBPACK_IMPORTED_MODULE_1___default().AES.decrypt(data, SECRET_KEY);
            data = data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1___default().enc.Utf8);
            return data;
          }
        });
      });
      _StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || _StorageService)();
      };
      _StorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _StorageService,
        factory: _StorageService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/77537:
    /*!******************************************************!*\
      !*** ./src/app/shared/services/universal.service.ts ***!
      \******************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"UniversalService": function UniversalService() {
          return (/* binding */_UniversalService
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! rxjs */79765);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      var _UniversalService = /*#__PURE__*/_createClass(function _UniversalService() {
        _classCallCheck(this, _UniversalService);
      });
      _UniversalService.login = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      _UniversalService.companyModal = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      _UniversalService.companySelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      _UniversalService.ɵfac = function UniversalService_Factory(t) {
        return new (t || _UniversalService)();
      };
      _UniversalService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _UniversalService,
        factory: _UniversalService.ɵfac,
        providedIn: 'root'
      });

      /***/
    },

    /***/44466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"SharedModule": function SharedModule() {
          return (/* binding */_SharedModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__( /*! @ng-bootstrap/ng-bootstrap */12664);
      /* harmony import */
      var ng2_dragula__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__( /*! ng2-dragula */88989);
      /* harmony import */
      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__( /*! @ngx-translate/core */29790);
      /* harmony import */
      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./components/breadcrumb/breadcrumb.component */41299);
      /* harmony import */
      var _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./components/customizer/customizer.component */35831);
      /* harmony import */
      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./components/feather-icons/feather-icons.component */61676);
      /* harmony import */
      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/footer/footer.component */66526);
      /* harmony import */
      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/header/header.component */36290);
      /* harmony import */
      var _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/layout/content/content.component */14649);
      /* harmony import */
      var _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./components/layout/full/full.component */210);
      /* harmony import */
      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/loader/loader.component */90605);
      /* harmony import */
      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/sidebar/sidebar.component */6664);
      /* harmony import */
      var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/tap-to-top/tap-to-top.component */61916);
      /* harmony import */
      var _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/header/elements/search/search.component */18249);
      /* harmony import */
      var _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./components/header/elements/languages/languages.component */85607);
      /* harmony import */
      var _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./components/header/elements/notification/notification.component */22666);
      /* harmony import */
      var _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./components/header/elements/bookmark/bookmark.component */38400);
      /* harmony import */
      var _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./components/header/elements/cart/cart.component */88204);
      /* harmony import */
      var _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./components/header/elements/message-box/message-box.component */95895);
      /* harmony import */
      var _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./components/header/elements/my-account/my-account.component */32413);
      /* harmony import */
      var _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./directives/disable-key-press.directive */87500);
      /* harmony import */
      var _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./directives/only-alphabets.directive */33177);
      /* harmony import */
      var _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./directives/only-numbers.directive */5262);
      /* harmony import */
      var _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! ./directives/show-options.directive */84177);
      /* harmony import */
      var _services_chat_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./services/chat.service */88925);
      /* harmony import */
      var _services_layout_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./services/layout.service */85682);
      /* harmony import */
      var _services_nav_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./services/nav.service */5897);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @angular/core */37716);

      // Components

      // Header Elements Components

      // Directives

      // Services
      var _SharedModule = /*#__PURE__*/_createClass(function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      });
      _SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };
      _SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_23__.NavService, _services_chat_service__WEBPACK_IMPORTED_MODULE_21__.ChatService, _services_layout_service__WEBPACK_IMPORTED_MODULE_22__.LayoutService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_29__.DragulaModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](_SharedModule, {
          declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.SidebarComponent, _components_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_1__.CustomizerComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _components_layout_full_full_component__WEBPACK_IMPORTED_MODULE_6__.FullComponent, _directives_show_options_directive__WEBPACK_IMPORTED_MODULE_20__.ShowOptionsDirective, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_9__.TapToTopComponent, _components_header_elements_search_search_component__WEBPACK_IMPORTED_MODULE_10__.SearchComponent, _components_header_elements_languages_languages_component__WEBPACK_IMPORTED_MODULE_11__.LanguagesComponent, _components_header_elements_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__.NotificationComponent, _components_header_elements_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_13__.BookmarkComponent, _components_header_elements_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__.CartComponent, _components_header_elements_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_15__.MessageBoxComponent, _components_header_elements_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_16__.MyAccountComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_29__.DragulaModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule],
          exports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_28__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__.TranslateModule, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_9__.TapToTopComponent, _directives_disable_key_press_directive__WEBPACK_IMPORTED_MODULE_17__.DisableKeyPressDirective, _directives_only_alphabets_directive__WEBPACK_IMPORTED_MODULE_18__.OnlyAlphabetsDirective, _directives_only_numbers_directive__WEBPACK_IMPORTED_MODULE_19__.OnlyNumbersDirective]
        });
      })();

      /***/
    },

    /***/92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"environment": function environment() {
          return (/* binding */_environment
          );
        }
        /* harmony export */
      });
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      var _environment = {
        production: true,
        api: {
          loginUrl: "https://monilyapp.yourhealthgrades.com/api/quickbooks/",
          chatURL: 'https://monilyapp.yourhealthgrades.com/api/chat/',
          quickbooksURL: 'https://quickbooks.api.intuit.com/v3/company',
          monilyURL: 'https://monilyapp.yourhealthgrades.com/api/quickbooks/'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */
      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */39075);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./app/app.module */36747);
      /* harmony import */
      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */92340);
      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });

      /***/
    },

    /***/42480:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/
    /***/
    function _() {

      /* (ignored) */

      /***/}
  }, /******/function (__webpack_require__) {
    // webpackRuntimeModules
    /******/
    "use strict";

    /******/
    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/
    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/
    var __webpack_exports__ = __webpack_require__.O();
    /******/
  }]);
})();
//# sourceMappingURL=main-es5.js.map