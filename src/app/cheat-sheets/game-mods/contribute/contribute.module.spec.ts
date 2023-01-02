import { TestBed } from '@angular/core/testing';

import { ContributeModule } from './contribute.module';

describe('ContributeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContributeModule],
    });
  });

  it('initializes', () => {
    const module: ContributeModule = TestBed.inject(ContributeModule);
    expect(module).toBeTruthy();
  });
});
