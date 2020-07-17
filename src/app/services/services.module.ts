import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact/contact.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ContactService],
})
export class ServicesModule {}
