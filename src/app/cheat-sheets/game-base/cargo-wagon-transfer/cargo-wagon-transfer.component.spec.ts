import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CargoWagonTransferComponent } from './cargo-wagon-transfer.component';
import { CargoWagonTransferModule } from './cargo-wagon-transfer.module';

describe('CargoWagonTransferComponent', () => {
  let component: CargoWagonTransferComponent;
  let fixture: ComponentFixture<CargoWagonTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CargoWagonTransferModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoWagonTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
