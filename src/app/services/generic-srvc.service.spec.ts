import { TestBed } from '@angular/core/testing';

import { GenericSrvcService } from './generic-srvc.service';

describe('GenericSrvcService', () => {
  let service: GenericSrvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericSrvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
