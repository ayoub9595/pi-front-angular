import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Reclamation} from '../../../models/Reclamation';

@Component({
  selector: 'reclamation-table',
  standalone: false,
  templateUrl: './reclamation-table.component.html',
  styleUrl: './reclamation-table.component.css'
})
export class ReclamationTableComponent {
  @Input() reclamations!: Reclamation[];
  @Output() handleShow = new EventEmitter<Reclamation>();

  showReclamation(reclamation: Reclamation) {
    this.handleShow.emit(reclamation);
  }

}
