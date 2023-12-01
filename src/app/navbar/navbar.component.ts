import { Component } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-nav-bar-buttons',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  isAuthenticated$ = this.authService.isAuthenticated$
  constructor(private authService: AuthService) {}
}