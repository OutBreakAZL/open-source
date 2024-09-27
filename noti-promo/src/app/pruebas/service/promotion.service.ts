import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Promotion } from '../model/promotion.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {
  private apiUrl = `${environment.baseUrl}/promotions`;

  constructor(private http: HttpClient) {}

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(this.apiUrl);
  }

  createPromotion(promotion: Promotion): Observable<Promotion> {
    return this.http.post<Promotion>(this.apiUrl, promotion);
  }

  validatePromotion(code: string): Observable<Promotion> {
    return this.http.get<Promotion>(`${this.apiUrl}?code=${code}`);
  }

  redeemPromotion(code: string): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.apiUrl}/${code}`, { used: true });
  }
}
