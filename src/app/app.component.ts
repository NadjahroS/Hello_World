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
    private api: AuthApiService
  ) {}

  ngOnInit() {
    this.api.getProtected();

    this.api.getToken();
  }
}
