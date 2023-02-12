import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavShellComponent } from './nav/nav-shell.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';

type PathMatch = "full" | "prefix" | undefined;

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' as PathMatch },
  { path: 'home', component: NavShellComponent, children: [{ path: '', component: HomeComponent}]},
  { path: 'about', component: NavShellComponent, children: [{ path: '', component: AboutComponent}] },
  { path: 'projects', component: NavShellComponent, children: [{ path: '', component: ProjectsComponent}] }
]

@NgModule({
  declarations: [
    HomeComponent,
    NavShellComponent,
    AboutComponent,
    ProjectsComponent,
    TopBarComponent,
    ProjectCardComponent,
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
    HomeComponent,
    NavShellComponent
  ]
})
export class ShellModule { }
