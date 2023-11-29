import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxListComponent } from './checkbox-list.component';

describe('CheckboxListComponent', () => {
  let component: CheckboxListComponent;
  let fixture: ComponentFixture<CheckboxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckboxListComponent]
    });
    fixture = TestBed.createComponent(CheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
