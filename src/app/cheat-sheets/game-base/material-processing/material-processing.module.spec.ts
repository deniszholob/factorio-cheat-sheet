import { TestBed } from '@angular/core/testing';

import { MaterialProcessingModule } from './material-processing.module';

describe('MaterialProcessingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialProcessingModule],
    });
  });

  it('initializes', () => {
    const module: MaterialProcessingModule = TestBed.inject(
      MaterialProcessingModule
    );
    expect(module).toBeTruthy();
  });
});
