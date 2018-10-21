import { AppService, Speaker } from "./../app.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-speakers",
  templateUrl: "./speakers.component.html",
  styleUrls: ["./speakers.component.scss"]
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<any[]>;

  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.speakers$ = this.appservice.getSpeakers();
  }
}
