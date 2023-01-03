import { TestBed } from '@angular/core/testing';

import { AppiiService } from './appii.service';

describe('AppiiService', () => {
  let service: AppiiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
