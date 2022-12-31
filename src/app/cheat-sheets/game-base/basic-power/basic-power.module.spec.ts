import { TestBed } from '@angular/core/testing';

import { BasicPowerModule } from './basic-power.module';

describe('BasicPowerModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BasicPowerModule],
    });
  });

  it('initializes', () => {
    const module: BasicPowerModule = TestBed.inject(BasicPowerModule);
    expect(module).toBeTruthy();
  });
});
