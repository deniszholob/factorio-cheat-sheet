import { TestBed } from '@angular/core/testing';

import { FooterModule } from './footer.module';

describe('FooterModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterModule],
    });
  });

  it('initializes', () => {
    const module: FooterModule = TestBed.inject(FooterModule);
    expect(module).toBeTruthy();
  });
});
