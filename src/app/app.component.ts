import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StreamI18nService } from 'stream-chat-angular';
import { StreamService } from './stream.service';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from './api/api.component';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
// export class AppComponent implements OnInit {

  // isAuth0Loading$ = this.authService.isLoading$;
  // constructor(private authService: AuthService) {}
  // constructor(
  //   private streamI18nService: StreamI18nService,
  //   private auth: AuthService,
  //   private streamService: StreamService,
  //   private http: HttpClient,
  //   private api: AuthApiService
  // ) {}

  // ngOnInit() {
    // this.api.getToken();
    // this.streamI18nService.setTranslation();

    // this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
    //   console.log('Is Authenticated:', isAuthenticated);

    //   if (isAuthenticated) {
    //     const apiKey = 'dz5f4d5kzrue';
    //     const userId = 'billowing-sound-9';
    //     const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLXNvdW5kLTkiLCJleHAiOjE3MDA1MDIwODV9.8tJ4vmx6A6aArab8vgPUHJ6x9vh6nyrBFyR9dtqXLf0';
    //     console.log('Initializing Stream Chat...');
    //     this.streamService.initializeStreamChat(apiKey, userId, userToken);
    //   }
    // });
    // this.http.get<{ token: string }>('http://localhost:5113/token')
    // .subscribe(
    //   (response) => {
    //     console.log('Response:', response);
    //   const apiKey = 'dz5f4d5kzrue';
    //   const userId = 'billowing-sound-9';
    //   const token = response.token;
    //    console.log('Initializing Stream Chat...');
    //    this.streamService.initializeStreamChat(apiKey, userId, token);
    // }, (error) => {
    //     console.error('Error:', error);
    // });
  // }
// }
