import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UtilityModsComponent } from './utility-mods.component';
import { UtilityModsModule } from './utility-mods.module';

describe('UtilityModsComponent', () => {
  let component: UtilityModsComponent;
  let fixture: ComponentFixture<UtilityModsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UtilityModsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
