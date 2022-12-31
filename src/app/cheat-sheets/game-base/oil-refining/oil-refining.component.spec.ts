import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OilRefiningComponent } from './oil-refining.component';
import { OilRefiningModule } from './oil-refining.module';

describe('OilRefiningComponent', () => {
  let component: OilRefiningComponent;
  let fixture: ComponentFixture<OilRefiningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [OilRefiningModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OilRefiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
