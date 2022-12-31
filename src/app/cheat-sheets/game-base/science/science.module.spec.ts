import { TestBed } from '@angular/core/testing';

import { ScienceModule } from './science.module';

describe('ScienceModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScienceModule],
    });
  });

  it('initializes', () => {
    const module: ScienceModule = TestBed.inject(ScienceModule);
    expect(module).toBeTruthy();
  });
});
