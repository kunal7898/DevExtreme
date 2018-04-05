import { TestBed, inject } from '@angular/core/testing';

import { AsyncValidatorService } from './async-validator.service';

describe('AsyncValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsyncValidatorService]
    });
  });

  it('should be created', inject([AsyncValidatorService], (service: AsyncValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
