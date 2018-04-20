import { Injectable, } from "@angular/core";
//import * as _ from 'underscore';

@Injectable()
export class PagerService {
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        //let pages = _.range(startPage, endPage + 1);
        let pages = [];
        for (let i = startPage; i < endPage + 1; i++) {
            pages.push(i);
        }


        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };



        // <div *ngFor="let item of pagedItems">{{item.name}}</div>
        //     <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
        //         <li [ngClass]="{disabled:pager.currentPage === 1}">
        //             <a (click)="setPage(1)">First</a>
        //         </li>
        //         <li [ngClass]="{disabled:pager.currentPage === 1}">
        //             <a (click)="setPage(pager.currentPage - 1)">Previous</a>
        //         </li>
        //         <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">
        //             <a (click)="setPage(page)">{{page}}</a>
        //         </li>
        //         <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
        //             <a (click)="setPage(pager.currentPage + 1)">Next</a>
        //         </li>
        //         <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
        //             <a (click)="setPage(pager.totalPages)">Last</a>
        //         </li>
        //     </ul>

        //    <div class="m-datatable__pager m-datatable--paging-loaded clearfix">
        //     <ul class="m-datatable__pager-nav">
        //        <li><a title="First" class="m-datatable__pager-link m-datatable__pager-link--first m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-double-left"></i></a></li>
        //        <li><a title="Previous" class="m-datatable__pager-link m-datatable__pager-link--prev m-datatable__pager-link--disabled" data-page="1" disabled="disabled"><i class="la la-angle-left"></i></a></li>
        //        <li style="display: none;"><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-prev" data-page="1"><i class="la la-ellipsis-h"></i></a></li>
        //        <li style="display: none;"><input type="text" class="m-pager-input form-control" title="Page number"></li>
        //        <li><a class="m-datatable__pager-link m-datatable__pager-link-number m-datatable__pager-link--active" data-page="1" title="1">1</a></li>
        //        <li><a class="m-datatable__pager-link m-datatable__pager-link-number" data-page="2" title="2">2</a></li>
        //        <li style="display: none;"><a title="More pages" class="m-datatable__pager-link m-datatable__pager-link--more-next" data-page="2"><i class="la la-ellipsis-h"></i></a></li>
        //        <li><a title="Next" class="m-datatable__pager-link m-datatable__pager-link--next" data-page="2"><i class="la la-angle-right"></i></a></li>
        //        <li><a title="Last" class="m-datatable__pager-link m-datatable__pager-link--last" data-page="2"><i class="la la-angle-double-right"></i></a></li>
        //     </ul>
        //     <div class="m-datatable__pager-info">
        //        <div class="btn-group bootstrap-select m-datatable__pager-size" style="width: 70px;">
        //           <button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" role="button" title="Select page size"><span class="filter-option pull-left">10</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button>
        //           <div class="dropdown-menu open" role="combobox">
        //              <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
        //                 <li data-original-index="1" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">10</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
        //                 <li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">20</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
        //                 <li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">30</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
        //                 <li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">50</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
        //                 <li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">100</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li>
        //              </ul>
        //           </div>
        //           <select class="selectpicker m-datatable__pager-size" title="Select page size" data-width="70px" data-selected="10" tabindex="-98">
        //              <option class="bs-title-option" value="">Select page size</option>
        //              <option value="10">10</option>
        //              <option value="20">20</option>
        //              <option value="30">30</option>
        //              <option value="50">50</option>
        //              <option value="100">100</option>
        //           </select>
        //        </div>
        //        <span class="m-datatable__pager-detail">Displaying 1 - 10 of 12 records</span>
        //     </div>
        //    </div>


    }
}