import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './resuable-input.component.html',
  styleUrls: ['./resuable-input.component.css']
})

export class ResuableInputComponent implements OnInit {
    @Input() cols: string = null;
    @Input() form: FormGroup = null;
    @Input() control: any = null;
    @Input() label: string = null;
    @Input() placeholder: string = null;
    @Input() maxlength: number = null;
    @Input() errorMsg: string = null;
    @Input() errorMsgPattern: string = null;
    @Input() errorMsgMaxLength: string = null;
    @Input() errorMsgMinLength: string = null;
    @Output() focusOptput: EventEmitter<any> = new EventEmitter<any>();
    @Input() icon = 'icon-address-book2';
    @Input() title: string = null;
    controlName: string = null;
    required = false;
    ngOnInit(): void {
        this.controlName = Object.keys(this.control.parent.controls).find(c => this.control === this.control.parent.controls[c]) || null;
        this.placeholder = this.placeholder ? this.placeholder : this.label;
        if (this.control.validator) {
            const validator = this.control.validator({} as AbstractControl);
            if (validator && validator.required) {  this.required = true; }
           }
    }
    onFocus($event): void { this.focusOptput.emit($event); }
}
