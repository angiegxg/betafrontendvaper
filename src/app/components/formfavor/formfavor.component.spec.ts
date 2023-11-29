import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfavorComponent } from './formfavor.component';

describe('FormfavorComponent', () => {
  let component: FormfavorComponent;
  let fixture: ComponentFixture<FormfavorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormfavorComponent]
    });
    fixture = TestBed.createComponent(FormfavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
