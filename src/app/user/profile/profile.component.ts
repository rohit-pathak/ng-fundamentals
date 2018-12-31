import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    let firstName: FormControl = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName: FormControl = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({ firstName, lastName });
  }

  saveProfile(formData) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formData.firstName, formData.lastName);
      this.router.navigate(['/events']);
    }
    
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
