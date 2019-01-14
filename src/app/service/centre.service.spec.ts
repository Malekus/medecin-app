import { TestBed, inject } from '@angular/core/testing';

import { CentreService } from './centre.service';

describe('CentreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentreService]
    });
  });

  it('should be created', inject([CentreService], (service: CentreService) => {
    expect(service).toBeTruthy();
  }));
});
