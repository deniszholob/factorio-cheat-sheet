import { TestBed } from '@angular/core/testing';

import { IntroModule } from './intro.module';

describe('IntroModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IntroModule],
    });
  });

  it('initializes', () => {
    const module: IntroModule = TestBed.inject(IntroModule);
    expect(module).toBeTruthy();
  });
});
