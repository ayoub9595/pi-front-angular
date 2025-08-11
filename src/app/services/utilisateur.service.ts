import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilsateur} from '../affectations/models/Affectation';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) {

  }

  getAllUsers() {
    return this.http.get<Utilsateur[]>('http://localhost:5001/utilisateurs/')
  }
}
