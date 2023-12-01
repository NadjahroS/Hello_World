import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';

import { AuthModule } from '@auth0/auth0-angular';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AuthApiService } from './api/api.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, ProfileComponent, NavbarComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    AuthModule.forRoot({
      domain: 'dev-xmsy4k5t5v2yf225.us.auth0.com',
      clientId: 'zZhBoC6t8wAYAP2GJXXAyUCyPBtDVuQi',
      authorizationParams: {
        redirectUri: "https://localhost:4200"
      }
    }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthModule],
  bootstrap: [AppComponent],
  exports: [
    ProfileComponent
  ],
})
export class AppModule {}



const apiKey = 'dz5f4d5kzrue';
const userId = 'billowing-sound-9';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmlsbG93aW5nLXNvdW5kLTkiLCJleHAiOjE3MDA1MDIwODV9.8tJ4vmx6A6aArab8vgPUHJ6x9vh6nyrBFyR9dtqXLf0';
