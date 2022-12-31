import { TestBed } from '@angular/core/testing';

import { MiningModule } from './mining.module';

describe('MiningModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MiningModule],
    });
  });

  it('initializes', () => {
    const module: MiningModule = TestBed.inject(MiningModule);
    expect(module).toBeTruthy();
  });
});
