import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../../models/Contact';
import { saveObj, getObj } from '../../utils/localstorage';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiService: ApiService;
  private header: HttpHeaders;
  private contacts: Contact[];

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.apiService = new ApiService(this.http);
    this.contacts = getObj('contacts');
  }

  public getContacts(): Observable<Contact[]> {
    return this.apiService.request('GET', '/assets/data.json', this.header);
  }

  public getContactById(id: number): Observable<Contact> {
    return this.getContacts().pipe(
      map((contacts: Contact[]) => {
        if (!this.contacts) this.contacts = contacts;
        return this.contacts.find((contact: Contact) => {
          if (contact) return contact.id === id;
        });
      })
    );
  }

  public saveContacts(contact: Contact): void {
    this.getContacts().subscribe((contacts: Contact[]) => {
      if (!this.contacts) this.contacts = contacts;
      contact.id = this.contacts.length + 1;
      this.contacts.push(contact);
      saveObj('contacts', this.contacts);
    });
  }

  public updateContact(contact: Contact): void {
    this.getContacts().subscribe((contacts: Contact[]) => {
      if (!this.contacts) this.contacts = contacts;
      const index: number = this.getContactIndex(contact.id);
      this.contacts[index] = contact;
      saveObj('contacts', this.contacts);
    });
  }

  public deleteContact(id: number): void {
    const index: number = this.getContactIndex(id);
    this.contacts[index] = null;
    saveObj('contacts', this.contacts);
  }

  private getContactIndex(id: number): number {
    return this.contacts.findIndex((contact: Contact) => {
      if (contact) return contact.id === id;
    });
  }
}
