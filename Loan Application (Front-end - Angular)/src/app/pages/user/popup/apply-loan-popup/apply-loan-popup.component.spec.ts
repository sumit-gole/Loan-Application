import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLoanPopupComponent } from './apply-loan-popup.component';

describe('ApplyLoanPopupComponent', () => {
  let component: ApplyLoanPopupComponent;
  let fixture: ComponentFixture<ApplyLoanPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLoanPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyLoanPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
