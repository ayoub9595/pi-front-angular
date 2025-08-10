import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Affectation} from '../models/Affectation';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  apiURl = 'http://localhost:5001/affectations';

  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }

  getAllAffectations() {
    const isAdmin = this.authenticationService.isAdmin();
    if(isAdmin) {
      return this.http.get<Affectation[]>(`${this.apiURl}/`)
    }
    else {
      const id = this.authenticationService.getCurrentUserId();
      return this.http.get<Affectation[]>(`${this.apiURl}/utilisateur/${id}`)
    }

  }
}
