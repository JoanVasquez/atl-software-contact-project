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

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.params = new HttpParams();
    this.apiService = new ApiService(http);
  }

  public getContact(): void {
    this.apiService
      .request('GET', '/assets/data.json', this.header)
      .subscribe((res) => {
        localStorage.setItem('contacts', JSON.stringify(res));
      });
  }

  public getContactById(id: number): Contact {
    let contacts = JSON.parse(localStorage.getItem('contacts'));
    const contact = contacts.find((contact) => contact.id === id);
    return contact;
  }
}
