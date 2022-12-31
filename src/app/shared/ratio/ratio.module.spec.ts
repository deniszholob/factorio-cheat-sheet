import { TestBed } from '@angular/core/testing';

import { RatioModule } from './ratio.module';

describe('RatioModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RatioModule],
    });
  });

  it('initializes', () => {
    const module: RatioModule = TestBed.inject(RatioModule);
    expect(module).toBeTruthy();
  });
});
