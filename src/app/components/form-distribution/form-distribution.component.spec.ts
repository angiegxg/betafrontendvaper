import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDistributionComponent } from './form-distribution.component';

describe('FormDistributionComponent', () => {
  let component: FormDistributionComponent;
  let fixture: ComponentFixture<FormDistributionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormDistributionComponent]
    });
    fixture = TestBed.createComponent(FormDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
