import { TestBed } from '@angular/core/testing';

import { IconRatioCompositeModule } from './icon-ratio-composite.module';

describe('IconRatioCompositeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconRatioCompositeModule],
    });
  });

  it('initializes', () => {
    const module: IconRatioCompositeModule = TestBed.inject(
      IconRatioCompositeModule
    );
    expect(module).toBeTruthy();
  });
});
