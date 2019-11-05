import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HrService } from "../../hr.service";

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper-pap-eval-report",
    templateUrl: "./pap-eval-report.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./pap-eval-report.component.scss']
})

export class PapEvalReport implements OnInit {

    allEmployees: any = [];


    key: string = ''; //set default
    reverse: boolean = false;
    imageBase: any;
    itemPerPage: number = 10;
    p2: number = 1;
    search: any;

    constructor(
        private _hrService: HrService
    ) {

    }

    ngOnInit() {
        debugger;
        this._hrService.getAllEmployee().subscribe(res => {
            let employees = res.json().data || [];
            this.allEmployees = employees;
        })
    }

    downloadReport(empId) {
        let bodyData = this.prepareBody();
        var dd = {
            pageOrientation: 'landscape',
            pageSize: 'LEGAL',
            content: [
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'
                            , 'auto', 'auto', 'auto', 'auto', 'auto'
                        ],
                        headerRows: 2,
                        // keepWithHeaderRows: 1,
                        body: bodyData
                    }
                }
            ]
        };
        pdfMake.createPdf(dd).download();
    }

    prepareBody(): any {
        let headerData = [];
        headerData = [
            { text: 'KEY RESPONSIBILITY AREAS (KRAs)', style: 'tableHeader', colSpan: 11, alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ];
        let subHeaderData = [];
        subHeaderData = [
            { text: 'S.No.', style: 'tableHeader', alignment: 'center' },
            { text: 'KRA DESCRIPTION*', style: 'tableHeader', alignment: 'center' },
            { text: 'CATEGORIZATION*', style: 'tableHeader', alignment: 'center' },
            { text: 'WEIGHTAGE*[in %]', style: 'tableHeader', alignment: 'center' },
            { text: 'Metrics ', style: 'tableHeader', alignment: 'center' },
            { text: 'KRA Measure of Success', style: 'tableHeader', alignment: 'center' },
            { text: 'Year End Review', style: 'tableHeader', alignment: 'center' },
            { text: 'Employee Comments', style: 'tableHeader', alignment: 'center' },
            { text: 'Managers Comment', style: 'tableHeader', alignment: 'center' },
            { text: 'Reviewers Comment', style: 'tableHeader', alignment: 'center' },
            { text: 'Final Performance Rating', style: 'tableHeader', alignment: 'center' }
        ];
        let bodyData = [];
        bodyData.push(headerData);
        bodyData.push(subHeaderData);

        return bodyData;
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}