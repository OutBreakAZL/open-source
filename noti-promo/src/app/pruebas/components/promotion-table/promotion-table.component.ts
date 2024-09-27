import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { PromotionService } from '../../service/promotion.service';
import { MatButton } from '@angular/material/button';
import { Promotion } from '../../model/promotion.model';

@Component({
  selector: 'promotion-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatButton
  ],
  templateUrl: './promotion-table.component.html',
  styleUrls: ['./promotion-table.component.css']
})
export class PromotionTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Promotion>();
  displayedColumns: string[] = ['id', 'code', 'discount', 'expirationDate', 'used'];
  promotions: Promotion[] = [];

  constructor(private promotionService: PromotionService) {}

  ngOnInit() {
    this.getPromotions();
    this.loadPromotions();
  }

  getPromotions() {
    this.promotionService.getPromotions().subscribe((data: Promotion[]) => {
      this.promotions = data;
      this.dataSource.data = this.promotions;
    });
  }

  createPromotion() {
    this.promotionService.getPromotions().subscribe((data: Promotion[]) => {
      this.promotions = data;
      const maxId = this.promotions.reduce((max, promotion) => Math.max(max, Number(promotion.id)), 0);
      const id = maxId + 1;

      const promotionNames = ['Descuento Especial', 'Oferta Limitada', 'Promoción Exclusiva'];
      const randomName = promotionNames[Math.floor(Math.random() * promotionNames.length)];
      let code: string;
      do {
        code = `PROMO${Math.floor(Math.random() * 10000)}`;
      } while (this.promotions.some(promotion => promotion.code === code));

      const discount = Math.floor(Math.random() * 50) + 10;
      const expirationDate = new Date(Date.now() + Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0];

      const newPromotion = new Promotion(id, randomName, discount, expirationDate);
      this.promotionService.createPromotion(newPromotion).subscribe(promotion => {
        this.promotions.push(promotion);
        this.dataSource.data = this.promotions;
        console.log('Promoción creada:', promotion);
      });
    });
  }

  loadPromotions(): void {
    this.promotionService.getPromotions().subscribe((data) => {
      this.promotions = data;
    });
  }

  redeemPromotion(code: string): void {
    this.promotionService.redeemPromotion(code).subscribe(
      (response) => {
        console.log('Promotion redeemed:', response);
        this.loadPromotions();
      },
      (error) => {
        console.error('Error redeeming promotion:', error);
      }
    );
  }
}
