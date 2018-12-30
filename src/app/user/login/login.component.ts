import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  mouseOverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form);
    this.authService.login(form.userName, form.password);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
