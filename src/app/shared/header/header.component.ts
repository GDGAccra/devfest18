import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Devfest Accra';
  links = [
    { name: 'home', target: '/' },
    { name: 'speakers', target: '/speakers' },
    { name: 'schedule', target: '/schedule' },
    { name: 'team', target: '/team' }
  ];

  constructor() {}

  ngOnInit() {}
}
