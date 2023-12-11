import { TestBed } from '@angular/core/testing';

import { SingUpServiceService } from './sing-up-service.service';

describe('SingUpServiceService', () => {
  let service: SingUpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingUpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
