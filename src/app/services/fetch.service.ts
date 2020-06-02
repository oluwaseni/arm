import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class FetchService {

  baseURI = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  sendEmail(body){
    return this.http.post(this.baseURI+'/email', body);
}

}