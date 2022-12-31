import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheatSheetTemplateComponent } from './cheat-sheet-template.component';
import { CheatSheetTemplateModule } from './cheat-sheet-template.module';

describe('CheatSheetTemplateComponent', () => {
  let component: CheatSheetTemplateComponent;
  let fixture: ComponentFixture<CheatSheetTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CheatSheetTemplateModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheatSheetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
