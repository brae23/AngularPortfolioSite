import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavComponent
  ],
  imports: [
  ],
  exports: [
    HomeComponent,
    NavComponent
  ]
})
export class HomeModule { }
