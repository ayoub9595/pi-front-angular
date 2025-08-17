import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Equipement} from '../../../equipements/models/Equipement';
import {AffectationForPersist, Utilsateur} from '../../models/Affectation';
import {EquipementService} from '../../../equipements/services/equipement.service';
import {UtilisateurService} from '../../../services/utilisateur.service';
import {AffectationService} from '../../services/affectation.service';
import {ToasterService} from '../../../services/toaster.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-affectation',
  standalone: false,
  templateUrl: './edit-affectation.component.html',
  styleUrl: './edit-affectation.component.css'
})
export class EditAffectationComponent implements OnInit {
  affectationForm!: FormGroup;
  unassignedEquipements: Equipement[] = [];
  utilisateurs: Utilsateur[] = [];
  selectedUser: Utilsateur | null = null;
  selectedEquipement: Equipement | null = null;
  showEquipement = false;
  showUtilisateur = false;
  isLoading = true

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
    const id = this.route.snapshot.params['id'];
    this.affectationService.getAffectationById(id).subscribe({
      next: affectation => {
        this.unassignedEquipements = [affectation.equipement,...this.unassignedEquipements];
        this.affectationForm.patchValue({
          equipement: affectation.equipement.id,
          utilisateur: affectation.utilisateur.id,
          date_debut: affectation.date_debut.split('T')[0],
          determine: affectation.determine,
          date_fin: affectation.determine ? affectation.date_fin!.split('T')[0] : null,
        })
        this.isLoading = false;
      },
      error: error => {
        const  errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
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
    const id =  this.route.snapshot.params['id']
    const affectation : AffectationForPersist= {
      determine: this.affectationForm.value.determine,
      date_debut: this.affectationForm.value.date_debut,
      date_fin: this.affectationForm.value.determine ? this.affectationForm.value.date_debut : null,
      id_equipement: parseInt(this.affectationForm.value.equipement),
      id_utilisateur: parseInt(this.affectationForm.value.utilisateur),
    }
    this.isLoading = true;
    this.affectationService.updateAffectation(id,affectation).subscribe({
      next: () => {
        this.toaster.showToast('Affectation ajoutée avec succès','success');
        this.router.navigate(['../..'],{relativeTo: this.route})
        this.isLoading = false;
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage,"error");
        this.isLoading = false;
      }
    })
  }

}
