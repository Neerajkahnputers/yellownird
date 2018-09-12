import { TestBed, inject } from '@angular/core/testing';

import { ProfilesharedService } from './profileshared.service';

describe('ProfilesharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilesharedService]
    });
  });

  it('should be created', inject([ProfilesharedService], (service: ProfilesharedService) => {
    expect(service).toBeTruthy();
  }));
});
