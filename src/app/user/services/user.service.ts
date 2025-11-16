import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Utilsateur} from '../../affectations/models/Affectation';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'http://localhost:5001/utilisateurs';

  constructor(private http: HttpClient) { }

  getUser(id:number) {
    return this.http.get<Utilsateur>(`${this.apiUrl}/${id}`);
  }
  updateUser(updateUser: Utilsateur) {
    return this.http.put<Utilsateur>(`${this.apiUrl}/${updateUser.id}`, updateUser);
  }
}
