import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrainColorsComponent } from './train-colors.component';
import { TrainColorsModule } from './train-colors.module';

describe('TrainColorsComponent', () => {
  let component: TrainColorsComponent;
  let fixture: ComponentFixture<TrainColorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TrainColorsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
