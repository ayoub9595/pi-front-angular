import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Equipement} from '../../../models/Equipement';

@Component({
  selector: 'equipement-table',
  standalone: false,
  templateUrl: './equipement-table.component.html',
  styleUrl: './equipement-table.component.css'
})
export class EquipementTableComponent {
  @Input() equipments!: Equipement[];
  @Output() onShowDetails = new EventEmitter<Equipement>();
  @Output() onUpdate = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();


  showEquipmentDetails(equipment:Equipement) {
    this.onShowDetails.emit(equipment);
  }
  updateEquipment(id:number) {
    this.onUpdate.emit(id)
  }

  deleteEquipment(id:number) {
    this.onDelete.emit(id)
  }

}
