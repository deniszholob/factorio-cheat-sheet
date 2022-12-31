import { TestBed } from '@angular/core/testing';

import { NuclearPowerModule } from './nuclear-power.module';

describe('NuclearPowerModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NuclearPowerModule],
    });
  });

  it('initializes', () => {
    const module: NuclearPowerModule = TestBed.inject(NuclearPowerModule);
    expect(module).toBeTruthy();
  });
});
