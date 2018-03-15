import { TestBed, inject } from '@angular/core/testing';

import { CustomGridDatasourceService } from './custom-grid-datasource.service';

describe('CustomGridDatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomGridDatasourceService]
    });
  });

  it('should be created', inject([CustomGridDatasourceService], (service: CustomGridDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
