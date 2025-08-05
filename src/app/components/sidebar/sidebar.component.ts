import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() show: boolean | undefined;

  @Output() showChange = new EventEmitter();

  handleChangeShow(): void {
    this.showChange.emit();
  }

}
