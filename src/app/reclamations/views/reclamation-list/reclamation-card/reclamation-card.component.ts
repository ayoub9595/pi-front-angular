import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Reclamation} from '../../../models/Reclamation';

@Component({
  selector: 'reclamation-card',
  standalone: false,
  templateUrl: './reclamation-card.component.html',
  styleUrl: './reclamation-card.component.css'
})
export class ReclamationCardComponent {
  @Input() reclamations!: Reclamation[];
  @Output() handleShow = new EventEmitter<Reclamation>();

  getStatusBadge = (status: string) => {
    switch (status) {
      case 'Acceptée':
        return 'accepted';
      case 'Refusée':
        return 'refused';
      default:
        return '';
    }
  }

  showReclamation(reclamation: Reclamation) {
    this.handleShow.emit(reclamation);
  }
}
