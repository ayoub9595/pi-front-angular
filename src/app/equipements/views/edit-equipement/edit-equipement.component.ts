import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipementService} from '../../services/equipement.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterService} from '../../../services/toaster.service';
import {Equipement} from '../../models/Equipement';

@Component({
  selector: 'app-edit-equipement',
  standalone: false,
  templateUrl: './edit-equipement.component.html',
  styleUrl: './edit-equipement.component.css'
})
export class EditEquipementComponent implements OnInit {
  equipementForm!: FormGroup;

  isLoading = true;

  id :number | null = null;


  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private router: Router,
    private route: ActivatedRoute,
    private toaster: ToasterService
  ) {
  }



  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.equipementService.getEquipementById(this.id!).subscribe({
      next: equipement => {
        this.populateForm(equipement);
        this.isLoading = false;
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage,'error')
        this.isLoading = false;

      }
    })
    this.initializeForm();
  }

  initializeForm() {
    this.equipementForm = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      numero_serie: ['', Validators.required],
      date_acquisition: ['', Validators.required],
      maintenance_prevue: [''],
      est_actif: [true],
      caracteristiques: this.fb.array([])
    });
  }

  populateForm(equipement: Equipement) {
    this.equipementForm.patchValue({
      nom: equipement.nom,
      description: equipement.description,
      numero_serie: equipement.numero_serie,
      date_acquisition: equipement.date_acquisition,
      maintenance_prevue: equipement.maintenance_prevue,
      est_actif: equipement.est_actif
    });

    this.caracteristiques.clear();

    equipement.caracteristiques?.forEach((carac: any) => {
      this.caracteristiques.push(
        this.fb.group({
          caracteristique: [carac.caracteristique, Validators.required],
          valeur: [carac.valeur, Validators.required]
        })
      );
    });
  }



  newCaracteristique(): FormGroup {
    return this.fb.group({
      caracteristique: ['', Validators.required],
      valeur: ['', Validators.required]
    });
  }

  get caracteristiques(): FormArray {
    return this.equipementForm.get('caracteristiques') as FormArray;
  }

  addCaracteristique() {
    this.caracteristiques.push(this.newCaracteristique());
  }

  removeCaracteristique(index: number) {
    this.caracteristiques.removeAt(index);
  }

  handleSubmit() {
    if (this.equipementForm.valid) {
      this.equipementService.editEquipement(this.id!,this.equipementForm.value).subscribe({
        next: () => {
          this.toaster.showToast('Equipement modifié avec succès',"success")
          this.router.navigate(['/home/equipements']);
        },
        error: error => {
          const errorMsg = error?.error?.msg || 'Une erreur est survenue';
          this.toaster.showToast(errorMsg, 'error',5000)
        }
      })
    }
  }

}
