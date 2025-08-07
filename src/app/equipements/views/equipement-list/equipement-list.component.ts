import {Component, OnInit} from '@angular/core';
import {Equipement} from '../../models/Equipement';
import {EquipementService} from '../../services/equipement.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-equipement-list',
  standalone: false,
  templateUrl: './equipement-list.component.html',
  styleUrl: './equipement-list.component.css'
})
export class EquipementListComponent implements OnInit {

  isLoading = true;

  equipements: Equipement[] = [];

  constructor(private equipementService: EquipementService,
              private router: Router,
              private route: ActivatedRoute,
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
  handleDelete() {
    console.log('handleDeleteEquipement');
  }

}
