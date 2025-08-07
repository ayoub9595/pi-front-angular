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
}
