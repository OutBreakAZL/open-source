import { Routes } from '@angular/router';
import {NotificationTableComponent} from "./pruebas/components/notification-table/notification-table.component";
import {PromotionTableComponent} from "./pruebas/components/promotion-table/promotion-table.component";

export const routes: Routes = [

  { path: 'notifications', component: NotificationTableComponent },
  { path: 'promotions', component: PromotionTableComponent },
  { path: '', redirectTo: '/notifications', pathMatch: 'full' }
];
