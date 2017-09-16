import { TestBed, inject } from '@angular/core/testing';

import { AdsServiceService } from './ads-service.service';

describe('AdsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdsServiceService]
    });
  });

  it('should be created', inject([AdsServiceService], (service: AdsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
