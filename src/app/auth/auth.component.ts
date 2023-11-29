import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  template: '<button (click)="login()">Log in with Auth0</button>',
})
export class AuthComponent {
  constructor(private auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect();
  }
}

export class YourComponent {
  constructor(private auth: AuthService) {
    this.auth.user$.subscribe((user) => {
      console.log(user); // Log user information
    });

    this.auth.error$.subscribe((error) => {
      console.error(error); // Log authentication errors
    });
  }
}