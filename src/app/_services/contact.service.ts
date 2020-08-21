import { Injectable } from "@angular/core";
import { Response, Headers, Http } from "@angular/http";
import { map, catchError } from "rxjs/operators";

const httpOptions = {
  headers: new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }),
};
@Injectable({
    providedIn: "root",
})

export class ContactService {
    public static BaseUrl = "http://localhost:6565/";
   
    constructor(private http: Http) {}
    postcontactdata(data) {
      return this.http
        .post(ContactService.BaseUrl + "contacts", data, httpOptions)
        .pipe(
          map((response: Response) => response.json()),
          catchError((err, caught) => {
            throw err || "Post request error in contact data submission";
          })
        );
    }
  }