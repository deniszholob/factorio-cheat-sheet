import { TestBed } from '@angular/core/testing';

import { LinksModule } from './links.module';

describe('LinksModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LinksModule],
    });
  });

  it('initializes', () => {
    const module: LinksModule = TestBed.inject(LinksModule);
    expect(module).toBeTruthy();
  });
});
