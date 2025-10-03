import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AlertModel } from '../../../models/alert/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<AlertModel | null>(null);
  private timeoutId: any;

  get alert$() {
    return this.alertSubject.asObservable();
  }

  showAlert(type: string, message: string) {
    this.alertSubject.next({ type, message });

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.clearAlert();
    }, 5000);
  }

  clearAlert() {
    this.alertSubject.next(null);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
