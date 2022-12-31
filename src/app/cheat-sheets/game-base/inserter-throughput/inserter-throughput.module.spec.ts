import { TestBed } from '@angular/core/testing';

import { InserterThroughputModule } from './inserter-throughput.module';

describe('InserterThroughputModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InserterThroughputModule],
    });
  });

  it('initializes', () => {
    const module: InserterThroughputModule = TestBed.inject(
      InserterThroughputModule
    );
    expect(module).toBeTruthy();
  });
});
