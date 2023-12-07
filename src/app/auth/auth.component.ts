import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  
  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
    ) {}

    isAuthenticated$ = this.auth.isAuthenticated$

  login(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }

  logout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }

  signup(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
}

// export class YourComponent {
//   constructor(private auth: AuthService) {
//     this.auth.user$.subscribe((user) => {
//       console.log(user); // Log user information
//     });

//     this.auth.error$.subscribe((error) => {
//       console.error(error); // Log authentication errors
//     });
//   }
// }