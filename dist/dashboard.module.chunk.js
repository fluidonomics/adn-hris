webpackJsonp(["dashboard.module"],{

/***/ "./src/app/theme/pages/default/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Subheader -->\r\n<div class=\"m-subheader\">\r\n\t\t<div class=\"d-flex align-items-center\">\r\n\t\t\t<div class=\"mr-auto\">\r\n\t\t\t\t<h3 class=\"m-subheader__title\">\r\n\t\t\t\t\tDashboard\r\n\t\t\t\t</h3>\r\n\t\t\t</div>\r\n\t\t\t<!-- <div>\r\n\t\t\t\t<span class=\"m-subheader__daterange\" id=\"m_dashboard_daterangepicker\">\r\n\t\t\t\t\t<span class=\"m-subheader__daterange-label\">\r\n\t\t\t\t\t\t<span class=\"m-subheader__daterange-title\"></span>\r\n\t\t\t\t\t\t<span class=\"m-subheader__daterange-date m--font-brand\"></span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<a href=\"#\" class=\"btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill\">\r\n\t\t\t\t\t\t<i class=\"la la-angle-down\"></i>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div> -->\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- END: Subheader -->\r\n\t<div class=\"m-content\">\r\n\t\t<!--Begin::Main Portlet-->\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<!--begin:: Widgets/Activity-->\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--widget-fit m-portlet--full-height m-portlet--skin-light\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text m--font-light\">\r\n\t\t\t\t\t\t\t\t\tQuick links\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless m--font-light\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"m-nav__link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t<div class=\"m-widget17\">\r\n\t\t\t\t\t\t\t<div class=\"m-widget17__visual m-widget17__visual--chart m-portlet-fit--top m-portlet-fit--sides m--bg-danger\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__chart\" style=\"height:320px;\">\r\n\t\t\t\t\t\t\t\t\t<canvas id=\"m_chart_activities\"></canvas>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget17__stats\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__items m-widget17__items-col1\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-calendar m--font-brand\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tLeaves Request\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- 15 New Paskages -->\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t <i class=\"flaticon-graph m--font-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tReports\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- 72 Support Cases -->\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget17__items m-widget17__items-col2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"flaticon-user-add m--font-success\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tAdd New Employee\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- 72 New Items -->\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-widget17__item \">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__icon\">\r\n\t\t\t\t\t\t\t\t\t\t <i class=\"flaticon-chat-1 m--font-danger\" ></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__subtitle\">\r\n\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget17__desc\">\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- 34 Upgraded Boxes -->\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--end:: Widgets/Activity-->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\tStats\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-portlet__nav-item--last m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"m-portlet__nav-link m-portlet__nav-link--icon m-portlet__nav-link--icon-xl\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless m--font-brand\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tActivity\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMessages\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFAQ\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSupport\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"m-widget15\">\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__chart\" style=\"height:180px;\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\r\n\t\t\t\t\t\t\t\t<canvas id=\"m_chart_sales_stats\" width=\"772\" height=\"180\" class=\"chartjs-render-monitor\" style=\"display: block; height: 180px; width: 772px;\"></canvas>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__items\">\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t63%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tLeaves\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 25%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t54%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tKRA Approced\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 40%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t41%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Profit Grow -->\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 55%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-widget15__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__stats\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t79%\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-widget15__text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Member Grow -->\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m--space-10\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"progress m-progress--sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"100\" class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 60%;\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget15__desc\">\r\n\t\t\t\t\t\t\t\t* lorem ipsum dolor sit amet consectetuer sediat elit\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height\">\r\n\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\tApprovals\r\n\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-tools\">\r\n\t\t\t\t\t\t\t<ul class=\"m-portlet__nav\">\r\n\t\t\t\t\t\t\t\t<li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n\t\t\t\t\t\t\t\t\t<a class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\tAll\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 45px;\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__inner\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-dropdown__content\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class=\"m-nav\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__section m-nav__section--first\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__section-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQuick Actions\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-share\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLeaves\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKRA\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-nav__link\" href=\"\" ng-reflect-href=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"m-nav__link-icon flaticon-info\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-nav__link-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tLearning\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"m-nav__item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn btn-outline-danger m-btn m-btn--pill m-btn--wide btn-sm\" href=\"#\" ng-reflect-href=\"#\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t<div class=\"m-widget4\">\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\tSalman Khana\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t29-Sep-2018, 10:15AM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- +$2500 -->\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\tDeepak Singh\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t20-April-2018, 10:15AM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- -$290 -->\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\tRavi Dubey\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t15-June-2018, 10:15AM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- +$17 -->\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\tSupriya Singh\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t29-Jan-2018, 10:15AM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- -$2.50 -->\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-widget4__item\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__img m-widget4__img--logo\">\r\n\t\t\t\t\t\t\t\t\t<img alt=\"\" src=\"\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"m-widget4__info\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__title\">\r\n\t\t\t\t\t\t\t\t\t\tDivya Rai\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__sub\">\r\n\t\t\t\t\t\t\t\t\t\t15-Dec-2018, 12:15AM\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"m-widget4__ext\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"m-widget4__number m--font-brand\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- +$200 -->\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!--End::Main Portlet-->  <!--Begin::Main Portlet-->\r\n\t\t\r\n\t</div>\r\n\t"

/***/ }),

/***/ "./src/app/theme/pages/default/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__ = __webpack_require__("./src/app/_services/script-loader.service.ts");
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



var DashboardComponent = (function () {
    function DashboardComponent(platformId, meta, title, _script) {
        this.platformId = platformId;
        this._script = _script;
        title.setTitle('ADN Dashbord | Dashboard');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Dashboard' },
            { name: 'description', content: 'Dashboard.' }
        ]);
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/app/js/dashboard.js');
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/dashboard/dashboard.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__("./src/app/theme/pages/default/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__default_component__ = __webpack_require__("./src/app/theme/pages/default/default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        "path": "",
        "component": __WEBPACK_IMPORTED_MODULE_5__default_component__["a" /* DefaultComponent */],
        "children": [
            {
                "path": "",
                "component": __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
            }
        ]
    }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */]
            ], exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map