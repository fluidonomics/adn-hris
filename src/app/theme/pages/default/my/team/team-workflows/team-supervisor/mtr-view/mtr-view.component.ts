import { Component, OnInit } from '@angular/core';
import { MtrService } from "../../../../workflows/mid-term-review/mtr.service";
import { AuthService } from "../../../../../../../../base/_services/authService.service";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'mtr-view',
    templateUrl: 'mtr-view.component.html',
    providers: [MtrService]
})

export class MtrViewComponent implements OnInit {

    mtrViewData: any = [];

    constructor(private _mtrService: MtrService, 
                public _authService: AuthService,
                private _route: ActivatedRoute
    ) { }

    ngOnInit() { 
        debugger;
        this._authService.validateToken().subscribe(
            res => {
                let _currentEmpId = this._authService.currentUserData._id;
                this.loadMtrBySupervisor(_currentEmpId);
            });
    }

    loadMtrBySupervisor(emp_Id: number) {
        debugger;
        let __this = this;
        this._mtrService.getMtrBySupervisor(emp_Id).subscribe(
            res => {
                debugger;
                let data=res.json().data || [];

                if(data.length > 0){
                    data = data.filter(obj => obj.status == "Submitted").map(mtrview => {
                        mtrview.fullName = data.fullName;
                        mtrview.profileImage = data.profileImage;
                        this.mtrViewData.push(mtrview);
                    })
                } 
            },
            error => {
            });;
    }
}