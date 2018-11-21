import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ActivitiesListComponent } from "./components/activities-list/activities-list.component";

const routes: Routes = [
  { path: "", component: ProgramsListComponent },
  { path: "program/:id", component: ActivitiesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
