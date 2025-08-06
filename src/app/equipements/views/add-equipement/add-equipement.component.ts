import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EquipementService} from '../../services/equipement.service';
import {Router} from '@angular/router';
import {ToasterService} from '../../../services/toaster.service';

@Component({
  selector: 'add-equipement',
  standalone: false,
  templateUrl: './add-equipement.component.html',
  styleUrl: './add-equipement.component.css'
})
export class AddEquipementComponent implements OnInit {
  equipementForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private equipementService: EquipementService,
    private router: Router,
    private toaster: ToasterService
  ) {
  }

  ngOnInit() {
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
      this.equipementService.addEquipement(this.equipementForm.value).subscribe({
        next: () => {
          this.toaster.showToast('Equipement ajouté avec succès',"success")
          this.router.navigate(['/home']);
        },
        error: error => {
          const errorMsg = error?.error?.msg || 'Une erreur est survenue';
          this.toaster.showToast(errorMsg, 'error',5000)
        }
      })
    }
  }
}
