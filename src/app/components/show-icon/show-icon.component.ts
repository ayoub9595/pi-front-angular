import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'show-icon',
  imports: [],
  templateUrl: './show-icon.component.html',
  styleUrl: './show-icon.component.css'
})
export class ShowIconComponent {
  @Input() size!: number;
  @Output() click = new EventEmitter();

  handleClick() {
    this.click.emit();
  }

}
