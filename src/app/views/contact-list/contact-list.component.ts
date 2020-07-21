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
  showAlert: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.headerTable = headerTable;

    let contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.contacts = contacts;
    } else {
      this.contactService.getContacts().subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        localStorage.setItem('contacts', JSON.stringify(contacts));
      });
    }
  }

  onDelete(id: number): void {
    this.contactService.deleteContact(id);
    this.showAlert = true;
    this.ngOnInit();
  }

  onRemoveAlert(): void {
    this.showAlert = false;
  }
}
