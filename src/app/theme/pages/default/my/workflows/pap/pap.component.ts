import { FormBuilder } from "@angular/forms";
import { Component, OnInit, PLATFORM_ID, ViewEncapsulation, Inject, EventEmitter } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import { MyService } from "../../my.service"
import { CommonService } from "../../../../../../base/_services/common.service";
import { AuthService } from "../../../../../../base/_services/authService.service";
import swal from 'sweetalert2';

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./pap.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class MyPapComponent implements OnInit {

    kraCategoryData: any[];
    weightageData: any = [];
    supervisorData: any = [];
    kraInfos: any = [
    ];

    isSubmitted: boolean = false;
    _currentEmpId: number;
    kraArrLength: number = 7

    isKraAvaliable: boolean = false;
    isDisabled: boolean = false;

    ngOnInit() {
        this.kraCategoryData = [
            {
                "id": "Strategic Initiative",
                "text": "Strategic Initiative"
            },
            {
                "id": "Functional/Customer Deliverables",
                "text": "Functional/Customer Deliverables"
            },
            {
                "id": "Financial Deliverables",
                "text": "Financial Deliverables"
            },
            {
                "id": "Internal Process Development/Optimization",
                "text": "Internal Process Development/Optimization"
            },
            {
                "id": "People Development",
                "text": "People Development"
            }
        ]
        this.weightageData = [
            {
                "id": 0,
                "text": 0
            },
            {
                "id": 10,
                "text": 10
            },
            {
                "id": 15,
                "text": 15
            },
            {
                "id": 20,
                "text": 20
            },
            {
                "id": 25,
                "text": 25
            },
            {
                "id": 30,
                "text": 30
            },
            {
                "id": 35,
                "text": 35
            }
        ];
        this.supervisorData = [
            {
                id: 1010006,
                text: 'C1 Primary Supervisor1'
            },
            {
                id: 1010007,
                text: 'C1 Secondary Supervisor1'
            },
        ];

        this._authService.validateToken().subscribe(
            res => {
                this._currentEmpId = this._authService.currentUserData._id;
                this.loadKra();
            });



        // for (let j = 0; j < 7; j++) {
        //     let data={
        //         kra:"Test Kra" + j,
        //         category_id:"Internal Process Development/Optimization",
        //         weightage_id:10,
        //         unitOfSuccess:"Sud",
        //         measureOfSuccess:"Sud",
        //         supervisor_id:1010006,
        //         kraWorkflow_id:1
        //     };
        //     this.kraInfos.push(data);
        // }
    }

    constructor( @Inject(PLATFORM_ID) private platformId: Object,
        meta: Meta, title: Title,
        private _route: ActivatedRoute,
        private _router: Router,
        public _authService: AuthService,
        private _commonService: CommonService,
        private _myService: MyService
    ) {
        title.setTitle('ADN HRIS | My Profile');
        meta.addTags([
            { name: 'author', content: '' },
            { name: 'keywords', content: 'Add new employee' },
            { name: 'description', content: 'Add new employee.' }
        ]);

    }

    onKraSubmit(isSaveDraft?: boolean) {
        // this._myService.saveKra(this.kraInfos)
        //     .subscribe(
        //     data => {
        //         swal("Kra is submitted.", "", "success");
        //     },
        //     error => {
        //     });

    }

    loadKra() {
        // this._commonService.getKraDetailsData(this._currentEmpId)
        //     .subscribe(
        //     res => {
        //         let resData = res.json().data;
        //         if (resData.length > 0) {
        //             this.isKraAvaliable = true;
        //         }
        //         else {
        //             this.isKraAvaliable = false;
        //         }



        //         if (resData[0].kraDetails.length > 0) {
        //             this.kraInfos = resData[0].kraDetails;
        //             if (resData[0].status == "submitted" || resData[0].status == "approved") {
        //                 this.isDisabled = true;
        //             }
        //         }

        //         else {
        //             if (resData[0].status == "initiated" && resData[0].kraDetails.length == 0) {
        //                 this.addDummyRow(resData[0]._id);
        //             }
        //         }
        //     },
        //     error => {
        //     });
    }

    addDummyRow(_id) {
        for (let j = 0; j < 7; j++) {
            let data = {
                _id: "",
                kra: "",
                category_id: "",
                weightage_id: "",
                unitOfSuccess: "",
                measureOfSuccess: "",
                supervisor_id: "",
                kraWorkflow_id: _id
            };
            this.kraInfos.push(data);
        }
    }
}
