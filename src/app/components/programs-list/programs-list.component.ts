import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import { Observable } from "rxjs";
import { Program } from "src/app/models/programs";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-programs-list",
  templateUrl: "./programs-list.component.html",
  styleUrls: ["./programs-list.component.scss"]
})
export class ProgramsListComponent implements OnInit {
  programs$: Object;

  constructor(private service: DataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getPrograms().subscribe(
      data => this.programs$ = data
    );
  }

  viewActivities(programId) {
    // this.router.navigateByUrl("/details/" + programId);
      const routePath = "/program/" + programId;
      this.router.navigate([routePath], { relativeTo: this.route });
  }

}
