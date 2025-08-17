import {Component, OnInit} from '@angular/core';
import {Equipement} from '../../../equipements/models/Equipement';
import {AuthenticationService} from '../../../services/authentication.service';
import {EquipementService} from '../../../equipements/services/equipement.service';
import {ToasterService} from '../../../services/toaster.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReclamationForPersistence} from '../../models/Reclamation';
import {ReclamationService} from '../../services/reclamation.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-reclamation',
  standalone: false,
  templateUrl: './add-reclamation.component.html',
  styleUrl: './add-reclamation.component.css'
})
export class AddReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  equipements: Equipement[] = [];
  currentUserId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private equipementService: EquipementService,
    private reclamationService: ReclamationService,
    private toaster: ToasterService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.reclamationForm = this.fb.group({
      equipement: ['', Validators.required],
      description: ['', [Validators.required]]
    });

    this.currentUserId = this.authenticationService.getCurrentUserId()
    this.equipementService.getEquipementsActifsByUtilisateurId(this.currentUserId!).subscribe({
      next: equipements => this.equipements = equipements,
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMessage, "error")
      }
    })
  }

  handleSubmit() {
    const reclamation: ReclamationForPersistence = {
      id_utilisateur: this.currentUserId!,
      id_equipement: this.reclamationForm.value.equipement,
      description: this.reclamationForm.value.description,
    }
    this.reclamationService.addReclamationForm(reclamation).subscribe({
        next: () => {
          this.toaster.showToast('Reclamation ajoutée avec succès',"success")
          this.router.navigate(['..'],{relativeTo: this.route});
        },
      error: error => {
          const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
          this.toaster.showToast(errorMessage, "error");
      }
      }
    )
  }
}
