import { TestBed } from '@angular/core/testing';

import { TrainColorsModule } from './train-colors.module';

describe('TrainColorsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TrainColorsModule],
    });
  });

  it('initializes', () => {
    const module: TrainColorsModule = TestBed.inject(TrainColorsModule);
    expect(module).toBeTruthy();
  });
});
