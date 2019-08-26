import { Injectable } from "@angular/core";
import { NgxDhis2HttpClientService } from "@iapps/ngx-dhis2-http-client";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  getUserGroups: any;
  constructor(private http: NgxDhis2HttpClientService) {}

  getData(): Observable<any> {
    const programUrl =
      "users.json?fields=id,displayName,userCredentials[username,disabled,lastLogin]&paging=false";
    return this.http.get(programUrl);
  }
  getUserRoles(): Observable<any> {
    return this.http.get(
      "userRoles.json?fields=id,displayNames&canIssue=true&paging=false"
    );
  }
}
