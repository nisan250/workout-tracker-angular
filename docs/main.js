(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-tabset justify=\"justified\" orientation=\"horizontal\" #ts=\"ngbTabset\" (tabChange)=\"beforeChange($event)\">\n    <ngb-tab title=\"Locations\" id=\"tabLocations\">\n      <ng-template ngbTabContent>Locations Tab</ng-template>\n    </ngb-tab>\n\n    <ngb-tab id=\"tabImages\">\n      <ng-template ngbTabTitle>\n        <span class=\"text-success\">Home Images</span>\n      </ng-template>\n      <ng-template ngbTabContent>\n\n        <div class=\"row\">\n          <div class=\"mainImageContainer\">\n            <ngb-carousel [interval]=\"0\" [pauseOnHover]=\"true\" [showNavigationIndicators]=\"true\"\n                [showNavigationArrows]=\"true\" #imgCarousel>\n              <ng-template ngbSlide *ngFor=\"let img of images\">\n                <img [src]=\"img.src\">\n                <div class=\"carousel-caption\">\n                  <h3>{{img.title}}</h3>\n                  <p>cool sub-title</p>\n                </div>\n              </ng-template>\n            </ngb-carousel>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <button class=\"btn btn-primary mt-sm-2 mr-sm-2\" (click)=\"prev()\">Previous</button>\n          <button class=\"btn btn-primary mt-sm-2\" (click)=\"next()\">Next</button>\n        </div>\n\n      </ng-template>\n    </ngb-tab>\n\n    <ngb-tab title=\"User Management\" [disabled]=\"false\" id=\"tabUsers\">\n      <ng-template ngbTabContent>User Management Tab</ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n\n  <!-- <button class=\"btn btn-primary mbt-sm-3\" (click)=\"ts.select('tabImages')\">Go To Images</button> -->\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImageContainer {\n  position: relative;\n  padding-top: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRDpcXGFwcHNcXHdvcmtvdXQtdHJhY2tlci1hbmd1bGFyL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkltYWdlQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
        this.images = [
            { src: 'assets/images/temp1.jpg', title: 'Bike 1' },
            { src: 'assets/images/temp2.jpg', title: 'Row 1' },
            { src: 'assets/images/temp3.jpg', title: 'Row 2' }
        ];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.beforeChange = function ($event) {
        // console.log('before tab change', $event);
        if ($event.nextId === 'tabImages') {
            // $event.preventDefault();
        }
    };
    AdminComponent.prototype.prev = function () {
        this.imgCarousel.prev();
    };
    AdminComponent.prototype.next = function () {
        this.imgCarousel.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('imgCarousel'),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "imgCarousel", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts/workouts.component */ "./src/app/workouts/workouts.component.ts");
/* harmony import */ var _entry_editor_entry_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry-editor/entry-editor.component */ "./src/app/entry-editor/entry-editor.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'workouts', component: _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutsComponent"] },
    { path: 'workouts/:id', component: _entry_editor_entry_editor_component__WEBPACK_IMPORTED_MODULE_4__["EntryEditorComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <app-nav-menu></app-nav-menu>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'workout-tracker-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workouts/workouts.component */ "./src/app/workouts/workouts.component.ts");
/* harmony import */ var _entry_editor_entry_editor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entry-editor/entry-editor.component */ "./src/app/entry-editor/entry-editor.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _services_workouts_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/workouts-api.service */ "./src/app/services/workouts-api.service.ts");
/* harmony import */ var _services_date_string_adapter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/date-string-adapter.service */ "./src/app/services/date-string-adapter.service.ts");
/* harmony import */ var _performance_targets_modal_performance_targets_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./performance-targets-modal/performance-targets-modal.component */ "./src/app/performance-targets-modal/performance-targets-modal.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Third party imports












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _workouts_workouts_component__WEBPACK_IMPORTED_MODULE_9__["WorkoutsComponent"],
                _entry_editor_entry_editor_component__WEBPACK_IMPORTED_MODULE_10__["EntryEditorComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__["NavMenuComponent"],
                _performance_targets_modal_performance_targets_modal_component__WEBPACK_IMPORTED_MODULE_14__["PerformanceTargetsModalComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_4__["NgxLoadingModule"].forRoot({}),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            providers: [
                _services_workouts_api_service__WEBPACK_IMPORTED_MODULE_12__["WorkoutsApiService"],
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDateAdapter"], useClass: _services_date_string_adapter_service__WEBPACK_IMPORTED_MODULE_13__["DateStringAdapterService"] }
            ],
            entryComponents: [
                _performance_targets_modal_performance_targets_modal_component__WEBPACK_IMPORTED_MODULE_14__["PerformanceTargetsModalComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entry-editor/entry-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/entry-editor/entry-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <ngx-loading [show]=\"loading\" ></ngx-loading>\n\n    <div class=\"card\">\n        <h3 class=\"card-header\">Entry</h3>\n        <div class=\"card-body\">\n          <form>\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-sm-2\">Type:</label>\n              <div class=\"col-sm-6\">\n                <!-- <select class=\"form-control\" name=\"wtype\" [(ngModel)]=\"workout.type\">\n                  <option value=\"\">(Select)</option>\n                  <option value=\"bike\">Bike</option>\n                  <option value=\"run\">Run</option>\n                  <option value=\"row\">Row</option>\n                </select> -->\n                <div class=\"btn-group btn-group-toggle\" ngbRadioGroup name=\"wtype\" [(ngModel)]=\"workout.type\">\n                  <!-- (label.btn-primary>input[type=radio] [value=\"\"])*3 -->\n                  <label ngbButtonLabel class=\"btn-primary\"><input ngbButton type=\"radio\" value=\"bike\" />Bike</label>\n                  <label ngbButtonLabel class=\"btn-primary\"><input ngbButton type=\"radio\" value=\"run\" />Run</label>\n                  <label ngbButtonLabel class=\"btn-primary\"><input ngbButton type=\"radio\" value=\"row\" />Row</label>\n                </div>\n\n\n                <button class=\"btn btn-outline-info btn-sm ml-sm-2\" [popoverTitle]=\"popTitle\"\n                [ngbPopover]=\"popContent\" placement=\"right\" popoverClass=\"custom-popover\"\n                triggers=\"mouseenter:mouseleave\" #pop=\"ngbPopover\"\n                (shown)=\"popVisibilityChanged(pop)\" (hidden)=\"popVisibilityChanged(pop)\">?</button>\n                <ng-template #popTitle>\n                  <h4>Activity Type</h4>\n                </ng-template>\n                <ng-template #popContent>\n                    These buttons specify the type of <strong class=\"text-primary text-uppercase\">activity</strong>\n                </ng-template>\n\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-sm-2\">Date:</label>\n              <div class=\"col-sm-6\">\n                <!-- <input type=\"text\" class=\"form-control\" name=\"wdate\" [(ngModel)]=\"workout.date\" /> -->\n                <!-- <ngb-datepicker #d name=\"wdate\" [(ngModel)]=\"workout.date\" [startDate]=\"startDate\" [maxDate]=\"maxDate\"></ngb-datepicker> -->\n\n                <div class=\"input-group\">\n                          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"wdate\" [(ngModel)]=\"workout.date\" [maxDate]=\"maxDate\"\n                          ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-info calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n                    </div>\n                </div>\n                <!-- <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"wdate\" [(ngModel)]=\"workout.date\" [maxDate]=\"maxDate\"\n                      ngbDatepicker #d=\"ngbDatepicker\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-info calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n                    </div>\n                </div> -->\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-sm-2\">Time:</label>\n              <div class=\"col-sm-6\"><!--[minuteStep]=\"15\"-->\n                <ngb-timepicker name=\"tp\" [(ngModel)]=\"workout.time\" [meridian]=\"true\" ></ngb-timepicker>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-sm-2\">Quality:</label>\n              <div class=\"col-sm-3 mt-sm-2\">\n                <ngb-rating [(rate)]=\"workout.rating\" [readonly]=\"false\" max=\"5\">\n                  <ng-template let-fill=\"fill\" let-index=\"index\">\n                    <span class=\"star\" [class.filled]=\"fill === 100\" [class.bad]=\"index < 2\">&#9733;</span>\n                  </ng-template>\n                </ngb-rating>\n              </div>\n            </div>\n\n\n            <div class=\"form-group row\">\n              <label class=\"col-form-label col-sm-2\">Distance:</label>\n              <div class=\"col-sm-6\">\n                <input type=\"text\" class=\"form-control\" name=\"wdistance\" [(ngModel)]=\"workout.distance\"\n                        required pattern=\"\\d+\" #wdistance=\"ngModel\" />\n              </div>\n            </div>\n\n            <div *ngIf=\"wdistance.invalid && (wdistance.dirty || wdistance.touched)\">\n              <!-- <ngb-alert type=\"custom\" [dismissible]=\"true\" *ngIf=\"!isDismissible\" (close)=\"isDismissible = !isDismissible\">\n                Dismissible Alert\n              </ngb-alert> -->\n              <ngb-alert type=\"danger\" [dismissible]=\"true\" *ngIf=\"wdistance.errors.required && !isDismissibleD\" (close)=\"isDismissibleD = !isDismissibleD\" >\n                <strong>Distance</strong> is required.\n              </ngb-alert>\n              <ngb-alert type=\"warning\" [dismissible]=\"true\" *ngIf=\"wdistance.errors.pattern  && !isDismissible\" (close)=\"isDismissible = !isDismissible\">\n                Distance must be a valid number.\n              </ngb-alert>\n            </div>\n\n\n            <div class=\"form-group row\">\n                <label class=\"col-form-label col-sm-2\">Location:</label>\n                <div class=\"col-sm-6\">\n                  <input type=\"text\" class=\"form-control\" name=\"wlocation\" [(ngModel)]=\"workout.location\"\n                      [ngbTypeahead]=\"locationsSearch\" />\n                      <!-- [resultFormatter]=\"locationsFormatter\" [inputFormatter]=\"locationsFormatter\" -->\n                  <div>\n                    * type \"gym\" to see results\n                  </div>\n                </div>\n              </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-sm-6 mt-sm-3\">\n                <button class=\"btn btn-primary mr-sm-2\" (click)=\"save()\">Save</button>\n                <a class=\"btn btn-secondary\" [routerLink]=\"'/workouts'\">Cancel</a>\n              </div>\n            </div>\n\n          </form>\n        </div>\n      </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/entry-editor/entry-editor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/entry-editor/entry-editor.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".star {\n  font-size: 1.5rem;\n  color: #c7fcc7; }\n\n.filled {\n  color: #5cb85c; }\n\n.bad {\n  color: #deb0b0; }\n\n.filled.bad {\n  color: #ff1e1e; }\n\n.alert-custom {\n  background-color: #d69836; }\n\n.custom-popover {\n  background: #5bc0de; }\n\n.custom-popover .popover-header {\n  background: #5cb85c; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZWRpdG9yL0Q6XFxhcHBzXFx3b3Jrb3V0LXRyYWNrZXItYW5ndWxhci9zcmNcXGFwcFxcZW50cnktZWRpdG9yXFxlbnRyeS1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUI7RUFDakIsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUNEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0EsMEJBQXlCLEVBQ3hCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZW50cnktZWRpdG9yL2VudHJ5LWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogI2M3ZmNjNztcclxufVxyXG4uZmlsbGVkIHtcclxuICBjb2xvcjogIzVjYjg1YztcclxufVxyXG4uYmFkIHtcclxuICBjb2xvcjogI2RlYjBiMDtcclxufVxyXG4uZmlsbGVkLmJhZCB7XHJcbiAgY29sb3I6ICNmZjFlMWU7XHJcbn1cclxuXHJcbi5hbGVydC1jdXN0b20ge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZDY5ODM2O1xyXG59XHJcblxyXG4uY3VzdG9tLXBvcG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YmMwZGU7XHJcbn1cclxuXHJcbi5jdXN0b20tcG9wb3ZlciAucG9wb3Zlci1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1Y2I4NWM7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/entry-editor/entry-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/entry-editor/entry-editor.component.ts ***!
  \********************************************************/
/*! exports provided: EntryEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryEditorComponent", function() { return EntryEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workouts_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/workouts-api.service */ "./src/app/services/workouts-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntryEditorComponent = /** @class */ (function () {
    function EntryEditorComponent(router, nav, workoutService) {
        var _this = this;
        this.router = router;
        this.nav = nav;
        this.workoutService = workoutService;
        this.workout = {};
        this.loading = false;
        // public locations = ['Main gym', 'Home gym', 'neighborhood 1 mile course', 'neighborhood 3 mile course'];
        this.locations = [];
        this.errorMessage = '';
        // client side filtering
        // locationsSearch = (text$: Observable<string>) =>
        //   text$.pipe(
        //     debounceTime(200),
        //     distinctUntilChanged(),
        //     map(term => term.length < 2 ? []
        //       : this.locations.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        //   )
        //   locationsFormatter = (result) => result.name;
        // server side filtering
        this.locationsSearch = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading = true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.workoutService.searchLocations(term); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (locations) { return lodash__WEBPACK_IMPORTED_MODULE_5__["map"](locations, 'name'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.loading = false; }));
        };
        this.locationsFormatter = function (result) { return result; };
        var today = new Date();
        this.maxDate = _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDate"].from({ year: today.getFullYear(), month: today.getMonth() + 1, day: today.getDate() });
        // console.log(this.maxDate, 'this.maxDate');
    }
    EntryEditorComponent.prototype.ngOnInit = function () {
        // this.workoutService.getLocations().subscribe(data => this.locations = data);
        var _this = this;
        this.router.params.subscribe(function (params) {
            if (params.id !== 'new') {
                _this.loading = true;
                _this.workoutService.getWorkout(params.id).subscribe(function (data) {
                    _this.workout = data;
                    var d = new Date(_this.workout.date);
                    _this.startDate = { year: d.getFullYear(), month: d.getMonth() + 1 };
                    _this.loading = false;
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    EntryEditorComponent.prototype.save = function () {
        var _this = this;
        this.loading = true;
        this.workoutService.saveWorkout(this.workout).subscribe(function (data) {
            // this.workout = data;
            _this.loading = false;
            _this.nav.navigate(['/workouts']);
        }, function (error) { return _this.errorMessage = error; });
    };
    EntryEditorComponent.prototype.popVisibilityChanged = function (pop) {
        // console.log(`Popover open state: ${ pop.isOpen() }`);
    };
    EntryEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-editor',
            template: __webpack_require__(/*! ./entry-editor.component.html */ "./src/app/entry-editor/entry-editor.component.html"),
            styles: [__webpack_require__(/*! ./entry-editor.component.scss */ "./src/app/entry-editor/entry-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_workouts_api_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutsApiService"]])
    ], EntryEditorComponent);
    return EntryEditorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"jumbotron\">\n    <h1 class=\"display-3\">Workout Tracker</h1>\n    <hr class=\"my-4\">\n    <p>\n      Welcome to Workout Tracker\n    </p>\n  </div>\n\n\n  <ngb-accordion closeOthers=\"success\" activeIds=\"panel1\"\n        #acc=\"ngbAccordion\" (panelChange)=\"beforeChange($event)\"><!--activeIds=\"panel1, panel2\"-->\n    <ngb-panel id=\"panel1\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Welcome</span>\n      </ng-template>\n      <ng-template ngbPanelContent>\n        <p>Welcome to Workout Tracker</p>\n        <p class=\"float-right\"> <!--(click)=\"acc.toggle('panel2')-->\n          <button class=\"btn btn-info\" (click)=\"nextButton(1)\">Next</button>\n        </p>\n      </ng-template>\n    </ngb-panel>\n    <ngb-panel id=\"panel2\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">How To</span>\n      </ng-template>\n      <ng-template ngbPanelContent>\n          <p>Click Workouts in the menu to start tracking your progress.</p>\n          <p class=\"float-right\">\n            <button class=\"btn btn-info\" (click)=\"nextButton(2)\">Next</button>\n          </p>\n      </ng-template>\n    </ngb-panel>\n    <ngb-panel id=\"panel3\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Enjoy</span>\n      </ng-template>\n      <ng-template ngbPanelContent>\n        <p>We hope you enjoy Workout Tracker!</p>\n      </ng-template>\n    </ngb-panel>\n  </ngb-accordion>\n\n\n\n\n\n  <!-- <ngb-accordion>\n      <ngb-panel title=\"First\">\n        <ng-template ngbPanelContent=\"\">First Panel</ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"second\">\n          <ng-template ngbPanelContent=\"\">Second Panel</ng-template>\n      </ngb-panel>\n      <ngb-panel title=\"third\">\n          <ng-template ngbPanelContent=\"\">Third Panel</ng-template>\n      </ngb-panel>\n  </ngb-accordion> -->\n\n<!--for stying:-->\n  <!-- <ngb-accordion closeOthers=\"true\">\n    <ngb-panel >\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">First</span>\n      </ng-template>\n      <ng-template ngbPanelContent>First Panel</ng-template>\n    </ngb-panel>\n    <ngb-panel >\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Second</span>\n      </ng-template>\n      <ng-template ngbPanelContent>Second Panel</ng-template>\n    </ngb-panel>\n    <ngb-panel title=\"third\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Third</span>\n      </ng-template>\n      <ng-template ngbPanelContent>Third Panel</ng-template>\n    </ngb-panel>\n  </ngb-accordion> -->\n\n  <!-- activeIds=\"panel1, panel2\"\n  <ngb-accordion activeIds=\"panel1\">\n    <ngb-panel id=\"panel1\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">First</span>\n      </ng-template>\n      <ng-template ngbPanelContent>First Panel</ng-template>\n    </ngb-panel>\n    <ngb-panel id=\"panel2\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Second</span>\n      </ng-template>\n      <ng-template ngbPanelContent>Second Panel</ng-template>\n    </ngb-panel>\n    <ngb-panel id=\"panel3\">\n      <ng-template ngbPanelTitle>\n        <span class=\"font-weight-bold\">Third</span>\n      </ng-template>\n      <ng-template ngbPanelContent>Third Panel</ng-template>\n    </ngb-panel>\n  </ngb-accordion> -->\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.stepComplete = 0;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.nextButton = function (step) {
        this.stepComplete = step;
        this.acc.toggle("panel" + (this.stepComplete + 1));
    };
    HomeComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'panel2' && this.stepComplete < 1) {
            $event.preventDefault();
        }
        if ($event.panelId === 'panel3' && this.stepComplete < 2) {
            $event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('acc'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "acc", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg fixed-top navbar-dark bg-primary\">\n  <a class=\"navbar-brand\"  [routerLink]=\"['/']\" [routerLinkActive]=\"['link-active']\">Workout Tracker</a>\n\n\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse xnavbar-nav xnav\" [ngClass]=\"{ 'show': navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-item nav-link\"  [routerLink]=\"['/']\" [routerLinkActive]=\"['link-active']\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/workouts']\" [routerLinkActive]=\"['link-active']\">workouts</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-item nav-link\" [routerLink]=\"['/admin']\" [routerLinkActive]=\"['link-active']\">admin</a>\n        </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.scss":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.navbarOpen = false;
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.scss */ "./src/app/nav-menu/nav-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/performance-targets-modal/performance-targets-modal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/performance-targets-modal/performance-targets-modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Your Performance Targets</h4>\n  </div>\n\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n        <label>Row Target (meters):</label>\n        <input type=\"text\" class=\"form-control\" name=\"rowTarget\" [(ngModel)]=\"perfTargets.row\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Run Target (meters):</label>\n        <input type=\"text\" class=\"form-control\" name=\"runTarget\" [(ngModel)]=\"perfTargets.run\" />\n      </div>\n      <div class=\"form-group\">\n        <label>Bike Target (meters):</label>\n        <input type=\"text\" class=\"form-control\" name=\"bikeTarget\" [(ngModel)]=\"perfTargets.bike\" />\n      </div>\n    </form>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-primary\" (click)=\"save()\">Save</button>\n    <button class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Cancel</button>\n  </div>\n"

/***/ }),

/***/ "./src/app/performance-targets-modal/performance-targets-modal.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/performance-targets-modal/performance-targets-modal.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZvcm1hbmNlLXRhcmdldHMtbW9kYWwvcGVyZm9ybWFuY2UtdGFyZ2V0cy1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/performance-targets-modal/performance-targets-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/performance-targets-modal/performance-targets-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PerformanceTargetsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceTargetsModalComponent", function() { return PerformanceTargetsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerformanceTargetsModalComponent = /** @class */ (function () {
    function PerformanceTargetsModalComponent(activeModal) {
        this.activeModal = activeModal;
        this.perfTargets = {};
    }
    PerformanceTargetsModalComponent.prototype.ngOnInit = function () {
    };
    PerformanceTargetsModalComponent.prototype.save = function () {
        this.activeModal.close(this.perfTargets);
    };
    PerformanceTargetsModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-targets-modal',
            template: __webpack_require__(/*! ./performance-targets-modal.component.html */ "./src/app/performance-targets-modal/performance-targets-modal.component.html"),
            styles: [__webpack_require__(/*! ./performance-targets-modal.component.scss */ "./src/app/performance-targets-modal/performance-targets-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], PerformanceTargetsModalComponent);
    return PerformanceTargetsModalComponent;
}());



/***/ }),

/***/ "./src/app/services/date-string-adapter.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/date-string-adapter.service.ts ***!
  \*********************************************************/
/*! exports provided: DateStringAdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateStringAdapterService", function() { return DateStringAdapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DateStringAdapterService = /** @class */ (function () {
    function DateStringAdapterService() {
    }
    DateStringAdapterService.prototype.fromModel = function (value) {
        if (!value) {
            return;
        }
        var segments = value.split('-');
        return {
            year: Number(segments[0]),
            month: Number(segments[1]),
            day: Number(segments[2]),
        };
    };
    DateStringAdapterService.prototype.toModel = function (date) {
        if (!date) {
            return;
        }
        return date.year + "-" + date.month + "-" + date.day;
    };
    DateStringAdapterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], DateStringAdapterService);
    return DateStringAdapterService;
}());



/***/ }),

/***/ "./src/app/services/workouts-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/workouts-api.service.ts ***!
  \**************************************************/
/*! exports provided: WorkoutsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsApiService", function() { return WorkoutsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutsApiService = /** @class */ (function () {
    function WorkoutsApiService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    WorkoutsApiService.prototype.getWorkouts = function () {
        return this.http.get(this.baseUrl + "/workouts").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.getWorkout = function (id) {
        return this.http.get(this.baseUrl + "/workouts/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.addWorkout = function (workout) {
        return this.http.post(this.baseUrl + "/workouts", workout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.updateWorkout = function (workout) {
        return this.http.put(this.baseUrl + "/workouts/" + workout.id, workout).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.saveWorkout = function (workout) {
        if (workout.id) {
            return this.updateWorkout(workout);
        }
        else {
            return this.addWorkout(workout);
        }
    };
    WorkoutsApiService.prototype.deleteWorkout = function (id) {
        return this.http.delete(this.baseUrl + "/workouts/" + id);
    };
    WorkoutsApiService.prototype.getLocations = function () {
        return this.http.get(this.baseUrl + "/locations").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.searchLocations = function (searchTerm) {
        return this.http.get(this.baseUrl + "/locations?q=" + searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.getPerfTargets = function () {
        return this.http.get(this.baseUrl + "/performanceTargets").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.savePerfTargets = function (perfTargets) {
        return this.http.put(this.baseUrl + "/performanceTargets", perfTargets).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.getWorkoutsPaged = function (currPage, pageSize) {
        return this.http.get(this.baseUrl + "/workouts?_page=" + currPage + "&_limit=" + pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WorkoutsApiService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // client-side or network error
            errorMessage = "client-side or network error ---> error  " + err.message;
        }
        else {
            // backend error with response code
            errorMessage = "backend error with response code or network error ---> error " + err.message;
            alert("To use this app in action you have to downlowd the data/db.json file\n              from the github repository to your local machine and run json-server(localhost:3000)");
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    WorkoutsApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WorkoutsApiService);
    return WorkoutsApiService;
}());



/***/ }),

/***/ "./src/app/workouts/workouts.component.html":
/*!**************************************************!*\
  !*** ./src/app/workouts/workouts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ngx-loading [show]=\"loading\" ></ngx-loading>\n\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h4 class=\"card-title\">Workouts</h4>\n    </div>\n    <div class=\"card-body\">\n      <button class=\"btn btn-sm btn-primary\" (click)=\"showPerfTargets()\">Set Performance Targets</button>\n      <button class=\"btn btn-sm\" [ngClass]=\"isCollapsed ? 'btn-info' : 'btn-outline-info'\" (click)=\"isCollapsed = !isCollapsed\">?</button>\n      <div class=\"mt-sm-2\" [ngbCollapse]=\"!isCollapsed\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              This will enable you to set performance targets for each activity and enable you to track progress\n            </div>\n          </div>\n      </div>\n\n      <hr />\n      <p><!--showValue=\"true\"-->\n        <ngb-progressbar [value]=\"totals.bike\" [max]=\"perfTargets.bike\"  height=\"20px\"\n            [type]=\"getPBType(totals.bike, perfTargets.bike)\">\n          (Bike) {{totals.bike}} of {{perfTargets.bike}}\n        </ngb-progressbar>\n      </p>\n      <p>\n        <ngb-progressbar [value]=\"totals.row\" [max]=\"perfTargets.row\" height=\"20px\"\n            [type]=\"getPBType(totals.row, perfTargets.row)\">\n          (Row) {{totals.row}} of {{perfTargets.row}}\n        </ngb-progressbar>\n      </p>\n      <p>\n        <ngb-progressbar [value]=\"totals.run\" [max]=\"perfTargets.run\" height=\"20px\"\n            [type]=\"getPBType(totals.run, perfTargets.run)\">\n          (Run) {{totals.run}} of {{perfTargets.run}}\n        </ngb-progressbar>\n      </p>\n    </div>\n  </div>\n\n\n\n  <div class=\"card\">\n      <h3 class=\"card-header\">\n        Workout Entries\n        <a [routerLink]=\"['/workouts', 'new']\" class=\"btn btn-sm btn-primary float-right\"\n           [ngbTooltip]=\"ttContent\" placement=\"left\" tooltipClass=\"custom-tooltip\">Add New Entry</a>\n        <!--[ngbTooltip]=\"ttContent\"  -->\n        <ng-template #ttContent>\n          Log a new <strong class=\"text-primary text-uppercase\">workout</strong> into your list\n        </ng-template>\n\n        <!-- triggers=\"click:blur\" is build in-->\n        <!-- <button class=\"btn btn-success\" ngbTooltip=\"This is just a test\" triggers=\"manual\"\n            #t=\"ngbTooltip\" (click)=\"t.open()\" [autoClose]=\"'inside'\">\n          Tooltip Test\n        </button> -->\n      </h3>\n      <div class=\"card-body\">\n\n        <div class=\"row\">\n          <div class=\"col\">\n            <ngb-pagination [collectionSize]=\"50\" boundaryLinks=\"true\"\n                [pageSize]=\"pageSize\" maxSize=\"5\" rotate=\"true\" [(page)]=\"currPage\"\n                (pageChange)=\"refreshGrid()\"></ngb-pagination>\n          </div>\n        </div>\n\n        <table class=\"table table-striped\">\n          <thead>\n            <th>Date</th>\n            <th>Type</th>\n            <th>Distance</th>\n            <th></th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let entry of workouts\">\n              <td>{{entry.date}}</td>\n              <td>{{entry.type}}</td>\n              <td>{{entry.distance}}</td>\n              <td>\n                <a [routerLink]=\"['/workouts', entry.id]\" class=\"btn btn-info btn-sm mr-2\">Edit</a>\n                <button class=\"btn btn-danger btn-sm\" (click)=\"deleteWorkout(entry.id, deleteModal)\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <!--TODO: PRogress Bar here-->\n\n      </div>\n  </div>\n\n\n\n  <ng-template #deleteModal let-modal>\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure you want to delete?</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button class=\"btn btn-success\" (click)=\"modal.close()\">Yes (Delete)</button>\n        <button class=\"btn btn-danger\" (click)=\"modal.dismiss()\">No</button>\n      </div>\n    </ng-template>\n\n</div>\n"

/***/ }),

/***/ "./src/app/workouts/workouts.component.scss":
/*!**************************************************!*\
  !*** ./src/app/workouts/workouts.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-tooltip .tooltip-inner {\n  background-color: #2b2727 !important; }\n\n.bs-tooltip-right .arrow::before {\n  border-right-color: #2b2727 !important; }\n\n.bs-tooltip-left .arrow::before {\n  border-left-color: #2b2727 !important; }\n\n.bs-tooltip-top .arrow::before {\n  border-top-color: #2b2727 !important; }\n\n.bs-tooltip-bottom .arrow::before {\n  border-bottom-color: #2b2727 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya291dHMvRDpcXGFwcHNcXHdvcmtvdXQtdHJhY2tlci1hbmd1bGFyL3NyY1xcYXBwXFx3b3Jrb3V0c1xcd29ya291dHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBb0MsRUFDdkM7O0FBSUQ7RUFDRSx1Q0FBc0MsRUFDdkM7O0FBQ0Q7RUFDRSxzQ0FBcUMsRUFDdEM7O0FBQ0Q7RUFDRSxxQ0FBb0MsRUFDckM7O0FBQ0Q7RUFDRSx3Q0FBdUMsRUFDeEMiLCJmaWxlIjoic3JjL2FwcC93b3Jrb3V0cy93b3Jrb3V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tdG9vbHRpcCAudG9vbHRpcC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyNzI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8gLmN1c3RvbS10b29sdGlwIC5hcnJvdzo6YmVmb3JlIHtcclxuLy8gICBcdGJvcmRlci1jb2xvcjogIzJiMjcyNyAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5icy10b29sdGlwLXJpZ2h0IC5hcnJvdzo6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICMyYjI3MjcgIWltcG9ydGFudDtcclxufVxyXG4uYnMtdG9vbHRpcC1sZWZ0IC5hcnJvdzo6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzJiMjcyNyAhaW1wb3J0YW50O1xyXG59XHJcbi5icy10b29sdGlwLXRvcCAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzJiMjcyNyAhaW1wb3J0YW50O1xyXG59XHJcbi5icy10b29sdGlwLWJvdHRvbSAuYXJyb3c6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzJiMjcyNyAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/workouts/workouts.component.ts":
/*!************************************************!*\
  !*** ./src/app/workouts/workouts.component.ts ***!
  \************************************************/
/*! exports provided: WorkoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsComponent", function() { return WorkoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_workouts_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/workouts-api.service */ "./src/app/services/workouts-api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _performance_targets_modal_performance_targets_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../performance-targets-modal/performance-targets-modal.component */ "./src/app/performance-targets-modal/performance-targets-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkoutsComponent = /** @class */ (function () {
    function WorkoutsComponent(workoutService, modal) {
        this.workoutService = workoutService;
        this.modal = modal;
        this.workouts = [];
        // public workoutsOrig = [];
        this.loading = false;
        this.perfTargets = {};
        this.totals = {};
        this.pageSize = 5;
        this.currPage = 1;
        this.errorMessage = '';
    }
    WorkoutsComponent.prototype.ngOnInit = function () {
        // this.loading = true;
        // this.workoutService.getWorkouts().subscribe((data) => {
        //   this.workouts = data;
        //   this.loading = false;
        // });
        // this.workoutService.getPerfTargets()
        var _this = this;
        this.loading = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(
        // this.workoutService.getWorkouts(),
        this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize), this.workoutService.getPerfTargets()).subscribe(function (_a) {
            var workoutsResult = _a[0], perfTargetsResult = _a[1];
            // this.workoutsOrig = workoutsResult;
            _this.workouts = workoutsResult;
            // this.refreshGrid();
            _this.perfTargets = perfTargetsResult;
            _this.calculatePerformance();
            _this.loading = false;
            // console.log('--workouts', this.workouts, this.perfTargets);
        }, function (error) { return _this.errorMessage = error; });
    };
    WorkoutsComponent.prototype.refreshGrid = function () {
        // client side filtering (pagination)
        // const offset = (this.currPage - 1) * this.pageSize;
        // this.workouts = _.drop(this.workoutsOrig, offset).slice(0, this.pageSize);
        var _this = this;
        // server side filtering (pagination)
        this.loading = true;
        this.workoutService.getWorkoutsPaged(this.currPage, this.pageSize).subscribe(function (data) {
            _this.workouts = data;
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    WorkoutsComponent.prototype.deleteWorkout = function (id, deleteModal) {
        var _this = this;
        var options = { size: 'sm' };
        this.modal.open(deleteModal, options).result.then(function (result) {
            _this.workoutService.deleteWorkout(id).subscribe(function (data) { return lodash__WEBPACK_IMPORTED_MODULE_2__["remove"](_this.workouts, { id: id }); }, function (error) { return _this.errorMessage = error; });
        }, function (reason) { return console.log("Dismissed: " + reason); });
    };
    WorkoutsComponent.prototype.showPerfTargets = function () {
        var _this = this;
        var modalRef = this.modal.open(_performance_targets_modal_performance_targets_modal_component__WEBPACK_IMPORTED_MODULE_5__["PerformanceTargetsModalComponent"]);
        modalRef.componentInstance.perfTargets = this.perfTargets;
        modalRef.result.then(function (result) {
            // console.log('Modal result', result);
            _this.loading = true;
            _this.workoutService.savePerfTargets(result).subscribe(function (data) {
                _this.perfTargets = data;
                _this.loading = false;
            }, function (error) { return _this.errorMessage = error; });
        }, function (reason) {
            // console.log(`Dismissed reason: ${reason}`);
        });
    };
    WorkoutsComponent.prototype.calculatePerformance = function () {
        var bikeTotal = lodash__WEBPACK_IMPORTED_MODULE_2__["chain"](this.workouts).filter(function (x) { return x.type === 'bike'; }).sumBy(function (x) { return +x.distance; }).value();
        var rowTotal = lodash__WEBPACK_IMPORTED_MODULE_2__["chain"](this.workouts).filter(function (x) { return x.type === 'row'; }).sumBy(function (x) { return +x.distance; }).value();
        var runTotal = lodash__WEBPACK_IMPORTED_MODULE_2__["chain"](this.workouts).filter(function (x) { return x.type === 'run'; }).sumBy(function (x) { return +x.distance; }).value();
        this.totals = { bike: bikeTotal, row: rowTotal, run: runTotal };
        // console.log('**totals', this.totals);
    };
    WorkoutsComponent.prototype.getPBType = function (total, target) {
        var pct = (total / target) * 100;
        if (pct <= 25) {
            return 'success';
        }
        else if (pct > 25 && pct <= 50) {
            return 'info';
        }
        else if (pct > 50 && pct <= 75) {
            return 'warning';
        }
        else if (pct > 75) {
            return 'danger';
        }
    };
    WorkoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workouts',
            template: __webpack_require__(/*! ./workouts.component.html */ "./src/app/workouts/workouts.component.html"),
            styles: [__webpack_require__(/*! ./workouts.component.scss */ "./src/app/workouts/workouts.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None // to have css style on tooltip
        }),
        __metadata("design:paramtypes", [_services_workouts_api_service__WEBPACK_IMPORTED_MODULE_1__["WorkoutsApiService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], WorkoutsComponent);
    return WorkoutsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\apps\workout-tracker-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map