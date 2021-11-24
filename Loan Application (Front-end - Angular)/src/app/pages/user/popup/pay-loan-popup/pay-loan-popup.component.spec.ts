import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayLoanPopupComponent } from './pay-loan-popup.component';

describe('PayLoanPopupComponent', () => {
  let component: PayLoanPopupComponent;
  let fixture: ComponentFixture<PayLoanPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayLoanPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayLoanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
