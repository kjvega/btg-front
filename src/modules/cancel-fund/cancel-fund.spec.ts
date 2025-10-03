import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelFund } from './cancel-fund';

describe('CancelFund', () => {
  let component: CancelFund;
  let fixture: ComponentFixture<CancelFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelFund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelFund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
