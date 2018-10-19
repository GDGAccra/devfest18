import { AppService, Team } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team$: Observable<Team[]>;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.team$ = this.appService.getTeam();
    this.team$.subscribe(data => console.log(data));
  }
}
