import { TestBed } from '@angular/core/testing';

import { AllendeService } from './allende.service';

describe('AllendeService', () => {
  let service: AllendeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllendeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
