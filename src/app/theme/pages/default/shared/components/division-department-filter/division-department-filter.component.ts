import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../../../../base/_services/common.service';

@Component({
    moduleId: module.id,
    selector: 'division-department-filter',
    templateUrl: 'division-department-filter.component.html',
    styleUrls: ['division-department-filter.component.scss']
})
export class DivisionDepartmentFilterComponent {

    divisions: any = [];
    departments: any = [];
    divisionId: any;
    departmentId: any;

    @Input()
    filterHeading: string = "Filter";

    @Output()
    onSearch = new EventEmitter();

    constructor(
        private _commonService: CommonService
    ) {

    }

    ngOnInit(): void {
        this.loadDivision();
    }

    loadDivision() {
        this._commonService.getDivision().subscribe(res => {
            if (res.ok) {
                this.divisions = res.json();
            }
        }, error => {
            console.log(error);
        });
    }

    loadDepartment(divisionId?: number) {
        debugger;
        this._commonService.getDepartment(divisionId).subscribe(res => {
            if (res.ok) {
                this.departments = res.json();
            }
        }, error => {
            console.log(error);
        });
    }

    search() {
        this.onSearch.emit({ divisionId: this.divisionId, departmentId: this.departmentId });
    }
}
