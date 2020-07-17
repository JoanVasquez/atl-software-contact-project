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
  loading: boolean = false;
  showAlert: boolean = false;
  contacts: Contact[] = [];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.props = propsConfig;
    let id: string = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.contactService.getContactById(parseInt(id)).subscribe((contact) => {
        if (contact) this.data = this.fb.group(setData(contact));
        else this.router.navigateByUrl('home');
      });
    } else this.data = this.fb.group(setData(this.contact));
  }

  onSubmit(): void {
    this.contact = this.data.value;
    this.loading = true;
    this.contact.phoneNumber = this.contact.phoneNumber.internationalNumber;
    if (this.contact.id) {
      this.contactService.updateContact(this.contact);
      this.saveOrUpdate();
    } else {
      this.contactService.saveContacts(this.contact);
      this.saveOrUpdate();
    }
  }

  onRemoveAlert(): void {
    this.showAlert = false;
  }

  private saveOrUpdate(): void {
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
      this.loading = false;
      this.router.navigateByUrl('home');
    }, 1000);
  }
}
