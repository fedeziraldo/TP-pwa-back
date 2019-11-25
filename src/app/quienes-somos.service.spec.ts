import { TestBed } from '@angular/core/testing';

import { QuienesSomosService } from './quienes-somos.service';

describe('QuienesSomosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuienesSomosService = TestBed.get(QuienesSomosService);
    expect(service).toBeTruthy();
  });
});
