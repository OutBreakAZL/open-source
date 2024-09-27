import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {AppNotification} from "../model/AppNotification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = `${environment.baseUrl}/notificaciones`;

  constructor(private http: HttpClient) {}

  getNotifications(): Observable<AppNotification[]> {
    return this.http.get<AppNotification[]>(this.apiUrl);
  }

  createNotification(notification: AppNotification): Observable<AppNotification> {
    return this.http.post<AppNotification>(this.apiUrl, notification);
  }
}
