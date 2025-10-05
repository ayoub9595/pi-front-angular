import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Equipement} from '../../../models/Equipement';

@Component({
  selector: 'equipement-card',
  standalone: false,
  templateUrl: './equipement-card.component.html',
  styleUrl: './equipement-card.component.css'
})
export class EquipementCardComponent {
  @Input() equipments!: Equipement[];
  @Output() onUpdate = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  updateEquipement(id: number) {
    this.onUpdate.emit(id)
  }

  removeEquipement(id: number) {
    this.onDelete.emit(id)
  }
}
