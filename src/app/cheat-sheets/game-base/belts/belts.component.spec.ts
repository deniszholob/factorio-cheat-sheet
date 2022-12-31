import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BeltsComponent } from './belts.component';
import { BeltsModule } from './belts.module';

describe('BeltsComponent', () => {
  let component: BeltsComponent;
  let fixture: ComponentFixture<BeltsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BeltsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeltsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
