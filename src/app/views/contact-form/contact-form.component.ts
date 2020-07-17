import { Component, OnInit, Input } from '@angular/core';
import {
  props as propsConfig,
  defaultValues,
  setData,
} from './contactform.config';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from '../../models/Contact';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  props: any;
  data: FormGroup;
  contact: Contact = defaultValues;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.props = propsConfig;

    this.data = this.fb.group(setData(this.contact));
    console.log(this.data);
  }
}
