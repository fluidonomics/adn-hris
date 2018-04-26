import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
//import { ModalDismissReasons, NgbDateStruct, NgbModal } from "@ng-bootstrap/ng-bootstrap";

const now = new Date();

@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./bulkemail.component.html",
    encapsulation: ViewEncapsulation.None,
    styleUrls: ["./bulkemail.component.scss"]
})
export class BulkEmailComponent implements OnInit {


    Mode:any;
    item:any;
    disabled:boolean=false;
    @Input()
    public isCollapsed = false;
    public date: { year: number, month: number };
    public modalClose: string;
    public page = 4;
    public name = 'World';
    public ratingSelected = 0;
    public ratingHovered = 0;
    public ratingReadonly = false;
    public timepickerTime = { hour: 13, minute: 30 };
    public timepickerMeridian = true;
    public checkboxModel = { left: true, middle: false, right: false };

    public hovered;
    options = {
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            //['height', ['height']],
            ['insert', ['picture', 'link', 'video', 'table']]
        ],
        placeholder: "Enter Email Data"
    }

    // options = {
    //     height: 300,
    //     focus: true,
    //     airMode: false,
    //     toolbar: [
    //             ['edit', ['undo', 'redo']],
    //             ['headline', ['style']],
    //             ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
    //             ['fontface', ['fontname']],
    //             ['textsize', ['fontsize']],
    //             ['fontclr', ['color']],
    //             ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
    //             ['height', ['height']],
    //             ['table', ['table']],
    //             ['insert', ['link', 'picture', 'video', 'hr']],
    //             ['view', ['fullscreen', 'codeview']],
    //             ['help', ['help']]
    //     ]
    // };




    ngOnInit() {
    }



    // modalOpen(content) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.modalClose = `Closed with: ${result}`;
    //     }, (reason) => {
    //         this.modalClose = `Dismissed ${this.modalDismissReason(reason)}`;
    //     });
    // }

    timepickerToggle() {
        this.timepickerMeridian = !this.timepickerMeridian;
    }

    // email validation here
    private emailValidator(control: FormControl) {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }


    public onTagEdited(item) {
        console.log('tag edited: current value is ' + item);
    }

    public errorMessages = {
        'emailValidator': 'You must enter a correct email'
    };

    public validators = [this.emailValidator];

    //public asyncValidators = [this.validateAsync];


}

