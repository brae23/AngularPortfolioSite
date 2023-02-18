import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onClick(route: string) {
    this.router.navigateByUrl(`${route}`);
  }

}
