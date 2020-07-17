import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiService: ApiService;
  private header: HttpHeaders;
  private params: HttpParams;
  private contacts: Contact[];

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.params = new HttpParams();
    this.apiService = new ApiService(http);
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
  }

  public getContact(): void {
    if (!this.contacts) {
      this.apiService
        .request('GET', '/assets/data.json', this.header)
        .subscribe((res) => {
          localStorage.setItem('contacts', JSON.stringify(res));
        });
    }
  }

  public getContactById(id: number): Contact {
    const contact: Contact = this.contacts.find((contact) => contact.id === id);
    return contact;
  }

  public saveContacts(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
