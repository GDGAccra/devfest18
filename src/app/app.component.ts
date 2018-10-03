import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
