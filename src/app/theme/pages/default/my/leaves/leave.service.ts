import { Injectable } from '@angular/core';
import { AuthService } from '../../../../../base/_services/authService.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '../../../../../../../node_modules/@angular/common/http';


@Injectable()
export class LeaveService {

    constructor(
        private authService: AuthService,
        private utilityService: UtilityService,
        private http: HttpClient
    ) {
    }


    getEmployeeLeaveBalance(empId: number, fiscalYearId: any) {
        // let url = "leave/getEmployeeLeaveBalance?empId=" + empId + "&fiscalYearId=" + fiscalYearId;
        let url = "leave/getEmployeeLeaveBalance?empId=" + empId + "&year=" + 2018;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveHolidays(fromDate: any, toDate: any) {
        let url = "leave/getLeaveHolidays?fromDate=" + fromDate + "&toDate=" + toDate;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveTransactionDetails(empId: number, fromDate: number, toDate: number, status: string) {
        // +"year=" + year +
        let url = "leave/getLeaveTransactionDetails?empId=" + empId + "&fromDate=" + fromDate + "&toDate=" + toDate;
        if (status != 'All') {
            url += "&status=" + status
        }
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getTeamLeaves(supervisorId: number, fromDate: number, toDate?: number, status?: string) {
        // +"year=" + year +
        let url = "leave/getSupervisorTeamMember?empId=" + supervisorId + "&fromDate=" + fromDate + "&toDate=" + toDate;
        if (status) {
            url += "&status=" + status;
        }
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveDetailsByFilter(supervisorId: number, fromDate: number, toDate: number, empId?: number, leaveType?: number, status?: string) {
        let url = "leave/getLeaveDetailsByFilter?supervisorId=" + supervisorId + "&fromDate=" + fromDate + "&toDate=" + toDate;
        if (empId) {
            url += "&empId=" + empId;
        }
        if (leaveType) {
            url += "&leave_type=" + leaveType;
        }
        if (status) {
            url += "&status=" + status;
        }
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeLeavesByMonth(empId: number, month?: number, year?: number, fromDate?: Date, toDate?: Date) {
        let url = "leave/getEmployeeLeaveBalance?empId=" + empId;
        if (month) {
            url += "&month=" + month;
        }
        if (year) {
            url += "&year=" + year;
        }
        if (fromDate) {
            url += "&fromDate=" + fromDate;
        }
        if (toDate) {
            url += "&toDate=" + toDate;
        }
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getSupervisorTeamMember(supervisorId) {
        // localhost:3000/api/leave/getSupervisorTeamMember?empId=3
        let url = "leave/getSupervisorTeamMember?empId=" + supervisorId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveTypes() {
        let url = "leave/getLeaveTypes";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }


    getTeamLeavesByMonth(empId: number, fromDate: number, toDate: number, status?: string) {
        let url = "leave/getSupervisorLeaveDetails?empId=" + empId + "&fromDate=" + fromDate + "&toDate=" + toDate;
        if (status) {
            url += "&status=" + status;
        }
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeDetails(empId: number) {
        let url = "user/getEmployeeDetails?emp_id=" + empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    cancelApproveLeave(body: any) {
        let url = "leave/cancelApproveLeave";
        return this.authService.post(url, body).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    cancelWithdrawLeave(body: any) {
        let url = "leave/withdrawLeave";
        return this.authService.post(url, body).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveStatuses() {
        let statuses = [
            LeaveStatus.Applied,
            LeaveStatus.Approved,
            LeaveStatus.Rejected,
            LeaveStatus.PendingWithdrawal,
            LeaveStatus.Withdrawn,
            LeaveStatus.PendingCancellation,
            LeaveStatus.Cancelled
        ];
        return statuses;
    }

    getLeaveDetailsById(leaveId: number) {
        let url = "leave/getLeaveDetailsById?id=" + leaveId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }


    saveEmployeeLeaveDetails(leavesData: any): Observable<Response> {
        let url = "leave/applyLeave";
        return this.authService.post(url, leavesData).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    uploadLeaveAttachement(attBody: FormData) {
        let url = "leave/uploadSickLeaveDocument";
        // return this.authService.post(url, attBody, {}).map(this.utilityService.extractData).catch(this.utilityService.handleError);
        const headers = new HttpHeaders();
        headers.append('"access-token', this.authService.atCurrentAuthData.accessToken);
        return this.http.post(url, attBody, { headers: headers }).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }


    // ------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------


    getCurrentMonthDates() {
        let dateRange = [];
        let startDate = new Date();
        startDate.setDate(1);
        let endDate = new Date();
        endDate.setDate(30);
        dateRange = [startDate, endDate];
        return dateRange;
    }


    // ------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------

    getCancelEmployeeLeaveDetails(_empId: number) {
        let url = "leave/getCancelEmployeeLeaveDetails?emp_id=" + _empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getEmployeeEmailDetails() {
        let url = "common/getEmployeEmailDetails";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveCancelLeave(leave: any) {
        let url = "leave/cancelLeave";
        return this.authService.post(url, leave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }



    getEmployeeLeaveDetails(_empId: number, fiscalYearId: any): Observable<Response> {
        let url = "leave/getEmployeeLeaveDetails?emp_id=" + _empId + "&fiscalYearId=" + fiscalYearId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getWorkflowHistory(_id: number): Observable<Response> {
        let url = "leave/getLeaveWorkflowDetails?id=" + _id;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getAllEmployee() {
        let url = "leave/getAllEmployee";
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
    grantMaternityLeave(grantMaternityLeave: any) {
        let url = "leave/grantMaternityLeave";
        return this.authService.post(url, grantMaternityLeave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }


    getHRLeaveDetails() {
        let url = "leave/getHRLeaveDetails";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
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

    getLeaveDetailsByRole(roleName: string, empId: number) {
        let url = "leave/getLeaveDetailsByRole?role=" + roleName + "&emp_id=" + empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    saveAcceptRejectLeave(leave: any) {
        let url = "leave/postAcceptRejectLeave";
        return this.authService.post(url, leave).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }



    getLeavesByMonth() {
        let url = "leave/getLeavesByMonth";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeavesByLeaveType() {
        let url = "leave/getLeavesByLeaveType";
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }

    getLeaveTypeByEmpId(empId: number, fiscalYearId: number): Subject<any> {
        let leaveTypes: Subject<any> = new Subject<any>();
        this.getEmployeeLeaveBalance(empId, fiscalYearId).subscribe(resBalance => {
            if (resBalance.ok) {
                let leaveBalance = resBalance.json() || [];
                if (leaveBalance.length > 0) {
                    let url = "leave/getLeaveTypes";
                    let response = this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
                    response.subscribe(res => {
                        if (res.ok) {
                            let types = res.json() || [];
                            leaveBalance.forEach(bal => {
                                let leaveType = types.find(type => type._id == bal.leaveType)
                                leaveTypes.next(leaveType);
                            });
                        }
                    })
                }
            }
        });
        return leaveTypes;
    }

    getEmployeeProbationDetails(empId: number) {
        let url = "leave/getEmployeeProbationDetails?id=" + empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }
    getMaternityLeaveDetails(empId: number) {
        let url = "leave/getEmpMaternityLeaveDetails?id=" + empId;
        return this.authService.get(url).map(this.utilityService.extractData).catch(this.utilityService.handleError);
    }
}

export const LeaveStatus = {
    Applied: 'Applied',
    Approved: 'Approved',
    Rejected: 'Rejected',
    PendingWithdrawal: 'Pending Withdrawal',
    PendingCancellation: 'Pending Cancellation',
    Withdrawn: 'Withdrawn',
    Cancelled: 'Cancelled'
}
