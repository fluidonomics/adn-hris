import { Injectable } from '@angular/core';
import { AuthService } from '../../../../../base/_services/authService.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class LeaveService {

    constructor(
        private authService: AuthService,
        private utilityService: UtilityService
    ) {
    }

    getCancelEmployeeLeaveDetails(_empId: number) {
        let url = "leave/getCancelEmployeeLeaveDetails?emp_id=" + _empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeEmailDetails() {
        let url = "leave/getEmployeEmailDetails";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveCancelLeave(leave: any) {
        let url = "leave/cancelLeave";
        return this.authService.post(url, leave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveType(): Observable<Response> {
        let url = "leave/getLeaveTypes";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveEmployeeLeaveDetails(leavesData: any): Observable<Response> {
        let url = "leave/applyLeave";
        return this.authService.post(url, leavesData).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeLeaveDetails(_empId: number): Observable<Response> {
        let url = "leave/getEmployeeLeaveDetails?emp_id=" + _empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getWorkflowHistory(_id: number): Observable<Response> {
        let url = "leave/getLeaveWorkflowDetails?id=" + _id;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getAllEmployee() {
        let url = "user/getAllEmployee";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    grantLeaveAllEmployee(grantLeave: any) {
        let url = "leave/grantLeaveAllEmployee";
        return this.authService.post(url, grantLeave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    grantLeaveByDepartment(grantLeave: any) {
        let url = "leave/grantLeaveByDepartment";
        return this.authService.post(url, grantLeave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    grantLeaveByEmployee(grantLeave: any) {
        let url = "leave/grantLeaveByEmployee";
        return this.authService.post(url, grantLeave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeLeaveBalance(empId: number) {
        let url = "leave/getEmployeeLeaveBalance?id=" + empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getHRLeaveDetails() {
        let url = "leave/getHRLeaveDetails";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveHolidays(year: any) {
        let url = "leave/getLeaveHolidays";
        return this.authService.get(url + '?date=' + year).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveLeaveHoliday(leaveHoliday: any) {
        let url = "leave/addLeaveHoliday";
        return this.authService.post(url, leaveHoliday).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    updateLeaveHoliday(leaveHoliday: any) {
        let url = "leave/updateLeaveHoliday";
        return this.authService.post(url, leaveHoliday).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    removeLeaveHoliday(leaveHoliday: any) {
        let url = "leave/removeLeaveHoliday";
        return this.authService.post(url, leaveHoliday).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveDetailsByRole(roleName: string) {
        let url = "leave/getLeaveDetailsByRole?role=" + roleName;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveAcceptRejectLeave(leave: any) {
        let url = "leave/postAcceptRejectLeave";
        return this.authService.post(url, leave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveDetailsById(leaveId: number) {
        let url = "leave/getLeaveDetailsById?id=" + leaveId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeavesByMonth() {
        let url = "leave/getLeavesByMonth";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeavesByLeaveType() {
        let url = "leave/getLeavesByLeaveType";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }
}
