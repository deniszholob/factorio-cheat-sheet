import { TestBed } from '@angular/core/testing';

import { UtilityModsModule } from './utility-mods.module';

describe('UtilityModsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilityModsModule],
    });
  });

  it('initializes', () => {
    const module: UtilityModsModule = TestBed.inject(UtilityModsModule);
    expect(module).toBeTruthy();
  });
});
