import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/service/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-activities-list",
  templateUrl: "./activities-list.component.html",
  styleUrls: ["./activities-list.component.scss"]
})
export class ActivitiesListComponent implements OnInit {
  activities$: Observable<any>;
  programId: number;
  activities: [];

  constructor(private route: ActivatedRoute,
              private service: DataService) {
    this.route.params.subscribe( params => this.programId = +params["id"] );
  }

  ngOnInit() {
    this.activities$ = this.service.getActivities(this.programId);
    this.activities$.subscribe(activities => {
        this.activities = activities;
      });
    console.log(this.activities);
  }
}
