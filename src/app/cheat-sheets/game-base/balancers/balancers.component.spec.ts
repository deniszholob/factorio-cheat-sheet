import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BalancersComponent } from './balancers.component';
import { BalancersModule } from './balancers.module';

describe('BalancersComponent', () => {
  let component: BalancersComponent;
  let fixture: ComponentFixture<BalancersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BalancersModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
