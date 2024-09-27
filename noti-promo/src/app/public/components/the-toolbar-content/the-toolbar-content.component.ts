import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { NotificationService } from '../../../pruebas/service/notification.service';
import {AppNotification} from "../../../pruebas/model/AppNotification.model";

@Component({
  selector: 'the-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    NgIf,
    NgForOf
  ],
  templateUrl: './the-toolbar-content.component.html',
  styleUrls: ['./the-toolbar-content.component.css']
})
export class TheToolbarContentComponent {
  notifications: AppNotification[] = [];

  constructor(private router: Router, private notificationService: NotificationService) {}

  goToNotifications() {
    this.router.navigate(['/notifications']);
  }

  goToPromotions() {
    this.router.navigate(['/promotions']);
  }
}
