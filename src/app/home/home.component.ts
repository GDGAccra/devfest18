import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  speakers$: Observable<any[]>;
  constructor(private appservice: AppService) {}

  title = 'devfest18';

  main = [
    {
      title: 'Sessions',
      content: 'Android, Web and Cloud technologies',
      icon: 'microphone'
    },
    {
      title: 'Showcases',
      content:
        'Demo zone with the latest of Google tech: Big Data, face recognition, VR, IoT - all in one place',
      icon: 'lightbulb-o'
    },
    {
      title: 'Workshops',
      content:
        'Workshops to get your hands dirty and create a working prototype right during the conference',
      icon: 'users'
    },
    {
      title: 'Networking',
      content:
        'Work hard and enjoy DevFest is the best place to meet new people',
      icon: 'american-sign-language-interpreting'
    }
  ];


  // TODO: Get sessions
  sessions = [
    {
      title: 'Some session title',
      description:
        'session description session description session description session description session description',
      speaker: 'First Last'
    },
    {
      title: 'Some session title',
      description:
        'session description session description session description session description session description',
      speaker: 'First Last'
    },
    {
      title: 'Some session title',
      description:
        'session description session description session description session description session description',
      speaker: 'First Last'
    },
    {
      title: 'Some session title',
      description:
        'session description session description session description session description session description',
      speaker: 'First Last'
    }
  ];

  // TODO: Sponsors
  sponsors = [
    { name: 'GDG', image: 'gdg.png' },
    { name: 'Impact Hub', image: 'impact-hub.png' },
    { name: 'Google Developers', image: 'google-developers.png' },
    { name: 'GDG Accra', image: 'gdgaccra.png' },
    { name: 'KhoPhi Photography', image: 'khophi.jpg' },
    { name: 'Nakrotek', image: 'nakrotek.png' }
  ];
  ngOnInit() {
    this.speakers$ = this.appservice.getSpeakers();
  }
}
