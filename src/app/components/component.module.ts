import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable/datatable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from '../app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { AlertComponent } from './alert/alert.component';
import { ReversePipe } from '../shared/reverse.pipe';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
  declarations: [
    DatatableComponent,
    PaginationComponent,
    NavbarComponent,
    InputErrorComponent,
    AlertComponent,
    ReversePipe,
    FilterPipe,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  exports: [
    DatatableComponent,
    NavbarComponent,
    AlertComponent,
    InputErrorComponent,
  ],
})
export class ComponentModule {}
