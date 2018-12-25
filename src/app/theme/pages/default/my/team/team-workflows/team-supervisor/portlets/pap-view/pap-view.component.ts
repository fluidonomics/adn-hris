import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pap-view',
    templateUrl: 'pap-view.component.html'
})

export class PapViewComponent implements OnInit {

    papViewData: any = [];
    papViewSearch: any;
    papViewReverse: boolean = true;

    constructor() { }

    ngOnInit() { }

    gotopapView(pap) {
       // this.router.navigateByUrl("/my/team/workflows/mtr-detailed-view/" + mtr.mtr_master_details._id + "/" + mtr.emp_details._id);
    }

}