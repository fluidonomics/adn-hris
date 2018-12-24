import { Component, ViewEncapsulation, OnInit, ChangeDetectorRef } from "@angular/core";


@Component({
    selector: '.m-grid__item.m-grid__item--fluid.m-wrapper.papinit',
    templateUrl: 'pap-batch-init.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class PapBatchInitComponent implements OnInit {

    constructor( private cd:ChangeDetectorRef) { }
    ngOnInit(){
            
    }
    
    filterBy:any={};
    batchData: any = {
        "emp_id_array": []
    };
    onFilterSelected(filterBy){       
        this.filterBy={};       
        Object.assign(this.filterBy,filterBy);
        this.cd.detectChanges();        
    }
    OnemployeeChecked(selectedEmployee){
        console.log(selectedEmployee);
    }
    
}