import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class EditService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: Http) { }
    
    deletedata(id){
        return this.http.delete(EditService.BaseUrl+'allfriends/'+id).pipe(map((response: Response) => response.json()));
    
    }
    updatefitnessdata(data){
      return this.http.put(EditService.BaseUrl+'allfriends',data,httpOptions).pipe(map((response: Response) => response.json()));
    }

    
}