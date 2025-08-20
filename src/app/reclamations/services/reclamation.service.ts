import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reclamation, ReclamationForPersistence, ReclamationToEdit} from '../models/Reclamation';
import {AuthenticationService} from '../../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  apiUrl = 'http://localhost:5001/reclamations';
  constructor(
    private http: HttpClient,
    private autenticationService: AuthenticationService
  ) { }

  addReclamationForm(reclamation: ReclamationForPersistence) {
    return this.http.post(`${this.apiUrl}/`, reclamation)
  }
  getReclamations() {
    const isAdmin = this.autenticationService.isAdmin();
    const userId = this.autenticationService.getCurrentUserId();
    if (isAdmin) {
      return this.http.get<Reclamation[]>(`${this.apiUrl}/`);
    }
      return this.http.get<Reclamation[]>(`${this.apiUrl}/utilisateur/${userId}`)
  }
  updateReclamation(reclamation: ReclamationToEdit,id: number) {
    return this.http.put(`${this.apiUrl}/${id}`, reclamation)
  }
}
