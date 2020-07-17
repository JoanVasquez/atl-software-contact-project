import { Component, OnInit } from '@angular/core';
import { ContactService } from './services/contact/contact.service';
import { Contact } from './models/Contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
