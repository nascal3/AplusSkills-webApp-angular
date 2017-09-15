import { TestBed, inject } from '@angular/core/testing';

import { ViewJobsserviceService } from './view-jobsservice.service';

describe('ViewJobsserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewJobsserviceService]
    });
  });

  it('should be created', inject([ViewJobsserviceService], (service: ViewJobsserviceService) => {
    expect(service).toBeTruthy();
  }));
});
