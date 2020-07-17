import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './views/contact-list/contact-list.component';
import { ContactFormComponent } from './views/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'home', component: ContactListComponent },
  { path: 'new', component: ContactFormComponent },
  { path: 'edit/:id', component: ContactFormComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
