import { TestBed } from '@angular/core/testing';

import { BalancersModule } from './balancers.module';

describe('BalancersModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BalancersModule],
    });
  });

  it('initializes', () => {
    const module: BalancersModule = TestBed.inject(BalancersModule);
    expect(module).toBeTruthy();
  });
});
