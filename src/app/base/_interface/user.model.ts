export class AcademicInfo {
    _id: number = null;
    emp_id: number = null;
    levelOfEducation_id: number = null;
    examDegreeTitle_id: number = null;
    concentration: string = null;
    instituteName: string = null;
    marks: number = null;
    result: string = null;
    cgpa: string = null;
    scale: string = null;
    yearOfPassing: string = null;
    duration: number = null;
    achievements: string = null;
    examDegreeTitleData:any={}
}
export class AddressInfo {
    _id: number = null;
    emp_id: number = null;
    permanentAddressLine1: string = null;
    permanentAddressLine2: string = null;
    permanentAddressThana_id: number = null;
    permanentAddressDistrict_id: number = null;
    permanentAddressDivision_id: number = null;
    permanentAddressPostCode: number = null;

    currentAddressLine1: string = null;
    currentAddressLine2: string = null;
    currentAddressThana_id: number = null;
    currentAddressDistrict_id: number = null;
    currentAddressDivision_id: number = null;
    currentAddressPostCode: number = null;
    isSameAsCurrent: boolean = null;
}
export class BankInfo {
    _id: number = null;
    emp_id: number = null;
    bankName: string = null;
    accountName: string = null;
    accountNumber: string = null;
    currency: string = null;
    modeOfPaymentType: string = null;
}
export class CarInfo {
    _id: number = null;
    emp_id: number = null;
    companyRegistrationNumber: string = null;
    companyEffectiveDate: Date = null;
    companyExpiryDate: Date = null;
    companyFuelAllowance: string = null;
    companyMaintenanceAllowance: string = null;
    companyDriverAllowance: string = null;
    companyGrossPay: string = null;
    privateRegistrationNumber: string = null;
    privateEffectiveDate: Date = null;
    privateExpiryDate: Date = null;
    privateCarUsageAllowance: string = null;
}
export class CertificationInfo {
    _id: number = null;
    emp_id: number = null;
    certificationTitle: string = null;
    location: string = null;
    institution: string = null;
    duration: string = null;
    topicsCovered: string = null;
}
export class ContractInfo {
    _id: number = null;
    emp_id: number = null;
    contractPeriod: number = null;
    isContractExtended: boolean = null;
    IsContractCompleted: boolean = null;
}
export class EmployeeInfo {
    _id: number = null;
    fullName: string = null;
    userName: string = null;
    password: string = null;
    company_id: number = null;
    profileImage: string = null;
    employmentType_id: number = null;
    designation_id: number = null;
    grade_id: number = null;
    resetPasswordToken: string = null;
    resetPassword: boolean = null;
    resetPasswordExpires: Date = null;
}
export class DocumentsInfo {
    _id: number = null;
    emp_id: number = null;
    nationalIdSmartCard: string = null;
    nationalIdSmartCardDocURL: string = null;
    passportNumber: string = null;
    passportNumberDocURL: string = null;
    birthRegistrationNumber: string = null;
    birthRegistrationNumberDocURL: string = null;
    nationalIDOldFormat: string = null;
    nationalIDOldFormatDocURL: string = null;
}
export class FamilyInfo {
    _id: number = null;
    emp_id: number = null;
    name: string = null;
    relation_id: number = null;
    dateOfBirth: string = null;
    contact: string = null;
}
export class OfficeInfo {
    _id: number = null;
    emp_id: number = null;
    idCardNumber: number = null;
    officeEmail: string = null;
    officePhone: number = null;
    officeMobile: number = null;
    facility: string = null;
    city_id: number = null;
    country_id: number = null;
    costCentre: number = null;
    dateOfJoining: Date = null;
    dateOfConfirmation: Date = null;

    employmentStatus_id: string = null;
    managementType_id: number = null;
    jobTitle: string = null;
    groupHrHead_id: number = null;
    businessHrHead_id: number = null;
    division_id: number = null;
    department_id: number = null;
    vertical_id: number = null;
    subVertical_id: number = null;
    tenureOfContract: number = null;

    workPermitNumber: string = null;
    workPermitEffectiveDate: Date = null;
    workPermitExpiryDate: Date = null;
    employeeCategory: string = null;
    reviewer_id: number = null;
    hrspoc_id: number = null;
}
export class PersonalInfo {
    _id: number = null;
    emp_id: number = null;
    gender: string = null;
    personalMobileNumber: number = null;
    personalEmail: string = null;
    dob: Date = null;
    bloodGroup: string = null;
    religion: string = null;
    nationality: string = null;
    homePhone: number = null;
    motherName: string = null;
    fatherName: string = null;
    maritialStatus: string = null;
    emergencyContactPerson: string = null;
    emergencyContactNumber: number = null;
    isCompleted: string = null;
}
export class PreviousEmploymentInfo {
    _id: number = null;
    emp_id: number = null;
    companyName: string = null;
    companyBusiness: string = null;
    designation: string = null;
    department: string = null;
    responsibility: string = null;
    companyLocation: string = null;
    employmentPeriod: string = null;
    areaOfExperience: string = null;
    employmentPeriodFrom: Date = null;
    employmentPeriodTo: Date = null;
}
export class ProbationInfo {
    _id: number = null;
    emp_id: number = null;
    probationPeriod: number = null;
    isProbationExtended: boolean = null;
    IsProbationCompleted: boolean = null;
}
export class RoleInfo {
    _id: number = null;
    emp_id: number = null;
    role_id: number = null;
}
export class SalaryInfo {
    _id: number = null;
    emp_id: number = null;
    basic: string = null;
    hra: string = null;
    conveyanceAllowance: string = null;
    lfa: string = null;
    medicalAllowance: string = null;
    specialAllowance: string = null;
    grossSalary: string = null;
    lunchAllowance: string = null;
    mobileAllowance: string = null;
    otherAllowance: string = null;
    totalEarnings: string = null;
    festivalAllowance: string = null;
    providentFundMembership: string = null;
    groupLifeInsurance: string = null;
    hospitalizationScheme: string = null;
    isSalaryHike: boolean = null;
}
export class SeparationInfo {
    _id: number = null;
    emp_id: number = null;
    dateOfResignation: Date = null;
    dateOfSeparation: Date = null;
    effectiveDate: Date = null;
    separationType: string = null;
}
export class SupervisorInfo {
    _id: number = null;
    emp_id: string = null;
    primarySupervisorEmp_id: string = null;
    secondarySupervisorEmp_id: string = null;
    reason: string = null;
    leaveSupervisorEmp_id: string = null;
}

