import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CsCommonRatiosComponent } from './cs-common-ratios.component';
import { CsCommonRatiosModule } from './cs-common-ratios.module';

describe('CsCommonRatiosComponent', () => {
  let component: CsCommonRatiosComponent;
  let fixture: ComponentFixture<CsCommonRatiosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CsCommonRatiosModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCommonRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
