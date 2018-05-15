webpackJsonp(["my-team.module"],{

/***/ "./src/app/theme/pages/default/my/team/my-team-routing.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__team_workflows_team_reveiwer_team_reviewer_component__ = __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-reveiwer/team-reviewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__team_workflows_team_supervisor_team_supervisor_component__ = __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-supervisor/team-supervisor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'workflows/reveiwer', component: __WEBPACK_IMPORTED_MODULE_2__team_workflows_team_reveiwer_team_reviewer_component__["a" /* MyTeamReviewerComponent */] },
    { path: 'workflows/supervisor', component: __WEBPACK_IMPORTED_MODULE_3__team_workflows_team_supervisor_team_supervisor_component__["a" /* MyTeamSupervisorComponent */] }
];
var MyTeamRoutingModule = (function () {
    function MyTeamRoutingModule() {
    }
    MyTeamRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], MyTeamRoutingModule);
    return MyTeamRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/team/my-team.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamModule", function() { return MyTeamModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__ = __webpack_require__("./node_modules/ngx-uploader/dist/ngx-uploader.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_team_routing_model__ = __webpack_require__("./src/app/theme/pages/default/my/team/my-team-routing.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_team_service__ = __webpack_require__("./src/app/theme/pages/default/my/team/my-team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__base_base_module__ = __webpack_require__("./src/app/base/base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__team_workflows_team_reveiwer_team_reviewer_component__ = __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-reveiwer/team-reviewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__team_workflows_team_supervisor_team_supervisor_component__ = __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-supervisor/team-supervisor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MyTeamModule = (function () {
    function MyTeamModule() {
    }
    MyTeamModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__my_team_routing_model__["a" /* MyTeamRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__["a" /* NgUploaderModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__base_base_module__["a" /* BaseModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_10__team_workflows_team_reveiwer_team_reviewer_component__["a" /* MyTeamReviewerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__team_workflows_team_supervisor_team_supervisor_component__["a" /* MyTeamSupervisorComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__my_team_service__["a" /* MyTeamService */]]
        })
    ], MyTeamModule);
    return MyTeamModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/team/my-team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyTeamService = (function () {
    function MyTeamService(authService) {
        this.authService = authService;
    }
    MyTeamService.prototype.getProfileProcessInfo = function (empId) {
        var url = "user/getProfileProcessInfo";
        if (empId) {
            url = "user/getProfileProcessInfo?emp_id=" + empId;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyTeamService.prototype.saveProfileStatus = function (data) {
        {
            var url = "user/addProfileProcessInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateProfileProcessInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyTeamService.prototype.deleteImage = function (data) {
        var url = "upload/deleteImage";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    MyTeamService.prototype.getAllEmployee = function () {
        var url = "user/getAllEmployee";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyTeamService.prototype.extractData = function (res) {
        return res || {};
    };
    MyTeamService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MyTeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__base_services_authService_service__["a" /* AuthService */]])
    ], MyTeamService);
    return MyTeamService;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/team/team-workflows/team-reveiwer/team-reviewer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/my/team/team-workflows/team-reveiwer/team-reviewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamReviewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyTeamReviewerComponent = (function () {
    function MyTeamReviewerComponent() {
    }
    MyTeamReviewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-reveiwer/team-reviewer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], MyTeamReviewerComponent);
    return MyTeamReviewerComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/team/team-workflows/team-supervisor/team-supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-subheader\">\r\n\t\t<div class=\"d-flex align-items-center\">\r\n\t\t\t<div class=\"mr-auto\">\r\n\t\t\t\t<h3 class=\"m-subheader__title\">\r\n\t\t\t\t\tSupervisor Dashboard\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"m-content\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<!-- <div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text m--font-light\">\r\n\t\t\t\t\t\t\t\t\tQuick links\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless m--font-light\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t<!-- <div class=\"m-widget17\">\r\n\t\t\t\t\t\t\t<div class=\"m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__chart\" style=\"height:320px;\">\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"m_chart_activities\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget17__stats\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__items m-widget17__items-col1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-calendar m--font-brand\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tLeaves Request\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t <i class=\"flaticon-graph m--font-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__items m-widget17__items-col2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-user-add m--font-success\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tAdd New Employee\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item \">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t <i class=\"flaticon-chat-1 m--font-danger\" ></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<!-- <div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\tStats\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<!-- <ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-portlet__nav-item--last m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless m--font-brand\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t<!-- <div class=\"m-widget15\">\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__chart\" style=\"height:180px;\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\r\n\t\t\t\t\t\t\t\t<canvas id=\"m_chart_sales_stats\" width=\"772\" height=\"180\" class=\"chartjs-render-monitor\" style=\"display: block; height: 180px; width: 772px;\"></canvas>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__items\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t63%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLeaves\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t54%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tKRA Approced\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t41%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 55%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t79%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 60%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__desc\">\r\n\t\t\t\t\t\t\t\t* lorem ipsum dolor sit amet consectetuer sediat elit\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\tApprovals\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t\t<!-- <a class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\tAll\r\n\t\t\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 45px;\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeaves\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKRA\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLearning\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t<div class=\"m-widget4\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\" *ngFor=\"let employee of employeeData ;let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img  *ngIf=\"employee?.ProfileImage; else noImage\" src=\"{{employee?.ProfileImage}}\" onerror=\"this.src ='./assets/app/media/img/custom/users/user6.jpg';\" class=\"directory_image m--img-rounded m--marginless m--img-centered\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ng-template #noImage><img src=\"./assets/app/media/img/custom/users/user6.jpg\" class=\"directory_image m--img-rounded m--marginless m--img-centered\"></ng-template>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\t\t    {{employee.fullName}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{employee.profileProcessDetails.updatedAt | date:\"dd-MMM-yyyy hh:mm aa\" || employee.profileProcessDetails.createdAt | date:\"dd-MMM-yyyy hh:mm aa\"}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t"

/***/ }),

/***/ "./src/app/theme/pages/default/my/team/team-workflows/team-supervisor/team-supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team_service__ = __webpack_require__("./src/app/theme/pages/default/my/team/my-team.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyTeamSupervisorComponent = (function () {
    function MyTeamSupervisorComponent(_myteamService, _authService) {
        this._myteamService = _myteamService;
        this._authService = _authService;
        this.employeeData = [];
    }
    MyTeamSupervisorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.validateToken().subscribe(function (res) {
            _this._currentEmpId = _this._authService.currentUserData._id;
            _this.loadAllEmployee();
        });
    };
    MyTeamSupervisorComponent.prototype.loadAllEmployee = function () {
        var _this = this;
        this._myteamService.getAllEmployee()
            .subscribe(function (res) {
            var data = res.json().data || [];
            if (data.length > 0) {
                data = data.filter(function (obj) { return obj.profileProcessDetails.hrStatus == "Submitted" && obj.supervisor_id == _this._currentEmpId; });
                _this.employeeData = data || [];
            }
            else
                _this.employeeData = data.json().data || [];
        }, function (error) {
        });
    };
    MyTeamSupervisorComponent.prototype.ngAfterViewInit = function () {
    };
    MyTeamSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/team/team-workflows/team-supervisor/team-supervisor.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__my_team_service__["a" /* MyTeamService */],
            __WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__["a" /* AuthService */]])
    ], MyTeamSupervisorComponent);
    return MyTeamSupervisorComponent;
}());



/***/ })

});
//# sourceMappingURL=my-team.module.chunk.js.map