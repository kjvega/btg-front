import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFund } from './add-fund';

describe('AddFund', () => {
  let component: AddFund;
  let fixture: ComponentFixture<AddFund>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFund]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFund);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
