import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { AuthModule, AuthClientConfig, AuthHttpInterceptor  } from '@auth0/auth0-angular';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';

import { AuthApiService } from './api/api.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CallbackComponent } from './callback/callback.component';

import * as env from './../../env.json';

function configInitializer(
  handler: HttpBackend,
  config: AuthClientConfig
) {
  return () =>
    new HttpClient(handler)
      .get('/config')
      .toPromise()
      // Set the config that was loaded asynchronously here
      .then((loadedConfig: any) => config.set(loadedConfig));
}

export function tokenGetter() {
  console.log("Token.....");
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [AppComponent, AuthComponent, ProfileComponent, NavbarComponent, CallbackComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-xmsy4k5t5v2yf225.us.auth0.com',
      clientId: 'J5GIHQQAdxXZyI6CMLLaWMBc47XNHoBy',
      authorizationParams: {
        redirect_uri: 'https://localhost:4200/callback'
      },
      httpInterceptor: {
        allowedList: ['http://localhost:6060'],
      },
    }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  // providers: [AuthModule],
  bootstrap: [AppComponent],
  exports: [
    ProfileComponent
  ],
})
export class AppModule {}