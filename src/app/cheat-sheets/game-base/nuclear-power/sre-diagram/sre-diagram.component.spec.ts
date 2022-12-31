import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SreDiagramComponent } from './sre-diagram.component';
import { SreDiagramModule } from './sre-diagram.module';

describe('SreDiagramComponent', () => {
  let component: SreDiagramComponent;
  let fixture: ComponentFixture<SreDiagramComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SreDiagramModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SreDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
