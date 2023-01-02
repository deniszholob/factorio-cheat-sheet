import { TestBed } from '@angular/core/testing';

import { GameModsModule } from './game-mods.module';

describe('GameModsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GameModsModule],
    });
  });

  it('initializes', () => {
    const module: GameModsModule = TestBed.inject(GameModsModule);
    expect(module).toBeTruthy();
  });
});
