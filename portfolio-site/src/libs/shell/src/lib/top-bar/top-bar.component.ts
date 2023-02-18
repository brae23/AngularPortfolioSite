import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  activatedRoute: string;

  constructor(private router: Router) { 
    this.activatedRoute = router.url.toString().split('/')[1];
  }

  ngOnInit(): void {
  }

  onClick(route: string) {
    this.router.navigateByUrl(`${route}`);
    console.log(this.activatedRoute);
  }

}
