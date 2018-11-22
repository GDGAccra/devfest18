import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-talk-dialog',
  templateUrl: './talk-dialog.component.html',
  styleUrls: ['./talk-dialog.component.scss']
})
export class TalkDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public talkDialogRef: MatDialogRef<TalkDialogComponent>
  ) {}

  close() {
    this.talkDialogRef.close();
  }
}
