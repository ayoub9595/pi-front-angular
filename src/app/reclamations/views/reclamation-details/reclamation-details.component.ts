import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Reclamation} from '../../models/Reclamation';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'reclamation-details',
  standalone: false,
  templateUrl: './reclamation-details.component.html',
  styleUrl: './reclamation-details.component.css'
})
export class ReclamationDetailsComponent implements OnInit {

  showProcessForm= false;
  isAdmin= false;

  @Input() reclamation!: Reclamation;
  @Output() close = new EventEmitter();
  @Output() process = new EventEmitter();

  constructor(private authenticationService: AuthenticationService,) {
  }

  ngOnInit() {
    this.isAdmin = this.authenticationService.isAdmin()
  }

  handleAcceptClick() {
    this.showProcessForm=true;
  }

  handleCloseProcess() {
    this.showProcessForm = false
  }

  handleClose() {
    this.close.emit();
  }



  handleProcess(reclamation: Reclamation) {
    this.process.emit(reclamation);
  }

}
