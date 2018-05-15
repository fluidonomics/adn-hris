webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/default/admin/admin.module": [
		"./src/app/theme/pages/default/admin/admin.module.ts",
		"admin.module"
	],
	"./pages/default/dashboard/dashboard.module": [
		"./src/app/theme/pages/default/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./pages/default/hr/hr.module": [
		"./src/app/theme/pages/default/hr/hr.module.ts",
		"hr.module",
		"common"
	],
	"./pages/default/my/my.module": [
		"./src/app/theme/pages/default/my/my.module.ts",
		"common",
		"my.module"
	],
	"./pages/default/not-found/not-found.module": [
		"./src/app/theme/pages/default/not-found/not-found.module.ts",
		"not-found.module"
	],
	"./team/my-team.module": [
		"./src/app/theme/pages/default/my/team/my-team.module.ts",
		"common",
		"my-team.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_directives/href-prevent-default.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HrefPreventDefaultDirective; });
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

var HrefPreventDefaultDirective = (function () {
    function HrefPreventDefaultDirective(el) {
        this.el = el;
    }
    HrefPreventDefaultDirective.prototype.ngAfterViewInit = function () {
    };
    HrefPreventDefaultDirective.prototype.preventDefault = function (event) {
        if (this.href.length === 0 || this.href === '#') {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HrefPreventDefaultDirective.prototype, "href", void 0);
    HrefPreventDefaultDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[href]",
            host: { '(click)': 'preventDefault($event)' },
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HrefPreventDefaultDirective);
    return HrefPreventDefaultDirective;
}());



/***/ }),

/***/ "./src/app/_directives/unwrap-tag.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnwrapTagDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("./src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnwrapTagDirective = (function () {
    function UnwrapTagDirective(el) {
        this.el = el;
    }
    UnwrapTagDirective.prototype.ngAfterViewInit = function () {
        var nativeElement = this.el.nativeElement;
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].unwrapTag(nativeElement);
    };
    UnwrapTagDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[appunwraptag]",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], UnwrapTagDirective);
    return UnwrapTagDirective;
}());



/***/ }),

/***/ "./src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "./src/app/accessDenied/accessDenied.component.html":
/***/ (function(module, exports) {

module.exports = "No Permmission"

/***/ }),

/***/ "./src/app/accessDenied/accessDenied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessDeniedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccessDeniedComponent = (function () {
    function AccessDeniedComponent() {
        this.model = {};
        this.loading = false;
        //@ViewChild('alertSignin', { read: ViewContainerRef }) alertSignin: ViewContainerRef;
        //@ViewChild('alertForgotPass', { read: ViewContainerRef }) alertForgotPass: ViewContainerRef;
        // // constructor(private _router: Router,
        // //     private _script: ScriptLoaderService,
        // //     private _userService: UserService,
        // //     private _route: ActivatedRoute,
        // //     private _authService: AuthenticationService,
        // //     private _alertService: AlertService,
        // //     private cfr: ComponentFactoryResolver) {
        // // }
        // // ngOnInit() {
        // //     this.model.remember = true;
        // //     // get return url from route parameters or default to '/'
        // //     this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        // //     this._router.navigate([this.returnUrl]);
        // //     this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
        // //         .then(() => {
        // //             Helpers.setLoading(false);
        // //             LoginCustom.init();
        // //         });
        // // }
        // // signin() {
        // //     this.loading = true;
        // //     this._authService.login(this.model.email, this.model.password)
        // //         .subscribe(
        // //         data => {
        // //             this._router.navigate([this.returnUrl]);
        // //         },
        // //         error => {
        // //             this.showAlert('alertSignin');
        // //             this._alertService.error(error);
        // //             this.loading = false;
        // //         });
        // // }
        // // showAlert(target) {
        // //     this[target].clear();
        // //     let factory = this.cfr.resolveComponentFactory(AlertComponent);
        // //     let ref = this[target].createComponent(factory);
        // //     ref.changeDetectorRef.detectChanges();
        // // }
    }
    AccessDeniedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./src/app/accessDenied/accessDenied.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        })
    ], AccessDeniedComponent);
    return AccessDeniedComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password_forget_password_forget_password_component__ = __webpack_require__("./src/app/password/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_reset_password_reset_password_component__ = __webpack_require__("./src/app/password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accessDenied_accessDenied_component__ = __webpack_require__("./src/app/accessDenied/accessDenied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    //{ path: 'login', loadChildren: './auth/auth.module#AuthModule' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'reset', component: __WEBPACK_IMPORTED_MODULE_2__password_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_3__password_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: "access-denied", component: __WEBPACK_IMPORTED_MODULE_4__accessDenied_accessDenied_component__["a" /* AccessDeniedComponent */] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Page loader -->\n<div class=\"m-page-loader m-page-loader--non-block\" style=\"margin-left: -80px; margin-top: -20px;\">\n\t<div class=\"m-blockui\">\n\t\t<span>\n\t\t\tPlease wait...\n\t\t</span>\n\t\t<span>\n\t\t\t<div class=\"m-loader m-loader--brand\"></div>\n\t\t</span>\n\t</div>\n</div>\n<!-- end::Page loader -->                      \t<!-- begin:: Page -->\n<router-outlet></router-outlet>\n<!-- end:: Page -->\n<!-- <app-quick-sidebar></app-quick-sidebar> -->\n<app-scroll-top></app-scroll-top>\n<!-- <app-tooltips></app-tooltips> -->\n<!--begin::Base Scripts -->             \t    \t \t\t    \t \t\t\t\t<!--end::Base Scripts -->                       <!--begin::Page Vendors -->                                   <!--end::Page Vendors -->                                                              <!--begin::Page Snippets -->                                   <!--end::Page Snippets -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = (function () {
    function AppComponent(platformId, authService, _router) {
        this.platformId = platformId;
        this.authService = authService;
        this._router = _router;
        this.title = 'app';
        this.globalBodyClass = 'm-page--loading-non-block m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["j" /* isPlatformBrowser */])(this.platformId)) {
            __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base.resetPasswordCallback = window.location.origin + "/reset-password";
            // this.authService.init(environment.api_base);
        }
        this.authService.init(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationStart */]) {
                __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].bodyClass(_this.globalBodyClass);
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(false);
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'body',
            template: __webpack_require__("./src/app/app.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_theme_component__ = __webpack_require__("./src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_theme_routing_module__ = __webpack_require__("./src/app/theme/theme-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__password_forget_password_forget_password_component__ = __webpack_require__("./src/app/password/forget-password/forget-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__password_reset_password_reset_password_component__ = __webpack_require__("./src/app/password/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__accessDenied_accessDenied_component__ = __webpack_require__("./src/app/accessDenied/accessDenied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__base_base_module__ = __webpack_require__("./src/app/base/base.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__theme_theme_component__["a" /* ThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__password_forget_password_forget_password_component__["a" /* ForgetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_14__password_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_15__accessDenied_accessDenied_component__["a" /* AccessDeniedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__base_base_module__["a" /* BaseModule */],
                __WEBPACK_IMPORTED_MODULE_6__theme_layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'AdnHris' }),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__theme_theme_routing_module__["a" /* ThemeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_16__base_services_authService_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__base_services_common_service__["a" /* CommonService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/_components/summernote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummernoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// Type definitions for Summernote v0.8.2
// Project: http://summernote.org/deep-dive/#initialization-options
// Definitions by: Wouter Staelens https://github.com/wstaelens/
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// declare module "summernote" {
// }


var SUMMERNOTE_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return SummernoteComponent; }),
    multi: true
};
var SummernoteComponent = (function () {
    function SummernoteComponent(element) {
        this.element = element;
        this.whitespaceEmpty = false;
        this.emptyChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.textChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._disabled = false;
        this.onTouched = function () { };
        this.onChange = function () { };
    }
    Object.defineProperty(SummernoteComponent.prototype, "options", {
        get: function () {
            return this._options || {};
        },
        set: function (options) {
            this._options = options;
            this.addCallbacks();
            this.refreshOptions();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummernoteComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (disabled) {
            if (disabled != null) {
                this._disabled = disabled;
                $(this.element.nativeElement).find('.summernote').summernote(disabled ? 'disable' : 'enable');
                this.refreshOptions();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummernoteComponent.prototype, "empty", {
        get: function () {
            return this._empty;
        },
        set: function (value) {
            if (this._empty != value) {
                this._empty = value;
                this.emptyChange.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SummernoteComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    SummernoteComponent.prototype.refreshOptions = function () {
        $(this.element.nativeElement).find('.summernote').summernote(this.options);
        if (this.options.tooltip != undefined && !this.options.tooltip)
            $(this.element.nativeElement).find('.note-editor button.note-btn').tooltip('destroy');
    };
    SummernoteComponent.prototype.addCallbacks = function () {
        var _this = this;
        this.options.callbacks = {
            onChange: function (contents, $editable) {
                _this.refreshEmpty();
                _this.onChange(contents);
            },
            onBlur: function () {
                _this.onTouched();
            }
        };
    };
    SummernoteComponent.prototype.refreshEmpty = function () {
        var summernote = $(this.element.nativeElement).find('.summernote');
        if (summernote == null)
            return;
        this.empty = summernote.summernote('isEmpty');
        if (this.whitespaceEmpty)
            this.empty = this.empty || summernote.summernote('code').replace(/(<\/?[^>]+>)|(&nbsp;)/g, "").trim() === '';
    };
    SummernoteComponent.prototype.ngOnInit = function () {
        if (this.options == null) {
            this.options = {};
        }
        this.refreshEmpty();
    };
    SummernoteComponent.prototype.ngOnDestroy = function () {
        $(this.element.nativeElement).find('.summernote').summernote('destroy');
    };
    SummernoteComponent.prototype.writeValue = function (code) {
        this.value = code;
        $(this.element.nativeElement).find('.summernote').summernote('code', code);
        this.refreshEmpty();
    };
    SummernoteComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SummernoteComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SummernoteComponent.prototype, "options", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SummernoteComponent.prototype, "disabled", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SummernoteComponent.prototype, "whitespaceEmpty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SummernoteComponent.prototype, "emptyChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SummernoteComponent.prototype, "textChange", void 0);
    SummernoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'summernote',
            template: '<div class="summernote"></div>',
            providers: [SUMMERNOTE_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], SummernoteComponent);
    return SummernoteComponent;
}());



/***/ }),

/***/ "./src/app/base/_directive/equalValidator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    EqualValidator_1 = EqualValidator;
    Object.defineProperty(EqualValidator.prototype, "isReverse", {
        get: function () {
            if (!this.reverse)
                return false;
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    EqualValidator.prototype.validate = function (c) {
        // self value
        var v = c.value;
        // control vlaue
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            return {
                validateEqual: true
            };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ validateEqual: true });
        }
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* forwardRef */])(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('validateEqual')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('reverse')),
        __metadata("design:paramtypes", [String, String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());



/***/ }),

/***/ "./src/app/base/_directive/only-number.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnlyNumberDirective; });
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

var OnlyNumberDirective = (function () {
    function OnlyNumberDirective(el) {
        this.el = el;
    }
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+V
                //(e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], OnlyNumberDirective.prototype, "OnlyNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], OnlyNumberDirective.prototype, "onKeyDown", null);
    OnlyNumberDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[OnlyNumber]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], OnlyNumberDirective);
    return OnlyNumberDirective;
}());



/***/ }),

