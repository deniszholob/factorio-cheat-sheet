import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductivityModulePayoffsComponent } from './productivity-module-payoffs.component';
import { ProductivityModulePayoffsModule } from './productivity-module-payoffs.module';

describe('ProductivityModulePayoffsComponent', () => {
  let component: ProductivityModulePayoffsComponent;
  let fixture: ComponentFixture<ProductivityModulePayoffsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProductivityModulePayoffsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityModulePayoffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
