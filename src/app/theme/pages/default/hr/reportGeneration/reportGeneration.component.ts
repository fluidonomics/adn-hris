import { Component } from '@angular/core';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--reports",
    templateUrl: "./reportGeneration.component.html",
    styleUrls: ['./reportGeneration.component.css'],
})

export class ReportGenerationComponent {
    reportsData: any = [
        {text: 'KRA', value: 'kra'},
        { text: 'Leaves', value: 'leave' },
        { text: 'Profile', value: 'profile' }
    ]
}