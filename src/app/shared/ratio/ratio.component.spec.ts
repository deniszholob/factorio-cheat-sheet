import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RatioComponent } from './ratio.component';
import { RatioModule } from './ratio.module';

describe('RatioComponent', () => {
  let component: RatioComponent;
  let fixture: ComponentFixture<RatioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RatioModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
