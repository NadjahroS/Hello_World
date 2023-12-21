import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';
import { StreamService } from './services/stream.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { EMPTY, catchError, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{}