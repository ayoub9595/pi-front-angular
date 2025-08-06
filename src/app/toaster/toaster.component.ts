import {Component, OnInit} from '@angular/core';
import {ToasterService} from '../services/toaster.service';

@Component({
  selector: 'toaster',
  standalone: false,
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent implements OnInit{
  message = '';
  className = '';

  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    this.toasterService.message$.subscribe(msg => this.message = msg);
    this.toasterService.className$.subscribe(cls => this.className = cls);
  }

  close() {
    this.toasterService.hideToast();
  }

}
