// toaster.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  private messageSubject = new BehaviorSubject<string>('');
  private classNameSubject = new BehaviorSubject<string>('success');

  message$ = this.messageSubject.asObservable();
  className$ = this.classNameSubject.asObservable();

  private timeoutId: any;

  showToast(message: string, className: 'success' | 'error' = 'success', duration: number = 3000) {
    this.messageSubject.next(message);
    this.classNameSubject.next(className);

    // clear previous timeout if any
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    // auto-hide after duration
    this.timeoutId = setTimeout(() => {
      this.hideToast();
    }, duration);
  }

  hideToast() {
    this.messageSubject.next('');
  }
}
