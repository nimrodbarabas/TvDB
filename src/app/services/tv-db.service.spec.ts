import { TestBed } from '@angular/core/testing';

import { TvDBService } from './tv-db.service';

describe('TvDBService', () => {
  let service: TvDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
