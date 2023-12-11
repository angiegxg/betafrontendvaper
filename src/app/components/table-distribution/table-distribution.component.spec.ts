import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDistributionComponent } from './table-distribution.component';

describe('TableDistributionComponent', () => {
  let component: TableDistributionComponent;
  let fixture: ComponentFixture<TableDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableDistributionComponent]
    });
    fixture = TestBed.createComponent(TableDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
