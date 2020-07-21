import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

@NgModule({
  declarations: [ContactListComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    ComponentModule,
  ],
  exports: [ContactListComponent, ContactFormComponent],
})
export class ViewModule {}
