import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'confirm-modal',
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  @Input() title!: string;
  @Input() message!: string;

  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();

  handleCancel() {
    this.cancel.emit();
  }

  handleConfirm() {
    this.confirm.emit();
  }

}

