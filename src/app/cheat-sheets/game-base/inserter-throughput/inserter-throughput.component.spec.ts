import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InserterThroughputComponent } from './inserter-throughput.component';
import { InserterThroughputModule } from './inserter-throughput.module';

describe('InserterThroughputComponent', () => {
  let component: InserterThroughputComponent;
  let fixture: ComponentFixture<InserterThroughputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InserterThroughputModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserterThroughputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
