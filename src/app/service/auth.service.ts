import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/enviornents/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient, private router: Router) {}
  postLogin(data: any) {
    return this.http.post(`${this.apiURL}auth`, data);
  }
  postRegis(data: any) {
    return this.http.post(`${this.apiURL}users`, data);
  }
  isLoggedIn(): boolean {
    const data = localStorage.getItem('_token');
    if (!data) {
      return false;
    } else {
      return true;
    }
  }
  getUser(): any {
    try {
      const data: any = localStorage.getItem('_token');
      return jwtDecode(data);
    } catch (e) {
      return null;
    }
  }
  isAdmin(): boolean {
    return !this.getUser() ? false : this.getUser().isAdmin;
  }
  logout() {
    localStorage.removeItem('_token');
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  getuserdetails(id: any) {
    return this.http.get(`${this.apiURL}getuserbyid/${id}`);
  }
}
