import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(private http: HttpClient) { }

  login(userName: string, password: string) {
    const loginInfo = { username: userName, password: password };
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <User>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }));
  }

  logout() {
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('/api/logout', {}, options)
      .pipe(tap(() => {
        this.currentUser = undefined;
      }));
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  checkAuthenticationStatus(): Observable<User> {
    return this.http.get<User>('/api/currentIdentity')
      .pipe(tap(data => {
        if (data instanceof Object) {
          this.currentUser = <User>data;
        }
      }));
  }

  updateCurrentUser(firstName, lastName) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }

}
