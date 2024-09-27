import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TheToolbarContentComponent} from "./public/components/the-toolbar-content/the-toolbar-content.component";
import {NotificationTableComponent} from "./pruebas/components/notification-table/notification-table.component";
import {TheFooterContentComponent} from "./public/components/the-footer-content/the-footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheToolbarContentComponent, NotificationTableComponent, TheFooterContentComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cocktail-service-2';
}
