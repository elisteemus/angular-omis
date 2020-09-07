import { TestBed } from '@angular/core/testing';

import { CatSelectService } from './cat-select.service';

describe('CatSelectService', () => {
  let service: CatSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
