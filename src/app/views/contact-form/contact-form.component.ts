import { Component, OnInit, Input } from '@angular/core';
import {
  props as propsConfig,
  defaultValues,
  setData,
} from './contactform.config';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Contact } from '../../models/Contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  props: any;
  data: FormGroup;
  contact: Contact = defaultValues;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.props = propsConfig;
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) this.contact = this.contactService.getContactById(parseInt(id));

    this.data = this.fb.group(setData(this.contact));
  }

  onSubmit(): void {
    this.contact = this.data.value;
    console.log(this.contact);
  }
}
