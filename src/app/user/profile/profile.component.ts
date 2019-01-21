import { Toastr, TOASTR_TOKEN } from './../../toastr.service';
import { AuthService } from './../auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

  ngOnInit() {
    let firstName: FormControl = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    let lastName: FormControl = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({ firstName, lastName });
  }

  saveProfile(formData) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formData.firstName, formData.lastName)
        .subscribe(() => {
          this.toastr.success('Profile saved');
        });
    }
  }

  cancel() {
    this.router.navigate(['/events'])
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login'])
    })
  }
}
