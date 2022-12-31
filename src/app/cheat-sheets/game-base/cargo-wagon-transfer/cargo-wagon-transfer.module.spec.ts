import { TestBed } from '@angular/core/testing';

import { CargoWagonTransferModule } from './cargo-wagon-transfer.module';

describe('CargoWagonTransferModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CargoWagonTransferModule],
    });
  });

  it('initializes', () => {
    const module: CargoWagonTransferModule = TestBed.inject(
      CargoWagonTransferModule
    );
    expect(module).toBeTruthy();
  });
});
