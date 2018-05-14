import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MyService } from "../../my.service";
declare var mApp;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./apply.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ApplyComponent {
    leaveapplication: any = {};

 leavetypeitems=['Annual leave','Slick leave','Maternity leave'];
 applytoitems = ['leave supervisor'];
 fromsessiondropdownitems=['text'];
 tosessiondropdownitems=['text'];   
 constructor(private _myService: MyService) {
    }
 onLeaveAppSubmit(data)
 {
    //console.log(data);
    console.log(this.leaveapplication);
    if (data.valid) {
        mApp.block('#m_tabs_9_1', {
            overlayColor: '#000000',
            type: 'loader',
            state: 'success',
            // message: 'Please wait...'
        });
        //default roles of employee
        //this.addemp.roles = [5];
        this._myService.addapplyLeave(this.leaveapplication).subscribe(
            data => {
                if (data.ok) {
                    // mApp.unblock('#m_tabs_9_1');
                    // swal("New Employee Created.", "Username:" + data.json().userName + " Welcome Email Sent!", "success");
                    // //this.userName=data.json().userName;
                    // form.resetForm();
                    // this.clearFormData();
                }
            },
            error => {
                mApp.unblock('#m_tabs_9_1');
            });
    }else{
        console.log('invalid data');
    }
 }

}