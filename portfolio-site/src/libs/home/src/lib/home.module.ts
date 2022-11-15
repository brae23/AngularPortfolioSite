import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    RouterModule,
    HomeComponent,
    NavComponent
  ]
})
export class HomeModule { }
