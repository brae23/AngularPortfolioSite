import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContactMeDialogComponent } from '../contact-me-dialog/contact-me-dialog.component';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  activatedRoute: string;

  constructor(public dialog: MatDialog, private router: Router) { 
    this.activatedRoute = router.url.toString().split('/')[1];
  }

  ngOnInit(): void {
  }

  onNavClicked(route: string): void {
    this.router.navigateByUrl(`${route}`);
  }

  onContactMeClicked(): void {
    let dialogRef = this.dialog.open(ContactMeDialogComponent, {
      backdropClass: 'dialog-backdrop'
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log("The Contact Me Dialog was closed");
    })
  }
}