/***/ "./src/app/base/_jsonData/dropDownData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return nationality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return levelofEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return examDegreeTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bloodGroup; });
/* unused harmony export separationType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return festivalAllowance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return providentFundMembership; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return groupLifeInsurance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hospitalizationScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return martialStatus; });
/* unused harmony export confirmationStatus */
/* unused harmony export relation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return religion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return country; });
var currency = [
    {
        "id": "Bangaladesh Taka (BDT)",
        "text": "Bangaladesh Taka (BDT)",
    },
    {
        "id": "US Dollar (USD)",
        "text": "US Dollar (USD)",
    }
];
var nationality = [
    {
        "id": "Bangladesh",
        "text": "Bangladesh",
    },
    {
        "id": "Other",
        "text": "Other",
    }
];
var levelofEducation = [
    {
        "id": "PSC\\5 Pass",
        "text": "PSC\\5 Pass"
    },
    {
        "id": "JSC\\JDC\\8Pass",
        "text": "JSC\\JDC\\8Pass"
    },
    {
        "id": "Secondary",
        "text": "Secondary"
    },
    {
        "id": "Higher Secondary",
        "text": "Higher Secondary"
    },
    {
        "id": "Diploma",
        "text": "Diploma"
    },
    {
        "id": "Bachelors/Honours",
        "text": "Bachelors/Honours"
    },
    {
        "id": "Masters",
        "text": "Masters"
    }
];
var examDegreeTitle = [
    {
        "id": "PSC",
        "text": "PSC"
    },
    {
        "id": "Ebtedayee(Madrasah)",
        "text": "Ebtedayee(Madrasah)"
    },
    {
        "id": "5 pass",
        "text": "5 pass"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "JSC",
        "text": "JSC"
    },
    {
        "id": "JDC(Madrasah)",
        "text": "JDC(Madrasah)"
    },
    {
        "id": "8 pass",
        "text": "8 pass"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "SSC",
        "text": "SSC"
    },
    {
        "id": "O Level",
        "text": "O Level"
    },
    {
        "id": "Dakhil (Madrasah)",
        "text": "Dakhil (Madrasah)"
    },
    {
        "id": "SSC Vocational",
        "text": "SSC Vocational"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "HSC",
        "text": "HSC"
    },
    {
        "id": "A Level",
        "text": "A Level"
    },
    {
        "id": "Alim (Madrasah)",
        "text": "Alim (Madrasah)"
    },
    {
        "id": "HSC Vocational",
        "text": "HSC Vocational"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "Diploma in Engineering",
        "text": "Diploma in Engineering"
    },
    {
        "id": "Diploma in Commerce",
        "text": "Diploma in Commerce"
    },
    {
        "id": "Diploma in Business Studies",
        "text": "Diploma in Business Studies"
    },
    {
        "id": "Post Graduate Diploma",
        "text": "Post Graduate Diploma"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "Bachelor of Science (BSC)",
        "text": "Bachelor of Science (BSC)"
    },
    {
        "id": "Bachelor of Arts (BA)",
        "text": "Bachelor of Arts (BA)"
    },
    {
        "id": "Bachelor of Commerce (BCOM)",
        "text": "Bachelor of Commerce (BCOM)"
    },
    {
        "id": "Bachelor of Business Administrative (BBA)",
        "text": "Bachelor of Business Administrative (BBA)"
    },
    {
        "id": "Bachelor of Architecture (B.ARCH)",
        "text": "Bachelor of Architecture (B.ARCH)"
    },
    {
        "id": "Bachelor of Law (LLB)",
        "text": "Bachelor of Law (LLB)"
    },
    {
        "id": "Bachelor of Social Science (BSS)",
        "text": "Bachelor of Social Science (BSS)"
    },
    {
        "id": "Bachelor of Fine Arts (BFA)",
        "text": "Bachelor of Fine Arts (BFA)"
    },
    {
        "id": "Bachelor of Business Studies (BBS)",
        "text": "Bachelor of Business Studies (BBS)"
    },
    {
        "id": "Bachelor of Computer Application (BCA)",
        "text": "Bachelor of Computer Application (BCA)"
    },
    {
        "id": "Fazil (Madrasah)",
        "text": "Fazil (Madrasah)"
    },
    {
        "id": "Bachelor in Engineering (B.Engg)",
        "text": "Bachelor in Engineering (B.Engg)"
    },
    {
        "id": "Other",
        "text": "Other"
    },
    {
        "id": "Masters of Science (MSc)",
        "text": "Masters of Science (MSc)"
    },
    {
        "id": "Masters of Arts (MA)",
        "text": "Masters of Arts (MA)"
    },
    {
        "id": "Masters of Commerce (M.Com)",
        "text": "Masters of Commerce (M.Com)"
    },
    {
        "id": "Masters of Business Administrative (MBA)",
        "text": "Masters of Business Administrative (MBA)"
    },
    {
        "id": "Masters of Architecture (M.ARCH)",
        "text": "Masters of Architecture (M.ARCH)"
    },
    {
        "id": "Masters of Law (LLM)",
        "text": "Masters of Law (LLM)"
    },
    {
        "id": "Masters of Social Science (MSS)",
        "text": "Masters of Social Science (MSS)"
    },
    {
        "id": "Masters of Fine Arts (MFA)",
        "text": "Masters of Fine Arts (MFA)"
    },
    {
        "id": "Masters of Philosophy (M.Phill)",
        "text": "Masters of Philosophy (M.Phill)"
    },
    {
        "id": "Master of Business Management (MBM)",
        "text": "Master of Business Management (MBM)"
    },
    {
        "id": "Master of Development Studies (MDS)",
        "text": "Master of Development Studies (MDS)"
    },
    {
        "id": "Masters of Business Studies (MBS)",
        "text": "Masters of Business Studies (MBS)"
    },
    {
        "id": "Masters in Computer Application (MCA)",
        "text": "Masters in Computer Application (MCA)"
    },
    {
        "id": "Executive Masters of Business Administration (EMBA)",
        "text": "Executive Masters of Business Administration (EMBA)"
    },
    {
        "id": "Kamil (Madrasah)",
        "text": "Kamil (Madrasah)"
    },
    {
        "id": "Master in Engineering (M.Engg)",
        "text": "Master in Engineering (M.Engg)"
    },
    {
        "id": "Other",
        "text": "Other"
    }
];
var results = [
    {
        "id": "First Division/Class",
        "text": "First Division/Class"
    },
    {
        "id": "Second Division/Class",
        "text": "Second Division/Class"
    },
    {
        "id": "Third Division/Class",
        "text": "Third Division/Class"
    },
    {
        "id": "Grade",
        "text": "Grade"
    },
    {
        "id": "Appeared",
        "text": "Appeared"
    },
    {
        "id": "Enrolled",
        "text": "Enrolled"
    },
    {
        "id": "Awarded",
        "text": "Awarded"
    },
    {
        "id": "Don?t Mention",
        "text": "Don?t Mention"
    },
    {
        "id": "Pass",
        "text": "Pass"
    }
];
var bloodGroup = [
    {
        "id": "A+",
        "text": "A+"
    },
    {
        "id": "B+",
        "text": "B+"
    },
    {
        "id": "O+",
        "text": "O+"
    },
    {
        "id": "AB+",
        "text": "AB+"
    },
    {
        "id": "A-",
        "text": "A-"
    },
    {
        "id": "B-",
        "text": "B-"
    },
    {
        "id": "O-",
        "text": "O-"
    },
    {
        "id": "AB-",
        "text": "AB-"
    }
];
var separationType = [
    {
        "id": "Resigned",
        "text": "Resigned"
    },
    {
        "id": "Terminated",
        "text": "Terminated"
    },
    {
        "id": "Dismissed",
        "text": "Dismissed"
    }
];
var festivalAllowance = [
    {
        "id": "Basic",
        "text": "Basic"
    },
    {
        "id": "50% of Gross",
        "text": "50% of Gross"
    }
];
var providentFundMembership = [
    {
        "id": "Yes",
        "text": "Yes"
    },
    {
        "id": "No",
        "text": "No"
    }
];
var groupLifeInsurance = [
    {
        "id": "Yes",
        "text": "Yes"
    },
    {
        "id": "No",
        "text": "No"
    }
];
var hospitalizationScheme = [
    {
        "id": "Yes",
        "text": "Yes"
    },
    {
        "id": "No",
        "text": "No"
    }
];
var martialStatus = [
    {
        "id": "Single",
        "text": "Single"
    },
    {
        "id": "Married",
        "text": "Married"
    },
    {
        "id": "Divorced",
        "text": "Divorced"
    },
    {
        "id": "Widowed",
        "text": "Widowed"
    }
];
var confirmationStatus = [
    {
        "id": "On Probation",
        "text": "On Probation"
    },
    {
        "id": "Confirmed",
        "text": "Confirmed"
    }
];
var relation = [
    {
        "id": "Father",
        "text": "Father"
    },
    {
        "id": "Mother",
        "text": "Mother"
    },
    {
        "id": "Brother",
        "text": "Brother"
    },
    {
        "id": "Sister",
        "text": "Sister"
    },
    {
        "id": "Spouse",
        "text": "Spouse"
    },
    {
        "id": "Son",
        "text": "Son"
    },
    {
        "id": "Daughter",
        "text": "Daughter"
    }
];
var religion = [
    {
        "id": "Hindu",
        "text": "Hindu"
    },
    {
        "id": "Islam",
        "text": "Islam"
    },
    {
        "id": "Chirstan",
        "text": "Chirstan"
    },
    {
        "id": "Buddhist",
        "text": "Buddhist"
    }
];
var country = [
    {
        "id": "Afghanistan",
        "text": "Afghanistan"
    },
    {
        "id": "Albania",
        "text": "Albania"
    },
    {
        "id": "Algeria",
        "text": "Algeria"
    },
    {
        "id": "American Samoa",
        "text": "American Samoa"
    },
    {
        "id": "Andorra",
        "text": "Andorra"
    },
    {
        "id": "Angola",
        "text": "Angola"
    },
    {
        "id": "Anguilla",
        "text": "Anguilla"
    },
    {
        "id": "Antarctica",
        "text": "Antarctica"
    },
    {
        "id": "Antigua and Barbuda",
        "text": "Antigua and Barbuda"
    },
    {
        "id": "Argentina",
        "text": "Argentina"
    },
    {
        "id": "Armenia",
        "text": "Armenia"
    },
    {
        "id": "Aruba",
        "text": "Aruba"
    },
    {
        "id": "Australia",
        "text": "Australia"
    },
    {
        "id": "Austria",
        "text": "Austria"
    },
    {
        "id": "Azerbaijan",
        "text": "Azerbaijan"
    },
    {
        "id": "Bahamas",
        "text": "Bahamas"
    },
    {
        "id": "Bahrain",
        "text": "Bahrain"
    },
    {
        "id": "Bangladesh",
        "text": "Bangladesh"
    },
    {
        "id": "Barbados",
        "text": "Barbados"
    },
    {
        "id": "Belarus",
        "text": "Belarus"
    },
    {
        "id": "Belgium",
        "text": "Belgium"
    },
    {
        "id": "Belize",
        "text": "Belize"
    },
    {
        "id": "Benin",
        "text": "Benin"
    },
    {
        "id": "Bermuda",
        "text": "Bermuda"
    },
    {
        "id": "Bhutan",
        "text": "Bhutan"
    },
    {
        "id": "Bolivia",
        "text": "Bolivia"
    },
    {
        "id": "Bosnia and Herzegovina",
        "text": "Bosnia and Herzegovina"
    },
    {
        "id": "Botswana",
        "text": "Botswana"
    },
    {
        "id": "Bouvet Island",
        "text": "Bouvet Island"
    },
    {
        "id": "Brazil",
        "text": "Brazil"
    },
    {
        "id": "British Antarctic Territory",
        "text": "British Antarctic Territory"
    },
    {
        "id": "British Indian Ocean Territory",
        "text": "British Indian Ocean Territory"
    },
    {
        "id": "British Virgin Islands",
        "text": "British Virgin Islands"
    },
    {
        "id": "Brunei",
        "text": "Brunei"
    },
    {
        "id": "Bulgaria",
        "text": "Bulgaria"
    },
    {
        "id": "Burkina Faso",
        "text": "Burkina Faso"
    },
    {
        "id": "Burundi",
        "text": "Burundi"
    },
    {
        "id": "Cambodia",
        "text": "Cambodia"
    },
    {
        "id": "Cameroon",
        "text": "Cameroon"
    },
    {
        "id": "Canada",
        "text": "Canada"
    },
    {
        "id": "Canton and Enderbury Islands",
        "text": "Canton and Enderbury Islands"
    },
    {
        "id": "Cape Verde",
        "text": "Cape Verde"
    },
    {
        "id": "Cayman Islands",
        "text": "Cayman Islands"
    },
    {
        "id": "Central African Republic",
        "text": "Central African Republic"
    },
    {
        "id": "Chad",
        "text": "Chad"
    },
    {
        "id": "Chile",
        "text": "Chile"
    },
    {
        "id": "China",
        "text": "China"
    },
    {
        "id": "Christmas Island",
        "text": "Christmas Island"
    },
    {
        "id": "Cocos [Keeling] Islands",
        "text": "Cocos [Keeling] Islands"
    },
    {
        "id": "Colombia",
        "text": "Colombia"
    },
    {
        "id": "Comoros",
        "text": "Comoros"
    },
    {
        "id": "Congo - Brazzaville",
        "text": "Congo - Brazzaville"
    },
    {
        "id": "Congo - Kinshasa",
        "text": "Congo - Kinshasa"
    },
    {
        "id": "Cook Islands",
        "text": "Cook Islands"
    },
    {
        "id": "Costa Rica",
        "text": "Costa Rica"
    },
    {
        "id": "Croatia",
        "text": "Croatia"
    },
    {
        "id": "Cuba",
        "text": "Cuba"
    },
    {
        "id": "Cyprus",
        "text": "Cyprus"
    },
    {
        "id": "Czech Republic",
        "text": "Czech Republic"
    },
    {
        "id": "C%uFFFDte d?Ivoire",
        "text": "C%uFFFDte d?Ivoire"
    },
    {
        "id": "Denmark",
        "text": "Denmark"
    },
    {
        "id": "Djibouti",
        "text": "Djibouti"
    },
    {
        "id": "Dominica",
        "text": "Dominica"
    },
    {
        "id": "Dominican Republic",
        "text": "Dominican Republic"
    },
    {
        "id": "Dronning Maud Land",
        "text": "Dronning Maud Land"
    },
    {
        "id": "East Germany",
        "text": "East Germany"
    },
    {
        "id": "Ecuador",
        "text": "Ecuador"
    },
    {
        "id": "Egypt",
        "text": "Egypt"
    },
    {
        "id": "El Salvador",
        "text": "El Salvador"
    },
    {
        "id": "Equatorial Guinea",
        "text": "Equatorial Guinea"
    },
    {
        "id": "Eritrea",
        "text": "Eritrea"
    },
    {
        "id": "Estonia",
        "text": "Estonia"
    },
    {
        "id": "Ethiopia",
        "text": "Ethiopia"
    },
    {
        "id": "Falkland Islands",
        "text": "Falkland Islands"
    },
    {
        "id": "Faroe Islands",
        "text": "Faroe Islands"
    },
    {
        "id": "Fiji",
        "text": "Fiji"
    },
    {
        "id": "Finland",
        "text": "Finland"
    },
    {
        "id": "France",
        "text": "France"
    },
    {
        "id": "French Guiana",
        "text": "French Guiana"
    },
    {
        "id": "French Polynesia",
        "text": "French Polynesia"
    },
    {
        "id": "French Southern Territories",
        "text": "French Southern Territories"
    },
    {
        "id": "French Southern and Antarctic Territories",
        "text": "French Southern and Antarctic Territories"
    },
    {
        "id": "Gabon",
        "text": "Gabon"
    },
    {
        "id": "Gambia",
        "text": "Gambia"
    },
    {
        "id": "Georgia",
        "text": "Georgia"
    },
    {
        "id": "Germany",
        "text": "Germany"
    },
    {
        "id": "Ghana",
        "text": "Ghana"
    },
    {
        "id": "Gibraltar",
        "text": "Gibraltar"
    },
    {
        "id": "Greece",
        "text": "Greece"
    },
    {
        "id": "Greenland",
        "text": "Greenland"
    },
    {
        "id": "Grenada",
        "text": "Grenada"
    },
    {
        "id": "Guadeloupe",
        "text": "Guadeloupe"
    },
    {
        "id": "Guam",
        "text": "Guam"
    },
    {
        "id": "Guatemala",
        "text": "Guatemala"
    },
    {
        "id": "Guernsey",
        "text": "Guernsey"
    },
    {
        "id": "Guinea",
        "text": "Guinea"
    },
    {
        "id": "Guinea-Bissau",
        "text": "Guinea-Bissau"
    },
    {
        "id": "Guyana",
        "text": "Guyana"
    },
    {
        "id": "Haiti",
        "text": "Haiti"
    },
    {
        "id": "Heard Island and McDonald Islands",
        "text": "Heard Island and McDonald Islands"
    },
    {
        "id": "Honduras",
        "text": "Honduras"
    },
    {
        "id": "Hong Kong SAR China",
        "text": "Hong Kong SAR China"
    },
    {
        "id": "Hungary",
        "text": "Hungary"
    },
    {
        "id": "Iceland",
        "text": "Iceland"
    },
    {
        "id": "India",
        "text": "India"
    },
    {
        "id": "Indonesia",
        "text": "Indonesia"
    },
    {
        "id": "Iran",
        "text": "Iran"
    },
    {
        "id": "Iraq",
        "text": "Iraq"
    },
    {
        "id": "Ireland",
        "text": "Ireland"
    },
    {
        "id": "Isle of Man",
        "text": "Isle of Man"
    },
    {
        "id": "Israel",
        "text": "Israel"
    },
    {
        "id": "Italy",
        "text": "Italy"
    },
    {
        "id": "Jamaica",
        "text": "Jamaica"
    },
    {
        "id": "Japan",
        "text": "Japan"
    },
    {
        "id": "Jersey",
        "text": "Jersey"
    },
    {
        "id": "Johnston Island",
        "text": "Johnston Island"
    },
    {
        "id": "Jordan",
        "text": "Jordan"
    },
    {
        "id": "Kazakhstan",
        "text": "Kazakhstan"
    },
    {
        "id": "Kenya",
        "text": "Kenya"
    },
    {
        "id": "Kiribati",
        "text": "Kiribati"
    },
    {
        "id": "Kuwait",
        "text": "Kuwait"
    },
    {
        "id": "Kyrgyzstan",
        "text": "Kyrgyzstan"
    },
    {
        "id": "Laos",
        "text": "Laos"
    },
    {
        "id": "Latvia",
        "text": "Latvia"
    },
    {
        "id": "Lebanon",
        "text": "Lebanon"
    },
    {
        "id": "Lesotho",
        "text": "Lesotho"
    },
    {
        "id": "Liberia",
        "text": "Liberia"
    },
    {
        "id": "Libya",
        "text": "Libya"
    },
    {
        "id": "Liechtenstein",
        "text": "Liechtenstein"
    },
    {
        "id": "Lithuania",
        "text": "Lithuania"
    },
    {
        "id": "Luxembourg",
        "text": "Luxembourg"
    },
    {
        "id": "Macau SAR China",
        "text": "Macau SAR China"
    },
    {
        "id": "Macedonia",
        "text": "Macedonia"
    },
    {
        "id": "Madagascar",
        "text": "Madagascar"
    },
    {
        "id": "Malawi",
        "text": "Malawi"
    },
    {
        "id": "Malaysia",
        "text": "Malaysia"
    },
    {
        "id": "Maldives",
        "text": "Maldives"
    },
    {
        "id": "Mali",
        "text": "Mali"
    },
    {
        "id": "Malta",
        "text": "Malta"
    },
    {
        "id": "Marshall Islands",
        "text": "Marshall Islands"
    },
    {
        "id": "Martinique",
        "text": "Martinique"
    },
    {
        "id": "Mauritania",
        "text": "Mauritania"
    },
    {
        "id": "Mauritius",
        "text": "Mauritius"
    },
    {
        "id": "Mayotte",
        "text": "Mayotte"
    },
    {
        "id": "Metropolitan France",
        "text": "Metropolitan France"
    },
    {
        "id": "Mexico",
        "text": "Mexico"
    },
    {
        "id": "Micronesia",
        "text": "Micronesia"
    },
    {
        "id": "Midway Islands",
        "text": "Midway Islands"
    },
    {
        "id": "Moldova",
        "text": "Moldova"
    },
    {
        "id": "Monaco",
        "text": "Monaco"
    },
    {
        "id": "Mongolia",
        "text": "Mongolia"
    },
    {
        "id": "Montenegro",
        "text": "Montenegro"
    },
    {
        "id": "Montserrat",
        "text": "Montserrat"
    },
    {
        "id": "Morocco",
        "text": "Morocco"
    },
    {
        "id": "Mozambique",
        "text": "Mozambique"
    },
    {
        "id": "Myanmar [Burma]",
        "text": "Myanmar [Burma]"
    },
    {
        "id": "Namibia",
        "text": "Namibia"
    },
    {
        "id": "Nauru",
        "text": "Nauru"
    },
    {
        "id": "Nepal",
        "text": "Nepal"
    },
    {
        "id": "Netherlands",
        "text": "Netherlands"
    },
    {
        "id": "Netherlands Antilles",
        "text": "Netherlands Antilles"
    },
    {
        "id": "Neutral Zone",
        "text": "Neutral Zone"
    },
    {
        "id": "New Caledonia",
        "text": "New Caledonia"
    },
    {
        "id": "New Zealand",
        "text": "New Zealand"
    },
    {
        "id": "Nicaragua",
        "text": "Nicaragua"
    },
    {
        "id": "Niger",
        "text": "Niger"
    },
    {
        "id": "Nigeria",
        "text": "Nigeria"
    },
    {
        "id": "Niue",
        "text": "Niue"
    },
    {
        "id": "Norfolk Island",
        "text": "Norfolk Island"
    },
    {
        "id": "North Korea",
        "text": "North Korea"
    },
    {
        "id": "North Vietnam",
        "text": "North Vietnam"
    },
    {
        "id": "Northern Mariana Islands",
        "text": "Northern Mariana Islands"
    },
    {
        "id": "Norway",
        "text": "Norway"
    },
    {
        "id": "Oman",
        "text": "Oman"
    },
    {
        "id": "Pacific Islands Trust Territory",
        "text": "Pacific Islands Trust Territory"
    },
    {
        "id": "Pakistan",
        "text": "Pakistan"
    },
    {
        "id": "Palau",
        "text": "Palau"
    },
    {
        "id": "Palestinian Territories",
        "text": "Palestinian Territories"
    },
    {
        "id": "Panama",
        "text": "Panama"
    },
    {
        "id": "Panama Canal Zone",
        "text": "Panama Canal Zone"
    },
    {
        "id": "Papua New Guinea",
        "text": "Papua New Guinea"
    },
    {
        "id": "Paraguay",
        "text": "Paraguay"
    },
    {
        "id": "People's Democratic Republic of Yemen",
        "text": "People's Democratic Republic of Yemen"
    },
    {
        "id": "Peru",
        "text": "Peru"
    },
    {
        "id": "Philippines",
        "text": "Philippines"
    },
    {
        "id": "Pitcairn Islands",
        "text": "Pitcairn Islands"
    },
    {
        "id": "Poland",
        "text": "Poland"
    },
    {
        "id": "Portugal",
        "text": "Portugal"
    },
    {
        "id": "Puerto Rico",
        "text": "Puerto Rico"
    },
    {
        "id": "Qatar",
        "text": "Qatar"
    },
    {
        "id": "Romania",
        "text": "Romania"
    },
    {
        "id": "Russia",
        "text": "Russia"
    },
    {
        "id": "Rwanda",
        "text": "Rwanda"
    },
    {
        "id": "R%uFFFDunion",
        "text": "R%uFFFDunion"
    },
    {
        "id": "Saint Barth%uFFFDlemy",
        "text": "Saint Barth%uFFFDlemy"
    },
    {
        "id": "Saint Helena",
        "text": "Saint Helena"
    },
    {
        "id": "Saint Kitts and Nevis",
        "text": "Saint Kitts and Nevis"
    },
    {
        "id": "Saint Lucia",
        "text": "Saint Lucia"
    },
    {
        "id": "Saint Martin",
        "text": "Saint Martin"
    },
    {
        "id": "Saint Pierre and Miquelon",
        "text": "Saint Pierre and Miquelon"
    },
    {
        "id": "Saint Vincent and the Grenadines",
        "text": "Saint Vincent and the Grenadines"
    },
    {
        "id": "Samoa",
        "text": "Samoa"
    },
    {
        "id": "San Marino",
        "text": "San Marino"
    },
    {
        "id": "Saudi Arabia",
        "text": "Saudi Arabia"
    },
    {
        "id": "Senegal",
        "text": "Senegal"
    },
    {
        "id": "Serbia",
        "text": "Serbia"
    },
    {
        "id": "Serbia and Montenegro",
        "text": "Serbia and Montenegro"
    },
    {
        "id": "Seychelles",
        "text": "Seychelles"
    },
    {
        "id": "Sierra Leone",
        "text": "Sierra Leone"
    },
    {
        "id": "Singapore",
        "text": "Singapore"
    },
    {
        "id": "Slovakia",
        "text": "Slovakia"
    },
    {
        "id": "Slovenia",
        "text": "Slovenia"
    },
    {
        "id": "Solomon Islands",
        "text": "Solomon Islands"
    },
    {
        "id": "Somalia",
        "text": "Somalia"
    },
    {
        "id": "South Africa",
        "text": "South Africa"
    },
    {
        "id": "South Georgia and the South Sandwich Islands",
        "text": "South Georgia and the South Sandwich Islands"
    },
    {
        "id": "South Korea",
        "text": "South Korea"
    },
    {
        "id": "Spain",
        "text": "Spain"
    },
    {
        "id": "Sri Lanka",
        "text": "Sri Lanka"
    },
    {
        "id": "Sudan",
        "text": "Sudan"
    },
    {
        "id": "Suriname",
        "text": "Suriname"
    },
    {
        "id": "Svalbard and Jan Mayen",
        "text": "Svalbard and Jan Mayen"
    },
    {
        "id": "Swaziland",
        "text": "Swaziland"
    },
    {
        "id": "Sweden",
        "text": "Sweden"
    },
    {
        "id": "Switzerland",
        "text": "Switzerland"
    },
    {
        "id": "Syria",
        "text": "Syria"
    },
    {
        "id": "S?o Tom%uFFFD and Pr%uFFFDncipe",
        "text": "S?o Tom%uFFFD and Pr%uFFFDncipe"
    },
    {
        "id": "Taiwan",
        "text": "Taiwan"
    },
    {
        "id": "Tajikistan",
        "text": "Tajikistan"
    },
    {
        "id": "Tanzania",
        "text": "Tanzania"
    },
    {
        "id": "Thailand",
        "text": "Thailand"
    },
    {
        "id": "Timor-Leste",
        "text": "Timor-Leste"
    },
    {
        "id": "Togo",
        "text": "Togo"
    },
    {
        "id": "Tokelau",
        "text": "Tokelau"
    },
    {
        "id": "Tonga",
        "text": "Tonga"
    },
    {
        "id": "Trinidad and Tobago",
        "text": "Trinidad and Tobago"
    },
    {
        "id": "Tunisia",
        "text": "Tunisia"
    },
    {
        "id": "Turkey",
        "text": "Turkey"
    },
    {
        "id": "Turkmenistan",
        "text": "Turkmenistan"
    },
    {
        "id": "Turks and Caicos Islands",
        "text": "Turks and Caicos Islands"
    },
    {
        "id": "Tuvalu",
        "text": "Tuvalu"
    },
    {
        "id": "U.S. Minor Outlying Islands",
        "text": "U.S. Minor Outlying Islands"
    },
    {
        "id": "U.S. Miscellaneous Pacific Islands",
        "text": "U.S. Miscellaneous Pacific Islands"
    },
    {
        "id": "U.S. Virgin Islands",
        "text": "U.S. Virgin Islands"
    },
    {
        "id": "Uganda",
        "text": "Uganda"
    },
    {
        "id": "Ukraine",
        "text": "Ukraine"
    },
    {
        "id": "Union of Soviet Socialist Republics",
        "text": "Union of Soviet Socialist Republics"
    },
    {
        "id": "United Arab Emirates",
        "text": "United Arab Emirates"
    },
    {
        "id": "United Kingdom",
        "text": "United Kingdom"
    },
    {
        "id": "United States",
        "text": "United States"
    },
    {
        "id": "Unknown or Invalid Region",
        "text": "Unknown or Invalid Region"
    },
    {
        "id": "Uruguay",
        "text": "Uruguay"
    },
    {
        "id": "Uzbekistan",
        "text": "Uzbekistan"
    },
    {
        "id": "Vanuatu",
        "text": "Vanuatu"
    },
    {
        "id": "Vatican City",
        "text": "Vatican City"
    },
    {
        "id": "Venezuela",
        "text": "Venezuela"
    },
    {
        "id": "Vietnam",
        "text": "Vietnam"
    },
    {
        "id": "Wake Island",
        "text": "Wake Island"
    },
    {
        "id": "Wallis and Futuna",
        "text": "Wallis and Futuna"
    },
    {
        "id": "Western Sahara",
        "text": "Western Sahara"
    },
    {
        "id": "Yemen",
        "text": "Yemen"
    },
    {
        "id": "Zambia",
        "text": "Zambia"
    },
    {
        "id": "Zimbabwe",
        "text": "Zimbabwe"
    },
    {
        "id": "%uFFFDland Islands",
        "text": "%uFFFDland Islands"
    }
];


/***/ }),

