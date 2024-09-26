import { TestBed } from '@angular/core/testing';

import { AyudantesService } from './usuario.service';

describe('AyudantesService', () => {
  let service: AyudantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AyudantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
