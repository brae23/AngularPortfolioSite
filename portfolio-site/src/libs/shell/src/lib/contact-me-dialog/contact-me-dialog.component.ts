import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-me-dialog',
  templateUrl: './contact-me-dialog.component.html',
})
export class ContactMeDialogComponent {
  linkedInUrl: string = 'https://www.linkedin.com/in/brendan-rae-3a3b03179/'
  gmailUrl: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=rae.brendan23@gmail.com';

  constructor(
    public dialogRef: MatDialogRef<ContactMeDialogComponent>) { }

    onLinkedInClicked(): void {
      window.open(this.linkedInUrl);
    }

    onGmailClicked(): void {
      window.open(this.gmailUrl);
    }

    onCancelClicked(): void {
      this.dialogRef.close();
    }
}
