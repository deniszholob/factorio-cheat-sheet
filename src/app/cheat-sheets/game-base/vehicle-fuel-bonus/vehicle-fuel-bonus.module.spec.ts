import { TestBed } from '@angular/core/testing';

import { VehicleFuelBonusModule } from './vehicle-fuel-bonus.module';

describe('VehicleFuelBonusModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VehicleFuelBonusModule],
    });
  });

  it('initializes', () => {
    const module: VehicleFuelBonusModule = TestBed.inject(
      VehicleFuelBonusModule
    );
    expect(module).toBeTruthy();
  });
});
