import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';
import { ScriptLoaderService } from '../../_services/script-loader.service';



declare var $;
declare var moment;
declare var mApp;

@Component({
    selector: 'calendar',
    template: `<div id="appCalendar"></div>`
})

export class CalendarComponent implements OnInit, AfterViewInit, OnChanges {



    @Input() data: any = [];
    @Input() options: CalendarOptions = {
        editable: false
    };
    @Output() dayClick: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private _script: ScriptLoaderService
    ) { }

    ngOnInit() {
        this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);


    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initCalendar();
            this.bindDayClickEvent();
        }, 100);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.initCalendar();
        if (changes.data.currentValue && changes.data.currentValue.length > 0) {
            this.data.forEach(leave => {
                leave.editable = this.options.editable;
            });
            // $('#appCalendar').fullCalendar('updateEvents', changes.data.currentValue)
            $('#appCalendar').fullCalendar('refetchEvents');

        }
    }

    initCalendar() {
        let calendarComp = this;
        console.log("initCalendar");
        $('#appCalendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            navLinks: true,
            events: function (start, end, timezone, callback) {
                callback(calendarComp.data);
            },

            eventRender: function (event, element) {
                if (element.hasClass('fc-day-grid-event')) {
                    element.data('content', event.description);
                    element.data('placement', 'top');
                    mApp.initPopover(element);
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').lenght !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>');
                }
            }
        });
    }

    bindDayClickEvent() {
        $('.fc-row').on('click', (e) => {
            debugger;
            let data = $(e.target).data();
            if (data) {
                this.dayClick.emit(data);
            }
        });
    }
}

export interface CalendarOptions {
    editable?: boolean;
}