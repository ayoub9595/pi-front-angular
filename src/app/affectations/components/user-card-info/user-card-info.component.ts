import {Component, Input} from '@angular/core';
import {Utilsateur} from '../../models/Affectation';

@Component({
  selector: 'user-card-info',
  standalone: false,
  templateUrl: './user-card-info.component.html',
  styleUrl: './user-card-info.component.css'
})
export class UserCardInfoComponent {
  @Input() user!: Utilsateur;

}
