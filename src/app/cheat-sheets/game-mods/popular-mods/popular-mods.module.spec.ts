import { TestBed } from '@angular/core/testing';

import { PopularModsModule } from './popular-mods.module';

describe('UtilityModsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PopularModsModule],
    });
  });

  it('initializes', () => {
    const module: PopularModsModule = TestBed.inject(PopularModsModule);
    expect(module).toBeTruthy();
  });
});
