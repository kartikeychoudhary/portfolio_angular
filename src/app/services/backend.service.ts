import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import {parse} from 'yamljs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  configUrl = 'https://backend.kartikeychoudhary.com/api/v1/kartikeychoudhary';

  constructor(private http: HttpClient) { }

  saveContact(name, email, message, subject){
    return this.http.post(this.configUrl+"/contact", {name, email, subject, message});
  }

  public getData(): Observable<any> {
    return this.http.get("./assets/config.yaml", {
      observe: 'body',
      responseType: "text"   // This one here tells HttpClient to parse it as text, not as JSON
    }).pipe(
      // Map Yaml to JavaScript Object
      map(yamlString => parse(yamlString))
    );
  }
}
