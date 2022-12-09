import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nav-shell',
  templateUrl: './nav-shell.component.html'
})
export class NavShellComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
  }

  onClick(route: string) {
    this.router.navigateByUrl(`${route}`);
  }
}
