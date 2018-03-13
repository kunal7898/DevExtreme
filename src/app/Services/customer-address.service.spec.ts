import { TestBed, inject } from '@angular/core/testing';

import { CustomerAddressService } from './customer-address.service';

describe('CustomerAddressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddressService]
    });
  });

  it('should be created', inject([CustomerAddressService], (service: CustomerAddressService) => {
    expect(service).toBeTruthy();
  }));
});
