import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModulesAndBeaconsComponent } from './modules-and-beacons.component';
import { ModulesAndBeaconsModule } from './modules-and-beacons.module';

describe('ModulesAndBeaconsComponent', () => {
  let component: ModulesAndBeaconsComponent;
  let fixture: ComponentFixture<ModulesAndBeaconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModulesAndBeaconsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesAndBeaconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
