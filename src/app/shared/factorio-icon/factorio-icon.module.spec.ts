import { TestBed } from '@angular/core/testing';

import { FactorioIconModule } from './factorio-icon.module';

describe('FactorioIconModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FactorioIconModule],
    });
  });

  it('initializes', () => {
    const module: FactorioIconModule = TestBed.inject(FactorioIconModule);
    expect(module).toBeTruthy();
  });
});
