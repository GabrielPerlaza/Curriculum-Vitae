import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: any){

    let headers = new HttpHeaders;

    headers.append('Content-Type', 'application/x-www-form-url');

    let body = 'data='+JSON.stringify(data);

   return this.http.post('', body, {headers: headers});
  }

}
