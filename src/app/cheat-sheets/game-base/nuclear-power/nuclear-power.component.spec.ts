import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuclearPowerComponent } from './nuclear-power.component';
import { NuclearPowerModule } from './nuclear-power.module';

describe('NuclearPowerComponent', () => {
  let component: NuclearPowerComponent;
  let fixture: ComponentFixture<NuclearPowerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NuclearPowerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuclearPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
