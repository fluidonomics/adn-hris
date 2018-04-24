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
    levelofEducation,examDegreeTitle
} from "../_jsonData/dropDownData";
import { AuthService } from "../_services/authService.service"



@Injectable()
export class CommonService {
    constructor(private authService: AuthService,
        private http: Http) {
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
            url = "common/getSupervisor?grade_id" + grade_id;
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
            url = "common/getSubVertical?verticalId" + verticalId;
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

    
    getEducation(parent_id?:number) {
        let url = "common/getEducation";
        if(parent_id)
        {
           url = "common/getEducation?parent_id="+parent_id;
        }
        return this.authService.get(url).map(this.extractData).catch(this.handleError);
     
    }

    getLevelOfEducation() {
        return levelofEducation;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
    }

    getExamDegreeTitle() {
        return examDegreeTitle;
        // let url=this.ApiPath+"/getNationality";
        // return this.http.get(url).map((response: Response) => response.json());
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
