import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ChatWidgetComponent } from './chat-widget.component';
import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';
import { AuthModule, AuthClientConfig, AuthHttpInterceptor  } from '@auth0/auth0-angular';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { CallbackComponent } from './callback/callback.component';

import { ChatComponent } from './chat/chat.component';

export function tokenGetter() {
  console.log("Token.....");
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [ChatWidgetComponent, AuthComponent, CallbackComponent, ChatComponent],
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
        redirect_uri: 'https://localhost:4200/callback',
        audience: 'https://hello-world.com'
      },
      httpInterceptor: {
        allowedList: ['https://localhost:7183*'],
      },
    }),
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [ChatWidgetComponent],
  exports: [],
})
export class ChatWidgetModule { }
