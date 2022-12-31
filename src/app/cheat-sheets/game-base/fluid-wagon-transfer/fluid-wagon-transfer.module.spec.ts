import { TestBed } from '@angular/core/testing';

import { FluidWagonTransferModule } from './fluid-wagon-transfer.module';

describe('FluidWagonTransferModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FluidWagonTransferModule],
    });
  });

  it('initializes', () => {
    const module: FluidWagonTransferModule = TestBed.inject(
      FluidWagonTransferModule
    );
    expect(module).toBeTruthy();
  });
});
