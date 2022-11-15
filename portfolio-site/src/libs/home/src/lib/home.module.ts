import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    NavComponent
  ]
})
export class HomeModule { }
