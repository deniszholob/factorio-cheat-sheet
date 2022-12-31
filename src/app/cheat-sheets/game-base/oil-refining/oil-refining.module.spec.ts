import { TestBed } from '@angular/core/testing';

import { OilRefiningModule } from './oil-refining.module';

describe('OilRefiningModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OilRefiningModule],
    });
  });

  it('initializes', () => {
    const module: OilRefiningModule = TestBed.inject(OilRefiningModule);
    expect(module).toBeTruthy();
  });
});
