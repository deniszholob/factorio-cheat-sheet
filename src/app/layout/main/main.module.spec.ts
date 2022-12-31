import { TestBed } from '@angular/core/testing';

import { MainModule } from './main.module';

describe('MainModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MainModule],
    });
  });

  it('initializes', () => {
    const module: MainModule = TestBed.inject(MainModule);
    expect(module).toBeTruthy();
  });
});
