import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SreMatrixComponent } from './sre-matrix.component';
import { SreMatrixModule } from './sre-matrix.module';

describe('SreMatrixComponent', () => {
  let component: SreMatrixComponent;
  let fixture: ComponentFixture<SreMatrixComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SreMatrixModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SreMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
