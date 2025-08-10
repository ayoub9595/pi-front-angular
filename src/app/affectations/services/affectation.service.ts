import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Affectation} from '../models/Affectation';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  apiURl = 'http://localhost:5001/affectations';

  constructor(private http: HttpClient) { }

  getAllAffectations() {
    return this.http.get<Affectation[]>(`${this.apiURl}/`)
  }
}
