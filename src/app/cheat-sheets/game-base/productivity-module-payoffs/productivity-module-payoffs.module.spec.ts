import { TestBed } from '@angular/core/testing';

import { ProductivityModulePayoffsModule } from './productivity-module-payoffs.module';

describe('ProductivityModulePayoffsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductivityModulePayoffsModule],
    });
  });

  it('initializes', () => {
    const module: ProductivityModulePayoffsModule = TestBed.inject(
      ProductivityModulePayoffsModule
    );
    expect(module).toBeTruthy();
  });
});
