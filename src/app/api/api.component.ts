import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http: HttpClient) { } 

  getToken() {
    // Define the request body
    const requestBody = {
      client_id: 'WnNWNMh7gRAl59y75bStc39n3mP3s3fS',
      client_secret: 'nD1-VanYLFQwnYJFWg-KQtP-cXB6Oa_MSS96P2KDV0Dkd6LnRSmn9c12pgWudo34',
      audience: 'https://hello/api',
      grant_type: 'client_credentials'
    };
  
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  
    // Make the POST request
    this.http.post('/oauth/token', requestBody, { headers })
      .subscribe(
        (response) => {
          // Handle the response here
          console.log('Token response:', response);
          this.sendToken(response);
        },
        (error) => {
          // Handle errors here
          console.error('Error:', error);
        }
      );
  }
  
  sendToken(token: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    // Make an HTTP GET request with headers
    this.http.get<any>('/oauth/token/api', { headers })
    .subscribe(
      (response) => {
        // Handle the response here
        console.log('succes get');
      },
      (error) => {
        // Handle errors here
        console.error('Error:', error);
      }
    );
  }
}
