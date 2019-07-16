import { Component, OnInit, ViewEncapsulation, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Meta, Title } from "@angular/platform-browser";
import { FormBuilder } from "@angular/forms";
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { UtilityService } from '../../../../../base/_services/utilityService.service';
import { AuthService } from "../../../../../base/_services/authService.service";
import { HrService } from '../hr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../../../base/_services/common.service';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./dashboard.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

    rolesData: any[];
    documentData: any[];
    employeesData: any[];
    _currentEmpId: number;
    profileStatusPercentage: any = {

    }
    //hrEmpdata: any[];
    empKradata: any = {

    }
    empGradeData: any = {

    }
    empPerGrade: any = {

    }
    empAbtToRet: any = {

    }
    empCount: number;
    hrCount: number;
    supCount: number;
    hrToEmpratio: number;
    percentageOfSupervisor: number;
    managementEmpCount: number;
    managementEmpRatio: number;
    approved_count: number;
    init_count: number;
    sendback_count: number;
    submit_count: number;
    terminate_count: number;

    leaveBalance: any = [];
    overviewChartData: any = [];
    retirementDetails: any = [];
    deparmentData: any = [];
    filterBy: any = {};
    employeeData: any = [];
    employeesLeaveData: any = [];

    leaveStatuses: any = [];
    dashboardType: any = [];
    chartDashboardType: any = [];

    transactionFilter: any = {
        status: 'HR-Emp Ratio'
    };
    chartDashboard: any = {
        dashboardChart: 'Emp Per Grade'
    };
    dashboardFilter: any = {
        dashboard: 'KRA',
        date: this._hrService.getCurrentMonthDates()
    };
    itemPerPage: number = 5;

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;
    search: any;

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _script: ScriptLoaderService,
        private utilityService: UtilityService,
        private _hrService: HrService,
        private router: Router,
        public _authService: AuthService,
        private _commonService: CommonService

    ) {
        title.setTitle('ADN Dashbord | Dashboard');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Dashboard' },
            { name: 'description', content: 'Dashboard.' }
        ]);
    }

    ngOnInit() {
        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.initData();
            });
    }

    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/app/js/dashboard.js');
    }

    initData() {
        this.loadAllEmployee();
        this.loadLeaveEmployee();
        this.getLeaveStatuses();
        this.getDashboardType();
        this.getTransactions();
        this.getDashboard();
        this.getChartDashboardType();
        this.getOverviewChartData();
        this.loadDepartment();
    }

    loadAllEmployee() {
        this.utilityService.showLoader('#stats-loader');
        this._hrService.getAllEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeesData = data || [];
                }
                this.utilityService.hideLoader('#stats-loader');

            },
            error => {
                this.utilityService.hideLoader('#stats-loader');
            });
    }

    calculatePercentage(status: any, filedName?: string) {
        let profileSubmitted;
        if (filedName) {
            profileSubmitted = this.employeesData.filter(item => item['profileProcessDetails'][filedName] == status).length;
        }
        else {
            profileSubmitted = this.employeesData.filter(item => item['isAccountActive'] == status).length;
            filedName = 'isAccount';
            status = 'Active';
        }
        let objName = filedName + status;
        let percentage = ((profileSubmitted / this.employeesData.length) * 100).toFixed(2) + '%';
        this.profileStatusPercentage[objName] = percentage;
        return percentage
    }

    downloadKraCsv() {

        let csvHeader = ['Emp Name (id)', "Supervisor Name(id)", "Created Date", "Updated Date", "Updated By", "KRA_Status"];
        let filedList = ['empName', "supname", "createdDate", "updatedDate", "updatedBy", "status"];
        let csv = [];
        let row = [];
        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.empKradata.result.message.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.empKradata.result.message[i][columnArr[0]][columnArr[1]])
                }
                else {
                    if (head == 'empName') {
                        row.push(this.empKradata.result.message[i][head] + "(" + this.empKradata.result.message[i]["empId"] + ")");
                    } else if (head == 'supname') {
                        row.push(this.empKradata.result.message[i][head] + "(" + this.empKradata.result.message[i]["supId"] + ")");
                    } else {
                        row.push(this.empKradata.result.message[i][head]);
                    }

                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), "KRA_Dashboard")

    }

    getChartDashboardType() {
        this.chartDashboardType = ['Emp Per Grade', 'emp abt to retire']
    }

    getOverviewChartData() {

        if (this.chartDashboard.dashboardChart && this.chartDashboard.dashboardChart == "Emp Per Grade") {

            this._hrService.getEmployeeByGrade().subscribe(res => {
                if (res.ok) {
                    let data = res.json() || [];
                    this.empPerGrade = res.json() || [];
                    data = data.result.message;


                    data.sort((a, b) => a._id > b._id);
                    let chartData = [];
                    data.forEach((grade, i) => {
                        //let bal = this.leaveBalance.find(bal => bal.leaveTypeId == leave.leaveTypeId);
                        if (grade.gradeName[0] && grade.count) {
                            chartData.push({
                                "gradeName": grade.gradeName[0],
                                "count": grade.count
                            })
                        }
                    });
                    this.overviewChartData = chartData;

                }
            })
        } else if (this.chartDashboard.dashboardChart && this.chartDashboard.dashboardChart == "emp abt to retire") {

            this._hrService.getNumOfEmpAboutToRetire().subscribe(res => {

                if (res.ok) {
                    let data = res.json() || [];
                    this.empAbtToRet = res.json() || [];
                    data = data.result.message;

                    data.sort((a, b) => a._id > b._id);
                    let chartData = [];
                    //data.forEach((grade, i) => {
                    //let bal = this.leaveBalance.find(bal => bal.leaveTypeId == leave.leaveTypeId);
                    chartData.push({
                        "gradeName": "All",
                        "count": this.empCount
                    })
                    if (data[0].retire) {
                        chartData.push({
                            "gradeName": "Retire",
                            "count": data[0].retire
                        })
                    }
                    //});
                    this.retirementDetails = chartData;

                }
            })

        }
    }

    downloadMtrCsv() {


        let csvHeader = [];
        let filedList = [];
        let dashboardName = "";
        if (this.dashboardFilter.dashboard == "MTR") {

            csvHeader = ['Emp Name (id)', "Supervisor Name(id)", "Created Date", "Updated Date", "Updated By", "MTR_Status"];
            filedList = ['empName', "supname", "createdDate", "updatedDate", "updatedBy", "status"];
            dashboardName = "MTR_Dashboard";
        } else if (this.dashboardFilter.dashboard == "Learning") {

            csvHeader = ['Emp Name (id)', "Supervisor Name(id)", "Created Date", "Updated Date", "Updated By", "Learning_Status"];
            filedList = ['empName', "supname", "createdDate", "updatedDate", "updatedBy", "status"];
            dashboardName = "Learning_Dashboard";
        }

        let csv = [];
        let row = [];
        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.empKradata.result.message.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.empKradata.result.message[i][columnArr[0]][columnArr[1]])
                }
                else {

                    if (head == 'empName' && this.empKradata.result.message[i][head]) {
                        row.push(this.empKradata.result.message[i][head] + "(" + this.empKradata.result.message[i]["empId"] + ")");
                    } else if (head == 'supname' && this.empKradata.result.message[i][head]) {
                        row.push(this.empKradata.result.message[i][head] + "(" + this.empKradata.result.message[i]["supId"] + ")");
                    } else {
                        row.push(this.empKradata.result.message[i][head]);
                    }
                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), dashboardName);

    }

    downloadProfileCsv() {
        let csvHeader = ['Employee ID', "Name", "Active", "Personal Profile", "Office Profile", "Profile"];
        let filedList = ['userName', "fullName", "isAccountActive", "profileProcessDetails.employeeStatus", "profileProcessDetails.hrStatus", "profileProcessDetails.supervisorStatus"];
        let csv = [];
        let row = [];
        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.employeesData.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.employeesData[i][columnArr[0]][columnArr[1]])
                }
                else {
                    row.push(this.employeesData[i][head]);
                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), "Profile_Report")

    }

    downloadGradeCsv() {

        let csvHeader = ['Employee Name(ID)', "Grade", "Designation"];
        let filedList = ['empName', "gradeName", "designation"];
        let csv = [];
        let row = [];

        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.empGradeData.result.message.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.empGradeData.result.message[i][columnArr[0]][columnArr[1]])
                }
                else {
                    if (head == 'empName' && this.empGradeData.result.message[i][head]) {
                        row.push(this.empGradeData.result.message[i][head] + "(" + this.empGradeData.result.message[i]["empId"] + ")");
                    } else {
                        row.push(this.empGradeData.result.message[i][head]);
                    }
                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), "Grade_Report")

    }

    downloadLeaveCsv() {

        let csvHeader = ['Employee Name(ID)', "Department", "LeaveType", "FromDate", "ToDate"];
        let filedList = ['fullName', "departmentName", "leaveType", "fromDate", "toDate"];
        let csv = [];
        let row = [];

        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.employeesLeaveData.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.employeesLeaveData[i][columnArr[0]][columnArr[1]])
                }
                else {
                    if (head == 'fullName' && this.employeesLeaveData[i][head]) {
                        i
                        row.push(this.employeesLeaveData[i][head] + "(" + this.employeesLeaveData[i]["userName"] + ")");
                    } else {
                        row.push(this.employeesLeaveData[i][head]);
                    }
                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), "Leave_Report")

    }

    downloadEmpRetire() {

        let csvHeader = ["All", "Employee about to retire"];
        let filedList = ["all", "retire"];
        let csv = [];
        let row = [];
        csv.push(csvHeader.join(","));

        row.push(this.empCount);
        row.push(this.empAbtToRet.result.message[0].retire);
        csv.push(row.join(","));
        this.utilityService.saveAsCSV(csv.join("\n"), "Employee_Retirements_Details")

    }

    downloadEmpPerGradeCsv() {

        let csvHeader = ["Grade Name", "No Of Employee"];
        let filedList = ["gradeName", "count"];
        let csv = [];
        let row = [];
        csv.push(csvHeader.join(","));
        for (var i = 0; i < this.empPerGrade.result.message.length; i++) {
            let row = [];
            for (var index in filedList) {//array[i]
                let head = filedList[index];
                if (head.indexOf('.') > -1) {
                    let columnArr = head.split('.')
                    row.push(this.empPerGrade.result.message[i][columnArr[0]][columnArr[1]])
                }
                else {
                    row.push(this.empPerGrade.result.message[i][head]);
                }
            }
            csv.push(row.join(","));
        }
        this.utilityService.saveAsCSV(csv.join("\n"), "Employee_Grade")
    }

    getLeaveStatuses() {
        this.leaveStatuses = ['HR-Emp Ratio', 'Supervisor Role %', 'Span Of Control'];
    }

    getDashboardType() {
        this.dashboardType = ['KRA', 'MTR', 'Learning'];
    }

    getTransactions() {
        if (this.transactionFilter.status && (this.transactionFilter.status == "HR-Emp Ratio" || this.transactionFilter.status == "Supervisor Role %")) {
            this._hrService.getHrEmpRatio().subscribe(res => {
                if (res.ok) {
                    let hrEmpdata = res.json() || [];
                    this.empCount = hrEmpdata.result.message[0].emp_count;
                    this.supCount = hrEmpdata.result.message[0].sup_count;
                    this.hrCount = hrEmpdata.result.message[0].hr_count;
                    this.hrToEmpratio = (this.hrCount / this.empCount) * 100;
                    this.hrToEmpratio = parseFloat(this.hrToEmpratio.toFixed(3));
                    this.percentageOfSupervisor = this.supCount / this.empCount;
                    this.percentageOfSupervisor = parseFloat(this.percentageOfSupervisor.toFixed(3));
                }
            })
        } else if (this.transactionFilter.status && this.transactionFilter.status == "Span Of Control") {
            this._hrService.getEmpTypeRatio().subscribe(res => {
                if (res.ok) {

                    let data = res.json() || [];
                    this.empCount = data.result.message[0].emp_count;
                    this.managementEmpCount = data.result.message[0].mgmt_emp_count;
                    this.managementEmpRatio = parseFloat((this.empCount / this.managementEmpCount).toFixed(3));
                }
            })
        }
    }


    getDashboard() {
        if (this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "KRA") {
            this._hrService.getKraDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    let hrKradata = res.json() || [];
                    this.approved_count = hrKradata.result.message[0].approved_count;
                    this.init_count = hrKradata.result.message[0].init_count;
                    this.sendback_count = hrKradata.result.message[0].sendback_count;
                    this.submit_count = hrKradata.result.message[0].submit_count;
                    this.terminate_count = hrKradata.result.message[0].terminate_count;
                }
            })

            this._hrService.getEmpKraDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    this.empKradata = res.json() || [];
                }
            })
        } else if (this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "MTR") {
            this._hrService.getMtrDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    let hrMtrdata = res.json() || [];
                    this.approved_count = hrMtrdata.result.message[0].approved_count;
                    this.init_count = hrMtrdata.result.message[0].init_count;
                    this.sendback_count = hrMtrdata.result.message[0].sendback_count;
                    this.submit_count = hrMtrdata.result.message[0].submit_count;
                    this.terminate_count = hrMtrdata.result.message[0].terminate_count;
                }
            })

            this._hrService.getEmpMtrDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    this.empKradata = res.json() || [];
                }
            })
        } else if (this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "Learning") {

            this.empKradata = {};

            this._hrService.getLearningDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    let hrLearningdata = res.json() || [];
                    this.approved_count = hrLearningdata.result.message[0].approved_count;
                    this.init_count = hrLearningdata.result.message[0].init_count;
                    this.sendback_count = hrLearningdata.result.message[0].sendback_count;
                    this.submit_count = hrLearningdata.result.message[0].submit_count;
                    this.terminate_count = hrLearningdata.result.message[0].terminate_count;
                }
            })

            this._hrService.getEmpLearningDetails(this.dashboardFilter.date[0], this.dashboardFilter.date[1]).subscribe(res => {
                if (res.ok) {
                    this.empKradata = res.json() || [];
                }
            })
        }
        //else if(this.dashboardFilter.dashboard && this.dashboardFilter.dashboard == "Span Of Control") {
        //     this._hrService.getEmpTypeRatio().subscribe(res => {
        //         if(res.ok) {

        //             let data = res.json() || [];
        //             this.empCount = data.result.message[0].emp_count;
        //             this.managementEmpCount = data.result.message[0].mgmt_emp_count;
        //             this.managementEmpRatio = parseFloat((this.empCount/this.managementEmpCount).toFixed(3));
        //         }
        //     })
        // }
    }

    getEmpDetailsByGrade() {

        this._hrService.getEmpByGrade().subscribe(res => {
            if (res.ok) {
                this.empGradeData = res.json() || [];
            }
        }, null, () => {
            this.downloadGradeCsv();
        })


    }

    gotoPostLeave() {
        this.router.navigate(["./hr/post/leave"]);
    }

    loadDepartment(division_id?: number) {
        this._commonService.getDepartment()
            .subscribe(
            res => {
                if (res.ok) {
                    //this.employeesLeaveData = [];
                    this.deparmentData = res.json();
                }
            },
            error => {
            });
    }


    loadLeaveEmployee() {
        this.utilityService.showLoader('#stats-loader');
        this._hrService.getAllLeaveEmployee()
            .subscribe(
            res => {
                let data = res.json().data || [];
                if (data.length > 0) {
                    //data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                    this.employeesLeaveData = data || [];
                    // this.employeesLeaveData.fromDate = this.employeesLeaveData.fromDate ? new Date(this.employeesLeaveData.fromDate) : this.employeesLeaveData.fromDate;
                    //this.employeesLeaveData.toDate = new Date();
                }
                this.utilityService.hideLoader('#stats-loader');

            },
            error => {
                this.utilityService.hideLoader('#stats-loader');
            });

    }


    loadAllEmployeeOnLeave() {
        if (this.filterBy.departments) {
            this.utilityService.showLoader('#initiate-loader');
            this._hrService.getAllLeaveEmployee()
                .subscribe(
                res => {
                    let data = res.json().data || [];
                    if (data.length > 0) {
                        if (this.filterBy.departments && this.filterBy.departments.length > 0) {
                            data = data.filter(obj => this.filterBy.departments.includes(obj.department_id));
                            //data=data.filter(obj=>obj.department_id.some(e=>this.filterBy.departments.some(ele=>ele==e)))
                        }
                        // if (this.filterBy.grades && this.filterBy.grades.length > 0) {
                        //     data = data.filter(obj => this.filterBy.grades.includes(obj.grade_id));
                        //     //data=data.filter(obj=>obj.grade_id.some(e=>this.filterBy.grades.some(ele=>ele==e)))
                        // }
                        //data = data.filter(obj => obj.hrScope_id == this._currentEmpId);
                        // data= data.filter((obj, pos, arr) => { return arr.map(mapObj =>mapObj['_id']).indexOf(obj['_id']) === pos;});
                        this.employeesLeaveData = data || [];
                        this.utilityService.hideLoader('#initiate-loader');
                    }
                    else {
                        this.employeesLeaveData = data.json().data || [];
                        this.utilityService.hideLoader('#initiate-loader');
                    }

                },
                error => {
                    this.utilityService.hideLoader('#initiate-loader');
                });
        }
        else {
            this.employeesLeaveData = [];
        }
    }


    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}
