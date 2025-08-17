import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReclamationForPersistence} from '../models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  apiUrl = 'http://localhost:5001/reclamations';
  constructor(private http: HttpClient) { }

  addReclamationForm(reclamation: ReclamationForPersistence) {
    return this.http.post(`${this.apiUrl}/`, reclamation)
  }
}
