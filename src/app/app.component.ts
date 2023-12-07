import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { StreamI18nService } from 'stream-chat-angular';
import { StreamService } from './services/stream.service';
import { HttpClient } from '@angular/common/http';
import { AuthApiService } from './api/api.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private api: AuthApiService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.api.getProtected();

    var name = "";

    this.auth.user$.subscribe(user => {
      // Now 'user' contains the user information
      if (user && user.name) {
        name = user.name;
        console.log(user.name); // Access the user properties as needed
      } else {
        console.log('User not available or name is undefined');
      }
    });

    this.api.getToken(name);
  }
}
