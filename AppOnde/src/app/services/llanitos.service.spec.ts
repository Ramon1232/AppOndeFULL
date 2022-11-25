import { TestBed } from '@angular/core/testing';

import { LlanitosService } from './llanitos.service';

describe('LlanitosService', () => {
  let service: LlanitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlanitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
