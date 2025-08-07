export interface Equipement {
  id?: number;
  nom: string;
  description: string;
  numero_serie: string;
  date_acquisition: string;
  maintenance_prevue: string;
  est_actif: boolean;
  caracteristiques: Caracteristique[];
}

export interface Caracteristique {
  caracteristique: string;
  valeur: string;
}
