import { TestBed } from '@angular/core/testing';

import { CombatModule } from './combat.module';

describe('CombatModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CombatModule],
    });
  });

  it('initializes', () => {
    const module: CombatModule = TestBed.inject(CombatModule);
    expect(module).toBeTruthy();
  });
});
