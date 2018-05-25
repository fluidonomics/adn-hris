import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from "@angular/forms";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./leavelist.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LeaveListComponent {
}
