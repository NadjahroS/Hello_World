import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(public http: HttpClient) { } 

  getProtected() {
    this.http.get<any>('https://localhost:6060/api/messages/protected')
    .subscribe(
      (response) => {
        // Handle the response here
        console.log(response);
        console.log('succes get');
      },
      (error) => {
        // Handle errors here
        console.error('Error:', error);
      }
    );
  }

  
}
