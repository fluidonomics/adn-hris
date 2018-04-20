import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { CommonService } from '../../../../../../base/_services/common.service';
declare var $;

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper--allEmployee",
    templateUrl: "./allEmployee.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class AllEmployeeComponent implements OnInit, AfterViewInit {
    employeeData: any = [];

    key: string = ''; //set default
    reverse: boolean = false;
    p2: number = 1;

    games = [
        {
            "id": "1",
            "name": "DOTA 2",
            "genre": "Strategy"
        },
        {
            "id": "2",
            "name": "AOE 3",
            "genre": "Strategy"
        },
        {
            "id": "3",
            "name": "GTA 5",
            "genre": "RPG"
        },
        {
            "id": "4",
            "name": "Far Cry 3",
            "genre": "Action"
        },
        {
            "id": "5",
            "name": "GTA San Andreas",
            "genre": "RPG"
        },
        {
            "id": "6",
            "name": "Hitman",
            "genre": "Action"
        },
        {
            "id": "7",
            "name": "NFS MW",
            "genre": "Sport"
        }, {
            "id": "8",
            "name": "Fifa 16",
            "genre": "Sport"
        }, {
            "id": "9",
            "name": "NFS Sen 2",
            "genre": "Sport"
        }, {
            "id": "10",
            "name": "Witcher Assassins on King",
            "genre": "Adventure"
        }
    ];


    constructor(private _script: ScriptLoaderService,
        private _common: CommonService) {

    }
    ngOnInit() {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/demo/default/base/scripts.bundle.js')
        $('#html_table').mDatatable({
            search: {
                input: $('#generalSearch'),
            },
        });
        this.loadAllEmployee();
    }
    ngAfterViewInit() {

    }

    loadAllEmployee() {
        // this._authService.getAllEmployee()
        // .subscribe(
        // data => {
        //     this.employeeData=data.json()
        // },
        // error => {
        // });
    }

    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }

}