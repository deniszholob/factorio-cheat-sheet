import { TestBed } from '@angular/core/testing';

import { CheatSheetTemplateModule } from './cheat-sheet-template.module';

describe('CheatSheetTemplateModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheatSheetTemplateModule],
    });
  });

  it('initializes', () => {
    const module: CheatSheetTemplateModule = TestBed.inject(
      CheatSheetTemplateModule
    );
    expect(module).toBeTruthy();
  });
});
