import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'process-reclamation',
  standalone: false,
  templateUrl: './process-reclamation.component.html',
  styleUrl: './process-reclamation.component.css'
})
export class ProcessReclamationComponent {
  processForm!: FormGroup;
  reclamationsStatus =['Non traitée','Acceptée','Refusée']
  @Output() submit = new EventEmitter();
  @Output() cancel=new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
    this.processForm = this.formBuilder.group({
      etat_reclamation: [this.reclamationsStatus[0], Validators.required],
      commentaire: ['', Validators.required]
    })
  }

  handleSubmit(event: Event) {
    event.preventDefault(); // prevent bubbling
    event.stopPropagation(); // avoid parent receiving the event
    this.submit.emit(this.processForm.value);
  }

  handleCancel() {
    this.cancel.emit();
  }

}
