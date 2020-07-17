import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact/contact.service';
import { Contact } from '../../models/Contact';
import { headerTable } from './contact.list.config';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  headerTable: object;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.headerTable = headerTable;

    this.contactService.getContacts().subscribe((res) => {
      let contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));
      if (contacts) {
        this.contacts = [...contacts];
      } else {
        this.contacts = [...res];
      }
    });
  }
}
