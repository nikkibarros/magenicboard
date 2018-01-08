import { TestBed, inject } from '@angular/core/testing';

import { MiddlemanService } from './middleman.service';

describe('MiddlemanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiddlemanService]
    });
  });

  it('should be created', inject([MiddlemanService], (service: MiddlemanService) => {
    expect(service).toBeTruthy();
  }));
});
