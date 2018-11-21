import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Program } from "../models/programs";
import { error } from "@angular/compiler/src/util";

@Injectable({
  providedIn: "root"
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g"
    })
  };
  LIVE_URI = "https://dev.toladata.io/api/";

  // ghlh9XWOnRhRT2es56FggxT88jPYLx1vSwJuDSMG
  // 5om3H7kgcMJ3zG31mAiNqfyAiVi2enYiw26C3NI9kHIg8PUOWdJ7UlSAfHv75GckRrHl3ZRkgpLPexVlLeL3Ax4G5qXSIB6zi169iQ7qc5zx9gX6vnlgCNpeCOLhYzw0

  constructor(private httpClient: HttpClient) { }

  getPrograms() {
    return this.httpClient.get(`${this.LIVE_URI}workflowlevel1/`, this.httpOptions);
  }

  getActivities(programId) {
    return this.httpClient.get(`${this.LIVE_URI}workflowlevel2/?workflowlevel1__id=${programId}`, this.httpOptions);
  }

  getUsers() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  getUser(userId) {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users/" + userId);
  }

  getPosts() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }
}
