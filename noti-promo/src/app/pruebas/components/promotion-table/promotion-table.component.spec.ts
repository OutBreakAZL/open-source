import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionTableComponent } from './promotion-table.component';

describe('PromotionTableComponent', () => {
  let component: PromotionTableComponent;
  let fixture: ComponentFixture<PromotionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
