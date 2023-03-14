import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-me-dialog',
  templateUrl: './contact-me-dialog.component.html',
})
export class ContactMeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContactMeDialogComponent>) { }

    onCancelClicked(): void {
      this.dialogRef.close();
    }
}
