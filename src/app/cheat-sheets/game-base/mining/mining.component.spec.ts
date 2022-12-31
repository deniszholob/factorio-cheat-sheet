import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MiningComponent } from './mining.component';
import { MiningModule } from './mining.module';

describe('MiningComponent', () => {
  let component: MiningComponent;
  let fixture: ComponentFixture<MiningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MiningModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
