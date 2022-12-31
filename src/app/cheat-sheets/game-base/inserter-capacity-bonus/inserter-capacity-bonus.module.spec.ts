import { TestBed } from '@angular/core/testing';

import { InserterCapacityBonusModule } from './inserter-capacity-bonus.module';

describe('InserterCapacityBonusModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InserterCapacityBonusModule],
    });
  });

  it('initializes', () => {
    const module: InserterCapacityBonusModule = TestBed.inject(
      InserterCapacityBonusModule
    );
    expect(module).toBeTruthy();
  });
});
