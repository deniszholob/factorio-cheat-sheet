import { TestBed } from '@angular/core/testing';

import { BlueprintClipboardModule } from './blueprint-clipboard.module';

describe('BlueprintClipboardModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BlueprintClipboardModule],
    });
  });

  it('initializes', () => {
    const module: BlueprintClipboardModule = TestBed.inject(
      BlueprintClipboardModule
    );
    expect(module).toBeTruthy();
  });
});
