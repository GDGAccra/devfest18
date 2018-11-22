import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TalkDialogComponent } from '../shared/talk-dialog/talk-dialog.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as sessions from './schedule.json';

const sessions1 = [
  {
    from: '12:00',
    to: '13:00',
    talks: [
      { title: 'Some title', speaker: 'Jeffrey Godwyll' },
      { title: 'Some title', speaker: 'Jeffrey Godwyll' },
      { title: 'Some title', speaker: 'Jeffrey Godwyll' }
    ]
  },
  {
    from: '13:00',
    to: '14:00',
    talks: [{ title: 'some title again', speaker: 'Jeffrey Godwyll' }]
  },
  {
    from: '14:00',
    to: '15:00',
    talks: [
      { title: 'Some title', speaker: 'Jeffrey Godwyll' },
      { title: 'Some title', speaker: 'Jeffrey Godwyll' },
      { title: 'Some title', speaker: 'Jeffrey Godwyll' }
    ]
  }
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  sessions = sessions.default;

  constructor(private talkDialog: MatDialog) {}

  ngOnInit() {
    console.log(this.sessions);
  }

  openTalkDialog(talk: any) {
    const talkDialogConfig = new MatDialogConfig();
    talkDialogConfig.data = talk;

    this.talkDialog.open(TalkDialogComponent, talkDialogConfig);
  }
}
