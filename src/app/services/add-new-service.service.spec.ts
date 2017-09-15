import { TestBed, inject } from '@angular/core/testing';

import { AddNewServiceService } from './add-new-service.service';

describe('AddNewServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddNewServiceService]
    });
  });

  it('should be created', inject([AddNewServiceService], (service: AddNewServiceService) => {
    expect(service).toBeTruthy();
  }));
});
