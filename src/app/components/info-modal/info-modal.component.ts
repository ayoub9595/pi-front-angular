import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'info-modal',
  imports: [],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.css'
})
export class InfoModalComponent {
  @Input() title!: string;
  @Output() close= new EventEmitter();

  closeModal() {
    this.close.emit();
  }

}
