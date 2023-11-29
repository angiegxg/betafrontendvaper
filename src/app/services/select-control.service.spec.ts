import { TestBed } from '@angular/core/testing';

import { SelectControlService } from './select-control.service';

describe('SelectControlService', () => {
  let service: SelectControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
