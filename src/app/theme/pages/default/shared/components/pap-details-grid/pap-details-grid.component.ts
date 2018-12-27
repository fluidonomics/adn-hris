import { Component, OnInit, Input } from '@angular/core';
import { PapService } from '../../../services/pap.service';

@Component({
    selector: 'pap-details-grid',
    templateUrl: 'pap-details-grid.component.html',
    providers: [PapService]
})

export class PapDetailsGridComponent implements OnInit {

    @Input() empId;
    @Input() papMasterId;

    papDetails = [];

    constructor(
        private papService: PapService
    ) { }

    ngOnChanges(changes) {

    }

    ngOnInit() { }

    loadPapDetails() {
        this.papService.getPapDetailsSingleEmployee(this.empId).subscribe(res => {
            this.papDetails = res || [];
        });
    }
}