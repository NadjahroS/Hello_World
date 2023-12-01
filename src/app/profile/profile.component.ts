import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  template: `
    <div *ngIf="auth.user$ | async as user">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <button (click)="logout()">Log Out</button>
    </div>
  `,
})
export class ProfileComponent {
  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
