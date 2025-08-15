import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Affectation, AffectationForPersist} from '../models/Affectation';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  apiUrl = 'http://localhost:5001/affectations';

  constructor(private http: HttpClient,private authenticationService: AuthenticationService) { }

  getAllAffectations() {
    const isAdmin = this.authenticationService.isAdmin();
    if(isAdmin) {
      return this.http.get<Affectation[]>(`${this.apiUrl}/`)
    }
    else {
      const id = this.authenticationService.getCurrentUserId();
      return this.http.get<Affectation[]>(`${this.apiUrl}/utilisateur/${id}`)
    }

  }
  addAffectation(affectation: AffectationForPersist) {
    return this.http.post<Affectation>(`${this.apiUrl}/`,affectation)
  }
  getAffectationById(id: number) {
    return this.http.get<Affectation>(`${this.apiUrl}/${id}`)
  }
  updateAffectation(id:number,affectation: AffectationForPersist) {
    return this.http.put<Affectation>(`${this.apiUrl}/${id}`,affectation)
  }
  deleteAffectationById(id:number) {
    return this.http.delete<{msg: string }>(`${this.apiUrl}/${id}`)
  }

}
