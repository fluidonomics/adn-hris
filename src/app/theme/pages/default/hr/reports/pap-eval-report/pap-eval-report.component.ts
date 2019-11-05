import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HrService } from "../../hr.service";

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
import { CommonService } from "../../../../../../base/_services/common.service";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper-pap-eval-report",
    templateUrl: "./pap-eval-report.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./pap-eval-report.component.scss']
})

export class PapEvalReport implements OnInit {

    allEmployees: any = [];
    fiscalYearId: any;


    key: string = ''; //set default
    reverse: boolean = false;
    imageBase: any;
    itemPerPage: number = 10;
    p2: number = 1;
    search: any;

    constructor(
        private _hrService: HrService,
        private _commonService: CommonService
    ) {

    }

    ngOnInit() {
        this.fiscalYearId = this._commonService.getFiscalYearIdLocal();
        this._hrService.getAllEmployee().subscribe(res => {
            let employees = res.json().data || [];
            this.allEmployees = employees;
        })
    }

    prepareBody(empId) {
        return new Promise<any>((resolve, reject) => {
            let headerData = [];
            headerData = [
                { text: 'KEY RESPONSIBILITY AREAS (KRAs)', style: 'toptableHeader', colSpan: 12, fillColor: '#cccccc', alignment: 'center' },
                {},
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
                { text: 'S.No.', style: 'subtableHeader', alignment: 'center' },
                { text: 'KRA DESCRIPTION*', style: 'subtableHeader', alignment: 'center' },
                { text: 'CATEGORIZATION*', style: 'subtableHeader', alignment: 'center' },
                { text: 'WEIGHTAGE* [in %]', style: 'subtableHeader', alignment: 'center' },
                { text: 'Metrics ', style: 'subtableHeader', alignment: 'center' },
                { text: 'KRA Measure of Success', style: 'subtableHeader', alignment: 'center' },
                { text: 'Year End Review (Self Appraisal)', style: 'subtableHeader', alignment: 'center' },
                { text: 'Year End Review (Manager Rating)', style: 'subtableHeader', alignment: 'center' },
                { text: 'Employee Comments', style: 'subtableHeader', alignment: 'center' },
                { text: 'Managers Comment', style: 'subtableHeader', alignment: 'center' },
                { text: 'Reviewers Comment', style: 'subtableHeader', alignment: 'center' },
                { text: 'Final Performance Rating', style: 'subtableHeader', alignment: 'center' }
            ];
            let bodyData = [];
            bodyData.push(headerData);
            bodyData.push(subHeaderData);
            this._hrService.getPapEvaluationReport(empId, this.fiscalYearId).subscribe(res => {
                debugger;
                let papData = res.json().result.message || [];
                if (papData && papData.length > 0) {
                    papData.forEach((pap, i) => {
                        bodyData.push([i + 1, pap.mtr_kra || "", pap.kraCategoryName || "", pap.weightage || "", pap.unitOfSuccess || "", pap.measureOfSuccess || "", pap.empRating || "", pap.supRating || "", pap.empComment || "", pap.empComment || "", pap.reviewerComment || "", pap.finalRating || ""]);
                    });
                    // footer
                    let footer = [];
                    footer = [{ colSpan: 9, text: '' }, '', '', '', '', '', '', '', '', { colSpan: 2, text: 'Final Over All Rating', style: 'tableFooter' }, '', { text: papData[0].overallRating, fontSize: 12 }];
                    bodyData.push(footer);
                    resolve(bodyData);
                }
            });
        });
    }

    preparePdf(empId) {
        this.prepareBody(empId).then(res => {
            debugger;
            if (res && res.length > 0) {
                let bodyData = res;
                var dd = {
                    pageOrientation: 'landscape',
                    pageSize: 'LEGAL',
                    content: [
                        {
                            style: 'tableExample',
                            color: '#444',
                            fontSize: 9,
                            alignment: 'center',
                            table: {
                                widths: [30, 'auto', 'auto', 70, 'auto', 'auto',
                                    50, 50, 'auto', 'auto', 'auto', 60
                                ],
                                headerRows: 2,
                                // keepWithHeaderRows: 1,
                                body: bodyData
                            }
                        }
                    ],
                    styles: {
                        toptableHeader: {
                            bold: true,
                            fontSize: 14
                        },
                        subtableHeader: {
                            bold: true,
                            fontSize: 10
                        },
                        tableFooter: {
                            bold: true,
                            fontSize: 12
                        }
                    }
                };
                pdfMake.createPdf(dd).download();
            }
        })
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
}