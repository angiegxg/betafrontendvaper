import { TestBed } from '@angular/core/testing';

import { CheckboxControlService } from './checkbox-control.service';

describe('CheckboxControlService', () => {
  let service: CheckboxControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckboxControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
