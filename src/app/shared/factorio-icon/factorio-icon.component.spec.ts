import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FactorioIconComponent } from './factorio-icon.component';
import { FactorioIconModule } from './factorio-icon.module';

describe('FactorioIconComponent', () => {
  let component: FactorioIconComponent;
  let fixture: ComponentFixture<FactorioIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FactorioIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorioIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
