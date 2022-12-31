import { TestBed } from '@angular/core/testing';

import { NavModule } from './nav.module';

describe('NavModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavModule],
    });
  });

  it('initializes', () => {
    const module: NavModule = TestBed.inject(NavModule);
    expect(module).toBeTruthy();
  });
});
