import { Injectable, } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
    currency,
    nationality,
    results,
    bloodGroup,
    separationType,
    festivalAllowance,
    providentFundMembership,
    groupLifeInsurance,
    hospitalizationScheme,
    martialStatus,
    confirmationStatus,
    religion,
    country,
    levelofEducation, examDegreeTitle, separationData, permissionData
} from "../_jsonData/dropDownData";
import { AuthService } from "./authService.service"



@Injectable()
export class CommonService {
    constructor(private authService: AuthService,
        private http: Http) {
    }

    getEmployee(emp_id?: number) {
        let url = "user/getALLEmployee";
        if (emp_id) {
            url = "common/getEmployee?emp_id=" + emp_id;
        }

        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getFinancialYear() {
        let url = "common/getFinincialYear";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getCurrentFinancialYear() {
        let url = "common/getFinincialYear";
        return this.authService.get(url).map(this.extractData).map(res => {
            let data = (res as any).json() || [];
            if (data && data.length > 0) {
                let currentFinYear = data.find(f => f.isYearActive == true);
                return currentFinYear;
            }
        }).catch(this.handleError);
    }

    getHrSpoce(company_id?: number, emp_id?: number): Observable<Response> {
        let url = "common/getHr";
        if (company_id && emp_id) {
            url = "common/getHr?company_id=" + company_id + "&emp_id=" + emp_id;
        }
        else if (company_id) {
            url = "common/getHr?company_id=" + company_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getSupervisor(grade_id?: number): Observable<Response> {
        let url = "common/getSupervisor";
        if (grade_id) {
            url = "common/getSupervisor?grade_id=" + grade_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getManagementType(): Observable<Response> {
        let url = "common/getManagementType";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmploymentStatus(): Observable<Response> {
        let url = "common/getEmploymentStatus";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmploymentType(managementType_id?: number): Observable<Response> {
        let url = "common/getEmploymentType";
        if (managementType_id) {
            url = "common/getEmploymentType?managementType_id=" + managementType_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getRole(): Observable<Response> {
        let url = "common/getRole";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getComapnies(): Observable<Response> {
        let url = "common/getCompany";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getDivision(): Observable<Response> {
        let url = "common/getDivision";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getDepartment(division_id?: number): Observable<Response> {
        let url = "common/getDepartment";
        if (division_id) {
            url = "common/getDepartment?division_id=" + division_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getVertical(department_id?: number): Observable<Response> {
        let url = "common/getVertical";
        if (department_id) {
            url = "common/getVertical?department_id=" + department_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSubVertical(verticalId?: number): Observable<Response> {
        let url = "common/getSubVertical";
        if (verticalId) {
            url = "common/getSubVertical?vertical_id=" + verticalId;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getGrade(managementType_id?: number, employmentType_id?: number): Observable<Response> {
        let url = "common/getGrade";
        if (managementType_id && employmentType_id) {
            url = "common/getGrade?managementType_id=" + managementType_id + "&employmentType_id=" + employmentType_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getDesignation(grade_id?: number): Observable<Response> {
        let url = "common/getDesignation";
        if (grade_id) {
            url = "common/getDesignation?department_id=" + grade_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getlocation(parent_id?: number): Observable<Response> {
        let url = "common/getLocation";
        if (parent_id) {
            url = "common/getLocation?parent_id=" + parent_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getSeperationType(): Observable<Response> {
        let url = "common/getSeperationType";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEducationLevels(): Observable<Response> {
        let url = "common/getEducationLevels";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getExamDegree(): Observable<Response> {
        let url = "common/getExamDegree";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getExamResult(): Observable<Response> {
        let url = "common/getExamResult";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }


    getRelation(): Observable<Response> {
        let url = "common/getRelation";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getFacility(): Observable<Response> {
        let url = "common/getFacility";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCompanyBusiness(): Observable<Response> {
        let url = "common/getCompanyBusiness";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getDocuments(): Observable<Response> {
        let url = "common/getDocuments";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getCurrency() {
        return currency;
    }


    getReligion() {
        return religion;
        // let url="common/getReligion";
        //  return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getFestivalAllowance() {
        return festivalAllowance;
        // let url="common/getFestivalAllowance";
        //  return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    //getProvidentFundMemberShip():Observable<Response>
    getProvidentFundMemberShip() {
        return providentFundMembership;
        // let url=this.ApiPath+"/getProvidentFundMemberShip";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    //getGroupLifeInsurance():Observable<Response>
    getGroupLifeInsurance() {
        return groupLifeInsurance;
        // let url=this.ApiPath+"/getGroupLifeInsurance";
        // return this.http.get(url).map((response: Response) => response.json());
    }


    //getGroupLifeInsurance():Observable<Response>
    getHospitalizationScheme() {
        return hospitalizationScheme;
        // let url=this.ApiPath+"/getGroupLifeInsurance";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    //getBloodGroup():Observable<Response>
    getBloodGroup() {
        return bloodGroup;
        // let url=this.ApiPath+"/getBloodGroup";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    //getMartialStatus():Observable<Response>
    getMartialStatus() {
        return martialStatus;
        // let url=this.ApiPath+"/getMartialStatus";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    //getNationality():Observable<Response>
    getNationality() {
        return nationality;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    getCountry() {
        return country;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    getResults() {
        return results;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    getPermissionData() {
        return permissionData;
    }

    getSeparationData() {
        return separationData;
    }
    
    getEducation(parent_id?: number) {
        let url = "common/getEducation";
        if (parent_id) {
            url = "common/getEducation?parent_id=" + parent_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);

    }

    getTabStatus(emp_id?: number) {
        let url = "common/getTabStatus"
        if (emp_id) {
            url = "common/getTabStatus?emp_id=" + emp_id
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }




    sendEmail(data: any) {
        let url = "common/sendEmail"
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    checkEmailExists(data: string, emp_id: number) {
        let url = "common/checkEmailExists?email=" + data + "&&emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    checkPersonalEmail(_element) {
        if (_element.value.toUpperCase() != "HRIS@ADNSL.NET") {
            if (_element.value.search("adnsl.net") != -1) {
                _element.control.setErrors({ "pattern": true });
                return false;
            } else {
                _element.control.setErrors(null);
                return true;
            }
        } else {
            return false;
        }
    }

    checkUserNameExists(data: string) {
        let url = "common/checkUserNameExists?userName=" + data
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getLevelOfEducation() {
        return levelofEducation;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }


    getKraCategory() {
        let url = "common/getKraCategoryInfo";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getKraWeightage() {
        let url = "common/getKraWeightageInfo";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getKraSupervisor(emp_id: number) {
        let url = "common/getKraSupervisor?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getExamDegreeTitle() {
        return examDegreeTitle;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    getEmployeeSupervisor(emp_id) {
        let url = "common/getEmployeeSupervisor?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeeRoles(emp_id) {
        let url = "common/getEmployeeRoles?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeeDocument(emp_id) {
        let url = "common/getEmployeeDocument?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }
    getPapRatingScale() {
        let url = "master/getPapRatingScale";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getBatchInfo(): Observable<Response> {
        let url = "batch/getBatchInfo";
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getKraWorkFlowInfoByBatch(batch_id: number): Observable<Response> {
        let url = "kra/getKraWorkFlowInfoByBatch?batch_id=" + batch_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    getEmployeeExternalDocument(emp_id: number): Observable<Response> {
        let url = "externalDocument/getEmployeeExternalDocumentInfo?emp_id=" + emp_id;
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
    }

    saveEmployeeDocuments(data: any) {
        let url = "externalDocument/addEmployeeExternalDocumentInfo";
        if (data._id) {
            url = "externalDocument/deleteEmployeeExternalDocumentInfo";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    saveEmployeeRoles(data: any) {
        let url = "common/addEmployeeRole";
        if (data._id) {
            url = "common/updateEmployeeRole";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    saveSupervisor(data: any) {
        let url = "common/addEmployeeSupervisor";
        if (data._id) {
            url = "common/updateEmployeeSupervisor";
        }
        return this.authService.post(url, data).map(this.extractData).catch(this.handleError);
    }

    // saveBatchStatus(data:any):Observable<Response>
    // {
    //     let url = "kra/updateBatchStatus";
    //     return this.authService.post(url,data).map(this.extractData).catch(this.handleError);
    // }

    resetPasswordByHr(emp_id: number): Observable<Response> {
        let url = "common/resetPasswordByHr";
        return this.authService.post(url, { emp_id: emp_id }).map(this.extractData).catch(this.handleError);
    }

    private extractData(res: Response) {
        return res || {};
        // let body = res.json();
        // return body || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}
