import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login, LoginResponse} from '../models/Login';
import {Observable} from 'rxjs';
import {Signup} from '../models/Signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  apiUrl = 'http://localhost:5001/auth';

  constructor(private http: HttpClient) {
  }

  login(credentials: Login) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
  }
  signup(credentials: Signup) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/signup`, credentials)
  }
}
