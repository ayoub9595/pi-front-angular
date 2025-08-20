import {Utilsateur} from '../../affectations/models/Affectation';
import {Equipement} from '../../equipements/models/Equipement';

export interface ReclamationForPersistence {
  id_utilisateur: number;
  id_equipement: number;
  description: string;
}

export interface Reclamation {
  id: number;
  description: string;
  date_reclamation: string;
  etat_reclamation: string;
  commentaire: string;
  utilisateur: Utilsateur;
  equipement: Equipement;
}

export interface ReclamationToEdit {
  etat_reclamation: string;
  commentaire: string;
}
