webpackJsonp(["my.module"],{

/***/ "./src/app/base/_interface/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcademicInfo; });
/* unused harmony export AddressInfo */
/* unused harmony export BankInfo */
/* unused harmony export CarInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CertificationInfo; });
/* unused harmony export ContractInfo */
/* unused harmony export EmployeeInfo */
/* unused harmony export DocumentsInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FamilyInfo; });
/* unused harmony export OfficeInfo */
/* unused harmony export PersonalInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PreviousEmploymentInfo; });
/* unused harmony export ProbationInfo */
/* unused harmony export RoleInfo */
/* unused harmony export SalaryInfo */
/* unused harmony export SeparationInfo */
/* unused harmony export SupervisorInfo */
var AcademicInfo = (function () {
    function AcademicInfo() {
        this._id = null;
        this.emp_id = null;
        this.levelOfEducation_id = null;
        this.examDegreeTitle_id = null;
        this.concentration = null;
        this.instituteName = null;
        this.marks = null;
        this.result = null;
        this.cgpa = null;
        this.scale = null;
        this.yearOfPassing = null;
        this.duration = null;
        this.achievements = null;
        this.examDegreeTitleData = null;
        this.isCompleted = false;
    }
    return AcademicInfo;
}());

var AddressInfo = (function () {
    function AddressInfo() {
        this._id = null;
        this.emp_id = null;
        this.permanentAddressLine1 = null;
        this.permanentAddressLine2 = null;
        this.permanentAddressThana_id = null;
        this.permanentAddressDistrict_id = null;
        this.permanentAddressDivision_id = null;
        this.permanentAddressPostCode = null;
        this.currentAddressLine1 = null;
        this.currentAddressLine2 = null;
        this.currentAddressThana_id = null;
        this.currentAddressDistrict_id = null;
        this.currentAddressDivision_id = null;
        this.currentAddressPostCode = null;
        this.isSameAsCurrent = null;
    }
    return AddressInfo;
}());

var BankInfo = (function () {
    function BankInfo() {
        this._id = null;
        this.emp_id = null;
        this.bankName = null;
        this.accountName = null;
        this.accountNumber = null;
        this.currency = null;
        this.modeOfPaymentType = null;
    }
    return BankInfo;
}());

var CarInfo = (function () {
    function CarInfo() {
        this._id = null;
        this.emp_id = null;
        this.companyRegistrationNumber = null;
        this.companyEffectiveDate = null;
        this.companyExpiryDate = null;
        this.companyFuelAllowance = null;
        this.companyMaintenanceAllowance = null;
        this.companyDriverAllowance = null;
        this.companyGrossPay = null;
        this.privateRegistrationNumber = null;
        this.privateEffectiveDate = null;
        this.privateExpiryDate = null;
        this.privateCarUsageAllowance = null;
    }
    return CarInfo;
}());

var CertificationInfo = (function () {
    function CertificationInfo() {
        this._id = null;
        this.emp_id = null;
        this.certificationTitle = null;
        this.location = null;
        this.institution = null;
        this.duration = null;
        this.topicsCovered = null;
    }
    return CertificationInfo;
}());

var ContractInfo = (function () {
    function ContractInfo() {
        this._id = null;
        this.emp_id = null;
        this.contractPeriod = null;
        this.isContractExtended = null;
        this.IsContractCompleted = null;
    }
    return ContractInfo;
}());

var EmployeeInfo = (function () {
    function EmployeeInfo() {
        this._id = null;
        this.fullName = null;
        this.userName = null;
        this.password = null;
        this.company_id = null;
        this.profileImage = null;
        this.employmentType_id = null;
        this.designation_id = null;
        this.grade_id = null;
        this.resetPasswordToken = null;
        this.resetPassword = null;
        this.resetPasswordExpires = null;
    }
    return EmployeeInfo;
}());

var DocumentsInfo = (function () {
    function DocumentsInfo() {
        this._id = null;
        this.emp_id = null;
        this.nationalIdSmartCard = null;
        this.nationalIdSmartCardDocURL = null;
        this.passportNumber = null;
        this.passportNumberDocURL = null;
        this.birthRegistrationNumber = null;
        this.birthRegistrationNumberDocURL = null;
        this.nationalIDOldFormat = null;
        this.nationalIDOldFormatDocURL = null;
    }
    return DocumentsInfo;
}());

var FamilyInfo = (function () {
    function FamilyInfo() {
        this._id = null;
        this.emp_id = null;
        this.name = null;
        this.relation_id = null;
        this.dateOfBirth = null;
        this.contact = null;
    }
    return FamilyInfo;
}());

var OfficeInfo = (function () {
    function OfficeInfo() {
        this._id = null;
        this.emp_id = null;
        this.idCardNumber = null;
        this.officeEmail = null;
        this.officePhone = null;
        this.officeMobile = null;
        this.facility = null;
        this.city = null;
        this.country = null;
        this.costCentre = null;
        this.dateOfJoining = null;
        this.dateOfConfirmation = null;
        this.employmentStatus_id = null;
        this.managementType_id = null;
        this.jobTitle = null;
        this.groupHrHead_id = null;
        this.businessHrHead_id = null;
        this.division_id = null;
        this.department_id = null;
        this.vertical_id = null;
        this.subVertical_id = null;
        this.tenureOfContract = null;
        this.workPermitNumber = null;
        this.workPermitEffectiveDate = null;
        this.workPermitExpiryDate = null;
        this.employeeCategory = null;
        this.reviewer_id = null;
        this.hrspoc_id = null;
        this.isCompleted = false;
    }
    return OfficeInfo;
}());

var PersonalInfo = (function () {
    function PersonalInfo() {
        this._id = null;
        this.emp_id = null;
        this.gender = null;
        this.personalMobileNumber = null;
        this.personalEmail = null;
        this.dob = null;
        this.bloodGroup = null;
        this.religion = null;
        this.nationality = null;
        this.homePhone = null;
        this.motherName = null;
        this.fatherName = null;
        this.maritialStatus = null;
        this.emergencyContactPerson = null;
        this.emergencyContactNumber = null;
        this.isCompleted = false;
    }
    return PersonalInfo;
}());

var PreviousEmploymentInfo = (function () {
    function PreviousEmploymentInfo() {
        this._id = null;
        this.emp_id = null;
        this.companyName = null;
        this.companyBusiness = null;
        this.designation = null;
        this.department = null;
        this.responsibility = null;
        this.companyLocation = null;
        this.employmentPeriodFrom = null;
        this.employmentPeriodTo = null;
        this.areaOfExperience = null;
    }
    return PreviousEmploymentInfo;
}());

var ProbationInfo = (function () {
    function ProbationInfo() {
        this._id = null;
        this.emp_id = null;
        this.probationPeriod = null;
        this.isProbationExtended = null;
        this.IsProbationCompleted = null;
    }
    return ProbationInfo;
}());

var RoleInfo = (function () {
    function RoleInfo() {
        this._id = null;
        this.emp_id = null;
        this.role_id = null;
    }
    return RoleInfo;
}());

var SalaryInfo = (function () {
    function SalaryInfo() {
        this._id = null;
        this.emp_id = null;
        this.basic = null;
        this.hra = null;
        this.conveyanceAllowance = null;
        this.lfa = null;
        this.medicalAllowance = null;
        this.specialAllowance = null;
        this.grossSalary = null;
        this.lunchAllowance = null;
        this.mobileAllowance = null;
        this.otherAllowance = null;
        this.totalEarnings = null;
        this.festivalAllowance = null;
        this.providentFundMembership = null;
        this.groupLifeInsurance = null;
        this.hospitalizationScheme = null;
        this.isSalaryHike = null;
        this.isCompleted = false;
    }
    return SalaryInfo;
}());

var SeparationInfo = (function () {
    function SeparationInfo() {
        this._id = null;
        this.emp_id = null;
        this.dateOfResignation = null;
        this.dateOfSeparation = null;
        this.effectiveDate = null;
        this.separationType = null;
    }
    return SeparationInfo;
}());

var SupervisorInfo = (function () {
    function SupervisorInfo() {
        this._id = null;
        this.emp_id = null;
        this.primarySupervisorEmp_id = null;
        this.secondarySupervisorEmp_id = null;
        this.reason = null;
        this.leaveSupervisorEmp_id = null;
    }
    return SupervisorInfo;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/apply/apply.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"m-portlet m-portlet--tabs m-portlet--success m-portlet--head-solid-bg m-portlet--head-sm\">\r\n\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text flaticon-user-add\">\r\n\t\t\t\t\t\t\t\tLeave Application\r\n\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t<div class=\"tab-content\">\r\n\t\t\t\t\t\t<div class=\"tab-pane active show\" id=\"m_tabs_9_1\" role=\"tabpanel\">\r\n\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"onLeaveAppSubmit(fleaveapplication)\" id=\"fleaveapplication\"\r\n\t\t\t\t\t\t\t #fleaveapplication=\"ngForm\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Leave Type</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"leaveType\" bindLabel=\"leaveType\" [items]=\"leavetype\" [(ngModel)]=\"leaveapplication.leavetype\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t id=\"leavetype\" #leavetype=\"ngModel\" placeholder=\"\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fleaveapplication.submitted && !leavetype.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">From Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--air\" name=\"fromDate\" [(ngModel)]=\"leaveapplication.fromDate\" #fromDate=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t bsDatepicker [readonly]=\"true\" [maxDate]=\"currentDate\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" id=\"fromDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!fromDate.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fleaveapplication.submitted && !fromDate.valid\">This field is required.</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">From Session</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"fromSession\" bindLabel=\"fromSession\" [items]=\"fromsessiondropdown\" [(ngModel)]=\"leaveapplication.fromSession\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t #fromSession=\"ngModel\" bindValue=\"_id\" placeholder=\"Select From Session\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fleaveapplication.submitted && !fromSession.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">To Date</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--air\" name=\"toDate\" bsDatepicker [readonly]=\"true\" [maxDate]=\"currentDate\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" id=\"toDate\" [(ngModel)]=\"leaveapplication.toDate\" #toDate=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!toDate.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fleaveapplication.submitted && !toDate.valid\">This field is required.</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">To Session</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"toSession\" bindLabel=\"toSession\" bindValue=\"_id\" placeholder=\"Select To Session\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t [(ngModel)]=\"leaveapplication.toSession\" #toSession=\"ngModel\" [items]=\"tosessiondropdown\" required></ng-select>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fleaveapplication.submitted && !toSession.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Days</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"days\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" [(ngModel)]=\"leaveapplication.days\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t #days=\"ngModel\" disabled required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!days.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fleaveapplication.submitted && !days.valid\">This field is required.</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Balance</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\">* </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--air\" name=\"balance\" id=\"balance\" [(ngModel)]=\"leaveapplication.balance\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t #balance=\"ngModel\" OnlyNumber=\"true\" disabled required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!balance.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fleaveapplication.submitted && !balance.valid\">This field is required.</span>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Apply To</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-select class=\"m-input m-input--air\" name=\"applyto\" [items]=\"applyto\" [(ngModel)]=\"leaveapplication.applyto\" #applyto=\"ngModel\"></ng-select>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"!applyto.valid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"fleaveapplication.submitted && !applyto.valid\">This field is required.</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Reason</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"reason\" id=\"reason\" class=\"form-control m-input m-input--air\" rows=\"3\" [(ngModel)]=\"leaveapplication.reason\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t #reason=\"ngModel\" required></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fleaveapplication.submitted && !reason.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Contact Detail</label>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<textarea name=\"contactDetail\" id=\"contactDetail\" class=\"form-control m-input m-input--air\" rows=\"3\" [(ngModel)]=\"leaveapplication.contactDetail\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t name=\"contactDetail\" #contactDetail=\"ngModel\"></textarea>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">Attechment</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"required\" aria-required=\"true\"> * </span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" name=\"attechment\" [(ngModel)]=\"leaveapplication.attechment\" #attechment=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-control-feedback has-danger\" *ngIf=\"fleaveapplication.submitted && !attechment.valid \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tThis field is required.\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"form_control_1\">CC To</label>\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input m-input--air\" name=\"ccTo\" id=\"mobileNumber\" [(ngModel)]=\"leaveapplication.ccTo\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t #ccTo=\"ngModel\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-1 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group form-group\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"\">&nbsp;</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success submitForm\">Select</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 adn-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t\tNote: Separate multiple emails with commas\r\n\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success submitForm\" type=\"submit\" id=\"submitForm\">Apply</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-secondary\" (click)=\"fleaveapplication.resetForm();clearFormData();\" type=\"reset\">Cancel</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/apply/apply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyComponent; });
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

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var ApplyComponent = (function () {
    function ApplyComponent() {
        this.leaveapplication = {};
        this.leavetype = ['Annual leave', 'Slick leave', 'Maternity leave'];
        this.applyto = ['leave supervisor'];
        this.fromsessiondropdown = [];
        this.tosessiondropdown = [];
        this.currentDate = new Date();
    }
    ApplyComponent.prototype.onLeaveAppSubmit = function (data) {
        console.log(data);
        console.log(this.leaveapplication);
    };
    ApplyComponent.prototype.clearFormData = function () {
    };
    ApplyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/apply/apply.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], ApplyComponent);
    return ApplyComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/calender/calender.component.html":
/***/ (function(module, exports) {

module.exports = "calender"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/calender/calender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var CalenderComponent = (function () {
    function CalenderComponent() {
    }
    CalenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/calender/calender.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <!--begin::Leave Balance-->\r\n        <div class=\"col-xl-4\">\r\n            <div class=\"m-portlet m-portlet--full-height\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Leave Balance - 2018\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget4\">\r\n                        <div class=\"m-widget4__item\" *ngFor=\"let leave of leaveBalance\">\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__text\">\r\n                                    {{leave.title}}\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"m-widget4__ext\">\r\n                                <span>\r\n                                    {{leave.balance}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end::Leave Balance-->\r\n\r\n        <!--begin::Upcoming Holidays-->\r\n        <div class=\"col-xl-4 holiday\">\r\n            <div class=\"m-portlet m-portlet--full-height\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Upcoming Holidays\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget4\">\r\n                        <div class=\"m-widget4__item\" *ngFor=\"let holiday of upcomingHolidays\">\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-menu__link-badge\">\r\n                                    <span class=\"m-badge m-badge--info day\">\r\n                                        {{holiday.date | date:'EEEE'}}\r\n                                    </span>\r\n                                    <span class=\"m-badge m-badge--info type\" *ngIf=\"holiday.type\">\r\n                                        {{holiday.type}}\r\n                                    </span>\r\n                                </span>\r\n                                <span>{{holiday.date | date:'d MMM y'}}</span>\r\n                            </div>\r\n                            <div class=\"m-widget4__ext\">\r\n                                <span>{{holiday.title}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end::Upcoming Holidays-->\r\n\r\n        <!--begin::Recent Transactions-->\r\n        <div class=\"col-xl-4 transaction\">\r\n            <div class=\"m-portlet m-portlet--full-height\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                Recent Transactions\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget4\">\r\n                        <div class=\"m-widget4__item\" *ngFor=\"let tran of recentTransactions\">\r\n                            <div class=\"m-widget4__info\">\r\n                                <span class=\"m-widget4__text\">\r\n                                    {{tran.holidayType}}\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"m-widget4__desc\">\r\n                                <span *ngIf=\"tran.endDate\">{{tran.startDate | date:'d MMM y'}} to {{tran.endDate | date:'d MMM y'}}</span>\r\n                                <span *ngIf=\"!tran.endDate\">{{tran.startDate | date:'d MMM y'}}</span>\r\n                                <span class=\"\">{{tran.description}}</span>\r\n                            </div>\r\n                            <div class=\"m-widget4__ext\">\r\n                                <span>\r\n                                    {{tran.status}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--end::Recent Transactions-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ".holiday .m-portlet__body .m-widget4 .m-widget4__item {\n  width: 100%; }\n  .holiday .m-portlet__body .m-widget4 .m-widget4__item .m-widget4__info {\n    width: 60%; }\n  .holiday .m-portlet__body .m-widget4 .m-widget4__item .m-widget4__info span {\n      display: block; }\n  .holiday .m-portlet__body .m-widget4 .m-widget4__item .m-widget4__info .m-badge {\n      display: inline-block; }\n  .holiday .m-portlet__body .m-widget4 .m-widget4__item .m-widget4__info .m-badge.day {\n        width: 50%; }\n  .holiday .m-portlet__body .m-widget4 .m-widget4__item .m-widget4__info .m-badge.type {\n        width: 20%; }\n  .transaction .m-widget4__item {\n  width: 100%; }\n  .transaction .m-widget4__item .m-widget4__info {\n    width: 20%; }\n  .transaction .m-widget4__item .m-widget4__desc {\n    width: 100%; }\n  .transaction .m-widget4__item .m-widget4__desc span {\n      display: block; }\n  .transaction .m-widget4__item .m-widget4__ext {\n    width: 30%; }\n"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.leaveBalance = [];
        this.upcomingHolidays = [];
        this.recentTransactions = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.leaveBalance = [
            {
                title: "LOP",
                balance: 0
            },
            {
                title: "PL",
                balance: 11
            },
            {
                title: "COF",
                balance: 0
            },
            {
                title: "OH",
                balance: 4
            }
        ];
        this.upcomingHolidays = [
            {
                date: new Date(),
                title: "Ramzan Id (Id ul Fitra)",
                type: null
            },
            {
                date: new Date("08/15/2018"),
                title: "Independance Day",
                type: null
            },
            {
                date: new Date(),
                title: "Ganesh Chaturthi",
                type: "OH"
            }
        ];
        this.recentTransactions = [
            {
                holidayType: "LOP",
                startDate: new Date("12/02/2017"),
                endDate: new Date("12/11/2017"),
                description: "Going Home",
                status: "Approved"
            },
            {
                holidayType: "PL",
                startDate: new Date("10/12/2017"),
                endDate: null,
                description: null,
                status: "Approved"
            }
        ];
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-my-leaves-dashboard",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/holidays/holidays.component.html":
/***/ (function(module, exports) {

module.exports = "holiday"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/holidays/holidays.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HolidaysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var HolidaysComponent = (function () {
    function HolidaysComponent() {
    }
    HolidaysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/holidays/holidays.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], HolidaysComponent);
    return HolidaysComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/leave-list/leavelist.component.html":
/***/ (function(module, exports) {

module.exports = "leavelist\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/leave-list/leavelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaveListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var LeaveListComponent = (function () {
    function LeaveListComponent() {
    }
    LeaveListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/leave-list/leavelist.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], LeaveListComponent);
    return LeaveListComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "reports"

/***/ }),

/***/ "./src/app/theme/pages/default/my/leaves/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
var now = new Date();
var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/leaves/reports/reports.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/my-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_component__ = __webpack_require__("./src/app/theme/pages/default/my/my.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__ = __webpack_require__("./src/app/theme/pages/default/my/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workflows_learning_learning_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__workflows_pap_pap_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/pap/pap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__workflows_pip_pip_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/pip/pip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__leaves_apply_apply_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/apply/apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leaves_holidays_holidays_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/holidays/holidays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaves_calender_calender_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/calender/calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__leaves_leave_list_leavelist_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/leave-list/leavelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__leaves_reports_reports_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__profile_edit_profile_edit_component__ = __webpack_require__("./src/app/theme/pages/default/my/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leaves_dashboard_dashboard_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { AuthGuard } from "../../../../auth/_guards/auth.guard";












// import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
// import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';
var routes = [{
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__my_component__["a" /* MyComponent */],
        children: [
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_3__profile_profile_component__["a" /* ProfileComponent */] },
            { path: 'profile-edit', component: __WEBPACK_IMPORTED_MODULE_12__profile_edit_profile_edit_component__["a" /* ProfileEditComponent */] },
            { path: 'workflows/learning', component: __WEBPACK_IMPORTED_MODULE_4__workflows_learning_learning_component__["a" /* MyLearningComponent */] },
            { path: 'workflows/pap', component: __WEBPACK_IMPORTED_MODULE_5__workflows_pap_pap_component__["a" /* MyPapComponent */] },
            { path: 'workflows/pip', component: __WEBPACK_IMPORTED_MODULE_6__workflows_pip_pip_component__["a" /* MyPipComponent */] },
            { path: 'leaves/dashboard', component: __WEBPACK_IMPORTED_MODULE_13__leaves_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'leaves/apply', component: __WEBPACK_IMPORTED_MODULE_7__leaves_apply_apply_component__["a" /* ApplyComponent */] },
            { path: 'leaves/holidays', component: __WEBPACK_IMPORTED_MODULE_8__leaves_holidays_holidays_component__["a" /* HolidaysComponent */] },
            { path: 'leaves/calender', component: __WEBPACK_IMPORTED_MODULE_9__leaves_calender_calender_component__["a" /* CalenderComponent */] },
            { path: 'leaves/list', component: __WEBPACK_IMPORTED_MODULE_10__leaves_leave_list_leavelist_component__["a" /* LeaveListComponent */] },
            { path: 'leaves/reports', component: __WEBPACK_IMPORTED_MODULE_11__leaves_reports_reports_component__["a" /* ReportsComponent */] },
            { path: 'team', loadChildren: ".\/team\/my-team.module#MyTeamModule" }
        ]
    }];
var MyRoutingModule = (function () {
    function MyRoutingModule() {
    }
    MyRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], MyRoutingModule);
    return MyRoutingModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/my.component.html":
/***/ (function(module, exports) {

module.exports = "<app-aside-nav></app-aside-nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/theme/pages/default/my/my.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyComponent; });
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

var MyComponent = (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
    };
    MyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body",
            template: __webpack_require__("./src/app/theme/pages/default/my/my.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [])
    ], MyComponent);
    return MyComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/my.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModule", function() { return MyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_datepicker__ = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__ = __webpack_require__("./src/app/theme/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_component__ = __webpack_require__("./src/app/theme/pages/default/my/my.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/theme/pages/default/my/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit_component__ = __webpack_require__("./src/app/theme/pages/default/my/profile-edit/profile-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workflows_learning_learning_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/learning/learning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workflows_pap_pap_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/pap/pap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workflows_pip_pip_component__ = __webpack_require__("./src/app/theme/pages/default/my/workflows/pip/pip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__leaves_apply_apply_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/apply/apply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leaves_holidays_holidays_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/holidays/holidays.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__leaves_calender_calender_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/calender/calender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__leaves_leave_list_leavelist_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/leave-list/leavelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__leaves_reports_reports_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_routing_module__ = __webpack_require__("./src/app/theme/pages/default/my/my-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_select_ng_select__ = __webpack_require__("./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_uploader__ = __webpack_require__("./node_modules/ngx-uploader/dist/ngx-uploader.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_service__ = __webpack_require__("./src/app/theme/pages/default/my/my.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__base_base_module__ = __webpack_require__("./src/app/base/base.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__leaves_dashboard_dashboard_component__ = __webpack_require__("./src/app/theme/pages/default/my/leaves/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';














//import { ReviewerComponent } from './team/workflows/reveiwer/reviewer.component';
//import { SupervisorComponent } from './team/workflows/supervisor/supervisor.component';






var MyModule = (function () {
    function MyModule() {
    }
    MyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__layouts_layout_module__["a" /* LayoutModule */],
                //NgbModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__my_routing_module__["a" /* MyRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_17__ng_select_ng_select__["a" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_uploader__["a" /* NgUploaderModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_datepicker__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20__base_base_module__["a" /* BaseModule */]
            ], declarations: [
                __WEBPACK_IMPORTED_MODULE_5__my_component__["a" /* MyComponent */],
                __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__workflows_learning_learning_component__["a" /* MyLearningComponent */],
                __WEBPACK_IMPORTED_MODULE_9__workflows_pap_pap_component__["a" /* MyPapComponent */],
                __WEBPACK_IMPORTED_MODULE_10__workflows_pip_pip_component__["a" /* MyPipComponent */],
                __WEBPACK_IMPORTED_MODULE_11__leaves_apply_apply_component__["a" /* ApplyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__leaves_holidays_holidays_component__["a" /* HolidaysComponent */],
                __WEBPACK_IMPORTED_MODULE_13__leaves_calender_calender_component__["a" /* CalenderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__leaves_leave_list_leavelist_component__["a" /* LeaveListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__leaves_reports_reports_component__["a" /* ReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_edit_profile_edit_component__["a" /* ProfileEditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__leaves_dashboard_dashboard_component__["a" /* DashboardComponent */]
                //ReviewerComponent,
                //SupervisorComponent
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__my_service__["a" /* MyService */]]
        })
    ], MyModule);
    return MyModule;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/my.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyService; });
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






var MyService = (function () {
    function MyService(authService) {
        this.authService = authService;
    }
    MyService.prototype.getPersonalInfo = function (emp_id) {
        var url = "user/getPersonalInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getBankInfo = function (emp_id) {
        var url = "user/getBankInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getSalaryInfo = function (emp_id) {
        var url = "user/getSalaryInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getAddressInfo = function (emp_id) {
        var url = "user/getAddressInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getDocumentsInfo = function (emp_id) {
        var url = "user/getDocumentsInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getCarInfo = function (emp_id) {
        var url = "user/getCarInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getAcademicInfo = function (emp_id) {
        var url = "user/getAcademicInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getPositionDetails = function (emp_id) {
        var url = "user/getPositionInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getCertificationInfo = function (emp_id) {
        var url = "user/getCertificationInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getPreviousEmploymentInfo = function (emp_id) {
        var url = "user/getPreviousEmploymentInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getFamilyInfo = function (emp_id) {
        var url = "user/getFamilyInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getOfficeDetails = function (emp_id) {
        var url = "user/getOfficeInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getPerformanceDairyDeatils = function (emp_id) {
        var url = "user/getPerformanceRatingInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getSeperationDetails = function (emp_id) {
        var url = "user/seperationInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.getProfileProcessInfo = function (empId) {
        var url = "user/getProfileProcessInfo";
        if (empId) {
            url = "user/getProfileProcessInfo?emp_id=" + empId;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.savePersonalInfo = function (data) {
        {
            var url = "user/addPersonalInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePersonalInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveAddressInfo = function (data) {
        {
            var url = "user/addAddressInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateAddressInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveDocumentsInfo = function (data) {
        {
            var url = "user/addDocumentsInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateDocumentsInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveAcademicInfo = function (data) {
        var url = "user/addAcademicInfo";
        if (data._id != null && data._id != "" && data._id != undefined) {
            url = "user/updateAcademicInfo";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.saveCertificationInfo = function (data) {
        {
            var url = "user/addCertificationInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateCertificationInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.savePreviousEmploymentInfo = function (data) {
        {
            var url = "user/addPreviousEmploymentInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePreviousEmploymentInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveFamilyInfo = function (data) {
        {
            var url = "user/addFamilyInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateFamilyInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveOfficeInfo = function (data) {
        {
            var url = "user/addOfficeInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateOfficeInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.savePositionInfo = function (data) {
        {
            var url = "user/addPositionInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updatePositionInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveBankDetails = function (data) {
        {
            var url = "user/addBankInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateBankInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.savePerformanceRatingInfo = function (data) {
        {
            var url = "user/saveBulkPerformanceRating";
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveSalaryDetails = function (data) {
        {
            var url = "user/addSalaryInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateSalaryInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveCarDetails = function (data) {
        var url = "user/addCarInfo";
        if (data._id != null && data._id != "" && data._id != undefined) {
            url = "user/updateCarInfo";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.saveProfileStatus = function (data) {
        {
            var url = "user/addProfileProcessInfo";
            if (data._id != null && data._id != "" && data._id != undefined) {
                url = "user/updateProfileProcessInfo";
            }
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.saveKra = function (data) {
        {
            var url = "kra/addKraInfo";
            return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
        }
    };
    MyService.prototype.deleteAcademicInfo = function (_id) {
        var url = "user/deleteAcademicInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.deletePreviousEmploymentInfo = function (_id) {
        var url = "user/deletePreviousEmploymentInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.deleteFamilyInfo = function (_id) {
        var url = "user/deleteFamilyInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.deleteCertificationInfo = function (_id) {
        var url = "user/deleteCertificationInfo?_id=" + _id;
        return this.authService.delete(url).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.deleteImage = function (data) {
        var url = "upload/deleteImage";
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    };
    MyService.prototype.extractData = function (res) {
        return res || {};
        // let body = res.json();
        // return body || { };
    };
    MyService.prototype.handleError = function (error) {
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
    MyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__base_services_authService_service__["a" /* AuthService */]])
    ], MyService);
    return MyService;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/profile-edit/profile-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\" *ngIf=\"profileProcess.isEmployeeSubmitted\">\r\n        <div class=\"col-md-12\">\r\n            <!--begin:: Widgets/New Users-->\r\n            <div class=\"m-portlet m-portlet\">\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"m-widget4\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4\">\r\n                                <div class=\"m-widget4__item\">\r\n                                    <div class=\"m-widget4__img m-widget4__img--pic\">\r\n                                        <img src=\"./assets/app/media/img/custom/users/user6.jpg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__title\">\r\n                                            Test Employee\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"m-widget4__sub\">\r\n                                            Sales Executive, Marketing Department\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"m-widget4__item\">\r\n                                    <div class=\"m-widget4__ext\">\r\n                                        <span class=\"m-widget4__icon m--font-brand\">\r\n                                            <i class=\"flaticon-share\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__text\">\r\n                                            <strong>Type: </strong>\r\n                                        </span>\r\n                                        <span class=\"m-widget4__text\">\r\n                                            Employee Profile\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"m-widget4__item\">\r\n                                    <div class=\"m-widget4__ext\">\r\n                                        <span class=\"m-widget4__icon m--font-brand\">\r\n                                            <i class=\"flaticon-information\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__text\">\r\n                                            <strong>Status: </strong>\r\n                                        </span>\r\n                                        <span class=\"m-widget4__text\">\r\n                                            Submitted to HR\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"m-widget4__item\">\r\n                                    <div class=\"m-widget4__ext\">\r\n                                        <span class=\"m-widget4__icon m--font-brand\">\r\n                                            <i class=\"flaticon-calendar\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__text\">12th May 2018\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-2\">\r\n                                <div class=\"m-widget4__item\" style=\"align-self: right\">\r\n                                    <div class=\"m-widget4__ext\" style=\"padding-right: 3px;\">                                                                  \r\n                                        <button type=\"button\" class=\"btn m-btn--pill btn-success\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack || profileProcess.isHrSendBack\"\r\n                                            (click)=\"submitProfile('Submitted')\">Submit</button>\r\n                                    </div>\r\n                                    <div class=\"m-widget4__ext\" style=\"padding-left: 3px;\">\r\n                                        <button type=\"button\" class=\"btn m-btn--pill btn-danger\" (click)=\"submitProfile('SendBack')\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack || profileProcess.isHrSendBack\">Send Back</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--end:: Widgets/New Users-->\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"m-portlet m-portlet--tabs m-portlet--warning m-portlet--head-solid-bg m-portlet--head-sm\">\r\n                <div class=\"m-portlet__head\">\r\n                    <div class=\"m-portlet__head-caption\">\r\n                        <div class=\"m-portlet__head-title\">\r\n                            <h3 class=\"m-portlet__head-text\">\r\n                                <i class=\"flaticon-user-settings\"></i>\r\n                                Employee Info\r\n                                <small>\r\n                                </small>\r\n                            </h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-portlet__head-tools\">\r\n                        <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand  m-tabs-line--right m-tabs-line-danger\" role=\"tablist\">\r\n                            <!-- <li class=\"nav-item m-tabs__item\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSatusSendBack\">\r\n                            <button type=\"button\" class=\"btn m-btn--pill pulldown btn-secondary\" (click)=\"submitProfile();\" >Submit to HR</button>\r\n                        </li> -->\r\n                            <li class=\"nav-item dropdown m-tabs__item\" *ngIf=\"profileProcess.isEmployeeSubmitted\">\r\n                                <a aria-expanded=\"true\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"\r\n                                    role=\"button\" ng-reflect-href=\"#\">\r\n                                    <i class=\"la la-user\"></i> Personal Info\r\n                                </a>\r\n                                <div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'personal'}\"\r\n                                        [ngClass]=\"{'active':tabName=='personal'}\">\r\n                                        Personal\r\n                                    </a>\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'documents'}\"\r\n                                        [ngClass]=\"{'active':tabName=='documents'}\">\r\n                                        Documents\r\n                                    </a>\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'education'}\"\r\n                                        [ngClass]=\"{'active':tabName=='education'}\">\r\n                                        Education\r\n                                    </a>\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'employment'}\"\r\n                                        [ngClass]=\"{'active':tabName=='employment'}\">\r\n                                        Employment History\r\n                                    </a>\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'family'}\"\r\n                                        [ngClass]=\"{'active':tabName=='family'}\">\r\n                                        Family\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"nav-item dropdown m-tabs__item\">\r\n                                <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"\r\n                                    role=\"button\">\r\n                                    <i class=\"la la-desktop\"></i> Office Info\r\n                                </a>\r\n                                <div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'office'}\"\r\n                                        [ngClass]=\"{'active':tabName=='office'}\">\r\n                                        Office\r\n                                    </a>\r\n                                    <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile-edit\" [queryParams]=\"{'id':param_emp_id,'tabName':'payroll'}\"\r\n                                        [ngClass]=\"{'active':tabName=='payroll'}\">\r\n                                        Payroll\r\n                                    </a>\r\n                                    <!-- <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#m_tabs_9_8\" ng-reflect-href=\"#m_tabs_9_8\">\r\n                                Separation\r\n                                </a> -->\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='personal'}\" *ngIf=\"tabName=='personal' && profileProcess.isEmployeeSubmitted\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_1_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_1_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa flaticon-user-ok\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Personal Info</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_1_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_1_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPersonalInfoTabData();showSpin();\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fpersonalInfo.valid && savePersonalInfo()\" #fpersonalInfo=\"ngForm\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"personalInfo._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"personalInfo.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"status\" [(ngModel)]=\"personalInfo.isCompleted\" #isCompleted=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"fatherName\">Father's Name\r\n                                                            </label>\r\n                                                            <input type=\"text\" name=\"fatherName\" [(ngModel)]=\"personalInfo.fatherName\" #fatherName=\"ngModel\" placeholder=\"Enter father's name\"\r\n                                                                id=\"fatherName\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"motherName\">Mother's Name\r\n                                                            </label>\r\n                                                            <input type=\"text\" name=\"motherName\" [(ngModel)]=\"personalInfo.motherName\" #motherName=\"ngModel\" placeholder=\"Enter mother's name\"\r\n                                                                id=\"motherName\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"gender\">\r\n                                                                Gender\r\n                                                            </label>\r\n                                                            <div class=\"m-radio-inline\">\r\n                                                                <label class=\"m-radio\">\r\n                                                                    <input name=\"gender\" id=\"Male\" type=\"radio\" value=\"Male\" checked=\"checked\" [(ngModel)]=\"personalInfo.gender\" #mgender=\"ngModel\"\r\n                                                                        [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"> Male\r\n                                                                    <span></span>\r\n                                                                </label>\r\n                                                                <label class=\"m-radio\">\r\n                                                                    <input name=\"gender\" id=\"Female\" type=\"radio\" value=\"Female\" [(ngModel)]=\"personalInfo.gender\" #fgender=\"ngModel\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"> Female\r\n                                                                    <span></span>\r\n                                                                </label>\r\n                                                                <label class=\"m-radio\">\r\n                                                                    <input name=\"gender\" id=\"Other\" type=\"radio\" value=\"Other\" [(ngModel)]=\"personalInfo.gender\" #ogender=\"ngModel\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"> Other\r\n                                                                    <span></span>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"birthDate\">Birth Date\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input name=\"birthDate\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Birth of Date\" [(ngModel)]=\"personalInfo.dob\"\r\n                                                                bsDatepicker [readonly]=\"true\" [maxDate]=\"currentDate\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                #birthDate=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !birthDate.valid\">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"mobileNo\">Mobile No.\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input type=\"text\" name=\"mobileNo\" [(ngModel)]=\"personalInfo.personalMobileNumber\" #mobileNo=\"ngModel\" OnlyNumber=\"true\"\r\n                                                                minlength=10 maxlength=10 placeholder=\"Enter Mobile No\" id=\"mobileNo\"\r\n                                                                maxlength=\"10\" aria-describedby=\"mobileNo\" aria-invalid=\"true\"\r\n                                                                class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"!mobileNo.valid\">\r\n                                                            <span *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">This field is required.</span>\r\n                                                            <span *ngIf=\"mobileNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"homePhonNo\">Home Phone No.\r\n                                                            </label>\r\n                                                            <input name=\"homePhonNo\" id=\"homePhonNo\" [(ngModel)]=\"personalInfo.homePhone\" minlength=10 maxlength=10 #homePhonNo=\"ngModel\"\r\n                                                                placeholder=\"Enter home phone\" type=\"text\" OnlyNumber=\"true\"\r\n                                                                class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted\">\r\n                                                                <span *ngIf=\"homePhonNo.errors?.minlength\">Please enter your 10 digit number</span>\r\n                                                                <span *ngIf=\"homePhonNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"personalEmail\">Personal Email\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" id=\"personalEmail\" name=\"personalEmail\" [(ngModel)]=\"personalInfo.personalEmail\"\r\n                                                                (blur)=\"checkEmailExists(personalEmail)\" #personalEmail=\"ngModel\"\r\n                                                                placeholder=\"Enter email\" type=\"email\" email required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\">\r\n                                                                <span *ngIf=\"fpersonalInfo.submitted && personalEmail.errors?.required\">This field is required.</span>\r\n                                                                <span *ngIf=\"!personalEmail.errors?.required && personalEmail.errors?.email\">Personal Email not valid.</span>\r\n                                                                <span *ngIf=\"personalEmail.errors?.emailExists\">Email Address already exists.</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"bloodGroup\">Blood Group\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"bloodGroup\" [items]=\"bloodGropData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Blood Group\"\r\n                                                                [(ngModel)]=\"personalInfo.bloodGroup\" [clearable]=\"false\" #bloodGroup=\"ngModel\"\r\n                                                                required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !bloodGroup.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"religion\">Religion\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"religion\" [items]=\"religionData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Religion\"\r\n                                                                [(ngModel)]=\"personalInfo.religion\" [clearable]=\"false\" #religion=\"ngModel\"\r\n                                                                required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !religion.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"maritalStatus\">Marital Status\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"maritalStatus\" [items]=\"maritialStatusData\" bindLabel=\"text\" bindValue=\"id\"\r\n                                                                placeholder=\"Select maritalStatus\" [(ngModel)]=\"personalInfo.maritialStatus\"\r\n                                                                [clearable]=\"false\" #maritalStatus=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !maritalStatus.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"nationality\">Nationality\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"nationality\" [items]=\"nationalityData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select maritalStatus\"\r\n                                                                [(ngModel)]=\"personalInfo.nationality\" [clearable]=\"false\" #nationality=\"ngModel\"\r\n                                                                required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !nationality.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"emergencyContactName\">Emergency Contact Name\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input type=\"text\" name=\"emergencyContactName\" [(ngModel)]=\"personalInfo.emergencyContactPerson\" #emergencyContactName=\"ngModel\"\r\n                                                                placeholder=\"Enter emergency contact name\" id=\"emergencyContactName\"\r\n                                                                class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactName.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label class=\"emergencyContactNo\">Emergency Contact No.\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input name=\"emergencyContactNo\" id=\"emergencyContactNo\" minlength=10 maxlength=10 [(ngModel)]=\"personalInfo.emergencyContactNumber\"\r\n                                                                #emergencyContactNo=\"ngModel\" placeholder=\"Enter emergency contact no\"\r\n                                                                type=\"text\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\"\r\n                                                                required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactNo.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{personalInfo._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_2_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_2_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"flaticon-map-location\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Address</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_2_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_2_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAddressTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"faddress.valid && saveAddressInfo()\" #faddress=\"ngForm\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"form-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <h5 class=\"title\" style=\"bottom:30px\">\r\n                                                                <strong> Current Address </strong>\r\n                                                            </h5>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"address._id\" class=\"form-control m-input m-input--air\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"address.emp_id\" class=\"form-control m-input m-input--air\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"address.status\" class=\"form-control m-input m-input--air\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"addressLine1\">Address Line 1\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"address.currentAddressLine1\"\r\n                                                                    #addressLine1=\"ngModel\" placeholder=\"Enter address line 1\"\r\n                                                                    type=\"text\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !addressLine1.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"currentAddressLine2\">Address Line 2\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"address.currentAddressLine2\" #currentAddressLine2=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                    placeholder=\"Enter Address Line 2\" id=\"currentAddressLine2\"\r\n                                                                    name=\"currentAddressLine2\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"division\">Division\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" #currentDivision name=\"currentAddressDivision\" [items]=\"currentAddressDivisionData\"\r\n                                                                    (change)=\"loadcurrentAddressDistrictData(address.currentAddressDivision_id)\"\r\n                                                                    bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\"\r\n                                                                    [(ngModel)]=\"address.currentAddressDivision_id\" [clearable]=\"false\"\r\n                                                                    #currentAddressDivision=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressDivision.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"currentAddressDistrict\">District\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" #currentDistrict name=\"currentAddressDistrict\" (change)=\"loadcurrentAddressThanaData(address.currentAddressDistrict_id)\"\r\n                                                                    [items]=\"currentAddressDistrictData\" bindLabel=\"locationName\"\r\n                                                                    bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.currentAddressDistrict_id\"\r\n                                                                    [clearable]=\"false\" #currentAddressDistrict=\"ngModel\" required\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressDistrict.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"thane\">Thane\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" #currentThana name=\"currentAddressThana\" #thane [items]=\"currentAddressThanaData\"\r\n                                                                    bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Thane\"\r\n                                                                    [(ngModel)]=\"address.currentAddressThana_id\" [clearable]=\"false\"\r\n                                                                    #currentAddressthane=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressthane.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"currentAddressPostCode\">Post Code\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"address.currentAddressPostCode\" maxlength=\"6\" #currentAddressPostCode=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                    placeholder=\"Enter Post Code\" id=\"currentAddressPostCode\"\r\n                                                                    name=\"currentAddressPostCode\" OnlyNumber=\"true\" required\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressPostCode.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <br/>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <h5 class=\"title\" style=\"bottom:30px\">\r\n                                                                <strong> Permanent Address </strong>\r\n                                                            </h5>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"form-group form-md-checkboxes\">\r\n                                                        <div class=\"md-checkbox-inline\">\r\n                                                            <div class=\"md-checkbox\">\r\n                                                                <label class=\"m-checkbox m-checkbox--success\">\r\n\r\n                                                                    <input type=\"checkbox\" name=\"isSameAsCurrent\" #sameAddress [(ngModel)]=\"address.isSameAsCurrent\" (click)=\"address.isSameAsCurrent=!address.isSameAsCurrent;resetPermentAddress()\"\r\n                                                                        [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"> Same as Current Address\r\n                                                                    <span class=\"box\" id=\"addressCheck1\"></span>\r\n                                                                </label>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressLine1\">Address Line 1\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine1}}</span>\r\n                                                                <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                                    <input type=\"text\" [(ngModel)]=\"address.permanentAddressLine1\" #permanentAddLine=\"ngModel\" placeholder=\"Enter Permanent Address Line 1\"\r\n                                                                        class=\"form-control m-input m-input--air\" name=\"permanentAddressLin\"\r\n                                                                        required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddLine.valid\">\r\n                                                                        This field is required.\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressLine2\">Address Line 2\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine2}}</span>\r\n                                                                <input type=\"text\" *ngIf=\"!address.isSameAsCurrent\" [(ngModel)]=\"address.permanentAddressLine2\" #permanentAddressLine2=\"ngModel\"\r\n                                                                    class=\"form-control m-input m-input--air\" placeholder=\"Enter Permanent Address Line 2\"\r\n                                                                    id=\"permanentAddressLine2\" name=\"permanentAddressLine2\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressDivision\">Division\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDivision?.selectedItems[0]?.label}}</span>\r\n                                                                <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                                    <ng-select class=\"m-input m-input--air\" name=\"permanentAddressDivision\" [items]=\"permanentAddressDivisionData\" (change)=\"loadpermanentAddressDistrictData(address.permanentAddressDivision_id)\"\r\n                                                                        bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\"\r\n                                                                        [(ngModel)]=\"address.permanentAddressDivision_id\" [clearable]=\"false\"\r\n                                                                        #permanentAddressDivision=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressDivision.valid \">\r\n                                                                        This field is required.\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressDistrict\">District\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDistrict?.selectedItems[0]?.label}}</span>\r\n                                                                <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                                    <ng-select class=\"m-input m-input--air\" name=\"permanentAddressDistrict\" (change)=\"loadpermanentAddressThanaData(address.permanentAddressDistrict_id)\"\r\n                                                                        [items]=\"permanentAddressDistrictData\" bindLabel=\"locationName\"\r\n                                                                        bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.permanentAddressDistrict_id\"\r\n                                                                        [clearable]=\"false\" #permanentAddressDistrict=\"ngModel\"\r\n                                                                        required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressDistrict.valid \">\r\n                                                                        This field is required.\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressThana\">Thana\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentThana?.selectedItems[0]?.label}}</span>\r\n                                                                <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                                    <ng-select class=\"m-input m-input--air\" name=\"permanentAddressThana\" [items]=\"permanentAddressThanaData\" bindLabel=\"locationName\"\r\n                                                                        bindValue=\"_id\" placeholder=\"Select Thane\" [(ngModel)]=\"address.permanentAddressThana_id\"\r\n                                                                        [clearable]=\"false\" #permanentAddressThana=\"ngModel\"\r\n                                                                        required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressThana.valid \">\r\n                                                                        This field is required.\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"permanentAddressPostCode\">Post Code\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressPostCode}}</span>\r\n                                                                <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                                    <input type=\"text\" maxlength=\"6 \" [(ngModel)]=\"address.permanentAddressPostCode\" #permanentAddressPostCode=\"ngModel\" placeholder=\"Enter Permanent Post Code\"\r\n                                                                        class=\"form-control m-input m-input--air\" id=\"permanentAddressPostCode\"\r\n                                                                        name=\"permanentAddressPostCode\" OnlyNumber=\"true\" required\r\n                                                                        [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressPostCode.valid \">\r\n                                                                        This field is required.\r\n                                                                    </div>\r\n                                                                </ng-container>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <br/>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{address._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='documents'}\" *ngIf=\"tabName=='documents' && profileProcess.isEmployeeSubmitted\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_9_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_9_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fa-file\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Documents</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_9_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_9_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadDocuments();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" #fdocuments=\"ngForm\" (ngSubmit)=\"saveDocumentsInfo()\" novalidate=\"novalidate\">\r\n                                                <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"documents._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"documents.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"status\" [(ngModel)]=\"documents.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"txtNationalIdSmartCard\">\r\n                                                                National ID Smart Card\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"documents.nationalIdSmartCard\" #txtNationalIdSmartCard=\"ngModel\" name=\"txtNationalIdSmartCard\"\r\n                                                                id=\"txtNationalIdSmartCard\" class=\"form-control m-input m-input--air\"\r\n                                                                placeholder=\"Enter National ID Smart Card number\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                                <div class=\"input-group-btn\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"changeNationalIdSmartCard\" name=\"changeNationalIdSmartCard\"\r\n                                                                        style=\"margin-right: 6px;\"  (click)=\"nationalIdSmartCard.click()\">Change</button>\r\n                                                                        <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" #nationalIdSmartCard (uploadOutput)=\"onUploadOutput($event,'smartCard')\"\r\n                                                                            [uploadInput]=\"uploadInput\" [disabled]=\"profileProcess.isSupervisorApproved ||!documents.nationalIdSmartCard\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"viewNationalIdSmartCard\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('smartCard')\">View</button>\r\n                                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deleteNationalIdSmartCard\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                        (click)=\"deleteDocumentImage('smartCard')\">\r\n                                                                        <i class=\"fa fa-close\"></i>\r\n                                                                    </button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"txtNationalIDOldFormat\">\r\n                                                                National ID (Old Format)\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"documents.nationalIDOldFormat\" #txtNationalIDOldFormat=\"ngModel\" name=\"txtNationalIDOldFormat\"\r\n                                                                id=\"txtNationalIDOldFormat\" class=\"form-control m-input m-input--air\"\r\n                                                                placeholder=\"Enter National ID (old format)\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                                <div class=\"input-group-btn\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"changeNationalIDOldFormat\" name=\"changeNationalIDOldFormat\"\r\n                                                                        style=\"margin-right: 6px;\"  (click)=\"nationalIDOldFormat.click()\">Change</button>\r\n                                                                        <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" #nationalIDOldFormat ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'smartOldCard')\"\r\n                                                                            [uploadInput]=\"uploadInput\" [disabled]=\"profileProcess.isSupervisorApproved ||!documents.nationalIDOldFormat\">\r\n                                                                    \r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"viewNationalIDOldFormat\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('smartOldCard')\">View</button>\r\n                                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deleteNationalIDOldFormat\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                        (click)=\"deleteDocumentImage('smartOldCard')\">\r\n                                                                        <i class=\"fa fa-close\"></i>\r\n                                                                    </button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"txtBirthRegistrationNumber\">\r\n                                                                Birth Registration Number\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"documents.birthRegistrationNumber\" #txtBirthRegistrationNumber=\"ngModel\" name=\"txtBirthRegistrationNumber\"\r\n                                                                id=\"txtBirthRegistrationNumber\" class=\"form-control m-input m-input--air\"\r\n                                                                placeholder=\"Enter birth registration number\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                                <div class=\"input-group-btn\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"changeBirthRegistrationNumber\" style=\"margin-right: 6px;\"  (click)=\"birthRegistrationNumber.click()\">Change</button>\r\n                                                                        <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" #birthRegistrationNumber (uploadOutput)=\"onUploadOutput($event,'birth')\"\r\n                                                                            [uploadInput]=\"uploadInput\" [disabled]=\"profileProcess.isSupervisorApproved ||!documents.birthRegistrationNumber\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"viewBirthRegistrationNumber\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('birth')\">View</button>\r\n                                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deleteBirthRegistrationNumber\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                        (click)=\"deleteDocumentImage('birth')\">\r\n                                                                        <i class=\"fa fa-close\"></i>\r\n                                                                    </button>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"txtPassportNumber\">\r\n                                                                Passport Number\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"documents.passportNumber\" #txtPassportNumber=\"ngModel\" name=\"txtPassportNumber\" id=\"txtPassportNumber\"\r\n                                                                class=\"form-control m-input m-input--air\" placeholder=\"Enter passport number\"\r\n                                                                [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                                <div class=\"input-group-btn\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"changePassportNumber\" style=\"margin-right: 6px;\"  (click)=\"passportNumber.click()\">Change</button>\r\n                                                                        <input type=\"file\" name=\"profileDocuments\"hidden=\"hidden\" ngFileSelect [options]=\"options\" #passportNumber (uploadOutput)=\"onUploadOutput($event,'passport')\"\r\n                                                                            [uploadInput]=\"uploadInput\" [disabled]=\"profileProcess.isSupervisorApproved ||!documents.passportNumber\">\r\n                                                                    <button type=\"button\" class=\"btn btn-success\" name=\"viewPassportNumber\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('passport')\">View</button>\r\n                                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deletePassportNumber\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"\r\n                                                                        (click)=\"deleteDocumentImage('passport')\">\r\n                                                                        <i class=\"fa fa-close\"></i>\r\n                                                                    </button>\r\n                                                                </div>\r\n\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{documents._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='education'}\" *ngIf=\"tabName=='education' && profileProcess.isEmployeeSubmitted\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_10_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_10_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fa-graduation-cap\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Academic Info</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_10_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_10_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAcademicInfoTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <div *ngFor=\"let academic of academicInfo ;let i=index\">\r\n                                                <form class=\"m-form m-form--fit m-form--label-align-right\" #facademicInfo=\"ngForm\" (ngSubmit)=\"facademicInfo.valid && saveAcademicInfo(academic,i)\"\r\n                                                    novalidate=\"novalidate\">\r\n                                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"academic._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"academic.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"academic.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"levelOfEducation\">Level of Education\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" name=\"levelOfEducation\" [items]=\"levelOfEducationData\" bindLabel=\"educationName\"\r\n                                                                    bindValue=\"_id\" placeholder=\"Select Level of Education\" (change)=\"loadExamDegreeTitle(academic.levelOfEducation_id,i)\"\r\n                                                                    [(ngModel)]=\"academic.levelOfEducation_id\" [clearable]=\"false\"\r\n                                                                    #levelOfEducation=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !levelOfEducation.valid\">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"examDegreeTitle\">Exam Degree Title\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" name=\"examDegreeTitle\" [items]=\"academic.examDegreeTitleData\" bindLabel=\"educationName\"\r\n                                                                    bindValue=\"_id\" placeholder=\"Select Level of Education\" [(ngModel)]=\"academic.examDegreeTitle_id\"\r\n                                                                    [clearable]=\"false\" #examDegreeTitle=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !examDegreeTitle.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"concentrationMajorGroup\">Concentration/Major/Group\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.concentration\" #concentrationMajorGroup=\"ngModel\"\r\n                                                                    id=\"concentrationMajorGroup\" name=\"concentrationMajorGroup\"\r\n                                                                    placeholder=\"Enter concentration/major/goup\" type=\"text\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"instituteName\">Institute Name\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"academic.instituteName\" #instituteName=\"ngModel\" name=\"instituteName\" placeholder=\"Enter Institute Name\"\r\n                                                                    id=\"instituteName\" class=\"form-control m-input m-input--air\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"result\">Result\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <ng-select class=\"m-input m-input--air\" name=\"result\" [items]=\"resultsData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Result\"\r\n                                                                    [(ngModel)]=\"academic.result\" [clearable]=\"false\" #result=\"ngModel\"\r\n                                                                    required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !result.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"marks\">Marks in %\r\n                                                                </label>\r\n                                                                <input type=\"text\" name=\"marks\" [(ngModel)]=\"academic.marks\" maxlength=\"4\" #marks=\"ngModel\" placeholder=\"Enter marks in %\"\r\n                                                                    id=\"marks\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"yearOfPassing\">Year of Passing\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" maxlength=\"4\" [(ngModel)]=\"academic.yearOfPassing\" #yearOfPassing=\"ngModel\"\r\n                                                                    id=\"yearOfPassing\" name=\"yearofpassing\" placeholder=\"Enter year of passing\"\r\n                                                                    OnlyNumber=\"true\" type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"duration\">Duration (In Years)\r\n                                                                </label>\r\n                                                                <input type=\"text\" name=\"duration\" [(ngModel)]=\"academic.duration\" #duration=\"ngModel\" maxlength=\"4\" minlength=\"1\" placeholder=\"Enter Duration\"\r\n                                                                    id=\"duration\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"achievements\">Achievements\r\n                                                                </label>\r\n                                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.achievements\" #achievements=\"ngModel\" id=\"achievements\"\r\n                                                                    name=\"achievements\" placeholder=\"Enter achievements\" type=\"text\"\r\n                                                                    rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></textarea>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"academic._id\" (click)=\"deleteAcademicInfo(academic._id)\">\r\n                                                            <i class=\"fa fa-close\"></i>Delete</button>\r\n                                                        <button type=\"submit\" class=\"btn btn-success\">{{academic._id ? 'Update':'Save'}}</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                            <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                <div class=\"m-form__actions\">\r\n                                                    <button class=\"btn btn-success\" [disabled]=\"isAdded('academicInfo')\" (click)=\"addNewHtmlContain('academicInfo')\">\r\n                                                        <i class=\"fa fa-plus\"></i> Add\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_11_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_11_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa flaticon-user-ok\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Certifications And Training Info</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_11_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_11_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCertificateAndTraningInfoTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <div *ngFor=\"let certifications of certificationsandTrainingInfo ;let i=index\">\r\n                                                <form class=\"m-form m-form--fit m-form--label-align-right\" #fcertificationsandTrainingInfo=\"ngForm\" (ngSubmit)=\"fcertificationsandTrainingInfo.valid && saveCertificationandTrainingInfo(certifications,i)\"\r\n                                                    novalidate=\"novalidate\">\r\n                                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"certifications_id\" [(ngModel)]=\"certifications._id\" #certifications_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"certifications.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"certificationTrainingTitle\">Certification/ Training Title\r\n                                                                </label>\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.certificationTitle\" #certificationTrainingTitle=\"ngModel\"\r\n                                                                    id=\"certificationTrainingTitle\" name=\"certificationTrainingTitle\"\r\n                                                                    placeholder=\"Enter certification / training title\" required\r\n                                                                    type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !certificationTrainingTitle.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"location\">Location\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"certifications.location\" #location=\"ngModel\" name=\"location\" placeholder=\"Enter location\"\r\n                                                                    id=\"location\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"institution\">Institution\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.institution\" #institution=\"ngModel\" id=\"institution\"\r\n                                                                    name=\"institution\" placeholder=\"Enter institution\" type=\"text\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"durationInMonths\">Duration in Months\r\n                                                                </label>\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                <input type=\"text\" [(ngModel)]=\"certifications.duration\" #durationInMonths=\"ngModel\" name=\"durationInMonths\" placeholder=\"Enter duration in months\"\r\n                                                                    id=\"durationInMonths\" class=\"form-control m-input m-input--air\"\r\n                                                                    OnlyNumber=\"true\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !durationInMonths.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"topicsCovered\">Topics Covered\r\n                                                                </label>\r\n                                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.topicsCovered\" #topicsCovered=\"ngModel\" id=\"topicsCovered\"\r\n                                                                    name=\"topicsCovered\" placeholder=\"Enter topics covered\" type=\"text\"\r\n                                                                    rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></textarea>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"certifications._id\" (click)=\"deleteCertificationInfo(certifications._id)\">\r\n                                                            <i class=\"fa fa-close\"></i>Delete</button>\r\n                                                        <button type=\"submit\" class=\"btn btn-success\">{{certifications._id ? 'Update':'Save'}}</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                            <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                <div class=\"m-form__actions\">\r\n                                                    <button class=\"btn btn-success\" [disabled]=\"isAdded('certification')\" (click)=\"addNewHtmlContain('certification')\">\r\n                                                        <i class=\"fa fa-plus\"></i> Add\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='employment'}\" *ngIf=\"tabName=='employment' && profileProcess.isEmployeeSubmitted\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_12_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_12_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa flaticon-user-ok\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Previous Employment Details</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_12_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_12_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadEmploymentDetails();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <div *ngFor=\"let previousEmployment of previousEmploymentDetails ;let i=index\">\r\n                                                <form class=\"m-form m-form--fit m-form--label-align-right\" #fpreviousEmploymentDetails=\"ngForm\" (ngSubmit)=\"fpreviousEmploymentDetails.valid && savePreviousEmploymentDetails(previousEmployment,i)\"\r\n                                                    novalidate=\"novalidate\">\r\n                                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"previousEmploymentDetails_id\" [(ngModel)]=\"previousEmployment._id\" #previousEmploymentDetails_id=\"ngModel\"\r\n                                                                    class=\"form-control m-input m-input--air\" />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"previousEmployment.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"previousEmployment.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"companyName\">Company Name\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyName\" #companyName=\"ngModel\" id=\"companyName\"\r\n                                                                    name=\"companyName\" placeholder=\"Enter company name\" type=\"text\"\r\n                                                                    required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyName.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"companyBusiness\">Company Business\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.companyBusiness\" #companyBusiness=\"ngModel\" name=\"companyBusiness\" placeholder=\"Enter company business\"\r\n                                                                    id=\"companyBusiness\" class=\"form-control m-input m-input--air\"\r\n                                                                    required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyBusiness.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"prevDesignation\">Previous Designation\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.designation\" #prevDesignation=\"ngModel\" name=\"prevDesignation\" placeholder=\"Enter Previous Designation \"\r\n                                                                    id=\"prevDesignation\" class=\"form-control m-input m-input--air\"\r\n                                                                    required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !prevDesignation.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"department\">Department\r\n                                                                </label>\r\n                                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.department\" #department=\"ngModel\" name=\"department\" placeholder=\"Enter department\"\r\n                                                                    id=\"department\" class=\"form-control m-input m-input--air\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-3 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"epf\">Employment Period From\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"epf\" [ngModel]=\"previousEmployment.employmentPeriodFrom\"\r\n                                                                    (ngModelChange)=\"previousEmployment.employmentPeriodFrom=$event;previousEmployment.employmentPeriodTo=''\"\r\n                                                                    #epf=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                    [maxDate]=\"currentDate\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-3 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"ept\">Employment Period To\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"ept\" [(ngModel)]=\"previousEmployment.employmentPeriodTo\"\r\n                                                                    #ept=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                    [minDate]=\"previousEmployment.employmentPeriodFrom\" [maxDate]=\"currentDate\"\r\n                                                                    [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"companyLocation\">Company Location\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyLocation\" #companyLocation=\"ngModel\"\r\n                                                                    id=\"companyLocation\" name=\"companyLocation\" placeholder=\"Enter company location\"\r\n                                                                    type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"areaofExperience\">Area of Experience\r\n                                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                </label>\r\n                                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.areaOfExperience\" #areaofExperience=\"ngModel\"\r\n                                                                    id=\"areaofExperience\" name=\"areaofExperience\" placeholder=\"Enter area of experience\"\r\n                                                                    type=\"text\" rows=\"3\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></textarea>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !areaofExperience.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"responsibility\">Responsibility\r\n                                                                </label>\r\n                                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.responsibility\" #responsibility=\"ngModel\"\r\n                                                                    id=\"responsibility\" name=\"responsibility\" placeholder=\"Enter responsibility\"\r\n                                                                    type=\"text\" rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\"></textarea>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"previousEmployment._id\" (click)=\"deletePreviousEmployment(previousEmployment._id)\">\r\n                                                            <i class=\"fa fa-close\"></i>Delete</button>\r\n                                                        <button type=\"submit\" class=\"btn btn-success\">{{previousEmployment._id ? 'Update':'Save'}}</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                            <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                <div class=\"m-form__actions\">\r\n                                                    <button class=\"btn btn-success\" [disabled]=\"isAdded('employment')\" (click)=\"addNewHtmlContain('employment')\">\r\n                                                        <i class=\"fa fa-plus\"></i> Add\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='family'}\" *ngIf=\"tabName=='family' && profileProcess.isEmployeeSubmitted\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_13_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_13_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fa-group\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Family Info</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_13_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_13_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadFamilyInfoTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <div *ngFor=\"let family of familyInfo ;let i=index\">\r\n                                                <form class=\"m-form m-form--fit m-form--label-align-right\" #ffamilyInfo=\"ngForm\" (ngSubmit)=\"ffamilyInfo.valid && saveFamilyInfo(family,i)\"\r\n                                                    novalidate=\"novalidate\">\r\n                                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"familyInfo_id\" [(ngModel)]=\"family._id\" #familyInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"familyInfoemp_id\" [(ngModel)]=\"family.emp_id\" #familyInfoemp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <input type=\"text\" name=\"familyInfostatus\" [(ngModel)]=\"family.status\" #familyInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                                />\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"familyName\">Name\r\n                                                                </label>\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.name\" #familyName=\"ngModel\" id=\"familyName\" name=\"familyName\"\r\n                                                                    placeholder=\"Enter name\" type=\"text\" required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !familyName.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"relation\">Relation\r\n                                                                </label>\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                                <ng-select name=\"relation\" [items]=\"relationData\" bindLabel=\"relationName\" bindValue=\"_id\" placeholder=\"Select relation\"\r\n                                                                    [(ngModel)]=\"family.relation_id\" #relation=\"ngModel\" [clearable]=\"false\"\r\n                                                                    required [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                </ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !relation.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"fmobileNumber\">Mobile Number\r\n                                                                </label>\r\n                                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.contact\" #mobileNumber=\"ngModel\" minlength=\"10\" maxlength=\"10\"\r\n                                                                    id=\"fmobileNumber\" name=\"fmobileNumber\" placeholder=\"Enter mobile number\"\r\n                                                                    type=\"text\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted\">\r\n                                                                    <span *ngIf=\"mobileNumber.errors?.maxlength || mobileNumber.errors?.minlength\">\r\n                                                                        Please enter your 10 digit number\r\n                                                                    </span>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-6 adn-form__group\">\r\n                                                            <div class=\"form-group m-form__group\">\r\n                                                                <label for=\"fbirthDate\">Birth Date</label>\r\n                                                                <input class=\"form-control m-input m-input--air\" placeholder=\"Enter Birth of Date\" [readonly]=\"true\" name=\"fbirthDate\" [(ngModel)]=\"family.dateOfBirth\"\r\n                                                                    #fbirthDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                    [maxDate]=\"currentDate\" [disabled]=\"profileProcess.isEmployeeSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"m-form__actions\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"family._id\" (click)=\"deleteFamilyInfo(family._id)\">\r\n                                                            <i class=\"fa fa-close\"></i>Delete</button>\r\n                                                        <button type=\"submit\" class=\"btn btn-success\">{{family._id ? 'Update':'Save'}}</button>\r\n                                                    </div>\r\n                                                </form>\r\n                                            </div>\r\n                                            <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"profileProcess.isSupervisorSendBack\">\r\n                                                <div class=\"m-form__actions\">\r\n                                                    <button class=\"btn btn-success\" [disabled]=\"isAdded('family')\" (click)=\"addNewHtmlContain('family')\">\r\n                                                        <i class=\"fa fa-plus\"></i> Add\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='office'}\" *ngIf=\"tabName=='office'\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_6_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_6_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fas fa-briefcase\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Office Info</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_6_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_6_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadOfficeInfoTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" #fofficeInfo=\"ngForm\" (ngSubmit)=\"fofficeInfo.valid && saveOfficeInfo()\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"officeInfo_id\" [(ngModel)]=\"officeInfo._id\" #officeInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"officeInfo_empid\" [(ngModel)]=\"officeInfo.emp_id\" #officeInfo_empid=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"officeInfostatus\" [(ngModel)]=\"officeInfo.status\" #officeInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"employeeName\">Employee Name\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.fullName\" #employeeName=\"ngModel\" id=\"employeeName\"\r\n                                                                name=\"employeeName\" placeholder=\"Enter employee name\" type=\"text\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"employeeId\">Employee ID\r\n                                                            </label>\r\n                                                            <input type=\"text\" readonly name=\"employeeId\" [(ngModel)]=\"officeInfo.userName\" #employeeId=\"ngModel\" placeholder=\"Enter employee ID\"\r\n                                                                id=\"employeeId\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"idCardNumber\">ID card No.\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input type=\"text\" name=\"idCardNumber\" [(ngModel)]=\"officeInfo.idCardNumber\" #idCardNumber=\"ngModel\" placeholder=\"Enter ID card No\"\r\n                                                                id=\"idCardNumber\" maxlength=\"15\" class=\"form-control m-input m-input--air\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !idCardNumber.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"officePhoneNumber\">Office Phone Number\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.officePhone\" #officePhoneNumber=\"ngModel\" maxlength=\"10\"\r\n                                                                id=\"officePhoneNumber\" name=\"officePhoneNumber\" placeholder=\"Enter office phone no\"\r\n                                                                type=\"text\" OnlyNumber=\"true\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"officeMobileNumber\">Office Mobile Number\r\n                                                            </label>\r\n                                                            <input name=\"officeMobileNumber\" [(ngModel)]=\"officeInfo.officeMobile\" #officeMobileNumber=\"ngModel\" id=\"officeMobileNumber\"\r\n                                                                maxlength=\"10\" type=\"text\" class=\"form-control m-input m-input--air\"\r\n                                                                placeholder=\"Enter office mobile no\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"officeEmailId\">Office Email ID\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input [(ngModel)]=\"officeInfo.officeEmail\" #officeEmail=\"ngModel\" (blur)=\"checkEmailExists(officeEmail)\" placeholder=\"Enter office email id\"\r\n                                                                name=\"officeEmailId\" type=\"text\" class=\"form-control m-input m-input--air\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\">\r\n                                                                <span *ngIf=\"fofficeInfo.submitted && officeEmail.errors?.required\">This field is required.</span>\r\n                                                                <span *ngIf=\"!officeEmail.errors?.required && officeEmail.errors?.email\">Offcie Email not valid.</span>\r\n                                                                <span *ngIf=\"officeEmail.errors?.emailExists\">Email Address already exists.</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"facility\">Facility\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.facility\" #facility=\"ngModel\" id=\"facility\" name=\"facility\"\r\n                                                                placeholder=\"Enter facility\" type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"city\">City\r\n                                                            </label>\r\n                                                            <input name=\"city\" id=\"city\" [(ngModel)]=\"officeInfo.city\" #city=\"ngModel\" type=\"text\" class=\"form-control m-input m-input--air\"\r\n                                                                placeholder=\"Enter city\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"country\">Country\r\n                                                            </label>\r\n                                                            <ng-select name=\"country\" [items]=\"countryData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Country\" [(ngModel)]=\"officeInfo.country\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            </ng-select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"costCenter\">Cost Center\r\n                                                            </label>\r\n                                                            <input name=\"costCenter\" [(ngModel)]=\"officeInfo.costCentre\" #costCenter=\"ngModel\" placeholder=\"Enter cost center\" id=\"costCenter\"\r\n                                                                type=\"text\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"dateOfJoining\">Date of Joining</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"dateOfJoining\" [ngModel]=\"officeInfo.dateOfJoining\"\r\n                                                                (ngModelChange)=\"officeInfo.dateOfJoining=$event;officeInfo.dateOfConfirmation=''\"\r\n                                                                #dateOfJoining=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"dateOfConfermation\">Date of Confirmation</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"dateOfConfermation\" [minDate]=\"officeInfo.dateOfJoining\"\r\n                                                                [(ngModel)]=\"officeInfo.dateOfConfirmation\" #dateOfConfermation=\"ngModel\"\r\n                                                                bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"workPermitNumber\">Work Permit Number\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"officeInfo.workPermitNumber\" #workPermitNumber=\"ngModel\" name=\"workPermitNumber\" placeholder=\"Enter work permit no\"\r\n                                                                id=\"idCardNumber\" maxlength=\"10\" class=\"form-control m-input m-input--air\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !workPermitNumber.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"effectiveDate\">Work Permit Effective Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"effectiveDate\" [ngModel]=\"officeInfo.workPermitEffectiveDate\"\r\n                                                                (ngModelChange)=\"officeInfo.workPermitEffectiveDate=$event;officeInfo.workPermitExpiryDate=''\"\r\n                                                                #doj=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"expiryDate\">Work Permit Expiry Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"expiryDate\" [(ngModel)]=\"officeInfo.workPermitExpiryDate\"\r\n                                                                [minDate]=\"officeInfo.workPermitEffectiveDate\" #expiryDate=\"ngModel\"\r\n                                                                bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{officeInfo._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_8_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_8_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa flaticon-user-ok\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Position Details</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_8_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_8_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPositionDetailsTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" #fpositionDetails=\"ngForm\" (ngSubmit)=\"fpositionDetails.valid && savePositionInfo()\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"positionDetails_id\" [(ngModel)]=\"positionDetails._id\" #positionDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"positionDetails_empid\" [(ngModel)]=\"positionDetails.emp_id\" #positionDetails_empid=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"positionDetailsstatus\" [(ngModel)]=\"positionDetails.status\" #positionDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Company Name</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"companyName\" [items]=\"companiesData\" bindLabel=\"companyName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Company Name\" [(ngModel)]=\"positionDetails.company_id\"\r\n                                                                #companyName=\"ngModel\" (change)=\"loadHRSpoce(positionDetails.company_id)\"\r\n                                                                [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !companyName.valid \">\r\n                                                                    This field is required.\r\n                                                                </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Division</label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"division\" [items]=\"divisionData\" bindLabel=\"divisionName\" bindValue=\"_id\" placeholder=\"Select Division\"\r\n                                                                (change)=\"loadDepartment(positionDetails.division_id)\" [(ngModel)]=\"positionDetails.division_id\"\r\n                                                                #division=\"ngModel\" (change)=\"loadDepartment(positionDetails.division_id)\"\r\n                                                                [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !division.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Department</label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"department\" [items]=\"deparmentData\" bindLabel=\"departmentName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Department\" (change)=\"loadVertical(positionDetails.department_id)\"\r\n                                                                [(ngModel)]=\"positionDetails.department_id\" [clearable]=\"false\"\r\n                                                                #department=\"ngModel\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !department.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"form_control_1\">Vertical</label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"vertical\" [items]=\"verticalData\" bindLabel=\"verticalName\" bindValue=\"_id\" placeholder=\"Select Vertical\"\r\n                                                                (change)=\"loadSubVertical(positionDetails.vertical_id)\" [(ngModel)]=\"positionDetails.vertical_id\"\r\n                                                                #vertical=\"ngModel\" (change)=\"loadSubVertical(positionDetails.vertical);\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Sub Vertical</label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"subVertical\" [items]=\"subverticalData\" bindLabel=\"subVerticalName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Sub Vertical\" [(ngModel)]=\"positionDetails.subVertical_id\"\r\n                                                                #subVertical=\"ngModel\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Management Type</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"managementType\" [items]=\"managementTypeData\" bindLabel=\"managementTypeName\"\r\n                                                                bindValue=\"_id\" placeholder=\"Select Management Type\" [(ngModel)]=\"positionDetails.managementType_id\"\r\n                                                                (change)=\"loadEmploymentType(positionDetails.managementType_id)\"\r\n                                                                #managementType=\"ngModel\" [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !managementType.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Employment Type</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"employmentType\" [items]=\"employmentTypeData\" bindLabel=\"employmentTypeName\"\r\n                                                                bindValue=\"_id\" placeholder=\"Select Employment Type\" [(ngModel)]=\"positionDetails.employmentType_id\"\r\n                                                                (change)=\"loadGrade(positionDetails.managementType_id,positionDetails.employmentType_id)\"\r\n                                                                #employmentType=\"ngModel\" [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employmentType.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id==1\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Employment Status</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"confirmationStatus\" [items]=\"employmentStatusData\" bindLabel=\"employmentStatusName\"\r\n                                                                bindValue=\"_id\" placeholder=\"Select Confirmation/Probation Status\"\r\n                                                                [(ngModel)]=\"positionDetails.employmentStatus_id\" #confirmationStatus=\"ngModel\"\r\n                                                                [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !confirmationStatus.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id > 1\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Tenure of Contract/Internship (in months)</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <input type=\"text\" name=\"tenure\" id=\"tenure\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.tenureOfContract\"\r\n                                                                #tenure=\"ngModel\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !tenure.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Grade</label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"employeeGrade\" [items]=\"gradeData\" bindLabel=\"gradeName\" bindValue=\"_id\" placeholder=\"Select Grade\"\r\n                                                                (change)=\"loadDesignation(positionDetails.grade_id);loadSupervisor(positionDetails.grade_id)\"\r\n                                                                [(ngModel)]=\"positionDetails.grade_id\" #employeeGrade=\"ngModel\"\r\n                                                                (change)=\"loadSupervisor(positionDetails.grade_id)\" [clearable]=\"false\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employeeGrade.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Designation</label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"designation\" [items]=\"designationData\" bindLabel=\"designationName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Designation\" [(ngModel)]=\"positionDetails.designation_id\"\r\n                                                                #designation=\"ngModel\" [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !designation.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Job Title</label>\r\n                                                            <input type=\"text\" name=\"jobTitle\" id=\"jobTitle\" class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.jobTitle\"\r\n                                                                [(ngModel)]=\"positionDetails.jobTitle\" #jobTitle=\"ngModel\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">Supervisor</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"primarySupervisorEmp\" [items]=\"supervisorData\" bindLabel=\"fullName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Supervisor\" [(ngModel)]=\"positionDetails.primarySupervisorEmp_id\"\r\n                                                                #primarySupervisorEmp=\"ngModel\" [clearable]=\"false\" required\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !primarySupervisorEmp.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label for=\"form_control_1\">HR SPOC</label>\r\n                                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"hrspoc\" [items]=\"hrspocData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select HR SPOC\"\r\n                                                                [(ngModel)]=\"positionDetails.hrspoc_id\" #hrspoc=\"ngModel\" (change)=\"loadBuisnessHrHead(positionDetails.hrspoc_id)\"\r\n                                                                [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !hrspoc.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label class=\"control-label\">Business HR Head\r\n                                                            </label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"businessHrHead\" [items]=\"buisnessHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Business HR Head\" [(ngModel)]=\"positionDetails.businessHrHead_id\"\r\n                                                                #businessHrHead=\"ngModel\" (change)=\"loadGroupHrHead(positionDetails.businessHrHead_id)\"\r\n                                                                [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !businessHrHead.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"m-form__group form-group\">\r\n                                                            <label class=\"control-label\">Group HR Head\r\n                                                            </label>\r\n                                                            <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"groupHrHead\" [items]=\"groupHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\"\r\n                                                                placeholder=\"Select Group HR Head\" [(ngModel)]=\"positionDetails.groupHrHead_id\"\r\n                                                                #groupHrHead=\"ngModel\" [clearable]=\"false\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !groupHrHead.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <!-- <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">User Role</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"role\" [items]=\"rolesData\" [multiple]=\"true\" bindLabel=\"roleName\" bindValue=\"_id\" placeholder=\"Select User Role\" [(ngModel)]=\"positionDetails.roles\" #role=\"ngModel\" required></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !role.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{positionDetails._id ? 'Update':'Save'}}</button>\r\n\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_15_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_15_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa flaticon-user-ok\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Performance Diary</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_15_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_15_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPerformanceDairyTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" #fperformanceDiary=\"ngForm\" (ngSubmit)=\"fperformanceDiary.valid && savePerformanceRatingInfo()\"  novalidate=\"novalidate\">\r\n                                                <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                        <div class=\"col-md-6 adn-form__group\" *ngFor=\"let performance of performanceDiary ;let j=index\">\r\n                                                                <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                                    <input type=\"text\" name=\"performanceDiary_id\" [(ngModel)]=\"performance._id\" #performanceDiary_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                                    <input type=\"text\" name=\"performanceDiary_empid\" [(ngModel)]=\"performance.emp_id\" #performanceDiary_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                                    <input type=\"text\" name=\"performanceDiarystatus\" [(ngModel)]=\"performance.completed\" #performanceDiarystatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                                </div>\r\n                                                                <div class=\"form-group m-form__group\">\r\n                                                                    <label for=\"performanceRating1\">Performance Rating FY {{performance.performanceRatingName}}\r\n                                                                    </label>\r\n                                                                    <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"performance.performanceRatingValue\" #performanceRating1=\"ngModel\" id=\"performanceRating1\" name=\"performanceRating1\" placeholder=\"Enter performance rating\" type=\"text\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                                </div>\r\n                                                        </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" [ngClass]=\"{'active show':tabName=='payroll'}\" *ngIf=\"tabName=='payroll'\">\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_16_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_16_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fa-university\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Bank Details</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_16_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_16_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadBankDetails();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fbankDetails.valid && saveBankDetails()\" #fbankDetails=\"ngForm\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"bankDetails_id\" [(ngModel)]=\"bankDetails._id\" #bankDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"bankDetailsemp_id\" [(ngModel)]=\"bankDetails.emp_id\" #bankDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"bankName\">Bank Name\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.bankName\" #bankName=\"ngModel\" id=\"bankName\" name=\"bankName\"\r\n                                                                placeholder=\"Enter bank name\" type=\"text\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !bankName.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"accountName\">Account Name\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.accountName\" #accountName=\"ngModel\" id=\"accountName\"\r\n                                                                name=\"accountName\" placeholder=\"Enter Account Name\" type=\"text\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !accountName.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"accountNumber\">Account Number\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" maxlength=\"15\" [(ngModel)]=\"bankDetails.accountNumber\" #accountNumber=\"ngModel\"\r\n                                                                id=\"accountNumber\" name=\"accountNumber\" placeholder=\"Enter account number\"\r\n                                                                type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"currency\">Currency\r\n                                                            </label>\r\n                                                            <ng-select name=\"currency\" [items]=\"currencyArrData\" bindLabel=\"text\" bindValue=\"id\" [clearable]=\"false\" placeholder=\"Select currency\"\r\n                                                                [(ngModel)]=\"bankDetails.currency\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            </ng-select>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{bankDetails._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_17_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_17_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fa-money\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Salary Details (Monthly)</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_17_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_17_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-success\" type=\"button\" (click)=\"isHikeSalary(fsalaryDetails);\">\r\n                                                    <i class=\"fa fa-arrow-up\"></i> Hike </button>\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadSalaryInfoTabData();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fsalaryDetails.valid && saveSalaryDetails()\" #fsalaryDetails=\"ngForm\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"salaryDetails_id\" [(ngModel)]=\"salaryDetails._id\" #salaryDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"salaryDetailsemp_id\" [(ngModel)]=\"salaryDetails.emp_id\" #salaryDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"salaryDetailsstatus\" [(ngModel)]=\"salaryDetails.status\" #salaryDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"basic\">Basic\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.basic\" #basic=\"ngModel\" id=\"basic\" name=\"basic\"\r\n                                                                placeholder=\"Enter basic\" type=\"text\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !basic.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"houseRent\">House Rent Allowance (HRA)\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.hra\" #houseRent=\"ngModel\" id=\"houseRent\" name=\"houseRent\"\r\n                                                                placeholder=\"Enter house rent allowance (HRA)\" type=\"text\" required\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !houseRent.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"conveyanceAllowance\">Conveyance Allowance\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.conveyanceAllowance\" #conveyanceAllowance=\"ngModel\"\r\n                                                                id=\"conveyanceAllowance\" name=\"conveyanceAllowance\" placeholder=\"Enter conveyance allowance\"\r\n                                                                type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"leaveFareAssistance \">Leave Fare Assistance (LFA)\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lfa\" #leaveFareAssistance=\"ngModel\" id=\"leaveFareAssistance\"\r\n                                                                name=\"leaveFareAssistance\" placeholder=\"Enter leave fare assistance (LFA)\"\r\n                                                                type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"medicalAllowance\">Medical Allowance\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.medicalAllowance\" #medicalAllowance=\"ngModel\"\r\n                                                                id=\"medicalAllowance\" name=\"medicalAllowance\" placeholder=\"Enter medical allowance\"\r\n                                                                type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"specialAllowance\">Special Allowance\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.specialAllowance\" #specialAllowance=\"ngModel\"\r\n                                                                id=\"specialAllowance\" name=\"specialAllowance\" placeholder=\"Enter special allowance\"\r\n                                                                type=\"text\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !specialAllowance.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"otherAllowance\">Other Allowance (If Any)\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.otherAllowance\" #otherAllowance=\"ngModel\" id=\"otherAllowance\"\r\n                                                                name=\"otherAllowance\" placeholder=\"Enter other allowance (if any)\"\r\n                                                                type=\"text\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"lunchAllowance\">Lunch Allowance\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lunchAllowance\" #lunchAllowance=\"ngModel\" id=\"lunchAllowance\"\r\n                                                                name=\"lunchAllowance\" placeholder=\"Enter lunch allowance\" type=\"text\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"mobileAllowance\">Mobile Allowance\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.mobileAllowance\" #mobileAllowance=\"ngModel\" id=\"mobileAllowance\"\r\n                                                                name=\"mobileAllowance\" placeholder=\"Enter mobile allowance\" type=\"text\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"grossSalary\">Gross Salary\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.grossSalary\" #grossSalary=\"ngModel\" id=\"grossSalary\"\r\n                                                                name=\"grossSalary\" placeholder=\"Enter gross salary\" type=\"text\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !grossSalary.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\">totalEarnings\">Total Earnings\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.totalEarnings\" #totalEarnings=\"ngModel\" id=\"totalEarnings\"\r\n                                                                name=\"totalEarnings\" placeholder=\"Enter total earnings\" type=\"text\"\r\n                                                                required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !totalEarnings.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"festivalAllowance\">Festival Allowance\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"festivalAllowance\" [items]=\"festivalAllowanceData\" bindLabel=\"text\" bindValue=\"id\"\r\n                                                                placeholder=\"Select Festival Allowance\" [(ngModel)]=\"salaryDetails.festivalAllowance\"\r\n                                                                [clearable]=\"false\" #festivalAllowance=\"ngModel\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !festivalAllowance.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"providentFund\">Provident Fund Membership\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"providentFund\" [items]=\"providentFundMemberShipData\" bindLabel=\"text\" bindValue=\"id\"\r\n                                                                placeholder=\"Select Provident Fund Membership\" [(ngModel)]=\"salaryDetails.providentFundMembership\"\r\n                                                                [clearable]=\"false\" #providentFund=\"ngModel\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !providentFund.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"gLifeInsurance\">Group Life Insurance\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"gLifeInsurance\" [items]=\"groupLifeInsuranceData\" bindLabel=\"text\" bindValue=\"id\"\r\n                                                                placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.groupLifeInsurance\"\r\n                                                                [clearable]=\"false\" #gLifeInsurance=\"ngModel\" required [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !gLifeInsurance.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"hospitalizationScheme\">Hospitalization Scheme\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"hospitalizationScheme\" [items]=\"hospitalizationSchemeData\" bindLabel=\"text\"\r\n                                                                bindValue=\"id\" placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.hospitalizationScheme\"\r\n                                                                [clearable]=\"false\" #hospitalizationScheme=\"ngModel\" required\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !hospitalizationScheme.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{salaryDetails._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                                <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                    <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_19_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_19_body\"\r\n                                        aria-expanded=\"false\">\r\n                                        <span class=\"m-accordion__item-icon\">\r\n                                            <i class=\"fa fas fa-car\"></i>\r\n                                        </span>\r\n                                        <span class=\"m-accordion__item-title\">Car Details</span>\r\n                                        <span class=\"m-accordion__item-mode\"></span>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_19_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_19_head\"\r\n                                        data-parent=\"#m_accordion_5\">\r\n                                        <div class=\"row\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                            <div class=\"col-md-10\"> </div>\r\n                                            <div class=\"col-md-2 accordian-refresh\">\r\n                                                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCarDetails();showSpin()\">\r\n                                                    <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i>\r\n                                                </button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-accordion__item-content\">\r\n                                            <form class=\"m-form m-form--fit m-form--label-align-right\" #fcarDetails=\"ngForm\" (ngSubmit)=\"fcarDetails.valid && saveCarDetails()\"\r\n                                                novalidate=\"novalidate\">\r\n                                                <h5 class=\"m--font-success\">Company Car</h5>\r\n                                                <div class=\"row adn-form__group\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"companyCarDetailsemp_id\" [(ngModel)]=\"carDetails.emp_id\" #companyCarDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <input type=\"text\" name=\"companyCarDetailssstatus\" [(ngModel)]=\"carDetails.status\" #companyCarDetailssstatus=\"ngModel\" class=\"form-control m-input m-input--air\"\r\n                                                            />\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"registrationNumber\">Registration number\r\n                                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyRegistrationNumber\" #companyRegistrationNumber=\"ngModel\" name=\"companyRegistrationNumber\"\r\n                                                                placeholder=\"Enter Registration number\" id=\"companyRegistrationNumber\"\r\n                                                                maxlength=\"15\" class=\"form-control m-input m-input--air\" required\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fcarDetails.submitted && !companyRegistrationNumber.valid \">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"effectiveDate\">Effective Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"effectiveDate\" [(ngModel)]=\"carDetails.companyEffectiveDate\"\r\n                                                                #ed=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"expiryDate1\">Expiry Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"expiryDate1\" [(ngModel)]=\"carDetails.companyExpiryDate\"\r\n                                                                #companyExpiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"fa\">Fuel Allowance\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyFuelAllowance\" #fa=\"ngModel\" name=\"fa\" placeholder=\"Enter fuel allowance\"\r\n                                                                id=\"fa\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"companyMaintenanceAllowance\">Maintenance Allowance\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyMaintenanceAllowance\" #companyMaintenanceAllowance=\"ngModel\" name=\"companyMaintenanceAllowance\"\r\n                                                                placeholder=\"Enter maintenance allowance\" id=\"maintenanceAllowance\"\r\n                                                                class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"companyDriverAllowance\">Driver Allowance\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyDriverAllowance\" #companyDriverAllowance=\"ngModel\" name=\"companyDriverAllowance\"\r\n                                                                placeholder=\"Enter driver allowance\" id=\"driverAllowance\" class=\"form-control m-input m-input--air\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"companyGrossPay\">Gross Pay\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyGrossPay\" #companyGrossPay=\"ngModel\" name=\"companyGrossPay\" placeholder=\"Enter gross pay\"\r\n                                                                class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"form-group m-form__group m--margin-top-5\">\r\n                                                </div>\r\n                                                <h5 class=\"m--font-success .adn-form-title\">Personal Car</h5>\r\n\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"privateRegistrationNumber\">Registration number\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.privateRegistrationNumber\" #privateRegistrationNumber=\"ngModel\" name=\"privateRegistrationNumber\"\r\n                                                                placeholder=\"Enter registration number\" id=\"regno\" maxlength=\"15\"\r\n                                                                class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"privateEffectiveDate\">Effective Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"privateEffectiveDate\" [(ngModel)]=\"carDetails.privateEffectiveDate\"\r\n                                                                #privateEffectiveDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"privateEffectiveDate\">Expiry Date</label>\r\n                                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" (focus)=\"d23.open()\" name=\"privateExpiryDate\"\r\n                                                                [(ngModel)]=\"carDetails.privateExpiryDate\" #privateExpiryDate=\"ngModel\"\r\n                                                                bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-6 adn-form__group\">\r\n                                                        <div class=\"form-group m-form__group\">\r\n                                                            <label for=\"privateCarUsageAllowance\">Usage Allowance\r\n                                                            </label>\r\n                                                            <input type=\"text\" [(ngModel)]=\"carDetails.privateCarUsageAllowance\" #privateCarUsageAllowance=\"ngModel\" name=\"privateCarUsageAllowance\"\r\n                                                                placeholder=\"Enter fuel allowance\" id=\"fa\" class=\"form-control m-input m-input--air\"\r\n                                                                [disabled]=\"profileProcess.isHrSubmitted && profileProcess.isSupervisorApproved\">\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isHrSubmitted || profileProcess.isSupervisorSendBack\">\r\n                                                    <button type=\"submit\" class=\"btn btn-success\">{{carDetails._id ? 'Update':'Save'}}</button>\r\n                                                </div>\r\n                                            </form>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/my/profile-edit/profile-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_service__ = __webpack_require__("./src/app/theme/pages/default/my/my.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__ = __webpack_require__("./node_modules/ngx-uploader/dist/ngx-uploader.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__ = __webpack_require__("./src/app/base/_interface/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ProfileEditComponent = (function () {
    function ProfileEditComponent(platformId, meta, title, _route, _router, _authService, _commonService, _myService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this._myService = _myService;
        this.currentDate = new Date();
        //Local Variable for Profile 
        this.personalInfo = {};
        this.address = {};
        this.documents = {};
        this.academicInfo = [];
        this.joiningDetails = {};
        this.certificationsandTrainingInfo = [];
        this.previousEmploymentDetails = [];
        this.familyInfo = [];
        this.officeInfo = {};
        this.positionDetails = {};
        this.performanceDiary = [];
        this.bankDetails = {};
        this.salaryDetails = {};
        this.carDetails = {};
        this.exampleData = [];
        this.tabName = "personal";
        this.params = "";
        //Personal Info Tav Dropdown Variable
        this.bloodGropData = [];
        this.religionData = [];
        this.maritialStatusData = [];
        this.nationalityData = [];
        // Address Tab Dropdown Variable
        this.currentAddressDistrictData = [];
        this.currentAddressThanaData = [];
        this.currentAddressDivisionData = [];
        this.permanentAddressDistrictData = [];
        this.permanentAddressThanaData = [];
        this.permanentAddressDivisionData = [];
        //Academic Tab Dropdown Variable
        this.resultsData = [];
        this.levelOfEducationData = [];
        this.examDegreeTitleData = [];
        //Postion Details Tab Dropdown Variable 
        this.companiesData = [];
        this.divisionData = [];
        this.deparmentData = [];
        this.verticalData = [];
        this.subverticalData = [];
        this.gradeData = [];
        this.employmentTypeData = [];
        this.employmentStatusData = [];
        this.supervisorData = [];
        this.hrspocData = [];
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.designationData = [];
        //rolesData: any = [];
        this.managementTypeData = [];
        //Bank Details Tab Dropdown Variable
        this.currencyArrData = [];
        //Salary Details Tab Dropdown Variable
        this.providentFundMemberShipData = [];
        this.groupLifeInsuranceData = [];
        this.festivalAllowanceData = [];
        this.hospitalizationSchemeData = [];
        this.relationData = [];
        this.countryData = [];
        this.isSpin = false;
        this.profileProcess = {
            isEmployeeSubmitted: false,
            isHrSubmitted: false,
            isHrSendBack: false,
            isSupervisorApproved: false,
            isSupervisorSendBack: false
        };
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.uploadInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__["b" /* humanizeBytes */];
        this.currentDate = new Date();
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) {
            if (params['tabName']) {
                _this.tabName = params['tabName'];
            }
            if (params['id']) {
                _this.param_emp_id = params['id'];
            }
            _this._authService.validateToken().subscribe(function (res) {
                //Do not uncomment if profile-edit
                //this._currentEmpId = this._authService.currentUserData._id;
                _this.initData();
            });
        });
    };
    ProfileEditComponent.prototype.initData = function () {
        this.loadProcessInfoDetails();
        switch (this.tabName) {
            case "personal":
                this.loadPersonal();
                break;
            case "documents":
                this.loadDocuments();
                break;
            case "education":
                this.loadEducation();
                break;
            case "employment":
                this.loadEmploymentDetails();
                break;
            case "family":
                this.loadFamilyInfoTabData();
                break;
            case "office":
                this.loadOfficeDetails();
                break;
            case "payroll":
                this.loadPayrollDetails();
                break;
            default:
                this.loadPersonal();
        }
    };
    ProfileEditComponent.prototype.onUploadOutput = function (output, fileName) {
        var atCurrentAuthData = this._authService.currentAuthData;
        if (output.type === 'allAddedToQueue') {
            // uncomment this if you want to auto upload files when added
            var event_1 = {
                fieldName: 'profileDocuments',
                type: 'uploadAll',
                url: __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].api_base.apiBase + '/' + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].api_base.apiPath + '/upload/document',
                headers: {
                    'access-token': atCurrentAuthData.accessToken,
                    'client': atCurrentAuthData.client,
                    'expiry': atCurrentAuthData.expiry,
                    'token-type': atCurrentAuthData.tokenType,
                    'uid': atCurrentAuthData.uid
                },
                method: 'POST',
            };
            this.uploadInput.emit(event_1);
        }
        else if (output.type === 'done') {
            if (output.file.responseStatus == 200) {
                switch (fileName) {
                    case 'smartCard':
                        this.documents.nationalIdSmartCardDocURL = output.file.response.key || '';
                        break;
                    case 'smartOldCard':
                        this.documents.nationalIDOldFormatDocURL = output.file.response.key || '';
                        break;
                    case 'birth':
                        this.documents.birthRegistrationNumberDocURL = output.file.response.key || '';
                        break;
                    case 'passport':
                        this.documents.passportNumberDocURL = output.file.response.key || '';
                        break;
                    default:
                        break;
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Error!", "Error on Upload " + fileName, "error");
            }
        }
    };
    ProfileEditComponent.prototype.showSpin = function () {
        var that = this;
        that.isSpin = true;
        setTimeout(function () {
            that.isSpin = false;
        }, 500);
    };
    ProfileEditComponent.prototype.showDocumentImagePopUp = function (filedName) {
        switch (filedName) {
            case 'smartCard':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.nationalIdSmartCardDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.nationalIdSmartCardDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'smartOldCard':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.nationalIDOldFormatDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.nationalIDOldFormatDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'birth':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.birthRegistrationNumberDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.birthRegistrationNumberDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'passport':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.passportNumberDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.passportNumberDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
        }
    };
    ProfileEditComponent.prototype.deleteDocImage = function (imagePath, imageTypeName) {
        var _this = this;
        this._myService.deleteImage({ key: imagePath }).subscribe(function (res) {
            if (res.ok) {
                _this.documents[imageTypeName] = null;
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
            }
        }, function (error) {
        });
        ;
    };
    ProfileEditComponent.prototype.showDeleteMessage = function () {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Error!", "Image not found", "error");
    };
    ProfileEditComponent.prototype.deleteDocumentImage = function (fileName) {
        switch (fileName) {
            case 'smartCard':
                var isdeleted = this.documents.nationalIdSmartCardDocURL ? this.deleteDocImage(this.documents.nationalIdSmartCardDocURL, 'nationalIdSmartCardDocURL') : this.showDeleteMessage();
                break;
            case 'smartOldCard':
                var isdeletedOld = this.documents.nationalIDOldFormatDocURL ? this.deleteDocImage(this.documents.nationalIDOldFormatDocURL, 'nationalIDOldFormatDocURL') : this.showDeleteMessage();
                break;
            case 'birth':
                var isdeletedbirth = this.documents.birthRegistrationNumberDocURL ? this.deleteDocImage(this.documents.birthRegistrationNumberDocURL, 'birthRegistrationNumberDocURL') : this.showDeleteMessage();
                break;
            case 'passport':
                var isdeletedpassport = this.documents.passportNumberDocURL ? this.deleteDocImage(this.documents.passportNumberDocURL, 'passportNumberDocURL') : this.showDeleteMessage();
                break;
            default:
                break;
        }
    };
    ProfileEditComponent.prototype.setPermentAddress = function () {
        if (this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = this.address.currentAddressLine1;
            this.address.permanentAddressLine2 = this.address.currentAddressLine2;
            this.address.permanentAddressDistrict_id = this.address.currentAddressDistrict_id;
            this.address.permanentAddressDivision_id = this.address.currentAddressDivision_id;
            this.address.permanentAddressThana_id = this.address.currentAddressThana_id;
            this.address.permanentAddressPostCode = this.address.currentAddressPostCode;
            // this.loadpermanentAddressDistrictData(this.address.currentAddressDivision_id,"init");
            // this.loadpermanentAddressThanaData(this.address.currentAddressDistrict_id,"init");
        }
    };
    ProfileEditComponent.prototype.resetPermentAddress = function () {
        if (!this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = null;
            this.address.permanentAddressLine2 = null;
            this.address.permanentAddressDistrict_id = null;
            this.address.permanentAddressDivision_id = null;
            this.address.permanentAddressThana_id = null;
            this.address.permanentAddressPostCode = null;
            this.permanentAddressDistrictData = [];
            this.permanentAddressThanaData = [];
        }
    };
    ProfileEditComponent.prototype.loadProcessInfoDetails = function () {
        var _this = this;
        this._myService.getProfileProcessInfo(this.param_emp_id)
            .subscribe(function (data) {
            if (data.ok) {
                _this.profileProcess = data.json();
            }
        }, function (error) {
        });
    };
    //save Personal Info
    ProfileEditComponent.prototype.saveProfileStatus = function (status) {
        var _this = this;
        this.profileProcess["hrStatus"] = status;
        this._myService.saveProfileStatus(this.profileProcess)
            .subscribe(function (data) {
            _this.profileProcess = data.json() || {};
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                type: 'success',
                title: 'Submit!',
                titleText: "Profile submitted successfully.",
            });
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadTabStatus = function (status) {
        var _this = this;
        this._commonService.getTabStatus(this.param_emp_id)
            .subscribe(function (data) {
            var tabData = data.json();
            if (tabData.isPersonalInfo
                && tabData.isAddress
                && tabData.isDocuments
                && tabData.isAcademicInfo
                && tabData.isCertificate
                && tabData.isEmployment
                && tabData.isFamilyInfo
                && tabData.isOffice
                && tabData.isBankInfo
                && tabData.isSalaryInfo
                && tabData.isCarInfo) {
                _this.saveProfileStatus(status);
            }
            else
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'error', title: 'Error!', titleText: "Please fill personal info and office info.", });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'error', title: 'Error!', titleText: error.json().error.message, });
        });
    };
    //save Personal Info
    ProfileEditComponent.prototype.submitProfile = function (status) {
        this.loadTabStatus(status);
    };
    //save Personal Info
    ProfileEditComponent.prototype.savePersonalInfo = function () {
        var _this = this;
        mApp.block('#m_accordion_5_item_1_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this._myService.savePersonalInfo(this.personalInfo)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.personalInfo = data.json() || {};
            _this.personalInfo.dob = _this.personalInfo.dob ? new Date(_this.personalInfo.dob) : _this.personalInfo.dob;
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    ProfileEditComponent.prototype.checkEmailExists = function (_element) {
        if (_element.valid) {
            this._commonService.checkEmailExists(_element.value)
                .subscribe(function (data) {
                if (data.json())
                    _element.control.setErrors({ "emailExists": true });
            }, function (error) {
                _element.control.setErrors(null);
            });
        }
    };
    //save Address Info
    ProfileEditComponent.prototype.saveAddressInfo = function () {
        var _this = this;
        if (this.address.isSameAsCurrent) {
            this.setPermentAddress();
        }
        this.address.emp_id = this.address.emp_id != null ? this.address.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveAddressInfo(this.address)
            .subscribe(function (data) {
            // swal({type: 'success',title: 'Saved',text:'Successfully',showConfirmButton: false,timer: 800})
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.address = data.json() || {};
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.saveDocumentsInfo = function () {
        var _this = this;
        this.documents.emp_id = this.documents.emp_id != null ? this.documents.emp_id : (this._currentEmpId || this.param_emp_id);
        mApp.block('#m_accordion_5_item_9_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this._myService.saveDocumentsInfo(this.documents)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_9_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.documents = data.json() || {};
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_9_body');
        });
    };
    //save Address Info
    ProfileEditComponent.prototype.saveAcademicInfo = function (objAcademicInfo, index) {
        var _this = this;
        mApp.block('#m_accordion_5_item_10_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        objAcademicInfo.emp_id = objAcademicInfo.emp_id != null ? objAcademicInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveAcademicInfo(objAcademicInfo)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_10_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.academicInfo[index] = data.json();
            if (_this.academicInfo[index].levelOfEducation_id) {
                _this.loadExamDegreeTitle(_this.academicInfo[index].levelOfEducation_id, index, "init");
            }
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_10_body');
        });
    };
    //save CertificationAndTraningInfo Info
    ProfileEditComponent.prototype.saveCertificationandTrainingInfo = function (objCertification, index) {
        var _this = this;
        objCertification.emp_id = objCertification.emp_id != null ? objCertification.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveCertificationInfo(objCertification)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.certificationsandTrainingInfo[index] = data.json();
        }, function (error) {
        });
    };
    //save EmploymentDetils Info
    ProfileEditComponent.prototype.savePreviousEmploymentDetails = function (objPerviousEmployment, index) {
        var _this = this;
        objPerviousEmployment.emp_id = objPerviousEmployment.emp_id != null ? objPerviousEmployment.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.savePreviousEmploymentInfo(objPerviousEmployment)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.previousEmploymentDetails[index] = data.json();
            _this.previousEmploymentDetails[index].employmentPeriodFrom = _this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(_this.previousEmploymentDetails[index].employmentPeriodFrom) : _this.previousEmploymentDetails[index].employmentPeriodFrom;
            _this.previousEmploymentDetails[index].employmentPeriodTo = _this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(_this.previousEmploymentDetails[index].employmentPeriodTo) : _this.previousEmploymentDetails[index].employmentPeriodTo;
        }, function (error) {
        });
    };
    //save Family Info
    ProfileEditComponent.prototype.saveFamilyInfo = function (objFamily, index) {
        var _this = this;
        objFamily.emp_id = objFamily.emp_id != null ? objFamily.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveFamilyInfo(objFamily)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.familyInfo[index] = data.json();
            _this.familyInfo[index].dateOfBirth = _this.familyInfo[index].dateOfBirth ? new Date(_this.familyInfo[index].dateOfBirth) : _this.familyInfo[index].dateOfBirth;
        }, function (error) {
        });
    };
    //save Office Info
    ProfileEditComponent.prototype.saveOfficeInfo = function () {
        var _this = this;
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveOfficeInfo(this.officeInfo)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.officeInfo = data.json();
            _this.officeInfo.dateOfJoining = _this.officeInfo.dateOfJoining ? new Date(_this.officeInfo.dateOfJoining) : _this.officeInfo.dateOfJoining;
            _this.officeInfo.dateOfConfirmation = _this.officeInfo.dateOfConfirmation ? new Date(_this.officeInfo.dateOfConfirmation) : _this.officeInfo.dateOfConfirmation;
            _this.officeInfo.workPermitEffectiveDate = _this.officeInfo.workPermitEffectiveDate ? new Date(_this.officeInfo.workPermitEffectiveDate) : _this.officeInfo.workPermitEffectiveDate;
            _this.officeInfo.workPermitExpiryDate = _this.officeInfo.workPermitExpiryDate ? new Date(_this.officeInfo.workPermitExpiryDate) : _this.officeInfo.workPermitExpiryDate;
        }, function (error) {
        });
    };
    //save Office Info
    ProfileEditComponent.prototype.savePositionInfo = function () {
        var _this = this;
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.savePositionInfo(this.positionDetails)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.positionDetails = data.json();
        }, function (error) {
        });
    };
    //save Bank Info
    ProfileEditComponent.prototype.saveBankDetails = function () {
        var _this = this;
        mApp.block('#m_accordion_5_item_16_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this.bankDetails.emp_id = this.bankDetails.emp_id != null ? this.bankDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveBankDetails(this.bankDetails)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_16_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.bankDetails = data.json();
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_16_body');
        });
    };
    //save Salary Info
    ProfileEditComponent.prototype.saveSalaryDetails = function () {
        var _this = this;
        this.salaryDetails.emp_id = this.salaryDetails.emp_id != null ? this.salaryDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveSalaryDetails(this.salaryDetails)
            .subscribe(function (data) {
            // mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.salaryDetails = data.json();
        }, function (error) {
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    //save Car Details
    ProfileEditComponent.prototype.saveCarDetails = function () {
        var _this = this;
        this.carDetails.emp_id = this.carDetails.emp_id != null ? this.carDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveCarDetails(this.carDetails)
            .subscribe(function (data) {
            //mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.carDetails = data.json();
            _this.carDetails.companyEffectiveDate = _this.carDetails.companyEffectiveDate ? new Date(_this.carDetails.companyEffectiveDate) : _this.carDetails.companyEffectiveDate;
            _this.carDetails.companyExpiryDate = _this.carDetails.companyExpiryDate ? new Date(_this.carDetails.companyExpiryDate) : _this.carDetails.companyExpiryDate;
            _this.carDetails.privateEffectiveDate = _this.carDetails.privateEffectiveDate ? new Date(_this.carDetails.privateEffectiveDate) : _this.carDetails.privateEffectiveDate;
            _this.carDetails.privateExpiryDate = _this.carDetails.privateExpiryDate ? new Date(_this.carDetails.privateExpiryDate) : _this.carDetails.privateExpiryDate;
        }, function (error) {
            _this.carDetails = {};
            ;
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    ProfileEditComponent.prototype.savePerformanceRatingInfo = function () {
        var _this = this;
        this._myService.savePerformanceRatingInfo(this.performanceDiary)
            .subscribe(function (data) {
            //mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.performanceDiary = data.json();
        }, function (error) {
            _this.performanceDiary = [];
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    //save Seperation Info
    ProfileEditComponent.prototype.saveSeperationInfo = function () {
        // this._authService.saveSeperationInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    };
    //delete Academic Info
    ProfileEditComponent.prototype.deleteAcademicInfo = function (academicInfo_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteAcademicInfo(academicInfo_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        _this.removeHtmlContain("academicInfo", academicInfo_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Previous Employment
    ProfileEditComponent.prototype.deletePreviousEmployment = function (previousEmployment_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deletePreviousEmploymentInfo(previousEmployment_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("employment", previousEmployment_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Family Info
    ProfileEditComponent.prototype.deleteFamilyInfo = function (family_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteFamilyInfo(family_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("family", family_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Family Info
    ProfileEditComponent.prototype.deleteCertificationInfo = function (certification_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteCertificationInfo(certification_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("certification", certification_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    ProfileEditComponent.prototype.showHideWaitingCircle = function (_id, isHide) {
        if (!isHide)
            mApp.block(_id, {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
            });
        else
            mApp.unblock(_id);
    };
    ProfileEditComponent.prototype.saveSuccessMesssage = function () {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
    };
    //Add New Html on Click of Add Button 
    ProfileEditComponent.prototype.addNewHtmlContain = function (subTabName) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["a" /* AcademicInfo */]());
                break;
            case "certification":
                this.certificationsandTrainingInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["b" /* CertificationInfo */]());
                break;
            case "employment":
                this.previousEmploymentDetails.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["d" /* PreviousEmploymentInfo */]());
                break;
            case "family":
                this.familyInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["c" /* FamilyInfo */]());
                break;
        }
    };
    //Remove Html on After Delete 
    ProfileEditComponent.prototype.removeHtmlContain = function (subTabName, _id) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo = this.academicInfo.filter(function (x) { return x._id != _id; });
                if (this.academicInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "certification":
                this.certificationsandTrainingInfo = this.certificationsandTrainingInfo.filter(function (x) { return x._id != _id; });
                if (this.certificationsandTrainingInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "employment":
                this.previousEmploymentDetails = this.previousEmploymentDetails.filter(function (x) { return x._id != _id; });
                if (this.previousEmploymentDetails.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "family":
                this.familyInfo = this.familyInfo.filter(function (x) { return x._id != _id; });
                if (this.familyInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
        }
    };
    //Check wheather HTML is Added or Not
    ProfileEditComponent.prototype.isAdded = function (subTabName) {
        switch (subTabName) {
            case "academicInfo":
                if (this.academicInfo.filter(function (x) { return x._id == null || x._id == undefined && x.isCompleted == true; }).length == 0) {
                    return false;
                }
                return true;
            case "certification":
                if (this.certificationsandTrainingInfo.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
            case "employment":
                if (this.previousEmploymentDetails.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
            case "family":
                if (this.familyInfo.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
        }
    };
    //Load Personal Info Tab Data;
    ProfileEditComponent.prototype.loadPersonalInfoTabData = function () {
        var _this = this;
        //Init Data Personal Info Tab
        this.bloodGropData = this._commonService.getBloodGroup();
        this.religionData = this._commonService.getReligion();
        this.maritialStatusData = this._commonService.getMartialStatus();
        this.nationalityData = this._commonService.getNationality();
        this._myService.getPersonalInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.personalInfo = data.json() || {};
            _this.personalInfo.dob = _this.personalInfo.dob ? new Date(_this.personalInfo.dob) : _this.personalInfo.dob;
        }, function (error) {
        });
    };
    //Load Address Tab Data.
    ProfileEditComponent.prototype.loadAddressTabData = function () {
        var _this = this;
        this.loadcurrentDivison();
        this.loadpermanentDivison();
        this._myService.getAddressInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.address = data.json() || {};
            if (data.json()) {
                _this.loadcurrentAddressDistrictData(_this.address.currentAddressDivision_id, 'init');
                _this.loadcurrentAddressThanaData(_this.address.currentAddressDistrict_id);
                _this.loadpermanentAddressDistrictData(_this.address.permanentAddressDivision_id, 'init');
                _this.loadpermanentAddressThanaData(_this.address.permanentAddressDistrict_id, "init");
            }
            else {
                _this.address.isSameAsCurrent = false;
            }
        }, function (error) {
        });
    };
    //Load Permanent Division Dropdown Data 
    ProfileEditComponent.prototype.loadpermanentDivison = function () {
        var _this = this;
        this._commonService.getlocation().subscribe(function (res) {
            if (res.ok) {
                _this.permanentAddressDistrictData = [];
                _this.permanentAddressThanaData = [];
                _this.permanentAddressDivisionData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Permanent District Dropdown Data 
    ProfileEditComponent.prototype.loadpermanentAddressDistrictData = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(division_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.permanentAddressDistrict_id = null;
                    _this.address.permanentAddressThana_id = null;
                    _this.permanentAddressThanaData = [];
                }
                _this.permanentAddressDistrictData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Permanent Thana Dropdown Data 
    ProfileEditComponent.prototype.loadpermanentAddressThanaData = function (district_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(district_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.permanentAddressThana_id = null;
                }
                _this.permanentAddressThanaData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current Division Dropdown Data 
    ProfileEditComponent.prototype.loadcurrentDivison = function () {
        var _this = this;
        this._commonService.getlocation().subscribe(function (res) {
            if (res.ok) {
                _this.currentAddressDistrictData = [];
                _this.currentAddressThanaData = [];
                _this.currentAddressDivisionData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current District Dropdown Data 
    ProfileEditComponent.prototype.loadcurrentAddressDistrictData = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(division_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.currentAddressDistrict_id = null;
                    _this.address.currentAddressThana_id = null;
                    _this.currentAddressThanaData = [];
                }
                _this.currentAddressDistrictData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current Thana Dropdown Data
    ProfileEditComponent.prototype.loadcurrentAddressThanaData = function (district_id) {
        var _this = this;
        this._commonService.getlocation(district_id).subscribe(function (res) {
            if (res.ok) {
                _this.currentAddressThanaData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Person Page Data 
    ProfileEditComponent.prototype.loadPersonal = function () {
        this.loadPersonalInfoTabData();
        this.loadAddressTabData();
    };
    //Load Documents Page Data 
    ProfileEditComponent.prototype.loadDocuments = function () {
        var _this = this;
        this._myService.getDocumentsInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.documents = data.json() || {};
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadlevelOfEducation = function () {
        var _this = this;
        this._commonService.getEducation().subscribe(function (res) {
            if (res.ok) {
                _this.levelOfEducationData = res.json();
            }
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadExamDegreeTitle = function (parent_id, index, onLoad) {
        var _this = this;
        this._commonService.getEducation(parent_id).subscribe(function (res) {
            if (res.ok) {
                _this.academicInfo[index].examDegreeTitleData = res.json();
                if (!onLoad) {
                    _this.academicInfo[index].examDegreeTitle_id = null;
                }
            }
        }, function (error) {
        });
    };
    //Load Academic Info Tab Data
    ProfileEditComponent.prototype.loadAcademicInfoTabData = function () {
        var _this = this;
        this.resultsData = this._commonService.getResults();
        //  this.levelOfEducationData = this._commonService.getLevelOfEducation();
        //  this.examDegreeTitleData = this._commonService.getExamDegreeTitle();
        this.loadlevelOfEducation();
        this._myService.getAcademicInfo(this.param_emp_id)
            .subscribe(function (res) {
            _this.academicInfo = res.json().data;
            if (_this.academicInfo.length == 0) {
                _this.academicInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["a" /* AcademicInfo */]());
            }
            else {
                for (var i = 0; i < _this.academicInfo.length; i++) {
                    _this.loadExamDegreeTitle(_this.academicInfo[i].levelOfEducation_id, i, "init");
                }
            }
        }, function (error) {
            _this.academicInfo = [];
        });
    };
    //Load Certification & Traning Tab Data
    ProfileEditComponent.prototype.loadCertificateAndTraningInfoTabData = function () {
        var _this = this;
        this._myService.getCertificationInfo(this.param_emp_id)
            .subscribe(function (res) {
            _this.certificationsandTrainingInfo = res.json().data;
            if (_this.certificationsandTrainingInfo.length == 0) {
                _this.certificationsandTrainingInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["b" /* CertificationInfo */]());
            }
        }, function (error) {
        });
    };
    //Load Education Page Data
    ProfileEditComponent.prototype.loadEducation = function () {
        this.loadAcademicInfoTabData();
        this.loadCertificateAndTraningInfoTabData();
    };
    ProfileEditComponent.prototype.loadEmploymentDetails = function () {
        var _this = this;
        this._myService.getPreviousEmploymentInfo(this.param_emp_id)
            .subscribe(function (res) {
            _this.previousEmploymentDetails = res.json().data;
            if (_this.previousEmploymentDetails.length == 0) {
                _this.previousEmploymentDetails.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["d" /* PreviousEmploymentInfo */]());
            }
            else {
                for (var index = 0; index < _this.previousEmploymentDetails.length; index++) {
                    _this.previousEmploymentDetails[index].employmentPeriodFrom = _this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(_this.previousEmploymentDetails[index].employmentPeriodFrom) : null;
                    _this.previousEmploymentDetails[index].employmentPeriodTo = _this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(_this.previousEmploymentDetails[index].employmentPeriodTo) : null;
                }
            }
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadRelation = function () {
        var _this = this;
        this._commonService.getRelation()
            .subscribe(function (res) {
            if (res.ok) {
                _this.relationData = res.json() || [];
            }
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadFamilyInfo = function () {
        var _this = this;
        this._myService.getFamilyInfo(this.param_emp_id)
            .subscribe(function (res) {
            _this.familyInfo = res.json().data;
            if (_this.familyInfo.length == 0) {
                _this.familyInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["c" /* FamilyInfo */]());
            }
            else {
                for (var index = 0; index < _this.familyInfo.length; index++) {
                    _this.familyInfo[index].dateOfBirth = _this.familyInfo[index].dateOfBirth ? new Date(_this.familyInfo[index].dateOfBirth) : null;
                }
            }
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadFamilyInfoTabData = function () {
        this.loadRelation();
        this.loadFamilyInfo();
    };
    ProfileEditComponent.prototype.loadOfficeInfoTabData = function () {
        var _this = this;
        this.countryData = this._commonService.getCountry();
        this._myService.getOfficeDetails(this.param_emp_id)
            .subscribe(function (data) {
            _this.officeInfo = data.json() || {};
            _this.officeInfo.dateOfJoining = _this.officeInfo.dateOfJoining ? new Date(_this.officeInfo.dateOfJoining) : _this.officeInfo.dateOfJoining;
            _this.officeInfo.dateOfConfirmation = _this.officeInfo.dateOfConfirmation ? new Date(_this.officeInfo.dateOfConfirmation) : _this.officeInfo.dateOfConfirmation;
            _this.officeInfo.workPermitEffectiveDate = _this.officeInfo.workPermitEffectiveDate ? new Date(_this.officeInfo.workPermitEffectiveDate) : _this.officeInfo.workPermitEffectiveDate;
            _this.officeInfo.workPermitExpiryDate = _this.officeInfo.workPermitExpiryDate ? new Date(_this.officeInfo.workPermitExpiryDate) : _this.officeInfo.workPermitExpiryDate;
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadJoiningDetailsTabData = function () {
        //this._authService.getOfficeDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json()|| {};
        // },
        // error => {
        // });
    };
    //load Roles Dropdown Data init
    // loadRoles() {
    //     this._commonService.getRole().subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.rolesData = res.json() || [];
    //             }
    //         },
    //         error => {
    //             this.rolesData = [];
    //         });
    // }
    //load Emoloyement Status Dropdown Data init
    ProfileEditComponent.prototype.loadEmploymentStatus = function () {
        var _this = this;
        this._commonService.getEmploymentStatus()
            .subscribe(function (res) {
            if (res.ok) {
                _this.employmentStatusData = res.json();
            }
        }, function (error) {
            _this.employmentStatusData = [];
        });
    };
    //load Division Dropdown Data init
    ProfileEditComponent.prototype.loadDivision = function () {
        var _this = this;
        this._commonService.getDivision()
            .subscribe(function (res) {
            if (res.ok) {
                _this.divisionData = res.json();
            }
        }, function (error) {
        });
    };
    //load Companies Dropdown Data init
    ProfileEditComponent.prototype.loadCompanies = function () {
        var _this = this;
        this._commonService.getComapnies()
            .subscribe(function (res) {
            if (res.ok) {
                _this.hrspocData = [];
                _this.buisnessHrHeadData = [];
                _this.groupHrHeadData = [];
                _this.companiesData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown
    ProfileEditComponent.prototype.loadManagementType = function (onLoad) {
        var _this = this;
        this._commonService.getManagementType()
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.employmentTypeData = [];
                    _this.gradeData = [];
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.managementType_id = null;
                    _this.positionDetails.employmentType_id = null;
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.managementTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load HR Spoce By company_id
    ProfileEditComponent.prototype.loadHRSpoce = function (company_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(company_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.buisnessHrHeadData = [];
                    _this.groupHrHeadData = [];
                    _this.positionDetails.hrspoc_id = null;
                    _this.positionDetails.businessHrHead_id = null;
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.hrspocData = res.json() || [];
            }
        }, function (error) {
            _this.hrspocData = [];
        });
    };
    //load Buisness Hr Head By hrspoc_id
    ProfileEditComponent.prototype.loadBuisnessHrHead = function (hrspoc_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(this.positionDetails.company_id, hrspoc_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.groupHrHeadData = [];
                    _this.positionDetails.businessHrHead_id = null;
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.buisnessHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //load Vertical Dropdown By department_id 
    ProfileEditComponent.prototype.loadVertical = function (department_id, onLoad) {
        var _this = this;
        this._commonService.getVertical(department_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.verticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load SubVertical Dropdown By vertical_id 
    ProfileEditComponent.prototype.loadSubVertical = function (vertical_id, onLoad) {
        var _this = this;
        this._commonService.getSubVertical(vertical_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.subverticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load Employment Type By managementType_id 
    ProfileEditComponent.prototype.loadEmploymentType = function (managementType_id, onLoad) {
        var _this = this;
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.gradeData = [];
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.employmentType_id = null;
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.employmentTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown By managementType_id  && employmentType_id
    ProfileEditComponent.prototype.loadGrade = function (managementType_id, employmentType_id, onLoad) {
        var _this = this;
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.gradeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Supervisor By grade_id
    ProfileEditComponent.prototype.loadSupervisor = function (grade_id, onLoad) {
        var _this = this;
        this._commonService.getSupervisor(grade_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.primarySupervisorEmp_id = null;
                }
                _this.supervisorData = res.json();
            }
        }, function (error) {
        });
    };
    //load Group Hr Head By hrspoc_id
    ProfileEditComponent.prototype.loadGroupHrHead = function (businessHrHead_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(this.positionDetails.company_id, businessHrHead_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.groupHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //load Designation By grade_id
    ProfileEditComponent.prototype.loadDesignation = function (grade_id, onLoad) {
        var _this = this;
        this._commonService.getDesignation(grade_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.designation_id = null;
                }
                _this.designationData = res.json();
            }
        }, function (error) {
        });
    };
    //load Department Dropdown By divisonId 
    ProfileEditComponent.prototype.loadDepartment = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getDepartment(division_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.department_id = null;
                    _this.positionDetails.vertical_id = null;
                    _this.positionDetails.subVertical_id = null;
                    _this.verticalData = [];
                    _this.subverticalData = [];
                }
                _this.deparmentData = res.json();
            }
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadPositionDetailsTabData = function () {
        var _this = this;
        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType('init');
        this.loadEmploymentStatus();
        //this.loadRoles();
        this._myService.getPositionDetails(this.param_emp_id)
            .subscribe(function (data) {
            _this.positionDetails = data.json() || {};
            if (data.json()) {
                _this.loadDepartment(_this.positionDetails.division_id, "init");
                _this.loadEmploymentType(_this.positionDetails.managementType_id, "init");
                _this.loadGrade(_this.positionDetails.managementType_id, _this.positionDetails.employmentType_id, "init");
                _this.loadHRSpoce(_this.positionDetails.company_id, "init");
                _this.loadBuisnessHrHead(_this.positionDetails.hrspoc_id, "init");
                _this.loadGroupHrHead(_this.positionDetails.businessHrHead_id, "init");
                _this.loadVertical(_this.positionDetails.department_id, "init");
                _this.loadSubVertical(_this.positionDetails.vertical_id, "init");
                _this.loadSupervisor(_this.positionDetails.grade_id, "init");
                _this.loadDesignation(_this.positionDetails.grade_id, "init");
            }
        }, function (error) {
            _this.positionDetails = {};
        });
    };
    ProfileEditComponent.prototype.loadPerformanceDairyTabData = function () {
        var _this = this;
        this._myService.getPerformanceDairyDeatils(this.param_emp_id)
            .subscribe(function (data) {
            _this.performanceDiary = data.json() || [];
        }, function (error) {
        });
    };
    ProfileEditComponent.prototype.loadOfficeDetails = function () {
        this.loadOfficeInfoTabData();
        this.loadPositionDetailsTabData();
        this.loadPerformanceDairyTabData();
    };
    ProfileEditComponent.prototype.loadBankDetails = function () {
        var _this = this;
        this.currencyArrData = this._commonService.getCurrency();
        this._myService.getBankInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.bankDetails = data.json() || {};
        }, function (error) {
            _this.bankDetails = {};
        });
    };
    ProfileEditComponent.prototype.loadSalaryInfoDropdownData = function () {
        this.providentFundMemberShipData = this._commonService.getProvidentFundMemberShip();
        this.groupLifeInsuranceData = this._commonService.getGroupLifeInsurance();
        this.festivalAllowanceData = this._commonService.getFestivalAllowance();
        this.hospitalizationSchemeData = this._commonService.getHospitalizationScheme();
    };
    ProfileEditComponent.prototype.loadSalaryInfo = function () {
        var _this = this;
        this._myService.getSalaryInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.salaryDetails = data.json() || {};
        }, function (error) {
            _this.salaryDetails = {};
        });
    };
    ProfileEditComponent.prototype.loadSalaryInfoTabData = function () {
        this.loadSalaryInfoDropdownData();
        this.loadSalaryInfo();
    };
    ProfileEditComponent.prototype.isHikeSalary = function (form) {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You want add new salary details!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#66BB6A',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Yes',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(function (result) {
            if (result.value) {
                form.resetForm();
            }
        });
    };
    ProfileEditComponent.prototype.loadCarDetails = function () {
        var _this = this;
        this._myService.getCarInfo(this.param_emp_id)
            .subscribe(function (data) {
            _this.carDetails = data.json() || {};
            _this.carDetails.companyEffectiveDate = _this.carDetails.companyEffectiveDate ? new Date(_this.carDetails.companyEffectiveDate) : _this.carDetails.companyEffectiveDate;
            _this.carDetails.companyExpiryDate = _this.carDetails.companyExpiryDate ? new Date(_this.carDetails.companyExpiryDate) : _this.carDetails.companyExpiryDate;
            _this.carDetails.privateEffectiveDate = _this.carDetails.privateEffectiveDate ? new Date(_this.carDetails.privateEffectiveDate) : _this.carDetails.privateEffectiveDate;
            _this.carDetails.privateExpiryDate = _this.carDetails.privateExpiryDate ? new Date(_this.carDetails.privateExpiryDate) : _this.carDetails.privateExpiryDate;
        }, function (error) {
            _this.carDetails = {};
        });
    };
    ProfileEditComponent.prototype.loadPayrollDetails = function () {
        this.loadBankDetails();
        this.loadSalaryInfoTabData();
        this.loadCarDetails();
    };
    ProfileEditComponent.prototype.loadSeperation = function () {
        //this._authService.getSeperationDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json();
        // },
        // error => {
        // });
    };
    ProfileEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
            template: __webpack_require__("./src/app/theme/pages/default/my/profile-edit/profile-edit.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            styles: ["input[type=\"file\"]{\n        opacity: 0;\n    }"]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__my_service__["a" /* MyService */]])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"m-portlet m-portlet--tabs m-portlet--warning m-portlet--head-solid-bg m-portlet--head-sm\">\r\n                <div class=\"m-portlet__head\">\r\n                <div class=\"m-portlet__head-caption\">\r\n                    <div class=\"m-portlet__head-title\">\r\n                        <h3 class=\"m-portlet__head-text\">\r\n                            <i class=\"flaticon-user-settings\"></i> \r\n                            Employee Info\r\n                            <small>\r\n                            </small>\r\n                        </h3>\r\n                    </div>\r\n                </div>\r\n                <div class=\"m-portlet__head-tools\">\r\n\r\n                    <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand  m-tabs-line--right m-tabs-line-danger\" role=\"tablist\">\r\n                        <li class=\"nav-item m-tabs__item\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                            <button type=\"button\" class=\"btn m-btn--pill pulldown btn-secondary\" (click)=\"submitProfile();\" >Submit to HR</button>\t\r\n                        </li>\r\n                        <li class=\"nav-item dropdown m-tabs__item\" >\r\n                            <a aria-expanded=\"true\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" ng-reflect-href=\"#\">\r\n                            <i class=\"la la-user\"></i> Personal Info\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\"  routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'personal'}\" [ngClass]=\"{'active':tabName=='personal'}\">\r\n                            Personal\r\n                            </a>\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'documents'}\" [ngClass]=\"{'active':tabName=='documents'}\">\r\n                            Documents\r\n                            </a>\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'education'}\" [ngClass]=\"{'active':tabName=='education'}\">\r\n                            Education\r\n                            </a>\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'employment'}\" [ngClass]=\"{'active':tabName=='employment'}\">\r\n                            Employment History\r\n                            </a>\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'family'}\" [ngClass]=\"{'active':tabName=='family'}\">\r\n                            Family\r\n                            </a>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"nav-item dropdown m-tabs__item\" *ngIf=\"profileProcess.isSupervisorApproved\">\r\n                            <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\">\r\n                            <i class=\"la la-desktop\"></i> Office Info\r\n                            </a>\r\n                            <div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'office'}\" [ngClass]=\"{'active':tabName=='office'}\">\r\n                            Office\r\n                            </a>\r\n                            <a class=\"dropdown-item\" data-toggle=\"tab\" routerLink=\"/my/profile\" [queryParams]=\"{'tabName':'payroll'}\" [ngClass]=\"{'active':tabName=='payroll'}\">\r\n                            Payroll\r\n                            </a>\r\n                            <!-- <a class=\"dropdown-item\" data-toggle=\"tab\" href=\"#m_tabs_9_8\" ng-reflect-href=\"#m_tabs_9_8\">\r\n                                Separation\r\n                                </a> -->\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                </div>\r\n                <div class=\"m-portlet__body\">\r\n                <div class=\"tab-content\">\r\n                    <div class=\"tab-pane active show\"  [ngClass]=\"{'active show':tabName=='personal'}\" *ngIf=\"tabName=='personal'\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_1_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_1_body\" aria-expanded=\"false\">\r\n                                    <span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n                                    <span class=\"m-accordion__item-title\">Personal Info</span>\r\n                                    <span class=\"m-accordion__item-mode\"></span>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_1_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_1_head\" data-parent=\"#m_accordion_5\">\r\n                                    <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                                        <div class=\"col-md-10\"> </div>\r\n                                        <div class=\"col-md-2 accordian-refresh\" >\r\n                                            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPersonalInfoTabData();showSpin();\" > <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-content\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fpersonalInfo.valid && savePersonalInfo()\" #fpersonalInfo=\"ngForm\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"personalInfo._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"personalInfo.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"personalInfo.isCompleted\" #isCompleted=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"fatherName\">Father's Name\r\n                                                    </label>\r\n                                                    <input type=\"text\" name=\"fatherName\"  [(ngModel)]=\"personalInfo.fatherName\" #fatherName=\"ngModel\" placeholder=\"Enter father's name\" id=\"fatherName\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"motherName\">Mother's Name\r\n                                                    </label>\r\n                                                    <input type=\"text\" name=\"motherName\" [(ngModel)]=\"personalInfo.motherName\" #motherName=\"ngModel\" placeholder=\"Enter mother's name\" id=\"motherName\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted && !profileProcess.isHrSendBack\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"m-form__group form-group\">\r\n                                                    <label for=\"gender\">\r\n                                                    Gender\r\n                                                    </label>\r\n                                                    <div class=\"m-radio-inline\">\r\n                                                        <label class=\"m-radio\">\r\n                                                        <input name=\"gender\" id=\"Male\" type=\"radio\" value=\"Male\" checked=\"checked\" [(ngModel)]=\"personalInfo.gender\" #mgender=\"ngModel\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"> Male\r\n                                                        <span></span>\r\n                                                        </label>\r\n                                                        <label class=\"m-radio\">\r\n                                                        <input name=\"gender\" id=\"Female\" type=\"radio\" value=\"Female\" [(ngModel)]=\"personalInfo.gender\" #fgender=\"ngModel\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"> Female\r\n                                                        <span></span>\r\n                                                        </label>\r\n                                                        <label class=\"m-radio\">\r\n                                                        <input name=\"gender\" id=\"Other\" type=\"radio\" value=\"Other\" [(ngModel)]=\"personalInfo.gender\" #ogender=\"ngModel\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"> Other\r\n                                                        <span></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"birthDate\">Birth Date\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <input name=\"birthDate\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Birth of Date\" [(ngModel)]=\"personalInfo.dob\" bsDatepicker [readonly]=\"true\" [maxDate]=\"currentDate\" [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" #birthDate=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" >\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !birthDate.valid\">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"mobileNo\">Mobile No.\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <input type=\"text\" name=\"mobileNo\" [(ngModel)]=\"personalInfo.personalMobileNumber\" #mobileNo=\"ngModel\" OnlyNumber=\"true\" minlength=10 maxlength=10 placeholder=\"Enter Mobile No\" id=\"mobileNo\" maxlength=\"10\" aria-describedby=\"mobileNo\" aria-invalid=\"true\" class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"!mobileNo.valid\">\r\n                                                <span *ngIf=\"fpersonalInfo.submitted && !mobileNo.valid\">This field is required.</span>\r\n                                                <span *ngIf=\"mobileNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"homePhonNo\">Home Phone No.\r\n                                                    </label>\r\n                                                    <input name=\"homePhonNo\" id=\"homePhonNo\" [(ngModel)]=\"personalInfo.homePhone\" minlength=10 maxlength=10 #homePhonNo=\"ngModel\" placeholder=\"Enter home phone\" type=\"text\" OnlyNumber=\"true\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted\">\r\n                                                        <span *ngIf=\"homePhonNo.errors?.minlength\">Please enter your 10 digit number</span>\r\n                                                        <span *ngIf=\"homePhonNo.errors?.maxlength\">Please enter your 10 digit number</span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"personalEmail\">Personal Email\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <input class=\"form-control m-input m-input--air\" id=\"personalEmail\" name=\"personalEmail\" [(ngModel)]=\"personalInfo.personalEmail\" (blur)=\"checkEmailExists(personalEmail)\" #personalEmail=\"ngModel\" placeholder=\"Enter email\" type=\"email\" email  required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    <div class=\"form-control-feedback has-danger\">\r\n                                                        <span *ngIf=\"fpersonalInfo.submitted && personalEmail.errors?.required\">This field is required.</span>\r\n                                                        <span *ngIf=\"!personalEmail.errors?.required && personalEmail.errors?.email\">Personal Email not valid.</span> \r\n                                                        <span *ngIf=\"personalEmail.errors?.emailExists\">Email Address already exists.</span> \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"bloodGroup\">Blood Group\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"bloodGroup\" [items]=\"bloodGropData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Blood Group\" [(ngModel)]=\"personalInfo.bloodGroup\" [clearable]=\"false\" #bloodGroup=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !bloodGroup.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"religion\">Religion\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"religion\" [items]=\"religionData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Religion\" [(ngModel)]=\"personalInfo.religion\" [clearable]=\"false\" #religion=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !religion.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"maritalStatus\">Marital Status\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"maritalStatus\" [items]=\"maritialStatusData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select maritalStatus\" [(ngModel)]=\"personalInfo.maritialStatus\" [clearable]=\"false\" #maritalStatus=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !maritalStatus.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"nationality\">Nationality\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"nationality\" [items]=\"nationalityData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select maritalStatus\" [(ngModel)]=\"personalInfo.nationality\" [clearable]=\"false\" #nationality=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !nationality.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"emergencyContactName\">Emergency Contact Name\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <input type=\"text\" name=\"emergencyContactName\" [(ngModel)]=\"personalInfo.emergencyContactPerson\" #emergencyContactName=\"ngModel\" placeholder=\"Enter emergency contact name\" id=\"emergencyContactName\"  class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactName.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label class=\"emergencyContactNo\">Emergency Contact No.\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                </label>\r\n                                                <input name=\"emergencyContactNo\" id=\"emergencyContactNo\" minlength=10 maxlength=10 [(ngModel)]=\"personalInfo.emergencyContactNumber\" #emergencyContactNo=\"ngModel\" placeholder=\"Enter emergency contact no\" type=\"text\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpersonalInfo.submitted && !emergencyContactNo.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                            <button type=\"submit\"  class=\"btn btn-success\">{{personalInfo._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                                <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_2_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_2_body\" aria-expanded=\"false\">\r\n                                    <span class=\"m-accordion__item-icon\"><i class=\"flaticon-map-location\"></i></span>\r\n                                    <span class=\"m-accordion__item-title\">Address</span>\r\n                                    <span class=\"m-accordion__item-mode\"></span>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_2_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_2_head\" data-parent=\"#m_accordion_5\">\r\n                                    <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <div class=\"col-md-10\"> </div>\r\n                                        <div class=\"col-md-2 accordian-refresh\">\r\n                                            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAddressTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-accordion__item-content\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"faddress.valid && saveAddressInfo()\"  #faddress=\"ngForm\" novalidate=\"novalidate\">\r\n                                            <div class=\"form-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <h5 class=\"title\" style=\"bottom:30px\"><strong> Current Address </strong></h5>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"address._id\" class=\"form-control m-input m-input--air\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"address.emp_id\" class=\"form-control m-input m-input--air\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <input type=\"text\" name=\"status\" [(ngModel)]=\"address.status\" class=\"form-control m-input m-input--air\" />\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"addressLine1\">Address Line 1\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <input class=\"form-control m-input m-input--air\" id=\"addressLine1\" name=\"addressLine1\" [(ngModel)]=\"address.currentAddressLine1\" #addressLine1=\"ngModel\" placeholder=\"Enter address line 1\" type=\"text\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !addressLine1.valid \">\r\n                                                        This field is required.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"currentAddressLine2\">Address Line 2\r\n                                                        </label>\r\n                                                        <input type=\"text\" [(ngModel)]=\"address.currentAddressLine2\" #currentAddressLine2=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Address Line 2\" id=\"currentAddressLine2\" name=\"currentAddressLine2\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"division\">Division\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <ng-select class=\"m-input m-input--air\" #currentDivision name=\"currentAddressDivision\" [items]=\"currentAddressDivisionData\" (change)=\"loadcurrentAddressDistrictData(address.currentAddressDivision_id)\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\" [(ngModel)]=\"address.currentAddressDivision_id\" [clearable]=\"false\" #currentAddressDivision=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressDivision.valid \">\r\n                                                        This field is required.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"currentAddressDistrict\">District\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <ng-select class=\"m-input m-input--air\" #currentDistrict name=\"currentAddressDistrict\" (change)=\"loadcurrentAddressThanaData(address.currentAddressDistrict_id)\" [items]=\"currentAddressDistrictData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.currentAddressDistrict_id\" [clearable]=\"false\" #currentAddressDistrict=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressDistrict.valid \">\r\n                                                        This field is required.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"thane\">Thane\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <ng-select class=\"m-input m-input--air\" #currentThana name=\"currentAddressThana\" #thane [items]=\"currentAddressThanaData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Thane\" [(ngModel)]=\"address.currentAddressThana_id\" [clearable]=\"false\" #currentAddressthane=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressthane.valid \">\r\n                                                        This field is required.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"currentAddressPostCode\">Post Code\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <input type=\"text\" [(ngModel)]=\"address.currentAddressPostCode\" maxlength=\"6\" #currentAddressPostCode=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Post Code\" id=\"currentAddressPostCode\" name=\"currentAddressPostCode\" OnlyNumber=\"true\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                        <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !currentAddressPostCode.valid \">\r\n                                                        This field is required.\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br/>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <h5 class=\"title\" style=\"bottom:30px\"><strong> Permanent Address </strong></h5>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"form-group form-md-checkboxes\">\r\n                                                <div class=\"md-checkbox-inline\">\r\n                                                    <div class=\"md-checkbox\">\r\n                                                        <label class=\"m-checkbox m-checkbox--success\">\r\n                                                                \r\n                                                        <input type=\"checkbox\" name=\"isSameAsCurrent\" #sameAddress [(ngModel)]=\"address.isSameAsCurrent\" (click)=\"address.isSameAsCurrent=!address.isSameAsCurrent;resetPermentAddress()\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"> Same as Current Address\r\n                                                        <span class=\"box\" id=\"addressCheck1\"></span>\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressLine1\">Address Line 1\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine1}}</span>\r\n                                                        <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                            <input type=\"text\" [(ngModel)]=\"address.permanentAddressLine1\" #permanentAddLine=\"ngModel\" placeholder=\"Enter Permanent Address Line 1\" class=\"form-control m-input m-input--air\" name=\"permanentAddressLin\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddLine.valid\">\r\n                                                                This field is required.\r\n                                                            </div>\r\n                                                       </ng-container>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressLine2\">Address Line 2\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressLine2}}</span>\r\n                                                        <input type=\"text\" *ngIf=\"!address.isSameAsCurrent\" [(ngModel)]=\"address.permanentAddressLine2\" #permanentAddressLine2=\"ngModel\" class=\"form-control m-input m-input--air\" placeholder=\"Enter Permanent Address Line 2\" id=\"permanentAddressLine2\" name=\"permanentAddressLine2\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressDivision\">Division\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDivision?.selectedItems[0]?.label}}</span>\r\n                                                        <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                            <ng-select  class=\"m-input m-input--air\" name=\"permanentAddressDivision\" [items]=\"permanentAddressDivisionData\" (change)=\"loadpermanentAddressDistrictData(address.permanentAddressDivision_id)\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Division\" [(ngModel)]=\"address.permanentAddressDivision_id\" [clearable]=\"false\" #permanentAddressDivision=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressDivision.valid \">\r\n                                                            This field is required.\r\n                                                            </div>\r\n                                                        </ng-container>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressDistrict\">District\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentDistrict?.selectedItems[0]?.label}}</span>\r\n                                                        <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                            <ng-select  class=\"m-input m-input--air\" name=\"permanentAddressDistrict\" (change)=\"loadpermanentAddressThanaData(address.permanentAddressDistrict_id)\" [items]=\"permanentAddressDistrictData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select District\" [(ngModel)]=\"address.permanentAddressDistrict_id\" [clearable]=\"false\" #permanentAddressDistrict=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                            <div  class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressDistrict.valid \">\r\n                                                            This field is required.\r\n                                                            </div>\r\n                                                       </ng-container>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressThana\">Thana\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{currentThana?.selectedItems[0]?.label}}</span>  \r\n                                                        <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                            <ng-select class=\"m-input m-input--air\" name=\"permanentAddressThana\" [items]=\"permanentAddressThanaData\" bindLabel=\"locationName\" bindValue=\"_id\" placeholder=\"Select Thane\" [(ngModel)]=\"address.permanentAddressThana_id\" [clearable]=\"false\" #permanentAddressThana=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>                                              \r\n                                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressThana.valid \">\r\n                                                            This field is required.\r\n                                                            </div>\r\n                                                        </ng-container>    \r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"permanentAddressPostCode\">Post Code\r\n                                                        <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                        </label>\r\n                                                        <span class=\"form-control m-input m-input--air\" *ngIf=\"address.isSameAsCurrent\">{{address.currentAddressPostCode}}</span>\r\n                                                        <ng-container *ngIf=\"!address.isSameAsCurrent\">\r\n                                                            <input type=\"text\"  maxlength=\"6 \" [(ngModel)]=\"address.permanentAddressPostCode\" #permanentAddressPostCode=\"ngModel\" placeholder=\"Enter Permanent Post Code\" class=\"form-control m-input m-input--air\" id=\"permanentAddressPostCode\" name=\"permanentAddressPostCode\" OnlyNumber=\"true\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                            <div  class=\"form-control-feedback has-danger\" *ngIf=\"faddress.submitted && !permanentAddressPostCode.valid \">\r\n                                                            This field is required.\r\n                                                            </div>\r\n                                                        </ng-container>   \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <br/>\r\n                                            </div>\r\n                                            <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                                            <button type=\"submit\" class=\"btn btn-success\">{{address._id ? 'Update':'Save'}}</button>\r\n                                            <!-- <button type=\"reset\" *ngIf=\"!address._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='documents'}\" *ngIf=\"tabName=='documents'\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_9_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_9_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fa-file\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Documents</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_9_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_9_head\" data-parent=\"#m_accordion_5\">\r\n                                <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadDocuments();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" #fdocuments=\"ngForm\" (ngSubmit)=\"saveDocumentsInfo()\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"documents._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"documents.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"documents.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"txtNationalIdSmartCard\">\r\n                                                National ID Smart Card\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"documents.nationalIdSmartCard\" #txtNationalIdSmartCard=\"ngModel\" name=\"txtNationalIdSmartCard\" id=\"txtNationalIdSmartCard\"  class=\"form-control m-input m-input--air\" placeholder=\"Enter National ID Smart Card number\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"input-group-btn\">\r\n                                                        <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'smartCard')\" [uploadInput]=\"uploadInput\" #nationalIdSmartCard [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack ||!documents.nationalIdSmartCard\">\r\n                                                        <button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"changeNationalIdSmartCard\" name=\"changeNationalIdSmartCard\" style=\"margin-right: 6px;\" (click)=\"nationalIdSmartCard.click()\">Upload</button>\r\n                                                        <button type=\"button\" class=\"btn btn-secondary\" name=\"viewNationalIdSmartCard\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('smartCard')\">View</button>\r\n                                                        <button type=\"button\" class=\"btn btn-danger\"  name=\"deleteNationalIdSmartCard\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" (click)=\"deleteDocumentImage('smartCard')\"><i class=\"fa fa-close\"></i></button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"txtNationalIDOldFormat\">\r\n                                                National ID (Old Format)\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"documents.nationalIDOldFormat\" #txtNationalIDOldFormat=\"ngModel\" name=\"txtNationalIDOldFormat\" id=\"txtNationalIDOldFormat\"  class=\"form-control m-input m-input--air\" placeholder=\"Enter National ID (old format)\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"input-group-btn\">\r\n                                                    <button type=\"button\" class=\"btn btn-success\" tabindex=\"-1\" id=\"changeNationalIDOldFormat\" name=\"changeNationalIDOldFormat\" style=\"margin-right: 6px;\" (click)=\"nationalIDOldFormat.click()\">Upload</button>\r\n                                                    <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'smartOldCard')\" [uploadInput]=\"uploadInput\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack ||!documents.nationalIDOldFormat\" #nationalIDOldFormat>\r\n                                                    <button type=\"button\" class=\"btn btn-secondary\" name=\"viewNationalIDOldFormat\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('smartOldCard')\">View</button>\r\n                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deleteNationalIDOldFormat\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" (click)=\"deleteDocumentImage('smartOldCard')\"><i class=\"fa fa-close\"></i></button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"txtBirthRegistrationNumber\">\r\n                                                Birth Registration Number\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"documents.birthRegistrationNumber\" #txtBirthRegistrationNumber=\"ngModel\" name=\"txtBirthRegistrationNumber\" id=\"txtBirthRegistrationNumber\"  class=\"form-control m-input m-input--air\" placeholder=\"Enter birth registration number\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"input-group-btn\">\r\n                                                    <button type=\"button\" class=\"btn btn-success\"  name=\"changeBirthRegistrationNumber\" style=\"margin-right: 6px;\" (click)=\"birthRegistrationNumber.click()\">Upload</button>\r\n                                                    <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'birth')\" [uploadInput]=\"uploadInput\" #birthRegistrationNumber  [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack ||!documents.birthRegistrationNumber\">\r\n                                                    <button type=\"button\" class=\"btn btn-secondary\" name=\"viewBirthRegistrationNumber\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('birth')\">View</button>\r\n                                                    <button type=\"button\" class=\"btn btn-danger\"  name=\"deleteBirthRegistrationNumber\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" (click)=\"deleteDocumentImage('birth')\"><i class=\"fa fa-close\"></i></button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"txtPassportNumber\">\r\n                                                Passport Number\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"documents.passportNumber\" #txtPassportNumber=\"ngModel\" name=\"txtPassportNumber\" id=\"txtPassportNumber\"  class=\"form-control m-input m-input--air\" placeholder=\"Enter passport number\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"col-md-6 adn-form__group\">\r\n                                                    <div class=\"input-group-btn\">\r\n                                                    <button type=\"button\" class=\"btn btn-success\"  name=\"changePassportNumber\" style=\"margin-right: 6px;\" (click)=\"passportNumber.click()\">Upload</button>\r\n                                                    <input type=\"file\" name=\"profileDocuments\" hidden=\"hidden\" ngFileSelect [options]=\"options\" (uploadOutput)=\"onUploadOutput($event,'passport')\" #passportNumber [uploadInput]=\"uploadInput\"  [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack ||!documents.passportNumber\">\r\n                                                    <button type=\"button\" class=\"btn btn-secondary\" name=\"viewPassportNumber\" style=\"margin-right: 6px;\" (click)=\"showDocumentImagePopUp('passport')\">View</button>\r\n                                                    <button type=\"button\" class=\"btn btn-danger\" name=\"deletePassportNumber\" style=\"margin-right: 6px;\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\" (click)=\"deleteDocumentImage('passport')\"><i class=\"fa fa-close\"></i></button>\r\n                                                    </div>\r\n                                          \r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                                <button type=\"submit\"  class=\"btn btn-success\">{{documents._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='education'}\" *ngIf=\"tabName=='education'\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_10_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_10_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fa-graduation-cap\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Academic Info</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_10_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_10_head\" data-parent=\"#m_accordion_5\">\r\n                                <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadAcademicInfoTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <div *ngFor=\"let academic of academicInfo ;let i=index\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" #facademicInfo=\"ngForm\" (ngSubmit)=\"facademicInfo.valid && saveAcademicInfo(academic,i)\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <input type=\"text\" name=\"personal_id\" [(ngModel)]=\"academic._id\" #personal_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"academic.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <input type=\"text\" name=\"status\" [(ngModel)]=\"academic.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"levelOfEducation\">Level of Education\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"levelOfEducation\" [items]=\"levelOfEducationData\" bindLabel=\"educationName\" bindValue=\"_id\" placeholder=\"Select Level of Education\" (change)=\"loadExamDegreeTitle(academic.levelOfEducation_id,i)\" [(ngModel)]=\"academic.levelOfEducation_id\" [clearable]=\"false\" #levelOfEducation=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !levelOfEducation.valid\">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"examDegreeTitle\">Exam Degree Title\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"examDegreeTitle\" [items]=\"academic.examDegreeTitleData\" bindLabel=\"educationName\" bindValue=\"_id\" placeholder=\"Select Level of Education\" [(ngModel)]=\"academic.examDegreeTitle_id\" [clearable]=\"false\" #examDegreeTitle=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !examDegreeTitle.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"concentrationMajorGroup\">Concentration/Major/Group\r\n                                                    </label>\r\n                                                    <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.concentration\" #concentrationMajorGroup=\"ngModel\" id=\"concentrationMajorGroup\" name=\"concentrationMajorGroup\" placeholder=\"Enter concentration/major/goup\" type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"instituteName\">Institute Name\r\n                                                    </label>\r\n                                                    <input type=\"text\" [(ngModel)]=\"academic.instituteName\" #instituteName=\"ngModel\" name=\"instituteName\" placeholder=\"Enter Institute Name\" id=\"instituteName\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"result\">Result\r\n                                                    <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                    </label>\r\n                                                    <ng-select class=\"m-input m-input--air\" name=\"result\" [items]=\"resultsData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Result\" [(ngModel)]=\"academic.result\" [clearable]=\"false\" #result=\"ngModel\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></ng-select>\r\n                                                    <div class=\"form-control-feedback has-danger\" *ngIf=\"facademicInfo.submitted && !result.valid \">\r\n                                                        This field is required.\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 adn-form__group\">\r\n                                                <div class=\"form-group m-form__group\">\r\n                                                    <label for=\"marks\">Marks in %\r\n                                                    </label>\r\n                                                    <input type=\"text\" name=\"marks\" [(ngModel)]=\"academic.marks\" maxlength=\"4\" #marks=\"ngModel\" placeholder=\"Enter marks in %\" id=\"marks\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"yearOfPassing\">Year of Passing\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" maxlength=\"4\" [(ngModel)]=\"academic.yearOfPassing\" #yearOfPassing=\"ngModel\" id=\"yearOfPassing\" name=\"yearofpassing\" placeholder=\"Enter year of passing\" OnlyNumber=\"true\" type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"duration\">Duration (In Years)\r\n                                                </label>\r\n                                                <input type=\"text\" name=\"duration\" [(ngModel)]=\"academic.duration\" #duration=\"ngModel\" maxlength=\"4\" minlength=\"1\" placeholder=\"Enter Duration\" id=\"duration\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-12 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"achievements\">Achievements\r\n                                                </label>\r\n                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"academic.achievements\" #achievements=\"ngModel\" id=\"achievements\" name=\"achievements\" placeholder=\"Enter achievements\" type=\"text\" rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"academic._id\" (click)=\"deleteAcademicInfo(academic._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n                                        <button type=\"submit\" class=\"btn btn-success\">{{academic._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <div class=\"m-form__actions\">\r\n                                        <button class=\"btn btn-success\" [disabled]=\"isAdded('academicInfo')\" (click)=\"addNewHtmlContain('academicInfo')\"><i class=\"fa fa-plus\"></i> Add\r\n                                        </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_11_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_11_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Certifications And Training Info</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_11_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_11_head\" data-parent=\"#m_accordion_5\">\r\n                                <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCertificateAndTraningInfoTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <div *ngFor=\"let certifications of certificationsandTrainingInfo ;let i=index\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" #fcertificationsandTrainingInfo=\"ngForm\" (ngSubmit)=\"fcertificationsandTrainingInfo.valid && saveCertificationandTrainingInfo(certifications,i)\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"certifications_id\" [(ngModel)]=\"certifications._id\" #certifications_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"certifications.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"certificationTrainingTitle\">Certification/ Training Title\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.certificationTitle\" #certificationTrainingTitle=\"ngModel\" id=\"certificationTrainingTitle\" name=\"certificationTrainingTitle\" placeholder=\"Enter certification / training title\" required type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !certificationTrainingTitle.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"location\">Location\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"certifications.location\" #location=\"ngModel\" name=\"location\" placeholder=\"Enter location\" id=\"location\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"institution\">Institution\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.institution\" #institution=\"ngModel\" id=\"institution\" name=\"institution\" placeholder=\"Enter institution\" type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"durationInMonths\">Duration in Months\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <input type=\"text\" [(ngModel)]=\"certifications.duration\" #durationInMonths=\"ngModel\" name=\"durationInMonths\" placeholder=\"Enter duration in months\" id=\"durationInMonths\" class=\"form-control m-input m-input--air\" OnlyNumber=\"true\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fcertificationsandTrainingInfo.submitted && !durationInMonths.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-12 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"topicsCovered\">Topics Covered\r\n                                                </label>\r\n                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"certifications.topicsCovered\" #topicsCovered=\"ngModel\" id=\"topicsCovered\" name=\"topicsCovered\" placeholder=\"Enter topics covered\" type=\"text\" rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"certifications._id\" (click)=\"deleteCertificationInfo(certifications._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n                                        <button type=\"submit\" class=\"btn btn-success\">{{certifications._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <div class=\"m-form__actions\">\r\n                                        <button class=\"btn btn-success\" [disabled]=\"isAdded('certification')\" (click)=\"addNewHtmlContain('certification')\"><i class=\"fa fa-plus\"></i> Add\r\n                                        </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='employment'}\" *ngIf=\"tabName=='employment'\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_12_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_12_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Previous Employment Details</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_12_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_12_head\" data-parent=\"#m_accordion_5\">\r\n                                <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadEmploymentDetails();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <div *ngFor=\"let previousEmployment of previousEmploymentDetails ;let i=index\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" #fpreviousEmploymentDetails=\"ngForm\" (ngSubmit)=\"fpreviousEmploymentDetails.valid && savePreviousEmploymentDetails(previousEmployment,i)\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"previousEmploymentDetails_id\" [(ngModel)]=\"previousEmployment._id\" #previousEmploymentDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"emp_id\" [(ngModel)]=\"previousEmployment.emp_id\" #emp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"status\" [(ngModel)]=\"previousEmployment.status\" #status=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"companyName\">Company Name\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyName\" #companyName=\"ngModel\" id=\"companyName\" name=\"companyName\" placeholder=\"Enter company name\" type=\"text\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyName.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"companyBusiness\">Company Business\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.companyBusiness\" #companyBusiness=\"ngModel\" name=\"companyBusiness\" placeholder=\"Enter company business\" id=\"companyBusiness\" class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !companyBusiness.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"prevDesignation\">Previous Designation\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.designation\" #prevDesignation=\"ngModel\" name=\"prevDesignation\" placeholder=\"Enter Previous Designation \" id=\"prevDesignation\" class=\"form-control m-input m-input--air\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !prevDesignation.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"department\">Department\r\n                                                </label>\r\n                                                <input type=\"text\" [(ngModel)]=\"previousEmployment.department\" #department=\"ngModel\" name=\"department\" placeholder=\"Enter department\" id=\"department\" class=\"form-control m-input m-input--air\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-3 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"epf\">Employment Period From\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"epf\" [ngModel]=\"previousEmployment.employmentPeriodFrom\" (ngModelChange)=\"previousEmployment.employmentPeriodFrom=$event;previousEmployment.employmentPeriodTo=''\" #epf=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  [maxDate]=\"currentDate\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-3 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"ept\">Employment Period To\r\n                                                </label>\r\n                                               <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"ept\" [(ngModel)]=\"previousEmployment.employmentPeriodTo\" #ept=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [minDate]=\"previousEmployment.employmentPeriodFrom\" [maxDate]=\"currentDate\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"companyLocation\">Company Location\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.companyLocation\" #companyLocation=\"ngModel\" id=\"companyLocation\" name=\"companyLocation\" placeholder=\"Enter company location\" type=\"text\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-12 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"areaofExperience\">Area of Experience\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                </label>\r\n                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.areaOfExperience\" #areaofExperience=\"ngModel\" id=\"areaofExperience\" name=\"areaofExperience\" placeholder=\"Enter area of experience\" type=\"text\" rows=\"3\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></textarea>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpreviousEmploymentDetails.submitted && !areaofExperience.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-12 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"responsibility\">Responsibility\r\n                                                </label>\r\n                                                <textarea class=\"form-control m-input m-input--air\" [(ngModel)]=\"previousEmployment.responsibility\" #responsibility=\"ngModel\" id=\"responsibility\" name=\"responsibility\" placeholder=\"Enter responsibility\" type=\"text\" rows=\"3\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"previousEmployment._id\" (click)=\"deletePreviousEmployment(previousEmployment._id)\"><i class=\"fa fa-close\" ></i>Delete</button>\r\n                                        <button type=\"submit\" class=\"btn btn-success\">{{previousEmployment._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                            <div class=\"m-form__actions\">\r\n                                                <button class=\"btn btn-success\" [disabled]=\"isAdded('employment')\" (click)=\"addNewHtmlContain('employment')\"><i class=\"fa fa-plus\"></i> Add\r\n                                                </button>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='family'}\"  *ngIf=\"tabName=='family'\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_13_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_13_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fa-group\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Family Info</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_13_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_13_head\" data-parent=\"#m_accordion_5\">\r\n                                <div class=\"row\" *ngIf=\"!profileProcess.isEmployeeSubmitted || profileProcess.isHrSendBack\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadFamilyInfoTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <div *ngFor=\"let family of familyInfo ;let i=index\">\r\n                                        <form class=\"m-form m-form--fit m-form--label-align-right\" #ffamilyInfo=\"ngForm\" (ngSubmit)=\"ffamilyInfo.valid && saveFamilyInfo(family,i)\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"familyInfo_id\" [(ngModel)]=\"family._id\" #familyInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"familyInfoemp_id\" [(ngModel)]=\"family.emp_id\" #familyInfoemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"familyInfostatus\" [(ngModel)]=\"family.status\" #familyInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"familyName\">Name\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.name\" #familyName=\"ngModel\" id=\"familyName\" name=\"familyName\" placeholder=\"Enter name\" type=\"text\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !familyName.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"relation\">Relation\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select name=\"relation\" [items]=\"relationData\" bindLabel=\"relationName\" bindValue=\"_id\" placeholder=\"Select relation\" [(ngModel)]=\"family.relation_id\" #relation=\"ngModel\"  [clearable]=\"false\" required [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                </ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted && !relation.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"fmobileNumber\">Mobile Number\r\n                                                </label>\r\n                                                <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"family.contact\" #mobileNumber=\"ngModel\" minlength=\"10\" maxlength=\"10\" id=\"fmobileNumber\" name=\"fmobileNumber\" placeholder=\"Enter mobile number\" type=\"text\" OnlyNumber=\"true\" [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"ffamilyInfo.submitted\">\r\n                                                    <span *ngIf=\"mobileNumber.errors?.maxlength || mobileNumber.errors?.minlength\">\r\n                                                            Please enter your 10 digit number\r\n                                                    </span>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"fbirthDate\">Birth Date</label>\r\n                                                <input class=\"form-control m-input m-input--air\" placeholder=\"Enter Birth of Date\" [readonly]=\"true\"  name=\"fbirthDate\" [(ngModel)]=\"family.dateOfBirth\" #fbirthDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" [maxDate]=\"currentDate\"  [disabled]=\"profileProcess.isEmployeeSubmitted &&  !profileProcess.isHrSendBack\">\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"family._id\" (click)=\"deleteFamilyInfo(family._id)\"><i class=\"fa fa-close\"></i>Delete</button>\r\n                                        <button type=\"submit\" class=\"btn btn-success\">{{family._id ? 'Update':'Save'}}</button>\r\n                                        </div>\r\n                                        </form>\r\n                                    </div>\r\n                                    <div class=\"m-portlet__foot m-portlet__foot--fit\" *ngIf=\"!profileProcess.isEmployeeSubmitted ||  profileProcess.isHrSendBack\">\r\n                                        <div class=\"m-form__actions\">\r\n                                        <button class=\"btn btn-success\" [disabled]=\"isAdded('family')\" (click)=\"addNewHtmlContain('family')\"><i class=\"fa fa-plus\"></i> Add\r\n                                        </button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='office'}\"  *ngIf=\"tabName=='office' && profileProcess.isSupervisorApproved\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_6_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_6_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fas fa-briefcase\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Office Info</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_6_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_6_head\" data-parent=\"#m_accordion_5\">\r\n                                 <!-- comment after demo --> \r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                   <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadOfficeInfoTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div> \r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" #fofficeInfo=\"ngForm\" (ngSubmit)=\"fofficeInfo.valid && saveOfficeInfo()\" novalidate=\"novalidate\">\r\n                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"officeInfo_id\" [(ngModel)]=\"officeInfo._id\" #officeInfo_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"officeInfo_empid\" [(ngModel)]=\"officeInfo.emp_id\" #officeInfo_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"officeInfostatus\" [(ngModel)]=\"officeInfo.status\" #officeInfostatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"employeeName\">Employee Name\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.fullName\" #employeeName=\"ngModel\" id=\"employeeName\" name=\"employeeName\" placeholder=\"Enter employee name\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"employeeId\">Employee ID\r\n                                            </label>\r\n                                            <input type=\"text\" readonly name=\"employeeId\" [(ngModel)]=\"officeInfo.userName\" #employeeId=\"ngModel\" placeholder=\"Enter employee ID\" id=\"employeeId\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"idCardNumber\">ID card No.\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input type=\"text\" name=\"idCardNumber\" [(ngModel)]=\"officeInfo.idCardNumber\" #idCardNumber=\"ngModel\" placeholder=\"Enter ID card No\" id=\"idCardNumber\" maxlength=\"15\" class=\"form-control m-input m-input--air\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !idCardNumber.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"officePhoneNumber\">Office Phone Number\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.officePhone\" #officePhoneNumber=\"ngModel\" maxlength=\"10\" id=\"officePhoneNumber\" name=\"officePhoneNumber\" placeholder=\"Enter office phone no\" type=\"text\" OnlyNumber=\"true\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"officeMobileNumber\">Office Mobile Number\r\n                                            </label>\r\n                                            <input name=\"officeMobileNumber\" [(ngModel)]=\"officeInfo.officeMobile\" #officeMobileNumber=\"ngModel\" id=\"officeMobileNumber\" maxlength=\"10\" type=\"text\" class=\"form-control m-input m-input--air\" placeholder=\"Enter office mobile no\" OnlyNumber=\"true\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"officeEmailId\">Office Email ID\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input  [(ngModel)]=\"officeInfo.officeEmail\" #officeEmail=\"ngModel\" (blur)=\"checkEmailExists(officeEmail)\" placeholder=\"Enter office email id\" name=\"officeEmailId\" type=\"text\" class=\"form-control m-input m-input--air\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\">\r\n                                                <span *ngIf=\"fofficeInfo.submitted && officeEmail.errors?.required\">This field is required.</span>\r\n                                                <span *ngIf=\"!officeEmail.errors?.required && officeEmail.errors?.email\">Offcie Email not valid.</span> \r\n                                                <span *ngIf=\"officeEmail.errors?.emailExists\">Email Address already exists.</span> \r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"facility\">Facility\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"officeInfo.facility\" #facility=\"ngModel\" id=\"facility\" name=\"facility\" placeholder=\"Enter facility\" type=\"text\" disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !officePhoneNumber.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"city\">City\r\n                                            </label>\r\n                                            <input name=\"city\" id=\"city\" [(ngModel)]=\"officeInfo.city\" #city=\"ngModel\" type=\"text\" class=\"form-control m-input m-input--air\" placeholder=\"Enter city\" disabled >\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"country\">Country\r\n                                            </label>\r\n                                            <ng-select name=\"country\" [items]=\"countryData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Country\" [(ngModel)]=\"officeInfo.country\" disabled>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"costCenter\">Cost Center\r\n                                            </label>\r\n                                            <input name=\"costCenter\" [(ngModel)]=\"officeInfo.costCentre\" #costCenter=\"ngModel\" placeholder=\"Enter cost center\" id=\"costCenter\" type=\"text\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"dateOfJoining\">Date of Joining</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"dateOfJoining\" [ngModel]=\"officeInfo.dateOfJoining\" (ngModelChange)=\"officeInfo.dateOfJoining=$event;officeInfo.dateOfConfirmation=''\" #dateOfJoining=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"dateOfConfermation\">Date of Confirmation</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"dateOfConfermation\" [minDate]=\"officeInfo.dateOfJoining\"  [(ngModel)]=\"officeInfo.dateOfConfirmation\" #dateOfConfermation=\"ngModel\"  bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"workPermitNumber\">Work Permit Number\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"officeInfo.workPermitNumber\" #workPermitNumber=\"ngModel\" name=\"workPermitNumber\" placeholder=\"Enter work permit no\" id=\"idCardNumber\" maxlength=\"10\" class=\"form-control m-input m-input--air\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fofficeInfo.submitted && !workPermitNumber.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"effectiveDate\">Work Permit Effective Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"effectiveDate\"  [ngModel]=\"officeInfo.workPermitEffectiveDate\" (ngModelChange)=\"officeInfo.workPermitEffectiveDate=$event;officeInfo.workPermitExpiryDate=''\" #doj=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"expiryDate\">Work Permit Expiry Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"expiryDate\" [(ngModel)]=\"officeInfo.workPermitExpiryDate\" [minDate]=\"officeInfo.workPermitEffectiveDate\" #expiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-form__actions\">\r\n                                         <!-- comment after demo -->\r\n                                        <!-- <button type=\"submit\" class=\"btn btn-success\">{{officeInfo._id ? 'Update':'Save'}}</button> -->\r\n                                        <!-- <button type=\"reset\" *ngIf=\"!officeInfo._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                    </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_8_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_8_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Position Details</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_8_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_8_head\" data-parent=\"#m_accordion_5\">\r\n                             <!-- comment after demo -->\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                     <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPositionDetailsTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" #fpositionDetails=\"ngForm\" (ngSubmit)=\"fpositionDetails.valid && savePositionInfo()\"  novalidate=\"novalidate\">\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"positionDetails_id\" [(ngModel)]=\"positionDetails._id\" #positionDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"positionDetails_empid\" [(ngModel)]=\"positionDetails.emp_id\" #positionDetails_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <input type=\"text\" name=\"positionDetailsstatus\" [(ngModel)]=\"positionDetails.status\" #positionDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Company Name</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"companyName\" [items]=\"companiesData\" bindLabel=\"companyName\" bindValue=\"_id\" placeholder=\"Select Company Name\" [(ngModel)]=\"positionDetails.company_id\" #companyName=\"ngModel\" (change)=\"loadHRSpoce(positionDetails.company_id)\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !companyName.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Division</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"division\" [items]=\"divisionData\" bindLabel=\"divisionName\" bindValue=\"_id\" placeholder=\"Select Division\" (change)=\"loadDepartment(positionDetails.division_id)\" [(ngModel)]=\"positionDetails.division_id\" #division=\"ngModel\" (change)=\"loadDepartment(positionDetails.division_id)\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !division.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Department</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"department\" [items]=\"deparmentData\" bindLabel=\"departmentName\" bindValue=\"_id\" placeholder=\"Select Department\" (change)=\"loadVertical(positionDetails.department_id)\" [(ngModel)]=\"positionDetails.department_id\" [clearable]=\"false\" #department=\"ngModel\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !department.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"form-group m-form__group\">\r\n                                                <label for=\"form_control_1\">Vertical</label>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"vertical\" [items]=\"verticalData\" bindLabel=\"verticalName\" bindValue=\"_id\" placeholder=\"Select Vertical\" (change)=\"loadSubVertical(positionDetails.vertical_id)\" [(ngModel)]=\"positionDetails.vertical_id\" #vertical=\"ngModel\" (change)=\"loadSubVertical(positionDetails.vertical);\" disabled></ng-select>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Sub Vertical</label>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"subVertical\" [items]=\"subverticalData\" bindLabel=\"subVerticalName\" bindValue=\"_id\" placeholder=\"Select Sub Vertical\" [(ngModel)]=\"positionDetails.subVertical_id\" #subVertical=\"ngModel\" disabled></ng-select>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Management Type</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"managementType\" [items]=\"managementTypeData\" bindLabel=\"managementTypeName\" bindValue=\"_id\" placeholder=\"Select Management Type\" [(ngModel)]=\"positionDetails.managementType_id\" (change)=\"loadEmploymentType(positionDetails.managementType_id)\" #managementType=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !managementType.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Employment Type</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"employmentType\" [items]=\"employmentTypeData\" bindLabel=\"employmentTypeName\" bindValue=\"_id\" placeholder=\"Select Employment Type\" [(ngModel)]=\"positionDetails.employmentType_id\" (change)=\"loadGrade(positionDetails.managementType_id,positionDetails.employmentType_id)\" #employmentType=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employmentType.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id==1\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Employment Status</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"confirmationStatus\" [items]=\"employmentStatusData\" bindLabel=\"employmentStatusName\" bindValue=\"_id\" placeholder=\"Select Confirmation/Probation Status\" [(ngModel)]=\"positionDetails.employmentStatus_id\" #confirmationStatus=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !confirmationStatus.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" *ngIf=\"positionDetails.employmentType_id > 1\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Tenure of Contract/Internship (in months)</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <input type=\"text\" name=\"tenure\" id=\"tenure\"  class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.tenureOfContract\" #tenure=\"ngModel\" OnlyNumber=\"true\" disabled>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !tenure.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Grade</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"employeeGrade\" [items]=\"gradeData\" bindLabel=\"gradeName\" bindValue=\"_id\" placeholder=\"Select Grade\" (change)=\"loadDesignation(positionDetails.grade_id);loadSupervisor(positionDetails.grade_id)\" [(ngModel)]=\"positionDetails.grade_id\" #employeeGrade=\"ngModel\" (change)=\"loadSupervisor(positionDetails.grade_id)\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !employeeGrade.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Designation</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"designation\" [items]=\"designationData\" bindLabel=\"designationName\" bindValue=\"_id\" placeholder=\"Select Designation\" [(ngModel)]=\"positionDetails.designation_id\" #designation=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !designation.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Job Title</label>\r\n                                                <input type=\"text\" name=\"jobTitle\" id=\"jobTitle\"  class=\"form-control m-input m-input--air\" [(ngModel)]=\"positionDetails.jobTitle\" [(ngModel)]=\"positionDetails.jobTitle\" #jobTitle=\"ngModel\" disabled >\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">Supervisor</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"primarySupervisorEmp\" [items]=\"supervisorData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Supervisor\" [(ngModel)]=\"positionDetails.primarySupervisorEmp_id\" #primarySupervisorEmp=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !primarySupervisorEmp.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">HR SPOC</label>\r\n                                                <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"hrspoc\" [items]=\"hrspocData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select HR SPOC\" [(ngModel)]=\"positionDetails.hrspoc_id\" #hrspoc=\"ngModel\" (change)=\"loadBuisnessHrHead(positionDetails.hrspoc_id)\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !hrspoc.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label class=\"control-label\">Business HR Head\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"businessHrHead\" [items]=\"buisnessHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Business HR Head\" [(ngModel)]=\"positionDetails.businessHrHead_id\" #businessHrHead=\"ngModel\" (change)=\"loadGroupHrHead(positionDetails.businessHrHead_id)\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !businessHrHead.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label class=\"control-label\">Group HR Head\r\n                                                </label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"groupHrHead\" [items]=\"groupHrHeadData\" bindLabel=\"fullName\" bindValue=\"_id\" placeholder=\"Select Group HR Head\" [(ngModel)]=\"positionDetails.groupHrHead_id\" #groupHrHead=\"ngModel\" [clearable]=\"false\" required disabled></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !groupHrHead.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                        <!-- <div class=\"col-md-6 adn-form__group\">\r\n                                            <div class=\"m-form__group form-group\">\r\n                                                <label for=\"form_control_1\">User Role</label>\r\n                                                <span class=\"required\" aria-required=\"true\">* </span>\r\n                                                <ng-select class=\"m-input m-input--air\" name=\"role\" [items]=\"rolesData\" [multiple]=\"true\" bindLabel=\"roleName\" bindValue=\"_id\" placeholder=\"Select User Role\" [(ngModel)]=\"positionDetails.roles\" #role=\"ngModel\" required></ng-select>\r\n                                                <div class=\"form-control-feedback has-danger\" *ngIf=\"fpositionDetails.submitted && !role.valid \">\r\n                                                    This field is required.\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> -->\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\">\r\n                                             <!-- comment after demo -->\r\n                                        <!-- <button type=\"submit\" class=\"btn btn-success\">{{positionDetails._id ? 'Update':'Save'}}</button> -->\r\n                                        <!-- <button type=\"reset\" *ngIf=\"!positionDetails._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_15_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_15_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa flaticon-user-ok\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Performance Diary</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_15_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_15_head\" data-parent=\"#m_accordion_5\">\r\n                                 <!-- comment after demo -->\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadPerformanceDairyTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" #fperformanceDiary=\"ngForm\" (ngSubmit)=\"fperformanceDiary.valid && savePerformanceRatingInfo()\" novalidate=\"novalidate\">\r\n                                        <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 adn-form__group\" *ngFor=\"let performance of performanceDiary ;let j=index\">\r\n                                                    <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                                        <input type=\"text\" name=\"performanceDiary_id\" [(ngModel)]=\"performance._id\" #performanceDiary_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                        <input type=\"text\" name=\"performanceDiary_empid\" [(ngModel)]=\"performance.emp_id\" #performanceDiary_empid=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                        <input type=\"text\" name=\"performanceDiarystatus\" [(ngModel)]=\"performance.completed\" #performanceDiarystatus=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                                    </div>\r\n                                                    <div class=\"form-group m-form__group\">\r\n                                                        <label for=\"performanceRating1\">Performance Rating FY {{performance.performanceRatingName}}\r\n                                                        </label>\r\n                                                        <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"performance.performanceRatingValue\" #performanceRating1=\"ngModel\" id=\"performanceRating1\" name=\"performanceRating1\" placeholder=\"Enter performance rating\" type=\"text\" OnlyNumber=\"true\" disabled>\r\n                                                    </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"m-form__actions\">\r\n                                                <!-- comment after demo -->\r\n                                            <!-- <button type=\"submit\" class=\"btn btn-success\">{{performanceDiary._id ? 'Update':'Save'}}</button> -->\r\n                                            <!-- <button type=\"reset\" *ngIf=\"!performanceDiary._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                       </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{'active show':tabName=='payroll'}\" *ngIf=\"tabName=='payroll' && profileProcess.isSupervisorApproved\">\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_16_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_16_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fa-university\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Bank Details</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_16_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_16_head\" data-parent=\"#m_accordion_5\">\r\n                                <!-- comment after demo -->\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadBankDetails();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fbankDetails.valid && saveBankDetails()\" #fbankDetails=\"ngForm\" novalidate=\"novalidate\">\r\n                                    <div class=\"form-group m-form__group m--margin-top-10\">\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"bankDetails_id\" [(ngModel)]=\"bankDetails._id\" #bankDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"bankDetailsemp_id\" [(ngModel)]=\"bankDetails.emp_id\" #bankDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"bankName\">Bank Name\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.bankName\" #bankName=\"ngModel\" id=\"bankName\" name=\"bankName\" placeholder=\"Enter bank name\" type=\"text\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !bankName.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"accountName\">Account Name\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"bankDetails.accountName\" #accountName=\"ngModel\" id=\"accountName\" name=\"accountName\" placeholder=\"Enter Account Name\" type=\"text\" required  disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fbankDetails.submitted && !accountName.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"accountNumber\">Account Number\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" maxlength=\"15\" [(ngModel)]=\"bankDetails.accountNumber\" #accountNumber=\"ngModel\" id=\"accountNumber\" name=\"accountNumber\"  placeholder=\"Enter account number\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"currency\">Currency\r\n                                            </label>\r\n                                            <ng-select name=\"currency\" [items]=\"currencyArrData\" bindLabel=\"text\" bindValue=\"id\" [clearable]=\"false\" placeholder=\"Select currency\" [(ngModel)]=\"bankDetails.currency\" disabled>\r\n                                            </ng-select>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-form__actions\">\r\n                                         <!-- comment after demo -->\r\n                                        <!-- <button type=\"submit\" class=\"btn btn-success\">{{bankDetails._id ? 'Update':'Save'}}</button> -->\r\n                                        <!-- <button type=\"reset\" *ngIf=\"!bankDetails._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                    </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_17_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_17_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fa-money\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Salary Details (Monthly)</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div> \r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_17_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_17_head\" data-parent=\"#m_accordion_5\">\r\n                                <!-- comment after demo -->\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-success\" type=\"button\" (click)=\"isHikeSalary(fsalaryDetails);\"> <i class=\"fa fa-arrow-up\"></i> Hike </button>\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadSalaryInfoTabData();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div> \r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" (ngSubmit)=\"fsalaryDetails.valid && saveSalaryDetails()\" #fsalaryDetails=\"ngForm\" novalidate=\"novalidate\">\r\n                                    <!-- comment after demo -->\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"salaryDetails_id\" [(ngModel)]=\"salaryDetails._id\" #salaryDetails_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"salaryDetailsemp_id\" [(ngModel)]=\"salaryDetails.emp_id\" #salaryDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"salaryDetailsstatus\" [(ngModel)]=\"salaryDetails.status\" #salaryDetailsstatus=\"ngModel\" class=\"form-control m-input m-input--air\"  />\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"basic\">Basic\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.basic\" #basic=\"ngModel\" id=\"basic\" name=\"basic\" placeholder=\"Enter basic\" type=\"text\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !basic.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"houseRent\">House Rent Allowance (HRA)\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.hra\" #houseRent=\"ngModel\" id=\"houseRent\" name=\"houseRent\" placeholder=\"Enter house rent allowance (HRA)\" type=\"text\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !houseRent.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"conveyanceAllowance\">Conveyance Allowance\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.conveyanceAllowance\" #conveyanceAllowance=\"ngModel\" id=\"conveyanceAllowance\" name=\"conveyanceAllowance\" placeholder=\"Enter conveyance allowance\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"leaveFareAssistance \">Leave Fare Assistance (LFA)\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lfa\" #leaveFareAssistance=\"ngModel\" id=\"leaveFareAssistance\" name=\"leaveFareAssistance\" placeholder=\"Enter leave fare assistance (LFA)\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"medicalAllowance\">Medical Allowance\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.medicalAllowance\" #medicalAllowance=\"ngModel\" id=\"medicalAllowance\" name=\"medicalAllowance\" placeholder=\"Enter medical allowance\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"specialAllowance\">Special Allowance\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.specialAllowance\" #specialAllowance=\"ngModel\" id=\"specialAllowance\" name=\"specialAllowance\" placeholder=\"Enter special allowance\" type=\"text\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !specialAllowance.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"otherAllowance\">Other Allowance (If Any)\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.otherAllowance\" #otherAllowance=\"ngModel\" id=\"otherAllowance\" name=\"otherAllowance\" placeholder=\"Enter other allowance (if any)\" type=\"text\" disabled >\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"lunchAllowance\">Lunch Allowance\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.lunchAllowance\" #lunchAllowance=\"ngModel\" id=\"lunchAllowance\" name=\"lunchAllowance\" placeholder=\"Enter lunch allowance\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"mobileAllowance\">Mobile Allowance\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.mobileAllowance\" #mobileAllowance=\"ngModel\" id=\"mobileAllowance\" name=\"mobileAllowance\" placeholder=\"Enter mobile allowance\" type=\"text\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"grossSalary\">Gross Salary\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.grossSalary\" #grossSalary=\"ngModel\" id=\"grossSalary\" name=\"grossSalary\" placeholder=\"Enter gross salary\" type=\"text\" required disabled >\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !grossSalary.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\">totalEarnings\">Total Earnings\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input class=\"form-control m-input m-input--air\" [(ngModel)]=\"salaryDetails.totalEarnings\" #totalEarnings=\"ngModel\" id=\"totalEarnings\" name=\"totalEarnings\" placeholder=\"Enter total earnings\" type=\"text\" required disabled >\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !totalEarnings.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"festivalAllowance\">Festival Allowance\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"festivalAllowance\" [items]=\"festivalAllowanceData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Festival Allowance\" [(ngModel)]=\"salaryDetails.festivalAllowance\" [clearable]=\"false\" #festivalAllowance=\"ngModel\" required disabled></ng-select>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !festivalAllowance.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"providentFund\">Provident Fund Membership\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"providentFund\" [items]=\"providentFundMemberShipData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Provident Fund Membership\" [(ngModel)]=\"salaryDetails.providentFundMembership\" [clearable]=\"false\" #providentFund=\"ngModel\" required disabled></ng-select>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !providentFund.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"gLifeInsurance\">Group Life Insurance\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"gLifeInsurance\" [items]=\"groupLifeInsuranceData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.groupLifeInsurance\" [clearable]=\"false\" #gLifeInsurance=\"ngModel\" required disabled></ng-select>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !gLifeInsurance.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"hospitalizationScheme\">Hospitalization Scheme\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"hospitalizationScheme\" [items]=\"hospitalizationSchemeData\" bindLabel=\"text\" bindValue=\"id\" placeholder=\"Select Group Life Insurance\" [(ngModel)]=\"salaryDetails.hospitalizationScheme\" [clearable]=\"false\" #hospitalizationScheme=\"ngModel\" required  disabled></ng-select>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fsalaryDetails.submitted && !hospitalizationScheme.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-form__actions\">\r\n                                         <!-- comment after demo -->\r\n                                        <!-- <button type=\"submit\" class=\"btn btn-success\">{{salaryDetails._id ? 'Update':'Save'}}</button> -->\r\n                                        <!-- <button type=\"reset\" *ngIf=\"!salaryDetails._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                    </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"m-accordion m-accordion--default m-accordion--toggle-arrow\" id=\"m_accordion_5\" role=\"tablist\">\r\n                            <div class=\"m-accordion__item m-accordion__item--success\">\r\n                            <div class=\"m-accordion__item-head collapsed\" srole=\"tab\" id=\"m_accordion_5_item_19_head\" data-toggle=\"collapse\" href=\"#m_accordion_5_item_19_body\" aria-expanded=\"false\">\r\n                                <span class=\"m-accordion__item-icon\"><i class=\"fa fas fa-car\"></i></span>\r\n                                <span class=\"m-accordion__item-title\">Car Details</span>\r\n                                <span class=\"m-accordion__item-mode\"></span>\r\n                            </div>\r\n                            <div class=\"m-accordion__item-body collapse\" id=\"m_accordion_5_item_19_body\" role=\"tabpanel\" aria-labelledby=\"m_accordion_5_item_19_head\" data-parent=\"#m_accordion_5\">\r\n                                 <!-- comment after demo -->\r\n                                <!-- <div class=\"row\">\r\n                                    <div class=\"col-md-10\"> </div>\r\n                                    <div class=\"col-md-2 accordian-refresh\">\r\n                                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadCarDetails();showSpin()\"> <i class=\"fa fa-refresh\" [ngClass]=\"{'fa-spin': isSpin}\"></i> </button>\r\n                                    </div>\r\n                                </div> -->\r\n                                <div class=\"m-accordion__item-content\">\r\n                                    <form class=\"m-form m-form--fit m-form--label-align-right\" #fcarDetails=\"ngForm\" (ngSubmit)=\"fcarDetails.valid && saveCarDetails()\" novalidate=\"novalidate\">\r\n                                        <h5 class=\"m--font-success\">Company Car</h5>\r\n                                    <div class=\"row adn-form__group\">\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"companyCarDetailsemp_id\" [(ngModel)]=\"carDetails.emp_id\" #companyCarDetailsemp_id=\"ngModel\" class=\"form-control m-input m-input--air\" />\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\" hidden=\"true\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <input type=\"text\" name=\"companyCarDetailssstatus\" [(ngModel)]=\"carDetails.status\" #companyCarDetailssstatus=\"ngModel\" class=\"form-control m-input m-input--air\"  />\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"registrationNumber\">Registration number\r\n                                            <span class=\"required\" aria-required=\"true\"> * </span>\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyRegistrationNumber\" #companyRegistrationNumber=\"ngModel\" name=\"companyRegistrationNumber\" placeholder=\"Enter Registration number\" id=\"companyRegistrationNumber\" maxlength=\"15\" class=\"form-control m-input m-input--air\" required disabled>\r\n                                            <div class=\"form-control-feedback has-danger\" *ngIf=\"fcarDetails.submitted && !companyRegistrationNumber.valid \">\r\n                                                This field is required.\r\n                                            </div>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"effectiveDate\">Effective Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"effectiveDate\" [(ngModel)]=\"carDetails.companyEffectiveDate\" #ed=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled >\r\n                                        </div> \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"expiryDate1\">Expiry Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\"  name=\"expiryDate1\" [(ngModel)]=\"carDetails.companyExpiryDate\" #companyExpiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled >\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"fa\">Fuel Allowance\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyFuelAllowance\" #fa=\"ngModel\" name=\"fa\" placeholder=\"Enter fuel allowance\" id=\"fa\" class=\"form-control m-input m-input--air\" disabled >\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"companyMaintenanceAllowance\">Maintenance Allowance\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyMaintenanceAllowance\" #companyMaintenanceAllowance=\"ngModel\" name=\"companyMaintenanceAllowance\" placeholder=\"Enter maintenance allowance\" id=\"maintenanceAllowance\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"companyDriverAllowance\">Driver Allowance\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyDriverAllowance\" #companyDriverAllowance=\"ngModel\" name=\"companyDriverAllowance\" placeholder=\"Enter driver allowance\" id=\"driverAllowance\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"companyGrossPay\">Gross Pay\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.companyGrossPay\" #companyGrossPay=\"ngModel\" name=\"companyGrossPay\" placeholder=\"Enter gross pay\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group m-form__group m--margin-top-5\">\r\n                                        </div>\r\n                                        <h5 class=\"m--font-success .adn-form-title\">Personal Car</h5>\r\n                                    \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"privateRegistrationNumber\">Registration number\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.privateRegistrationNumber\" #privateRegistrationNumber=\"ngModel\" name=\"privateRegistrationNumber\" placeholder=\"Enter registration number\" id=\"regno\" maxlength=\"15\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"privateEffectiveDate\">Effective Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" name=\"privateEffectiveDate\" [(ngModel)]=\"carDetails.privateEffectiveDate\" #privateEffectiveDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\"  disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"privateEffectiveDate\">Expiry Date</label>\r\n                                            <input class=\"form-control m-input m-input--air\" placeholder=\"YYYY-DD-MM\" [readonly]=\"true\" (focus)=\"d23.open()\" name=\"privateExpiryDate\" [(ngModel)]=\"carDetails.privateExpiryDate\" #privateExpiryDate=\"ngModel\" bsDatepicker [bsConfig]=\"{ dateInputFormat: 'DD/MM/YYYY' }\" disabled >\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-6 adn-form__group\">\r\n                                        <div class=\"form-group m-form__group\">\r\n                                            <label for=\"privateCarUsageAllowance\">Usage Allowance\r\n                                            </label>\r\n                                            <input type=\"text\" [(ngModel)]=\"carDetails.privateCarUsageAllowance\" #privateCarUsageAllowance=\"ngModel\" name=\"privateCarUsageAllowance\" placeholder=\"Enter fuel allowance\" id=\"fa\" class=\"form-control m-input m-input--air\" disabled>\r\n                                        </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"m-form__actions\">\r\n                                         <!-- comment after demo -->\r\n                                        <!-- <button type=\"submit\" class=\"btn btn-success\">{{carDetails._id ? 'Update':'Save'}}</button> -->\r\n                                        <!-- <button type=\"reset\" *ngIf=\"!carDetails._id\" class=\"btn btn-secondary\">Cancel</button> -->\r\n                                    </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/my/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_service__ = __webpack_require__("./src/app/theme/pages/default/my/my.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__ = __webpack_require__("./node_modules/ngx-uploader/dist/ngx-uploader.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__ = __webpack_require__("./src/app/base/_interface/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var ProfileComponent = (function () {
    function ProfileComponent(platformId, meta, title, _route, _router, _authService, _commonService, _myService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this._myService = _myService;
        this.currentDate = new Date();
        //Local Variable for Profile 
        this.personalInfo = {};
        this.address = {};
        this.documents = {};
        this.academicInfo = [];
        this.joiningDetails = {};
        this.certificationsandTrainingInfo = [];
        this.previousEmploymentDetails = [];
        this.familyInfo = [];
        this.officeInfo = {};
        this.positionDetails = {};
        this.performanceDiary = [];
        this.bankDetails = {};
        this.salaryDetails = {};
        this.carDetails = {};
        this.exampleData = [];
        this.tabName = "personal";
        this.params = "";
        //Personal Info Tav Dropdown Variable
        this.bloodGropData = [];
        this.religionData = [];
        this.maritialStatusData = [];
        this.nationalityData = [];
        // Address Tab Dropdown Variable
        this.currentAddressDistrictData = [];
        this.currentAddressThanaData = [];
        this.currentAddressDivisionData = [];
        this.permanentAddressDistrictData = [];
        this.permanentAddressThanaData = [];
        this.permanentAddressDivisionData = [];
        //Academic Tab Dropdown Variable
        this.resultsData = [];
        this.levelOfEducationData = [];
        this.examDegreeTitleData = [];
        //Postion Details Tab Dropdown Variable 
        this.companiesData = [];
        this.divisionData = [];
        this.deparmentData = [];
        this.verticalData = [];
        this.subverticalData = [];
        this.gradeData = [];
        this.employmentTypeData = [];
        this.employmentStatusData = [];
        this.supervisorData = [];
        this.hrspocData = [];
        this.buisnessHrHeadData = [];
        this.groupHrHeadData = [];
        this.designationData = [];
        //rolesData: any = [];
        this.managementTypeData = [];
        //Bank Details Tab Dropdown Variable
        this.currencyArrData = [];
        //Salary Details Tab Dropdown Variable
        this.providentFundMemberShipData = [];
        this.groupLifeInsuranceData = [];
        this.festivalAllowanceData = [];
        this.hospitalizationSchemeData = [];
        this.relationData = [];
        this.countryData = [];
        this.isSpin = false;
        this.profileProcess = {
            isEmployeeSubmitted: true,
            isHrSubmitted: false,
            isHrSendBack: false,
            isSupervisorApproved: false,
            isSupervisorSendBack: false
        };
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
        this.uploadInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = __WEBPACK_IMPORTED_MODULE_6_ngx_uploader__["b" /* humanizeBytes */];
        this.currentDate = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.queryParams.subscribe(function (params) {
            if (params['tabName']) {
                _this.tabName = params['tabName'];
            }
            _this._authService.validateToken().subscribe(function (res) {
                _this._currentEmpId = _this._authService.currentUserData._id;
                _this.initData();
            });
        });
    };
    ProfileComponent.prototype.initData = function () {
        this.loadProcessInfoDetails();
        switch (this.tabName) {
            case "personal":
                this.loadPersonal();
                break;
            case "documents":
                this.loadDocuments();
                break;
            case "education":
                this.loadEducation();
                break;
            case "employment":
                this.loadEmploymentDetails();
                break;
            case "family":
                this.loadFamilyInfoTabData();
                break;
            case "office":
                this.loadOfficeDetails();
                break;
            case "payroll":
                this.loadPayrollDetails();
                break;
            default:
                this.loadPersonal();
        }
    };
    ProfileComponent.prototype.onUploadOutput = function (output, fileName) {
        var atCurrentAuthData = this._authService.currentAuthData;
        if (output.type === 'allAddedToQueue') {
            // uncomment this if you want to auto upload files when added
            var event_1 = {
                fieldName: 'profileDocuments',
                type: 'uploadAll',
                url: __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].api_base.apiBase + '/' + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].api_base.apiPath + '/upload/document',
                headers: {
                    'access-token': atCurrentAuthData.accessToken,
                    'client': atCurrentAuthData.client,
                    'expiry': atCurrentAuthData.expiry,
                    'token-type': atCurrentAuthData.tokenType,
                    'uid': atCurrentAuthData.uid
                },
                method: 'POST',
            };
            this.uploadInput.emit(event_1);
        }
        else if (output.type === 'done') {
            if (output.file.responseStatus == 200) {
                switch (fileName) {
                    case 'smartCard':
                        this.documents.nationalIdSmartCardDocURL = output.file.response.key || '';
                        break;
                    case 'smartOldCard':
                        this.documents.nationalIDOldFormatDocURL = output.file.response.key || '';
                        break;
                    case 'birth':
                        this.documents.birthRegistrationNumberDocURL = output.file.response.key || '';
                        break;
                    case 'passport':
                        this.documents.passportNumberDocURL = output.file.response.key || '';
                        break;
                    default:
                        break;
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Error!", "Error on Upload " + fileName, "error");
            }
        }
    };
    ProfileComponent.prototype.showSpin = function () {
        var that = this;
        that.isSpin = true;
        setTimeout(function () {
            that.isSpin = false;
        }, 500);
    };
    ProfileComponent.prototype.showDocumentImagePopUp = function (filedName) {
        switch (filedName) {
            case 'smartCard':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.nationalIdSmartCardDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.nationalIdSmartCardDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'smartOldCard':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.nationalIDOldFormatDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.nationalIDOldFormatDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'birth':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.birthRegistrationNumberDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.birthRegistrationNumberDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
            case 'passport':
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    imageUrl: this.documents.passportNumberDocURL ? __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + this.documents.passportNumberDocURL : __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.imgBase + __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].content_api_base.noImagePath,
                    imageHeight: 700,
                    //imageWidth: 5000,
                    showConfirmButton: false,
                });
                break;
        }
    };
    ProfileComponent.prototype.deleteDocImage = function (imagePath, imageTypeName) {
        var _this = this;
        this._myService.deleteImage({ key: imagePath }).subscribe(function (res) {
            if (res.ok) {
                _this.documents[imageTypeName] = null;
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
            }
        }, function (error) {
        });
        ;
    };
    ProfileComponent.prototype.showDeleteMessage = function () {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Error!", "Image not found", "error");
    };
    ProfileComponent.prototype.deleteDocumentImage = function (fileName) {
        switch (fileName) {
            case 'smartCard':
                var isdeleted = this.documents.nationalIdSmartCardDocURL ? this.deleteDocImage(this.documents.nationalIdSmartCardDocURL, 'nationalIdSmartCardDocURL') : this.showDeleteMessage();
                break;
            case 'smartOldCard':
                var isdeletedOld = this.documents.nationalIDOldFormatDocURL ? this.deleteDocImage(this.documents.nationalIDOldFormatDocURL, 'nationalIDOldFormatDocURL') : this.showDeleteMessage();
                break;
            case 'birth':
                var isdeletedbirth = this.documents.birthRegistrationNumberDocURL ? this.deleteDocImage(this.documents.birthRegistrationNumberDocURL, 'birthRegistrationNumberDocURL') : this.showDeleteMessage();
                break;
            case 'passport':
                var isdeletedpassport = this.documents.passportNumberDocURL ? this.deleteDocImage(this.documents.passportNumberDocURL, 'passportNumberDocURL') : this.showDeleteMessage();
                break;
            default:
                break;
        }
    };
    ProfileComponent.prototype.setPermentAddress = function () {
        if (this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = this.address.currentAddressLine1;
            this.address.permanentAddressLine2 = this.address.currentAddressLine2;
            this.address.permanentAddressDistrict_id = this.address.currentAddressDistrict_id;
            this.address.permanentAddressDivision_id = this.address.currentAddressDivision_id;
            this.address.permanentAddressThana_id = this.address.currentAddressThana_id;
            this.address.permanentAddressPostCode = this.address.currentAddressPostCode;
            // this.loadpermanentAddressDistrictData(this.address.currentAddressDivision_id,"init");
            // this.loadpermanentAddressThanaData(this.address.currentAddressDistrict_id,"init");
        }
    };
    ProfileComponent.prototype.resetPermentAddress = function () {
        if (!this.address.isSameAsCurrent) {
            this.address.permanentAddressLine1 = null;
            this.address.permanentAddressLine2 = null;
            this.address.permanentAddressDistrict_id = null;
            this.address.permanentAddressDivision_id = null;
            this.address.permanentAddressThana_id = null;
            this.address.permanentAddressPostCode = null;
            this.permanentAddressDistrictData = [];
            this.permanentAddressThanaData = [];
        }
    };
    ProfileComponent.prototype.loadProcessInfoDetails = function () {
        var _this = this;
        this._myService.getProfileProcessInfo(this._currentEmpId)
            .subscribe(function (data) {
            if (data.ok) {
                _this.profileProcess = data.json();
            }
        }, function (error) {
        });
    };
    //save Personal Info
    ProfileComponent.prototype.saveProfileStatus = function () {
        var _this = this;
        this.profileProcess["employeeStatus"] = 'Submitted';
        this._myService.saveProfileStatus(this.profileProcess)
            .subscribe(function (data) {
            _this.profileProcess = data.json() || {};
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                type: 'success',
                title: 'Submit!',
                titleText: "Profile submitted successfully.",
            });
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadTabStatus = function () {
        var _this = this;
        this._commonService.getTabStatus(this._currentEmpId)
            .subscribe(function (data) {
            var tabData = data.json();
            if (tabData.isPersonalInfo
                && tabData.isAddress
                && tabData.isDocuments
                && tabData.isAcademicInfo
                && tabData.isCertificate
                && tabData.isEmployment
                && tabData.isFamilyInfo) {
                _this.profileProcess["employeeStatus"] = "Submitted";
                _this.saveProfileStatus();
            }
            else
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'error', title: 'Error!', titleText: "Please fill detail of personal info.", });
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'error', title: 'Error!', titleText: error.json().error.message, });
        });
    };
    //save Personal Info
    ProfileComponent.prototype.submitProfile = function () {
        this.loadTabStatus();
    };
    //save Personal Info
    ProfileComponent.prototype.savePersonalInfo = function () {
        var _this = this;
        mApp.block('#m_accordion_5_item_1_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this._myService.savePersonalInfo(this.personalInfo)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.personalInfo = data.json() || {};
            _this.personalInfo.dob = _this.personalInfo.dob ? new Date(_this.personalInfo.dob) : _this.personalInfo.dob;
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    ProfileComponent.prototype.checkEmailExists = function (_element) {
        if (_element.valid) {
            this._commonService.checkEmailExists(_element.value)
                .subscribe(function (data) {
                if (data.json())
                    _element.control.setErrors({ "emailExists": true });
            }, function (error) {
                _element.control.setErrors(null);
            });
        }
    };
    //save Address Info
    ProfileComponent.prototype.saveAddressInfo = function () {
        var _this = this;
        if (this.address.isSameAsCurrent) {
            this.setPermentAddress();
        }
        this.address.emp_id = this.address.emp_id != null ? this.address.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveAddressInfo(this.address)
            .subscribe(function (data) {
            // swal({type: 'success',title: 'Saved',text:'Successfully',showConfirmButton: false,timer: 800})
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.address = data.json() || {};
        }, function (error) {
        });
    };
    ProfileComponent.prototype.saveDocumentsInfo = function () {
        var _this = this;
        this.documents.emp_id = this.documents.emp_id != null ? this.documents.emp_id : (this._currentEmpId || this.param_emp_id);
        mApp.block('#m_accordion_5_item_9_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this._myService.saveDocumentsInfo(this.documents)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_9_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.documents = data.json() || {};
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_9_body');
        });
    };
    //save Address Info
    ProfileComponent.prototype.saveAcademicInfo = function (objAcademicInfo, index) {
        var _this = this;
        mApp.block('#m_accordion_5_item_10_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        objAcademicInfo.emp_id = objAcademicInfo.emp_id != null ? objAcademicInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveAcademicInfo(objAcademicInfo)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_10_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.academicInfo[index] = data.json();
            if (_this.academicInfo[index].levelOfEducation_id) {
                _this.loadExamDegreeTitle(_this.academicInfo[index].levelOfEducation_id, index, "init");
            }
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_10_body');
        });
    };
    //save CertificationAndTraningInfo Info
    ProfileComponent.prototype.saveCertificationandTrainingInfo = function (objCertification, index) {
        var _this = this;
        objCertification.emp_id = objCertification.emp_id != null ? objCertification.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveCertificationInfo(objCertification)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.certificationsandTrainingInfo[index] = data.json();
        }, function (error) {
        });
    };
    //save EmploymentDetils Info
    ProfileComponent.prototype.savePreviousEmploymentDetails = function (objPerviousEmployment, index) {
        var _this = this;
        objPerviousEmployment.emp_id = objPerviousEmployment.emp_id != null ? objPerviousEmployment.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.savePreviousEmploymentInfo(objPerviousEmployment)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.previousEmploymentDetails[index] = data.json();
            _this.previousEmploymentDetails[index].employmentPeriodFrom = _this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(_this.previousEmploymentDetails[index].employmentPeriodFrom) : _this.previousEmploymentDetails[index].employmentPeriodFrom;
            _this.previousEmploymentDetails[index].employmentPeriodTo = _this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(_this.previousEmploymentDetails[index].employmentPeriodTo) : _this.previousEmploymentDetails[index].employmentPeriodTo;
        }, function (error) {
        });
    };
    //save Family Info
    ProfileComponent.prototype.saveFamilyInfo = function (objFamily, index) {
        var _this = this;
        objFamily.emp_id = objFamily.emp_id != null ? objFamily.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveFamilyInfo(objFamily)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.familyInfo[index] = data.json();
            _this.familyInfo[index].dateOfBirth = _this.familyInfo[index].dateOfBirth ? new Date(_this.familyInfo[index].dateOfBirth) : _this.familyInfo[index].dateOfBirth;
        }, function (error) {
        });
    };
    //save Office Info
    ProfileComponent.prototype.saveOfficeInfo = function () {
        var _this = this;
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveOfficeInfo(this.officeInfo)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.officeInfo = data.json();
            _this.officeInfo.dateOfJoining = _this.officeInfo.dateOfJoining ? new Date(_this.officeInfo.dateOfJoining) : _this.officeInfo.dateOfJoining;
            _this.officeInfo.dateOfConfirmation = _this.officeInfo.dateOfConfirmation ? new Date(_this.officeInfo.dateOfConfirmation) : _this.officeInfo.dateOfConfirmation;
            _this.officeInfo.workPermitEffectiveDate = _this.officeInfo.workPermitEffectiveDate ? new Date(_this.officeInfo.workPermitEffectiveDate) : _this.officeInfo.workPermitEffectiveDate;
            _this.officeInfo.workPermitExpiryDate = _this.officeInfo.workPermitExpiryDate ? new Date(_this.officeInfo.workPermitExpiryDate) : _this.officeInfo.workPermitExpiryDate;
        }, function (error) {
        });
    };
    //save Office Info
    ProfileComponent.prototype.savePositionInfo = function () {
        var _this = this;
        this.officeInfo.emp_id = this.officeInfo.emp_id != null ? this.officeInfo.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.savePositionInfo(this.positionDetails)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.positionDetails = data.json();
        }, function (error) {
        });
    };
    //save Bank Info
    ProfileComponent.prototype.saveBankDetails = function () {
        var _this = this;
        mApp.block('#m_accordion_5_item_16_body', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
        });
        this.bankDetails.emp_id = this.bankDetails.emp_id != null ? this.bankDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveBankDetails(this.bankDetails)
            .subscribe(function (data) {
            mApp.unblock('#m_accordion_5_item_16_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.bankDetails = data.json();
        }, function (error) {
            mApp.unblock('#m_accordion_5_item_16_body');
        });
    };
    //save Salary Info
    ProfileComponent.prototype.saveSalaryDetails = function () {
        var _this = this;
        this.salaryDetails.emp_id = this.salaryDetails.emp_id != null ? this.salaryDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveSalaryDetails(this.salaryDetails)
            .subscribe(function (data) {
            // mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.salaryDetails = data.json();
        }, function (error) {
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    //save Car Details
    ProfileComponent.prototype.saveCarDetails = function () {
        var _this = this;
        this.carDetails.emp_id = this.carDetails.emp_id != null ? this.carDetails.emp_id : (this._currentEmpId || this.param_emp_id);
        this._myService.saveCarDetails(this.carDetails)
            .subscribe(function (data) {
            //mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.carDetails = data.json();
            _this.carDetails.companyEffectiveDate = _this.carDetails.companyEffectiveDate ? new Date(_this.carDetails.companyEffectiveDate) : _this.carDetails.companyEffectiveDate;
            _this.carDetails.companyExpiryDate = _this.carDetails.companyExpiryDate ? new Date(_this.carDetails.companyExpiryDate) : _this.carDetails.companyExpiryDate;
            _this.carDetails.privateEffectiveDate = _this.carDetails.privateEffectiveDate ? new Date(_this.carDetails.privateEffectiveDate) : _this.carDetails.privateEffectiveDate;
            _this.carDetails.privateExpiryDate = _this.carDetails.privateExpiryDate ? new Date(_this.carDetails.privateExpiryDate) : _this.carDetails.privateExpiryDate;
        }, function (error) {
            _this.carDetails = {};
            ;
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    ProfileComponent.prototype.savePerformanceRatingInfo = function () {
        var _this = this;
        this._myService.savePerformanceRatingInfo(this.performanceDiary)
            .subscribe(function (data) {
            //mApp.unblock('#m_accordion_5_item_1_body');
            __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
            _this.performanceDiary = data.json();
        }, function (error) {
            _this.performanceDiary = [];
            //mApp.unblock('#m_accordion_5_item_1_body');
        });
    };
    //save Seperation Info
    ProfileComponent.prototype.saveSeperationInfo = function () {
        // this._authService.saveSeperationInfo(this.empProfile.address)
        // .subscribe(
        // data => {
        //     this.empProfile.address=data.json();
        // },
        // error => {
        // });
    };
    //delete Academic Info
    ProfileComponent.prototype.deleteAcademicInfo = function (academicInfo_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteAcademicInfo(academicInfo_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        _this.removeHtmlContain("academicInfo", academicInfo_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Previous Employment
    ProfileComponent.prototype.deletePreviousEmployment = function (previousEmployment_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deletePreviousEmploymentInfo(previousEmployment_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("employment", previousEmployment_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Family Info
    ProfileComponent.prototype.deleteFamilyInfo = function (family_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteFamilyInfo(family_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("family", family_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    //delete Family Info
    ProfileComponent.prototype.deleteCertificationInfo = function (certification_id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "Do you want to delete it?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Delete'
        }).then(function (result) {
            if (result.value) {
                _this._myService.deleteCertificationInfo(certification_id)
                    .subscribe(function (data) {
                    if (data.ok) {
                        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()("Deleted", "Successfully", "success");
                        _this.removeHtmlContain("certification", certification_id);
                    }
                }, function (error) {
                    //mApp.unblock('#m_accordion_5_item_1_body');
                });
            }
        });
    };
    ProfileComponent.prototype.showHideWaitingCircle = function (_id, isHide) {
        if (!isHide)
            mApp.block(_id, {
                overlayColor: '#000000',
                type: 'loader',
                state: 'success',
            });
        else
            mApp.unblock(_id);
    };
    ProfileComponent.prototype.saveSuccessMesssage = function () {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({ type: 'success', title: 'Saved', text: 'Successfully', showConfirmButton: false, timer: 800 });
    };
    //Add New Html on Click of Add Button 
    ProfileComponent.prototype.addNewHtmlContain = function (subTabName) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["a" /* AcademicInfo */]());
                break;
            case "certification":
                this.certificationsandTrainingInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["b" /* CertificationInfo */]());
                break;
            case "employment":
                this.previousEmploymentDetails.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["d" /* PreviousEmploymentInfo */]());
                break;
            case "family":
                this.familyInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["c" /* FamilyInfo */]());
                break;
        }
    };
    //Remove Html on After Delete 
    ProfileComponent.prototype.removeHtmlContain = function (subTabName, _id) {
        switch (subTabName) {
            case "academicInfo":
                this.academicInfo = this.academicInfo.filter(function (x) { return x._id != _id; });
                if (this.academicInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "certification":
                this.certificationsandTrainingInfo = this.certificationsandTrainingInfo.filter(function (x) { return x._id != _id; });
                if (this.certificationsandTrainingInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "employment":
                this.previousEmploymentDetails = this.previousEmploymentDetails.filter(function (x) { return x._id != _id; });
                if (this.previousEmploymentDetails.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
            case "family":
                this.familyInfo = this.familyInfo.filter(function (x) { return x._id != _id; });
                if (this.familyInfo.length == 0) {
                    this.addNewHtmlContain(subTabName);
                }
                break;
        }
    };
    //Check wheather HTML is Added or Not
    ProfileComponent.prototype.isAdded = function (subTabName) {
        switch (subTabName) {
            case "academicInfo":
                if (this.academicInfo.filter(function (x) { return x._id == null || x._id == undefined && x.isCompleted == true; }).length == 0) {
                    return false;
                }
                return true;
            case "certification":
                if (this.certificationsandTrainingInfo.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
            case "employment":
                if (this.previousEmploymentDetails.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
            case "family":
                if (this.familyInfo.filter(function (x) { return x._id == null || x._id == undefined; }).length == 0) {
                    return false;
                }
                return true;
        }
    };
    //Load Personal Info Tab Data;
    ProfileComponent.prototype.loadPersonalInfoTabData = function () {
        var _this = this;
        //Init Data Personal Info Tab
        this.bloodGropData = this._commonService.getBloodGroup();
        this.religionData = this._commonService.getReligion();
        this.maritialStatusData = this._commonService.getMartialStatus();
        this.nationalityData = this._commonService.getNationality();
        this._myService.getPersonalInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.personalInfo = data.json() || {};
            _this.personalInfo.dob = _this.personalInfo.dob ? new Date(_this.personalInfo.dob) : _this.personalInfo.dob;
        }, function (error) {
        });
    };
    //Load Address Tab Data.
    ProfileComponent.prototype.loadAddressTabData = function () {
        var _this = this;
        this.loadcurrentDivison();
        this.loadpermanentDivison();
        this._myService.getAddressInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.address = data.json() || {};
            if (data.json()) {
                _this.loadcurrentAddressDistrictData(_this.address.currentAddressDivision_id, 'init');
                _this.loadcurrentAddressThanaData(_this.address.currentAddressDistrict_id);
                _this.loadpermanentAddressDistrictData(_this.address.permanentAddressDivision_id, 'init');
                _this.loadpermanentAddressThanaData(_this.address.permanentAddressDistrict_id, "init");
            }
            else {
                _this.address.isSameAsCurrent = false;
            }
        }, function (error) {
        });
    };
    //Load Permanent Division Dropdown Data 
    ProfileComponent.prototype.loadpermanentDivison = function () {
        var _this = this;
        this._commonService.getlocation().subscribe(function (res) {
            if (res.ok) {
                _this.permanentAddressDistrictData = [];
                _this.permanentAddressThanaData = [];
                _this.permanentAddressDivisionData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Permanent District Dropdown Data 
    ProfileComponent.prototype.loadpermanentAddressDistrictData = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(division_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.permanentAddressDistrict_id = null;
                    _this.address.permanentAddressThana_id = null;
                    _this.permanentAddressThanaData = [];
                }
                _this.permanentAddressDistrictData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Permanent Thana Dropdown Data 
    ProfileComponent.prototype.loadpermanentAddressThanaData = function (district_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(district_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.permanentAddressThana_id = null;
                }
                _this.permanentAddressThanaData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current Division Dropdown Data 
    ProfileComponent.prototype.loadcurrentDivison = function () {
        var _this = this;
        this._commonService.getlocation().subscribe(function (res) {
            if (res.ok) {
                _this.currentAddressDistrictData = [];
                _this.currentAddressThanaData = [];
                _this.currentAddressDivisionData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current District Dropdown Data 
    ProfileComponent.prototype.loadcurrentAddressDistrictData = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getlocation(division_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.address.currentAddressDistrict_id = null;
                    _this.address.currentAddressThana_id = null;
                    _this.currentAddressThanaData = [];
                }
                _this.currentAddressDistrictData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Current Thana Dropdown Data
    ProfileComponent.prototype.loadcurrentAddressThanaData = function (district_id) {
        var _this = this;
        this._commonService.getlocation(district_id).subscribe(function (res) {
            if (res.ok) {
                _this.currentAddressThanaData = res.json();
            }
        }, function (error) {
        });
    };
    //Load Person Page Data 
    ProfileComponent.prototype.loadPersonal = function () {
        this.loadPersonalInfoTabData();
        this.loadAddressTabData();
    };
    //Load Documents Page Data 
    ProfileComponent.prototype.loadDocuments = function () {
        var _this = this;
        this._myService.getDocumentsInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.documents = data.json() || {};
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadlevelOfEducation = function () {
        var _this = this;
        this._commonService.getEducation().subscribe(function (res) {
            if (res.ok) {
                _this.levelOfEducationData = res.json();
            }
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadExamDegreeTitle = function (parent_id, index, onLoad) {
        var _this = this;
        this._commonService.getEducation(parent_id).subscribe(function (res) {
            if (res.ok) {
                _this.academicInfo[index].examDegreeTitleData = res.json();
                if (!onLoad) {
                    _this.academicInfo[index].examDegreeTitle_id = null;
                }
            }
        }, function (error) {
        });
    };
    //Load Academic Info Tab Data
    ProfileComponent.prototype.loadAcademicInfoTabData = function () {
        var _this = this;
        this.resultsData = this._commonService.getResults();
        //  this.levelOfEducationData = this._commonService.getLevelOfEducation();
        //  this.examDegreeTitleData = this._commonService.getExamDegreeTitle();
        this.loadlevelOfEducation();
        this._myService.getAcademicInfo(this._currentEmpId)
            .subscribe(function (res) {
            _this.academicInfo = res.json().data;
            if (_this.academicInfo.length == 0) {
                _this.academicInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["a" /* AcademicInfo */]());
            }
            else {
                for (var i = 0; i < _this.academicInfo.length; i++) {
                    _this.loadExamDegreeTitle(_this.academicInfo[i].levelOfEducation_id, i, "init");
                }
            }
        }, function (error) {
            _this.academicInfo = [];
        });
    };
    //Load Certification & Traning Tab Data
    ProfileComponent.prototype.loadCertificateAndTraningInfoTabData = function () {
        var _this = this;
        this._myService.getCertificationInfo(this._currentEmpId)
            .subscribe(function (res) {
            _this.certificationsandTrainingInfo = res.json().data;
            if (_this.certificationsandTrainingInfo.length == 0) {
                _this.certificationsandTrainingInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["b" /* CertificationInfo */]());
            }
        }, function (error) {
        });
    };
    //Load Education Page Data
    ProfileComponent.prototype.loadEducation = function () {
        this.loadAcademicInfoTabData();
        this.loadCertificateAndTraningInfoTabData();
    };
    ProfileComponent.prototype.loadEmploymentDetails = function () {
        var _this = this;
        this._myService.getPreviousEmploymentInfo(this._currentEmpId)
            .subscribe(function (res) {
            _this.previousEmploymentDetails = res.json().data;
            if (_this.previousEmploymentDetails.length == 0) {
                _this.previousEmploymentDetails.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["d" /* PreviousEmploymentInfo */]());
            }
            else {
                for (var index = 0; index < _this.previousEmploymentDetails.length; index++) {
                    _this.previousEmploymentDetails[index].employmentPeriodFrom = _this.previousEmploymentDetails[index].employmentPeriodFrom ? new Date(_this.previousEmploymentDetails[index].employmentPeriodFrom) : null;
                    _this.previousEmploymentDetails[index].employmentPeriodTo = _this.previousEmploymentDetails[index].employmentPeriodTo ? new Date(_this.previousEmploymentDetails[index].employmentPeriodTo) : null;
                }
            }
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadRelation = function () {
        var _this = this;
        this._commonService.getRelation()
            .subscribe(function (res) {
            if (res.ok) {
                _this.relationData = res.json() || [];
            }
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadFamilyInfo = function () {
        var _this = this;
        this._myService.getFamilyInfo(this._currentEmpId)
            .subscribe(function (res) {
            _this.familyInfo = res.json().data;
            if (_this.familyInfo.length == 0) {
                _this.familyInfo.push(new __WEBPACK_IMPORTED_MODULE_7__base_interface_user_model__["c" /* FamilyInfo */]());
            }
            else {
                for (var index = 0; index < _this.familyInfo.length; index++) {
                    _this.familyInfo[index].dateOfBirth = _this.familyInfo[index].dateOfBirth ? new Date(_this.familyInfo[index].dateOfBirth) : null;
                }
            }
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadFamilyInfoTabData = function () {
        this.loadRelation();
        this.loadFamilyInfo();
    };
    ProfileComponent.prototype.loadOfficeInfoTabData = function () {
        var _this = this;
        this.countryData = this._commonService.getCountry();
        this._myService.getOfficeDetails(this._currentEmpId)
            .subscribe(function (data) {
            _this.officeInfo = data.json() || {};
            _this.officeInfo.dateOfJoining = _this.officeInfo.dateOfJoining ? new Date(_this.officeInfo.dateOfJoining) : _this.officeInfo.dateOfJoining;
            _this.officeInfo.dateOfConfirmation = _this.officeInfo.dateOfConfirmation ? new Date(_this.officeInfo.dateOfConfirmation) : _this.officeInfo.dateOfConfirmation;
            _this.officeInfo.workPermitEffectiveDate = _this.officeInfo.workPermitEffectiveDate ? new Date(_this.officeInfo.workPermitEffectiveDate) : _this.officeInfo.workPermitEffectiveDate;
            _this.officeInfo.workPermitExpiryDate = _this.officeInfo.workPermitExpiryDate ? new Date(_this.officeInfo.workPermitExpiryDate) : _this.officeInfo.workPermitExpiryDate;
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadJoiningDetailsTabData = function () {
        //this._authService.getOfficeDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json()|| {};
        // },
        // error => {
        // });
    };
    //load Roles Dropdown Data init
    // loadRoles() {
    //     this._commonService.getRole().subscribe(
    //         res => {
    //             if (res.ok) {
    //                 this.rolesData = res.json() || [];
    //             }
    //         },
    //         error => {
    //             this.rolesData = [];
    //         });
    // }
    //load Emoloyement Status Dropdown Data init
    ProfileComponent.prototype.loadEmploymentStatus = function () {
        var _this = this;
        this._commonService.getEmploymentStatus()
            .subscribe(function (res) {
            if (res.ok) {
                _this.employmentStatusData = res.json();
            }
        }, function (error) {
            _this.employmentStatusData = [];
        });
    };
    //load Division Dropdown Data init
    ProfileComponent.prototype.loadDivision = function () {
        var _this = this;
        this._commonService.getDivision()
            .subscribe(function (res) {
            if (res.ok) {
                _this.divisionData = res.json();
            }
        }, function (error) {
        });
    };
    //load Companies Dropdown Data init
    ProfileComponent.prototype.loadCompanies = function () {
        var _this = this;
        this._commonService.getComapnies()
            .subscribe(function (res) {
            if (res.ok) {
                _this.hrspocData = [];
                _this.buisnessHrHeadData = [];
                _this.groupHrHeadData = [];
                _this.companiesData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown
    ProfileComponent.prototype.loadManagementType = function (onLoad) {
        var _this = this;
        this._commonService.getManagementType()
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.employmentTypeData = [];
                    _this.gradeData = [];
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.managementType_id = null;
                    _this.positionDetails.employmentType_id = null;
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.managementTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load HR Spoce By company_id
    ProfileComponent.prototype.loadHRSpoce = function (company_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(company_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.buisnessHrHeadData = [];
                    _this.groupHrHeadData = [];
                    _this.positionDetails.hrspoc_id = null;
                    _this.positionDetails.businessHrHead_id = null;
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.hrspocData = res.json() || [];
            }
        }, function (error) {
            _this.hrspocData = [];
        });
    };
    //load Buisness Hr Head By hrspoc_id
    ProfileComponent.prototype.loadBuisnessHrHead = function (hrspoc_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(this.positionDetails.company_id, hrspoc_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.groupHrHeadData = [];
                    _this.positionDetails.businessHrHead_id = null;
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.buisnessHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //load Vertical Dropdown By department_id 
    ProfileComponent.prototype.loadVertical = function (department_id, onLoad) {
        var _this = this;
        this._commonService.getVertical(department_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.verticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load SubVertical Dropdown By vertical_id 
    ProfileComponent.prototype.loadSubVertical = function (vertical_id, onLoad) {
        var _this = this;
        this._commonService.getSubVertical(vertical_id)
            .subscribe(function (res) {
            if (res.ok) {
                _this.subverticalData = res.json();
            }
        }, function (error) {
        });
    };
    //load Employment Type By managementType_id 
    ProfileComponent.prototype.loadEmploymentType = function (managementType_id, onLoad) {
        var _this = this;
        this._commonService.getEmploymentType(managementType_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.gradeData = [];
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.employmentType_id = null;
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.employmentTypeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Grade Dropdown By managementType_id  && employmentType_id
    ProfileComponent.prototype.loadGrade = function (managementType_id, employmentType_id, onLoad) {
        var _this = this;
        this._commonService.getGrade(managementType_id, employmentType_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.supervisorData = [];
                    _this.designationData = [];
                    _this.positionDetails.grade_id = null;
                    _this.positionDetails.primarySupervisorEmp_id = null;
                    _this.positionDetails.designation_id = null;
                }
                _this.gradeData = res.json();
            }
        }, function (error) {
        });
    };
    //load Supervisor By grade_id
    ProfileComponent.prototype.loadSupervisor = function (grade_id, onLoad) {
        var _this = this;
        this._commonService.getSupervisor(grade_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.primarySupervisorEmp_id = null;
                }
                _this.supervisorData = res.json();
            }
        }, function (error) {
        });
    };
    //load Group Hr Head By hrspoc_id
    ProfileComponent.prototype.loadGroupHrHead = function (businessHrHead_id, onLoad) {
        var _this = this;
        this._commonService.getHrSpoce(this.positionDetails.company_id, businessHrHead_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.groupHrHead_id = null;
                }
                _this.groupHrHeadData = res.json();
            }
        }, function (error) {
        });
    };
    //load Designation By grade_id
    ProfileComponent.prototype.loadDesignation = function (grade_id, onLoad) {
        var _this = this;
        this._commonService.getDesignation(grade_id).subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.designation_id = null;
                }
                _this.designationData = res.json();
            }
        }, function (error) {
        });
    };
    //load Department Dropdown By divisonId 
    ProfileComponent.prototype.loadDepartment = function (division_id, onLoad) {
        var _this = this;
        this._commonService.getDepartment(division_id)
            .subscribe(function (res) {
            if (res.ok) {
                if (!onLoad) {
                    _this.positionDetails.department_id = null;
                    _this.positionDetails.vertical_id = null;
                    _this.positionDetails.subVertical_id = null;
                    _this.verticalData = [];
                    _this.subverticalData = [];
                }
                _this.deparmentData = res.json();
            }
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadPositionDetailsTabData = function () {
        var _this = this;
        this.loadCompanies();
        this.loadDivision();
        this.loadManagementType('init');
        this.loadEmploymentStatus();
        //this.loadRoles();
        this._myService.getPositionDetails(this._currentEmpId)
            .subscribe(function (data) {
            _this.positionDetails = data.json() || {};
            if (data.json()) {
                _this.loadDepartment(_this.positionDetails.division_id, "init");
                _this.loadEmploymentType(_this.positionDetails.managementType_id, "init");
                _this.loadGrade(_this.positionDetails.managementType_id, _this.positionDetails.employmentType_id, "init");
                _this.loadHRSpoce(_this.positionDetails.company_id, "init");
                _this.loadBuisnessHrHead(_this.positionDetails.hrspoc_id, "init");
                _this.loadGroupHrHead(_this.positionDetails.businessHrHead_id, "init");
                _this.loadVertical(_this.positionDetails.department_id, "init");
                _this.loadSubVertical(_this.positionDetails.vertical_id, "init");
                _this.loadSupervisor(_this.positionDetails.grade_id, "init");
                _this.loadDesignation(_this.positionDetails.grade_id, "init");
            }
        }, function (error) {
            _this.positionDetails = {};
        });
    };
    ProfileComponent.prototype.loadPerformanceDairyTabData = function () {
        var _this = this;
        this._myService.getPerformanceDairyDeatils(this._currentEmpId)
            .subscribe(function (data) {
            _this.performanceDiary = data.json() || [];
        }, function (error) {
        });
    };
    ProfileComponent.prototype.loadOfficeDetails = function () {
        this.loadOfficeInfoTabData();
        //this.loadJoiningDetailsTabData();
        this.loadPositionDetailsTabData();
        this.loadPerformanceDairyTabData();
    };
    ProfileComponent.prototype.loadBankDetails = function () {
        var _this = this;
        this.currencyArrData = this._commonService.getCurrency();
        this._myService.getBankInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.bankDetails = data.json() || {};
        }, function (error) {
            _this.bankDetails = {};
        });
    };
    ProfileComponent.prototype.loadSalaryInfoDropdownData = function () {
        this.providentFundMemberShipData = this._commonService.getProvidentFundMemberShip();
        this.groupLifeInsuranceData = this._commonService.getGroupLifeInsurance();
        this.festivalAllowanceData = this._commonService.getFestivalAllowance();
        this.hospitalizationSchemeData = this._commonService.getHospitalizationScheme();
    };
    ProfileComponent.prototype.loadSalaryInfo = function () {
        var _this = this;
        this._myService.getSalaryInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.salaryDetails = data.json() || {};
        }, function (error) {
            _this.salaryDetails = {};
        });
    };
    ProfileComponent.prototype.loadSalaryInfoTabData = function () {
        this.loadSalaryInfoDropdownData();
        this.loadSalaryInfo();
    };
    ProfileComponent.prototype.isHikeSalary = function (form) {
        __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
            title: 'Are you sure?',
            text: "You want add new salary details!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#66BB6A',
            cancelButtonColor: '#9a9caf',
            confirmButtonText: 'Yes',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(function (result) {
            if (result.value) {
                form.resetForm();
            }
        });
    };
    ProfileComponent.prototype.loadCarDetails = function () {
        var _this = this;
        this._myService.getCarInfo(this._currentEmpId)
            .subscribe(function (data) {
            _this.carDetails = data.json() || {};
            _this.carDetails.companyEffectiveDate = _this.carDetails.companyEffectiveDate ? new Date(_this.carDetails.companyEffectiveDate) : _this.carDetails.companyEffectiveDate;
            _this.carDetails.companyExpiryDate = _this.carDetails.companyExpiryDate ? new Date(_this.carDetails.companyExpiryDate) : _this.carDetails.companyExpiryDate;
            _this.carDetails.privateEffectiveDate = _this.carDetails.privateEffectiveDate ? new Date(_this.carDetails.privateEffectiveDate) : _this.carDetails.privateEffectiveDate;
            _this.carDetails.privateExpiryDate = _this.carDetails.privateExpiryDate ? new Date(_this.carDetails.privateExpiryDate) : _this.carDetails.privateExpiryDate;
        }, function (error) {
            _this.carDetails = {};
        });
    };
    ProfileComponent.prototype.loadPayrollDetails = function () {
        this.loadBankDetails();
        this.loadSalaryInfoTabData();
        this.loadCarDetails();
    };
    ProfileComponent.prototype.loadSeperation = function () {
        //this._authService.getSeperationDetails(this.empProfile.empId)
        // .subscribe(
        // data => {
        //     this.empProfile.personalInfo=data.json();
        // },
        // error => {
        // });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--profile",
            template: __webpack_require__("./src/app/theme/pages/default/my/profile/profile.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
            styles: ["input[type=\"file\"]{\n        opacity: 0;\n    }"]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__base_services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__base_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_5__my_service__["a" /* MyService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/learning/learning.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/learning/learning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLearningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyLearningComponent = (function () {
    function MyLearningComponent() {
    }
    MyLearningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/workflows/learning/learning.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], MyLearningComponent);
    return MyLearningComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/pap/pap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-content\">\r\n    <div class=\"row\">\r\n       <div class=\"col-md-12\">\r\n          <div class=\"m-portlet m-portlet--tabs m-portlet--success m-portlet--head-solid-bg m-portlet--head-sm\">\r\n             <div class=\"m-portlet__head\">\r\n                <div class=\"m-portlet__head-caption\">\r\n                   <div class=\"m-portlet__head-title\">\r\n                      <h3 class=\"m-portlet__head-text\">\r\n                         Submit KRA\r\n                         <small>\r\n                         </small>\r\n                      </h3>\r\n                   </div>\r\n                </div>\r\n                <div class=\"m-portlet__head-tools\">\r\n                   <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand  m-tabs-line--right m-tabs-line-danger\" role=\"tablist\">\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                         <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_9_1\" role=\"tab\" aria-selected=\"false\">\r\n                         <i class=\"la la-print\"></i>\r\n                         Print\r\n                         </a>\r\n                      </li>\r\n                      <!-- <li class=\"nav-item dropdown m-tabs__item\">\r\n                         <a aria-expanded=\"true\" aria-haspopup=\"true\" class=\"nav-link m-tabs__link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" ng-reflect-href=\"#\">\r\n                         <i class=\"la la-user\"></i> Options\r\n                         </a>\r\n                         <div class=\"dropdown-menu dropdown-menu-right\" x-placement=\"bottom-end\" style=\"position: absolute; transform: translate3d(-26px, 56px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                            <a class=\"dropdown-item active\" data-toggle=\"tab\" href=\"#m_tabs_9_1\" ng-reflect-href=\"#m_tabs_9_1\">\r\n                            Print\r\n                            </a>\t\t\t\t\t\t\t\t\r\n                         </div>\r\n                      </li> -->\r\n                   </ul>\r\n                </div>\r\n             </div>\r\n             <div class=\"m-portlet__body\">\r\n                <div class=\"m-section\" >\r\n\r\n                   <div class=\"m-section__content\" *ngIf=\"isKraAvaliable\">  \r\n                      <!-- <form class=\"m-form m-form--fit m-form--label-align-right\"  novalidate> -->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-bordered table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                    <th>\r\n                                        #\r\n                                    </th>\r\n                                    <th>\r\n                                        KRA\r\n                                    </th>\r\n                                    <th style=\"width: 170px;\">\r\n                                        KRA Category\r\n                                    </th>\r\n                                    <th>\r\n                                        Weightage\r\n                                    </th>\r\n                                    <th>\r\n                                        Unit of Success\r\n                                    </th>\r\n                                    <th>\r\n                                        Measure of Success\r\n                                    </th>\r\n                                    <th>\r\n                                        Supervisor\r\n                                    </th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let kras of kraInfos;let i=index\">\r\n                                       <th scope=\"row\">\r\n                                            {{i+1}}\r\n                                       </th> \r\n                                        <td>\r\n                                            <textarea style=\"resize:none\" name=\"kraOne\" id=\"kraOne\" [(ngModel)]=\"kras.kra\" #kra=\"ngModel\" class=\"form-control m-input m-input--air\" [disabled]=\"isDisabled\"></textarea>\r\n                                        </td>\r\n                                        <td>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"kraCategory\" id=\"kraCategory\" [items]=\"kraCategoryData\" bindLabel=\"text\"  bindValue=\"id\" placeholder=\"Select KRA Category\" [(ngModel)]=\"kras.category_id\" [clearable]=\"false\" #kraCategory=\"ngModel\" [disabled]=\"isDisabled\"></ng-select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"kraWeightage\" id=\"kraWeightage\" [items]=\"weightageData\" bindLabel=\"text\"  bindValue=\"id\" placeholder=\"Weightage\" [(ngModel)]=\"kras.weightage_id\" [clearable]=\"false\" #kraWeightage=\"ngModel\" [disabled]=\"isDisabled\"></ng-select>\r\n                                        </td>\r\n                                        <td>\r\n                                            <textarea name=\"unitOfSuccess\" id=\"unitOfSuccess\" [(ngModel)]=\"kras.unitOfSuccess\" #unitOfSuccess=\"ngModel\" class=\"form-control m-input m-input--air\"></textarea>\r\n                                        </td>\r\n                                        <td>\r\n                                            <textarea name=\"measureOfSuccess\" id=\"measureOfSuccess\" [(ngModel)]=\"kras.measureOfSuccess\" #measureOfSuccess=\"ngModel\" class=\"form-control m-input m-input--air\"></textarea>\r\n                                        </td>\r\n                                        <td>\r\n                                            <ng-select class=\"m-input m-input--air\" name=\"supervisor\" id=\"supervisor\" [items]=\"supervisorData\" bindLabel=\"text\"  bindValue=\"id\" placeholder=\"Select Supervisor\" [(ngModel)]=\"kras.supervisor_id\" [clearable]=\"false\" #supervisorOne=\"ngModel\" [disabled]=\"isDisabled\"></ng-select>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <br>\r\n                        <button class=\"btn btn-success m-btn--air\" type=\"button\" (click)=\"onKraSubmit()\" [disabled]=\"isDisabled\">\r\n                           Submit\r\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <button  class=\"btn btn-metal m-btn--air\" type=\"button\" (click)=\"onKraSubmit()\" [disabled]=\"isDisabled\">\r\n                           Save as Draft\r\n                        </button>\r\n                    <!-- </form> -->\r\n                   </div><br><br>\r\n                   <div class=\"row m-portlet__body m-portlet m-portlet--tabs  m-portlet--head-solid-bg m-portlet--bordered\" *ngIf=\"isKraAvaliable\">\r\n                        <div class=\"tab-content\">\r\n                            <div class=\"m-widget3\">\r\n                                <div class=\"m-widget3__item\">\r\n                                    <div class=\"m-widget3__header\">\r\n                                        <div class=\"m-widget3__user-img\">\r\n                                            <img class=\"m-widget3__img\" src=\"./assets/app/media/img/users/user6.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"m-widget3__info\">\r\n                                            <span class=\"m-widget3__username\" id=\"hrName\">\r\n                                                Test HR\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget3__time\" id=\"dateTime\">\r\n                                                2 day ago\r\n                                            </span>\r\n                                        </div>\r\n                                        <span class=\"m-badge m-badge--success m-badge--wide\" id=\"kraStatus\">\r\n                                            accepted\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget3__body\">\r\n                                        <p class=\"m-widget3__text m--font-success\" id=\"kraTimeline\">\r\n                                            Your KRA has been Accepted.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget3__item\">\r\n                                    <div class=\"m-widget3__header\">\r\n                                        <div class=\"m-widget3__user-img\">\r\n                                            <img class=\"m-widget3__img\" src=\"./assets/app/media/img/users/user6.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"m-widget3__info\">\r\n                                            <span class=\"m-widget3__username\" id=\"supervisorName\">\r\n                                                Test Supervisor\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget3__time\">\r\n                                                1 weeks ago\r\n                                            </span>\r\n                                        </div>\r\n                                        <span class=\"m-badge m-badge--info m-badge--wide\">\r\n                                            initiated\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget3__body\">\r\n                                        <p class=\"m-widget3__text m--font-info\" >\r\n                                            Your KRA has been Initiated.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget3__item\">\r\n                                    <div class=\"m-widget3__header\">\r\n                                        <div class=\"m-widget3__user-img\">\r\n                                            <img class=\"m-widget3__img\" src=\"./assets/app/media/img/users/user6.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"m-widget3__info\">\r\n                                            <span class=\"m-widget3__username\" id=\"hrName\">\r\n                                                Test HR\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget3__time\">\r\n                                               2 weeks ago\r\n                                            </span>\r\n                                        </div>\r\n                                        <span class=\"m-badge m-badge--danger m-badge--wide\">\r\n                                            rejected\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget3__body\">\r\n                                        <p class=\"m-widget3__text m--font-danger\">\r\n                                            Your KRA has been rejected.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget3__item\">\r\n                                    <div class=\"m-widget3__header\">\r\n                                        <div class=\"m-widget3__user-img\">\r\n                                            <img class=\"m-widget3__img\" src=\"./assets/app/media/img/users/user6.jpg\" alt=\"\">\r\n                                        </div>\r\n                                        <div class=\"m-widget3__info\">\r\n                                            <span class=\"m-widget3__username\" id=\"supervisorName\">\r\n                                                Test Supervisor\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget3__time\">\r\n                                                3 weeks ago\r\n                                            </span>\r\n                                        </div>\r\n                                        <span class=\"m-badge m-badge--info m-badge--wide\">\r\n                                            initiated\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"m-widget3__body\">\r\n                                        <p class=\"m-widget3__text m--font-info\">\r\n                                            Your KRA has been Initiated.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"m-section__content\" *ngIf=\"!isKraAvaliable\"> \r\n                        You have no kra is initiated.\r\n                    </div>\r\n                </div>\r\n             </div>\r\n          </div>\r\n       </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/pap/pap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_service__ = __webpack_require__("./src/app/theme/pages/default/my/my.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_services_common_service__ = __webpack_require__("./src/app/base/_services/common.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_services_authService_service__ = __webpack_require__("./src/app/base/_services/authService.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_sweetalert2__);
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







var MyPapComponent = (function () {
    function MyPapComponent(platformId, meta, title, _route, _router, _authService, _commonService, _myService) {
        this.platformId = platformId;
        this._route = _route;
        this._router = _router;
        this._authService = _authService;
        this._commonService = _commonService;
        this._myService = _myService;
        this.weightageData = [];
        this.supervisorData = [];
        this.kraInfos = [];
        this.isSubmitted = false;
        this.kraArrLength = 7;
        this.isKraAvaliable = false;
        this.isDisabled = false;
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);
    }
    MyPapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kraCategoryData = [
            {
                "id": "Strategic Initiative",
                "text": "Strategic Initiative"
            },
            {
                "id": "Functional/Customer Deliverables",
                "text": "Functional/Customer Deliverables"
            },
            {
                "id": "Financial Deliverables",
                "text": "Financial Deliverables"
            },
            {
                "id": "Internal Process Development/Optimization",
                "text": "Internal Process Development/Optimization"
            },
            {
                "id": "People Development",
                "text": "People Development"
            }
        ];
        this.weightageData = [
            {
                "id": 0,
                "text": 0
            },
            {
                "id": 10,
                "text": 10
            },
            {
                "id": 15,
                "text": 15
            },
            {
                "id": 20,
                "text": 20
            },
            {
                "id": 25,
                "text": 25
            },
            {
                "id": 30,
                "text": 30
            },
            {
                "id": 35,
                "text": 35
            }
        ];
        this.supervisorData = [
            {
                id: 1010006,
                text: 'C1 Primary Supervisor1'
            },
            {
                id: 1010007,
                text: 'C1 Secondary Supervisor1'
            },
        ];
        this._authService.validateToken().subscribe(function (res) {
            _this._currentEmpId = _this._authService.currentUserData._id;
            _this.loadKra();
        });
        // for (let j = 0; j < 7; j++) {
        //     let data={
        //         kra:"Test Kra" + j,
        //         category_id:"Internal Process Development/Optimization",
        //         weightage_id:10,
        //         unitOfSuccess:"Sud",
        //         measureOfSuccess:"Sud",
        //         supervisor_id:1010006,
        //         kraWorkflow_id:1
        //     };
        //     this.kraInfos.push(data);
        // }
    };
    MyPapComponent.prototype.onKraSubmit = function (isSaveDraft) {
        this._myService.saveKra(this.kraInfos)
            .subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_6_sweetalert2___default()("Kra is submitted.", "", "success");
        }, function (error) {
        });
    };
    MyPapComponent.prototype.loadKra = function () {
        var _this = this;
        this._commonService.getKraDetailsData(this._currentEmpId)
            .subscribe(function (res) {
            var resData = res.json().data;
            if (resData.length > 0) {
                _this.isKraAvaliable = true;
            }
            else {
                _this.isKraAvaliable = false;
            }
            if (resData[0].kraDetails.length > 0) {
                _this.kraInfos = resData[0].kraDetails;
                if (resData[0].status == "submitted" || resData[0].status == "approved") {
                    _this.isDisabled = true;
                }
            }
            else {
                if (resData[0].status == "initiated" && resData[0].kraDetails.length == 0) {
                    _this.addDummyRow(resData[0]._id);
                }
            }
        }, function (error) {
        });
    };
    MyPapComponent.prototype.addDummyRow = function (_id) {
        for (var j = 0; j < 7; j++) {
            var data = {
                _id: "",
                kra: "",
                category_id: "",
                weightage_id: "",
                unitOfSuccess: "",
                measureOfSuccess: "",
                supervisor_id: "",
                kraWorkflow_id: _id
            };
            this.kraInfos.push(data);
        }
    };
    MyPapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/workflows/pap/pap.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* PLATFORM_ID */])),
        __metadata("design:paramtypes", [Object,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__base_services_authService_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__base_services_common_service__["a" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_3__my_service__["a" /* MyService */]])
    ], MyPapComponent);
    return MyPapComponent;
}());



/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/pip/pip.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/theme/pages/default/my/workflows/pip/pip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MyPipComponent = (function () {
    function MyPipComponent() {
    }
    MyPipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
            template: __webpack_require__("./src/app/theme/pages/default/my/workflows/pip/pip.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        })
    ], MyPipComponent);
    return MyPipComponent;
}());



/***/ })

});
//# sourceMappingURL=my.module.chunk.js.map