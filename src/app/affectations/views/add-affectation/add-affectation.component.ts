import {Component, OnInit} from '@angular/core';
import {Equipement} from '../../../equipements/models/Equipement';
import {AffectationForAdd, Utilsateur} from '../../models/Affectation';
import {EquipementService} from '../../../equipements/services/equipement.service';
import {ToasterService} from '../../../services/toaster.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {AffectationService} from '../../services/affectation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-affectation',
  standalone: false,
  templateUrl: './add-affectation.component.html',
  styleUrl: './add-affectation.component.css'
})
export class AddAffectationComponent implements OnInit {
  affectationForm!: FormGroup;
  unassignedEquipements: Equipement[] = [];
  utilisateurs: Utilsateur[] = [];
  selectedUser: Utilsateur | null = null;
  selectedEquipement: Equipement | null = null;
  showEquipement = false;
  showUtilisateur = false;

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private utilisateurService: UtilisateurService,
    private affectationService: AffectationService,
    private toaster: ToasterService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(){

    this.affectationForm = this.fb.group({
      equipement: ['', Validators.required],
      utilisateur: ['', Validators.required],
      date_debut: ['', Validators.required],
      determine: [false],
      date_fin: ['']
    });

    this.affectationForm.get('equipement')?.valueChanges.subscribe(equipementId => {
      this.selectedEquipement = this.unassignedEquipements.find(eq => eq.id === parseInt(equipementId)) || null;
    });

    this.affectationForm.get('utilisateur')?.valueChanges.subscribe(utilisateurId => {
      this.selectedUser = this.utilisateurs.find(eq => eq.id === parseInt(utilisateurId)) || null;
    });

    this.equipementService.getUnsassignedEquipements().subscribe({
      next: equipements => {
        this.unassignedEquipements = equipements;
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage,"error");
      }
    })
    this.utilisateurService.getAllUsers().subscribe({
      next: users => {
        this.utilisateurs = users;
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage,"error");
      }
    })
  }

  showEquipementDetails() {
    if(!this.selectedEquipement) {
      this.toaster.showToast('Selectionner un equipement','error');
    }
    else this.showEquipement = true
  }
  showUtilisateurDetails(){
    if(!this.selectedUser) {
      this.toaster.showToast('Selectionner un utilisateur','error');
    }
    else this.showUtilisateur = true;
  }

  handleSubmit() {
    const affectation :AffectationForAdd= {
      determine: this.affectationForm.value.determine,
      date_debut: this.affectationForm.value.date_debut,
      date_fin: this.affectationForm.value.determine ? this.affectationForm.value.date_debut : null,
      id_equipement: parseInt(this.affectationForm.value.equipement),
      id_utilisateur: parseInt(this.affectationForm.value.utilisateur),
    }
    this.affectationService.addAffectation(affectation).subscribe({
      next: () => {
        this.toaster.showToast('Affectation ajoutée avec succès','success');
        this.router.navigate(['..'],{relativeTo: this.route})
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage,"error");
      }
    })
  }


}
