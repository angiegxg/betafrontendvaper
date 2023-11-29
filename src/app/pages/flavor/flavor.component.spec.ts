import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavorComponent } from './flavor.component';

describe('FlavorComponent', () => {
  let component: FlavorComponent;
  let fixture: ComponentFixture<FlavorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlavorComponent]
    });
    fixture = TestBed.createComponent(FlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
