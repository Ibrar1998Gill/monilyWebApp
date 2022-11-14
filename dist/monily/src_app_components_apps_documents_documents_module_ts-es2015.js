(self["webpackChunkmonily"] = self["webpackChunkmonily"] || []).push([["src_app_components_apps_documents_documents_module_ts"],{

/***/ 76111:
/*!***********************************************************************!*\
  !*** ./src/app/components/apps/documents/documents-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentsRoutingModule": function() { return /* binding */ documentsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents.component */ 62243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _documents_component__WEBPACK_IMPORTED_MODULE_0__.documentsComponent
            }
        ]
    }
];
class documentsRoutingModule {
}
documentsRoutingModule.ɵfac = function documentsRoutingModule_Factory(t) { return new (t || documentsRoutingModule)(); };
documentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: documentsRoutingModule });
documentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](documentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 62243:
/*!******************************************************************!*\
  !*** ./src/app/components/apps/documents/documents.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentsComponent": function() { return /* binding */ documentsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/helper.service */ 21785);
/* harmony import */ var src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/firebase/auth.service */ 35873);
/* harmony import */ var src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/local.service */ 30652);
/* harmony import */ var _shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);











function documentsComponent_ng_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", time_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](time_r7.value);
} }
function documentsComponent_button_37_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function documentsComponent_button_37_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.getImages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "View all");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function documentsComponent_ng_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const time_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", time_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](time_r10);
} }
function documentsComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h6", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("href", item_r11 == null ? null : item_r11.file_url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", (item_r11 == null ? null : item_r11.extension) == "png" || (item_r11 == null ? null : item_r11.extension) == "jpg" || (item_r11 == null ? null : item_r11.extension) == "jpeg" || (item_r11 == null ? null : item_r11.extension) == "svg" ? "fa-file-image-o" : "fa-file-text-o");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("ngbTooltip", item_r11 == null ? null : item_r11.original_filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r11 == null ? null : item_r11.original_filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 5, item_r11 == null ? null : item_r11.created_at, "fullDate"));
} }
function documentsComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class documentsComponent {
    constructor(helperService, httpService, localService, fb) {
        this.helperService = helperService;
        this.httpService = httpService;
        this.localService = localService;
        this.fb = fb;
        this.fileName = '';
        this.filesData = [];
        this.Reset = false;
        this.fileNames = [];
        // searchByName:string;
        this.sortDate = [
            { value: "Sort by latest" },
            { value: "Sort by earlier" },
        ];
        this.authToken = this.localService.getJsonValue('authUser');
        this.searchbynameForm = this.fb.group({
            searchByName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    ngOnInit() {
        this.getImages();
        this.selectSortDropDown = this.sortDate[0].value;
        this.startDate = null;
        this.endDate = null;
    }
    onFileSelected(event) {
        this.helperService.uploadImage(event, "reven");
    }
    getImages() {
        this.httpService.getChat(`getFiles?user_id=${this.authToken.userId}`, true).subscribe((res) => {
            var _a;
            this.filesData = this.sortData(res.data.data);
            this.fileNames = [];
            (_a = this.filesData) === null || _a === void 0 ? void 0 : _a.map(e => {
                this.fileNames.push(e.original_filename);
            });
            this.Reset = false;
        }), err => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        };
    }
    sortData(data) {
        return data.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
        });
    }
    selectSort() {
        if (this.selectSortDropDown == "Sort by latest") {
            return this.filesData.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
            });
        }
        else {
            return this.filesData.sort((a, b) => {
                return new Date(a.created_at) - new Date(b.created_at);
            });
        }
    }
    searchDate() {
        let start = moment__WEBPACK_IMPORTED_MODULE_0__(this.startDate).format('YYYY-MM-DD');
        let end = moment__WEBPACK_IMPORTED_MODULE_0__(this.endDate).format('YYYY-MM-DD');
        this.httpService.getChat(`getFiles?user_id=${this.authToken.userId}`, true).subscribe((res) => {
            this.filesData = [];
            res.data.data.map(d => {
                var time = moment__WEBPACK_IMPORTED_MODULE_0__(d.created_at).format('YYYY-MM-DD');
                if (start < time && time < end) {
                    this.filesData.push(d);
                }
            });
        }), err => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        };
    }
    searchByName() {
        this.httpService.getChat(`getFiles?user_id=${this.authToken.userId}`, true).subscribe((res) => {
            if (this.searchbynameForm.controls['searchByName'].value == '') {
                this.filesData = this.sortData(res.data.data);
            }
            else {
                this.filesData = [];
                res.data.data.map(e => {
                    if (e.original_filename.toLowerCase().includes(this.selectedName.toLowerCase())
                    // e.original_filename.toLowerCase() == this.searchbynameForm.controls['searchByName'].value.toLowerCase()
                    ) {
                        this.filesData.push(e);
                    }
                });
                this.Reset = true;
            }
        }), err => {
            console.log('====================================');
            console.log(err);
            console.log('====================================');
        };
    }
}
documentsComponent.ɵfac = function documentsComponent_Factory(t) { return new (t || documentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_helper_service__WEBPACK_IMPORTED_MODULE_1__.HelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_local_service__WEBPACK_IMPORTED_MODULE_3__.LocalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
documentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: documentsComponent, selectors: [["app-documents"]], decls: 46, vars: 13, consts: [[3, "title", "active_item"], [1, "container"], [1, "row"], [1, "col-sm-12"], [1, "file-content"], [1, "card"], [1, "card-header", "dateHeader"], [1, "mb-3", "mt-3"], [1, "custom-datepicker", "custom-datepicker-dropdown"], [1, "dateLabel"], [1, "form-group", "mb-0"], [1, "input-group"], ["readonly", "true", "placeholder", "YYYY-MM-DD", "ngbDatepicker", "", 1, "form-control", "zIndex0", 3, "ngModel", "ngModelChange"], ["f", "ngbDatepicker"], [1, "input-group-append", "position-relative"], ["type", "button", 1, "calendarbtn", 3, "click"], [1, "fa", "fa-calendar"], ["readonly", "true", "placeholder", "YYYY-MM-DD", "ngbDatepicker", "", 1, "form-control", "zIndex0", 3, "value", "ngModel", "ngModelChange"], ["d", "ngbDatepicker"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "card-body", "file-manager"], [1, "row", "w-100"], [1, "col-sm-4", "d-flex", "justify-content-start"], ["placeholder", "Sort by ...", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "d-flex", "justify-content-center", "align-items-center"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "col-sm-4", "d-flex", "justify-content-end", "align-items-center"], ["placeholder", "Search by name....", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "row", "files"], ["class", "col-sm-3 mt-3 mb-3", 4, "ngFor", "ngForOf"], ["class", "col-sm-12", 4, "ngIf"], [3, "value"], [1, "btn", "btn-primary", 3, "click"], [1, "col-sm-3", "mt-3", "mb-3"], ["target", "_blank", 1, "file-box", "w-100", "h-100", 3, "href"], [1, "file-top"], [1, "fa", "txt-primary", 3, "ngClass"], [1, "file-bottom"], ["placement", "bottom", 1, "filename", 3, "ngbTooltip"], [1, "dateLabelFile"], [1, "text-center", "mt-5", "mb-3", 2, "font-size", "20px", "color", "#000"]], template: function documentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-breadcrumb", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "All Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function documentsComponent_Template_input_ngModelChange_14_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function documentsComponent_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function documentsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function documentsComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function documentsComponent_Template_button_click_28_listener() { return ctx.searchDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ng-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function documentsComponent_Template_ng_select_ngModelChange_34_listener($event) { return ctx.selectSortDropDown = $event; })("change", function documentsComponent_Template_ng_select_change_34_listener() { return ctx.selectSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, documentsComponent_ng_option_35_Template, 2, 2, "ng-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, documentsComponent_button_37_Template, 2, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ng-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function documentsComponent_Template_ng_select_ngModelChange_39_listener($event) { return ctx.selectedName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, documentsComponent_ng_option_40_Template, 2, 2, "ng-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function documentsComponent_Template_button_click_41_listener() { return ctx.searchByName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, documentsComponent_div_44_Template, 11, 8, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, documentsComponent_div_45_Template, 3, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Documents")("active_item", "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.currentDate)("ngModel", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.startDate == null || ctx.endDate == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectSortDropDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.sortDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.Reset);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selectedName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fileNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filesData);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.filesData.length < 1);
    } }, directives: [_shared_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["ɵr"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".fileUp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 100px;\n  border: 5px solid #000;\n  border-radius: 100px;\n}\n\n.file-content[_ngcontent-%COMP%]   .files[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%] {\n  width: unset;\n}\n\n.calendarbtn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  background: none;\n  border: none;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.calendarbtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.file-content[_ngcontent-%COMP%]   .form-inline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n\n.dateHeader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.custom-datepicker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.dateLabel[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-bottom: 0;\n  margin-left: 10px;\n}\n\n.dateLabelFile[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 20px;\n}\n\n.dateLabelFile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: grey;\n  font-weight: 900;\n}\n\n.btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\nng-select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.zIndex0[_ngcontent-%COMP%] {\n  z-index: 0;\n}\n\n.calendarbtn[_ngcontent-%COMP%] {\n  z-index: 10;\n}\n\n.file-bottom[_ngcontent-%COMP%] {\n  min-height: 50px;\n  cursor: pointer;\n}\n\n.file-bottom[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 150px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3VtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBVUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFQSjs7QUFTSTtFQUNJLFVBQUE7QUFQUjs7QUFXQTtFQUNJLGNBQUE7QUFSSjs7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQVJKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFSSjs7QUFVSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFSUjs7QUFZQTtFQUNJLGlCQUFBO0FBVEo7O0FBWUE7RUFDSSxnQkFBQTtBQVRKOztBQVlBO0VBQ0ksVUFBQTtBQVRKOztBQVlBO0VBQ0ksV0FBQTtBQVRKOztBQVlBO0VBUUksZ0JBQUE7RUFDQSxlQUFBO0FBaEJKOztBQVFJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFOUiIsImZpbGUiOiJkb2N1bWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsZVVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcblxyXG4uZmlsZS1jb250ZW50IC5maWxlcyAuZmlsZS1ib3gge1xyXG4gICAgd2lkdGg6IHVuc2V0O1xyXG59XHJcblxyXG4ucm93LmZpbGVzIHtcclxuICAgIC8vIC5jb2wtc20tM3tcclxuICAgIC8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAvLyB9XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNhbGVuZGFyYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWxlLWNvbnRlbnQgLmZvcm0taW5saW5lIGkge1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5kYXRlSGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY3VzdG9tLWRhdGVwaWNrZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlTGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZUxhYmVsRmlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMjBweDtcclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbm5nLXNlbGVjdCB7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uekluZGV4MCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uY2FsZW5kYXJidG4ge1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5maWxlLWJvdHRvbSB7XHJcbiAgICBoNiB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ 26287:
/*!***************************************************************!*\
  !*** ./src/app/components/apps/documents/documents.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "documentsModule": function() { return /* binding */ documentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 22723);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ 86640);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-apexcharts */ 46505);
/* harmony import */ var _documents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents.component */ 62243);
/* harmony import */ var _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documents-routing.module */ 76111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);










class documentsModule {
}
documentsModule.ɵfac = function documentsModule_Factory(t) { return new (t || documentsModule)(); };
documentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: documentsModule });
documentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__.documentsRoutingModule,
            ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](documentsModule, { declarations: [_documents_component__WEBPACK_IMPORTED_MODULE_1__.documentsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _documents_routing_module__WEBPACK_IMPORTED_MODULE_2__.documentsRoutingModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_5__.NgxDropzoneModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__.NgSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_9__.NgApexchartsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_apps_documents_documents_module_ts-es2015.js.map