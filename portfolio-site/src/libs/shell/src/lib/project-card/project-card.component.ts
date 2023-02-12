import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() projectUrl: string | undefined;
  @Input() asset: string | undefined;
  assetSrc: string | undefined;

  ngOnInit(): void {
    this.assetSrc = `..\\..\\..\\..\\..\\assets\\${this.asset}`;
  }

  onClick(): void {
    window.open(this.projectUrl)
  }
}
