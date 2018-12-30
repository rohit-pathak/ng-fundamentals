import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
  }

}
