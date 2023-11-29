import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MessageComponent } from './message/message.component';
import { ChannelPreviewComponent } from './channel-preview/channel-preview.component';
import { AuthApiService } from './api/api.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, MessageComponent, ChannelPreviewComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    AuthModule.forRoot({
      domain: 'dev-xmsy4k5t5v2yf225.us.auth0.com',
      clientId: 'J5GIHQQAdxXZyI6CMLLaWMBc47XNHoBy',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}



const apiKey = 'dz5f4d5kzrue';
const userId = 'billowing-sound-9';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLXNvdW5kLTkiLCJleHAiOjE3MDA1MDIwODV9.8tJ4vmx6A6aArab8vgPUHJ6x9vh6nyrBFyR9dtqXLf0';
