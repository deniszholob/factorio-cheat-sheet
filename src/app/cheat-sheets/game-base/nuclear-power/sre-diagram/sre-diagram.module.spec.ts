import { TestBed } from '@angular/core/testing';

import { SreDiagramModule } from './sre-diagram.module';

describe('SreDiagramModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SreDiagramModule],
    });
  });

  it('initializes', () => {
    const module: SreDiagramModule = TestBed.inject(SreDiagramModule);
    expect(module).toBeTruthy();
  });
});
