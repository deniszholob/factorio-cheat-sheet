import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleFuelBonusComponent } from './vehicle-fuel-bonus.component';
import { VehicleFuelBonusModule } from './vehicle-fuel-bonus.module';

describe('VehicleFuelBonusComponent', () => {
  let component: VehicleFuelBonusComponent;
  let fixture: ComponentFixture<VehicleFuelBonusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VehicleFuelBonusModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFuelBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
