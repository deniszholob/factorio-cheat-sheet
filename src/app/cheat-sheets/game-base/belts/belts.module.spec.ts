import { TestBed } from '@angular/core/testing';

import { BeltsModule } from './belts.module';

describe('BeltsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BeltsModule],
    });
  });

  it('initializes', () => {
    const module: BeltsModule = TestBed.inject(BeltsModule);
    expect(module).toBeTruthy();
  });
});
