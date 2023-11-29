import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormselectComponent } from './formselect.component';

describe('FormselectComponent', () => {
  let component: FormselectComponent;
  let fixture: ComponentFixture<FormselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormselectComponent]
    });
    fixture = TestBed.createComponent(FormselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
