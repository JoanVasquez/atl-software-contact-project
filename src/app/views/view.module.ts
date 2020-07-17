import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactListComponent, ContactFormComponent],
  imports: [CommonModule, ComponentModule],
  exports: [ContactListComponent, ContactFormComponent],
})
export class ViewModule {}
