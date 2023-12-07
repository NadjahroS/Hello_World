import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    public http: HttpClient,
    public auth: AuthService,
    ) { } 

  getProtected() {
    this.http.get<any>('http://localhost:6060/api/messages/protected')
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

  getToken() {
    return this.http.get('http://localhost:6060/api/stream/token', {
      responseType: 'text'
    }).subscribe(
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

  // getToken() {
  //   // Define the request body
  //   const requestBody = {
  //     client_id: 'J5GIHQQAdxXZyI6CMLLaWMBc47XNHoBy',
  //     client_secret: 'j96fAfEFYT8z4X2ndEAKyMt5o8Luj1E89Itw3er4KwDby_u7AARf14WXmL8c14qX',
  //     audience: 'https://hello-world.com',
  //     grant_type: 'client_credentials'
  //   };
  
  //   // Define the headers
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  
  //   // Make the POST request
  //   return this.http.post('/oauth/token', requestBody, { headers })
  //     .subscribe(
  //       (response) => {
  //         // Handle the response here
  //         console.log('Token response:', response);
  //         // this.sendToken(response);
  //       },
  //       (error) => {
  //         // Handle errors here
  //         console.error('Error:', error);
  //       }
  //     );
  // }
  
  // sendToken(token: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`,
  //   });

  //   // Make an HTTP GET request with headers
  //   this.http.get<any>('/oauth/token/api', { headers })
  //   .subscribe(
  //     (response) => {
  //       // Handle the response here
  //       console.log('succes get');
  //     },
  //     (error) => {
  //       // Handle errors here
  //       console.error('Error:', error);
  //     }
  //   );
  // }
}
