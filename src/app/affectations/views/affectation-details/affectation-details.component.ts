import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Affectation} from '../../models/Affectation';

@Component({
  selector: 'affectation-details',
  standalone: false,
  templateUrl: './affectation-details.component.html',
  styleUrl: './affectation-details.component.css'
})
export class AffectationDetailsComponent {

  @Input() affectation!: Affectation;
  @Output() close = new EventEmitter();

  handleCloseModal() {
    this.close.emit();
  }

}
