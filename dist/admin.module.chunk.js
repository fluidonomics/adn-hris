webpackJsonp(["admin.module"],{

/***/ "./src/app/theme/pages/default/admin/_guard/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = (function () {
    function AdminGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        //let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // if(this._authService.isLoggedIn() && this._authService.atCurrentUserData.roles.indexOf() >-1)
        // {
        //     this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //     return false;
        // }
        // {
        //     return true;
        // }
        this._router.navigate(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].access_deniedPath);
        return false;
        // return this._userService.verify().map(
        //     data => {
        //         if (data !== null) {
        //             // logged in so return true
        //             return true;
        //         }
        //         // error when verify so redirect to login page with the return url
        //         this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //         return false;
        //     },
        //     error => {
        //         // error when verify so redirect to login page with the return url
        //         this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //         return false;
        //     });
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__base_services_authService_service__["a" /* AuthService */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("./src/app/theme/pages/default/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configure_configure_component__ = __webpack_require__("./src/app/theme/pages/default/admin/configure/configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__masterData_masterData_component__ = __webpack_require__("./src/app/theme/pages/default/admin/masterData/masterData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guard_admin_guard__ = __webpack_require__("./src/app/theme/pages/default/admin/_guard/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AuthGuard } from "../../../../auth/_guards/auth.guard";




// const routes: Routes = [
//     {
//         "path": "",
//         "component": AdminComponent,
//         "canActivate": [AuthGuard],
//         "children": [
//             {
//                 "path": "admin",
//                 "loadChildren": ".\/pages\/default\/admin\/admin.module#AdminModule"
//             },
//             {
//                 "path": "404",
//                 "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
//             },
//             {
//                 "path": "",
//                 "redirectTo": "index",
//                 "pathMatch": "full"
//             }
//         ]
//     },
//     {
//         "path": "**",
//         "redirectTo": "404",
//         "pathMatch": "full"
//     }
// ];
var routes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guard_admin_guard__["a" /* AdminGuard */]],
        children: [
            { path: 'masterData', component: __WEBPACK_IMPORTED_MODULE_4__masterData_masterData_component__["a" /* MasterDataComponent */] },
            { path: 'configure', component: __WEBPACK_IMPORTED_MODULE_3__configure_configure_component__["a" /* ConfigureComponent */] },
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("./src/app/theme/pages/default/admin/admin.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_component__ = __webpack_require__("./src/app/theme/pages/default/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configure_configure_component__ = __webpack_require__("./src/app/theme/pages/default/admin/configure/configure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__masterData_masterData_component__ = __webpack_require__("./src/app/theme/pages/default/admin/masterData/masterData.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_routing_module__ = __webpack_require__("./src/app/theme/pages/default/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guard_admin_guard__ = __webpack_require__("./src/app/theme/pages/default/admin/_guard/admin.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';







var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__layouts_layout_module__["a" /* LayoutModule */],
                //NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__admin_routing_module__["a" /* AdminRoutingModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_4__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__configure_configure_component__["a" /* ConfigureComponent */],
                __WEBPACK_IMPORTED_MODULE_6__masterData_masterData_component__["a" /* MasterDataComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__guard_admin_guard__["a" /* AdminGuard */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/admin/configure/configure.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/admin/configure/configure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var ConfigureComponent = (function () {
    function ConfigureComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ConfigureComponent.prototype.ngOnInit = function () {
    };
    ConfigureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/admin/configure/configure.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ConfigureComponent);
    return ConfigureComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/admin/masterData/masterData.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- BEGIN: Subheader -->\r\n    <!-- <div class=\"m-subheader\">\r\n\t\t<div class=\"d-flex align-items-center\">\r\n\t\t\t<div class=\"mr-auto\">\r\n\t\t\t\t<h3 class=\"m-subheader__title m-subheader__title--separator\">\r\n\t\t\t\t\tForm Controls\r\n\t\t\t\t</h3>\r\n\t\t\t\t<ul class=\"m-subheader__breadcrumbs m-nav m-nav--inline\">\r\n\t\t\t\t\t<li class=\"m-nav__item m-nav__item--home\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-nav__link--icon\">\r\n\t\t\t\t\t\t\t<i class=\"m-nav__link-icon la la-home\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tForms\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tForm Validation\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__separator\">\r\n\t\t\t\t\t\t-\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\tForm Controls\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div>\r\n\t\t\t\t<div class=\"m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link btn btn-lg btn-secondary  m-btn m-btn--outline-2x m-btn--air m-btn--icon m-btn--icon-only m-btn--pill  m-dropdown__toggle\">\r\n\t\t\t\t\t\t<i class=\"la la-plus m--hide\"></i>\r\n\t\t\t\t\t\t<i class=\"la la-ellipsis-h\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tSubmit\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    </div> -->\r\n\t<!-- END: Subheader -->\r\n\t<div class=\"m-content\">\r\n\t\t<!--begin::Portlet-->\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tDefault Form Validation\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" id=\"m_form_1\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__content\">\r\n\t\t\t\t\t\t<div class=\"m-alert m-alert--icon alert alert-danger m--hide\" role=\"alert\" id=\"m_form_1_msg\">\r\n\t\t\t\t\t\t\t<div class=\"m-alert__icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-warning\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-alert__text\">\r\n\t\t\t\t\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-alert__close\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-close=\"alert\" aria-label=\"Close\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tEmail *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"email\" placeholder=\"Enter your email\">\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tURL *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"url\" placeholder=\"Enter your url\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t.via.com\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your website URL.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tDigits\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-input-icon m-input-icon--left\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"digits\" placeholder=\"Enter digits\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calculator\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter only digits\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCredit Card\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"creditcard\" placeholder=\"Enter card number\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"la la-credit-card\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your credit card number\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tUS Phone\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"phone\" placeholder=\"Enter phone\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-phone\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your US phone number\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tOption *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<select class=\"form-control m-input\" name=\"option\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">\r\n\t\t\t\t\t\t\t\t\tSelect\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select an option.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tOptions *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<select class=\"form-control m-input\" name=\"options\" multiple size=\"5\">\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select at least one or maximum 4 options\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tMemo *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control m-input\" name=\"memo\" placeholder=\"Enter a menu\"></textarea>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter a menu within text length range 10 and 100.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed m-form__seperator--space\"></div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCheckbox *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-inline\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\tTick me\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease tick the checkbox\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCheckboxes *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 1\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 2\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 3\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select at lease 1 and maximum 2 options\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tRadios *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-radio-inline\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 1\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 2\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 3\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select an option\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">\r\n\t\t\t\t\t\t\t\t\tValidate\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t\t<!--end::Portlet-->  <!--begin::Portlet-->\r\n\t\t<div class=\"m-portlet\">\r\n\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\tInputs Highlighted Validation State\r\n\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!--begin::Form-->\r\n\t\t\t<form class=\"m-form m-form--state m-form--fit m-form--label-align-right\" id=\"m_form_2\">\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"m-form__content\">\r\n\t\t\t\t\t\t<div class=\"m-alert m-alert--icon alert alert-warning m--hide\" role=\"alert\" id=\"m_form_2_msg\">\r\n\t\t\t\t\t\t\t<div class=\"m-alert__icon\">\r\n\t\t\t\t\t\t\t\t<i class=\"la la-warning\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-alert__text\">\r\n\t\t\t\t\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-alert__close\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-close=\"alert\" aria-label=\"Close\"></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tEmail *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"email\" placeholder=\"Enter your email\">\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tWe'll never share your email with anyone else.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tURL *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"url\" placeholder=\"Enter your url\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t.via.com\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your website URL.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tDigits\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-input-icon m-input-icon--left\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"digits\" placeholder=\"Enter digits\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-input-icon__icon m-input-icon__icon--left\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-calculator\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter only digits\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCredit Card\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"creditcard\" placeholder=\"Enter card number\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"la la-credit-card\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your credit card number\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tUS Phone\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" name=\"phone\" placeholder=\"Enter phone\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"la la-phone\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter your US phone number\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tOption *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<select class=\"form-control m-input\" name=\"option\">\r\n\t\t\t\t\t\t\t\t<option value=\"\">\r\n\t\t\t\t\t\t\t\t\tSelect\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select an option.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tOptions *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<select class=\"form-control m-input\" name=\"options\" multiple size=\"5\">\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t1\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t3\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t4\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t\t<option>\r\n\t\t\t\t\t\t\t\t\t5\r\n\t\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select at least one or maximum 4 options\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tMemo *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<textarea class=\"form-control m-input\" name=\"memo\" placeholder=\"Enter a menu\"></textarea>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease enter a menu within text length range 10 and 100.\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-form__seperator m-form__seperator--dashed m-form__seperator--space\"></div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCheckbox *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-inline\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkbox\">\r\n\t\t\t\t\t\t\t\t\tTick me\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease tick the checkbox\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tCheckboxes *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-checkbox-list\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 1\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 2\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-checkbox\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"checkboxes\">\r\n\t\t\t\t\t\t\t\t\tOption 3\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select at lease 1 and maximum 2 options\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t<label class=\"col-form-label col-lg-3 col-sm-12\">\r\n\t\t\t\t\t\t\tRadios *\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-4 col-md-9 col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"m-radio-inline\">\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 1\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 2\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"m-radio\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"radio\">\r\n\t\t\t\t\t\t\t\t\tOption 3\r\n\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\tPlease select an option\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n\t\t\t\t\t<div class=\"m-form__actions m-form__actions\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-9 ml-lg-auto\">\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-accent\">\r\n\t\t\t\t\t\t\t\t\tValidate\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<button type=\"reset\" class=\"btn btn-secondary\">\r\n\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<!--end::Form-->\r\n\t\t</div>\r\n\t\t<!--end::Portlet-->\r\n    </div>\r\n\t"

/***/ }),

/***/ "./src/app/theme/pages/default/admin/masterData/masterData.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var MasterDataComponent = (function () {
    function MasterDataComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    // constructor(private formBuilder: FormBuilder,
    //     private modalService: NgbModal) {
    // }
    MasterDataComponent.prototype.ngOnInit = function () {
    };
    MasterDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/admin/masterData/masterData.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], MasterDataComponent);
    return MasterDataComponent;
}());



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map