import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DataService } from "./service/data.service";
import { MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule } from "@angular/material";
import { ProgramsListComponent } from "./components/programs-list/programs-list.component";
import { ActivitiesListComponent } from "./components/activities-list/activities-list.component";
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProgramsListComponent,
    ActivitiesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
