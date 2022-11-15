import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/libs/admin/src/lib/components/admin.component';
import { AboutComponent } from 'src/libs/home/src/lib/about/about.component';
import { ContactComponent } from 'src/libs/home/src/lib/contact/contact.component';
import { HomeComponent } from 'src/libs/home/src/lib/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
