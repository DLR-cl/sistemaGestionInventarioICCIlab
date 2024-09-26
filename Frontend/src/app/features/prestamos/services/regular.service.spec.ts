import { TestBed } from '@angular/core/testing';

import { RegularService } from './regular.service';

describe('RegularService', () => {
  let service: RegularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
