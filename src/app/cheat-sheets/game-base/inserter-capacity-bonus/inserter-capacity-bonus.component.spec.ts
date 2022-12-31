import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InserterCapacityBonusComponent } from './inserter-capacity-bonus.component';
import { InserterCapacityBonusModule } from './inserter-capacity-bonus.module';

describe('InserterCapacityBonusComponent', () => {
  let component: InserterCapacityBonusComponent;
  let fixture: ComponentFixture<InserterCapacityBonusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InserterCapacityBonusModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserterCapacityBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
