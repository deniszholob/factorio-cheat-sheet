import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconRatioCompositeComponent } from './icon-ratio-composite.component';
import { IconRatioCompositeModule } from './icon-ratio-composite.module';

describe('IconRatioCompositeComponent', () => {
  let component: IconRatioCompositeComponent;
  let fixture: ComponentFixture<IconRatioCompositeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IconRatioCompositeModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRatioCompositeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
