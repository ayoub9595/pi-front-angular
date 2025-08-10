import {Component, Input} from '@angular/core';
import {Equipement} from '../../../equipements/models/Equipement';

@Component({
  selector: 'equipement-card-info',
  standalone: false,
  templateUrl: './equipement-card-info.component.html',
  styleUrl: './equipement-card-info.component.css'
})
export class EquipementCardInfoComponent {
  @Input() equipment!: Equipement;
}
