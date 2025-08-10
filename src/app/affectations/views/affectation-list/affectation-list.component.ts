import {Component, OnInit} from '@angular/core';
import {Affectation} from '../../models/Affectation';
import {AffectationService} from '../../services/affectation.service';
import {ToasterService} from '../../../services/toaster.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-affectation-list',
  standalone: false,
  templateUrl: './affectation-list.component.html',
  styleUrl: './affectation-list.component.css'
})
export class AffectationListComponent implements OnInit {
  isLoading = true;

  affectations: Affectation[] = []

  constructor(
    private affectationService: AffectationService,
    private toast: ToasterService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.isLoading = true;
    this.affectationService.getAllAffectations().subscribe({
      next: affectations => {
        this.affectations = affectations
        this.isLoading = false;
      },
      error: error => {
        const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
        this.toast.showToast(errorMessage,"error");
        this.isLoading = false;
      }
    })
  }

  goToAdd() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  handleShow(id: number) {

  }

  handleUpdate(id: number) {

  }

  handleDelete(id: number) {

  }

}
