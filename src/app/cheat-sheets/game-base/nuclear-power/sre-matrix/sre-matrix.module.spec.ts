import { TestBed } from '@angular/core/testing';

import { SreMatrixModule } from './sre-matrix.module';

describe('SreMatrixModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SreMatrixModule],
    });
  });

  it('initializes', () => {
    const module: SreMatrixModule = TestBed.inject(SreMatrixModule);
    expect(module).toBeTruthy();
  });
});
