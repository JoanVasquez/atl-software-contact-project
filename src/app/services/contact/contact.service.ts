import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from '../../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiService: ApiService;
  private header: HttpHeaders;
  private params: HttpParams;
  private contacts: Contact[] = [];

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.params = new HttpParams();
    this.apiService = new ApiService(http);
  }

  public getContacts(): Observable<Contact[]> {
    //let contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));

    return this.apiService.request('GET', '/assets/data.json', this.header);
  }

  public getContactById(id: number): Observable<Contact> {
    let contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      return of(contacts.find((contact) => contact.id === id));
    } else {
      return this.apiService
        .request('GET', '/assets/data.json', this.header)
        .pipe(map((conts: Contact[]) => conts.find((c) => c.id === id)));
    }
  }

  public saveContacts(contact: Contact): void {
    this.apiService
      .request('GET', '/assets/data.json', this.header)
      .subscribe((contacts: Contact[]) => {
        let localStorageCont: Contact[] = JSON.parse(
          localStorage.getItem('contacts')
        );
        if (localStorageCont) {
          contact.id = localStorageCont.length + contacts.length + 1;
          contacts.push(contact);
          localStorage.setItem('contacts', JSON.stringify(contacts));
        } else {
          contact.id = contacts.length + 1;
          contacts.push(contact);
          localStorage.removeItem('contacts');
          localStorage.setItem('contacts', JSON.stringify(contacts));
        }
      });
  }

  public updateContact(contact: Contact): void {
    let contacts: Contact[] = JSON.parse(localStorage.getItem('contacts'));

    const index: number = this.getContactIndex(contacts, contact.id);
    contacts[index] = contact;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  private getContactIndex(contacts: Contact[], id): number {
    return contacts.findIndex((contact) => contact.id === id);
  }
}
