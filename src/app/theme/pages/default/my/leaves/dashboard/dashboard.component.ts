import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: "app-my-leaves-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {

    leaveBalance: any = [];
    upcomingHolidays: any = [];
    recentTransactions: any = [];

    constructor() {

    }

    ngOnInit() {
        this.leaveBalance = [
            {
                title: "LOP",
                balance: 0
            },
            {
                title: "PL",
                balance: 11
            },
            {
                title: "COF",
                balance: 0
            },
            {
                title: "OH",
                balance: 4
            }
        ];

        this.upcomingHolidays = [
            {
                date: new Date(),
                title: "Ramzan Id (Id ul Fitra)",
                type: null
            },
            {
                date: new Date("08/15/2018"),
                title: "Independance Day",
                type: null
            },
            {
                date: new Date(),
                title: "Ganesh Chaturthi",
                type: "OH"
            }
        ];

        this.recentTransactions = [
            {
                holidayType: "LOP",
                startDate: new Date("12/02/2017"),
                endDate: new Date("12/11/2017"),
                description: "Going Home",
                status: "Approved"
            },
            {
                holidayType: "PL",
                startDate: new Date("10/12/2017"),
                endDate: null,
                description: null,
                status: "Approved"
            }
        ]
    }
}