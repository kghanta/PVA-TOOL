/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeographyService } from './geography.service';

describe('GeographyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeographyService]
    });
  });

  it('should ...', inject([GeographyService], (service: GeographyService) => {
    expect(service).toBeTruthy();
  }));
});
