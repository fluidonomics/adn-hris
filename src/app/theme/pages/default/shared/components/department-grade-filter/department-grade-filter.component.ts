import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';


@Component({
    selector: 'department-grade-filter',
    templateUrl: 'department-grade-filter.component.html'
})

export class DepartmentGradeFilterComponent implements OnInit {

    constructor( private _commonService: CommonService) { }

    ngOnInit() { 
        this.loadDepartment();
        this.loadGrade();
    }

    @Input()
    filterHeading:string=" Initiate PAP";

    @Output()
    onSearch = new EventEmitter();

    deparmentData: any = [];
    gradeData: any = [];
    filterBy: any = {};

    loadDepartment(division_id?: number) {
        this._commonService.getDepartment()
            .subscribe(
                res => {
                    if (res.ok) {
                        // this.employeeData = [];
                        this.deparmentData = res.json();
                    }
                },
                error => {
                });
    }
    loadGrade() {
        this._commonService.getGrade()
            .subscribe(
                res => {
                    if (res.ok) {

                        this.gradeData = res.json();
                        this.gradeData = this.gradeData.filter(item =>
                            item._id < 13
                        );
                    }
                },
                error => {
                });
    }
    loadAllEmployee() {
        this.onSearch.emit(this.filterBy);       
    }


}