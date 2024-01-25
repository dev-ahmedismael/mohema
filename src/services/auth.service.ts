import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/api/register`, data);
  }

  public isAuthenticated = new BehaviorSubject(false);

  handleAuth() {
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }

    if (token) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/api/login`, data);
  }

  editProfile(data: any) {
    let userID = typeof window !== 'undefined' && localStorage.getItem('id');
    return this.http.put(`${environment.apiUrl}/api/users/${userID}`, data);
  }

  findByEmail(email: string) {
    return this.http.get(`${environment.apiUrl}/api/users/${email}`);
  }

  checkIfPendingUser(email: string) {
    return this.http.get(`${environment.apiUrl}/api/pending-user/${email}`);
  }
}
