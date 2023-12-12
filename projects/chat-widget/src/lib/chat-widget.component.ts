import { Component } from '@angular/core';

@Component({
  selector: 'lib-chat-widget',
  template: `
    <p>
      <app-auth></app-auth>
      <app-chat></app-chat>
    </p>
  `,
  styles: [
  ]
})
export class ChatWidgetComponent {

}
