import { TestBed, inject } from '@angular/core/testing';

import { ProfessionalServiceService } from './professional-service.service';

describe('ProfessionalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessionalServiceService]
    });
  });

  it('should be created', inject([ProfessionalServiceService], (service: ProfessionalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
