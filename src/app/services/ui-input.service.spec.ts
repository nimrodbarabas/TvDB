import { TestBed } from '@angular/core/testing';

import { UiInputService } from './ui-input.service';

describe('UiInputService', () => {
  let service: UiInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
