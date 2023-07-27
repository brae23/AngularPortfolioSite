import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'home-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  projectCards: any;

  constructor() {
    this.projectCards = [];
  }

  ngOnInit(): void {
    this.projectCards = [
      {
        title: "Portfolio Website", 
        content: "This project is the website you are currently viewing. It is written in typescript using Angular. I am in the process of building and refining the styling in this web app", 
        projectUrl: "https://github.com/brae23/AngularPortfolioSite", 
        asset: "angular-logo.jpg" 
      },
      {
        title: "Habit Tracker Mobile App",
        content: "Habit tracker mobile application built using Ionic framework and Angular. Purpose built to keep daily todo lists, generic task lists, and build good habits",
        projectUrl: "https://github.com/brae23/habit-tracker-app",
        asset: "ionic-framework-logo2.png"
      },
    ]
  }
}
