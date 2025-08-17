import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Equipement} from '../models/Equipement';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  apiUrl = 'http://localhost:5001/equipements';

  constructor(private http: HttpClient) { }

  addEquipement(equipement: Equipement) {
    return this.http.post<Equipement>(`${this.apiUrl}/`, equipement)
  }
  getAllEquipements() {
    return this.http.get<Equipement[]>(`${this.apiUrl}/`)
  }

  getEquipementById(id: number) {
    return this.http.get<Equipement>(`${this.apiUrl}/${id}`)
  }
  editEquipement(id: number, equipement: Equipement) {
    return this.http.put<Equipement>(`${this.apiUrl}/${id}`, equipement)
  }
  deleteEquipementById(id: number) {
    return this.http.delete<{message: string }>(`${this.apiUrl}/${id}`)
  }
  getUnsassignedEquipements() {
    return this.http.get<Equipement[]>(`${this.apiUrl}/unassigned`)
  }
  getEquipementsActifsByUtilisateurId(id: number) {
    return this.http.get<Equipement[]>(`${this.apiUrl}/utilisateur/${id}/equipements-actifs`)
  }
}
