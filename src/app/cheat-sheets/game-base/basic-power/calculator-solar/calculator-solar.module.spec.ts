import { TestBed } from '@angular/core/testing';

import { CalculatorSolarModule } from './calculator-solar.module';

describe('CalculatorSolarModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculatorSolarModule],
    });
  });

  it('initializes', () => {
    const module: CalculatorSolarModule = TestBed.inject(CalculatorSolarModule);
    expect(module).toBeTruthy();
  });
});
