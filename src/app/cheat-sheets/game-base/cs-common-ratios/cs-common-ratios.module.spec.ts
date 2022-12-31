import { TestBed } from '@angular/core/testing';

import { CsCommonRatiosModule } from './cs-common-ratios.module';

describe('CsCommonRatiosModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CsCommonRatiosModule],
    });
  });

  it('initializes', () => {
    const module: CsCommonRatiosModule = TestBed.inject(CsCommonRatiosModule);
    expect(module).toBeTruthy();
  });
});
