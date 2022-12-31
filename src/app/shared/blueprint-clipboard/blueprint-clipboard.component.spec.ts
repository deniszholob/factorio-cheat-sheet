import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlueprintClipboardComponent } from './blueprint-clipboard.component';
import { BlueprintClipboardModule } from './blueprint-clipboard.module';

describe('BlueprintClipboardComponent', () => {
  let component: BlueprintClipboardComponent;
  let fixture: ComponentFixture<BlueprintClipboardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BlueprintClipboardModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
