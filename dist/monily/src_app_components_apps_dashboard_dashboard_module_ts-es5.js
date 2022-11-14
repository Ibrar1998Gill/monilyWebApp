(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_dashboard_dashboard_module_ts"], {
    /***/4864:
    /*!***********************************************************************!*\
      !*** ./src/app/components/apps/dashboard/dashboard-routing.module.ts ***!
      \***********************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"dashboardRoutingModule": function dashboardRoutingModule() {
          return (/* binding */_dashboardRoutingModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */39895);
      /* harmony import */
      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./dashboard.component */26350);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */37716);
      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.dashboardComponent
        }]
      }];
      var _dashboardRoutingModule = /*#__PURE__*/_createClass(function _dashboardRoutingModule() {
        _classCallCheck(this, _dashboardRoutingModule);
      });
      _dashboardRoutingModule.ɵfac = function dashboardRoutingModule_Factory(t) {
        return new (t || _dashboardRoutingModule)();
      };
      _dashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _dashboardRoutingModule
      });
      _dashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_dashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();

      /***/
    },

    /***/26350:
    /*!******************************************************************!*\
      !*** ./src/app/components/apps/dashboard/dashboard.component.ts ***!
      \******************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"dashboardComponent": function dashboardComponent() {
          return (/* binding */_dashboardComponent
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! tslib */64762);
      /* harmony import */
      var src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/shared/services/universal.service */77537);
      /* harmony import */
      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! moment */16738);
      /* harmony import */
      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/core */37716);
      /* harmony import */
      var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/services/firebase/auth.service */35873);
      /* harmony import */
      var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/shared/services/local.service */30652);
      /* harmony import */
      var _shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../shared/services/helper.service */21785);
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-toastr */49344);
      /* harmony import */
      var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../../shared/components/breadcrumb/breadcrumb.component */41299);
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ng-apexcharts */46505);
      /* harmony import */
      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ng2-google-charts */46092);
      var _c0 = ["chart"];
      function dashboardComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
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
        }
      }
      // import * as top10ExpensesFunc from '../../../../helpers/helper'
      var _dashboardComponent = /*#__PURE__*/function () {
        function _dashboardComponent(cd, http, localService, helperService, toasterService) {
          _classCallCheck(this, _dashboardComponent);
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
              colors: ["#f8d62b", "#51bb25", "#a927f9", this.secondary_color, this.primary_color],
              backgroundColor: "#FEF5ED"
            }
          };
          this.bar = {
            series: [{
              name: "USD",
              data: [this.profitAndLoss, this.expensesBar]
            }],
            noData: {
              text: 'Loading...'
            },
            colors: [this.secondary_color],
            chart: {
              type: "bar",
              height: 185
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: true
            },
            xaxis: {
              categories: ["Income", "Expenses"]
            }
          };
        }
        _createClass(_dashboardComponent, [{
          key: "redrawChart",
          value: function redrawChart() {
            var ccComponent = this.pieChart3.component;
            //force a redraw
            ccComponent.draw();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.observe();
            if (this.localService.getJsonValue("company") != null) {
              this.companyid = this.localService.getJsonValue("company");
            }
            if (this.companyid != null) {
              this.getExpenses();
              this.dashboardCharts();
              this.revenueGenerate();
              this.paymentGenerate();
            } else return;
          }
          // observing company selected or not
        }, {
          key: "observe",
          value: function observe() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      src_app_shared_services_universal_service__WEBPACK_IMPORTED_MODULE_0__.UniversalService.companySelected.subscribe(function (res) {
                        if (res) {
                          _this.companyid = _this.localService.getJsonValue("company");
                          _this.getExpenses();
                          _this.dashboardCharts();
                          _this.revenueGenerate();
                          _this.paymentGenerate();
                        } else return;
                      });
                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }
        }, {
          key: "getExpenses",
          value: function getExpenses() {
            var _this2 = this;
            this.http.getMonilyData("report?entity=ProfitAndLoss&id=".concat(this.companyid.id), true).subscribe(function (res) {
              var _a;
              console.log('====================================');
              console.log(res, "res hai");
              console.log('====================================');
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.Rows.Row.map(function (v) {
                  if (v.hasOwnProperty("group")) {
                    if (v.group == "Income") {
                      if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                        _this2.profitAndLoss = Math.round(v.Summary.ColData[1].value);
                      }
                    }
                  }
                  if (v.hasOwnProperty("group")) {
                    if (v.group == "Expenses") {
                      if (v === null || v === void 0 ? void 0 : v.hasOwnProperty("Summary")) {
                        _this2.expensesBar = Math.round(v.Summary.ColData[1].value);
                      }
                    }
                  }
                });
                (_a = _this2.chart) === null || _a === void 0 ? void 0 : _a.updateSeries([{
                  name: "USD",
                  data: [_this2.profitAndLoss, _this2.expensesBar]
                }]);
              } else {
                _this2.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              var _a, _b, _c;
              if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                  for (var key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    _this2.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                  }
                }
              }
              console.log('====================================');
              console.log(err, "error hai");
              console.log('====================================');
            });
          }
        }, {
          key: "revenueGenerate",
          value: function revenueGenerate() {
            var _this3 = this;
            this.http.getMonilyData("query?id=".concat(this.companyid.id, "&_query=select * from invoice startposition 1"), true).subscribe(function (res) {
              var mutableData = [];
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.QueryResponse.Invoice.map(function (inv) {
                  var txnDate = moment__WEBPACK_IMPORTED_MODULE_1__(inv.TxnDate).format("MM/DD/YYYY");
                  var dueDate = _this3.helperService.calculateDays(inv.DueDate);
                  mutableData.push({
                    Date: txnDate,
                    num: inv.DocNumber,
                    Customer: inv.CustomerRef.name,
                    Amount: inv.Balance,
                    TotalAmt: inv.TotalAmt,
                    Status: dueDate,
                    id: inv.Id
                  });
                });
                _this3.monthlyDataRevenue = _this3.helperService.getCurrentMonthExpenses(mutableData);
                _this3.yearlyDataRevenue = _this3.helperService.getYearlyExpenses(mutableData);
                var mutableQuarterly = _this3.helperService.getQuarterlyExpenses(mutableData);
                _this3.quaterlyDataRevenue = parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
              } else {
                _this3.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              var _a, _b, _c;
              if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                  for (var key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    _this3.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                  }
                }
              }
              console.log(err);
            });
          }
        }, {
          key: "paymentGenerate",
          value: function paymentGenerate() {
            var _this4 = this;
            this.http.getMonilyData("query?id=".concat(this.companyid.id, "&_query=select * from Bill startposition 1"), true).subscribe(function (res) {
              var mutableData = [];
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                res.data.QueryResponse.Bill.map(function (bill) {
                  var txnDate = new Date(bill.TxnDate).toLocaleString();
                  txnDate = txnDate.substring(0, txnDate.indexOf(","));
                  txnDate = _this4.helperService.formattedDate(bill.TxnDate);
                  var vendorName = bill.VendorRef.name;
                  var pastDue = _this4.helperService.calculateDays(bill.DueDate);
                  mutableData.push({
                    Date: txnDate,
                    Customer: vendorName,
                    Status: _this4.helperService.calculateDays(bill.DueDate),
                    pastDue: pastDue,
                    Amount: bill.Balance,
                    TotalAmt: bill.TotalAmt,
                    id: bill.Id
                  });
                });
                _this4.monthlyDataPayments = _this4.helperService.getCurrentMonthExpenses(mutableData);
                _this4.yearlyDataPayments = _this4.helperService.getYearlyExpenses(mutableData);
                var mutableQuarterly = _this4.helperService.getQuarterlyExpenses(mutableData);
                _this4.quaterlyDataPayments = parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
              } else {
                _this4.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              var _a, _b, _c;
              if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                  for (var key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    _this4.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                  }
                }
              }
              console.log(err);
            });
          }
        }, {
          key: "dashboardCharts",
          value: function dashboardCharts() {
            var _this5 = this;
            this.http.getMonilyData("query?id=".concat(this.companyid.id, "&_query=select * from purchase startposition 1"), true).subscribe(function (res) {
              var _a, _b;
              var ExpenseDate = [];
              if ((res === null || res === void 0 ? void 0 : res.data) != null) {
                (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.QueryResponse) === null || _b === void 0 ? void 0 : _b.Purchase.map(function (expense) {
                  ExpenseDate.push(expense);
                });
                var prices = [];
                ExpenseDate.map(function (expense) {
                  var category = expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
                  if (_this5.mutablePieData[category]) {
                    _this5.mutablePieData[category] += parseFloat(expense.TotalAmt);
                  } else {
                    _this5.mutablePieData[category] = parseFloat(expense.TotalAmt);
                  }
                });
                for (var key in _this5.mutablePieData) {
                  var val = Math.round(_this5.mutablePieData[key]);
                  _this5.pieArray.push([key, val]);
                  prices.push(val);
                }
                var sum = prices.reduce(function (a, b) {
                  return a + b;
                }, 0);
                _this5.totalExpenses = sum;
                _this5.redrawChart();
              } else {
                _this5.toasterService.error("No data found, please try again after few minutes");
              }
            }, function (err) {
              var _a, _b, _c;
              if (err.hasOwnProperty('error')) {
                if ((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.hasOwnProperty('errors')) {
                  for (var key in (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.errors) {
                    _this5.toasterService.error((_c = err === null || err === void 0 ? void 0 : err.error) === null || _c === void 0 ? void 0 : _c.errors[key]);
                  }
                }
              }
              console.log(err);
            });
          }
        }]);
        return _dashboardComponent;
      }();
      _dashboardComponent.ɵfac = function dashboardComponent_Factory(t) {
        return new (t || _dashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_4__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService));
      };
      _dashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _dashboardComponent,
        selectors: [["app-dashboard"]],
        viewQuery: function dashboardComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }
          if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 2,
        vars: 3,
        consts: [[3, "title", "active_item"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "row"], [1, "col-sm-6", "col-xl-6", "col-lg-6"], [1, "card", "o-hidden", "cstmCard"], [1, "bg-primary", "b-r-4", "card-body", "minHeight"], [1, "media", "static-top-widget"], [1, "media-body"], [1, "m-0"], [1, "d-flex", "align-items-center"], [1, "mb-0", "counter"], ["data-feather", "dollar-sign", 1, "icon-bg"], ["id", "basic-bar", 1, "mt-3"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis", "colors"], ["chart", ""], [1, "mt-3"], [3, "data"], [1, "bg-primary", "b-r-4", "card-body"], [1, "media", "static-top-widget", "flex-column"], [1, "d-flex", "w-100"], [1, "media-body", "w-100"], [1, "row", "mt-3", "mb-3"], [1, "col-sm-6"]],
        template: function dashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-breadcrumb", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, dashboardComponent_div_1_Template, 103, 57, "div", 1);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Dashboard")("active_item", "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.companyid != null);
          }
        },
        directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__.BreadcrumbComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.ChartComponent, ng2_google_charts__WEBPACK_IMPORTED_MODULE_11__.GoogleChartComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe],
        styles: [".margin1[_ngcontent-%COMP%] {\n  margin-top: 1px;\n}\n\n#basic-bar[_ngcontent-%COMP%] {\n  background-color: #FEF5ED !important;\n}\n\n.static-top-widget[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.minHeight[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBQ0k7RUFDSSxlQUFBO0FBRVI7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4xe1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbiNiYXNpYy1iYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVGNUVEICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN0YXRpYy10b3Atd2lkZ2V0IHtcclxuICAgIC5tZWRpYS1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4ubWluSGVpZ2h0e1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbn0iXX0= */"]
      });

      /***/
    },

    /***/26389:
    /*!***************************************************************!*\
      !*** ./src/app/components/apps/dashboard/dashboard.module.ts ***!
      \***************************************************************/
    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */
      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */"dashboardModule": function dashboardModule() {
          return (/* binding */_dashboardModule
          );
        }
        /* harmony export */
      });
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */38583);
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/forms */3679);
      /* harmony import */
      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @ckeditor/ckeditor5-angular */22723);
      /* harmony import */
      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ng-select/ng-select */86640);
      /* harmony import */
      var ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-dropzone */30753);
      /* harmony import */
      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../shared/shared.module */44466);
      /* harmony import */
      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ng-apexcharts */46505);
      /* harmony import */
      var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./dashboard.component */26350);
      /* harmony import */
      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./dashboard-routing.module */4864);
      /* harmony import */
      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ng2-google-charts */46092);
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */37716);
      var _dashboardModule = /*#__PURE__*/_createClass(function _dashboardModule() {
        _classCallCheck(this, _dashboardModule);
      });
      _dashboardModule.ɵfac = function dashboardModule_Factory(t) {
        return new (t || _dashboardModule)();
      };
      _dashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _dashboardModule
      });
      _dashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__.Ng2GoogleChartsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.dashboardRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_dashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.dashboardComponent],
          imports: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_4__.Ng2GoogleChartsModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.dashboardRoutingModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_6__.NgxDropzoneModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule]
        });
      })();

      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_components_apps_dashboard_dashboard_module_ts-es5.js.map