/***/ "./src/app/base/_pipes/ceil.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CeilPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// round.pipe.ts

/**
 *
 */
var CeilPipe = (function () {
    function CeilPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    CeilPipe.prototype.transform = function (value) {
        return Math.ceil(value);
    };
    CeilPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'ceil' })
    ], CeilPipe);
    return CeilPipe;
}());



/***/ }),

/***/ "./src/app/base/_pipes/key.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/base/_pipes/order.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderPipe = (function () {
    function OrderPipe() {
    }
    OrderPipe_1 = OrderPipe;
    /**
     * Check if a value is a string
     *
     * @param value
     */
    OrderPipe.isString = function (value) {
        return typeof value === 'string' || value instanceof String;
    };
    /**
     * Sorts values ignoring the case
     *
     * @param a
     * @param b
     */
    OrderPipe.caseInsensitiveSort = function (a, b) {
        if (OrderPipe_1.isString(a) && OrderPipe_1.isString(b)) {
            return a.localeCompare(b);
        }
        return OrderPipe_1.defaultCompare(a, b);
    };
    /**
     * Default compare method
     *
     * @param a
     * @param b
     */
    OrderPipe.defaultCompare = function (a, b) {
        if (a === b) {
            return 0;
        }
        if (a == null) {
            return 1;
        }
        if (b == null) {
            return -1;
        }
        return a > b ? 1 : -1;
    };
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    OrderPipe.parseExpression = function (expression) {
        expression = expression.replace(/\[(\w+)\]/g, '.$1');
        expression = expression.replace(/^\./, '');
        return expression.split('.');
    };
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    OrderPipe.getValue = function (object, expression) {
        for (var i = 0, n = expression.length; i < n; ++i) {
            var k = expression[i];
            if (!(k in object)) {
                return;
            }
            object = object[k];
        }
        return object;
    };
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    OrderPipe.setValue = function (object, value, expression) {
        var i;
        for (i = 0; i < expression.length - 1; i++) {
            object = object[expression[i]];
        }
        object[expression[i]] = value;
    };
    OrderPipe.prototype.transform = function (value, expression, reverse, isCaseInsensitive, comparator) {
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        if (!value) {
            return value;
        }
        if (Array.isArray(expression)) {
            return this.multiExpressionTransform(value, expression, reverse, isCaseInsensitive, comparator);
        }
        if (Array.isArray(value)) {
            return this.sortArray(value.slice(), expression, reverse, isCaseInsensitive, comparator);
        }
        if (typeof value === 'object') {
            return this.transformObject(Object.assign({}, value), expression, reverse, isCaseInsensitive, comparator);
        }
        return value;
    };
    /**
     * Sort array
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.sortArray = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var isDeepLink = expression && expression.indexOf('.') !== -1;
        if (isDeepLink) {
            expression = OrderPipe_1.parseExpression(expression);
        }
        var compareFn;
        if (comparator && typeof comparator === 'function') {
            compareFn = comparator;
        }
        else {
            compareFn = isCaseInsensitive ? OrderPipe_1.caseInsensitiveSort : OrderPipe_1.defaultCompare;
        }
        var array = value.sort(function (a, b) {
            if (!expression) {
                return compareFn(a, b);
            }
            if (!isDeepLink) {
                if (a && b) {
                    return compareFn(a[expression], b[expression]);
                }
                return compareFn(a, b);
            }
            return compareFn(OrderPipe_1.getValue(a, expression), OrderPipe_1.getValue(b, expression));
        });
        if (reverse) {
            return array.reverse();
        }
        return array;
    };
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @param isCaseInsensitive
     * @param comparator
     * @returns {any[]}
     */
    OrderPipe.prototype.transformObject = function (value, expression, reverse, isCaseInsensitive, comparator) {
        var parsedExpression = OrderPipe_1.parseExpression(expression);
        var lastPredicate = parsedExpression.pop();
        var oldValue = OrderPipe_1.getValue(value, parsedExpression);
        if (!Array.isArray(oldValue)) {
            parsedExpression.push(lastPredicate);
            lastPredicate = null;
            oldValue = OrderPipe_1.getValue(value, parsedExpression);
        }
        if (!oldValue) {
            return value;
        }
        OrderPipe_1.setValue(value, this.transform(oldValue, lastPredicate, reverse, isCaseInsensitive), parsedExpression);
        return value;
    };
    /**
     * Apply multiple expressions
     *
     * @param value
     * @param {any[]} expressions
     * @param {boolean} reverse
     * @param {boolean} isCaseInsensitive
     * @param {Function} comparator
     * @returns {any}
     */
    OrderPipe.prototype.multiExpressionTransform = function (value, expressions, reverse, isCaseInsensitive, comparator) {
        var _this = this;
        if (isCaseInsensitive === void 0) { isCaseInsensitive = false; }
        return expressions.reverse().reduce(function (result, expression) {
            return _this.transform(result, expression, reverse, isCaseInsensitive, comparator);
        }, value);
    };
    OrderPipe = OrderPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'orderBy',
            pure: false
        })
    ], OrderPipe);
    return OrderPipe;
    var OrderPipe_1;
}());



