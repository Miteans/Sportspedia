import { TestBed } from '@angular/core/testing';

import { KabaddiService } from './kabaddi.service';

describe('KabaddiService', () => {
  let service: KabaddiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KabaddiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
