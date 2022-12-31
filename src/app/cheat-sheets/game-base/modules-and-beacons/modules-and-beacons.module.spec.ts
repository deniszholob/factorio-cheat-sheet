import { TestBed } from '@angular/core/testing';

import { ModulesAndBeaconsModule } from './modules-and-beacons.module';

describe('ModulesAndBeaconsModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModulesAndBeaconsModule],
    });
  });

  it('initializes', () => {
    const module: ModulesAndBeaconsModule = TestBed.inject(
      ModulesAndBeaconsModule
    );
    expect(module).toBeTruthy();
  });
});
