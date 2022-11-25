import { TestBed } from '@angular/core/testing';

import { InsurgentesService } from './insurgentes.service';

describe('InsurgentesService', () => {
  let service: InsurgentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsurgentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
