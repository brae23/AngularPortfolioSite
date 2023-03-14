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
      // { 
      //   title: "Advent Of Code", 
      //   content: "Repository for Advent of Code challenges. In 2022, I started the challenges using Python, but eventually challenged myself to try using Rust to complete the daily problems", 
      //   projectUrl: "https://github.com/brae23/AdventOfCode", 
      //   asset: "advent-of-code.jpg" 
      // },
      // { 
      //   title: "Trilogy Chiropractic Website", 
      //   content: "An unfinished project of mine. This was an attempt to create a business website using React. I hope to finish this project for fun in the future", 
      //   projectUrl: "https://github.com/brae23/TrilogyChiropracticSite", 
      //   asset: "trilogy.PNG" 
      // },
      // { 
      //   title: "Bird Cam", 
      //   content: "Project I wish to start in the future, involving machine learning and image recognition to decipher a bird's species from a set of images", 
      //   projectUrl: "https://github.com/brae23/BirdCam", 
      //   asset: "cardinal.jpg" 
      // },   
    ]
  }
}
