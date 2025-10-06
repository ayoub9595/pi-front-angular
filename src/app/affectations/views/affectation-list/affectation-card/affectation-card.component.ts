import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Affectation} from '../../../models/Affectation';

@Component({
  selector: 'affectation-card',
  standalone: false,
  templateUrl: './affectation-card.component.html',
  styleUrl: './affectation-card.component.css'
})
export class AffectationCardComponent {

  @Input() affectations!: Affectation[];
  @Input() isAdmin!: boolean;
  @Output() handleShow = new EventEmitter<number>();
  @Output() handleUpdate = new EventEmitter<number>();
  @Output() handleDelete = new EventEmitter<number>();

  showAffectation(id: number) {
    this.handleShow.emit(id);
  }
  updateAffectation(id:number) {
    this.handleUpdate.emit(id);
  }
  deleteAffectation(id: number) {
    this.handleDelete.emit(id);
  }


}
