import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetalisComponent } from './payment-detalis.component';

describe('PaymentDetalisComponent', () => {
  let component: PaymentDetalisComponent;
  let fixture: ComponentFixture<PaymentDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentDetalisComponent]
    });
    fixture = TestBed.createComponent(PaymentDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
