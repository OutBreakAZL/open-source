import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheToolbarContentComponent } from './the-toolbar-content.component';

describe('TheToolbarContentComponent', () => {
  let component: TheToolbarContentComponent;
  let fixture: ComponentFixture<TheToolbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheToolbarContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheToolbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
