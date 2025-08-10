import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from '../models/Login';
import { Signup } from '../models/Signup';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  exp: number;
  role?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl = 'http://localhost:5001/auth';

  constructor(private http: HttpClient) {}

  login(credentials: Login) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  signup(credentials: Signup) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/signup`, credentials);
  }

  getCurrentUserRole() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const { role } = jwtDecode<JwtPayload>(token);
      if (role === 'ADMIN') {
        return 'ADMIN';
      }
    }
    return 'UTILISATEUR';
  }

  getCurrentUserId() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const {sub} = jwtDecode<JwtPayload>(token);
      return parseInt(sub, 10);
    }
    return null;

  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (!token) return false;

    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      return exp * 1000 > Date.now(); // Token not expired
    } catch {
      return false;
    }
  }

  isAdmin(): boolean {
    return this.getCurrentUserRole() === 'ADMIN';
  }
}
