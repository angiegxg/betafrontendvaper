import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductSoldComponent } from './form-product-sold.component';

describe('FormProductSoldComponent', () => {
  let component: FormProductSoldComponent;
  let fixture: ComponentFixture<FormProductSoldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormProductSoldComponent]
    });
    fixture = TestBed.createComponent(FormProductSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
