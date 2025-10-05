import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Equipement} from '../../models/Equipement';

@Component({
  selector: 'equipement-details',
  standalone: false,
  templateUrl: './equipement-details.component.html',
  styleUrl: './equipement-details.component.css'
})
export class EquipementDetailsComponent {
  @Input() equipment!: Equipement;
  @Output() handleClose = new EventEmitter();

  closeModal() {
    this.handleClose.emit();
  }

}
