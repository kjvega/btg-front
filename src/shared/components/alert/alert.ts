import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertModel } from '../../../models/alert/alert';
import { AlertService } from '../../../core/services/alert/alert-service';
import { Subscription } from 'rxjs';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-alert',
  imports: [
    NgClass
  ],
  templateUrl: './alert.html',
  styleUrl: './alert.scss'
})
export class Alert implements OnInit,OnDestroy {
  alert:AlertModel | null = null;
  private subscription!: Subscription;
  fadeOut = false;
  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.subscription = this.alertService.alert$.subscribe((alert) => {
      this.alert = alert;
      this.fadeOut = false;

      if (alert) {
        setTimeout(() => {
          this.fadeOut = true;
        }, 4500);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