/***/ }),

/***/ "./src/app/base/_pipes/round.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoundPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// round.pipe.ts

/**
 *
 */
var RoundPipe = (function () {
    function RoundPipe() {
    }
    /**
     *
     * @param value
     * @returns {number}
     */
    RoundPipe.prototype.transform = function (value) {
        return Math.round(value);
    };
    RoundPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'round' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/base/_pipes/search.pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe_1 = SearchPipe;
    /**
     * @param items object from array
     * @param term term's search
     */
    SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return SearchPipe_1.filter(items, term);
    };
    /**
     *
     * @param items List of items to filter
     * @param term  a string term to compare with every property of the list
     *
     */
    SearchPipe.filter = function (items, term) {
        var toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    SearchPipe = SearchPipe_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({
            name: 'filter',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], SearchPipe);
    return SearchPipe;
    var SearchPipe_1;
}());



/***/ }),

/***/ "./src/app/base/_services/authService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_pluck__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pluck.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// import { ActivatedRoute, Router, CanActivate } from '@angular/router';








var AuthService = (function () {
    function AuthService(http, activatedRoute, router) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    Object.defineProperty(AuthService.prototype, "currentUserType", {
        get: function () {
            if (this.atCurrentUserType != null)
                return this.atCurrentUserType.name;
            else
                return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserData", {
        get: function () {
            return this.atCurrentUserData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentAuthData", {
        get: function () {
            return this.atCurrentAuthData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentAuthHeaders", {
        get: function () {
            if (this.atCurrentAuthData != null) {
                return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
                    'access-token': this.atCurrentAuthData.accessToken,
                    'client': this.atCurrentAuthData.client,
                    'expiry': this.atCurrentAuthData.expiry,
                    'token-type': this.atCurrentAuthData.tokenType,
                    'uid': this.atCurrentAuthData.uid
                });
            }
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */];
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.userSignedIn = function () {
        return !!this.atCurrentAuthData;
    };
    AuthService.prototype.canActivate = function (route, state) {
        if (this.userSignedIn())
            return true;
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    // canActivate(): boolean {
    //     if (this.userSignedIn())
    //         return true;
    //     else {
    //         // Store current location in storage (usefull for redirection after signing in)
    //         if (this.atOptions.signInStoredUrlStorageKey) {
    //             localStorage.setItem(
    //                 this.atOptions.signInStoredUrlStorageKey,
    //                 window.location.pathname + window.location.search
    //             );
    //         }
    //         // Redirect user to sign in if signInRedirect is set
    //         if(this.router && this.atOptions.signInRedirect)
    //             this.router.navigate([this.atOptions.signInRedirect]);
    //         return false;
    //     }
    // }
    // Inital configuration
    AuthService.prototype.init = function (options) {
        var defaultOptions = {
            apiPath: null,
            apiBase: null,
            signInPath: 'auth/sign_in',
            signInRedirect: null,
            signInStoredUrlStorageKey: null,
            signOutPath: 'auth/sign_out',
            validateTokenPath: 'auth/validate_token',
            signOutFailedValidate: false,
            registerAccountPath: 'auth',
            deleteAccountPath: 'auth',
            registerAccountCallback: window.location.href,
            updatePasswordPath: 'auth',
            resetPasswordPath: 'auth/password',
            resetPasswordCallback: window.location.href,
            userTypes: null,
            oAuthBase: window.location.origin,
            oAuthPaths: {
                github: 'auth/github'
            },
            oAuthCallbackPath: 'oauth_callback',
            oAuthWindowType: 'newWindow',
            oAuthWindowOptions: null,
            globalOptions: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        };
        this.atOptions = Object.assign(defaultOptions, options);
        this.tryLoadAuthData();
    };
    /**
     *
     * Actions
     *
     */
    // Sign in request and set storage
    AuthService.prototype.login = function (signInData) {
        var _this = this;
        if (signInData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(signInData.userType);
        var body = JSON.stringify({
            userName: signInData.userName,
            password: signInData.password
        });
        var observ = this.post(this.getUserPath() + this.atOptions.signInPath, body);
        observ.subscribe(function (res) {
            _this.atCurrentUserData = res.json();
        }, function (_error) { return null; });
        return observ;
    };
    AuthService.prototype.signInOAuth = function (oAuthType) {
        var oAuthPath = this.getOAuthPath(oAuthType);
        var callbackUrl = window.location.origin + "/" + this.atOptions.oAuthCallbackPath;
        var oAuthWindowType = this.atOptions.oAuthWindowType;
        var authUrl = this.getOAuthUrl(oAuthPath, callbackUrl, oAuthWindowType);
        if (oAuthWindowType == 'newWindow') {
            var oAuthWindowOptions = this.atOptions.oAuthWindowOptions;
            var windowOptions = '';
            if (oAuthWindowOptions) {
                for (var key in oAuthWindowOptions) {
                    windowOptions += "," + key + "=" + oAuthWindowOptions[key];
                }
            }
            var popup = window.open(authUrl, '_blank', "closebuttoncaption=Cancel" + windowOptions);
            return this.requestCredentialsViaPostMessage(popup);
        }
        else if (oAuthWindowType == 'sameWindow') {
            window.location.href = authUrl;
        }
        else {
            throw "Unsupported oAuthWindowType \"" + oAuthWindowType + "\"";
        }
    };
    AuthService.prototype.processOAuthCallback = function () {
        this.getAuthDataFromParams();
    };
    // Sign out request and delete storage
    //signOut(): Observable<Response> {
    AuthService.prototype.signOut = function () {
        //let observ = this.delete(this.getUserPath() + this.atOptions.signOutPath);
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('client');
        sessionStorage.removeItem('expiry');
        sessionStorage.removeItem('tokenType');
        sessionStorage.removeItem('uid');
        this.atCurrentAuthData = null;
        this.atCurrentUserType = null;
        this.atCurrentUserData = null;
        this.router.navigate(['/login']);
    };
    // Validate token request
    AuthService.prototype.validateToken = function () {
        var _this = this;
        var observ = this.get(this.getUserPath() + "auth/validateToken");
        observ.subscribe(function (res) {
            _this.atCurrentUserData = res.json();
        }, function (error) {
            if (error.status === 401 && _this.atOptions.signOutFailedValidate) {
                _this.signOut();
            }
        });
        return observ;
    };
    AuthService.prototype.reset = function (reset) {
        var body = JSON.stringify(reset);
        var observ = this.post(this.atOptions.resetPasswordPath + "/" + reset.token, body);
        observ.subscribe(function (res) {
            res.json();
        }, function (_error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_error.json());
        });
        return observ;
    };
    // sending request for password reset
    AuthService.prototype.forget = function (reset) {
        var body = JSON.stringify(reset);
        var observ = this.post(this.getUserPath() + 'auth/forget-password', body);
        observ.subscribe(function (res) {
            res.json();
        }, function (_error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(_error.json());
        });
        return observ;
    };
    // Update password request
    AuthService.prototype.updatePassword = function (updatePasswordData) {
        if (updatePasswordData.userType != null)
            this.atCurrentUserType = this.getUserTypeByName(updatePasswordData.userType);
        var args;
        if (updatePasswordData.passwordCurrent == null) {
            args = {
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        else {
            args = {
                current_password: updatePasswordData.passwordCurrent,
                password: updatePasswordData.password,
                password_confirmation: updatePasswordData.passwordConfirmation
            };
        }
        if (updatePasswordData.resetPasswordToken) {
            args.reset_password_token = updatePasswordData.resetPasswordToken;
        }
        var body = JSON.stringify(args);
        return this.put(this.getUserPath() + this.atOptions.updatePasswordPath, body);
    };
    // Reset password request
    AuthService.prototype.resetPassword = function (resetPasswordData) {
        if (resetPasswordData.userType == null)
            this.atCurrentUserType = null;
        else
            this.atCurrentUserType = this.getUserTypeByName(resetPasswordData.userType);
        var body = JSON.stringify({
            email: resetPasswordData.email,
            redirect_url: this.atOptions.resetPasswordCallback
        });
        return this.post(this.getUserPath() + this.atOptions.resetPasswordPath, body);
    };
    /**
     *
     * HTTP Wrappers
     *
     */
    AuthService.prototype.get = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Get
        }, options));
    };
    AuthService.prototype.post = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Post,
            body: body
        }, options));
    };
    AuthService.prototype.put = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Put,
            body: body
        }, options));
    };
    AuthService.prototype.delete = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Delete
        }, options));
    };
    AuthService.prototype.patch = function (url, body, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Patch,
            body: body
        }, options));
    };
    AuthService.prototype.head = function (path, options) {
        return this.request({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Head,
            url: this.getApiPath() + path
        });
    };
    AuthService.prototype.options = function (url, options) {
        return this.request(this.mergeRequestOptionsArgs({
            url: this.getApiPath() + url,
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Options
        }, options));
    };
    // Construct and send Http request
    AuthService.prototype.request = function (options) {
        var baseRequestOptions;
        var baseHeaders = this.atOptions.globalOptions.headers;
        // Get auth data from local storage
        this.getAuthDataFromStorage();
        // Merge auth headers to request if set
        if (this.atCurrentAuthData != null) {
            Object.assign(baseHeaders, {
                'access-token': this.atCurrentAuthData.accessToken,
                'client': this.atCurrentAuthData.client,
                'expiry': this.atCurrentAuthData.expiry,
                'token-type': this.atCurrentAuthData.tokenType,
                'uid': this.atCurrentAuthData.uid
            });
        }
        baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](baseHeaders)
        });
        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(options);
        var response = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */](baseRequestOptions)).share();
        this.handleResponse(response);
        return response;
    };
    AuthService.prototype.mergeRequestOptionsArgs = function (options, addOptions) {
        var returnOptions = options;
        if (options)
            Object.assign(returnOptions, addOptions);
        return returnOptions;
    };
    // Check if response is complete and newer, then update storage
    AuthService.prototype.handleResponse = function (response) {
        var _this = this;
        response.subscribe(function (res) {
            _this.getAuthHeadersFromResponse(res);
        }, function (error) {
            _this.getAuthHeadersFromResponse(error);
        });
    };
    /**
     *
     * Get Auth Data
     *
     */
    // Try to load auth data
    AuthService.prototype.tryLoadAuthData = function () {
        var userType = this.getUserTypeByName(sessionStorage.getItem('userType'));
        if (userType)
            this.atCurrentUserType = userType;
        this.getAuthDataFromStorage();
        if (this.activatedRoute)
            this.getAuthDataFromParams();
        if (this.atCurrentAuthData)
            this.validateToken();
    };
    // Parse Auth data from response
    AuthService.prototype.getAuthHeadersFromResponse = function (data) {
        var headers = data.headers;
        var authData = {
            accessToken: headers.get('access-token'),
            client: headers.get('client'),
            expiry: headers.get('expiry'),
            tokenType: headers.get('token-type'),
            uid: headers.get('uid')
        };
        this.setAuthData(authData);
    };
    // Parse Auth data from post message
    AuthService.prototype.getAuthDataFromPostMessage = function (data) {
        var authData = {
            accessToken: data['auth_token'],
            client: data['client_id'],
            expiry: data['expiry'],
            tokenType: 'Bearer',
            uid: data['uid']
        };
        this.setAuthData(authData);
    };
    // Try to get auth data from storage.
    AuthService.prototype.getAuthDataFromStorage = function () {
        var authData = {
            accessToken: sessionStorage.getItem('accessToken'),
            client: sessionStorage.getItem('client'),
            expiry: sessionStorage.getItem('expiry'),
            tokenType: sessionStorage.getItem('tokenType'),
            uid: sessionStorage.getItem('uid')
        };
        if (this.checkAuthData(authData))
            this.atCurrentAuthData = authData;
    };
    // Try to get auth data from url parameters.
    AuthService.prototype.getAuthDataFromParams = function () {
        var _this = this;
        if (this.activatedRoute.queryParams)
            this.activatedRoute.queryParams.subscribe(function (queryParams) {
                var authData = {
                    accessToken: queryParams['token'] || queryParams['auth_token'],
                    client: queryParams['client_id'],
                    expiry: queryParams['expiry'],
                    tokenType: 'Bearer',
                    uid: queryParams['uid']
                };
                if (_this.checkAuthData(authData))
                    _this.atCurrentAuthData = authData;
            });
    };
    /**
     *
     * Set Auth Data
     *
     */
    // Write auth data to storage
    AuthService.prototype.setAuthData = function (authData) {
        if (this.checkAuthData(authData)) {
            this.atCurrentAuthData = authData;
            sessionStorage.setItem('accessToken', authData.accessToken);
            sessionStorage.setItem('client', authData.client);
            sessionStorage.setItem('expiry', authData.expiry);
            sessionStorage.setItem('tokenType', authData.tokenType);
            sessionStorage.setItem('uid', authData.uid);
            if (this.atCurrentUserType != null)
                sessionStorage.setItem('userType', this.atCurrentUserType.name);
        }
    };
    /**
     *
     * Validate Auth Data
     *
     */
    // Check if auth data complete and if response token is newer
    AuthService.prototype.checkAuthData = function (authData) {
        if (authData.accessToken != null &&
            authData.client != null &&
            authData.expiry != null &&
            authData.tokenType != null &&
            authData.uid != null) {
            if (this.atCurrentAuthData != null)
                return authData.expiry >= this.atCurrentAuthData.expiry;
            else
                return true;
        }
        else {
            return false;
        }
    };
    /**
     *
     * Construct Paths / Urls
     *
     */
    AuthService.prototype.getUserPath = function () {
        if (this.atCurrentUserType == null)
            return '';
        else
            return this.atCurrentUserType.path + '/';
    };
    AuthService.prototype.getApiPath = function () {
        var constructedPath = '';
        if (this.atOptions.apiBase != null)
            constructedPath += this.atOptions.apiBase + '/';
        if (this.atOptions.apiPath != null)
            constructedPath += this.atOptions.apiPath + '/';
        return constructedPath;
    };
    AuthService.prototype.getOAuthPath = function (oAuthType) {
        var oAuthPath;
        oAuthPath = this.atOptions.oAuthPaths[oAuthType];
        if (oAuthPath == null)
            oAuthPath = "/auth/" + oAuthType;
        return oAuthPath;
    };
    AuthService.prototype.getOAuthUrl = function (oAuthPath, callbackUrl, windowType) {
        var url;
        url = this.atOptions.oAuthBase + "/" + oAuthPath;
        url += "?omniauth_window_type=" + windowType;
        url += "&auth_origin_url=" + encodeURIComponent(callbackUrl);
        if (this.atCurrentUserType != null)
            url += "&resource_class=" + this.atCurrentUserType.name;
        return url;
    };
    /**
     *
     * OAuth
     *
     */
    AuthService.prototype.requestCredentialsViaPostMessage = function (authWindow) {
        var pollerObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].interval(500);
        var responseObserv = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromEvent(window, 'message').pluck('data')
            .filter(this.oAuthWindowResponseFilter);
        var responseSubscription = responseObserv.subscribe(this.getAuthDataFromPostMessage.bind(this));
        var pollerSubscription = pollerObserv.subscribe(function () {
            if (authWindow.closed)
                pollerSubscription.unsubscribe();
            else
                authWindow.postMessage('requestCredentials', '*');
        });
        return responseObserv;
    };
    AuthService.prototype.oAuthWindowResponseFilter = function (data) {
        if (data.message == 'deliverCredentials' || data.message == 'authFailure')
            return data;
    };
    /**
     *
     * Utilities
     *
     */
    // Match user config by user config name
    AuthService.prototype.getUserTypeByName = function (name) {
        if (name == null || this.atOptions.userTypes == null)
            return null;
        return this.atOptions.userTypes.find(function (userType) { return userType.name === name; });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base/_services/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__ = __webpack_require__("./src/app/base/_jsonData/dropDownData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommonService = (function () {
    function CommonService(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    CommonService.prototype.getHrSpoce = function (company_id, emp_id) {
        var url = "common/getHr";
        if (company_id && emp_id) {
            url = "common/getHr?company_id=" + company_id + "&emp_id=" + emp_id;
        }
        else if (company_id) {
            url = "common/getHr?company_id=" + company_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getSupervisor = function (grade_id) {
        var url = "common/getSupervisor";
        if (grade_id) {
            url = "common/getSupervisor?grade_id=" + grade_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getManagementType = function () {
        var url = "common/getManagementType";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getEmploymentStatus = function () {
        var url = "common/getEmploymentStatus";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getEmploymentType = function (managementType_id) {
        var url = "common/getEmploymentType";
        if (managementType_id) {
            url = "common/getEmploymentType?managementType_id=" + managementType_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getRole = function () {
        var url = "common/getRole";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getComapnies = function () {
        var url = "common/getCompany";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getDivision = function () {
        var url = "common/getDivision";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getDepartment = function (division_id) {
        var url = "common/getDepartment";
        if (division_id) {
            url = "common/getDepartment?division_id=" + division_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getVertical = function (department_id) {
        var url = "common/getVertical";
        if (department_id) {
            url = "common/getVertical?department_id=" + department_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getSubVertical = function (verticalId) {
        var url = "common/getSubVertical";
        if (verticalId) {
            url = "common/getSubVertical?vertical_id=" + verticalId;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getGrade = function (managementType_id, employmentType_id) {
        var url = "common/getGrade";
        if (managementType_id && employmentType_id) {
            url = "common/getGrade?managementType_id=" + managementType_id + "&employmentType_id=" + employmentType_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getDesignation = function (grade_id) {
        var url = "common/getDesignation";
        if (grade_id) {
            url = "common/getDesignation?department_id=" + grade_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getlocation = function (parent_id) {
        var url = "common/getLocation";
        if (parent_id) {
            url = "common/getLocation?parent_id=" + parent_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getSeperationType = function () {
        var url = "common/getSeperationType";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getEducationLevels = function () {
        var url = "common/getEducationLevels";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getExamDegree = function () {
        var url = "common/getExamDegree";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getExamResult = function () {
        var url = "common/getExamResult";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getRelation = function () {
        var url = "common/getRelation";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getCurrency = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["c" /* currency */];
    };
    CommonService.prototype.getReligion = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["l" /* religion */];
        // let url="common/getReligion";
        //  return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getFestivalAllowance = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["e" /* festivalAllowance */];
        // let url="common/getFestivalAllowance";
        //  return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    //getProvidentFundMemberShip():Observable<Response>
    CommonService.prototype.getProvidentFundMemberShip = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["k" /* providentFundMembership */];
        // let url=this.ApiPath+"/getProvidentFundMemberShip";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    //getGroupLifeInsurance():Observable<Response>
    CommonService.prototype.getGroupLifeInsurance = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["f" /* groupLifeInsurance */];
        // let url=this.ApiPath+"/getGroupLifeInsurance";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    //getGroupLifeInsurance():Observable<Response>
    CommonService.prototype.getHospitalizationScheme = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["g" /* hospitalizationScheme */];
        // let url=this.ApiPath+"/getGroupLifeInsurance";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    //getBloodGroup():Observable<Response>
    CommonService.prototype.getBloodGroup = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["a" /* bloodGroup */];
        // let url=this.ApiPath+"/getBloodGroup";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    //getMartialStatus():Observable<Response>
    CommonService.prototype.getMartialStatus = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["i" /* martialStatus */];
        // let url=this.ApiPath+"/getMartialStatus";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    //getNationality():Observable<Response>
    CommonService.prototype.getNationality = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["j" /* nationality */];
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    CommonService.prototype.getCountry = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["b" /* country */];
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    CommonService.prototype.getResults = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["m" /* results */];
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    CommonService.prototype.getEducation = function (parent_id) {
        var url = "common/getEducation";
        if (parent_id) {
            url = "common/getEducation?parent_id=" + parent_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getTabStatus = function (emp_id) {
        var url = "common/getTabStatus";
        if (emp_id) {
            url = "common/getTabStatus?emp_id=" + emp_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.sendEmail = function (data) {
        var url = "common/sendEmail";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.checkEmailExists = function (data) {
        var url = "common/checkEmailExists?email=" + data;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getLevelOfEducation = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["h" /* levelofEducation */];
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    CommonService.prototype.getKraDetailsData = function (emp_id) {
        var url = "kra/getKraDetailsData?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    CommonService.prototype.getExamDegreeTitle = function () {
        return __WEBPACK_IMPORTED_MODULE_5__jsonData_dropDownData__["d" /* examDegreeTitle */];
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    };
    CommonService.prototype.extractData = function (res) {
        return res || {};
        // let body = res.json();
        // return body || { };
    };
    CommonService.prototype.handleError = function (error) {
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
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/base/base.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_search_pipes__ = __webpack_require__("./src/app/base/_pipes/search.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_order_pipes__ = __webpack_require__("./src/app/base/_pipes/order.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_key_pipes__ = __webpack_require__("./src/app/base/_pipes/key.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_round_pipes__ = __webpack_require__("./src/app/base/_pipes/round.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_ceil_pipes__ = __webpack_require__("./src/app/base/_pipes/ceil.pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directive_equalValidator_directive__ = __webpack_require__("./src/app/base/_directive/equalValidator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directive_only_number_directive__ = __webpack_require__("./src/app/base/_directive/only-number.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_summernote_component__ = __webpack_require__("./src/app/base/_components/summernote.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { EmailUniqueValidatorDirective } from './_directive/unique-email.directive';

var BaseModule = (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_search_pipes__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_order_pipes__["a" /* OrderPipe */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_key_pipes__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_ceil_pipes__["a" /* CeilPipe */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_round_pipes__["a" /* RoundPipe */],
                __WEBPACK_IMPORTED_MODULE_9__components_summernote_component__["a" /* SummernoteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directive_only_number_directive__["a" /* OnlyNumberDirective */],
                //EmailUniqueValidatorDirective,
                __WEBPACK_IMPORTED_MODULE_7__directive_equalValidator_directive__["a" /* EqualValidator */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pipes_search_pipes__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_3__pipes_order_pipes__["a" /* OrderPipe */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_key_pipes__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_ceil_pipes__["a" /* CeilPipe */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_round_pipes__["a" /* RoundPipe */],
                __WEBPACK_IMPORTED_MODULE_9__components_summernote_component__["a" /* SummernoteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directive_only_number_directive__["a" /* OnlyNumberDirective */],
                //EmailUniqueValidatorDirective,
                __WEBPACK_IMPORTED_MODULE_7__directive_equalValidator_directive__["a" /* EqualValidator */]
            ],
        })
    ], BaseModule);
    return BaseModule;
}());



/***/ }),

/***/ "./src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);

var Helpers = (function () {
    function Helpers() {
    }
    Helpers.loadStyles = function (tag, src) {
        if (Array.isArray(src)) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](src, function (k, s) {
                __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', s).attr('rel', 'stylesheet').attr('type', 'text/css'));
            });
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(tag).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<link/>').attr('href', src).attr('rel', 'stylesheet').attr('type', 'text/css'));
        }
    };
    Helpers.unwrapTag = function (element) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__(element).removeAttr('appunwraptag').unwrap();
    };
    /**
     * Set title markup
     * @param title
     */
    Helpers.setTitle = function (title) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').text(title);
    };
    /**
     * Breadcrumbs markup
     * @param breadcrumbs
     */
    Helpers.setBreadcrumbs = function (breadcrumbs) {
        if (breadcrumbs)
            __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__title').addClass('m-subheader__title--separator');
        var ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader__breadcrumbs');
        if (__WEBPACK_IMPORTED_MODULE_0_jquery__(ul).length === 0) {
            ul = __WEBPACK_IMPORTED_MODULE_0_jquery__('<ul/>').addClass('m-subheader__breadcrumbs m-nav m-nav--inline')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<i/>').addClass('m-nav__link-icon la la-home'))));
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).find('li:not(:first-child)').remove();
        __WEBPACK_IMPORTED_MODULE_0_jquery__["each"](breadcrumbs, function (k, v) {
            var li = __WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__item')
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<a/>').addClass('m-nav__link m-nav__link--icon').attr('routerLink', v.href).attr('title', v.title)
                .append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<span/>').addClass('m-nav__link-text').text(v.text)));
            __WEBPACK_IMPORTED_MODULE_0_jquery__(ul).append(__WEBPACK_IMPORTED_MODULE_0_jquery__('<li/>').addClass('m-nav__separator').text('-')).append(li);
        });
        __WEBPACK_IMPORTED_MODULE_0_jquery__('.m-subheader .m-stack__item:first-child').append(ul);
    };
    Helpers.setLoading = function (enable) {
        var body = __WEBPACK_IMPORTED_MODULE_0_jquery__('body');
        if (enable) {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).addClass('m-page--loading-non-block');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_0_jquery__(body).removeClass('m-page--loading-non-block');
        }
    };
    Helpers.bodyClass = function (strClass) {
        __WEBPACK_IMPORTED_MODULE_0_jquery__('body').attr('class', strClass);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\" appunwraptag=\"\">\r\n        <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n            <div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n                <div class=\"m-stack__item m-stack__item--fluid\">\r\n                    <div class=\"m-login__wrapper\">\r\n                        <div class=\"m-login__logo\">\r\n                            <a href=\"#\">\r\n                                <img src=\"./assets/app/media/img/custom/logos/logo-2.png\">\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"m-login__signin\">\r\n                            <div class=\"m-login__head\">\r\n                                <h3 class=\"m-login__title\">\r\n                                    Sign In To ADN\r\n                                </h3>\r\n                                <div class=\"m--margin-top-40 m-alert m-alert--outline m-alert--outline-2x alert alert-success fade show\" role=\"alert\">\r\n                                    Enter your \r\n                                    <span style=\"font-weight: 600;\">\r\n                                            Employee ID as Username \r\n                                    </span>\r\n                                    and provided Password to continue.\r\n                                </div>\r\n                            </div>\r\n                            <form class=\"m-login__form m-form\" (ngSubmit)=\"flogin.valid && login()\" #flogin=\"ngForm\">\r\n                                <div *ngIf=\"error\" class=\"m-alert m-alert--outline alert alert-danger alert-dismissible\" >\r\n                                        <button class=\"close\" type=\"button\" (click)=\"error=!error\"></button>\r\n                                        <span>{{errorMsg}}</span>\r\n                                </div>\r\n                               \r\n                                <div class=\"form-group m-form__group\">\r\n                                    <input class=\"form-control m-input\" type=\"text\" placeholder=\"Username\" name=\"userName\" [(ngModel)]=\"loginModel.userName\" #userName=\"ngModel\" required>\r\n                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"!userName.valid\">\r\n                                        <span *ngIf=\"flogin.submitted && !userName.valid\">This field is required.</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group m-form__group\">\r\n                                    <input class=\"form-control m-input m-login__form-input--last\" type=\"password\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"loginModel.password\" #password=\"ngModel\" required>\r\n                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"!password.valid\">\r\n                                            <span *ngIf=\"flogin.submitted && !password.valid\">This field is required.</span>\r\n                                          </div>\r\n                                </div>\r\n                                <div class=\"row m-login__form-sub\">\r\n                                    <!-- <div class=\"col m--align-left\">\r\n                                        <label class=\"m-checkbox m-checkbox--focus\">\r\n                                            <input type=\"checkbox\" name=\"remember\">\r\n                                            Remember me\r\n                                            <span></span>\r\n                                        </label>\r\n                                    </div> -->\r\n                                    <div class=\"col m--align-right\">\r\n                                        <a class=\"m-link\" id=\"m_login_forget_password\" routerLink=\"/reset\" >\r\n\t\t\t\t\t\t\t\t\t\tForgot Password ?\r\n\t\t\t\t\t\t\t\t\t</a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-login__form-action\">\r\n                                    <button class=\"btn btn-success btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\" type=\"submit\"   [ngClass]=\"{'m-loader m-loader--right m-loader--light' :loading}\">\r\n                                        Sign In\r\n                                    </button>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content m-login-slider\">\r\n            <!-- <div class=\"m-grid__item m-grid__item--middle\">\r\n               <h3 class=\"m-login__welcome\">\r\n                  Having Trouble Sign In?\r\n               </h3>\r\n               <p class=\"m-login__msg\">\r\n                  For queries contact hris@adnsl.net\r\n               </p>\r\n            </div> -->\r\n         </div>        \r\n</div>\r\n    "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__("./src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var LoginComponent = (function () {
    // @ViewChild('loginForm') loginForm: ElementRef;
    function LoginComponent(platformId, meta, title, _route, _router, _authService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this.loading = false;
        this.loginModel = {};
        this.error = false;
        this.errorMsg = "";
        title.setTitle('ADN HRIS | Login');
        meta.addTags([
            { name: 'author', content: 'LogiN Adn' },
            { name: 'keywords', content: 'Login.' },
            { name: 'description', content: 'Login.' }
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        //this.remember = true;
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this._router.navigate([this.returnUrl]);
        __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* Helpers */].setLoading(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this._authService.login(this.loginModel)
            .subscribe(function (data) {
            _this._router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.errorMsg = error.json().error.message || error;
            _this.error = true;
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./src/app/login/login.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/password/forget-password/forget-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\" appunwraptag=\"\">\r\n    <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n                    <div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n                        <div class=\"m-stack__item m-stack__item--fluid\">\r\n                            <div class=\"m-login__wrapper\">\r\n                                <div class=\"m-login__logo\">\r\n                                    <a href=\"#\">\r\n                                        <img src=\"./assets/app/media/img/custom/logos/logo-2.png\">\r\n                                    </a>\r\n                                </div>\r\n                                <div class=\"forgotPassword\" *ngIf=\"isForgetPassword\">\r\n                                        <div class=\"m-login__head\">\r\n                                           <h3 class=\"m-login__title\">\r\n                                              Forgotten Password ?\r\n                                           </h3>\r\n                                           <div class=\"m-login__desc\">\r\n                                              Enter your email to reset the password.\r\n                                           </div>\r\n                                        </div>\r\n                                        <form class=\"m-login__form m-form\" (ngSubmit)=\"fPassword.valid && forgetPassword()\" #fPassword=\"ngForm\" >\r\n                                           <div class=\"form-group m-form__group\">\r\n                                              <input class=\"form-control m-input\" type=\"text\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"forgetModel.officeEmail\" #email=\"ngModel\" required>\r\n                                              <div class=\"form-control-feedback has-danger\" *ngIf=\"!email.valid\">\r\n                                                    <span *ngIf=\"fPassword.submitted && !email.valid\">This field is required.</span>\r\n                                                </div>\r\n                                           </div>\r\n                                           <div class=\"m-login__form-action\">\r\n                                              <button type=\"submit\"  class=\"btn btn-success btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\" [ngClass]=\"{'m-loader m-loader--right m-loader--light' :loading}\">\r\n                                                Request\r\n                                              </button>\r\n                                              <button type=\"button\" routerLink=\"/login\"  class=\"btn btn-danger btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\" >\r\n                                                    Cancel\r\n                                              </button>\r\n                                           </div>\r\n                                        </form>\r\n                                </div>\r\n                                <div class=\"checkEmail\" *ngIf=\"!isForgetPassword\">\r\n                                        <div class=\"m-login__head\">\r\n                                           <h3 class=\"m-login__title\">\r\n                                              Please check your email\r\n                                           </h3>\r\n                                           <div class=\"m-login__desc\">\r\n                                               <p>\r\n                                             <strong>{{forgetModel.officeEmail}}</strong> </p>\r\n                                             <p>\r\n                                              We’ve sent you an email with instructions on how to reset your password.</p>\r\n                                           </div>\r\n                                        </div>\r\n                                        <form class=\"m-login__form m-form\">\r\n                                           <div class=\"m-login__form-action\">\r\n                                              <button type=\"button\" routerLink=\"/login\"  class=\"btn btn-success btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n                                                Return to Sign In\r\n                                              </button>\r\n                                           </div>\r\n                                        </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    </div>\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img/custom/bg/bg-6.png)\">\r\n    </div>\r\n</div>\r\n            "

/***/ }),

/***/ "./src/app/password/forget-password/forget-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(_router, _script, _route, _authService) {
        this._router = _router;
        this._script = _script;
        this._route = _route;
        this._authService = _authService;
        this.loading = false;
        this.forgetModel = {};
        this.isForgetPassword = true;
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        this.loading = true;
        this._authService.forget(this.forgetModel)
            .subscribe(function (data) {
            if (data.ok) {
                _this.loading = false;
                _this.isForgetPassword = false;
            }
        }, function (error) {
            _this.loading = false;
        });
    };
    ForgetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./src/app/password/forget-password/forget-password.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__["a" /* AuthService */]])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/password/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div appunwraptag=\"\" class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin\" id=\"m_login\">\r\n    <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\" *ngIf=\"isResetSection\">\r\n           <div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n              <div class=\"m-stack__item m-stack__item--fluid\">\r\n                 <div class=\"m-login__wrapper\">\r\n                    <div class=\"m-login__logo\">\r\n                        <a href=\"#\">\r\n                            <img src=\"./assets/app/media/img/custom/logos/logo-2.png\">\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"m-login__signin\">\r\n                       <div class=\"m-login__head\">\r\n                          <h3 class=\"m-login__title\">\r\n                             Reset Password\r\n                          </h3>\r\n                       </div>\r\n                       <form class=\"m-login__form m-form\" (ngSubmit)=\"fRestPassword.valid && resetPassword()\" #fRestPassword=\"ngForm\">\r\n                          <div class=\"form-group m-form__group\">\r\n                             <input class=\"form-control m-input\" name=\"newPassword\" id=\"newPassword\" placeholder=\"Enter New Password\" [(ngModel)]=\"resetModel.newPassword\" #newPassword=\"ngModel\" type=\"password\" required reverse=\"true\">\r\n                             <div class=\"form-control-feedback has-danger\">\r\n                                    <span *ngIf=\"fRestPassword.submitted && newPassword.errors?.required\">This field is required.</span>\r\n                                    <span *ngIf=\"newPassword.errors?.validateEqual\">Value must be equal to confirm password</span>\r\n                             </div>\r\n                            </div>\r\n                          <div class=\"form-group m-form__group\">\r\n                             <input class=\"form-control m-input m-login__form-input--last\" name=\"confirmNewPassword\" id=\"confirmNewPassword\" [(ngModel)]=\"resetModel.confirmNewPassword\" #confirmNewPassword=\"ngModel\" validateEqual=\"newPassword\"  placeholder=\"Confirm New Password\" type=\"password\" required>\r\n                                <div class=\"form-control-feedback has-danger\">\r\n                                    <span *ngIf=\"fRestPassword.submitted && confirmNewPassword.errors?.required\">This field is required.</span>\r\n                                    <span *ngIf=\"!confirmNewPassword.errors?.required && confirmNewPassword.errors?.validateEqual\">Value must be equal to password.</span>\r\n                                </div>\r\n                         </div>\r\n                          <div class=\"m-login__form-action\">\r\n                             <button type=\"submit\" class=\"btn btn-success btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\" >\r\n                                Reset\r\n                             </button>\r\n                          </div>\r\n                       </form>\r\n                    </div>\r\n                 </div>\r\n              </div>\r\n           </div>\r\n    </div>\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(./assets/app/media/img/custom/bg/bg-6.png)\" *ngIf=\"isResetSection\">\r\n    </div>\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid  m-error-6\" *ngIf=\"isLinkExpire\" style=\"background-image: url('assets/app/media/img/custom/bg/bg-7.jpg');\">\r\n                    <div class=\"m-error_container\">\r\n                        <div class=\"m-error_subtitle m--font-light\">\r\n                            <h1>\r\n                                Oops!\r\n                            </h1>\r\n                        </div>\r\n                        <p class=\"m-error_description m--font-light\">\r\n                            The link has expired.\r\n                            <br>\r\n                        </p>\r\n                    </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/password/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers__ = __webpack_require__("./src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(_router, _script, _route, http) {
        this._router = _router;
        this._script = _script;
        this._route = _route;
        this.http = http;
        this.resetModel = {};
        this.isLinkExpire = false;
        this.isResetSection = false;
        this.resetModel.token = this._route.snapshot.params['token'];
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base.apiBase + "/" + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base.apiPath + "/auth/reset";
        this.http.get(url + "/" + this.resetModel.token).map(this.extractData).catch(this.handleError).subscribe(function (data) {
            if (data.status != 200) {
                _this.isLinkExpire = true;
                __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(false);
            }
            if (data.status == 200) {
                _this.isResetSection = true;
                __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(false);
            }
        }, function (error) {
            _this.isLinkExpire = true;
            __WEBPACK_IMPORTED_MODULE_3__helpers__["a" /* Helpers */].setLoading(false);
        });
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base.apiBase + "/" + __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api_base.apiPath + "/auth/reset";
        this.http.post(url, this.resetModel).map(this.extractData).catch(this.handleError).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                type: 'success',
                text: 'Password changed successfully!',
                showCancelButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                confirmButtonText: 'OK',
            }).then(function (result) {
                if (result.value) {
                    _this._router.navigate(['login']);
                }
            });
        }, function (error) {
        });
    };
    ResetPasswordComponent.prototype.extractData = function (res) {
        return res || {};
        // let body = res.json();
        // return body || { };
    };
    ResetPasswordComponent.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ResetPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./src/app/password/reset-password/reset-password.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\r\n<button class=\"m-aside-left-close  m-aside-left-close--skin-light\" id=\"m_aside_left_close_btn\" appunwraptag=\"\">\r\n\t\t<i class=\"la la-close\"></i>\r\n\t</button>\r\n\t<div id=\"m_aside_left\" class=\"m-grid__item\tm-aside-left  m-aside-left--skin-light\">\r\n\t\t<!-- BEGIN: Aside Menu -->\r\n\t\t<div id=\"m_ver_menu\" class=\"m-aside-menu  m-aside-menu--skin-light m-aside-menu--submenu-skin-light\"  \t\tdata-menu-vertical=\"true\" \t\t data-menu-scrollable=\"false\" data-menu-dropdown-timeout=\"500\"   \t\t>\r\n\t\t\t<ul class=\"m-menu__nav  m-menu__nav--dropdown-submenu-arrow\" >\r\n\t\t\t\t<li class=\"m-menu__section\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('Admin') >-1\">\r\n\t\t\t\t\t<h4 class=\"m-menu__section-text m--font-boldest\">\r\n\t\t\t\t\t\t<span class=\"m--font-boldest\">\r\n\t\t\t\t\t\t\tSuper Admin\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('Admin') >-1\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-user-circle\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\tAdmin\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/admin/masterData\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-inbox\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tMaster Data\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/admin/configure\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-cog\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tConfigure\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__section\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\">\r\n\t\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\t\tHR Panel\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t<a  routerLink=\"/hr/dashboard\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-th\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<!-- <span class=\"m-menu__link-badge\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger\">\r\n\t\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-gear\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t Workflows\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/workflows/initiate\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-reply\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tInitiate\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/workflows/pap\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-tasks\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tKra\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/workflows/learning\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-book\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tLearning\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/workflows/pip\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-lightbulb-o\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tPIP\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t<a  routerLink=\"/hr/directory\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-folder-open\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t Directory\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-envelope-open\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\tEmail\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/email/bulk\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-envelope\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tBulk Email\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/email/broadcast\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-bullhorn\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tBroadcasts\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('HR') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-group\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\tEmployees\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/employee/all\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-users\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tAll Employees\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/hr/employee/add\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-user-plus\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tAdd New Employee\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__section\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('Reviewer') >-1 ||authService.atCurrentUserData?.roles.indexOf('Supervisor') >-1\">\r\n\t\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\t\tTeam\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" *ngIf=\"authService.atCurrentUserData?.roles.indexOf('Reviewer') >-1 ||authService.atCurrentUserData?.roles.indexOf('Supervisor') >-1\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-gear\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t Workflows\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/team/workflows/supervisor\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-male\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tAs Supervisor\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/team/workflows/reveiwer\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-street-view\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tAs Reviewer\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__section\">\r\n\t\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\t\tMy\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-gear\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t Workflows\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/workflows/pap\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-tasks\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tPAP\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/workflows/learning\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet la la-book\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tLearning\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/workflows/pip\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet  la la-lightbulb-o\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tPIP\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item  m-menu__item--submenu\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\"  data-menu-submenu-toggle=\"hover\">\r\n\t\t\t\t\t<a  href=\"#\" class=\"m-menu__link m-menu__toggle\">\r\n\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-bed\"></i>\r\n\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t Leaves\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<i class=\"m-menu__ver-arrow la la-angle-right\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"m-menu__submenu\">\r\n\t\t\t\t\t\t<span class=\"m-menu__arrow\"></span>\r\n\t\t\t\t\t\t<ul class=\"m-menu__subnav\">\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\" aria-haspopup=\"true\">\r\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/my/leaves/dashboard\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-table\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\tDashboard\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/leaves/apply\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-sign-out\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tApply Leave\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/leaves/list\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-list-alt\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tLeave List\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/leaves/calender\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-calendar\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tCalender\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/leaves/holidays\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-plane\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tHolidays\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t\t\t<a  routerLink=\"/my/leaves/reports\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"m-menu__link-bullet fa fa-bar-chart-o\">\r\n\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t</i>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"m-menu__item\" routerLinkActive=\"m-menu__item--active\" routerLinkActiveOptions=\"{ exact: true }\"  aria-haspopup=\"true\" >\r\n\t\t\t\t\t\t<a  routerLink=\"/my/profile\" class=\"m-menu__link\">\r\n\t\t\t\t\t\t\t<i class=\"m-menu__link-icon fa fa-user\"></i>\r\n\t\t\t\t\t\t\t<span class=\"m-menu__link-title\">\r\n\t\t\t\t\t\t\t\t<span class=\"m-menu__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-menu__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t Profile\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t<!-- <li class=\"m-menu__section\">\r\n\t\t\t\t\t<h4 class=\"m-menu__section-text\">\r\n\t\t\t\t\t\tMy Apps\r\n\t\t\t\t\t</h4>\r\n\t\t\t\t\t<i class=\"m-menu__section-icon flaticon-more-v3\"></i>\r\n\t\t\t\t</li> -->\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t\t<!-- END: Aside Menu -->\r\n\t</div>\r\n\t<!-- END: Left Aside -->\r\n\t"

/***/ }),

/***/ "./src/app/theme/layouts/aside-nav/aside-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideNavComponent = (function () {
    function AsideNavComponent(authService) {
        this.authService = authService;
    }
    AsideNavComponent.prototype.ngOnInit = function () {
    };
    AsideNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initAside();
        var menu = mLayout.getAsideMenu();
        var item = $(menu).find('a[href="' + window.location.pathname + '"]').parent('.m-menu__item');
        $(menu).data('menu').setActiveItem(item);
    };
    AsideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-aside-nav",
            template: __webpack_require__("./src/app/theme/layouts/aside-nav/aside-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__["a" /* AuthService */]])
    ], AsideNavComponent);
    return AsideNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Footer -->\n<footer class=\"m-grid__item\t\tm-footer\" appunwraptag=\"\">\n\t<div class=\"m-container m-container--fluid m-container--full-height m-page__container\">\n\t\t<div class=\"m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop\">\n\t\t\t<div class=\"m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last\">\n\t\t\t\t<span class=\"m-footer__copyright\">\n\t\t\t\t\t2017 &copy; HRIS\n\t\t\t\t\t<a href=\"#\" class=\"m-link\">\n\t\t\t\t\t\tADN Telecom | Fluidonomics Solutions\n\t\t\t\t\t</a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!-- end::Footer -->\n"

/***/ }),

/***/ "./src/app/theme/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-footer",
            template: __webpack_require__("./src/app/theme/layouts/footer/footer.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Header -->\r\n<header class=\"m-grid__item  m-header\"  data-minimize-offset=\"200\" data-minimize-mobile-offset=\"200\" appunwraptag=\"\" >\r\n\t<div class=\"m-container m-container--fluid m-container--full-height\">\r\n\t\t<div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n\t\t\t<!-- BEGIN: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-brand  m-brand--skin-dark\">\r\n\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n\t\t\t\t\t\t<a routerLink=\"/dashboard\" class=\"m-brand__logo-wrapper\">\r\n\t\t\t\t\t\t\t<img alt=\"\" class=\"header-logo\" src=\"./assets/demo/default/media/img/logo/logo_default_dark.png\"/>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--middle m-brand__tools\">\r\n\t\t\t\t\t\t<!-- BEGIN: Left Aside Minimize Toggle -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_minimize_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t\t<!-- BEGIN: Responsive Aside Left Menu Toggler -->\r\n\t\t\t\t\t\t<a href=\"javascript:;\" id=\"m_aside_left_offcanvas_toggle\" class=\"m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- END --> \t\t\t \t\t\t\t\t\t  \t\t\t\t\t\t\t<!-- BEGIN: Responsive Header Menu Toggler -->\r\n\t\t\t\t\t\t<!-- <a id=\"m_aside_header_menu_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t<!-- END --> \t\t\t\t\t\t  \t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t\t<a id=\"m_aside_header_topbar_mobile_toggle\" href=\"javascript:;\" class=\"m-brand__icon m--visible-tablet-and-mobile-inline-block\">\r\n\t\t\t\t\t\t\t<i class=\"flaticon-more\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<!-- BEGIN: Topbar Toggler -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- END: Brand -->\r\n\t\t\t<div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n\t\t\t\t<!-- BEGIN: Horizontal Menu -->\r\n\t\t\t\t<button class=\"m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark\" id=\"m_aside_header_menu_mobile_close_btn\">\r\n\t\t\t\t\t<i class=\"la la-close\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<!-- END: Horizontal Menu -->\t\t\t\t\t\t\t\t<!-- BEGIN: Topbar -->\r\n\t\t\t\t<div id=\"m_header_topbar\" class=\"m-topbar  m-stack m-stack--ver m-stack--general\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n\t\t\t\t\t\t<ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n\t\t\t\t\t\t\t<!-- <li class=\"m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light\tm-list-search m-list-search--skin-light\"  \tdata-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\" id=\"m_quicksearch\" data-search-type=\"dropdown\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-search-1\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header\">\r\n\t\t\t\t\t\t\t\t\t\t\t<form  class=\"m-list-search__form\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-search__form-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-input-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input id=\"m_quicksearch_input\" autocomplete=\"off\" type=\"text\" name=\"q\" class=\"m-list-search__form-input\" value=\"\" placeholder=\"Search...\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-search__form-icon-close\" id=\"m_quicksearch_close\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-remove\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__scrollable m-scrollable\" data-scrollable=\"true\" data-max-height=\"300\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-music-2\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--center\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/custom/misc/notification_bg1.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t9 New\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tUser Notifications\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAlerts\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tEvents\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item m-tabs__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew KRA approval.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpending\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t14 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYour leave has been approved.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompany News\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--info m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHR\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t1 hr\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tReminder\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubmit KRA.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProfile has been approved.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--danger m-badge--wide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\turgent\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSubmit your profile.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" m-scrollabledata-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__items\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJust now\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew invoice received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t20 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server up\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t5 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNew order received\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSystem shutdown\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t11 mins\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-list-timeline__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-list-timeline__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tProduction server down\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-list-timeline__time\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t3 hrs\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAll caught up!\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo new logs.\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<!-- <li class=\"m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light\"  data-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide\"></span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/misc/quick_actions_bg.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__header-subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tShortcuts\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body m-dropdown__body--paddingless\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid m-nav-grid--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-file\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGenerate Report\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-time\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAdd New Event\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-nav-grid__row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-folder\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCreate New Task\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav-grid__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav-grid__icon flaticon-clipboard\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav-grid__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCompleted Tasks\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t\t<li class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__userpic\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"./assets/app/media/img/users/user4.jpg\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/> -->\r\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"authService.atCurrentUserData?.profileImage; else noImage\" src=\"{{authService.atCurrentUserData?.profileImage}}\" onerror=\"this.src ='./assets/app/media/img/custom/users/user6.jpg';\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t    <ng-template #noImage><img src=\"./assets/app/media/img/custom/users/user6.jpg\" class=\"m--img-rounded m--marginless m--img-centered\"></ng-template>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-topbar__username\">\r\n\t\t\t\t\t\t\t\t\t\t{{authService.atCurrentUserData?.fullName}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__header m--align-center\" style=\"background: url(./assets/app/media/img/custom/misc/notification_bg1.jpg); background-size: cover;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user m-card-user--skin-dark\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__pic\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"authService.atCurrentUserData?.profileImage; else noImage\" src=\"{{authService?.profileImage}}\" onerror=\"this.src ='./assets/app/media/img/custom/users/user6.jpg';\" class=\"m--img-rounded m--marginless\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template #noImage><img src=\"./assets/app/media/img/custom/users/user6.jpg\" class=\"m--img-rounded m--marginless\"></ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-card-user__details\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-card-user__name m--font-weight-500\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{authService.atCurrentUserData?.fullName}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-card-user__email m--font-weight-300 m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{authService.atCurrentUserData?.officeEmail ? authService.atCurrentUserData?.officeEmail :authService.atCurrentUserData?.personalEmail}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav m-nav--skin-light\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSection\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/my/profile\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-wrap\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMy Profile\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"m-nav__link-badge\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-badge m-badge--success\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t <li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tChange Password\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/login\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" routerLink=\"/logout\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a (click)=\"authService.signOut()\" class=\"btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a (click)=\"authService.logOut()\" class=\"btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLogout\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<!-- <li id=\"m_quick_sidebar_toggle\" class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-icon\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-grid-menu\"></i>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li> -->\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END: Topbar -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</header>\r\n<!-- END: Header -->\r\n"

/***/ }),

/***/ "./src/app/theme/layouts/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderNavComponent = (function () {
    function HeaderNavComponent(authService) {
        this.authService = authService;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.ngAfterViewInit = function () {
        mLayout.initHeader();
    };
    HeaderNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-header-nav",
            template: __webpack_require__("./src/app/theme/layouts/header-nav/header-nav.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__["a" /* AuthService */]])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_nav_header_nav_component__ = __webpack_require__("./src/app/theme/layouts/header-nav/header-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_default_default_component__ = __webpack_require__("./src/app/theme/pages/default/default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aside_nav_aside_nav_component__ = __webpack_require__("./src/app/theme/layouts/aside-nav/aside-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/theme/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__scroll_top_scroll_top_component__ = __webpack_require__("./src/app/theme/layouts/scroll-top/scroll-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tooltips_tooltips_component__ = __webpack_require__("./src/app/theme/layouts/tooltips/tooltips.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__directives_href_prevent_default_directive__ = __webpack_require__("./src/app/_directives/href-prevent-default.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_unwrap_tag_directive__ = __webpack_require__("./src/app/_directives/unwrap-tag.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { LayoutComponent } from './layout/layout.component';
//import { AsideLeftMinimizeDefaultEnabledComponent } from '../pages/aside-left-minimize-default-enabled/aside-left-minimize-default-enabled.component';




//import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';






var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                //LayoutComponent,
                //AsideLeftMinimizeDefaultEnabledComponent,
                __WEBPACK_IMPORTED_MODULE_1__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_3__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                //QuickSidebarComponent,
                __WEBPACK_IMPORTED_MODULE_5__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
                __WEBPACK_IMPORTED_MODULE_10__directives_unwrap_tag_directive__["a" /* UnwrapTagDirective */],
            ],
            exports: [
                //LayoutComponent,
                //AsideLeftMinimizeDefaultEnabledComponent,
                __WEBPACK_IMPORTED_MODULE_1__header_nav_header_nav_component__["a" /* HeaderNavComponent */],
                __WEBPACK_IMPORTED_MODULE_2__pages_default_default_component__["a" /* DefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_3__aside_nav_aside_nav_component__["a" /* AsideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                //QuickSidebarComponent,
                __WEBPACK_IMPORTED_MODULE_5__scroll_top_scroll_top_component__["a" /* ScrollTopComponent */],
                __WEBPACK_IMPORTED_MODULE_6__tooltips_tooltips_component__["a" /* TooltipsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__directives_href_prevent_default_directive__["a" /* HrefPreventDefaultDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["e" /* RouterModule */],
            ],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Scroll Top -->\n<div class=\"m-scroll-top m-scroll-top--skin-top\" data-toggle=\"m-scroll-top\" data-scroll-offset=\"500\" data-scroll-speed=\"300\" appunwraptag=\"\">\n\t<i class=\"la la-arrow-up\"></i>\n</div>\n<!-- end::Scroll Top -->\n"

/***/ }),

/***/ "./src/app/theme/layouts/scroll-top/scroll-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopComponent; });
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

var ScrollTopComponent = (function () {
    function ScrollTopComponent() {
    }
    ScrollTopComponent.prototype.ngOnInit = function () {
    };
    ScrollTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-scroll-top",
            template: __webpack_require__("./src/app/theme/layouts/scroll-top/scroll-top.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());



/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- begin::Quick Nav -->\n<ul class=\"m-nav-sticky\" style=\"margin-top: 30px;\" appunwraptag=\"\">\n\t<!--\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Showcase\" data-placement=\"left\">\n\t\t<a href=\"\">\n\t\t\t<i class=\"la la-eye\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Pre-sale Chat\" data-placement=\"left\">\n\t\t<a href=\"\" >\n\t\t\t<i class=\"la la-comments-o\"></i>\n\t\t</a>\n\t</li>\n\t-->\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Purchase\" data-placement=\"left\">\n\t\t<a href=\"https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes\" >\n\t\t\t<i class=\"la la-cart-arrow-down\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Documentation\" data-placement=\"left\">\n\t\t<a href=\"http://keenthemes.com/metronic/documentation.html\" >\n\t\t\t<i class=\"la la-code-fork\"></i>\n\t\t</a>\n\t</li>\n\t<li class=\"m-nav-sticky__item\" data-toggle=\"m-tooltip\" title=\"Support\" data-placement=\"left\">\n\t\t<a href=\"http://keenthemes.com/forums/forum/support/metronic5/\" >\n\t\t\t<i class=\"la la-life-ring\"></i>\n\t\t</a>\n\t</li>\n</ul>\n<!-- begin::Quick Nav -->\n"

/***/ }),

/***/ "./src/app/theme/layouts/tooltips/tooltips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipsComponent; });
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

var TooltipsComponent = (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-tooltips",
            template: __webpack_require__("./src/app/theme/layouts/tooltips/tooltips.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/default.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/theme/pages/default/default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultComponent = (function () {
    function DefaultComponent(_authService) {
        this._authService = _authService;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        //this._authService.validateToken();
    };
    DefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("./src/app/theme/pages/default/default.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__base_services_authService_service__["a" /* AuthService */]])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/theme/theme-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_component__ = __webpack_require__("./src/app/theme/theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { AuthGuard } from "../auth/_guards/auth.guard";
//import {CommonService} from "../base/_services/common.service";

var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_1__theme_component__["a" /* ThemeComponent */],
        "canActivate": [__WEBPACK_IMPORTED_MODULE_3__base_services_authService_service__["a" /* AuthService */]],
        "children": [
            {
                "path": "admin",
                "loadChildren": ".\/pages\/default\/admin\/admin.module#AdminModule"
            },
            {
                "path": "hr",
                "loadChildren": ".\/pages\/default\/hr\/hr.module#HrModule"
            },
            {
                "path": "my",
                "loadChildren": ".\/pages\/default\/my\/my.module#MyModule"
            },
            {
                "path": "dashboard",
                "loadChildren": ".\/pages\/default\/dashboard\/dashboard.module#DashboardModule"
            },
            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "dashboard",
                "pathMatch": "full"
            }
        ]
    }
    // {
    //     "path": "**",
    //     "redirectTo": "404",
    //     "pathMatch": "full"
    // }
];
var ThemeRoutingModule = (function () {
    function ThemeRoutingModule() {
    }
    ThemeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]]
        })
    ], ThemeRoutingModule);
    return ThemeRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/theme.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-nav></app-header-nav>\n<!-- begin::Body -->\n<router-outlet></router-outlet>\n<!-- end:: Body -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/theme/theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("./src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeComponent = (function () {
    function ThemeComponent(_script, _router) {
        this._script = _script;
        this._router = _router;
    }
    ThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
            .then(function (result) {
            __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
            // optional js to be loaded once
            _this._script.load('head', 'assets/vendors/custom/fullcalendar/fullcalendar.bundle.js');
        });
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                mLayout.closeMobileAsideMenuOffcanvas();
                mLayout.closeMobileHorMenuOffcanvas();
                mApp.scrollTop();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                // hide visible popover
                $('[data-toggle="m-popover"]').popover('hide');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                // init required js
                mApp.init();
                mUtil.init();
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // content m-wrapper animation
                var animation_1 = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation_1);
                }).removeClass(animation_1).addClass(animation_1);
            }
        });
    };
    ThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
            template: __webpack_require__("./src/app/theme/theme.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_script_loader_service__["a" /* ScriptLoaderService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], ThemeComponent);
    return ThemeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    api_base: {
        //apiBase: "http://localhost:3000",
        apiBase: "http://goforship.com:3000",
        apiPath: "api",
        resetPasswordCallback: "",
        signInPath: 'auth/login',
        signInRedirect: '/login',
        //loginInPath:'auth/login',
        resetPasswordPath: 'auth/reset',
    },
    content_api_base: {
        apiBase: "https://adn-bucket.s3.ap-south-1.amazonaws.com/",
        imgBase: "https://adn-bucket.s3.ap-south-1.amazonaws.com/",
        noImagePath: "image/0e02f48c.noimageavailable.jpg"
    },
    access_deniedPath: ["access-denied"]
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map