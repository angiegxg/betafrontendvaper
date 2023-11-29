import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStockComponent } from './table-stock.component';

describe('TableStockComponent', () => {
  let component: TableStockComponent;
  let fixture: ComponentFixture<TableStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableStockComponent]
    });
    fixture = TestBed.createComponent(TableStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
