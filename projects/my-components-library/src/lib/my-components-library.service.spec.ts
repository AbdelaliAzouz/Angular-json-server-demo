import { TestBed } from '@angular/core/testing';

import { MyComponentsLibraryService } from './my-components-library.service';

describe('MyComponentsLibraryService', () => {
  let service: MyComponentsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyComponentsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
