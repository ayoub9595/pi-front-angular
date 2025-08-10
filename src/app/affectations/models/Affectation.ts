import {Equipement} from '../../equipements/models/Equipement';

export interface Affectation {
  id?: number;
  determine: boolean;
  date_debut: string;
  date_fin?: string;
  utilisateur: Utilsateur;
  equipement: Equipement;
}

export interface Utilsateur {
  id?: number;
  nom: string;
  email: string;
  cin: string;
  telephone: string;
  role: string;
}
