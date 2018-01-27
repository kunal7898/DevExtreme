import { TestBed, inject } from '@angular/core/testing';

import { DataGridService } from './data-grid.service';

describe('DataGridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGridService]
    });
  });

  it('should be created', inject([DataGridService], (service: DataGridService) => {
    expect(service).toBeTruthy();
  }));
});
