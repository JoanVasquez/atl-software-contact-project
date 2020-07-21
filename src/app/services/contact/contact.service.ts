import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiService: ApiService;
  private header: HttpHeaders;
  private contacts: any[];

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.apiService = new ApiService(http);
    this.contacts = this.getContactFromLocalStorage();
  }

  public getContacts(): Observable<Contact[]> {
    return this.apiService.request('GET', '/assets/data.json', this.header);
  }

  public getContactById(id: number): Observable<Contact> {
    if (this.contacts)
      return of(this.contacts.find((contact) => contact.id === id));
    else
      return this.getContacts().pipe(
        map((conts: Contact[]) => conts.find((c) => c.id === id))
      );
  }

  public saveContacts(contact: Contact): void {
    this.getContacts().subscribe((contacts: Contact[]) => {
      if (!this.contacts) this.contacts = contacts;
      contact.id = this.contacts.length + 1;
      this.contacts.push(contact);
      this.setIntoLocalStorage(this.contacts);
    });
  }

  public updateContact(contact: Contact): void {
    this.getContacts().subscribe((contacts: Contact[]) => {
      if (!this.contacts) this.contacts = contacts;
      const index: number = this.getContactIndex(contact.id);
      this.contacts[index] = contact;
      this.setIntoLocalStorage(this.contacts);
    });
  }

  public deleteContact(id: number): void {
    const index: number = this.getContactIndex(id);
    this.contacts[index] = null;
    this.setIntoLocalStorage(this.contacts);
  }

  private getContactIndex(id: number): number {
    return this.contacts.findIndex((contact: Contact) => {
      if (contact) {
        return contact.id === id;
      }
    });
  }

  private getContactFromLocalStorage(): Contact[] {
    return JSON.parse(localStorage.getItem('contacts'));
  }

  private setIntoLocalStorage(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
