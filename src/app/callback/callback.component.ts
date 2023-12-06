// callback.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-callback',
  template: '<div>Logging in...</div>',
})
export class CallbackComponent implements OnInit {
  public error$ = this.auth.error$;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    console.log('callback');
    this.auth
      .handleRedirectCallback()
      .subscribe(() => {
        // Redirect to the home page or any desired route
        window.location.href = '/';
      });
  }
}