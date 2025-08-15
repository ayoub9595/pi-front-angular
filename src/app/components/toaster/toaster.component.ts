import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToasterService } from '../../services/toaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'toaster',
  standalone: false,
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent implements OnInit, OnDestroy {
  message = '';
  className = '';
  isVisible = false;
  animationState = '';

  private subscriptions = new Subscription();

  constructor(private toasterService: ToasterService) {}

  ngOnInit(): void {
    // Subscribe to message changes
    this.subscriptions.add(
      this.toasterService.message$.subscribe(msg => {
        if (msg && msg !== this.message) {
          this.showToast(msg);
        } else if (!msg) {
          this.hideToast();
        }
        this.message = msg;
      })
    );

    // Subscribe to className changes
    this.subscriptions.add(
      this.toasterService.className$.subscribe(cls => this.className = cls)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private showToast(message: string): void {
    this.isVisible = true;
    this.animationState = 'entering';

    // Remove entering class after animation completes
    setTimeout(() => {
      this.animationState = '';
    }, 400);
  }

  private hideToast(): void {
    this.animationState = 'exiting';

    // Hide component after exit animation completes
    setTimeout(() => {
      this.isVisible = false;
      this.animationState = '';
    }, 400);
  }

  close(): void {
    this.toasterService.hideToast();
  }

  // Get combined CSS classes
  getContainerClasses(): string {
    const classes = ['container'];
    if (this.className) classes.push(this.className);
    if (this.animationState) classes.push(this.animationState);
    return classes.join(' ');
  }
}
