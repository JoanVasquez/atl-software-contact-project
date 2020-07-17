import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { AlertComponent } from './alert/alert.component';
import { ReversePipe } from '../shared/reverse.pipe';

@NgModule({
  declarations: [
    DatatableComponent,
    PaginationComponent,
    NavbarComponent,
    FormComponent,
    InputErrorComponent,
    AlertComponent,
    ReversePipe,
  ],
  imports: [
    NgxIntlTelInputModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [DatatableComponent, NavbarComponent, FormComponent, AlertComponent],
})
export class ComponentModule {}
