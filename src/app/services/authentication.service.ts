import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse, SignupResponse } from '../models/Login';
import { Signup } from '../models/Signup';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;
  exp: number;
  role?: string;
  email?: string;
  nom?: string;
}

interface PasswordPayload {
  ancien_mot_de_passe: string;
  nouveau_mot_de_passe: string;
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
    return this.http.post<SignupResponse>(`${this.apiUrl}/signup`, credentials);
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

  getCurrentUserName() {
    const token = localStorage.getItem('access_token');
    if (token) {
      const {nom} = jwtDecode<JwtPayload>(token);
      return nom || 'Utilisateur';
    }
    return 'Utilisateur';
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;

  }

  isAdmin(): boolean {
    return this.getCurrentUserRole() === 'ADMIN';
  }

  refreshToken(refreshToken: string) {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/refresh`,
      {}, // empty body
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      }
    );
  }

  changePassword(passwordPayload: PasswordPayload ) {
    return this.http.put<PasswordPayload>(
      `${this.apiUrl}/change-password`,passwordPayload
    )
  }
}
