import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ]
})
export class UserModule { }
