import { TestBed } from '@angular/core/testing';

import { NumberToAlphabetConverterService } from './number-to-alphabet-converter.service';

describe('NumberToAlphabetConverterService', () => {
  let service: NumberToAlphabetConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberToAlphabetConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
