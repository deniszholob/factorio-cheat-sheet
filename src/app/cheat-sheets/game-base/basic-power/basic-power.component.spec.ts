import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BasicPowerComponent } from './basic-power.component';
import { BasicPowerModule } from './basic-power.module';

describe('BasicPowerComponent', () => {
  let component: BasicPowerComponent;
  let fixture: ComponentFixture<BasicPowerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BasicPowerModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
