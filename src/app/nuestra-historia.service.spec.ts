import { TestBed } from '@angular/core/testing';

import { NuestraHistoriaService } from './nuestra-historia.service';

describe('NuestraHistoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NuestraHistoriaService = TestBed.get(NuestraHistoriaService);
    expect(service).toBeTruthy();
  });
});
