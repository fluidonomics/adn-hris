import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';



declare var $;
declare var moment;
declare var mApp;

@Component({
    selector: 'calendar',
    template: `<div id="appCalendar"></div>`
})

export class CalendarComponent implements OnInit, AfterViewInit, OnChanges {



    @Input() data: any = [];

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initCalendar();
        }, 100);
    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.initCalendar();
        if (changes.data.currentValue && changes.data.currentValue.length > 0) {
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
            events: function(start, end, timezone, callback) {
                callback(calendarComp.data);
            },

            eventRender: function(event, element) {
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
}