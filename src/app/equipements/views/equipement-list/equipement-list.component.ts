import {Component, OnInit} from '@angular/core';
import {Equipement} from '../../models/Equipement';
import {EquipementService} from '../../services/equipement.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToasterService} from '../../../services/toaster.service';

@Component({
  selector: 'app-equipement-list',
  standalone: false,
  templateUrl: './equipement-list.component.html',
  styleUrl: './equipement-list.component.css'
})
export class EquipementListComponent implements OnInit {

  isLoading = true;
  showModal = false;
  equipementIdToDelete: number | null = null

  equipements: Equipement[] = [];

  constructor(private equipementService: EquipementService,
              private router: Router,
              private route: ActivatedRoute,
              private toast: ToasterService
              ) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.equipementService.getAllEquipements().subscribe({
      next: equipements => {
        this.equipements = equipements;
        this.isLoading = false;
      },
      error: error => {
        console.log(error)
        this.isLoading = false;
      },
    })
  }
  goToAddEquipement() {
    this.router.navigate(['add'],{relativeTo: this.route});
  }

  goToEditEquipement(id: number) {
    this.router.navigate(['edit/'+id],{relativeTo: this.route});
  }
  handleDelete(id: number) {
    this.equipementIdToDelete = id;
    this.showModal = true;
  }
  deleteEquipement() {
    this.equipementService.deleteEquipementById(this.equipementIdToDelete!).subscribe({
      next: ({message}) => {
        const index = this.equipements.findIndex(eq => eq.id === this.equipementIdToDelete!);
        if(index >= -1) {
          this.equipements.splice(index, 1);
          this.equipementIdToDelete =  null
          this.showModal = false;
          this.toast.showToast(message,'success');
        }
      },
      error: error => {
        const errorMessage = error.error.message || 'Une erreur est survenue.';
        this.showModal = false;
        this.equipementIdToDelete =  null;
        this.toast.showToast(errorMessage,'error');
      }
    })

  }
  closeModal() {
    this.showModal = false;
  }

}
