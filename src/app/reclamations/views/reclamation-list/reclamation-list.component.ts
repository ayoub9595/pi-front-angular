import {Component, OnInit} from '@angular/core';
import {ReclamationService} from '../../services/reclamation.service';
import {Reclamation} from '../../models/Reclamation';
import {ToasterService} from '../../../services/toaster.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-reclamation-list',
  standalone: false,
  templateUrl: './reclamation-list.component.html',
  styleUrl: './reclamation-list.component.css'
})
export class ReclamationListComponent implements OnInit {
  reclamations: Reclamation[] = [];
  selectedReclamation: Reclamation| null = null;
  showDetails = false;
  isAdmin = false;

  constructor(
    private reclamationService: ReclamationService,
    private toaster: ToasterService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.isAdmin = this.authenticationService.isAdmin();
    this.reclamationService.getReclamations().subscribe({
      next: reclamations => {
        this.reclamations = reclamations;
      }
    })
  }

  goToCreateReclamation() {
    this.router.navigate(['add'],{relativeTo: this.route});
  }

  handleShowDetails(reclamation: Reclamation) {
    this.selectedReclamation = reclamation;
    this.showDetails = true;

  }
  handleProcessReclamation(reclamation: Reclamation) {
    const id = this.selectedReclamation?.id!;
    this.reclamationService.updateReclamation(reclamation,id).subscribe({
      next: () => {
        this.toaster.showToast('Reclamation traitée avec succès', 'success');
        const index = this.reclamations.findIndex(reclamation => reclamation.id === id);
        if (index > -1) {
          this.reclamations[index].etat_reclamation = reclamation.etat_reclamation;
          this.reclamations[index].commentaire = reclamation.commentaire;
          this.showDetails = false;
          this.selectedReclamation = null;
        }
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue.';
        this.toaster.showToast(errorMessage,'error')
        this.showDetails = false;
        this.selectedReclamation = null;
      }
    })
  }
  handleHideDetails() {
    this.showDetails = false
    this.selectedReclamation = null;
  }

}
