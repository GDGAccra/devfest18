import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Devfest Accra';
  links = [
    { name: 'home', target: '#' },
    { name: 'speakers', target: '#' },
    { name: 'schedule', target: '#' },
    { name: 'team', target: '#' }
  ];

  constructor() {}

  ngOnInit() {}
}
