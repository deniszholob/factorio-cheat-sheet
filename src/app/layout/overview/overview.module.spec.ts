import { TestBed } from '@angular/core/testing';

import { OverviewModule } from './overview.module';

describe('OverviewModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverviewModule],
    });
  });

  it('initializes', () => {
    const module: OverviewModule = TestBed.inject(OverviewModule);
    expect(module).toBeTruthy();
  });
});
