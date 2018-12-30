import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let firstName: FormControl = new FormControl(this.authService.currentUser.firstName);
    let lastName: FormControl = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({ firstName, lastName });
  }

  saveProfile(formData) {
    this.authService.updateCurrentUser(formData.firstName, formData.lastName);
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
