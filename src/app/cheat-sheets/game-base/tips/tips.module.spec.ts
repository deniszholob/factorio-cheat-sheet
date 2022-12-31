import { TestBed } from '@angular/core/testing';

import { TipsModule } from './tips.module';

describe('TipsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TipsModule],
    });
  });

  it('initializes', () => {
    const module: TipsModule = TestBed.inject(TipsModule);
    expect(module).toBeTruthy();
  });
});
