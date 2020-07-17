import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { phoneCode } from './phoneCode';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() props: any;
  @Input() data: FormGroup;
  @Output() filterSubmit: EventEmitter<any> = new EventEmitter<any>();
  phoneCode: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.phoneCode = phoneCode;
  }

  onSubmit(): void {
    this.filterSubmit.emit();
    this.data.reset();
  }

  onReset(): void {
    this.data.reset();
  }
}
