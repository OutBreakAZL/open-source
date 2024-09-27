import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../../service/notification.service';
import {AppNotification} from "../../model/AppNotification.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'notification-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton
  ],
  templateUrl: './notification-table.component.html',
  styleUrls: ['./notification-table.component.css']
})
export class NotificationTableComponent implements OnInit {
  dataSource = new MatTableDataSource<AppNotification>();
  displayedColumns: string[] = ['id', 'titulo', 'mensaje', 'fecha'];
  notifications: AppNotification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    this.notificationService.getNotifications().subscribe((data: AppNotification[]) => {
      this.notifications = data;
      this.dataSource.data = this.notifications;
    });
  }

  createNotification() {
    this.notificationService.getNotifications().subscribe((data: AppNotification[]) => {
      this.notifications = data;
      const maxId = this.notifications.reduce((max, notification) => notification.id > max ? notification.id : max, 0);
      const id = maxId + 1;
      const titles = ['Descuento Especial', 'Oferta Limitada', 'Promoción Exclusiva'];
      const messages = [
        'Aprovecha un 20% de descuento en tu próxima compra.',
        '¡Descuento del 30% en todos los productos!',
        'Obtén un 15% de descuento adicional en artículos seleccionados.'
      ];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];

      const newNotification = new AppNotification(id, randomTitle, randomMessage, randomDate);
      this.notificationService.createNotification(newNotification).subscribe(notification => {
        this.notifications.push(notification);
        this.dataSource.data = this.notifications;
        console.log('Notificación creada:', notification);
      });
    });
  }
}
