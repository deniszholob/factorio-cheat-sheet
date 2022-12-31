import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MaterialProcessingComponent } from './material-processing.component';
import { MaterialProcessingModule } from './material-processing.module';

describe('MaterialProcessingComponent', () => {
  let component: MaterialProcessingComponent;
  let fixture: ComponentFixture<MaterialProcessingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MaterialProcessingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
