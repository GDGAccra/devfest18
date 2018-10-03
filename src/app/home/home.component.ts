import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  title = 'devfest18';

  main = [
    { title: 'sessions', content: 'Android, Web and Cloud technologies' },
    {
      title: 'showcases',
      content:
        'Demo zone with the latest of Google tech: Big Data, face recognition, VR, IoT - all in one place'
    },
    {
      title: 'workshops',
      content:
        'Workshops to get your hands dirty and create a working prototype right during the conference'
    },
    {
      title: 'networking',
      content: 'Work hard and enjoy DevFest is the best place to meet new peopl'
    }
  ];

  ngOnInit() {}
}