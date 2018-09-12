import { TestBed, inject } from '@angular/core/testing';

import { LessonSharedService } from './lesson-shared.service';

describe('LessonSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessonSharedService]
    });
  });

  it('should be created', inject([LessonSharedService], (service: LessonSharedService) => {
    expect(service).toBeTruthy();
  }));
});
