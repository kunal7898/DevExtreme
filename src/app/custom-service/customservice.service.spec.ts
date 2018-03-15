import { TestBed, inject } from '@angular/core/testing';

import { CustomserviceService } from './customservice.service';

describe('CustomserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomserviceService]
    });
  });

  it('should be created', inject([CustomserviceService], (service: CustomserviceService) => {
    expect(service).toBeTruthy();
  }));
});
