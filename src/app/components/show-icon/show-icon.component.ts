import {Component, Input} from '@angular/core';

@Component({
  selector: 'show-icon',
  imports: [],
  templateUrl: './show-icon.component.html',
  styleUrl: './show-icon.component.css'
})
export class ShowIconComponent {
  @Input() size!: number;

}
