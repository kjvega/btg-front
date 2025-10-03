import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInfoFunds } from './table-info-funds';

describe('TableInfoFunds', () => {
  let component: TableInfoFunds;
  let fixture: ComponentFixture<TableInfoFunds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInfoFunds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInfoFunds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
