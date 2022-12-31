import { TestBed } from '@angular/core/testing';

import { CheatSheetModule } from './cheat-sheet.module';

describe('CheatSheetModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheatSheetModule],
    });
  });

  it('initializes', () => {
    const module: CheatSheetModule = TestBed.inject(CheatSheetModule);
    expect(module).toBeTruthy();
  });
});
