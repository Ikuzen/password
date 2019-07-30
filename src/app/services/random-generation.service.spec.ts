import { TestBed } from '@angular/core/testing';

import { RandomGenerationService } from './random-generation.service';

describe('RandomGenerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomGenerationService = TestBed.get(RandomGenerationService);
    expect(service).toBeTruthy();
  });
});
