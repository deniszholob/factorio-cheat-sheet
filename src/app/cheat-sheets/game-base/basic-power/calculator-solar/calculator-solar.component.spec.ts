import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalculatorSolarComponent } from './calculator-solar.component';
import { CalculatorSolarModule } from './calculator-solar.module';

describe('CalculatorSolarComponent', () => {
  let component: CalculatorSolarComponent;
  let fixture: ComponentFixture<CalculatorSolarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CalculatorSolarModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
