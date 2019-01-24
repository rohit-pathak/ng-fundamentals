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
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form);
    this.authService.login(form.userName, form.password)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/events']);
        } else {
          this.loginInvalid = true;
        }
      });

  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
