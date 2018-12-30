import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor() { }

  login(userName: string, password: string) {
    // temporary
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName: userName
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
