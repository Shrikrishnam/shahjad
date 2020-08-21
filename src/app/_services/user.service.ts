import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {
    deletefitnessdata() {
      throw new Error("Method not implemented.");
    }

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }
    updatefitnessdata(id,data){
      return this.http.put(UserService.BaseUrl+'allfriends/'+id,data,httpOptions).pipe(map((response: Response) => response.json()));
    }

    getfitnessdata(id = null) {
      let baseURL = UserService.BaseUrl+'allfriends';
      if(id!=null){
        baseURL += "/" + id;
      }
      return this.http.get(baseURL,httpOptions).pipe(map((response: Response) => response.json()));
    }
   
    deletedata(id){
      return this.http.delete(UserService.BaseUrl+'allfriends/'+id).pipe(map((response: Response) => response.json()));
  
  }
}