import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'access-denied',
  standalone: false,
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.css'
})
export class AccessDeniedComponent {

  constructor(private location:Location) {

  }

  goBack() {
    this.location.back()
  }

}
