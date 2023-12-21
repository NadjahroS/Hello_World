import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { AuthModule, AuthClientConfig, AuthHttpInterceptor  } from '@auth0/auth0-angular';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { ChatComponent } from './chat/chat.component';

import { environment } from '../environments/environment';

export function tokenGetter() {
  console.log("Token.....");
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [AppComponent, AuthComponent, ProfileComponent, CallbackComponent, ChatComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
    StreamChatModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        redirect_uri: environment.callback_url,
        audience: environment.audience
      },
      httpInterceptor: {
        allowedList: [environment.api_url+'*'],
      },
    }),
    FormsModule,
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