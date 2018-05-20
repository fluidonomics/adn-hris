import { Component, Input, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';

declare var $;
declare var moment;
declare var mApp;

@Component({
    selector: "app-my-leaves-calendar",
    templateUrl: "./calender.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class CalenderComponent implements OnInit, AfterViewInit {

    calendardata: any = [];

    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
    }

    ngAfterViewInit() {
        /* this._script.loadScripts('app-calendar-basic',
            ['assets/demo/default/custom/components/calendar/basic.js']);*/

        /* this._script.loadScript('app-calendar-basic'); */
        setTimeout(() => {
            this.loadCalendar();
        }, 3000);
    }


    loadCalendar() {
        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        this.calendardata = [
            {
                title: 'All Day Event',
                start: YM + '-01',
                description: 'Lorem ipsum dolor sit incid idunt ut',
                className: "m-fc-event--danger m-fc-event--solid-warning"
            },
            {
                title: 'Reporting',
                start: YM + '-14T13:30:00',
                description: 'Lorem ipsum dolor incid idunt ut labore',
                end: YM + '-14',
                className: "m-fc-event--accent"
            },
            {
                title: 'Company Trip',
                start: YM + '-02',
                description: 'Lorem ipsum dolor sit tempor incid',
                end: YM + '-03',
                className: "m-fc-event--primary"
            },
            {
                title: 'ICT Expo 2017 - Product Release',
                start: YM + '-03',
                description: 'Lorem ipsum dolor sit tempor inci',
                end: YM + '-05',
                className: "m-fc-event--light m-fc-event--solid-primary"
            },
            {
                title: 'Dinner',
                start: YM + '-12',
                description: 'Lorem ipsum dolor sit amet, conse ctetur',
                end: YM + '-10'
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: YM + '-09T16:00:00',
                description: 'Lorem ipsum dolor sit ncididunt ut labore',
                className: "m-fc-event--danger"
            },
            {
                id: 1000,
                title: 'Repeating Event',
                description: 'Lorem ipsum dolor sit amet, labore',
                start: YM + '-16T16:00:00'
            },
            {
                title: 'Conference',
                start: YESTERDAY,
                end: TOMORROW,
                description: 'Lorem ipsum dolor eius mod tempor labore',
                className: "m-fc-event--accent"
            },
            {
                title: 'Meeting',
                start: TODAY + 'T10:30:00',
                end: TODAY + 'T12:30:00',
                description: 'Lorem ipsum dolor eiu idunt ut labore'
            },
            {
                title: 'Lunch',
                start: TODAY + 'T12:00:00',
                className: "m-fc-event--info",
                description: 'Lorem ipsum dolor sit amet, ut labore'
            },
            {
                title: 'Meeting',
                start: TODAY + 'T14:30:00',
                className: "m-fc-event--warning",
                description: 'Lorem ipsum conse ctetur adipi scing'
            },
            {
                title: 'Happy Hour',
                start: TODAY + 'T17:30:00',
                className: "m-fc-event--metal",
                description: 'Lorem ipsum dolor sit amet, conse ctetur'
            },
            {
                title: 'Dinner',
                start: TODAY + 'T20:00:00',
                className: "m-fc-event--solid-focus m-fc-event--light",
                description: 'Lorem ipsum dolor sit ctetur adipi scing'
            },
            {
                title: 'Birthday Party',
                start: TOMORROW + 'T07:00:00',
                className: "m-fc-event--primary",
                description: 'Lorem ipsum dolor sit amet, scing'
            },
            {
                title: 'Click for Google',
                url: 'http://google.com/',
                start: YM + '-28',
                className: "m-fc-event--solid-info m-fc-event--light",
                description: 'Lorem ipsum dolor sit amet, labore'
            }
        ]
    }
}


