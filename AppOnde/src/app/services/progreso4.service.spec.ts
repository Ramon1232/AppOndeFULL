import { TestBed } from '@angular/core/testing';

import { Progreso4Service } from './progreso4.service';

describe('Progreso4Service', () => {
  let service: Progreso4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Progreso4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
