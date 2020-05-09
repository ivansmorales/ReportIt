import { TestBed } from '@angular/core/testing';

import { LogalStorageService } from './logal-storage.service';

describe('LogalStorageService', () => {
  let service: LogalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
